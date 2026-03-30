import { GetData } from '../../api/api.js'
import { CardAssemble, CleanView } from '../global.js'

let lastSearch = '';
let productsList = [];

export async function GetDataForm(params) {
    let cleanParameter = params.trim();

    if(cleanParameter === lastSearch){
        return;
    }

    lastSearch = cleanParameter;

    productsList = await GetData(cleanParameter);

    ViewItens();
}

export function ViewItens(){
    let itensList = productsList;

    CleanView();

    itensList.forEach(item => {
        CardAssemble(item);
    });
}