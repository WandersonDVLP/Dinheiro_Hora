export async function GetDataAll(){
    let url = `https://dummyjson.com/products/search?q=&limit=${10}&skip=${0}`;

    return SearchData(url);
}

export async function GetData({params = '', limit = 10, skip = 0 }){
    
    let url = `https://dummyjson.com/products/search?q=${params}&limit=${limit}&skip=${skip}`;

    return SearchData(url);
}

async function SearchData(url){
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data.products;
    } catch (error) {
        return [];
    }
}