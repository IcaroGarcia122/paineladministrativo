import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as supabase } from "./client-Dk-bryI9.mjs";
import { L as LayoutDashboard, N as LogOut, R as Info, X as ChartColumn, a as Users, d as SquareCheckBig, j as Menu, t as X, v as Settings } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-8n41GpW2.mjs";
import { d as Outlet, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-BV8fNVVJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/admin/route.tsx?tsr-split=component";
function AdminLayout() {
	const [isSidebarOpen, setIsSidebarOpen] = (0, import_react.useState)(false);
	const handleLogout = async () => {
		await supabase.auth.signOut();
		window.location.href = "/";
	};
	const menuItems = [
		{
			label: "Dashboard",
			icon: LayoutDashboard,
			to: "/admin/dashboard"
		},
		{
			label: "Reservas",
			icon: Users,
			to: "/admin/reservations"
		},
		{
			label: "Hóspedes",
			icon: Users,
			to: "/admin/guests"
		},
		{
			label: "Informações",
			icon: Info,
			to: "/admin/content"
		},
		{
			label: "Analytics",
			icon: ChartColumn,
			to: "/admin/analytics"
		},
		{
			label: "Organização",
			icon: SquareCheckBig,
			to: "/admin/tasks"
		},
		{
			label: "Guia",
			icon: Info,
			to: "/admin/recommendations"
		},
		{
			label: "Concierge",
			icon: Settings,
			to: "/admin/concierge"
		},
		{
			label: "Automações",
			icon: Settings,
			to: "/admin/automations"
		},
		{
			label: "Configurações",
			icon: Settings,
			to: "/admin/settings"
		}
	];
	const closeSidebar = () => setIsSidebarOpen(false);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex h-screen bg-[#F7F3EA] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#24170F] flex items-center justify-between px-4 z-50",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-lg font-serif text-[#C59A55]",
					children: "CHALÉ ADMIN"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "ghost",
					onClick: () => setIsSidebarOpen(!isSidebarOpen),
					className: "text-white hover:bg-white/10",
					children: isSidebarOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "w-6 h-6" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 28
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { className: "w-6 h-6" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 56
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 7
			}, this),
			isSidebarOpen && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
				onClick: closeSidebar
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 25
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
				className: `
        fixed inset-y-0 left-0 w-64 bg-[#24170F] text-[#FFFDF8] flex flex-col z-50 transform transition-transform duration-300 lg:translate-x-0 lg:static
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-8 hidden lg:block",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "text-xl font-serif tracking-tight text-[#C59A55]",
							children: "CHALÉ ADMIN"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 72,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
						className: "flex-1 px-4 pt-20 lg:pt-0 space-y-2 overflow-y-auto",
						children: menuItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: item.to,
							onClick: closeSidebar,
							activeProps: { className: "bg-[#C59A55] text-white opacity-100" },
							className: "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-sans opacity-70 hover:opacity-100 transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 79,
								columnNumber: 15
							}, this), item.label]
						}, item.label, true, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 34
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-4 border-t border-white/10",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "ghost",
							onClick: handleLogout,
							className: "w-full flex items-center justify-start gap-3 text-red-400 hover:text-red-300 hover:bg-white/5 font-normal",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 86,
								columnNumber: 13
							}, this), "Sair"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 85,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 67,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "flex-1 overflow-y-auto pt-16 lg:pt-0 p-4 md:p-8",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "max-w-7xl mx-auto w-full",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 93,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 54,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdminLayout as component };
