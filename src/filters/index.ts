import * as commonFilter from './common';

const filters: { [key: string]: Function } =  {
  'common_date_format': commonFilter.dateFormat,
  'common_ellipsis': commonFilter.ellipsis
}

export default filters;