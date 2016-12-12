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
                type: "Green Turtle",
                image_url: "data:image/jpeg;base64,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",
                locations: "Tropical and subtropical oceans worldwide",
                size: "Up to 1.5m and up to 300kg",
                lifespan: "Over 80 years",
                diet: "Herbivore",
                description: "The green turtle is a large, weighty sea turtle with a wide, smooth carapace, or shell. It inhabits tropical and subtropical coastal waters around the world and has been observed clambering onto land to sunbathe. It is named not for the color of its shell, which is normally brown or olive depending on its habitat, but for the greenish color of its skin. There are two types of green turtles—scientists are currently debating whether they are subspecies or separate species—including the Atlantic green turtle, normally found off the shores of Europe and North America, and the Eastern Pacific green turtle, which has been found in coastal waters from Alaska to Chile."
            },
            {
                type: "Loggerhead Turtle",
                image_url: "http://i.telegraph.co.uk/multimedia/archive/02651/loggerheadTurtle_2651448b.jpg",
                locations: "Tropical and subtropical oceans worldwide",
                size: "90cm, 115kg",
                lifespan: "More than 50 years",
                diet: "Carnivore",
                description: "Loggerhead turtles are the most abundant of all the marine turtle species in U.S. waters. But persistent population declines due to pollution, shrimp trawling, and development in their nesting areas, among other factors, have kept this wide-ranging seagoer on the threatened species list since 1978. Their enormous range encompasses all but the most frigid waters of the world's oceans. They seem to prefer coastal habitats, but often frequent inland water bodies and will travel hundreds of miles out to sea."
            },
            {
                type: "Leatherback Turtle",
                image_url: "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/8/13/1313246505515/Leatherback-turtle-007.jpg",
                locations: "All tropical and subtropical oceans",
                size: "Up to 2m, up to 900kg",
                lifespan: "45 years",
                diet: "Carnivore",
                description: "Leatherbacks are the largest turtles on Earth, growing up to seven feet (two meters) long and exceeding 2,000 pounds (900 kilograms). These reptilian relics are the only remaining representatives of a family of turtles that traces its evolutionary roots back more than 100 million years. Once prevalent in every ocean except the Arctic and Antarctic, the leatherback population is rapidly declining in many parts of the world. While all other sea turtles have hard, bony shells, the inky-blue carapace of the leatherback is somewhat flexible and almost rubbery to the touch. Ridges along the carapace help give it a more hydrodynamic structure. Leatherbacks can dive to depths of 4,200 feet (1,280 meters)—deeper than any other turtle—and can stay down for up to 85 minutes."
            },
            {
                type: "Hawksbill Sea Turtle",
                image_url: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532",
                locations: "Tropical Coastal areas around the world",
                size: "Over 1m, 45-68kg",
                lifespan: "30-50 Years",
                diet: "Carnivore",
                description: "Dolor possimus voluptas hic aliquam rem doloremque minus maiores accusantium? Laborum perferendis harum blanditiis quod quia? Aspernatur sunt et fuga delectus ab rem excepturi. Ipsa quibusdam facere consequuntur magnam vitae? Consectetur consectetur necessitatibus beatae delectus quibusdam in! Est nobis omnis iusto illum fugiat maxime! Neque fugiat reiciendis sequi corrupti minima facere distinctio aliquam est voluptatibus. Sint incidunt soluta atque ducimus."
            },
            {
                type: "Alligator Snapping Turtle",
                image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg",
                locations: "Along the Atlantic Coast of USA",
                size: "around 60cm, up to 100kg",
                lifespan: "20-70 years",
                diet: "Carnivore",
                description: "The prehistoric-looking alligator snapping turtle is the largest freshwater turtle in North America and among the largest in the world. With its spiked shell, beaklike jaws, and thick, scaled tail, this species is often referred to as the 'dinosaur of the turtle world.' Found almost exclusively in the rivers, canals, and lakes of the southeastern United States, alligator snappers can live to be 50 to 100 years old. Males average 26 inches (66 centimeters) in shell length and weigh about 175 pounds (80 kilograms), although they have been known to exceed 220 pounds (100 kilograms). The much smaller females top out at around 50 pounds (23 kilograms)."
            },
            {
                type: "Kemp's Ridley Sea Turtle",
                image_url: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG",
                locations: "Coastal areas of the North Atlantic",
                size: "65cm, up to 45kg",
                lifespan: "Around 50 years",
                diet: "Omnivore",
                description: "The Kemp’s ridley turtle is the world’s most endangered sea turtle, and with a worldwide female nesting population roughly estimated at just 1,000 individuals, its survival truly hangs in the balance. Their perilous situation is attributed primarily to the over-harvesting of their eggs during the last century. And though their nesting grounds are protected and many commercial fishing fleets now use turtle excluder devices in their nets, these turtles have not been able to rebound. For this reason, their nesting processions, called arribadas, make for especially high drama. During an arribada, females take over entire portions of beaches, lugging their big bodies through the sand with their flippers until they find a satisfying spot to lay their eggs. Even more riveting is the later struggle to the ocean of each tiny, vulnerable hatchling. Beset by predators, hatchlings make this journey at night, breaking out of their shells using their caruncle, a single temporary tooth grown just for this purpose."
            },
            {
                type: "Olive Ridley Turtle",
                image_url: "http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/ridley-sea-turtle_688_600x450.jpg",
                locations: "Tropical coastal areas around the world",
                size: "70cm, 45kg",
                lifespan: "50 years",
                diet: "Omnivore",
                description: "The olive ridley turtle is named for the generally greenish color of its skin and shell, or carapace. It is closely related to the Kemp’s ridley, with the primary distinction being that olive ridleys are found only in warmer waters, including the southern Atlantic, Pacific and Indian Oceans. Olive and Kemp’s ridleys are the smallest of the sea turtles, weighing up to 100 pounds (45 kilograms) and reaching only about 2 feet (65 centimeters) in shell length. The olive ridley has a slightly smaller head and smaller shell than the Kemp’s."
            },
            {
                type: "Eastern Snake Necked Turtle",
                image_url: "https://c1.staticflickr.com/3/2182/2399413165_bcc8031cac_z.jpg?zz=1",
                locations: "Eastern Australia",
                size: "Up to 30cm",
                lifespan: "25 years",
                diet: "Carnivore",
                description: "Snake-necked turtles, as the name suggests, have an unusually long neck. Their necks may be up to 60 percent of their carapace length. Their carapace is oval and flattened, usually dark-brown to black measuring up to 11 inches (27.5 cm) in length. Scutes are shed as the animals grow. The males have a longer, thicker tail than females and a concave plastron. They are excellent swimmers; they have large, webbed feet with sharp claws used to tear apart food."
            }
        ];




})();