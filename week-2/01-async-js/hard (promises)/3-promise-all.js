/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    let a = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },t*1000)
    })
    return a;
}

function wait2(t) {
    let a = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },t*1000)
    })
    return a;

}

function wait3(t) {
    let a = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },t*1000)
    })
    return a;

}

async function calculateTime(t1, t2, t3) {
    let start = new Date().getTime();
  
    let end;
    await Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(function() {
      end = new Date().getTime();
    });
  
    return end - start;
  }

module.exports = calculateTime;
