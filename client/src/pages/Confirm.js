import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Message from '../components/Message';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helper';

function Confirm() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div>
      <Message>
        <h1>Confirm!</h1>
        <h2>Sick Shoes!</h2>
        <h2>You will be directed to the fire Home page!</h2>
      </Message>
    </div>
  );
}

export default Confirm;