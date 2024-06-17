const temAHtml = `            
            <div>
                <div class="slidesShow">aaaaaaaaaaaaaaaaa</div>
                <div class="upper">
                    
                </div>
                <div class="lower"></div>
            </div>`;
const routerView = document.querySelector('.center')
function rander() {
    routerView.innerHTML = temAHtml
}
export default rander
