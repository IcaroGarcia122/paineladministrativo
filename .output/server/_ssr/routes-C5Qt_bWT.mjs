import { o as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as supabase } from "./client-Dk-bryI9.mjs";
import { n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { $ as Bot, A as MessageCircle, D as Mountain, F as Lock, H as Compass, J as ChevronLeft, M as Maximize2, P as LogIn, V as ExternalLink, Y as CheckCheck, Z as Car, _ as ShieldCheck, f as Sparkles, g as Smartphone, h as Smile, i as UtensilsCrossed, m as Snowflake, n as Wifi, nt as Bath, p as Sparkle, q as CircleAlert, r as Waves, rt as ArrowRight, s as Tv, t as X, u as Star, y as Send, z as House } from "../_libs/lucide-react.mjs";
import { t as useApp } from "./AppContext-w0-l3Ny3.mjs";
import { t as findBestKnowledgeMatch } from "./concierge-bEK9GnNc.mjs";
import { n as getSiteContent, r as trackAirbnbClick } from "./cms.functions-ChHeepaR.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C5Qt_bWT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var hero_chale_default = "/assets/hero-chale-DC57m4mv.jfif";
var banheira_default = "/assets/banheira-BxewtF7B.jfif";
var sala_default = "/assets/sala-C6k3cdwd.jfif";
var cozinha_default = "/assets/cozinha-s0J3s8ua.jfif";
var quarto_default = "/assets/quarto-DnC0g1df.jfif";
var image_12_default = "/assets/sala-C6k3cdwd.jfif";
var image_13_default = "/assets/cozinha-s0J3s8ua.jfif";
var image_14_default = "/assets/image-14-DOpwnAbb.jfif";
var _jsxFileName$2 = "/app/applet/src/components/modals/AdminLoginModal.tsx";
var AdminLoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
	const [email, setEmail] = (0, import_react.useState)("admin@chale.com");
	const [password, setPassword] = (0, import_react.useState)("123456");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [errorMessage, setErrorMessage] = (0, import_react.useState)("");
	if (!isOpen) return null;
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setErrorMessage("");
		try {
			if (email && password) try {
				const { data, error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) console.warn("[Supabase Auth Warning]:", error.message);
				else if (data.session) await supabase.auth.setSession(data.session);
			} catch (err) {
				console.log("Utilizando modo local de administração");
			}
			onLoginSuccess();
			onClose();
		} catch (err) {
			setErrorMessage(err.message || "Erro ao realizar login");
		} finally {
			setLoading(false);
		}
	};
	const handleDirectDemoLogin = () => {
		onLoginSuccess();
		onClose();
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
			initial: {
				opacity: 0,
				scale: .95,
				y: 20
			},
			animate: {
				opacity: 1,
				scale: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				scale: .95,
				y: 20
			},
			className: "relative w-full max-w-md bg-[#1C140E] text-[#F7F3EA] rounded-3xl p-8 shadow-2xl border border-[#C59A55]/30 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: onClose,
					className: "absolute top-5 right-5 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "w-5 h-5" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 77,
						columnNumber: 13
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 73,
					columnNumber: 11
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-24 -left-24 w-48 h-48 bg-[#C59A55]/20 rounded-full blur-3xl pointer-events-none" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 81,
					columnNumber: 11
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col items-center text-center mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "w-14 h-14 rounded-2xl bg-[#24170F] border border-[#C59A55]/40 flex items-center justify-center mb-4 shadow-lg",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "w-7 h-7 text-[#C59A55]" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 86,
								columnNumber: 15
							}, void 0)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 85,
							columnNumber: 13
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[10px] uppercase tracking-[0.3em] text-[#C59A55] font-bold mb-1",
							children: "Painel Administrativo"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 88,
							columnNumber: 13
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-2xl font-serif text-white",
							children: "Chalé A-Frame"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 91,
							columnNumber: 13
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-white/60 mt-2 max-w-xs font-light",
							children: "Acesso restrito para gestão de reservas, hóspedes e automações."
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 92,
							columnNumber: 13
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 84,
					columnNumber: 11
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					onSubmit: handleSubmit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "block text-[10px] uppercase tracking-widest text-[#C59A55] mb-1.5 font-medium",
							children: "E-mail Administrativo"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 100,
							columnNumber: 15
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							type: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value),
							placeholder: "admin@chale.com",
							className: "w-full px-4 py-3 rounded-xl bg-[#2A1E16] border border-[#C59A55]/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C59A55] focus:ring-1 focus:ring-[#C59A55] transition-all"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 103,
							columnNumber: 15
						}, void 0)] }, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 99,
							columnNumber: 13
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
							className: "block text-[10px] uppercase tracking-widest text-[#C59A55] mb-1.5 font-medium",
							children: "Senha de Acesso"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 114,
							columnNumber: 15
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
							type: "password",
							required: true,
							value: password,
							onChange: (e) => setPassword(e.target.value),
							placeholder: "••••••••",
							className: "w-full px-4 py-3 rounded-xl bg-[#2A1E16] border border-[#C59A55]/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C59A55] focus:ring-1 focus:ring-[#C59A55] transition-all"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 117,
							columnNumber: 15
						}, void 0)] }, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 113,
							columnNumber: 13
						}, void 0),
						errorMessage && /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs",
							children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "w-4 h-4 shrink-0" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 129,
								columnNumber: 17
							}, void 0), /* @__PURE__ */ (void 0)("span", { children: errorMessage }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 130,
								columnNumber: 17
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 128,
							columnNumber: 15
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "submit",
							disabled: loading,
							className: "w-full py-4 rounded-xl bg-[#C59A55] hover:bg-[#d4a85f] text-white font-bold text-xs uppercase tracking-[0.2em] shadow-lg transition-all flex items-center justify-center gap-2 mt-6 disabled:opacity-50",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogIn, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 139,
								columnNumber: 15
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: loading ? "Acessando..." : "Entrar no Painel" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 140,
								columnNumber: 15
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 134,
							columnNumber: 13
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 98,
					columnNumber: 11
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative my-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "absolute inset-0 flex items-center",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full border-t border-white/10" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 147,
							columnNumber: 15
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 146,
						columnNumber: 13
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "relative bg-[#1C140E] px-3 text-[10px] uppercase tracking-widest text-white/40",
						children: "Ou Acesso Rápido"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 149,
						columnNumber: 13
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 145,
					columnNumber: 11
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: handleDirectDemoLogin,
					className: "w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 font-medium text-xs tracking-wider transition-all flex items-center justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "w-3.5 h-3.5 text-[#C59A55]" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 160,
						columnNumber: 13
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Entrar como Administrador" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 161,
						columnNumber: 13
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 155,
					columnNumber: 11
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 66,
			columnNumber: 9
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 65,
		columnNumber: 7
	}, void 0) }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 64,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName$1 = "/app/applet/src/components/views/GuestSiteView.tsx";
