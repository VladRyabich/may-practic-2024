/* //Координати
navigator.geolocation.getCurrentPosition(position => console.log(position));
 */

/*//Вебкамера
navigator.mediaDevices.getUserMedia({video: true})
    .then(stream => {
        let player = document.getElementById('videoplayer');
        player.srcObject = stream;
        player.play();
    });
 */

// let time = +prompt('Number 0-59');
//
// if (time >= 0 && time <= 15) {
//     console.log(1);
// } else if (time >= 16 && time <= 30) {
//     console.log(2);
// } else if (time >= 31 && time <= 45) {
//     console.log(3);
// } else if (time >= 46 && time <= 59) {
//     console.log(4)
// } else {
//     console.log('NOT A NUMBER')
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
//
// arr[arr.length] = 8;
// console.log(arr);
//
// arr[arr.length] = 9;
// console.log(arr);
//
// arr.push(10, 11, 12);
//
// console.log(arr);
//
// let string = 5 > 6 ? 'qwe' : 'tre';

// let x = 1;
// if (x === null || x === 0 || false || x === undefined) {
//     x = 'new text';
//     console.log(x);
// } else {
//     console.log('true');
// }

// let x = undefined;
// if (!x) {
//     console.log('false');
// } else {
//     console.log('true');
// }

// let day = prompt('What is a day?', 'Monday');
//
// switch (day) {
//     case 'Monday':
//     case 'monday':
//         console.log('This is Mon');
//         break;
//     case 'Tuesday':
//     case 'tuesday':
//     case 'thuesday':
//         console.log('This is Tue');
//         break;
//     case 'Wednesday':
//     case 'wednesday':
//         console.log('This is Wed');
//         break;
//     default:
//         console.log('This is not day');
// }

// let obj = {a: 1, b: 2, c: 3};
//
// let keys = Object.keys(obj);
// console.log(keys); //ключі об'єкта
//
// let values = Object.values(obj);
// console.log(values); //значення об'єкта

const usersRoster = [
    {
        name: "Іван",
        id: 1,
        age: 25,
        status: true
    },
    {
        name: "Марія",
        id: 2,
        age: 30,
        status: false
    },
    {
        name: "Олексій",
        id: 3,
        age: 20,
        status: true
    },
    {
        name: "Андрій",
        id: 4,
        age: 27,
        status: false
    },
    {
        name: "Анна",
        id: 5,
        age: 33,
        status: true
    },
    {
        name: "Петро",
        id: 6,
        age: 22,
        status: true
    },
    {
        name: "Катерина",
        id: 7,
        age: 28,
        status: false
    },
    {
        name: "Василь",
        id: 8,
        age: 40,
        status: true
    },
    {
        name: "Анна",
        id: 9,
        age: 35,
        status: true
    },
    {
        name: "Ірина",
        id: 10,
        age: 45,
        status: false
    }
];

// for (let i = 0; i < usersRoster.length; i++) {
//     const user = usersRoster[i];
//     let userValue = Object.values(user);
//     console.log(user.id, userValue);
// }

// for (const user of usersRoster) {
//   for (const userElement in user) {
//     console.log(userElement, user[userElement]);
//   }
//   console.log(' ')
// }

// let i = 0;
// while (i < usersRoster.length) {
//     let user = usersRoster[i];
//     console.log(user);
//     i++
// } // while

// document.write(
//     `
//     <div>
//         <h2>Title</h2>
//         <p>Lorem ipsum.</p>
//     </div>
//     `
// );
// document.write(
//     `
//     <div>
//         <h2>Title</h2>
//         <p>Lorem ipsum.</p>
//     </div>
//     `
// );
// document.write(
//     `
//     <div>
//         <h2>Title</h2>
//         <p>Lorem ipsum.</p>
//     </div>
//     `
// );
// document.write(
//     `
//     <div>
//         <h2>Title</h2>
//         <p>Lorem ipsum.</p>
//     </div>
//     `
// );
// document.write(
//     `
//     <div>
//         <h2>Title</h2>
//         <p>Lorem ipsum.</p>
//     </div>
//     `
// );

// function writer(title, price, text) {
//     document.write(`
//     <div>
//         <h2>${title} ${price}</h2>
//         <p>${text}</p>
//     </div>`
//     );
// }
//
// writer('milk', 123, 'some milk');

// function userFactory(id, name, age, status) {
//     let user = {
//         id: id,
//         name: name,
//         age: age,
//         status: status
//     }
//     return user;
// }
//
// let u1 = userFactory(1, 'Vlad', 27, false);
// document.write(`<div>
// //                     <p>${u1.id}</p>
// //                     <h2>${u1.name}</h2>
// //                     <h3>${u1.age} ${u1.status}</h3>
// //                 </div>`);
//
// console.log(u1);

