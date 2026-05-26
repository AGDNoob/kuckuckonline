/* ============================================================
   BEGV — INTERNES SKRIPT — NICHT VERÄNDERN
   wer das liest: jughead wurde benachrichtigt
   ============================================================ */

// =================================================================
// AKTEN-DATENBANK (wird vom Modal gerendert)
// =================================================================
const AKTEN = {
  "003": {
    nr: "DOSSIER #003", titel: "DIE BAMBILAND-ZONE",
    klass: "ROT", datum: "20.05.2026", ort: "Bambiland-Zone",
    bild: null,
    inhalt: `
      <p>Nach monatelangen Untersuchungen konnte erstmals bildlich festgehalten werden, wie sich Kuckuck Zugang zur sogenannten "Bambiland-Zone" verschaffte.</p>
      <p>Laut Zeugenaussagen von User <b>plexi</b> verbrachte Kuckuck dort mehrere Stunden täglich damit, mit Rehen zu kommunizieren und Schmetterlinge "seine kleinen Zuschauer" zu nennen.</p>
      <p><b>Besonders auffällig:</b></p>
      <ul class="absurd-list">
        <li>rosa Kopfhörer zur Tarnung</li>
        <li>verdächtig gute Stimmung</li>
        <li>keinerlei Kontakt zur Realität</li>
      </ul>
      <p>Moderator <b>Jughead</b> meldete den Vorfall bereits 17 Mal, wurde laut eigenen Aussagen jedoch "systematisch weggeweht".</p>
      <div class="marginalia">"er hat dem schmetterling einen namen gegeben." — anonym</div>
      <p class="quote">Die Ermittlungen laufen.</p>`
  },
  "007": {
    nr: "DOSSIER #007", titel: "CRAZY DEMON DUEL",
    klass: "ROT", datum: "unbekannt", ort: "Kolosseum (geschlossen)",
    bild: null,
    inhalt: `
      <p>Der sogenannte "Crazy Demon Duel"-Vorfall gilt bis heute als eines der brutalsten Ereignisse der Geometry-Dash-Unterwelt.</p>
      <p>Augenzeugen berichten, dass Kuckuck nach einem verlorenen Attempt psychisch vollständig zusammengebrochen sei und anschließend von zwei Entitäten namens:</p>
      <ul class="absurd-list">
        <li>"Der Holzmann"</li>
        <li>"Captain Carry"</li>
      </ul>
      <p>öffentlich im Kolosseum gedemütigt wurde.</p>
      <p>User <b>mystery</b> behauptet bis heute, man könne im Hintergrund schwach "NOT CARRIED" hören.</p>
      <p>Die Arena wurde kurze Zeit später geschlossen.</p>
      <p class="quote">Offizielle Begründung: "zu goofy."</p>`
  },
  "011": {
    nr: "DOSSIER #011", titel: "DER GOJO-VORFALL",
    klass: "ROT", datum: "Frühjahr 2026", ort: "Acer-Stuhl-Setup",
    bild: null,
    inhalt: `
      <p>Im Frühjahr begann Kuckuck plötzlich damit, sich selbst als "stärksten Streamer der Neuzeit" zu bezeichnen.</p>
      <p>Kurz darauf erschienen erste Bilder mit:</p>
      <ul class="absurd-list">
        <li>leuchtenden Augen</li>
        <li>weißen Haaren</li>
        <li>mysteriösen Handzeichen</li>
        <li>extrem bedrohlicher Aura trotz Acer-Stuhl</li>
      </ul>
      <p>User <b>ArenaiTV</b> meldete daraufhin: <i>"Bro denkt wirklich er ist Gojo."</i></p>
      <p><b>Aclasher</b> antwortete lediglich: <i>"wir sind cooked."</i></p>
      <div class="marginalia">五条悟 (intern: "der unbeschwerte")</div>
      <p>Bis heute ungeklärt: Warum die Aura-Energie hauptsächlich bei 72 BPM Heart Rate verschwindet.</p>`
  },
  "014": {
    nr: "DOSSIER #014", titel: "WAVE CARRIED",
    klass: "GEFÄHRLICH", datum: "laufend seit 2024", ort: "Geometry Dash",
    bild: null,
    inhalt: `
      <p>Die Untersuchungen rund um den sogenannten "Wave Carried"-Vorfall laufen inzwischen seit mehreren Monaten.</p>
      <p>Experten der Geometry-Dash-Community gehen davon aus, dass Kuckuck über Jahre hinweg eine unnatürlich starke Abhängigkeit vom Wave-Gamemode entwickelt hat.</p>
      <p><b>Der Vorwurf:</b> Sobald ein Level auch nur ansatzweise normales Gameplay enthält, verschwindet ein erheblicher Teil seiner Kräfte.</p>
      <p>Sobald jedoch Wave auftaucht:</p>
      <ul class="absurd-list">
        <li>plötzlich göttliche Präzision</li>
        <li>unmenschliche Reaktionszeiten</li>
        <li>vollständiger Kontrollverlust über die Aura im Raum</li>
        <li>300% mehr Selbstvertrauen</li>
      </ul>
      <p class="quote">"Der Mann struggelt 4 Stunden an einem Cube-Part und wird dann plötzlich zu einem Endboss sobald Wave kommt." — Aclasher</p>
      <p><b>Besonders kritisch:</b> Die Ermittler fanden heraus, dass Kuckuck seine schwierigsten Passagen regelmäßig mit Aussagen wie "warte bis der Wave-Part kommt" kommentierte.</p>
      <div class="marginalia">User plexi meldete: ELE SPONGEBOB lief bereits zum 8. Mal an diesem Tag.</div>
      <p>Jughead bezeichnete den Zustand offiziell als: <b>"terminally wave carried."</b> Der Begriff wurde kurze Zeit später verboten.</p>`
  },
  "021": {
    nr: "DOSSIER #021", titel: "AETERNUS VERIFICATION",
    klass: "TOP 1", datum: "letzter Quartal", ort: "Heim-Setup",
    bild: null,
    inhalt: `
      <p>Die sogenannte "Aeternus-Verifikation" gilt laut internen Ermittlungsakten als der Moment, in dem Kuckuck endgültig jede Verbindung zur Außenwelt verlor.</p>
      <p>Offiziellen Angaben zufolge benötigte er lediglich:</p>
      <ul class="absurd-list">
        <li>10 Attempts</li>
        <li>keinerlei Angst</li>
        <li>absolut unverantwortliches Selbstvertrauen</li>
      </ul>
      <p>Experten halten dies bis heute für biologisch unmöglich.</p>
      <p><b>Besonders auffällig:</b> Der Gesichtsausdruck auf dem geleakten Thumbnail wurde später als <b>"klinisch wahnsinnig"</b> eingestuft.</p>
      <p class="quote">"Der Mann schaut mich an als wäre ich der nächste Click." — Arthur</p>
      <p>Währenddessen behauptete <b>ArenaiTV</b>, dass Kuckuck während des Runs mehrfach "das ist free" gesagt habe — obwohl sich Zuschauer bereits mental verabschiedeten.</p>
      <div class="marginalia">Bis heute ungeklärt: Warum der rote Dämon im Thumbnail sichtbar nervös wirkt.</div>`
  },
  "028": {
    nr: "DOSSIER #028", titel: "DELTA INTERFACE MENTAL COLLAPSE",
    klass: "NICHT UNTER KONTROLLE", datum: "vor 2 Wochen", ort: "Acer-Stuhl-Setup",
    bild: null,
    inhalt: `
      <p>Der "Delta Interface"-Zwischenfall begann offiziell als gewöhnlicher Stream — und endete in einem vollständigen psychischen Ausnahmezustand.</p>
      <p>Ermittler konnten rekonstruieren, dass Kuckuck nach Erreichen von 100% mehrere Minuten lang nicht mehr zwischen:</p>
      <ul class="absurd-list">
        <li>Realität</li>
        <li>Geometry Dash</li>
        <li>und Usernamen im Chat</li>
      </ul>
      <p>unterscheiden konnte.</p>
      <p>Die Worte <b>"Unlocked new Icon"</b> wurden laut Zeugen insgesamt <b>43 Mal</b> wiederholt.</p>
      <p>User <b>plexi</b> reagierte darauf mit einem weiteren ELE-SPONGEBOB-Songrequest. Niemand stoppte ihn.</p>
      <p class="quote">"Ich dachte erst das wäre normaler Rage. Dann hat er angefangen mit dem Acer-Stuhl zu diskutieren." — Jughead</p>
      <div class="marginalia">Diese Zustände treten normalerweise erst nach 8000 Attempts oder französischen Wave-Parts auf. Kuckuck erreichte ihn deutlich früher. Die Wissenschaft steht vor einem Rätsel.</div>`
  },
  "031": {
    nr: "DOSSIER #031", titel: "OPERATION MASS MONSTER",
    klass: "VERBOTEN IN 17 FITNESSSTUDIOS", datum: "Sommer 2025", ort: "Kuckuck-Studio + Gym",
    bild: null,
    inhalt: `
      <p>Nach langer Untersuchung bestätigten Experten, dass Kuckuck zeitweise versuchte, seine Geometry-Dash-Skills durch reine Muskelmasse zu erhöhen.</p>
      <p>Das Ergebnis: eine physische Form, die laut Ermittlern <b>"nicht mehr durch normale Mathematik erklärbar"</b> sei.</p>
      <p>Augenzeugen berichten:</p>
      <ul class="absurd-list">
        <li>plötzlich 240kg Bizeps-Curls</li>
        <li>dauerhaft maximale Aura</li>
        <li>Proteinpulver-Vorräte für mehrere Jahrzehnte</li>
        <li>bedrohliche Flex-Posen während harmloser Streams</li>
      </ul>
      <p>User <b>mystery</b> behauptet sogar, Kuckuck habe einmal versucht, einen Wave-Part "mit purem Latissimus" zu spielen.</p>
      <p>Die Behörden griffen ein, nachdem Zuschauer meldeten, dass ihre Monitore durch die Armgröße verdeckt wurden.</p>
      <p class="quote">"bro hat Creative Mode im Gym aktiviert." — Aclasher</p>
      <div class="marginalia">Der aktuelle Aufenthaltsort der ursprünglichen Ärmel bleibt unbekannt.</div>`
  },
  "039": {
    nr: "DOSSIER #039", titel: "DER HAARVORFALL",
    klass: "VERTUSCHT", datum: "14.04.2026", ort: "Acer-Stuhl-Setup",
    bild: "img/haarvorfall.png",
    bildunter: "geleaktes Material, wenige Stunden nach dem 'Großen Haarverlust'",
    inhalt: `
      <p>Das geleakte Bildmaterial zeigt Kuckuck nur wenige Stunden nach dem sogenannten <b>"Großen Haarverlust"</b>.</p>
      <p>Laut internen Quellen begann alles mit den Worten: <i>"Bro meine Hairline ist cooked."</i></p>
      <p>Kurz darauf verschwand angeblich innerhalb weniger Tage:</p>
      <ul class="absurd-list">
        <li>die Front</li>
        <li>die Hoffnung</li>
        <li>und ein erheblicher Teil der Aura</li>
      </ul>
      <p class="quote">"Er lächelt zwar… aber seine Augen schreien um Hilfe." — mystery</p>
      <p><b>Besonders verstörend:</b> Ermittler fanden heraus, dass Kuckuck unmittelbar danach begann, Geometry-Dash-Dämonen aggressiver als sonst zu grinden. Psychologen vermuten einen Zusammenhang.</p>
      <div class="marginalia">Jughead kommentierte: "Das ist kein Geheimratsecken mehr. Das ist Geheimregierung."</div>
      <p>Der Fall wurde später aus Rücksicht auf die Zuschauer geschlossen.</p>`
  },
  "044": {
    nr: "DOSSIER #044", titel: "█████████████████",
    klass: "REDACTED", datum: "█████████", ort: "█████████",
    bild: null, redacted: true,
    inhalt: `
      <div style="text-align:center; padding: 40px 20px;">
        <div class="stempel gross schwarz">ZUGRIFF VERWEIGERT</div>
        <p style="margin-top: 30px; font-size: 17px;">Diese Akte wurde auf Anordnung von <b>KURZHAARMEISTER</b> entfernt.</p>
        <p style="margin-top: 20px;">Begründung: <i>"732 zu 21. lass es einfach."</i></p>
        <p style="margin-top: 20px; font-family: 'Caveat', cursive; font-size: 20px;">Vollständige Akte einsehbar unter <a href="akten/044-verboten.html" style="color: var(--stamp-red);">akten/044-verboten.html</a> — auf eigene Verantwortung.</p>
        <p style="margin-top: 40px; font-size: 11px; color: #888;">Hinweis: Der Schnurrbart auf dem Beweisbild ist echt.</p>
      </div>`
  },
  "047": {
    nr: "DOSSIER #047", titel: "SKIBIDI BRAINROT INCIDENT",
    klass: "NICHT MENSCHLICH", datum: "20.05.2026", ort: "Asteroidenfeld (vermutl. Asia-Server)",
    bild: "img/skibidi-toilet.png",
    bildunter: "Kuckuck vs Extreme Demon Toilet — Klassifizierung: GENERATIONELL",
    inhalt: `
      <p>Der "Skibidi Brainrot Incident" gilt als das erste dokumentierte Ereignis, bei dem ein deutscher Streamer offiziell als <b>BRAINROT-INFIZIERT</b> eingestuft wurde.</p>
      <p>Die geleakten Aufnahmen zeigen Kuckuck in direkter Konfrontation mit einer Extreme-Demon-Variante des Skibidi-Toilet-Phänomens — bewaffnet mit einem nicht autorisierten Lichtschwert.</p>
      <ul class="absurd-list">
        <li>rote Laseraugen (siehe auch #060)</li>
        <li>Lichtschwert-Beschaffung nicht geklärt</li>
        <li>kleiner Frosch im linken Eck — Identität unbekannt</li>
        <li>Schädel im rechten Eck — vermutlich Jughead</li>
      </ul>
      <p class="quote">"Wenn er den auch noch verifyt, sind wir alle cooked." — Aclasher</p>
      <div class="marginalia">Wissenschaftlicher Konsens: Brainrot ist ab diesem Punkt nicht mehr reversibel.</div>`
  },
  "051": {
    nr: "DOSSIER #051", titel: "OPERATION WILDSCHWEIN",
    klass: "BIOLOGISCH UNERKLÄRBAR", datum: "letzte Woche", ort: "A3 Richtung Köln",
    bild: "img/wildschwein.png",
    bildunter: "geschätzte Geschwindigkeit: 140 km/h. Funken hinter den Schuhen — bisher ungeklärt.",
    inhalt: `
      <p>Mehrere Zeugen meldeten, Kuckuck sei auf einer deutschen Autobahn mit einem ausgewachsenen Wildschwein auf den Schultern gesichtet worden.</p>
      <p>Laut Ermittlungsakten bewegte er sich dabei mit:</p>
      <ul class="absurd-list">
        <li>geschätzten 140 km/h</li>
        <li>maximaler Aura</li>
        <li>und komplettem Fokus</li>
      </ul>
      <p>Rückfragen von Behörden beantwortete er angeblich nur mit: <i>"ich bin late."</i></p>
      <p><b>Besonders verdächtig:</b> Das Wildschwein wirkte laut Zeugen "ungewöhnlich entspannt".</p>
      <p class="quote">User <b>Arthur</b> vermutet bis heute, dass zwischen beiden eine emotionale Verbindung bestand.</p>
      <div class="marginalia">Die Polizei stellte die Ermittlungen ein, nachdem keiner erklären konnte, warum Funken hinter seinen Schuhen entstanden.</div>`
  },
  "053": {
    nr: "DOSSIER #053", titel: "DAS SONNEN-PHÄNOMEN",
    klass: "AURA", datum: "21.05.2026", ort: "Atmosphäre",
    bild: "img/sonnen-kuckuck.png",
    bildunter: "Satellitenaufnahme. NASA wollte keine Stellungnahme abgeben.",
    inhalt: `
      <p>Am 21.05.2026 meldete die Europäische Weltraumorganisation eine ungewöhnliche Anomalie:</p>
      <p>Die Sonne hatte sich offenbar dazu entschieden, Kuckuck als ihren <b>"persönlichen Anführer"</b> anzuerkennen — vermutlich aufgrund eines kurzzeitigen Aura-Überlaufs während eines Wave-Parts.</p>
      <ul class="absurd-list">
        <li>Sonnenwende um 4° verschoben</li>
        <li>Sonnenblumen drehten sich nach Köln</li>
        <li>pinke Kopfhörer in 150 Millionen km Entfernung klar erkennbar</li>
        <li>plexi war es</li>
      </ul>
      <div class="marginalia">Astronomen vermuten eine Verbindung zum Bambiland-Vorfall (#003).</div>
      <p class="quote">"das geht zu weit. wir sind cooked." — aclasher</p>`
  },
  "060": {
    nr: "DOSSIER #060", titel: "THE DEMON GRIND INCIDENT",
    klass: "NICHT MENSCHLICH", datum: "zwei-tägiger grind", ort: "Wohnzimmer / mental woanders",
    bild: "img/demon-grind.png",
    bildunter: "Full Zoinkification dokumentiert. Dämonen im Hintergrund sichtbar verängstigt.",
    inhalt: `
      <p>Nach einem zweitägigen Extreme-Demon-Grind zeigte Kuckuck erstmals eindeutige Anzeichen vollständiger Dämonisierung.</p>
      <p>Die geleakten Aufnahmen zeigen:</p>
      <ul class="absurd-list">
        <li>rote Laseraugen</li>
        <li>unkontrollierbare Energieausbrüche</li>
        <li>extreme Lautstärke</li>
        <li>und ein gefährliches Maß an Selbstvertrauen</li>
      </ul>
      <p>Laut Aussagen von <b>ArenaiTV</b> soll Kuckuck während des Grinds mehrfach geschrien haben: <b>"DAS IST FREE."</b></p>
      <p>Zu diesem Zeitpunkt war er bereits mental zerstört, übermüdet und vermutlich nicht mehr vollständig anwesend.</p>
      <p><b>Besonders auffällig:</b> Die Extreme-Demons im Thumbnail scheinen Angst vor <i>ihm</i> zu haben.</p>
      <p>Experten bezeichnen diesen Zustand mittlerweile als: <b>"Full Zoinkification."</b></p>
      <div class="marginalia">Jughead reagierte auf das Material lediglich mit: "macht den mann aus."</div>`
  },
  "072": {
    nr: "DOSSIER #072", titel: "PARFÜM-KARTELL",
    klass: "FINANZAMT INFORMIERT", datum: "seit ca. 2024", ort: "diverse Duftanlagen",
    bild: "img/parfuem-creed.png",
    bildunter: "Sichergestellte Aufnahme aus einer hochklassigen Duftanlage. Hinten links: Roja-Bestand.",
    inhalt: `
      <p>Interne Ermittlungen legen nahe, dass Kuckuck heimlich ein luxuriöses Parfüm-Imperium aufgebaut haben könnte.</p>
      <p>Die geleakten Bilder zeigen ihn in einer hochklassigen Duftanlage umgeben von:</p>
      <ul class="absurd-list">
        <li>Creed</li>
        <li>Xerjoff</li>
        <li>Roja</li>
        <li>und absurd viel Geldgeruch</li>
      </ul>
      <p>Laut User <b>plexi</b> begann Kuckuck nach dem Kauf seines ersten Duftes plötzlich Wörter wie "Projection", "Longevity" und "Beast Mode" mit gefährlicher Ernsthaftigkeit zu benutzen.</p>
      <p>Die Behörden wurden misstrauisch, nachdem Zuschauer meldeten, dass seine Aura im Stream plötzlich "nach 400€ roch".</p>
      <p><b>Besonders kritisch:</b> Es existieren Hinweise auf einen geheimen Schwarzmarkt für überdosierte Duftproben.</p>
      <div class="marginalia">Bis heute ungeklärt: Wie viele Menschen bereits von seiner Duftwolke geblendet wurden.</div>`
  },
  "077": {
    nr: "DOSSIER #077", titel: "OPERATION KARTELL BOSS",
    klass: "STEUERHINTERZIEHUNG VERMUTET", datum: "Q1 2026", ort: "unbekannter Stadt-Hub",
    bild: "img/kartell-boss.png",
    bildunter: "Werbeaufnahme der mutmaßlichen Eigenmarke 'KARTELL BOSS'. Slogan: 'Rule your world.'",
    inhalt: `
      <p>Im ersten Quartal 2026 tauchten plötzlich erste Werbeaufnahmen einer mysteriösen Parfüm-Marke namens <b>"KARTELL BOSS"</b> im Netz auf.</p>
      <p>Markenname, Branding und Modell ähneln verdächtig stark einem bekannten Streamer mit pinken Kopfhörern.</p>
      <ul class="absurd-list">
        <li>kein Eintrag im deutschen Markenregister</li>
        <li>keine Lizenz für den Vertrieb von Parfüm</li>
        <li>keine Antwort vom Pressekontakt (existiert nicht)</li>
        <li>aber: konsistente Lieferketten zu Roja, Bleu de Chanel und Xerjoff</li>
      </ul>
      <p class="quote">"Slogan 'Rule your world' ist juristisch problematisch, vor allem in Kombination mit dem Wort 'Kartell'." — Finanzamt-Sprecher (off the record)</p>
      <div class="marginalia">Hinweis: Verbindung zur Akte #072 (Parfüm-Kartell) gilt als bestätigt.</div>`
  },
  "081": {
    nr: "DOSSIER #081", titel: "LAMBORGHINI VAULT",
    klass: "STEUERLICH HOCHINTERESSANT", datum: "endgültig sichergestellt", ort: "Halle, Standort geheim",
    bild: "img/lambo-vault-1.png",
    bildunter: "Mutmaßliche Garage. Hinweis: Anzahl der Huracáns vermutlich relevant für andere Akten.",
    inhalt: `
      <p>Nach jahrelangen Gerüchten tauchten erstmals Bilder der mutmaßlichen Kuckuck-Garage auf.</p>
      <p>Die Halle enthält:</p>
      <ul class="absurd-list">
        <li>dutzende Lamborghinis</li>
        <li>fragwürdigen Reichtum</li>
        <li>und exakt 0 nachvollziehbare Einkommensquellen</li>
      </ul>
      <p>Ermittler vermuten, dass sämtliche Fahrzeuge durch:</p>
      <ul class="absurd-list">
        <li>Geometry Dash Aura</li>
        <li>Dämonenenergie</li>
        <li>oder illegale Thumbnail-Intensität</li>
      </ul>
      <p>finanziert wurden.</p>
      <p class="quote">"Jedes Mal wenn er 100% schafft erscheint irgendwo ein neuer Huracán." — mystery</p>
      <p>Das Finanzamt wollte den Fall untersuchen — verschwand jedoch kurz nach Betreten der Halle.</p>
      <div class="marginalia">Zurück blieb lediglich ein Zettel mit den Worten: "Dream big."</div>`
  },
  "084": {
    nr: "DOSSIER #084", titel: "DER LOLLI-VORFALL",
    klass: "EMOTIONAL", datum: "ca. 1996", ort: "Spielplatz, Bambiland (Vorgängerzone)",
    bild: "img/baby-lolli.png",
    bildunter: "Archivmaterial. Authentizität: laut Bildforensik zu 100% verifiziert. Lolli niemals zurückgegeben.",
    inhalt: `
      <p>Ein lange verschollen geglaubtes Foto aus dem Familienarchiv liefert nun erstmals Erklärungen für Kuckucks späteres Verhalten.</p>
      <p>Die Aufnahme zeigt einen ca. 4 Wochen alten Kuckuck im Bambiland-Park — bereits damals mit pinken Kopfhörern — beim Anblick eines fremden Kindes mit einem Lolli.</p>
      <ul class="absurd-list">
        <li>"NEIIIN! MEIN LOLLI!" — laut Zeugen die ersten Worte des Säuglings</li>
        <li>fremdes Kind: Identität unbekannt, vermutlich später Triple-T</li>
        <li>Lolli wurde laut Akte niemals zurückgegeben</li>
      </ul>
      <p>Psychologen vermuten, dass diese frühe Erfahrung der Auslöser für sämtliche späteren Auseinandersetzungen mit Süßwaren und Captain-Carry-ähnlichen Figuren gewesen sein könnte.</p>
      <div class="marginalia">Verbindung zur Marbles-Unterdrückung (#119) wird derzeit geprüft. Kuckuck verweigert: "späterer Lolli vielleicht."</div>`
  },
  "092": {
    nr: "DOSSIER #092", titel: "CRAZY DEMONS LEADERBOARD-MANIPULATION",
    klass: "ERMITTLUNGEN LAUFEN", datum: "fortlaufend", ort: "Statistik-Server",
    bild: "img/crazy-leaderboard.png",
    bildunter: "Aktuelles Ranking. Auffällig: Mr.Best (Platz 2) hat exakt 3 Demons. Statistisch tief.",
    inhalt: `
      <p>Die offizielle Crazy-Demons-Bestenliste zeigt seit Wochen Auffälligkeiten, die laut interner Analyse nicht mit normalen Spielmechaniken erklärt werden können.</p>
      <p><b>Platz 1:</b> Shine For Ne · <b>19999 Crazy Demons</b><br>
      <b>Platz 2:</b> Mr.Best · <b>3 Crazy Demons</b><br>
      <b>Platz 3:</b> IShowGD · <b>-666 Crazy Demons</b></p>
      <p>Auffälligkeiten:</p>
      <ul class="absurd-list">
        <li>19999 ist statistisch nahezu unmöglich</li>
        <li>negative Demon-Counts sollten technisch nicht existieren</li>
        <li>"Mr.Best" trägt offenbar ein Pappschild</li>
        <li>Confetti im Hintergrund: nicht autorisiert</li>
      </ul>
      <p>Nächstes Level der Wertung: <b>White Blizzard</b>. Eine Verbindung zu Black Blizzard wird vermutet, ist aber juristisch nicht zulässig zu erwähnen.</p>
      <div class="marginalia">Anonymer Hinweis: "frag mal warum shine for ne genau 19999 hat und nicht 20000. das ist das verdächtige."</div>`
  },
  "095": {
    nr: "DOSSIER #095", titel: "ARCTIC LIGHTS — UNTER 1.5K",
    klass: "BIOLOGISCH FRAGWÜRDIG", datum: "vor kurzem", ort: "Acer-Stuhl-Setup",
    bild: "img/arctic-lights.png",
    bildunter: "Thumbnail des umstrittenen Runs. Roter Dämon im Hintergrund nervös.",
    inhalt: `
      <p>Die "Arctic Lights"-Verifikation gilt mittlerweile als der Run, der mehr Fragen aufwirft als beantwortet.</p>
      <p>Laut offizieller Stream-Aufzeichnung soll Kuckuck den Extreme Demon mit <b>unter 1500 Attempts</b> verifiziert haben.</p>
      <p>Statistik-Experten reagierten mit:</p>
      <ul class="absurd-list">
        <li>Unglauben</li>
        <li>Excel-Tabellen</li>
        <li>weiteren Excel-Tabellen</li>
        <li>am Ende: Resignation</li>
      </ul>
      <p class="quote">"Wir haben Modelle berechnet. Das hier ist außerhalb der Modelle." — Statistik-Bot</p>
      <div class="marginalia">Verbindung zu Shukufuku, Delightful Blossoms und Niwa wird derzeit auf Skill-Transfer untersucht.</div>`
  },
  "099": {
    nr: "DOSSIER #099", titel: "BAUMRETTUNG VON BERLIN",
    klass: "HELDENAKTE", datum: "Sturmnacht", ort: "Berlin",
    bild: "img/baumrettung.png",
    bildunter: "Augenzeugenfoto. Wind: 170 km/h. Reaktion: 'warte kurz.'",
    inhalt: `
      <p>Während eines schweren Sturms wurde Kuckuck dabei gefilmt, wie er eigenhändig einen umstürzenden Baum davon abhielt, ein Wohnhaus zu zerstören.</p>
      <p>Augenzeugen berichten:</p>
      <ul class="absurd-list">
        <li>extreme Windgeschwindigkeiten</li>
        <li>fliegende Trümmer</li>
        <li>absolute Panik</li>
      </ul>
      <p>Doch Kuckuck blieb ruhig. Laut User <b>einGDNoob</b> soll er währenddessen lediglich gesagt haben: <i>"warte kurz."</i></p>
      <p>Danach hielt er den gesamten Baum mit bloßen Händen fest.</p>
      <p><b>Besonders verstörend:</b> Seine pinken Kopfhörer funktionierten weiterhin problemlos.</p>
      <div class="marginalia">Die örtlichen Behörden wollten ihn später ehren — doch Kuckuck verschwand bereits wieder im nächsten Geometry-Dash-Stream.</div>
      <p class="quote">Bis heute unklar: War das wirklich ein Mensch — oder bereits reine Aura?</p>`
  },
  "101": {
    nr: "DOSSIER #101", titel: "'HOW TO PLATTFORMER' — TUTORIALSERIE",
    klass: "IRREFÜHREND", datum: "20.–21.05.2026", ort: "YouTube",
    bild: "img/how-to-plattformer-1.png",
    bildunter: "Thumbnail Teil 1. 'Beaten?!' impliziert Erfolg, der nicht stattfand.",
    inhalt: `
      <p>Die "How to Plattformer"-Tutorialserie wurde von Kuckuck als <b>"Lehrmaterial für Anfänger"</b> beworben, hält jedoch keine einzige Erwartung ein.</p>
      <ul class="absurd-list">
        <li>Teil 1 ("BEATEN?!"): zeigt einen einzigen Attempt. Erfolg unklar.</li>
        <li>Teil 2 ("6 Stunden gespielt... durchgespielt!!"): vermutlich 6 Sekunden tatsächliche Tutorial-Zeit, 5h 59min 54s Rage</li>
        <li>kein einziges Tutorial-Element identifiziert</li>
        <li>aber: hervorragende Thumbnails mit Laser-Augen</li>
      </ul>
      <p class="quote">"Wenn das ein Tutorial ist, dann bin ich Jughead." — Aclasher</p>
      <div class="marginalia">Untersuchung: Möglicherweise generiert die Reihe nur Aura und keinerlei Lerneffekt.</div>`
  },
  "108": {
    nr: "DOSSIER #108", titel: "JUGHEAD-MOBBING-KOMPLEX",
    klass: "SEIT JAHREN AKTIV", datum: "fortlaufend", ort: "Twitch-Chat / Discord / IRL",
    bild: null,
    inhalt: `
      <p>Moderator <b>Jughead</b> behauptet seit langer Zeit, systematisch von Kuckuck psychisch destabilisiert zu werden.</p>
      <p>Zu den dokumentierten Vorfällen zählen:</p>
      <ul class="absurd-list">
        <li>plötzliches Weglachen</li>
        <li>grundloses "nein"</li>
        <li>öffentliche Aura-Unterdrückung</li>
        <li>und das wiederholte Ignorieren seiner wichtigen Nachrichten</li>
      </ul>
      <p>Laut Jughead wurde er bereits mehrfach "komplett zerstört", nachdem Kuckuck einfach nur "bro 🐻" geschrieben habe.</p>
      <p><b>Besonders kritisch:</b> Die Angriffe erfolgen meist vor Publikum.</p>
      <p class="quote">"Es ist kein direktes Mobbing. Es ist eher ein permanentes mentales Debuff-System." — mystery</p>
      <div class="marginalia">Kuckuck selbst weist alle Vorwürfe zurück: "Jughead overreacted." Die Ermittlungen laufen seit Monaten — Jughead wurde bisher jedoch nie ernst genommen.</div>`
  },
  "112": {
    nr: "DOSSIER #112", titel: "DIE SAFTI-DÖNER-VERSCHWÖRUNG",
    klass: "UNGEKLÄRT", datum: "unklar", ort: "Döner-Laden (nie betreten)",
    bild: null,
    inhalt: `
      <p>Der sogenannte "Safti-Döner-Plan" gilt bis heute als eines der mysteriösesten Ereignisse der Community.</p>
      <p>Laut Aussagen mehrerer Zeugen kündigten Kuckuck und Safti öffentlich an: <b>"Wir holen gleich Döner."</b></p>
      <p>Doch der Döner wurde niemals gekauft.</p>
      <p class="quote">Keine Bestellung. Keine Lieferung. Keine Sauce. Nichts.</p>
      <p>Ermittler rekonstruierten später den Ablauf:</p>
      <ul class="absurd-list">
        <li>große Ankündigung</li>
        <li>maximale Vorfreude</li>
        <li>plötzlich komplette Funkstille</li>
      </ul>
      <p>User <b>Arthur</b> bezeichnete den Vorfall später als: <b>"größten Foodbait Deutschlands."</b></p>
      <p><b>Besonders verstörend:</b> plexi hatte bereits ELE SPONGEBOB angemacht, um die Döner-Atmosphäre vorzubereiten. Umsonst.</p>
      <div class="marginalia">Bis heute ungeklärt: War der Döner jemals real — oder nur eine Illusion?</div>`
  },
  "117": {
    nr: "DOSSIER #117", titel: "DER UwU-VORFALL",
    klass: "IDENTITÄTSVERLUST", datum: "26.05.2026", ort: "Kuckucks Setup (vermutet)",
    bild: "img/uwu-anime.png",
    bildunter: "Sichergestelltes Material. Acer-Stuhl im Hintergrund eindeutig identifiziert. Person: NICHT eindeutig identifiziert.",
    inhalt: `
      <p>Am 26.05.2026 tauchten geleakte Aufnahmen einer unbekannten Person mit pinken Haaren in Kuckucks Setup auf.</p>
      <p>Forensische Analyse:</p>
      <ul class="absurd-list">
        <li>Acer-Stuhl: ✅ identisch mit Kuckucks (siehe alle anderen Akten)</li>
        <li>Orchidee links: ✅ identisch mit Kuckucks Orchidee</li>
        <li>UwU-Pullover: ❓ noch nie zuvor gesichtet</li>
        <li>Pinke Kopfhörer: ❌ vermutlich Perücke, nicht die echten</li>
      </ul>
      <p>Drei dominante Theorien:</p>
      <ol style="margin-left: 24px;">
        <li><b>Theorie A:</b> Kuckuck ist die Person.</li>
        <li><b>Theorie B:</b> Person ist Kuckuck.</li>
        <li><b>Theorie C:</b> beides gleichzeitig (Aura-Splitting).</li>
      </ol>
      <div class="marginalia">Jughead kommentierte: "ich will da nicht weiter drüber nachdenken."</div>`
  },
  "119": {
    nr: "DOSSIER #119", titel: "MARBLES-UNTERDRÜCKUNG",
    klass: "COMMUNITY EMPÖRT", datum: "seit Tag 1", ort: "jeder Stream",
    bild: null,
    inhalt: `
      <p>Mehrere Zuschauer werfen Kuckuck seit Jahren vor, systematisch Marbles-Runden zu verweigern.</p>
      <p>Trotz öffentlicher Forderungen reagiert er regelmäßig mit:</p>
      <ul class="absurd-list">
        <li>"gleich"</li>
        <li>"später vielleicht"</li>
        <li>oder komplettem Themenwechsel</li>
      </ul>
      <p>Die Community beschreibt diesen Zustand mittlerweile als: <b>"Marbles-Hungersnot."</b></p>
      <p>Laut <b>ArenaiTV</b> soll Kuckuck einmal drei Stunden über Parfüm gesprochen, zwei Extreme Demons gespielt und ein komplettes Aura-Monolog gehalten haben — ohne auch nur eine einzige Marbles-Runde zu starten.</p>
      <p class="quote">"Ich glaube Marbles existiert nur noch theoretisch." — Jughead</p>
      <p>Die Vereinten Zuschauer fordern inzwischen:</p>
      <ul class="absurd-list">
        <li>faire Marble-Rechte</li>
        <li>garantierte Kugelteilnahme</li>
        <li>und ein Ende der Unterdrückung</li>
      </ul>
      <div class="marginalia">Kuckuck reagierte bislang nicht. → siehe auch <a href="marbles.html" style="color:var(--stamp-red)">marbles.html</a></div>`
  },
  "120": {
    nr: "DOSSIER #120", titel: "█████████ ██████ ████",
    klass: "VERSCHLÜSSELT", datum: "█████", ort: "█████",
    bild: null, verschluesselt: true,
    inhalt: `
      <div style="text-align:center; padding: 30px 20px;">
        <p style="font-size: 18px;">Diese Akte ist verschlüsselt.</p>
        <p style="margin: 20px 0;">Hinweis: Das Passwort entspricht der Anzahl der Huracáns im Lamborghini Vault (Dossier #081).</p>
        <input type="text" id="vault-passwort" placeholder="passwort eingeben..." style="padding: 10px 14px; font-family: 'Courier Prime', monospace; font-size: 16px; width: 260px; border: 2px solid var(--ink); text-align: center;">
        <br>
        <button onclick="checkPasswort()" style="margin-top: 14px; background: var(--ink); color: #fff; border: none; padding: 10px 20px; font-family: 'Anton', sans-serif; letter-spacing: 2px; cursor: pointer;">ENTSCHLÜSSELN</button>
        <div id="vault-result" style="margin-top: 18px; font-family: 'Caveat', cursive; font-size: 18px;"></div>
      </div>`
  }
};