var GuestSiteView = ({ onAdminLogin }) => {
	const [isLoginModalOpen, setIsLoginModalOpen] = (0, import_react.useState)(false);
	const [isConciergeOpen, setIsConciergeOpen] = (0, import_react.useState)(false);
	const [activeGalleryTab, setActiveGalleryTab] = (0, import_react.useState)("all");
	const [lightboxImage, setLightboxImage] = (0, import_react.useState)(null);
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	const { concierge, knowledgeBase } = useApp();
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			if (window.scrollY > 80) setIsScrolled(true);
			else setIsScrolled(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const [chatMessages, setChatMessages] = (0, import_react.useState)([{
		sender: "bot",
		text: concierge.welcomeMessage || "Olá! Sou o Concierge Virtual do Chalé A-Frame. Como posso tornar sua estadia em Florianópolis memorável?",
		time: "14:00"
	}]);
	const [chatInput, setChatInput] = (0, import_react.useState)("");
	const { data: content = {
		id: "",
		chale_name: "Chalé A-Frame Florianópolis",
		hero_title: "Conecte-se com o que realmente importa.",
		hero_subtitle: "CHALÉ EXCLUSIVO EM FLORIANÓPOLIS",
		hero_description: "Um refúgio privativo entre a natureza e o mar, criado para momentos inesquecíveis.",
		about_title: "Seu refúgio entre a natureza e o mar",
		about_text_1: "Desfrute de uma experiência única em um chalé privativo, cercado pela natureza e com uma vista encantadora para o mar.",
		about_text_2: "Com arquitetura em estilo A-frame, estrutura em madeira, amplas paredes de vidro e ambientes integrados, o espaço foi pensado para proporcionar conforto, privacidade e momentos especiais.",
		airbnb_url: "https://www.airbnb.com.br/rooms/1703914788039625027"
	} } = useQuery({
		queryKey: ["site-content"],
		queryFn: () => getSiteContent()
	});
	const trackClick = useMutation({ mutationFn: (data) => trackAirbnbClick({ data }) });
	const handleSendGuestMessage = (e) => {
		e.preventDefault();
		if (!chatInput.trim()) return;
		const userText = chatInput.trim();
		const timeNow = (/* @__PURE__ */ new Date()).toLocaleTimeString("pt-BR", {
			hour: "2-digit",
			minute: "2-digit"
		});
		setChatMessages((prev) => [...prev, {
			sender: "user",
			text: userText,
			time: timeNow
		}]);
		setChatInput("");
		setTimeout(() => {
			const match = findBestKnowledgeMatch(userText, knowledgeBase);
			let botResponse = "";
			if (match) botResponse = match.answer;
			else botResponse = "Agradecemos a mensagem! Nossa inteligência Concierge já registrou sua dúvida e notificamos o anfitrião diretamente.";
			setChatMessages((prev) => [...prev, {
				sender: "bot",
				text: botResponse,
				time: (/* @__PURE__ */ new Date()).toLocaleTimeString("pt-BR", {
					hour: "2-digit",
					minute: "2-digit"
				})
			}]);
		}, 400);
	};
	const [mockupMessages, setMockupMessages] = (0, import_react.useState)([
		{
			sender: "concierge",
			text: "Olá! Seja muito bem-vindo ao Chalé A-Frame! 🌿 Como posso tornar sua hospedagem ainda mais especial hoje?",
			time: "09:30"
		},
		{
			sender: "user",
			text: "Oi! Gostaria de uma indicação de restaurante bacana para jantar perto do chalé.",
			time: "09:31"
		},
		{
			sender: "concierge",
			text: "Com certeza! Indicamos o famoso Ostradamus no Ribeirão da Ilha (a 12 min), com ostras frescas e vista espetacular do pôr do sol! 🌅\n\nQuer a localização no mapa ou a senha do Wi-Fi do chalé?",
			time: "09:31"
		},
		{
			sender: "user",
			text: "Perfeito! Qual é a senha do Wi-Fi e o horário do check-in?",
			time: "09:32"
		},
		{
			sender: "concierge",
			text: "📶 Wi-Fi: Chale_AFrame_5G\n🔑 Senha: natureza2026\n⏰ Check-in: A partir das 15:00.\n\nAproveite a hidromassagem e a vista para o mar! Tenha uma excelente estadia! ✨",
			time: "09:32"
		}
	]);
	const [mockupInput, setMockupInput] = (0, import_react.useState)("");
	const handleSendMockupMessage = (text) => {
		if (!text.trim()) return;
		const timeNow = (/* @__PURE__ */ new Date()).toLocaleTimeString("pt-BR", {
			hour: "2-digit",
			minute: "2-digit"
		});
		const userMsg = text.trim();
		setMockupMessages((prev) => [...prev, {
			sender: "user",
			text: userMsg,
			time: timeNow
		}]);
		setMockupInput("");
		setTimeout(() => {
			const match = findBestKnowledgeMatch(userMsg, knowledgeBase);
			let botResponse = "";
			if (match) botResponse = match.answer;
			else botResponse = "✨ Atendimento Concierge IA: Mensagem recebida! Nossa equipe e sistema inteligente garantem que sua estadia no Chalé A-Frame seja perfeita.";
			setMockupMessages((prev) => [...prev, {
				sender: "concierge",
				text: botResponse,
				time: (/* @__PURE__ */ new Date()).toLocaleTimeString("pt-BR", {
					hour: "2-digit",
					minute: "2-digit"
				})
			}]);
		}, 400);
	};
	const filteredGallery = [
		{
			id: 1,
			url: hero_chale_default,
			title: "Design A-Frame Exclusivo",
			subtitle: "Fachada icônica em meio à mata preservada",
			category: "nature",
			colSpan: "md:col-span-8"
		},
		{
			id: 2,
			url: quarto_default,
			title: "Suíte Aconchegante",
			subtitle: "Conforto supremo com vista panorâmica",
			category: "suite",
			colSpan: "md:col-span-4"
		},
		{
			id: 3,
			url: banheira_default,
			title: "Hidromassagem Interna",
			subtitle: "Spa e relaxamento privativo",
			category: "suite",
			colSpan: "md:col-span-4"
		},
		{
			id: 4,
			url: sala_default,
			title: "Living Integrado",
			subtitle: "Pé-direito alto e iluminação natural",
			category: "living",
			colSpan: "md:col-span-4"
		},
		{
			id: 5,
			url: cozinha_default,
			title: "Cozinha Gourmet",
			subtitle: "Equipada para momentos especiais",
			category: "living",
			colSpan: "md:col-span-4"
		},
		{
			id: 6,
			url: image_12_default,
			title: "Deck & Balanço Suspenso",
			subtitle: "O lugar perfeito para contemplar",
			category: "nature",
			colSpan: "md:col-span-6"
		},
		{
			id: 7,
			url: image_13_default,
			title: "Vista Panorâmica do Mar",
			subtitle: "Horizonte infinito no Sul da Ilha",
			category: "nature",
			colSpan: "md:col-span-6"
		}
	].filter((item) => activeGalleryTab === "all" ? true : item.category === activeGalleryTab);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-[#0F0D0A] text-[#FBF9F4] font-sans antialiased selection:bg-[#C59A55] selection:text-black overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-[#14100C]/90 backdrop-blur-xl border-b border-[#C59A55]/20 py-3.5 shadow-2xl" : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6"}`,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "#",
							className: "flex items-center gap-3 group",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "w-9 h-9 rounded-full bg-gradient-to-tr from-[#C59A55] via-[#E6C994] to-[#B8860B] p-[1px] shadow-lg group-hover:scale-105 transition-transform",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "w-full h-full bg-[#14100C] rounded-full flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkle, { className: "w-4 h-4 text-[#E6C994]" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 239,
										columnNumber: 17
									}, void 0)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 238,
									columnNumber: 15
								}, void 0)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 237,
								columnNumber: 13
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-serif text-base sm:text-lg font-bold tracking-tight text-white leading-none",
									children: "CHALÉ A-FRAME"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 243,
									columnNumber: 15
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[9px] uppercase tracking-[0.3em] text-[#C59A55] font-semibold mt-0.5",
									children: "Florianópolis • SC"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 246,
									columnNumber: 15
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 242,
								columnNumber: 13
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 236,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
							className: "hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-white/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "#sobre",
									className: "hover:text-[#E6C994] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#C59A55] after:transition-all",
									children: "O Chalé"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 254,
									columnNumber: 13
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "#galeria",
									className: "hover:text-[#E6C994] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#C59A55] after:transition-all",
									children: "Galeria"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 257,
									columnNumber: 13
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "#experiencia",
									className: "hover:text-[#E6C994] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#C59A55] after:transition-all",
									children: "Experiência"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 260,
									columnNumber: 13
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "#concierge",
									className: "hover:text-[#E6C994] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#C59A55] after:transition-all",
									children: "Concierge 24h"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 263,
									columnNumber: 13
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "#comodidades",
									className: "hover:text-[#E6C994] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#C59A55] after:transition-all",
									children: "Comodidades"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 266,
									columnNumber: 13
								}, void 0)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 253,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setIsLoginModalOpen(true),
								className: "flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#C59A55]/50 text-white/80 hover:text-white text-xs font-medium tracking-wider transition-all hover:bg-white/10 active:scale-95",
								title: "Área do Anfitrião / Painel Admin",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "w-3.5 h-3.5 text-[#C59A55]" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 280,
									columnNumber: 15
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "hidden sm:inline",
									children: "Anfitrião"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 281,
									columnNumber: 15
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 274,
								columnNumber: 13
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: content.airbnb_url,
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: () => trackClick.mutate({ source: "header_nav" }),
								className: "relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C59A55] via-[#D4A85F] to-[#B8860B] text-black font-bold text-xs uppercase tracking-[0.15em] transition-all hover:shadow-[0_0_25px_rgba(197,154,85,0.4)] active:scale-95 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Reservar" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 292,
									columnNumber: 15
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "w-3.5 h-3.5" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 293,
									columnNumber: 15
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 285,
								columnNumber: 13
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 272,
							columnNumber: 11
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 233,
					columnNumber: 9
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 228,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "relative h-[100vh] min-h-[680px] z-10 flex items-center justify-center overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "fixed inset-0 w-full h-screen pointer-events-none z-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: hero_chale_default,
								alt: "Chalé A-frame Florianópolis",
								className: "w-full h-full object-cover scale-105 filter brightness-90 contrast-105"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 304,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0F0D0A] via-black/40 to-black/60" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 310,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-black/20 backdrop-blur-[1px]" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 311,
								columnNumber: 11
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 303,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative z-20 text-center px-4 max-w-5xl mx-auto pt-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
								initial: {
									opacity: 0,
									y: -20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { duration: .8 },
								className: "inline-flex items-center gap-2.5 border border-[#C59A55]/40 px-4 py-1.5 mb-8 rounded-full bg-black/40 backdrop-blur-md shadow-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "w-3.5 h-3.5 text-[#E6C994]" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 322,
									columnNumber: 13
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#E6C994] font-sans font-semibold",
									children: "REFÚGIO BOUTIQUE DE LUXO • FLORIANÓPOLIS"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 323,
									columnNumber: 13
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 316,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.h1, {
								initial: {
									opacity: 0,
									y: 30
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: 1,
									delay: .2
								},
								className: "text-4xl sm:text-6xl md:text-8xl font-serif leading-[1.05] mb-6 tracking-tight text-white drop-shadow-lg",
								children: [
									"Conecte-se com",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 334,
										columnNumber: 27
									}, void 0),
									"o que realmente",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 334,
										columnNumber: 48
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.span, {
										initial: {
											opacity: 0,
											scale: .8
										},
										animate: {
											opacity: 1,
											scale: 1
										},
										transition: {
											duration: 1.2,
											delay: .6
										},
										style: { fontFamily: "'Pinyon Script', cursive" },
										className: "bg-gradient-to-r from-[#F3E5AB] via-[#E6C994] to-[#C59A55] bg-clip-text text-transparent block mt-1 text-6xl sm:text-8xl md:text-[9.5rem] font-normal tracking-wide py-1 drop-shadow-2xl",
										children: "importa."
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 335,
										columnNumber: 13
									}, void 0)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 328,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.p, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								transition: {
									duration: 1,
									delay: .5
								},
								className: "text-sm sm:text-base md:text-lg font-sans mb-10 max-w-2xl mx-auto text-white/90 font-light leading-relaxed drop-shadow",
								children: "Chalé privativo estilo A-Frame com vista privilegiada para o mar, banheira de hidromassagem e deck exclusivo na mata nativa."
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 346,
								columnNumber: 11
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .8,
									delay: .7
								},
								className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: content.airbnb_url,
									target: "_blank",
									rel: "noopener noreferrer",
									onClick: () => trackClick.mutate({ source: "hero_main" }),
									className: "w-full sm:w-auto bg-gradient-to-r from-[#C59A55] via-[#D4A85F] to-[#B8860B] text-black px-10 py-4.5 rounded-full font-sans font-bold tracking-[0.2em] hover:brightness-110 transition-all shadow-[0_10px_35px_rgba(197,154,85,0.3)] text-center text-xs sm:text-sm uppercase active:scale-95",
									children: "RESERVE NO AIRBNB"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 361,
									columnNumber: 13
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "#sobre",
									onClick: (e) => {
										e.preventDefault();
										document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
									},
									className: "w-full sm:w-auto px-8 py-4.5 rounded-full border border-white/30 hover:border-[#C59A55] bg-black/30 backdrop-blur-sm text-white font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all hover:bg-white/10 text-center cursor-pointer",
									children: "CONHEÇA O CHALÉ ↓"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 371,
									columnNumber: 13
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 355,
								columnNumber: 11
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 315,
						columnNumber: 9
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/50 animate-bounce",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Rolar para explorar" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 386,
							columnNumber: 11
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 385,
						columnNumber: 9
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 301,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "relative z-20 bg-[#16120E] border-y border-[#C59A55]/20 py-6 text-white/90",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-[#C59A55]/15",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col items-center p-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-1 text-[#E6C994] mb-1",
									children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "w-3.5 h-3.5 fill-[#E6C994]" }, i, false, {
										fileName: _jsxFileName$1,
										lineNumber: 396,
										columnNumber: 17
									}, void 0))
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 394,
									columnNumber: 13
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-sm font-bold text-white",
									children: "5.0 ★ Nota Máxima"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 399,
									columnNumber: 13
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[10px] text-white/50 uppercase tracking-widest mt-0.5",
									children: "Preferido dos Hóspedes"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 400,
									columnNumber: 13
								}, void 0)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 393,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col items-center p-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bath, { className: "w-5 h-5 text-[#E6C994] mb-1" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 404,
									columnNumber: 13
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-sm font-bold text-white",
									children: "Hidromassagem Privativa"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 405,
									columnNumber: 13
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[10px] text-white/50 uppercase tracking-widest mt-0.5",
									children: "Spa Panorâmico"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 406,
									columnNumber: 13
								}, void 0)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 403,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col items-center p-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Waves, { className: "w-5 h-5 text-[#E6C994] mb-1" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 410,
									columnNumber: 13
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-sm font-bold text-white",
									children: "Vista para o Oceano"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 411,
									columnNumber: 13
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[10px] text-white/50 uppercase tracking-widest mt-0.5",
									children: "Sul da Ilha de Floripa"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 412,
									columnNumber: 13
								}, void 0)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 409,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col items-center p-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bot, { className: "w-5 h-5 text-[#E6C994] mb-1" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 416,
									columnNumber: 13
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-sm font-bold text-white",
									children: "Concierge IA 24/7"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 417,
									columnNumber: 13
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[10px] text-white/50 uppercase tracking-widest mt-0.5",
									children: "Suporte Instantâneo"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 418,
									columnNumber: 13
								}, void 0)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 415,
							columnNumber: 11
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 392,
					columnNumber: 9
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 391,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "sobre",
				className: "relative py-28 bg-[#FAF8F5] text-[#24170F] z-20",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-8",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col lg:flex-row gap-16 lg:gap-24 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
							initial: {
								opacity: 0,
								x: -40
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: { once: true },
							transition: { duration: .8 },
							className: "lg:w-1/2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "inline-flex items-center gap-3 text-[#C59A55] mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10 h-[1px] bg-[#C59A55]" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 437,
										columnNumber: 17
									}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-xs uppercase tracking-[0.3em] font-bold",
										children: "O Refúgio"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 438,
										columnNumber: 17
									}, void 0)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 436,
									columnNumber: 15
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
									className: "text-4xl sm:text-5xl md:text-6xl font-serif text-[#24170F] mb-8 leading-[1.1] tracking-tight",
									children: content.about_title
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 441,
									columnNumber: 15
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-6 mb-10",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-base sm:text-lg text-zinc-700 font-sans leading-relaxed font-light",
											children: content.about_text_1
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 446,
											columnNumber: 17
										}, void 0),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "grid grid-cols-2 gap-6 border-y border-[#C59A55]/20 py-8",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex flex-col gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-2xl sm:text-3xl font-serif text-[#24170F] italic",
													children: "2 Suítes"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 452,
													columnNumber: 21
												}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-xs uppercase tracking-widest text-zinc-500 font-medium",
													children: "Conforto absoluto"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 453,
													columnNumber: 21
												}, void 0)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 451,
												columnNumber: 19
											}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex flex-col gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-2xl sm:text-3xl font-serif text-[#24170F] italic",
													children: "Vista Mar"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 456,
													columnNumber: 21
												}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
													className: "text-xs uppercase tracking-widest text-zinc-500 font-medium",
													children: "Horizonte infinito"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 457,
													columnNumber: 21
												}, void 0)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 455,
												columnNumber: 19
											}, void 0)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 450,
											columnNumber: 17
										}, void 0),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-sm sm:text-base text-zinc-600 font-sans leading-relaxed font-light",
											children: content.about_text_2
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 461,
											columnNumber: 17
										}, void 0)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 445,
									columnNumber: 15
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: content.airbnb_url,
									target: "_blank",
									rel: "noopener noreferrer",
									onClick: () => trackClick.mutate({ source: "about_section" }),
									className: "inline-flex items-center gap-4 group",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "w-12 h-12 rounded-full border border-[#C59A55] flex items-center justify-center transition-all group-hover:bg-[#C59A55] shrink-0 shadow-sm",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "w-5 h-5 text-[#C59A55] group-hover:text-white transition-colors" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 474,
											columnNumber: 19
										}, void 0)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 473,
										columnNumber: 17
									}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[#C59A55] font-sans font-bold uppercase tracking-[0.2em] text-xs sm:text-sm",
										children: "Verificar disponibilidade no Airbnb"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 476,
										columnNumber: 17
									}, void 0)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 466,
									columnNumber: 15
								}, void 0)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 429,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
							initial: {
								opacity: 0,
								scale: .95
							},
							whileInView: {
								opacity: 1,
								scale: 1
							},
							viewport: { once: true },
							transition: { duration: .9 },
							className: "lg:w-1/2 relative",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
										src: image_14_default,
										alt: "Vista principal Chalé A-Frame",
										className: "w-full h-full object-cover"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 491,
										columnNumber: 17
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 492,
										columnNumber: 17
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "absolute bottom-6 left-6 right-6 p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 text-white",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-serif text-lg italic",
											children: "\"A harmonia perfeita entre sofisticação e natureza.\""
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 494,
											columnNumber: 19
										}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-[10px] uppercase tracking-widest text-[#E6C994]",
											children: "Acomodação Exclusiva"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 495,
											columnNumber: 19
										}, void 0)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 493,
										columnNumber: 17
									}, void 0)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 490,
								columnNumber: 15
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -bottom-6 -left-6 w-36 h-36 bg-[#C59A55]/20 rounded-full blur-3xl pointer-events-none" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 500,
								columnNumber: 15
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 483,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 426,
						columnNumber: 11
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 425,
					columnNumber: 9
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 424,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "galeria",
				className: "relative py-28 bg-[#100D0A] text-white z-20 border-t border-white/5",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[#C59A55] font-sans font-bold text-xs uppercase tracking-[0.4em] mb-3 block",
							children: "Galeria de Destaques"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 513,
							columnNumber: 15
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-4xl sm:text-6xl md:text-7xl font-serif text-white leading-[1] tracking-tight",
							children: ["Onde o luxo encontra a ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "italic text-[#C59A55]",
								children: "natureza."
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 517,
								columnNumber: 40
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 516,
							columnNumber: 15
						}, void 0)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 512,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								{
									id: "all",
									label: "Todos"
								},
								{
									id: "suite",
									label: "Suíte & SPA"
								},
								{
									id: "nature",
									label: "Deck & Vista"
								},
								{
									id: "living",
									label: "Living & Gastronomia"
								}
							].map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: () => setActiveGalleryTab(tab.id),
								className: `px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${activeGalleryTab === tab.id ? "bg-[#C59A55] text-black font-bold shadow-lg" : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"}`,
								children: tab.label
							}, tab.id, false, {
								fileName: _jsxFileName$1,
								lineNumber: 529,
								columnNumber: 17
							}, void 0))
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 522,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 511,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
						layout: true,
						className: "grid grid-cols-1 md:grid-cols-12 gap-5",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, { children: filteredGallery.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
							layout: true,
							initial: {
								opacity: 0,
								scale: .9
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							exit: {
								opacity: 0,
								scale: .9
							},
							transition: { duration: .4 },
							onClick: () => setLightboxImage({
								url: item.url,
								title: item.title,
								subtitle: item.subtitle
							}),
							className: `${item.colSpan} h-[320px] sm:h-[400px] relative group overflow-hidden rounded-3xl cursor-pointer border border-white/10 hover:border-[#C59A55]/50 transition-all`,
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									src: item.url,
									alt: item.title,
									className: "w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-108"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 558,
									columnNumber: 19
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 563,
									columnNumber: 19
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "absolute bottom-6 left-6 right-6 flex items-end justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
										className: "text-xl sm:text-2xl font-serif text-white mb-1 group-hover:text-[#E6C994] transition-colors",
										children: item.title
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 567,
										columnNumber: 23
									}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-xs text-white/70 font-light",
										children: item.subtitle
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 568,
										columnNumber: 23
									}, void 0)] }, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 566,
										columnNumber: 21
									}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Maximize2, { className: "w-4 h-4 text-white" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 571,
											columnNumber: 23
										}, void 0)
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 570,
										columnNumber: 21
									}, void 0)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 565,
									columnNumber: 19
								}, void 0)
							]
						}, item.id, true, {
							fileName: _jsxFileName$1,
							lineNumber: 548,
							columnNumber: 17
						}, void 0)) }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 546,
							columnNumber: 13
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 545,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 509,
					columnNumber: 9
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 508,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, { children: lightboxImage && /* @__PURE__ */ (void 0)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				onClick: () => setLightboxImage(null),
				className: "fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8",
				children: [/* @__PURE__ */ (void 0)("button", {
					onClick: () => setLightboxImage(null),
					className: "absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-50",
					children: /* @__PURE__ */ (void 0)(X, { className: "w-6 h-6" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 596,
						columnNumber: 15
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 592,
					columnNumber: 13
				}, void 0), /* @__PURE__ */ (void 0)("div", {
					className: "max-w-5xl max-h-[85vh] flex flex-col items-center",
					children: [/* @__PURE__ */ (void 0)("img", {
						src: lightboxImage.url,
						alt: lightboxImage.title,
						className: "max-w-full max-h-[75vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 599,
						columnNumber: 15
					}, void 0), /* @__PURE__ */ (void 0)("div", {
						className: "text-center mt-4",
						children: [/* @__PURE__ */ (void 0)("h3", {
							className: "text-2xl font-serif text-white",
							children: lightboxImage.title
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 605,
							columnNumber: 17
						}, void 0), /* @__PURE__ */ (void 0)("p", {
							className: "text-sm text-white/70 mt-1",
							children: lightboxImage.subtitle
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 606,
							columnNumber: 17
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 604,
						columnNumber: 15
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 598,
					columnNumber: 13
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 585,
				columnNumber: 11
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 583,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "concierge",
				className: "relative py-28 bg-[#FAF8F5] text-[#24170F] z-20 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-8 relative z-10",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "lg:col-span-6 space-y-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C59A55]/10 border border-[#C59A55]/30 text-[#C59A55] font-sans font-bold text-xs uppercase tracking-[0.2em] mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "w-3.5 h-3.5" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 622,
											columnNumber: 19
										}, void 0), "Atendimento Digital no WhatsApp"]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 621,
										columnNumber: 17
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
										className: "text-4xl sm:text-5xl font-serif text-[#24170F] leading-[1.15] tracking-tight",
										children: [
											"Seu Concierge Virtual ",
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 626,
												columnNumber: 41
											}, void 0),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "italic text-[#C59A55] font-serif",
												children: "disponível 24 horas"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 627,
												columnNumber: 19
											}, void 0)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 625,
										columnNumber: 17
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-base text-zinc-600 font-sans mt-4 leading-relaxed font-light",
										children: "Aproveite cada segundo do Sul da Ilha com assistência instantânea. Tire dúvidas da casa, solicite recomendações gastronômicas e receba dicas locais no seu próprio WhatsApp."
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 629,
										columnNumber: 17
									}, void 0)
								] }, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 620,
									columnNumber: 15
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
									children: [
										{
											title: "Check-in & Regras",
											desc: "Instruções de acesso e Wi-Fi",
											icon: House
										},
										{
											title: "Roteiros & Praias",
											desc: "Dicas secretas de Florianópolis",
											icon: Compass
										},
										{
											title: "Gastronomia Local",
											desc: "Restaurantes de frutos do mar & bistrôs",
											icon: UtensilsCrossed
										},
										{
											title: "Suporte Instantâneo",
											desc: "Respostas em segundos via IA",
											icon: Smartphone
										}
									].map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "p-5 bg-white rounded-2xl shadow-sm border border-[#C59A55]/15 hover:border-[#C59A55]/40 transition-all group",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center mb-3 group-hover:bg-[#C59A55] transition-colors",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: "w-5 h-5 text-[#C59A55] group-hover:text-white transition-colors" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 644,
													columnNumber: 23
												}, void 0)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 643,
												columnNumber: 21
											}, void 0),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
												className: "font-serif text-[#24170F] font-bold text-base mb-1",
												children: item.title
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 646,
												columnNumber: 21
											}, void 0),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-xs text-zinc-500 font-light leading-relaxed",
												children: item.desc
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 647,
												columnNumber: 21
											}, void 0)
										]
									}, i, true, {
										fileName: _jsxFileName$1,
										lineNumber: 642,
										columnNumber: 19
									}, void 0))
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 635,
									columnNumber: 15
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										onClick: () => setIsConciergeOpen(true),
										className: "inline-flex items-center justify-center gap-3 bg-[#24170F] text-[#FAF8F5] px-8 py-4 rounded-full font-bold text-xs tracking-widest hover:bg-black transition-all shadow-xl hover:scale-[1.02] active:scale-95",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageCircle, { className: "w-4 h-4 text-[#C59A55]" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 657,
											columnNumber: 19
										}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "TESTAR CHAT FLUTUANTE" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 658,
											columnNumber: 19
										}, void 0)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 653,
										columnNumber: 17
									}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-xs text-zinc-500 font-serif italic text-center sm:text-left",
										children: "✦ Teste também no celular interativo ao lado"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 660,
										columnNumber: 17
									}, void 0)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 652,
									columnNumber: 15
								}, void 0)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 619,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "lg:col-span-6 flex justify-center items-center relative py-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -inset-2 bg-gradient-to-r from-[#C59A55]/20 via-[#25D366]/10 to-[#C59A55]/20 rounded-[4rem] blur-2xl opacity-80 pointer-events-none" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 668,
								columnNumber: 15
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative w-full max-w-[360px] md:max-w-[380px] bg-[#0b141a] rounded-[3.2rem] p-3 shadow-[0_35px_100px_rgba(36,23,15,0.3)] border-[8px] border-[#1e2328] ring-1 ring-white/10 overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#1e2328] rounded-full z-30 flex items-center justify-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-3 h-3 rounded-full bg-[#0a0a0a]" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 672,
										columnNumber: 19
									}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-2 h-2 rounded-full bg-[#121212]" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 673,
										columnNumber: 19
									}, void 0)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 671,
									columnNumber: 17
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "relative w-full bg-[#0b141a] rounded-[2.5rem] overflow-hidden flex flex-col h-[580px] text-white select-none border border-white/5",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "pt-3 pb-1.5 px-7 flex justify-between items-center text-[11px] text-white/90 bg-[#111b21] font-sans font-semibold z-20",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "09:41" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 678,
												columnNumber: 21
											}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wifi, { className: "w-3.5 h-3.5 text-white/90" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 680,
													columnNumber: 23
												}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "w-5 h-2.5 border border-white/80 rounded-[3px] p-[1px] flex items-center",
													children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-full bg-white/90 rounded-[1px]" }, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 682,
														columnNumber: 25
													}, void 0)
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 681,
													columnNumber: 23
												}, void 0)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 679,
												columnNumber: 21
											}, void 0)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 677,
											columnNumber: 19
										}, void 0),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "bg-[#111b21] px-4 py-2.5 flex items-center justify-between border-b border-white/10 z-20 shadow-md",
											children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex items-center gap-2.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeft, { className: "w-5 h-5 text-[#00a884] cursor-pointer" }, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 689,
														columnNumber: 23
													}, void 0),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "relative",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
															src: hero_chale_default,
															alt: "Avatar Chalé",
															className: "w-10 h-10 rounded-full object-cover border border-[#C59A55]"
														}, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 691,
															columnNumber: 25
														}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] rounded-full border-2 border-[#111b21]" }, void 0, false, {
															fileName: _jsxFileName$1,
															lineNumber: 692,
															columnNumber: 25
														}, void 0)]
													}, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 690,
														columnNumber: 23
													}, void 0),
													/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "flex flex-col",
														children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
															className: "flex items-center gap-1",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																className: "text-xs font-bold text-white tracking-wide",
																children: "Concierge A-Frame"
															}, void 0, false, {
																fileName: _jsxFileName$1,
																lineNumber: 696,
																columnNumber: 27
															}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "w-3.5 h-3.5 text-[#C59A55]" }, void 0, false, {
																fileName: _jsxFileName$1,
																lineNumber: 697,
																columnNumber: 27
															}, void 0)]
														}, void 0, true, {
															fileName: _jsxFileName$1,
															lineNumber: 695,
															columnNumber: 25
														}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
															className: "text-[10px] text-[#25D366] font-medium flex items-center gap-1",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" }, void 0, false, {
																fileName: _jsxFileName$1,
																lineNumber: 700,
																columnNumber: 27
															}, void 0), "online • Resposta em segundos"]
														}, void 0, true, {
															fileName: _jsxFileName$1,
															lineNumber: 699,
															columnNumber: 25
														}, void 0)]
													}, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 694,
														columnNumber: 23
													}, void 0)
												]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 688,
												columnNumber: 21
											}, void 0)
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 687,
											columnNumber: 19
										}, void 0),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
											className: "flex-1 overflow-y-auto p-3.5 space-y-3 bg-[#0b141a] relative font-sans text-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "flex justify-center my-1",
													children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
														className: "bg-[#182229] text-[#8696a0] text-[10px] uppercase tracking-wider px-3 py-1 rounded-lg border border-white/5 font-medium shadow-sm",
														children: "Hoje • Atendimento Exclusivo"
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 709,
														columnNumber: 23
													}, void 0)
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 708,
													columnNumber: 21
												}, void 0),
												mockupMessages.map((msg, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
													initial: {
														opacity: 0,
														y: 10
													},
													animate: {
														opacity: 1,
														y: 0
													},
													transition: { duration: .3 },
													className: `flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`,
													children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: `max-w-[88%] p-3 rounded-2xl relative shadow-md leading-relaxed whitespace-pre-line text-[11px] ${msg.sender === "user" ? "bg-[#005c4b] text-[#e9edef] rounded-tr-none border border-[#007a63]/30" : "bg-[#202c33] text-[#e9edef] rounded-tl-none border border-white/5"}`,
														children: [msg.text, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
															className: "flex items-center justify-end gap-1 mt-1",
															children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
																className: "text-[9px] text-[#8696a0] font-light",
																children: msg.time
															}, void 0, false, {
																fileName: _jsxFileName$1,
																lineNumber: 731,
																columnNumber: 29
															}, void 0), msg.sender === "user" && /* @__PURE__ */ (void 0)(CheckCheck, { className: "w-3.5 h-3.5 text-[#53bdeb]" }, void 0, false, {
																fileName: _jsxFileName$1,
																lineNumber: 733,
																columnNumber: 31
															}, void 0)]
														}, void 0, true, {
															fileName: _jsxFileName$1,
															lineNumber: 730,
															columnNumber: 27
														}, void 0)]
													}, void 0, true, {
														fileName: _jsxFileName$1,
														lineNumber: 722,
														columnNumber: 25
													}, void 0)
												}, i, false, {
													fileName: _jsxFileName$1,
													lineNumber: 715,
													columnNumber: 23
												}, void 0)),
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
													className: "pt-2",
													children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
														className: "text-[9px] text-[#8696a0] font-medium uppercase tracking-wider mb-1.5 px-1",
														children: "Toque em uma pergunta pronta:"
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 741,
														columnNumber: 23
													}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
														className: "flex flex-wrap gap-1.5",
														children: [
															{
																label: "📶 Senha Wi-Fi",
																q: "Qual a senha do Wi-Fi?"
															},
															{
																label: "🦐 Restaurantes",
																q: "Indique restaurantes próximos."
															},
															{
																label: "🏖️ Praias",
																q: "Quais são as melhores praias?"
															},
															{
																label: "🛁 Hidromassagem",
																q: "Como ligar a banheira?"
															}
														].map((chip, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
															type: "button",
															onClick: () => handleSendMockupMessage(chip.q),
															className: "bg-[#1f2c34] hover:bg-[#2a3942] border border-[#C59A55]/30 text-[#e9edef] text-[10px] px-2.5 py-1 rounded-full transition-all flex items-center gap-1 active:scale-95 cursor-pointer",
															children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: chip.label }, void 0, false, {
																fileName: _jsxFileName$1,
																lineNumber: 757,
																columnNumber: 29
															}, void 0)
														}, idx, false, {
															fileName: _jsxFileName$1,
															lineNumber: 751,
															columnNumber: 27
														}, void 0))
													}, void 0, false, {
														fileName: _jsxFileName$1,
														lineNumber: 744,
														columnNumber: 23
													}, void 0)]
												}, void 0, true, {
													fileName: _jsxFileName$1,
													lineNumber: 740,
													columnNumber: 21
												}, void 0)
											]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 707,
											columnNumber: 19
										}, void 0),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
											onSubmit: (e) => {
												e.preventDefault();
												if (mockupInput.trim()) handleSendMockupMessage(mockupInput);
											},
											className: "bg-[#111b21] p-2 flex items-center gap-2 border-t border-white/10 z-20",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
												className: "flex-1 bg-[#202c33] rounded-full px-3 py-1.5 flex items-center gap-2 border border-white/5",
												children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Smile, { className: "w-4 h-4 text-[#8696a0]" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 772,
													columnNumber: 23
												}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
													type: "text",
													value: mockupInput,
													onChange: (e) => setMockupInput(e.target.value),
													placeholder: "Pergunte ao Concierge...",
													className: "w-full bg-transparent text-xs text-[#e9edef] placeholder-[#8696a0] focus:outline-none"
												}, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 773,
													columnNumber: 23
												}, void 0)]
											}, void 0, true, {
												fileName: _jsxFileName$1,
												lineNumber: 771,
												columnNumber: 21
											}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
												type: "submit",
												className: "w-8 h-8 rounded-full bg-[#00a884] hover:bg-[#029071] text-white flex items-center justify-center transition-all shrink-0 shadow-md",
												children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "w-3.5 h-3.5" }, void 0, false, {
													fileName: _jsxFileName$1,
													lineNumber: 785,
													columnNumber: 23
												}, void 0)
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 781,
												columnNumber: 21
											}, void 0)]
										}, void 0, true, {
											fileName: _jsxFileName$1,
											lineNumber: 764,
											columnNumber: 19
										}, void 0)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 676,
									columnNumber: 17
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 670,
								columnNumber: 15
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 667,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 616,
						columnNumber: 11
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 615,
					columnNumber: 9
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 614,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				id: "comodidades",
				className: "relative py-28 bg-[#14100C] text-white z-20 border-t border-white/5",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "max-w-6xl mx-auto px-4 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "text-center max-w-2xl mx-auto mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[#C59A55] font-sans font-bold text-xs uppercase tracking-[0.3em] mb-3 block",
							children: "Comodidades Exclusivas"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 801,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-3xl sm:text-5xl font-serif text-white tracking-tight",
							children: "Tudo pensado para o seu conforto"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 804,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 800,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6",
						children: [
							{
								label: "Vista para o mar",
								icon: Waves,
								desc: "Amanhecer no horizonte"
							},
							{
								label: "Montanhas & Natureza",
								icon: Mountain,
								desc: "Mata nativa preservada"
							},
							{
								label: "Cozinha completa",
								icon: UtensilsCrossed,
								desc: "Equipada com eletros"
							},
							{
								label: "Wi-Fi 5G Rápido",
								icon: Wifi,
								desc: "Conexão de alta velocidade"
							},
							{
								label: "Estacionamento Privativo",
								icon: Car,
								desc: "Vaga na propriedade"
							},
							{
								label: "Hidromassagem Interna",
								icon: Bath,
								desc: "Banheira com vista"
							},
							{
								label: "Smart TV & Streaming",
								icon: Tv,
								desc: "Entretenimento completo"
							},
							{
								label: "Climatização Dupla",
								icon: Snowflake,
								desc: "Ar quente e frio"
							}
						].map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-[#C59A55]/40 transition-all hover:bg-white/10 group",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: "w-6 h-6 text-[#C59A55] mb-3 group-hover:scale-110 transition-transform" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 821,
									columnNumber: 17
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
									className: "text-sm font-bold text-white mb-1",
									children: item.label
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 822,
									columnNumber: 17
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[11px] text-white/50 font-light",
									children: item.desc
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 823,
									columnNumber: 17
								}, void 0)
							]
						}, i, true, {
							fileName: _jsxFileName$1,
							lineNumber: 820,
							columnNumber: 15
						}, void 0))
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 809,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 798,
					columnNumber: 9
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 797,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "relative py-28 px-4 bg-[#FAF8F5] text-[#24170F] z-20 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "max-w-4xl mx-auto mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex justify-center gap-1 mb-3",
							children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "w-5 h-5 fill-[#C59A55] text-[#C59A55]" }, i, false, {
								fileName: _jsxFileName$1,
								lineNumber: 836,
								columnNumber: 15
							}, void 0))
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 834,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-3xl sm:text-4xl font-serif text-[#24170F] font-bold",
							children: "5,0 / 5,0"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 839,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-3xl sm:text-5xl font-serif text-[#24170F] mt-3 mb-2",
							children: "Avaliações dos Hóspedes"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 840,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs uppercase tracking-widest text-zinc-500 font-medium",
							children: "Experiências nota 10 verificadas no Airbnb"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 841,
							columnNumber: 11
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 833,
					columnNumber: 9
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left",
					children: [
						{
							author: "Alice M.",
							date: "Janeiro 2026",
							text: "Tudo simplesmente maravilhoso! O chalé A-frame é impecável, extremamente limpo e a vista para o mar ao amanhecer é algo inesquecível."
						},
						{
							author: "Bruna S.",
							date: "Dezembro 2025",
							text: "Decoração de extremo bom gosto, climatização perfeita e a hidromassagem interna é fantástica. Com certeza voltaremos em breve!"
						},
						{
							author: "Higor C.",
							date: "Novembro 2025",
							text: "O chalé superou todas as expectativas. Paz absoluta cercado pela natureza e com o suporte incrível do concierge no WhatsApp."
						}
					].map((rev, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-8 bg-white rounded-3xl border border-[#C59A55]/20 shadow-sm flex flex-col justify-between hover:border-[#C59A55]/50 transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-sm font-serif italic text-zinc-700 leading-relaxed mb-6",
							children: [
								"\"",
								rev.text,
								"\""
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 851,
							columnNumber: 15
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "pt-4 border-t border-zinc-100 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-bold text-sm text-[#24170F]",
								children: rev.author
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 854,
								columnNumber: 19
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[10px] uppercase tracking-wider text-zinc-400",
								children: rev.date
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 855,
								columnNumber: 19
							}, void 0)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 853,
								columnNumber: 17
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[10px] uppercase tracking-wider font-bold text-[#C59A55] bg-[#C59A55]/10 px-2.5 py-1 rounded-full",
								children: "Verificado"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 857,
								columnNumber: 17
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 852,
							columnNumber: 15
						}, void 0)]
					}, i, true, {
						fileName: _jsxFileName$1,
						lineNumber: 850,
						columnNumber: 13
					}, void 0))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 844,
					columnNumber: 9
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 832,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "relative py-28 px-4 flex flex-col items-center justify-center text-center text-white z-20 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "absolute inset-0 w-full h-full pointer-events-none",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: hero_chale_default,
						alt: "Chalé ao pôr do sol",
						className: "w-full h-full object-cover filter brightness-50"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 869,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#14100C] via-black/60 to-black/70" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 870,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 868,
					columnNumber: 9
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative z-10 max-w-3xl px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[#E6C994] font-sans font-bold text-xs uppercase tracking-[0.3em] mb-4 block",
							children: "Sua próxima escapada inesquecível"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 873,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-3xl sm:text-5xl md:text-6xl font-serif mb-6 leading-tight",
							children: ["Viva momentos únicos em ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "italic text-[#E6C994]",
								children: "Florianópolis."
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 877,
								columnNumber: 37
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 876,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-sm sm:text-base font-sans mb-10 opacity-90 max-w-xl mx-auto font-light leading-relaxed",
							children: "Garanta sua reserva diretamente no Airbnb com a garantia e segurança da plataforma."
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 879,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: content.airbnb_url,
							target: "_blank",
							rel: "noopener noreferrer",
							onClick: () => trackClick.mutate({ source: "cta_final" }),
							className: "inline-flex items-center gap-3 bg-gradient-to-r from-[#C59A55] via-[#D4A85F] to-[#B8860B] text-black px-12 py-5 rounded-full font-bold tracking-[0.2em] text-xs uppercase hover:brightness-110 transition-all shadow-[0_10px_40px_rgba(197,154,85,0.4)] active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "RESERVAR AGORA NO AIRBNB" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 889,
								columnNumber: 13
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 890,
								columnNumber: 13
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 882,
							columnNumber: 11
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 872,
					columnNumber: 9
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 867,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
				className: "relative bg-[#0E0C09] pt-16 pb-12 px-4 text-[#FAF8F5] z-20 border-t border-white/10",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-center md:text-left",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-xl font-serif mb-3 text-[#E6C994] font-bold",
								children: "CHALÉ A-FRAME"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 900,
								columnNumber: 13
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-white/60 font-light leading-relaxed max-w-xs mx-auto md:mx-0",
								children: "Uma experiência boutique em Florianópolis, conectando você com a natureza e o mar em um refúgio exclusivo."
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 901,
								columnNumber: 13
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 899,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
								className: "text-[10px] uppercase tracking-[0.2em] text-[#C59A55] mb-3 font-bold",
								children: "Navegação"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 907,
								columnNumber: 13
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
								className: "space-y-2 text-xs font-light text-white/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: "#sobre",
										className: "hover:text-[#E6C994] transition-colors",
										children: "O Chalé"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 909,
										columnNumber: 19
									}, void 0) }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 909,
										columnNumber: 15
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: "#galeria",
										className: "hover:text-[#E6C994] transition-colors",
										children: "Galeria"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 910,
										columnNumber: 19
									}, void 0) }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 910,
										columnNumber: 15
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: "#concierge",
										className: "hover:text-[#E6C994] transition-colors",
										children: "Concierge IA"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 911,
										columnNumber: 19
									}, void 0) }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 911,
										columnNumber: 15
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: content.airbnb_url,
										target: "_blank",
										rel: "noreferrer",
										className: "hover:text-[#E6C994] transition-colors",
										children: "Reservar no Airbnb"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 912,
										columnNumber: 19
									}, void 0) }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 912,
										columnNumber: 15
									}, void 0)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 908,
								columnNumber: 13
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 906,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-center md:text-right",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
									className: "text-[10px] uppercase tracking-[0.2em] text-[#C59A55] mb-3 font-bold",
									children: "Localização"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 917,
									columnNumber: 13
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs font-light text-white/80",
									children: "Florianópolis, SC - Brasil"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 918,
									columnNumber: 13
								}, void 0),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs font-light text-white/50",
									children: "Sul da Ilha - Vista para o Mar"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 919,
									columnNumber: 13
								}, void 0)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 916,
							columnNumber: 11
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 897,
					columnNumber: 9
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-[10px] uppercase tracking-widest text-white/40 text-center sm:text-left",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Chalé A-Frame Florianópolis. Todos os direitos reservados."
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 925,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setIsLoginModalOpen(true),
						className: "inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/40 hover:text-[#E6C994] transition-all py-1.5 px-3 rounded-full hover:bg-white/5 border border-white/5 hover:border-[#C59A55]/30",
						title: "Acesso ao Painel Admin do Anfitrião",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "w-3 h-3 text-[#C59A55]" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 935,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Acesso Restrito do Anfitrião" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 936,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 929,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 924,
					columnNumber: 9
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 896,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "fixed bottom-6 right-6 z-40",
				children: !isConciergeOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.button, {
					whileHover: { scale: 1.05 },
					whileTap: { scale: .95 },
					onClick: () => setIsConciergeOpen(true),
					className: "flex items-center gap-3 bg-[#1B1510] text-white px-5 py-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-[#C59A55]/50 hover:border-[#C59A55] transition-all group cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bot, { className: "w-5 h-5 text-[#E6C994]" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 951,
							columnNumber: 15
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 952,
							columnNumber: 15
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 950,
						columnNumber: 13
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-xs font-bold tracking-wider uppercase pr-1 text-white group-hover:text-[#E6C994] transition-colors",
						children: "Concierge IA"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 954,
						columnNumber: 13
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 944,
					columnNumber: 11
				}, void 0) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
					initial: {
						opacity: 0,
						y: 20,
						scale: .95
					},
					animate: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					className: "w-80 sm:w-96 bg-[#18130F] text-[#FAF8F5] rounded-3xl shadow-2xl border border-[#C59A55]/40 overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "p-4 bg-[#241B13] border-b border-[#C59A55]/30 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "w-8 h-8 rounded-full bg-[#C59A55]/20 border border-[#C59A55]/50 flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bot, { className: "w-4 h-4 text-[#E6C994]" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 967,
										columnNumber: 19
									}, void 0)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 966,
									columnNumber: 17
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
									className: "text-xs font-bold text-white",
									children: "Concierge do Chalé"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 970,
									columnNumber: 19
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[9px] text-green-400 font-medium",
									children: "Atendimento 24h"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 971,
									columnNumber: 19
								}, void 0)] }, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 969,
									columnNumber: 17
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 965,
								columnNumber: 15
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: () => setIsConciergeOpen(false),
								className: "p-1 rounded-lg text-white/50 hover:text-white hover:bg-white/10",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 978,
									columnNumber: 17
								}, void 0)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 974,
								columnNumber: 15
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 964,
							columnNumber: 13
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "p-4 h-72 overflow-y-auto space-y-3 bg-[#120E0A] text-xs font-sans",
							children: chatMessages.map((msg, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: `flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: `max-w-[85%] p-3 rounded-2xl ${msg.sender === "user" ? "bg-[#C59A55] text-black font-medium rounded-tr-none" : "bg-[#241B13] text-white/90 border border-[#C59A55]/20 rounded-tl-none"}`,
									children: msg.text
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 988,
									columnNumber: 19
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[9px] text-white/40 mt-1 px-1",
									children: msg.time
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 997,
									columnNumber: 19
								}, void 0)]
							}, i, true, {
								fileName: _jsxFileName$1,
								lineNumber: 984,
								columnNumber: 17
							}, void 0))
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 982,
							columnNumber: 13
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
							onSubmit: handleSendGuestMessage,
							className: "p-3 bg-[#241B13] border-t border-[#C59A55]/20 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "text",
								value: chatInput,
								onChange: (e) => setChatInput(e.target.value),
								placeholder: "Pergunte sobre a estadia...",
								className: "flex-1 px-3 py-2 bg-[#14100C] border border-[#C59A55]/30 rounded-xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#C59A55]"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1003,
								columnNumber: 15
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "submit",
								className: "p-2 bg-[#C59A55] text-black font-bold rounded-xl hover:bg-[#E6C994] transition-all",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 1014,
									columnNumber: 17
								}, void 0)
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 1010,
								columnNumber: 15
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 1002,
							columnNumber: 13
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 959,
					columnNumber: 11
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 942,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminLoginModal, {
				isOpen: isLoginModalOpen,
				onClose: () => setIsLoginModalOpen(false),
				onLoginSuccess: onAdminLogin
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 1022,
				columnNumber: 7
			}, void 0)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 225,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
function Index() {
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GuestSiteView, { onAdminLogin: () => navigate({ to: "/admin" }) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 10
	}, this);
}
//#endregion
export { Index as component };
