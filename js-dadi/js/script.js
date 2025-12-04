//generare un numero random da pc ta 1 e 6
numberPc = Math.floor(Math.random() * 6) + 1;

//far inserire un numero all'utente con prompt
// // verificare che queto numero sia tra 1-6
let numberUser = 0;
while (numberUser < 1 || numberUser > 6 || isNaN(numberUser) ) { //faccio inserire il numero fin quando quasta condizione 
                                                                // non diventa fasla( ovvero fin quando il numero non sia 
                                                                // nè  minore di uno e nè maggiore di 6) e allo stsso tempo  
                                                                // deve essere un valore di tipo numerico
  numberUser = parseInt(prompt("Inserire un numero compreso tra 1 e 6"));
}
console.log(numberPc, numberUser);

// se è cosi allora confrontarlo con numero del pc
let result = "Hai vinto";

if( numberPc > numberUser){// se maggiore il numero del pc allora l'utente ha perso
    result = "Hai perso";
}else if (numberUser === numberPc){// tenere presente anche la condizione in cui pc e giocatore dicano lo steso numero, allora sarà pareggio
    result = "Hai pareggiato";
}
console.log(result);


