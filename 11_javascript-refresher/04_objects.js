const aboutMe = {
    name: "Louise",
    age: 20,
    course: "BSIS-3B",
    introduce: function() {
        console.log("Hi, my name is " + this.name + " and I am " + this.age + " years old.");
    }
};

undefined
aboutMe.introduce()
//VM4163:6 Hi, my name is Louise and I am 20 years old.
undefined
aboutMe.hobby = "reading";
'reading'
aboutMe
//{name: 'Louise', age: 20, course: 'BSIS-3B', hobby: 'reading', introduce: ƒ}