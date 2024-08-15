let currentTime = new Date();
//challenge 1
console.log(new Date());
//challenge 2
console.log(currentTime.getMilliseconds());
//challenge 3
console.log(currentTime.getDay());
//challenge 4
console.log(currentTime.getFullYear());
//challenge 5
console.log(currentTime.getMonth());
//challenge 6
let currentYear = currentTime.getFullYear();
let currentDay = "Thursday";
let currentMonth = "August";
let currentDate = "15th";

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);