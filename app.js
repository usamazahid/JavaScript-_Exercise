// Exercise 2

// let name = "Usama";
// console.log(`Hello ${name}`);

// Exercise 3
// function toTitleCase(input){
// 	let text = input.split(" ");
// 	let titleCase = "";

// 	text.forEach(element => {
// 		titleCase += element.charAt(0).toUpperCase()+element.substring(1).toLowerCase()+ " ";
// 	});	

// 	return titleCase;
// }

// let name = "usama bin zahid";

// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(toTitleCase(name));

// Exercise 4

// console.log(`Albert Einstein once said, "A person who never made a mistake never tried anything new."`);

// Exercise 5

// let famous_person = "Albert Einstein once said";
// let message = "A person who never made a mistake never tried anything new.";
// console.log(`${famous_person}, "${message}"`);


// Exercise 6

// let name = " \tusama zahid\n ";
// console.log(name.trim());

// Exercise 7

// console.log(4+4);
// console.log(12-4);
// console.log(2*4);
// console.log(64/8);

// Exercise 8

// console.log(5 + 3);
// console.log(5 + 3);
// console.log(5 + 3);
// console.log(5 + 3);

// Exercise 9

// let fav_number = 777;
// fav_number = `My favourite number is ${fav_number}`;
// console.log(fav_number);

// Exercise 10

// let fav_number = 777;
// fav_number = `My favourite number is ${fav_number}`;
// console.log(fav_number);
/* prints my fav number */

// console.log(5 + 3);
// console.log(5 + 3);
// console.log(5 + 3);
// console.log(5 + 3);
/*prints sum of 5 and 3 four times */


// Exercise 11

// let names = ["Ahmed" ,"Hussam" ,"Ishfaq" ,"Uzair" ,"Safi" ,"Israr" ,"Shereen" ,"Gul" ,"Asmat"];
// names.forEach(element => {
// 	console.log(element);
// });

// Exercise 12

// let names = ["Ahmed" ,"Hussam" ,"Ishfaq" ,"Uzair" ,"Safi" ,"Israr" ,"Shereen" ,"Gul" ,"Asmat"];
// names.forEach(element => {
// 	console.log(`Have a Wornderful day ${element}`);
// });

// Exercise 13

// let fav_things = ["BMW", "Private JET", "Ping Pong"];
// console.log(`I would love to own a ${fav_things[0]}`);
// console.log(`My dream to flay a  ${fav_things[1]}`);
// console.log(`I like to play ${fav_things[2]}`);

// Exercise 14

// let names = ["Ahmed" ,"Hussam" ,"Ishfaq"];
// names.forEach(element => {
// 	console.log(`Dear ${element}, I would like you to join me for Dinner.`);
// });

// Exercise 15

// let names = ["Ahmed" ,"Hussam" ,"Ishfaq"];

// names.forEach(element => {
// 	console.log(`Dear ${element}, I would like you to join me for Dinner.`);
// });

// let not_coming = "Hussam";

// console.log(`${not_coming} is not coming`);

// let new_guest = "Gul";

// names[names.indexOf(not_coming)] = new_guest;

// names.forEach(element => {
// 	console.log(`Dear ${element}, I would like you to join me for Dinner.`);
// });

// Exercise 16


// let names = ["Shereen" , "Ahmed" ,"Uzair" ,"Hussam" ,"Ishfaq"];

// names.forEach(element => {
// 	console.log(`Dear ${element}, I would like you to join me for Dinner.`);
// });

// let not_coming = "Hussam";

// console.log(`${not_coming} is not coming`);

// let new_guest = "Gul";

// names[names.indexOf(not_coming)] = new_guest;

// names.forEach(element => {
// 	console.log(`Dear ${element}, I would like you to join me for Dinner.`);
// });

// console.log("I am glad to anounce that we have arranged for a bigger dinner table!");

// names.push("Asmat");

// names.forEach(element => {
// 	console.log(`Dear ${element}, I would like you to join me for Dinner.`);
// });


// Exercise 17

// let names = ["Shereen" , "Ahmed" ,"Uzair" ,"Hussam" ,"Ishfaq"];

// names.forEach(element => {
// 	console.log(`Dear ${element}, I would like you to join me for Dinner.`);
// });

// let not_coming = "Hussam";

// console.log(`${not_coming} is not coming`);

// let new_guest = "Gul";

// names[names.indexOf(not_coming)] = new_guest;

// names.forEach(element => {
// 	console.log(`Dear ${element}, I would like you to join me for Dinner.`);
// });

// console.log("I am glad to anounce that we have arranged for a bigger dinner table!");

