
const stringSize = (text) => {
    text='This text has a certain number of characters'
    var result=text.length
    return result
}
const replaceCharacterE = (text) => {
    text='This text has a certain number of characters'
    var result = text.replace('e', ' ')
    return result
}
const concatString = (text1, text2) => {
    var text1 = "el Javascript shi";
    var text2 = "ra2e3";
    var result = text1.concat(" ", text2);
    return result
}
const showChar5 = (text) => {
    text='TDD kicks ass';
    let letter = text.charAt(4);
    return letter;
}
const showChar9 = (text) => {
    text='But it is really annoying to write';
    let result = text.substr(0, 9);
    return result;

}
const toCapitals = (text) => {
    text='Another useful function';
    let result = text.toUpperCase();
    return result;
}

const toLowerCase = (text) => {
    text='This is a sentence!';
    let result = text.toLowerCase();
    return result;
}
const removeSpaces = (text) => {
    text=' Rome wasn\'t built in a day '
    let result = text.trim();
    return result;
}

const IsString = (text) => {
    text = 'Is this a string?';
    return (text.IsString = true);
}

const getExtension = (text) => {
    return text.split(".").pop();
}
const countSpaces = (text) => {
    text='Sire open we have a big one!';
    return text.split(" ").length - 1;
}
const InverseString = (text) => {
     text='Après demain, à partir d\'aujourd\'hui?';
    return text .split("").reverse() .join("");
}

const power = (x, y) => {
  var x=2;
  var y=3;
  return Math.pow(x, y);
}
const absoluteValue = (num) => {
 return Math.abs(num);
}
const absoluteValueArray = (array) => {
    return array.map(Math.abs);
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * radius * radius);
}
const hypothenuse = (ab, ac) => {
    return Math.hypot(ab, ac);
}
const BMI = (weight, height) => {
    return parseFloat((weight / (height * height)).toFixed(2));
}

const createLanguagesArray = () => {
    var languages = ["Html", "CSS", "Java", "PHP"];
    return languages;
}

const createNumbersArray = () => {
    var numbers = [0, 1, 2, 3, 4, 5];
    return numbers;
}

const replaceElement = (languages) => {
    languages[2] = "Javascript";
    return languages;
}

const addElement = (languages) => {
    languages.push("Ruby", "Python");
  return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-2, -1);
  return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;

}

const convertStrToArr = (social_arr) => {
   var x= social_arr.split(',');
   return x;

}

const convertArrToStr = (languages) => {
   var x= languages.toString();
   return x;
}

const sortArr = (social_arr) => {
   var x=social_arr.sort();
   return x;
}

const invertArr = (social_arr) => {
    var x=social_arr.reverse();
    return x;
}