let inventory = [
  {
    sku: "SKU-001",
    name: "Lipstick",
    price: 15.99,
    stock: 50
  },
  {
    sku: "SKU-002",
    name: "Foundation",
    price: 25.99,
    stock: 35
  },
  {
    sku: "SKU-003",
    name: "Eyeliner",
    price: 9.99,
    stock: 80
  },
  {
    sku: "SKU-004",
    name: "Mascara",
    price: 19.99,
    stock: 60
  }
];
console.log(inventory);
inventory.forEach(function (item) {
  console.log(
    `${item.sku} | ${item.name} | $${item.price} | Stock: ${item.stock}`
  );
});
inventory.push({
  sku: "SKU-005",
  name: "Blush",
  price: 12.99,
  stock: 40
});

console.log(inventory);

let removedItem = inventory.pop();
console.log(removedItem);

inventory[0].price = 13.99;
inventory[1].stock = inventory[1].stock + 10;

console.log(inventory);
inventory.forEach(function (item) {
  console.log(
    `${item.sku} | ${item.name} | $${item.price} | Stock: ${item.stock}`
  );
});
let orders = [
  {
    orderId: "ORD-1001",
    items: [
      { sku: "SKU-001", qty: 2 },
      { sku: "SKU-003", qty: 1 }
    ]
  },
  {
    orderId: "ORD-1002",
    items: [
      { sku: "SKU-002", qty: 1 },
      { sku: "SKU-004", qty: 3 }
    ]
  }
];

function processOrder(order) {
  let total = 0;

  for (let i = 0; i < order.items.length; i++) {
    let orderItem = order.items[i];

    let product = inventory.find(function (item) {
      return item.sku === orderItem.sku;
    });

    if (!product || product.stock < orderItem.qty) {
      return `Order ${order.orderId} cannot be completed. Not enough stock for ${orderItem.sku}`;
    }

    product.stock -= orderItem.qty;
    total += product.price * orderItem.qty;
  }

  return `Order ${order.orderId} total: $${total.toFixed(2)}`;
}

orders.forEach(function (order) {
  console.log(processOrder(order));
});