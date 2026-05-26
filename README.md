# KUCKUCK FILES — Bundesermittlungsstelle für Geometry-Dash-Vorfälle

Static troll-site für Kuckuck (Jason). Statisches HTML/CSS/JS — läuft auf GitHub Pages ohne Build-Step.

## Lokal testen

Doppelklick auf `index.html` reicht eigentlich. Wenn du's "richtig" testen willst (manche Browser sind kapriziös bei `file://` und relativen Pfaden zu Subordnern wie `akten/`), kurz einen Mini-Server starten:

```powershell
# Python (kommt mit Windows wenn installiert)
python -m http.server 8080
# dann: http://localhost:8080
```

oder

```powershell
# Node, wenn du npx hast
npx serve
```

## Struktur

```
Kuckuckonline/
├── index.html                  Hauptseite (alle Akten + Personen + Beweise + Werbung + Gamble-Button)
├── gamble.html                 GAMBLEAUTOMAT — funktionsfähiger Slot mit Baft-Coins
├── easter-eggs.html            "Geheimer Mitarbeiter-Leitfaden" mit allen Easter Eggs gelistet
├── marbles.html                /marbles — klickbare Murmel, "gleich."
├── 404.html                    Wegg-geweht-Fehlerseite
├── akten/
│   ├── 044-verboten.html       Versteckt: "rekonstruierte" 48H-Battle-Akte (REDACTED-Hover)
│   └── 069-geheim.html         Versteckt: Rosa-Kopfhörer-Protokoll. Rick-Roll am Ende.
├── css/style.css
├── js/main.js                  Modal-Logik + alle Easter Eggs
├── img/                        Umbenannte AI-Bilder (sprechende Dateinamen)
├── aipics/                     Originale (nicht verlinkt, aber falls du sie noch brauchst)
└── Interne Ermittlungsakte.pdf Quelldokument
```

## Easter Eggs — Liste zum Abhaken

### Visuell auf der Hauptseite
- [ ] **Cookie-Banner** mit "Akzeptieren" / "Auch akzeptieren" / "Ablehnen (deaktiviert)"
- [ ] **Live-Ticker** scrollt oben durch absurde "Breaking News"
- [ ] **Conspiracy-Board** im Hero: Polaroids mit Tape + handschriftliche Sticky-Notes + rote Fäden zwischen Pinnnadeln
- [ ] **Klassifizierungssystem** mit Kategorien `GRÜN`, `ORANGE`, `ROT`, `SCHWARZ`, `AURA`, `TOP 1`
- [ ] **Personen-Wand** mit Steve als komplett `█████` REDACTED-Profil
- [ ] **Beweismittelkammer** mit Asservaten-Tags auf jedem Bild

### Versteckte Links / Outbound-Trolls
- [ ] **"Hintergrundmusik der Behörde"** = ELE SPONGEBOB (`youtu.be/9XSONr2tCDQ?t=22`)
- [ ] **"Hilfe & FAQ"** = Rick Roll
- [ ] **"Technischer Support"** = Google-Suche `Waschmaschine reparieren`
- [ ] **"Bearbeitungszeit beschleunigen"** = Wikipedia "Bürokratie"
- [ ] **"Beschwerde einreichen"** = wikiHow `Complain Effectively`
- [ ] **"Tung-Tung-Tung-Sahur-Hommage"** = YouTube-Suche
- [ ] **"Geometry Dash beschaffen"** = Steam-Shop-Page
- [ ] **"Lambo konfigurieren"** = Lamborghini Huracán Configurator
- [ ] **"Acer-Stuhl Garantie"** = Acer DE
- [ ] **"Monster White beschaffen"** = Monster Energy Website
- [ ] **GD-Level-Links** (Shukufuku, Niwa, Aeternus, etc.) = Google-Suchen auf den Level-Namen
- [ ] **`069-geheim.html`** finaler Button = noch ein Rick Roll
- [ ] **"Monster White"** im winzigen Footer-Text → öffnet die geheime #069-Akte
- [ ] **"Impressum"** → `akten/044-verboten.html` (die rekonstruierte 48H-Battle-Akte)
- [ ] Hidden Link mit `position:absolute; left:-9999px` für DevTools-Schnüffler

