let btn = document.getElementById("buttonValidation");
btn.addEventListener('click',CalculGain);

function CalculGain(event){
  event.preventDefault();/*pr que la page ne se reactualise pas au moment du click mais garde les donnees */
  
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
  console.log(totalNet);

  document.getElementById ("resultatBrut").innerText = totalBrut.toFixed(2)+' €';
  document.getElementById("resultatDifference").innerText = chargeADeduire.toFixed(2)+' €';
  document.getElementById("resultatNet").innerText = totalNet.toFixed(2)+' €';

}

