const btn = document.querySelector('[name="btn-menu"]');

btn.onclick = () => {
    let sidebar = document.querySelector('[name="sidebar"]').classList.toggle('show');
}