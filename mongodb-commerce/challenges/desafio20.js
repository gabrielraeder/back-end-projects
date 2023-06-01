db.produtos.updateOne({
  nome: { $regex: /quarteirão/i },
}, {
  $pop: { ingredientes: -1 },
});

db.produtos.find({}, {
  _id: 0,
  nome: 1,
  ingredientes: 1,
});