// =================================================================
// MODAL HANDLER
// =================================================================
const modalBg = document.getElementById('modal-bg');
const modalInhalt = document.getElementById('modal-inhalt');

function oeffneAkte(id) {
  const a = AKTEN[id];
  if (!a) {
    modalInhalt.innerHTML = `
      <div style="text-align:center; padding: 40px;">
        <div class="stempel gross">AKTE NICHT GEFUNDEN</div>
        <p style="margin-top: 24px;">Vermutlich von Jughead weggeweht.</p>
      </div>`;
  } else {
    let bildHtml = '';
    if (a.bild) {
      bildHtml = `
        <img src="${a.bild}" alt="" class="beweisbild">
        <div style="font-family:'Caveat',cursive; font-size:15px; color:var(--ink-soft); margin-top:-8px; margin-bottom:16px;">
          ↑ ${a.bildunter || 'Beweismaterial'}
        </div>`;
    } else if (!a.redacted && !a.verschluesselt) {
      bildHtml = `
        <div class="bordered" style="text-align:center; padding: 28px; background: repeating-linear-gradient(45deg, #888 0 8px, #777 8px 16px); color:#fff; margin: 18px 0;">
          <div style="font-family:'Anton',sans-serif; font-size:18px; letter-spacing:2px;">BEWEISMATERIAL ENTFERNT</div>
          <div style="font-size:11px; margin-top:6px; font-family:'Courier Prime',monospace;">Auf Antrag eines Beteiligten</div>
        </div>`;
    }

    const stempelHtml = a.redacted
      ? ''
      : `<div class="stempel-overlay"><span class="stempel gross">STRENG VERTRAULICH</span></div>`;

    modalInhalt.innerHTML = `
      ${stempelHtml}
      <div class="kopf">
        <div class="aktenz">${a.nr} · BEGV-INTERN</div>
        <h2>${a.titel}</h2>
        <div class="zeile">
          <span>KLASS.: <b>${a.klass}</b></span>
          <span>DATUM: ${a.datum}</span>
          <span>ORT: ${a.ort}</span>
        </div>
      </div>
      ${bildHtml}
      ${a.inhalt}
      <div class="signatur">
        <span>Unterzeichnet: J. (Ermittler)</span>
        <span>BEGV / Bunker 7 / 26.05.2026</span>
      </div>`;
  }
  modalBg.classList.add('aktiv');
  document.body.style.overflow = 'hidden';
}

