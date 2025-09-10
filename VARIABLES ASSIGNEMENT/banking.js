// accounts as objects
let accounts = [
  { name: "Joan", balance: 1000, currency: "USD", type: "Savings" },
  { name: "Edua", balance: 500, currency: "USD", type: "Checking" },
  { name: "Miriam", balance: 200, currency: "USD", type: "Savings" },
  { name: "Temi", balance: 300, currency: "EUR", type: "Checking" }
];

console.log("=== Initial Accounts ===");
console.log(accounts, "\n");

// Deposits
accounts[0].balance += 100; // Joan
accounts[1].balance += 400; // Edua
console.log("Deposits succesful:", accounts[0].name, accounts[0].balance, accounts[1].name, accounts[1].balance, "\n");

// Withdrawals
let withdraw1 = 1200;
if (accounts[0].balance >= withdraw1) {
  accounts[0].balance -= withdraw1;
} else {
  console.log("Withdrawal denied for", accounts[0].name);
}

let withdraw2 = 100;
if (accounts[2].balance >= withdraw2) {
  accounts[2].balance -= withdraw2;
}
console.log("After withdrawals:", accounts[0].balance, accounts[2].balance, "\n");

// Transfers
let amount = 200;
// Edua -> Miriam (both USD)
if (accounts[1].currency === accounts[2].currency && accounts[1].balance >= amount) {
  accounts[1].balance -= amount;
  accounts[2].balance += amount;
  console.log("Transfer success:", amount, accounts[1].name, "->", accounts[2].name);
}

// Temi (EUR) -> Joan (USD) fails (currency mismatch)
if (accounts[3].currency !== accounts[0].currency) {
  console.log("Transfer failed: currency mismatch");
}
console.log("\n");

// Currency conversion (1 EUR = 1.1 USD)
let rate = 1.1;
let eurSend = 50;
if (accounts[3].balance >= eurSend) {
  accounts[3].balance -= eurSend;
  accounts[0].balance += eurSend * rate;
  console.log("Converted", eurSend, "EUR to USD and sent to", accounts[0].name);
}
console.log("\n");

// Monthly maintenance
for (let acc of accounts) {
  if (acc.type === "Savings") acc.balance += acc.balance * 0.02; // +2% interest
  if (acc.type === "Checking") acc.balance -= 50; // -50 fee
}

// Highest & Lowest
let highest = accounts[0], lowest = accounts[0];
for (let acc of accounts) {
  if (acc.balance > highest.balance) highest = acc;
  if (acc.balance < lowest.balance) lowest = acc;
}
console.log("Highest balance:", highest.name, highest.balance);
console.log("Lowest balance:", lowest.name, lowest.balance, "\n");

// Final status & summary
for (let acc of accounts) {
  let status = acc.balance > 0 ? "Active" : acc.balance === 0 ? "Empty" : "Overdrawn";
  console.log(acc.name, "|", acc.balance.toFixed(2), acc.currency, "|", acc.type, "|", status);
}
