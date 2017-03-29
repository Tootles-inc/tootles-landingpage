"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var signup_service_1 = require("../../services/signup.service");
// CREATE A SIGNUP
console.log('hit 1');
var SignupsComponent = (function () {
    function SignupsComponent(signupService) {
        var _this = this;
        this.signupService = signupService;
        console.log('hitting constructor signupservice');
        this.signupService.getSignups()
            .subscribe(function (signups) {
            _this.signups = signups;
        });
    }
    return SignupsComponent;
}());
SignupsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'signups',
        templateUrl: 'signups.component.html'
    }),
    __metadata("design:paramtypes", [signup_service_1.SignupService])
], SignupsComponent);
exports.SignupsComponent = SignupsComponent;
//# sourceMappingURL=signups.component.js.map