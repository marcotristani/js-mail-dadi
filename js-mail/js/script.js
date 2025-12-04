//Creare array con n email x
emailAccess = ['prova.dd@hotmail.it', 'ahahhaha@hotmail.it', 'astrodelciel@gmail.com', 'vivalapappa@gmail.com','programmareinjs.stiamomessimale.com'];
console.log(emailAccess);

//chiedere email a utente tramite prompt
emailUser = prompt('Inserire mail');
console.log(emailUser);

//verificare se tra le email della lista c'è l'email uguale a quella inserita dall'utente
let messaggio = "Accesso negato";//Esito negativo di default

for(let i = 0; i < emailAccess.lenght || emailUser === emailAccess[i]; i++ ){
    if ( emailUser === emailAccess[i]){
        messaggio = "Accesso approvato";//se la consìdizione si verifica dare esito positivo altrimenti dare esito negativo(di default)
    }
}

//OUTPUT
console.log(messaggio);
