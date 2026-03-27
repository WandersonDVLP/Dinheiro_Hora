import { GetData } from '../api/api.js'
import { CardAssemble, CleanView } from './global.js'

const form = document.getElementById('form');

form.addEventListener('submit', async(event) => {
  event.preventDefault();
  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  GetDataForm();
});

export async function GetDataForm(){
  let productsList = await GetData();

  CleanView();

  CardAssemble(productsList);
}