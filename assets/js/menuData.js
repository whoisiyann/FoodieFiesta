// ============ MENU DATABASE ============

const menuDatabase = {
    // ============ PIKA-PIKA  ============
    "pika-pika": [
        {
            id: "lumpiang-shanghai",
            name: "Lumpiang Shanghai",
            category: "Pika-Pika",
            tagline: "Party Favorite • Crispy • Bite-Sized",
            description: "Golden-fried spring rolls filled with seasoned ground pork and vegetables, perfectly crisp on the outside and savory inside.",
            allergens: "Contains: Pork, Gluten",
            type: "Fried / Appetizer / Finger Food",
            cultural: "Lumpiang Shanghai is a must-have at Filipino celebrations, from birthdays to fiestas. Its bite-sized form makes it perfect for sharing. It reflects the Filipino love for communal dining and festive gatherings.",
            favorite: true,
            image: "../assets/images/foods/Pika-Pika/Lumpiang Shanghai.JPG",
            images: [
                "../assets/images/foods/Pika-Pika/Lumpiang Shanghai.JPG",
                "../assets/images/foods/Pika-Pika/Lumpiang Shanghai2.JPG",
                "../assets/images/foods/Pika-Pika/Lumpiang Shanghai3.JPG",
                "../assets/images/foods/Pika-Pika/Lumpiang Shanghai4.JPG"
            ],
            portions: [
                { label: "Solo (6 pcs)", value: "solo", price: 120 },
                { label: "Sharing (12 pcs)", value: "sharing", price: 220 },
                { label: "Bilao (30 pcs)", value: "bilao", price: 480 }
            ]
        },
        {
            id: "kwek-kwek",
            name: "Kwek-Kwek",
            category: "Pika-Pika",
            tagline: "Street Food Classic • Crunchy • Savory Snack",
            description: "Quail eggs coated in vibrant orange batter and deep-fried until crispy, served with a sweet and tangy sauce.",
            allergens: "Contains: Eggs, Gluten",
            type: "Fried / Street Food / Snack",
            cultural: "Kwek-Kwek is a popular Filipino street food known for its eye-catching color and crunchy texture. It's commonly sold by street vendors across cities and towns. This snack highlights the country's vibrant street food culture.",
            favorite: false,
            image: "../assets/images/foods/Pika-Pika/Kwek-Kwek.JPG",
            images: [ 
                "../assets/images/foods/Pika-Pika/Kwek-Kwek.JPG",
                "../assets/images/foods/Pika-Pika/Kwek-Kwek2.JPG",
                "../assets/images/foods/Pika-Pika/Kwek-Kwek3.JPG",
                "../assets/images/foods/Pika-Pika/Kwek-Kwek4.JPG"
            ],
            portions: [
                { label: "Solo (8 pcs)", value: "solo", price: 70 },
                { label: "Sharing (16 pcs)", value: "sharing", price: 130 },
                { label: "Bilao (40 pcs)", value: "bilao", price: 300 }
            ]
        },
        {
            id: "fish-balls",
            name: "Fish Balls",
            category: "Pika-Pika",
            tagline: "Street Favorite • Savory • Fun to Eat",
            description: "Deep-fried fish balls served with your choice of sweet, spicy, or vinegar dipping sauce.",
            allergens: "Contains: Fish, Gluten",
            type: "Fried / Street Food / Snack",
            cultural: "Fish balls are one of the most iconic Filipino street foods, often sold from mobile carts. They are especially popular among students and office workers. The interactive dipping sauces make them a fun and nostalgic snack.",
            favorite: false,
            image: "../assets/images/foods/Pika-Pika/Fishball.JPG",
            images: [ 
                "../assets/images/foods/Pika-Pika/Fishball.JPG",
                "../assets/images/foods/Pika-Pika/Fishball2.JPG",
                "../assets/images/foods/Pika-Pika/Fishball3.JPG",
                "../assets/images/foods/Pika-Pika/Fishball4.JPG"
            ],
            portions: [
                { label: "Solo (10 pcs)", value: "solo", price: 60 },
                { label: "Sharing (20 pcs)", value: "sharing", price: 110 },
                { label: "Bilao (50 pcs)", value: "bilao", price: 260 }
            ]
        },
        {
            id: "fried-chicken-skin",
            name: "Fried Chicken Skin",
            category: "Pika-Pika",
            tagline: "Ultra Crispy • Salty • Addictive",
            description: "Crunchy fried chicken skin seasoned to perfection, offering a rich and savory bite.",
            allergens: "Contains: Chicken",
            type: "Fried / Snack / Bar Food",
            cultural: "Fried chicken skin is a favorite \"pulutan,\" or snack paired with drinks. It's enjoyed in casual gatherings and nightlife settings. Its indulgent crunch reflects the Filipino love for bold, savory flavors.",
            favorite: false,
            image: "../assets/images/foods/Pika-Pika/Fried Chicken Skin.JPG",
            images: [ 
                "../assets/images/foods/Pika-Pika/Fried Chicken Skin.JPG",
                "../assets/images/foods/Pika-Pika/Fried Chicken Skin2.JPG",
                "../assets/images/foods/Pika-Pika/Fried Chicken Skin3.JPG",
                "../assets/images/foods/Pika-Pika/Fried Chicken Skin4.JPG"
            ],
            portions: [
                { label: "Solo (1 small plate)", value: "solo", price: 90 },
                { label: "Sharing (1 large plate)", value: "sharing", price: 160 },
                { label: "Bilao (Party tray)", value: "bilao", price: 350 }
            ]
        },
        {
            id: "isaw",
            name: "Isaw (Chicken Intestines)",
            category: "Pika-Pika",
            tagline: "Smoky • Grilled • Bold Flavor",
            description: "Marinated chicken intestines skewered and grilled over charcoal for a smoky, savory finish.",
            allergens: "Contains: Chicken",
            type: "Grilled / Street Food / Skewers",
            cultural: "Isaw is a beloved Filipino street food known for its unique texture and flavor. It showcases resourcefulness by using all parts of the animal. Grilled over charcoal, it's a staple in street-side food culture.",
            favorite: false,
            image: "../assets/images/foods/Pika-Pika/Isaw.JPG",
            images: [ 
                "../assets/images/foods/Pika-Pika/Isaw.JPG",
                "../assets/images/foods/Pika-Pika/Isaw2.JPG",
                "../assets/images/foods/Pika-Pika/Isaw3.JPG",
                "../assets/images/foods/Pika-Pika/Isaw4.JPG"
            ],
            portions: [
                { label: "Solo (4 sticks)", value: "solo", price: 80 },
                { label: "Sharing (8 sticks)", value: "sharing", price: 150 },
                { label: "Bilao (20 sticks)", value: "bilao", price: 360 }
            ]
        },
        {
            id: "bbq-skewers",
            name: "BBQ Skewers",
            category: "Pika-Pika",
            tagline: "Sweet & Smoky • Juicy • Crowd Favorite",
            description: "Tender meat skewers marinated in a sweet and savory glaze, grilled to perfection over open flames.",
            allergens: "Contains: Pork",
            type: "Grilled / Street Food / Skewers",
            cultural: "BBQ skewers are a common sight in Filipino street food stalls and backyard gatherings. Their sweet marinade makes them a crowd favorite. They are often enjoyed fresh off the grill with friends and family.",
            favorite: true,
            image: "../assets/images/foods/Pika-Pika/Barbecue .JPG",
            images: [ 
                "../assets/images/foods/Pika-Pika/Barbecue .JPG",
                "../assets/images/foods/Pika-Pika/BBQ Skewers2.JPG",
                "../assets/images/foods/Pika-Pika/BBQ Skewers3.JPG",
                "../assets/images/foods/Pika-Pika/BBQ Skewers4.JPG"
            ],
            portions: [
                { label: "Solo (4 sticks)", value: "solo", price: 100 },
                { label: "Sharing (8 sticks)", value: "sharing", price: 190 },
                { label: "Bilao (20 sticks)", value: "bilao", price: 450 }
            ]
        },
        {
            id: "tokwa-baboy",
            name: "Tokwa't Baboy",
            category: "Pika-Pika",
            tagline: "Savory • Tangy • Classic Pairing",
            description: "Crispy tofu and tender pork tossed in a tangy soy-vinegar dressing with onions and chili.",
            allergens: "Contains: Soy, Pork",
            type: "Appetizer / Side Dish / Savory",
            cultural: "Tokwa't Baboy is often served as a shared appetizer or side dish during gatherings. It reflects the balance of flavors central to Filipino cuisine. The dish is commonly enjoyed in communal meals and celebrations.",
            favorite: false,
            image: "../assets/images/foods/Pika-Pika/Tokwa't baboy.JPG",
            images: [ 
                "../assets/images/foods/Pika-Pika/Tokwa't baboy.JPG",
                "../assets/images/foods/Pika-Pika/Tokwa't baboy2.JPG",
                "../assets/images/foods/Pika-Pika/Tokwa't baboy3.JPG",
                "../assets/images/foods/Pika-Pika/Tokwa't baboy4.JPG"
            ],
            portions: [
                { label: "Solo (1 plate)", value: "solo", price: 120 },
                { label: "Sharing (large plate)", value: "sharing", price: 200 },
                { label: "Bilao (party tray)", value: "bilao", price: 420 }
            ]
        },
        {
            id: "calamares",
            name: "Calamares",
            category: "Pika-Pika",
            tagline: "Crispy • Light • Seafood Favorite",
            description: "Lightly battered squid rings deep-fried until golden, served with a tangy dipping sauce.",
            allergens: "Contains: Seafood, Gluten",
            type: "Fried / Appetizer / Seafood",
            cultural: "Calamares is a popular Filipino dish often served during gatherings and celebrations. It highlights the country's coastal influences. Sharing it as a starter is a common part of Filipino dining.",
            favorite: false,
            image: "../assets/images/foods/Pika-Pika/Calamares.JPG",
            images: [
                "../assets/images/foods/Pika-Pika/Calamares.JPG",
                "../assets/images/foods/Pika-Pika/Calamares2.JPG",
                "../assets/images/foods/Pika-Pika/Calamares3.JPG",
                "../assets/images/foods/Pika-Pika/Calamares4.JPG"
            ],
            portions: [
                { label: "Solo (1 plate)", value: "solo", price: 140 },
                { label: "Sharing (large plate)", value: "sharing", price: 220 },
                { label: "Bilao (party tray)", value: "bilao", price: 480 }
            ]
        }
    ],

    // ============ MAIN COURSE ============
    "main-course": [
        {
            id: "lechon-baboy",
            name: "Lechon Baboy",
            category: "Main Course",
            tagline: "Fiesta Favorite • Centerpiece • Celebration Dish",
            description: "Crispy roasted pork with tender, juicy meat inside, slow-cooked for rich flavor and crunchy skin.",
            allergens: "Contains: Pork",
            type: "Roasted / Main Dish / Celebration Food",
            cultural: "Lechon Baboy is the centerpiece of Filipino celebrations. It symbolizes abundance and hospitality. Sharing lechon is a tradition that brings people together during special occasions.",
            favorite: true,
            image: "../assets/images/foods/main_course/Lechon_Baboy.png",
            images: [ 
                "../assets/images/foods/main_course/Lechon_Baboy.png",
                "../assets/images/foods/main_course/Lechon_Baboy2.png",
                "../assets/images/foods/main_course/Lechon_Baboy3.png",
                "../assets/images/foods/main_course/Lechon_Baboy4.png"
            ],
            portions: [
                { label: "Half (10–15 pax)", value: "half", price: 3500 },
                { label: "Whole (20–30 pax)", value: "whole", price: 6500 }
            ]
        },
        {
            id: "chicken-inasal",
            name: "Chicken Inasal",
            category: "Main Course",
            tagline: "Grilled Classic • Smoky • Flavorful",
            description: "Marinated chicken grilled over charcoal, infused with tangy and savory flavors.",
            allergens: "Contains: Chicken",
            type: "Grilled / Main Dish",
            cultural: "Chicken Inasal originated in Bacolod and is widely enjoyed during gatherings. Its bold flavors make it a crowd favorite. It reflects the Filipino love for grilled dishes shared at the table.",
            favorite: true,
            image: "../assets/images/foods/main_course/Chicken_Inasal.JPG",
            images: [ 
                "../assets/images/foods/main_course/Chicken_Inasal.JPG",
                "../assets/images/foods/main_course/Chicken_Inasal2.JPG",
                "../assets/images/foods/main_course/Chicken_Inasal3.JPG",
                "../assets/images/foods/main_course/Chicken_Inasal4.JPG"
            ],
            portions: [
                { label: "Solo (1 pc + rice)", value: "solo", price: 140 },
                { label: "Sharing (3 pcs)", value: "sharing", price: 360 },
                { label: "Bilao (10 pcs)", value: "bilao", price: 1100 }
            ]
        },
        {
            id: "pork-adobo",
            name: "Pork Adobo",
            category: "Main Course",
            tagline: "Savory • Tangy • Classic Filipino",
            description: "Tender pork braised in soy sauce, vinegar, and garlic.",
            allergens: "Contains: Soy, Pork",
            type: "Braised / Main Dish",
            cultural: "Adobo is often considered the national dish of the Philippines. It is commonly served during family meals and gatherings. Its rich flavor and simplicity make it a timeless favorite.",
            favorite: true,
            image: "../assets/images/foods/main_course/Pork_Adobo.JPG",
            images: [ 
                "../assets/images/foods/main_course/Pork_Adobo.JPG",
                "../assets/images/foods/main_course/Pork_Adobo2.JPG",
                "../assets/images/foods/main_course/Pork_Adobo3.JPG",
                "../assets/images/foods/main_course/Pork_Adobo4.JPG"
            ],
            portions: [
                { label: "Solo (1 bowl)", value: "solo", price: 150 },
                { label: "Sharing (medium tray)", value: "sharing", price: 380 },
                { label: "Bilao (large tray)", value: "bilao", price: 850 }
            ]
        },
        {
            id: "beef-caldereta",
            name: "Beef Caldereta",
            category: "Main Course",
            tagline: "Rich • Hearty • Comfort Food",
            description: "Savory tomato-based beef stew with vegetables and rich sauce.",
            allergens: "Contains: Beef",
            type: "Stew / Main Dish",
            cultural: "Caldereta has Spanish influences and is often served during special occasions. It is known for its rich and layered flavors. The dish reflects Filipino adaptations of foreign cuisine.",
            favorite: false,
            image: "../assets/images/foods/main_course/Beef_Caldereta.JPG",
            images: [ 
                "../assets/images/foods/main_course/Beef_Caldereta.JPG",
                "../assets/images/foods/main_course/Beef_Caldereta2.JPG",
                "../assets/images/foods/main_course/Beef_Caldereta3.JPG",
                "../assets/images/foods/main_course/Beef_Caldereta4.JPG"
            ],
            portions: [
                { label: "Solo (1 bowl)", value: "solo", price: 180 },
                { label: "Sharing (medium tray)", value: "sharing", price: 420 },
                { label: "Bilao (large tray)", value: "bilao", price: 950 }
            ]
        },
        {
            id: "kare-kare",
            name: "Kare-Kare",
            category: "Main Course",
            tagline: "Nutty • Rich • Traditional Favorite",
            description: "Oxtail stew in thick peanut sauce served with bagoong.",
            allergens: "Contains: Peanuts, Shellfish",
            type: "Stew / Main Dish",
            cultural: "Kare-Kare is a well-loved Filipino dish served during gatherings. Its peanut sauce makes it unique and memorable. It is often prepared for special occasions and shared meals.",
            favorite: false,
            image: "../assets/images/foods/main_course/Kare-Kare.JPG",
            images: [ 
                "../assets/images/foods/main_course/Kare-Kare.JPG",
                "../assets/images/foods/main_course/Kare-Kare2.JPG",
                "../assets/images/foods/main_course/Kare-Kare3.JPG",
                "../assets/images/foods/main_course/Kare-Kare4.JPG"
            ],
            portions: [
                { label: "Solo (1 bowl)", value: "solo", price: 180 },
                { label: "Sharing (medium tray)", value: "sharing", price: 450 },
                { label: "Bilao (large tray)", value: "bilao", price: 980 }
            ]
        },
        {
            id: "sinigang-baboy",
            name: "Sinigang na Baboy",
            category: "Main Course",
            tagline: "Tangy • Comforting • Soup Classic",
            description: "Sour tamarind soup with pork and vegetables.",
            allergens: "Contains: Pork",
            type: "Soup / Main Dish",
            cultural: "Sinigang is a staple comfort food in Filipino households. Its signature sour taste makes it refreshing and distinct. It is often served during family meals and gatherings.",
            favorite: true,
            image: "../assets/images/foods/main_course/Sinigang_na_Baboy.JPG",
            images: [ 
                "../assets/images/foods/main_course/Sinigang_na_Baboy.JPG",
                "../assets/images/foods/main_course/Sinigang_na_Baboy2.JPG",
                "../assets/images/foods/main_course/Sinigang_na_Baboy3.JPG",
                "../assets/images/foods/main_course/Sinigang_na_Baboy4.JPG"
            ],
            portions: [
                { label: "Solo (1 bowl)", value: "solo", price: 150 },
                { label: "Sharing (medium pot)", value: "sharing", price: 380 },
                { label: "Bilao (large pot)", value: "bilao", price: 820 }
            ]
        },
        {
            id: "pancit-bihon",
            name: "Pancit Bihon",
            category: "Main Course",
            tagline: "Light • Savory • Celebration Noodles",
            description: "Stir-fried rice noodles with vegetables and meat.",
            allergens: "Contains: Soy, Gluten",
            type: "Noodles / Main Dish",
            cultural: "Pancit Bihon is traditionally served during birthdays and celebrations. It symbolizes long life and prosperity. Sharing pancit is a meaningful part of Filipino gatherings.",
            favorite: true,
            image: "../assets/images/foods/main_course/Pancit_Bihon.JPG",
            images: [ 
                "../assets/images/foods/main_course/Pancit_Bihon.JPG",
                "../assets/images/foods/main_course/Pancit_Bihon2.JPG",
                "../assets/images/foods/main_course/Pancit_Bihon3.JPG",
                "../assets/images/foods/main_course/Pancit_Bihon4.JPG"
            ],
            portions: [
                { label: "Solo (1 plate)", value: "solo", price: 120 },
                { label: "Sharing (small bilao)", value: "sharing", price: 300 },
                { label: "Bilao (large)", value: "bilao", price: 650 }
            ]
        }
    ],

    // ============ DESSERTS ============
    "desserts": [
        {
            id: "halo-halo",
            name: "Halo-Halo",
            category: "Desserts",
            tagline: "Refreshing • Colorful • Iconic",
            description: "A delightful mix of shaved ice, sweet beans, fruits, jellies, leche flan, and ube topped with milk.",
            allergens: "Contains: Dairy",
            type: "Dessert / Cold Treat",
            cultural: "Halo-Halo is a popular Filipino dessert enjoyed during hot weather and celebrations. Its mix of ingredients reflects the diversity of Filipino culture. It is often shared as a fun and refreshing treat.",
            favorite: true,
            image: "../assets/images/foods/desserts/Halo-Halo.JPG",
            images: [ 
                "../assets/images/foods/desserts/Halo-Halo.JPG",
                "../assets/images/foods/desserts/Halo-Halo2.JPG",
                "../assets/images/foods/desserts/Halo-Halo3.JPG",
                "../assets/images/foods/desserts/Halo-Halo4.JPG"
            ],
            portions: [
                { label: "Solo (1 cup)", value: "solo", price: 90 },
                { label: "Sharing (3 cups)", value: "sharing", price: 250 }
            ]
        },
        {
            id: "leche-flan",
            name: "Leche Flan",
            category: "Desserts",
            tagline: "Creamy • Sweet • Classic",
            description: "Smooth custard dessert topped with caramel syrup.",
            allergens: "Contains: Eggs, Dairy",
            type: "Dessert / Custard",
            cultural: "Leche Flan is a traditional dessert served during celebrations and holidays. Its rich texture makes it a highlight of any feast. It reflects Spanish influence on Filipino cuisine.",
            favorite: false,
            image: "../assets/images/foods/desserts/Leche_flan.JPG",
            images: [ 
                "../assets/images/foods/desserts/Leche_flan.JPG",
                "../assets/images/foods/desserts/Leche_flan2.JPG",
                "../assets/images/foods/desserts/Leche_flan3.JPG",
                "../assets/images/foods/desserts/Leche_flan4.JPG"
            ],
            portions: [
                { label: "Solo (1 slice)", value: "solo", price: 60 },
                { label: "Whole (tray)", value: "whole", price: 300 }
            ]
        },
        {
            id: "mango-float",
            name: "Mango Float",
            category: "Desserts",
            tagline: "Chilled • Creamy • No-Bake Favorite",
            description: "Layers of graham crackers, cream, and ripe mangoes chilled to perfection.",
            allergens: "Contains: Dairy, Gluten",
            type: "Dessert / Chilled",
            cultural: "Mango Float is a modern Filipino dessert commonly served at parties. It is easy to prepare and perfect for sharing. It highlights the Filipino love for sweet and creamy desserts.",
            favorite: true,
            image: "../assets/images/foods/desserts/Mango_Float.JPG",
            images: [ 
                "../assets/images/foods/desserts/Mango_Float.JPG",
                "../assets/images/foods/desserts/Mango_Float2.JPG",
                "../assets/images/foods/desserts/Mango_Float3.JPG",
                "../assets/images/foods/desserts/Mango_Float4.JPG"
            ],
            portions: [
                { label: "Solo (1 slice)", value: "solo", price: 70 },
                { label: "Tray", value: "tray", price: 320 }
            ]
        },
        {
            id: "turon",
            name: "Turon",
            category: "Desserts",
            tagline: "Crispy • Sweet • Caramelized",
            description: "Fried banana rolls with caramelized sugar and jackfruit.",
            allergens: "Contains: Gluten",
            type: "Fried / Dessert / Snack",
            cultural: "Turon is a popular Filipino street dessert often enjoyed during gatherings. Its sweet and crunchy texture makes it a favorite. It represents simple and comforting Filipino treats.",
            favorite: false,
            image: "../assets/images/foods/desserts/Turon.JPG",
            images: [ 
                "../assets/images/foods/desserts/Turon.JPG",
                "../assets/images/foods/desserts/Turon2.JPG",
                "../assets/images/foods/desserts/Turon3.JPG",
                "../assets/images/foods/desserts/Turon4.JPG"
            ],
            portions: [
                { label: "Solo (2 pcs)", value: "solo", price: 60 },
                { label: "Sharing (6 pcs)", value: "sharing", price: 150 }
            ]
        },
        {
            id: "ube-halaya",
            name: "Ube Halaya",
            category: "Desserts",
            tagline: "Earthy • Creamy • Purple Gem",
            description: "Slow-cooked purple yam jam made with coconut milk and condensed milk, topped with grated cheese or latik.",
            allergens: "Contains: Dairy",
            type: "Jam / Pudding / Traditional Sweet",
            cultural: "Ube Halaya is a labor of love, traditionally requiring hours of constant stirring to achieve its signature smooth texture. Its vibrant purple color and earthy sweetness make it a prized dessert during special occasions and religious festivals.",
            favorite: false,
            image: "../assets/images/foods/desserts/Ube_Halaya.JPG",
            portions: [
                { label: "Solo (small tub)", value: "solo", price: 80 },
                { label: "Sharing (medium tub)", value: "sharing", price: 150 }
            ]
        },
        {
            id: "biko",
            name: "Biko",
            category: "Desserts",
            tagline: "Sticky • Sweet • Coconut Infused",
            description: "Sweet, chewy glutinous rice cooked with coconut milk and brown sugar, topped with a layer of latik (coconut curd).",
            allergens: "None",
            type: "Rice Cake / Kakanin",
            cultural: "Biko is a type of \"kakanin\" that symbolizes the stickiness of family bonds. It is traditionally served during weddings, housewarmings, and fiestas to represent a sweet and lasting relationship among the community.",
            favorite: false,
            image: "../assets/images/foods/desserts/Biko.JPG",
            images: [ 
                "../assets/images/foods/desserts/Biko.JPG",
                "../assets/images/foods/desserts/Biko2.JPG",
                "../assets/images/foods/desserts/Biko3.JPG",
                "../assets/images/foods/desserts/Biko4.JPG"
            ],
            portions: [
                { label: "Solo (1 slice)", value: "solo", price: 60 },
                { label: "Sharing (medium tray)", value: "sharing", price: 110 },
                { label: "Bilao (large party tray)", value: "bilao", price: 380 }
            ]
        },
        {
            id: "cassava-cake",
            name: "Cassava Cake",
            category: "Desserts",
            tagline: "Moist • Chewy • Rich & Savory",
            description: "A traditional Filipino moist cake made from grated cassava, coconut milk, and condensed milk with a custard-like topping.",
            allergens: "Contains: Dairy, Eggs",
            type: "Baked Cake / Kakanin",
            cultural: "Cassava cake is one of the most popular native delicacies in the Philippines. It showcases the versatility of root crops in local agriculture and is a favorite \"pasalubong\" or gift for friends and family after a trip or celebration.",
            favorite: false,
            image: "../assets/images/foods/desserts/Cassava_Cake.png",
            images: [ 
                "../assets/images/foods/desserts/Cassava_Cake.png",
                "../assets/images/foods/desserts/Cassava_Cake2.png",
                "../assets/images/foods/desserts/Cassava_Cake3.png",
                "../assets/images/foods/desserts/Cassava_Cake4.png"
            ],
            portions: [
                { label: "Solo (1 slice)", value: "solo", price: 70 },
                { label: "Sharing (medium tray)", value: "sharing", price: 130 },
                { label: "Bilao (large party tray)", value: "bilao", price: 450 }
            ]
        },
        {
            id: "sapin-sapin",
            name: "Sapin-Sapin",
            category: "Desserts",
            tagline: "Layered • Vibrant • Sweet Harmony",
            description: "A multi-colored glutinous rice and coconut milk cake, with each layer offering distinct flavors like ube, jackfruit, and plain coconut.",
            allergens: "None",
            type: "Rice Cake / Kakanin",
            cultural: "The word \"sapin-sapin\" means \"layers,\" and this dessert is a visual representation of the colorful festivals found across the Philippine islands. Its intricate preparation and beautiful appearance make it a celebratory favorite.",
            favorite: false,
            image: "../assets/images/foods/desserts/Sapin-Sapin.JPG",
            images: [ 
                "../assets/images/foods/desserts/Sapin-Sapin.JPG",
                "../assets/images/foods/desserts/Sapin-Sapin2.JPG",
                "../assets/images/foods/desserts/Sapin-Sapin3.JPG",
                "../assets/images/foods/desserts/Sapin-Sapin4.JPG"
            ],
            portions: [
                { label: "Solo (1 slice)", value: "solo", price: 75 },
                { label: "Sharing (medium tray)", value: "sharing", price: 140 },
                { label: "Bilao (large party tray)", value: "bilao", price: 480 }
            ]
        }
    ],

    // ============ DRINKS ============
    "drinks": [
        {
            id: "iced-tea",
            name: "Iced Tea",
            category: "Drinks",
            tagline: "Refreshing • Light • Classic Pairing",
            description: "Freshly brewed iced tea served chilled, perfect with any meal.",
            allergens: "None",
            type: "Beverage / Refreshment",
            cultural: "Iced tea is a staple drink in Filipino gatherings and restaurants. It is commonly served during meals and celebrations. Its refreshing taste pairs well with rich Filipino dishes.",
            favorite: true,
            image: "../assets/images/foods/drinks/Iced_Tea.JPG",
            images: [ 
                "../assets/images/foods/drinks/Iced_Tea.JPG",
                "../assets/images/foods/drinks/Iced_Tea2.JPG",
                "../assets/images/foods/drinks/Iced_Tea3.JPG",
                "../assets/images/foods/drinks/Iced_Tea4.JPG"
            ],
            portions: [
                { label: "Solo (glass)", value: "solo", price: 40 },
                { label: "Pitcher (4–5 pax)", value: "pitcher", price: 150 }
            ]
        },
        {
            id: "calamansi-juice",
            name: "Calamansi Juice",
            category: "Drinks",
            tagline: "Citrusy • Refreshing • Local Favorite",
            description: "Fresh calamansi juice with a balance of sweet and tangy flavors.",
            allergens: "None",
            type: "Beverage / Refreshment",
            cultural: "Calamansi is a native Filipino citrus fruit widely used in drinks and cooking. Its refreshing taste makes it popular during gatherings. It complements many traditional dishes.",
            favorite: false,
            image: "../assets/images/foods/drinks/Calamansi_Juice.JPG",
            images: [ 
                "../assets/images/foods/drinks/Calamansi_Juice.JPG",
                "../assets/images/foods/drinks/Calamansi_Juice2.JPG",
                "../assets/images/foods/drinks/Calamansi_Juice3.JPG",
                "../assets/images/foods/drinks/Calamansi_Juice4.JPG"
            ],
            portions: [
                { label: "Solo (glass)", value: "solo", price: 50 },
                { label: "Pitcher", value: "pitcher", price: 180 }
            ]
        },
        {
            id: "sago-gulaman",
            name: "Sago't Gulaman",
            category: "Drinks",
            tagline: "Sweet • Chewy • Traditional Drink",
            description: "A chilled drink with tapioca pearls, jelly, and caramelized sugar syrup.",
            allergens: "None",
            type: "Beverage / Dessert Drink",
            cultural: "Sago't Gulaman is a classic Filipino refreshment often served during fiestas and hot days. It is enjoyed by groups as a cooling drink. The mix of textures makes it unique and fun to drink.",
            favorite: true,
            image: "../assets/images/pic_card/drink_img_card.png",
            images: [ 
                "../assets/images/foods/drinks/Sago't_Gulaman.JPG",
                "../assets/images/foods/drinks/Sago't_Gulaman2.JPG",
                "../assets/images/foods/drinks/Sago't_Gulaman3.JPG",
                "../assets/images/foods/drinks/Sago't_Gulaman4.JPG"
            ],
            portions: [
                { label: "Solo (glass)", value: "solo", price: 50 },
                { label: "Pitcher", value: "pitcher", price: 180 }
            ]
        },
        {
            id: "mango-juice",
            name: "Mango Juice",
            category: "Drinks",
            tagline: "Thick • Luscious • Tropical Delight",
            description: "Made from perfectly ripe Manila mangoes, this juice offers a velvety smooth and naturally sweet tropical experience.",
            allergens: "None",
            type: "Beverage / Fruit Juice",
            cultural: "As the national fruit of the Philippines, the mango is celebrated for its world-class sweetness. Serving mango juice at a gathering highlights the country's rich agricultural heritage and tropical abundance.",
            favorite: false,
            image: "../assets/images/foods/drinks/Mango_Juice.JPG",
            images: [ 
                "../assets/images/foods/drinks/Mango_Juice.JPG",
                "../assets/images/foods/drinks/Mango_Juice2.JPG",
                "../assets/images/foods/drinks/Mango_Juice3.JPG",
                "../assets/images/foods/drinks/Mango_Juice4.JPG"
            ],
            portions: [
                { label: "Solo (glass)", value: "solo", price: 60 },
                { label: "Pitcher (4–5 pax)", value: "pitcher", price: 220 }
            ]
        },
        {
            id: "pineapple-juice",
            name: "Pineapple Juice",
            category: "Drinks",
            tagline: "Tangy • Vibrant • Palate Cleanser",
            description: "Pure, sun-ripened pineapple juice that delivers a crisp and zesty flavor to refresh your senses.",
            allergens: "None",
            type: "Beverage / Fruit Juice",
            cultural: "Pineapple is a major agricultural export of the Philippines and a common sight in local festivities. Its vibrant acidity makes it a popular choice for cutting through the richness of grilled and fried fiesta favorites.",
            favorite: false,
            image: "../assets/images/foods/drinks/Pineapple_Juice.JPG",
            images: [ 
                "../assets/images/foods/drinks/Pineapple_Juice.JPG",
                "../assets/images/foods/drinks/Pineapple_Juice2.JPG",
                "../assets/images/foods/drinks/Pineapple_Juice3.JPG",
                "../assets/images/foods/drinks/Pineapple_Juice4.JPG"
            ],
            portions: [
                { label: "Solo (glass)", value: "solo", price: 60 },
                { label: "Pitcher (4–5 pax)", value: "pitcher", price: 220 }
            ]
        },
        {
            id: "buko-juice",
            name: "Buko Juice",
            category: "Drinks",
            tagline: "Hydrating • Natural • Pure Island Taste",
            description: "Freshly harvested coconut water that provides a light, naturally sweet, and incredibly hydrating drink.",
            allergens: "None",
            type: "Beverage / Natural Juice",
            cultural: "Known as the \"Tree of Life,\" the coconut is central to Filipino life and cuisine. Drinking fresh Buko juice is a quintessential island experience that represents the simple joys of Filipino rural celebrations.",
            favorite: false,
            image: "../assets/images/foods/drinks/buko_juice.JPG",
            images: [ 
                "../assets/images/foods/drinks/buko_juice.JPG",
                "../assets/images/foods/drinks/buko_juice2.JPG",
                "../assets/images/foods/drinks/buko_juice3.JPG",
                "../assets/images/foods/drinks/buko_juice4.JPG"
            ],
            portions: [
                { label: "Solo (1 cup/shell)", value: "solo", price: 70 },
                { label: "Pitcher (4–5 pax)", value: "pitcher", price: 250 }
            ]
        },
        {
            id: "soft-drinks",
            name: "Soft Drinks",
            category: "Drinks",
            tagline: "Fizzy • Ice-Cold • Party Staple",
            description: "A selection of popular carbonated beverages served chilled for a crisp and refreshing bubbly kick.",
            allergens: "None",
            type: "Beverage / Carbonated",
            cultural: "Soft drinks are a modern staple at every Filipino gathering, from small birthdays to large town fiestas. They are synonymous with \"salo-salo\" and are always present to ensure everyone has a bubbly drink to enjoy.",
            favorite: false,
            image: "../assets/images/foods/drinks/softdrinks.png",
            images: [ 
                "../assets/images/foods/drinks/softdrinks.png",
                "../assets/images/foods/drinks/softdrinks2.png",
                "../assets/images/foods/drinks/softdrinks3.png",
                "../assets/images/foods/drinks/softdrinks4.png"
            ],
            portions: [
                { label: "Solo (can/glass)", value: "solo", price: 45 },
                { label: "Pitcher (1.5L Bottle)", value: "pitcher", price: 120 }
            ]
        },
        {
            id: "sagot-gulaman",
            name: "Sago't Gulaman",
            category: "Drinks",
            tagline: "Sweet • Chewy • Traditional Drink",
            description: "A chilled drink with tapioca pearls, jelly, and caramelized sugar syrup.",
            allergens: "None",
            type: "Beverage / Carbonated",
            cultural: "Sago’t Gulaman is a classic Filipino refreshment often served during fiestas and hot days. It is enjoyed by groups as a cooling drink. The mix of textures makes it unique and fun to drink.",
            favorite: true,
            image: "../assets/images/foods/drinks/Sago't_Gulaman.JPG",
            images: [ 
                "../assets/images/foods/drinks/Sago't_Gulaman.JPG",
                "../assets/images/foods/drinks/Sago't_Gulaman2.JPG",
                "../assets/images/foods/drinks/Sago't_Gulaman3.JPG",
                "../assets/images/foods/drinks/Sago't_Gulaman4.JPG"
            ],
            portions: [
                { label: "Solo (glass)", value: "solo", price: 50 },
                { label: "Pitcher", value: "pitcher", price: 180 }
            ]
        },
        {
            id: "coffee",
            name: "Sago't Gulaman",
            category: "Drinks",
            tagline: "Bold • Aromatic • Smooth Finish",
            description: "A rich and aromatic brew that serves as the perfect warm companion to your favorite Filipino desserts. ",
            allergens: "None",
            type: "Beverage / Carbonated",
            cultural: "In many Filipino households, a meal isn't truly over until a hot cup of coffee is served alongside \"pang-himagas\" (dessert). It fosters lingering conversations and \"kuwentuhan\" long after the plates are cleared.",
            favorite: true,
            image: "../assets/images/foods/drinks/Coffee.png",
            images: [ 
                "../assets/images/foods/drinks/Coffee.png",
                "../assets/images/foods/drinks/Coffee2.png",
                "../assets/images/foods/drinks/Coffee3.png",
                "../assets/images/foods/drinks/Coffee4.png"
            ],
            portions: [
                { label: "Solo (cup)", value: "solo", price: 50 },
                { label: "Pot (4-5px)", value: "pitcher", price: 180 }
            ]
        }
    ],

    // ============ PACKAGE DEALS ============
    "packages": [
        {
            id: "relapse-set",
            name: "Relapse Set",
            category: "Package Deals",
            tagline: "Late-night cravings • Barkada sharing • Chill sessions",
            tier: "Small Set",
            goodFor: "3–6 people",
            idealFor: "Late-night hangouts, movie nights, and casual get-togethers",
            favorite: false,
            price: 1299,
            inclusions: [
                "Lumpiang Shanghai (12 pcs) — crispy party favorite",
                "BBQ Skewers (6 sticks) — sweet & smoky",
                "Fried Chicken Skin (sharing plate) — crunchy pulutan staple",
                "Calamares (sharing plate) — crispy seafood bites",
                "Fish Balls (20 pcs) — with assorted dipping sauces",
                "Rice (2 cups) — plain or garlic rice",
                "Drinks — iced tea or soft drinks (3 servings)"
            ],
            allergenInfo: "Some items may contain pork, chicken, seafood, soy, or gluten.",
            packageOverview: "The Relapse Box is designed for laid-back nights and spontaneous get-togethers. It brings together Filipino comfort snacks and street food favorites that are best enjoyed shared. Perfect for bonding moments, it captures the fun, relaxed side of Filipino food culture.",
            image: "../assets/images/foods/fiesta_packages/Relapse_set.JPG"
        },
        {
            id: "hapunan-set",
            name: "Hapunan Set",
            category: "Package Deals",
            tagline: "Family Favorite • Hearty • Everyday celebration",
            tier: "Medium Set",
            goodFor: "4–6 people",
            idealFor: "Family dinners, small gatherings, and home-style feasts",
            favorite: false,
            price: 1899,
            inclusions: [
                "Pork Adobo (sharing tray) — rich, savory classic",
                "Chicken Inasal (3 pcs) — grilled and flavorful",
                "Pancit Bihon (small bilao) — for sharing and tradition",
                "Lumpiang Shanghai (12 pcs) — crispy side favorite",
                "Rice (6 cups) — plain or garlic rice",
                "Dessert — leche flan (whole) or turon (6 pcs)",
                "Drinks — iced tea or juice (4–5 servings)"
            ],
            allergenInfo: "Some items may contain pork, chicken, soy, dairy, or gluten.",
            packageOverview: "The Hapunan Set is made for meaningful family dinners and everyday celebrations. It combines comforting Filipino classics that are familiar, filling, and perfect for sharing. Rooted in togetherness, it reflects the warmth of home and the joy of eating as a family.",
            image: "../assets/images/foods/fiesta_packages/Hapunan_set.JPG"
        },
        {
            id: "sharon-set",
            name: "Sharon Set",
            category: "Package Deals",
            tagline: "Fiesta Favorite • Crowd Favorite • Celebration Essential",
            tier: "Large Set",
            goodFor: "15–30 people",
            idealFor: "Birthdays, fiestas, reunions, and big celebrations",
            favorite: true,
            price: 4999,
            inclusions: [
                "Lechon Baboy (half) — crispy celebration centerpiece",
                "Pancit Bihon (3 bilao) — for sharing and tradition",
                "Lumpiang Shanghai (30 pcs) — party essential",
                "BBQ Skewers (15 sticks) — sweet & smoky",
                "Assorted Pika-Pika — kwek-kwek, fish balls, calamares",
                "Rice (10–12 cups) — plain or garlic rice",
                "Dessert Platter — halo-halo cups, leche flan, or kakanin",
                "Drinks — iced tea or juice (good for group)"
            ],
            allergenInfo: "Some items may contain pork, chicken, seafood, soy, dairy, peanuts, or gluten.",
            packageOverview: "The Sharon Set is designed for grand gatherings and joyful celebrations. It brings together Filipino favorites that highlight tradition, abundance, and shared experiences. Perfect for large groups, it captures the essence of Filipino hospitality—where food is meant to be shared and enjoyed together.",
            image: "../assets/images/foods/fiesta_packages/Sharon_Set.JPG"
        }
    ]
};

// ============ HELPER FUNCTION TO FIND ITEM BY ID ============

 //Searches through all menu categories to find an item by its ID

function findItemById(itemId) {
    // Search through each category in the menu database
    for (const category in menuDatabase) {
        // Get the array of items in this category
        const items = menuDatabase[category];
        
        // Search for the item with matching ID
        const foundItem = items.find(item => item.id === itemId);
        
        if (foundItem) {
            return foundItem; // Return the item if found
        }
    }
    
    // Return null if item is not found in any category
    return null;
}

// ============ HELPER FUNCTION TO FORMAT PRICE ============

function formatPrice(price) {
    return `₱ ${price.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