function schliesseModal() {
  modalBg.classList.remove('aktiv');
  document.body.style.overflow = '';
  // confetti-chance
  if (Math.random() < 0.18) konfetti();
}
function konfetti() {
  for (let i = 0; i < 35; i++) {
    const c = document.createElement('div');
    const farben = ['#ff3a8c','#ffe600','#2bff52','#ff1f3a','#fff','#39c0ff'];
    c.style.cssText = `
      position: fixed;
      left: 50%; top: 50%;
      width: ${6 + Math.random()*8}px; height: ${6 + Math.random()*8}px;
      background: ${farben[Math.floor(Math.random()*farben.length)]};
      z-index: 9999;
      pointer-events: none;
      transition: all 1.4s cubic-bezier(0.2, 0.8, 0.3, 1);
    `;
    document.body.appendChild(c);
    requestAnimationFrame(() => {
      c.style.left = (50 + (Math.random()-0.5)*160) + '%';
      c.style.top = (50 + (Math.random()-0.5)*160) + '%';
      c.style.opacity = 0;
      c.style.transform = `rotate(${Math.random()*720}deg) scale(${0.5 + Math.random()})`;
    });
    setTimeout(() => c.remove(), 1600);
  }
}

// Klick-Handler für alle Akten-Karten + Polaroids
document.querySelectorAll('[data-akte]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    oeffneAkte(el.dataset.akte);
  });
});

