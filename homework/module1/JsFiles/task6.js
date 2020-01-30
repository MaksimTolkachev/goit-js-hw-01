let total = 0;
let input;
do { input = prompt("введите число"); 
if (input === null) {
    alert('Ничего не введено!')
}
 total += +input;
} while (input !== null);
alert(`Сумма чисел равна ${total}`);