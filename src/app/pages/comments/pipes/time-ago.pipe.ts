import { Pipe, PipeTransform } from '@angular/core';

const SECOND = 1000,
      MINUTE = 60 * SECOND,
      HOUR = 60 * MINUTE,
      DAY = 24 * HOUR,
      WEEK = 7 * DAY,
      YEAR = 365 * DAY,
      MONTH = YEAR / 12;

const FORMAT: any[] = [
  [ 0.5 * MINUTE, 'just now' ],
  [ 2 * MINUTE, '1 minute ago' ],
  [ HOUR, 'minutes ago', MINUTE ],
  [ 2 * HOUR, '1 hour ago' ],
  [ DAY, 'hours ago', HOUR ],
  [ 2 * DAY, '1 day ago' ],
  [ WEEK, 'days ago', DAY ],
  [ 2 * WEEK, '1 week ago'],
  [ MONTH, 'weeks ago', WEEK ],
  [ 2 * MONTH, '1 month ago' ],
  [ YEAR, 'months ago', MONTH ],
  [ 2 * YEAR, '1 year ago' ],
  [ Number.MAX_VALUE, 'years ago', YEAR ]
];

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const now = Date.now();
    const createdAt = new Date(value).getTime();

    // Get difference as seconds
    const diff = (now - createdAt);

    for(let format of FORMAT ){
      if (diff < format[0]) {
        return format[2] === undefined ? format[1] : Math.floor(diff / format[2]) + ' ' + format[1]
      }
    }
  }
}
