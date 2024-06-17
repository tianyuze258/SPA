const temBHtml = `<div id="pageB">pageB_template</div>`;
const routerView = document.querySelector('.router-view')
function rander () {
    routerView.innerHTML = temBHtml
}
export default rander
