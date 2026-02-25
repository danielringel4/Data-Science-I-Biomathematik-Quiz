const QUESTIONS = {
    "Funktionen einer Variablen": [
        {
            text: "Welche Funktion beschreibt ein Sättigungsverhalten, wie es in der Michaelis-Menten-Kinetik vorkommt?",
            answers: ["\\( f(x) = ax^2 \\)", "\\( f(x) = \\frac{ax}{b+x} \\)", "\\( f(x) = a \\cdot e^{bx} \\)"],
            correct: 1
        },
        {
            text: "Was ist der Grenzwert von \\( f(x) = e^{-x} \\) für \\( x \\to \\infty \\)?",
            answers: ["\\( 0 \\)", "\\( 1 \\)", "\\( \\infty \\)"],
            correct: 0
        },
        {
            text: "Für welche Funktion ist der Definitionsbereich \\( D = \\mathbb{R} \\setminus \{0\} \\)?",
            answers: ["\\( f(x) = \ln(x) \\)", "\\( f(x) = \\frac{1}{x} \\)", "\\( f(x) = \\sqrt{x} \\)"],
            correct: 2
        },
        {
            text: "Welche Funktion beschreibt begrenztes Wachstum in einem Habitat?",
            answers: ["Exponentialfunktion", "Logistische Funktion", "Sinusfunktion"],
            correct: 1
        },
        {
            text: "Welche Aussage beschreibt den Bildbereich \\( W(f) \\) einer Funktion korrekt?",
            answers: ["Die Menge aller Werte, die die Funktion tatsächlich annimmt", "Die Menge aller Werte, die man in die Funktion einsetzen darf", "Der Zielbereich, in den die Funktion abbildet (z.B. \\( \\mathbb{R} \\))", "Die Umkehrfunktion der Zuordnung"],
            correct: 0
        },
        {
            text: "Was bedeutet es anschaulich, wenn eine Funktion in einem Intervall stetig ist?",
            answers: ["Der Graph muss eine Gerade sein", "Der Graph kann ohne Absetzen gezeichnet werden", "Die Funktion hat an jeder Stelle einen positiven Wert", "Die Funktion ist nur für ganze Zahlen definiert"],
            correct: 1
        },
        {
            text: "Was besagt das \\( \\varepsilon \\)-\\( \\delta \\)-Kriterium der Stetigkeit formal?",
            answers: ["Dass kleine Änderungen im Argument \\( x \\) zu beliebig großen Sprüngen in \\( f(x) \\) führen", "Dass für jeden noch so kleinen Abstand \\( \\varepsilon \\) im Bildbereich ein Bereich \\( \\delta \\) im Definitionsbereich existiert, in dem die Funktionswerte nahe genug beieinander bleiben", "Dass die Funktion an der Stelle \\( x_0 \\) gegen unendlich läuft", "Dass \\( \\delta \\) immer größer als \\( \\varepsilon \\) sein muss"],
            correct: 1
        },
        {
            text: "Eine Funktion ordnet jedem Element der Definitionsmenge...",
            answers: ["genau ein Element der Zielmenge zu", "beliebig viele Elemente der Zielmenge zu", "mindestens zwei Elemente der Zielmenge zu", "nur positive Zahlen zu"],
            correct: 0
        },
        {
            text: "Unter welcher zentralen Annahme wird die Michaelis-Menten-Kinetik für die Substratkonzentration \\( S \\) meist hergeleitet?",
            answers: ["Das Substrat liegt im Mangel vor", "Es gibt kein Enzym", "Die Enzymkonzentration ist variabel", "Das Substrat liegt im Überschuss vor (Sättigungsbereich)"],
            correct: 3
        },
        {
            text: "Wann bezeichnet man eine Unstetigkeitsstelle an einem Punkt \\( x_0 \\) als 'hebbar'?",
            answers: ["Wenn die Funktion dort gegen Unendlich läuft", "Wenn der Grenzwert an dieser Stelle existiert und man die Funktion dort durch Definition eines Wertes 'reparieren' kann", "Wenn die Funktion dort eine Sprungstelle hat", "Wenn die Funktion dort nicht existiert"],
            correct: 1
        },
    ],
    "Differenzialrechnung": [
        {
            text: "Was gibt die erste Ableitung \\( f'(t) \\) einer Populationsgröße an?",
            answers: ["Die Gesamtanzahl", "Die momentane Änderungsrate", "Die Kapazitätsgrenze"],
            correct: 1
        },
        {
            text: "Wie lautet die Ableitung von \\( f(x) = \ln(x) \\)?",
            answers: ["\\( e^x \\)", "\\( 1 \\)", "\\( \\frac{1}{x} \\)"],
            correct: 2
        },
        {
            text: "Welche Regel nutzt man für die Ableitung von \\( f(x) = g(x) \\cdot h(x) \\)?",
            answers: ["Kettenregel", "Quotientenregel", "Produktregel"],
            correct: 2
        },
        {
            text: "Was ist die Ableitung von \\( f(t) = e^{rt} \\) nach \\( t \\)?",
            answers: ["\\( r \\cdot e^{rt} \\)", "\\( e^{rt} \\)", "\\( t \\cdot e^r \\)"],
            correct: 0
        },
        {
            text: "An einem lokalen Maximum einer Funktion ist die erste Ableitung...",
            answers: ["Positiv", "Negativ", "Null"],
            correct: 2
        },
        {
            text: "Was beschreibt die Ableitung \\( s'(t) \\) im Kontext einer Bewegung biologischer Organismen?",
            answers: ["Die zum Zeitpunkt \\( t \\) zurückgelegte Gesamtstrecke", "Die momentane Geschwindigkeit zum Zeitpunkt \\( t \\)", "Die Beschleunigung über den gesamten Zeitraum", "Den Startpunkt der Bewegung"],
            correct: 1
        },
        {
            text: "Warum ist der Differenzenquotient allein oft nicht ausreichend für Modelle?",
            answers: ["Weil er nur die Durchschnittsgeschwindigkeit über ein Intervall angibt, nicht die exakte Rate in einem Moment", "Weil er mathematisch nicht definiert ist", "Weil er nur für lineare Funktionen funktioniert", "Weil er keine Einheiten berücksichtigen kann"],
            correct: 0
        },
        {
            text: "Wofür wird die Taylorentwicklung in der biologischen Modellierung genutzt?",
            answers: ["Um komplizierte Funktionen lokal durch einfachere Polynome anzunähern", "Um Integrale exakt zu berechnen", "Um Datenpunkte miteinander zu verbinden", "Um den Definitionsbereich zu erweitern"],
            correct: 0
        },
        {
            text: "Welcher Zusammenhang besteht zwischen Stetigkeit und Differenzierbarkeit einer Funktion?",
            answers: ["Nur lineare Funktionen sind stetig", "Stetigkeit impliziert immer Differenzierbarkeit", "Es gibt keinen Zusammenhang", "Differenzierbarkeit impliziert Stetigkeit, aber Stetigkeit impliziert nicht zwingend Differenzierbarkeit"],
            correct: 3
        },
        {
            text: "Wozu dient die Linearisierung einer Funktion in der Praxis (z.B. Fehlerrechnung)?",
            answers: ["Um den exakten Wert im Unendlichen zu finden", "Um die Auswirkung kleiner Fehler im Argument auf den Funktionswert abzuschätzen", "Um die Funktion global zu ersetzen", "Um das Integral zu umgehen"],
            correct: 1
        },
    ],
    "Integration": [
        {
            text: "Was berechnet das bestimmte Integral einer Rate über die Zeit?",
            answers: ["Die Änderung der Rate", "Die akkumulierte Gesamtmenge", "Den Durchschnittswert"],
            correct: 1
        },
        {
            text: "Wie lautet die Stammfunktion von \\( f(x) = x \\)?",
            answers: ["\\( 1 \\)", "\\( \\frac{1}{2}x^2 + C \\)", "\\( x^2 + C \\)"],
            correct: 1
        },
        {
            text: "Das Integral von \\( \\frac{1}{x} \\) ist...",
            answers: ["\\( \ln|x| + C \\)", "\\( -x^{-2} \\)", "\\( e^x \\)"],
            correct: 0
        },
        {
            text: "Wie nennt man das Verfahren zur Integration von Produkten?",
            answers: ["Substitution", "Ableitung", "Partielle Integration"],
            correct: 2
        },
        {
            text: "Was ist das Integral von \\( \sin(x) \\)?",
            answers: ["\\( -\cos(x) + C \\)", "\\( \cos(x) \\)", "\\( \tan(x) \\)"],
            correct: 0
        },
        {
            text: "Wie lässt sich das bestimmte Integral anschaulich interpretieren?",
            answers: ["Als lokale Steigung der Funktion", "Als Flächeninhalt zwischen dem Funktionsgraphen und der x-Achse", "Als Kehrwert der Funktion", "Als maximaler Wert der Funktion"],
            correct: 1
        },
        {
            text: "Was berechnet man in der Biologie, wenn man eine Rate (z.B. Geburtenrate) über die Zeit integriert?",
            answers: ["Die Änderung der Rate selbst", "Die durchschnittliche Geschwindigkeit der Änderung", "Die akkumulierte Gesamtmenge (z.B. Gesamtanzahl der Neugeborenen)", "Den Zeitpunkt des maximalen Wachstums"],
            correct: 2
        },
        {
            text: "Ist jede stetige Funktion über einem abgeschlossenen Intervall integrierbar?",
            answers: ["Nein, nur Polynome sind integrierbar", "Ja, Stetigkeit ist eine hinreichende Bedingung für die Integrierbarkeit", "Nur wenn sie keine Nullstellen hat", "Nur wenn sie linear ist"],
            correct: 1
        },
    ],
    "Funktionen mehrerer Variablen": [
        {
            text: "Was beschreibt der Gradient einer Funktion \\( f(x,y) \\)?",
            answers: ["Den steilsten Anstieg", "Das Volumen", "Den Durchschnitt"],
            correct: 0
        },
        {
            text: "Wie nennt man die Ableitung nach nur einer Variable (z.B. nach \\( x \\))?",
            answers: ["Totale Ableitung", "Schnittableitung", "Partielle Ableitung"],
            correct: 2
        },
        {
            text: "In einem 3D-Koordinatensystem beschreibt \\( z = f(x,y) \\) eine...",
            answers: ["Linie", "Fläche", "Punktwolke"],
            correct: 1
        },
        {
            text: "Welches Symbol wird für partielle Ableitungen verwendet?",
            answers: ["\\( d \\)", "\\( \\partial \\)", "\\( \\Delta \\)"],
            correct: 1
        },
        {
            text: "Ein Sattelpunkt ist ein kritischer Punkt, der...",
            answers: ["Immer ein Maximum ist", "Immer ein Minimum ist", "Weder Maximum noch Minimum ist"],
            correct: 2
        },
        {
            text: "Was beschreibt eine partielle Ableitung \\( \\frac{\\partial f}{\\partial x} \\)?",
            answers: ["Die Änderung der Funktion, wenn sich alle Variablen gleichzeitig ändern", "Die Änderung der Funktion, wenn sich nur die Variable x ändert und alle anderen konstant bleiben", "Das Volumen unter der Fläche", "Den Schnittpunkt mit der z-Achse"],
            correct: 1
        },
        {
            text: "Was beschreibt ein Volumenintegral in der Biologie (z.B. über eine Wirkstoffkonzentration in einem Gewebe)?",
            answers: ["Die Gesamtmenge des Wirkstoffs im betrachteten Raum", "Die maximale Konzentration an einem Punkt", "Die Geschwindigkeit der Diffusion", "Den Rand des Gewebes"],
            correct: 0
        },
        {
            text: "Wie lässt sich eine Funktion \\( f(x,y) \\) lokal um einen Punkt am besten durch eine lineare Funktion annähern?",
            answers: ["Durch eine Tangente (Linie)", "Durch einen einzelnen Punkt", "Durch einen Kreis", "Durch eine Tangentialebene im 3D-Raum"],
            correct: 3
        },
        {
            text: "Was gibt die Richtungsableitung einer Funktion an?",
            answers: ["Die Änderung der Funktion nur entlang der x-Achse", "Die lokale Änderungsrate in eine beliebig vorgegebene Richtung im Raum", "Das Volumen unter der Kurve", "Die Krümmung der Niveaulinien"],
            correct: 1
        },
    ],
    "Lineare Algebra": [
        {
            text: "Wann ist eine Matrix multiplizierbar?",
            answers: ["Immer", "Spaltenanzahl A = Zeilenanzahl B", "Wenn sie quadratisch sind"],
            correct: 1
        },
        {
            text: "Was ist ein Eigenvektor?",
            answers: ["Ein Vektor, der nur skaliert wird", "Ein Vektor der Länge Null", "Ein inverser Vektor"],
            correct: 0
        },
        {
            text: "Wie kann ein Eigenvektor \\(\\lambda\\) formuliert werden?",
            answers: ["\\(\\vec{x} = \\lambda A\\)", "\\(A \\lambda = A^{-1} \\lambda\\)", "\\(A \\vec{x} = \\lambda \\vec{x}\\)"],
            correct: 0
        },
        {
            text: "Die Determinante einer Matrix gibt Aufschluss über...",
            answers: ["Die Summe der Elemente", "Die Anzahl der Zeilen", "Die Invertierbarkeit", ],
            correct: 2
        },
        {
            text: "Was ist die Einheitsmatrix?",
            answers: ["Überall Nullen", "Einsen auf der Hauptdiagonale", "Überall Einsen"],
            correct: 1
        },
        {
            text: "Was passiert geometrisch bei der Multiplikation eines Vektors mit einem Skalar \\( \\alpha > 1 \\)?",
            answers: ["Der Vektor wird gedreht", "Der Vektor wird gelöscht", "Die Richtung wird invertiert", "Der Vektor wird gestreckt"],
            correct: 3
        },
        {
            text: "Was sagt eine Determinante von Null über ein lineares Gleichungssystem aus?",
            answers: ["Es gibt genau eine Lösung", "Das System ist nicht eindeutig lösbar (die Matrix ist nicht invertierbar)", "Das System ist immer stabil", "Alle Werte im System sind Null"],
            correct: 1
        },
        {
            text: "Was charakterisiert einen Eigenvektor einer Matrix?",
            answers: ["Er wird durch die Matrix-Multiplikation nur gestreckt oder gestaucht, behält aber seine Richtung bei", "Er steht immer senkrecht auf allen anderen Vektoren", "Er ist der Vektor mit der Summe 1", "Er ist das Ergebnis jeder Matrix-Rechnung"],
            correct: 0
        },
        {
            text: "Wofür nutzt man Basistransformationen (Diagonalisierung) bei Matrizen?",
            answers: ["Um Matrizen größer zu machen", "Um komplexe gekoppelte Systeme in einfachere, unabhängige Gleichungen zu überführen", "Um die Determinante zu ignorieren", "Um Daten zu löschen"],
            correct: 1
        },
        {
            text: "Was passiert mit der Determinante einer Matrix \\( A \\), wenn zwei Zeilen oder Spalten linear abhängig sind?",
            answers: ["Sie wird verdoppelt", "Sie ist gleich Null", "Sie wird negativ", "Sie bleibt unverändert"],
            correct: 1
        },
        {
            text: "Welche Bedingung muss erfüllt sein, damit eine Matrix \\( A \\in \\mathbb{R}^{n \\times n} \\) diagonalisierbar ist?",
            answers: ["Sie muss \\( n \\) linear unabhängige Eigenvektoren besitzen", "Sie muss nur positive Zahlen enthalten", "Sie muss eine Einheitsmatrix sein", "Ihre Determinante muss Eins sein"],
            correct: 0
        },
        {
            text: "Wie lautet die Determinantenregel für das Produkt zweier Matrizen \\( A \\) und \\( B \\)?",
            answers: ["\\( \\det(A \\cdot B) = \\det(A) + \\det(B) \\)", "\\( \\det(A \\cdot B) = \\det(A) \\cdot \\det(B) \\)", "\\( \\det(A \\cdot B) = \\det(A) / \\det(B) \\)", "Das Produkt ist nicht definiert"],
            correct: 1
        },
        {
            text: "Gilt im Allgemeinen \\(AB = BA\\)?",
            answers: ["Ja, da Matrixmultiplikation per Definition kommutativ ist.", "Nein, da \\(\\det(AB) \\neq \\det(BA)\\)", "Nein, da eine Vertauschung der Reihenfolge der Multiplikation das Ergebnis ändert"],
            correct: 2
        },
        {
            text: "Ist das Produkt einer Matrix \\(A \\in \\mathbb{R}^{3 \\times 2}\\) und einer Matrix \\(B \\in \\mathbb{R}^{2 \\times 3}\\) definiert? Falls ja, welche Dimension hat dieses?",
            answers: ["Ja, mit \\(AB \\in \\mathbb{R}^{3 \\times 3}\\).", "Ja, mit \\(AB \\in \\mathbb{R}^{2 \\times 2}\\)", "Nein, das Produkt ist nicht definiert."],
            correct: 0
        }
    ],
    "Differenzialgleichungen": [
        {
            text: "Was ist eine DGL 1. Ordnung?",
            answers: ["Enthält nur \\( f(x) \\)", "Enthält nur die 1. Ableitung", "Enthält Terme mit \\( x^2 \\)"],
            correct: 1
        },
        {
            text: "Die Lösung der DGL \\( y' = ky \\) ist ein...",
            answers: ["Lineares Wachstum", "Exponentielles Wachstum", "Logarithmisches Wachstum"],
            correct: 1
        },
        {
            text: "Was beschreibt der Begriff 'Fixpunkt'?",
            answers: ["Einen Zustand ohne Änderung (Gleichgewicht)", "Den Startwert", "Den höchsten Punkt"],
            correct: 0
        },
        {
            text: "Was ist das Ziel des Euler-Verfahrens?",
            answers: ["Exakte Lösung finden", "Ableitung bestimmen", "Numerische Annäherung"],
            correct: 2
        },
        {
            text: "Was beschreibt das 'Vektorfeld' einer Differenzialgleichung \\( \\dot{x} = f(x) \\)?",
            answers: ["Die statischen Grenzen des Modells", "Die Richtung und Geschwindigkeit der Systemänderung für jeden Zustand", "Die Anzahl der beteiligten Spezies", "Den Namen des Forschers"],
            correct: 1
        },
        {
            text: "Was kennzeichnet einen 'Fixpunkt' (Gleichgewichtszustand) in einem dynamischen System?",
            answers: ["Die Ableitung an dieser Stelle ist Null (keine Änderung mehr)", "Das System explodiert an dieser Stelle", "Der Zustand ist dort immer maximal", "Es ist der Startwert der Simulation"],
            correct: 0
        },
        {
            text: "Wann bezeichnet man einen Fixpunkt als 'asymptotisch stabil'?",
            answers: ["Wenn das System nach einer kleinen Störung wieder zu diesem Punkt zurückkehrt", "Wenn das System sich immer weiter von diesem Punkt entfernt", "Wenn der Punkt auf der x-Achse liegt", "Wenn der Fixpunkt den Wert Null hat"],
            correct: 0
        },
        {
            text: "Was ist die Kernidee des logistischen Wachstumsmodells im Vergleich zum exponentiellen Wachstum?",
            answers: ["Es gibt keine Vermehrung", "Es berücksichtigt eine Kapazitätsgrenze des Lebensraums", "Es wächst unendlich weiter", "Es ist nur für Bakterien anwendbar"],
            correct: 1
        },
        {
            text: "Was beschreiben 'Fixpunkte' in einem biologischen Systemmodell?",
            answers: ["Den Zeitpunkt des maximalen Wachstums", "Die Startwerte der Population", "Zustände, an denen die lokale Änderungsrate verschwindet (Gleichgewichte)", "Die maximale Kapazität, die nie erreicht wird"],
            correct: 2
        },
        {
            text: "Mathematisch gesehen sind Fixpunkte eines Systems \\( \\dot{x} = f(x) \\)...",
            answers: ["Die Maxima von \\( f(x) \\)", "Die Polstellen der Funktion \\( f(x) \\)", "Die Wendepunkte", "Die Nullstellen der Funktion \\( f(x) \\)"],
            correct: 3
        }
    ]
};