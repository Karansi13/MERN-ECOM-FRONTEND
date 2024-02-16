// A mock function to mimic making an async request for data
export function addToCart(item) {
  return new Promise(async (resolve) => {
  const response = await fetch('http://localhost:8080/cart',{
    method: 'POST',
    body: JSON.stringify(item),
    headers: {'Content-type': 'application/json'}
  })
  const data = await response.json()
  // TODO: on server it will only return some info of user (not password)
  resolve({ data })
}
);
}

export function fetchItemsByUserId(userId) {
  // Todp : we will not hard-code server URL here
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart?user="+userId);
    const data = await response.json();
    resolve({ data });
  });
}

// update the cart
export function updateCartItems(update) {
  return new Promise(async (resolve) => {
  const response = await fetch('http://localhost:8080/cart/'+update.id, {
    method: 'PATCH',
    body: JSON.stringify(update),
    headers: {'content-type': 'application/json'}
  })
  const data = await response.json()
  // TODO: on server it will only return some info of user (not password)
  resolve({ data })
}
);
}
//The PATCH method in HTTP is used to partially update a resource on the server. It is typically used when you want to update only a subset of the resource's properties, rather than replacing the entire resource with a new representation (which would be done using the PUT method).


export function deleteItemsFromCart(itemId) {
  return new Promise(async (resolve) => {
  const response = await fetch('http://localhost:8080/cart/'+itemId, {
    method: 'DELETE',
    headers: {'content-type': 'application/json'},
  })
  const data = await response.json()
  // TODO: on server it will only return some info of user (not password)
  resolve({ data:{id:itemId} })
}
);
}
export async function resetCart(userId) {
  // get all items of user's cart - and then delete each
  return new Promise(async (resolve) => {
  const response = await fetchItemsByUserId(userId)
  const items = response.data;
  for(let item of items){
    await deleteItemsFromCart(item.id)
  }
  resolve({ status: 'success'})
});
}