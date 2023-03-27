import loginPage from '../pageobjects/LoginPage.js'
import {getLoginData} from '../testData/dataTest.js'

describe('Page objects model', () => {


  getLoginData.forEach(({username, password}) => { 
    it('incorrect credentials', async () => {
        await loginPage.openLogin();
        await loginPage.loginWith(username,password);
        await expect(loginPage.errorMessage).toHaveTextContaining('Incorrect');
        expect(await loginPage.errorMessage.getText()).toBe('Incorrect username/password.')
        await loginPage.errorMessage.waitForDisplayed({ timeoutMsg: 'expected for error message', reverse: true });
        await expect(loginPage.errorMessage).not.toBeDisplayed();
    });

  });
})