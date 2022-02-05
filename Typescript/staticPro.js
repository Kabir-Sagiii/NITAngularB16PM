var Mobile = /** @class */ (function () {
    function Mobile() {
        this.name = "Apple";
        this.name = "Samsung";
        Mobile.price = Mobile.price + 20000;
    }
    Mobile.prototype.print = function () {
        console.log(this.name, Mobile.price);
    };
    Mobile.price = 90000;
    return Mobile;
}());
var m1 = new Mobile();
Mobile.price = 80000;
m1.name = "onePlus";
m1.print();
var m2 = new Mobile();
m2.print();
