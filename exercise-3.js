db.orders.find().sort({ total_price: -1 })
db.orders.find().sort({ created_at: 1 })