// function calc() {
//     if (arguments.length === 2) {
//         return arguments[0] + arguments[1];
//     }else if (arguments.length === 3) {
//         return arguments[0] + arguments[1] + arguments[2];
//     }else if (arguments.length === 4) {
//         return arguments[0] + arguments[1] + arguments[2] + arguments[3];
//     } else {
//         return 'error';
//     }
// }
//
// console.log(calc(1, 2, 3, 4, 5)); //arguments

// console.log(Array.isArray(usersRoster)); //перевірка чи це масив

//
// const mixedArray = [
//     42,          // Число
//     'hello',      // Рядок
//     true,         // Булеве значення
//     7.5,          // Число
//     'world',      // Рядок
//     false,        // Булеве значення
//     2024,         // Число
//     'JavaScript', // Рядок
//     true,         // Булеве значення
//     -5,           // Число
//     'openAI',     // Рядок
//     false         // Булеве значення
// ];
//
// function littleNumber(arr) {
//     if (arr.length === 0) {
//         return NaN;
//     }
//     let minNum = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         let arrElement = arr[i];
//         if (arrElement > minNum) {
//             minNum = arrElement;
//         }
//     }
//     return minNum;
// }
//
// const randomArray = [
//     12,   // Випадкове число
//     85,   // Випадкове число
//     27,   // Випадкове число
//     49,   // Випадкове число
//     67,   // Випадкове число
//     3,    // Випадкове число
//     94,   // Випадкове число
//     36,   // Випадкове число
//     72,   // Випадкове число
//     58    // Випадкове число
// ];
//
// console.log(littleNumber(randomArray));

// let arrayInArray = [11, 22, 33, [44, 55], [66, 77, [88, 99]], 100];
//
// let innerArr = [];
// const flatter = function (array) {
//     for (const item of array) {
//         if (Array.isArray(item)) {
//             flatter(item);
//         } else {
//             innerArr.push(item);
//         }
//     }
// };
//
// flatter(arrayInArray);
// console.log(innerArr);
//
//
//
// //1
// let square = (a, b) => a * b;
// console.log(square(5, 20));
//
// //2
// let radius = (r) => Math.PI * r ** 2;
// console.log(radius(5));
//
// //3
// let squareCylinder = (r, h) => 2 * Math.PI * r ** 2 + 2 * Math.PI * r * h;
// console.log(squareCylinder(4, 7));
//
// //4
// let outputElements = (arr)=>{
//     for (const item of arr) {
//         console.log(item);
//     }
// };
// outputElements(usersRoster);
//
// //5
// let paragraphText = (text) => document.write(`<p>${text}</p>`);
// paragraphText('Vlad is this u problem!');
//
// //6
// let listSameText = (text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// };
// listSameText('Olia');
//
// //7
// let listSameTextNumber = (text, num) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// };
// listSameTextNumber('vlad', 5);
//
// //8
// // let pushElements = (item)=>{
// //     let ul = document.createElement('ul');
// //     for (let i = 0; i < ul.length; i++) {
// //         item.forEach()
// //     }
// // }
//

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// function allFn(array1, array2) {
//     let innerArr = [];
//     for (const user of array1) {
//         for (const city of array2) {
//             if (user.id === city.user_id) {
//                 innerArr[innerArr.length] = user;
//                 user.address = city;
//             }
//         }
//     }
//     return innerArr;
// }
//
// console.log(allFn(usersWithId, citiesWithId));

// let numbers = [11, 22, 33, 44];
//
// function swap(arr, index1, index2) {
//     let swapIndex = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = swapIndex;
//
//     return arr;
// }
//
// console.log(swap(numbers, 1, 2));

// let cars = [
//     {make: "Toyota", model: "Camry", year: 2022, color: "Blue", price: 25000,
//         test: 100500,company:{name:'CHINA', value: 200}},
//     {make: "Honda", model: "Civic", year: 2021, color: "Red", price: 22000},
//     {make: "Ford", model: "Mustang", year: 2023, color: "Black", price: 40000},
//     {make: "Chevrolet", model: "Silverado", year: 2022, color: "Gray", price: 35000},
//     {make: "Nissan", model: "Altima", year: 2021, color: "White", price: 23000},
//     {make: "BMW", model: "X5", year: 2022, color: "Silver", price: 60000},
//     {make: "Mercedes-Benz", model: "C-Class", year: 2023, color: "Black", price: 50000},
//     {make: "Audi", model: "A4", year: 2022, color: "Blue", price: 45000},
//     {make: "Jeep", model: "Wrangler", year: 2022, color: "Green", price: 35000},
//     {make: "Lexus", model: "RX", year: 2023, color: "Champagne", price: 55000,
//         company:{name:'VAG', value: 1000000} }
// ];
//
// const arrayList = function (arr) {
//     for (const car of arr) {
//
//         for (const carKey in car) {
//             if (typeof car[carKey] === 'object') {
//                 for (const keyObject in car[carKey]) {
//                     document.write(`<li>${keyObject}: ${car[carKey][keyObject]}</li>`)
//                 }
//             } else {
//                 document.write(`<div>${carKey}: ${car[carKey]}</div>`);
//             }
//         }
//         document.write(`<hr style="border: blueviolet solid 3px">`)
//     }
// };
//
// arrayList(cars);

 // const exchange = (sumUAH, exchange, currency = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}]) => {
