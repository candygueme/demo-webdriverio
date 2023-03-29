import allureReporter from '@wdio/allure-reporter'
describe('This is describe example', () => {
    before('optional description', async () => {
        console.log("runs once before the first test in this block")
    });
    beforeEach('optional description', async () => {
        console.log("runs before each test in this block")

    });

    it('test 1', async () => {
        console.log("I'm test 1")
        allureReporter.addFeature('Feature')
    })

    it('test 2', async () => {
        console.log("I'm test 2")
    })

   // it.only('test case 3', async () => {
        // ...
   // });

    it.skip('test case 4', async () => {
        // ...
    }); 
    
    it('pending');


    afterEach('optional description', async () => {
        console.log("uns after each test in this block")
    });
    after('optional description', async () => {
        console.log("runs once after the last test in this block")
    });
})