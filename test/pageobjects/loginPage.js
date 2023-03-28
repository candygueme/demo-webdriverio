import { default as Page } from "./Page.js";


class LoginPage extends Page {
    
    get inputUsername() { return $('#username');}
    get inputPassword() { return $('#password');}
    get loginBtn() {return $('#signInBtn');}
    get message() {return $('#login-form > div.alert.alert-danger');} 

    async loginWith(username, password){
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }

    async openLogin() {
        await super.open('loginpagePractise');
    }

}

export default new LoginPage();