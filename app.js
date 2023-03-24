// 1st Assignment(Srting)
// var firstName = prompt("Enter first Name");
// var lastName = prompt("Enter Last Name");
// var fullname = firstName + " " + lastName;
// document.write(fullname)
// 2nd Assignment(Srting)
// var user = prompt("enter mob name")
// var store = user.length
// document.write("your fav mob is:" + " " + user + "<br>" + "your lenght is:" + store)
// 3rd Assignment(Srting)
// var ragion = "pakistani"
// var pr = ragion.indexOf(prompt("seach word and get index of num :pakistani"))
// document.write(pr)
// 4th Assignment(Srting)
// var ragion = "Hello World"
// var pr = ragion.lastIndexOf(prompt("seach word and get index of num :HEllo World"))
// document.write(pr)
// 5th Assignment(Srting)
// var word = "Pakistani";
// var char = word[3];
// document.write(char);
// 6th Assignment(Srting)
// var firstName = prompt("Enter first Name");
// var lastName = prompt("Enter Last Name");
// var b = firstName.split(" ") + lastName.split(" ");
// document.write(firstName.concat(lastName))
// 7th Assignment (Srting)
// var city = "Hyderabad";
// var newCity = city.replace("Hyder", "Islam");
// document.write(newCity);
// 8th assignment 
// var a= "Ali and Sami are best friends. They play cricket and";
// var b= a.split(" ")
// for(var i=0; i<b.length; i++){
//     var c= b.indexOf("and")
//     b.splice(c,1,"&")
//     var d= b.join(" ")
// }
// document.write(d)
// 9th Assignment 
// var num= prompt("num")
// var num1= +prompt("num")
// document.write("value:"+ num+" "+"typye:" +" "+typeof num)
// document.write("<br>"+"value"+" "+num1+"type"+" "+ typeof num1)
// 10th assignment
// var c = prompt("enter name")
// var b= c.toUpperCase()
// document.write(b)
// 11th Assignment
// var b=  prompt("enter name")
// var c= b[0].toUpperCase()+b.slice(1).toLowerCase()
// document.write(c)
// 12th Assignment 
// var jh= "35.39";
// var kl=jh.split("")
//  var c= kl.splice(2,1)
// var d=kl.join("")
// document.write(d)
// console.log(d);
// 13th assignment
// let username = prompt("Enter your username:");
// let regex = /[!@.,]/;
// if (regex.test(username)) {
//   alert("Please enter a valid username without special symbols.");
// } else {
//   alert("Username accepted: " + username);
// }
// 14th assignment 
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Enter the item you want to search: ").toLowerCase();  // convert input to lowercase
// let found = false;
// for (let i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() == userInput) {
//         console.log("Yes, the item", A[i], "is available in the list.");
//         found = true;
//         break;
//     }
// }
// if (!found) {
//     console.log("Sorry, the item", userInput, "is not available in the list.");
// }
// 15th Assingmet
// let password = prompt("Enter a password: ");

// // Check if password meets the requirements
// if (password.length < 6 || !/^[a-zA-Z][a-zA-Z0-9]*$/.test(password)) {
//     alert("Password must be at least 6 characters long, should start with an alphabet, and should contain only alphabets and numbers.");
//     password = prompt("Enter a valid password: ");
// }

// console.log("The password entered by the user is:", password);
// 17th assignment
// var input = prompt("Enter a string:");
// var lastChar = input[input.length - 1];
// alert("Last character: " + lastChar);
// 18th assignment
// let str = "The quick brown fox jumps over the lazy dog";
// let count = 0;
// let words = str.split(" ");

// for (let i = 0; i < words.length; i++) {
//   if (words[i].toLowerCase() === "the") {
//     count++;
//   }
// }

// console.log("The word 'the' appears " + count + " times in the string.");