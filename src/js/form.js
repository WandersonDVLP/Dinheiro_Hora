import { LoadData } from '../api/api.js'
import { CardAssemble, CleanView } from '../js/Global.js'

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let products = [];
  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  products = LoadData();

  CleanView();

  products.forEach(item => {
    CardAssemble(item);
  })
});