import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as CardTitle, r as CardHeader, t as Card } from "./card-C94-R9A8.mjs";
import { t as supabase } from "./client-Dk-bryI9.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as CartesianGrid, i as Area, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as AreaChart } from "../_libs/recharts+[...].mjs";
import { E as MousePointer2, I as LoaderCircle, K as CircleCheck, O as Monitor, c as TrendingUp, g as Smartphone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics-C4ouJYpY.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/admin/analytics.tsx?tsr-split=component";
function Analytics() {
	const { data: clickData, isLoading: loadingClicks } = useQuery({
		queryKey: ["analytics-clicks"],
		queryFn: async () => {
			const { data, error } = await supabase.from("airbnb_clicks").select("*").order("created_at", { ascending: true });
			if (error) throw error;
			return data;
		}
	});
	const { data: guestData } = useQuery({
		queryKey: ["analytics-guests"],
		queryFn: async () => {
			const { data, error } = await supabase.from("guests").select("status, created_at");
			if (error) throw error;
			return data;
		}
	});
	const clicksByDay = clickData?.reduce((acc, click) => {
		const day = new Date(click.created_at).toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "2-digit"
		});
		acc[day] = (acc[day] || 0) + 1;
		return acc;
	}, {});
	const chartData = Object.keys(clicksByDay || {}).map((day) => ({
		name: day,
		cliques: clicksByDay[day]
	}));
	const deviceData = [{
		name: "Mobile",
		value: clickData?.filter((c) => c.device === "mobile").length || 0,
		icon: Smartphone
	}, {
		name: "Desktop",
		value: clickData?.filter((c) => c.device === "web" || c.device === "desktop").length || 0,
		icon: Monitor
	}];
	const totalClicks = clickData?.length || 0;
	const confirmedReservations = guestData?.filter((g) => g.status === "confirmed").length || 0;
	const conversionRate = totalClicks > 0 ? (confirmedReservations / totalClicks * 100).toFixed(1) : 0;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex justify-between items-end",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "text-3xl font-serif text-[#24170F]",
					children: "Analytics"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-muted-foreground font-sans",
					children: "Desempenho real da sua landing page"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 66,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "bg-gold/10 px-4 py-2 rounded-lg border border-gold/20",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-xs font-sans text-gold font-bold uppercase tracking-wider",
						children: "Status: Ao Vivo"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
						className: "border-none shadow-sm bg-white p-6",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "p-3 bg-blue-50 rounded-xl text-blue-600",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MousePointer2, { className: "w-6 h-6" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 78,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 77,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm text-muted-foreground font-sans",
								children: "Total de Cliques"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 81,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-2xl font-bold text-[#24170F]",
								children: totalClicks
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 82,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 80,
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
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
						className: "border-none shadow-sm bg-white p-6",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "p-3 bg-green-50 rounded-xl text-green-600",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "w-6 h-6" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 89,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 88,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm text-muted-foreground font-sans",
								children: "Reservas Confirmadas"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 92,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-2xl font-bold text-[#24170F]",
								children: confirmedReservations
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 93,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 91,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 87,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
						className: "border-none shadow-sm bg-white p-6",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "p-3 bg-gold/10 rounded-xl text-gold",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrendingUp, { className: "w-6 h-6" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 100,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 99,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm text-muted-foreground font-sans",
								children: "Taxa de Conversão"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 103,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-2xl font-bold text-[#24170F]",
								children: [conversionRate, "%"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 104,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 97,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
					className: "lg:col-span-2 border-none shadow-sm bg-white p-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
						className: "px-0 pt-0",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
							className: "text-lg font-serif text-[#24170F] flex items-center justify-between",
							children: ["Cliques no Airbnb por Dia", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs font-sans font-normal text-muted-foreground",
								children: "Últimos 30 dias"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 115,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 113,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 112,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "h-[300px] w-full mt-4",
						children: loadingClicks ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-center h-full",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "animate-spin text-gold" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 87
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 119,
							columnNumber: 30
						}, this) : chartData.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AreaChart, {
								data: chartData,
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("linearGradient", {
										id: "colorCliques",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
											offset: "5%",
											stopColor: "#C59A55",
											stopOpacity: .3
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 123,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
											offset: "95%",
											stopColor: "#C59A55",
											stopOpacity: 0
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 124,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 122,
										columnNumber: 21
									}, this) }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 121,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartesianGrid, {
										strokeDasharray: "3 3",
										vertical: false,
										stroke: "#F7F3EA"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 127,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XAxis, {
										dataKey: "name",
										axisLine: false,
										tickLine: false,
										tick: {
											fontSize: 10,
											fill: "#888"
										}
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 128,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(YAxis, {
										axisLine: false,
										tickLine: false,
										tick: {
											fontSize: 10,
											fill: "#888"
										}
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 132,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip, { contentStyle: {
										borderRadius: "12px",
										border: "none",
										boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
										fontSize: "12px"
									} }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 136,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Area, {
										type: "monotone",
										dataKey: "cliques",
										stroke: "#C59A55",
										fillOpacity: 1,
										fill: "url(#colorCliques)",
										strokeWidth: 3
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 142,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 120,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 119,
							columnNumber: 165
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-center h-full text-muted-foreground italic text-sm",
							children: "Aguardando primeiros acessos..."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 144,
							columnNumber: 40
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 118,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 111,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
					className: "border-none shadow-sm bg-white p-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
						className: "px-0 pt-0",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
							className: "text-lg font-serif text-[#24170F]",
							children: "Origem do Tráfego"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 150,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 149,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-6 mt-6",
						children: deviceData.map((device) => {
							const percentage = totalClicks > 0 ? Math.round(device.value / totalClicks * 100) : 0;
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(device.icon, { className: "w-4 h-4 text-gold" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 158,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-sans font-medium text-[#24170F]",
											children: device.name
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 159,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 157,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-bold text-[#24170F]",
										children: [
											device.value,
											" (",
											percentage,
											"%)"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 161,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 156,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "w-full bg-[#F7F3EA] h-2 rounded-full overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "bg-gold h-full rounded-full transition-all duration-1000",
										style: { width: `${percentage}%` }
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 164,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 163,
									columnNumber: 19
								}, this)]
							}, device.name, true, {
								fileName: _jsxFileName,
								lineNumber: 155,
								columnNumber: 20
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 152,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 148,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 110,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 62,
		columnNumber: 10
	}, this);
}
//#endregion
export { Analytics as component };
