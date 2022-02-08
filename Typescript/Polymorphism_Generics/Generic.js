var StudentInfo = /** @class */ (function () {
    function StudentInfo() {
    }
    StudentInfo.prototype.display = function (name, city) {
        console.log(name, city);
    };
    return StudentInfo;
}());
var s1 = new StudentInfo();
s1.display("dsf", "sad");
s1.display(12, 78);
s1.display(true, false);
