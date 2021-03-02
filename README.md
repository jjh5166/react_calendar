# [React Calendar App](https://jjhvcal.netlify.app/) 

A calendar app integrating local weather and facts of the day.

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project

While looking for a project I could work on that would integrate a few different API's and would be dependent on application state, I started thinking about everyday tools. Building a calendar application seemed like a great opportunity to experiment with Redux and managing asynchronous flow.

### Features

- Geo-Location - Used for requesting weather report. Location is requested initially but can be searched for and updated.
- Weather Forecast - A five day forecast is provided with temperatures and logos.
- On This Day Facts - A random fact is displayed for the selected day. Randomly selected facts from a hefty API response are stored by Redux.
- Changeable Theme - The color scheme is changeable. Why stop at light/dark modes?

### Built With

- [React](https://reactjs.org/) - The Framework

- [Redux](https://redux.js.org/) - State Management Library

- [Redux-Saga](https://redux-saga.js.org/) - Redux Asynchronous Flow Management

- [Yarn](https://yarnpkg.com/) - Package Manager

## Getting Started

### Prerequisites

* yarn
  ```sh
  npm install --global yarn
  ```

### Installation

Follow these instructions to get a dev environment up and running.

1. Clone the repo
   ```sh
   git clone https://github.com/jjh5166/react_calendar.git
   ```
2. Install yarn packages
   ```sh
   yarn
   ```
4. Get free API keys for:
  - [OpenWeather](https://openweathermap.org/)
  - [LocationIQ](https://locationiq.com/)
5. Set environment variables in file named .env at root
  - REACT_APP_LOCATION_KEY - LocationIQ  API key
  - REACT_APP_WEATHER_API_KEY - OpenWeather API key
  - REACT_APP_CORS_PROXY - Address to a CORS proxy server [You can fork this repo and deploy your own](https://github.com/Rob--W/cors-anywhere/)
6. Start development environment
  ```sh
  $ yarn start
  ```

## Contact

[John Hartnett](https://jjhv.me) - jjh5166@gmail.com

Project Link: [https://github.com/jjh5166/react_calendar](https://github.com/jjh5166/react_calendar)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgements
* [Styled Components](https://styled-components.com/)
* [Polished](https://polished.js.org/)
* [Font Awesome](https://fontawesome.com)
* [Moment](https://momentjs.com/)
