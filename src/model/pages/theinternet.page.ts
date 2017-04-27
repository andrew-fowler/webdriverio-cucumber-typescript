class theinternet {

    public get welcomeMessage()  { return browser.element("//h1[contains(.,'Welcome to the Internet')]") }

    public open(): void {
        browser.url('/')
    }
}
const TheInternet = new theinternet();
export default TheInternet