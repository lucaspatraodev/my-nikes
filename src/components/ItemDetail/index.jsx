import ItemCount from "../ItemCount";

export default function ItemDetail({ item, onItemAdded }) {
  const [quantity, setQuantity] = useState(0);

  const handleItemAdded = (quantity) => {
    onItemAdded(quantity);
  };

  return (
    <>
      <div className="item-detail">
        <img src={item.image} alt={item.title} />
        <div className="details">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <ItemCount onItemAdded={onItemAdded} />
        </div>
      </div>
    </>
  );
}
