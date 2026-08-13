import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Card } from "./card-C94-R9A8.mjs";
import { t as supabase } from "./client-Dk-bryI9.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { F as Lock, I as LoaderCircle, tt as Bell } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-Bi36govA.mjs";
import { t as Button } from "./button-8n41GpW2.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/@radix-ui/react-switch+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-CBqnz68i.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/ui/switch.tsx";
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 18,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 10,
	columnNumber: 3
}, void 0));
Switch.displayName = Switch$1.displayName;
var _jsxFileName = "/app/applet/src/routes/admin/settings.tsx?tsr-split=component";
function Settings() {
	useQueryClient();
	const { data: session } = useQuery({
		queryKey: ["admin-session"],
		queryFn: async () => {
			const { data } = await supabase.auth.getSession();
			return data.session;
		}
	});
	const [email, setEmail] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (session?.user?.email) setEmail(session.user.email);
	}, [session]);
	const updateEmailMutation = useMutation({
		mutationFn: async (newEmail) => {
			const { error } = await supabase.auth.updateUser({ email: newEmail });
			if (error) throw error;
		},
		onSuccess: () => toast.success("E-mail atualizado (verifique sua caixa de entrada)."),
		onError: (err) => toast.error(`Erro: ${err.message}`)
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-8 max-w-4xl",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
			className: "text-3xl font-serif text-[#24170F]",
			children: "Configurações"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 43,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-muted-foreground font-sans",
			children: "Ajustes da conta e do painel"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 44,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 42,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
				className: "p-6 border-none shadow-sm bg-white",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3 mb-6 border-b pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "w-5 h-5 text-gold" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-lg font-serif text-[#24170F]",
						children: "Segurança e Acesso"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "text-sm font-medium text-muted-foreground",
							children: "E-mail Administrativo"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 56,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								value: email,
								onChange: (e) => setEmail(e.target.value),
								className: "max-w-md"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 58,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								onClick: () => updateEmailMutation.mutate(email),
								disabled: updateEmailMutation.isPending,
								className: "bg-gold text-white",
								children: updateEmailMutation.isPending ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "w-4 h-4 animate-spin" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 60,
									columnNumber: 52
								}, this) : "Atualizar"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 59,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 57,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "pt-4 border-t border-beige/10",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							className: "text-red-500 hover:text-red-600 hover:bg-red-50 border-red-100",
							children: "Alterar Senha"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
				className: "p-6 border-none shadow-sm bg-white",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3 mb-6 border-b pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bell, { className: "w-5 h-5 text-gold" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-lg font-serif text-[#24170F]",
						children: "Notificações"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-4",
					children: [
						{
							label: "Novos cliques no Airbnb",
							desc: "Receber aviso quando alguém clicar para reservar."
						},
						{
							label: "Lembretes de limpeza",
							desc: "Notificar 24h antes do check-in."
						},
						{
							label: "Relatório semanal",
							desc: "Resumo de acessos e conversão por e-mail."
						}
					].map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between py-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-sm font-medium text-[#24170F]",
							children: item.label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 19
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-muted-foreground",
							children: item.desc
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 19
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 17
						}, this)]
					}, i, true, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 31
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 79,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 41,
		columnNumber: 10
	}, this);
}
//#endregion
export { Settings as component };
