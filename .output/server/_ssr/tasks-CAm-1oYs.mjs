import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Card } from "./card-C94-R9A8.mjs";
import { t as supabase } from "./client-Dk-bryI9.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { I as LoaderCircle, K as CircleCheck, W as Circle, l as Trash2, w as Plus } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-Bi36govA.mjs";
import { t as Button } from "./button-8n41GpW2.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tasks-CAm-1oYs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/admin/tasks.tsx?tsr-split=component";
function TasksManagement() {
	const queryClient = useQueryClient();
	const [newTask, setNewTask] = (0, import_react.useState)("");
	const { data: tasks, isLoading } = useQuery({
		queryKey: ["admin-tasks"],
		queryFn: async () => {
			const { data, error } = await supabase.from("tasks").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	const addTaskMutation = useMutation({
		mutationFn: async (title) => {
			const { error } = await supabase.from("tasks").insert([{
				title,
				completed: false
			}]);
			if (error) throw error;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["admin-tasks"] });
			setNewTask("");
			toast.success("Tarefa adicionada!");
		}
	});
	const toggleTaskMutation = useMutation({
		mutationFn: async ({ id, completed }) => {
			const { error } = await supabase.from("tasks").update({ completed }).eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin-tasks"] })
	});
	const deleteTaskMutation = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from("tasks").delete().eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["admin-tasks"] });
			toast.success("Tarefa removida.");
		}
	});
	const addTask = (e) => {
		e.preventDefault();
		if (!newTask.trim()) return;
		addTaskMutation.mutate(newTask);
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-8 max-w-4xl",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
			className: "text-3xl font-serif text-[#24170F]",
			children: "Organização"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 86,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-muted-foreground font-sans",
			children: "Gerencie as tarefas de manutenção e operação"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 87,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 85,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
			className: "p-6 border-none shadow-sm bg-white",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit: addTask,
				className: "flex gap-4 mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
					value: newTask,
					onChange: (e) => setNewTask(e.target.value),
					placeholder: "Nova tarefa...",
					className: "flex-1"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 92,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					type: "submit",
					disabled: addTaskMutation.isPending,
					className: "bg-[#24170F] text-white hover:bg-[#17130F]",
					children: [addTaskMutation.isPending ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "w-4 h-4 animate-spin" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 42
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "w-4 h-4 mr-2" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 89
					}, this), "Adicionar"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 93,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 91,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-3",
				children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "animate-spin text-gold mx-auto" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 100,
					columnNumber: 24
				}, this) : tasks?.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-center italic text-muted-foreground py-8",
					children: "Nenhuma tarefa pendente."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 100,
					columnNumber: 103
				}, this) : tasks?.map((task) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: `flex items-center justify-between p-4 rounded-xl border transition-all ${task.completed ? "bg-gray-50 border-gray-100 opacity-60" : "bg-[#F7F3EA]/30 border-[#DCC9A5]/20"}`,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: () => toggleTaskMutation.mutate({
								id: task.id,
								completed: !task.completed
							}),
							children: task.completed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "w-6 h-6 text-green-600" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 106,
								columnNumber: 37
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Circle, { className: "w-6 h-6 text-[#C59A55]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 106,
								columnNumber: 91
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 102,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: `font-sans ${task.completed ? "line-through text-gray-400" : "text-[#24170F]"}`,
							children: task.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => deleteTaskMutation.mutate(task.id),
						className: "text-red-400 hover:text-red-600 hover:bg-red-50",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "w-4 h-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 113,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 112,
						columnNumber: 15
					}, this)]
				}, task.id, true, {
					fileName: _jsxFileName,
					lineNumber: 100,
					columnNumber: 214
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 99,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 90,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 84,
		columnNumber: 10
	}, this);
}
//#endregion
export { TasksManagement as component };
