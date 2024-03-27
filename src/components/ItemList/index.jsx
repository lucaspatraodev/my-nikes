import Item from "../Item";

export default function ItemList({ items }) {
  return (
    <div>
      {items.map((item, index) => {
        return <Item key={index} item={item} />;
      })}
    </div>
  );
}
