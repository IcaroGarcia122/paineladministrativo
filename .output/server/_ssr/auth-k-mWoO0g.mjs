import { o as __toESM } from "../_runtime.mjs";
import { t as motion } from "../_libs/framer-motion+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as supabase } from "./client-Dk-bryI9.mjs";
import { P as LogIn } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-k-mWoO0g.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/auth.tsx?tsr-split=component";
function AuthPage() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [message, setMessage] = (0, import_react.useState)("");
	const handleSignIn = async (e) => {
		e.preventDefault();
		setLoading(true);
		setMessage("");
		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email,
				password
			});
			if (error) throw error;
			if (data.session) await supabase.auth.setSession(data.session);
			window.location.href = "/admin/dashboard";
		} catch (error) {
			setMessage(error.message || "Erro ao entrar");
		} finally {
			setLoading(false);
		}
	};
	const handleSignUp = async (e) => {
		e.preventDefault();
		setLoading(true);
		setMessage("");
		try {
			const { error } = await supabase.auth.signUp({
				email,
				password,
				options: { data: { role: "admin" } }
			});
			if (error) throw error;
			setMessage("Conta criada com sucesso! Você já pode entrar.");
		} catch (error) {
			setMessage(error.message || "Erro ao criar conta");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-[#F7F3EA] flex items-center justify-center p-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			className: "max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-[#DCC9A5]/20",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col items-center mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "w-16 h-16 bg-[#24170F] rounded-full flex items-center justify-center mb-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogIn, { className: "text-[#C59A55] w-8 h-8" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 68,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "text-2xl font-serif text-[#24170F]",
						children: "Área Administrativa"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm text-[#24170F]/60 mt-2 text-center",
						children: "Entre com suas credenciais para gerenciar o chalé."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 66,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "block text-xs uppercase tracking-widest text-[#24170F]/50 mb-1",
						children: "E-mail"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						type: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						className: "w-full px-4 py-3 rounded-lg border border-[#DCC9A5]/30 focus:border-[#C59A55] focus:ring-1 focus:ring-[#C59A55] outline-none transition-all",
						placeholder: "exemplo@email.com"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 77,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						className: "block text-xs uppercase tracking-widest text-[#24170F]/50 mb-1",
						children: "Senha"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 82,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						type: "password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						className: "w-full px-4 py-3 rounded-lg border border-[#DCC9A5]/30 focus:border-[#C59A55] focus:ring-1 focus:ring-[#C59A55] outline-none transition-all",
						placeholder: "••••••••"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 83,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 81,
						columnNumber: 11
					}, this),
					message && /* @__PURE__ */ (void 0)("p", {
						className: `text-xs text-center ${message.includes("sucesso") ? "text-green-600" : "text-red-500"}`,
						children: message
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 23
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-2 gap-4 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: handleSignIn,
							disabled: loading,
							className: "w-full bg-[#24170F] text-white py-3 rounded-lg font-bold tracking-widest text-xs hover:bg-[#17130F] transition-all disabled:opacity-50",
							children: "ENTRAR"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: handleSignUp,
							disabled: loading,
							className: "w-full border border-[#24170F] text-[#24170F] py-3 rounded-lg font-bold tracking-widest text-xs hover:bg-[#24170F]/5 transition-all disabled:opacity-50",
							children: "CADASTRAR"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 59,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 58,
		columnNumber: 10
	}, this);
}
//#endregion
export { AuthPage as component };
