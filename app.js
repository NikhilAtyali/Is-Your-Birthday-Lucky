const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector(".check-number");
const outPutBox = document.querySelector(".msg");

checkNumber.addEventListener("click", checkIfBirthDateLucky);

function checkIfBirthDateLucky() {
  console.log("Lucky Birthday");
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (dob === "" && luckyNumber.value === "") {
    console.log("Please Enter Both Fields");
    outPutBox.innerText = "Please Enter Both Fields";
  } else if (luckyNumber.value === "") {
    console.log("No lucky value");
    outPutBox.innerText = "Please enter your lucky number.";
  } else if (dob === "") {
    console.log("No dob value");
    outPutBox.innerText = "Please enter your date of birth";
  } else {
    console.log("_________");
    compareValues(sum, luckyNumber.value);
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i< dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outPutBox.innerText = "Your Birthday is Lucky...";
  } else {
    outPutBox.innerText =
      "Your Birthday is not lucky,Work hard to make your own luck";
  }
}