// names.push("Asmat");

// names.forEach(element => {
// 	console.log(`Dear ${element}, I would like you to join me for Dinner.`);
// });

// console.log("I am sorry to annouce that, due to some issues we can only invite 2 people now!");

// while(names.length > 2){
// 	console.log(`I am feeling soory to let you go ${names.pop()}`);	
// }

// names.forEach(element => {
// 	console.log(`Dear ${element}, I would like you to join me for Dinner.`);
// });

// names = [];

// console.log(names);

// Exercise 18

// let places = ["Japan", "Korea", "Everest", "Florida", "Antarctic"];

// console.log(places);
// let copy = [...places].sort()
// console.log(copy);
// console.log(places);
// console.log([...copy].reverse());
// console.log(copy);
// console.log(places);
// console.log([...copy].reverse());
// console.log(copy);
// console.log(places);
// console.log(places.sort());
// console.log(places.reverse());


// Exercise 19

// let names = ["Shereen" , "Ahmed" ,"Uzair" ,"Hussam" ,"Ishfaq"];

// names.forEach(element => {
// 	console.log(`Dear ${element}, I would like you to join me for Dinner.`);
// });

// let not_coming = "Hussam";

// console.log(`${not_coming} is not coming`);

// let new_guest = "Gul";

// names[names.indexOf(not_coming)] = new_guest;

// names.forEach(element => {
// 	console.log(`Dear ${element}, I would like you to join me for Dinner.`);
// });

// console.log("I am glad to anounce that we have arranged for a bigger dinner table!");

// names.push("Asmat");

// names.forEach(element => {
// 	console.log(`Dear ${element}, I would like you to join me for Dinner.`);
// });

// console.log(names.length);

// Exercise 20

// function createList(...items){
// 	return items;
// };

// console.log(createList("K2", "Everest", "Pakistan"));

// Exercise 21

// let obj = {
// 	"city":"Karachi",
// 	"country":"Pakistan",
// 	"food":"Biryani"
// }

// console.log(obj);

// Exercise 22

// let arr = [1, 2, 3, 4];
// console.log(arr[4]);

// Exercise 23

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// // The car variable contains the string value

// console.log(1==1);

// //both values are same

// console.log(1===1);

// //both datatypes are same;

// console.log(true||false);

// //one condition is true;

// console.log(true&&true);

// //both conditions are true

// console.log(2==1);

// //both values are not same

// console.log(1==="1");

// //both datatypes are not same;

// console.log(false||false);

// //both conditions are false

// console.log(true&&false);

// //one condition is false

// let arr = [1,2,3];

// console.log(arr.includes(4));

// //does not includes value 4


// Exercise 24

// console.log("A" == "A");
// console.log("a" == "b");

// console.log("A" == "a");
// console.log("a" == "A".toLowerCase());

// console.log(1==1);
// console.log(1!=2);

// console.log(1>2);
// console.log(1<3);

// console.log(1>=1);
// console.log(1<=2);

// console.log(true&&true);
// console.log(true||false);

// let arr = [1,2,3];
// console.log(arr.includes(4));
// console.log(!arr.includes(4));

// Exercise 25

// let alien_color = "green";

// if(alien_color == "green"){
// 	console.log("The player just earned 5 points.");
// }else if(alien_color == "yellow"){
// 	console.log("The player just earned 15 points.");
// }else{

// }


// Exercise 26

// let alien_color = "green";

// if(alien_color == "green"){
// 	console.log("The player just earned 5 points.");
// }else if(alien_color == "yellow"){
// 	console.log("The player just earned 10 points.");
// }else{

// }


// Exercise 27

// let alien_color = "green";

// if(alien_color == "green"){
// 	console.log("The player just earned 5 points.");
// }else if(alien_color == "yellow"){
// 	console.log("The player just earned 10 points.");
// }else if(alien_color == "red"){
// 	console.log("The player just earned 15 points.");
// }

// Exercise 28

// let age = 14;

// if(age < 2){
// 	console.log("the person is a baby");
// }else if(age >= 2 && age < 4){
// 	console.log("the person is a toddler");
// }else if(age >= 4 && age < 13){
// 	console.log("the person is a kid");
// }else if(age >= 13 && age < 20){
// 	console.log("the person is a teenager");
// }else if(age >= 20 && age < 65){
// 	console.log("the person is an adult");
// }else if(age >= 65){
// 	console.log("the person is an elder");
// }

// Exercise 29

// let fav_fruits = ["mango", "apple", "banana"];

// if(fav_fruits.includes("banana")){
// 	console.log("I really like banana");
// }

