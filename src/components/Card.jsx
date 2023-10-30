import { useState } from "react";
import { Button } from "./Button";
import { CardContainer, Group, Information } from "./styles";
import { Selector } from "./Selector";
import { Suppliers } from "./Suppliers";
import { Cart } from "./Cart";

export const Card = ({ product }) => {
  const [color, setColor] = useState(product.colors[0]);

  return (
    <CardContainer>
      <img src={`${color}.png`} alt={product.title} />
      <Group>
        {product.colors.map((item, index) => (
          <Selector
            onClick={() => setColor(item)}
            active={item === color}
            key={index}
          />
        ))}
      </Group>
      <hr style={{ width: "90%" }} />
      <Group>
        {product.colors.map((item, index) => (
          <Selector
            type="button"
            onClick={() => setColor(item)}
            active={item === color}
            item={item}
            key={index}
          />
        ))}
      </Group>
      <Information>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p className="price">${product.price}.00</p>
      </Information>
      <Suppliers />
      <Button product={product} color={color} />
      <Cart />
    </CardContainer>
  );
};