### Versteckte Akten
- [ ] **Dossier #120 — verschlüsselt** auf der Hauptseite. Passwort-Hinweis: "Anzahl der Huracáns im Vault". Akzeptiert: `ja`, `alle`, `zu viele`, oder eine beliebige Zahl. Belohnung: Die "Wahrheit" über polnischen Zoink / Steve / Triple-T.
- [ ] **`/marbles`** → Murmel-Arena. Klick rollt die Murmel, Status-Text wechselt zwischen "gleich.", "später vielleicht.", etc. Anmelden setzt deinen Namen in die Warteliste.
- [ ] **`/akten/069-geheim.html`** → "Rosa-Kopfhörer-Protokoll". Findet man über "Monster White"-Link oder durch herumprobieren.
- [ ] **`/akten/044-verboten.html`** → REDACTED-Balken in der Akte, beim Hover-Tooltip steht die wahre Geschichte (21 zu 732).

### Interaktiv
- [ ] **Wappen 7× klicken** → AURA-MODUS (Body kriegt sanfte Hue-Rotate-Animation + Watermark im Hintergrund)
- [ ] **Konami-Code** ↑↑↓↓←→←→ B A → WAVE-CARRIED-Modus (Screen wackelt, rotes Glühen)
  - 3× ausgelöst → Alert "genug wave parts heute. — jughead"
  - 5× ausgelöst → Seite rotiert 180° für 2 Sekunden
- [ ] **Counter im Footer** klicken: "TAGE SEIT WAVE-CARRIED: 0" → -1 → "ABSTÜRZT WEGEN AURA" → "JUGHEAD WURDE INFORMIERT"
- [ ] **"Sichtung melden"-Formular** abschicken → Modal "MELDUNG SYSTEMATISCH WEGGEWEHT"
- [ ] **Mitarbeiter-Login** oben rechts → Spezialantworten für: `jughead`, `kuckuck`, `jason`, `plexi`, `admin`, `triple-t`, `steve`
- [ ] **Triple-Click auf leerem Bereich** → "TUNG TUNG TUNG SAHUR" Popup
- [ ] **Rechtsklick 3× hintereinander** → "NEIN. — Acer-Stuhl" Alert
- [ ] **Doppelklick auf Wörter wie "Acer" oder "Stuhl"** → "ACER-STUHL HAT SICH GEMELDET"
- [ ] **Zu schnell scrollen** → "AURA-OVERFLOW"-Warnung am unteren Rand
- [ ] **90 Sekunden idle (keine Maus/Tastatur)** → "NOCH DA? AURA INSTABIL"-Popup
- [ ] **Beforeunload** (während Aura-/Wave-Mode aktiv) → "warte kurz" Verlassen-Bestätigung
- [ ] **Im DevTools öffnen** → BEGV-Warntext erscheint
- [ ] **Tab wechseln** → Title wird zu "kuckuck vermisst dich..."

### Auf der Seite passiert von alleine
- [ ] **Title cycling** alle 6 Sekunden (KUCKUCK FILES → WAVE CARRIED → DAS IST FREE → 五条悟 → TUNG TUNG TUNG SAHUR → NOT CARRIED → ...)
- [ ] **Random Aura-Popup** unten links alle 2–5 Minuten ("plexi hat ELE SPONGEBOB angemacht", "jughead wurde wieder weggeweht", etc.)
- [ ] **Random REDACTED-Wörter**: alle 25s werden zufällig Wörter wie "Kuckuck", "Wave", "Aura" auf der Seite kurz schwarz übermalt
- [ ] **Schmetterling/Bambi/Sonnenblume** flattert alle 25–90s von links nach rechts über die Seite
- [ ] **Kuckuck-Cursor** (🎧 Kopfhörer) erscheint mit kleiner Chance einmal pro Session für ~8s

