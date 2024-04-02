export default function CartItem({ item }) {
  return (
    <div key={item.id} className="flex items-center gap-4 bg-white text-black">
      <img
        src={item.firstImage}
        alt={item.name}
        className="w-[100px] h-[100px] object-cover"
      />
      <div>
        <h2>{item.title}</h2>
        <p>{item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    </div>
  );
}
