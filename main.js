let dayWeek = new Date().getDay();
let sunday = 0;
let monday = 1;
let tuesday = 2;
let wednesday = 3;
let thursday = 4;
let friday = 5;
let saturday = 6;
let hoursWorked = 37;
let fridayisHoliday = false;
let greeting;
let companyName = "Archnemesis, Inc."
let userName = prompt("What is your username?");

if (dayWeek===monday){
    greeting = `
    <p>
    Whoo its monday!
    </p>
    `;
}else if (dayWeek===tuesday){
    greeting = `
    <p>
    🌮🌮🌮 YAY its Taco Tuesday! 🌮🌮🌮
    </p>
    `;
}else if (dayWeek===wednesday){
    greeting = `
    <p>
    🐫 You're almost over the hump. Happy Wednesday! 🐫
    </p>
    `;
}else if (dayWeek===thursday){
    greeting = `
    <p>
    🎈🎈 It's Thursday fun day, have a good day! 🎈🎈
    </p>
    `;
    if (fridayIsHoliday===true){
        greeting = `
        <p>
        🚢 Lucky duck, enjoy you're 3 day weekend! 🚢
        </p>
        `;
    }
}else if (dayWeek===friday){
    greeting = `<p>
    🏃‍♀️🎂😊 Yippeeeee it's Friday, have an awesome weekend. 🏃‍♀️🎂😊
    </p>`;
    if(fridayIsHoliday===true){
        greeting = `
        <p>
        🚢 Lucky duck, enjoy you're 3 day weekend! 🚢
        </p>
        `;
    }
}else {
    greeting = `
    <p>
    😢 Aww man, you're working on the weekend. 😢
    <br>👍 Hope you still have a great weekend! 👍
    </p>
    `;
}
if (hoursWorked<35){
    greeting += `
    <p>
    <br><br>By the way your hours are looking good for the week. You've worked ${hoursWorked}
    </p>
    `;
}else {
    greeting += ` 
    <p>
    <br><br>You've worked ${hoursWorked} hours this week already, so make sure that you don't go over 40!
    </p>
    `;
}
console.log(greeting);

document.write(`
<p>
    <strong>Hello there ${userName}!👋<br><br><br> Hope you're having a great day here at 
    ${companyName}<br><br> ${greeting}</strong>
</p>
`);
