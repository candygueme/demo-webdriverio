describe('waits', () => {

    it('wait until element is displayed', async () => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');

        await expect(browser).toHaveTitleContaining('LoginPage Practise');
        const userName = $('#username');
        const password = $('#password');
        const loginBtn = $('#signInBtn');
        const message = $('#login-form > div.alert.alert-danger'); // css selector 


        await userName.setValue('usernameExample');
        await password.setValue('124');
        await loginBtn.click();

        await message.waitForDisplayed({ timeout: 5000, timeoutMsg: 'expected for error message' });
        console.log(await message.isDisplayed());
        await message.waitForDisplayed({ timeout: 5000, timeoutMsg: 'expected for error message', reverse:true });
        console.log(await message.isDisplayed());
    });

    it.only('wait until for a condition', async () => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');

        await expect(browser).toHaveTitleContaining('LoginPage Practise');
        const userName = $('#username');
        const password = $('#password');
        const loginBtn = $('#signInBtn');
        const message = $('#login-form > div.alert.alert-danger'); // css selector 

        await userName.setValue('usernameExample');
        await password.setValue('124');
        await loginBtn.click();

        await message.waitUntil(async function(){
            return (await this.getText()) === 'Incorrect username/password.';
        },
            {
                timeout: 5000,
                timeoutMsg: 'expected for error message',
        });

        console.log(await message.getText());

        // reverse param is not an optional param in waitUntil() function instead use ! to revert the result
        await message.waitUntil(async function(){
            return!((await this.getText()) === 'Incorrect username/password.');
        },
            {
                timeout: 5000,
                timeoutMsg: 'expected for error message'
        });
        console.log(await message.getText());
    })
    
})