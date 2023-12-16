/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t1) {
    let a = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },t1*1000)
    })
    return a;
}

function wait2(t2) {
    let a = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },t2*1000)
    })
    return a;

}

function wait3(t3) {
    let a = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },t3*1000)
    })
    return a;

}

async function calculateTime(t1, t2, t3) {
    let start = new Date().getTime();
    let end;
    await wait1(t1).then(function(){
        wait2(t2);
    }).then(function(){
        wait2(t3);
    }).then(function(){
        end = new Date().getTime();
    })
    return end - start;
  }

module.exports = calculateTime;
