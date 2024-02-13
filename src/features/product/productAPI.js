// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  // Todp : we will not hard-code server URL here
  return new Promise(async (resolve) => {
  const response = await fetch('http://localhost:8080/products')
  const data = await response.json()
  resolve({ data })
}
);
}

export function fetchProductsByFilters(filter,sort) {
  // filter = {"category": ["smartphone","laptops"]}
  // sort = {_sort: "price",_order:"desc"}
  // Todo: on server we will support multi values
  let qeuryString = '';
  for(let key in filter) {
    const categoryValues = filter[key];
    if(categoryValues.length){
      const lastCategoryValues = categoryValues[categoryValues.length-1]
      qeuryString += `${key}=${lastCategoryValues}&`
    }
  }

for(let key in sort){
  qeuryString += `${key}=${sort[key]}&`
}


  // Todp : we will not hard-code server URL here
  return new Promise(async (resolve) => {
  const response = await fetch('http://localhost:8080/products?'+qeuryString)
  const data = await response.json()
  resolve({ data })
}
);
}