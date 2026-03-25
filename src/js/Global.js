const cardSection = document.querySelector('[name="card-section"]');

export function ConvertToLocale(value){
    return value.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})
}

export function CardAssemble(data){
    let img = "./src/img/Teste.webp"

    let card = `<div name="card"  class="card">
        <img src="${img}" alt="Teste">

        <div class="card-body">
            <div class="card-title">
                descricao produto adaffafaafafafa
            </div>

            <div class="card-subtitle">
                <p>Dias trabalhados</p>
                <span>280 Dias</span>

                <p>Horas trabalhadas</p>
                <span>585 Horas</span>
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