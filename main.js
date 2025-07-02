// array with messages
const messages = [
    "Read John 3: 16",
    "You are so beautiful",
    "You are perfect",
    "You are making a lot of Money",
    "Nothing can bring you down",
    "You are ahead of them all",
    "Hardworker",
    "God loves you",
    "You are a success", 
    "You are on the Forbes List",
    "You are a successful Artist",
    "You have the perfect body",
    "Long hair dont care",
    "Only the best",
    "No weapon fashioned aganist You shall prosper",
    "Years have been restored onto you"
];

//used to generate a random number and print a message 
function showMessage(){
    let random = Math.floor(Math.random() * 15);
    let num = messages[random];
    console.log(num);

}

showMessage();
