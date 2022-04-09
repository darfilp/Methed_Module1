const user = {
    name: "Daria",
    age: 22,

    show() {
        console.log([this.name, this.age])
    },

    get myName() { //новое свойство, но при этом его нет в объекте
        return `${this.name}`
    },

    set myName(str) { //свойство появится если изменить get 
        [this.name, this.age] = str.split(" "); 
    }
}

console.log(user)

user.myName = 'Alice Cooper'

console.log(user.myName) //Daria
console.log(user.name)
console.log(user.age)

console.log(user)
//user.show()
