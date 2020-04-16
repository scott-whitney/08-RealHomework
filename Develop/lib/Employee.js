
class Employee {
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }
    getName(){
        console.log(this.name)
        return this.name
    }
    getId(){
       var idt = this.id
        return idt
    }
    getEmail(){
        return this.email
    }
    getRole(){
        console.log("Employee")
        var employee = "Employee"
        return employee
    }
}


module.exports = Employee;