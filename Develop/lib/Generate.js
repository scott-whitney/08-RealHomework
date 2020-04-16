const fs = require('fs')


class Generate {
    constructor(top, middle, bottom){
        this.top = top
        this.middle = middle
        this.bottom = bottom
    }
    generate(){
        this.top += this.middle
        this.top += this.bottom

        fs.writeFile('indexTest.html', this.top, function(err){
            if (err) {
                return console.log(err);
            }
            console.log('Successfully Generated!')
        })

        return this.top
    }
}

module.exports = Generate;