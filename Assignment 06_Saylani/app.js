//Chapters 21 to 25:

//Task 01:
// var first = prompt("Enter first name")
// var last = prompt("Enter last name")
// var name = first + " " + last
// alert("Hello"+" "+name+" !")


//Task 02:
// var model = prompt("Enter your favourite mobile phone model")
// var l = model.length
// alert("Length of string is"+" "+l+" "+"characters !")


//Task 03:
// var a = "Pakistani"
// var index = a.indexOf("n")
// alert("Index of letter n is "+index)


//Task 04:
// var a = "Hello World"
// var lastindex = a.lastIndexOf("l")
// alert("Last index of letter l is "+lastindex)


//Task 05:
// var a = "Pakistani"
// var at_third = a.charAt(3)
// alert("Char at third index is "+at_third)


//Task 06:
// var first = prompt("Enter first name")
// var last = prompt("Enter last name")
// var name = first.concat(" "+last)
// alert("Hello"+" "+name+" !")


//Task 07:
// var city = "Hyderabad !"
// var rep = city.replace("Hyder","Islam")
// alert(rep)


//Task 08:
// var mess = "Ali and Sami are best friends. They play cricket and football together"
// var rep = mess.replace(/and/g,"&")
// alert(rep)


//Task 09:
// var str = "333"
// var str_type = typeof(str)
// alert(str +" is a " +str_type)
// var num = Number(str)
// var num_type = typeof(num)
// alert("Now "+num+" is a " +num_type)


//Task 10:
// var inp = prompt("Enter your name")
// var upper = inp.toUpperCase()
// alert(upper)


//Task 11:
// var inp = prompt("Enter your name")
// var first = inp.slice(0,1).toUpperCase()
// var sec = inp.slice(1).toLowerCase()
// var title = first+sec
// alert(title)


//Task 12:
// var num = 35.36
// var str = num.toString()
// alert(str.replace(".","")+" is a "+typeof(str))


//Task 13:
// var userName = prompt("Enter you user name")
// if(userName.includes("@") || userName.includes("!") || userName.includes(",") || userName.includes(".")){
//     alert("Invalid user name !")
// }
// else{
//     alert("Valid user name !")
// }


//Task 14:
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
// var inp = prompt("Enter any thing that you want to search")
// var inpLower = inp.toLowerCase()
// if(arr.includes(inpLower)){
//     alert("Item found !")
// }
// else{
//     alert("Item not found !")
// }









//Chapters 26 to 30:

//Task 01:
// var posInt = prompt("Enter any positive integer number")
// if(posInt>=0){
//     alert("Number : "+posInt+" "+"Floor value : "+Math.floor(posInt)+" "
//             +"Round off : "+Math.round(posInt)+" "+"Ceil value : "+Math.ceil(posInt))
//             var posIntNum = Number(posInt)
// }
// else{
//     alert("Please enter a positive integer !")
// }


//Task 02:
// var negFloat = prompt("Enter any negative floating point number")
// if(negFloat<0 && negFloat.includes(".")){
//     alert("Number : "+negFloat+" "+"Floor value : "+Math.floor(negFloat)+" "
//             +"Round off : "+Math.round(negFloat)+" "+"Ceil value : "+Math.ceil(negFloat))
//             var negFloatNum = Number(negFloat)
// }
// else{
//     alert("Please enter a negative floating point number !")
// }


//Task 03:
// var inp = prompt("Enter any number")
// alert("Absolute number is : " + Math.abs(inp))


//Task 04:
// var a = Math.random()
// var dice = Math.floor(a*6) + 1
// alert("Dice Roll : "+dice)


//Task 05:
// var a = Math.random()
// var coin = Math.floor(a*2)
// if(coin === 0){
//     alert("Heads")
// }
// else{
//     alert("Tails")
// }


//Task 06:
// var a = Math.random()
// var randNum = Math.ceil(a*100)
// alert("Random number between 1 and 100 : "+randNum)


//Task 07:
// var weight = prompt("Enter your weight in kilograms")
// var weightParse = parseFloat(weight)
// alert("The weight of user is "+weightParse+" kilograms")