document.getElementById('modal-close').addEventListener('click', schliesseModal);
modalBg.addEventListener('click', (e) => { if (e.target === modalBg) schliesseModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') schliesseModal(); });

// =================================================================
// VAULT-PASSWORT (Dossier #120)
// =================================================================
window.checkPasswort = function() {
  const eingabe = document.getElementById('vault-passwort').value.trim().toLowerCase();
  const result = document.getElementById('vault-result');
  // Antwort: "ja" — denn die Anzahl der Huracáns ist offiziell "ja"
  // Akzeptable Antworten: alle Zahlen, "ja", "alle", "zu viele"
  if (eingabe === 'ja' || eingabe === 'alle' || eingabe === 'zu viele' || /^\d+$/.test(eingabe)) {
    result.style.color = '#1a8a2c';
    result.innerHTML = `
      <div style="border: 2px solid #1a8a2c; padding: 18px; margin-top: 14px; text-align: left; background: #f0fff0;">
        <b style="font-family: 'Anton', sans-serif; letter-spacing: 2px; color: #1a8a2c;">ENTSCHLÜSSELT.</b><br><br>
        <b>BETREFF:</b> Das große Identitäten-Protokoll<br>
        <b>STATUS:</b> WAHRHEIT (juristisch geklärt)<br><br>
        Nach jahrelangen Ermittlungen lässt sich endlich bestätigen:<br><br>
        ◦ <b>Jason</b> = <b>polnischer Zoink</b> = <b>Deutscher Zoink</b> = <b>Kuckuck</b>.<br>
        &nbsp;&nbsp;→ <i>Eine Person. Vier Identitäten. Ein Acer-Stuhl.</i><br><br>
        ◦ <b>Steve</b> = <b>Kurzhaarmeister</b>.<br>
        &nbsp;&nbsp;→ <i>Der Schnurrbart war immer derselbe. Wir haben es nur nicht sehen wollen.</i><br><br>
        ◦ <b>Triple-T</b> = <b>Tung Tung Tung Sahur</b>.<br>
        &nbsp;&nbsp;→ <i>Italienische Brainrot-Herkunft bestätigt. Bewaffnet mit Holz.</i><br><br>
        Es gab nie 8 Verdächtige.<br>
        Es gab 3 Personen — und mehrere Wochen Aura-Überlastung.<br><br>
        <span style="font-family: 'Caveat', cursive; font-size: 17px;">— J., 26.05.2026, Bunker 7</span>
      </div>`;
  } else {
    result.style.color = 'var(--stamp-red)';
    result.textContent = '✗ falsche Aura. zugriff verweigert.';
  }
};

// =================================================================
// LOGIN MODAL (FAKE)
// =================================================================
document.getElementById('login-btn').addEventListener('click', () => {
  modalInhalt.innerHTML = `
    <div class="kopf">
      <div class="aktenz">MITARBEITER-BEREICH · BEGV</div>
      <h2>LOGIN</h2>
    </div>
    <p style="margin-bottom: 14px;">Bitte melden Sie sich mit Ihren BEGV-Anmeldedaten an.</p>
    <form onsubmit="return checkLogin(event)">
      <label style="display:block; margin: 10px 0 4px;">Mitarbeiter-Name</label>
      <input type="text" id="login-name" required style="width:100%; padding:8px; font-family:'Courier Prime',monospace; border:1px solid var(--ink); background:#fdf9ef;">
      <label style="display:block; margin: 14px 0 4px;">Aura-Passwort</label>
      <input type="password" id="login-pw" required style="width:100%; padding:8px; font-family:'Courier Prime',monospace; border:1px solid var(--ink); background:#fdf9ef;">
      <button type="submit" style="margin-top:16px; width:100%; background:var(--ink); color:#fff; border:none; padding:12px; font-family:'Anton',sans-serif; letter-spacing:2px; cursor:pointer;">EINLOGGEN</button>
    </form>
    <div id="login-msg" style="margin-top:14px; font-family:'Caveat',cursive; font-size:16px;"></div>`;
  modalBg.classList.add('aktiv');
  document.body.style.overflow = 'hidden';
});

window.checkLogin = function(e) {
  e.preventDefault();
  const name = document.getElementById('login-name').value.trim().toLowerCase();
  const msg = document.getElementById('login-msg');
  if (name === 'jughead') {
    msg.style.color = 'var(--stamp-red)';
    msg.innerHTML = '✗ Account bereits 17 mal weggeweht. Bitte versuchen Sie es nicht erneut.';
  } else if (name === 'kuckuck' || name === 'jason') {
    msg.style.color = 'var(--stamp-red)';
    msg.innerHTML = '✗ Selbst-Authentifizierung verweigert. Aura zu hoch.';
  } else if (name === 'plexi') {
    msg.style.color = 'var(--stamp-red)';
    msg.innerHTML = '✗ Bitte beenden Sie zuerst ELE SPONGEBOB.';
  } else if (name === 'admin' || name === 'aclasher') {
    msg.style.color = '#1a8a2c';
    msg.innerHTML = '✓ willkommen zurück, <b>Aclasher</b>. bro hat sich eingeloggt.';
  } else if (name === 'root' || name === 'sudo') {
    msg.style.color = 'var(--stamp-red)';
    msg.innerHTML = '✗ root-zugriff nur für Aclasher (= admin). versuch das.';
  } else if (name === 'sananen' || name === 'sananenbaft') {
    msg.style.color = 'var(--stamp-red)';
    msg.innerHTML = '✗ SananenBaft ist nur für roasts zuständig. keine logins.';
  } else if (name === 'triple-t' || name === 'triplet') {
    msg.style.color = 'var(--stamp-red)';
    msg.innerHTML = '✗ Triple-T benötigt keinen Login. Triple-T ist überall.';
  } else if (name === 'steve') {
    msg.style.color = 'var(--stamp-red)';
    msg.innerHTML = '✗ ████████ ███ ███████. ████ █████.';
  } else {
    msg.style.color = 'var(--stamp-red)';
    msg.innerHTML = '✗ falsche aura. login fehlgeschlagen.';
  }
  return false;
};

// =================================================================
// COOKIE BANNER
// =================================================================
const cookieBanner = document.getElementById('cookie-banner');
const dismissCookie = () => {
  cookieBanner.style.display = 'none';
  sessionStorage.setItem('cookie-dismissed', '1');
};
document.getElementById('cookie-ja').addEventListener('click', dismissCookie);
document.getElementById('cookie-mehr-ja').addEventListener('click', dismissCookie);
document.getElementById('cookie-nein').addEventListener('click', (e) => {
  e.preventDefault();
  e.target.textContent = 'Geht nicht.';
  setTimeout(() => { e.target.textContent = 'Ablehnen (deaktiviert)'; }, 1800);
});
document.getElementById('cookie-x').addEventListener('click', dismissCookie);
if (sessionStorage.getItem('cookie-dismissed')) cookieBanner.style.display = 'none';

// =================================================================
// MELDUNG ABSCHICKEN (Fake-Formular)
// =================================================================
document.getElementById('meldung-submit').addEventListener('click', (e) => {
  e.preventDefault();
  modalInhalt.innerHTML = `
    <div style="text-align:center; padding: 40px 20px;">
      <div class="stempel gross">MELDUNG SYSTEMATISCH WEGGEWEHT</div>
      <p style="margin-top: 30px; font-size: 16px;">Ihre Meldung wurde erfolgreich ignoriert.</p>
      <p style="margin-top: 14px; font-family: 'Caveat', cursive; font-size: 18px; color: var(--ink-soft);">
        Bearbeitungszeit: niemals · Aktenzeichen: 0 · zuständig: Jughead (nicht im Dienst)
      </p>
      <p style="margin-top: 20px; font-size: 12px; color: var(--ink-soft);">
        Sollten Sie weitere Sichtungen melden wollen, beachten Sie bitte unsere Hinweise zu Aura-Überlastung.
      </p>
    </div>`;
  modalBg.classList.add('aktiv');
  document.body.style.overflow = 'hidden';
});

// =================================================================
// 7x KLICK AUF WAPPEN → AURA-MODE
// =================================================================
let wappenClicks = 0;
const wappen = document.getElementById('wappen');
wappen.addEventListener('click', () => {
  wappenClicks++;
  wappen.classList.add('aura-mode');
  setTimeout(() => wappen.classList.remove('aura-mode'), 300);
  if (wappenClicks >= 7) {
    document.body.classList.toggle('aura-mode');
    wappenClicks = 0;
    if (document.body.classList.contains('aura-mode')) {
      console.log('%c⚠ AURA-MODUS AKTIV ⚠', 'color:#ff3a8c; font-size:28px; font-weight:bold;');
    }
  }
});

// =================================================================
// KONAMI CODE → WAVE-CARRIED MODE
// =================================================================
const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiIdx = 0;
document.addEventListener('keydown', (e) => {
  if (e.key === konami[konamiIdx]) {
    konamiIdx++;
    if (konamiIdx === konami.length) {
      document.body.classList.add('wave-mode');
      konamiIdx = 0;
      console.log('%c🌊 WAVE CARRIED 🌊', 'color:#ff1f3a; font-size:36px; font-weight:bold; text-shadow:2px 2px 0 #000;');
      setTimeout(() => document.body.classList.remove('wave-mode'), 6000);
    }
  } else {
    konamiIdx = e.key === konami[0] ? 1 : 0;
  }
});

// =================================================================
// COUNTER TICKER (Tage seit Wave-Carried)
// =================================================================
let resetCount = 0;
const counter = document.getElementById('counter');
counter.addEventListener('click', () => {
  resetCount++;
  if (resetCount === 1) {
    counter.textContent = 'TAGE SEIT LETZTEM WAVE-CARRIED-VORFALL: -1';
  } else if (resetCount === 2) {
    counter.textContent = 'COUNTER ABSTÜRZT WEGEN AURA';
  } else if (resetCount >= 3) {
    counter.textContent = 'KEINE WEITEREN VERSUCHE — JUGHEAD WURDE INFORMIERT';
    counter.style.background = '#000';
    counter.style.color = 'var(--gd-yellow)';
  }
});

// =================================================================
// GEHEIM-LINK "MONSTER WHITE" → führt zu Easter-Egg-Seite
// =================================================================
document.getElementById('geheim-trigger').addEventListener('click', () => {
  window.open('akten/069-geheim.html', '_blank');
});

// =================================================================
// FÄDEN ZWISCHEN POLAROIDS ZEICHNEN
// =================================================================
function zieheFaden() {
  const board = document.getElementById('board');
  if (!board) return;
  const pins = board.querySelectorAll('.pin');
  if (pins.length < 2) return;
  for (let i = 0; i < pins.length - 1; i++) {
    const p1 = pins[i];
    const p2 = pins[(i + 1) % pins.length];
    const r1 = { x: parseFloat(p1.style.left) + 11, y: parseFloat(p1.style.top) + 11 };
    const r2 = { x: parseFloat(p2.style.left) + 11, y: parseFloat(p2.style.top) + 11 };
    const dx = r2.x - r1.x, dy = r2.y - r1.y;
    const len = Math.sqrt(dx*dx + dy*dy);
    const ang = Math.atan2(dy, dx) * 180 / Math.PI;
    const line = document.createElement('div');
    line.className = 'string-line';
    line.style.left = r1.x + 'px';
    line.style.top = r1.y + 'px';
    line.style.width = len + 'px';
    line.style.transform = `rotate(${ang}deg)`;
    board.appendChild(line);
  }
}
window.addEventListener('load', zieheFaden);

// =================================================================
// CONSOLE EASTER EGGS
// =================================================================
console.log('%c╔═══════════════════════════════════════╗', 'color:#b8000f; font-family:monospace;');
console.log('%c║   BEGV — INTERNES SYSTEM — BUNKER 7   ║', 'color:#b8000f; font-family:monospace; font-weight:bold;');
console.log('%c║   UNAUTORISIERTER ZUGRIFF ERKANNT     ║', 'color:#b8000f; font-family:monospace; font-weight:bold;');
console.log('%c╚═══════════════════════════════════════╝', 'color:#b8000f; font-family:monospace;');
console.log('%cDu hast die Konsole geöffnet. Aclasher wurde benachrichtigt.', 'color:#1a1410; font-family:serif; font-size:14px;');
console.log('%cIP-Adresse: leaked. Aura-Level: niedrig. Empfehlung: Konsole sofort schließen.', 'color:#3a2f24; font-family:serif; font-size:12px;');
console.log('%cVersuche es mit dem Konami-Code: ↑↑↓↓←→←→ B A', 'color:#ff3a8c; font-family:monospace; font-size:13px;');
console.log('%c(oder klicke 7x auf das Wappen oben links)', 'color:#888; font-family:monospace; font-size:11px;');
console.log('%cTriple-T vs Steve: aktiv. polnischer Zoink: vermutlich du.', 'color:#666; font-family:monospace; font-size:10px;');

// Easter Egg: window.kuckuck()
window.kuckuck = function() {
  console.log('%c🐦 KUCKUCK 🐦', 'color:#ff3a8c; font-size:48px; font-weight:bold;');
  console.log('%cdu hast den geheimen befehl gefunden. hier ein hinweis: /marbles', 'color:#1a8a2c; font-size:14px;');
  return '...gleich.';
};
window.aura = function() { return 9999; };
window.wave = function() { document.body.classList.add('wave-mode'); setTimeout(() => document.body.classList.remove('wave-mode'), 4000); return 'CARRIED'; };
window.jughead = function() { return 'weggeweht.'; };
window.ele = window.spongebob = function() {
  console.log('%c🧽 ELE SPONGEBOB AKTIVIERT 🧽', 'color:#ffe600; font-size:32px; background:#000; padding:8px;');
  window.open('https://youtu.be/9XSONr2tCDQ?si=VEckeVGeErufbd-P&t=22', '_blank');
  return 'plexi war es.';
};
window.tungtungtung = window.sahur = function() {
  console.log('%cTUNG TUNG TUNG TUNG TUNG TUNG SAHUR', 'color:#8b4513; font-size:24px; font-weight:bold; background:#f5deb3; padding:6px;');
  window.open('https://youtu.be/HmIMmFAV4BY?si=y5_LsXuBNpuwc_Pm', '_blank');
  return 'er kommt mit dem holz.';
};
window.steve = function() {
  console.log('%cSTEVE = KURZHAARMEISTER. WIR WUSSTEN ES DIE GANZE ZEIT.', 'color:#b8000f; font-size:14px; font-weight:bold;');
  return 'schnurrbart bestätigt.';
};
window.polnisch = window.polnischer = function() {
  console.log('%cpolnischer zoink = kuckuck. pass: gefälscht. aura: identisch.', 'color:#dc143c; font-size:13px;');
  return 'JA = TAK';
};
window.monster = function() { return 'WHITE.'; };
window.acer = function() {
  console.log('%c[ACER-STUHL HAT SICH GEMELDET]', 'color:#000; background:#ff3a8c; padding:4px 10px; font-weight:bold;');
  return 'der stuhl bittet um asyl.';
};
window.aceredge = window.acerstuhl = window.acer;
window.aclasher = window.admin = function() {
  console.log('%c[ROOT-ZUGRIFF GEWÄHRT]', 'color:#1a8a2c; background:#000; padding:6px 14px; font-weight:bold; letter-spacing:2px;');
  console.log('%cbro hat creative mode aktiviert.', 'color:#888;');
  return 'aclasher = admin. wir wussten es.';
};

// =================================================================
// RANDOM EASTER EGGS — beginn der unfug-abteilung
// =================================================================

// -------------------------------------------------------------
// 1. SCHMETTERLING DER ÜBER DIE SEITE FLATTERT (random)
// -------------------------------------------------------------
function spawneSchmetterling() {
  const sch = document.createElement('div');
  sch.textContent = ['🦋','🦋','🦋','🦌','🌻'][Math.floor(Math.random()*5)];
  sch.style.cssText = `
    position: fixed;
    font-size: ${20 + Math.random()*20}px;
    z-index: 9990;
    pointer-events: none;
    top: ${Math.random() * 80 + 10}%;
    left: -50px;
    transition: all ${8 + Math.random()*8}s linear;
    filter: drop-shadow(0 0 4px rgba(255,255,255,0.6));
  `;
  document.body.appendChild(sch);
  requestAnimationFrame(() => {
    sch.style.left = '110vw';
    sch.style.top = (parseFloat(sch.style.top) + (Math.random()*30 - 15)) + '%';
    sch.style.transform = `rotate(${Math.random()*60 - 30}deg)`;
  });
  setTimeout(() => sch.remove(), 18000);
}
// alle 25-90 sekunden einer
function planeSchmetterling() {
  setTimeout(() => { spawneSchmetterling(); planeSchmetterling(); }, 25000 + Math.random()*65000);
}
setTimeout(planeSchmetterling, 8000);

// -------------------------------------------------------------
// 2. PAGE-TITLE CYCLING (alle 6 sekunden)
// -------------------------------------------------------------
const titelRotation = [
  'KUCKUCK FILES — BEGV',
  '🌊 WAVE CARRIED 🌊',
  'DAS IST FREE.',
  'AURA-MODUS AKTIV',
  'gleich.',
  '五条悟 — der unbeschwerte',
  'TUNG TUNG TUNG SAHUR',
  'NOT CARRIED',
  'ELE SPONGEBOB plays...',
  'warte kurz',
  'macht den mann aus.',
  'plexi war es. wieder.',
  'Unlocked new Icon!',
  '— Akte #044 wurde entfernt —',
  'KUCKUCK FILES — BEGV'
];
let titelIdx = 0;
const originalTitel = document.title;
setInterval(() => {
  if (document.hidden) return;
  document.title = titelRotation[titelIdx % titelRotation.length];
  titelIdx++;
}, 6000);
// beim Tab-Wechsel zurück → Original-Titel + "kuckuck vermisst dich"
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    document.title = 'kuckuck vermisst dich...';
  } else {
    document.title = originalTitel;
  }
});

// -------------------------------------------------------------
// 3. RANDOM TOAST-POPUPS (alle 90-180s, viele varianten)
// -------------------------------------------------------------
// typen: 'info' (gelb), 'warn' (orange), 'alarm' (rot), 'ok' (grün), 'mystery' (lila), 'behoerde' (beige)
const TOAST_STYLES = {
  info:     { bg: '#1a1410', fg: '#ffe600', border: '#b8000f' },
  warn:     { bg: '#2a1610', fg: '#ff8c00', border: '#ff8c00' },
  alarm:    { bg: '#b8000f', fg: '#ffe600', border: '#000'    },
  ok:       { bg: '#0a3010', fg: '#2bff52', border: '#1a8a2c' },
  mystery:  { bg: '#1a0a2a', fg: '#c080ff', border: '#8040c0' },
  behoerde: { bg: '#f1e4cc', fg: '#1a1410', border: '#1a1410' },
  rosa:     { bg: '#ff3a8c', fg: '#fff',    border: '#000'    },
  bambi:    { bg: '#fff8e8', fg: '#5a3a10', border: '#8b6f3a' }
};

const TOASTS = [
  { t:'⚠ AURA-ANSTIEG in Sektor 47',              s:'warn' },
  { t:'🔴 plexi hat ELE SPONGEBOB angemacht',     s:'alarm' },
  { t:'🐦 KUCKUCK-SICHTUNG bestätigt',             s:'info' },
  { t:'🌊 wave-part nähert sich',                  s:'alarm' },
  { t:'📡 verbindung zu bunker 7 instabil',        s:'warn' },
  { t:'🦌 bambi versucht zugriff aufs system',     s:'bambi' },
  { t:'🚨 jughead wurde wieder weggeweht (#19)',   s:'alarm' },
  { t:'🧪 monster-white-vorrat: kritisch (3 dosen)', s:'warn' },
  { t:'💼 finanzamt erneut verschwunden',          s:'mystery' },
  { t:'🎵 ELE SPONGEBOB wurde zum 10. mal angemacht', s:'info' },
  { t:'🚗 neuer huracán im vault erschienen',      s:'mystery' },
  { t:'🤜 TUNG TUNG TUNG SAHUR detektiert',        s:'warn' },
  { t:'🪑 acer-stuhl beantragt urlaub',            s:'behoerde' },
  { t:'🎰 jemand hat 0 baft-coins im automaten',   s:'mystery' },
  { t:'🧬 dna-analyse von schnurrbart läuft',      s:'info' },
  { t:'📝 neue akte eingereicht — wird ignoriert', s:'behoerde' },
  { t:'🌧 wettervorhersage: 100% wave-parts',      s:'warn' },
  { t:'🔓 unautorisierter zugriff auf #069',        s:'alarm' },
  { t:'🧠 mental breakdown event #7 dieses jahr',  s:'mystery' },
  { t:'🤖 KI-prompt-validierung: gescheitert',     s:'alarm' },
  { t:'🐗 wildschwein noch immer flüchtig',        s:'warn' },
  { t:'🎯 SananenBaft hat dich im visier',         s:'alarm' },
  { t:'📊 dein aura-level: 0%',                    s:'mystery' },
  { t:'🏆 jemand hat im aura-clicker prestige erreicht (nicht du)', s:'ok' },
  { t:'🍕 safti-döner-bestellung #999 läuft',      s:'warn' },
  { t:'🎮 minigame-spielerzahl: 1 (du)',           s:'info' },
  { t:'🛏 jughead schläft jetzt freiwillig',       s:'mystery' },
  { t:'🎨 KI generiert ein bild von dir... abgebrochen', s:'warn' },
  { t:'🪙 baft-coin kurs gefallen 47%',            s:'alarm' },
  { t:'📺 kuckuck stream peak heute: 2 zuschauer', s:'info' },
  { t:'🔢 dossier #120 passwortversuche: 47',      s:'mystery' },
  { t:'🐎 captain carry sichtung in irland',       s:'mystery' },
  { t:'🌊 wave-mode-warnung für nächste 4 stunden', s:'warn' },
  { t:'🛒 cart abandoned: 47 lambos',              s:'mystery' },
  { t:'🎭 triple-t = tung tung tung sahur (immer noch)', s:'info' },
  { t:'🦴 holzmann beantragt elternzeit',          s:'behoerde' },
  { t:'⚡ aura-überlauf — server überhitzt',       s:'alarm' },
  { t:'💸 jemand hat ALL IN gespielt und verloren', s:'warn' },
  { t:'🌈 cookies wurden trotzdem gesetzt',        s:'info' },
  { t:'🎂 happy birthday an niemand bestimmten',   s:'rosa' },
  { t:'🔇 plexi wurde NICHT gemutet (haha)',       s:'mystery' },
  { t:'🆘 marbles-petition unterschriften: 47.823', s:'warn' },
  { t:'🌻 sonnenblume dreht sich wieder nach köln', s:'bambi' },
  { t:'🧙 KrmaL hat neues level released',         s:'ok' },
  { t:'🎤 aclasher (admin) hat etwas trockenes gesagt', s:'info' },
  { t:'🚫 dein letzter prompt war zu generisch',   s:'alarm' },
  { t:'💡 hast du schon den ALLE-EASTER-EGGS-Button probiert?', s:'rosa' },
  { t:'🎯 SananenBaft hat einen neuen roast für dich', s:'alarm' },
  { t:'📞 jughead versucht erreichbar zu sein',    s:'behoerde' }
];

let letzterToast = -1;
function zeigeToast(forciert) {
  // kein duplikat zum letzten
  let idx;
  do { idx = Math.floor(Math.random() * TOASTS.length); }
  while (idx === letzterToast && TOASTS.length > 1);
  letzterToast = idx;
  const toast = TOASTS[idx];
  const stil = TOAST_STYLES[toast.s] || TOAST_STYLES.info;

  // position: stack von unten
  const offen = document.querySelectorAll('.aura-toast').length;
  if (offen >= 3 && !forciert) return; // nicht spammen
  const bottomOffset = 80 + offen * 70;

  const popup = document.createElement('div');
  popup.className = 'aura-toast';
  popup.style.cssText = `
    position: fixed;
    bottom: ${bottomOffset}px;
    left: 20px;
    background: ${stil.bg};
    color: ${stil.fg};
    border: 2px solid ${stil.border};
    padding: 12px 16px;
    font-family: 'Courier Prime', monospace;
    font-size: 13px;
    max-width: 340px;
    z-index: 9995;
    box-shadow: 5px 5px 0 rgba(0,0,0,0.6);
    animation: slideInLeft 0.3s ease;
    cursor: pointer;
    line-height: 1.4;
    transition: opacity 0.4s, transform 0.4s;
  `;
  popup.innerHTML = toast.t + '<span style="float:right; margin-left:12px; opacity:0.6; font-size:11px;">✕</span>';
  popup.addEventListener('click', () => { popup.style.opacity = '0'; popup.style.transform = 'translateX(-30px)'; setTimeout(() => popup.remove(), 400); });
  document.body.appendChild(popup);
  // auto-remove nach 6s
  setTimeout(() => {
    if (!popup.parentNode) return;
    popup.style.opacity = '0';
    popup.style.transform = 'translateX(-30px)';
    setTimeout(() => popup.remove(), 400);
  }, 6500);
}
// erster nach 30s, dann alle 60-180s
setTimeout(() => {
  zeigeToast(true);
  setInterval(() => zeigeToast(false), 60000 + Math.random()*120000);
  // ab und zu doppel-toast (15% chance)
  setInterval(() => { if (Math.random() < 0.15) setTimeout(() => zeigeToast(true), 800); }, 90000);
}, 30000);
window.toast = zeigeToast;
// alias damit das alte zeigeAuraPopup auch noch funktioniert
window.zeigeAuraPopup = zeigeToast;

