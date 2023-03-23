describe("test suite description - Rahul Shetty Academy login", ()=>{

    it('selector by Id and cssSelector', async()=>{
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        //resolved, pending, rejected
        console.log(await browser.getTitle());
        const userName = $('#username');     
        const password = $('#password'); 
        const loginBtn = $('#signInBtn');
        const message = $('#login-form > div.alert.alert-danger'); // css selector 
        const selector = $('select.form-control');
  
        await userName.setValue('usernameExample');
        await password.setValue('124');
        await loginBtn.click();

        await expect(message).toHaveTextContaining('Incorrect');
    });

    it('selector by Id and cssSelector', async()=>{
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        //resolved, pending, rejected
        console.log(await browser.getTitle());
        const userName = $('#username');     
        const password = $('#password'); 
        const selector = $('select.form-control');
     
        const selectOption = await selector.$$('option')[2].getText(); //chanaible locators
        await userName.setValue('usernameExample');
        await password.setValue('124');
    
        await selector.click();
        console.log('option is: ' + selectOption);
       
    });

    
    it('selector by className and partial Text', async() => {
        const radioBtnAdmin = $('.radiotextsty*=Ad');
        console.log(await radioBtnAdmin.getText());
    });

    it('selector by link', async() => {
        const link = $('=terms and conditions');// partial link -> const link = $('*=terms')
        console.log(await link.getText());
        const attValue = await link.getAttribute('href');
        console.log('attribute value is: ' + attValue )

    });
    

    it('element is existing', async()=>{
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');

        const message = $('#login-form > div.alert.alert-danger'); //other examples #login-form .alert

        
        const isExisting = await message.isExisting();
        const isDisplayed = await message.isDisplayed();
        console.log('is existing? ' + isExisting + ' is displayed?: ' + isDisplayed);
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
        const isExisting = await message.isExisting();
        const isDisplayed = await message.isDisplayed();
        console.log('is existing? ' + isExisting + ' is displayed?: ' + isDisplayed);
    });
    
    it('radio Button is selected', async()=>{
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        await expect(browser).toHaveTitleContaining('LoginPage Practise');
   
        const radioButtonOptions = $$('#usertype');

        
        const isSelected = await radioButtonOptions[0].isSelected();
        console.log('admin es selected? ' + isSelected);

        const isUser = await radioButtonOptions[1].isSelected();
        console.log('student es selected? ' + isUser);
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

