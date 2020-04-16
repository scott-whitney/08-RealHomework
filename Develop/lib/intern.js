const Employee = require("./Employee")

class Intern extends Employee{
    constructor(name, id, email, school, github){
        super(name, id, email)
        this.school = school
        this.github = github
    }
    getSchool(){
        console.log(this.school)
    }
    getRole(){
        console.log("Intern")
    }
    buildHtmlString(string){
        
        const htmlStr = `
    <div class="col-4">
        <div class="card" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title">Intern: ${this.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">School: ${this.school}</h6>
              <p class="card-text">Github: ${this.github}</p>
            </div>
          </div>
    </div>`
    const newString = string + htmlStr
    return newString

    }
}
module.exports = Intern;