const styleAnim = document.createElement('style');
styleAnim.textContent = `
  @keyframes slideInLeft { from { transform: translateX(-120%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
  @keyframes klein { 0%,100% { transform: scale(1); } 50% { transform: scale(0.95); } }
  .acer-aktiviert { animation: klein 0.4s; color: var(--aura-pink) !important; }
`;
document.head.appendChild(styleAnim);

// -------------------------------------------------------------
// 4. TRIPLE-CLICK irgendwo → TUNG TUNG TUNG SAHUR
// -------------------------------------------------------------
let tripleClickTimer = null, tripleClickCount = 0;
document.addEventListener('click', (e) => {
  if (e.target.closest('a, button, input, select, textarea, .akte-card, .polaroid, .person-card, .evidence, .wappen, .modal')) return;
  tripleClickCount++;
  clearTimeout(tripleClickTimer);
  if (tripleClickCount >= 3) {
    tripleClickCount = 0;
    const div = document.createElement('div');
    div.textContent = 'TUNG TUNG TUNG SAHUR';
    div.style.cssText = `
      position: fixed;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      transform: translate(-50%, -100%);
      background: #f5deb3;
      color: #8b4513;
      padding: 10px 18px;
      font-family: 'Anton', sans-serif;
      letter-spacing: 2px;
      font-size: 18px;
      border: 3px solid #8b4513;
      box-shadow: 4px 4px 0 #000;
      z-index: 9999;
      pointer-events: none;
      animation: slideInLeft 0.3s;
    `;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 2000);
  }
  tripleClickTimer = setTimeout(() => { tripleClickCount = 0; }, 600);
});

// -------------------------------------------------------------
// 5. BEFOREUNLOAD: "warte kurz" (nicht aggressiv, nur einmal)
// -------------------------------------------------------------
let unloadGetriggert = false;
window.addEventListener('beforeunload', (e) => {
  // nur unter aura-mode oder wave-mode
  if (document.body.classList.contains('aura-mode') || document.body.classList.contains('wave-mode')) {
    if (!unloadGetriggert) {
      unloadGetriggert = true;
      e.preventDefault();
      e.returnValue = 'warte kurz.';
      return 'warte kurz.';
    }
  }
});

// -------------------------------------------------------------
// 6. RANDOM REDACTED — manche Wörter werden plötzlich geschwärzt
// -------------------------------------------------------------
const woerterZumRedacten = ['Kuckuck','Jason','Wave','Aura','Acer','plexi','Jughead'];
setInterval(() => {
  if (Math.random() > 0.4) return;
  const wort = woerterZumRedacten[Math.floor(Math.random()*woerterZumRedacten.length)];
  const xpath = `//text()[contains(., '${wort}')]`;
  const res = document.evaluate(xpath, document.body, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  if (res.snapshotLength === 0) return;
  const node = res.snapshotItem(Math.floor(Math.random()*res.snapshotLength));
  if (!node || !node.parentNode || node.parentNode.tagName === 'SCRIPT' || node.parentNode.tagName === 'STYLE') return;
  const text = node.textContent;
  const idx = text.indexOf(wort);
  if (idx < 0) return;
  const span = document.createElement('span');
  span.style.cssText = 'background:#000; color:#000; padding:0 4px; cursor:help; transition: color 0.2s;';
  span.textContent = wort;
  span.title = 'sehr geheim. nicht erzählen.';
  const before = document.createTextNode(text.substring(0, idx));
  const after = document.createTextNode(text.substring(idx + wort.length));
  const parent = node.parentNode;
  parent.insertBefore(before, node);
  parent.insertBefore(span, node);
  parent.insertBefore(after, node);
  parent.removeChild(node);
  // nach 4s wieder normal
  setTimeout(() => {
    if (!span.parentNode) return;
    const t = document.createTextNode(wort);
    span.parentNode.replaceChild(t, span);
  }, 4000);
}, 25000);

// -------------------------------------------------------------
// 7. RIGHT-CLICK CONTEXT MENU EASTER EGG (3x nacheinander)
// -------------------------------------------------------------
let rightClickCount = 0, rightClickTimer = null;
document.addEventListener('contextmenu', (e) => {
  rightClickCount++;
  clearTimeout(rightClickTimer);
  if (rightClickCount >= 3) {
    e.preventDefault();
    rightClickCount = 0;
    alert('NEIN.\n\n— Acer-Stuhl');
  }
  rightClickTimer = setTimeout(() => { rightClickCount = 0; }, 1500);
});

// -------------------------------------------------------------
// 8. PAGE-IDLE 90s → kuckuck vermisst dich
// -------------------------------------------------------------
let idleTimer = null;
function resetIdle() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    const idle = document.createElement('div');
    idle.style.cssText = `
      position: fixed;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0,0,0,0.85);
      color: #ff3a8c;
      padding: 30px 50px;
      font-family: 'Anton', sans-serif;
      font-size: 28px;
      letter-spacing: 4px;
      z-index: 9999;
      border: 3px solid #ff3a8c;
      box-shadow: 0 0 80px #ff3a8c;
      cursor: pointer;
    `;
    idle.textContent = 'NOCH DA? AURA INSTABIL.';
    idle.addEventListener('click', () => idle.remove());
    document.body.appendChild(idle);
    setTimeout(() => idle.remove(), 4500);
  }, 90000);
}
['mousemove','keydown','scroll','click'].forEach(ev => document.addEventListener(ev, resetIdle, { passive: true }));
resetIdle();

// -------------------------------------------------------------
// 9. KONAMI-ESKALATION (jedes mal stärker) — via MutationObserver
// -------------------------------------------------------------
let konamiTotal = 0;
new MutationObserver((muts) => {
  for (const m of muts) {
    if (m.attributeName === 'class' && document.body.classList.contains('wave-mode')) {
      konamiTotal++;
      if (konamiTotal === 3) {
        setTimeout(() => alert('genug wave parts heute. — jughead'), 600);
      } else if (konamiTotal >= 5) {
        setTimeout(() => {
          const orig = document.body.style.transition;
          document.body.style.transition = 'transform 1.5s';
          document.body.style.transform = 'rotate(180deg)';
          setTimeout(() => {
            document.body.style.transform = '';
            setTimeout(() => { document.body.style.transition = orig; }, 1500);
          }, 2200);
        }, 400);
      }
    }
  }
}).observe(document.body, { attributes: true, attributeFilter: ['class'] });

// -------------------------------------------------------------
// 10. ACER-STUHL TRIGGER: doppelklick auf das wort "Acer" oder "Acer-Stuhl"
// -------------------------------------------------------------
document.addEventListener('dblclick', (e) => {
  const sel = window.getSelection().toString().toLowerCase();
  if (sel.includes('acer') || sel.includes('stuhl')) {
    const el = document.createElement('div');
    el.textContent = '🪑 ACER-STUHL HAT SICH GEMELDET';
    el.style.cssText = `
      position: fixed;
      left: ${e.clientX}px; top: ${e.clientY}px;
      background: #1a1410; color: #c9a85a;
      padding: 10px 16px; font-family: 'Anton', sans-serif;
      letter-spacing: 2px; font-size: 14px;
      border: 2px solid #c9a85a;
      z-index: 9999; pointer-events: none;
      transform: translate(-50%, -120%);
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2500);
  }
});

// -------------------------------------------------------------
// 11. SCROLL-AURA: bei zu schnellem scrollen warnen
// -------------------------------------------------------------
let scrollLast = 0, scrollSchnellCount = 0;
window.addEventListener('scroll', () => {
  const now = Date.now();
  if (now - scrollLast < 80) scrollSchnellCount++;
  else scrollSchnellCount = 0;
  scrollLast = now;
  if (scrollSchnellCount > 12) {
    scrollSchnellCount = 0;
    const warn = document.createElement('div');
    warn.textContent = '⚠ ZU SCHNELL — AURA-OVERFLOW';
    warn.style.cssText = `
      position: fixed; bottom: 20px; left: 50%;
      transform: translateX(-50%);
      background: #b8000f; color: #fff;
      padding: 8px 16px; font-family: 'Anton', sans-serif;
      letter-spacing: 2px; z-index: 9995;
      box-shadow: 4px 4px 0 #000;
    `;
    document.body.appendChild(warn);
    setTimeout(() => warn.remove(), 2000);
  }
}, { passive: true });

// -------------------------------------------------------------
// 12. CONSOLE ASCII KUCKUCK
// -------------------------------------------------------------
console.log(`%c
   ▄█   ▄█▀▀▀█▄█ ▄█▀▀▀█▄█  ▄█▀▀▀█▄█ ▄█  █▄  ▄█    █▄     ▄████████ ▄█   ▄█▄
  ███ ▄██    ▀█▄██    ▀█▄ ███    ▀█▄███▄▄▄██▄███    ███   ███    ██████ ▄███▀
  ███▄███▄▄▄▄█▀▄███▄▄▄▄█▀ ▄███▄▄▄▄█▀▄██▀▀▀██▀███    ███   ███    █▀ ███▐██▀
  ███▀▀▀▀▀▀█▄ ▀▀▀▀▀▀█▄ ▀▀▀▀▀▀█▄  ███   ███ ███    ███  ▄███▄▄▄    ▀███▄█▄
  ███▄ ▄██▀▀▀██▄ ▄██▀▀▀██▄▄▄ ▄██▀▀▀██  ███   ███ ███    ███ ▀▀███▀▀▀    ▀▀▀▀▀▀
  ███  ▀█▄▄▄▄▄██ █▄▄▄▄▄██▀ ███▄▄▄▄▄██ ▄██▄ ▄██▄ ███    ███   ███    █▄ ▄█   ▀
  █▀     ▀▀▀▀▀▀  ▀▀▀▀▀▀    ▀▀▀▀▀▀     ▀▀  ▀▀▀▀▀  ▀▀▀▀▀▀     ▀▀▀▀▀▀  ▀▀█████
`, 'color: #ff3a8c; font-family: monospace; font-size: 9px; line-height: 1;');
console.log('%cverfügbare commands: kuckuck() · wave() · ele() · aura() · jughead() · tungtungtung() · steve() · polnisch() · monster() · acer()', 'color:#888; font-size:11px;');

// -------------------------------------------------------------
// 13. KUCKUCK CURSOR HIN UND WIEDER (1% chance pro sekunde, max 1x pro session)
// -------------------------------------------------------------
let kuckuckCursorGetan = false;
setInterval(() => {
  if (kuckuckCursorGetan) return;
  if (Math.random() < 0.008) {
    kuckuckCursorGetan = true;
    const oldCursor = document.body.style.cursor;
    document.body.style.cursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><text x='4' y='26' font-size='28'>🎧</text></svg>") 16 16, auto`;
    setTimeout(() => {
      document.body.style.cursor = oldCursor;
      kuckuckCursorGetan = false;
    }, 8000);
  }
}, 1000);

// -------------------------------------------------------------
// 14. SELECTION HIJACK: wenn jemand "kuckuck" oder "wave" markiert
// -------------------------------------------------------------
document.addEventListener('selectionchange', () => {
  const sel = window.getSelection().toString().trim().toLowerCase();
  if (sel === 'wave carried' || sel === 'aura' || sel === 'tung tung tung sahur') {
    console.log(`%c"${sel}" ist im Klartext markiert worden. zeuge: ihr selbst.`, 'color: #b8000f; font-weight: bold;');
  }
});

