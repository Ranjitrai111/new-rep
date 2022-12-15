//let object1={
 // name:"Rajnit", 
  // age:18,
   // address:"Kathmandu"}
 
//if (object1.name=="Rajnit" && object1.age>=20){
 //alert('display');
//}

//if else if..............................
 //if (object1.name=="Rajnit" && object1.age>=20){
   // alert('display');
 //}else if (object1.age<19) {
  //  alert('show')
 //} else {
 //   alert('undefined')
 //}

 // Function in javascript...................>
//function add(parameter1,parameter2){

//}
//add(parameter1,parameter2);

//function add(a,b){
// alert(a+b)
//}
//add(10,20)
//add(40,50)
//...............
//function mul(a,b){
   // let c=a*b;
   // return alert(c)
//}
//mul(30,20)

//function cmp(a,b){
  //  if(a>b){
  //      alert('display')
  //  }

//}
//cmp(50,30)

//function without paramater.................>>>>
//function cmp(){
//let a= 20;
//let b=30;
//if (a>b){
  //  alert("wrong")
    
//}else{
 //   alert("right")
//  }
//  }
//  cmp()

//loop ............................
// let array=[1,2,3,4,5,6,7,8,9];
// for(let i=0; i<5; i++ ){
// console.log(i,"print i" );
// }



//Switch.........................
// let result;
// const operator =prompt("enter operator(either +,-,*");
// const num1 =parseInt(prompt("enter first number"));
// const num2 =parseInt(prompt("enter second number"));
// switch(operator){
// case "+":
//    result = num1 + num2;
//    console.log(result);
//    break;
// case "-";
// result =num1-num2;
// console.log(result)
// break;

  
// }





//Array..................
//add element in array.....
//unshift()..... add first element
// let num = [1,2];

// num.push("3");

// alert(num);

//remove element in array......
// let num =[1,2,34];
// num.pop();
// alert(num);
// shift= remove first element...


//assign value with index. in array...............
// let num=["add","sub"];
// num[2]="mul";
// console.log(num);

// let num=[1,2,3,4];
// console.log(num.sort(),"sorted array");
// console.log(num.reverse(),"reverse array");


// console.log(num.concat(num),"num");




//Map........................................
//syntax
//const mappedValue=array.map(function(currentValue,index,arr),thisValue)
//array return in map

// const number=[10,20,30,40,50]
// const newArr=number.map(multiply);
// function multiply(num){
//   return num*10;
// }
// console.log(newArr,"newArr");

//output=[5,15,25,35]
// const number= [10,20,30,40]
// const newArr=number.map(sub);
// function sub(num){
//   return num-5;
// }
// console.log(newArr,"newArr");


//array of objects...........................
// let person=[
//   {
//     firstName:"ram",
//     lastName:"kumar",
//   },
//   {
//     firstName:"Rita",
//     lastName:"kumari",

//   },
//   {
//     firstName:"Ravi",
//     lastName:"yadav",
//   }
// ]

// const updatePerson= person.map(fullName); 
// function fullName(name){
//   console.log(name.firstName,"test name");
//   return {fullName:`${name.firstName} ${name.lastName}`};

// }
// console.log(updatePerson,"updatePerson");


//Filters...............................................

// let person=[
//      {
//       id:1,
//        firstName:"Rita",
//        lastName:"kumar",
//      },
//      {
//       id:2,
//        firstName:"Rita",
//        lastName:"kumari",
  
//      },
//      {
//       id:3,
//        firstName:"Ravi",
//       lastName:"yadav",
//     }
//    ]
//  const updatePerson= person.filter(filterById);
//  function filterById(name){
// return name.id===1;
// //  return name.firstName === "Rita";
//  }
//  console.log(updatePerson,"update person")
