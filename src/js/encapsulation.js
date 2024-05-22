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
// public, private, protected, readonly
var Users2 = /** @class */ (function () {
    function Users2(username, age, role) {
        this.username = username;
        this.age = age;
        this.role = role;
    }
    Users2.prototype.display = function () {
        console.log("{name: ".concat(this.username, ",age: ").concat(this.age, ",role: ").concat(this.role, "}"));
    };
    return Users2;
}());
var Students2 = /** @class */ (function (_super) {
    __extends(Students2, _super);
    function Students2(id, username, age, role) {
        var _this = _super.call(this, username, age, role) || this;
        _this.id = id;
        return _this;
    }
    Students2.prototype.display = function () {
        console.log("{id:".concat(this.id, ",name: ").concat(this.username, ",age: ").concat(this.age, ",role: ").concat(this.role, "}"));
    };
    Object.defineProperty(Students2.prototype, "userIdSet", {
        set: function (value) {
            this.id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Students2.prototype, "userIdGet", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    return Students2;
}(Users2));
var s4 = new Students2("232423asdfaasdfasdf", "swaonsaha", 34, "student");
s4.userIdSet = "0272777700005101102";
console.log(s4.userIdGet);
