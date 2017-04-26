/**
 * Created by andrewfowler on 1/23/17.
 */
function Page () {
}

Page.prototype.open = function (path) {
    browser.url('/' + path)
};

module.exports = new Page();