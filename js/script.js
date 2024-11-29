// обьект
// let user ={};

// user.name = 'petya';
// user.age = 25;
// user.city = 'lviv';

// console.log(user);

// for (key in user) {
//     console.log(key);
//     console.log(user[key]);


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
// console.log(fruits);
// поиск по ключу или имени до первого совпадения
// console.log(fruits.find((item) => item.id === 2));
// console.log(fruits.find((item) => item.name === "orange"));

// по всему списку
// console.log(fruits.filter((item) => item.id > 3));
// console.log(fruits.filter((item) => item.name === "cherry"));

// перебор каждого єлемента
// console.log(fruits.map(item => item.name.length));

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


// Обращение к обекту ЕСЛИ МОЖЕТ НЕ БЫТЬ КЛЮЧА!!!!!!
// let user = {
//     name: 'petya',
//     age: 25,
//     city: 'lviv',
// }

// let user1 = {
//     name: 'vasya',
//     age: 31,
// }
// console.log(user.adress?.city);
// console.log(user1.adress?.city);

// поличаем переменные из обьекта
// const name = user.name;
// const age = user.age;
// const city = user.city;
// console.log("name= " + name, "age= " + age, "city= " + city);
// ИЛИ
// const {
//     name,
//     age,
//     city,
// } = user;

// console.log("name= " + name, "age= " + age, "city= " + city);

// ПЕРЕДАЧА В ФУНКСИЮ ОБЬЕКТА
// const showAdress = ({ city, street, houseNumber, appartmentNumber }) => {
//     console.log(`
//         Адрес:
//         г.${city},
//         ул.${street},
//         д.${houseNumber},
//         кв.${appartmentNumber}
//         `
//     );
// }

// showAdress({
//     city: "Cherkasy",
//     street: "Rustavi",
//     houseNumber: 17,
//     appartmentNumber: 15
// })

// ПЕРЕИМЕНОВАНИЕ ПЕРЕМЕННЫХ
// const user = {
//     name: "Andrey",
//     city: "lviv"
// }
// const admin = {
//     name: "Boss",
// }
// const { name: userName } = user;
// const { name: adminName } = admin;
// console.log(`
//     user name = ${userName}
//     admin name = ${adminName}
// `
// );

// зрачения по умолчанию
// const { city = 'не указан'} = user;
// console.log('Город', city);
// или
// const { city = 'не указан'} = admin;
// console.log('Город', city);


// ОСТАТОЧНЫЕ ПАРАМЕТРЫ
// const showUser = (user) => {
//     const { name, age, city, ...other } = user;

//     console.log(`
//         Имя = ${name}
//         Вщзраст = ${age}
//         Город = ${city}
//         `);

//     console.log(
//         'Дополнительная информация: ', other
//     );
// };

// showUser({
//     name: 'Andrey',
//     age: 52,
//     city: 'Lviv',
//     work: 'Radiotochka',
// })
