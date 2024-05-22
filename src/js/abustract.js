"use strict";
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
var Users1 = /** @class */ (function () {
    function Users1(username, age, role) {
        this.username = username;
        this.age = age;
        this.role = role;
    }
    return Users1;
}());
var Students1 = /** @class */ (function (_super) {
    __extends(Students1, _super);
    function Students1(id, username, age, role) {
        var _this = _super.call(this, username, age, role) || this;
        _this.id = id;
        return _this;
    }
    Students1.prototype.display = function () {
        console.log("{id:".concat(this.id, ",name: ").concat(this.username, ",age: ").concat(this.age, ",role: ").concat(this.role, "}"));
    };
    return Students1;
}(Users1));
var s3 = new Students("232423asdfaasdfasdf", "swaonsaha", 34, "student");
console.log(s1);
