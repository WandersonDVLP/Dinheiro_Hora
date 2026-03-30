export async function GetData(params){

    let url = "";
    // url = "https://fakestoreapi.com/products";
    url = `https://dummyjson.com/products/search?q=${params}`;

    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data.products;
    } catch (error) {
        console.log('Load error -> ', error);
        return [];
    }
}