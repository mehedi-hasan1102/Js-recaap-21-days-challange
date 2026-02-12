function sum(num1, num2){
    const total = num1 + num2;
    console.log(total);
}


sum (10,20);




function sum(num1, num2){
    const total = num1 + num2;
    console.log(total, num1,num2,total);
}



sum (10,20,30,40,50);




function sum(num1, num2){
    const total = num1 + num2;
    console.log(total, num1,num2,total);
}



sum (10);



function sum(num1, num2 = 0){
    const total = num1 + num2;
    console.log(total, num1,num2,total);
}

sum (10);




function multiply(num1 = 10, num2 = 20) {
    const result = num1 * num2;
    console.log(result);
}

multiply(10);


function fullName(first, last ='') {
    const name = first + '' + last;
    console.log(name)
}


fullName('hasan')