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

export function fetchProductsByFilters(filter,sort,pagination) {
  // filter = {"category": ["smartphone","laptops"]}
  // sort = {_sort: "price",_order:"desc"}
  // pagination = {_page:1 ,_limit=10,}
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
console.log(pagination);
for(let key in pagination){
  qeuryString += `${key}=${pagination[key]}&`
}


  // Todp : we will not hard-code server URL here
  return new Promise(async (resolve) => {
  const response = await fetch('http://localhost:8080/products?'+qeuryString)
  const data = await response.json()
  // resolve({ data })
  const totalItems = await response.headers.get('X-Total-Count')
  resolve({ data:{products:data,totalItems:+totalItems} })
}
);
}