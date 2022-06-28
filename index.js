class Fun{
    constructor(){
        this.birthYear = new Date().getFullYear()
    }
    retAge(birthYear){
        return this.birthYear - birthYear
    }

    calculateAge(birthYear){
        const john = {
            fullName: "John William",
            birthYear: 1990,
        } 
        const steven = {
            fullName: "Steven Smith",
            birthYear: 1997,
        }

        john.age = this.retAge(john.birthYear)
        steven.age = this.retAge(steven.birthYear)
        console.log(john, steven)

        if(john.age > steven.age){
            console.log(`${john.fullName} is ${john.age} older than ${steven.fullName}`)
            return `${john.fullName} is ${john.age} older than ${steven.fullName}`
        }else{
            return `${steven.fullName} is ${steven.age} older than ${john.fullName}`
        }
    }
}
const fun = new Fun()
fun.calculateAge()