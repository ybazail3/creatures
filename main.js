const homes = document.querySelectorAll("[data-creature-home]");
const types = document.querySelectorAll("[data-creature-type]");

function showHome() {
  /* 
  Code before class: 
  calling the homes object and going through each of the data-crature-home data attribute
   homes.forEach((home) => {
     if statement asking if the creatureHome is equal to "land", "Air", or "water", if so change the bg color to match the criteria
     dataset is just calling our attibute so we can compare it
     if (home.dataset.creatureHome === "land") {
       home.style.backgroundColor = "green";
     } else if (home.dataset.creatureHome === "air") {
       home.style.backgroundColor = "yellow";
     } else {
       home.style.backgroundColor = "blue";
     }
   });
   */

  for (let x = 0; x < homes.length; x++) {
    homes[x].style.backgroundColor = "yellow";

    myHome = homes[x].dataset.creatureHome;

    switch (myHome) {
      case "land":
        homes[x].style.backgroundColor = "green";
        break;
      case "air":
        homes[x].style.backgroundColor = "yellow";
        break;
      case "water":
        homes[x].style.backgroundColor = "blue";
        break;
      default:
        homes[x].style.backgroundColor = "";
    }
  }


  // alert("showHome()");
} //end showHome()

function showType() {
  // types.forEach((type) => {
  //   if (type.dataset.creatureType === "animal") {
  //     type.style.border = "4px solid red";
  //   } else {
  //     type.style.border = "4px dashed orange";
  //   }
  // });

  for (let x = 0; x < types.length; x++) {
    types[x].style.border = "red";

    myType = types[x].dataset.creatureType;

    switch (myType) {
      case "animal":
        types[x].style.border = "4px solid red";
        break;
      case "insect":
        types[x].style.border = "4px dashed orange";
        break;
      default:
        types[x].style.border = "";
    }
  }

  // alert("showType()");
} //end showType()

function clearAll() {
  homes.forEach((home) => {
    home.style = "";
  });
  types.forEach((type) => {
    type.style = "";
  });


  // alert("clearAll()");
} //end clearAll()