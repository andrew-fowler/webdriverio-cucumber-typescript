import TheInternet from '../model/pages/theinternet.page';

var module: any;
module.exports = function theinternet() {

    this.Given(
        /^I load the internet/,
        function () {
            TheInternet.open();
        } );

    this.Then(
        /^the internet is loaded/,
        function () {
            TheInternet.welcomeMessage.waitForVisible();
        } );
};