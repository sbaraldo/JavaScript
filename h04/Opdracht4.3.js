var plaatjes = [1,2,3,4,5,6,7,8,9];
var teller = 0;

var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('../Img/ghoul1.jpg')";

var slideholder2 = document.getElementById("slideholder2");
slideholder2.style.backgroundImage = "url('../Img/ghoul1.jpg')";

var slideholder3 = document.getElementById("slideholder3");
slideholder3.style.backgroundImage = "url('../Img/ghoul1.jpg')";

slideholder.addEventListener("click",function () {
    slideholder.style.backgroundImage = "url('../Img/ghoul" + getghoul() + ".jpg')";

});

slideholder2.addEventListener("click", function () {
    slideholder2.style.backgroundImage = "url('../Img/ghoul" + getghoul() + ".jpg";

});

slideholder3.addEventListener("click", function () {
    slideholder3.style.backgroundImage = "url('../Img/ghoul" + getghoul() + ".jpg";

});

function getghoul() {
    if (teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++
    }
    console.log(teller);
    return teller;

}