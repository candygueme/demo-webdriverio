describe('Element interactions', () => {

    
    it('add value and set value', async()=>{
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
    
        await expect(browser).toHaveTitleContaining('LoginPage Practise');
        const userName = $('#username'); 
        const secondUserName = $('[name="username"]'); 
     
        await userName.setValue('usernameExample');
        await secondUserName.addValue('moreExample');
     
        //await expect(userName).toHaveValueContaining('usernameExamplemoreExample');
        console.log(await userName.getValue());
        
    });

    it('select from Dropdown list', async()=>{
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
    
        await expect(browser).toHaveTitleContaining('LoginPage Practise');

        const selector = $('select.form-control');
     
        await selector.selectByIndex(1);
        console.log(await selector.getValue());

        await selector.selectByVisibleText('Student');
        console.log(await selector.getValue());

        await selector.selectByAttribute('value','consult');
        console.log(await selector.getValue());

    });

    it('get properties', async()=>{
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
    
        await expect(browser).toHaveTitleContaining('LoginPage Practise');

        const selector = $('select.form-control');
     
        const options = selector.$$('option');
        const listString = await options.map(element => element.getText());
        console.log('lista ' + listString);

        const listValues = await options.map(element => element.getValue());
        console.log('lista ' + listValues);
        
        console.log(await selector.getTagName());
        console.log(await selector.getAttribute('data-style'))
        
    });

    
    it('move To an element', async()=>{
        await browser.url('https://omayo.blogspot.com/');
        //resolved, pending, rejected
        //console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining('omayo');  
        const navigation = $('#blogsmenu');
        await navigation.moveTo();
        await browser.pause(3000);

    });

    
});
