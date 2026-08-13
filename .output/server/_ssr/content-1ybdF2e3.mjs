import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Card } from "./card-C94-R9A8.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { I as LoaderCircle, b as Save } from "../_libs/lucide-react.mjs";
import { i as updateSiteContent, n as getSiteContent } from "./cms.functions-ChHeepaR.mjs";
import { t as Input } from "./input-Bi36govA.mjs";
import { t as Button } from "./button-8n41GpW2.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-1ybdF2e3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/ui/textarea.tsx";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 8,
		columnNumber: 7
	}, void 0);
});
Textarea.displayName = "Textarea";
var _jsxFileName = "/app/applet/src/routes/admin/content.tsx?tsr-split=component";
function ContentManagement() {
	const queryClient = useQueryClient();
	const { data: content, isLoading } = useQuery({
		queryKey: ["site-content"],
		queryFn: () => getSiteContent()
	});
	const [formData, setFormData] = (0, import_react.useState)(null);
	if (content && !formData && !isLoading) setFormData(content);
	const updateMutation = useMutation({
		mutationFn: (data) => updateSiteContent(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["site-content"] });
			toast.success("Conteúdo atualizado com sucesso!");
		},
		onError: () => {
			toast.error("Erro ao atualizar conteúdo.");
		}
	});
	if (isLoading || !formData) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex items-center justify-center h-64",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "animate-spin text-gold" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 37,
			columnNumber: 93
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 37,
		columnNumber: 38
	}, this);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		updateMutation.mutate(formData);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6 md:space-y-8 max-w-4xl",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
			className: "text-2xl md:text-3xl font-serif text-[#24170F]",
			children: "Conteúdo"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 54,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-sm md:text-base text-muted-foreground font-sans",
			children: "Edite as informações da landing page"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 55,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 53,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			onSubmit: handleSubmit,
			className: "space-y-6",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
				className: "p-6 space-y-6 border-none shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-lg font-serif border-b pb-2",
								children: "Hero Section"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									className: "text-sm font-medium",
									children: "Título Principal"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 63,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									name: "hero_title",
									value: formData.hero_title,
									onChange: handleChange
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 64,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									className: "text-sm font-medium",
									children: "Descrição"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 67,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
									name: "hero_description",
									value: formData.hero_description,
									onChange: handleChange
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 68,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-lg font-serif border-b pb-2",
								children: "Seção Sobre"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 73,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									className: "text-sm font-medium",
									children: "Título"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 75,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									name: "about_title",
									value: formData.about_title,
									onChange: handleChange
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 76,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 74,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									className: "text-sm font-medium",
									children: "Texto 1"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 79,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
									name: "about_text_1",
									value: formData.about_text_1,
									onChange: handleChange
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 80,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 78,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									className: "text-sm font-medium",
									children: "Texto 2"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 83,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
									name: "about_text_2",
									value: formData.about_text_2,
									onChange: handleChange
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 84,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 82,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-lg font-serif border-b pb-2",
							children: "Configurações Externas"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "text-sm font-medium",
								children: "Link do Airbnb"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 91,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								name: "airbnb_url",
								value: formData.airbnb_url,
								onChange: handleChange
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 92,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "submit",
						disabled: updateMutation.isPending,
						className: "w-full bg-gold hover:bg-gold/90 text-white",
						children: [updateMutation.isPending ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 41
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Save, { className: "mr-2 h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 93
						}, this), "Salvar Alterações"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 96,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 59,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 52,
		columnNumber: 10
	}, this);
}
//#endregion
export { ContentManagement as component };
