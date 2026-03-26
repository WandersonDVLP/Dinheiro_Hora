const cardSection = document.querySelector('[name="card-section"]');

export function ConvertToLocale(value){
    return value.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})
}

// Recebe o array de produtos, monsta e exibe os dados.
export function CardAssemble(items){
    items.forEach(item => {
        let card = `<div name="card"  class="card">
            <img src="${item.image}" alt="Teste">

            <div class="card-body">
                <div class="card-title">
                    ${item.title}
                </div>

                <div class="card-subtitle">
                    <p>Dias trabalhados</p>
                    <span>${CalculateDays(item.price)} Dias</span>

                    <p>Horas trabalhadas</p>
                    <span>585 Horas</span>
                </div>
            </div>
        </div>`

        ShowCard(card); 
    });
}

export function ShowCard(card){
    cardSection.innerHTML += card;
}

export function CleanView(){
    cardSection.innerHTML = "";
}

function CalculateDays(value){
    console.log('Price -> ', value);
    let salaryDay = document.querySelector('[name="money-day"]').value;

    let salaryDayFormated = CleanMoney(salaryDay);

    return Math.ceil(value / salaryDayFormated);
}

function CalculateHours(value){
    let salaryHour = document.querySelector('[name="money-hour"]').value;
}

function CleanMoney(value){
    // Remove tudo oque nao seja valor ou ponto.
    let e = value.replace(/[^\d,]/g, '').replace(',', '.');
    return e;
}