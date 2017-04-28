let expect = require('chai').expect;
import LoginPage from '../model/pages/login.page';

var module: any;
module.exports = function theinternet() {

    this.Given(
        /^I attempt to log in with valid details/,
        function () {
            LoginPage.open();
            LoginPage.usernameBox.setValue("tomsmith");
            LoginPage.passwordBox.setValue("SuperSecretPassword!");
            LoginPage.loginButton.click();
        } );

    this.Then(
        /^I am presented with the success message/,
        function () {
            expect(LoginPage.successMessage.getText())
                .to.contain('You logged into a secure area!')
        } );

    this.Then(
        /^the logout button is visible/,
        function () {
            expect(LoginPage.logoutButton.isVisible());
        } );
};