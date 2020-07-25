import moment from 'moment';

export const dateFormat = (value: any) => {
  return moment(new Date(value)).format('yyyy-MM-dd hh:mm:ss');
}