// -------------------------------------------------------------
// 15. KEY-COMBO: drücke "j" + "g" + "h" für JUGHEAD-EVENT
// -------------------------------------------------------------
let keyBuffer = '';
document.addEventListener('keydown', (e) => {
  if (e.target.matches('input, textarea')) return;
  keyBuffer = (keyBuffer + e.key.toLowerCase()).slice(-10);
  if (keyBuffer.endsWith('jughead')) {
    const j = document.createElement('div');
    j.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: #000; color: #ff5050;
      display: grid; place-items: center;
      font-family: 'Anton', sans-serif; font-size: 48px; letter-spacing: 6px;
      z-index: 99999; cursor: pointer;
    `;
    j.innerHTML = `<div style="text-align:center;">JUGHEAD<br><span style="font-size:18px; letter-spacing:3px; color:#888;">WURDE INFORMIERT</span></div>`;
    j.addEventListener('click', () => j.remove());
    document.body.appendChild(j);
    setTimeout(() => j.remove(), 2500);
    keyBuffer = '';
  }
  if (keyBuffer.endsWith('marbles')) {
    window.location.href = 'marbles.html';
  }
  if (keyBuffer.endsWith('aura')) {
    document.body.classList.toggle('aura-mode');
    keyBuffer = '';
  }
});

// -------------------------------------------------------------
// 16. KONSOLEN-WARN-MASCHINE für developer-tool-snüffler
// -------------------------------------------------------------
let devtoolsOffen = false;
setInterval(() => {
  const threshold = 160;
  if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
    if (!devtoolsOffen) {
      devtoolsOffen = true;
      console.log('%c⚠ DEVTOOLS DETEKTIERT', 'background:#b8000f; color:white; font-size:18px; padding:6px 14px;');
      console.log('%caclasher wurde informiert. wir lassen es diesmal durchgehen.', 'color:#888; font-size:11px;');
    }
  } else {
    devtoolsOffen = false;
  }
}, 2000);

// -------------------------------------------------------------
// 17. RANDOM CONFETTI BONUS: jedes 5. mal wenn man irgendwo
//     auf der seite ESC drückt UND kein modal offen ist
// -------------------------------------------------------------
let escCount = 0;
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modalBg.classList.contains('aktiv')) {
    escCount++;
    if (escCount % 5 === 0) konfetti();
  }
});

// =================================================================
// "ALLE EASTER EGGS" BUTTON — der ausweichende
// =================================================================
const eggBtn = document.getElementById('egg-btn');
let eggClicks = 0;
const eggPositionen = [
  { top: '120px', left: 'calc(100vw - 240px)' },
  { top: 'calc(100vh - 100px)', left: '40px' },
  { top: '50vh', left: 'calc(50vw - 120px)' }
];
if (eggBtn) {
  eggBtn.addEventListener('click', (e) => {
    if (eggClicks < 2) {
      e.preventDefault();
      const pos = eggPositionen[eggClicks];
      eggBtn.style.top = pos.top;
      eggBtn.style.left = pos.left;
      eggBtn.classList.add('ausweichend');
      setTimeout(() => eggBtn.classList.remove('ausweichend'), 400);
      // text wechseln
      if (eggClicks === 0) {
        eggBtn.innerHTML = '<span class="blink-dot"></span> NEIN HIER';
      } else {
        eggBtn.innerHTML = '<span class="blink-dot"></span> JETZT WIRKLICH HIER';
      }
      eggClicks++;
    } else {
      // navigation läuft
      eggBtn.innerHTML = '<span class="blink-dot"></span> NA GUT.';
      // navigation passiert automatisch durch <a href=...>
    }
  });
  // hover: text "fast erwischt"
  eggBtn.addEventListener('mouseenter', () => {
    if (eggClicks > 0 && eggClicks < 2) {
      // zucken nach random richtung leicht
      const dx = (Math.random() - 0.5) * 30;
      const dy = (Math.random() - 0.5) * 30;
      eggBtn.style.transform = `translate(${dx}px, ${dy}px)`;
    }
  });
  eggBtn.addEventListener('mouseleave', () => {
    eggBtn.style.transform = '';
  });
}

// =================================================================
// NEWSLETTER ABONNIEREN (Fake)
// =================================================================
window.abonniere = function(e) {
  e.preventDefault();
  const email = document.getElementById('newsletter-email').value;
  modalInhalt.innerHTML = `
    <div style="text-align:center; padding: 40px 20px;">
      <div class="stempel gross">ANMELDUNG WEGGEWEHT</div>
      <p style="margin-top: 30px; font-size: 16px;">Deine E-Mail <b>${email.replace(/[<>&"]/g, '')}</b> wurde erfolgreich in unseren ignorier-Verteiler aufgenommen.</p>
      <p style="margin-top: 14px; font-family: 'Caveat', cursive; font-size: 18px; color: var(--ink-soft);">
        Nächste Aura-Weekly-Ausgabe: niemals · Bisher versendet: 0 · Geplant: 0
      </p>
      <p style="margin-top: 20px; font-size: 12px; color: var(--ink-soft);">
        Solltest du dennoch eine E-Mail erhalten, war es nicht von uns.<br>
        Es war vermutlich plexi.
      </p>
    </div>`;
  modalBg.classList.add('aktiv');
  document.body.style.overflow = 'hidden';
  return false;
};

// =================================================================
// ELE SPONGEBOB BUTTON (ganz oben)
// =================================================================
const eleBtn = document.getElementById('ele-btn');
const eleStreifen = document.getElementById('ele-streifen');
if (eleBtn) {
  eleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!confirm('Bist du dir sicher?\n\nELE SPONGEBOB ist seit Tagen für 9 von 10 Mental Breakdowns verantwortlich.\n\n(es ist plexi.)')) {
      eleBtn.textContent = 'doch ja';
      setTimeout(() => { eleBtn.textContent = 'JA'; }, 1500);
      return;
    }
    window.open('https://youtu.be/9XSONr2tCDQ?si=VEckeVGeErufbd-P&t=22', '_blank');
    eleBtn.textContent = '🧽 läuft';
    setTimeout(() => { eleBtn.textContent = 'JA'; }, 4000);
  });
}
if (eleStreifen) {
  // klick auf den ganzen streifen außerhalb des buttons triggert ihn auch
  eleStreifen.addEventListener('click', (e) => {
    if (e.target.id !== 'ele-btn') eleBtn.click();
  });
}

// =================================================================
// SANANENBAFT ROAST — 30 unique Beleidigungen
// =================================================================
const ROASTS = [
  "deine aura wirkt wie die von jughead. weggeweht. nutzlos. vermisst von niemandem.",
  "ich hab dein wave-part gesehen. ich hab gleichzeitig gelernt was second-hand embarrassment ist.",
  "monster white kann dich nicht retten. niemand kann das. die welt hat sich schon abgefunden.",
  "kuckuck würde dich nicht carrien. seine zeit ist wertvoll. dein leben offensichtlich nicht.",
  "deine hairline ist okay. dein gesicht darunter macht das aber wieder wett.",
  "du klickst freiwillig auf einen roast-button. das ist die einsamste entscheidung deines lebens.",
  "auf einer skala von 1 bis triple-t bist du ein 'plexi auf einem schlechten tag mit gebrochenem arm'.",
  "dein acer-stuhl hat sich beschwert. nicht über die belastung. über dich als person.",
  "wenn aura währung wäre wärst du im persönlichen insolvenzverfahren mit pfändung.",
  "polnischer zoink leugnet dich öffentlich. und der ist du selbst.",
  "kurzhaarmeister hätte dich besiegt. ohne hände. mit verbundenen augen. im schlaf. dabei träumend von jemand anderem.",
  "tung tung tung sahur kommt mit dem holz. nicht um dich zu schlagen. um dich zu beerdigen.",
  "marbles? du gehörst nicht in den warteraum. du gehörst in die kommentar-sektion eines ungeschauten videos.",
  "captain carry hat dich gesehen, sich umgedreht, und ist in pension gegangen.",
  "deine sichtungsmeldung wurde nicht weggeweht. sie wurde gelesen. dann wurde sie weggeweht — mit absicht.",
  "shine for ne hat 19999 demons. du hast: noch nie was zu ende gebracht.",
  "der baum aus dossier #099 hätte sich freiwillig auf dich gestürzt.",
  "das wildschwein wäre lieber überfahren worden als von dir gestreichelt.",
  "in bambiland würden selbst die plastikrehe deinen anblick als trauma bezeichnen.",
  "du bist die menschliche version von 'eigentlich wollte ich nur die toilette suchen'.",
  "der finanzbeamte aus #081 ist nicht verschwunden. er hat dich gesehen und freiwillig amnesie entwickelt.",
  "ele spongebob lief 9x. deine cardio-werte verstehen nicht warum du noch lebst.",
  "aclasher (= admin) hat dich analysiert. ergebnis: 'bro existiert nur theoretisch.'",
  "der döner aus dossier #112 ist real. du nicht.",
  "deine aura kompiliert nicht. dein code throwt syntax errors. dein leben hat keine docs.",
  "du hast den roasten-button geklickt. niemand hat dich gezwungen. das ist deine eigene wahl gewesen. lebe damit.",
  "kuckuck macht 2 tage demon-grind. du machst 2 tage 'überlegen ob du heute duschst'.",
  "wenn deine persönlichkeit ein gd-level wäre, wäre es ein practice-mode-versuch von einem 8-jährigen ohne pc.",
  "selbst plexi hat dich gemutet. plexi mutet nicht mal seine eigenen mental breakdowns.",
  "jughead wurde 17x weggeweht. mehr aufmerksamkeit als du an deinem geburtstag.",
  "deine spotify wrapped war 'überleben — von niemand'.",
  "du bist der grund warum man auf tinder bio 'no creeps' schreibt.",
  "deine letzte beziehung wurde aufgrund von aura-mangel beendet — beidseitig.",
  "deine eltern schalten kuckucks streams nur ein weil sie sich auch wegwehung wünschen.",
  "tinder hat dich entfernt nachdem deine bio jughead als rollenvorbild nannte.",
  "deine playlist sagt mehr über dich aus, als deine therapeutin verarbeiten kann.",
  "dein letztes wave-part war 'aufstehen morgens'. und du hast es verloren.",
  "wenn man deine persönlichkeit in attempts messen würde — du wärst noch im pause-menü.",
  "deine schulnoten waren wie kuckucks marbles-rate: theoretisch existent, niemand hat sie je gesehen.",
  "dein letztes selfie war so schlecht, dass deine galerie es als spam markiert hat.",
  "kuckuck hat einen lambo-vault. du hast einen 'irgendwann später'-ordner mit dingen die du nie machst.",
  "du gibst 80€ für mid-tier parfüm aus und nennst es 'investment'. das parfüm-kartell lacht ab.",
  "deine letzte originale idee war 'ich google das mal'. das war 2017.",
  "selbst der acer-stuhl knarzt nicht mehr wenn du dich draufsetzt. er hat sich ergeben.",
  "deine therapeutin hat angst um ihre therapeutin.",
  "der bambi aus #003 hat dich gesehen und beschlossen, aussterben sei besser als zeitgenosse zu sein.",
  "ich würde dich beleidigen aber das hat das leben schon übernommen."
];

let roastGesehen = new Set();
let roastZaehler = 0;
function roaste() {
  // versuche einen ungesehenen zu finden
  let verfuegbar = ROASTS.map((_, i) => i).filter(i => !roastGesehen.has(i));
  if (verfuegbar.length === 0) {
    roastGesehen.clear();
    verfuegbar = ROASTS.map((_, i) => i);
  }
  const idx = verfuegbar[Math.floor(Math.random() * verfuegbar.length)];
  roastGesehen.add(idx);
  roastZaehler++;

  const istLetzter = roastGesehen.size === ROASTS.length;
  const html = `
    <div class="roast-modal">
      <div class="label">SANANENBAFT · BELEIDIGUNGS-DIENSTAUSWEIS Nr. ${String(idx + 1).padStart(3, '0')}</div>
      <h2 style="font-family:'Anton',sans-serif; font-size:32px; letter-spacing:3px; color:var(--stamp-red); margin-bottom:6px;">DEIN ROAST</h2>
      <div class="text">"${ROASTS[idx]}"</div>
      <div style="margin-top:14px;">
        <button class="nochmal" onclick="roaste()">🔥 NOCHMAL ROASTEN</button>
        <button class="nochmal" onclick="schliesseModal()" style="background:#1a1410;">GENUG.</button>
      </div>
      <div class="counter">
        bisher geröstet: ${roastZaehler} mal · unique gesehen: ${roastGesehen.size} / ${ROASTS.length}
        ${istLetzter ? '<br><b style="color:var(--gd-yellow);">ALLE 30 GESEHEN. RESPEKT. SOMETHING WRONG WITH YOU.</b>' : ''}
      </div>
    </div>`;
  modalInhalt.innerHTML = html;
  modalBg.classList.add('aktiv');
  document.body.style.overflow = 'hidden';
}
window.roaste = roaste;
window.roast = roaste;
window.sananenbaft = roaste;

const roastBtn = document.getElementById('roast-btn');
if (roastBtn) roastBtn.addEventListener('click', roaste);

// =================================================================
// ZUSÄTZLICHE EASTER EGGS
// =================================================================

// random mental breakdown: alle werbungen wackeln kurz (alle 4-8min, 40% chance)
function mentalBreakdown() {
  document.querySelectorAll('.werbung, .gamble-btn, .roast-btn').forEach(el => {
    const origTransform = el.style.transform;
    let count = 0;
    const id = setInterval(() => {
      el.style.transform = `translate(${(Math.random()-0.5)*10}px, ${(Math.random()-0.5)*10}px) rotate(${(Math.random()-0.5)*6}deg)`;
      count++;
      if (count > 12) {
        clearInterval(id);
        el.style.transform = origTransform;
      }
    }, 80);
  });
  // popup
  const m = document.createElement('div');
  m.style.cssText = `
    position: fixed; top: 30%; left: 50%; transform: translate(-50%, 0);
    background: #000; color: #ff3a8c; padding: 16px 28px;
    font-family: 'Anton', sans-serif; letter-spacing: 4px; font-size: 22px;
    border: 3px solid #ff3a8c; box-shadow: 0 0 40px #ff3a8c;
    z-index: 9999; pointer-events: none;`;
  m.textContent = '⚠ KOLLEKTIVER MENTAL BREAKDOWN ⚠';
  document.body.appendChild(m);
  setTimeout(() => m.remove(), 1800);
}
function planeBreakdown() {
  setTimeout(() => {
    if (Math.random() < 0.4) mentalBreakdown();
    planeBreakdown();
  }, 240000 + Math.random()*240000);
}
setTimeout(planeBreakdown, 60000);

// devtools-roast: wenn devtools geöffnet, kommt ein zufälliger roast in der konsole
let devtoolsRoastGegeben = false;
setInterval(() => {
  const threshold = 160;
  if ((window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) && !devtoolsRoastGegeben) {
    devtoolsRoastGegeben = true;
    const r = ROASTS[Math.floor(Math.random()*ROASTS.length)];
    console.log('%c👁 SANANENBAFT HAT DICH BEMERKT', 'color:#b8000f; background:#ffe600; padding:8px 14px; font-size:16px; font-weight:bold; letter-spacing:2px;');
    console.log('%c"' + r + '"', 'color:#1a1410; font-family:serif; font-style:italic; font-size:14px;');
  }
}, 3000);

// counter 7x klick easter egg
const counterEl = document.getElementById('counter');
let counterKlicks = 0;
if (counterEl) {
  counterEl.addEventListener('click', () => {
    counterKlicks++;
    if (counterKlicks === 7) {
      // bonus: alle akten karten kurz aufleuchten lassen
      document.querySelectorAll('.akte-card').forEach((c, i) => {
        setTimeout(() => {
          c.style.transition = 'transform 0.3s';
          c.style.transform = 'scale(1.05) rotate(' + ((Math.random()-0.5)*4) + 'deg)';
          setTimeout(() => { c.style.transform = ''; }, 400);
        }, i * 30);
      });
      konfetti();
    }
  });
}

// kuckuck-kuckuck wenn man "kuckuck" tippt
document.addEventListener('keydown', (e) => {
  if (e.target.matches('input, textarea')) return;
  keyBuffer = (keyBuffer + e.key.toLowerCase()).slice(-12);
  if (keyBuffer.endsWith('kuckuck')) {
    const k = document.createElement('div');
    k.textContent = 'KUCKUCK KUCKUCK';
    k.style.cssText = `
      position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
      background: #ff3a8c; color: #fff;
      padding: 20px 40px; font-family: 'Anton', sans-serif;
      font-size: 36px; letter-spacing: 4px;
      border: 4px solid #fff;
      box-shadow: 0 0 60px #ff3a8c;
      z-index: 9999; pointer-events: none;
      animation: bounce-in 0.4s;`;
    document.body.appendChild(k);
    setTimeout(() => k.remove(), 1500);
    keyBuffer = '';
  }
  if (keyBuffer.endsWith('roast') || keyBuffer.endsWith('sanan')) {
    roaste();
    keyBuffer = '';
  }
  if (keyBuffer.endsWith('gamble') || keyBuffer.endsWith('baft')) {
    window.location.href = 'gamble.html';
  }
  if (keyBuffer.endsWith('ele')) {
    window.open('https://youtu.be/9XSONr2tCDQ?si=VEckeVGeErufbd-P&t=22', '_blank');
    keyBuffer = '';
  }
});

// random spawn von TUNG TUNG TUNG Text (sehr selten)
function tungTungEvent() {
  const t = document.createElement('div');
  t.textContent = 'TUNG TUNG TUNG SAHUR';
  t.style.cssText = `
    position: fixed;
    left: ${Math.random()*70 + 10}%;
    top: ${Math.random()*70 + 10}%;
    background: #f5deb3;
    color: #8b4513;
    padding: 10px 20px;
    font-family: 'Anton', sans-serif;
    letter-spacing: 3px;
    font-size: ${16 + Math.random()*14}px;
    border: 3px solid #8b4513;
    box-shadow: 4px 4px 0 #000;
    z-index: 9994;
    pointer-events: none;
    transform: rotate(${(Math.random()-0.5)*30}deg);
    opacity: 0;
    transition: opacity 0.4s;`;
  document.body.appendChild(t);
  requestAnimationFrame(() => { t.style.opacity = '1'; });
  setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 500); }, 1800);
}
function planeTung() {
  setTimeout(() => {
    if (Math.random() < 0.3) tungTungEvent();
    planeTung();
  }, 180000 + Math.random()*240000);
}
setTimeout(planeTung, 90000);

// 5x doppelklick auf wappen → random roast
let wappenDblClicks = 0;
if (wappen) {
  wappen.addEventListener('dblclick', () => {
    wappenDblClicks++;
    if (wappenDblClicks >= 3) {
      wappenDblClicks = 0;
      roaste();
    }
  });
}

// =================================================================
// URL-HASH-TRIGGER
// =================================================================
function pruefHash() {
  const h = window.location.hash.toLowerCase();
  if (h === '#wavecarried' || h === '#wave') {
    document.body.classList.add('wave-mode');
    setTimeout(() => document.body.classList.remove('wave-mode'), 8000);
  } else if (h === '#aura') {
    document.body.classList.add('aura-mode');
  } else if (h === '#roast' || h === '#sananen') {
    setTimeout(roaste, 800);
  } else if (h === '#jackpot') {
    window.location.href = 'gamble.html';
  } else if (h === '#truth' || h === '#wahrheit') {
    window.location.href = 'akten/069-geheim.html';
  } else if (h === '#tung' || h === '#sahur') {
    window.open('https://youtu.be/HmIMmFAV4BY?si=y5_LsXuBNpuwc_Pm', '_blank');
  } else if (h === '#ele') {
    window.open('https://youtu.be/9XSONr2tCDQ?si=VEckeVGeErufbd-P&t=22', '_blank');
  }
}
window.addEventListener('load', pruefHash);
window.addEventListener('hashchange', pruefHash);

// =================================================================
// TIME-BASED GREETING (nachts schläft kuckuck)
// =================================================================
function pruefTageszeit() {
  const stunde = new Date().getHours();
  if (stunde >= 0 && stunde < 6) {
    setTimeout(() => {
      const m = document.createElement('div');
      m.style.cssText = `
        position: fixed; bottom: 100px; right: 20px;
        background: #1a1410; color: #c9a85a;
        padding: 14px 20px; max-width: 320px;
        border: 2px solid #c9a85a; z-index: 9994;
        font-family: 'Special Elite', monospace;
        font-size: 13px; box-shadow: 4px 4px 0 #000;
        cursor: pointer;
      `;
      m.innerHTML = '🌙 <b>Kuckuck schläft.</b><br>Komm später wieder. Oder noch besser: gehe selbst schlafen. ' + stunde + ' Uhr ist nicht gesund.';
      m.addEventListener('click', () => m.remove());
      document.body.appendChild(m);
      setTimeout(() => m.remove(), 10000);
    }, 3000);
  }
}
pruefTageszeit();

// =================================================================
// LONG-PRESS WAPPEN (1.5s halten)
// =================================================================
let wappenPressTimer = null;
if (wappen) {
  wappen.addEventListener('mousedown', () => {
    wappenPressTimer = setTimeout(() => {
      // langer druck: alle stempel auf der seite kurz aufblitzen
      document.querySelectorAll('.stempel, .stempel-mini').forEach(s => {
        const orig = s.style.transform;
        s.style.transition = 'transform 0.2s';
        s.style.transform = (orig || '') + ' scale(1.5)';
        setTimeout(() => { s.style.transform = orig; }, 600);
      });
      konfetti();
      console.log('%c🔓 LONG PRESS — alle stempel reagieren', 'color:#ff3a8c; font-size:14px; font-weight:bold;');
    }, 1500);
  });
  wappen.addEventListener('mouseup', () => clearTimeout(wappenPressTimer));
  wappen.addEventListener('mouseleave', () => clearTimeout(wappenPressTimer));
}

// =================================================================
// SELEKTION "ich bin jughead" → "ich wurde weggeweht"
// =================================================================
document.addEventListener('mouseup', () => {
  const sel = window.getSelection().toString().trim().toLowerCase();
  if (sel === 'ich bin jughead' || sel === 'bin jughead') {
    setTimeout(() => {
      alert('nein. du wurdest weggeweht.');
    }, 200);
  }
  if (sel === 'kuckuck' || sel === 'jason') {
    const m = document.createElement('div');
    m.textContent = '↑ erkannt';
    m.style.cssText = `
      position: fixed; top: 50px; right: 30px;
      background: #ff3a8c; color: #fff; padding: 6px 14px;
      font-family: 'Anton', sans-serif; letter-spacing: 2px;
      font-size: 12px; z-index: 9995; pointer-events: none;
    `;
    document.body.appendChild(m);
    setTimeout(() => m.remove(), 1500);
  }
});

// =================================================================
// WILDSCHWEIN MASS CLICK (50x = death)
// =================================================================
let wildschweinKlicks = parseInt(localStorage.getItem('wildschwein-klicks')||'0', 10);
document.querySelectorAll('img[src*="wildschwein"]').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', (e) => {
    e.stopPropagation();
    wildschweinKlicks++;
    localStorage.setItem('wildschwein-klicks', wildschweinKlicks);
    if (wildschweinKlicks === 25) {
      const m = document.createElement('div');
      m.textContent = '⚠ das wildschwein wirkt erschöpft';
      m.style.cssText = `
        position: fixed; bottom: 20px; right: 20px;
        background: #b8000f; color: #fff;
        padding: 8px 14px; z-index: 9995;
        font-family: 'Anton', sans-serif; letter-spacing: 2px;
        font-size: 12px;
      `;
      document.body.appendChild(m);
      setTimeout(() => m.remove(), 4000);
    }
    if (wildschweinKlicks >= 50) {
      alert('🐗 IHR HABT DAS WILDSCHWEIN ZU TODE GEKLICKT.\n\nGesamt-Klicks: ' + wildschweinKlicks + '\n\nDie Polizei wurde NICHT informiert (sie haben die Ermittlungen schon eingestellt).');
      wildschweinKlicks = 0;
      localStorage.setItem('wildschwein-klicks', '0');
    }
  });
});

// =================================================================
// PAGE-LOAD GREETING (mehr varianten)
// =================================================================
window.addEventListener('load', () => {
  const stunde = new Date().getHours();
  const greetings = [
    stunde < 6 ? '🌙 du bist sehr spät dran. das passt.' :
    stunde < 12 ? '☀ guten morgen. der acer-stuhl ist schon wach.' :
    stunde < 18 ? '👋 willkommen zurück. plexi hat ELE SPONGEBOB angemacht. wieder.' :
    '🌆 guten abend. wave-parts incoming.'
  ];
  setTimeout(() => {
    const g = document.createElement('div');
    g.style.cssText = `
      position: fixed; top: 130px; right: 20px;
      background: #fdf6e8; color: var(--ink);
      padding: 12px 18px; border: 2px solid var(--ink);
      box-shadow: 4px 4px 0 var(--ink);
      font-family: 'Special Elite', monospace; font-size: 13px;
      z-index: 9994; max-width: 280px;
    `;
    g.innerHTML = greetings[0] + ' <span style="float:right; cursor:pointer; color:var(--stamp-red); font-weight:bold;" onclick="this.parentNode.remove()">✕</span>';
    document.body.appendChild(g);
    setTimeout(() => g.remove(), 8000);
  }, 2000);
});

// =================================================================
// SNAKE EASTER EGG (in der konsole)
// =================================================================
window.snake = function() {
  console.log('%c🐍 SNAKE? hier? lol nein.\nver schon mal in der konsole gespielt?', 'color:#2bff52; font-size:14px;');
  console.log('%c   ▓▓▓▓▓▓▓▓▓▓\n   ▓        ▓\n   ▓ ▓▓▓▓   ▓\n   ▓    ▓ ● ▓\n   ▓▓▓▓▓▓▓▓▓▓', 'color:#2bff52; font-family:monospace; line-height:1;');
  return 'go play /minigames';
};

// =================================================================
// SECRET: "kuckuckcheat" → cheats aktivieren
// =================================================================
document.addEventListener('keydown', (e) => {
  if (e.target.matches('input, textarea')) return;
  if (keyBuffer.endsWith('cheat') || keyBuffer.endsWith('kuckuck cheat')) {
    alert('🎮 CHEAT-MODUS AKTIV\n\nKonsolen-Befehle freigeschaltet:\n- gibAuraGib(n) im Gambleautomat\n- window.state.aura = X im Aura-Clicker\n- aura(), wave(), kuckuck(), tungtungtung()\n\nJughead wurde informiert.');
    keyBuffer = '';
  }
  if (keyBuffer.endsWith('666')) {
    document.body.classList.add('wave-mode');
    document.body.classList.add('aura-mode');
    setTimeout(() => {
      document.body.classList.remove('wave-mode');
      document.body.classList.remove('aura-mode');
    }, 6000);
    keyBuffer = '';
  }
});

// =================================================================
// MEHR KONSOLEN-BEFEHLE
// =================================================================
window.minigames = function() { window.location.href = 'minigames/index.html'; };
window.ki = window.kiBild = function() { oeffneKiGenerator(); };
window.bambiland = function() { zeigeBambilandModal(); };
window.wahrheit = function() { window.location.href = 'akten/069-geheim.html'; };
window.kuckuckcheat = function() {
  console.log('%c🎮 CHEATS', 'background:#000; color:#ffe600; padding:8px; font-weight:bold;');
  return ['gibAuraGib(n)', 'window.state.aura = X', 'wave()', 'aura()', 'roast()', 'tungtungtung()', 'kuckuck()'];
};

// =================================================================
// LIVE-TICKER NAHTLOS DUPLIZIEREN
// =================================================================
(function dupliziereTicker() {
  const inner = document.getElementById('ticker-inner');
  if (!inner) return;
  // bestehende children einmal komplett klonen und anhängen → ergibt 2x den content
  // so kann die CSS-animation von 0% → -50% nahtlos loopen
  const clone = inner.cloneNode(true);
  while (clone.firstChild) inner.appendChild(clone.firstChild);
})();

// =================================================================
// KUCKUCK KI-BILD GENERATOR
// =================================================================
const KI_LADE_STATUSE = [
  'analysiere deinen prompt...',
  'lade kuckuck-modell...',
  'kalibriere acer-stuhl...',
  'frage plexi nach ele-spongebob-rechten...',
  'tung-tung-tung-validierung läuft...',
  'jughead wird informiert...',
  'aura-level deines requests wird gemessen...',
  'bambi-anteil wird berechnet...',
  'überprüfe ob du das wirklich brauchst...',
  'rendere wave-part...',
  'finalisiere... 99%',
  'doch nicht.'
];

const KI_WIKIPEDIA_OPTIONEN = [
  { titel: 'Dunning-Kruger-Effekt', url: 'https://de.wikipedia.org/wiki/Dunning-Kruger-Effekt', warum: 'du dachtest du brauchst keinen prompt-skill.' },
  { titel: 'Generative künstliche Intelligenz', url: 'https://de.wikipedia.org/wiki/Generative_k%C3%BCnstliche_Intelligenz', warum: 'lies mal wie das eigentlich funktioniert.' },
  { titel: 'Pareidolie', url: 'https://de.wikipedia.org/wiki/Pareidolie', warum: 'falls du in den ergebnissen ein gesicht siehst — es ist nicht da.' },
  { titel: 'Plagiat', url: 'https://de.wikipedia.org/wiki/Plagiat', warum: 'falls du jemandes stil "imitieren" wolltest.' },
  { titel: 'Faulheit', url: 'https://de.wikipedia.org/wiki/Faulheit', warum: 'ki nutzen statt selbst lernen — hier die wissenschaftliche grundlage.' },
  { titel: 'Selbstüberschätzung', url: 'https://de.wikipedia.org/wiki/Selbst%C3%BCberscha%CC%88tzung', warum: 'für deinen letzten prompt empfohlen.' },
  { titel: 'Originalität', url: 'https://de.wikipedia.org/wiki/Originalit%C3%A4t', warum: 'hattest du mal von gehört? hier eine erinnerung.' },
  { titel: 'Künstlerische Mediokrität', url: 'https://de.wikipedia.org/wiki/Mediokrit%C3%A4t', warum: 'die wikipedia-seite, die zu deinen werken passt.' }
];

window.oeffneKiGenerator = function() {
  modalInhalt.innerHTML = `
    <div class="ki-loader">
      <h2>🎨 KUCKUCK KI-BILD GENERATOR</h2>
      <p style="margin-bottom: 18px;">Bitte gib einen Prompt ein:</p>
      <input type="text" id="ki-prompt" placeholder="z.B. 'kuckuck als bambi reitend auf wildschwein'" value="" style="width:100%; padding:12px; font-family:'Courier Prime',monospace; font-size:14px; border:2px solid var(--ink); background:#fff;">
      <button id="ki-start" style="margin-top:14px; background:var(--ink); color:#ffe600; border:none; padding:14px 28px; font-family:'Anton',sans-serif; letter-spacing:3px; cursor:pointer; font-size:16px;">🚀 GENERIEREN</button>
      <p style="font-family:'Caveat',cursive; font-size:14px; margin-top:14px; color:var(--ink-soft);">
        powered by KuckuckGPT-9000 · trainiert auf 119 dossiers · keine rechte vorbehalten
      </p>
    </div>`;
  modalBg.classList.add('aktiv');
  document.body.style.overflow = 'hidden';
  // input bekommen focus
  setTimeout(() => { const inp = document.getElementById('ki-prompt'); if (inp) inp.focus(); }, 100);
  // start button
  const startBtn = document.getElementById('ki-start');
  if (startBtn) startBtn.addEventListener('click', kiGeneriere);
  const inp = document.getElementById('ki-prompt');
  if (inp) inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') kiGeneriere(); });
};

function kiGeneriere() {
  const prompt = (document.getElementById('ki-prompt')?.value || '').trim();
  modalInhalt.innerHTML = `
    <div class="ki-loader">
      <h2>🎨 GENERIERUNG LÄUFT...</h2>
      <p style="font-family:'Courier Prime',monospace; font-size:13px; color:var(--ink-soft);">Prompt: "${(prompt || '(leer)').replace(/[<>&"]/g,'')}"</p>
      <div class="ki-progress"><div class="ki-progress-fill" id="ki-fill"></div></div>
      <div class="ki-status" id="ki-status">starte...</div>
    </div>`;
  const $fill = document.getElementById('ki-fill');
  const $status = document.getElementById('ki-status');
  let p = 0;
  let idx = 0;
  const interval = setInterval(() => {
    p += 8 + Math.random()*10;
    if (p >= 100) {
      p = 100;
      clearInterval(interval);
      setTimeout(zeigeKiErgebnis, 800);
    }
    $fill.style.width = p + '%';
    if (idx < KI_LADE_STATUSE.length) {
      $status.textContent = KI_LADE_STATUSE[idx];
      idx++;
    }
  }, 350);
}

function zeigeKiErgebnis() {
  // 3 random wikipedia options
  const shuffled = [...KI_WIKIPEDIA_OPTIONEN].sort(() => Math.random() - 0.5).slice(0, 3);
  const roastIdx = Math.floor(Math.random() * ROASTS.length);
  modalInhalt.innerHTML = `
    <div class="ki-loader">
      <div class="stempel gross schwarz">GENERIERUNG FEHLGESCHLAGEN</div>
      <h2 style="margin-top:24px; color:var(--stamp-red);">FEHLER 422 — PROMPT UNZUREICHEND</h2>
      <p style="font-family:'Special Elite',monospace; font-size:14px; margin: 14px auto; max-width:520px; line-height:1.5;">
        Die KI hat deinen Prompt analysiert und folgendes Urteil gefällt:
      </p>
      <div style="background:#fff; border:2px solid var(--ink); padding:18px; margin:14px auto; max-width:520px; font-family:'Special Elite',monospace; font-size:16px; box-shadow: 4px 4px 0 var(--ink);">
        "${ROASTS[roastIdx]}"
      </div>
      <p style="margin-top:20px; font-family:'Caveat',cursive; font-size:18px; color:var(--ink-soft);">
        Bevor du es nochmal versuchst, empfehlen wir folgende Lektüre:
      </p>
      <div style="margin-top:14px; display:flex; flex-direction:column; gap:8px; max-width:520px; margin-left:auto; margin-right:auto;">
        ${shuffled.map(o => `
          <a href="${o.url}" target="_blank" rel="noopener" style="background:#fff; border:1px solid var(--ink); padding:10px 14px; text-decoration:none; color:var(--ink); font-family:'Special Elite',monospace; font-size:13px; display:block; text-align:left;">
            📚 <b style="color:var(--stamp-red);">${o.titel}</b><br>
            <span style="font-size:11px; color:var(--ink-soft); font-style:italic;">${o.warum}</span>
          </a>
        `).join('')}
      </div>
      <button onclick="oeffneKiGenerator()" style="margin-top:20px; background:var(--ink); color:#fff; border:none; padding:10px 22px; font-family:'Anton',sans-serif; letter-spacing:2px; cursor:pointer;">🔄 NOCHMAL VERSUCHEN</button>
    </div>`;
}

const kiBtn = document.getElementById('ki-btn');
if (kiBtn) kiBtn.addEventListener('click', oeffneKiGenerator);

// =================================================================
// JUGHEAD-SPENDEN-MODAL
// =================================================================
const SPENDER_HALL = [
  { name: 'Anonym (vermutlich plexi)', betrag: '0,00 €',  notiz: 'wollte 9× spenden — ELE SPONGEBOB dazwischen' },
  { name: 'Aclasher (admin)',          betrag: '0,00 €',  notiz: 'root-zugriff. nicht aufs konto.' },
  { name: 'Kuckuck',                   betrag: '500,00 €',notiz: 'hat es 2 Min später wieder mitgenommen', heldenakte: true },
  { name: 'Triple-T',                  betrag: '1 Holz',  notiz: 'nicht annehmbar — Sachspende verweigert' },
  { name: 'ein anonymes Bambi',        betrag: '0,00 €',  notiz: '3 Schmetterlinge geschickt — wir akzeptieren keine Tiere' },
  { name: 'Steve',                     betrag: '— €',     notiz: 'wollte vorbeikommen. ist nicht angekommen. siehe Chat-Minigame.' },
  { name: 'polnischer Zoink',          betrag: '0,00 €',  notiz: 'leugnet überhaupt zu existieren' },
  { name: 'Captain Carry',             betrag: '— €',     notiz: 'in Pension. nicht erreichbar.' },
  { name: 'ArenaiTV',                  betrag: '0,00 €',  notiz: '"das ist free, ich spende nichts."' },
  { name: 'Tung Tung Tung Sahur',      betrag: 'Holz',    notiz: 'kommt mit dem Holz. immer noch.' },
  { name: 'der Acer-Stuhl',            betrag: '0,00 €',  notiz: 'wollte spenden — beantragt selbst Asyl' },
  { name: 'plexi',                     betrag: '0,01 €',  notiz: 'einzige tatsächliche Spende. wurde sofort weggeweht.', heldenakte: true }
];

const SPENDEN_OUTCOMES = [
  '😢 Vielen Dank! Aber Jughead war kurz nicht da. Geld wurde an plexi weitergeleitet (er war erreichbar).',
  '💸 Spende erhalten — Jughead wurde gerade weggeweht. Geld ist auch weg.',
  '😊 Vielen Dank! Jughead bedankt sich. (Er weiß noch nicht dass er gleich weggeweht wird.)',
  '⚠ Spende leider nicht zugestellt. Empfänger nicht erreichbar — wahrscheinlich wieder ELE SPONGEBOB schuld.',
  '🌪 Du wurdest weggeweht. Deine Spende ebenfalls.',
  '🪑 Geld erfolgreich übermittelt — Acer-Stuhl hat es abgefangen. Er beantragt Asyl davon.',
  '🐻 Spende angekommen. Jughead hat sich bedankt. Mit "bro 🐻". Dann verschwand er.',
  '🚫 Bezahlung fehlgeschlagen — Aclasher (admin) hat dein Konto temporär gesperrt.',
  '🚗 Lambo gespendet! Wir haben schon einen Vault davon. Aber danke.',
  '👁 Anonyme Übermittlung erfolgreich. Aber wir wissen, dass du es warst.',
  '🦌 Bambi hat deine Spende auf dem Weg abgefangen. Wir hoffen, du verstehst.',
  '🔄 Spende ging an Tung Tung Tung Sahur statt Jughead. Falscher Empfänger im Dropdown ausgewählt.',
  '📡 Verbindung zu Bunker 7 instabil. Spende im Limbo. Versuch es nochmal.',
  '🎰 Geld versehentlich in den Gambleautomat gespendet. Ergebnis: 0 Baft-Coins.',
  '⏰ Spende erfolgreich für das Jahr 2031. Jughead wird sie dann verarbeiten. Vielleicht.',
  '🧽 plexi hat ELE SPONGEBOB angemacht während der Überweisung. Bank verweigert die Buchung.'
];

let spendenZaehler = parseInt(localStorage.getItem('jughead-versuche') || '9847', 10);

window.oeffneSpendenModal = function() {
  const halleHtml = SPENDER_HALL.map(s => `
    <div class="spender-zeile ${s.heldenakte ? 'heldenakte' : ''}">
      <span><b>${s.name}</b><br><span style="font-size:11px; color:var(--ink-soft);">${s.notiz}</span></span>
      <span class="betrag">${s.betrag}</span>
    </div>`).join('');

  modalInhalt.innerHTML = `
    <div class="spende-modal">
      <div class="jughead-foto">PROFILBILD<br>WEGGEWEHT</div>
      <h2>JUGHEAD SPENDENPORTAL</h2>
      <p style="text-align:center; font-family:'Special Elite',monospace; font-size:14px; color:var(--ink-soft);">
        Jughead Moderator a.D. · Aktenzeichen: BEGV-J-WEG-001<br>
        17× weggeweht. 0× ernst genommen.
      </p>

      <div class="balken-aussen" style="margin-top:18px;">
        <div class="balken-innen" style="width: 0.0001%;"></div>
        <div class="balken-text">0,00 € von 1.000.000 €</div>
      </div>
      <div class="balken-meta" style="text-align:center;">
        Tag <b>412</b> der Kampagne · <b>0</b> erfolgreiche Spenden · <b id="spende-versuche">${spendenZaehler}</b> Versuche
      </div>

      <h3 style="margin-top:20px; font-family:'Anton',sans-serif; letter-spacing:2px; font-size:18px;">WÄHLE EINEN BETRAG:</h3>
      <div class="spende-betraege">
        <div class="spende-betrag" data-betrag="5">5 €<span class="label-klein">"einsteiger"</span></div>
        <div class="spende-betrag beliebt" data-betrag="25">25 €<span class="label-klein">danke!</span></div>
        <div class="spende-betrag" data-betrag="100">100 €<span class="label-klein">held*in</span></div>
        <div class="spende-betrag" data-betrag="lambo">🚗<span class="label-klein">ein Lambo</span></div>
      </div>

      <div style="margin-top:6px;">
        <input type="number" id="eigener-betrag" placeholder="oder eigener Betrag..." style="width:65%; padding:8px 12px; border:2px solid var(--ink); font-family:'Courier Prime',monospace; background:#fdf9ef;">
        <button id="eigener-spenden" style="background:var(--ink); color:#fff; border:none; padding:8px 16px; font-family:'Anton',sans-serif; letter-spacing:2px; cursor:pointer;">SPENDEN</button>
      </div>

      <div class="spender-liste">
        <h3>🏆 SPENDER HALL OF FAME</h3>
        ${halleHtml}
      </div>

      <p style="text-align:center; font-size:10px; font-family:'Courier Prime',monospace; color:#888; margin-top:18px;">
        Spendenquittung wird per Brieftaube versendet. Brieftaube wurde weggeweht.<br>
        Alle Spenden sind freiwillig und enden in Aclasher's (admin) Email-Spam.
      </p>
    </div>`;
  modalBg.classList.add('aktiv');
  document.body.style.overflow = 'hidden';

  document.querySelectorAll('.spende-betrag').forEach(b => {
    b.addEventListener('click', () => spende(b.dataset.betrag));
  });
  document.getElementById('eigener-spenden').addEventListener('click', () => {
    const v = document.getElementById('eigener-betrag').value;
    spende(v || '0');
  });
};

function spende(betrag) {
  spendenZaehler++;
  localStorage.setItem('jughead-versuche', spendenZaehler);
  const outcome = SPENDEN_OUTCOMES[Math.floor(Math.random() * SPENDEN_OUTCOMES.length)];
  const betragText = betrag === 'lambo' ? 'einen Lamborghini Huracán' : `${betrag} €`;

  modalInhalt.innerHTML = `
    <div class="spende-modal" style="text-align:center;">
      <div class="stempel gross schwarz" style="margin: 10px auto 20px;">VERARBEITUNG ABGESCHLOSSEN</div>
      <p style="font-family:'Caveat',cursive; font-size:22px; color:var(--ink-soft); margin-bottom:14px;">
        du wolltest ${betragText} an Jughead spenden.
      </p>

      <div style="background:#fff; border:2px solid var(--ink); padding:20px; max-width:480px; margin:14px auto; box-shadow:4px 4px 0 var(--ink); font-family:'Special Elite',monospace; font-size:15px; line-height:1.5;">
        ${outcome}
      </div>

      <div class="balken-aussen" style="max-width:400px; margin: 14px auto;">
        <div class="balken-innen" style="width: 0.0001%;"></div>
        <div class="balken-text">immer noch 0,00 €</div>
      </div>

      <p style="font-family:'Courier Prime',monospace; font-size:11px; color:var(--ink-soft); letter-spacing:1px;">
        deine spende wurde in den jughead-spam-ordner verschoben<br>
        bearbeitungs-status: ignoriert · bearbeiter: niemand
      </p>

      <div style="margin-top:20px;">
        <button onclick="oeffneSpendenModal()" style="background:var(--stamp-red); color:#fff; border:3px solid #000; padding:12px 24px; font-family:'Anton',sans-serif; letter-spacing:2px; cursor:pointer; box-shadow:4px 4px 0 #000;">🔄 NOCHMAL SPENDEN</button>
        <button onclick="schliesseModal()" style="background:var(--ink); color:#fff; border:3px solid #000; padding:12px 24px; font-family:'Anton',sans-serif; letter-spacing:2px; cursor:pointer; margin-left:10px;">SCHLIESSEN</button>
      </div>

      <p style="margin-top:14px; font-family:'Caveat',cursive; font-size:16px; color:var(--ink-soft);">
        bisher haben ${spendenZaehler} menschen jughead nicht erreicht.
      </p>
    </div>`;
}

const spendeBtn = document.getElementById('spende-btn');
const spendeCard = document.getElementById('spende-card');
if (spendeBtn) spendeBtn.addEventListener('click', (e) => { e.stopPropagation(); oeffneSpendenModal(); });
if (spendeCard) spendeCard.addEventListener('click', oeffneSpendenModal);
window.spende = window.jugheadspende = oeffneSpendenModal;

// =================================================================
// KUCKUCK-SPENDEN-TWIST (geht in wirklichkeit an Jughead)
// =================================================================
const KUCKUCK_TWIST_BEGRUENDUNGEN = [
  'Kuckuck hat bereits 47 Lambos. Empfänger wurde automatisch zu Jughead geändert.',
  'Empfänger-Konto bereits voll. Spende wird an den nächstbedürftigen Empfänger umgeleitet: Jughead.',
  'Hinweis: Kuckuck hat unsere Spende abgelehnt mit den Worten "warte kurz". Wir leiten weiter an Jughead.',
  'Begründung: Kuckuck hat einen Vault. Jughead hat 17× Wegwehung. Wir entscheiden uns für Bedürftigkeit.',
  'Kuckuck-Konto temporär gesperrt durch Finanzamt (siehe Dossier #081). Empfänger geändert auf Jughead.',
  'Aclasher (admin) hat die Spende geprüft und auf Jughead umgeleitet. Begründung: "naja."',
  'Kuckuck akzeptiert keine Spenden unter 1 Lambo. Wir leiten an Jughead um, der jeden Cent nimmt.'
];

window.oeffneKuckuckSpende = function() {
  modalInhalt.innerHTML = `
    <div class="spende-modal" style="text-align:center; padding: 20px 10px;">
      <h2>💎 KUCKUCK-SPENDE</h2>
      <p style="font-family:'Special Elite',monospace; font-size:14px; color:var(--ink-soft); margin-bottom: 20px;">
        Du möchtest dem stärksten Streamer der Neuzeit eine Anerkennung zukommen lassen.
      </p>

      <div style="background: linear-gradient(135deg, #1a1410 0%, #2a160c 100%); padding: 20px; max-width: 460px; margin: 14px auto; border: 3px solid #c9a85a; color: #fff;">
        <div style="font-family:'Anton',sans-serif; font-size:22px; color:#ffe600; letter-spacing:2px;">EMPFÄNGER</div>
        <div style="font-family:'Caveat',cursive; font-size:32px; color:#fff; margin: 8px 0;">Kuckuck (Jason)</div>
        <div style="font-family:'Courier Prime',monospace; font-size:12px; color:#c9a85a;">Aura-Level: UNMESSBAR · Bedürftigkeit: 0</div>
      </div>

      <p style="margin-top:14px; font-family:'Caveat',cursive; font-size:18px; color:var(--ink-soft);">wähle deinen betrag:</p>

      <div class="spende-betraege" style="max-width:500px; margin: 10px auto;">
        <div class="spende-betrag" data-betrag-k="10">10 €<span class="label-klein">"fan"</span></div>
        <div class="spende-betrag beliebt" data-betrag-k="50">50 €<span class="label-klein">danke kuckuck!</span></div>
        <div class="spende-betrag" data-betrag-k="500">500 €<span class="label-klein">aura-pass</span></div>
        <div class="spende-betrag" data-betrag-k="lambo">🚗<span class="label-klein">ein lambo</span></div>
      </div>

      <p style="margin-top:12px; font-family:'Courier Prime',monospace; font-size:11px; color:#888;">
        spenden werden direkt verarbeitet · keine wartezeit · keine fragen
      </p>
    </div>`;
  modalBg.classList.add('aktiv');
  document.body.style.overflow = 'hidden';

  document.querySelectorAll('[data-betrag-k]').forEach(b => {
    b.addEventListener('click', () => kuckuckSpendeTwist(b.dataset.betragK));
  });
};

function kuckuckSpendeTwist(betrag) {
  const betragText = betrag === 'lambo' ? 'einen Lamborghini' : `${betrag} €`;
  // schritt 1: loading
  modalInhalt.innerHTML = `
    <div class="ki-loader">
      <h2 style="color: #1a4080;">SPENDE WIRD VERARBEITET</h2>
      <p style="font-family:'Special Elite',monospace; font-size:14px; color:var(--ink-soft);">
        Du spendest ${betragText} an Kuckuck.<br>Empfänger wird geprüft...
      </p>
      <div class="ki-progress" style="margin: 20px auto; max-width: 400px;"><div class="ki-progress-fill" id="k-fill" style="background: linear-gradient(90deg, #c9a85a 0%, #ffe600 100%);"></div></div>
      <div class="ki-status" id="k-status">aura-validierung läuft...</div>
    </div>`;
  const $fill = document.getElementById('k-fill');
  const $stat = document.getElementById('k-status');
  const stati = [
    'aura-validierung läuft...',
    'kontostand von kuckuck wird abgefragt...',
    'lambo-vault inventur...',
    'empfänger-bedürftigkeit wird berechnet...',
    'jughead wird benachrichtigt...',
    'umleitung wird vorbereitet...'
  ];
  let p = 0, idx = 0;
  const iv = setInterval(() => {
    p += 16;
    $fill.style.width = Math.min(p, 100) + '%';
    if (idx < stati.length) $stat.textContent = stati[idx++];
    if (p >= 100) {
      clearInterval(iv);
      setTimeout(zeigeTwist, 700);
    }
  }, 400);

  function zeigeTwist() {
    const begr = KUCKUCK_TWIST_BEGRUENDUNGEN[Math.floor(Math.random()*KUCKUCK_TWIST_BEGRUENDUNGEN.length)];
    modalInhalt.innerHTML = `
      <div style="text-align:center; padding: 30px 10px;">
        <div class="stempel gross" style="background: rgba(255,230,0,0.2);">EMPFÄNGER GEÄNDERT</div>
        <h2 style="font-family:'Anton',sans-serif; font-size: 28px; letter-spacing: 3px; color: var(--stamp-red); margin-top: 24px;">SPENDE WIRD UMGELEITET</h2>

        <div style="display: flex; align-items: center; justify-content: center; gap: 20px; margin: 24px 0; flex-wrap: wrap;">
          <div style="background:#1a1410; color:#ffe600; padding: 14px 20px; font-family:'Anton',sans-serif; letter-spacing:2px; min-width: 140px;">
            <div style="font-size:11px; color:#888; letter-spacing:2px;">URSPRÜNGLICH</div>
            <div style="font-size:18px; text-decoration: line-through; opacity:0.7;">KUCKUCK</div>
          </div>
          <div style="font-size: 36px; color: var(--stamp-red);">→</div>
          <div style="background:var(--stamp-red); color:#fff; padding: 14px 20px; font-family:'Anton',sans-serif; letter-spacing:2px; min-width: 140px; box-shadow: 4px 4px 0 #000;">
            <div style="font-size:11px; color:#ffe600; letter-spacing:2px;">NEUER EMPFÄNGER</div>
            <div style="font-size:22px;">JUGHEAD</div>
          </div>
        </div>

        <div style="background: #fff; border: 2px solid var(--ink); padding: 16px; max-width: 500px; margin: 14px auto; box-shadow: 4px 4px 0 var(--ink); font-family: 'Special Elite', monospace; font-size: 15px; line-height: 1.5;">
          ${begr}
        </div>

        <p style="margin-top: 18px; font-family:'Caveat',cursive; font-size: 19px; color: var(--ink-soft);">
          willst du trotzdem an jughead spenden?
        </p>

        <div style="margin-top: 14px;">
          <button onclick="oeffneSpendenModal()" style="background:var(--stamp-red); color:#fff; border:3px solid #000; padding:14px 26px; font-family:'Anton',sans-serif; letter-spacing:2px; cursor:pointer; box-shadow:4px 4px 0 #000;">🥺 JA, JUGHEAD HELFEN</button>
          <button onclick="schliesseModal()" style="background:var(--ink); color:#fff; border:3px solid #000; padding:14px 26px; font-family:'Anton',sans-serif; letter-spacing:2px; cursor:pointer; margin-left:10px;">NEIN, DOCH NICHT</button>
        </div>

        <p style="margin-top: 14px; font-family:'Courier Prime',monospace; font-size: 11px; color: #888;">
          alle umleitungen sind final · einsprüche an aclasher (admin) · er wird "naja" antworten
        </p>
      </div>`;
  }
}

const kuckuckSpendeBtn = document.getElementById('kuckuck-spende-btn');
const kuckuckSpendeCard = document.getElementById('spende-kuckuck');
if (kuckuckSpendeBtn) kuckuckSpendeBtn.addEventListener('click', (e) => { e.stopPropagation(); oeffneKuckuckSpende(); });
if (kuckuckSpendeCard) kuckuckSpendeCard.addEventListener('click', oeffneKuckuckSpende);
window.kuckuckspende = oeffneKuckuckSpende;

// =================================================================
// BAMBILAND TICKET MODAL
// =================================================================
window.zeigeBambilandModal = function() {
  modalInhalt.innerHTML = `
    <div class="kopf">
      <div class="aktenz">BAMBILAND.DE · TICKET-RESERVIERUNG</div>
      <h2>BAMBILAND — Deutschlands 1. GD-Themenpark</h2>
      <div class="zeile"><span>STATUS: <b>NOCH NICHT EXISTENT</b></span><span>ERÖFFNUNG: vermutlich nie</span></div>
    </div>
    <p>Vielen Dank für dein Interesse! Leider müssen wir mitteilen:</p>
    <ul class="absurd-list">
      <li>Der Park existiert physisch nicht.</li>
      <li>Die Rehe existieren <i>geistig</i>, aber nicht physisch.</li>
      <li>Die Schmetterlinge sind nur in Kuckucks Stream-Realität anwesend.</li>
      <li>Die pinken Kopfhörer wären zwar real, sind aber nicht verfügbar.</li>
      <li>Die 99€ jedoch — die sind nicht erstattbar.</li>
    </ul>
    <div class="marginalia">
      Du wirst trotzdem in unsere Warteliste aufgenommen (Position: 47.825).<br>
      Voraussichtliche Wartezeit: solange Kuckuck streamt.
    </div>
    <p class="quote">"warte kurz." — die offizielle Bambiland-Antwort auf alle Fragen</p>`;
  modalBg.classList.add('aktiv');
  document.body.style.overflow = 'hidden';
};
