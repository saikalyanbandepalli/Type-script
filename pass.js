var user = /** @class */ (function () {
    function user() {
        this.userid = "admin@gmail.com";
        this.password = "password";
    }
    Object.defineProperty(user.prototype, "_userid", {
        get: function () {
            return this.userid;
        },
        set: function (val) {
            this.userid = this.userid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(user.prototype, "pass", {
        get: function () {
            return this.password;
        },
        set: function (val) {
            this.password = this.password;
        },
        enumerable: false,
        configurable: true
    });
    user.prototype.userDetails = function () {
        return "userid:".concat(this.userid, " ").concat(this.password);
    };
    return user;
}());
var userobj = new user();
console.log(userobj._userid);
console.log(userobj.pass);
