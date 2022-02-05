var Employee = /** @class */ (function () {
    function Employee() {
        this.id = 101;
        this.name = "Rahul";
        this.city = "Indore";
    }
    Employee.prototype.getDetails = function () {
        console.log(this.id, this.name, this.city);
    };
    return Employee;
}());
var Emp1 = new Employee();
Emp1.name = "Sneha";
Emp1.getDetails();
