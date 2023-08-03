let btn = document.getElementById("buttonValidation");
btn.addEventListener('click',CalculGain);

function CalculGain(event){
  event.preventDefault();/*pr que la page ne se reactualise pas au moment du click mais garde les donnees */
  
  checkInputs();/*on appel cette fonction avant la recup des données et avant le calcul*/

  let myForm = document.getElementById("formCalculGain");/*on recup le formulaire */
  let formObj = new FormData(myForm);/*on transforme le formulaire en objet FormData et
  avec new FormData on p recup chaq donnee ds le formulaire en utilisant le get avec leur name */
  
  let tauxHoraire = formObj.get ('TH');
  let tauxJournalier = formObj.get ('TJM');
  let extras = formObj.get ('Extras');

  let qtetauxHoraire = formObj.get ('QteTH');
  let qtetauxJournalier = formObj.get ('QteTJM');
  let qteextras = formObj.get ('QteExtras');

  let charges = formObj.get ('Charges');

  // on commence le calcul
  let gainHeure = tauxHoraire * qtetauxHoraire;
  let gainJour = tauxJournalier * qtetauxJournalier;
  let gainExtras = extras * qteextras;

  let totalBrut = gainHeure + gainJour + gainExtras;
  let chargeADeduire = (totalBrut * charges/100);
  let totalNet = totalBrut - chargeADeduire;

  document.getElementById ("resultatBrut").innerText = totalBrut.toFixed(2)+' €'; /*pr arrondir à 2 decimal le resultat*/
  document.getElementById("resultatDifference").innerText = chargeADeduire.toFixed(2)+' €';
  document.getElementById("resultatNet").innerText = totalNet.toFixed(2)+' €';

}

// Pour vérifier que les valeurs indiquées soient positives mais non négatives sinon mettre 0
function checkInputs(){
let mesInputs = document.querySelectorAll ('#formCalculGain .form-control');/*pr recup ts les classes form-control ds mon formulaire ac l id */
mesInputs.forEach(monInput =>{
  if (monInput.value < 0){
    monInput.value = 0;
  }
})
}

// mettre automatiquement le calcul des résultats en indiquant les valeurs sans toucher le btn calculer
let mesInputs = document.querySelectorAll ('#formCalculGain .form-control');/*pr recup ts les classes form-control ds mon formulaire ac l id */

mesInputs.forEach(monInput =>{
  monInput.addEventListener('keyup',CalculGain);/*evnt enclenche lorsq une touche est relachée */
  monInput.addEventListener('change',CalculGain);/*evnt est declanché lorsq la valeur est modifiée */
});