// Exercise 30

// let users = ["usama", "admin", "owner", "writer", "editor"];

// users.forEach(element=>{
// 	if(element== "admin"){
// 		console.log("Hello admin, would you like to see a status report");
// 	}else{
// 		console.log(`Hello ${element}, thank you for logging in again.`);
// 	}
// });

// Exercise 31

// let users = [];

// users.forEach(element=>{

// 	if(users.length == 0){
// 		console.log("we need to find more users!");
// 		return;
// 	}

// 	if(element== "admin"){
// 		console.log("Hello admin, would you like to see a status report");
// 	}else{
// 		console.log(`Hello ${element}, thank you for logging in again.`);
// 	}
// });

// Exercise 32

// let current_users = ["Shereen" , "Ahmed" ,"Uzair", "Gul" ,"Hussam"];
// let new_users = ["Gul" ,"Hussam" ,"Ishfaq", "Salman", "Kashif"];

// current_users.forEach(a => {
// 	new_users.forEach(b => {
// 			if(a.toUpperCase() == b.toUpperCase()){
// 				console.log(`${a} already Exists`);
// 			}
// 	});
// });

// Exercise 33

// let ordinal_numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// let ordinal_number = function(num){
// 	num.forEach(element=>{

// 		if(element > 3 && element < 21){
// 			console.log(element+ "th");
// 		}else if(element % 10 == 1){
// 			console.log(element + "st");
// 		}else if(element % 10 == 2){
// 			console.log(element + "nd");
// 		}else if(element % 10 == 2){
// 			console.log(element + "nd");
// 		}else{
// 			console.log(element + "th");
// 		}	
// 	});
// }

// ordinal_number(ordinal_numbers);

// Exercise 34

// let pizza = ["pepperoni", "garlic", "tikka"];

// pizza.forEach(element => {console.log(`i like ${element} pizza!`)});

// console.log("I like garlic sauce pizza");

// Exercise 35

// let pizza = ["dog", "lion", "cat"];

// pizza.forEach(element => {console.log(`${element} would make a great pet!`)});

// console.log("All have k9s.");


// Exercise 36

// function make_shirt(size, text){
// 	console.log(`size of tshirt is ${size} and the text is ${text}`);
// }

// make_shirt(24, "Superman");


// Exercise 37

// function make_shirt(size = "Large", text="I love JavaScript"){
// 	console.log(`size of tshirt is ${size} and the text is ${text}`);
// }

// make_shirt();
// make_shirt(24, "Superman");


// Exercise 38

// function describe_city(city="Karachi", country="Pakistan"){
// 	console.log(`${city} is in ${country}`);
// }

// describe_city();
// describe_city("Lahore", "Pakistan");
// describe_city("Tokyo", "Japan");

// Exercise 39

// function city_country(city="Karachi", country="Pakistan"){
// 	console.log(`${city}, ${country}`);
// }

// city_country();
// city_country("Lahore", "Pakistan");
// city_country("Tokyo", "Japan");

// Exercise 40

// function make_album(artist, album, tracks=0){
// 	let obj = {
// 		"artist" : artist,
// 		"album" : album,
// 		"tracks" : tracks
// 	}
// 	console.log(obj);
// }

// make_album("The Beatles", "Revolver", 14);

// Exercise 41

// function show_magicians(...names){
// 	console.log(names);
// }

// show_magicians("Harry Houdini", "David Blane", "David Copperfield");

// Exercise 42


// let magicians = ["Harry Houdini", "David Blane", "David Copperfield"];

// function make_great(name) {
// 	name.forEach((element, index)=>{
// 		name[index] = `Great ${element}`;
// 	});
// 	return name;
// }

// console.log(make_great(magicians));


// Exercise 43

// let magicians = ["Harry Houdini", "David Blane", "David Copperfield"];
// let new_array = magicians;

// function make_great(name) {
// 	name.forEach((element, index)=>{
// 		name[index] = `Great ${element}`;
// 	});
// 	return name;
// }
// console.log(new_array);
// console.log(make_great(magicians));

// Exercise 44

// function sandwich(...fillings){
// 	fillings.forEach(e=>console.log(e));
// }

// sandwich("cheese", "pepperoni", "balogna", "lettuce");

// sandwich("cheese", "pepperoni", "balogna");

// sandwich("cheese", "tomatto");

// Exercise 45

function car(manufacturer, model, color="blue"){
	let obj = {
		"manufacturer":manufacturer,
		"mode":model,
		"color":color
	}
	return obj;
}

console.log(car("Honda", 2022));

