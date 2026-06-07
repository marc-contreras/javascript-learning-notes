const now = new Date(78493573469);

// console.log(dateFns.isToday(now));

// formatting options
console.log(dateFns.format(now, 'yyyy'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'do'));
console.log(dateFns.format(now, 'EEEE do MMM yyyy'));

// comparing dates 
const before = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now, before));