db.orders.findOne({ customer_name: "Cherlyn" });
db.orders.findMany({ credit_card_type: "mastercard" });
db.orders.findMany({ size: "medium" }).limit(5);
