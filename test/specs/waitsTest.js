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

        await message.waitForDisplayed({ timeout: 5000, timeoutMsg: 'expected for error message', interval: 200 });
        console.log(await message.isDisplayed());
        await message.waitForDisplayed({ timeoutMsg: 'expected for error message', reverse: true });
        console.log(await message.isDisplayed());
        await browser.pause(2000);

    });

    it('wait until for a condition', async () => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');

        await expect(browser).toHaveTitleContaining('LoginPage Practise');
        const userName = $('#username');
        const password = $('#password');
        const loginBtn = $('#signInBtn');
        const message = $('#login-form > div.alert.alert-danger'); // css selector 


        await userName.setValue('usernameExample');
        await password.setValue('124');
        await loginBtn.click();

        await message.waitUntil(async () => (await message.getText()).includes('Incorrect'),
            {
                timeout: 5000,
                timeoutMsg: 'expected for error message',
                interval: 200
            });

        console.log(await message.getText());
        await message.waitUntil(async () => (await message.getText()).includes('Incorrect'),
            {
                timeout: 5000,
                timeoutMsg: 'expected for error message', 
                reverse: true
            });
        console.log(await message.isDisplayed());
        await browser.pause(2000);
    })

})