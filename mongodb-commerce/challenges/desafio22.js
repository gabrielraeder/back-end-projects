// query 1
db.produtos.updateMany({}, {
  $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] },
});
// query 2
db.produtos.updateOne({
  nome: { $regex: /big mac/i },
}, {
  $set: {
    "vendasPorDia.3": 60,
  },
});

// query 3
db.produtos.updateMany({
  tags: { $all: ["bovino"] },
}, {
  $set: {
    "vendasPorDia.6": 120,
  },
});

// query 4
db.produtos.find({}, {
  _id: 0,
  nome: 1,
  vendasPorDia: 1,
});