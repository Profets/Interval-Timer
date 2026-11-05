# Interval — web app installabile su iPhone (gratis, senza scadenza)

In questa cartella c'è l'app pronta da pubblicare. Una volta online la apri con Safari, la aggiungi alla schermata Home e si comporta come un'app: icona, schermo intero, funziona anche offline, non scade mai.

```
index.html              l'app
manifest.webmanifest    nome, icona e colori per la schermata Home
sw.js                   la fa funzionare anche senza connessione
keepawake.mp4           tiene lo schermo acceso mentre il timer gira
apple-touch-icon.png    icona iPhone
icon-192.png / icon-512.png
fonts/                  Urbanist e JetBrains Mono (licenza libera OFL)
```

Carica **tutti** i file e la cartella `fonts` così come sono, senza cambiarne i nomi. Questo file LEGGIMI.md puoi anche non caricarlo.

---

## 1. Pubblicala gratis

### A) GitHub Pages — consigliata (gratis, nessun badge)
1. Crea un account gratuito su **https://github.com** (in alto a destra *Sign up*).
2. In alto a destra **+ → New repository**: nome `interval`, visibilità **Public**, poi **Create repository**.
3. Nella pagina del repository clicca il link **uploading an existing file**, oppure *Add file → Upload files*.
4. Apri la cartella `interval-webapp` in Esplora file, seleziona **tutto il contenuto** (Ctrl+A: i file e la cartella `fonts`) e trascinalo nella pagina. Aspetta che finisca il caricamento e premi **Commit changes**.
5. Vai su **Settings → Pages**. In *Build and deployment → Source* scegli **Deploy from a branch**, poi Branch **main** e cartella **/ (root)**, e premi **Save**.
6. Dopo 1-2 minuti, ricaricando la pagina, compare in alto l'indirizzo: `https://TUONOME.github.io/interval/`.
7. **Per aggiornarla:** *Add file → Upload files*, trascina di nuovo il contenuto della cartella (i file con lo stesso nome vengono sostituiti) e premi **Commit changes**. In 1-2 minuti è online.

### B) Netlify Drop
Pubblicare è più rapido (trascini la cartella su https://app.netlify.com/drop), ma sul piano gratuito Netlify mostra un badge "Powered by Netlify" che si toglie solo pagando. Dentro l'app puoi nasconderlo toccando **Hide this badge**: iOS se lo ricorda finché usi l'app almeno una volta ogni 7 giorni.

---

## 2. Installala sull'iPhone
1. Apri l'indirizzo con **Safari**. Deve essere Safari: Chrome su iPhone non permette di installarla.
2. Tocca **Condividi** (il quadrato con la freccia) e poi **Aggiungi alla schermata Home** → **Aggiungi**.
3. Apri Interval dalla nuova icona: parte a tutto schermo, senza la barra di Safari.

Le tue impostazioni restano salvate sul telefono.

---

## 3. Da sapere sull'iPhone
- **Niente suoni?** Controlla l'interruttore laterale del silenzioso: su iOS 16 le web app rispettano la modalità silenziosa. Alza anche il volume.
- **Il primo suono parte al primo tocco:** è una regola di iOS, il primo "Start" sblocca l'audio.
- **Schermo sempre acceso:** mentre il timer gira, l'app tiene acceso lo schermo da sola. Se dovesse spegnersi, imposta *Impostazioni → Schermo e luminosità → Blocco automatico → Mai* mentre ti alleni.
- **A schermo bloccato** il timer resta preciso, ma suoni e voce si fermano finché non riapri l'app. È il limite principale rispetto all'app nativa.
- **Dopo un aggiornamento**, se vedi ancora la versione vecchia, chiudi l'app dal multitasking e riaprila.
- **Voce:** usa la voce inglese del telefono. Per una voce più naturale scarica una voce "Avanzata/Premium" in *Impostazioni → Accessibilità → Contenuto letto ad alta voce → Voci → Inglese*.
