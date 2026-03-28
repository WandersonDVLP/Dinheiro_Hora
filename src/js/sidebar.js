import { ConvertToLocale } from './global.js'
import { ViewItens } from './controllers/Form_Controller.js'

const moneyInput = document.querySelector('[name="money"]')

export const workDays = 30;
export const workHours = 9;

moneyInput.addEventListener('change', (e) => {
    let money = e.target.value;

    if(money !== 0 && money !== null){
        CalculaSalarioDia(money);
    }

    ViewItens();
});

function CalculaSalarioDia(value) {
    let target = document.querySelector('[name="money-day"]');
    let moneyDay = 0;

    moneyDay = value / workDays;

    CalculaSalarioHora(moneyDay);

    target.value = ConvertToLocale(moneyDay);
}

function CalculaSalarioHora(value) {
    let target = document.querySelector('[name="money-hours"]');
    let moneyHour = 0;

    moneyHour = value / workHours;

    target.value = ConvertToLocale(moneyHour);
}