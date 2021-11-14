const  male = {
    Sunday: "Kwasi",
    Monday: "Kwadwo",
    Tuesday: "Kwabena",
    Wednesday: "Kwaku",
    Thursday:  "Yaw",
    Friday: "Kofi",
    Saturday: "Kwame",
  }
  
const female = {
     Sunday: "Akosua",  
     Monday: "Adwoa",
     Tuesday: "Abenaa",
     Wednesday: "Akua",
     Thursday:  "Yaa",
     Friday: "Afua",
     Saturday: "Ama"
   }

   let buttonOnsubmit = document.getElementById("btn-submit");
   buttonOnsubmit.addEventListener("click", (e) => {
       e.preventDefault();
       generateName(e);
   });
   var name = AkanNameGenerate => {
    
    let date = document.getElementById('date').value;
    let gender = document.getElementById('gender').value;

    let dayOfWeek = new Date(day).getDay()

    if (gender == 'female') {
        console.log();
        (`You were born on a ${weekDays[dayOfWeek]} and your Akan name is ${femaleAkanNames[dayOfWeek]}`)
    } else if (gender == 'male') {
        console.log();
        (`You were born on a ${weekDays[dayOfWeek]} and your Akan name is ${maleAkanNames[dayOfWeek]}`)
    } else {
        console.log('You have not selected anything');
    }
}


