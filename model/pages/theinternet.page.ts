class theinternet {

    public get welcomeMessage()  { return browser.element('#username') }

    public open(): void {
        browser.url('/login')
    }
}
const TheInternet = new theinternet();
export default TheInternet