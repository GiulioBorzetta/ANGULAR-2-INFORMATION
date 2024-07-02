# ANGULAR 2 INFORMATION 

Per vedere il sito -> [Clicca qui](https://angular-2-information.netlify.app/)

## Come avviare il sito dal proprio pc?

- Duplicare il progetto sul proprio computer
- Aprire il terminale e usare il comando `npm install`
- una volta scaricati tutti i file, digitare il comando `ng serve` e cliccare sul link che verrà generato

## Come é strutturato il sito?

il sito é costituito da una sola pagina, dove é possibile vedre tutte le news presenti.

![Sito appena entrato](https://github.com/GiulioBorzetta/ANGULAR-2-INFORMATION/blob/main/src/images/foto1.png)

Una volta caricata la pagina, sará presente un header con il nome del sito e subito sotto le news caricate, ovvero 10.

Tra l'header e le news é presente un pulsante in grado di cambiare la posizione delle news, mentre in fondo alla pagina é presente un pulsante per poterne caricare 10 in piú. 

![Cliccando il pulsante Change](https://github.com/GiulioBorzetta/ANGULAR-2-INFORMATION/blob/main/src/images/foto2.png)

## A livello di codice come é costituito?

A livello di codice si possono notare tre cartelle: pages, components, e services.
Nella cartella pages é presente la cartella home, dove é presente tutta la parte delle news.
Nella cartella components é presente la cartella header, dove é presente la parte superiore del sito.
L'ultima cartella, quella dei servizi, ha un file, chiamato main.service.ts, dove sono presenti le funzioni che acquisiscono le informazioni dall'api.
All interno della cartella services é presente un'altra cartella, ovvero module, dove é presente il file con all interno interfaccia User per poter acquisire i dati.

- Nel modulo é possibile notare che User raccoglie piú informazioni rispetto a quelle che mostra sul sito, ho pensato di predisporlo giá per possibili modifiche al sito, anche perché sono state effettuate delle prove ed non incidono sul caricamento della pagina

## Librerie usate

- Angular Material
- RXJS (è una libreria per la programmazione reattiva che utilizza osservabili per comporre programmi asincroni o basati su eventi utilizzando sequenze di dati osservabili.)

## Avviare la parte di test

per avviare la parte di test del codice bisogna andare sul terminale e scrivere il comando `ng test` ed aprirà una pagina web con tutti i test creati (68 test fatti) che vanno a controllare che tutti gli elementi di questo sito web siano giusti e che funzionino perfettamente
