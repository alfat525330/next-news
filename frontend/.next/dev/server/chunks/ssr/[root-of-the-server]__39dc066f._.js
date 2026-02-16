module.exports = [
"[project]/components/news/news-list.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function NewsList({ news }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "news-list",
        children: news.map((newsItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: `/news/${newsItem.slug}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: `${("TURBOPACK compile-time value", "http://localhost:4000")}/uploads/${newsItem.image}`,
                            alt: newsItem.title
                        }, void 0, false, {
                            fileName: "[project]/components/news/news-list.js",
                            lineNumber: 9,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: newsItem.title
                        }, void 0, false, {
                            fileName: "[project]/components/news/news-list.js",
                            lineNumber: 10,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/news/news-list.js",
                    lineNumber: 8,
                    columnNumber: 11
                }, this)
            }, newsItem.id, false, {
                fileName: "[project]/components/news/news-list.js",
                lineNumber: 7,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/news/news-list.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/lib/server-api.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// this is common helper function for use fetch for server side api call
__turbopack_context__.s([
    "default",
    ()=>callFetchfunction
]);
async function callFetchfunction(url, method, token) {
    return await fetch(`${("TURBOPACK compile-time value", "http://localhost:4000")}/api/${url}`, method, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        cache: "no-store"
    });
}
}),
"[project]/services/news.server.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNewsDetails",
    ()=>getNewsDetails,
    "getNewsList",
    ()=>getNewsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$jwt$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/jwt/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2d$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server-api.js [app-rsc] (ecmascript)");
;
;
;
;
async function getNewsList() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$jwt$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getToken"])({
        req: {
            cookies: cookieStore
        },
        secret: process.env.NEXTAUTH_SECRET
    });
    console.log("SERVER TOKEN:", token);
    if (!token?.accessToken) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/"); // or /login
    }
    //Fetch backend with token
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2d$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])('news', 'get', token.accessToken);
    if (!res.ok) {
        throw new Error("Failed to fetch news");
    }
    return res.json();
}
async function getNewsDetails(slug) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$jwt$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getToken"])({
        req: {
            cookies: cookieStore
        },
        secret: process.env.NEXTAUTH_SECRET
    });
    console.log("SERVER TOKEN:", token);
    if (!token?.accessToken) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/"); // or /login
    }
    //Fetch backend with token
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2d$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(`news/${slug}`, 'get', token.accessToken);
    if (!res.ok) {
        throw new Error("Failed to fetch news");
    }
    return res.json();
}
}),
"[project]/lib/news.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// this fun is for to get available news years
__turbopack_context__.s([
    "getAvailableNewsMonths",
    ()=>getAvailableNewsMonths,
    "getAvailableNewsYears",
    ()=>getAvailableNewsYears,
    "getNewsForYear",
    ()=>getNewsForYear,
    "getNewsForYearAndMonth",
    ()=>getNewsForYearAndMonth
]);
function getAvailableNewsYears(data) {
    return data.reduce((years, news)=>{
        const year = new Date(news.date).getFullYear();
        if (!years.includes(year)) {
            years.push(year);
        }
        return years;
    }, []).sort((a, b)=>b - a);
}
function getAvailableNewsMonths(data, year) {
    return data.reduce((months, news)=>{
        const newsYear = new Date(news.date).getFullYear();
        if (newsYear === +year) {
            const month = new Date(news.date).getMonth();
            if (!months.includes(month)) {
                months.push(month + 1);
            }
        }
        return months;
    }, []).sort((a, b)=>a - b);
}
function getNewsForYear(data, year) {
    return data.filter((news)=>new Date(news.date).getFullYear() === +year);
}
function getNewsForYearAndMonth(data, year, month) {
    return data.filter((news)=>{
        const newsYear = new Date(news.date).getFullYear();
        const newsMonth = new Date(news.date).getMonth() + 1;
        return newsYear === +year && newsMonth === +month;
    });
}
}),
"[project]/app/(content)/archive/@archive/[[...filter]]/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilteredNewsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$news$2f$news$2d$list$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/news/news-list.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$news$2e$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/news.server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$news$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/news.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function FilteredNewsPage({ params }) {
    // this fun is for to call api on server to collect data
    const { details: data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$news$2e$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNewsList"])();
    // filter data 
    const { filter } = await params;
    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];
    let news;
    let links = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$news$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAvailableNewsYears"])(data);
    console.log('links', links);
    if (selectedYear && !selectedMonth) {
        news = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$news$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNewsForYear"])(data, selectedYear);
        links = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$news$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAvailableNewsMonths"])(data, selectedYear);
    }
    if (selectedYear && selectedMonth) {
        news = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$news$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNewsForYearAndMonth"])(data, selectedYear, selectedMonth);
        links = [];
    }
    let newsContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "No news found for the selected period."
    }, void 0, false, {
        fileName: "[project]/app/(content)/archive/@archive/[[...filter]]/page.js",
        lineNumber: 36,
        columnNumber: 21
    }, this);
    if (news && news.length > 0) {
        newsContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$news$2f$news$2d$list$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            news: news
        }, void 0, false, {
            fileName: "[project]/app/(content)/archive/@archive/[[...filter]]/page.js",
            lineNumber: 39,
            columnNumber: 19
        }, this);
    }
    if (selectedYear && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$news$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAvailableNewsYears"])(data).includes(+selectedYear) || selectedMonth && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$news$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAvailableNewsMonths"])(data, selectedYear).includes(+selectedMonth)) {
        throw new Error('Invalid filter.');
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                id: "archive-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: links.map((link)=>{
                            const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: href,
                                    children: link
                                }, void 0, false, {
                                    fileName: "[project]/app/(content)/archive/@archive/[[...filter]]/page.js",
                                    lineNumber: 62,
                                    columnNumber: 19
                                }, this)
                            }, link, false, {
                                fileName: "[project]/app/(content)/archive/@archive/[[...filter]]/page.js",
                                lineNumber: 61,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/(content)/archive/@archive/[[...filter]]/page.js",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(content)/archive/@archive/[[...filter]]/page.js",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(content)/archive/@archive/[[...filter]]/page.js",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            newsContent
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__39dc066f._.js.map