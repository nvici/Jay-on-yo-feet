import React, { useEffect } from 'react';
import ShoeItem from '../ProductItem';
import { useShoeContent } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/action';
import { useQuery } from '@apollo/client';
import { QUERY_SHOES } from '../../utils/queries';
import { idbPromise } from '../../utils/helper';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';


function ProductList() {
  const [state, dispatch] = useShoeContent();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_SHOES);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ShoeItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
                <footer>
          <Typography sx={{ pt: 10, pb: 2}}variant="body2" color="text.secondary" align="center">
            {' © '}
            <Link color="inherit" href="https://mui.com/">
             Jays On Your Feet
            </Link>{' '}
          {new Date().getFullYear()}
            {'.'}
          </Typography>
          </footer>
    </div>
    
  );
}

export default ProductList;