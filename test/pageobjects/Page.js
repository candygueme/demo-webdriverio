export default class Page {

    async open() {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
    }

    async open(path) {
        await browser.url(`/${path}`)

    }

}