var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MobileBrand = /** @class */ (function () {
    function MobileBrand() {
        this.model = "Iphone 13";
        this.price = 90000;
    }
    MobileBrand.prototype.display = function () {
        console.log(this.model, this.price);
    };
    return MobileBrand;
}());
var AppleBrand = /** @class */ (function (_super) {
    __extends(AppleBrand, _super);
    function AppleBrand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppleBrand.prototype.display = function () {
        this.model = "Iphone 12";
        console.log(this.model);
    };
    return AppleBrand;
}(MobileBrand));
var A1 = new AppleBrand();
A1.display();
