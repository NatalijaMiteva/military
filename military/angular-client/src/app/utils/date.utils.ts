// import * as _ from 'lodash';
import * as moment from 'moment';

export class DateUtils {

  private static months = [
    {id: 1, name: 'January'},
    {id: 2, name: 'February'},
    {id: 3, name: 'March'},
    {id: 4, name: 'April'},
    {id: 5, name: 'May'},
    {id: 6, name: 'June'},
    {id: 7, name: 'July'},
    {id: 8, name: 'August'},
    {id: 9, name: 'September'},
    {id: 10, name: 'October'},
    {id: 11, name: 'November'},
    {id: 12, name: 'December'}
  ];

  public static getStartOfDay(date: Date): Date {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);
    return start;
  }

  public static getEndOfDay(date: Date): Date {
    const end = new Date(date);
    end.setHours(23, 59, 59, 999);
    return end;
  }

  public static serializeDate(date: Date): string {
    return date.toISOString();
  }

  static getLocalDate(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return new Date(Date.UTC(year, month, day));
  }

  static getCurrentYear() {
    return new Date().getFullYear();
  }

  static daysInMonth(month, year) {
    const days = new Date(year, month, 0).getDate();
    // return _.range(1, days + 1);
  }

  static getMonths() {
    return this.months;
  }

  static getCurrentDate() {
    return moment().format('YYYY-MM-DD');
  }

  static getStartOfMonth() {
    return moment(moment().startOf('month')).format('YYYY-MM-DD');
  }

  static getEndOfMonth() {
    return moment(moment().endOf('month')).format('YYYY-MM-DD');
  }

  static daysOfWeek() {
    return ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  }
}
