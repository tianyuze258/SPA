const temAHtml = `<div id="pageA">pageA_template</div>`;
const routerView = document.querySelector('.router-view')
function rander () {
    routerView.innerHTML = temAHtml
}
export default rander
