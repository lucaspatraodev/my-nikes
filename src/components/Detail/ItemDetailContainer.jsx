import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../ItemCollection";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const collectionRef = collection(db, "items");
    const fetchItem = async () => {
      try {
        let q = query(collectionRef, where("id", "==", id));
        const querySnapshot = await getDocs(q);
        const itemData = querySnapshot.docs.map((doc) => doc.data());
        console.log(itemData);
        setItem(itemData);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchItem();
  }, [id]);

  return (
    <div>{item ? <ItemDetail item={item[0]} /> : <div>Loading...</div>}</div>
  );
}
