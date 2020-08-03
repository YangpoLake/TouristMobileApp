import moment from 'moment';

export const dateFormat = (value: any) => {
  return moment(new Date(value)).format('yyyy-MM-dd hh:mm:ss');
}

export const ellipsis = (value: string, count: number) => {
  return value.length > count ? value.slice(0, count) + "..." : value;
}