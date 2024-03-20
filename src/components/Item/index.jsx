export default function Item({ item }) {
  return (
    <div>
      {/* <img src={item.image} alt={item.title} /> */}
      <div>
        <h2>{item.name}</h2>
        <p>Price: ${item.price}</p>
      </div>
    </div>
  );
}
