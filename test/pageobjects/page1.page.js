const PageBase = require("./pageBase")

class Page1 extends PageBase{

    get nameSelector1() {
        return $("input[name='username']")
    }
    get nameSelector2() {
        return $("//input[@type='password']")
    }

    async Login(userName, password) {
        await this.nameSelector1.setValue(userName)
        await this.nameSelector2.setValue(password)


    }


}

module.exports = new Page1()