//Task 08:
// var a = Math.random()
// var randNum = Math.ceil(a*10)
// var inp = prompt("Enter a number between 1 and 10")
// if(inp == randNum){
//     alert(randNum+ " Unique ki bike apki hui !")
// }
// else{
//     alert(randNum+" Dobara tukka lagao !")
// }









//Chapters 31 to 34:

//Task 01:
// alert("Current Date and time : "+Date())


//Task 02:
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var d = new Date()
// alert("The current month is : " + monthNames[d.getMonth()+1])


//Task 03:
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// var d = new Date()
// var day = d.getDay()
// var currDay = days[day].slice(0,3)
// alert(currDay)


//Task 04:
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// var d = new Date()
// var day = d.getDay()
// var currDay = days[day]
// if(currDay == days[0] || currDay == days[6]){
//     alert("It's Fun Day !")
// }
// else{
//     alert("It's not a Fun Day, so please get back to work !")
// }


//Task 05:
// var d = new Date()
// var currDate = d.getDate()
// if(currDate<16){
//     alert("First fifteen days of the month !")
// }
// else{
//     alert("Last days of the month !")
// }


//Task 06:
// var d = new Date()
// var t = d.getTime()
// var s = t/1000
// var m = s/60
// alert("Elapsed minutes since midnight, Jan. 1, 1970 : "+m)


//Task 07:
// var d = new Date()
// var currTime = d.toTimeString()
// var hour = currTime.slice(0,2)
// var min = currTime.slice(3,5)
// var sec = currTime.slice(6,8)
// if(hour<12 && min<60 && sec<60){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }


//Task 08:








//Task 09:
var d = new Date()
















//Task 13:
// var age = prompt("Enter your age")
// var d = new Date()
// var currYear = d.getFullYear()
// var ageNum = Number(age)
// alert("Your birth year is : "+(currYear - ageNum))


//Task 14:
// var custName = "Ali Ahmed"
// var d = new Date();
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var currMonth = monthNames[d.getMonth()]
// var units = 410
// var costPerUnit = 16
// var netAmountInDue = units * costPerUnit
// var surcharge = 350
// var grossAmountAfterDue = netAmountInDue + surcharge

// document.write("Customer Name : "+custName+"<br>")
// document.write("Month : "+currMonth+"<br>")
// document.write("Number of Units : "+units+"<br>")
// document.write("Charges per unit : "+costPerUnit+"<br>")
// document.write("Net amount payable (within Due Date) : "+netAmountInDue+"<br>")
// document.write("Late payment surcharge : "+surcharge+"<br>")
// document.write("Gross amount payable (after Due Date) : "+grossAmountAfterDue)








//Chapters 35 to 38:

//Task 01:
// showCurrDate()
// function showCurrDate(){
//     var d = new Date()
//     alert(d)
// }


//Task 02:
// greetUser("Muhammad", "Azhar")
// function greetUser(firstName, lastName){
//     alert("Hello "+firstName+" "+lastName+" !")
// }


//Task 03:
// sum(3,3)
// function sum(firstNum, secNum){
//     alert("Sum is : "+(Number(firstNum)+Number(secNum)))
// }


//Task 04:
// calc()
// function calc(firstNum, opt, secNum){
//     firstNum = prompt("Enter first number")
//     opt = prompt("Enter operator")
//     secNum = prompt("Enter second number")
//     if(opt == "+"){
//         alert(("Addition is : ")+Number(firstNum)+Number(secNum))
//     }
//     else if(opt == "-"){
//         alert(("Subtraction is : ")+Number(firstNum)-Number(secNum))
//     }
//     else if(opt == "*"){
//         alert(("Multiplication is : ")+Number(firstNum)*Number(secNum))
//     }
//     else if(opt == "/"){
//         alert(("Division is : ")+Number(firstNum)/Number(secNum))
//     }
//     else{
//         alert("Invalid Input !")
//     }
// }


//Task 05:
// sqrt()
// function sqrt(a){
//     a = prompt("Enter any number")
//     alert(("Square root is : ")+Number(a)*Number(a))
// }


//Task 06:





//Task 07:
// counting()
// function counting(s, e){
//     s = prompt("Enter the starting number of counting")
//     e = prompt("Enter the ending number of counting")
//     for(var i=s; i<=e; i++){
//         document.write("<br>"+i)
//     }
// }


//Task 08:
