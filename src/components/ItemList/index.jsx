import Item from "../Item";

export default function ItemList({ items }) {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
}