//     if (currency[0]['currency'] === exchange) {
//         return sumUAH / currency[0]['value'];
//     } else if (currency[1]['currency'] === exchange) {
//         return sumUAH / currency[1]['value'];
//     }
// };
//
// console.log(exchange(10000, 'USD'));

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     if (coursesAndDurationArray[i].monthDuration > 5) {
//         console.log('super');
//     }
// }

// const iterator = function (arr, i) {
//     console.log(arr[i]);
//     i++;
//     if (i < arr.length) {
//         iterator(arr, i); // - ітератор
//     }
// };
//
// iterator(innerArr, 0);

// function* cardHolder() {
//     let cards = [
//         {value: 6, suite: 'dimont'},
//         {value: 7, suite: 'spade'},
//         {value: 8, suite: 'dimont'},
//         {value: 9, suite: 'spade'},
//     ]
//
//     for (const card of cards) {
//         yield card;
//
//     }
// }
//
// let holder = cardHolder();
//
// console.log(holder.next());
// console.log(holder.next());
// console.log(holder.next());
// console.log(holder.next());
// console.log(holder.next());\

// let userMap = usersRoster.map((value, index) => {
//     let obj = {
//         contact: index + 1,
//         name: value.name,
//         id: value.id,
//         age: value.age,
//         status: value.status
//     };
//
//     return obj;
// });
//
// console.log(userMap); //простий але довгий спосіб
//
// let userMap1 = usersRoster.map((user, index) => {
//     user.contact = index + 1;
//     return user;
// });
//
// console.log(userMap1); //розширений спосіб
//
// let userMap2 = usersRoster.map((value, index) => ({...value, contact: index + 1}));
// console.log(userMap2); //скорочений спосіб
//

// usersRoster.sort((user1, user2) => {
//     return user1.age - user2.age;
// });
// usersRoster.sort((user1, user2) => {
//     return user1.name.localeCompare(user2.name);
// }); //перетворює і порівнює аски коду літер
//
// console.log(usersRoster);

// let reduceAccumulator = usersRoster.reduce((accumulator, user) => {
//     if (user.age >= 30) {
//         accumulator[0].push(user);
//     } else {
//         accumulator[1].push(user);
//     }
//
//     return accumulator;
// }, [[], []]);
//
// // console.log(reduceAccumulator);
//
// let sorts = arr => {
//     for (const item of arr) {
//         item.sort((a, b) => {
//             return a.age - b.age;
//         });
//         console.log(item);
//     }
// };
// sorts(reduceAccumulator);

// let s = [11, 22, 33, 44, 55];
// // s.replace(11, 321);
//
// console.log(s.slice(0, 3));

// let result = 'name-vasya;age-23;gender-male'
//     .split(';')
//     .map(value => value.split('-'))
//     .reduce((accumulator, array) => {
//         accumulator[array[0]] = array[1];
//         return accumulator;
//     }, {});
//
// console.log(result); // зі сттрінги зробив об'єкт
//
// .reduce((accumulator, array) => ({...accumulator, [array[0]]: array[1]}), {}); - скорочений варіант але менш читабельний


// let arrayInArray = [11, 22, 33, [44, 55], [66, 77, [88, 99, [111, 222, 333]]], 100];
//
// let innerArray = [];
// function flatter(array) {
//     for (const item of array) {
//         if (Array.isArray(item)) {
//             flatter(item);
//         } else {
//             innerArray.push(item);
//         }
//     }
// }
//
// flatter(arrayInArray);
// console.log(innerArray);
//
// let strArr = ['hi', 'hello', 'olla', 'bonjure'];
// let str = 'Vlad Ryabich';
// console.log(str.replace('a', 'SSS'));
//
// usersRoster.every()

function User(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
}

// class UserClass {
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }

let users = [];

