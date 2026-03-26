export async function GetData(){
    try {
        const resp = await fetch('https://fakestoreapi.com/products');
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log('Load error -> ', error);
        return [];
    }
}