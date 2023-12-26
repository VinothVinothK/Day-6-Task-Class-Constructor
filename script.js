/*Task-1
Class - Movie
The class Movie is stated below. An instance of class Movie represents a film. This class has the following three 
properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String 
representing the studio, and a String representing the rating as its arguments, and sets the respective class 
properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only 
those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. 
The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
the studio “Eon Productions”, and the rating “PG­13”
*/
class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    get pgNew(){
        return this.rating;
    }
    set pgNew(rating){
        this.rating=rating;
    }
}

var obj=new Movie("leo","AVM")
console.log(obj.title,obj.studio,obj.rating);

console.log(obj.pgNew);
obj.pgNew="9.0"
console.log(obj.pgNew);
console.log(obj.title,obj.studio,obj.rating);

var obja=new Movie("Casino Royale", "Eon Productions", "PG­13")
console.log(obja.title, obja.studio, obja.rating);


// Task-2
class Circle{
    constructor(radius, color){
        this.radius=radius;
        this.color=color;
    }
    get radiusCircle(){
        return this.radius;
    }
    set radiusCircle(radius){
        this.radius=radius;
    }
    get colorCircle(){
        return this.color;
    }
    set colorCircle(color){
        this.color=color;
    }
    get tostring(){
        return `"Circle[radius=${this.radius}, color=${this.color}]"`
    }
    get area(){
        return Math.PI*this.radius*this.radius;
    }
    get circumferenceCircle(){
        return 2*Math.PI*this.radius;
    }
}
var obj1=new Circle(1.0,"red")

console.log(obj1.radius);
console.log(obj1.color);
console.log(obj1.tostring);

console.log(obj1.radiusCircle);
obj1.radiusCircle=2.2
console.log(obj1.radiusCircle);

console.log(obj1.colorCircle);
obj1.colorCircle="blue"
console.log(obj1.colorCircle);

console.log(obj1.tostring);

console.log(obj1.circumferenceCircle);

//Task 3:
//"Person class holds all the details"

class Person{
    constructor(name,age,gender,city){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.city=city;
    }
}

var obj3=new Person("Jack",25,"Male","Blr")
console.log(obj3.name,obj3.age,obj3.gender,obj3.city);

// Task 3:
//class to claculate uber price

class Uber{
    constructor(kilometer,pricepkm){
        this.kilometer=kilometer;
        this.pricepkm=pricepkm*kilometer;
        }
}

var obj4=new Uber(20, 10)
console.log(obj4.kilometer,obj4.pricepkm);
