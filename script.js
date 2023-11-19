//1 Question
class Movie{
    constructor(title, studio, rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    get ratingMovie(){
        return this.rating
    }
}
const Movie1 = new Movie("")
const Movie2 = new Movie("Casino Royale","Eon Productions","PG­13")
console.log(Movie1.rating);
console.log(Movie2.title);
console.log(Movie2.studio);
console.log(Movie2.rating);
//2 Question
class Circle{
    constructor(radius , colour){
        this.radius=radius;
        this.colour=colour;
    }
    get radiusCircle(){
        return this.radius;
    }
    set radiusCircle(radius){
        this.radius=radius;
    }
    get colourCircle(){
        return this.colour
    }
    set colourCircle(colour){
        this.colour=colour;
    }
    get toString(){
        return `"Circle[radius=${this.radius},colour=${this.colour}]"`
    }
    get areaCircle(){
        return Math.PI*this.radius*this.radius;
    }
}
var obj1 = new Circle(1.0,"red");

console.log(obj1.radiusCircle);
obj1.radiusCircle=2.2
console.log(obj1.radiusCircle);

console.log(obj1.colourCircle);
obj1.colourCircle="blue";
console.log(obj1.colourCircle);

console.log(obj1.toString);

console.log(obj1.areaCircle);

//3 Question 
class Person{
    constructor(title1 , age , gender){
        this.title1=title1;
        this.age=age;
        this.gender=gender;
    }
}
var Person1 = new Person("syed",23,"male")
console.log(Person1.title1);
console.log(Person1.age);
console.log(Person1.gender);

//4 Question
class UberPrice{
    constructor(kilometer,price=50){
        this.kilometer = kilometer;
        this.price = price;
    }
    get Price(){
        return this.kilometer*this.price;
    }
}
var uber1 = new UberPrice(5);
var uber2 = new UberPrice(5,125)
console.log(uber1.Price);
console.log(uber2.Price);
