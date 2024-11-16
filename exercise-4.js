///1 

db.pizzaOrders.find({quantity: { $lt: 5 },credit_card_type: "mastercard"});



////2
db.movies.find({
    size: "small",
    $and: [
        { quantity: { $gte: 1 } },
        { quantity: { $lte: 5 } }
    ]
});

////3 
    db.movies.find({
        size: "small",
        $and: [
            { quantity: { $gt: 10 } },
            { credit_card_type: { $not: { $eq: "mastercard" } } }
        ]
    });
