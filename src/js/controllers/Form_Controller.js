import { GetData } from '../../api/api.js'
import { CardAssemble, CleanView, ShowMessage } from '../functions.js'

let lastSearch = '';
let productsList = [];
let count = 0;

export async function GetDataForm(params) {
    let cleanParameter = params.trim();

    if(cleanParameter === lastSearch){
        return;
    }

    lastSearch = cleanParameter;

    productsList = await GetData({params: cleanParameter});

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

export async function Preview(){
    count-=10;

    if(count < 0){
        return;
    }

    productsList = await GetData({skip: count});

    ViewItens();
}

export async function Next(){
    count+=10;

    productsList = await GetData({skip: count});

    ViewItens();
}