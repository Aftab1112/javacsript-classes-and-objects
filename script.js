class User{
    constructor(name,email){
        this.name = name
        this.email = email
    }

    viewData(){
        console.log("This is only for students")
    }
}

class User2{
    constructor(name,email) {
        this.name = name
        this.email = email
    }
    viewData(){
        console.log("This is only for teachers")
    }
        
    
}

class Admin extends User2{
    constructor(name,email){
        super(name,email)
        this.name = name
        this.email = email
    }
    editData(){
        console.log("you can edit data")
    }
}
let student = new User("Aftab","abc@gmail.com")
let teacher = new User2("Teacher" ,"teacher@gmail.com")
let admin = new Admin("admin","admin@123")