# Interval

Timer a intervalli per l'allenamento, installabile su iPhone come web app: gratis, funziona offline, non scade.

**App:** https://profets.github.io/Interval-Timer/

Struttura del timer: Prepare → per ogni ciclo, N round di Work / Rest (niente Rest dopo l'ultimo round) → Rest macro tra un ciclo e l'altro.

---

## Installarla sull'iPhone
1. Apri il link qui sopra con **Safari** (Chrome su iPhone non permette di installarla).
2. Tocca **Condividi** (il quadrato con la freccia) → **Aggiungi alla schermata Home** → **Aggiungi**.
3. Apri Interval dall'icona: parte a tutto schermo, senza la barra di Safari.

Le impostazioni restano salvate sul telefono.

## Aggiornamenti
L'app è pubblicata con **GitHub Pages** da questo repository (branch `main`, cartella `/`). Ogni modifica caricata qui va online in 1-2 minuti.
Sul telefono: chiudi Interval dal multitasking e riaprilo. L'app scarica sempre la versione più recente; se vedi ancora quella vecchia, ripeti una seconda volta.

---

## File
```
index.html              l'app
manifest.webmanifest    nome, icona e colori per la schermata Home
sw.js                   funzionamento offline (aumenta la versione CACHE a ogni rilascio)
keepawake-a.mp4         tiene lo schermo acceso mentre il timer gira (video minuscolo con audio silenzioso)
apple-touch-icon.png    icona iPhone
icon-192.png / icon-512.png
fonts/                  Urbanist e JetBrains Mono (licenza libera OFL)
```

## Da sapere sull'iPhone
- **Niente suoni?** Controlla l'interruttore del silenzioso: su iOS le web app rispettano la modalità silenziosa. Alza anche il volume.
- **Il primo suono parte al primo tocco:** è una regola di iOS, il primo "Start" sblocca l'audio.
- **Schermo sempre acceso:** mentre il timer gira l'app tiene acceso lo schermo da sola. Se dovesse spegnersi, imposta *Impostazioni → Schermo e luminosità → Blocco automatico → Mai* durante l'allenamento.
- **A schermo bloccato** il timer resta preciso, ma suoni e voce si fermano finché non riapri l'app.
- **Fluidità:** con la *Modalità risparmio energetico* attiva, iOS limita le animazioni a 30 fps.
- **Voce:** usa la voce inglese del telefono. Per una voce più naturale scarica una voce "Avanzata/Premium" in *Impostazioni → Accessibilità → Contenuto letto ad alta voce → Voci → Inglese*.
