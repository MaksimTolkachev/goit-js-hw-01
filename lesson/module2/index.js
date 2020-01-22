// const arr = [1, 2, 3,];     //massive 
// const arr = new Array(1, 2, 3,);    // massive too (после последнего эл-та тоже ставить запятую)





// const arr2 = arr
// arr2[1] = "d"
// arr[1] = d //результат






// const arr = [a, 1, c, 4,];
// const temp = arr[1] 
// arr[1] = "a"       //вызов переменной

// Array.isArray(arr) //проверили что в нашей переменной хранится массив






// cпособы работы с массивами

// const arr = [2, 1, 3, 4,];
// console.log(arr.pop(arr));           //удаляет последней элемент и показывает его(тот, который удалил)
// arr.push(7)                          //добавляет переменную 7 и выводит новую длинну массива
// arr.shift()                          //удаляет первый элемент с начала и показывает его(тот, который удалил)
//arr.unshift(9)                        //добавляет 9 в начало массива и выводит новую длину масива





// const arr = new Array(10); //make massive
// console.log(arr) //view massive
// for (let i = 0; i < arr.length; i +=1) {
//     arr[i] = i * 2;
// }; //наполнили массив

// console.log(arr)
      // or
// console.table(arr)

// let i = 0;
// while ( i < arr.length) {
//     arr[i] = i * 2;
//     i += i
// }
// console.log(arr)





// const arr = [
//     [1, 2, 3,],
//     [4, 5, 6,],
//     [7, 8, 9,],
// ];
// for (let i = 0; i < arr.length; i+=1) {
//     for (let j = 0; j < arr[i].length; j +=1 ) {       // получаем все эл-ты из массива, которые делятся на 3
//         if (arr[i][j]%3===0) {
//             console.log(arr[i][j]);
//         }
//     }
// };


// const numbers = new Array(10)
// for (let i = 0; i < numbers.length; i +=1) {
//         numbers[i] = i * 2;
// };
// for (let number of numbers) {
//     console.log(number);
// }







// const text = "lorem ipsum dolor sit amet";

// console.log('string', text)

// const textArr = text.split(' ');

//  console.log(textArr)

//  console.log('string to array', textArr)

// const arrString = textArr.join('')

// console.log('array to string', arrString)





// const arr = ['a', 'c', 'b'];

// console.log(arr.indexOf('c'));  //показывает позицию заданного эл-та в массиве




// const arr = ['a', 'c', 'b'];

// console.log(arr.includes('a'))  // проверяет, есть ли указаный эл-т в массиве (true/false)



// const arr = ['a', 'c', 'b'];

// console.log(arr.slice(0, 2));   //  // копирует и показывает эл-ты в заданном промежутке, включая 0 и не включая 2й




// const arr = ['a', 'c', 'b'];

// console.log(arr.splice(1, 1));                                    //хотим с первого индекса удалить 1 элемент
// console.log(arr.splice(1, 1, 'd'));                                // добавляет вместо 1 эл-та -- d
// console.log(arr.splice(1, 0, 'd', 'e'))                                // добавляет несколько эл-тов
// console.log(arr)



// const arr = ['a', 'c', 'b'];
// const arr2 = ['d', 'e', 'f'];
// console.log(arr.concat(arr2));                              //сливает 2 массива в 1



// [].toString();                                  // получим пустую строку
// [1].toString();                                 // получим строку 1
// [1, 2, 3].toString();                           // получим одну строку "1, 2, 3"
// [1, 2, [3, 4]].toString();                      //всё равно получим одну строку "1, 2, 3, 4"




                                    //ФУНКЦИИ!!!!!!!!!!!!!!!!!!!

// function sumNumbers(num1, num2) {
//       return num1 + num2;
// }

// const firstNumber = 1;
// const secondNumber = 2;

// const sum = sumNumbers(firstNumber, secondNumber);

// console.log(sum);






// function sumNumbers(num1, num2) {
//       console.log(num1 + num2);
// }

// const firstNumber = 1;
// const secondNumber = 2;

// const sum = sumNumbers(firstNumber, secondNumber);

// console.log(sum);





// function sumNumbers(num1, num2) {
//      if(true) {
//       console.log(num1 + num2);
//       return;
//      }  
//      return num1 + num2
// }

// const firstNumber = 1;
// const secondNumber = 2;

// const sum = sumNumbers(firstNumber, secondNumber);

// console.log(sum);






// function sumNumbers(num1, num2) {
//       // return num1 + num2;        ------------///отрабоатет
//       return                        ------------------// не отработает
//             num1 + num2;
//  };
 
//  const firstNumber = 1;
//  const secondNumber = 2;
 
//  const sum = sumNumbers(firstNumber, secondNumber);
 
//  console.log(sum);






// const firstNumber = 1;
// const secondNumber = 2;

// const sum = sumNumbers(firstNumber, secondNumber);

// function sumNumbers(num1, num2) {
//       return num1 + num2;
// }

// console.log(sum);





// const firstNumber = 1;
// const secondNumber = 2;

// const sumNumbers = (num1, num2) => num1 + num2;                //стрелочная функция

// const sum = sumNumbers(firstNumber, secondNumber);

// console.log(sum);





// const firstNumber = 1;
// const secondNumber = 2;

// const sumNumbers = (num1, num2) => num1 + num2;               

// const sum = sumNumbers(firstNumber, secondNumber);

// console.log(sum);

// (function(a, b) {
//       console.log(a * b);
// }) (2*2);                                                 ///что то не так написал







// const firstNumber = 1;
// const secondNumber = 2;

// const sumNumbers = (num1, num2) => num1 + num2;               

// const sum = sumNumbers(firstNumber, secondNumber);

// console.log(sum);

// const sumNumbers = function goSum(num1, num2) {
//       return res = num1 + num2; 
//       goSum(5,3);
// } ;