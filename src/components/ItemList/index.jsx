import Item from "../Item";

export default function ItemList({ items }) {
  return (
    <div className="flex flex-wrap h-auto">
      {items.map((item, index) => {
        return <Item key={index} item={item} />;
      })}
    </div>
  );
}
