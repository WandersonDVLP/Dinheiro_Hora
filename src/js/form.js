import { GetDataForm } from './controllers/Form_Controller.js'

const form = document.getElementById('form');

form.addEventListener('submit', async(event) => {
  event.preventDefault();
  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  GetDataForm(data.search);
});