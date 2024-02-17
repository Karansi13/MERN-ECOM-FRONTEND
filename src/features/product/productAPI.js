// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  // Todp : we will not hard-code server URL here
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductById(id) {
  // Todp : we will not hard-code server URL here
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products/"+id);
    const data = await response.json();
    resolve({ data });
  });
}

// admin
export function createProduct(product) {
  // Todp : we will not hard-code server URL here
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products/",{
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'content-type': 'application/json'}
    });
    const data = await response.json();
    resolve({ data });
  });
}


export function updateProduct(update) {
  return new Promise(async (resolve) => {
  const response = await fetch('http://localhost:8080/products/'+update.id, {
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


export function fetchProductsByFilters(filter, sort, pagination) {
  // filter = {"category": ["smartphone","laptops"]}
  // sort = {_sort: "price",_order:"desc"}
  // pagination = {_page:1 ,_limit=10,}
  // Todo: on server we will support multi values in filter
    // TODO: Server will filter deleted products in case of non-admin
  let qeuryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValues = categoryValues[categoryValues.length - 1];
      qeuryString += `${key}=${lastCategoryValues}&`;
    }
  }

  for (let key in sort) {
    qeuryString += `${key}=${sort[key]}&`;
  }
  console.log(pagination);
  for (let key in pagination) {
    qeuryString += `${key}=${pagination[key]}&`;
  }

  // Todp : we will not hard-code server URL here
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?" + qeuryString
    );
    const data = await response.json();
    // resolve({ data })
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/categories");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/brands");
    const data = await response.json();
    resolve({ data });
  });
}
