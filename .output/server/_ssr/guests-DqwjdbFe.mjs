import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Card } from "./card-C94-R9A8.mjs";
import { t as supabase } from "./client-Dk-bryI9.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { o as UserPlus } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-Bi36govA.mjs";
import { t as Button } from "./button-8n41GpW2.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guests-DqwjdbFe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/admin/guests.tsx?tsr-split=component";
function GuestsManagement() {
	const queryClient = useQueryClient();
	const [isAdding, setIsAdding] = (0, import_react.useState)(false);
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: ""
	});
	const { data: guests, isLoading } = useQuery({
		queryKey: ["admin-guests"],
		queryFn: async () => {
			const { data, error } = await supabase.from("guests").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	const addGuestMutation = useMutation({
		mutationFn: async (data) => {
			const { error } = await supabase.from("guests").insert([data]);
			if (error) throw error;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["admin-guests"] });
			setIsAdding(false);
			setFormData({
				name: "",
				email: "",
				phone: ""
			});
			toast.success("Hóspede adicionado com sucesso!");
		},
		onError: () => toast.error("Erro ao adicionar hóspede.")
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6 md:space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "text-2xl md:text-3xl font-serif text-[#24170F]",
					children: "Hóspedes"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm md:text-base text-muted-foreground font-sans",
					children: "Gerenciamento e histórico"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					onClick: () => setIsAdding(!isAdding),
					className: "w-full sm:w-auto bg-[#24170F] text-white",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserPlus, { className: "w-4 h-4 mr-2" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 11
					}, this), " Novo Hóspede"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 7
			}, this),
			isAdding && /* @__PURE__ */ (void 0)(Card, {
				className: "p-6 bg-[#F7F3EA]/30 border border-[#DCC9A5]/20",
				children: [
					/* @__PURE__ */ (void 0)("h3", {
						className: "font-serif text-lg mb-4",
						children: "Cadastrar Novo Hóspede"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-4",
						children: [
							/* @__PURE__ */ (void 0)(Input, {
								placeholder: "Nome Completo",
								value: formData.name,
								onChange: (e) => setFormData({
									...formData,
									name: e.target.value
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 68,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)(Input, {
								placeholder: "E-mail",
								value: formData.email,
								onChange: (e) => setFormData({
									...formData,
									email: e.target.value
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 72,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)(Input, {
								placeholder: "Telefone",
								value: formData.phone,
								onChange: (e) => setFormData({
									...formData,
									phone: e.target.value
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 76,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "mt-4 flex gap-2",
						children: [/* @__PURE__ */ (void 0)(Button, {
							onClick: () => addGuestMutation.mutate(formData),
							disabled: addGuestMutation.isPending,
							className: "bg-gold text-white",
							children: "Salvar"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)(Button, {
							variant: "ghost",
							onClick: () => setIsAdding(false),
							children: "Cancelar"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 81,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 20
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
				className: "border-none shadow-sm bg-white overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
						className: "w-full text-left",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
							className: "bg-[#F7F3EA] text-[#24170F] text-xs uppercase tracking-wider font-sans font-semibold",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
									className: "px-6 py-4",
									children: "Hóspede"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 92,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
									className: "px-6 py-4",
									children: "Contato"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 93,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
									className: "px-6 py-4",
									children: "Status"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 94,
									columnNumber: 17
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 91,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
							className: "divide-y divide-beige/10",
							children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								colSpan: 3,
								className: "px-6 py-12 text-center text-muted-foreground italic font-sans",
								children: "Carregando hóspedes..."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 98,
								columnNumber: 32
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 98,
								columnNumber: 28
							}, this) : guests?.map((guest) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
								className: "hover:bg-[#F7F3EA]/30 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "px-6 py-4 font-medium text-[#24170F]",
										children: guest.name
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 99,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "px-6 py-4 text-sm text-muted-foreground",
										children: [
											guest.email,
											" • ",
											guest.phone
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 100,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "px-6 py-4 text-xs font-bold uppercase text-gold",
										children: guest.status
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 103,
										columnNumber: 21
									}, this)
								]
							}, guest.id, true, {
								fileName: _jsxFileName,
								lineNumber: 98,
								columnNumber: 178
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 88,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 87,
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
export { GuestsManagement as component };
