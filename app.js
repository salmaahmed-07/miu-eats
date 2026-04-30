/**
 * MIU Eats Data
 */
const DATA = {
    places: [
        {
            id: 'my-corner',
            name: 'My Corner',
            category: 'food',
            image: 'logos/mycorner-logo.png',
            buildings: ['MainK', 'Pharmacy'],
            openingHours: { open: 8, close: 17 },
            priceRange: 'LE 50–150',
            location: 'Building Main, Ground Floor',
            menu: [
                // Corner Crepe (Savory)
                { id: 'mc_cr1', name: 'Burger (Mozzarella, Burger, Mushroom, BBQ, Caramelized Onion)', price: 130, cat: 'Corner Crepe (Savory)', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_cr2', name: 'Chicken and Cheese (Crispy Chicken, Mozzarella, Cheddar, Peppers)', price: 130, cat: 'Corner Crepe (Savory)', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_cr3', name: 'Super Crunchy (Mozzarella, Crispy Chicken, Turkey, Ranch)', price: 130, cat: 'Corner Crepe (Savory)', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_cr4', name: 'Fries Cocktail (Mozzarella, Fries, Ketchup, Mayo)', price: 140, cat: 'Corner Crepe (Savory)', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_cr5', name: 'Meat Cocktail (Mozzarella, Burger, Hot Dog, Salami, Peppers)', price: 140, cat: 'Corner Crepe (Savory)', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_cr6', name: 'Nutella (Chocolate)', price: 50, cat: 'Corner Crepe (Savory)', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_cr7', name: 'Nutella with Banana', price: 60, cat: 'Corner Crepe (Savory)', reactions: { fire: 0, thumb: 0 } },
                // Meat Sandwiches
                { id: 'mc_ms1', name: 'Alexandrian Liver', price: 70, cat: 'Meat Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ms2', name: 'Baladi Sojouk (Sausage)', price: 80, cat: 'Meat Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ms3', name: 'Meat Fajita', price: 90, cat: 'Meat Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ms4', name: 'Chicken Shish', price: 120, cat: 'Meat Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ms5', name: 'Crispy Chicken', price: 120, cat: 'Meat Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ms6', name: 'Chicken Ranch', price: 130, cat: 'Meat Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ms7', name: 'Chicken BBQ', price: 130, cat: 'Meat Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ms8', name: 'Jalapeño Crispy Chicken', price: 130, cat: 'Meat Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ms9', name: 'Buffalo Chicken', price: 130, cat: 'Meat Sandwiches', reactions: { fire: 0, thumb: 0 } },
                // Fries Sandwiches
                { id: 'mc_fs1', name: 'Fries', price: 20, cat: 'Fries Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_fs2', name: 'Fries Chipsy', price: 20, cat: 'Fries Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_fs3', name: 'Fries Pastrami', price: 30, cat: 'Fries Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_fs4', name: 'Fries Ketchup', price: 25, cat: 'Fries Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_fs5', name: 'Fries Mayo', price: 25, cat: 'Fries Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_fs6', name: 'Fries Pizza', price: 35, cat: 'Fries Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_fs7', name: 'Fries Cheese Sauce', price: 30, cat: 'Fries Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_fs8', name: 'Fries Mix Cheese', price: 30, cat: 'Fries Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_fs9', name: 'Fries Cocktail', price: 35, cat: 'Fries Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_fs10', name: 'Fries Jalapeño', price: 30, cat: 'Fries Sandwiches', reactions: { fire: 0, thumb: 0 } },
                // Corner Foul & Falafel
                { id: 'mc_ff1', name: 'Foul', price: 10, cat: 'Corner Foul & Falafel', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ff2', name: 'Foul with Hot Oil', price: 15, cat: 'Corner Foul & Falafel', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ff3', name: 'Foul My Corner', price: 15, cat: 'Corner Foul & Falafel', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ff4', name: 'Foul with Tomato', price: 15, cat: 'Corner Foul & Falafel', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ff5', name: 'Alexandrian Foul', price: 15, cat: 'Corner Foul & Falafel', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ff6', name: 'Foul with Olive Oil', price: 15, cat: 'Corner Foul & Falafel', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ff7', name: 'Foul with Butter', price: 15, cat: 'Corner Foul & Falafel', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ff8', name: 'Foul with Preserved Lemon', price: 15, cat: 'Corner Foul & Falafel', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ff9', name: 'Foul with Eggs', price: 20, cat: 'Corner Foul & Falafel', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ff10', name: 'Falafel', price: 10, cat: 'Corner Foul & Falafel', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ff11', name: 'Stuffed Falafel', price: 15, cat: 'Corner Foul & Falafel', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ff12', name: 'Falafel with Tomato', price: 15, cat: 'Corner Foul & Falafel', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ff13', name: 'Falafel with Egg', price: 15, cat: 'Corner Foul & Falafel', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ff14', name: 'Falafel with Kiri Cheese', price: 25, cat: 'Corner Foul & Falafel', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ff15', name: 'Falafel with Fries', price: 20, cat: 'Corner Foul & Falafel', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ff16', name: 'Falafel with Eggplant', price: 20, cat: 'Corner Foul & Falafel', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ff17', name: 'Baba Ghanoush', price: 20, cat: 'Corner Foul & Falafel', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ff18', name: 'Mousakaa', price: 25, cat: 'Corner Foul & Falafel', reactions: { fire: 0, thumb: 0 } },
                // Corner Eggs
                { id: 'mc_ce1', name: 'Plain Omelette', price: 10, cat: 'Corner Eggs', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ce2', name: 'Spanish Omelette', price: 15, cat: 'Corner Eggs', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ce3', name: 'Pastrami Omelette', price: 15, cat: 'Corner Eggs', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ce4', name: 'Sojouk Omelette', price: 15, cat: 'Corner Eggs', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ce5', name: 'Sausage Omelette', price: 15, cat: 'Corner Eggs', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ce6', name: 'Cheese Omelette', price: 15, cat: 'Corner Eggs', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ce7', name: 'Boiled Eggs', price: 15, cat: 'Corner Eggs', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ce8', name: 'Fried Eggs', price: 20, cat: 'Corner Eggs', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ce9', name: 'Shakshuka', price: 20, cat: 'Corner Eggs', reactions: { fire: 0, thumb: 0 } },
                // Salads & Appetizers
                { id: 'mc_sa1', name: 'Pickles', price: 8, cat: 'Salads & Appetizers', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_sa2', name: 'Pickled Eggplant', price: 15, cat: 'Salads & Appetizers', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_sa3', name: 'Pickled Cucumber', price: 15, cat: 'Salads & Appetizers', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_sa4', name: 'Pickled Tomato', price: 15, cat: 'Salads & Appetizers', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_sa5', name: 'Baba Ghanoush', price: 20, cat: 'Salads & Appetizers', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_sa6', name: 'Tehina', price: 20, cat: 'Salads & Appetizers', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_sa7', name: 'Green Salad', price: 20, cat: 'Salads & Appetizers', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_sa8', name: 'Torshi', price: 30, cat: 'Salads & Appetizers', reactions: { fire: 0, thumb: 0 } },
                // Add-ons
                { id: 'mc_ao1', name: 'Quraish Cheese', price: 20, cat: 'Add-ons', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ao2', name: 'Feta Cheese', price: 20, cat: 'Add-ons', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ao3', name: 'Old Cheese (Mish)', price: 25, cat: 'Add-ons', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ao4', name: 'Roumi Cheese', price: 30, cat: 'Add-ons', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ao5', name: 'White Cheese with Tomato', price: 30, cat: 'Add-ons', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ao6', name: 'Pastrami', price: 15, cat: 'Add-ons', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ao7', name: 'Sojouk', price: 15, cat: 'Add-ons', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ao8', name: 'Sausage', price: 15, cat: 'Add-ons', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ao9', name: 'Baba Ghanoush', price: 10, cat: 'Add-ons', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ao10', name: 'Tehina', price: 7, cat: 'Add-ons', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ao11', name: 'Roumi Cheese', price: 10, cat: 'Add-ons', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ao12', name: 'Cheddar Cheese', price: 15, cat: 'Add-ons', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ao13', name: 'Mushroom', price: 15, cat: 'Add-ons', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ao14', name: 'Kiri Cheese', price: 15, cat: 'Add-ons', reactions: { fire: 0, thumb: 0 } },
                { id: 'mc_ao15', name: 'Eggs', price: 12, cat: 'Add-ons', reactions: { fire: 0, thumb: 0 } }
            ]
        },
        {
            id: 'r-to-go',
            name: 'R to Go',
            category: 'food',
            image: 'logos/RtoGo-logo.png',
            buildings: ['MainK'],
            openingHours: { open: 7, close: 16 },
            priceRange: 'LE 20–120',
            location: 'Building R, Plaza',
            menu: [
                { id: 'rtg_p1', name: 'B.B.Q. Chicken Pizza', price: 100, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_p2', name: 'Super Supreme Pizza', price: 110, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_p3', name: 'Margherita Pizza', price: 70, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_p4', name: 'Vegetables Pizza', price: 85, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_p5', name: 'Pepperoni Pizza', price: 90, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_p6', name: 'Chicken Ranch Pizza', price: 100, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_p7', name: 'Hot Dog Pizza', price: 90, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_p8', name: 'Italiano Pizza', price: 100, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_p9', name: 'Tuna Pizza', price: 120, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_p10', name: 'Tex Mex Pizza', price: 100, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_p11', name: 'Mix Cheese Pizza', price: 90, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_w1', name: 'B.B.Q Chicken Wrap', price: 90, cat: 'Wraps', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_w2', name: 'Crispy Chicken Wrap', price: 90, cat: 'Wraps', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_w3', name: 'Mexican Chicken Wrap', price: 90, cat: 'Wraps', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_w4', name: 'Chicken Fajitas Wrap', price: 90, cat: 'Wraps', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_rs1', name: 'Pepperoni Pizza Sandwich', price: 90, cat: 'Ready Made Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_rs2', name: 'Curried Chicken Panini (L)', price: 90, cat: 'Ready Made Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_rs3', name: 'Curried Chicken Panini (S)', price: 80, cat: 'Ready Made Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_rs4', name: 'Tuna Sandwich (L)', price: 95, cat: 'Ready Made Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_rs5', name: 'Tuna Sandwich (S)', price: 85, cat: 'Ready Made Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_rs6', name: 'Cheese Sandwich (L)', price: 70, cat: 'Ready Made Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_rs7', name: 'Cheese Sandwich (S)', price: 60, cat: 'Ready Made Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_myo1', name: 'Bread with salad Choices: Whole Wheat (L)', price: 25, cat: 'Make Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_myo2', name: 'Bread with salad Choices: White (L)', price: 20, cat: 'Make Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_myo3', name: 'Bread with salad Choices: Whole Wheat (S)', price: 23, cat: 'Make Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_myo4', name: 'Bread with salad Choices: White (S)', price: 18, cat: 'Make Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_myo5', name: 'Add Slices Cheese (L)', price: 20, cat: 'Make Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_myo6', name: 'Add Sliced Cheese (S)', price: 17, cat: 'Make Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_myo7', name: 'Add Smoked Turkey (L)', price: 50, cat: 'Make Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_myo8', name: 'Add Smoked Turkey (S)', price: 45, cat: 'Make Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_myo9', name: 'Add Smoked Chicken (L)', price: 50, cat: 'Make Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_myo10', name: 'Add Smoked Chicken (S)', price: 45, cat: 'Make Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_myo11', name: 'Add Smoked Beef (L)', price: 55, cat: 'Make Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_myo12', name: 'Add Smoked Beef (S)', price: 50, cat: 'Make Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_s1', name: 'R to Go Vegetarian Salad', price: 75, cat: 'Salad', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_s2', name: 'Tuna Pasta Salad', price: 100, cat: 'Salad', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_s3', name: 'Chicken Caesar Salad', price: 80, cat: 'Salad', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_s4', name: 'Chicken Corn Salad', price: 80, cat: 'Salad', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_s5', name: 'Chicken Pasta Salad', price: 90, cat: 'Salad', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_sn1', name: 'Croissants (Plain, Cheese, Chocolate)', price: 35, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_sn2', name: 'Chocolate Brownie', price: 50, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_sn3', name: 'Muffin', price: 50, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_sn4', name: 'Chocolate Chip Cookie', price: 50, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_hd1', name: 'Nescafe Coffee', price: 45, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_hd2', name: 'Tea', price: 20, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_hd3', name: 'Cappuccino', price: 60, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_hd4', name: 'Cafe Latte', price: 60, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_hd5', name: 'Espresso', price: 40, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_hd6', name: 'American Coffee', price: 60, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_hd7', name: 'Double Espresso', price: 50, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_hd8', name: 'Macchiato', price: 50, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_hd9', name: 'Mocha', price: 60, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_hd10', name: 'Hot Chocolate', price: 60, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_d1', name: 'Water', price: 10, cat: 'Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_d2', name: 'Soft Drinks', price: 25, cat: 'Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_d3', name: 'Lemonade Crush', price: 50, cat: 'Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_d4', name: 'Crushes (Mango, Strawberry, Orange, Minted Lemon)', price: 50, cat: 'Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_d5', name: 'Fresh Juices', price: 50, cat: 'Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'rtg_d6', name: 'Redbull', price: 60, cat: 'Drinks', reactions: { fire: 0, thumb: 0 } }
            ]
        },
        {
            id: 'tbs',
            name: 'TBS',
            category: 'food',
            image: 'logos/tbs-logo.png',
            buildings: ['NS'],
            openingHours: { open: 8, close: 17 },
            priceRange: 'LE 30–1550',
            location: 'Near Gate 1',
            menu: [
                // Breakfast
                { id: 'tbs_b1', name: 'Egg Gravy Scrambled', price: 200, cat: 'Breakfast', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_b2', name: 'Mushroom Croissant', price: 230, cat: 'Breakfast', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_b3', name: 'English Muffin', price: 185, cat: 'Breakfast', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_b4', name: 'Egg Quesadillas', price: 230, cat: 'Breakfast', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_b5', name: 'Omlette Holandaise', price: 225, cat: 'Breakfast', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_b6', name: 'Salmon Sunny Side Up', price: 295, cat: 'Breakfast', reactions: { fire: 0, thumb: 0 } },
                // Yogurt Bowls
                { id: 'tbs_yb1', name: 'Chocolate Quinoa', price: 190, cat: 'Yogurt Bowls', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_yb2', name: 'Mango Granola', price: 195, cat: 'Yogurt Bowls', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_yb3', name: 'Banana Peanut Butter', price: 195, cat: 'Yogurt Bowls', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_yb4', name: 'Kiwi Banana', price: 230, cat: 'Yogurt Bowls', reactions: { fire: 0, thumb: 0 } },
                // Create Your Own Sandwich – Breads
                { id: 'tbs_sb1', name: 'Bread: Half Brown Baguette', price: 50, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sb2', name: 'Bread: Half White Baguette', price: 55, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sb3', name: 'Bread: Brown Ciabatta', price: 40, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sb4', name: 'Bread: Plain Ciabatta', price: 40, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sb5', name: 'Bread: Brown Panini', price: 50, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sb6', name: 'Bread: White Panini', price: 45, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sb7', name: 'Bread: Soft Bread', price: 40, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sb8', name: 'Bread: Tortilla', price: 30, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sb9', name: 'Bread: White Bagel', price: 35, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sb10', name: 'Bread: Brown Bagel', price: 45, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                // Create Your Own Sandwich – Fillings
                { id: 'tbs_sf1', name: 'Filling: Turkey', price: 135, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sf2', name: 'Filling: Tuna', price: 170, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sf3', name: 'Filling: Salmon', price: 235, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sf4', name: 'Filling: Roast Beef', price: 170, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sf5', name: 'Filling: Grilled Greek Chicken', price: 160, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sf6', name: 'Filling: Spicy Mexican Chicken', price: 160, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sf7', name: 'Filling: Mix Cheese', price: 110, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sf8', name: 'Filling: Vegetables', price: 45, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                // Create Your Own Sandwich – Extras
                { id: 'tbs_se1', name: 'Extra: Sun-Dried Pesto', price: 50, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_se2', name: 'Extra: Capers', price: 25, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_se3', name: 'Extra: Jalapeños', price: 20, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_se4', name: 'Extra: Emmental Cheese', price: 55, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_se5', name: 'Extra: Cheddar Cheese', price: 50, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_se6', name: 'Extra: Cream Cheese', price: 20, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_se7', name: 'Extra: Mix Cheese', price: 110, cat: 'Create Your Own Sandwich', reactions: { fire: 0, thumb: 0 } },
                // Butler Box
                { id: 'tbs_bb1', name: 'Mini Pains (20 pcs)', price: 675, cat: 'Butler Box', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_bb2', name: 'Mini Muffins & Brownies (24 pcs)', price: 675, cat: 'Butler Box', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_bb3', name: 'Mini Club (18 pcs)', price: 750, cat: 'Butler Box', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_bb4', name: 'Sweet Crusts (20 pcs)', price: 675, cat: 'Butler Box', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_bb5', name: 'Mini Croissants', price: 675, cat: 'Butler Box', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_bb6', name: 'Butler Panini (12 pcs)', price: 1075, cat: 'Butler Box', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_bb7', name: 'Butler Min (30 pcs)', price: 1550, cat: 'Butler Box', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_bb8', name: 'Simit Butler Box', price: 675, cat: 'Butler Box', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_bb9', name: 'Brioche Butler Box', price: 675, cat: 'Butler Box', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_bb10', name: 'Croffle Box', price: 0, cat: 'Butler Box', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_bb11', name: 'Savory Box (10 pcs)', price: 675, cat: 'Butler Box', reactions: { fire: 0, thumb: 0 } },
                // House Blend Coffee
                { id: 'tbs_hc1', name: 'Ristretto', price: 55, cat: 'House Blend Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_hc2', name: 'Espresso', price: 65, cat: 'House Blend Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_hc3', name: 'Macchiato', price: 75, cat: 'House Blend Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_hc4', name: 'Latte', price: 100, cat: 'House Blend Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_hc5', name: 'Americano', price: 85, cat: 'House Blend Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_hc6', name: 'Cappuccino', price: 100, cat: 'House Blend Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_hc7', name: 'Cafe Mocha', price: 115, cat: 'House Blend Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_hc8', name: 'Flat White', price: 100, cat: 'House Blend Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_hc9', name: 'Spanish Latte', price: 125, cat: 'House Blend Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_hc10', name: 'Caramel Macchiato', price: 115, cat: 'House Blend Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_hc11', name: 'White Mocha', price: 115, cat: 'House Blend Coffee', reactions: { fire: 0, thumb: 0 } },
                // Single Origin Coffee
                { id: 'tbs_sc1', name: 'Double Espresso', price: 85, cat: 'Single Origin Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sc2', name: 'Espresso Macchiato', price: 95, cat: 'Single Origin Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sc3', name: 'Cortado', price: 110, cat: 'Single Origin Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sc4', name: 'Flat White', price: 110, cat: 'Single Origin Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sc5', name: 'Americano Regular', price: 95, cat: 'Single Origin Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sc6', name: 'Cappuccino Regular', price: 110, cat: 'Single Origin Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sc7', name: 'Latte Large', price: 120, cat: 'Single Origin Coffee', reactions: { fire: 0, thumb: 0 } },
                // Hot Drinks
                { id: 'tbs_hd1', name: 'Hot Chocolate', price: 185, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_hd2', name: 'Tea', price: 55, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                // Frappe
                { id: 'tbs_f1', name: 'Vanilla Frappe', price: 110, cat: 'Frappe', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_f2', name: 'Mocha Frappe', price: 110, cat: 'Frappe', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_f3', name: 'Latte Frappe', price: 110, cat: 'Frappe', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_f4', name: 'Iced Coffee', price: 105, cat: 'Frappe', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_f5', name: 'Iced Americano', price: 95, cat: 'Frappe', reactions: { fire: 0, thumb: 0 } },
                // Matcha
                { id: 'tbs_m1', name: 'Matcha Latte', price: 130, cat: 'Matcha', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_m2', name: 'Matcha Spanish Latte', price: 150, cat: 'Matcha', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_m3', name: 'Coconut Matcha Latte', price: 135, cat: 'Matcha', reactions: { fire: 0, thumb: 0 } },
                // Smoothies
                { id: 'tbs_sm1', name: 'Mango Smoothie', price: 110, cat: 'Smoothies', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sm2', name: 'Strawberry Smoothie', price: 110, cat: 'Smoothies', reactions: { fire: 0, thumb: 0 } },
                // Bottles
                { id: 'tbs_bot1', name: 'Spanish Latte (Bottle)', price: 125, cat: 'Bottles', reactions: { fire: 0, thumb: 0 } },
                // Fresh Juices
                { id: 'tbs_fj1', name: 'Orange Juice', price: 80, cat: 'Fresh Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_fj2', name: 'Guava Juice', price: 80, cat: 'Fresh Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_fj3', name: 'Lemon Mint Juice', price: 80, cat: 'Fresh Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_fj4', name: 'Mango Juice', price: 85, cat: 'Fresh Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_fj5', name: 'Strawberry Juice', price: 80, cat: 'Fresh Juices', reactions: { fire: 0, thumb: 0 } },
                // Cold Drinks
                { id: 'tbs_cd1', name: 'Cream Espresso', price: 120, cat: 'Cold Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_cd2', name: 'Pink Lemonade', price: 100, cat: 'Cold Drinks', reactions: { fire: 0, thumb: 0 } },
                // Coffee Extras
                { id: 'tbs_ex1', name: 'Espresso Shot', price: 55, cat: 'Coffee Extras', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_ex2', name: 'Almond Milk', price: 45, cat: 'Coffee Extras', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_ex3', name: 'Oat Milk', price: 45, cat: 'Coffee Extras', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_ex4', name: 'Coconut Milk', price: 45, cat: 'Coffee Extras', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_ex5', name: 'Milk', price: 30, cat: 'Coffee Extras', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_ex6', name: 'Lactose Free Milk', price: 45, cat: 'Coffee Extras', reactions: { fire: 0, thumb: 0 } },
                // Flavors
                { id: 'tbs_fl1', name: 'Hazelnut (Sugar Free)', price: 40, cat: 'Flavors', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_fl2', name: 'Vanilla (Sugar Free)', price: 40, cat: 'Flavors', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_fl3', name: 'Caramel', price: 35, cat: 'Flavors', reactions: { fire: 0, thumb: 0 } },
                // Espresso Capsules
                { id: 'tbs_ec1', name: 'Brazillian Sleeve', price: 310, cat: 'Espresso Capsules', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_ec2', name: 'House Blend Capsules', price: 285, cat: 'Espresso Capsules', reactions: { fire: 0, thumb: 0 } },
                // Croissant
                { id: 'tbs_cr1', name: 'Plain Croissant', price: 90, cat: 'Croissants', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_cr2', name: 'Cream Cheese Croissant', price: 95, cat: 'Croissants', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_cr3', name: 'Zaatar Croissant', price: 95, cat: 'Croissants', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_cr4', name: 'Almond Croissant', price: 115, cat: 'Croissants', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_cr5', name: 'Pastrami Croissant', price: 115, cat: 'Croissants', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_cr6', name: 'Multicereal Croissant', price: 100, cat: 'Croissants', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_cr7', name: 'Cheddar Croissant', price: 95, cat: 'Croissants', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_cr8', name: 'Nutella Croissant', price: 120, cat: 'Croissants', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_cr9', name: 'Lotus Croissant', price: 115, cat: 'Croissants', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_cr10', name: 'Pain au Chocolate', price: 95, cat: 'Croissants', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_cr11', name: 'Pain Suisse Cottage Mint', price: 95, cat: 'Croissants', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_cr12', name: 'Kunafa Pistachio Croissant', price: 145, cat: 'Croissants', reactions: { fire: 0, thumb: 0 } },
                // Doughnuts
                { id: 'tbs_dn1', name: 'White Glazed Doughnut', price: 80, cat: 'Doughnuts', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_dn2', name: 'Caramel Glazed Doughnut', price: 80, cat: 'Doughnuts', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_dn3', name: 'Chocolate Glazed Doughnut', price: 80, cat: 'Doughnuts', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_dn4', name: 'Brown Chocolate Doughnut', price: 80, cat: 'Doughnuts', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_dn5', name: 'White Chocolate Doughnut', price: 80, cat: 'Doughnuts', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_dn6', name: 'Sugar & Jam Doughnut', price: 75, cat: 'Doughnuts', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_dn7', name: 'Strawberry Doughnut', price: 80, cat: 'Doughnuts', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_dn8', name: 'Blue Icing Doughnut', price: 80, cat: 'Doughnuts', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_dn9', name: 'Kunafa Pistachio Doughnut', price: 75, cat: 'Doughnuts', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_dn10', name: 'Stuffed Doughnut (Lotus, Nutella, Oreo Creme, Caramel Creme)', price: 75, cat: 'Doughnuts', reactions: { fire: 0, thumb: 0 } },
                // Danish
                { id: 'tbs_da1', name: 'Pineapple Danish', price: 100, cat: 'Danish', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_da2', name: 'Strawberry Danish', price: 100, cat: 'Danish', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_da3', name: 'Kiwi Danish', price: 100, cat: 'Danish', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_da4', name: 'Pain Suisse Apple Cinnamon Danish', price: 100, cat: 'Danish', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_da5', name: 'Pain Suisse Choco Chip Danish', price: 100, cat: 'Danish', reactions: { fire: 0, thumb: 0 } },
                // Muffins
                { id: 'tbs_mu1', name: 'Blueberry Muffin', price: 65, cat: 'Muffins', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_mu2', name: 'Chocolate Muffin', price: 65, cat: 'Muffins', reactions: { fire: 0, thumb: 0 } },
                // Cakes
                { id: 'tbs_ca1', name: 'Carrot Cake Whole', price: 650, cat: 'Cakes', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_ca2', name: 'Chocolate Fudge Cake Whole', price: 650, cat: 'Cakes', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_ca3', name: 'Chocolate Fudge Cake Slice', price: 115, cat: 'Cakes', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_ca4', name: 'Carrot Cake Slice', price: 115, cat: 'Cakes', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_ca5', name: 'Chocolate Salted Caramel', price: 105, cat: 'Cakes', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_ca6', name: 'Lemon Cake', price: 105, cat: 'Cakes', reactions: { fire: 0, thumb: 0 } },
                // Brownies
                { id: 'tbs_br1', name: 'Salted Caramel Brownie', price: 90, cat: 'Brownies', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_br2', name: 'Brookies', price: 85, cat: 'Brownies', reactions: { fire: 0, thumb: 0 } },
                // Tarts
                { id: 'tbs_ta1', name: 'Raspberry Tart', price: 85, cat: 'Tarts', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_ta2', name: 'Nutella Tart', price: 90, cat: 'Tarts', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_ta3', name: 'Blueberry Tart', price: 85, cat: 'Tarts', reactions: { fire: 0, thumb: 0 } },
                // Pastry Pizza
                { id: 'tbs_pz1', name: 'Pepperoni Ciabatta Pizza', price: 125, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_pz2', name: 'Chicken Ciabatta Pizza', price: 140, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_pz3', name: 'Margherita Ciabatta Pizza', price: 125, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                // Others
                { id: 'tbs_ot1', name: 'Rix Milano (Hotdog + Olives)', price: 95, cat: 'Others', reactions: { fire: 0, thumb: 0 } },
                // Salads
                { id: 'tbs_sal1', name: 'Make Your Own Salad with Protein', price: 260, cat: 'Salads', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sal2', name: 'Make Your Own Salad', price: 195, cat: 'Salads', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sal3', name: 'Mexican Salad', price: 250, cat: 'Salads', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sal4', name: 'Caesar Salad', price: 250, cat: 'Salads', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sal5', name: 'Chicken Italian Salad', price: 250, cat: 'Salads', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_sal6', name: 'TBS Special Chicken Salad', price: 250, cat: 'Salads', reactions: { fire: 0, thumb: 0 } },
                // Wraps
                { id: 'tbs_wr1', name: 'Chicken Caesar Wrap', price: 210, cat: 'Wraps', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_wr2', name: 'Chicken Mexican Wrap', price: 210, cat: 'Wraps', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_wr3', name: 'Chicken Teriyaki Wrap', price: 210, cat: 'Wraps', reactions: { fire: 0, thumb: 0 } },
                // Well B Salads
                { id: 'tbs_wb1', name: 'Triple S', price: 330, cat: 'Well B Salads', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_wb2', name: 'Go Green', price: 210, cat: 'Well B Salads', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_wb3', name: 'Bresaola', price: 330, cat: 'Well B Salads', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_wb4', name: 'Opa Greece', price: 290, cat: 'Well B Salads', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_wb5', name: 'Sass', price: 380, cat: 'Well B Salads', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_wb6', name: "Mac N' Truff", price: 260, cat: 'Well B Salads', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_wb7', name: "Chk N' Sake", price: 295, cat: 'Well B Salads', reactions: { fire: 0, thumb: 0 } },
                // Healthy & Tasty
                { id: 'tbs_ht1', name: 'Oatmeal Double Chocolate', price: 75, cat: 'Healthy & Tasty', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_ht2', name: 'Oatmeal Apple Cinnamon', price: 75, cat: 'Healthy & Tasty', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_ht3', name: 'Oatmeal Almond Vanilla', price: 75, cat: 'Healthy & Tasty', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_ht4', name: 'Granola Strawberry White Chocolate', price: 75, cat: 'Healthy & Tasty', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_ht5', name: 'Granola Almond Date', price: 75, cat: 'Healthy & Tasty', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_ht6', name: 'Granola Chunky Chocolate', price: 75, cat: 'Healthy & Tasty', reactions: { fire: 0, thumb: 0 } },
                // Gluten Free
                { id: 'tbs_gf1', name: 'Gluten Free Nut & Seed Brittle Bar', price: 100, cat: 'Gluten Free', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_gf2', name: 'Peanut Butter Balls', price: 115, cat: 'Gluten Free', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_gf3', name: 'Gluten Free Chocolate Orange Truffles', price: 115, cat: 'Gluten Free', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_gf4', name: 'Gluten Free Chocolate Truffle', price: 115, cat: 'Gluten Free', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_gf5', name: 'Gluten Free Lemon Biscuits', price: 100, cat: 'Gluten Free', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_gf6', name: 'Gluten Free Cinnamon Biscuits', price: 110, cat: 'Gluten Free', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_gf7', name: 'Gluten Free Orange Biscuits', price: 115, cat: 'Gluten Free', reactions: { fire: 0, thumb: 0 } },
                { id: 'tbs_gf8', name: 'Gluten Free Almond Biscuits', price: 135, cat: 'Gluten Free', reactions: { fire: 0, thumb: 0 } }
            ]
        },

        {
            id: 'cinnabon',
            name: 'Cinnabon',
            category: 'dessert',
            image: 'logos/Cinnabon-logo.webp',
            buildings: ['NS'],
            openingHours: { open: 10, close: 18 },
            priceRange: 'LE 50–120',
            location: 'Main Building Food Court',
            menu: [
                // Baked Goods - Signature Cinnamon Rolls
                { id: 'cin_bg1', name: 'Cinnabon (Classic)', price: 128, cat: 'Baked Goods', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_bg2', name: 'Cinnabon (MiniBon)', price: 91, cat: 'Baked Goods', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_bg3', name: 'Cinnabon (BonBites)', price: 89, cat: 'Baked Goods', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_bg4', name: 'ChocoBon (Classic)', price: 149, cat: 'Baked Goods', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_bg5', name: 'ChocoBon (MiniBon)', price: 99, cat: 'Baked Goods', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_bg6', name: 'ChocoBon (BonBites)', price: 98, cat: 'Baked Goods', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_bg7', name: 'Caramel PecanBon (Classic)', price: 179, cat: 'Baked Goods', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_bg8', name: 'Caramel PecanBon (MiniBon)', price: 122, cat: 'Baked Goods', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_bg9', name: 'Caramel PecanBon (BonBites)', price: 120, cat: 'Baked Goods', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_bg10', name: 'Choco PecanBon (Classic)', price: 180, cat: 'Baked Goods', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_bg11', name: 'Choco PecanBon (MiniBon)', price: 122, cat: 'Baked Goods', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_bg12', name: 'Choco PecanBon (BonBites)', price: 120, cat: 'Baked Goods', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_bg13', name: 'Caramel (Classic)', price: 149, cat: 'Baked Goods', reactions: { fire: 0, thumb: 0 } },
                // Special Treats - Roll On the Go
                { id: 'cin_st1', name: 'Cinnabon', price: 100, cat: 'Special Treats', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_st2', name: 'Caramel', price: 100, cat: 'Special Treats', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_st3', name: 'Choco', price: 100, cat: 'Special Treats', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_st4', name: 'Choco Pecan', price: 138, cat: 'Special Treats', reactions: { fire: 0, thumb: 0 } },
                // Our Combos
                { id: 'cin_cb1', name: 'Mini Combo (Minibon & regular coffee)', price: 148, cat: 'Combos', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_cb2', name: 'Chillatta on the go (Roll-on-the-go & regular chillatta)', price: 175, cat: 'Combos', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_cb3', name: 'Share Bites (4 bonbites & 2 regular coffee)', price: 223, cat: 'Combos', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_cb4', name: 'Double Minis (2 minibon & 2 regular coffee)', price: 284, cat: 'Combos', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_cb5', name: 'Joe on the go (Roll-on-the-go & small coffee)', price: 132, cat: 'Combos', reactions: { fire: 0, thumb: 0 } },
                // Hot Coffee
                { id: 'cin_hc1', name: 'Latte (Small)', price: 73, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc2', name: 'Latte (Regular)', price: 85, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc3', name: 'Latte (Large)', price: 95, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc4', name: 'Cappuccino (Small)', price: 73, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc5', name: 'Cappuccino (Regular)', price: 85, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc6', name: 'Cappuccino (Large)', price: 95, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc7', name: 'Flat white (Regular)', price: 86, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc8', name: 'Mocha (Regular)', price: 92, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc9', name: 'Mocha (Large)', price: 110, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc10', name: 'Americano (Regular)', price: 65, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc11', name: 'Americano (Large)', price: 78, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc12', name: 'Makara Cinnamon Latte (Regular)', price: 87, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc13', name: 'Makara Cinnamon Latte (Large)', price: 115, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc14', name: 'Cinnamon Roll Cappuccino (Regular)', price: 93, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc15', name: 'Cinnamon Roll Latte (Regular)', price: 98, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc16', name: 'Toffee Nut Latte (Regular)', price: 98, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc17', name: 'Espresso (Single)', price: 50, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc18', name: 'Espresso (Double)', price: 67, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc19', name: 'Espresso macchiato', price: 61, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc20', name: 'Espresso con panna', price: 61, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc21', name: 'Turkish coffee (Single)', price: 55, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_hc22', name: 'Turkish coffee (Double)', price: 72, cat: 'Hot Coffee', reactions: { fire: 0, thumb: 0 } },
                // Iced Coffee
                { id: 'cin_ic1', name: 'Makara Cinnamon Latte (Regular)', price: 87, cat: 'Iced Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_ic2', name: 'Makara Cinnamon Latte (Large)', price: 115, cat: 'Iced Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_ic3', name: 'Cinnamon Roll Cold Brew (Regular)', price: 92, cat: 'Iced Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_ic4', name: 'Chocolate Cookies Cold Brew (Regular)', price: 92, cat: 'Iced Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_ic5', name: 'Toffee Nut Cold Brew (Regular)', price: 92, cat: 'Iced Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_ic6', name: 'Cold Brew (Regular)', price: 82, cat: 'Iced Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_ic7', name: 'Iced Latte (Regular)', price: 85, cat: 'Iced Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_ic8', name: 'Iced Latte (Large)', price: 95, cat: 'Iced Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_ic9', name: 'Iced Mocha (Regular)', price: 92, cat: 'Iced Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_ic10', name: 'Iced Mocha (Large)', price: 110, cat: 'Iced Coffee', reactions: { fire: 0, thumb: 0 } },
                // Hot / Iced Chocolate
                { id: 'cin_ch1', name: 'Signature Iced Chocolate (Regular)', price: 92, cat: 'Hot / Iced Chocolate', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_ch2', name: 'Signature Iced Chocolate (Large)', price: 110, cat: 'Hot / Iced Chocolate', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_ch3', name: 'Signature Hot Chocolate (Regular)', price: 98, cat: 'Hot / Iced Chocolate', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_ch4', name: 'Signature Hot Chocolate (Large)', price: 115, cat: 'Hot / Iced Chocolate', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_ch5', name: 'Raspberry Hot Chocolate', price: 140, cat: 'Hot / Iced Chocolate', reactions: { fire: 0, thumb: 0 } },
                // Chillattas - Frozen Blended Beverages
                { id: 'cin_fb1', name: 'Strawberry (Regular)', price: 103, cat: 'Chillattas', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_fb2', name: 'Strawberry (Large)', price: 120, cat: 'Chillattas', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_fb3', name: 'Strawberry Banana (Regular)', price: 103, cat: 'Chillattas', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_fb4', name: 'Strawberry Banana (Large)', price: 120, cat: 'Chillattas', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_fb5', name: 'Tropical Blast (Regular)', price: 103, cat: 'Chillattas', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_fb6', name: 'Tropical Blast (Large)', price: 120, cat: 'Chillattas', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_fb7', name: 'Cappuccino (Regular)', price: 103, cat: 'Chillattas', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_fb8', name: 'Cappuccino (Large)', price: 120, cat: 'Chillattas', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_fb9', name: 'Cookies & Cream (Regular)', price: 103, cat: 'Chillattas', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_fb10', name: 'Cookies & Cream (Large)', price: 120, cat: 'Chillattas', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_fb11', name: 'Caramel Banana (Regular)', price: 103, cat: 'Chillattas', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_fb12', name: 'Caramel Banana (Large)', price: 120, cat: 'Chillattas', reactions: { fire: 0, thumb: 0 } },
                // Lemonattas
                { id: 'cin_lm1', name: 'Plain', price: 61, cat: 'Lemonattas', reactions: { fire: 0, thumb: 0 } },
                { id: 'cin_lm2', name: 'Strawberry - Raspberry', price: 77, cat: 'Lemonattas', reactions: { fire: 0, thumb: 0 } }
            ]
        },
        {
            id: 'metro',
            name: 'Mini Metro',
            category: 'supermarket',
            image: 'logos/metro-logo.png',
            buildings: ['Pharmacy', 'NS'],
            openingHours: { open: 8, close: 20 },
            priceRange: 'LE 10–300',
            location: 'Building S, Level 1',
            menu: [
                { id: 'm1', name: 'Potato Chips', price: 15, cat: 'Snacks', reactions: { fire: 5, thumb: 10 } },
                { id: 'm2', name: 'Milk 1L', price: 45, cat: 'Groceries', reactions: { fire: 2, thumb: 4 } },
                { id: 'm3', name: 'Mineral Water', price: 10, cat: 'Drinks', reactions: { fire: 1, thumb: 8 } }
            ]
        },
        {
            id: 'conita',
            name: 'Conitta',
            category: 'dessert',
            image: 'logos/conitta-logo.webp',
            buildings: ['MainK'],
            openingHours: { open: 8, close: 16 },
            priceRange: 'LE 60–120',
            location: 'Between Pharmacy & K',
            menu: [
                { id: 'con1', name: 'Pizza Cone Mix', price: 75, cat: 'Pizza Cones', reactions: { fire: 50, thumb: 30 } },
                { id: 'con2', name: 'Chicken Cone', price: 70, cat: 'Pizza Cones', reactions: { fire: 20, thumb: 10 } },
                { id: 'con3', name: 'Chocolate Cone', price: 55, cat: 'Desserts', reactions: { fire: 45, thumb: 20 } }
            ]
        },
        {
            id: 'sbarro',
            name: 'Sbarro',
            category: 'food',
            image: 'logos/sbarro-logo.png',
            buildings: ['R'],
            openingHours: { open: 10, close: 17 },
            priceRange: 'LE 80–200',
            location: 'Main Building Food Court',
            menu: [
                { id: 'sb1', name: 'NY Slice Pizza', price: 90, cat: 'Pizza', reactions: { fire: 30, thumb: 20 } },
                { id: 'sb2', name: 'Spaghetti Meatball', price: 110, cat: 'Pasta', reactions: { fire: 15, thumb: 10 } },
                { id: 'sb3', name: 'Caesar Salad', price: 75, cat: 'Salads', reactions: { fire: 10, thumb: 25 } }
            ]
        },
        {
            id: 'manoucheh',
            name: "Man'oucheh",
            category: 'food',
            image: 'logos/manoucheh-logo.png',
            buildings: ['MainK', 'Pharmacy'],
            openingHours: { open: 8, close: 16 },
            priceRange: 'LE 40–100',
            location: 'Building R Square',
            menu: [
                // Main Items (Manakish & Wraps)
                { id: 'man_m1', name: 'Zaatar', price: 75.24, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m2', name: 'Zaatar with Labneh', price: 78.66, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m3', name: 'Zaatar with Mozzarella', price: 85.50, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m4', name: 'Zaatar with Halloumi', price: 92.34, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m5', name: 'Chicken Shawarma', price: 109.44, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m6', name: 'Meat Shawarma', price: 108.30, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m7', name: 'Chicken and Cheese', price: 109.44, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m8', name: 'Chicken Fajita', price: 109.44, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m9', name: 'Lahm Bi Ajeen (Meat with Dough)', price: 85.50, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m10', name: 'Sojouk and Cheese', price: 109.44, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m11', name: 'Philadelphia Steak', price: 108.30, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m12', name: 'Halloumi', price: 92.34, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m13', name: 'Cheese and Turkey Ham', price: 98.04, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m14', name: 'Cheese and Hot Dog (Ketchup & Mayo)', price: 98.04, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m15', name: 'Cheese and Pastrami', price: 98.04, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m16', name: 'Turkey Cheese', price: 103.74, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m17', name: 'Mix Cheese (Halloumi + Mozzarella)', price: 96.90, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m18', name: 'Labneh', price: 79.80, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m19', name: 'Mozzarella Cheese', price: 79.80, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m20', name: 'Special Kofta XXL', price: 139.08, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m21', name: 'Special Chicken XXL', price: 139.08, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m22', name: 'Special Tuna XXL', price: 139.08, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_m23', name: 'Special Sojouk XXL', price: 139.08, cat: 'Main Items (Manakish & Wraps)', reactions: { fire: 0, thumb: 0 } },
                // Pizza
                { id: 'man_p1', name: 'Pizza Virgin', price: 108.30, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_p2', name: 'Pizza Regular', price: 120.84, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_p3', name: 'Pizza Extra', price: 132.24, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_p4', name: 'Pizza Extreme', price: 132.24, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_p5', name: 'Chicken Pizza', price: 136.80, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_p6', name: 'Tuna Pizza', price: 136.80, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_p7', name: 'Spinach Pizza', price: 85.50, cat: 'Pizza', reactions: { fire: 0, thumb: 0 } },
                // Small Pastries (Mini)
                { id: 'man_sp1', name: 'Mini Zaatar', price: 18.24, cat: 'Small Pastries (Mini)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_sp2', name: 'Mini Sfeeha (Meat)', price: 18.24, cat: 'Small Pastries (Mini)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_sp3', name: 'Mini Spinach', price: 18.24, cat: 'Small Pastries (Mini)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_sp4', name: 'Mini Halloumi', price: 18.24, cat: 'Small Pastries (Mini)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_sp5', name: 'Mini Hot Dog', price: 18.24, cat: 'Small Pastries (Mini)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_sp6', name: 'Mini Muhammara and Cheese', price: 18.24, cat: 'Small Pastries (Mini)', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_sp7', name: 'Small Pizza', price: 18.24, cat: 'Small Pastries (Mini)', reactions: { fire: 0, thumb: 0 } },
                // Drinks
                { id: 'man_d1', name: 'Cola', price: 20, cat: 'Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'man_d2', name: 'Small Mineral Water', price: 10, cat: 'Drinks', reactions: { fire: 0, thumb: 0 } }
            ]
        },
        {
            id: 'gyro',
            name: 'Gyro',
            category: 'food',
            image: 'logos/gyro-logo.jpg',
            buildings: ['R'],
            openingHours: { open: 11, close: 18 },
            priceRange: 'LE 60–130',
            location: 'Building S Plaza',
            menu: [
                // GYROS
                { id: 'gy_g1', name: 'Shawarma (Gyro)', price: 130, cat: 'Gyros', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_g2', name: 'Shish (Souvlaki)', price: 130, cat: 'Gyros', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_g3', name: 'Crispy Strips', price: 130, cat: 'Gyros', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_g4', name: 'Beef Patty (Bifteki)', price: 130, cat: 'Gyros', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_g5', name: 'Kofta', price: 130, cat: 'Gyros', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_g6', name: 'Hot Dog', price: 100, cat: 'Gyros', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_g7', name: 'Pita Fries', price: 70, cat: 'Gyros', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_g8', name: 'Pita Cheese Fries', price: 80, cat: 'Gyros', reactions: { fire: 0, thumb: 0 } },
                // MEALS
                { id: 'gy_m1', name: 'Grilled Chicken', price: 180, cat: 'Meals', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_m2', name: 'Crispy Strips', price: 180, cat: 'Meals', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_m3', name: 'Gyro Mix', price: 200, cat: 'Meals', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_m4', name: 'Kofta', price: 180, cat: 'Meals', reactions: { fire: 0, thumb: 0 } },
                // BURGERS
                { id: 'gy_b1', name: 'Classic Burger', price: 135, cat: 'Burgers', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_b2', name: 'Cheese Burger', price: 145, cat: 'Burgers', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_b3', name: 'Mushroom and Cheese Burger', price: 160, cat: 'Burgers', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_b4', name: 'Chicken Burger', price: 135, cat: 'Burgers', reactions: { fire: 0, thumb: 0 } },
                // OTHER
                { id: 'gy_o1', name: 'Fries Gyro (Packet)', price: 40, cat: 'Other', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_o2', name: 'Honey Mustard Fries', price: 50, cat: 'Other', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_o3', name: 'Cheese Fries', price: 50, cat: 'Other', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_o4', name: 'Crispyro', price: 130, cat: 'Other', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_o5', name: 'Ranchiro', price: 105, cat: 'Other', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_o6', name: 'Chillo', price: 105, cat: 'Other', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_o7', name: 'Buffalo Wings', price: 90, cat: 'Other', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_o8', name: 'Rizo', price: 110, cat: 'Other', reactions: { fire: 0, thumb: 0 } },
                // EXTRA
                { id: 'gy_e1', name: 'Extra Sauce', price: 15, cat: 'Extra', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_e2', name: 'Extra Mushroom', price: 25, cat: 'Extra', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_e3', name: 'Extra Jalapeno', price: 15, cat: 'Extra', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_e4', name: 'Extra Chicken', price: 55, cat: 'Extra', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_e5', name: 'Extra Burger', price: 65, cat: 'Extra', reactions: { fire: 0, thumb: 0 } },
                { id: 'gy_e6', name: 'Extra Cheese', price: 20, cat: 'Extra', reactions: { fire: 0, thumb: 0 } }
            ]
        },
        {
            id: 'farghaly',
            name: 'Farghaly',
            category: 'drinks',
            image: 'logos/farghaly-logo.png',
            buildings: ['NS'],
            openingHours: { open: 9, close: 19 },
            priceRange: 'LE 20–70',
            location: 'Main Building Entrance',
            menu: [
                // Juices
                { id: 'fgh_j1', name: 'Orange', price: 20, cat: 'Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_j2', name: 'Carrot + Orange', price: 30, cat: 'Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_j3', name: 'Cantaloupe', price: 20, cat: 'Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_j4', name: 'Guava', price: 20, cat: 'Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_j5', name: 'Strawberry', price: 20, cat: 'Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_j6', name: 'Tangerine', price: 20, cat: 'Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_j7', name: 'Watermelon', price: 20, cat: 'Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_j8', name: 'Mango', price: 30, cat: 'Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_j9', name: 'Banana', price: 20, cat: 'Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_j10', name: 'Pomegranate', price: 20, cat: 'Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_j11', name: 'Lemon', price: 20, cat: 'Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_j12', name: 'Lemon Mint', price: 25, cat: 'Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_j13', name: 'Lemon Mint + 7Up', price: 30, cat: 'Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_j14', name: 'Prickly Pear', price: 25, cat: 'Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_j15', name: 'Dates with Milk', price: 30, cat: 'Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_j16', name: 'Peach', price: 30, cat: 'Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_j17', name: 'Pineapple', price: 35, cat: 'Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_j18', name: 'Apple', price: 35, cat: 'Juices', reactions: { fire: 0, thumb: 0 } },
                // Smoothies
                { id: 'fgh_s1', name: 'Mango', price: 40, cat: 'Smoothies', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_s2', name: 'Watermelon', price: 40, cat: 'Smoothies', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_s3', name: 'Kiwi', price: 40, cat: 'Smoothies', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_s4', name: 'Lemon', price: 40, cat: 'Smoothies', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_s5', name: 'Pineapple', price: 40, cat: 'Smoothies', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_s6', name: 'Cherry', price: 40, cat: 'Smoothies', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_s7', name: 'Peach', price: 40, cat: 'Smoothies', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_s8', name: 'Caramel', price: 40, cat: 'Smoothies', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_s9', name: 'Apple', price: 45, cat: 'Smoothies', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_s10', name: 'Mix Smoothie', price: 45, cat: 'Smoothies', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_s11', name: 'Chocolate Banana Smoothie', price: 45, cat: 'Smoothies', reactions: { fire: 0, thumb: 0 } },
                // Diet Mixes
                { id: 'fgh_dm1', name: 'Kiwi + Pineapple', price: 40, cat: 'Diet Mixes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_dm2', name: 'Apple + Pineapple', price: 40, cat: 'Diet Mixes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_dm3', name: 'Carrot + Beet', price: 40, cat: 'Diet Mixes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_dm4', name: 'Pomegranate + Beet', price: 40, cat: 'Diet Mixes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_dm5', name: 'Peach + Orange', price: 40, cat: 'Diet Mixes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_dm6', name: 'Carrot + Orange', price: 40, cat: 'Diet Mixes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_dm7', name: 'Pineapple + Orange', price: 40, cat: 'Diet Mixes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_dm8', name: 'Kiwi + Orange', price: 40, cat: 'Diet Mixes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_dm9', name: 'Apple + Orange', price: 40, cat: 'Diet Mixes', reactions: { fire: 0, thumb: 0 } },
                // Mango Mixes
                { id: 'fgh_mm1', name: 'Mango Farghaly', price: 30, cat: 'Mango Mixes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_mm2', name: 'Hawaii (Mango + Banana pieces)', price: 40, cat: 'Mango Mixes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_mm3', name: 'Romeo & Juliet (Mango + Pomegranate)', price: 40, cat: 'Mango Mixes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_mm4', name: 'Ads (Mango + Ice Cream + Banana)', price: 40, cat: 'Mango Mixes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_mm5', name: 'Mango Pineapple Juice', price: 40, cat: 'Mango Mixes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_mm6', name: 'Mango Peach Juice', price: 40, cat: 'Mango Mixes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_mm7', name: 'Mango Watermelon Juice', price: 40, cat: 'Mango Mixes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_mm8', name: 'Mango Chunks', price: 40, cat: 'Mango Mixes', reactions: { fire: 0, thumb: 0 } },
                // Vegetable Juices
                { id: 'fgh_vj1', name: 'Arugula', price: 25, cat: 'Vegetable Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_vj2', name: 'Carrot', price: 25, cat: 'Vegetable Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_vj3', name: 'Kiwi', price: 50, cat: 'Vegetable Juices', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_vj4', name: 'Avocado', price: 55, cat: 'Vegetable Juices', reactions: { fire: 0, thumb: 0 } },
                // Salads
                { id: 'fgh_sa1', name: 'Fruit Salad Box', price: 50, cat: 'Salads', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_sa2', name: 'Fruit Salad Cup', price: 40, cat: 'Salads', reactions: { fire: 0, thumb: 0 } },
                // Yogurt
                { id: 'fgh_yg1', name: 'Plain Yogurt', price: 25, cat: 'Yogurt', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_yg2', name: 'Fruit Yogurt', price: 35, cat: 'Yogurt', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_yg3', name: 'Honey Yogurt', price: 35, cat: 'Yogurt', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_yg4', name: 'Berry Yogurt', price: 35, cat: 'Yogurt', reactions: { fire: 0, thumb: 0 } },
                // Chocolates
                { id: 'fgh_ch1', name: 'Borio', price: 40, cat: 'Chocolates', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_ch2', name: 'Oreo', price: 50, cat: 'Chocolates', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_ch3', name: 'Kit Kat', price: 55, cat: 'Chocolates', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_ch4', name: 'Borio + Kit Kat', price: 55, cat: 'Chocolates', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_ch5', name: 'Borio + Peanuts', price: 55, cat: 'Chocolates', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_ch6', name: 'Snickers', price: 55, cat: 'Chocolates', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_ch7', name: 'M&M\'s', price: 50, cat: 'Chocolates', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_ch8', name: 'Hohos', price: 45, cat: 'Chocolates', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_ch9', name: 'Twinkies', price: 45, cat: 'Chocolates', reactions: { fire: 0, thumb: 0 } },
                // Milkshakes
                { id: 'fgh_ms1', name: 'Vanilla', price: 40, cat: 'Milkshakes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_ms2', name: 'Chocolate', price: 40, cat: 'Milkshakes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_ms3', name: 'Nutella', price: 40, cat: 'Milkshakes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_ms4', name: 'Oreo', price: 40, cat: 'Milkshakes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_ms5', name: 'Kiwi', price: 40, cat: 'Milkshakes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_ms6', name: 'Watermelon', price: 40, cat: 'Milkshakes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_ms7', name: 'Mango', price: 40, cat: 'Milkshakes', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_ms8', name: 'Strawberry', price: 40, cat: 'Milkshakes', reactions: { fire: 0, thumb: 0 } },
                // Ice Coffee
                { id: 'fgh_ic1', name: 'Ice Mocha', price: 45, cat: 'Ice Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_ic2', name: 'Chocolate Ice Mocha', price: 50, cat: 'Ice Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_ic3', name: 'Caramel Ice Mocha', price: 50, cat: 'Ice Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_ic4', name: 'Ice Latte', price: 50, cat: 'Ice Coffee', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_ic5', name: 'Borio Mocha', price: 50, cat: 'Ice Coffee', reactions: { fire: 0, thumb: 0 } },
                // Nuts
                { id: 'fgh_nt1', name: 'Peanuts (Chocolate / Vanilla)', price: 50, cat: 'Nuts', reactions: { fire: 0, thumb: 0 } },
                // Miscellaneous
                { id: 'fgh_mi1', name: 'Mineral Water', price: 7, cat: 'Miscellaneous', reactions: { fire: 0, thumb: 0 } },
                { id: 'fgh_mi2', name: 'Hummus El Sham', price: 25, cat: 'Miscellaneous', reactions: { fire: 0, thumb: 0 } }
            ]
        },
        {
            id: 'batates-and-co',
            name: "Batates'N Zalabya",
            category: 'food',
            image: 'logos/batates-logo.png',
            buildings: ['NS', 'R'],
            openingHours: { open: 8, close: 17 },
            priceRange: 'LE 30–90',
            location: 'Building K Garden',
            menu: [
                // Corn Dog
                { id: 'bz_cd1', name: 'Big Corn Dog', price: 120, cat: 'Corn Dog', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_cd2', name: 'Corn Dog', price: 55, cat: 'Corn Dog', reactions: { fire: 0, thumb: 0 } },
                // Sandwiches
                { id: 'bz_sw1', name: 'Big Chicken Combo', price: 165, cat: 'Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_sw2', name: 'Big Chicken', price: 120, cat: 'Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_sw3', name: 'Large Strips', price: 120, cat: 'Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_sw4', name: 'Medium Strips', price: 70, cat: 'Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_sw5', name: 'Big Dog Sandwich', price: 120, cat: 'Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_sw6', name: 'Corn Dog Sandwich', price: 70, cat: 'Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_sw7', name: 'Hot Dog Sandwich', price: 65, cat: 'Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_sw8', name: 'Fries Sandwich', price: 45, cat: 'Sandwiches', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_sw9', name: 'Small Fries Sandwich', price: 35, cat: 'Sandwiches', reactions: { fire: 0, thumb: 0 } },
                // Fries (Batates)
                { id: 'bz_f1', name: 'Jumbo Fries', price: 65, cat: 'Fries (Batates)', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_f2', name: 'Large Fries', price: 50, cat: 'Fries (Batates)', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_f3', name: 'Medium Fries', price: 40, cat: 'Fries (Batates)', reactions: { fire: 0, thumb: 0 } },
                // Zalabya
                { id: 'bz_z1', name: 'Classic Small Zalabya (Honey)', price: 40, cat: 'Zalabya', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_z2', name: 'Zalabya Plus Small', price: 50, cat: 'Zalabya', reactions: { fire: 0, thumb: 0 } },
                // Snacks
                { id: 'bz_sn1', name: 'Strips Snack (Fries and Strips)', price: 120, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_sn2', name: 'Sambousek Snack (Fries and Sambousek)', price: 105, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_sn3', name: 'Sambousek Box (8 pieces)', price: 120, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                // Drinks
                { id: 'bz_d1', name: 'Cans', price: 20, cat: 'Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_d2', name: 'Water', price: 10, cat: 'Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_d3', name: 'Sun Top', price: 15, cat: 'Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_d4', name: 'Coffee Shake', price: 30, cat: 'Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_d5', name: 'Chocolate Drink', price: 25, cat: 'Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_d6', name: 'Mango Juice', price: 50, cat: 'Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_d7', name: 'Juices (Orange / Strawberry / Guava)', price: 40, cat: 'Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_d8', name: 'Juhayna Pure', price: 25, cat: 'Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_d9', name: 'Juhayna Pure Mango Peach', price: 30, cat: 'Drinks', reactions: { fire: 0, thumb: 0 } },
                // Extra Sauces
                { id: 'bz_es1', name: 'Extra Sambousek', price: 15, cat: 'Extra Sauces', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_es2', name: 'Cheddar Cheese', price: 10, cat: 'Extra Sauces', reactions: { fire: 0, thumb: 0 } },
                { id: 'bz_es3', name: 'Sauces (Dragon Hot / 1000 Island / Texas)', price: 10, cat: 'Extra Sauces', reactions: { fire: 0, thumb: 0 } }
            ]
        },
        {
            id: 'exmart',
            name: 'Ex Mart',
            category: 'supermarket',
            image: 'logos/ExMart-logo.png',
            buildings: ['R'],
            openingHours: { open: 8, close: 21 },
            priceRange: 'LE 5–250',
            location: 'Building N, Ground Floor',
            menu: [
                { id: 'ex1', name: 'Water 600ml', price: 10, cat: 'Beverages', reactions: { fire: 10, thumb: 15 } },
                { id: 'ex2', name: 'Notebook', price: 85, cat: 'Essentials', reactions: { fire: 2, thumb: 4 } },
                { id: 'ex3', name: 'Instant Noodles', price: 20, cat: 'Snacks', reactions: { fire: 25, thumb: 10 } }
            ]
        },
        {
            id: 'lafraise',
            name: 'La Fraise',
            category: 'supermarket',
            image: 'logos/lafraise-logo.jpg',
            buildings: ['Pharmacy', 'NS'],
            openingHours: { open: 10, close: 18 },
            priceRange: 'LE 5–55',
            location: 'Main Building, Upper Floor',
            menu: [
                // Hot Drinks
                { id: 'lf_hd1', name: 'Nestle', price: 30, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_hd2', name: 'Gold', price: 30, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_hd3', name: 'Cadbury Hot Chocolate', price: 30, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_hd4', name: 'Bonjour Chocolate', price: 30, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_hd5', name: 'Turkish Coffee', price: 25, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_hd6', name: 'Rich', price: 30, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_hd7', name: 'Nestle Nescafe 3x1', price: 25, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_hd8', name: 'Nestle Nescafe 2x1', price: 25, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_hd9', name: 'Ali Café 3x1', price: 30, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_hd10', name: 'Ali Café 2x1', price: 30, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_hd11', name: 'Arabian Coffee', price: 30, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_hd12', name: 'Bonjour', price: 25, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_hd13', name: 'Espresso', price: 25, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_hd14', name: 'Gold Black', price: 20, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_hd15', name: 'Ahmed Tea', price: 20, cat: 'Hot Drinks', reactions: { fire: 0, thumb: 0 } },
                // Tea
                { id: 'lf_t1', name: 'Green Tea Mint', price: 20, cat: 'Tea', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_t2', name: 'Green Tea Apple', price: 20, cat: 'Tea', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_t3', name: 'Green Tea', price: 15, cat: 'Tea', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_t4', name: 'Lipton Tea', price: 15, cat: 'Tea', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_t5', name: 'Lipton Mint', price: 15, cat: 'Tea', reactions: { fire: 0, thumb: 0 } },
                // Cold Drinks
                { id: 'lf_cd1', name: 'Mineral Water', price: 10, cat: 'Cold Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_cd2', name: 'Pepsi Cola', price: 25, cat: 'Cold Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_cd3', name: 'Juice', price: 15, cat: 'Cold Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_cd4', name: 'Mix Juice', price: 20, cat: 'Cold Drinks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_cd5', name: 'Sun Top', price: 20, cat: 'Cold Drinks', reactions: { fire: 0, thumb: 0 } },
                // Snacks
                { id: 'lf_sn1_s', name: 'Chipsy (Small)', price: 15, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_sn1_l', name: 'Chipsy (Large)', price: 20, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_sn2', name: 'Chipsy Forno', price: 20, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_sn3', name: 'Fairouz', price: 25, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_sn4', name: 'Bake Rolls Medium', price: 15, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_sn5', name: 'Bake Rolls Large', price: 20, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_sn6', name: 'Domty Sandwich', price: 20, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_sn7', name: 'OREO Medium', price: 20, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_sn8', name: 'OREO Large', price: 25, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_sn9', name: 'TUC Biscuit', price: 15, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_sn10', name: 'Fingers Biscuit', price: 20, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_sn11', name: 'Doritos', price: 15, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_sn12', name: 'Cheetos', price: 20, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_sn13', name: 'Trident Gum', price: 15, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_sn14', name: 'Halls', price: 25, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_sn15', name: 'Mentos', price: 20, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_sn16', name: 'Chiclets', price: 15, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_sn17', name: 'Tissues', price: 5, cat: 'Snacks', reactions: { fire: 0, thumb: 0 } },
                // Chocolates
                { id: 'lf_ch1', name: 'Galaxy', price: 55, cat: 'Chocolates', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_ch2', name: 'Snickers', price: 55, cat: 'Chocolates', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_ch3', name: 'Bounty', price: 55, cat: 'Chocolates', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_ch4', name: 'Mars', price: 55, cat: 'Chocolates', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_ch5', name: 'Twix', price: 55, cat: 'Chocolates', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_ch6', name: 'Oreo', price: 45, cat: 'Chocolates', reactions: { fire: 0, thumb: 0 } },
                { id: 'lf_ch7', name: 'Flutes', price: 30, cat: 'Chocolates', reactions: { fire: 0, thumb: 0 } }
            ]
        }
    ]
};

/**
 * State Management
 */
let currentState = {
    currentPage: 'home',
    activeCategory: 'all',
    activeBuilding: '',
    selectedPlace: null,
    history: ['home']
};

/**
 * Router & Navigation
 */
const router = {
    navigate(page, params = {}) {
        try {
            console.log(`Navigating to: ${page}`, params);
            currentState.currentPage = page;
            if (page === 'detail') {
                currentState.selectedPlace = params.placeId;
            }

            if (currentState.history[currentState.history.length - 1] !== page) {
                currentState.history.push(page);
            }

            this.updateUI();
            window.scrollTo(0, 0);
        } catch (error) {
            console.error('Navigation error:', error);
        }
    },

    goHome() {
        currentState.activeCategory = 'all';
        currentState.activeBuilding = '';

        document.querySelectorAll('.filter-chip').forEach(chip => {
            if (chip.getAttribute('data-category') === 'all') chip.classList.add('active');
            else chip.classList.remove('active');
        });

        this.navigate('home');
    },

    back() {
        if (currentState.history.length > 1) {
            currentState.history.pop();
            const prevPage = currentState.history[currentState.history.length - 1];
            currentState.currentPage = prevPage;
            this.updateUI();
        } else {
            this.goHome();
        }
    },

    updateUI() {
        try {
            // Toggle sections via display style for maximum compatibility
            document.querySelectorAll('.page-section').forEach(section => {
                section.style.display = 'none';
            });

            const activeSection = document.getElementById(`page-${currentState.currentPage}`);
            if (activeSection) {
                activeSection.style.display = 'block';
                console.log(`Section shown: page-${currentState.currentPage}`);
            } else {
                console.error(`Page section not found: page-${currentState.currentPage}`);
                const homeSection = document.getElementById('page-home');
                if (homeSection) homeSection.style.display = 'block';
            }

            // Update nav styling
            document.querySelectorAll('.nav-item').forEach(item => {
                if (item.getAttribute('data-page') === currentState.currentPage) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });

            // Specific page logic
            if (currentState.currentPage === 'home') {
                renderGrid('home-grid', filterData());
            } else if (currentState.currentPage === 'nearme') {
                renderGrid('nearme-grid', filterData());
            } else if (currentState.currentPage === 'detail') {
                renderDetail();
            }

            if (window.lucide && typeof lucide.createIcons === 'function') {
                lucide.createIcons();
            }
        } catch (error) {
            console.error('UI Update error:', error);
            showError(`UI Error: ${error.message}`);
        }
    }
};

/**
 * Theme Manager
 */
const themeManager = {
    isDark: false,
    toggle() {
        this.isDark = !this.isDark;
        document.body.classList.toggle('dark-theme', this.isDark);

        const iconMobile = document.getElementById('theme-icon-mobile');
        const iconDesktop = document.getElementById('theme-icon-desktop');

        if (this.isDark) {
            if (iconMobile) iconMobile.setAttribute('data-lucide', 'sun');
            if (iconDesktop) iconDesktop.setAttribute('data-lucide', 'moon');
        } else {
            if (iconMobile) iconMobile.setAttribute('data-lucide', 'moon');
            if (iconDesktop) iconDesktop.setAttribute('data-lucide', 'sun');
        }
        if (window.lucide) lucide.createIcons();
    }
};

/**
 * Rendering Logic
 */
function renderGrid(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container not found: ${containerId}`);
        return;
    }

    if (!items || items.length === 0) {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; opacity: 0.5;">No places found.</div>';
        return;
    }

    container.innerHTML = items.map(place => {
        const isOpen = checkIfOpen(place.openingHours);
        return `
            <div class="place-card" onclick="router.navigate('detail', { placeId: '${place.id}' })">
                <div class="logo-circle">
                    <img src="${place.image}" alt="${place.name}" class="place-img" onerror="this.src='logos/miu-logo.png'">
                </div>
                <div class="place-content">
                    <div class="place-header">
                        <h3 class="place-title">${place.name}</h3>
                        <span class="status-badge ${isOpen ? 'status-open' : 'status-closed'}">${isOpen ? 'Open' : 'Closed'}</span>
                    </div>
                    <div class="place-info" style="margin-bottom: 4px;">
                        ${getBusynessIndicator(place.id)}
                    </div>
                    <div class="price-range" style="font-size: 12px;">${place.priceRange}</div>
                </div>
            </div>
        `;
    }).join('');
}

function renderDetail() {
    const place = DATA.places.find(p => p.id === currentState.selectedPlace);
    const container = document.getElementById('detail-content');
    if (!container) return;

    if (!place) {
        container.innerHTML = '<div style="padding: 40px; text-align: center;">Place not found.</div>';
        return;
    }

    const isOpen = checkIfOpen(place.openingHours);
    const menuCats = ['All', ...new Set(place.menu.map(m => m.cat || 'Other'))];

    container.innerHTML = `
        <div class="hero" style="text-align: left; padding-top: 0;">
            <div style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 30px;">
                <div style="width: 100px; height: 100px; min-width: 100px; border-radius: 50%; background: #fdfdfd; border: 1px solid var(--nav-border); display: flex; align-items: center; justify-content: center; padding: 0; overflow: hidden;">
                    <img src="${place.image}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='logos/miu-logo.png'">
                </div>
                <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 4px; flex-wrap: wrap;">
                        <h1 style="font-size: 28px; margin: 0; line-height: 1.1;">${place.name}</h1>
                        ${((() => {
                            const lastVoted = localStorage.getItem(`lastVoted_${place.id}`);
                            const voteDisabled = lastVoted && (Date.now() - parseInt(lastVoted)) < 10 * 60 * 1000;
                            return voteDisabled 
                                ? `<button class="btn btn-primary" style="padding: 10px 28px; font-size: 15px; border-radius: 50px; background-color: var(--gray-medium); color: var(--text-color); border: 1px solid var(--gray-medium); opacity: 0.6; cursor: not-allowed;" disabled>Voted</button>`
                                : `<button id="vote-btn-${place.id}" class="btn btn-primary" style="padding: 10px 28px; font-size: 15px; border-radius: 50px;" onclick="openVoteModal('${place.id}')">Vote</button>`;
                        })())}
                    </div>
                    <div style="opacity: 0.8; margin-bottom: 12px; display: flex; flex-direction: column; gap: 6px;">
                        <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                            <span>${place.category.toUpperCase()}</span> ${getBusynessIndicator(place.id)}
                        </div>
                        <div>
                            <span class="status-badge ${isOpen ? 'status-open' : 'status-closed'}">${isOpen ? 'Open now' : 'Closed'}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="search-container" style="margin-bottom: 24px; max-width: 100%; margin-left:0;">
                <i data-lucide="search" class="search-icon"></i>
                <input type="text" class="main-search" placeholder="Search menu items..." oninput="handleMenuSearch(this.value)">
            </div>

            <div class="category-filters" id="menu-category-filters">
                ${menuCats.map(cat => `
                    <div class="filter-chip ${cat === 'All' ? 'active' : ''}" 
                         data-menu-cat="${cat}" 
                         onclick="filterMenuByCategory('${cat}')">${cat}</div>
                `).join('')}
            </div>

            <div id="menu-items-list" style="margin-top: 16px;">
                ${((() => {
            const hr = new Date().getHours();
            const pizzaUnavailable = hr >= 13 || hr < 7;
            const sorted = [...place.menu].sort((a, b) => {
                const aDown = pizzaUnavailable && a.cat === 'Pizza' ? 1 : 0;
                const bDown = pizzaUnavailable && b.cat === 'Pizza' ? 1 : 0;
                return aDown - bDown;
            });
            return sorted.map(item => renderMenuItem(item)).join('');
        })())}
            </div>
        </div>
    `;
    if (window.lucide) lucide.createIcons();
}

function filterMenuByCategory(cat) {
    const place = DATA.places.find(p => p.id === currentState.selectedPlace);
    if (!place) return;

    document.querySelectorAll('#menu-category-filters .filter-chip').forEach(chip => {
        if (chip.getAttribute('data-menu-cat') === cat) chip.classList.add('active');
        else chip.classList.remove('active');
    });

    const hr = new Date().getHours();
    const pizzaUnavailable = hr >= 13 || hr < 7;
    const filtered = cat === 'All' ? [...place.menu] : place.menu.filter(m => m.cat === cat);
    const sorted = filtered.sort((a, b) => {
        const aDown = pizzaUnavailable && a.cat === 'Pizza' ? 1 : 0;
        const bDown = pizzaUnavailable && b.cat === 'Pizza' ? 1 : 0;
        return aDown - bDown;
    });
    const container = document.getElementById('menu-items-list');
    if (container) {
        container.innerHTML = sorted.map(item => renderMenuItem(item)).join('');
    }
}

function renderMenuItem(item) {
    const currentHour = new Date().getHours();
    const isPizzaUnavailable = item.cat === 'Pizza' && (currentHour >= 13 || currentHour < 7);
    return `
        <div class="menu-item${isPizzaUnavailable ? ' item-unavailable' : ''}">
            <div class="menu-item-info">
                <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <h4 style="margin:0;">${item.name}</h4>
                    ${isPizzaUnavailable ? '<span class="badge-unavailable">Not Available</span>' : ''}
                </div>
                <div class="price-range">LE ${item.price}</div>
            </div>
            <div class="menu-item-actions">
                <div class="reactions">
                    <button class="reaction-btn" onclick="react('${item.id}', 'fire', event)">
                        🔥 <span class="reaction-count" id="count-${item.id}-fire">${item.reactions.fire}</span>
                    </button>
                    <button class="reaction-btn" onclick="react('${item.id}', 'thumb', event)">
                        👍 <span class="reaction-count" id="count-${item.id}-thumb">${item.reactions.thumb}</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Helper Logic
 */
function checkIfOpen(hours) {
    if (!hours) return false;
    const now = new Date();
    const currentHour = now.getHours();
    return currentHour >= hours.open && currentHour < hours.close;
}

function filterData() {
    let filtered = DATA.places || [];
    if (currentState.activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentState.activeCategory);
    }
    if (currentState.activeBuilding) {
        filtered = filtered.filter(p => p.buildings.includes(currentState.activeBuilding));
    }
    return filtered;
}

function filterByCategory(cat) {
    currentState.activeCategory = cat;
    document.querySelectorAll('.filter-chip').forEach(chip => {
        if (chip.getAttribute('data-category') === cat) chip.classList.add('active');
        else chip.classList.remove('active');
    });
    renderGrid('home-grid', filterData());
    if (window.lucide) lucide.createIcons();
}

function getBusynessIndicator(placeId) {
    const statusData = JSON.parse(localStorage.getItem(`placeStatus_${placeId}`) || 'null');
    let activeStatus = 'green';
    
    if (statusData) {
        const elapsed = Date.now() - statusData.timestamp;
        if (statusData.status === 'red' && elapsed < 60 * 60 * 1000) {
            activeStatus = 'red';
        } else if (statusData.status === 'yellow' && elapsed < 30 * 60 * 1000) {
            activeStatus = 'yellow';
        }
    }
    
    let text, cssClass;
    if (activeStatus === 'red') {
        text = 'Busy';
        cssClass = 'status-red';
    } else if (activeStatus === 'yellow') {
        text = 'Bit Busy';
        cssClass = 'status-yellow';
    } else {
        text = 'Safe to Go';
        cssClass = 'status-green';
    }
    
    return `
        <div class="busyness-indicator ${cssClass}">
            <div class="busyness-dot"></div>
            <span class="busyness-text">${text}</span>
        </div>
    `;
}

let currentVotePlaceId = null;

function openVoteModal(placeId) {
    const lastVoted = localStorage.getItem(`lastVoted_${placeId}`);
    if (lastVoted && (Date.now() - parseInt(lastVoted)) < 10 * 60 * 1000) {
        return;
    }
    currentVotePlaceId = placeId;
    const modal = document.getElementById('vote-modal');
    if (modal) {
        modal.classList.add('active');
        document.querySelectorAll('input[name="busyness-vote"]').forEach(r => r.checked = false);
    }
}

function closeVoteModal() {
    const modal = document.getElementById('vote-modal');
    if (modal) {
        modal.classList.remove('active');
    }
    currentVotePlaceId = null;
}

function submitVote() {
    if (!currentVotePlaceId) return;
    const selected = document.querySelector('input[name="busyness-vote"]:checked');
    if (!selected) {
        alert("Please select an option.");
        return;
    }
    
    const voteType = selected.value; // 'busy' or 'not-busy'
    
    let votes = JSON.parse(localStorage.getItem(`votes_${currentVotePlaceId}`) || '[]');
    votes.push({ timestamp: Date.now(), type: voteType });
    localStorage.setItem(`votes_${currentVotePlaceId}`, JSON.stringify(votes));
    
    localStorage.setItem(`lastVoted_${currentVotePlaceId}`, Date.now().toString());
    const placeIdToUpdate = currentVotePlaceId;
    
    evaluateBusyness(placeIdToUpdate);
    
    closeVoteModal();
    
    if (currentState.currentPage === 'detail' && currentState.selectedPlace === placeIdToUpdate) {
        renderDetail();
    }
    renderGrid('home-grid', filterData());
    if (window.lucide) lucide.createIcons();
}

function evaluateBusyness(placeId) {
    const votes = JSON.parse(localStorage.getItem(`votes_${placeId}`) || '[]');
    const oneHourAgo = Date.now() - 60 * 60 * 1000;
    
    const recentBusyVotes = votes.filter(v => v.timestamp >= oneHourAgo && v.type === 'busy').length;
    
    const currentStatus = JSON.parse(localStorage.getItem(`placeStatus_${placeId}`) || 'null');
    let newStatus = null;
    
    if (recentBusyVotes >= 12) {
        newStatus = { status: 'red', timestamp: Date.now() };
    } else if (recentBusyVotes >= 8) {
        if (!currentStatus || currentStatus.status !== 'red' || (Date.now() - currentStatus.timestamp) >= 60 * 60 * 1000) {
            newStatus = { status: 'yellow', timestamp: Date.now() };
        }
    }
    
    if (newStatus) {
        localStorage.setItem(`placeStatus_${placeId}`, JSON.stringify(newStatus));
    }
}

function handleGlobalSearch(query) {
    const q = (query || '').toLowerCase();
    const filtered = (DATA.places || []).filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.menu || []).some(m => m.name.toLowerCase().includes(q))
    );
    renderGrid('home-grid', filtered);
    if (window.lucide) lucide.createIcons();
}

function handleMenuSearch(query) {
    const q = (query || '').toLowerCase();
    const place = DATA.places.find(p => p.id === currentState.selectedPlace);
    if (!place) return;
    const filtered = (place.menu || []).filter(m => m.name.toLowerCase().includes(q));
    const container = document.getElementById('menu-items-list');
    if (container) {
        container.innerHTML = filtered.map(item => renderMenuItem(item)).join('');
    }
}

function react(itemId, type, event) {
    event.stopPropagation();
    const countSpan = document.getElementById(`count-${itemId}-${type}`);
    if (!countSpan) return;
    let count = parseInt(countSpan.innerText) || 0;
    count++;
    countSpan.innerText = count;
    countSpan.parentElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        countSpan.parentElement.style.transform = 'scale(1)';
    }, 200);
}

function surpriseMe() {
    try {
        const allItems = DATA.places.flatMap(p => (p.menu || []).map(m => ({ ...m, placeId: p.id, placeName: p.name })));
        if (allItems.length === 0) return;

        const randomItem = allItems[Math.floor(Math.random() * allItems.length)];
        const modal = document.getElementById('surprise-modal');
        const message = document.getElementById('modal-message');
        const confirmBtn = document.getElementById('modal-confirm-btn');

        if (message) message.innerHTML = `How about some <b>"${randomItem.name}"</b> from ${randomItem.placeName}?`;
        if (confirmBtn) {
            confirmBtn.onclick = () => {
                closeModals();
                router.navigate('detail', { placeId: randomItem.placeId });
            };
        }
        if (modal) modal.classList.add('active');
    } catch (e) {
        console.error('Surprise Me error:', e);
    }
}

function closeModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
}

function openBuildingModal() {
    const modal = document.getElementById('building-modal');
    if (modal) modal.classList.add('active');
}

function selectBuilding(building) {
    currentState.activeBuilding = building;
    currentState.activeCategory = 'all';
    router.navigate('home');
    setTimeout(() => {
        closeModals();
        renderGrid('home-grid', filterData());
        const section = document.getElementById('home-categories-section');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 400);
}

/**
 * Error Reporting
 */
function showError(msg) {
    const errDiv = document.createElement('div');
    errDiv.style.cssText = 'position:fixed; bottom:100px; left:20px; right:20px; background:rgba(255,0,0,0.9); color:white; padding:15px; border-radius:10px; z-index:9999; font-size:12px;';
    errDiv.innerHTML = `<b>Debug Note:</b> ${msg} <br><small>Click to dismiss</small>`;
    errDiv.onclick = () => errDiv.remove();
    document.body.appendChild(errDiv);
}

window.onerror = function (msg, url, lineNo, columnNo, error) {
    showError(`${msg} [Line: ${lineNo}]`);
    return false;
};

/**
 * Initialize
 */
function init() {
    console.log('Initializing MIU Eats...');
    router.updateUI();

    // Scroll hint animation: play only once ever
    const homeFilters = document.querySelector('.home-filters');
    if (homeFilters) {
        if (localStorage.getItem('scrollHintShown')) {
            homeFilters.style.animation = 'none';
        } else {
            // Mark as shown after the animation finishes (0.4s delay + 1s duration)
            setTimeout(() => {
                localStorage.setItem('scrollHintShown', '1');
            }, 1400);
        }
    }
}

// Run immediately or on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

/**
 * Settings & Translation Logic
 */
let currentLang = 'en';

const i18nDict = {
    'en': {
        home: 'Home',
        settings: 'Settings',
        translateBtn: 'Translate to Arabic',
        themeBtn: 'Theme Options',
        surpriseTitle: 'Check this out!',
        cancel: 'Cancel',
        checkIt: 'Check it',
        heroTitle: 'Find your next meal on campus',
        heroSubtitle: 'Discover the best food spots around MIU university',
        surpriseMeBtn: ' Surprise Me',
        nearMeBtn: ' Near Me', // Notice the space for lucide icon
        exploreCat: 'Explore Categories',
        allCat: 'All',
        foodCat: 'Food Spots',
        dessertCat: 'Desserts',
        supermarketCat: 'Supermarkets',
        drinksCat: 'Drinks',
        searchPlaceholder: 'Search for food or places...',
        searchMenuPlaceholder: 'Search menu items...',
        whereAreYou: 'Where are you?',
        whereDesc: 'Select your building to find nearby food',
        openNow: 'Open now',
        closedMenu: 'Closed',
        openMenu: 'Open',
        back: ' Back'
    },
    'ar': {
        home: 'الرئيسية',
        settings: 'الإعدادات',
        translateBtn: 'الترجمة إلى الإنجليزية',
        themeBtn: 'مظهر التطبيق',
        surpriseTitle: 'جرب هذا!',
        cancel: 'إلغاء',
        checkIt: 'شاهد',
        heroTitle: 'اعثر على وجبتك القادمة في الحرم الجامعي',
        heroSubtitle: 'اكتشف أفضل أماكن الطعام حول جامعة MIU',
        surpriseMeBtn: ' فاجئني',
        nearMeBtn: ' بالقرب مني',
        exploreCat: 'تصفح الفئات',
        allCat: 'الكل',
        foodCat: 'أماكن الطعام',
        dessertCat: 'حلويات',
        supermarketCat: 'سوبر ماركت',
        drinksCat: 'مشروبات',
        searchPlaceholder: 'ابحث عن طعام أو أماكن...',
        searchMenuPlaceholder: 'ابحث في قائمة الطعام...',
        whereAreYou: 'أين أنت؟',
        whereDesc: 'اختر مبناك للعثور على طعام قريب',
        openNow: 'مفتوح الآن',
        closedMenu: 'مغلق',
        openMenu: 'مفتوح',
        back: ' رجوع'
    }
};

function toggleSettingsMenu() {
    const popup = document.getElementById('settings-menu');
    if (popup) {
        popup.classList.toggle('active');
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateTranslations();
    router.updateUI(); // Re-render dynamic content
}

function tr(key) {
    return i18nDict[currentLang][key] || key;
}

function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nDict[currentLang][key]) {
            // Keep icons if they exist in the element
            const icon = el.querySelector('i');
            if (icon) {
                el.innerHTML = '';
                el.appendChild(icon);
                el.appendChild(document.createTextNode(' ' + i18nDict[currentLang][key]));
            } else {
                el.innerText = i18nDict[currentLang][key];
            }
        }
    });

    // Translate Placeholders
    const mainSearch = document.querySelector('.top-nav .main-search');
    if (mainSearch) mainSearch.setAttribute('placeholder', tr('searchPlaceholder'));

    const titles = document.querySelectorAll('.hero h1');
    if (titles.length > 0 && currentState.currentPage === 'home') {
        titles[0].innerText = tr('heroTitle');
        const sub = titles[0].nextElementSibling;
        if (sub) sub.innerText = tr('heroSubtitle');

        // Translate buttons inside hero
        const surpriseBtn = document.querySelector('.hero .btn-surprise:not([style])');
        if (surpriseBtn) {
            surpriseBtn.innerHTML = '<i data-lucide="sparkles"></i>' + tr('surpriseMeBtn');
        }
        const nearMeBtn = document.querySelector('.hero .btn-surprise[style]');
        if (nearMeBtn) {
            nearMeBtn.innerHTML = '<i data-lucide="map-pin"></i>' + tr('nearMeBtn');
        }
    }

    const catTitle = document.querySelector('#home-categories-section h3');
    if (catTitle) catTitle.innerText = tr('exploreCat');

    const catFilters = document.querySelectorAll('#home-categories-section .filter-chip');
    if (catFilters.length >= 5) {
        catFilters[0].innerText = tr('allCat');
        catFilters[1].innerText = tr('foodCat');
        catFilters[2].innerText = tr('dessertCat');
        catFilters[3].innerText = tr('supermarketCat');
        catFilters[4].innerText = tr('drinksCat');
    }

    const modalTitle = document.querySelector('#building-modal .modal-title');
    if (modalTitle) modalTitle.innerText = tr('whereAreYou');
    const modalDesc = document.querySelector('#building-modal .modal-text');
    if (modalDesc) modalDesc.innerText = tr('whereDesc');

    if (window.lucide) lucide.createIcons();
}

// Intercept router UI updates to re-apply translations
const originalUpdateUI = router.updateUI;
router.updateUI = function () {
    originalUpdateUI.call(router);
    setTimeout(updateTranslations, 50);
};

// Also apply at very start
document.addEventListener('DOMContentLoaded', () => { setTimeout(updateTranslations, 100); });
