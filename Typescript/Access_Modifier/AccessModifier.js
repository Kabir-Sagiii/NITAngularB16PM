var BrandMobile = /** @class */ (function () {
    function BrandMobile() {
        this.brandName = "Apple";
        this.price = 90000;
        this.modelName = "Iphone 12";
    }
    BrandMobile.prototype.displayDetails = function () {
        console.log(this.brandName, this.price, this.modelName);
    };
    return BrandMobile;
}());
var brand1 = new BrandMobile();
brand1.displayDetails();
