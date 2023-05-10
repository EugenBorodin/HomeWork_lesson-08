// Создаем массив имен
let names = ["Семен", "Иван", "Петр", "Татьяна"];

// Создаем массив возрастов
let ages = [18, 27, 74, 34];

// Создаем пустой массив для новых элементов
let new_array = [];

// Заполняем новый массив
for (let i = 0; i < names.length; i++) {
  let new_element = names[i] + " " + ages[i] + " лет/годов";
  new_array.push(new_element);
}

// Заполняем новый массив в обратном порядке
for (let i = names.length - 1; i >= 0; i--) {
  let new_element = names[i] + " " + ages[i] + " лет/годов";
  new_array.push(new_element);
}

// Выводим новый массив в консоль
console.log(new_array);

// test

//test2