import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-C94-R9A8.mjs";
import { t as supabase } from "./client-Dk-bryI9.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { E as MousePointer2, I as LoaderCircle, K as CircleCheck, Q as Calendar, W as Circle, a as Users, c as TrendingUp } from "../_libs/lucide-react.mjs";
import { t as getDashboardStats } from "./cms.functions-ChHeepaR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-DCFWGUuc.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/admin/dashboard.tsx?tsr-split=component";
function Dashboard() {
	const queryClient = useQueryClient();
	const { data: stats } = useQuery({
		queryKey: ["admin-stats"],
		queryFn: () => getDashboardStats()
	});
	const { data: recentReservations } = useQuery({
		queryKey: ["recent-reservations"],
		queryFn: async () => {
			const { data, error } = await supabase.from("guests").select("*").order("created_at", { ascending: false }).limit(5);
			if (error) throw error;
			return data;
		}
	});
	const { data: tasks, isLoading: loadingTasks } = useQuery({
		queryKey: ["dashboard-tasks"],
		queryFn: async () => {
			const { data, error } = await supabase.from("tasks").select("*").order("created_at", { ascending: false }).limit(5);
			if (error) throw error;
			return data;
		}
	});
	const toggleTaskMutation = useMutation({
		mutationFn: async ({ id, completed }) => {
			const { error } = await supabase.from("tasks").update({ completed }).eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["dashboard-tasks"] })
	});
	const cards = [
		{
			title: "Cliques no Airbnb",
			value: stats?.clicks || 0,
			icon: MousePointer2,
			color: "text-blue-600"
		},
		{
			title: "Hóspedes Cadastrados",
			value: stats?.guests || 0,
			icon: Users,
			color: "text-green-600"
		},
		{
			title: "Taxa de Conversão",
			value: `${((stats?.conversionRate || .12) * 100).toFixed(1)}%`,
			icon: TrendingUp,
			color: "text-amber-600"
		},
		{
			title: "Próximos Check-ins",
			value: recentReservations?.filter((r) => r.status === "confirmed").length || 0,
			icon: Calendar,
			color: "text-purple-600"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6 md:space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "text-2xl md:text-3xl font-serif text-[#24170F]",
				children: "Dashboard"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 87,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm md:text-base text-muted-foreground font-sans",
				children: "Visão geral da sua hospedagem"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 86,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6",
				children: cards.map((card) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
					className: "border-none shadow-sm bg-white",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, {
						className: "flex flex-row items-center justify-between pb-2 space-y-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, {
							className: "text-[10px] md:text-xs font-medium text-muted-foreground uppercase tracking-wider",
							children: card.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card.icon, { className: `w-4 h-4 ${card.color}` }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-xl md:text-2xl font-bold text-[#24170F]",
						children: card.value
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 15
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 99,
						columnNumber: 13
					}, this)]
				}, card.title, true, {
					fileName: _jsxFileName,
					lineNumber: 92,
					columnNumber: 28
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 91,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
					className: "border-none shadow-sm bg-white p-4 md:p-6 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-base md:text-lg font-serif mb-4 md:mb-6 text-[#24170F]",
						children: "Atividades Recentes"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-3 md:space-y-4",
						children: recentReservations?.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-center py-8 md:py-12 text-muted-foreground italic text-sm",
							children: "Nenhuma atividade recente."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 109,
							columnNumber: 49
						}, this) : recentReservations?.map((res) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between p-3 rounded-lg bg-[#F7F3EA]/50 border border-beige/10",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "w-4 h-4 text-gold" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 112,
										columnNumber: 23
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 111,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-sm font-medium text-[#24170F] truncate",
										children: res.name
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 115,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-[10px] text-muted-foreground uppercase tracking-tighter",
										children: res.status
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 116,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 114,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 110,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[10px] text-muted-foreground whitespace-nowrap ml-2",
								children: res.created_at ? new Date(res.created_at).toLocaleDateString("pt-BR") : "-"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 19
							}, this)]
						}, res.id, true, {
							fileName: _jsxFileName,
							lineNumber: 109,
							columnNumber: 195
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 106,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
					className: "border-none shadow-sm bg-white p-4 md:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-base md:text-lg font-serif mb-4 md:mb-6 text-[#24170F]",
						children: "Tarefas de Hoje"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 127,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-3 md:space-y-4",
						children: loadingTasks ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "animate-spin text-gold mx-auto" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 129,
							columnNumber: 29
						}, this) : tasks?.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-center italic text-muted-foreground text-sm",
							children: "Sem tarefas."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 129,
							columnNumber: 108
						}, this) : tasks?.map((task) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3 p-3 rounded-lg bg-[#F7F3EA]/50 border border-beige/10 group",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: () => toggleTaskMutation.mutate({
									id: task.id,
									completed: !task.completed
								}),
								className: "shrink-0",
								children: task.completed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "w-4 h-4 text-green-600" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 134,
									columnNumber: 37
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Circle, { className: "w-4 h-4 text-gold" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 134,
									columnNumber: 91
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 130,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: `text-sm font-sans ${task.completed ? "line-through text-muted-foreground" : "text-[#24170F]"} truncate`,
								children: task.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 136,
								columnNumber: 17
							}, this)]
						}, task.id, true, {
							fileName: _jsxFileName,
							lineNumber: 129,
							columnNumber: 210
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 128,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 126,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 105,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 85,
		columnNumber: 10
	}, this);
}
//#endregion
export { Dashboard as component };
