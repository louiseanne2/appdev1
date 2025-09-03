console.log(2 == "2")
console.log(2 === "2")
// VM1182:1 true
// VM1182:2 false

const name = {
    name: "Louise",

    regularFunction: function() {
        console.log("This is Regular Function: " + this.name)
    },

    arrowFunction: () => {
        console.log("This is Arrow Function: " + this.name)
    }
}

// name.regularFunction()
// VM1999:8 This is Regular Function: Louise
// undefined
// name.arrowFunction()
// VM1999:12 This is Arrow Function: 
// undefined