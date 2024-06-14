// 1. 导入路由表
import router from "./router.js";

// 注册 hash 改变事件
window.onhashchange = hashChangeHandler;
hashChangeHandler();
function hashChangeHandler() {
    const hash = window.location.hash.slice(1) || "/";
    const info = router.find((t) => t.name === hash);

    // 路由表中 重定向的优先级最高
    if (info.redirect) return (window.location.hash = info.redirect);

    // 调用 component 的到一个返回值, 如果是普通引入, 那么这里一定是 undefined, 我们直接 return 即可
    const res = info.compoment();
    if (res === undefined) return;

    // 代码能运行到这里说明我们 调用 component 得到的是一个 promise 对象, 所以我们可以通过 then 方法以及他的参数去调用我们实际导出的内容
    res.then((result) => result.default());

}