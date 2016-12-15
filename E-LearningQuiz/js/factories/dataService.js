/**
 * Created by marco on 05.12.2016.
 */
(function () {
    angular
        .module("turtleFacts")
        .factory("DataService", DataFactory);

    function DataFactory() {
        var dataObj = {
            turtlesData: turtlesData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers

        };
        return dataObj;
    }


    var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];

    var quizQuestions  = [
            {
                type: "text",
                text: "How much can a loggerhead weigh?",
                possibilities: [
                    {
                        answer: "Up to 20kg"
                    },
                    {
                        answer: "Up to 115kg"
                    },
                    {
                        answer: "Up to 220kg"
                    },
                    {
                        answer: "Up to 500kg"
                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "text",
                text: "What is the typical lifespan of a Green Sea Turtle?",
                possibilities: [
                    {
                        answer: "150 years"
                    },
                    {
                        answer: "10 years"
                    },
                    {
                        answer: "80 years"
                    },
                    {
                        answer: "40 years"
                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "image",
                text: "Which of these is the Alligator Snapping Turtle?",
                possibilities: [
                    {
                        answer: "https://c1.staticflickr.com/3/2182/2399413165_bcc8031cac_z.jpg?zz=1"
                    },
                    {
                        answer: "http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/ridley-sea-turtle_688_600x450.jpg"
                    },
                    {
                        answer: "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/8/13/1313246505515/Leatherback-turtle-007.jpg"
                    },
                    {
                        answer: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "image",
                text: "Which of these is the Green Turtle?",
                possibilities: [
                    {
                        answer: "http://www.what-do-turtles-eat.com/wp-content/uploads/2014/10/Sea-Turtles-Habitat.jpg"
                    },
                    {
                        answer: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG"
                    },
                    {
                        answer: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
                    },
                    {
                        answer: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"
                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "text",
                text: "Where does the Kemp's Ridley Sea Turtle live?'",
                possibilities: [
                    {
                        answer: "Tropical waters all around the world"
                    },
                    {
                        answer: "Eastern Australia"
                    },
                    {
                        answer: "Coastal North Atlantic"
                    },
                    {
                        answer: "South pacific islands"
                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "text",
                text: "What is the most common turtle in US waters?",
                possibilities: [
                    {
                        answer: "Loggerhead turtle"
                    },
                    {
                        answer: "Leatherback turtle"
                    },
                    {
                        answer: "Hawksbill Turtle"
                    },
                    {
                        answer: "Alligator Snapping Turtle"
                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "text",
                text: "What is the largest sea turtle on earth?",
                possibilities: [
                    {
                        answer: "Eastern Snake Necked Turtle"
                    },
                    {
                        answer: "Olive Ridley Sea Turtle"
                    },
                    {
                        answer: "Kemp's Ridley Sea Turtle'"
                    },
                    {
                        answer: "Leatherback"
                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "image",
                text: "Which of these is the Olive Ridley Turtle?",
                possibilities: [
                    {
                        answer: "http://i.telegraph.co.uk/multimedia/archive/02651/loggerheadTurtle_2651448b.jpg"
                    },
                    {
                        answer: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"
                    },
                    {
                        answer: "http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/ridley-sea-turtle_688_600x450.jpg"
                    },
                    {
                        answer: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG"
                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "text",
                text: "How Heavy can a leatherback turtle be?",
                possibilities: [
                    {
                        answer: "900kg"
                    },
                    {
                        answer: "40kg"
                    },
                    {
                        answer: "110kg"
                    },
                    {
                        answer: "300kg"
                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "text",
                text: "Which of these turtles are herbivores?",
                possibilities: [
                    {
                        answer: "Loggerhead Turtle"
                    },
                    {
                        answer: "Hawksbill Turtle"
                    },
                    {
                        answer: "Leatherback Turtle"
                    },
                    {
                        answer: "Green Turtle"
                    }
                ],
                selected: null,
                correct: null
            }
        ];

        var turtlesData = [
            {
                type: "Effektivität von Lernformen",
                kapitel:"3-6",
                image_url: "https://maleksy.files.wordpress.com/2013/05/577929_418751664881907_1139614800_n.jpg?w=390&h=293",

                description: "Verschiedene Lernformen besitzen unterschiedliche Retentionsraten (wieviel % des Lernstoffes im Gedächtnis gespeichert wird). Die traditionellen Lernformen (Vorlesungen, Lesen, Audio-Visual, Demonstration) besitzen eine deutlich niedrigere Retentionsrate als die aktiven Formen (Gruppendiskussion, „Practice by Doing“, Direkte Anwendung/andere lehren). Obige Abbildung visualisiert die Lernformen und zeigt die durchschnittliche Retentionsrate an."
            },
            {
                type: "Lerntheorien im Vergleich",

                image_url: "https://s24.postimg.org/93ffno9gl/Content2.jpg",
                description: "In der Lerntheorie wird zwischen fremdgesteuerten (Behaviorismus, Kognitivismus) und selbstgesteuerten Lernprozessen (Konstruktivismus, Konnektivismus) unterschieden. Die verschiedenen Theorien besitzen dabei unterschiedliche Rollen des Lehrenden. Das Zusammenspiel der Lerntheorien wird in obiger Übersicht visualisiert"
            },
            {
                type: "Konzeption von E-Learning: Wissenschaftliche Theorien, Modell und Befunde",
                image_url: "http://www.lto.de/fileadmin/_migrated/tx_ltoartikel/wissenschaftlich_arbeiten_535.jpg",

                description: "Das Instruktionsdesign ist eine wichtige Teildisziplin der pädagogischen Psychologie. Ein Instruktionsmodell der 1. Generation ist die direkte Instruktion. Bei der weiterentwickelten 2. Generation liegt der Fokus auf selbständiges Lernen und auf der aktiven Rolle des Lerners. Die wichtigsten Instruktionsdesignmodelle der 2. Generation: Instructional-Transaction-Theorie, Anchored instructionCognitive Apprenticeship and Goal based Scenarios und " +
                "4C/ID-Modell für Training komplexer Fähigkeiten."
            },
            {
                type: "Lernen mit Medien",
                image_url:"http://www.mkpublishing.de/sites/default/files/onlinemedien.gif",
                description: "Kernaspekte menschlicher Informationsverarbeitung: Menschliches Gedächtnis weist multiple Gedächtnissysteme auf: 1. Sensorisches 2. Arbeits- oder Kurzzeit- und 3. Langzeitgedächtnis.Getrennte Verarbeitung nach visuellen und auditiven Informationen werden aus Lernmaterial getrennt nach visueller & auditiver Information ins sensorische Gedächtnis übernommen und ausgewählte Informationen ins Arbeitsgedächtnis transferiert. Diese werden dort organisiert und zu einem mentalen Modell unter Zuhilfenahme von Vorwissen aus dem Langzeitgedächtnis integriert. Dabei werden mehrere Repräsentationen des Lerninhaltes erstellt. Die begrenzte Arbeitsgedächtniskapazität (7 +/- Einheiten) muss zwischen drei Quellen mentaler Belastung (Cognitive Load) aufgeteilt werden: " +
                "Instrinsic Cogntive Load: ergibt sich aus Lernaufgabe, Extraneous Cognitve Load: ergibt sich aus der Gestaltung des Lernmaterials und Germane Cognitive Load: freie kognitive Ressourchen; u.a. für Schemakonstruktion."
            },
            {
                type: "Didaktische Gestaltungsmöglichkeiten",
                image_url:"https://www.ethos3.com/wp-content/uploads/2015/01/psychology-of-presentations1.jpg",
                description: "Zur Verringerung der Extraneous Cognitive Load (und damit Überlastung des Arbeitsgedächtnisses): Worked Examples: Beim Lösen gestellter Aufgaben werden ausgearbeitete Lösungsbeispiele (worked examples) angeboten. Diese unterstützen den Lernenden effektiver als wenn er selbstständig nach Problemlösung sucht. Split Attention Effect: Bei visueller Präsentation von Lernmaterial zusammengehörige Inhalte (z.B. Erläuterungen) nach beieinander platzieren. Modality Effect: Visuellen und auditiven Kanal ergänzend ansprechen.	Redundancy Effect: Bei Präsentation von Text und Grafik den Text nicht gleichzeitig sowohl in gesprochener als auch geschriebener Form anbieten. Expertise Reversal Effekt: Bei Fortgeschrittenen können für Anfänger sinnvolle Erläuterungen stören."
            },
            {
                type: "Selbstreguliertes Lernen",
                image_url:"http://www.rhinodidactics.de/Bilder/schattenbild.png",
                description: "Für individuelles Lernen (auch E-Learning) hochrelevant----Betonung der aktiven Rolle des Lernenden: Lernprozess planen, Ziele setzen, Vorwissen aktivieren, Lernressourcen suchen, selbstständig bearbeiten, Lernfortschritt überwachen, an sich verändernde Anforderungen des Lernmaterials anpassen, Lernergebnis bewerte---Lernstrategien: Kognitive Strategien: Wiederholungstrategien, Organisationsstrategien, Elaborationsstrategien -- Metakognitive Strategien: Planen, Überwachen, Bewerten --- -	Motivations- und Emotionsstrategien ---- Strategien zum kooperativen Lernen: Gestaltung sozialer Lernsituationen --- Ressourcenorientierte Strategien: Zeitmanagement, Gestaltung der Lernumgebung, Steuerung der Anstrengungsbereitschaft, Fokussierung der Aufmerksamkeit"
            },
            {
                type: "Designentscheidungen: DO-ID-Modell",
                image_url: "https://s29.postimg.org/h2nvpifef/Content_6.jpg",

                description: "Systematische Konzeption ist immer hierarchischer Abfolge von Entscheidungen: Strategische Entscheidungen,Entscheidungen auf jeweils niedrigeren Ebenen"
            },
            {
                type: "E-Learning Formate",
                image_url: "http://framedia-inc.com/images/why-elearning-article.jpg",

                description: "Direkte Instruktion (E-Kompendium, E-Lecture), Problembasiertes Lernen, Fallbasiertes Lernen, Aufgabengeleitete Simulation (Betriebswirtschaftliche Planspiele, Flug- und Fahrsimulationen, Simulationen technischer Anlagen, usww.), Produkttraining, Hybride Formate (Multimedial angeleitetes Selbstlernen (MASL), Blended Learning-Format (CreaTeach-Fortmat), Electronic Performance Support System (Infos & Lerneinheiten on-demand))"
            }
        ];




})();