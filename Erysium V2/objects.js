

/* Objects Creation

1 Main Parent : Héros 
name = this.name; (user input)
level = 1;

4 Childs (classes) = Warrior, Magician, Thief, Priest

characteristics are based on a 10 points scale

Warrior :
stamina = 8;
strength = 10;
intelligence = 2; 
speed = 5;

Magician :
stamina = 5;
strength = 2;
intelligence = 10; 
speed = 8;

Thief :
stamina = 5;
strength = 2;
intelligence = 8; 
speed = 10;

Priest
stamina = 10;
strength = 8;
intelligence = 5; 
speed = 2;

Possibility to choose a character male or female in each class

*/

function Heros () {
    this.name = document.getElementById('heros-name').value;
    this.level =  1;
}

const warrior = Object.create(Heros);
warrior.stamina = 8;
warrior.strength = 10;
warrior.intelligence = 2;
warrior.speed = 5;

const magician = Object.create(Heros);
magician.stamina = 5;
magician.strength = 2;
magician.intelligence = 10;
magician.speed = 8;

const thief = Object.create(Heros);
thief.stamina = 5;
thief.strength = 2;
thief.intelligence = 8; 
thief.speed = 10;

const priest = Object.create(Heros);
priest.stamina = 10;
priest.strength = 8;
priest.intelligence = 5; 
priest.speed = 2;


//code to get the right gender of the character
const genderButton = document.getElementsByClassName("abc");
for (let i = 0; i < genderButton.length; i++) {
    genderButton[i].addEventListener('click', getGender, false);
}

function getGender() {
    if (genderButton[0].checked){
        //document.getElementById("resultgender").innerHTML = "female";
       
    } else if (genderButton[1].checked){
        //document.getElementById("resultgender").innerHTML = "male";
    
    } else {
        return 0;
    }

}


// code to display warrior skills + display the right character according to the gender
const warriorButton = document.getElementById("warrior");
warriorButton.addEventListener("click", displayWarriorSkills);
var warriorSelection = 1;

function displayWarriorSkills() {
    document.getElementById("stamina-skill").innerHTML = warrior.stamina;
    document.getElementById("strength-skill").innerHTML = warrior.strength;
    document.getElementById("intelligence-skill").innerHTML = warrior.intelligence;
    document.getElementById("speed-skill").innerHTML = warrior.speed;
    
    getGender()
    if (genderButton[0].checked){
        document.getElementById("heros").src ='images/chibi_femelle_warrior.png';
    } else if (genderButton[1].checked){
        document.getElementById("heros").src ='images/chibi_male_warrior.png';
    }
}

displayWarriorSkills();


// code to display magician skills + display the right character according to the gender
const magicianButton = document.getElementById("magician");
magicianButton.addEventListener("click", displayMagicianSkills, false);

function displayMagicianSkills() {
    document.getElementById("stamina-skill").innerHTML = magician.stamina;
    document.getElementById("strength-skill").innerHTML = magician.strength;
    document.getElementById("intelligence-skill").innerHTML = magician.intelligence;
    document.getElementById("speed-skill").innerHTML = magician.speed;

    getGender()
    if (genderButton[0].checked){
        document.getElementById("heros").src = 'images/chibi_femelle_magician.png';
    } else if (genderButton[1].checked){
        document.getElementById("heros").src = 'images/chibi_male_magician.png';
    }
   
}

displayMagicianSkills();

// code to display thief skills + display the right character according to the gender
const thiefButton = document.getElementById("thief");
thiefButton.addEventListener("click", displayThiefSkills);

function displayThiefSkills() {
    document.getElementById("stamina-skill").innerHTML = thief.stamina;
    document.getElementById("strength-skill").innerHTML = thief.strength;
    document.getElementById("intelligence-skill").innerHTML = thief.intelligence;
    document.getElementById("speed-skill").innerHTML = thief.speed;

    getGender()
    if (genderButton[0].checked){
        document.getElementById("heros").src = 'images/chibi_femelle_thief.png';
    } else if (genderButton[1].checked){
        document.getElementById("heros").src = 'images/chibi_male_thief.png';
    }
}

displayThiefSkills();

// code to display priest skills + display the right character according to the gender
const priestButton = document.getElementById("priest");
priestButton.addEventListener("click", displayPriestSkills);

function displayPriestSkills() {
    document.getElementById("stamina-skill").innerHTML = priest.stamina;
    document.getElementById("strength-skill").innerHTML = priest.strength;
    document.getElementById("intelligence-skill").innerHTML = priest.intelligence;
    document.getElementById("speed-skill").innerHTML = priest.speed;

    getGender()
    if (genderButton[0].checked){
        document.getElementById("heros").src = 'images/chibi_femelle_priest.png';
    } else if (genderButton[1].checked){
       document.getElementById("heros").src = 'images/chibi_male_priest.png';
    }
}

displayPriestSkills();

