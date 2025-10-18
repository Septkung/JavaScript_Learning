// การแสดงผล
document.write("<h1>SeptKung</h1>");
document.write("<p>hello world</p>");

// alert("คุณได้รับรางวัลที่ 1")
console.log("Hello JavaScript");
console.error("virus detected");
console.warn("mistake detected");

// ใช้ // เพื่อ comment แบบบรรทัดเดียว

/*
comment แบบหลายบรรทัด
*/

// variable in javascript
let name = "SeptKung"; //string
let age = 20; //int
let price = 50.5; //float
let truth = true //boolean true = 1 false = 0

document.write(name);
console.log("อายุ :",age);

//changing variable
//str to int/float
// x = parseInt("12")
// y = parseFloat("15.6")
// let z = +"295"

// console.log(x,y,z)

//float to str
// let money = 99.99.toString();
// console.log(money)

// Array
// let number = Array(1,2,3,4,5,6,7,8,9);
// let colors = Array("red","pink","blue")
// console.log(number[8]) //สามารถอ้างอิง index ได้
// console.log(colors[2])
// // index started at 0

// // changing value in array
// colors[1] = "orange"
// console.log(colors)


// operator
// console.log(5+10)
// console.log(5-10)
// console.log(5*10)
// console.log(5/10)
// console.log(10%10) //หารเอาเศษ
// console.log(5**2)

// operator(comparative)
// let a = 5 , b = 10
// console.log(a==b)
// console.log(a!=b)
// console.log(a>b)
// console.log(a<b)
// console.log(a<=b)
// console.log(a>=b)

//operator(logic)
// && = and 
// || = or
// ! = not

// adding value
// let a = 5 , b = 10;

// console.log('start',a);
// console.log("prefix",++a); //เพิ่มก่อน 1 แล้วแสดง
// console.log("postfix",a++); //แสดงก่อน แล้วเพิ่มค่า 1
// console.log("end",a)

// compound assignment
// x+=5 >>> x=x+5
// x-=5 >>> x=x-5

// control structure
//  sequence ตามลำดับบรรทัด
//  condition
// age = 15;
// if(age>=15 && age<25){
//     console.log("วัยรุ่น")
// }
// let score = 80
// let pass;
// if(score>70){
//     console.log("grade A")
// }else if (score>60) {
//     console.log('grade B')
// }else if(score>50){
//     console.log('grade C')
// }else if(score>40){
//     console.log("grade D")
// }
// Ternary Operator แบบย่อ
// pass = score>50 ? "pass" : "fell";
// console.log(pass)

//Switch...Case
// let status = 0
// let light;
// switch(status){
//     case 0 : light="turn off the light"
//         break
//     case 1 : light="turn on the light"
//         break
//     default : light="not found the data"
// }
// console.log(light)
// Assignment_I
let x =50;
if(x%2==0){
    console.log('even')
}else{
    console.log('odd')
}


//  Loop