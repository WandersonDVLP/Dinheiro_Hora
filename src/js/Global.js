const cardSection = document.querySelector('[name="card-section"]');

export function ConvertToLocale(value){
    return value.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})
}

// Recebe o array de produtos, monsta e exibe os dados.
export function CardAssemble(item){
    let card = `<div name="card"  class="card">
        <img src="${item.thumbnail}" alt="Teste">

        <div class="card-body">
            <div class="card-title">
                ${item.title}
            </div>

            <div class="card-subtitle">
                ${CalculateDays(item.price)}
                ${CalculateHours(item.price)}
            </div>
        </div>
    </div>`

    ShowCard(card);
}

export function ShowCard(card){
    cardSection.innerHTML += card;
}

export function CleanView(){
    cardSection.innerHTML = "";
}

function CalculateDays(value){
    let salaryDay = document.querySelector('[name="money-day"]').value;

    if(salaryDay == ''){
        return ConvertToLocale(value);
    }
    else {
        let salaryDayFormated = CleanMoney(salaryDay);
        let ret = Math.ceil(value / salaryDayFormated);

        return `<p>Dias trabalhados</p>
                <span>${ret} Dias</span>`;
    }
}

function CalculateHours(value){
    let salaryHour = document.querySelector('[name="money-hours"]').value;

    if(salaryHour == ''){
        return '';
    }
    else {
        let salaryHourFormated = CleanMoney(salaryHour);
        let ret = Math.ceil(value / salaryHourFormated);

        return `<p>Horas trabalhadas</p>
                <span>${ret} Horas</span>`
    }
}

function CleanMoney(value){
    // Remove tudo oque nao seja valor ou ponto.
    let e = value.replace(/[^\d,]/g, '').replace(',', '.');
    return e;
}