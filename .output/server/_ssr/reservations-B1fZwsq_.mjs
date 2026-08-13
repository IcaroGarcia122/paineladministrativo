import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Card } from "./card-C94-R9A8.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { B as Funnel, I as LoaderCircle, Q as Calendar, R as Info, a as Users, w as Plus } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-8n41GpW2.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reservations-B1fZwsq_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/admin/reservations.tsx?tsr-split=component";
function ReservationsPage() {
	const queryClient = useQueryClient();
	const [isAdding, setIsAdding] = (0, import_react.useState)(false);
	const { data: reservations, isLoading } = useQuery({
		queryKey: ["admin-reservations"],
		queryFn: async () => {
			const res = await fetch("/api/stays");
			if (!res.ok) throw new Error("Falha ao carregar estadias");
			return res.json();
		}
	});
	const updateStatus = useMutation({
		mutationFn: async ({ id, status, resItem }) => {
			const res = await fetch("/api/stays", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					...resItem,
					id,
					status
				})
			});
			if (!res.ok) throw new Error("Falha ao atualizar status");
			return res.json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["admin-reservations"] });
			toast.success("Status da reserva atualizado no Supabase.");
		}
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6 md:space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "text-2xl md:text-3xl font-serif text-[#24170F]",
				children: "Reservas"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 61,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm md:text-base text-muted-foreground font-sans",
				children: "Controle central de todas as estadias"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex w-full sm:w-auto gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "outline",
					className: "flex-1 sm:flex-none border-[#DCC9A5] text-[#24170F]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Funnel, { className: "w-4 h-4 mr-2" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 13
					}, this), " Filtrar"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					onClick: () => window.location.href = "/admin/guests",
					className: "flex-1 sm:flex-none bg-gold text-white",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "w-4 h-4 mr-2" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 13
					}, this), " Nova"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 59,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
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
								lineNumber: 79,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
								className: "px-6 py-4",
								children: "Período"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 80,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
								className: "px-6 py-4",
								children: "Hóspedes"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 81,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
								className: "px-6 py-4",
								children: "Status"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 82,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
								className: "px-6 py-4",
								children: "Ações"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 17
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 77,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
						className: "divide-y divide-beige/10",
						children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
							colSpan: 5,
							className: "px-6 py-12 text-center",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "w-8 h-8 animate-spin text-gold mx-auto" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 89,
								columnNumber: 21
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 88,
							columnNumber: 19
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 87,
							columnNumber: 28
						}, this) : reservations?.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
							colSpan: 5,
							className: "px-6 py-12 text-center italic text-muted-foreground",
							children: "Nenhuma reserva encontrada."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 19
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 54
						}, this) : reservations?.map((res) => {
							const isBlocked = res.notes?.includes("[BLOQUEIO]");
							const guestName = res.guestName || res.name || "Hóspede";
							const guestPhone = res.guestPhone || res.phone || "";
							const checkIn = res.checkIn || res.check_in;
							const checkOut = res.checkOut || res.check_out;
							const count = res.guestsCount || res.num_guests || 1;
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
								className: `hover:bg-[#F7F3EA]/30 transition-colors ${isBlocked ? "bg-red-50/30" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "px-6 py-4",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "font-medium text-[#24170F]",
											children: guestName
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 104,
											columnNumber: 25
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "text-[10px] text-muted-foreground",
											children: guestPhone || "Sem telefone"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 105,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 103,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "px-6 py-4 text-sm text-muted-foreground",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "w-3 h-3 text-gold" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 109,
													columnNumber: 27
												}, this),
												checkIn ? (/* @__PURE__ */ new Date(checkIn + "T00:00:00")).toLocaleDateString("pt-BR") : "-",
												" a ",
												checkOut ? (/* @__PURE__ */ new Date(checkOut + "T00:00:00")).toLocaleDateString("pt-BR") : "-"
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 108,
											columnNumber: 25
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 107,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "px-6 py-4 text-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "w-3 h-3 inline mr-1 text-gold" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 114,
												columnNumber: 25
											}, this),
											" ",
											count
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 113,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "px-6 py-4",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
											value: res.status || "confirmed",
											onChange: (e) => updateStatus.mutate({
												id: res.id,
												status: e.target.value,
												resItem: res
											}),
											className: `text-[10px] px-2 py-1 rounded border bg-transparent font-semibold uppercase tracking-tighter ${res.status === "confirmed" ? "border-green-200 text-green-700 bg-green-50" : res.status === "cancelled" ? "border-red-200 text-red-700 bg-red-50" : "border-yellow-200 text-yellow-700 bg-yellow-50"}`,
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
													value: "pending",
													children: "Pendente"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 122,
													columnNumber: 27
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
													value: "confirmed",
													children: "Confirmada"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 123,
													columnNumber: 27
												}, this),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
													value: "cancelled",
													children: "Cancelada"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 124,
													columnNumber: 27
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 117,
											columnNumber: 25
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 116,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
										className: "px-6 py-4 text-right",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
											variant: "ghost",
											size: "sm",
											className: "text-gold",
											onClick: () => toast.info(`Notas: ${res.notes || "Nenhuma"}`),
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Info, { className: "w-4 h-4" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 129,
												columnNumber: 27
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 128,
											columnNumber: 25
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 127,
										columnNumber: 23
									}, this)
								]
							}, res.id, true, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 22
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 76,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 75,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 74,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 58,
		columnNumber: 10
	}, this);
}
//#endregion
export { ReservationsPage as component };
