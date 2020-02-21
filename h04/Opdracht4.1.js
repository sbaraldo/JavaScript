var mijnauto = {
    merk: "Ford",
    type: "Mondeo",
    Aantalwielen: 4,
    kleur: "blauw",
    snelheid: 0,

    gasgeven: function () {
        this.snelheid += 5
        console.log(this.snelheid)
    },

    toeteren: function () {
        console.log("toet!")
    }
}

mijnauto.gasgeven();
mijnauto.toeteren();



