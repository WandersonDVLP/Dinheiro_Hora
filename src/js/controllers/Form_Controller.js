import { GetData } from '../../api/api.js'
import { CardAssemble, CleanView, ShowMessage } from '../functions.js'

let lastSearch = '';
let productsList = [];

export async function GetDataForm(params) {
    let cleanParameter = params.trim();

    if(cleanParameter === lastSearch){
        return;
    }

    lastSearch = cleanParameter;

    productsList = await GetData(cleanParameter);

    console.log('list -> ', productsList);

    if(productsList.length <= 0){
        CleanView();
        ShowMessage();
    }
    else {
        ViewItens();
    }
}

export function ViewItens(){
    let itensList = productsList;

    CleanView();

    itensList.forEach(item => {
        CardAssemble(item);
    });
}