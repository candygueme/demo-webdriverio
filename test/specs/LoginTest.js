import { getLoginData } from "../data/dataTest.js";
import LoginPage from "../pageobjects/LoginPage.js"

describe(' description suite', ()=>{


    getLoginData.forEach(({username, password}) => {
        it('incorrect credentials', async()=>{
            LoginPage.openLogin();
            LoginPage.loginWith(username,password);
            await expect(LoginPage.message).toHaveTextContaining('Incorrect');
            await expect(await LoginPage.message.getText()).toBe('Incorrect username/password.');
            await (await LoginPage.message).waitForDisplayed({reverse: true});
            await expect(LoginPage.message).not.toBeDisplayed();    
        });
    });   

})