const Employee = require("./Employee")

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
    }
    getGitHub(){

    }
    getRole(){
        console.log("Engineer")
    }
    buildHtmlString(string){
        
        const htmlStr = `
    <div class="col-12">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Engineer: ${this.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Employee ID: ${this.id}</h6>
              <p class="card-text">Email: ${this.email}</p>
              <p class="card-text">Github: ${this.github}</p>
            </div>
          </div>
    </div>`
    const newString = string + htmlStr
    return newString

    }
}
module.exports = Engineer;