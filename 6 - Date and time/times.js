// dates & times
const now = new Date();

console.log(now);
console.log(typeof now);

// years, months, day, times
console.log('getFullyear', now.getFullYear());
console.log('getmonth', now.getMonth());
console.log('getDate', now.getDate());
console.log('getDay', now.getDay());
console.log('getHOurs', now.getHours());
console.log('getMinutes', now.getMinutes());
console.log('getSeconds', now.getSeconds());

// timestamps
console.log('timestamps:', now.getTime() );

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());