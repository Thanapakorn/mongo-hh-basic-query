db.orders.find({
  quantity: { $lt: 5 },
  credit_card_type: "mastercard",
});
db.orders.find({
  size: "small",
  quantity: { $gte: 1, $lte: 5 },
});
db.orders.find({
  quantity: { $gt: 10 },
  credit_card_type: null,
});
