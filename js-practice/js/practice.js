//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacture, year, maxSpeed, engineVolume) {
    this.model = model
    this.manufacture = manufacture
    this.year = year //`${year} рік` - Чи можлива так записти замість аргумениа year? Виводиться нормально, провірив
    this.maxSpeed = maxSpeed
    this.engineVolume = engineVolume

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    };

    this.info = function () {
        for (const key in this) {
            if (this[key].constructor !== Function) {
                console.log(`${key}: ${this[key]}`);
            }
        }
    };

    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > 0) {
            this.maxSpeed = this.maxSpeed + newSpeed;
        }
    };

    this.changeYear = function (newValue) {
        if (newValue > 1885) {
            this.year = newValue;
        }
    };

    this.addDriver = function (driver, name, surname, age) {
        if (driver instanceof Object) {
            this.driver = {
                name: name,
                surname: surname,
                age: age
            };
        }
    };
}

let car = new Car('Qashqai', 'Nissan', 2021, 170, 2);

car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2021);
car.addDriver({}, 'Vlad', 'Ryabich', 27); // Як правильно зробити об'єкт драйвер у функції?
console.log(car);