import moment from "moment";

class Momenter {
  constructor(dateContext, updater) {
    this.dateContext = dateContext;
    this.updateDateContext = updater;
    this.months = moment.months();
    this.weekdaysShort = moment.weekdaysShort();
  }
  year = () => {
    return this.dateContext.format("Y");
  }
  month = () => {
    return this.dateContext.format("MMMM");
  }
  months = () => {
    return moment.months()
  }
  daysInMonth = () => {
    return this.dateContext.daysInMonth();
  }
  currentDate = () => {
    return this.dateContext.get("date");
  }
  setMonth = (month) => {
    let monthNo = this.months.indexOf(month);
    let dateContext = {...this.dateContext}
    dateContext = moment(dateContext).set("month", monthNo);
    this.updateDateContext(dateContext);
  }
  nextMonth = () => {
    let dateContext = {...this.dateContext}
    dateContext = moment(dateContext).add(1, "month");
    this.updateDateContext(dateContext);
  }
  prevMonth = () => {
    let dateContext = { ...this.dateContext }
    dateContext = moment(dateContext).subtract(1, "month");
    this.updateDateContext(dateContext);
  }
  firstDayOfMonth = () => {
    let dateContext = this.date;
    let firstDay = moment(dateContext).startOf('month').format('d');
    return firstDay
  }
  daysInMonth = () => {
    return this.dateContext.daysInMonth();
  }
  currentDate = () => {
    return this.dateContext.get("date");
  }
  onSelectChange = (e, data) => {
    this.setMonth(data);
    // this.props.onMonthChange && this.props.onMonthChange();
  }
  setYear = (year) => {
    let dateContext = { ...this.dateContext }
    dateContext = moment(dateContext).set("year", year);
    this.updateDateContext(dateContext);
  }
}
export default Momenter;