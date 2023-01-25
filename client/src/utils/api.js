export const getAllShoes = () => {
    return fetch('/api/shoes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  
  export const addToCart = (shoeData) => {
    return fetch('/api/shoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(shoeData),
    });
  };
  
  export const getShoe = (shoeId) => {
    return fetch(`/api/shoes/${shoeId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  
  export const editCart = (amountData) => {
    return fetch(`/api/shoes/${amountData}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(amountData),
    });
  };