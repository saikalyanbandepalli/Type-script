var Temperature = /** @class */ (function () {
    function Temperature(celsius) {
        this._celsius = 0;
        this.celsius = celsius;
    }
    Object.defineProperty(Temperature.prototype, "celsius", {
        set: function (value) {
            this._celsius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Temperature.prototype, "fahrenheit", {
        get: function () {
            return this._celsius * 9 / 5 + 32;
        },
        enumerable: false,
        configurable: true
    });
    Temperature.prototype.show = function () {
        console.log("Celsius: ".concat(this._celsius));
        console.log("Fahrenheit: ".concat(this.fahrenheit));
    };
    return Temperature;
}());
var temp1 = new Temperature(25);
temp1.show();
temp1.celsius = -300;
temp1.celsius = 100;
temp1.show();
