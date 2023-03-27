import PageBase  from "./pageBase.js";

class LoginPage extends PageBase {

    get inputUsername() { return $('#username');}
    get inputPassword() {return $('#password');}
    get signInBtn(){ return  $('#signInBtn');}
    get errorMessage() { return $('#login-form > div.alert.alert-danger');}

    /**
     * a method to encapsule automation code to interact 
     * with the page
     * e.g login with credentials
     */
    async loginWith(username, password){
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.signInBtn.click();
    }

    async openLogin() {
        await super.open('loginpagePractise');
    }
}

export default new LoginPage();

