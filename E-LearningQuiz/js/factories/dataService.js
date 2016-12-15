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


    var correctAnswers = [0, 3, 0, 0, 1, 2, 1, 2, 0, 2];

    var quizQuestions  = [
            {
                type: "text",
                text: "Welche Lernform ist am effektivsten (Lernform mit der höchsten durschnttlichen Retentionsrate)?",
                possibilities: [
                    {
                        answer: "Andere lehren."
                    },
                    {
                        answer: "Gruppendiskussion."
                    },
                    {
                        answer: "Vorlesung."
                    },
                    {
                        answer: "Audio-Visuell."
                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "text",
                text: "Welches Instruktionsmodell ist aus der 1. Generation?",
                possibilities: [
                    {
                        answer: "Cognitive Apprenticeship"
                    },
                    {
                        answer: "Anchored Instruction"
                    },
                    {
                        answer: "Goal based Scenarios"
                    },
                    {
                        answer: "Direct Instruction"
                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "text",
                text: "Was beschreibt die Instrinsic Cogntive Load?",
                possibilities: [
                    {
                        answer: "Ergibt sich aus der Lernaufgabe."
                    },
                    {
                        answer: "Ergibt sich aus der Gestaltung des Lernmaterials."
                    },
                    {
                        answer: "Freie kognitive Ressourcen, u.a. für Schemakonstruktion"
                    },
                    {
                        answer: "Belegte kognitive Ressourcen, u.a. für Schemadekonstruktion."
                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "image",
                text: "Welche der folgenden Abbildungen ist in Bezug auf den Lernerfolg am besten geeignet. Bitte beachten Sie dabei den Split Attention Effect",
                possibilities: [
                    {
                        answer: "https://s29.postimg.org/6fckmkt8n/Bild1.png"
                    },
                    {
                        answer: "https://s29.postimg.org/6qu0zc9on/Bild1_Copy.png"
                    },
                    {
                        answer: "https://s29.postimg.org/ypjlcglxj/Bild1_Copy_3.png"
                    },
                    {
                        answer: "https://s29.postimg.org/iq0xswpvr/Bild1_Copy_2.png"
                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "text",
                text: "Welche kognitive Belastung (cognitive load) lässt sich bspw. durch Worked Examples, Modality Effect, Redundancy Effekt und Expertise Reversal Effekt verringern?",
                possibilities: [
                    {
                        answer: "Instrinsic Cognitive Load"
                    },
                    {
                        answer: "Extraneous Cognitive Load"
                    },
                    {
                        answer: "Germane Cognitive Load"
                    },
                    {
                        answer: "Daenarys Cognitive Load"
                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "text",
                text: "Selbstreguliertes Lernen ist auch für E-Learning hochrelevant, da es die aktive Rolle des Lerndenden betont. Welche dieser Strategien gehört nicht zu den Kongitiven Strategien?",
                possibilities: [
                    {
                        answer: "Wiederholungsstrategien"
                    },
                    {
                        answer: "Organisationsstrategien"
                    },
                    {
                        answer: "Emotionsstrategien"
                    },
                    {
                        answer: "Elaborationsstrategien"
                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "text",
                text: "Welche Lernform besitzt die geringste durschnittliche Retentionsrate?",
                possibilities: [
                    {
                        answer: "Practice by doing."
                    },
                    {
                        answer: "Vorlesung."
                    },
                    {
                        answer: "Gruppendiskussion."
                    },
                    {
                        answer: "Lesen."
                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "text",
                text: "Welche Rolle besitzt der Lehrende beim Konstruktivismus? ",
                possibilities: [
                    {
                        answer: "Lehrer"
                    },
                    {
                        answer: "Tutor"
                    },
                    {
                        answer: "Coach"
                    },
                    {
                        answer: "Mentor"
                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "text",
                text: "Bei dem Decision Oriented Instructional Design (DO-ID) Model, muss welcher Teilschritt vor der Formatentscheidung                        durchgeführt werden?",
                possibilities: [
                    {
                        answer: "Analyse"
                    },
                    {
                        answer: "Content-Strukturierung"
                    },
                    {
                        answer: "Motivationsdesign"
                    },
                    {
                        answer: "Interaktionsdesign"
                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "text",
                text: "Welche E-Learning Formate gehören nicht zu eimem hybriden Format?",
                possibilities: [
                    {
                        answer: "Blended Learning Format"
                    },
                    {
                        answer: "Multimedial angeleitetes Selbstlernen."
                    },
                    {
                        answer: "E-Kompendium"
                    },
                    {
                        answer: "Electronic Performance Support System"
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
                description: "Für individuelles Lernen (auch E-Learning) hochrelevant. Betonung der aktiven Rolle des Lernenden: Lernprozess planen, Ziele setzen, Vorwissen aktivieren, Lernressourcen suchen, selbstständig bearbeiten, Lernfortschritt überwachen, an sich verändernde Anforderungen des Lernmaterials anpassen, Lernergebnis bewerte. Lernstrategien: Kognitive Strategien: Wiederholungstrategien, Organisationsstrategien, Elaborationsstrategien. Metakognitive Strategien: Planen, Überwachen, Bewerten --- -	Motivations- und Emotionsstrategien. Strategien zum kooperativen Lernen: Gestaltung sozialer Lernsituationen --- Ressourcenorientierte Strategien: Zeitmanagement, Gestaltung der Lernumgebung, Steuerung der Anstrengungsbereitschaft, Fokussierung der Aufmerksamkeit"
            },
            {
                type: "Designentscheidungen: DO-ID-Modell",
                image_url: "https://s29.postimg.org/h2nvpifef/Content_6.jpg",

                description: "Systematische Konzeption ist immer hierarchischer Abfolge von Entscheidungen: Strategische Entscheidungen, Entscheidungen auf jeweils niedrigeren Ebenen."
            },
            {
                type: "E-Learning Formate",
                image_url: "http://framedia-inc.com/images/why-elearning-article.jpg",

                description: "Direkte Instruktion (E-Kompendium, E-Lecture), Problembasiertes Lernen, Fallbasiertes Lernen, Aufgabengeleitete Simulation (Betriebswirtschaftliche Planspiele, Flug- und Fahrsimulationen, Simulationen technischer Anlagen, usww.), Produkttraining, Hybride Formate (Multimedial angeleitetes Selbstlernen (MASL), Blended Learning-Format (CreaTeach-Fortmat), Electronic Performance Support System (Infos & Lerneinheiten on-demand))."
            }
        ];




})();