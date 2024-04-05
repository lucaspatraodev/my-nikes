import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <div className="flex flex-wrap h-auto">
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
}
