var StudentC = /** @class */ (function () {
    function StudentC() {
        this.name = "Raj";
        this.phone = 999999999;
    }
    StudentC.prototype.getDetails = function () {
        console.log(this.name);
        console.log(this.phone);
    };
    return StudentC;
}());
var s1 = new StudentC();
s1.getDetails();