### Tastatur-Wörter (irgendwo auf der Seite tippen, ohne Inputfeld)
- [ ] Tippe **`jughead`** → schwarzer Fullscreen "JUGHEAD WURDE INFORMIERT"
- [ ] Tippe **`marbles`** → Weiterleitung zu `marbles.html`
- [ ] Tippe **`aura`** → Aura-Modus toggle

### Text-Selektion
- [ ] Markiere "wave carried", "aura", oder "tung tung tung sahur" → Hinweis in der Konsole

### DevTools / Konsole
- [ ] `kuckuck()` → liefert Hinweis auf `/marbles`
- [ ] `wave()` → triggert Wave-Carried-Modus
- [ ] `ele()` / `spongebob()` → öffnet ELE SPONGEBOB (richtige URL)
- [ ] `tungtungtung()` / `sahur()` → ASCII-Drop
- [ ] `steve()` → Bestätigung Steve = Kurzhaarmeister
- [ ] `polnisch()` → Bestätigung polnischer Zoink = Kuckuck
- [ ] `acer()` / `acerstuhl()` → Acer-Stuhl meldet sich
- [ ] `monster()` → liefert `"WHITE."`
- [ ] `jughead()` → liefert `"weggeweht."`
- [ ] `aura()` → liefert `9999`
- [ ] Beim DevTools-Öffnen: ASCII-Kuckuck + Befehls-Liste

