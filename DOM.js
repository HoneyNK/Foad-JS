let test = document.getElementById("titrePage");
test.style.fontFamily = "arial";
console.log(test);

/*
function Image(source, titre, largeur, hauteur)
{
		this.source = source;
		this.titre = titre;
		this.largeur = largeur;
		this.hauteur = hauteur;
}
let photo = new Image("photo.jpg", "Ma photo", 80, 120);

console.dir(photo);

class Image2
{
		constructor(source, titre, largeur, hauteur)
		{
			this.setSource(source);
			this.titre = titre;
			this.largeur = largeur;
			this.hauteur = hauteur;
		}
		getSource()
		{
			return this.source;
		}
	    setSource(source)
		{
			this.source = source;
		}

}
let photo2 = new Image2("photo.jpg", "Ma photo", 80, 120);

console.log(photo2.getSource());
photo2.setSource("Toto");
console.log(photo2.source);

console.dir(photo2);

photo2.nom = "Coucou !";
console.log(photo2.nom);

Image2.prototype.couleur = null;
photo2.couleur = "rouge";

Image.prototype.methodeTest = function () 
{
	return alert("Je suis une image !");
};
photo.methodeTest();

console.log(photo2.couleur);

//String.prototype.color = "red";
let chaine = new String("CDA c'est trop bien !");
console.dir(chaine);
*/

//CREER UN NOUVEAU ELEMENT - METHODE 1
/*
let nouveauParagraphe = document.createElement("p");
let texteNouveauParagraphe = document.createTextNode("Quatrième paragraphe");
nouveauParagraphe.appendChild(texteNouveauParagraphe);
document.body.appendChild(nouveauParagraphe);
nouveauParagraphe.id = "paragraphe4";
nouveauParagraphe.className = "paragraphe";
nouveauParagraphe.style = "";
*/
//CREER UN NOUVEL ELEMENT - METHODE 2
/*
let dernierParagraphe = document.getElementById("paragraphe3");
let noeud = dernierParagraphe.parentNode;
//childNodes, firstChild, lastChild, nextSibling
let nouveauParagraphe = document.createElement("p");
let texteNouveauParagraphe = document.createTextNode("Quatrième paragraphe");
nouveauParagraphe.appendChild(texteNouveauParagraphe);
noeud.insertBefore(nouveauParagraphe, dernierParagraphe);
nouveauParagraphe.id = "paragraphe4";
nouveauParagraphe.className = "paragraphe";
nouveauParagraphe.style = "";
*/
//Attention ! insertAfter n'existe pas !!!!

//EFFACER UN ELEMENT
//noeud.removeChild(nouveauParagraphe);

//MODIFIER UN ELEMENT
/*
let nouveauTitre = document.createElement("h1");
nouveauTitre.id = "titrePage2";
nouveauTitre.innerHTML = "D.O.M. v2";
nouveauTitre.className = "classe2";
document.body.replaceChild(nouveauTitre, titrePage);
*/

document.addEventListener("DOMContentLoaded", function () {
  const menuBurger = document.getElementById("menu-burger");
  const liensNav = document.getElementById("liens-nav");

  menuBurger.addEventListener("click", function () {
    liensNav.classList.toggle("active");
  });
});

let dark = document.getElementById("dark");
let light = document.getElementById("light");
let darkmode = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
let fontColorD = "rgb(" + 255 + "," + 255 + "," + 255 + ")";
let lightMode = "rgb(" + 255 + "," + 255 + "," + 255 + ")";
let fontColorL = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
dark.onclick = function () {
  document.body.style.backgroundColor = darkmode;
  document.body.style.color = fontColorD;
};
light.onclick = function () {
  document.body.style.backgroundColor = lightMode;
  document.body.style.color = fontColorL;
};

document.addEventListener("DOMContentLoaded", function () {
  let questions = document.querySelectorAll(".faq-question");

  questions.forEach(function (question) {
    question.addEventListener("click", function () {
      let reponse = this.nextElementSibling;

      if (reponse.style.display === "none" || reponse.style.display === "") {
        reponse.style.display = "block";
      } else {
        reponse.style.display = "none";
      }
    });
  });
});
