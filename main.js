let todaysDate = new Date();
let dayWeek = todaysDate.getDay();
let hoursWorked = 37;
let fridayOffWeekend = false;
let aLongWeekend = true;
let message;
let companyName = "Archnemesis, Inc."
let usersName = prompt("What is your name?");

if(dayWeek===1){
    message = "Whoo its monday!"
} else if(dayWeek===2){
    message = "YAY its Taco Tuesday!";
}else if(dayWeek===3){
    message = "You're almost over the hump. Happy Wednesday";
}else if(dayWeek===4){
    message = "It's Thursday fun day, have a good day!";
    if(fridayOffWeekend===true){
        message = "Lucky duck, enjoy you're 3 day weekend!";
    }
}else if(dayWeek===5){
    message = "Yippeeeee it's Friday, have an awesome weekend.";
    if(aLongWeekend===true){
        message = "Lucky duck, enjoy you're extra day off!";
    }
}else{
    message = "Aww man, you're working on the weekend." 
    +" Hope you still have a great weekend!";
}
if(hoursWorked<35){
    message += ` <br><br>By the way your hours are looking good for the week. You've worked ${hoursWorked}`;
}else{
    message += ` <br><br>You've worked ${hoursWorked} hours this week already, so make sure that you don't go over 40!`
}
document.write(`<strong> Hello there ${usersName}!<br><br> Hope you're having a great day here at 
${companyName}<br><br> ${message}</strong>`);
