let person = [
    ["Name:", "Megan Solga"],
    ["Career: Jack of All Trades"],
    ["Description: Person who perpetually collects new skillz"],
];
    
let interests = ["cats", "snowboarding", "90s sitcoms", "live music"];

let pastPos = [
    ["ILA Vietnam", "English Teacher", "Taught ages 8+, all skill levels, focused on general English and exam preparation."],
    ["PlanOmatic", "Brand Manager", "Managed lots of boring email campaigns, social media BS, and did some cool HTML coding."],
    ["Univ. of MN", "IT Support Consultant", "Worked in a university computer lab and telling students how to print via wifi."],
];

let skills = ['Spanalan', 'steel drum solos', 'grammar', 'hand eye coordination', 'getting weird tattoos']

//To log uppercase name
console.log(person[0][0] + " " + person[0][1].toUpperCase());
console.log(person[1][0]);
console.log(person[2][0]);

//To log My Previous Experience
function displayPosition(jobTitle, companyName, descrip) {
    console.log("* " + jobTitle + " at " + companyName + " - " + descrip);
}
console.log("\n");
console.log("My Previous Experience:");
displayPosition(pastPos[0][1], pastPos[0][0], pastPos[0][2]);
displayPosition(pastPos[1][1], pastPos[1][0], pastPos[1][2]);
displayPosition(pastPos[2][1], pastPos[2][0], pastPos[2][2]);

//To log My Skills
function displaySkill(skills, coolness) {
    if (coolness === true) {
        console.log("* BAM: " + skills);
    } else {
        console.log("* " + skills);
    }
}
console.log("\n");
console.log("My Skills:");

displaySkill('Spanalan', false);
displaySkill('steel drum solos', true);
displaySkill('grammar', false);
displaySkill('hand eye coordination', false);
displaySkill('getting weird tattoos', true);