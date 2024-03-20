export default function ItemDetail({ item }) {
  return (
    <>
      <div className="item-detail">
        <img src={item.image} alt={item.title} />
        <div className="details">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
        </div>
      </div>
    </>
  );
}
