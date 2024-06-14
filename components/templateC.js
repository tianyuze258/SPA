const temCHtml = `<div id="pageC">pageC_template</div>`;
const routerView = document.querySelector('.router-view')
function rander () {
    routerView.innerHTML = temCHtml
}
export default rander
