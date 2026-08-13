import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/client-Dk-bryI9.js
function isNewSupabaseApiKey(value) {
	return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}
function createSupabaseFetch(supabaseKey) {
	return (input, init) => {
		const headers = new Headers(typeof Request !== "undefined" && input instanceof Request ? input.headers : void 0);
		if (init?.headers) new Headers(init.headers).forEach((value, key) => headers.set(key, value));
		if (isNewSupabaseApiKey(supabaseKey) && headers.get("Authorization") === `Bearer ${supabaseKey}`) headers.delete("Authorization");
		headers.set("apikey", supabaseKey);
		return fetch(input, {
			...init,
			headers
		});
	};
}
function createSupabaseClient() {
	const SUPABASE_URL = {
		"BASE_URL": "/",
		"DEV": true,
		"MODE": "production",
		"PROD": false,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3ZHlmc29kb3locmV1YnVpaGpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0MTM5NTAsImV4cCI6MjEwMTk4OTk1MH0._LU10fJVsR2fFVSsRYj8B_oYk5bCOLX_lZbo71w9rbI",
		"VITE_SUPABASE_URL": "https://ewdyfsodoyhreubuihjs.supabase.co"
	}["VITE_SUPABASE_URL"] || processModule.env["SUPABASE_URL"] || processModule.env["VITE_SUPABASE_URL"] || "";
	const SUPABASE_PUBLISHABLE_KEY = {
		"BASE_URL": "/",
		"DEV": true,
		"MODE": "production",
		"PROD": false,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3ZHlmc29kb3locmV1YnVpaGpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0MTM5NTAsImV4cCI6MjEwMTk4OTk1MH0._LU10fJVsR2fFVSsRYj8B_oYk5bCOLX_lZbo71w9rbI",
		"VITE_SUPABASE_URL": "https://ewdyfsodoyhreubuihjs.supabase.co"
	}["VITE_SUPABASE_PUBLISHABLE_KEY"] || {
		"BASE_URL": "/",
		"DEV": true,
		"MODE": "production",
		"PROD": false,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3ZHlmc29kb3locmV1YnVpaGpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0MTM5NTAsImV4cCI6MjEwMTk4OTk1MH0._LU10fJVsR2fFVSsRYj8B_oYk5bCOLX_lZbo71w9rbI",
		"VITE_SUPABASE_URL": "https://ewdyfsodoyhreubuihjs.supabase.co"
	}["VITE_SUPABASE_ANON_KEY"] || processModule.env["SUPABASE_PUBLISHABLE_KEY"] || processModule.env["VITE_SUPABASE_ANON_KEY"] || "";
	const finalUrl = SUPABASE_URL || "https://placeholder.supabase.co";
	const finalKey = SUPABASE_PUBLISHABLE_KEY || "placeholder-key";
	return createClient(finalUrl, finalKey, {
		global: { fetch: createSupabaseFetch(finalKey) },
		auth: {
			storage: typeof window !== "undefined" ? localStorage : void 0,
			persistSession: true,
			autoRefreshToken: true
		}
	});
}
var _supabase;
var supabase = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabase) _supabase = createSupabaseClient();
	return Reflect.get(_supabase, prop, receiver);
} });
//#endregion
export { supabase as t };
