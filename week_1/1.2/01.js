// //1) get length

// function getLength(str){
//     console.log("Original String: ",str);
//     console.log("Length: " + str.length);
    
// }
// getLength("Harshvardhan");

// 2) lastindexoff function

// function findIndexOf(str,target){
//     console.log("Original String: " , str);
//     console.log("Index of String is: " + str.indexOf(target));
    
// }

// findIndexOf("Harsh vardhan","vardhan");


//  3) getslice
// function geetSlice(str,start,end){
//     console.log("Original String: ",str);
//     console.log("After slice: ", str.slice(start,end));

// }

// geetSlice("Hello World",0,5);//01234

// //can aslo be done as 

// let ans='Harshvardhan Patil'.slice(0,5)
// console.log(ans);


// 4)ReplaceString

// function ReplaceString(str,target,replacement){
//     console.log("Original String: ",str);
//     console.log("After Replace; ",str.replace(target, replacement));

// }
// ReplaceString("Hello World", "World","Harsh!");

// //written as:- 
// const str ="Harshvardhan Boom";
// console.log(str.replace(str,"Boom","Patil"));
// console.log(str); 


// //split
// const value ="hi my name is harsh!"
// const words = value.split(" ");
// console.log(words);


//trim 

// function trimstring(str){
//     console.log("Original String ",str)
//     console.log("After trim: ", str.trim());

// }
// console.log("            Hello World          ");

// //uppercase
// const value ="harshvardhan";
// console.log(value.toUpperCase());


// //lowercase
// const value ="HARSHVARDHAN";
// console.log(value.toLowerCase());

// //parseint
// console.log(parseInt("42"));
// console.log(parseInt("42PX"));
// console.log(parseInt("3.14")); //converts string into no. //declared globally

// //for float repolace int to float 




//arrays!

// const intialArray =[1,2,3];
// intialArray.pop(2);
// console.log(intialArray);
// intialArray.shift();
// console.log(intialArray);
// intialArray.unshift(0);
// console.log(intialArray);


//merge 2 or concatenate... 
// const intialArray=[1,2,3];
// const secondArray=[4,5,6];

// console.log(intialArray.concat(secondArray));


// for each

// const intialArray=[1,2,3];

// for(let i=0;i<intialArray.length;i++){
//     console.log(intialArray[i]);
// }



//classes:- reusable structure basically objects


class Animal{
    constructor(name, legCount,speaks){
            this.name=name;
            this.legCount=legCount;
            this.speaks=speaks;
    } 
    static myType(){
        console.log("Animal")
    }                                    //associated with class.. 
    speak(){
        console.log("hi there! " + this.speaks);
    }
}

let dog = new Animal("dog",4,"barks");
let cat = new Animal("cat",4,"mews");

console.log(Animal.myType())
dog.speak();
cat.speak();










//callbacks, map filter find sort 


