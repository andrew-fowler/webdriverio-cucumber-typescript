class theinternet {

    public get welcomeMessage()  { return browser.element("//h1[@class='heading']") }

    public open(): void {
        browser.url('/')
    }
}
const TheInternet = new theinternet();
export default TheInternet
