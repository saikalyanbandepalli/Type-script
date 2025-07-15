"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.myFullName = void 0;
exports.myFullName = "saikalyan";
var Product = /** @class */ (function () {
    function Product(id, name, prrice) {
        this.pId = id;
        this.pName = name;
        this.pPrice = prrice;
    }
    Product.prototype.productDetails = function () {
        return "Id:".concat(this.pId, " Name:").concat(this.pName, " Price:").concat(this.pPrice);
    };
    return Product;
}());
exports.Product = Product;
