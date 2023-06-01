// query1
db.produtos.updateMany({}, {
  $set: {
    avaliacao: NumberInt(0),
  },
});
// query2
db.produtos.updateMany({
  tags: {
    $all: ["bovino"],
  },
}, {
  $set: {
    avaliacao: NumberInt(5),
  },
});
// query3
db.produtos.updateMany({
  tags: {
    $all: ["ave"],
  },
}, {
  $set: {
    avaliacao: NumberInt(3),
  },
});
// query4
db.produtos.find({}, {
  _id: 0,
  nome: 1,
  avaliacao: 1,
});