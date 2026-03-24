import { Products } from './data.js'
import { CardAssemble } from '../js/Global.js'

export function LoadData(){
    Products.forEach(element => {
        CardAssemble(element);
    });
}