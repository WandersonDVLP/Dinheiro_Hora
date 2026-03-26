import { GetData } from '../api/api.js'
import { CardAssemble, CleanView } from '../js/Global.js'

const form = document.getElementById('form');

form.addEventListener('submit', async(event) => {
  event.preventDefault();
  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  let products = await GetData();

  CleanView();

  CardAssemble(products);
});