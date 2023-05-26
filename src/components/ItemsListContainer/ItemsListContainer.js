import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { Slider } from "../Slider/Slider";

const ItemsListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const productsDB = collection(db, "Productos");

    getDocs(productsDB).then((products) => {
      const allProducts = products.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (categoryId) {
        const filteredProducts = allProducts.filter(
          (product) => product.category === categoryId
        );
        setProducts(filteredProducts);
      } else {
        setProducts(allProducts);
      }
    });
  }, [categoryId]);

  return (
    <>
      
      <Slider/>

      <div className="ItemList">
        <ItemList products={products} />
      </div>
    </>
  );
};

export default ItemsListContainer;
