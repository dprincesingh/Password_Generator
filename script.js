const number = "1234567890";
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRST";
const symbol = "!@#$&";
const allchars = number + lower + upper + symbol;
const length = 12;
let Name = document.getElementById("name");
let dob = document.getElementById("dob");
let input = document.getElementById("input");
let conatiner2 = document.getElementById("container2");
let conatiner1 = document.getElementById("container1");
let input1 = "";
let input2 = "";
function submitdetail() {
  if (Name.value == "") {
    alert("Please enter your name");
  } else if (dob.value == "") {
    alert("Please enter your date of birth");
  } else {
    input1 = Name.value;
    input2 = dob.value;
    conatiner2.style.display = "flex";
    conatiner1.style.display = "none";
  }createpassword()
}

function createpassword() {
  let password = "";
  //   password += number[Math.floor(Math.random() * number.length)];
  //   password += lower[Math.floor(Math.random() * lower.length)];
  //   password += upper[Math.floor(Math.random() * upper.length)];

  password += input1;
  while (length > password.length) {
    password += input2[Math.floor(Math.random() * input2.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
  }
  return (input.value = password);
}

function copy() {
  if (input.value == "") {
    alert("First Generate password");
  } else {
    input.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
  }
}
