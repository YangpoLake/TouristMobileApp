import * as commonFilter from './common';

const filters: { [key: string]: Function } =  {
  'common_date_format': commonFilter.dateFormat
}

export default filters;