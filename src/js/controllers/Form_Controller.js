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

    productsList = await GetData();

    ViewItens();
}

export function ViewItens(){
    let itemsList = productsList;

    CleanView();

    itemsList.forEach(item => {
        CardAssemble(item);
    });
}