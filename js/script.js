import { ConvertToLocale } from './functions.js'

const moneyInput = document.querySelector('[name="money"]')

moneyInput.addEventListener('change', (e) => {
    let money = e.target.value;

    if(money !== 0 && money !== null){
        CalculaSalarioDia(money);
    }
});

function CalculaSalarioDia(value) {
    let target = document.querySelector('[name="money-day"]');
    let moneyDay = 0;

    moneyDay = value / 30;

    CalculaSalarioHora(moneyDay);

    target.value = 'R$ ' +  ConvertToLocale(moneyDay);
}

function CalculaSalarioHora(value) {
    let target = document.querySelector('[name="money-hours"]');
    let moneyHour = 0;

    console.log('Hora: ', value);

    moneyHour = value / 7;

    target.value = 'R$ ' +  ConvertToLocale(moneyHour);
}