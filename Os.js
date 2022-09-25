const os = require('os');

console.log(os.userInfo())

const duration = os.uptime();

const hrs = Math.floor(duration / 3600);
const days = Math.floor(hrs / 24);
const remainingHrs = duration % 3600;

const mins = Math.floor(remainingHrs/ 60);
const sec = remainingHrs % 60;
console.log("System is running from past " + hrs + " HOURS " + mins + " MINUTES " + sec +" SECONDS " );