### GD-Level-Namen versteckt
Im Footer unter "LEVEL-DATENBANK" als klickbare Google-Such-Links: Shukufuku · Delightful Blossoms · Niwa · Delta Interface · Black Blizzard · Astral Divinity. Weitere im Akte-Content: Arctic Lights (#095), Aeternus (#021), Delta Interface (#028), White Blizzard (im Crazy-Demons-Ranking erwähnt).

### Identitäten (aufgelöst in Akte #120)
- **Jason = polnischer Zoink = Deutscher Zoink = Kuckuck** (eine Person, vier Identitäten, ein Acer-Stuhl)
- **Steve = Kurzhaarmeister** (Schnurrbart bestätigt durch DNA-Probe)
- **Triple-T = Tung Tung Tung Sahur** (italienische Brainrot-Herkunft, bewaffnet mit Holz)

### Werbung & Side-Inhalte (auf der Hauptseite verteilt)
- **Monster White E-Girl** Werbung (zwischen Klassifizierung und Akten)
- **Black Blizzard von KrmaL** Werbung (zwischen Akten und Personen)
- **AURA WEEKLY Newsletter** Anmeldung (→ Modal "ANMELDUNG WEGGEWEHT")
- **Was unsere Klienten sagen** — 6 Fake-Testimonials (plexi, Jughead, Aclasher, Triple-T, etc.)
- **Bambiland-Themenpark** Werbung (→ Modal "Park existiert physisch nicht")
- **Acer-Stuhl** Werbung (→ acer.com)
- **Tung Tung Tung Sahur Holz** Werbung (→ YouTube)

### GAMBLEAUTOMAT (`gamble.html`)
- 100 Baft-Coins Startguthaben (persistent via localStorage)
- 8 Symbole: ⚡ 🐗 🦌 🧽 🎧 🔥 🚗 💎 (3× 💎 = JACKPOT)
- 4 Bet-Levels: 10 / 50 / 100 / 500
- DOUBLE OR NOTHING (45/55 — natürlich)
- ALL IN Button
- BAFT-COIN SHOP: 4 Pakete, alle führen zu Rick Roll
- Stats: Spins, Wins, Jackpots, größter Win, Netto-Verlust, Zeit verschwendet
- Coin-Rain bei großen Wins / Jackpot
- Konsolen-Cheat: `gibAuraGib(1000000)` (Jughead wird informiert)
- Beratungs-Link (Wikipedia "Pathologisches Spielen")
- Spaß-Mock-Messages bei Verlusten ("plexi hat ele spongebob angemacht. das stört den rng.")

### "ALLE EASTER EGGS" Button (oben links, fixed)
- **Click 1:** Button springt nach rechts oben, Text: "NEIN HIER"
- **Click 2:** Button springt nach links unten, Text: "JETZT WIRKLICH HIER"
- **Click 3:** Text: "NA GUT." → öffnet `easter-eggs.html` (komplette Easter-Egg-Liste als Mitarbeiter-Leitfaden)
- Bonus: Bei Mouseover zwischen Klicks zuckt der Button leicht weg

### ELE SPONGEBOB Streifen (ganz oben)
- Auffällig gelber Streifen mit Marquee-Schwämmen über die ganze Breite
- "WILLST DU ELE SPONGEBOB HÖREN? — JA"
- Klick auf JA → confirm-Dialog → öffnet `youtu.be/9XSONr2tCDQ?t=22`
- Klick auf den Streifen drumherum triggert den Button auch

### 🔥 SananenBaft Roast-Button
- Großer roter Button zwischen Testimonials und Beweismittelkammer
- 30 unique Roast-Nachrichten in einem Modal
- "NOCHMAL ROASTEN" für weitere
- Counter: "geröstet X mal · unique Y / 30"
- Bei allen 30 gesehen: "RESPEKT. SOMETHING WRONG WITH YOU."
- Console: `roast()`, `roaste()`, `sananenbaft()`
- Tipp-Wörter: `roast` oder `sanan`
- Wappen 3× doppelklicken → triggert auch einen Roast
- DevTools öffnen → SananenBaft druckt einen zufälligen Roast in die Konsole

### Aclasher = Admin
- In Personen-Wand bestätigt
- Login mit `aclasher` oder `admin` → ✓ funktioniert (alle anderen scheitern)
- Live-Ticker erwähnt "Aclasher (admin) hat sich eingeloggt — root-zugriff bestätigt"
- Console: `aclasher()` / `admin()` geben root-Zugriff-Bestätigung

### Zusätzliche subtile Trigger
- **Kollektiver Mental Breakdown:** alle paar Minuten wackeln gleichzeitig alle Werbungen + GAMBLEAUTOMAT + Roast-Button kurz
- **Random TUNG TUNG TUNG SAHUR:** Text-Banner taucht zufällig irgendwo auf der Seite auf
- **`kuckuck` tippen:** "KUCKUCK KUCKUCK" Vollbild-Banner
- **`gamble` / `baft` tippen:** führt zum Gambleautomat
- **`ele` tippen:** öffnet ELE Spongebob direkt
- **Counter 7× klicken:** alle Akten-Karten "atmen" kurz + Konfetti

## Was du noch tun könntest (manuell, später)

- **Bilder aus dem PDF rauszubekommen** (Bambiland, Crazy Demon Duel, Gojo, Wave Carried, Aeternus, Delta Interface, Mass Monster). Aktuell werden für diese Akten REDACTED-Platzhalter angezeigt — das passt zwar zum Bürokratie-Theme, aber wenn du die Originale willst: PDF → Screenshots ziehen → in `img/` ablegen → in `js/main.js` die `bild:`-Felder der entsprechenden Akten setzen.
- **Eigene Domain** wenn `kuckuck.online` noch frei ist, dann ist das *der* Name.
- **Audio** für ELE-SPONGEBOB-Easter-Egg, falls Copyright dich nicht stört (ist es nicht, technisch).
- Mehr Akten reinwerfen — die `AKTEN`-Konstante in `js/main.js` ist self-documenting, einfach neuen Eintrag dazuschreiben + auf der Hauptseite eine Card mit `data-akte="XXX"`.

## Hosting auf GitHub Pages

Wenn du soweit bist:
```
git init
git add .
git commit -m "kuckuck files leak"
git branch -M main
git remote add origin git@github.com:DEINUSER/kuckuckonline.git
git push -u origin main
```
Dann auf GitHub: Settings → Pages → Source: `main`, Root: `/`. Fertig.

— *Diese README wurde NICHT von KI generiert. Maximal von Aura.*
