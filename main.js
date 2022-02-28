
function loadData(){
    console.log("Loading from the server!")
}

function sayHelloToAPerson(name){
    console.log("Hi there," + name);
}

function sum(a,b){
    let results = a + b;
    console.log(results);
    return results;
}

function testValidation(){
    let num= 1;
    if(num < 10) {
        console.log("Error, num to low");
        return;
    }
    console.log("saved")
}

function printSomeNumbers(){
    for(let i=1; i < 21; i++) {
        if(i != 7 && i != 13) {
            console.log(i);
        }
    }
}

function sumSomeNumbers(){
    let list= [12,32,12,456,12,87,345,56,3,7,5678,2,4587,243,09,234,-3,4567,-9,0];
    let total= 0;
    let pivot= list[0];
    let smallest= list[0];

    for(let i=0; i< list.length; i++){
        let num= list[i];
        total += num;
        if(num > pivot) {
            pivot = num;
        }
        if(num < smallest) {
            smallest = num;
        }
    }
    console.log("sum: ", total);
    console.log("biggest: ", pivot);
    console.log("smallest: ", smallest);
}

function init(){
    console.log("DOM ready");
    sayHelloToAPerson("Bob");
    sayHelloToAPerson("Marie");
    sayHelloToAPerson("Rick");

    sum(21, 21);
    sum(12, 121233)

    printSomeNumbers();
    sumSomeNumbers();
};


// when the brower finshes rendering all the html
window.onload = init; 