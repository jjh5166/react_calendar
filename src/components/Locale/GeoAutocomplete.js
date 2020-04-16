import React, { useState, useRef, useContext } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { debounce } from 'underscore';

import { gotCoords } from '../../actions/locale';
import { SettingsContext } from '../Settings';
import { GeoAutoContainer, GeoInput, SuggestionUL } from './styled';

const GeoAutocomplete = (props) => {
  const [userInput, setUserInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);
  const setResult = result => {
    let suggs = []
    result.data.forEach(r => suggs.push(
      {
        name: r.display_name,
        coords: {
          lat: r.lat,
          lon: r.lon
        }
      }
    ))
    setSuggestions(suggs)
  }
  const autocompleteQuery = (query) => {
    axios.get(`https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${query}`)
      .then(result => setResult(result))
      .catch(error => setError(error))
  }

  const dbAutocompleteQuery = useRef(debounce(autocompleteQuery, 1000)).current

  const handleChange = (e) => {
    setUserInput(e.target.value)
    dbAutocompleteQuery(userInput)
  }
  return (
    <GeoAutoContainer>
      <GeoInput
        type="text"
        onChange={e => handleChange(e)}
        value={userInput}
      />
      {(suggestions.length > 1) && <SuggestionList suggestions={suggestions} />}
    </GeoAutoContainer>
  )
}
const SuggestionListBase = ({ dispatch, suggestions }) => {
  const { setOpen } = useContext(SettingsContext);
  const handleClick = (e, coords) => {
    dispatch(gotCoords(coords));
    setOpen(false);
  }
  return (
    <SuggestionUL>
      {suggestions.map(s => (
        <li key={s.name} onClick={(e) => handleClick(e, s.coords)}>
          <span>{s.name}</span>
        </li>
      ))}
    </SuggestionUL>
  )
}
const SuggestionList = connect()(SuggestionListBase);

export default connect()(GeoAutocomplete);