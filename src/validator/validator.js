const mongoose = require("mongoose");

const isValidObjectId = function (Id) {
  return mongoose.Types.ObjectId.isValid(Id);
};

const isValidRequestBody = function (requestBody) {
  return Object.keys(requestBody).length > 0;
};
const invalidInput = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  if (typeof value !== "string") return false;
  return true;
};

const isValidName = (value) => {
  const regex = /^[a-zA-Z ]+(([',. -][a-zA-Z ])?[a-zA-Z ])$/.test(value);
  return regex;
};
const isValidTitle = (value) => {
  const regex = /^[a-zA-Z ]+(([',. -][a-zA-Z ])?[a-zA-Z ])$/.test(value);
  return regex;
};

function isValidtitle(title) {
  return ["Mr", "Mrs", "Miss"].indexOf(title) !== -1;
}

const validatePhone = function (phone) {
  var re = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
  if (typeof phone == "string") {
    return re.test(phone.trim());
  } else {
    return re.test(phone);
  }
};

const isValidEmail = (email) => {
  const regex = /^([a-zA-Z0-9_.]+@[a-z]+\.[a-z]{2,3})?$/.test(email);
  return regex;
};
const isValidPassword = function (password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
  return passwordRegex.test(password);
};

const validateISBN = function (ISBN) {
  var re =
    /^(?:ISBN(?:-13)?:?\ )?(?=[0-9]{13}$|(?=(?:[0-9]+[-\ ]){4})[-\ 0-9]{17}$)97[89][-\ ]?[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9]$/;
  return re.test(ISBN.trim());
  //format (978-0-618-05676-7)
};

const validPin = function (pincode) {
  let re = /^[0-9]{6,6}$/;
  return re.test(pincode);
};
const isValidStreet = function (street) {
  let re = /^.*?\s[N]{0,1}([-a-zA-Z0-9]+)\s*\w*$/;

  return re.test(street);
};
function onlyNumbers(val) {
  if (val < 1 || val > 5) {
    return false;
  }
  val = val.toString().split("");

  for (let ele of val) {
    if (ele == ".") {
      return false;
    }
  }
  return true;
}
const regexName = function (regex) {
  let re = /^[a-zA-Z ]{2,30}$/;
  return re.test(regex);
};
module.exports = {
  isValidObjectId,
  isValidRequestBody,
  isValidName,
  invalidInput,
  isValidtitle,
  validatePhone,
  isValidEmail,
  isValidPassword,
  validateISBN,
  validPin,
  isValidStreet,
  onlyNumbers,
  regexName,
  isValidTitle,
};
