import moment from "moment";

class Momenter {
  constructor(dateContext, updater) {
    this.dateContext = dateContext
    this.updateDateContext = updater
    this.months = moment.months()
    this.weekdaysShort = moment.weekdaysShort()
    this.weekdays = moment.weekdays()
    this.today = moment()
    this.conserveDate = this.today.format('YYYY MM')
    this.otdDate = this.dateContext.format('M[/]D')
  }
  year = () => this.dateContext.format("Y");

  month = () => this.dateContext.format("MMMM");

  daysInMonth = () => this.dateContext.daysInMonth();
  
  currentDate = () => this.dateContext.date();

  todayDate = () => this.today.date();
  
  setMonth = (month) => {
    let monthNo = this.months.indexOf(month);
    let dateContext = {...this.dateContext}
    dateContext = moment(dateContext).set("month", monthNo);
    this.updateDateContext(dateContext);
  }
  setDate = (date) => {
    let dateContext = { ...this.dateContext };
    dateContext = moment(dateContext).date(date);
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
    let dateContext = this.dateContext;
    let firstDay = moment(dateContext).startOf('month').format('d');
    return firstDay
  }
  lastDayOfMonth = () => {
    let dateContext = this.dateContext;
    let lastDay = moment(dateContext).endOf('month').format('d');
    return lastDay
  }
  onSelectChange = (e, data) => {
    this.setMonth(data);
  }
  onSelectDay = (e, data) => {
    this.setDate(data)
  }
  setYear = (year) => {
    let dateContext = { ...this.dateContext }
    dateContext = moment(dateContext).set("year", year);
    this.updateDateContext(dateContext);
  }
}
export default Momenter;