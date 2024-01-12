## js-mail-dadi

## TRACCIA

```
@qui
Ciao ragazzi,
Esercizio di oggi: JS Mail & Dadi

Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:

1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
   Buon lavoro e buon divertimento!
```

## ESERCIZIO MAIL

1. Creo una lista con all'interno degl'indirizzi e-mail
2. Creo una variabile risultatoConfronto a cui assegno il valore falso
3. Tramite un form chiedo all'utente di inserire la sua mail
4. Alla pressione di un pulsante:
   - recupero il valore inserito dall'utente
   - lo salvo in una variabile
   - PER OGNI e-mail nella lista:
     - SE l'indirizzo utente è uguale a quello della lista:
       - modifico il valore di risultatoConfronto in vero
       - esco dal ciclo
5. verifico
   - SE risultatoConfronto è vero:
     - Stampo mail presente
   - ATRIMENTI:
     - Stampo mail non presente

## ESERCIZIO DADI

1. Creo una varibile giocatore
2. Creo una variabile computer
3. Creo una variabile confronto
4. Genero un numero random da 1 a 6:
   - lo assegno alla variabile giocatore
5. Genero un numero random da 1 a 6:
   - lo assegno alla variabile computer
6. Confronto i due valori:
   - SE giocatore è maggiore di computer:
     - Assegno alla variabile confronto "giocatore"
   - ALTRIMENTI SE computer è maggiore di giocatore:
     - Assegno alla variabile confronto "computer"
   - ALTRIMENTI:
     - Assegno alla variabile confronto "pareggio"
7. Stampo la variabile confronto
