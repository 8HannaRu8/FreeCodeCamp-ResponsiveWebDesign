function randomRange(ourMin, ourMax) {
return Math.floor(Math.random() * (ourMax - ourMin + 1))+ ourMin;
}
randomRange(1,9);

var ourRandom = randomRange(5,15);
console.log(ourRandom);



function checkEqual(a,b) {
if(a===b) {
return true;
}
else {
return false;
}
}
console.log(checkEqual(1,2));



Turnary operator:
function checkEqual(a,b) {
return a === b ? true: false;     or just return a === b;
}
console.log(checkEqual(1,2));

const arr1 = ['JAN', 'FEB', 'MAR'];
let arr2;
(function() {
arr2 = [...arr1];
arr1[0] = 'potato'
}) ();
console.log(arr2);
