import { GetDataAll } from '../api/api.js'
import { ViewItens } from './functions.js'

document.addEventListener('DOMContentLoaded', async () => {
    let data = await GetDataAll();

    ViewItens(data);
});