import { GetDataForm, Preview, Next} from './controllers/Form_Controller.js'

const form = document.getElementById('form');
const btn_preview = document.querySelector('[name="preview"]');
const btn_next = document.querySelector('[name="next"]');

form.addEventListener('submit', async(event) => {
  event.preventDefault();
  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  GetDataForm(data.search);
});

btn_preview.addEventListener('click', () => {
  Preview();
})

btn_next.addEventListener('click', () => {
  Next();
})