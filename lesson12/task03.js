const rectangle = {
    width: 5,
    height: 5,

    get per() {
        return `${(this.width + this.height) * 2} см`
    },
    set per(value) {
        if (typeof(value) === 'number') {
            this.width = value;
        }
    },
    get s() {
        return `${this.width * this.height} см`
    },
    set s(value) {
        if (typeof(value) === 'number') {
            this.height = value;
        }
    }
}



console.log(rectangle.per)
console.log(rectangle.s)