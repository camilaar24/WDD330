const baseURL = 'http://157.201.228.93:2992/'

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor() {
  }
  async getData(category) {
    const res = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(res);
    return data.Result;
  }
  async findProductById(id) {
    return await fetch(baseURL + `product/${id}`)
    .then(convertToJson)
    .then((data) => data.Result);
    
  }

  async checkout(payload) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    return await fetch(baseURL + 'checkout/', options).then(convertToJson);
  }
}
