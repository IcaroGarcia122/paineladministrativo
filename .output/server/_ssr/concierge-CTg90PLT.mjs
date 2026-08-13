import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { $ as Bot, G as CircleQuestionMark, T as Pencil, et as BookOpen, l as Trash2, t as X, u as Star, w as Plus, y as Send } from "../_libs/lucide-react.mjs";
import { t as useApp } from "./AppContext-w0-l3Ny3.mjs";
import { t as findBestKnowledgeMatch } from "./concierge-bEK9GnNc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/concierge-CTg90PLT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/views/ConciergeView.tsx";
var kbSections = [
	"Hospedagem",
	"Regras",
	"Check-in",
	"Checkout",
	"Comodidades",
	"Guia da região",
	"Emergências"
];
var ConciergeView = () => {
	const { concierge, updateConcierge, knowledgeBase, addKnowledgeItem, updateKnowledgeItem, deleteKnowledgeItem, property } = useApp();
	const [selectedKbSection, setSelectedKbSection] = (0, import_react.useState)("all");
	const [isAddKbModalOpen, setIsAddKbModalOpen] = (0, import_react.useState)(false);
	const [editingKbItem, setEditingKbItem] = (0, import_react.useState)(null);
	const [kbForm, setKbForm] = (0, import_react.useState)({
		section: "Hospedagem",
		question: "",
		answer: ""
	});
	const [simMessages, setSimMessages] = (0, import_react.useState)([{
		sender: "bot",
		text: concierge.welcomeMessage,
		time: "20:30"
	}]);
	const [simInput, setSimInput] = (0, import_react.useState)("");
	const filteredKb = selectedKbSection === "all" ? knowledgeBase : knowledgeBase.filter((k) => k.section === selectedKbSection);
	const handleOpenAddModal = () => {
		setEditingKbItem(null);
		setKbForm({
			section: "Hospedagem",
			question: "",
			answer: ""
		});
		setIsAddKbModalOpen(true);
	};
	const handleStartEdit = (item) => {
		setEditingKbItem(item);
		setKbForm({
			section: item.section,
			question: item.question,
			answer: item.answer
		});
	};
	const handleKbFormSubmit = (e) => {
		e.preventDefault();
		if (!kbForm.question.trim() || !kbForm.answer.trim()) return;
		if (editingKbItem) {
			updateKnowledgeItem(editingKbItem.id, {
				section: kbForm.section,
				question: kbForm.question.trim(),
				answer: kbForm.answer.trim()
			});
			setEditingKbItem(null);
		} else {
			addKnowledgeItem({
				section: kbForm.section,
				question: kbForm.question.trim(),
				answer: kbForm.answer.trim()
			});
			setIsAddKbModalOpen(false);
		}
		setKbForm({
			section: "Hospedagem",
			question: "",
			answer: ""
		});
	};
	const handleSendSimMessage = (e) => {
		e.preventDefault();
		if (!simInput.trim()) return;
		const userText = simInput.trim();
		const nowTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("pt-BR", {
			hour: "2-digit",
			minute: "2-digit"
		});
		setSimMessages((prev) => [...prev, {
			sender: "user",
			text: userText,
			time: nowTime
		}]);
		setSimInput("");
		setTimeout(() => {
			const matchedItem = findBestKnowledgeMatch(userText, knowledgeBase);
			let botText = "";
			if (matchedItem) {
				if (concierge.tone === "Acolhedor") botText = `Com certeza! ${matchedItem.answer} Se precisar de algo mais, estou à sua disposição!`;
				else if (concierge.tone === "Descontraído") botText = `Com certeza! ${matchedItem.answer} Qualquer outra dúvida, só enviar uma mensagem!`;
				else if (concierge.tone === "Sofisticado") botText = `Prezado hóspede, ${matchedItem.answer} Permaneço à total disposição para tornar sua estada memorável.`;
				else botText = `${matchedItem.answer}`;
			} else {
				const lower = userText.toLowerCase();
				if (lower.includes("olá") || lower.includes("oi") || lower.includes("bom dia") || lower.includes("boa tarde")) botText = concierge.welcomeMessage;
				else botText = `Obrigado por sua pergunta! Registrei sua solicitação sobre "${userText}" e nosso anfitrião ${property.name} responderá em instantes. Há algo mais em que possa ajudar?`;
			}
			setSimMessages((prev) => [...prev, {
				sender: "bot",
				text: botText,
				time: (/* @__PURE__ */ new Date()).toLocaleTimeString("pt-BR", {
					hour: "2-digit",
					minute: "2-digit"
				})
			}]);
		}, 400);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		id: "concierge-view-container",
		className: "space-y-8 animate-in fade-in duration-300",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "bg-[#16120E] text-white p-6 rounded-2xl border border-[#C59A55]/30 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "p-2 bg-[#C59A55]/20 rounded-xl text-[#E6C994] border border-[#C59A55]/30",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bot, { className: "w-6 h-6 text-[#C59A55]" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 165,
								columnNumber: 15
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 164,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-xl font-serif font-bold text-[#FBF9F4]",
							children: "Seu Concierge Virtual IA"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 167,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 163,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-zinc-400 italic",
						children: "\"Seu hóspede pergunta. O Concierge responde.\""
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 169,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 162,
					columnNumber: 9
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-4 self-start md:self-auto",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3 bg-[#1A1612] px-4 py-2 rounded-xl border border-[#C59A55]/20",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-xs font-semibold text-zinc-300",
							children: "Status do Concierge:"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 174,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: () => updateConcierge({ enabled: !concierge.enabled }),
							className: `px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${concierge.enabled ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-xs" : "bg-zinc-800 text-zinc-400 border border-zinc-700"}`,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `w-2 h-2 rounded-full ${concierge.enabled ? "bg-emerald-400 animate-pulse" : "bg-zinc-500"}` }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 183,
								columnNumber: 15
							}, void 0), concierge.enabled ? "Ativo 24/7" : "Desativado"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 175,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 173,
						columnNumber: 11
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 172,
					columnNumber: 9
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 161,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "bg-[#16120E] p-4 rounded-2xl border border-[#C59A55]/20 shadow-md text-center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-2xl font-extrabold text-[#FBF9F4] block",
							children: concierge.statsToday.conversations
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 193,
							columnNumber: 11
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-xs font-semibold text-zinc-400 uppercase tracking-wider mt-1 block",
							children: "Conversas hoje"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 194,
							columnNumber: 11
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 192,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "bg-[#16120E] p-4 rounded-2xl border border-[#C59A55]/20 shadow-md text-center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-2xl font-extrabold text-emerald-400 block",
							children: [concierge.statsToday.answeredPercentage, "%"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 197,
							columnNumber: 11
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-xs font-semibold text-zinc-400 uppercase tracking-wider mt-1 block",
							children: "Perguntas respondidas"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 198,
							columnNumber: 11
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 196,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "bg-[#16120E] p-4 rounded-2xl border border-[#C59A55]/20 shadow-md text-center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-2xl font-extrabold text-[#C59A55] block",
							children: concierge.statsToday.forwardedToHost
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 201,
							columnNumber: 11
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-xs font-semibold text-zinc-400 uppercase tracking-wider mt-1 block",
							children: "Encaminhadas ao anfitrião"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 202,
							columnNumber: 11
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 200,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "bg-[#16120E] p-4 rounded-2xl border border-[#C59A55]/20 shadow-md text-center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-2xl font-extrabold text-[#E6C994] flex items-center justify-center gap-1",
							children: [
								concierge.statsToday.satisfactionRating,
								" ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "w-5 h-5 fill-[#E6C994] text-[#E6C994]" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 206,
									columnNumber: 55
								}, void 0)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 205,
							columnNumber: 11
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-xs font-semibold text-zinc-400 uppercase tracking-wider mt-1 block",
							children: "Satisfação dos hóspedes"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 208,
							columnNumber: 11
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 204,
						columnNumber: 9
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 191,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "lg:col-span-7 space-y-8",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "bg-[#16120E] p-6 rounded-2xl border border-[#C59A55]/20 shadow-md space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#C59A55]/15 pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
									className: "text-sm font-bold uppercase tracking-wider text-[#E6C994] flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BookOpen, { className: "w-4 h-4 text-[#C59A55]" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 219,
										columnNumber: 17
									}, void 0), " Base de Conhecimento"]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 218,
									columnNumber: 15
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: handleOpenAddModal,
									className: "flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black hover:brightness-110 rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer self-start sm:self-auto",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "w-3.5 h-3.5 text-black" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 225,
										columnNumber: 17
									}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "+ Adicionar informação" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 226,
										columnNumber: 17
									}, void 0)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 221,
									columnNumber: 15
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 217,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1 bg-[#1A1612] p-1 rounded-xl border border-[#C59A55]/15 overflow-x-auto",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									onClick: () => setSelectedKbSection("all"),
									className: `px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${selectedKbSection === "all" ? "bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black font-bold shadow-xs" : "text-zinc-400 hover:text-white"}`,
									children: [
										"Todas (",
										knowledgeBase.length,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 232,
									columnNumber: 15
								}, void 0), kbSections.map((sec) => {
									const count = knowledgeBase.filter((k) => k.section === sec).length;
									return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										onClick: () => setSelectedKbSection(sec),
										className: `px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${selectedKbSection === sec ? "bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black font-bold shadow-xs" : "text-zinc-400 hover:text-white"}`,
										children: [
											sec,
											" (",
											count,
											")"
										]
									}, sec, true, {
										fileName: _jsxFileName$1,
										lineNumber: 245,
										columnNumber: 19
									}, void 0);
								})]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 231,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-3",
								children: filteredKb.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "p-4 rounded-xl border border-[#C59A55]/20 bg-[#1F1914] hover:border-[#C59A55]/40 transition-all space-y-2 relative group",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-start justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "px-2 py-0.5 text-[10px] font-bold bg-[#C59A55]/20 text-[#E6C994] border border-[#C59A55]/30 rounded",
												children: item.section
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 268,
												columnNumber: 21
											}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
													onClick: () => handleStartEdit(item),
													className: "text-zinc-400 hover:text-[#C59A55] p-1 cursor-pointer transition-colors",
													title: "Editar item",
													children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pencil, { className: "w-3.5 h-3.5" }, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 277,
														columnNumber: 25
													}, void 0)
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 272,
													columnNumber: 23
												}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
													onClick: () => deleteKnowledgeItem(item.id),
													className: "text-zinc-400 hover:text-rose-400 p-1 cursor-pointer transition-colors",
													title: "Excluir item",
													children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "w-3.5 h-3.5" }, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 284,
														columnNumber: 25
													}, void 0)
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 279,
													columnNumber: 23
												}, void 0)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 271,
												columnNumber: 21
											}, void 0)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 267,
											columnNumber: 19
										}, void 0),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", {
											className: "text-xs font-bold text-[#FBF9F4] flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleQuestionMark, { className: "w-3.5 h-3.5 text-[#C59A55] flex-shrink-0" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 289,
												columnNumber: 21
											}, void 0), item.question]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 288,
											columnNumber: 19
										}, void 0),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-xs text-zinc-300 leading-relaxed pl-5 bg-[#1A1612] p-2.5 rounded-lg border border-[#C59A55]/15",
											children: item.answer
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 292,
											columnNumber: 19
										}, void 0)
									]
								}, item.id, true, {
									fileName: _jsxFileName$1,
									lineNumber: 263,
									columnNumber: 17
								}, void 0))
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 261,
								columnNumber: 13
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 216,
						columnNumber: 11
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 214,
					columnNumber: 9
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "lg:col-span-5 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "bg-[#16120E] rounded-3xl p-4 shadow-xl border border-[#C59A55]/30 text-white space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between pb-3 border-b border-[#C59A55]/15 px-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "w-9 h-9 rounded-full bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black font-bold flex items-center justify-center text-sm shadow-xs",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bot, { className: "w-5 h-5 text-black" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 308,
											columnNumber: 19
										}, void 0)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 307,
										columnNumber: 17
									}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
										className: "text-sm font-bold leading-tight text-[#FBF9F4]",
										children: concierge.name
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 311,
										columnNumber: 19
									}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[10px] text-emerald-400 font-semibold flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 313,
											columnNumber: 21
										}, void 0), "Online • Responde instantaneamente"]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 312,
										columnNumber: 19
									}, void 0)] }, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 310,
										columnNumber: 17
									}, void 0)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 306,
									columnNumber: 15
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[10px] bg-[#1A1612] px-2.5 py-1 rounded-full text-[#E6C994] border border-[#C59A55]/30",
									children: "Simulador IA"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 318,
									columnNumber: 15
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 305,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "h-96 overflow-y-auto p-3 space-y-3 bg-[#0d0b09] rounded-2xl border border-[#C59A55]/15 font-sans",
								children: simMessages.map((msg, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: `flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: `max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed shadow-xs ${msg.sender === "user" ? "bg-[#C59A55]/30 text-[#FBF9F4] border border-[#C59A55]/40 rounded-tr-xs" : "bg-[#1F1914] text-zinc-200 border border-[#C59A55]/15 rounded-tl-xs"}`,
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "whitespace-pre-line",
											children: msg.text
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 337,
											columnNumber: 21
										}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-[9px] text-zinc-400 mt-1 block text-right",
											children: msg.time
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 338,
											columnNumber: 21
										}, void 0)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 330,
										columnNumber: 19
									}, void 0)
								}, idx, false, {
									fileName: _jsxFileName$1,
									lineNumber: 326,
									columnNumber: 17
								}, void 0))
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 324,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
								onSubmit: handleSendSimMessage,
								className: "flex items-center gap-2 pt-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
									type: "text",
									placeholder: "Teste uma pergunta (ex: Qual a senha do wifi?)",
									value: simInput,
									onChange: (e) => setSimInput(e.target.value),
									className: "flex-1 bg-[#1A1612] border border-[#C59A55]/30 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#C59A55]"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 348,
									columnNumber: 15
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "submit",
									className: "p-2.5 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black hover:brightness-110 rounded-xl shadow-xs transition-colors cursor-pointer",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "w-4 h-4 text-black" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 359,
										columnNumber: 17
									}, void 0)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 355,
									columnNumber: 15
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 347,
								columnNumber: 13
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 303,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-3 bg-[#16120E] rounded-xl border border-[#C59A55]/20 text-[11px] text-zinc-400 text-center",
						children: "💡 Dica: Teste perguntar sobre Wi-Fi, Jacuzzi, regras ou restaurantes locais no simulador."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 364,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 302,
					columnNumber: 9
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 212,
				columnNumber: 7
			}, void 0),
			(isAddKbModalOpen || editingKbItem !== null) && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",
				children: /* @__PURE__ */ (void 0)("div", {
					className: "bg-[#16120E] rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#C59A55]/30 animate-in zoom-in-95 duration-200",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center justify-between pb-3 border-b border-[#C59A55]/15",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (void 0)(BookOpen, { className: "w-5 h-5 text-[#C59A55]" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 376,
								columnNumber: 17
							}, void 0), /* @__PURE__ */ (void 0)("h3", {
								className: "text-lg font-serif font-bold text-[#FBF9F4]",
								children: editingKbItem ? "Editar Informação da IA" : "Nova Informação para IA"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 377,
								columnNumber: 17
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 375,
							columnNumber: 15
						}, void 0), /* @__PURE__ */ (void 0)("button", {
							onClick: () => {
								setIsAddKbModalOpen(false);
								setEditingKbItem(null);
							},
							className: "p-1 text-zinc-400 hover:text-white rounded-lg cursor-pointer",
							children: /* @__PURE__ */ (void 0)(X, { className: "w-5 h-5" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 388,
								columnNumber: 17
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 381,
							columnNumber: 15
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 374,
						columnNumber: 13
					}, void 0), /* @__PURE__ */ (void 0)("form", {
						onSubmit: handleKbFormSubmit,
						className: "mt-4 space-y-4",
						children: [
							/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
								className: "block text-xs font-bold text-zinc-300 mb-1",
								children: "Categoria"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 394,
								columnNumber: 17
							}, void 0), /* @__PURE__ */ (void 0)("select", {
								value: kbForm.section,
								onChange: (e) => setKbForm({
									...kbForm,
									section: e.target.value
								}),
								className: "w-full px-3.5 py-2.5 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none",
								children: kbSections.map((s) => /* @__PURE__ */ (void 0)("option", {
									value: s,
									children: s
								}, s, false, {
									fileName: _jsxFileName$1,
									lineNumber: 403,
									columnNumber: 21
								}, void 0))
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 395,
								columnNumber: 17
							}, void 0)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 393,
								columnNumber: 15
							}, void 0),
							/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
								className: "block text-xs font-bold text-zinc-300 mb-1",
								children: "Pergunta ou Dúvida Frequente *"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 411,
								columnNumber: 17
							}, void 0), /* @__PURE__ */ (void 0)("input", {
								type: "text",
								required: true,
								placeholder: "Ex: Como ligar a sauna?",
								value: kbForm.question,
								onChange: (e) => setKbForm({
									...kbForm,
									question: e.target.value
								}),
								className: "w-full px-3.5 py-2.5 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none placeholder:text-zinc-600"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 414,
								columnNumber: 17
							}, void 0)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 410,
								columnNumber: 15
							}, void 0),
							/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
								className: "block text-xs font-bold text-zinc-300 mb-1",
								children: "Resposta da IA *"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 425,
								columnNumber: 17
							}, void 0), /* @__PURE__ */ (void 0)("textarea", {
								rows: 3,
								required: true,
								placeholder: "Ex: O botão fica ao lado da porta de vidro. Pressione por 3 segundos...",
								value: kbForm.answer,
								onChange: (e) => setKbForm({
									...kbForm,
									answer: e.target.value
								}),
								className: "w-full px-3.5 py-2.5 rounded-xl border border-[#C59A55]/30 bg-[#1A1612] text-white text-sm font-medium focus:ring-2 focus:ring-[#C59A55] focus:outline-none placeholder:text-zinc-600"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 428,
								columnNumber: 17
							}, void 0)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 424,
								columnNumber: 15
							}, void 0),
							/* @__PURE__ */ (void 0)("div", {
								className: "pt-2 flex justify-end gap-2",
								children: [/* @__PURE__ */ (void 0)("button", {
									type: "button",
									onClick: () => {
										setIsAddKbModalOpen(false);
										setEditingKbItem(null);
									},
									className: "px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white rounded-xl cursor-pointer",
									children: "Cancelar"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 439,
									columnNumber: 17
								}, void 0), /* @__PURE__ */ (void 0)("button", {
									type: "submit",
									className: "px-5 py-2 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black text-xs font-bold rounded-xl shadow-xs cursor-pointer hover:brightness-110",
									children: editingKbItem ? "Salvar Alterações" : "Salvar Informação"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 449,
									columnNumber: 17
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 438,
								columnNumber: 15
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 392,
						columnNumber: 13
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 373,
					columnNumber: 11
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 372,
				columnNumber: 9
			}, void 0)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 159,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName = "/app/applet/src/routes/admin/concierge.tsx?tsr-split=component";
function ConciergePage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConciergeView, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 3,
		columnNumber: 10
	}, this);
}
//#endregion
export { ConciergePage as component };
