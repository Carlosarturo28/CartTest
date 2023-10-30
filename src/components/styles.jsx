import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 400px;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const Group = styled.div`
  margin: 16px 0;
`;

export const DotButton = styled.button`
  width: 12px;
  height: 12px;
  border: none;
  border-radius: 50%;
  margin: 0 10px;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "#000" : "#ddd")};
`;

export const ColorButton = styled.button`
  padding: 10px 18px;
  border: none;
  border-radius: 12px;
  margin: 0 10px;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#fff" : "#000")};
  border: 2px solid #000;
  background-color: ${(props) => (props.$active ? "#000" : "#fff")};
`;

export const Information = styled.div`
  text-align: left;
  padding: 20px;
  h1 {
    font-size: 20px;
  }
  .price {
    margin: 0;
    font-size: 42px;
    font-weight: 700;
  }
`;

export const AddToCart = styled.button`
  width: 90%;
  align-self: center;
  padding: 10px 18px;
  border: none;
  border-radius: 12px;
  margin: 0 10px;
  cursor: pointer;
  color: #000;
  margin: 30px 0;
  border: 2px solid #000;
  background-color: #fff;
  transition: all 0.3s;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const CartContainer = styled.button`
  border: none;
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  .indicator {
    width: 20px;
    border-radius: 50%;
    position: absolute;
    right: 0;
    top: 0;
    padding: 6px;
    background-color: #ffd300;
  }
`;

export const ToastContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  color: #fff;
  background-color: #000;
  padding: 10px 20px;
`;
