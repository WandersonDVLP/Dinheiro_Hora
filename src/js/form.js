import { LoadData } from '../api/api.js'

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  LoadData();
});