db.produtos.find({
  tags: {
    $exists: false,
  },
  vendidos: {
    $nin: [50],
  },
}, {
  _id: 0,
  nome: 1,
  vendidos: 1,
});