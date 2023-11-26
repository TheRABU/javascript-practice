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
