//SUM
const a = [13,2,3,4,5];
let sum = a.reduce((acc, next) => acc + next);
//console.log(sum);

//MAX
//1
let max = a[0];
a.forEach(i=>{
   max = Math.max(i, max);
});
//console.log(max);
//2
let max2 = a.reduce((acc, next) => Math.max(acc, next));
//console.log(max2);

//MIN
//Три точки (…) в Javascript - spread
let numbers = [1,2,300,-1,0,-100];
//console.log(Math.min(...numbers));
//console.log(Math.max(...a));

//Srednee arifmet - average
let srednee = a.reduce((acc, next) => acc + next);
//console.log(srednee / a.length);

//превратить массив значений в ещё один массив, в котором каждое значение будет умножено на два
const euros = [29.76, 41.85, 46.5];
const doubled = euros.reduce((total, amount) => {
  total.push(amount * 2);
  return total;
}, []);
//console.log(doubled);

//склеивание массивов
var friends = [
    { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
    { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
    { name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
    ]
    
var allbooks = friends.reduce(function(prev, curr) {
    return [...prev, ...curr.books];
}, ["Alphabet"]);

//console.log(allbooks);

//SORT
//let s = a.sort((x1, x2) => x1-x2);
//console.log(s);

let people = [{
  name: 'Batman'
},
{
  name: 'Valentin'
},
{
  name: 'Alex'
}]

let s = people.sort((x1, x2) => x1.name.localeCompare(x2.name));
//console.log(s);


//MAP - – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.
//Можно использовать любые типы данных для ключей.
let john = { name: "John" };
// давайте сохраним количество посещений для каждого пользователя
let visitsCountMap = new Map();
// объект john - это ключ для значения в объекте Map
visitsCountMap.set(john, 123);
//console.log(visitsCountMap.get(john));


let map = new Map();
map.set("1", "str1").set(1, "num1").set(true, "bool1");
//console.log(map);
//console.log(map.get("1"));

//Перебор Map
let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50]
  ]);
  
  // перебор по ключам (овощи)
  for (let vegetable of recipeMap.keys()) {
    //console.log(vegetable); // огурец, помидор, лук
  }
  
  // перебор по значениям (числа)
  for (let amount of recipeMap.values()) {
    //console.log(amount); // 500, 350, 50
  }
  
  // перебор по элементам в формате [ключ, значение]
  for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
    //console.log(entry); // огурец,500 (и так далее)
  }

  recipeMap.forEach((value, key, map) => {
    //console.log(`${key}: ${value}`); // огурец: 500 и так далее
  });

  //Так что мы можем создать Map из обычного объекта следующим образом:
  let obj = {
    name: "John",
    age: 30
  };
  
  let mapObj = new Map(Object.entries(obj)); //or let obj = Object.fromEntries(map);
  
  //console.log(mapObj.get('name') ); // John

  //Есть метод Object.fromEntries, который делает противоположное: получив массив пар вида [ключ, значение], он создаёт из них объект:
  let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
  
  // prices = { banana: 1, orange: 2, meat: 4 }
  //console.log(prices.orange); // 2

//SET (Объект) – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.
let set = new Set();

let valentin = { name: "Valentin" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(valentin);
set.add(pete);
set.add(mary);
set.add(valentin);
set.add(mary);

// set хранит только 3 уникальных значения
//console.log(set.size); // 3

for (let user of set) {
    //console.log(user.name); 
}

//REVERSE
const array = [13,2,3,4,5];
let reversed = array.map((e, index, arr) => arr[arr.length - 1 - index]);
//console.log(reversed);
//Cool REVERSE method
//console.log([...array].map(array.pop, array));

//FILTER
const allValues = [13,'correct',0,9,NaN,''];
const notFalsy = allValues.filter(n => !!n)
//console.log(notFalsy);


//'use strict' - Когда она находится в начале скрипта, весь сценарий работает в «современном» режиме.
//Environment Record – объект, в котором как свойства хранятся все локальные переменные 
//(а также некоторая другая информация, такая как значение this).

//closure(Замыкание) - это функция, которая запоминает свои внешние переменные и может получить к ним доступ. 
function makeCounter() {
    let count = 0;
    return function() {
      return count++;
    };
  }
  
  let counter1 = makeCounter();
  let counter2 = makeCounter();
  
  //console.log( counter1() ); // 0
  //console.log( counter1() ); // 1
  //console.log( counter1() ); // 2
  
  //console.log( counter2() ); // 0 (независимо)

  //immediately-invoked function expressions - IIFE - что означает функцию, запускаемую сразу после объявления.
  // Пути создания IIFE
  //Во всех перечисленных случаях мы объявляем Function Expression и немедленно выполняем его.
(function() {
    //console.log("Скобки вокруг функции");
  })();
  
  (function() {
    //console.log("Скобки вокруг всего");
  }());
  
  !function() {
    //console.log("Выражение начинается с логического оператора NOT");
  }();
  
  +function() {
    //console.log("Выражение начинается с унарного плюса");
  }();

  //Сумма с помощью замыканий
  //sum(1)(2) = 3
  //sum(5)(-1) = 4

  //Чтобы вторые скобки заработали, первые – должны вернуть функцию.
  function sum2(a) {

    return function(b) {
      return a + b; // берёт "a" из внешнего лексического окружения
    };
  
  }
  
  console.log( sum2(1)(2) ); // 3
  console.log( sum2(5)(-1) ); // 4
  