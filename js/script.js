// Logica dell'esercizio

  // Inserimento lista dei cognomi
    // Chiedere all'utente il proprio cognome
      // Stampare la lista ordinata in ordine alfabetico
        //

// lista dei cognomi (array)
var cognomi = ['cofano', 'fogliata', 'guida', 'gennari', 'colloca', 'del piero', 'baggio', 'greco', 'ronaldo', 'gattuso'];

// Chiedere all'utente il suo cognome
var cognomeUser = prompt('Ciao, inserisci il tuo cognome');
while (cognomeUser.length <= 1) {
  cognomeUser = prompt('Ciao, inserisci il tuo cognome');
}
