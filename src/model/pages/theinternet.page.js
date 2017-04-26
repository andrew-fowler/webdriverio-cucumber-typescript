var page = require('./page');

var theInternet = Object.create(page, {
    welcomeMessage: { get: function () { return browser.element("//h1[contains(.,'Welcome to the Internet')]"); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, '');
    } },

    waitForExist: { value: function () {
        this.welcomeMessage.waitForExist();
    }}

});

module.exports = theInternet;