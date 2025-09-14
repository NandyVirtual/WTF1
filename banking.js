// creating accounts
let joan = { name: "Joan", balance: 1000, currency: "USD", type: "Savings" };
let edua = { name: "Edua", balance: 500, currency: "USD", type: "Checking" };
let miriam = { name: "Miriam", balance: 200, currency: "USD", type: "Savings" };
let temi = { name: "Temi", balance: 300, currency: "EUR", type: "Checking" };

console.log("=== Initial Accounts ===");
console.log(joan, edua, miriam, temi, "\n");

// Deposits to accounts Joan, Edua
joan.balance += 100;
edua.balance += 400;
console.log("Deposits successful:");
console.log(joan.name, joan.balance);
console.log(edua.name, edua.balance, "\n");

// Withdrawals
let withdraw1 = 1200; // Joan
if (joan.balance >= withdraw1) {
  joan.balance -= withdraw1;
} else {
  console.log("Withdrawal denied for", joan.name);
}

let withdraw2 = 100; // Miriam
if (miriam.balance >= withdraw2) {
  miriam.balance -= withdraw2;
}
console.log("After withdrawals:");
console.log(joan.name, joan.balance);
console.log(miriam.name, miriam.balance, "\n");

// Transfers
let transferAmount = 200;

// Edua -> Miriam (USD -> USD)
if (edua.currency === miriam.currency && edua.balance >= transferAmount) {
  edua.balance -= transferAmount;
  miriam.balance += transferAmount;
  console.log("Transfer success:", transferAmount, edua.name, "->", miriam.name);
}

// Temi (EUR) -> Joan (USD) fails
if (temi.currency !== joan.currency) {
  console.log("Transfer failed: currency mismatch");
}
console.log("\n");

// Currency conversion (1 EUR = 1.1 USD)
let rate = 1.1;
let eurSend = 50;
if (temi.balance >= eurSend) {
  temi.balance -= eurSend;
  joan.balance += eurSend * rate;
  console.log("Converted", eurSend, "EUR to USD and sent to", joan.name);
}
console.log("\n");

// Monthly maintenance
if (joan.type === "Savings") joan.balance += joan.balance * 0.02;
if (edua.type === "Checking") edua.balance -= 50;
if (miriam.type === "Savings") miriam.balance += miriam.balance * 0.02;
if (temi.type === "Checking") temi.balance -= 50;

// Highest & Lowest balance
let highest = joan;
if (edua.balance > highest.balance) highest = edua;
if (miriam.balance > highest.balance) highest = miriam;
if (temi.balance > highest.balance) highest = temi;

let lowest = joan;
if (edua.balance < lowest.balance) lowest = edua;
if (miriam.balance < lowest.balance) lowest = miriam;
if (temi.balance < lowest.balance) lowest = temi;

console.log("Highest balance:", highest.name, highest.balance);
console.log("Lowest balance:", lowest.name, lowest.balance, "\n");

// Account status & summary
function getStatus(account) {
  if (account.balance > 0) return "Active";
  else if (account.balance === 0) return "Empty";
  else return "Overdrawn";
}

console.log(joan.name, "|", joan.balance.toFixed(2), joan.currency, "|", joan.type, "|", getStatus(joan));
console.log(edua.name, "|", edua.balance.toFixed(2), edua.currency, "|", edua.type, "|", getStatus(edua));
console.log(miriam.name, "|", miriam.balance.toFixed(2), miriam.currency, "|", miriam.type, "|", getStatus(miriam));
console.log(temi.name, "|", temi.balance.toFixed(2), temi.currency, "|", temi.type, "|", getStatus(temi));

