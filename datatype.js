console.log("welcome to typescript");
var myName = "saikalyan";
var no1 = 1000;
var n02 = 2000;
var condition1 = true, cond2 = false;
var courses = ["React", "Angular", "python"];
var breakfast = ["idli", "dosa"];
var item = ["samosa", 40];
var days;
(function (days) {
    days[days["sun"] = 0] = "sun";
    days[days["mon"] = 1] = "mon";
})(days || (days = {}));
;
var data1 = days.sun;
var information = 2;
var evenNumber = function (num) {
    var result = num % 2;
    if (result == 0) {
        return "".concat(num, " is even");
    }
    return "".concat(num, " is odd");
};
