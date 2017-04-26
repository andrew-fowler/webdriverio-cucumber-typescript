var expect = require('chai').expect;

import theinternet from '../model/pages/theinternet.page';

module.exports = function login() {

    this.Given(
        /^I load the internet/,
        function () {
            browser.url(browser.options.baseUrl);
            loginpage.waitForExist();
        } );

    this. When(
        /^I attempt to login with incorrect credentials/,
        function(){
            loginpage.username.setValue('test@test.com');
            loginpage.password.setValue('test@test.com');
            loginpage.loginButton.click();
        } );

    this. When(
        /^I attempt to login with correct credentials/,
        function(){
            loginpage.username.setValue('test43@sw.com');
            loginpage.password.setValue('test');
            loginpage.loginButton.click();
        } );

    this.Then(
        /^the login failure tooltip is displayed/,
        function() {
            expect(loginpage.tooltip.isVisible()).to.be.equal(true, "The login failure tooltip wasn't displayed as expected.")
            expect(loginpage.tooltip.getText()).to.contain('Sorry, we don’t recognise the details you’ve entered',
                "The tooltip didn't contain the expected text");
        }
    );

    this.Then(
        /^the employer dashboard is displayed/,
        function() {
            expect(dashboard.isLoaded()).to.be.equal(true, "The dashboard wasn't loaded as expected.");
        }
    );
};
