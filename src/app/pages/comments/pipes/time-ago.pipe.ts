import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const now = Date.now();
    const createdAt = new Date(value).getTime();
    // Get difference as seconds
    const diff = (now - createdAt) / 1000;

    let test = 60;
    if (diff < test) {
      return `a few seconds ago`;
    }
    // To avoid operations
    let time = test;
    test *= 60;
    // Less than 1 hour
    if (diff < test) {
      let minutes = Math.floor(diff / time);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
    time = test;
    test *= 24;
    // Less than 24 hours
    if (diff < test) {
      let hours = Math.floor(diff / time);
      return `${hours} hours${hours > 1 ? 's' : ''} ago`;
    }
    time = test;
    test *= 7;
    // Less than 1 week
    if (diff < test) {
      let days = Math.floor(diff / time);
      return `${days} days${days > 1 ? 's' : ''} ago`;
    }
    time = test;
    test *= 7;
    // More than 1 week and less than a mounth
    if (diff < test) {
      let weeks = Math.floor(diff / time);
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    }
    time = test;
    test *= 30;
    // More than a mounth and less than a year
    if (diff < test) {
      let mounth = Math.floor(diff / time);
      return `${mounth} mounth${mounth > 1 ? 's' : ''} ago`;
    }

    // One year or more
    time = test;
    test *= 12;

    let years = Math.floor(diff / time);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }

}
