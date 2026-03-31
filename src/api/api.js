export async function GetData({params = '', limit = 10, skip = 0 }){

    console.log('api', params)

    let url = "";
    // url = "https://fakestoreapi.com/products";
    // url = `https://dummyjson.com/products/search?q=${params}`;
    url = `https://dummyjson.com/products/search?q=${params}&limit=${limit}&skip=${skip}`

    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data.products;
    } catch (error) {
        return [];
    }
}