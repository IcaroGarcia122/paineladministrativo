import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Card } from "./card-C94-R9A8.mjs";
import { t as supabase } from "./client-Dk-bryI9.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { I as LoaderCircle } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/recommendations-C5kRs6qV.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/admin/recommendations.tsx?tsr-split=component";
function RecommendationsPage() {
	const { data: recs, isLoading } = useQuery({
		queryKey: ["recommendations"],
		queryFn: async () => {
			const { data, error } = await supabase.from("local_recommendations").select("*");
			if (error) throw error;
			return data;
		}
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-8 max-w-4xl",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
			className: "text-3xl font-serif text-[#24170F]",
			children: "Guia da Região"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-muted-foreground font-sans",
			children: "Gerencie recomendações locais"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 23,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 7
		}, this), isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "animate-spin text-gold mx-auto" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 26,
			columnNumber: 20
		}, this) : recs?.map((r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
			className: "p-4",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
				className: "font-semibold text-lg",
				children: r.name
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 13
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: [
					r.category,
					" • ",
					r.address
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 13
			}, this)]
		}, r.id, true, {
			fileName: _jsxFileName,
			lineNumber: 26,
			columnNumber: 92
		}, this))]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 20,
		columnNumber: 10
	}, this);
}
//#endregion
export { RecommendationsPage as component };
