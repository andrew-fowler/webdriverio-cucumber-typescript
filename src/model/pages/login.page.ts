class Login_Page {

    public get usernameBox()  { return browser.element("//input[@id='username']") }
    public get passwordBox()  { return browser.element("//input[@id='password']") }
    public get loginButton()  { return browser.element("//button[@type='submit']") }
    public get logoutButton()  { return browser.element("//i[@class='icon-2x icon-signout']") }
    public get successMessage()  { return browser.element("//div[@class='flash success']") }
    public get errorMessage()  { return browser.element("//div[@class='flash error']") }

    public open(): void {
        browser.url('/login')
    }
}
const LoginPage = new Login_Page();
export default LoginPage