export const sendOrder = (buyer, items, total) => {
  const db = getFirestore(app);
  const ordersCollection = collection(db, "orders");

  const order = {
    buyer: { name: buyer.name, phone: buyer.phone, email: buyer.email },
    items: [items],
    total: total,
  };
  addDoc(ordersCollection, order).then(({ id }) => setOrderID(id));
};
