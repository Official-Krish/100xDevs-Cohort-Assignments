// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let n = 0;
function call_timeout() {
  setTimeout(function() {
    count();
  }, 1000);
}
function count() {
  n++;
  console.log(n);
  call_timeout();
}

count();






































































// (Hint: setTimeout)