globalThis.__nitro_main__ = import.meta.url;
import { o as __toESM } from "./_runtime.mjs";
import { a as defineLazyEventHandler, i as callMiddleware, n as HTTPError, o as toEventHandler, s as toMiddleware, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { t as require_express } from "./_libs/express+[...].mjs";
import "./_libs/vite.mjs";
import { t as createClient } from "./_libs/supabase__supabase-js.mjs";
import processModule from "node:process";
import path from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs").then((n) => n.t)) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"917e-ld5OIYBPIk1hH3iwwZALWNNL/Uk\"",
		"mtime": "2026-08-12T23:49:25.784Z",
		"size": 37246,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-08-12T23:49:25.784Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/AppContext-5ksJDfqg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"209-GvHb8zkyJWmul4tRfKZitJoaK6o\"",
		"mtime": "2026-08-12T23:49:24.844Z",
		"size": 521,
		"path": "../public/assets/AppContext-5ksJDfqg.js"
	},
	"/assets/analytics-D_clWntL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6295b-d6zEAGuHyCYbBmTYC02DcWqKsNc\"",
		"mtime": "2026-08-12T23:49:24.844Z",
		"size": 403803,
		"path": "../public/assets/analytics-D_clWntL.js"
	},
	"/assets/auth-CIsM3_dI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1080-G7EunzxApbIXUFpnnuB/9oNHiPQ\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 4224,
		"path": "../public/assets/auth-CIsM3_dI.js"
	},
	"/assets/automations-DB1QcARH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6ea4-682RF2t5fS79oNHRFXSDiAD2yiY\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 28324,
		"path": "../public/assets/automations-DB1QcARH.js"
	},
	"/assets/button-CgVzQESR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12ae-FPsUXs1rJd1AYoz3efGvqzPuJLw\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 4782,
		"path": "../public/assets/button-CgVzQESR.js"
	},
	"/assets/calendar-Cfb6uzsj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"101-72Cj+V8KDXzjY5TKnSHnhFa293g\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 257,
		"path": "../public/assets/calendar-Cfb6uzsj.js"
	},
	"/assets/card-BRvGDkGi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5be-ptWqo1waanibhtbkqcvgO0RlKas\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 1470,
		"path": "../public/assets/card-BRvGDkGi.js"
	},
	"/assets/circle-B7F8D8Lv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82-lvDOUf1RhTim2GeGOxzPyGJiMzI\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 130,
		"path": "../public/assets/circle-B7F8D8Lv.js"
	},
	"/assets/circle-check-C-5EARJ0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-/pp+TfmWjg+kDLfkFJqHN4XMpnQ\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 178,
		"path": "../public/assets/circle-check-C-5EARJ0.js"
	},
	"/assets/cms.functions-Bp_-iCiO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"688-o4K5TYQqc3dyjf/slI9LEC5uFfs\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 1672,
		"path": "../public/assets/cms.functions-Bp_-iCiO.js"
	},
	"/assets/concierge-BlIPfPaB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"94e-VCE36nOXidDkX2zwWZe2w1dyBes\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 2382,
		"path": "../public/assets/concierge-BlIPfPaB.js"
	},
	"/assets/banheira-BxewtF7B.jfif": {
		"type": "image/pjpeg",
		"etag": "\"14738-nut8wQtgKdR0fxKP9JT6MjsTGbg\"",
		"mtime": "2026-08-12T23:49:24.846Z",
		"size": 83768,
		"path": "../public/assets/banheira-BxewtF7B.jfif"
	},
	"/assets/concierge-CW9F5y_Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"517b-CZZtsEwdvF5EsbwIS7zmmDs56rs\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 20859,
		"path": "../public/assets/concierge-CW9F5y_Y.js"
	},
	"/assets/content-C0uKdS-R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"180a-8vyUcN5LVgTkFKNRmW2TjHiw4f8\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 6154,
		"path": "../public/assets/content-C0uKdS-R.js"
	},
	"/assets/createLucideIcon-D4fJPYq_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4af-8U5TsZ0rs41FzH+b0AOPCYsK2dI\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 1199,
		"path": "../public/assets/createLucideIcon-D4fJPYq_.js"
	},
	"/assets/dist-BXu4pRgw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4cbc-VOpgSU27qewKfUVS3172FsF0W1o\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 19644,
		"path": "../public/assets/dist-BXu4pRgw.js"
	},
	"/assets/cozinha-s0J3s8ua.jfif": {
		"type": "image/pjpeg",
		"etag": "\"12a13-lqgS7qFHG63vXY1HNHIfkwbkI/g\"",
		"mtime": "2026-08-12T23:49:24.846Z",
		"size": 76307,
		"path": "../public/assets/cozinha-s0J3s8ua.jfif"
	},
	"/assets/guests-DU1Y_FUh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1662-YqncDDdFAo5W2rptjIv+5Lm/SqY\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 5730,
		"path": "../public/assets/guests-DU1Y_FUh.js"
	},
	"/assets/hero-chale-DC57m4mv.jfif": {
		"type": "image/pjpeg",
		"etag": "\"3c221-3bbNpCuOjUjSM9WJKt9N4uZJU2U\"",
		"mtime": "2026-08-12T23:49:24.846Z",
		"size": 246305,
		"path": "../public/assets/hero-chale-DC57m4mv.jfif"
	},
	"/assets/dashboard-BECWH4rx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b01-17IBT6GwhzimqHkXGI8Ypj+tqpY\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 6913,
		"path": "../public/assets/dashboard-BECWH4rx.js"
	},
	"/assets/image-14-DOpwnAbb.jfif": {
		"type": "image/pjpeg",
		"etag": "\"31253-6lDLWBUOWDHEQptyTwXmk6iWKtY\"",
		"mtime": "2026-08-12T23:49:24.847Z",
		"size": 201299,
		"path": "../public/assets/image-14-DOpwnAbb.jfif"
	},
	"/assets/info-DAp-Oj2J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cc-0vIUAp1NEgmO4xAH9h5z7csHoTg\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 204,
		"path": "../public/assets/info-DAp-Oj2J.js"
	},
	"/assets/index-BDyjliG_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b51b2-R16UyXbCF+QGFrnJZ1FMlxWeBLs\"",
		"mtime": "2026-08-12T23:49:24.844Z",
		"size": 741810,
		"path": "../public/assets/index-BDyjliG_.js"
	},
	"/assets/input-C3Ay6FIh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2da-qCfoT6RSoIXQDtnSQzexc8RhcNM\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 730,
		"path": "../public/assets/input-C3Ay6FIh.js"
	},
	"/assets/jsx-dev-runtime-BsTk6-E6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6597-PjZrmrahfKX9kXamO7Z+1NbqbpY\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 26007,
		"path": "../public/assets/jsx-dev-runtime-BsTk6-E6.js"
	},
	"/assets/jsx-runtime-CuKG5Fk1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14f9-c22aRzEoZAphn5uAGvoZghFMU/Y\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 5369,
		"path": "../public/assets/jsx-runtime-CuKG5Fk1.js"
	},
	"/assets/loader-circle-4cYdk9F-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-OX0AACbzmKWf7eU2I+rA1dfu5Nk\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 144,
		"path": "../public/assets/loader-circle-4cYdk9F-.js"
	},
	"/assets/lock-C5MhJhet.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ce-1ge5hTI/9L507sJlr7dJS06Ybhg\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 206,
		"path": "../public/assets/lock-C5MhJhet.js"
	},
	"/assets/plus-DHpXLo9d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-plIvH2NzUPj8pQJAVL4rW/wpFA8\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 153,
		"path": "../public/assets/plus-DHpXLo9d.js"
	},
	"/assets/proxy-Pgdi8ALa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e193-BejFih8VNJxgxd33nMtDehi0tBk\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 123283,
		"path": "../public/assets/proxy-Pgdi8ALa.js"
	},
	"/assets/quarto-DnC0g1df.jfif": {
		"type": "image/pjpeg",
		"etag": "\"8243-uHsaBoZkY0jJ7Hv5Hy+o2zclJAY\"",
		"mtime": "2026-08-12T23:49:24.847Z",
		"size": 33347,
		"path": "../public/assets/quarto-DnC0g1df.jfif"
	},
	"/assets/react-dom-CNU9AR6J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2426-cLbfJRoVBt2eQmYolmJmtRBKHdA\"",
		"mtime": "2026-08-12T23:49:24.845Z",
		"size": 9254,
		"path": "../public/assets/react-dom-CNU9AR6J.js"
	},
	"/assets/recommendations-CioinKVM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"618-TKlEQpxH+f9xMce7H31WQL0MhDU\"",
		"mtime": "2026-08-12T23:49:24.846Z",
		"size": 1560,
		"path": "../public/assets/recommendations-CioinKVM.js"
	},
	"/assets/reservations-DmeGqt1F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e9c-IYu8voaih6vGrmk+1f2ilLiCZhc\"",
		"mtime": "2026-08-12T23:49:24.846Z",
		"size": 7836,
		"path": "../public/assets/reservations-DmeGqt1F.js"
	},
	"/assets/route-Dbf2I15-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14f8-+Ts+IVxIxnVUkcIgOk0pbJtYZpg\"",
		"mtime": "2026-08-12T23:49:24.846Z",
		"size": 5368,
		"path": "../public/assets/route-Dbf2I15-.js"
	},
	"/assets/routes-CyI4NhBk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11e72-pDXw6rkVQMPW6J3ur9O/vusCfLg\"",
		"mtime": "2026-08-12T23:49:24.846Z",
		"size": 73330,
		"path": "../public/assets/routes-CyI4NhBk.js"
	},
	"/assets/sala-C6k3cdwd.jfif": {
		"type": "image/pjpeg",
		"etag": "\"143f9-5MZJr2ZRJzwwoc6ZAFBPoI+iiCU\"",
		"mtime": "2026-08-12T23:49:24.847Z",
		"size": 82937,
		"path": "../public/assets/sala-C6k3cdwd.jfif"
	},
	"/assets/save-C0AJUTHB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"147-2S/vDRvMh6MUrlO8iOPSFdsadR0\"",
		"mtime": "2026-08-12T23:49:24.846Z",
		"size": 327,
		"path": "../public/assets/save-C0AJUTHB.js"
	},
	"/assets/settings-BAvfkVRf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3d18-5A1sIwgI1vhUb5ZQY3np8nuUb2k\"",
		"mtime": "2026-08-12T23:49:24.846Z",
		"size": 15640,
		"path": "../public/assets/settings-BAvfkVRf.js"
	},
	"/assets/smartphone-CLW810Q2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c5-zKsGn7+l3UzBXMTRO96H4dN8eCQ\"",
		"mtime": "2026-08-12T23:49:24.846Z",
		"size": 197,
		"path": "../public/assets/smartphone-CLW810Q2.js"
	},
	"/assets/styles-BQSGDkO2.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"20733-52hd6DpDxhI1Bq5SFxvGYbkt400\"",
		"mtime": "2026-08-12T23:49:24.847Z",
		"size": 132915,
		"path": "../public/assets/styles-BQSGDkO2.css"
	},
	"/assets/tasks-Dkxu07HY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"120f-CwUJAVu6vssvNwvPssrVrdf55to\"",
		"mtime": "2026-08-12T23:49:24.846Z",
		"size": 4623,
		"path": "../public/assets/tasks-Dkxu07HY.js"
	},
	"/assets/trash-2-DfahKOEy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"148-mLnDmOMQtX7x3E5fdVMp9JnsLbo\"",
		"mtime": "2026-08-12T23:49:24.846Z",
		"size": 328,
		"path": "../public/assets/trash-2-DfahKOEy.js"
	},
	"/assets/trending-up-blr6WfnC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"175-VqX5OUUXtZTkQzmsc4UvYeDkcKw\"",
		"mtime": "2026-08-12T23:49:24.846Z",
		"size": 373,
		"path": "../public/assets/trending-up-blr6WfnC.js"
	},
	"/assets/useMutation-KXv8ECsx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c9-FO4+6/jJNFdvo57mP3DEVnB3nS0\"",
		"mtime": "2026-08-12T23:49:24.846Z",
		"size": 2249,
		"path": "../public/assets/useMutation-KXv8ECsx.js"
	},
	"/assets/useQuery-h2sigbn5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24f2-rQmlNI4LjPFI/aJDjwWlapz66nY\"",
		"mtime": "2026-08-12T23:49:24.846Z",
		"size": 9458,
		"path": "../public/assets/useQuery-h2sigbn5.js"
	},
	"/assets/users-RTS4HziT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"132-h4YpCJSzgEXccY886C3SBd/dtJE\"",
		"mtime": "2026-08-12T23:49:24.846Z",
		"size": 306,
		"path": "../public/assets/users-RTS4HziT.js"
	},
	"/assets/utils-DojpP95n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6a7e-rehYKtt6GcJPoEspFNv2VomMQ30\"",
		"mtime": "2026-08-12T23:49:24.846Z",
		"size": 27262,
		"path": "../public/assets/utils-DojpP95n.js"
	},
	"/assets/x-DpMZMOvN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-59KFRUay4lNIe3ozjwVSMUYGIzE\"",
		"mtime": "2026-08-12T23:49:24.846Z",
		"size": 154,
		"path": "../public/assets/x-DpMZMOvN.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region server.ts
