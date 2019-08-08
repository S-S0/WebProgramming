function myFunction(f) {
    console.log("0. myFunc");
    f();
}

function oneFunc(f) {
    console.log("1. oneFunc");
    f();
}

function twoFunc(f) {
    console.log("2. twoFunc");
    f();
}

function threeFunc(f) {
    console.log("3. threeFunc");
    f();
}

myFunction(function() {
    oneFunc(function() {
        twoFunc(function() {
            threeFunc(function() {
                console.log("Pyramid Completion!");
            });
        });
    });
});

/*
Debug Console
0. myFunc
1. oneFunc
2. twoFunc
3. threeFunc
Pyramid Completion!
*/

function myThenFunction() {
    console.log("0. myThenFunc");
}

function oneThenFunc() {
    console.log("1. oneThenFunc");
}

function twoThenFunc() {
    console.log("2. twoThenFunc");
}

function threeThenFunc() {
    console.log("3. threeThenFunc");
}

const myPromise = function(myMent) {
    return new Promise(function(resolve, reject) {
        console.log(myMent)
        resolve(); // 성공했을때!
        reject(); // 실패했을때!
    })
}

myPromise("It is My Promise Obj!")
.then(myThenFunction)
.then(oneThenFunc)
.then(twoThenFunc)
.then(threeThenFunc);