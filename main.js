let homes = document.querySelectorAll("[data-creature-home]");
      let types = document.querySelectorAll("[data-creature-type]");

      function showHome() {
        homes.forEach((home) => {
          if (home.dataset.creatureHome === "land") {
            home.style.backgroundColor = "green";
          } else if (home.dataset.creatureHome === "air") {
            home.style.backgroundColor = "yellow";
          } else {
            home.style.backgroundColor = "blue";
          }
        });

        // alert("showHome()");
      } //end showHome()

      function showType() {
        types.forEach((type) => {
          if (type.dataset.creatureType === "animal") {
            type.style.borderColor = "red";
          } else {
            type.style.border = "orange dashed";
          }
        });

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