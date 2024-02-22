console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let num = 1; num <= 100; num++){
    if(num % 2 != 0){
        console.log(num);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let num = 1; num <= 100; num++){
    if(num % 3 == 0 && num % 5 == 0){
        console.log("FIZZBUZZ")
    }else if(num % 3 == 0){
        console.log("FIZZ")
    }else if(num % 5 == 0){
        console.log("BUZZ")
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
console.log("While section:\n==========\n");

let num = 1;
while(num <= 100){
    if(num % 2 != 0){
        console.log(num);
    }
    num++;
}

num = 1;
while(num <= 100){
    if(num % 3 == 0 && num % 5 == 0){
        console.log("FIZZBUZZ")
    }else if(num % 3 == 0){
        console.log("FIZZ")
    }else if(num % 5 == 0){
        console.log("BUZZ")
    }
    num++;
}

console.log("Do While section:\n==========\n");

num = 1;
do {
    if(num % 2 != 0){
        console.log(num);
    }
    num++;
}while(num <= 100);

num = 1;
do {
    if(num % 3 == 0 && num % 5 == 0){
        console.log("FIZZBUZZ")
    }else if(num % 3 == 0){
        console.log("FIZZ")
    }else if(num % 5 == 0){
        console.log("BUZZ")
    }
    num++;
} while(num <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(num = 0; num <= n; num++){
    if(num == value){
        console.log("Found value!");
        break;
    }else if(num == n){
        console.log("Did not find value");
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(start = 1; start <= n; start++){
    if(start % fizzDivisor == 0 && start % buzzDivisor == 0){
        console.log("FIZZBUZZ")
    }else if(start % fizzDivisor == 0){
        console.log("FIZZ")
    }else if(start % buzzDivisor == 0){
        console.log("BUZZ")
    }
}