// Function 1
const getMaxDigit = (number) => {
    const someNumber = number.toString();
    return Math.max(...someNumber);
}
  
console.log(getMaxDigit(1236));
  

// Function 2
const getPowNumber = (number, step) => {
  let result = 1;
    for (let i = 0; i<step; i++) {
        result = result * number;
     }
     return result;
   }
  
  

// Function 3
const upperLetter = (name) => {
    const part1= name[0].toUpperCase();
    const part2 = name.slice(1).toLowerCase();
    return part1 + part2;
}
  
console.log(upperLetter('vERONIKA'));


// Function 4 
const getRestOfTax = (salary) => {
    const tax = 19.5;
    return salary - (salary/100)*tax;
}
 
console.log(getRestOfTax(1000));


// Function 5
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
  
console.log(getRandomNumber(1, 10));


// Function 6 
const letterA = (letter, word) => {
  const letterLowerCase = letter.toLowerCase();
  const wordLowerCase = word.toLowerCase();
  let result = 0;
    for (let i = 0; i < word.length; i++) {
      if (wordLowerCase[i] === letterLowerCase) {
      result ++;
      }
    }
  return result;
}

console.log(letterA('а', 'Асталависта'));


// Function 7
const convert = (string) => {
    const hrn= string.slice(string.length-3, string.length).toLowerCase();
    const dollar = string.slice(string.length-1, string.length);
    const uaCurrency = string.slice(0, string.length-3);
    const usaCurrency = string.slice(0, string.length-1);
    let exchangeRate = 25;
      if (hrn === 'uah') {
        return (uaCurrency/exchangeRate) + '$';
    } else if (dollar === '$') {
        return (usaCurrency*exchangeRate) + 'грн.';
    } else {
        return "Error.Ви ввели невірне значення!";
    }
}
   
console.log(convert('2500UAH'));


// Function 8
const getRandomPassword = (number) => {
    const passLength = number || 8;
    let password = '';
    for (let i = 0; i< passLength; i++) {
       password += Math.floor(Math.random()*10);
    }
   return password;
}
  
console.log(getRandomPassword(5));
  

// Function 9
const deleteLetters = (letter, word) => {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== letter) {
    result += word[i];
    }
  }
  return result;
}

console.log(deleteLetters('l', 'blablabla'))


// Function 10
const isPalindrome = (string) => {
    let newString = ''; 
    for (let i = 0; i < string.length; i++) {
      if(string[i] !== ' ') {
        newString += string[i];
  function isPalyndrom(str) {
    const temp = str.toLowerCase();
    return temp === temp.split('').reverse().join('');
}
console.log(isPalindrome('мадам'));


// Function 11
const deleteDuplicateLetter = (string) => {
    string = string.toLowerCase();
    let result = '';
      for (let i = 0; i < string.length; i++) {
        if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
          result += string[i];
        }
     }
   return result;
}

console.log(deleteDuplicateLetter('Бисквит был очень нежный'));


document.writeln(`<p> Function 1  - виводить найбільшу цифру в числі(1236):  ${getMaxDigit(1236)}.</p>`);
document.writeln(`<p> Function 2  - обраховує степінь числа(2*10):  ${getPowNumber(2,10)}.</p>`);
document.writeln(`<p> Function 3  - форматує першу букву toUpperCase,решту букв toLowerCase (vERONIKA):${upperLetter('vERONIKA')}</p>`);
document.writeln(`<p> Function 4  - обраховує суму ЗП після оплати податку (1000): ${getRestOfTax(1000)}</p>`);
document.writeln(`<p> Function 5  - повертає рандомне число (1, 10): ${getRandomNumber(1, 10)}</p>`);
document.writeln(`<p> Function 6  - рахує,скільки раз повторюється певна буква: ('а', 'Асталависта'): ${letterA ('а', 'Асталависта')}</p>`);
document.writeln(`<p> Function 7  - конвертує гривні в долари та навпаки (2500UAH): ${convert('2500UAH')}</p>`);
document.writeln(`<p> Function 8  - генерує випадковий пароль (6): ${getRandomPassword(6)}</p>`);
document.writeln(`<p> Function 9  - видаляє задані букви зі слова'a', 'blablabla' -- result: ${deleteLetters('a', 'blablabla')}</p>`);
document.writeln(`<p> Function 10  - перевіряє чи слово є palyndrome(Мадам): ${isPalindrome('Мадам')}</p>`);
document.writeln(`<p> Function 11  - видаляє букви,які зустрічаються більше одного разу (Бисквит был очень нежный): ${deleteDuplicateLetter('Бисквит был очень нежный')}</p>`);
