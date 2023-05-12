// 1

if (value) {
  console.log(true);
} else if (value === false) {
  console.log("The boolean value false is falsy");
} else if (value === null) {
  console.log("The null value is falsy");
} else if (value === undefined) {
  console.log("undefined is falsy");
} else if (value === 0) {
  console.log("The number 0 is falsy (the only falsy number)");
} else if (value === "") {
  console.log("The empty string is falsy (the only falsy string)");
}

// 2

function calculateSum(num1, num2) {
  let sum = num1 + num2;

  if (sum < -1000) {
    console.log(sum + " is less than -1000");
  } else if (sum < 0) {
    console.log(sum + " is a negative number");
  } else if (sum === 0) {
    console.log(sum + " is equal to 0");
  } else if (sum <= 100) {
    console.log(sum + " is larger than 0");
  } else {
    console.log(sum + " is greater than 100");
  }
}

calculateSum(50, 51);
calculateSum(99, -2);
calculateSum(0, 101);
calculateSum(500, -500);
calculateSum(-1000, 0);
calculateSum(-5, 0);

// 3

function greaterThanFive(num1, num2) {
  if (num1 >= 5 && num2 >= 5) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkValues(5, 6);
checkValues(10, 11);
checkValues(0, 0);
checkValues(1000, -1000);
checkValues(6, 4);
checkValues(5, 5);

// 4

function comparePairs(paramA, paramB, paramC, paramD) {
  if (paramA === paramB || paramC === paramD) {
    console.log(true);
  } else {
    console.log(false);
  }
}

comparePairs("cat", "cat", 6, "6");
comparePairs("five", 5, "dog", "dawg");
comparePairs(0, false, "horse", "horse");
comparePairs("eight", "eight", "ate", "ate");
comparePairs(11, "eleven", "four", "for");
comparePairs("cake", "cake", "pie", "pie");
