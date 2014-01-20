//part 1

var number = 7;

if (number > 5) {
  console.log("Javascript is awesome!")
};

//part 2

var i = 0;

while (i < 10) {
  console.log(i += 1);
}

//part 3
for (var i = 1; i <= 10; i += 1) {
  console.log(i);
}


//part 4

var cheese = "gouda";

if (cheese.length > 8) {
  console.log("That must be some stinky cheese!");
} else { 
  console.log("That cheese might taste nice on some pizza!");
};

//part 5

var pizzaSize = 19;

if (pizzaSize <= 8) {
  console.log("This pizza is just too small!");
} if (pizzaSize >= 9 && pizzaSize <= 18) { for (var i = 0; i < 5; i++) {
  console.log(pizzaSize);
  } 
} if (pizzaSize > 18) { for (var i = 0; i < 3; i++) {
  console.log(pizzaSize);
  }
};

//part 6

var picard = "Make it so.";
var reverse = "";

for (var i = picard.length -1; i >= 0; i -= 1) {
  if (picard[i] !== "a" && picard[i] !== "e" && picard[i] !== "i" && picard[i] !== "o" && picard[i] !== "u") {
    reverse += picard[i];
  }
};

console.log(reverse)

//part 7

for (var i = 1; i <= 20; i += 1) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
};


