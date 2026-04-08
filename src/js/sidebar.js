import { ConvertToLocale } from './functions.js'
import { ViewItens } from './controllers/Form_Controller.js'

const btnCalculate = document.querySelector('[name="btn_Calculate"]');
const moneyInput = document.querySelector('[name="money"]')
const weekInput = document.querySelector('[name="weekHours"]')
const daysInput = document.querySelector('[name="dayHours"]')

btnCalculate.addEventListener('click', () => {
    Calcular();
});

function ShowSalaryHour(value) {
    // Pega o campo de exibiçao de valores por hora.
    let target = document.querySelector('[name="money-hours"]');

    target.value = ConvertToLocale(value);
}

function ShowSalaryDay(value) {
    // Pega o campo de exibição de valores por dia.
    let target = document.querySelector('[name="money-day"]');

    target.value = ConvertToLocale(value);
}

function CalculaValores(salary, hoursWeek, hoursDay){
    // Encontra o divisor mensal (horas semanais * 5)
    // O fator 5 é a convenção para incluir o descanso remunerado (DSR)
    const divideMonts = hoursWeek * 5;

    // Calcula o valor da hora
    const valueHours = salary / divideMonts;

    // Calcula o valor do dia (baseado na jornada real diária)
    const valueDays = valueHours * hoursDay;

    ShowSalaryHour(valueHours);
    ShowSalaryDay(valueDays);
}

function Calcular(){
    let money = moneyInput.value;
    let week = weekInput.value;
    let day = daysInput.value;

    if(money !== 0 && money !== "" && week !== 0 && week !== "" && day !== 0 && day !== ""){        
        CalculaValores(money, week, day);
    }
    else {
        alert('Preencha todos os campos.');
        return;
    }

    ViewItens();   
}