const chileCost = 250;
const australiaCost = 170;
const jamaikaost = 120;
const chinaCost = 100;
const indiaCost = 80;
const chile = "Чили";
const australia = "Австралию";
const jamaika = "Ямайку";
const china = "Китай";
const india = "Индию";
let country = prompt("Введите название страны");
if (country === null) {
  alert("Отменено пользователем!")
};
switch (country.toLowerCase()) {
  case "китай":
    alert(`Доставка в ${china} будет стоить ${chinaCost} кредитов`);
    break;
  case "чили":
    alert(`Доставка в ${chile} будет стоить ${chileCost} кредитов`);
    break;
  case "австралия":
    alert(`Доставка в ${australia} будет стоить ${australiaCost} кредитов`);
    break;
  case "ямайка":
    alert(`Доставка в ${jamaika} будет стоить ${jamaikaost} кредитов`);
    break;
  case "индия":
    alert(`Доставка в ${india} будет стоить ${indiaCost} кредитов`);
    break;
  default:
    alert(`В вашей стране доставка недоступна`);
}
