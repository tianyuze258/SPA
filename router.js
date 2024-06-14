const router = [
    {
        name: "/pageA",
        compoment: () => import("./components/templateA.js"),
    },
    {
        name: "/pageB",
        compoment: () => import("./components/templateB.js"),
    },
    {
        name: "/pageC",
        compoment: () => import("./components/templateC.js"),
    },
    {
        name: "/pageD",
        compoment: () => import("./components/templateD.js"),
    },
    {
        // 如果当前的 路由是 /, 那么就重定向到 /pageA
        name: "/",
        redirect: "/pageA",
    },
];

// 导出路由表
export default router;
