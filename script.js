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
    const day ={
                0:"Sunday",
                1:"Monday",
                2:"Tuesday",
                3:"Wednesday",
                4:"Thursday",
                5:"Friday",
                6:"saturday"
            }

   document.getElementById("smt").addEventListener("click",function(e){
       e.preventDefault()
    let date = document.getElementById('date').value;
    var gender
    var genderArray=document.getElementsByName("gender")
    if (genderArray[0].checked == true){
        gender="male"
    }
    if (genderArray[1].checked == true){
        gender="female"
    }
    if (gender==undefined){
        alert("Please select a gender!")
    }
    if(date==NaN){
        alert("Please select a date!!")
    }
    console.log(date);
    let dayOfWeek = new Date(date).getDay()
    console.log(dayOfWeek);
    var userDay=day[dayOfWeek]
    console.log(userDay);
    if (gender=="male"){
      alert(male[userDay])
    }
    if (gender=="female"){
        alert(female[userDay])
      }
    
   })
