describe("test suite description - Rahul Shetty Academy login", ()=>{

    it('selector by Id and cssSelector', async()=>{
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        //resolved, pending, rejected
        //console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining('LoginPage Practise');
        const userName = $('#username');     
        const password = $('#password');
        const loginBtn = $('#signInBtn');
        const message = $('#login-form > div.alert.alert-danger'); // css selector 
        const selector = $('select.form-control');
     
        const selectOption = await selector.$$('option')[2].getText();
        await userName.setValue('usernameExample');
       
        await password.setValue('124');
        await loginBtn.click();
        await expect(message).toHaveTextContaining('Incorrect');
        selector.click();
        console.log('opcion es: ' + selectOption);
        expect(selectOption).toBe('Consultant');
        
        message.isExisting();
    });

    
    it('selector by className and partial Text', async() => {

        const radioBtnAdmin = $('.radiotextsty*=Ad');
        await expect(radioBtnAdmin).toHaveText('Admin');

    });

    it('selector by link', async() => {
        const link = $('=terms and conditions');// partial link -> const link = $('*=terms')
        await expect(link).toHaveText('terms and conditions')
        await expect(link).toHaveAttribute('href', '#')

    });
    

    it('element is existing', async()=>{
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        await expect(browser).toHaveTitleContaining('LoginPage Practise');
   
        const message = $('#login-form > div.alert.alert-danger'); //other examples #login-form .alert

        
        const isExisting = await message.isExisting();
        const isDisplayed = await message.isDisplayed();
        console.log('elemento existe? ' + isExisting + ' es displayed: ' + isDisplayed);
    });

    it('is displayed and existing message', async()=> {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        //resolved, pending, rejected
        //console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining('LoginPage Practise');
        const userName = $('#username');     
        const password = $('#password');
        const loginBtn = $('#signInBtn');
        const message = $('#login-form > div.alert.alert-danger');
   
        await userName.setValue('usernameExample');
        await password.setValue('124');
        await loginBtn.click();

        await expect(message).toHaveTextContaining('Incorrect');
        const isDisplayed = await message.isDisplayed();
        console.log('elemento displayed? ' + isDisplayed);
    });
    
    it('radio Button is selected', async()=>{
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        await expect(browser).toHaveTitleContaining('LoginPage Practise');
   
        const radioButtonOptions = $$('#usertype');

        
        const isSelected = await radioButtonOptions[0].isSelected();
        console.log('admin es seleccionado? ' + isSelected);

        const isUser = await radioButtonOptions[1].isSelected();
        console.log('user es seleccionado? ' + isUser);
    });

    it('description is focused', async()=>{
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        await expect(browser).toHaveTitleContaining('LoginPage Practise');
   
        const userName = $('#username');

        await userName.click();
        const isFocused = await userName.isFocused();
        console.log('elemento es focused? ' + isFocused);
    });


});