var import_express = /* @__PURE__ */ __toESM(require_express(), 1);
async function startServer() {
	const app = (0, import_express.default)();
	const PORT = 3e3;
	app.use(import_express.json());
	const getSupabaseAdmin = () => {
		const url = processModule.env.VITE_SUPABASE_URL || processModule.env.SUPABASE_URL || "https://ewdyfsodoyhreubuihjs.supabase.co";
		const key = processModule.env.SUPABASE_SERVICE_ROLE_KEY || processModule.env.VITE_SUPABASE_ANON_KEY;
		return createClient(url, key);
	};
	const getEvolutionConfig = () => {
		return {
			baseUrl: (processModule.env.EVOLUTION_API_URL || "https://n8n-evolution-api.iqfos1.easypanel.host").replace(/\/$/, ""),
			apiKey: processModule.env.EVOLUTION_API_KEY || "ASDAFAWDASFSEFSDFDFSDFSFESFSDFSEFSEFS",
			instanceName: processModule.env.EVOLUTION_INSTANCE_NAME || "teste1"
		};
	};
	app.get("/api/stays", async (req, res) => {
		try {
			const { data, error } = await getSupabaseAdmin().from("stays").select("*, guests(*)");
			if (error) {
				console.error("Error fetching stays from Supabase:", error);
				return res.status(500).json({ error: error.message });
			}
			const formatted = (data || []).map((row) => ({
				id: row.id,
				guestId: row.guest_id || row.guests?.id || "",
				guestName: row.guests?.name || "Hóspede Sem Nome",
				guestPhone: row.guests?.phone || "",
				checkIn: row.check_in,
				checkOut: row.check_out,
				guestsCount: row.guests_count || 1,
				status: row.status || "confirmed",
				source: row.source || "Direct",
				notes: row.notes || "",
				allowAutomations: row.allow_automations ?? true
			}));
			return res.json(formatted);
		} catch (err) {
			console.error("Catch fetching stays:", err);
			return res.status(500).json({ error: err.message });
		}
	});
	app.post("/api/stays", async (req, res) => {
		try {
			const supabaseAdmin = getSupabaseAdmin();
			const { id, guestId, guestName, guestPhone, guestEmail, checkIn, checkOut, guestsCount, status, source, notes, allowAutomations } = req.body;
			const isValidUuid = (val) => val && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(val);
			const targetGuestId = isValidUuid(guestId) ? guestId : crypto.randomUUID();
			const targetStayId = isValidUuid(id) ? id : crypto.randomUUID();
			const guestRecord = {
				id: targetGuestId,
				name: guestName || "Hóspede",
				phone: guestPhone || "",
				email: guestEmail || null,
				notes: notes || null
			};
			const { error: guestError } = await supabaseAdmin.from("guests").upsert(guestRecord, { onConflict: "id" });
			if (guestError) console.error("Error upserting guest in Supabase:", guestError);
			const stayRecord = {
				id: targetStayId,
				guest_id: targetGuestId,
				property_id: "11111111-1111-1111-1111-111111111111",
				check_in: checkIn,
				check_out: checkOut,
				guests_count: guestsCount || 1,
				status: status || "confirmed",
				source: source || "Direct",
				allow_automations: allowAutomations ?? true,
				notes: notes || null
			};
			const { data: savedStay, error: stayError } = await supabaseAdmin.from("stays").upsert(stayRecord, { onConflict: "id" }).select("*, guests(*)").single();
			if (stayError) {
				console.error("Error upserting stay in Supabase:", stayError);
				return res.status(500).json({ error: stayError.message });
			}
			const formatted = {
				id: savedStay.id,
				guestId: savedStay.guest_id,
				guestName: savedStay.guests?.name || guestName || "Hóspede",
				guestPhone: savedStay.guests?.phone || guestPhone || "",
				checkIn: savedStay.check_in,
				checkOut: savedStay.check_out,
				guestsCount: savedStay.guests_count,
				status: savedStay.status,
				source: savedStay.source,
				notes: savedStay.notes || "",
				allowAutomations: savedStay.allow_automations ?? true
			};
			return res.json({
				success: true,
				item: formatted
			});
		} catch (err) {
			console.error("Catch saving stay:", err);
			return res.status(500).json({ error: err.message });
		}
	});
	app.delete("/api/stays/:id", async (req, res) => {
		try {
			const supabaseAdmin = getSupabaseAdmin();
			const { id } = req.params;
			const { error } = await supabaseAdmin.from("stays").delete().eq("id", id);
			if (error) {
				console.error("Error deleting stay from Supabase:", error);
				return res.status(500).json({ error: error.message });
			}
			return res.json({
				success: true,
				message: "Reserva removida do Supabase"
			});
		} catch (err) {
			console.error("Catch deleting stay:", err);
			return res.status(500).json({ error: err.message });
		}
	});
	app.get("/api/automations", async (req, res) => {
		try {
			const { data, error } = await getSupabaseAdmin().from("automations").select("*");
			if (error) {
				console.error("Error fetching automations from Supabase:", error);
				return res.status(500).json({ error: error.message });
			}
			const formatted = (data || []).map((row) => ({
				id: row.id,
				type: row.type || "welcome",
				title: row.title || "Automação",
				description: row.description || "",
				enabled: row.enabled ?? true,
				relativeTiming: row.relative_timing || "No dia",
				time: row.time || "10:00",
				messageTemplate: row.message_template || ""
			}));
			return res.json(formatted);
		} catch (err) {
			console.error("Catch fetching automations:", err);
			return res.status(500).json({ error: err.message });
		}
	});
	app.post("/api/automations", async (req, res) => {
		try {
			const supabaseAdmin = getSupabaseAdmin();
			const { id, type, title, description, enabled, relativeTiming, time, messageTemplate } = req.body;
			const isValidUuid = (val) => val && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(val);
			const dbRecord = {
				id: isValidUuid(id) ? id : crypto.randomUUID(),
				property_id: "11111111-1111-1111-1111-111111111111",
				type: type || "welcome",
				title: title || "Automação",
				description: description || "",
				enabled: enabled ?? true,
				relative_timing: relativeTiming || "No dia",
				time: time || "10:00",
				message_template: messageTemplate || ""
			};
			const { data, error } = await supabaseAdmin.from("automations").upsert(dbRecord, { onConflict: "id" }).select("*").single();
			if (error) {
				console.error("Error upserting automation in Supabase:", error);
				return res.status(500).json({ error: error.message });
			}
			const formatted = {
				id: data.id,
				type: data.type,
				title: data.title,
				description: data.description,
				enabled: data.enabled,
				relativeTiming: data.relative_timing,
				time: data.time,
				messageTemplate: data.message_template
			};
			return res.json({
				success: true,
				item: formatted
			});
		} catch (err) {
			console.error("Catch saving automation:", err);
			return res.status(500).json({ error: err.message });
		}
	});
	app.get("/api/knowledge-base", async (req, res) => {
		try {
			const { data, error } = await getSupabaseAdmin().from("knowledge_base").select("*");
			if (error) {
				console.error("Error fetching knowledge_base:", error);
				return res.status(500).json({ error: error.message });
			}
			const formatted = (data || []).map((row) => ({
				id: row.id,
				section: row.section || "Hospedagem",
				question: row.question,
				answer: row.answer,
				updatedAt: row.updated_at || (/* @__PURE__ */ new Date()).toISOString()
			}));
			return res.json(formatted);
		} catch (err) {
			console.error("Catch fetching knowledge base:", err);
			return res.status(500).json({ error: err.message });
		}
	});
	app.post("/api/knowledge-base", async (req, res) => {
		try {
			const supabaseAdmin = getSupabaseAdmin();
			const { id, section, question, answer } = req.body;
			if (!question || !answer) return res.status(400).json({ error: "Pergunta e resposta são obrigatórias." });
			const record = {
				id: id && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id) ? id : crypto.randomUUID(),
				property_id: "11111111-1111-1111-1111-111111111111",
				section: section || "Hospedagem",
				question,
				answer,
				updated_at: (/* @__PURE__ */ new Date()).toISOString()
			};
			const { data, error } = await supabaseAdmin.from("knowledge_base").upsert(record, { onConflict: "id" }).select();
			if (error) {
				console.error("Error upserting knowledge_base:", error);
				return res.status(500).json({ error: error.message });
			}
			const savedRow = data && data[0] ? data[0] : record;
			return res.json({
				success: true,
				item: {
					id: savedRow.id,
					section: savedRow.section,
					question: savedRow.question,
					answer: savedRow.answer,
					updatedAt: savedRow.updated_at
				}
			});
		} catch (err) {
			console.error("Catch saving knowledge base item:", err);
			return res.status(500).json({ error: err.message });
		}
	});
	app.delete("/api/knowledge-base/:id", async (req, res) => {
		try {
			const supabaseAdmin = getSupabaseAdmin();
			const { id } = req.params;
			const { error } = await supabaseAdmin.from("knowledge_base").delete().eq("id", id);
			if (error) {
				console.error("Error deleting from knowledge_base:", error);
				return res.status(500).json({ error: error.message });
			}
			return res.json({
				success: true,
				message: "Item removido do Supabase"
			});
		} catch (err) {
			console.error("Catch deleting knowledge base item:", err);
			return res.status(500).json({ error: err.message });
		}
	});
	app.get("/api/concierge", async (req, res) => {
		try {
			const { data, error } = await getSupabaseAdmin().from("concierge_settings").select("*").single();
			if (error) return res.status(500).json({ error: error.message });
			return res.json(data);
		} catch (err) {
			return res.status(500).json({ error: err.message });
		}
	});
	app.post("/api/concierge", async (req, res) => {
		try {
			const supabaseAdmin = getSupabaseAdmin();
			const { enabled, name, welcome_message, tone } = req.body;
			const record = {
				property_id: "11111111-1111-1111-1111-111111111111",
				enabled: enabled ?? true,
				name: name || "Concierge Villa do Poente",
				welcome_message: welcome_message || "Olá! Seja bem-vindo!",
				tone: tone || "Acolhedor"
			};
			const { data, error } = await supabaseAdmin.from("concierge_settings").upsert(record, { onConflict: "property_id" }).select();
			if (error) return res.status(500).json({ error: error.message });
			return res.json({
				success: true,
				data
			});
		} catch (err) {
			return res.status(500).json({ error: err.message });
		}
	});
	app.get("/api/evolution/status", async (req, res) => {
		try {
			const { baseUrl, apiKey, instanceName } = getEvolutionConfig();
			const instance = req.query.instance || instanceName;
			const response = await fetch(`${baseUrl}/instance/connectionState/${instance}`, {
				method: "GET",
				headers: {
					"apikey": apiKey,
					"Content-Type": "application/json"
				}
			});
			if (!response.ok) {
				const errorText = await response.text();
				return res.status(response.status).json({
					connected: false,
					state: "disconnected",
					instance,
					details: errorText
				});
			}
			const data = await response.json();
			const state = data?.instance?.state || data?.state || "disconnected";
			return res.json({
				connected: state === "open" || state === "CONNECTED",
				state,
				instance,
				provider: "Evolution API"
			});
		} catch (err) {
			console.error("Error checking Evolution status:", err);
			return res.status(500).json({
				connected: false,
				error: err?.message || "Falha ao comunicar com a Evolution API"
			});
		}
	});
	app.get("/api/evolution/connect", async (req, res) => {
		try {
			const { baseUrl, apiKey, instanceName } = getEvolutionConfig();
			const instance = req.query.instance || instanceName;
			try {
				const statusRes = await fetch(`${baseUrl}/instance/connectionState/${instance}`, {
					method: "GET",
					headers: { "apikey": apiKey }
				});
				if (statusRes.ok) {
					const statusData = await statusRes.json();
					const currentState = statusData?.instance?.state || statusData?.state;
					if (currentState === "open" || currentState === "CONNECTED") return res.json({
						success: true,
						connected: true,
						state: "open",
						instance,
						message: "Instância já está conectada ao WhatsApp",
						qrcode: null
					});
				}
			} catch (stErr) {
				console.warn("Status check before connect error:", stErr);
			}
			let response = await fetch(`${baseUrl}/instance/connect/${instance}`, {
				method: "GET",
				headers: {
					"apikey": apiKey,
					"Content-Type": "application/json"
				}
			});
			if (response.status === 404) {
				console.log(`Instance ${instance} not found on Evolution. Creating instance...`);
				await fetch(`${baseUrl}/instance/create`, {
					method: "POST",
					headers: {
						"apikey": apiKey,
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						instanceName: instance,
						qrcode: true,
						integration: "WHATSAPP-BAILEYS"
					})
				});
				response = await fetch(`${baseUrl}/instance/connect/${instance}`, {
					method: "GET",
					headers: {
						"apikey": apiKey,
						"Content-Type": "application/json"
					}
				});
			}
			const data = await response.json();
			const qrcode = data?.base64 || data?.code || data?.qrcode?.base64 || data?.qrcode || null;
			const pairingCode = data?.pairingCode || data?.qrcode?.pairingCode || null;
			return res.json({
				success: response.ok,
				connected: data?.instance?.state === "open" || data?.state === "open",
				state: data?.instance?.state || data?.state || "connecting",
				instance,
				qrcode,
				pairingCode,
				raw: data
			});
		} catch (err) {
			console.error("Error fetching QR Code from Evolution:", err);
			return res.status(500).json({
				success: false,
				error: err?.message || "Erro ao solicitar QR Code"
			});
		}
	});
	app.post("/api/evolution/disconnect", async (req, res) => {
		try {
			const { baseUrl, apiKey, instanceName } = getEvolutionConfig();
			const instance = req.body?.instance || instanceName;
			const response = await fetch(`${baseUrl}/instance/logout/${instance}`, {
				method: "DELETE",
				headers: {
					"apikey": apiKey,
					"Content-Type": "application/json"
				}
			});
			const data = await response.json().catch(() => ({}));
			return res.json({
				success: response.ok,
				message: "Desconectado com sucesso",
				raw: data
			});
		} catch (err) {
			console.error("Error disconnecting Evolution instance:", err);
			return res.status(500).json({
				success: false,
				error: err?.message || "Erro ao desconectar instância"
			});
		}
	});
	app.post("/api/evolution/send-test", async (req, res) => {
		try {
			const { baseUrl, apiKey, instanceName } = getEvolutionConfig();
			const { phone, message, instance } = req.body;
			if (!phone || !message) return res.status(400).json({ error: "Número de telefone e mensagem são obrigatórios." });
			const targetInstance = instance || instanceName;
			let cleanPhone = phone.replace(/\D/g, "");
			if (cleanPhone.length === 10 || cleanPhone.length === 11) cleanPhone = `55${cleanPhone}`;
			const response = await fetch(`${baseUrl}/message/sendText/${targetInstance}`, {
				method: "POST",
				headers: {
					"apikey": apiKey,
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					number: cleanPhone,
					options: {
						delay: 1200,
						presence: "composing"
					},
					textMessage: { text: message },
					text: message
				})
			});
			const data = await response.json();
			return res.json({
				success: response.ok,
				data
			});
		} catch (err) {
			console.error("Error sending test message via Evolution:", err);
			return res.status(500).json({
				success: false,
				error: err?.message || "Erro ao enviar mensagem de teste"
			});
		}
	});
	{
		const distPath = path.join(processModule.cwd(), "dist");
		app.use(import_express.static(distPath));
		app.get("*", (req, res) => {
			res.sendFile(path.join(distPath, "index.html"));
		});
	}
	app.listen(PORT, "0.0.0.0", () => {
		console.log(`Server running on http://0.0.0.0:${PORT}`);
	});
	return app;
}
var app = startServer();
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var multiHandler = (...handlers) => {
	const final = handlers.pop();
	const middleware = handlers.filter(Boolean).map((h) => toMiddleware(h));
	return (ev) => callMiddleware(ev, middleware, final);
};
var _lazy_6qWkqV = defineLazyEventHandler(() => import("./_chunks/renderer-template.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const $0 = {
		route: "/**",
		handler: multiHandler(toEventHandler(app), _lazy_6qWkqV)
	};
	return (m, p) => {
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		s.length;
		return {
			data: $0,
			params: { "_": s.slice(1).join("/") }
		};
	};
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
