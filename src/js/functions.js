// Area aonde seram renderizados os itens
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

    RenderItem(card);
}

export function RenderItem(item){
    cardSection.innerHTML += item;
}

export function CleanView(){
    cardSection.innerHTML = "";
}

export function ShowMessage(){
    let render = `<span class="message">
                    <svg class="svg-exclamation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"/></svg>
                    Desculpe, Produto não localizado...
                </span>`
    RenderItem(render);
}

export function ViewItens(listproducts){
    CleanView();

    listproducts.forEach(item => {
        CardAssemble(item);
    });
}

function CalculateDays(value){
    let salaryDay = document.querySelector('[name="money-day"]').value;
    let salaryDayFormated = CleanMoney(salaryDay);

    if(salaryDayFormated == 0){
        return ConvertToLocale(value);
    }
    else {
        let ret = Math.ceil(value / salaryDayFormated);

        return `<p>Dias trabalhados</p>
                <span>${ret} Dias</span>`;
    }
}

function CalculateHours(value){
    let salaryHour = document.querySelector('[name="money-hours"]').value;
    let salaryHourFormated = CleanMoney(salaryHour);

    if(salaryHourFormated == 0){
        return '';
    }
    else {
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
