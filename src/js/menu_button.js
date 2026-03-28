const btn = document.querySelector('[name="btn-menu"]');
const close = document.querySelector('.sidebar');

btn.onclick = () => {
    let sidebar = document.querySelector('[name="sidebar"]').classList.toggle('show');
};

close.onclick = (e) => {
    let styleAfter = window.getComputedStyle(close, '::after');
    let widthAfter = parseInt(styleAfter.width);

    if(e.offsetX >= close.offsetWidth - widthAfter){
        let sidebar = document.querySelector('[name="sidebar"]').classList.toggle('show');
    }
}