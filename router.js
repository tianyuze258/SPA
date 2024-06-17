const router = [
    {
        name: "/index",
        compoment: () => import("./components/templateIndex.js"),
    },
    {
        name: "/dynamicState",
        compoment: () => import("./components/templateDynamicState.js"),
    },
    {
        name: "/dynamicStateText",
        compoment: () => import("./components/templateDynamicStateText.js"),
    },
    {
        // 如果当前的 路由是 /, 那么就重定向到 /pageA
        name: "/",
        redirect: "/index",
    },
];

// 导出路由表
export default router;
