pics = document.getElementById("pics");
createPicsholders();
createGhoulImages();

function createPicsholders() {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder" + i;
        pics.appendChild(pictureHolder);
    }
}

function createGhoulImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i+1);
        ghoulPlaatje = document.createElement("Img");
        ghoulPlaatje.src = "../Img/ghoul" + (i+1) + ".jpg";
        ghoulPlaatje.id = (i+1);
        ghoulPlaatje.addEventListener("click", function () {
            maakFavoriet(this.id);

        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(ghoulPlaatje);
    }
}

function maakFavoriet(id) {
    console.log("maak mij favoriet! het gaat om ghoul..." + id);
    notsofavoriet = document.getElementsByClassName("favoriet");

    for (var i = 0; i < notsofavoriet.length; i++) {
        notsofavoriet[i].style.backgroundImage = "none";
    }

    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('../Img/heart.png')";

}


//picsHolders maken
//picsHolder bevat een plaatje van een ghoul en een favorite symbool

//ghoulPlaatjes toevoegen aan picsHolders
//favoriteSymbols toevoegen aan picsholders