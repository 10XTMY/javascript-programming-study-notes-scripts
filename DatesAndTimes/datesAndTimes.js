// import { format, formatDistance, formatRelative, subDays } from 'date-fns'
const before = new Date('February 1 2019 7:30:59');
const now = new Date()

console.log(before);
console.log(now);

console.log(now.getTime(), before.getTime()); // returns milliseconds since 1 jan 1970 and provided time
const diff = now.getTime() - before.getTime();
console.log(diff);
// convert to days
const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
console.log(mins, hours, days);
console.log(`the blog was written ${days} days ago`);


// year, month, day, time
console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth()); // integer (january = 0 -> december = 11)
console.log('getDate:', now.getDate()); // integer day of the month
console.log('getDay:', now.getMonth());  // integer position of the week (sunday = 0 -> sat = 6)
console.log('getHours:', now.getHours());  // integer
console.log('getMinutes:', now.getMinutes());  // integer
console.log('getSeconds:', now.getSeconds());  // integer

// convert timestamp to date
const timeStamp = 1675938474990;
console.log(new Date(timeStamp));

// formatting etc using dateFns (import in npm or yarn)
