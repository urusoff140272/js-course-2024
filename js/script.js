// const fruits = [
//     { id: 0, name: "apple" },
//     { id: 1, name: "tomat" },
//     { id: 2, name: "cherry" },
//     { id: 3, name: "orange" },
//     { id: 4, name: "apple" },
//     { id: 5, name: "tomat" },
//     { id: 6, name: "cherry" },
//     { id: 7, name: "orange" },
// ];
// console.log(fruits);
// поиск по ключу или имени до первого совпадения
// console.log(fruits.find((item) => item.id === 2));
// console.log(fruits.find((item) => item.name === "orange"));

// по всему списку
// console.log(fruits.filter((item) => item.id > 3));
// console.log(fruits.filter((item) => item.name === "cherry"));

// перебор каждого єлемента
// console.log(fruits.map(item => item.name.length));

// FOR OF нет доступа до индекса
// let arr = [45, 85, 71, 8.61];
// for(let item of arr){
//     console.log(item);
// }
// FOR IN с доступом до индекса
// for(let key in arr){
//     console.log(key + " = " + arr[key]);
// }

// const fruits = [
//     { id: 0, name: "apple" },
//     { id: 1, name: "tomat" },
//     { id: 2, name: "cherry" },
//     { id: 3, name: "orange" },
//     { id: 4, name: "apple" },
//     { id: 5, name: "tomat" },
//     { id: 6, name: "cherry" },
//     { id: 7, name: "orange" },
// ];

// let fruitsName = [];

// for (let key in fruits){
//     fruitsName.push(fruits[key].name);
// }
// console.log(fruitsName);


// REDUCE
// let arr = [45, 85, 71, 8.61];
// сумма всех єлеметов
// console.log(arr.reduce((sum, item) => sum + item));
// среднее арифметическое
// console.log((arr.reduce((sum, item) => sum + item)) / arr.length);

// const girls = [
//     { age: 23, name: "olya" },
//     { age: 29, name: "anya" },
//     { age: 10, name: "yulla" },
//     { age: 20, name: "kat" },
// ];

// console.log((girls.reduce((sum, item) => sum + item.age, 0)) / girls.length);

// console.log((girls.reduce((sum, item) => {
//     sum += item.age;
//     return sum;
// }, 0)) / girls.length);


// FOR EACH
// girls.forEach(value => console.log(value));


// console.log(
//     girls.sort((a, b) => {
//         return a.age - b.age
//     })
// );

// let user = {
//     name: 'petya',
//     age: 25,
//     city: 'lviv',
// }

// let user4 = {
//     name: 'vasya',
//     age: 31,
//     city: 'cherkasy',
// }

// ПРОВЕРКА ПО ИМЕНИ
// console.log('age' in user);

// МАССИВ КЛЮЧЕЙ
// console.log(Object.keys(user));

// копирование обьекта ТОЛЬКО С РАЗНЫМИ КЛЮЧАМИ иначе записывается последний
// const user2 = Object.assign({}, user);
// console.log(user2);
// или
// const user3 = { ...user };
// console.log(user3);
// обьединяем обекты
// const user5 = Object.assign({}, user, user4);
// console.log(user5);

// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

