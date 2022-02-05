var Brand = /** @class */ (function () {
    function Brand() {
        this.model = "Iphone 13"; //Instance Property
    }
    Brand.prototype.printData = function () {
        console.log(Brand.brandName, this.model);
    };
    Brand.brandName = "Apple"; // Static Property
    return Brand;
}());
var b1 = new Brand();
b1.printData();
b1.model = "Iphone 7";
Brand.brandName = "one plus";
b1.printData();
var b2 = new Brand();
b2.printData();
b2.model = "Iphone 11";
b2.printData();
