import { useContext } from "react";
import { ContextSuppliers } from "../useContext/ContextSuppliers";

export const Suppliers = () => {
  const { suppliers, setSelectedSupplier } = useContext(ContextSuppliers);

  const handleOnChange = (e) => {
    setSelectedSupplier(suppliers[e.target.value]);
  };
  return (
    <div style={{ display: "flex", alignSelf: "center" }}>
      <p style={{ marginRight: 10 }}>Suppliers:</p>
      <select onChange={(e) => handleOnChange(e)}>
        {suppliers.map((item, index) => (
          <option key={index} value={index} label={item.name} />
        ))}
      </select>
    </div>
  );
};
