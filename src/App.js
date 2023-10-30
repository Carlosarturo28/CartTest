import { Card } from "./components/Card";
import "./styles.css";
import data from "./products.json";
import { useEffect, useState } from "react";
import { ContextSuppliers } from "./useContext/ContextSuppliers";
import { useAddToCart } from "./useHooks/useAddToCart";

const fetchActiveSuppliers = async () => {
  try {
    const response = await fetch("https://gorest.co.in/public/v2/users");
    const data = await response.json();
    return data.filter((item) => item.status === "active");
  } catch (error) {
    throw new Error(error);
  }
};

export default function App() {
  const [suppliers, setSuppliers] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState({});
  const { cart, addToCart } = useAddToCart("cart");

  useEffect(() => {
    const getSuppliers = async () => {
      const activeSuppliers = await fetchActiveSuppliers();
      setSuppliers(activeSuppliers);
      setSelectedSupplier(activeSuppliers[0]);
    };
    getSuppliers();
  }, []);

  return (
    <ContextSuppliers.Provider
      value={{
        suppliers,
        selectedSupplier,
        setSelectedSupplier,
        addToCart,
        cart
      }}
    >
      <div className="App">
        {data.map((item, index) => (
          <Card key={index} product={item} />
        ))}
      </div>
    </ContextSuppliers.Provider>
  );
}
