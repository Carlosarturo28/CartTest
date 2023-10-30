import { Card } from "./components/Card";
import "./styles.css";
import data from "./products.json";
import { useEffect, useState } from "react";
import { ContextSuppliers } from "./useContext/ContextSuppliers";
import { useAddToCart } from "./useHooks/useAddToCart";
import toast, { Toaster } from 'react-hot-toast';

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

  const notify = (content, type) => {
    switch(type) {
      case "success":
        toast[type](content);
      break;
      default:
        toast(content);
    }
  }

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
        cart,
        notify
      }}
    >
      <div className="App">
        {data.map((item, index) => (
          <Card key={index} product={item} />
        ))}
      </div>
      <Toaster position="top-right"/>
    </ContextSuppliers.Provider>
  );
}
