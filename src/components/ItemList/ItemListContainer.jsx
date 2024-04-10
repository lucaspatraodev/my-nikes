import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { db } from "../ItemCollection";
import { getDocs, collection, query, where } from "firebase/firestore";

export default function ItemListContainer() {
  const { id } = useParams();
  const { title } = useParams();
  const [items, setItems] = useState();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const collectionRef = collection(db, "items");
        if (id) {
          console.log(id);
          let q = query(collectionRef, where("category", "==", id));
          console.log("if");
          const querySnapshot = await getDocs(q);
          const itemsData = querySnapshot.docs.map((doc) => doc.data());
          setItems(itemsData);
        } else {
          const querySnapshot = await getDocs(collectionRef);
          const itemsData = querySnapshot.docs.map((doc) => doc.data());
          setItems(itemsData);
        }
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };
    fetchItem();
  }, [id]);

  return (
    <div className="mt-[10vh] mx-auto p-4 flex flex-col gap-12 justify-start items-center w-10/12 h-[90vh]">
      <h1 className="text-4xl font-bold">{title}</h1>
      {!items ? <div>Loading...</div> : <ItemList items={items} />}
    </div>
  );
}
