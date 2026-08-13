import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { C as Power, K as CircleCheck, S as QrCode, U as Clock, b as Save, g as Smartphone, k as MessageSquareCode, t as X, x as RefreshCw, y as Send } from "../_libs/lucide-react.mjs";
import { t as useApp } from "./AppContext-w0-l3Ny3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/automations-Ckm658vN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/views/AutomationsView.tsx";
var AutomationsView = () => {
	const { automations, updateAutomation, property, showToast } = useApp();
	const [selectedAutomation, setSelectedAutomation] = (0, import_react.useState)(automations[0] || {});
	(0, import_react.useEffect)(() => {
		if (automations.length > 0) {
			if (!selectedAutomation || !selectedAutomation.id) {
				if (automations[0]) setSelectedAutomation(automations[0]);
			} else {
				const found = automations.find((a) => a.id === selectedAutomation.id);
				if (found) setSelectedAutomation(found);
			}
		}
	}, [automations]);
	const [isQrModalOpen, setIsQrModalOpen] = (0, import_react.useState)(false);
	const [evolutionStatus, setEvolutionStatus] = (0, import_react.useState)({
		connected: true,
		state: "open",
		instance: "teste1"
	});
	const [qrCodeData, setQrCodeData] = (0, import_react.useState)(null);
	const [isLoadingStatus, setIsLoadingStatus] = (0, import_react.useState)(false);
	const [isDisconnecting, setIsDisconnecting] = (0, import_react.useState)(false);
	const [testPhone, setTestPhone] = (0, import_react.useState)("");
	const [isSendingTest, setIsSendingTest] = (0, import_react.useState)(false);
	const [testFeedback, setTestFeedback] = (0, import_react.useState)(null);
	const checkEvolutionStatus = (0, import_react.useCallback)(async () => {
		try {
			const res = await fetch("/api/evolution/status?instance=teste1");
			if (res.ok) {
				const data = await res.json();
				setEvolutionStatus({
					connected: data.connected,
					state: data.state || (data.connected ? "open" : "disconnected"),
					instance: data.instance || "teste1"
				});
				if (data.connected) setQrCodeData(null);
			}
		} catch (err) {
			console.error("Error checking Evolution status:", err);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		checkEvolutionStatus();
	}, [checkEvolutionStatus]);
	(0, import_react.useEffect)(() => {
		let interval;
		if (isQrModalOpen) {
			checkEvolutionStatus();
			interval = setInterval(() => {
				checkEvolutionStatus();
			}, 3e3);
		}
		return () => {
			if (interval) clearInterval(interval);
		};
	}, [isQrModalOpen, checkEvolutionStatus]);
	const handleFetchQrCode = async () => {
		setIsLoadingStatus(true);
		setQrCodeData(null);
		try {
			const data = await (await fetch("/api/evolution/connect?instance=teste1")).json();
			if (data.qrcode) setQrCodeData(data.qrcode);
			else if (data.connected) {
				setEvolutionStatus((prev) => ({
					...prev,
					connected: true,
					state: "open"
				}));
				showToast("WhatsApp já está conectado e ativo!");
			} else showToast("Não foi possível gerar o QR Code no momento.", "error");
		} catch (err) {
			console.error("Error fetching QR Code:", err);
			showToast("Erro ao conectar com Evolution API.", "error");
		} finally {
			setIsLoadingStatus(false);
		}
	};
	const handleOpenQrModal = () => {
		setIsQrModalOpen(true);
		handleFetchQrCode();
	};
	const handleDisconnect = async () => {
		if (!window.confirm("Tem certeza que deseja desconectar o WhatsApp da Evolution API?")) return;
		setIsDisconnecting(true);
		try {
			if ((await fetch("/api/evolution/disconnect", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ instance: "teste1" })
			})).ok) {
				setEvolutionStatus({
					connected: false,
					state: "disconnected",
					instance: "teste1"
				});
				setQrCodeData(null);
				showToast("WhatsApp desconectado com sucesso.", "info");
			} else showToast("Erro ao desconectar instância.", "error");
		} catch (err) {
			console.error("Error disconnecting:", err);
			showToast("Falha na requisição de desconexão.", "error");
		} finally {
			setIsDisconnecting(false);
		}
	};
	const handleSendTestMessage = async (e) => {
		e.preventDefault();
		if (!testPhone.trim()) return;
		setIsSendingTest(true);
		setTestFeedback(null);
		try {
			const renderedMsg = getRenderedPreview();
			const res = await fetch("/api/evolution/send-test", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					phone: testPhone,
					message: renderedMsg,
					instance: "teste1"
				})
			});
			const data = await res.json();
			if (res.ok && data.success) {
				setTestFeedback("✅ Mensagem enviada com sucesso via Evolution API!");
				showToast("Mensagem de teste enviada!");
			} else {
				const errorMsg = data?.data?.response?.message || data?.error || "Instância desconectada ou número inválido.";
				setTestFeedback(`⚠️ Erro no disparo: ${errorMsg}`);
				showToast(`Erro ao enviar: ${errorMsg}`, "error");
			}
		} catch (err) {
			setTestFeedback("❌ Falha na comunicação com o servidor.");
			showToast("Erro ao enviar mensagem de teste.", "error");
		} finally {
			setIsSendingTest(false);
		}
	};
	const variables = [
		{
			code: "{{nome}}",
			label: "Nome do Hóspede"
		},
		{
			code: "{{check_in}}",
			label: "Data Check-in"
		},
		{
			code: "{{check_out}}",
			label: "Data Checkout"
		},
		{
			code: "{{nome_hospedagem}}",
			label: "Nome do Chalé"
		},
		{
			code: "{{link_airbnb}}",
			label: "Link do Anúncio"
		}
	];
	const handleInsertVariable = (varCode) => {
		setSelectedAutomation((prev) => ({
			...prev,
			messageTemplate: prev.messageTemplate + " " + varCode
		}));
	};
	const getRenderedPreview = () => {
		let msg = selectedAutomation.messageTemplate || "";
		msg = msg.replace(/{{nome}}/g, "João Silva");
		msg = msg.replace(/{{check_in}}/g, "14/08/2026");
		msg = msg.replace(/{{check_out}}/g, "17/08/2026");
		msg = msg.replace(/{{nome_hospedagem}}/g, property.name || "Chalé A-Frame");
		msg = msg.replace(/{{link_airbnb}}/g, property.airbnbUrl || "https://airbnb.com/h/chale-a-frame");
		return msg;
	};
	const handleSaveAutomation = async () => {
		if (!selectedAutomation?.id) return;
		await updateAutomation(selectedAutomation.id, {
			enabled: selectedAutomation.enabled,
			relativeTiming: selectedAutomation.relativeTiming,
			time: selectedAutomation.time,
			messageTemplate: selectedAutomation.messageTemplate
		});
	};
	const isConnected = evolutionStatus.connected || evolutionStatus.state === "open" || evolutionStatus.state === "CONNECTED";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		id: "automations-view-container",
		className: "space-y-8 animate-in fade-in duration-300",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "bg-[#16120E] p-6 rounded-2xl border border-[#C59A55]/30 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: `w-14 h-14 rounded-2xl flex items-center justify-center text-black font-bold text-2xl shadow-md transition-all ${isConnected ? "bg-gradient-to-r from-[#C59A55] to-[#B8860B]" : "bg-amber-600"}`,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Smartphone, { className: "w-7 h-7 text-black" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 248,
							columnNumber: 13
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 245,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-lg font-serif font-bold text-[#FBF9F4]",
							children: "Automação WhatsApp & Evolution API"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 252,
							columnNumber: 15
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: `px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${isConnected ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-amber-500/20 text-amber-400 border-amber-500/30"}`,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `w-2 h-2 rounded-full ${isConnected ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}` }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 258,
								columnNumber: 17
							}, void 0), isConnected ? "Instância Conectada (OPEN)" : "Aguardando Conexão"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 253,
							columnNumber: 15
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 251,
						columnNumber: 13
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-zinc-400 mt-1 flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["Instância: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
								className: "font-mono text-[#E6C994]",
								children: "teste1"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 263,
								columnNumber: 32
							}, void 0)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 263,
								columnNumber: 15
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "•" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 264,
								columnNumber: 15
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["Servidor: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
								className: "font-mono text-[#E6C994]",
								children: "Easypanel / Evolution"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 265,
								columnNumber: 31
							}, void 0)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 265,
								columnNumber: 15
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 262,
						columnNumber: 13
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 250,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 244,
					columnNumber: 9
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap items-center gap-3 self-start md:self-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: checkEvolutionStatus,
							disabled: isLoadingStatus,
							className: "p-2.5 bg-[#1A1612] hover:bg-[#251f19] text-zinc-300 border border-[#C59A55]/20 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
							title: "Atualizar Status",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: `w-4 h-4 text-[#C59A55] ${isLoadingStatus ? "animate-spin" : ""}` }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 278,
								columnNumber: 13
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 271,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: handleOpenQrModal,
							className: "flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black hover:brightness-110 rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QrCode, { className: "w-4 h-4 text-black" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 286,
								columnNumber: 13
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: isConnected ? "Ver QR Code / Reenviar" : "Gerar QR Code WhatsApp" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 287,
								columnNumber: 13
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 281,
							columnNumber: 11
						}, void 0),
						isConnected && /* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: handleDisconnect,
							disabled: isDisconnecting,
							className: "flex items-center gap-1.5 px-3 py-2.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 rounded-xl text-xs font-bold transition-all cursor-pointer",
							children: [/* @__PURE__ */ (void 0)(Power, { className: "w-3.5 h-3.5" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 297,
								columnNumber: 15
							}, void 0), /* @__PURE__ */ (void 0)("span", { children: "Desconectar" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 298,
								columnNumber: 15
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 291,
							columnNumber: 13
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 270,
					columnNumber: 9
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 243,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "lg:col-span-5 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
							className: "text-xs font-bold uppercase tracking-wider text-[#E6C994] flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageSquareCode, { className: "w-4 h-4 text-[#C59A55]" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 311,
								columnNumber: 15
							}, void 0), "Regras e Mensagens Automáticas"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 310,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[11px] text-zinc-400 font-medium",
							children: [automations.filter((a) => a.enabled).length, " ativas"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 314,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 309,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-3",
						children: automations.map((aut) => {
							const isSelected = selectedAutomation.id === aut.id;
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								onClick: () => setSelectedAutomation(aut),
								className: `p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${isSelected ? "bg-[#1F1914] border-[#C59A55] shadow-md ring-1 ring-[#C59A55]/50" : "bg-[#16120E] border-[#C59A55]/20 hover:border-[#C59A55]/40 hover:bg-[#1A1612]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-start justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", {
										className: "text-sm font-bold text-[#FBF9F4]",
										children: aut.title
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 334,
										columnNumber: 23
									}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-xs text-zinc-400 mt-0.5 leading-snug",
										children: aut.description
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 335,
										columnNumber: 23
									}, void 0)] }, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 333,
										columnNumber: 21
									}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										onClick: (e) => {
											e.stopPropagation();
											const nextState = !aut.enabled;
											updateAutomation(aut.id, { enabled: nextState });
											if (selectedAutomation.id === aut.id) setSelectedAutomation((prev) => ({
												...prev,
												enabled: nextState
											}));
										},
										className: `relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${aut.enabled ? "bg-emerald-500" : "bg-zinc-800"}`,
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${aut.enabled ? "translate-x-5" : "translate-x-0"}` }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 353,
											columnNumber: 23
										}, void 0)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 339,
										columnNumber: 21
									}, void 0)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 332,
									columnNumber: 19
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between text-[11px] pt-2 border-t border-[#C59A55]/15 font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-zinc-400 flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "w-3.5 h-3.5 text-[#C59A55]" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 363,
												columnNumber: 23
											}, void 0),
											aut.relativeTiming,
											" às ",
											aut.time
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 362,
										columnNumber: 21
									}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: `font-semibold flex items-center gap-1 ${aut.enabled ? "text-emerald-400" : "text-zinc-500"}`,
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `w-1.5 h-1.5 rounded-full ${aut.enabled ? "bg-emerald-400 animate-pulse" : "bg-zinc-600"}` }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 371,
											columnNumber: 23
										}, void 0), aut.enabled ? "Ativo" : "Desativado"]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 366,
										columnNumber: 21
									}, void 0)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 361,
									columnNumber: 19
								}, void 0)]
							}, aut.id, true, {
								fileName: _jsxFileName$1,
								lineNumber: 323,
								columnNumber: 17
							}, void 0);
						})
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 319,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 308,
					columnNumber: 9
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "lg:col-span-7 space-y-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "bg-[#16120E] p-6 rounded-2xl border border-[#C59A55]/20 shadow-md space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between border-b border-[#C59A55]/15 pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
									className: "text-base font-serif font-bold text-[#FBF9F4]",
									children: ["Editar: ", selectedAutomation.title]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 386,
									columnNumber: 17
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-zinc-400 mt-0.5",
									children: "Ajuste o gatilho de tempo e o modelo de mensagem enviado via WhatsApp"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 389,
									columnNumber: 17
								}, void 0)] }, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 385,
									columnNumber: 15
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: handleSaveAutomation,
									className: "flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black hover:brightness-110 rounded-xl text-xs font-bold shadow-xs cursor-pointer transition-all active:scale-95",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Save, { className: "w-3.5 h-3.5 text-black" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 399,
										columnNumber: 17
									}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Salvar automação" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 400,
										columnNumber: 17
									}, void 0)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 394,
									columnNumber: 15
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 384,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									className: "block text-xs font-bold text-zinc-300 mb-1",
									children: "Momento do Disparo (Timing)"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 407,
									columnNumber: 17
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									type: "text",
									value: selectedAutomation.relativeTiming,
									onChange: (e) => setSelectedAutomation({
										...selectedAutomation,
										relativeTiming: e.target.value
									}),
									className: "w-full px-3.5 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-xs font-medium focus:border-[#C59A55] focus:outline-none"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 410,
									columnNumber: 17
								}, void 0)] }, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 406,
									columnNumber: 15
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
									className: "block text-xs font-bold text-zinc-300 mb-1",
									children: "Horário do Disparo"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 421,
									columnNumber: 17
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									type: "time",
									value: selectedAutomation.time,
									onChange: (e) => setSelectedAutomation({
										...selectedAutomation,
										time: e.target.value
									}),
									className: "w-full px-3.5 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-xs font-medium focus:border-[#C59A55] focus:outline-none"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 424,
									columnNumber: 17
								}, void 0)] }, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 420,
									columnNumber: 15
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 405,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "block text-xs font-bold text-zinc-300 mb-1.5",
								children: "Variáveis Personalizáveis (Clique para inserir no texto):"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 437,
								columnNumber: 15
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-wrap gap-1.5",
								children: variables.map((v) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => handleInsertVariable(v.code),
									className: "px-2.5 py-1 bg-[#1A1612] hover:bg-[#C59A55]/20 hover:border-[#C59A55]/50 border border-[#C59A55]/30 rounded-lg text-xs font-mono font-medium text-[#E6C994] transition-colors cursor-pointer",
									children: [
										v.code,
										" ",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-[10px] text-zinc-400 font-sans",
											children: [
												"(",
												v.label,
												")"
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 448,
											columnNumber: 30
										}, void 0)
									]
								}, v.code, true, {
									fileName: _jsxFileName$1,
									lineNumber: 442,
									columnNumber: 19
								}, void 0))
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 440,
								columnNumber: 15
							}, void 0)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 436,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
								className: "block text-xs font-bold text-zinc-300 mb-1",
								children: "Modelo da Mensagem"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 456,
								columnNumber: 15
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
								rows: 7,
								value: selectedAutomation.messageTemplate,
								onChange: (e) => setSelectedAutomation({
									...selectedAutomation,
									messageTemplate: e.target.value
								}),
								className: "w-full px-3.5 py-2.5 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-xs font-mono font-medium focus:border-[#C59A55] focus:outline-none leading-relaxed"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 459,
								columnNumber: 15
							}, void 0)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 455,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-3 pt-3 border-t border-[#C59A55]/15",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-xs font-bold text-zinc-300 block",
										children: "Pré-visualização do WhatsApp do Hóspede:"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 474,
										columnNumber: 15
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "bg-[#0b141a] p-4 rounded-2xl border border-[#C59A55]/20 shadow-inner",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "bg-[#1F1914] p-4 rounded-2xl rounded-tl-xs border border-[#C59A55]/30 shadow-md text-xs text-[#FBF9F4] leading-relaxed font-sans max-w-[92%] space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "whitespace-pre-line",
												children: getRenderedPreview()
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 479,
												columnNumber: 19
											}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-[9px] text-zinc-400 mt-1 block text-right",
												children: [selectedAutomation.time || "10:00", " ✓✓"]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 480,
												columnNumber: 19
											}, void 0)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 478,
											columnNumber: 17
										}, void 0)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 477,
										columnNumber: 15
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "bg-[#1F1914] p-4 rounded-2xl border border-[#C59A55]/30 space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
												className: "block text-xs font-bold text-[#E6C994] flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "w-4 h-4 text-[#C59A55]" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 489,
													columnNumber: 19
												}, void 0), "Testar Disparo Real no seu WhatsApp (Evolution API):"]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 488,
												columnNumber: 17
											}, void 0),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
												onSubmit: handleSendTestMessage,
												className: "flex gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
													type: "text",
													placeholder: "Seu número com DDD (ex: 21999998888)",
													value: testPhone,
													onChange: (e) => setTestPhone(e.target.value),
													className: "flex-1 px-3.5 py-2 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-xs font-medium focus:outline-none focus:border-[#C59A55]"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 493,
													columnNumber: 19
												}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
													type: "submit",
													disabled: isSendingTest || !testPhone.trim(),
													className: "px-5 py-2 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black hover:brightness-110 rounded-xl text-xs font-bold transition-all disabled:opacity-50 cursor-pointer flex items-center gap-1.5 shadow-sm",
													children: [isSendingTest ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: "w-3.5 h-3.5 animate-spin text-black" }, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 506,
														columnNumber: 23
													}, void 0) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "w-3.5 h-3.5 text-black" }, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 508,
														columnNumber: 23
													}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: isSendingTest ? "Enviando..." : "Enviar Teste" }, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 510,
														columnNumber: 21
													}, void 0)]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 500,
													columnNumber: 19
												}, void 0)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 492,
												columnNumber: 17
											}, void 0),
											testFeedback && /* @__PURE__ */ (void 0)("p", {
												className: "text-xs font-medium mt-1 transition-all text-[#E6C994]",
												children: testFeedback
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 514,
												columnNumber: 19
											}, void 0)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 487,
										columnNumber: 15
									}, void 0)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 473,
								columnNumber: 13
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 383,
						columnNumber: 11
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 382,
					columnNumber: 9
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 305,
				columnNumber: 7
			}, void 0),
			isQrModalOpen && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",
				children: /* @__PURE__ */ (void 0)("div", {
					className: "bg-[#16120E] rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#C59A55]/30 animate-in zoom-in-95 duration-200 space-y-5 relative",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between pb-3 border-b border-[#C59A55]/15",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "w-8 h-8 rounded-xl bg-[#C59A55]/20 text-[#E6C994] border border-[#C59A55]/30 flex items-center justify-center",
									children: /* @__PURE__ */ (void 0)(Smartphone, { className: "w-4 h-4 text-[#C59A55]" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 529,
										columnNumber: 19
									}, void 0)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 528,
									columnNumber: 17
								}, void 0), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
									className: "text-base font-serif font-bold text-[#FBF9F4]",
									children: "QR Code Evolution API"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 532,
									columnNumber: 19
								}, void 0), /* @__PURE__ */ (void 0)("p", {
									className: "text-[11px] text-zinc-400",
									children: "Conecte o WhatsApp para disparos automáticos"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 533,
									columnNumber: 19
								}, void 0)] }, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 531,
									columnNumber: 17
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 527,
								columnNumber: 15
							}, void 0), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => setIsQrModalOpen(false),
								className: "p-1.5 text-zinc-400 hover:text-white rounded-lg cursor-pointer transition-colors",
								children: /* @__PURE__ */ (void 0)(X, { className: "w-5 h-5" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 541,
									columnNumber: 17
								}, void 0)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 536,
								columnNumber: 15
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 526,
							columnNumber: 13
						}, void 0),
						/* @__PURE__ */ (void 0)("div", {
							className: "text-center space-y-4",
							children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "p-3 bg-[#1A1612] rounded-xl border border-[#C59A55]/20 text-xs text-left space-y-1 font-mono",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex justify-between items-center",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-zinc-400",
											children: "Instância:"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 548,
											columnNumber: 19
										}, void 0), /* @__PURE__ */ (void 0)("strong", {
											className: "text-[#E6C994]",
											children: "teste1"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 549,
											columnNumber: 19
										}, void 0)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 547,
										columnNumber: 17
									}, void 0), /* @__PURE__ */ (void 0)("div", {
										className: "flex justify-between items-center",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-zinc-400",
											children: "Status:"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 552,
											columnNumber: 19
										}, void 0), /* @__PURE__ */ (void 0)("span", {
											className: `font-bold flex items-center gap-1 ${isConnected ? "text-emerald-400" : "text-amber-400"}`,
											children: [/* @__PURE__ */ (void 0)("span", { className: `w-1.5 h-1.5 rounded-full ${isConnected ? "bg-emerald-400" : "bg-amber-400 animate-ping"}` }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 556,
												columnNumber: 21
											}, void 0), isConnected ? "ABERTO / CONECTADO" : "AGUARDANDO QR CODE"]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 553,
											columnNumber: 19
										}, void 0)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 551,
										columnNumber: 17
									}, void 0)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 546,
									columnNumber: 15
								}, void 0),
								isLoadingStatus ? /* @__PURE__ */ (void 0)("div", {
									className: "w-56 h-56 bg-[#1A1612] rounded-2xl border border-dashed border-[#C59A55]/30 mx-auto flex flex-col items-center justify-center p-4",
									children: [/* @__PURE__ */ (void 0)(RefreshCw, { className: "w-8 h-8 text-[#C59A55] animate-spin mb-2" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 565,
										columnNumber: 19
									}, void 0), /* @__PURE__ */ (void 0)("span", {
										className: "text-xs text-zinc-400 font-medium",
										children: "Solicitando QR Code..."
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 566,
										columnNumber: 19
									}, void 0)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 564,
									columnNumber: 17
								}, void 0) : isConnected ? /* @__PURE__ */ (void 0)("div", {
									className: "w-56 h-56 bg-[#1F1914] rounded-2xl border border-emerald-500/30 mx-auto flex flex-col items-center justify-center p-4 text-center",
									children: [
										/* @__PURE__ */ (void 0)(CircleCheck, { className: "w-16 h-16 text-emerald-400 mb-2" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 570,
											columnNumber: 19
										}, void 0),
										/* @__PURE__ */ (void 0)("h4", {
											className: "font-bold text-[#FBF9F4] text-sm",
											children: "WhatsApp Conectado!"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 571,
											columnNumber: 19
										}, void 0),
										/* @__PURE__ */ (void 0)("p", {
											className: "text-[11px] text-emerald-300 mt-1 leading-snug",
											children: [
												"Sua instância ",
												/* @__PURE__ */ (void 0)("strong", {
													className: "font-mono text-[#E6C994]",
													children: "teste1"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 573,
													columnNumber: 35
												}, void 0),
												" está pronta para enviar automações."
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 572,
											columnNumber: 19
										}, void 0)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 569,
									columnNumber: 17
								}, void 0) : qrCodeData ? /* @__PURE__ */ (void 0)("div", {
									className: "w-56 h-56 bg-white rounded-2xl border border-[#C59A55]/40 mx-auto p-2 flex items-center justify-center shadow-md relative group",
									children: /* @__PURE__ */ (void 0)("img", {
										src: qrCodeData.startsWith("data:") ? qrCodeData : `data:image/png;base64,${qrCodeData}`,
										alt: "QR Code WhatsApp",
										className: "w-full h-full object-contain rounded-xl"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 578,
										columnNumber: 19
									}, void 0)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 577,
									columnNumber: 17
								}, void 0) : /* @__PURE__ */ (void 0)("div", {
									className: "w-56 h-56 bg-[#1A1612] rounded-2xl border border-[#C59A55]/30 mx-auto flex flex-col items-center justify-center p-4",
									children: [/* @__PURE__ */ (void 0)(QrCode, { className: "w-16 h-16 text-zinc-500 mb-2" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 586,
										columnNumber: 19
									}, void 0), /* @__PURE__ */ (void 0)("span", {
										className: "text-xs text-zinc-400 font-medium text-center",
										children: "Clique abaixo para gerar o QR Code"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 587,
										columnNumber: 19
									}, void 0)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 585,
									columnNumber: 17
								}, void 0),
								/* @__PURE__ */ (void 0)("div", {
									className: "bg-[#1A1612] p-3 rounded-xl border border-[#C59A55]/20 text-left text-[11px] text-zinc-300 leading-relaxed",
									children: [/* @__PURE__ */ (void 0)("strong", {
										className: "text-[#E6C994]",
										children: "Instruções de Escaneamento:"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 594,
										columnNumber: 17
									}, void 0), /* @__PURE__ */ (void 0)("ol", {
										className: "list-decimal list-inside mt-1 space-y-0.5 text-zinc-400",
										children: [
											/* @__PURE__ */ (void 0)("li", { children: [
												"Abra o ",
												/* @__PURE__ */ (void 0)("strong", {
													className: "text-zinc-200",
													children: "WhatsApp"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 596,
													columnNumber: 30
												}, void 0),
												" no celular"
											] }, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 596,
												columnNumber: 19
											}, void 0),
											/* @__PURE__ */ (void 0)("li", { children: ["Vá em ", /* @__PURE__ */ (void 0)("strong", {
												className: "text-zinc-200",
												children: "Aparelhos Conectados > Conectar um aparelho"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 597,
												columnNumber: 29
											}, void 0)] }, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 597,
												columnNumber: 19
											}, void 0),
											/* @__PURE__ */ (void 0)("li", { children: "Aponte a câmera para o QR Code acima" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 598,
												columnNumber: 19
											}, void 0)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 595,
										columnNumber: 17
									}, void 0)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 593,
									columnNumber: 15
								}, void 0)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 545,
							columnNumber: 13
						}, void 0),
						/* @__PURE__ */ (void 0)("div", {
							className: "pt-2 flex justify-between items-center gap-3",
							children: [/* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: handleFetchQrCode,
								disabled: isLoadingStatus,
								className: "px-4 py-2.5 bg-[#1A1612] hover:bg-[#251f19] text-zinc-300 border border-[#C59A55]/20 text-xs font-bold rounded-xl cursor-pointer transition-all flex items-center gap-1.5",
								children: [/* @__PURE__ */ (void 0)(RefreshCw, { className: `w-3.5 h-3.5 text-[#C59A55] ${isLoadingStatus ? "animate-spin" : ""}` }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 610,
									columnNumber: 17
								}, void 0), /* @__PURE__ */ (void 0)("span", { children: isLoadingStatus ? "Gerando..." : "Novo QR Code" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 611,
									columnNumber: 17
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 604,
								columnNumber: 15
							}, void 0), /* @__PURE__ */ (void 0)("button", {
								type: "button",
								onClick: () => setIsQrModalOpen(false),
								className: "px-6 py-2.5 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black text-xs font-bold rounded-xl cursor-pointer hover:brightness-110 transition-all",
								children: "Concluído"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 614,
								columnNumber: 15
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 603,
							columnNumber: 13
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 525,
					columnNumber: 11
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 524,
				columnNumber: 9
			}, void 0)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 240,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName = "/app/applet/src/routes/admin/automations.tsx?tsr-split=component";
function AutomationsPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AutomationsView, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 3,
		columnNumber: 10
	}, this);
}
//#endregion
export { AutomationsPage as component };
