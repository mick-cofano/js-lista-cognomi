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

// Stampa della lista cognomi (while)
var i= 0;
while (i < cognomi.length) {
  document.getElementById('lista-cognomi').innerHTML += '<li>' + cognomi[i] + '</li>';
  i++;
}


// Stampa della posizione "umana" del cognome nella lista
var numeroPosizione = cognomi.indexOf(cognomeUser) + 1;
document.getElementById('posizione-user').innerHTML = 'Salve, lei è nella posizione n. ' + numeroPosizione + ' della lista!';
