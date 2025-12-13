module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0', {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
            outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-10 px-4 py-2',
            sm: 'h-9 rounded-md px-3',
            lg: 'h-11 rounded-md px-8',
            icon: 'h-10 w-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = 'Button';
;
}),
"[project]/components/header.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/header.tsx <module evaluation>", "Header");
}),
"[project]/components/header.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/header.tsx", "Header");
}),
"[project]/components/header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/header.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/header.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/hero-section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col items-center text-center relative mx-auto rounded-2xl overflow-hidden my-6 py-0 px-4 w-full h-[400px] md:w-[1220px] md:h-[600px] lg:h-[810px] md:px-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 1220 810",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    preserveAspectRatio: "xMidYMid slice",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            clipPath: "url(#clip0_186_1134)",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                    id: "mask0_186_1134",
                                    style: {
                                        maskType: "alpha"
                                    },
                                    maskUnits: "userSpaceOnUse",
                                    x: "10",
                                    y: "-1",
                                    width: "1200",
                                    height: "812",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "10",
                                        y: "-0.84668",
                                        width: "1200",
                                        height: "811.693",
                                        fill: "url(#paint0_linear_186_1134)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    mask: "url(#mask0_186_1134)",
                                    children: [
                                        [
                                            ...Array(35)
                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "9.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "45.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "81.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "117.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "153.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "189.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "225.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "261.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "297.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "333.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "369.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "405.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "441.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "477.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "513.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "549.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "585.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "621.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "657.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "693.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "729.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: -20.0891 + i * 36,
                                                        y: "765.2",
                                                        width: "35.6",
                                                        height: "35.6",
                                                        stroke: "hsl(var(--foreground))",
                                                        strokeOpacity: "0.11",
                                                        strokeWidth: "0.4",
                                                        strokeDasharray: "2 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, `row1-${i}`, true, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "699.711",
                                            y: "81",
                                            width: "36",
                                            height: "36",
                                            fill: "hsl(var(--foreground))",
                                            fillOpacity: "0.08"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "195.711",
                                            y: "153",
                                            width: "36",
                                            height: "36",
                                            fill: "hsl(var(--foreground))",
                                            fillOpacity: "0.09"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "1023.71",
                                            y: "153",
                                            width: "36",
                                            height: "36",
                                            fill: "hsl(var(--foreground))",
                                            fillOpacity: "0.09"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "123.711",
                                            y: "225",
                                            width: "36",
                                            height: "36",
                                            fill: "hsl(var(--foreground))",
                                            fillOpacity: "0.09"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 264,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "1095.71",
                                            y: "225",
                                            width: "36",
                                            height: "36",
                                            fill: "hsl(var(--foreground))",
                                            fillOpacity: "0.09"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "951.711",
                                            y: "297",
                                            width: "36",
                                            height: "36",
                                            fill: "hsl(var(--foreground))",
                                            fillOpacity: "0.09"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "231.711",
                                            y: "333",
                                            width: "36",
                                            height: "36",
                                            fill: "hsl(var(--foreground))",
                                            fillOpacity: "0.07"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 267,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "303.711",
                                            y: "405",
                                            width: "36",
                                            height: "36",
                                            fill: "hsl(var(--foreground))",
                                            fillOpacity: "0.07"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 268,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "87.7109",
                                            y: "405",
                                            width: "36",
                                            height: "36",
                                            fill: "hsl(var(--foreground))",
                                            fillOpacity: "0.09"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "519.711",
                                            y: "405",
                                            width: "36",
                                            height: "36",
                                            fill: "hsl(var(--foreground))",
                                            fillOpacity: "0.08"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "771.711",
                                            y: "405",
                                            width: "36",
                                            height: "36",
                                            fill: "hsl(var(--foreground))",
                                            fillOpacity: "0.09"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 271,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "591.711",
                                            y: "477",
                                            width: "36",
                                            height: "36",
                                            fill: "hsl(var(--foreground))",
                                            fillOpacity: "0.07"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 272,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    filter: "url(#filter0_f_186_1134)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M1447.45 -87.0203V-149.03H1770V1248.85H466.158V894.269C1008.11 894.269 1447.45 454.931 1447.45 -87.0203Z",
                                        fill: "url(#paint1_linear_186_1134)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    filter: "url(#filter1_f_186_1134)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M1383.45 -151.02V-213.03H1706V1184.85H402.158V830.269C944.109 830.269 1383.45 390.931 1383.45 -151.02Z",
                                        fill: "url(#paint2_linear_186_1134)",
                                        fillOpacity: "0.69"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    style: {
                                        mixBlendMode: "lighten"
                                    },
                                    filter: "url(#filter2_f_186_1134)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M1567.45 -231.02V-293.03H1890V1104.85H586.158V750.269C1128.11 750.269 1567.45 310.931 1567.45 -231.02Z",
                                        fill: "url(#paint3_linear_186_1134)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 291,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    style: {
                                        mixBlendMode: "overlay"
                                    },
                                    filter: "url(#filter3_f_186_1134)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M65.625 750.269H284.007C860.205 750.269 1327.31 283.168 1327.31 -293.03H1650V1104.85H65.625V750.269Z",
                                        fill: "url(#paint4_radial_186_1134)",
                                        fillOpacity: "0.64"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 298,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/hero-section.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "0.5",
                            y: "0.5",
                            width: "1219",
                            height: "809",
                            rx: "15.5",
                            stroke: "hsl(var(--foreground))",
                            strokeOpacity: "0.06"
                        }, void 0, false, {
                            fileName: "[project]/components/hero-section.tsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                    id: "filter0_f_186_1134",
                                    x: "147.369",
                                    y: "-467.818",
                                    width: "1941.42",
                                    height: "2035.46",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                            floodOpacity: "0",
                                            result: "BackgroundImageFix"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 326,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                            mode: "normal",
                                            in: "SourceGraphic",
                                            in2: "BackgroundImageFix",
                                            result: "shape"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 327,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                            stdDeviation: "159.394",
                                            result: "effect1_foregroundBlur_186_1134"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 328,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                    id: "filter1_f_186_1134",
                                    x: "-554.207",
                                    y: "-1169.39",
                                    width: "3216.57",
                                    height: "3310.61",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                            floodOpacity: "0",
                                            result: "BackgroundImageFix"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 339,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                            mode: "normal",
                                            in: "SourceGraphic",
                                            in2: "BackgroundImageFix",
                                            result: "shape"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 340,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                            stdDeviation: "478.182",
                                            result: "effect1_foregroundBlur_186_1134"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 341,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                    id: "filter2_f_186_1134",
                                    x: "426.762",
                                    y: "-452.424",
                                    width: "1622.63",
                                    height: "1716.67",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                            floodOpacity: "0",
                                            result: "BackgroundImageFix"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                            mode: "normal",
                                            in: "SourceGraphic",
                                            in2: "BackgroundImageFix",
                                            result: "shape"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                            stdDeviation: "79.6969",
                                            result: "effect1_foregroundBlur_186_1134"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 354,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                    id: "filter3_f_186_1134",
                                    x: "-253.163",
                                    y: "-611.818",
                                    width: "2221.95",
                                    height: "2035.46",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                            floodOpacity: "0",
                                            result: "BackgroundImageFix"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 365,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                            mode: "normal",
                                            in: "SourceGraphic",
                                            in2: "BackgroundImageFix",
                                            result: "shape"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 366,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                            stdDeviation: "159.394",
                                            result: "effect1_foregroundBlur_186_1134"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 367,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 356,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "paint0_linear_186_1134",
                                    x1: "35.0676",
                                    y1: "23.6807",
                                    x2: "903.8",
                                    y2: "632.086",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            stopColor: "hsl(var(--foreground))",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 377,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "1",
                                            stopColor: "hsl(var(--muted-foreground))"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 378,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 369,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "paint1_linear_186_1134",
                                    x1: "1118.08",
                                    y1: "-149.03",
                                    x2: "1118.08",
                                    y2: "1248.85",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            stopColor: "hsl(var(--foreground))"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 388,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0.578125",
                                            stopColor: "hsl(var(--primary-light))"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 389,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "1",
                                            stopColor: "hsl(var(--primary))"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 390,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 380,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "paint2_linear_186_1134",
                                    x1: "1054.08",
                                    y1: "-213.03",
                                    x2: "1054.08",
                                    y2: "1184.85",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            stopColor: "hsl(var(--foreground))"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 400,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0.578125",
                                            stopColor: "hsl(var(--primary-light))"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 401,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "1",
                                            stopColor: "hsl(var(--primary))"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 402,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 392,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "paint3_linear_186_1134",
                                    x1: "1238.08",
                                    y1: "-293.03",
                                    x2: "1238.08",
                                    y2: "1104.85",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            stopColor: "hsl(var(--foreground))"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 412,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0.578125",
                                            stopColor: "hsl(var(--primary-light))"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 413,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "1",
                                            stopColor: "hsl(var(--primary))"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 414,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 404,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                    id: "paint4_radial_186_1134",
                                    cx: "0",
                                    cy: "0",
                                    r: "1",
                                    gradientUnits: "userSpaceOnUse",
                                    gradientTransform: "translate(989.13 557.24) rotate(47.9516) scale(466.313 471.424)",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            stopColor: "hsl(var(--foreground))"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 424,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0.157789",
                                            stopColor: "hsl(var(--primary-light))"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 425,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "1",
                                            stopColor: "hsl(var(--primary))"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 426,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 416,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                    id: "clip0_186_1134",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "1220",
                                        height: "810",
                                        rx: "16",
                                        fill: "hsl(var(--foreground))"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 429,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 428,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/hero-section.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/hero-section.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero-section.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                    fileName: "[project]/components/hero-section.tsx",
                    lineNumber: 437,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero-section.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 space-y-4 md:space-y-5 lg:space-y-6 mb-6 md:mb-7 lg:mb-9 max-w-md md:max-w-[500px] lg:max-w-[588px] mt-16 md:mt-[120px] lg:mt-[160px] px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-foreground text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight",
                        children: "Your Journey To A Dream Career Starts Here."
                    }, void 0, false, {
                        fileName: "[project]/components/hero-section.tsx",
                        lineNumber: 441,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-base md:text-base lg:text-lg font-medium leading-relaxed max-w-lg mx-auto",
                        children: "Unlock your dream job through disciplined learning, real practice, and smart strategies."
                    }, void 0, false, {
                        fileName: "[project]/components/hero-section.tsx",
                        lineNumber: 444,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero-section.tsx",
                lineNumber: 440,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/signup",
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                    className: "relative z-10 bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-full font-medium text-base shadow-lg ring-1 ring-white/10",
                    children: "Signup for free"
                }, void 0, false, {
                    fileName: "[project]/components/hero-section.tsx",
                    lineNumber: 450,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero-section.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hero-section.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/dashboard-preview.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardPreview",
    ()=>DashboardPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)"); // Import the Image component
;
;
function DashboardPreview() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[calc(100vw-32px)] md:w-[1160px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-primary-light/50 rounded-2xl p-2 shadow-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/dashboard-preview.png",
                alt: "Dashboard preview",
                width: 1160,
                height: 700,
                className: "w-full h-full object-cover rounded-xl shadow-lg"
            }, void 0, false, {
                fileName: "[project]/components/dashboard-preview.tsx",
                lineNumber: 7,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/dashboard-preview.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dashboard-preview.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/social-proof.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SocialProof",
    ()=>SocialProof
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
function SocialProof() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "self-stretch py-16 flex flex-col justify-center items-center gap-6 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-gray-300 text-sm font-medium leading-tight",
                children: "Trusted by fast-growing startups"
            }, void 0, false, {
                fileName: "[project]/components/social-proof.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "self-stretch grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center",
                children: Array.from({
                    length: 8
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: `/logos/logo0${i + 1}.svg`,
                        alt: `Company Logo ${i + 1}`,
                        width: 400,
                        height: 120,
                        className: "w-full max-w-[400px] h-auto object-contain grayscale opacity-70"
                    }, i, false, {
                        fileName: "[project]/components/social-proof.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/social-proof.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/social-proof.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/bento/ai-code-reviews.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 1. CompanyPrepDashboard.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const CompanyPrepDashboard = ()=>{
    const themeVars = {
        "--ai-primary-color": "#00ff88",
        "--ai-background-color": "#000000",
        "--ai-text-color": "#ffffff",
        "--ai-text-dark": "#000000",
        "--ai-border-color": "rgba(255,255,255,0.1)",
        "--ai-border-main": "rgba(255,255,255,0.05)",
        "--ai-highlight-primary": "rgba(0,255,136,0.12)",
        "--ai-highlight-header": "rgba(0,255,136,0.2)"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            height: "100%",
            position: "relative",
            background: "transparent",
            ...themeVars
        },
        role: "img",
        "aria-label": "Company dashboard showing 50+ companies with question counts",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "30px",
                    left: "50%",
                    transform: "translateX(-50%) scale(0.9)",
                    width: "340px",
                    height: "205.949px",
                    background: "linear-gradient(180deg, var(--ai-background-color) 0%, transparent 100%)",
                    opacity: 0.6,
                    borderRadius: "8.826px",
                    border: "0.791px solid var(--ai-border-color)",
                    overflow: "hidden",
                    backdropFilter: "blur(16px)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border rounded-lg bg-card",
                    style: {
                        padding: "7.355px 8.826px",
                        height: "100%",
                        boxSizing: "border-box",
                        overflow: "hidden"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Geist Mono', monospace",
                            fontSize: "9.562px",
                            lineHeight: "14.711px",
                            letterSpacing: "-0.2942px",
                            color: "hsl(var(--muted-foreground))",
                            width: "100%",
                            maxWidth: "320px",
                            margin: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    whiteSpace: "pre-wrap"
                                },
                                children: "TCS (450+ Questions)"
                            }, void 0, false, {
                                fileName: "[project]/components/bento/ai-code-reviews.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    whiteSpace: "pre-wrap"
                                },
                                children: "Accenture (380+)"
                            }, void 0, false, {
                                fileName: "[project]/components/bento/ai-code-reviews.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    whiteSpace: "pre-wrap"
                                },
                                children: "Wipro (320+)"
                            }, void 0, false, {
                                fileName: "[project]/components/bento/ai-code-reviews.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    whiteSpace: "pre-wrap"
                                },
                                children: "Infosys (290+)"
                            }, void 0, false, {
                                fileName: "[project]/components/bento/ai-code-reviews.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    whiteSpace: "pre-wrap"
                                },
                                children: "Cognizant (260+)"
                            }, void 0, false, {
                                fileName: "[project]/components/bento/ai-code-reviews.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    whiteSpace: "pre-wrap"
                                },
                                children: "Capgemini (220+)"
                            }, void 0, false, {
                                fileName: "[project]/components/bento/ai-code-reviews.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/bento/ai-code-reviews.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/bento/ai-code-reviews.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/bento/ai-code-reviews.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "51.336px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "340px",
                    height: "221.395px",
                    background: "var(--ai-background-color)",
                    backdropFilter: "blur(16px)",
                    borderRadius: "9.488px",
                    border: "1px solid var(--ai-border-main)",
                    overflow: "hidden"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-card border border-border",
                    style: {
                        padding: "9.488px",
                        height: "100%",
                        boxSizing: "border-box",
                        position: "relative",
                        overflow: "hidden"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                left: 0,
                                right: 0,
                                width: "100%",
                                top: "47.67px",
                                height: "33.118px",
                                background: "hsl(var(--foreground) / 0.08)",
                                zIndex: 1
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/bento/ai-code-reviews.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                left: 0,
                                right: 0,
                                width: "100%",
                                top: "80.791px",
                                height: "45.465px",
                                background: "var(--ai-highlight-primary)",
                                zIndex: 1
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/bento/ai-code-reviews.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: "'Geist Mono', monospace",
                                fontSize: "10.279px",
                                lineHeight: "15.814px",
                                letterSpacing: "-0.3163px",
                                color: "var(--ai-text-color)",
                                width: "100%",
                                maxWidth: "320px",
                                position: "relative",
                                zIndex: 2,
                                margin: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                        fontWeight: 600
                                    },
                                    children: "🏢 TCS"
                                }, void 0, false, {
                                    fileName: "[project]/components/bento/ai-code-reviews.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: 0,
                                        whiteSpace: "pre-wrap"
                                    },
                                    children: "450+ Questions"
                                }, void 0, false, {
                                    fileName: "[project]/components/bento/ai-code-reviews.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                        fontWeight: 600
                                    },
                                    children: "📱 Accenture"
                                }, void 0, false, {
                                    fileName: "[project]/components/bento/ai-code-reviews.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: 0,
                                        whiteSpace: "pre-wrap"
                                    },
                                    children: "380+ Questions"
                                }, void 0, false, {
                                    fileName: "[project]/components/bento/ai-code-reviews.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                        fontWeight: 600
                                    },
                                    children: "💻 Wipro"
                                }, void 0, false, {
                                    fileName: "[project]/components/bento/ai-code-reviews.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: 0,
                                        whiteSpace: "pre-wrap"
                                    },
                                    children: "320+ Questions"
                                }, void 0, false, {
                                    fileName: "[project]/components/bento/ai-code-reviews.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                        fontWeight: 600
                                    },
                                    children: "🔧 Infosys"
                                }, void 0, false, {
                                    fileName: "[project]/components/bento/ai-code-reviews.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: 0,
                                        whiteSpace: "pre-wrap"
                                    },
                                    children: "290+ Questions"
                                }, void 0, false, {
                                    fileName: "[project]/components/bento/ai-code-reviews.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                        fontWeight: 600
                                    },
                                    children: "🛠️ Cognizant"
                                }, void 0, false, {
                                    fileName: "[project]/components/bento/ai-code-reviews.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: 0,
                                        whiteSpace: "pre-wrap"
                                    },
                                    children: "260+ Questions"
                                }, void 0, false, {
                                    fileName: "[project]/components/bento/ai-code-reviews.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: 0,
                                        whiteSpace: "pre-wrap",
                                        fontWeight: 600
                                    },
                                    children: "⚡ Capgemini"
                                }, void 0, false, {
                                    fileName: "[project]/components/bento/ai-code-reviews.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: 0,
                                        whiteSpace: "pre-wrap"
                                    },
                                    children: "220+ Questions"
                                }, void 0, false, {
                                    fileName: "[project]/components/bento/ai-code-reviews.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/bento/ai-code-reviews.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            style: {
                                position: "absolute",
                                top: "calc(50% + 29.745px)",
                                right: "20px",
                                transform: "translateY(-50%)",
                                zIndex: 3,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "3.953px",
                                background: "var(--ai-primary-color)",
                                color: "var(--ai-text-dark)",
                                border: "none",
                                cursor: "pointer",
                                fontWeight: 500,
                                whiteSpace: "nowrap",
                                transition: "all 0.2s ease",
                                padding: "3.163px 6.326px",
                                borderRadius: "5.535px",
                                fontSize: "10.279px",
                                lineHeight: "15.814px",
                                letterSpacing: "-0.3163px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'Geist', sans-serif",
                                    fontWeight: 500
                                },
                                children: "Prep Now"
                            }, void 0, false, {
                                fileName: "[project]/components/bento/ai-code-reviews.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/bento/ai-code-reviews.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/bento/ai-code-reviews.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/bento/ai-code-reviews.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/bento/ai-code-reviews.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CompanyPrepDashboard;
}),
"[project]/components/bento/real-time-previews.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/bento/real-time-previews.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/bento/real-time-previews.tsx <module evaluation>", "default");
}),
"[project]/components/bento/real-time-previews.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/bento/real-time-previews.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/bento/real-time-previews.tsx", "default");
}),
"[project]/components/bento/real-time-previews.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bento$2f$real$2d$time$2d$previews$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/bento/real-time-previews.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bento$2f$real$2d$time$2d$previews$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/bento/real-time-previews.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bento$2f$real$2d$time$2d$previews$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/bento/one-click-integrations-illustration.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const OneClickIntegrationsIllustration = ({ className = "" })=>{
    const themeVars = {
        "--oci-primary-color": "hsl(var(--primary))",
        "--oci-background-color": "hsl(var(--background))",
        "--oci-foreground-color": "hsl(var(--foreground))",
        "--oci-muted-foreground-color": "hsl(var(--muted-foreground))",
        "--oci-border-color": "hsl(var(--border))",
        "--oci-shadow-color": "rgba(0, 0, 0, 0.12)",
        "--oci-gradient-light-gray-start": "hsl(var(--foreground) / 0.2)",
        "--oci-gradient-light-gray-end": "transparent"
    };
    // Helper component for rendering each logo box
    const LogoBox = ({ logoSvg, isGradientBg })=>{
        const boxStyle = {
            width: "60px",
            height: "60px",
            position: "relative",
            borderRadius: "9px",
            border: `1px ${themeVars["--oci-border-color"]} solid`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            flexShrink: 0
        };
        const innerContentStyle = {
            width: "36px",
            height: "36px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        };
        if (isGradientBg) {
            boxStyle.background = `linear-gradient(180deg, ${themeVars["--oci-gradient-light-gray-start"]} 0%, ${themeVars["--oci-gradient-light-gray-end"]} 100%)`;
            boxStyle.boxShadow = `0px 1px 2px ${themeVars["--oci-shadow-color"]}`;
            boxStyle.backdropFilter = "blur(18px)";
            boxStyle.padding = "6px 8px";
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: boxStyle,
            children: logoSvg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: innerContentStyle,
                children: logoSvg
            }, void 0, false, {
                fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                lineNumber: 54,
                columnNumber: 46
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
            lineNumber: 54,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    };
    // SVG content for logos, with fill/stroke updated to use CSS variables
    const FigmaLogo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "36",
        height: "37",
        viewBox: "0 0 36 37",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip0_254_68688)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0.440897 22.2606C0.360977 21.9189 0.767777 21.704 1.01582 21.9521L14.1601 35.0964C14.4085 35.3448 14.1933 35.7516 13.8516 35.6713C7.21862 34.115 1.99682 28.8936 0.440897 22.2606ZM0.00061684 16.9923C-0.00235205 17.0427 0.00541993 17.0932 0.0234181 17.1404C0.0414162 17.1875 0.0692298 17.2303 0.105017 17.2659L18.8459 36.0079C18.9183 36.0799 19.018 36.1184 19.1195 36.1123C19.9727 36.0587 20.8097 35.9467 21.6262 35.7786C21.9016 35.7221 21.997 35.384 21.7983 35.1853L0.927257 14.3136C0.728537 14.1152 0.390497 14.2106 0.333977 14.486C0.164325 15.3126 0.0529306 16.1501 0.00061684 16.9923ZM1.5155 10.8061C1.48646 10.8719 1.47807 10.945 1.49144 11.0157C1.50481 11.0864 1.53931 11.1514 1.59038 11.2021L24.9097 34.5215C25.0138 34.6259 25.1711 34.6565 25.3057 34.5963C25.9463 34.311 26.5695 33.9883 27.1723 33.6301C27.2185 33.6024 27.2578 33.5644 27.287 33.5192C27.3163 33.4739 27.3348 33.4226 27.3412 33.3691C27.3475 33.3155 27.3415 33.2613 27.3237 33.2104C27.3059 33.1596 27.2766 33.1135 27.2382 33.0757L3.03686 8.87327C2.99905 8.8348 2.95294 8.8055 2.90206 8.78761C2.85118 8.76973 2.79687 8.76374 2.74331 8.7701C2.68976 8.77646 2.63836 8.795 2.59308 8.8243C2.5478 8.85361 2.50984 8.89289 2.4821 8.93914C2.12386 9.54195 1.80123 10.1652 1.51586 10.8057L1.5155 10.8061ZM4.55678 6.61894C4.49232 6.55515 4.45472 6.46909 4.45171 6.37845C4.4487 6.2878 4.48049 6.19944 4.54058 6.1315C7.8407 2.4379 12.6399 0.112305 17.9826 0.112305C27.933 0.112305 35.9999 8.17882 35.9999 18.1296C35.9999 23.472 33.6743 28.2715 29.9807 31.5713C29.9128 31.6313 29.8244 31.6631 29.7338 31.6601C29.6431 31.6571 29.5571 31.6195 29.4933 31.5551L4.55714 6.61894H4.55678Z",
                    fill: "var(--oci-primary-color)"
                }, void 0, false, {
                    fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "clip0_254_68688",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "36",
                        height: "36",
                        fill: "white",
                        transform: "translate(0 0.112305)"
                    }, void 0, false, {
                        fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    const VercelLogo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "36",
        height: "37",
        viewBox: "0 0 36 37",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip0_254_68704)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M36 16.7736H25.4731L34.5898 11.51L32.5877 8.0412L23.471 13.3048L28.7333 4.18878L25.2645 2.18544L20.0022 11.3016V0.775391H15.9978V11.3026L10.7333 2.18544L7.26567 4.1878L12.5291 13.3037L3.41227 8.0412L1.41005 11.509L10.5268 16.7726H0V20.7772H10.5258L1.41005 26.0408L3.41227 29.5096L12.5281 24.247L7.26455 33.363L10.7333 35.3653L15.9968 26.2483V36.7754H20.0012V26.2492L25.2637 35.3653L28.7322 33.363L23.4689 24.246L32.5856 29.5096L34.5881 26.0408L25.4721 20.7782H35.9979V16.7736H36ZM18 24.2218C14.9805 24.2218 12.5331 21.7745 12.5331 18.7549C12.5331 15.7354 14.9805 13.2879 18 13.2879C21.0195 13.2879 23.4668 15.7354 23.4668 18.7549C23.4668 21.7745 21.0195 24.2218 18 24.2218Z",
                    fill: "var(--oci-primary-color)"
                }, void 0, false, {
                    fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "clip0_254_68704",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "36",
                        height: "36",
                        fill: "white",
                        transform: "translate(0 0.775391)"
                    }, void 0, false, {
                        fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    const GitHubLogo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "36",
        height: "37",
        viewBox: "0 0 36 37",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip0_254_68698)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18 0.111328C8.055 0.111328 0 8.16633 0 18.1113C0 26.0763 5.1525 32.8038 12.3075 35.1888C13.2075 35.3463 13.545 34.8063 13.545 34.3338C13.545 33.9063 13.5225 32.4888 13.5225 30.9813C9 31.8138 7.83 29.8788 7.47 28.8663C7.2675 28.3488 6.39 26.7513 5.625 26.3238C4.995 25.9863 4.095 25.1538 5.6025 25.1313C7.02 25.1088 8.0325 26.4363 8.37 26.9763C9.99 29.6988 12.5775 28.9338 13.6125 28.4613C13.77 27.2913 14.2425 26.5038 14.76 26.0538C10.755 25.6038 6.57 24.0513 6.57 17.1663C6.57 15.2088 7.2675 13.5888 8.415 12.3288C8.235 11.8788 7.605 10.0338 8.595 7.55883C8.595 7.55883 10.1025 7.08633 13.545 9.40383C14.985 8.99883 16.515 8.79633 18.045 8.79633C19.575 8.79633 21.105 8.99883 22.545 9.40383C25.9875 7.06383 27.495 7.55883 27.495 7.55883C28.485 10.0338 27.855 11.8788 27.675 12.3288C28.8225 13.5888 29.52 15.1863 29.52 17.1663C29.52 24.0738 25.3125 25.6038 21.3075 26.0538C21.96 26.6163 22.5225 27.6963 22.5225 29.3838C22.5225 31.7913 22.5 33.7263 22.5 34.3338C22.5 34.8063 22.8375 35.3688 23.7375 35.1888C30.8475 32.8038 36 26.0538 36 18.1113C36 8.16633 27.945 0.111328 18 0.111328Z",
                    fill: "var(--oci-primary-color)"
                }, void 0, false, {
                    fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "clip0_254_68698",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "36",
                        height: "36",
                        fill: "white",
                        transform: "translate(0 0.111328)"
                    }, void 0, false, {
                        fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    const SlackLogo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "36",
        height: "29",
        viewBox: "0 0 36 29",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip0_254_68690)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M30.1094 1.82111C32.5374 0.000749489 36 1.73304 36 4.76642V25.6297C36 26.9857 34.9018 28.0846 33.5459 28.0848H27.8184V14.1746L18 21.5389L8.18164 14.1746V28.0848H2.45508C1.09889 28.0848 0 26.9858 0 25.6297V4.76642C0 1.73314 3.46259 0.000650114 5.89062 1.82111L8.18164 3.53888L18 10.9022L27.8184 3.53888L30.1094 1.82111Z",
                    fill: "var(--oci-primary-color)"
                }, void 0, false, {
                    fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "clip0_254_68690",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "36",
                        height: "28.0842",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    const VSCodeLogo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "36",
        height: "38",
        viewBox: "0 0 36 38",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip0_254_68700)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M21.043 36.4463C20.0985 37.6356 18.1836 36.984 18.1609 35.4653L17.8281 13.2539H32.7631C35.4682 13.2539 36.9769 16.3783 35.2948 18.4969L21.043 36.4463Z",
                        fill: "url(#paint0_linear_254_68700)"
                    }, void 0, false, {
                        fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M21.043 36.4463C20.0985 37.6356 18.1836 36.984 18.1609 35.4653L17.8281 13.2539H32.7631C35.4682 13.2539 36.9769 16.3783 35.2948 18.4969L21.043 36.4463Z",
                        fill: "url(#paint1_linear_254_68700)",
                        fillOpacity: "0.2"
                    }, void 0, false, {
                        fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14.9668 0.706059C15.9112 -0.483394 17.8261 0.16834 17.8489 1.68697L17.9947 23.8984H3.24665C0.541445 23.8984 -0.967295 20.7739 0.714879 18.6554L14.9668 0.706059Z",
                        fill: "var(--oci-primary-color)"
                    }, void 0, false, {
                        fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "paint0_linear_254_68700",
                        x1: "17.8281",
                        y1: "18.1787",
                        x2: "31.1018",
                        y2: "23.7457",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: "var(--oci-primary-color)"
                            }, void 0, false, {
                                fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "var(--oci-primary-color)"
                            }, void 0, false, {
                                fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "paint1_linear_254_68700",
                        x1: "11.9433",
                        y1: "10.1213",
                        x2: "17.9968",
                        y2: "21.5167",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {}, void 0, false, {
                                fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: "clip0_254_68700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: "36",
                            height: "37.3211",
                            fill: "white",
                            transform: "translate(0 0.0224609)"
                        }, void 0, false, {
                            fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    // Define the grid items with their respective logos and properties
    const gridItems = Array(40).fill(null).map((_, i)=>{
        const item = {};
        const row = Math.floor(i / 10);
        const col = i % 10;
        // Assign logos to specific positions
        if (row === 0 && col === 3) {
            item.logoSvg = FigmaLogo;
            item.isGradientBg = true;
        } else if (row === 1 && col === 5) {
            item.logoSvg = VercelLogo;
            item.isGradientBg = true;
        } else if (row === 2 && col === 3) {
            item.logoSvg = GitHubLogo;
            item.isGradientBg = true;
        } else if (row === 2 && col === 7) {
            item.logoSvg = SlackLogo;
            item.isGradientBg = true;
        } else if (row === 3 && col === 5) {
            item.logoSvg = VSCodeLogo;
            item.isGradientBg = true;
        }
        return item;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full h-full relative ${className}`,
        style: {
            ...themeVars
        },
        role: "img",
        "aria-label": "One-click integrations illustration showing a grid of connected squares",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "377.33px",
                    height: "278.08px",
                    left: "0px",
                    top: "24px",
                    position: "absolute",
                    background: `radial-gradient(ellipse 103.87% 77.04% at 52.56% -1.80%, 
            ${themeVars["--oci-foreground-color"]}00 0%, 
            ${themeVars["--oci-foreground-color"]}F5 15%, 
            ${themeVars["--oci-foreground-color"]}66 49%, 
            ${themeVars["--oci-foreground-color"]}F5 87%, 
            ${themeVars["--oci-foreground-color"]}00 100%)`
                }
            }, void 0, false, {
                fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "377px",
                    height: "265px",
                    left: "0.34px",
                    top: "43.42px",
                    position: "absolute",
                    backdropFilter: "blur(7.91px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "16px"
                },
                children: Array.from({
                    length: 4
                }).map((_, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: "16px"
                        },
                        children: gridItems.slice(rowIndex * 10, (rowIndex + 1) * 10).map((item, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoBox, {
                                ...item
                            }, colIndex, false, {
                                fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                                lineNumber: 248,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, rowIndex, false, {
                        fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/bento/one-click-integrations-illustration.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = OneClickIntegrationsIllustration;
}),
"[project]/components/bento/mcp-connectivity-illustration.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-rsc] (ecmascript) <export default as Search>");
;
;
const McpConnectivityIllustration = ({ className = "" })=>{
    // Integration data with new SVG paths
    const integrations = [
        {
            name: "Figma",
            icon: "/images/mcp-integrations/figma.svg",
            installed: true
        },
        {
            name: "Shadcn UI",
            icon: "/images/mcp-integrations/shadcn.svg"
        },
        {
            name: "Next.js",
            icon: "/images/mcp-integrations/nextjs.svg",
            installed: true
        },
        {
            name: "Tailwind CSS",
            icon: "/images/mcp-integrations/tailwind-css.svg"
        },
        {
            name: "Resend",
            icon: "/images/mcp-integrations/resend.svg",
            installed: true
        },
        {
            name: "React",
            icon: "/images/mcp-integrations/react.svg"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full h-full flex items-center justify-center p-4 relative ${className}`,
        role: "img",
        "aria-label": "MCP Connectivity component showcasing installed integrations list",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, calc(-50% + 24px))",
                width: "345px",
                height: "277px",
                background: "linear-gradient(180deg, hsl(var(--background)) 0%, transparent 100%)",
                backdropFilter: "blur(16px)",
                borderRadius: "9.628px",
                border: "0.802px solid hsl(var(--border))",
                overflow: "hidden"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "12.837px",
                            padding: "8.826px 12.837px",
                            borderBottom: "0.802px solid hsl(var(--border))",
                            width: "100%",
                            boxSizing: "border-box"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "14.442px",
                                    height: "14.442px",
                                    position: "relative",
                                    flexShrink: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "w-full h-full text-muted-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/components/bento/mcp-connectivity-illustration.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/bento/mcp-connectivity-illustration.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                                    fontSize: "12.837px",
                                    lineHeight: "19.256px",
                                    color: "hsl(var(--muted-foreground))",
                                    fontWeight: 400,
                                    whiteSpace: "nowrap"
                                },
                                children: "Search for servers"
                            }, void 0, false, {
                                fileName: "[project]/components/bento/mcp-connectivity-illustration.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/bento/mcp-connectivity-illustration.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    integrations.map((integration, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "8.826px 12.837px",
                                borderBottom: index < integrations.length - 1 ? "0.479px solid hsl(var(--border))" : "none",
                                width: "100%",
                                boxSizing: "border-box"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12.837px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "24px",
                                                height: "24px",
                                                position: "relative",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: integration.icon || "/placeholder.svg",
                                                alt: integration.name,
                                                className: "w-full h-full object-contain opacity-70 grayscale"
                                            }, void 0, false, {
                                                fileName: "[project]/components/bento/mcp-connectivity-illustration.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/bento/mcp-connectivity-illustration.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                                                fontSize: "12.837px",
                                                lineHeight: "19.256px",
                                                color: "hsl(var(--muted-foreground))",
                                                fontWeight: 400,
                                                whiteSpace: "nowrap"
                                            },
                                            children: integration.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/bento/mcp-connectivity-illustration.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/bento/mcp-connectivity-illustration.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                integration.installed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "hsl(var(--primary) / 0.08)",
                                        padding: "1.318px 5.272px",
                                        borderRadius: "3.295px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                                            fontSize: "9.583px",
                                            lineHeight: "15.333px",
                                            color: "hsl(var(--primary))",
                                            fontWeight: 500,
                                            whiteSpace: "nowrap"
                                        },
                                        children: "Installed"
                                    }, void 0, false, {
                                        fileName: "[project]/components/bento/mcp-connectivity-illustration.tsx",
                                        lineNumber: 146,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/bento/mcp-connectivity-illustration.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, integration.name, true, {
                            fileName: "[project]/components/bento/mcp-connectivity-illustration.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/components/bento/mcp-connectivity-illustration.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/bento/mcp-connectivity-illustration.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/bento/mcp-connectivity-illustration.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = McpConnectivityIllustration;
}),
"[project]/components/bento/easy-deployment.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const DeploymentEasy = ({ width = "100%", height = "100%", className = "" })=>{
    /* ------------------------------------------------------------
   * Theme-based design tokens using global CSS variables
   * ---------------------------------------------------------- */ const themeVars = {
        "--deploy-primary-color": "hsl(var(--primary))",
        "--deploy-background-color": "hsl(var(--background))",
        "--deploy-text-color": "hsl(var(--foreground))",
        "--deploy-text-secondary": "hsl(var(--muted-foreground))",
        "--deploy-border-color": "hsl(var(--border))"
    };
    /* ------------------------------------------------------------
   * Console log output (static for demo) – can be replaced via props
   * ---------------------------------------------------------- */ const logLines = [
        "[16:37:25.637] Running build in Washington, D.C., USA (East) – iad1",
        "[16:37:25.638] Build machine configuration: 2 cores, 8 GB",
        "[16:37:25.653] Retrieving list of deployment files...",
        "[16:37:25.741] Previous build caches not available",
        "[16:37:25.979] Downloading 84 deployment files...",
        '[16:37:29.945] Running "vercel build"',
        "[16:37:30.561] Vercel CLI 44.5.0",
        '[16:37:30.880] Running "install" command: `bun install`...',
        "[16:37:30.914] bun install v1.2.19 (aad3abea)",
        "[16:37:30.940] Resolving dependencies",
        "[16:37:34.436] Resolved, downloaded and extracted [1116]",
        '[16:37:34.436] warn: incorrect peer dependency "react@19.1.0"',
        "[16:37:37.265] Saved lockfile",
        "[16:37:39.076] Next.js anonymous telemetry notice",
        "[16:37:39.137] ▲ Next.js 15.2.4",
        "[16:37:41.439] ✓ Compiled successfully",
        "[16:37:53.979] ✓ Generated static pages",
        "[16:38:00.585] ○ (Static) prerendered as static content",
        "[16:38:01.099] Build Completed in /vercel/output [30s]",
        "🚀 Deployment complete – Easy!"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full h-full flex items-center justify-center p-4 relative ${className}`,
        style: {
            width,
            height,
            position: "relative",
            background: "transparent",
            ...themeVars
        },
        role: "img",
        "aria-label": "Deployment console output with Deploy on Vercel button",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "340px",
                    height: "239px",
                    background: "linear-gradient(180deg, var(--deploy-background-color) 0%, transparent 100%)",
                    backdropFilter: "blur(7.907px)",
                    borderRadius: "10px",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: "2px",
                            borderRadius: "8px",
                            background: "hsl(var(--foreground) / 0.08)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/bento/easy-deployment.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            padding: "8px",
                            height: "100%",
                            overflow: "hidden",
                            fontFamily: "'Geist Mono', 'SF Mono', Monaco, Consolas, 'Liberation Mono', monospace",
                            fontSize: "10px",
                            lineHeight: "16px",
                            color: "var(--deploy-text-color)",
                            whiteSpace: "pre"
                        },
                        children: logLines.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0
                                },
                                children: line
                            }, index, false, {
                                fileName: "[project]/components/bento/easy-deployment.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/bento/easy-deployment.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            border: "0.791px solid var(--deploy-border-color)",
                            borderRadius: "10px",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/bento/easy-deployment.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/bento/easy-deployment.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                style: {
                    position: "absolute",
                    top: "calc(50% + 57.6px)",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6.375px",
                    padding: "5.1px 10.2px",
                    background: "var(--deploy-primary-color)",
                    color: "hsl(var(--primary-foreground))",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "8.925px",
                    fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontSize: "16.575px",
                    lineHeight: "25.5px",
                    letterSpacing: "-0.51px",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    boxShadow: "0px 42.075px 11.475px rgba(0, 0, 0, 0), 0px 26.775px 10.2px rgba(0, 0, 0, 0.01), 0px 15.3px 8.925px rgba(0, 0, 0, 0.05), 0px 6.375px 6.375px rgba(0, 0, 0, 0.09), 0px 1.275px 3.825px rgba(0, 0, 0, 0.1)"
                },
                children: "🚀 Deploy on Vercel"
            }, void 0, false, {
                fileName: "[project]/components/bento/easy-deployment.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/bento/easy-deployment.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = DeploymentEasy;
}),
"[project]/components/bento/parallel-agents.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const ParallelCodingAgents = ({ className = "" })=>{
    // Theme-based CSS variables using global theme
    const themeVars = {
        "--pca-background-color": "hsl(var(--background))",
        "--pca-background-glass": "hsl(var(--card) / 0.2)",
        "--pca-background-gradient-start": "hsl(var(--card) / 0.2)",
        "--pca-background-gradient-end": "transparent",
        "--pca-text-primary": "hsl(var(--foreground))",
        "--pca-text-secondary": "hsl(var(--muted-foreground))",
        "--pca-border-color": "hsl(var(--border))",
        "--pca-border-main": "hsl(var(--border))",
        "--pca-shadow-color": "rgba(0, 0, 0, 0.12)",
        "--pca-container-background": "hsl(var(--card) / 0.4)",
        "--pca-container-gradient-start": "hsl(var(--card) / 0.4)",
        "--pca-container-gradient-end": "transparent"
    };
    const CheckmarkIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "13.885",
            height: "13.885",
            viewBox: "0 0 14 14",
            fill: "none",
            style: {
                width: "13.885px",
                height: "13.885px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.85156 7.875L6.47656 10.5L10.8516 3.5",
                stroke: "var(--pca-text-primary)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                opacity: "0.8"
            }, void 0, false, {
                fileName: "[project]/components/bento/parallel-agents.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/bento/parallel-agents.tsx",
            lineNumber: 25,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    const RefreshIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "13.885",
            height: "13.885",
            viewBox: "0 0 14 14",
            fill: "none",
            style: {
                width: "13.885px",
                height: "13.885px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M1.75 7C1.75 4.1005 4.1005 1.75 7 1.75C9.8995 1.75 12.25 4.1005 12.25 7C12.25 9.8995 9.8995 12.25 7 12.25",
                    stroke: "var(--pca-text-primary)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    opacity: "0.8"
                }, void 0, false, {
                    fileName: "[project]/components/bento/parallel-agents.tsx",
                    lineNumber: 51,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4.375 10.5L1.75 12.25L3.5 9.625",
                    stroke: "var(--pca-text-primary)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    opacity: "0.8"
                }, void 0, false, {
                    fileName: "[project]/components/bento/parallel-agents.tsx",
                    lineNumber: 59,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/bento/parallel-agents.tsx",
            lineNumber: 44,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    const SparklesIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "13.885",
            height: "13.885",
            viewBox: "0 0 14 14",
            fill: "none",
            style: {
                width: "13.885px",
                height: "13.885px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 1.75L8.225 5.775L12.25 7L8.225 8.225L7 12.25L5.775 8.225L1.75 7L5.775 5.775L7 1.75Z",
                stroke: "var(--pca-text-primary)",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                opacity: "0.8"
            }, void 0, false, {
                fileName: "[project]/components/bento/parallel-agents.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/bento/parallel-agents.tsx",
            lineNumber: 71,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    const agents = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckmarkIcon, {}, void 0, false, {
                fileName: "[project]/components/bento/parallel-agents.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Update buttons",
            tokens: "12k tokens",
            model: "o3",
            branch: "pointer/update-pain..."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(RefreshIcon, {}, void 0, false, {
                fileName: "[project]/components/bento/parallel-agents.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Fix sanity issue",
            tokens: "12k tokens",
            model: "claude-sonnet-4",
            branch: "pointer/update-pain..."
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SparklesIcon, {}, void 0, false, {
                fileName: "[project]/components/bento/parallel-agents.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            title: "Plan for seamless toast",
            tokens: "30k tokens",
            model: "o3",
            branch: "pointer/update-pain..."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            width: "100%",
            height: "100%",
            position: "relative",
            background: `linear-gradient(180deg, var(--pca-container-gradient-start) 0%, var(--pca-container-gradient-end) 100%)`,
            backdropFilter: "blur(8.372px)",
            borderRadius: "10.047px",
            boxSizing: "border-box",
            flexShrink: 0,
            margin: "0 auto",
            ...themeVars
        },
        role: "img",
        "aria-label": "Parallel coding agents working on different tasks simultaneously",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
                padding: "20px",
                height: "100%",
                width: "calc(100% - 48px)",
                background: "linear-gradient(180deg, hsl(var(--primary) / 0.05) 0%, transparent 100%)",
                backdropFilter: "blur(16px)",
                borderRadius: "9.628px",
                border: "0.802px solid hsl(var(--border))",
                overflow: "hidden",
                boxSizing: "border-box",
                margin: "24px 24px 0 24px"
            },
            children: agents.map((agent, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        gap: "8.658px",
                        padding: "6.494px 8.658px",
                        background: `linear-gradient(180deg, var(--pca-background-gradient-start) 0%, var(--pca-background-gradient-end) 100%)`,
                        backdropFilter: "blur(19.481px)",
                        borderRadius: "8.658px",
                        boxShadow: `0px 1.082px 2.165px 0px var(--pca-shadow-color)`,
                        border: "0.541px solid var(--pca-border-color)",
                        width: "100%",
                        maxWidth: "320px",
                        flexShrink: 0,
                        position: "relative",
                        overflow: "hidden",
                        boxSizing: "border-box"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                gap: "8.658px",
                                padding: "3.247px 0 0 0",
                                flexShrink: 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "17.316px",
                                    height: "17.316px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    overflow: "hidden",
                                    flexShrink: 0
                                },
                                children: agent.icon
                            }, void 0, false, {
                                fileName: "[project]/components/bento/parallel-agents.tsx",
                                lineNumber: 187,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/bento/parallel-agents.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "center",
                                gap: "2.164px",
                                padding: "0",
                                flexShrink: 0,
                                ...index === 1 ? {
                                    flexBasis: 0,
                                    flexGrow: 1,
                                    minHeight: "1px",
                                    minWidth: "1px"
                                } : {}
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 400,
                                        fontSize: "10.823px",
                                        lineHeight: "17.316px",
                                        color: "var(--pca-text-primary)",
                                        whiteSpace: "pre",
                                        flexShrink: 0
                                    },
                                    children: agent.title
                                }, void 0, false, {
                                    fileName: "[project]/components/bento/parallel-agents.tsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 400,
                                        fontSize: "10.823px",
                                        lineHeight: "17.316px",
                                        color: "var(--pca-text-secondary)",
                                        whiteSpace: index === 1 ? "nowrap" : "pre",
                                        overflow: index === 1 ? "hidden" : "visible",
                                        textOverflow: index === 1 ? "ellipsis" : "clip",
                                        width: index === 1 ? "100%" : "auto",
                                        minWidth: index === 1 ? "100%" : "auto",
                                        flexShrink: 0
                                    },
                                    children: `${agent.tokens} • ${agent.model} • ${agent.branch}`
                                }, void 0, false, {
                                    fileName: "[project]/components/bento/parallel-agents.tsx",
                                    lineNumber: 234,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/bento/parallel-agents.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index, true, {
                    fileName: "[project]/components/bento/parallel-agents.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/components/bento/parallel-agents.tsx",
            lineNumber: 134,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/bento/parallel-agents.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ParallelCodingAgents;
}),
"[project]/components/bento-section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BentoSection",
    ()=>BentoSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bento$2f$ai$2d$code$2d$reviews$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/bento/ai-code-reviews.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bento$2f$real$2d$time$2d$previews$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/bento/real-time-previews.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bento$2f$one$2d$click$2d$integrations$2d$illustration$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/bento/one-click-integrations-illustration.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bento$2f$mcp$2d$connectivity$2d$illustration$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/bento/mcp-connectivity-illustration.tsx [app-rsc] (ecmascript)"); // Updated import
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bento$2f$easy$2d$deployment$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/bento/easy-deployment.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bento$2f$parallel$2d$agents$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/bento/parallel-agents.tsx [app-rsc] (ecmascript)"); // Updated import
;
;
;
;
;
;
;
const BentoCard = ({ title, description, Component })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-2xl",
                style: {
                    background: "rgba(231, 236, 235, 0.08)",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)"
                }
            }, void 0, false, {
                fileName: "[project]/components/bento-section.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"
            }, void 0, false, {
                fileName: "[project]/components/bento-section.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "self-stretch flex flex-col justify-start items-start gap-1.5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "self-stretch text-foreground text-lg font-normal leading-7",
                        children: [
                            title,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/bento-section.tsx",
                                lineNumber: 25,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/components/bento-section.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/bento-section.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/bento-section.tsx",
                    lineNumber: 23,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/bento-section.tsx",
                lineNumber: 22,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "self-stretch h-72 relative -mt-0.5 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {}, void 0, false, {
                    fileName: "[project]/components/bento-section.tsx",
                    lineNumber: 31,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/bento-section.tsx",
                lineNumber: 30,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/bento-section.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
function BentoSection() {
    const cards = [
        {
            title: "Company-Specific Preparation",
            description: "Curated questions for 50+ companies: TCS, Accenture, Wipro, Infosys, Cognizant, Philips, Capgemini, HCL, Deloitte + startups. DSA, SQL, OOPS, HR.",
            Component: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bento$2f$ai$2d$code$2d$reviews$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
        },
        {
            title: "Real-Time Progress Tracking",
            description: "Dynamic bars update instantly: TCS DSA(85%), Accenture SQL(72%), Wipro Aptitude(95%). Subject/Company/Dashboard views.",
            Component: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bento$2f$real$2d$time$2d$previews$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
        },
        {
            title: "Interactive Practice Mode",
            description: "Timed mock interviews for every company. TCS(3hr), Accenture(2hr), Wipro(90min) sets unlock after modules.",
            Component: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bento$2f$one$2d$click$2d$integrations$2d$illustration$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
        },
        {
            title: "Smart Search & Filters",
            description: "Global search across 50+ companies. Filter by TCS/Wipro/Capgemini + Easy/Hard/Completed status.",
            Component: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bento$2f$mcp$2d$connectivity$2d$illustration$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
        },
        {
            title: "Alumni Success Wall",
            description: "1000+ placed students from TCS, Infosys, Philips, Capgemini. See names, roles, companies that got placed.",
            Component: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bento$2f$parallel$2d$agents$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
        },
        {
            title: "Niche Study Community",
            description: "Company-specific groups: 500+ TCS peers, 300+ Wipro members. Discussion under same-company questions.",
            Component: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bento$2f$easy$2d$deployment$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0"
                }, void 0, false, {
                    fileName: "[project]/components/bento-section.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-start items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]",
                                children: "Empower Your Workflow with AI"
                            }, void 0, false, {
                                fileName: "[project]/components/bento-section.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed",
                                children: "Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insights to streamline your operations."
                            }, void 0, false, {
                                fileName: "[project]/components/bento-section.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/bento-section.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/bento-section.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10",
                    children: cards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(BentoCard, {
                            ...card
                        }, card.title, false, {
                            fileName: "[project]/components/bento-section.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/bento-section.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/bento-section.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/bento-section.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/large-testimonial.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LargeTestimonial",
    ()=>LargeTestimonial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
function LargeTestimonial() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full px-5 overflow-hidden flex justify-center items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col justify-start items-start overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "self-stretch px-4 py-12 md:px-6 md:py-16 lg:py-28 flex flex-col justify-start items-start gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "self-stretch flex justify-between items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 px-4 py-8 md:px-12 lg:px-20 md:py-8 lg:py-10 overflow-hidden rounded-lg flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-11",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-[1024px] text-center text-foreground leading-7 md:leading-10 lg:leading-[64px] font-medium text-lg md:text-3xl lg:text-6xl",
                                children: "Pointer's real-time previews cut our debugging time in half and made coding collaboratively actually enjoyable."
                            }, void 0, false, {
                                fileName: "[project]/components/large-testimonial.tsx",
                                lineNumber: 10,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-start items-center gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/guillermo-rauch.png",
                                        alt: "Guillermo Rauch avatar",
                                        width: 48,
                                        height: 48,
                                        className: "w-12 h-12 relative rounded-full",
                                        style: {
                                            border: "1px solid rgba(0, 0, 0, 0.08)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/large-testimonial.tsx",
                                        lineNumber: 16,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col justify-start items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-foreground text-base font-medium leading-6",
                                                children: "Guillermo Rauch"
                                            }, void 0, false, {
                                                fileName: "[project]/components/large-testimonial.tsx",
                                                lineNumber: 25,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-muted-foreground text-sm font-normal leading-6",
                                                children: "CEO, Vercel"
                                            }, void 0, false, {
                                                fileName: "[project]/components/large-testimonial.tsx",
                                                lineNumber: 26,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/large-testimonial.tsx",
                                        lineNumber: 24,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/large-testimonial.tsx",
                                lineNumber: 15,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/large-testimonial.tsx",
                        lineNumber: 9,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/large-testimonial.tsx",
                    lineNumber: 8,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/large-testimonial.tsx",
                lineNumber: 7,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/large-testimonial.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/large-testimonial.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/pricing-section.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "PricingSection",
    ()=>PricingSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const PricingSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PricingSection() from the server but PricingSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/pricing-section.tsx <module evaluation>", "PricingSection");
}),
"[project]/components/pricing-section.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "PricingSection",
    ()=>PricingSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const PricingSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PricingSection() from the server but PricingSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/pricing-section.tsx", "PricingSection");
}),
"[project]/components/pricing-section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pricing$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/pricing-section.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pricing$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/pricing-section.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pricing$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/testimonial-grid-section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestimonialGridSection",
    ()=>TestimonialGridSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
const testimonials = [
    {
        quote: "The real-time code suggestions from Pointer feel like having a senior engineer reviewing every line of code as you write. The accuracy of its recommendations has improved our overall code quality, reduced review time.",
        name: "Annette Black",
        company: "Sony",
        avatar: "/images/avatars/annette-black.png",
        type: "large-teal"
    },
    {
        quote: "Integrating Pointer into our stack was smooth, and the MCP server connections saved us days of configuration work",
        name: "Dianne Russell",
        company: "McDonald's",
        avatar: "/images/avatars/dianne-russell.png",
        type: "small-dark"
    },
    {
        quote: "Pointer’s multi-agent coding feature has been a game changer. We’re fixing complex bugs in hours instead of spending entire sprints on them.",
        name: "Cameron Williamson",
        company: "IBM",
        avatar: "/images/avatars/cameron-williamson.png",
        type: "small-dark"
    },
    {
        quote: "We no longer juggle multiple tools. Pointer brought all our integrations together in one place, which simplified our entire workflow.",
        name: "Robert Fox",
        company: "MasterCard",
        avatar: "/images/avatars/robert-fox.png",
        type: "small-dark"
    },
    {
        quote: "We started with the free plan just to test it out, but within a week we upgraded to Pro. Now, we can’t imagine coding without it",
        name: "Darlene Robertson",
        company: "Ferrari",
        avatar: "/images/avatars/darlene-robertson.png",
        type: "small-dark"
    },
    {
        quote: "Collaborative coding feels effortless now. With Pointer’s real-time previews, pair programming has become faster and more productive.",
        name: "Cody Fisher",
        company: "Apple",
        avatar: "/images/avatars/cody-fisher.png",
        type: "small-dark"
    },
    {
        quote: "Deploying on Vercel with Pointer was not just simple, it felt seamless. We went from coding to seeing our changes live in minutes without worrying about build pipelines or configuration issues.",
        name: "Albert Flores",
        company: "Louis Vuitton",
        avatar: "/images/avatars/albert-flores.png",
        type: "large-light"
    }
];
const TestimonialCard = ({ quote, name, company, avatar, type })=>{
    const isLargeCard = type.startsWith("large");
    const avatarSize = isLargeCard ? 48 : 36;
    const avatarBorderRadius = isLargeCard ? "rounded-[41px]" : "rounded-[30.75px]";
    const padding = isLargeCard ? "p-6" : "p-[30px]";
    let cardClasses = `flex flex-col justify-between items-start overflow-hidden rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative ${padding}`;
    let quoteClasses = "";
    let nameClasses = "";
    let companyClasses = "";
    let backgroundElements = null;
    let cardHeight = "";
    const cardWidth = "w-full md:w-[384px]";
    if (type === "large-teal") {
        cardClasses += " bg-primary";
        quoteClasses += " text-primary-foreground text-2xl font-medium leading-8";
        nameClasses += " text-primary-foreground text-base font-normal leading-6";
        companyClasses += " text-primary-foreground/60 text-base font-normal leading-6";
        cardHeight = "h-[502px]";
        backgroundElements = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat",
            style: {
                backgroundImage: "url('/images/large-card-background.svg')",
                zIndex: 0
            }
        }, void 0, false, {
            fileName: "[project]/components/testimonial-grid-section.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    } else if (type === "large-light") {
        cardClasses += " bg-[rgba(231,236,235,0.12)]";
        quoteClasses += " text-foreground text-2xl font-medium leading-8";
        nameClasses += " text-foreground text-base font-normal leading-6";
        companyClasses += " text-muted-foreground text-base font-normal leading-6";
        cardHeight = "h-[502px]";
        backgroundElements = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20",
            style: {
                backgroundImage: "url('/images/large-card-background.svg')",
                zIndex: 0
            }
        }, void 0, false, {
            fileName: "[project]/components/testimonial-grid-section.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    } else {
        cardClasses += " bg-card outline outline-1 outline-border outline-offset-[-1px]";
        quoteClasses += " text-foreground/80 text-[17px] font-normal leading-6";
        nameClasses += " text-foreground text-sm font-normal leading-[22px]";
        companyClasses += " text-muted-foreground text-sm font-normal leading-[22px]";
        cardHeight = "h-[244px]";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${cardClasses} ${cardWidth} ${cardHeight}`,
        children: [
            backgroundElements,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative z-10 font-normal break-words ${quoteClasses}`,
                children: quote
            }, void 0, false, {
                fileName: "[project]/components/testimonial-grid-section.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex justify-start items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: avatar || "/placeholder.svg",
                        alt: `${name} avatar`,
                        width: avatarSize,
                        height: avatarSize,
                        className: `w-${avatarSize / 4} h-${avatarSize / 4} ${avatarBorderRadius}`,
                        style: {
                            border: "1px solid rgba(255, 255, 255, 0.08)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/testimonial-grid-section.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-start items-start gap-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: nameClasses,
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/components/testimonial-grid-section.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: companyClasses,
                                children: company
                            }, void 0, false, {
                                fileName: "[project]/components/testimonial-grid-section.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/testimonial-grid-section.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/testimonial-grid-section.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/testimonial-grid-section.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function TestimonialGridSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full px-5 overflow-hidden flex flex-col justify-start py-6 md:py-8 lg:py-14",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col justify-start items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-center text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight md:leading-tight lg:leading-[40px]",
                            children: "Coding made effortless"
                        }, void 0, false, {
                            fileName: "[project]/components/testimonial-grid-section.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "self-stretch text-center text-muted-foreground text-sm md:text-sm lg:text-base font-medium leading-[18.20px] md:leading-relaxed lg:leading-relaxed",
                            children: [
                                "Hear how developers ship products faster, collaborate seamlessly,",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/testimonial-grid-section.tsx",
                                    lineNumber: 139,
                                    columnNumber: 83
                                }, this),
                                " ",
                                "and build with confidence using Pointer's powerful AI tools"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/testimonial-grid-section.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/testimonial-grid-section.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/testimonial-grid-section.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full pt-0.5 pb-4 md:pb-6 lg:pb-10 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-4 lg:gap-6 max-w-[1100px] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                                ...testimonials[0]
                            }, void 0, false, {
                                fileName: "[project]/components/testimonial-grid-section.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                                ...testimonials[1]
                            }, void 0, false, {
                                fileName: "[project]/components/testimonial-grid-section.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/testimonial-grid-section.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                                ...testimonials[2]
                            }, void 0, false, {
                                fileName: "[project]/components/testimonial-grid-section.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                                ...testimonials[3]
                            }, void 0, false, {
                                fileName: "[project]/components/testimonial-grid-section.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                                ...testimonials[4]
                            }, void 0, false, {
                                fileName: "[project]/components/testimonial-grid-section.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/testimonial-grid-section.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                                ...testimonials[5]
                            }, void 0, false, {
                                fileName: "[project]/components/testimonial-grid-section.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialCard, {
                                ...testimonials[6]
                            }, void 0, false, {
                                fileName: "[project]/components/testimonial-grid-section.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/testimonial-grid-section.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/testimonial-grid-section.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/testimonial-grid-section.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/faq-section.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "FAQSection",
    ()=>FAQSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FAQSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FAQSection() from the server but FAQSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/faq-section.tsx <module evaluation>", "FAQSection");
}),
"[project]/components/faq-section.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "FAQSection",
    ()=>FAQSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FAQSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FAQSection() from the server but FAQSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/faq-section.tsx", "FAQSection");
}),
"[project]/components/faq-section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$faq$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/faq-section.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$faq$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/faq-section.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$faq$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/cta-section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTASection",
    ()=>CTASection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
function CTASection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full pt-20 md:pt-60 lg:pt-60 pb-10 md:pb-20 px-5 relative flex flex-col justify-center items-center overflow-visible",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 top-[-90px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-full h-full",
                    viewBox: "0 0 1388 825",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    preserveAspectRatio: "xMidYMid slice",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                            id: "mask0_182_1049",
                            style: {
                                maskType: "alpha"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: "269",
                            y: "27",
                            width: "850",
                            height: "493",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "269.215",
                                y: "27.4062",
                                width: "849.57",
                                height: "492.311",
                                fill: "url(#paint0_linear_182_1049)"
                            }, void 0, false, {
                                fileName: "[project]/components/cta-section.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/cta-section.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            mask: "url(#mask0_182_1049)",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    filter: "url(#filter0_f_182_1049)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                        cx: "694",
                                        cy: "-93.0414",
                                        rx: "670.109",
                                        ry: "354.908",
                                        fill: "url(#paint1_radial_182_1049)",
                                        fillOpacity: "0.8"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cta-section.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/cta-section.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                    cx: "694",
                                    cy: "-91.5385",
                                    rx: "670.109",
                                    ry: "354.908",
                                    fill: "url(#paint2_linear_182_1049)"
                                }, void 0, false, {
                                    fileName: "[project]/components/cta-section.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                    cx: "694",
                                    cy: "-93.0414",
                                    rx: "670.109",
                                    ry: "354.908",
                                    fill: "url(#paint3_linear_182_1049)"
                                }, void 0, false, {
                                    fileName: "[project]/components/cta-section.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/cta-section.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                    id: "filter0_f_182_1049",
                                    x: "-234.109",
                                    y: "-705.949",
                                    width: "1856.22",
                                    height: "1225.82",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                            floodOpacity: "0",
                                            result: "BackgroundImageFix"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cta-section.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                            mode: "normal",
                                            in: "SourceGraphic",
                                            in2: "BackgroundImageFix",
                                            result: "shape"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cta-section.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                            stdDeviation: "129",
                                            result: "effect1_foregroundBlur_182_1049"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cta-section.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/cta-section.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "paint0_linear_182_1049",
                                    x1: "1118.79",
                                    y1: "273.562",
                                    x2: "269.215",
                                    y2: "273.562",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            stopColor: "hsl(var(--background))",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cta-section.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0.2",
                                            stopColor: "hsl(var(--background))",
                                            stopOpacity: "0.8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cta-section.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0.8",
                                            stopColor: "hsl(var(--background))",
                                            stopOpacity: "0.8"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cta-section.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "1",
                                            stopColor: "hsl(var(--background))",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cta-section.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/cta-section.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                    id: "paint1_radial_182_1049",
                                    cx: "0",
                                    cy: "0",
                                    r: "1",
                                    gradientUnits: "userSpaceOnUse",
                                    gradientTransform: "translate(683.482 245.884) rotate(-3.78676) scale(469.009 248.4)",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0.1294",
                                            stopColor: "hsl(var(--primary-dark))"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cta-section.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0.2347",
                                            stopColor: "hsl(var(--primary))"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cta-section.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0.3",
                                            stopColor: "hsl(var(--primary))",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cta-section.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/cta-section.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "paint2_linear_182_1049",
                                    x1: "694",
                                    y1: "-446.446",
                                    x2: "694",
                                    y2: "263.369",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            stopColor: "white",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cta-section.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "1",
                                            stopColor: "white",
                                            stopOpacity: "0.1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cta-section.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/cta-section.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "paint3_linear_182_1049",
                                    x1: "694",
                                    y1: "-447.949",
                                    x2: "694",
                                    y2: "261.866",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            stopColor: "hsl(var(--background))"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cta-section.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "1",
                                            stopColor: "hsl(var(--background))"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cta-section.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/cta-section.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/cta-section.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/cta-section.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/cta-section.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col justify-start items-center gap-9 max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-start items-center gap-4 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-foreground text-4xl md:text-5xl lg:text-[68px] font-semibold leading-tight md:leading-tight lg:leading-[76px] break-words max-w-[435px]",
                                children: "Coding made effortless"
                            }, void 0, false, {
                                fileName: "[project]/components/cta-section.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-sm md:text-base font-medium leading-[18.20px] md:leading-relaxed break-words max-w-2xl",
                                children: "Hear how developers ship products faster, collaborate seamlessly, and build with confidence using Pointer's powerful AI tools"
                            }, void 0, false, {
                                fileName: "[project]/components/cta-section.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cta-section.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/signup",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                            className: "px-[30px] py-2 bg-secondary text-secondary-foreground text-base font-medium leading-6 rounded-[99px] shadow-[0px_0px_0px_4px_rgba(255,255,255,0.13)] hover:bg-secondary/90 transition-all duration-200",
                            size: "lg",
                            children: "Signup for free"
                        }, void 0, false, {
                            fileName: "[project]/components/cta-section.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/cta-section.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cta-section.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cta-section.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/footer-section.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "FooterSection",
    ()=>FooterSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FooterSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FooterSection() from the server but FooterSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/footer-section.tsx <module evaluation>", "FooterSection");
}),
"[project]/components/footer-section.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "FooterSection",
    ()=>FooterSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FooterSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FooterSection() from the server but FooterSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/footer-section.tsx", "FooterSection");
}),
"[project]/components/footer-section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/footer-section.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/footer-section.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/animated-section.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "AnimatedSection",
    ()=>AnimatedSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AnimatedSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AnimatedSection() from the server but AnimatedSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/animated-section.tsx <module evaluation>", "AnimatedSection");
}),
"[project]/components/animated-section.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "AnimatedSection",
    ()=>AnimatedSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AnimatedSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AnimatedSection() from the server but AnimatedSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/animated-section.tsx", "AnimatedSection");
}),
"[project]/components/animated-section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/animated-section.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/animated-section.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hero-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$preview$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard-preview.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$social$2d$proof$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/social-proof.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bento$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/bento-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$large$2d$testimonial$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/large-testimonial.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pricing$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/pricing-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$testimonial$2d$grid$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/testimonial-grid-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$faq$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/faq-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cta$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cta-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animated-section.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function LandingPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background relative overflow-hidden pb-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "max-w-[1320px] mx-auto relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeroSection"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-[-150px] md:bottom-[-400px] left-1/2 transform -translate-x-1/2 z-30",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AnimatedSection"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2d$preview$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DashboardPreview"], {}, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AnimatedSection"], {
                    className: "relative z-10 max-w-[1320px] mx-auto px-6 mt-[411px] md:mt-[400px]",
                    delay: 0.1,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$social$2d$proof$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SocialProof"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AnimatedSection"], {
                    id: "features-section",
                    className: "relative z-10 max-w-[1320px] mx-auto mt-16",
                    delay: 0.2,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$bento$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BentoSection"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AnimatedSection"], {
                    className: "relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16",
                    delay: 0.2,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$large$2d$testimonial$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LargeTestimonial"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AnimatedSection"], {
                    id: "pricing-section",
                    className: "relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16",
                    delay: 0.2,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pricing$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PricingSection"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AnimatedSection"], {
                    id: "testimonials-section",
                    className: "relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16",
                    delay: 0.2,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$testimonial$2d$grid$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TestimonialGridSection"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AnimatedSection"], {
                    id: "faq-section",
                    className: "relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16",
                    delay: 0.2,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$faq$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FAQSection"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AnimatedSection"], {
                    className: "relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16",
                    delay: 0.2,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cta$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CTASection"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animated$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AnimatedSection"], {
                    className: "relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16",
                    delay: 0.2,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FooterSection"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__62744e51._.js.map