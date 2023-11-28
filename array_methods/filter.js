const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

const filteredItems = items.filter((item) => {
  return item.price <= 100;
});
console.log(filteredItems);

// User Management System: Filtering out users who meet specific criteria, such as those who have not logged in for a certain period.
const users = [
  { username: "Hitesh Deshmukh", age: 45, isLoggedIn: false, userRole: "user" },
  { username: "Ram prasad", age: 45, isLoggedIn: false, userRole: "user" },
  { username: "Abdul Latif", age: 45, isLoggedIn: true, userRole: "user" },
  { username: "Takeshi Jinja", age: 45, isLoggedIn: false, userRole: "user" },
  { username: "Ami janina", age: 45, isLoggedIn: true, userRole: "user" },
  { username: "Ke ami88", age: 45, isLoggedIn: false, userRole: "user" },
];
const filteredUserBasedOnLogin = users.filter((user) => {
  return user.isLoggedIn === true;
});
console.log(filteredUserBasedOnLogin);

//Product Inventory: Retrieving a list of products from an inventory that are out of stock.
const productList = [
  {
    id: 1,
    productName: "Shampo",
    Description: "This is the best product...",
    price: 255,
    quantity: 10,
  },
  {
    id: 2,
    productName: "Biscuit",
    Description: "This is the best product...",
    price: 255,
    quantity: 10,
  },
  {
    id: 3,
    productName: "Watch",
    Description: "This is the best product...",
    price: 255,
    quantity: 0,
  },
  {
    id: 4,
    productName: "Water Bottle",
    Description: "This is the best product...",
    price: 255,
    quantity: 10,
  },
  {
    id: 5,
    productName: "Shemai",
    Description: "This is the best product...",
    price: 255,
    quantity: 0,
  },
  {
    id: 6,
    productName: "Nothing",
    Description: "This is the best product...",
    price: 255,
    quantity: 10,
  },
];
const outOfStockProducts = productList.filter((products) => {
  return products.quantity <= 0;
});
console.log(outOfStockProducts);

// Data Analysis: Extracting data points from a large dataset based on certain conditions, like filtering out sales records above a certain threshold.

const transactions = [
  {
    transactionId: 1,
    date: "2023-01-15",
    amount: 120.5,
    category: "Groceries",
    merchant: "SuperMart",
    accountId: "123456789",
    status: "completed",
  },
  {
    transactionId: 2,
    date: "2023-01-18",
    amount: 50.0,
    category: "Clothing",
    merchant: "FashionHub",
    accountId: "987654321",
    status: "completed",
  },
  {
    transactionId: 3,
    date: "2023-01-20",
    amount: 200.0,
    category: "Electronics",
    merchant: "TechBazaar",
    accountId: "123456789",
    status: "pending",
  },
  // ... more transactions
];
const completedTransactions = transactions.filter((transactions) => {
  return (
    transactions.status === "completed" && transactions.date <= "2023-01-15"
  );
});
console.log(completedTransactions);

//Event Scheduler: Filtering events in a calendar that fall within a specified date range.
const eventList = [
  { name: "Wedding Day", date: "2026-02-14", guests: 300, spendmoney: 50000 },
  { name: "Reception Day", date: "2026-02-16", guests: 300, spendmoney: 30000 },
  { name: "Holud Day", date: "2026-02-13", guests: 300, spendmoney: 30000 },
  { name: "Mehedi Day", date: "2026-01-14", guests: 300, spendmoney: 30000 },
  { name: "Chode Day", date: "2026-03-14", guests: 300, spendmoney: 50000 },
];

const eventListAccordingtoDate = eventList.filter((events) => {
  return events.date >= "2026-02-01" && events.date <= "2026-03-31";
});
const formattedEvents = eventListAccordingtoDate.map((event) => {
  return `Event: ${event.name}, Date: ${event.date}, Guests: ${event.guests}, Spend Money: ${event.spendmoney}`;
});

console.log(`Events within date range: ${formattedEvents.join(", ")}`);

// E-commerce Platform: Displaying products to a user based on their preferences and purchase history.
const productsEcommerce = [
  {
    productId: 1,
    name: "Smartphone",
    category: "Electronics",
    price: 599.99,
    brand: "TechCo",
    preferences: ["Gadgets", "Electronics"],
    purchaseHistory: ["Smartphone", "Headphones"],
  },
  {
    productId: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 79.99,
    brand: "Sportify",
    preferences: ["Sports", "Fitness"],
    purchaseHistory: ["Running Shoes", "Sports Apparel"],
  },
  {
    productId: 3,
    name: "Coffee Maker",
    category: "Kitchen Appliances",
    price: 129.99,
    brand: "HomeBrew",
    preferences: ["Home Appliances", "Kitchen"],
    purchaseHistory: ["Coffee Maker", "Cookware"],
  },
];
const currentUser = {
  preferences: ["Sports", "Fitness"],
  purchaseHistory: ["Running Shoes", "Sports Apparel"],
};
const userRecommendation = productsEcommerce.filter((products) => {
  const hasCommonPreferences = products.preferences.some((p) =>
    currentUser.preferences.includes(p)
  );
  const hasCommonPurchaseHistory = products.purchaseHistory.some((p) =>
    currentUser.purchaseHistory.includes(p)
  );
  return hasCommonPreferences && hasCommonPurchaseHistory;
});
console.log(userRecommendation);

// Social Media Feed: Displaying posts in a user's feed based on their interests and interactions.

const posts = [
  {
    postId: 1,
    content: "Exploring the great outdoors today! 🏞️ #NatureAdventure",
    timestamp: "2023-04-10T08:30:00",
    likes: 120,
    userInterests: ["Travel", "Nature", "Adventure"],
    userInteractions: [
      "Commented on 'Mountain Sunset'",
      "Liked 'Beach Vacation'",
    ],
  },
  {
    postId: 2,
    content:
      "New recipe alert! 🍲 Check out my latest creation in the kitchen. #CookingJoy",
    timestamp: "2023-04-09T18:45:00",
    likes: 85,
    userInterests: ["Cooking", "Food", "Recipes"],
    userInteractions: [
      "Liked 'Healthy Smoothies'",
      "Shared 'Quick Dinner Ideas'",
    ],
  },
  {
    postId: 3,
    content: "Game night with friends! 🎲 #BoardGames",
    timestamp: "2023-04-08T21:15:00",
    likes: 50,
    userInterests: ["Games", "Socializing", "Entertainment"],
    userInteractions: [
      "Commented on 'Video Game Recommendations'",
      "Liked 'Movie Night'",
    ],
  },
];
const currentUserHistory = {
  userInterests: ["Games", "Socializing", "Entertainment"],
  userInteractions: [
    "Commented on 'Video Game Recommendations'",
    "Liked 'Movie Night'",
  ],
};
const userRecommendationBasedOnPost = posts.filter((post) => {
  const hasCommonInterests = post.userInterests.some((c) => {
    return currentUserHistory.userInterests.includes(c);
  });
  const hasCommonInteractions = post.userInteractions.some((c) => {
    return currentUserHistory.userInteractions.includes(c);
  });
  return hasCommonInteractions && hasCommonInterests;
});
console.log(userRecommendationBasedOnPost);
