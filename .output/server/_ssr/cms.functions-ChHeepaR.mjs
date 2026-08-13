import { t as supabase } from "./client-Dk-bryI9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cms.functions-ChHeepaR.js
var defaultContent = {
	id: "",
	chale_name: "Chalé A-Frame Florianópolis",
	hero_title: "Conecte-se com o que realmente importa.",
	hero_subtitle: "CHALÉ EXCLUSIVO EM FLORIANÓPOLIS",
	hero_description: "Um refúgio privativo entre a natureza e o mar, criado para momentos inesquecíveis.",
	about_title: "Seu refúgio entre a natureza e o mar",
	about_text_1: "Desfrute de uma experiência única em um chalé privativo, cercado pela natureza e com uma vista encantadora para o mar.",
	about_text_2: "Com arquitetura em estilo A-frame, estrutura em madeira, amplas paredes de vidro e ambientes integrados, o espaço foi pensado para proporcionar conforto, privacidade e momentos especiais.",
	airbnb_url: "https://www.airbnb.com.br/rooms/1703914788039625027"
};
async function getSiteContent() {
	try {
		const { data, error } = await supabase.from("site_content").select("*").single();
		if (error || !data) return defaultContent;
		return {
			...defaultContent,
			...data
		};
	} catch (err) {
		console.warn("Error fetching site content:", err);
		return defaultContent;
	}
}
async function trackAirbnbClick(input) {
	try {
		const source = input?.data?.source || input?.source || "direct";
		await supabase.from("airbnb_clicks").insert({
			source,
			device: "web"
		});
		return { success: true };
	} catch (err) {
		console.warn("Error tracking airbnb click:", err);
		return { success: false };
	}
}
async function updateSiteContent(input) {
	try {
		const payload = input?.data || input;
		const { error } = await supabase.from("site_content").update(payload).eq("id", payload.id);
		if (error) throw error;
		return { success: true };
	} catch (err) {
		console.error("Error updating site content:", err);
		throw err;
	}
}
async function getDashboardStats() {
	try {
		const { count: clicks } = await supabase.from("airbnb_clicks").select("*", {
			count: "exact",
			head: true
		});
		const { count: guests } = await supabase.from("guests").select("*", {
			count: "exact",
			head: true
		});
		return {
			clicks: clicks || 0,
			guests: guests || 0,
			conversionRate: .12
		};
	} catch (err) {
		return {
			clicks: 0,
			guests: 0,
			conversionRate: .12
		};
	}
}
//#endregion
export { updateSiteContent as i, getSiteContent as n, trackAirbnbClick as r, getDashboardStats as t };
