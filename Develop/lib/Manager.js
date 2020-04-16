const Employee = require("./Employee")

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getRole(){
        console.log("Manager")
    }
    buildHtmlString(string){
        
        const htmlStr = `
    <div class="col-4">
        <div class="card" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title">Manager: ${this.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Employee ID: ${this.id}</h6>
              <p class="card-text">Email: ${this.email}</p>
              <p class="card-text">Office Number: ${this.officeNumber}</p>
            </div>
          </div>
    </div>`
    const newString = string + htmlStr
    return newString

    }
}
module.exports = Manager;