// let user1 = new User(1, 'Vlad', 'Ryabich', 'vlad2253@gmail.com', '+380673842720');
// let user2 = new User(2, 'Olia', 'Ryabich', 'olia2253@gmail.com', '+380673422351');
// let user3 = new User(3, 'Dasha', 'Shtok', 'dasha2253@gmail.com', '+380678349012');
// let user4 = new User(4, 'Linda', 'Zadorozhna', 'linad2253@gmail.com', '+380671123123');
// let user5 = new User(5, 'Bogdan', 'Shevchenko', 'bogdan2253@gmail.com', '+380679952845');
// let user6 = new User(6, 'Sergiy', 'Kovtun', 'serg2253@gmail.com', '+38067909357');
// let user7 = new User(7, 'Oleg', 'Kravchenko', 'olef2253@gmail.com', '+380672354312');
// let user8 = new User(8, 'Yulia', 'Mazur', 'yulia2253@gmail.com', '+380678590635');
// let user9 = new User(9, 'Andriy', 'Nimchenko', 'andre2253@gmail.com', '+380670697835');
// let user10 = new User(10, 'Bogdana', 'Odnovol', 'bodya2253@gmail.com', '+380679584736');
// Users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);

users.push(
    new User(5, 'Vlad', 'Ryabich', 'vlad2253@gmail.com', '+380673842720'),
    new User(1, 'Olia', 'Ryabich', 'olia2253@gmail.com', '+380673422351'),
    new User(8, 'Dasha', 'Shtok', 'dasha2253@gmail.com', '+380678349012'),
    new User(4, 'Linda', 'Zadorozhna', 'linad2253@gmail.com', '+380671123123'),
    new User(7, 'Bogdan', 'Shevchenko', 'bogdan2253@gmail.com', '+380679952845'),
    new User(3, 'Sergiy', 'Kovtun', 'serg2253@gmail.com', '+38067909357'),
    new User(2, 'Oleg', 'Kravchenko', 'olef2253@gmail.com', '+380672354312'),
    new User(10, 'Yulia', 'Mazur', 'yulia2253@gmail.com', '+380678590635'),
    new User(6, 'Andriy', 'Nimchenko', 'andre2253@gmail.com', '+380670697835'),
    new User(9, 'Bogdana', 'Odnovol', 'bodya2253@gmail.com', '+380679584736'));

// console.log(Users);

// let filteredUsers = users.filter(user => {
//     return user.id % 2 === 0;
// });
//
// console.log(filteredUsers); // залишили об'єкти тільки з парним id
//
// let sortedUsers = users.sort((a, b) => a.id - b.id);
// console.log(sortedUsers); // відсортовано по id


// function SuperUser(id, name, surname, email, phone, login, password) {
//     User.call(this, id, name, surname, email, phone);
//     this.login = login;
//     this.password = password;
// }
//
// console.log(new SuperUser(11, 'Vlad', 'Kolisnik', 'vlad@gmail.com', 43533214, 'WhatIsLove', 'tu75qwe13'));

class Client extends User{
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}

let clients = [];
clients.push(
    new Client(5, 'Vlad', 'Ryabich', 'vlad2253@gmail.com', '+380673842720', ['marshmallow', 'block']),
    new Client(1, 'Olia', 'Ryabich', 'olia2253@gmail.com', '+380673422351', ['one', 'two', 'three']),
    new Client(8, 'Dasha', 'Shtok', 'dasha2253@gmail.com', '+380678349012', ['big', 'testy']),
    new Client(4, 'Linda', 'Zadorozhna', 'linad2253@gmail.com', '+380671123123', ['orange', 'apple', 'kiwi', 'chery']),
    new Client(7, 'Bogdan', 'Shevchenko', 'bogdan2253@gmail.com', '+380679952845', ['potato', 'morkow']),
    new Client(3, 'Sergiy', 'Kovtun', 'serg2253@gmail.com', '+38067909357', ['home', 'tree', 'car']),
    new Client(2, 'Oleg', 'Kravchenko', 'olef2253@gmail.com', '+380672354312', ['cash', 'money']),
    new Client(10, 'Yulia', 'Mazur', 'yulia2253@gmail.com', '+380678590635', ['water', 'bottle', 'fresh']),
    new Client(6, 'Andriy', 'Nimchenko', 'andre2253@gmail.com', '+380670697835', ['shoes', 'dress']),
    new Client(9, 'Bogdana', 'Odnovol', 'bodya2253@gmail.com', '+380679584736', ['football', 'basketball', 'voleiball']));

let sortedClientsForOrderLength = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClientsForOrderLength);

function CarInformation(model, manufacture, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacture = manufacture;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${maxSpeed} на годину`)
    };


}