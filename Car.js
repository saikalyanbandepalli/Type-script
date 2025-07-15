var Car = /** @class */ (function () {
    function Car(carModel, carPrice, carBrand) {
        this.carModel = carModel;
        this.carPrice = carPrice;
        this.carBrand = carBrand;
        Car.cars.push(this);
    }
    Object.defineProperty(Car.prototype, "carmodel", {
        get: function () {
            return this.carModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "carprice", {
        get: function () {
            return this.carPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "carbrand", {
        get: function () {
            return this.carBrand;
        },
        enumerable: false,
        configurable: true
    });
    Car.getCarCount = function () {
        return Car.cars.length;
    };
    Car.display = function () {
        this.cars.forEach(function (car, index) {
            console.log("".concat(index + 1, ". ").concat(car.carBrand, " ").concat(car.carModel, " - ").concat(car.carPrice));
        });
    };
    Car.cars = [];
    return Car;
}());
var car1 = new Car("car1", 121, "brand1");
var car2 = new Car("car2", 7487, "brand2");
var car3 = new Car("car3", 658, "brand3");
var car4 = new Car("car4", 488, "brand4");
console.log("Total cars ".concat(Car.getCarCount()));
Car.display();
