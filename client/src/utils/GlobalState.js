import React, { createContext, useContext } from "react";
import { useShoeReducer } from './reducers'

const ShoeContent = createContext();
const { Provider } = ShoeContent;

const ShoeProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useShoeReducer({
    products: [],
    cart: [],
    cartOpen: false,
    category: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useShoeContent = () => {
  return useContext(ShoeContent);
};

export { ShoeProvider, useShoeContent };