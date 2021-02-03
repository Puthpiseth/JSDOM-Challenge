
// constructor
function Hero(nom, classe, int, str) {
    this.nom = nom;
    this.classe = classe;
    this.int = int;
    this.str = str;
};

//Method
Hero.prototype.toString = function() {
    let target = document.querySelector("footer > div");
    let personnage1 = `Je suis ${this.nom} le ${this.classe}, j'ai ${this.int} points d'intelligence et ${this.str} points de force !`
    target.innerHTML += personnage1 + "<br>";
}

var mage = new Hero("amadeus", "mage", 10, 3);
var guerrier = new Hero("pointius", "guerrier", 3, 10);

// Appelle function
mage.toString();
guerrier.toString()

// console.log(mage);

