var Apple = /** @class */ (function () {
    function Apple(modelName, price, customerName) {
        this.modelName = modelName;
        this.price = price;
        this.customerName = customerName;
    }
    Apple.prototype.printData = function () {
        console.log(this.modelName, this.price, this.customerName);
    };
    return Apple;
}());
var cust1 = new Apple("Iphone 7", 50000, "Sneha");
cust1.printData();
var cust2 = new Apple("Iphone 13", 100000, "Riya");
cust2.printData();
