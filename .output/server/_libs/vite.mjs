import "../_runtime.mjs";
import { a as execFile, n as child_process_default, o as init_child_process } from "./detect-libc+unenv.mjs";
import { c as isatty, s as init_tty } from "./body-parser+[...].mjs";
import { n as globalthis_default, r as init_globalthis } from "./supabase__realtime-js+unenv.mjs";
import "./rolldown+unenv.mjs";
import { n as init_v8, r as v8_default } from "./jiti+unenv.mjs";
import { builtinModules, createRequire } from "node:module";
import processModule from "node:process";
import { Buffer } from "node:buffer";
import { setImmediate } from "node:timers";
import path, { posix, resolve, win32 } from "node:path";
import { format, formatWithOptions, inspect, promisify } from "node:util";
import fs, { readFileSync } from "node:fs";




import { fileURLToPath } from "node:url";

import fsp from "node:fs/promises";
import os from "node:os";
import assert from "node:assert";
//#region node_modules/vite/dist/node/module-runner.js
init_tty();
init_globalthis();
init_child_process();
init_v8();
var SOURCEMAPPING_URL$1 = "sourceMa";
SOURCEMAPPING_URL$1 += "ppingURL";
typeof processModule < "u" && processModule.platform;
(async function() {}).constructor;
var textDecoder = new TextDecoder();
(() => {
	let capturedBuffer = typeof Buffer == "function" ? Buffer : void 0;
	return capturedBuffer && typeof capturedBuffer.from == "function" ? (base64) => capturedBuffer.from(base64, "base64").toString("utf-8") : (base64) => textDecoder.decode(Uint8Array.from(atob(base64), (c) => c.charCodeAt(0)));
})();
var chars$2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var intToChar$2 = /* @__PURE__ */ new Uint8Array(64);
var charToInt$2 = /* @__PURE__ */ new Uint8Array(128);
for (let i = 0; i < chars$2.length; i++) {
	let c = chars$2.charCodeAt(i);
	intToChar$2[i] = c, charToInt$2[c] = i;
}
RegExp(`//# ${SOURCEMAPPING_URL$1}=data:application/json;base64,(.+)`);
Error.prepareStackTrace;
var customizationHookNamespace$1 = "vite-module-runner:import-meta-resolve/v1/";
`${JSON.stringify(customizationHookNamespace$1)}${JSON.stringify(customizationHookNamespace$1)}`;
new Proxy({}, { get(_, p) {
	throw Error(`[module runner] Dynamic access of "import.meta.env" is not supported. Please, use "import.meta.env.${String(p)}" instead.`);
} });
//#endregion
//#region node_modules/vite/dist/node/chunks/node.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esmMin = (fn, res, err) => () => {
	if (err) throw err[0];
	try {
		return fn && (res = fn(fn = 0)), res;
	} catch (e) {
		throw err = [e], e;
	}
};
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __toCommonJS = (mod) => __hasOwnProp.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __require = /* #__PURE__ */ (() => createRequire(import.meta.url || "file:///"))();
var require_picocolors = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	let p = processModule || {};
	let argv = p.argv || [];
	let env = p.env || {};
	let isColorSupported = !(!!env.NO_COLOR || argv.includes("--no-color")) && (!!env.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env.TERM !== "dumb" || !!env.CI);
	let formatter = (open, close, replace = open) => (input) => {
		let string = "" + input, index = string.indexOf(close, open.length);
		return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
	};
	let replaceClose = (string, close, replace, index) => {
		let result = "", cursor = 0;
		do {
			result += string.substring(cursor, index) + replace;
			cursor = index + close.length;
			index = string.indexOf(close, cursor);
		} while (~index);
		return result + string.substring(cursor);
	};
	let createColors = (enabled = isColorSupported) => {
		let f = enabled ? formatter : () => String;
		return {
			isColorSupported: enabled,
			reset: f("\x1B[0m", "\x1B[0m"),
			bold: f("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
			dim: f("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
			italic: f("\x1B[3m", "\x1B[23m"),
			underline: f("\x1B[4m", "\x1B[24m"),
			inverse: f("\x1B[7m", "\x1B[27m"),
			hidden: f("\x1B[8m", "\x1B[28m"),
			strikethrough: f("\x1B[9m", "\x1B[29m"),
			black: f("\x1B[30m", "\x1B[39m"),
			red: f("\x1B[31m", "\x1B[39m"),
			green: f("\x1B[32m", "\x1B[39m"),
			yellow: f("\x1B[33m", "\x1B[39m"),
			blue: f("\x1B[34m", "\x1B[39m"),
			magenta: f("\x1B[35m", "\x1B[39m"),
			cyan: f("\x1B[36m", "\x1B[39m"),
			white: f("\x1B[37m", "\x1B[39m"),
			gray: f("\x1B[90m", "\x1B[39m"),
			bgBlack: f("\x1B[40m", "\x1B[49m"),
			bgRed: f("\x1B[41m", "\x1B[49m"),
			bgGreen: f("\x1B[42m", "\x1B[49m"),
			bgYellow: f("\x1B[43m", "\x1B[49m"),
			bgBlue: f("\x1B[44m", "\x1B[49m"),
			bgMagenta: f("\x1B[45m", "\x1B[49m"),
			bgCyan: f("\x1B[46m", "\x1B[49m"),
			bgWhite: f("\x1B[47m", "\x1B[49m"),
			blackBright: f("\x1B[90m", "\x1B[39m"),
			redBright: f("\x1B[91m", "\x1B[39m"),
			greenBright: f("\x1B[92m", "\x1B[39m"),
			yellowBright: f("\x1B[93m", "\x1B[39m"),
			blueBright: f("\x1B[94m", "\x1B[39m"),
			magentaBright: f("\x1B[95m", "\x1B[39m"),
			cyanBright: f("\x1B[96m", "\x1B[39m"),
			whiteBright: f("\x1B[97m", "\x1B[39m"),
			bgBlackBright: f("\x1B[100m", "\x1B[49m"),
			bgRedBright: f("\x1B[101m", "\x1B[49m"),
			bgGreenBright: f("\x1B[102m", "\x1B[49m"),
			bgYellowBright: f("\x1B[103m", "\x1B[49m"),
			bgBlueBright: f("\x1B[104m", "\x1B[49m"),
			bgMagentaBright: f("\x1B[105m", "\x1B[49m"),
			bgCyanBright: f("\x1B[106m", "\x1B[49m"),
			bgWhiteBright: f("\x1B[107m", "\x1B[49m")
		};
	};
	module.exports = createColors();
	module.exports.createColors = createColors;
}));
Math.random().toString(36).slice(2);
/**
* Prefix for resolved Ids that are not valid browser import specifiers
*/
var VALID_ID_PREFIX = `/@id/`;
var SOURCEMAPPING_URL = "sourceMa";
SOURCEMAPPING_URL += "ppingURL";
var isWindows = typeof processModule !== "undefined" && processModule.platform === "win32";
var windowsSlashRE = /\\/g;
function slash(p) {
	return p.replace(windowsSlashRE, "/");
}
var customizationHookNamespace = "vite-module-runner:import-meta-resolve/v1/";
`${JSON.stringify(customizationHookNamespace)}${JSON.stringify(customizationHookNamespace)}`;
`${customizationHookNamespace}`;
var { version } = JSON.parse(readFileSync(new URL("../../package.json", new URL("../../../src/node/constants.ts", import.meta.url))).toString());
var DEFAULT_MAIN_FIELDS = [
	"browser",
	"module",
	"jsnext:main",
	"jsnext"
];
Object.freeze(DEFAULT_MAIN_FIELDS);
Object.freeze(DEFAULT_MAIN_FIELDS.filter((f) => f !== "browser"));
var DEFAULT_CONDITIONS$1 = [
	"module",
	"browser",
	"node",
	`development|production`
];
Object.freeze(DEFAULT_CONDITIONS$1.filter((c) => c !== "node"));
Object.freeze(DEFAULT_CONDITIONS$1.filter((c) => c !== "browser"));
var DEFAULT_EXTERNAL_CONDITIONS = Object.freeze(["node", "module-sync"]);
var DEFAULT_EXTENSIONS = [
	".mjs",
	".js",
	".mts",
	".ts",
	".jsx",
	".tsx",
	".json"
];
var CSS_LANGS_RE = /\.(css|less|sass|scss|styl|stylus|pcss|postcss|sss)(?:$|\?)/;
/**
* Prefix for resolved fs paths, since windows paths may not be valid as URLs.
*/
var FS_PREFIX = `/@fs/`;
var CLIENT_PUBLIC_PATH = `/@vite/client`;
var ENV_PUBLIC_PATH = `/@vite/env`;
var VITE_PACKAGE_DIR = resolve(fileURLToPath(new URL("../../../src/node/constants.ts", import.meta.url)), "../../..");
var CLIENT_ENTRY = resolve(VITE_PACKAGE_DIR, "dist/client/client.mjs");
var BUNDLED_DEV_CLIENT_ENTRY = resolve(VITE_PACKAGE_DIR, "dist/client/bundledDevClient.mjs");
var ENV_ENTRY = resolve(VITE_PACKAGE_DIR, "dist/client/env.mjs");
var CLIENT_DIR = path.dirname(CLIENT_ENTRY);
var KNOWN_ASSET_TYPES = [
	"apng",
	"bmp",
	"png",
	"jpe?g",
	"jfif",
	"pjpeg",
	"pjp",
	"gif",
	"svg",
	"ico",
	"webp",
	"avif",
	"cur",
	"jxl",
	"mp4",
	"webm",
	"ogg",
	"mp3",
	"wav",
	"flac",
	"aac",
	"opus",
	"mov",
	"m4a",
	"vtt",
	"woff2?",
	"eot",
	"ttf",
	"otf",
	"webmanifest",
	"pdf",
	"txt"
];
new RegExp(`\\.(` + KNOWN_ASSET_TYPES.join("|") + `)(\\?.*)?$`, "i");
var DEFAULT_DEV_PORT = 5173;
var DEFAULT_PREVIEW_PORT = 4173;
var DEFAULT_ASSETS_INLINE_LIMIT = 4096;
var defaultAllowedOrigins = /^https?:\/\/(?:(?:[^:]+\.)?localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/;
",".charCodeAt(0);
";".charCodeAt(0);
var chars$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var intToChar$1 = /* @__PURE__ */ new Uint8Array(64);
var charToInt$1 = /* @__PURE__ */ new Uint8Array(128);
for (let i = 0; i < chars$1.length; i++) {
	const c = chars$1.charCodeAt(i);
	intToChar$1[i] = c;
	charToInt$1[c] = i;
}
function coerce(value) {
	if (value instanceof Error) return value.stack || value.message;
	return value;
}
function selectColor(colors, namespace) {
	let hash = 0;
	for (let i = 0; i < namespace.length; i++) {
		hash = (hash << 5) - hash + namespace.charCodeAt(i);
		hash |= 0;
	}
	return colors[Math.abs(hash) % colors.length];
}
function matchesTemplate(search, template) {
	let searchIndex = 0;
	let templateIndex = 0;
	let starIndex = -1;
	let matchIndex = 0;
	while (searchIndex < search.length) if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) if (template[templateIndex] === "*") {
		starIndex = templateIndex;
		matchIndex = searchIndex;
		templateIndex++;
	} else {
		searchIndex++;
		templateIndex++;
	}
	else if (starIndex !== -1) {
		templateIndex = starIndex + 1;
		matchIndex++;
		searchIndex = matchIndex;
	} else return false;
	while (templateIndex < template.length && template[templateIndex] === "*") templateIndex++;
	return templateIndex === template.length;
}
function humanize(value) {
	if (value >= 1e3) return `${(value / 1e3).toFixed(1)}s`;
	return `${value}ms`;
}
function setup(useColors, colors, log, load, save, formatArgs, init) {
	const createDebug = (namespace) => {
		let prevTime;
		let enableOverride;
		let namespacesCache;
		let enabledCache;
		const debug = (...args) => {
			if (!debug.enabled) return;
			const curr = Date.now();
			debug.diff = curr - (prevTime || curr);
			debug.prev = prevTime;
			debug.curr = curr;
			prevTime = curr;
			args[0] = coerce(args[0]);
			if (typeof args[0] !== "string") args.unshift("%O");
			let index = 0;
			args[0] = args[0].replace(/%([a-z%])/gi, (match, format) => {
				if (match === "%%") return "%";
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === "function") {
					match = formatter.call(debug, args[index]);
					args.splice(index, 1);
					index--;
				}
				return match;
			});
			createDebug.formatArgs.call(debug, args);
			(debug.log || createDebug.log).apply(debug, args);
		};
		function extend(namespace$1, delimiter = ":") {
			const newDebug = createDebug(this.namespace + delimiter + namespace$1);
			newDebug.log = this.log;
			return newDebug;
		}
		debug.namespace = namespace;
		debug.useColors = useColors;
		debug.color = selectColor(colors, namespace);
		debug.extend = extend;
		debug.log = log;
		Object.defineProperty(debug, "enabled", {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride != null) return enableOverride;
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}
				return enabledCache;
			},
			set: (v) => {
				enableOverride = v;
			}
		});
		init && init(debug);
		return debug;
	};
	function enable(namespaces) {
		save(namespaces);
		createDebug.namespaces = namespaces;
		createDebug.names = [];
		createDebug.skips = [];
		const split = namespaces.trim().replace(/\s+/g, ",").split(",").filter(Boolean);
		for (const ns of split) if (ns[0] === "-") createDebug.skips.push(ns.slice(1));
		else createDebug.names.push(ns);
	}
	function disable() {
		const namespaces = [...createDebug.names, ...createDebug.skips.map((namespace) => `-${namespace}`)].join(",");
		createDebug.enable("");
		return namespaces;
	}
	function enabled(name) {
		for (const skip of createDebug.skips) if (matchesTemplate(name, skip)) return false;
		for (const ns of createDebug.names) if (matchesTemplate(name, ns)) return true;
		return false;
	}
	createDebug.namespaces = "";
	createDebug.formatters = {};
	createDebug.enable = enable;
	createDebug.disable = disable;
	createDebug.enabled = enabled;
	createDebug.names = [];
	createDebug.skips = [];
	createDebug.selectColor = (ns) => selectColor(colors, ns);
	createDebug.formatArgs = formatArgs;
	createDebug.log = log;
	createDebug.enable(load());
	return createDebug;
}
var init_core = __esmMin((() => {}));
var node_exports = /* @__PURE__ */ __exportAll({
	createDebug: () => createDebug,
	default: () => node_default,
	formatArgs: () => formatArgs,
	log: () => log,
	"module.exports": () => createDebug
});
function log(...args) {
	processModule.stderr.write(`${formatWithOptions(inspectOpts, ...args)}\n`);
}
function load() {
	return processModule.env.DEBUG || "";
}
function save(namespaces) {
	if (namespaces) processModule.env.DEBUG = namespaces;
	else delete processModule.env.DEBUG;
}
function useColors() {
	return "colors" in inspectOpts ? Boolean(inspectOpts.colors) : isatty(processModule.stderr.fd);
}
function formatArgs(args) {
	const { namespace: name, useColors: useColors$1 } = this;
	if (useColors$1) {
		const c = this.color;
		const colorCode = `\u001B[3${c < 8 ? c : `8;5;${c}`}`;
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;
		args[0] = prefix + args[0].split("\n").join(`\n${prefix}`);
		args.push(`${colorCode}m+${humanize$1(this.diff)}\u001B[0m`);
	} else args[0] = `${getDate()}${name} ${args[0]}`;
}
function getDate() {
	if (inspectOpts.hideDate) return "";
	return `${(/* @__PURE__ */ new Date()).toISOString()} `;
}
function init$1(debug) {
	debug.inspectOpts = Object.assign({}, inspectOpts);
}
var require$1;
var colors$40;
var inspectOpts;
var humanize$1;
var createDebug;
var node_default;
var init_node = __esmMin((() => {
	init_core();
	require$1 = createRequire(import.meta.url || "file:///");
	colors$40 = processModule.stderr.getColorDepth && processModule.stderr.getColorDepth() > 2 ? [
		20,
		21,
		26,
		27,
		32,
		33,
		38,
		39,
		40,
		41,
		42,
		43,
		44,
		45,
		56,
		57,
		62,
		63,
		68,
		69,
		74,
		75,
		76,
		77,
		78,
		79,
		80,
		81,
		92,
		93,
		98,
		99,
		112,
		113,
		128,
		129,
		134,
		135,
		148,
		149,
		160,
		161,
		162,
		163,
		164,
		165,
		166,
		167,
		168,
		169,
		170,
		171,
		172,
		173,
		178,
		179,
		184,
		185,
		196,
		197,
		198,
		199,
		200,
		201,
		202,
		203,
		204,
		205,
		206,
		207,
		208,
		209,
		214,
		215,
		220,
		221
	] : [
		6,
		2,
		3,
		4,
		5,
		1
	];
	inspectOpts = Object.keys(processModule.env).filter((key) => {
		return /^debug_/i.test(key);
	}).reduce((obj, key) => {
		const prop = key.slice(6).toLowerCase().replace(/_([a-z])/g, (_, k) => k.toUpperCase());
		let value = processModule.env[key];
		if (value === "null") value = null;
		else if (/^yes|on|true|enabled$/i.test(value)) value = true;
		else if (/^no|off|false|disabled$/i.test(value)) value = false;
		else value = Number(value);
		obj[prop] = value;
		return obj;
	}, {});
	try {
		humanize$1 = require$1("ms");
	} catch (_unused) {
		humanize$1 = humanize;
	}
	createDebug = setup(useColors(), colors$40, log, load, save, formatArgs, init$1);
	createDebug.inspectOpts = inspectOpts;
	createDebug.formatters.o = function(v) {
		this.inspectOpts.colors = this.useColors;
		return inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
	};
	createDebug.formatters.O = function(v) {
		this.inspectOpts.colors = this.useColors;
		return inspect(v, this.inspectOpts);
	};
	node_default = createDebug;
	createDebug.default = createDebug;
	createDebug.debug = createDebug;
}));
new RegExp(`\\${win32.sep}`, "g");
new Set(`break case class catch const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield enum await implements package protected static interface private public arguments Infinity NaN undefined null true false eval uneval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Symbol Error EvalError InternalError RangeError ReferenceError SyntaxError TypeError URIError Number Math Date String RegExp Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array Map Set WeakMap WeakSet SIMD ArrayBuffer DataView JSON Promise Generator GeneratorFunction Reflect Proxy Intl`.split(" ")).add("");
"isWellFormed" in String.prototype;
if (processModule.versions.pnp) try {
	createRequire(
		/** #__KEEP__ */
		import.meta.url
	)("pnpapi");
} catch {}
var import_picocolors = /* @__PURE__ */ __toESM(require_picocolors(), 1);
init_node();
var NODE_BUILTIN_NAMESPACE = "node:";
var BUN_BUILTIN_NAMESPACE = "bun:";
[
	...builtinModules.filter((id) => !id.includes(":")),
	new RegExp(`^${NODE_BUILTIN_NAMESPACE}`),
	new RegExp(`^${BUN_BUILTIN_NAMESPACE}`)
];
path.dirname(fileURLToPath(
	/** #__KEEP__ */
	import.meta.url
));
var filter = processModule.env.VITE_DEBUG_FILTER;
var DEBUG = processModule.env.DEBUG;
function createDebugger(namespace, options = {}) {
	const log = node_default(namespace);
	const { onlyWhenFocused, depth } = options;
	if (depth && log.inspectOpts && log.inspectOpts.depth == null) log.inspectOpts.depth = options.depth;
	let enabled = log.enabled;
	if (enabled && onlyWhenFocused) enabled = !!DEBUG?.includes(typeof onlyWhenFocused === "string" ? onlyWhenFocused : namespace);
	if (enabled) return (...args) => {
		if (!filter || args.some((a) => a?.includes?.(filter))) log(...args);
	};
}
function testCaseInsensitiveFS() {
	if (!CLIENT_ENTRY.endsWith("client.mjs")) throw new Error(`cannot test case insensitive FS, CLIENT_ENTRY const doesn't contain client.mjs`);
	if (!fs.existsSync(CLIENT_ENTRY)) throw new Error("cannot test case insensitive FS, CLIENT_ENTRY does not point to an existing file: " + CLIENT_ENTRY);
	return fs.existsSync(CLIENT_ENTRY.replace("client.mjs", "cLiEnT.mjs"));
}
testCaseInsensitiveFS();
function normalizePath(id) {
	return path.posix.normalize(isWindows ? slash(id) : id);
}
var externalRE = /^([a-z]+:)?\/\//;
var isExternalUrl = (url) => externalRE.test(url);
var dataUrlRE = /^\s*data:/i;
var isDataUrl = (url) => dataUrlRE.test(url);
new RegExp(`^(?:${[
	FS_PREFIX,
	VALID_ID_PREFIX,
	CLIENT_PUBLIC_PATH,
	ENV_PUBLIC_PATH
].join("|")})`);
async function asyncReplace(input, re, replacer) {
	let match;
	let remaining = input;
	let rewritten = "";
	while (match = re.exec(remaining)) {
		rewritten += remaining.slice(0, match.index);
		rewritten += await replacer(match);
		remaining = remaining.slice(match.index + match[0].length);
	}
	rewritten += remaining;
	return rewritten;
}
isWindows || fs.realpathSync.native;
function joinSrcset(ret) {
	return ret.map(({ url, descriptor }) => url + (descriptor ? ` ${descriptor}` : "")).join(", ");
}
/**
This regex represents a loose rule of an “image candidate string” and "image set options".

@see https://html.spec.whatwg.org/multipage/images.html#srcset-attribute
@see https://drafts.csswg.org/css-images-4/#image-set-notation

The Regex has named capturing groups `url` and `descriptor`.
The `url` group can be:
* any CSS function
* CSS string (single or double-quoted)
* URL string (unquoted)
The `descriptor` is anything after the space and before the comma.
*/
var imageCandidateRegex = /(?:^|\s|(?<=,))(?<url>[\w-]+\([^)]*\)|"[^"]*"|'[^']*'|[^,]\S*[^,])\s*(?:\s(?<descriptor>\w[^,]+))?(?:,|$)/g;
var escapedSpaceCharacters = /(?: |\\t|\\n|\\f|\\r)+/g;
function parseSrcset(string) {
	const matches = string.trim().replace(escapedSpaceCharacters, " ").replace(/\r?\n/, "").replace(/,\s+/, ", ").replaceAll(/\s+/g, " ").matchAll(imageCandidateRegex);
	return Array.from(matches, ({ groups }) => ({
		url: groups?.url?.trim() ?? "",
		descriptor: groups?.descriptor?.trim() ?? ""
	})).filter(({ url }) => !!url);
}
function processSrcSet(srcs, replacer) {
	return Promise.all(parseSrcset(srcs).map(async ({ url, descriptor }) => ({
		url: await replacer({
			url,
			descriptor
		}),
		descriptor
	}))).then(joinSrcset);
}
createDebugger("vite:esbuild");
(async function() {}).constructor;
(function(A) {
	return A[A.Static = 1] = "Static", A[A.Dynamic = 2] = "Dynamic", A[A.ImportMeta = 3] = "ImportMeta", A[A.StaticSourcePhase = 4] = "StaticSourcePhase", A[A.DynamicSourcePhase = 5] = "DynamicSourcePhase", A[A.StaticDeferPhase = 6] = "StaticDeferPhase", A[A.DynamicDeferPhase = 7] = "DynamicDeferPhase", A;
})({});
new Uint8Array(new Uint16Array([1]).buffer)[0];
var C = () => {
	return A = "AGFzbQEAAAABKwhgAAF/YAF/AX9gAABgAn9/AX9gBH9/f38AYAN/f38Bf2ABfwBgA39/fwADPj0CAgEEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgABBQICAgYBAQYBAQEFAQEBAQECAgIBAQEDAQEHAQMDBAUBcAECAgUHAQGCAoCAAgYPAn8BQaCLBAt/AEGgiwQLB80BHgZtZW1vcnkCAAJzYQACAWUABQJpcwAGAmllAAcCc3MACAJzZQAJAml0AAoCYWkACwJpZAAMAmlwAA0CZXMADgJlZQAPA2VscwAQA2VsZQARA2VzcwASAnJpABMCcmUAFAFmABUCbXMAFgJyYQAXA2FrcwAYA2FrZQAZA2F2cwAaA2F2ZQAbA3JzYQAcBXBhcnNlAB0LX19oZWFwX2Jhc2UDAQtfaW5pdGlhbGl6ZQABGV9faW5kaXJlY3RfZnVuY3Rpb25fdGFibGUBAAkHAQBBAQsBAAwBAQrcVD0oAEHYCkGAwAA2AgBB0ApBoIsENgIAQbgKQSo2AgBB1ApBgIAENgIACwQAEAALWQBB6AkgADYCACAAQQF0IgBBADsBoIsEQewJIABBoosEajYCAEHECUEANgIAQdQJQQA2AgBBzAlBADYCAEHICUEANgIAQdwJQQA2AgBB0AlBADYCAEGgiwQLuAEBAn9B7AlB7AkoAgAiBEEoajYCAAJAQdQJKAIAIgVFBEBBxAkgBDYCAAwBCyAFIAQ2AiQLQdQJIAQ2AgBB2AkgBTYCACAEIAA2AgggBEIANwIgIAQgA0EBRiIAOgAYIAQgAzYCFCAEQQA2AhAgBCACNgIEIAQgATYCACAEQQNBAUECIAAbIANBAkYiARs2AhwgBCACIAJBAmpBACAAGyABGzYCDCADQQFrQQFNBEBB8AlBAToAAAsLdwECf0HsCUHsCSgCACIEQRhqNgIAAkBB3AkoAgAiBUUEQEHICSAENgIADAELIAUgBDYCFAtB3AkgBDYCACAEIAM2AgwgBCACNgIIIAQgATYCBCAEIAA2AgBB4AkoAgAhACAEQQA2AhQgBCAANgIQQfAJQQE6AAALCABB9AkoAgALEwBBzAkoAgAoAgBBoIsEa0EBdQscAQF/QcwJKAIAKAIEIgBBoIsEa0EBdUF/IAAbCxMAQcwJKAIAKAIIQaCLBGtBAXULHAEBf0HMCSgCACgCDCIAQaCLBGtBAXVBfyAAGwsLAEHMCSgCACgCHAscAQF/QcwJKAIAKAIQIgBBoIsEa0EBdUF/IAAbCzUBAn9BfyEAAkACQAJAQcwJKAIAKAIUIgFBAWsOAgIBAAsgAUGgiwRrQQF1DwtBfiEACyAACwsAQcwJKAIALQAYCxMAQdAJKAIAKAIAQaCLBGtBAXULEwBB0AkoAgAoAgRBoIsEa0EBdQscAQF/QdAJKAIAKAIIIgBBoIsEa0EBdUF/IAAbCxwBAX9B0AkoAgAoAgwiAEGgiwRrQQF1QX8gABsLEwBB0AkoAgAoAhBBoIsEa0EBdQslAQF/QcwJQcwJKAIAIgBBJGpBxAkgABsoAgAiADYCACAAQQBHCyUBAX9B0AlB0AkoAgAiAEEUakHICSAAGygCACIANgIAIABBAEcLCABB+AktAAALCABB8AktAAALKwEBf0H8CUH8CSgCACIAQRBqQcwJKAIAQSBqIAAbKAIAIgA2AgAgAEEARwsTAEH8CSgCACgCAEGgiwRrQQF1CxMAQfwJKAIAKAIEQaCLBGtBAXULEwBB/AkoAgAoAghBoIsEa0EBdQsTAEH8CSgCACgCDEGgiwRrQQF1CwoAQfwJQQA2AgALow4BBn8jAEGA0ABrIgQkAEH4CUEBOgAAQYAIIQBBhApBgAg2AgBBnApBnosEIgFB6AkoAgBBAXRqIgU2AgBB8AlBADoAAEGACkEAOwEAQYIKQQA7AQBBiApBADoAAEH0CUEANgIAQeQJQQA6AABBjAogBEGAEGo2AgBBkAogBDYCAEGUCkEAOgAAA0AgACECQZgKIAFBAmoiADYCAAJAAkACfwJAAkAgASAFSQRAIAAvAQAiA0EJa0EFSQ0EAkACQAJAAkACQCADQeUAaw4FAQYGBgIACyADQSBGDQggA0EvRg0DIANBO0YNAgwFC0GCCi8BAA0BIAAQHkUNASABQQRqQYIIQQoQHw0BECBBmAooAgAhAEH4CS0AAA0BQYQKIAA2AgAgACICIQEMBQsgAS8BBEHtAEcNACAAEB5FDQAgASkABkLwgLyDoI6AOlINABAhQZgKKAIAIQALQYQKIAA2AgAMBgsgAS8BBCIAQSpHBEAgAEEvRw0CECIMBQtBARAjDAQLIAAhAUEAQeQJLQAADQIaDAELQfgJQQA6AAALA0ACQEGYCiABQQJqIgA2AgACQAJAAkAgASAFSQRAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAAvAQAiA0Egaw4QDw4IDg4ODggBBQ4OBA4OCQALAkACQAJAAkAgA0HbAGsODwURBhERDRERAxEBERERAgALIANBCWtBBUkNESADQfsAaw4DCBAJEAtBggovAQANDyAAEB5FDQ8gAUEEakGCCEEKEB8NDxAgDA8LIAEvAQRB7QBHDQ4gABAeRQ0OIAEpAAZC8IC8g6COgDpSDQ4QIQwOCyABLwEEQewARw0NIAAQHkUNDSABQQZqQbIIQQYQHw0NIAEvAQwQJEUNDUGUCkEBOgAADA0LQYIKQYIKLwEAIgBBAWo7AQAgBEGAEGogAEEDdGoiAEEBNgIAIAAgAjYCBAwMC0GCCkGCCi8BACIAQQFqOwEAIARBgBBqIABBA3RqIgBBCDYCACAAIAI2AgQMCwtBggovAQAiAEUNDEGCCiAAQQFrOwEADAoLQYAKLwEAIgBFDQlBggovAQAiA0UNCSADQQN0IARqQfgPaigCAEEFRw0JIAQgAEECdGpBBGsoAgAiACgCBA0JIAAgAkECajYCBEGYCiABQQRqNgIAQQEQJRogAEGYCigCACIANgIQQZgKIABBAms2AgAMCQtBggovAQAiAEUNCkGCCiAAQQFrIgM7AQBBgAovAQAiAEUNCCAEQYAQaiADQf//A3FBA3RqKAIAQQVHDQggBCAAQQJ0akEEaygCACIDKAIERQRAIAMgAkECajYCBAsgAyABQQRqNgIMQYAKIABBAWs7AQAMCAsCQCACLwEAQSlHDQBB1AkoAgAiAEUNACAAKAIMIAJBAmpHDQBB1AlB2AkoAgAiADYCACAABEAgAEEANgIkDAELQcQJQQA2AgALQYIKQYIKLwEAIgBBAWo7AQAgBEGAEGogAEEDdGoiAEEGQQJBlAotAAAbNgIAIAAgAjYCBEGUCkEAOgAADAcLQYIKLwEAIgBFDQhBggogAEEBayIAOwEAIARBgBBqIABB//8DcUEDdGooAgBBBEYNAwwGCyADECYMBQsCQCABLwEEIgBBKkcEQCAAQS9HDQEQIgwHC0EBECMMBgsCQCACLwEAIgEQJwRAAkACQAJAIAFBK2sOBAEIAgAICyACQQJrLwEAQTBrQf//A3FBCkkNAwwHCyACQQJrLwEAQStGDQIMBgsgAkECay8BAEEtRg0BDAULIAFBKUcNACAEQYAQakGCCi8BAEEDdGooAgQQKA0ECwJAAkBBggovAQAiAEUgAUHmAEdyDQAgBEGAEGogAEEDdGoiA0EIaygCAEEBRw0AIAJBAmsvAQBB7wBHDQEgAkEEaxApRQ0BIANBBGsoAgBBnglBAxAqRQ0BDAULIAFB/QBHDQAgBEGAEGogAEEDdGoiACgCBBArDQQgACgCAEEGRg0ECyACECwNA0GICi0AACABQS9GcSABQQBHc0UNAwJAQdwJKAIAIgBFDQAgAiAAKAIASQ0AIAIgACgCBE0NBAsDQCACQaCLBEsEQEGECiACQQJrIgI2AgAgAi8BACIBEC1FDQELCyABQf//A3EQLgRAA0AgAkGgiwRLBEBBhAogAkECayICNgIAIAIvAQAQLg0BCwsgAhAvDQQLQYgKQQE6AAAMBAtBggpBggovAQAiAEEBajsBACAEQYAQaiAAQQN0aiIAIAI2AgQgAEEDNgIACxAwDAILQYAKLwEARUGCCi8BAEVB5AktAABBf3NxcQwFCxAxQYgKQQA6AAALQYQKQZgKKAIAIgI2AgALQZgKKAIAIQEMAQsLEDJBAAshAyAEQYDQAGokACADDwsgAiEAC0GYCigCACEBDAALAAsWACAAQaCLBEYEQEEBDwsgAEECaxAzC0MBA38CQCACRQ0AA0AgAC0AACIEIAEtAAAiBUYEQCABQQFqIQEgAEEBaiEAIAJBAWsiAg0BDAILCyAEIAVrIQMLIAML0ggBBX9BmApBmAooAgAiBEEMaiIBNgIAQdwJKAIAIQNBARAlIQICQAJAAkACQAJAAkAgAUGYCigCACIARgRAIAIQNEUNAQtB4AkgBDYCAAJAAkACQCACQSpHBEAgAkH7AEcNAUGYCiAAQQJqNgIAQQEQJSECQZwKKAIAIQFBmAooAgAhAANAAkAgAkH//wNxIgJBIkYgAkEnRnJFBEAgAhA1GkGYCigCACECDAELIAIQJkGYCkGYCigCAEECaiICNgIAC0EBECUaIAAgAhA2IgJBLEYEQEGYCkGYCigCAEECajYCAEEBECUhAgsgAkH9AEYNAyAAQZgKKAIAIgBGDQggACABTQ0ACwwHC0GYCiAAQQJqNgIAQQEQJRpBmAooAgAiACAAEDYaDAILQfgJQQA6AAACQAJAAkACQAJAAkAgAkHhAGsODAIIBAEIAwgICAgIBQALIAJB9gBGDQQMBwtBmAogAEEOaiIENgIAAkACQAJAAkBBARAlQeEAaw4GAAwCDAwBDAtBmAooAgAiASkAAkLzgOSD4I3AMVINCyABLwEKEC5FDQtBmAogAUEKajYCAEEAECUaC0GYCigCACIDQQJqQaIIQQ4QHw0KAkAgAy8BECIBECQNACABQShrDgMACwALC0GYCiADQRBqNgIAQQEQJSIBQSpGBEBBmApBmAooAgBBAmo2AgBBARAlIQELIAFBKEcNAQwKC0GYCigCACIDKQACQuyAhIOwjsA5Ug0JIAMvAQoiARAkRSABQfsAR3ENCUGYCiADQQpqNgIAQQEQJSIBQfsARg0JC0GYCigCACEDIAEQNRpBmAooAgAiASADTQ0IIAAgBCADIAEQBAwKC0GYCiAAQQpqNgIAQQAQJRpBmAooAgAhAAtBmAogAEEQajYCAEEBECUiAEEqRgRAQZgKQZgKKAIAQQJqNgIAQQEQJSEACwwJCwJAIAApAAJC7ICEg7COwDlSDQAgAC8BChAtRQ0AQZgKIABBCmo2AgBBARAlIQAMCQsgAEEEaiEAC0GYCiAAQQZqNgIAQZwKKAIAIQMDQEEBECUhAEGYCigCACIBIANLDQcgABA3IQJBmAooAgAiACABRg0EIAJBPUYEQEEBEDghAkGYCigCACEACyACQSxHDQRBmAogAEECajYCAAwACwALQfAJQQE6AABBmApBmAooAgBBAmo2AgALQQEQJSEAQZgKKAIAIQECQCAAQeYARw0AIAFBAmpBnAhBBhAfDQBBmAogAUEIajYCACAEQQEQJUEAEDkgA0EUakHICSADGyECA0AgAigCACIARQ0CIABCADcCCCAAQRRqIQIMAAsAC0GYCiABQQJrNgIACw8LIAAhAQwCCyAAIARBAEEAEARBmAogAEEMajYCAA8LEDIPC0GYCiABQQJrNgIADwtBmAooAgAhASAAEDUaIAFBmAooAgAiACABIAAQBEGYCiAAQQJrNgIAC4oLAQp/QZgKQZgKKAIAIgZBDGoiCTYCAEEBECUhAEGYCigCACECAkACQAJAAkACQAJAAn8gAEEuRgRAQZgKIAJBAmo2AgBBARAlIgBB5ABHBEAgAEHzAEcEQCAAQe0ARw0HQZgKKAIAIgBBAmpBjAhBBhAfDQdBhAooAgAiARA6RQRAIAEvAQBBLkYNCAsgBiAGIABBCGpBAhADDwtBmAooAgAiAEECakGSCEEKEB8NBkGECigCACIBEDpFBEAgAS8BAEEuRg0HC0GYCiAAQQxqNgIAQQEhCEEFIQRBARAlIQBBAQwCC0GYCigCACIAKQACQuWAmIPQjIA5Ug0FQYQKKAIAIgEQOkUEQCABLwEAQS5GDQYLQZgKIABBCmo2AgBBByEEQQEhBUEBECUhAEEBIQhBAgwBCwJAAkAgAEHzAEcgAiAJTXJFBEBB8wAhACACQQJqQZIIQQoQHw0BIAIvAQwQJEUNAUGYCiACQQxqIgA2AgBBASEIQQEQJSEBIABBmAooAgAiBEcEQEHmACEAIAFB5gBHBEBBBSEEIAEhAEEBDAULQQEhAyAEQQJqQZwIQQYQHw0FIAQvAQgQLUUNBQtBmAogAjYCAEEHIQRBASEHQQAhCCABIQBBAAwDC0EHIQRBASEHIABB5ABHIAIgBkEKak1yDQFB5AAhACACKQACQuWAmIPQjIA5Ug0AIAIvAQoQJEUNAEGYCiACQQpqNgIAQSohAEEBIQVBAiEDQQEQJSIBQSpGDQRBmAogAjYCAEEAIQUgASEAQQAMAgsgAiEEDAILQQALIQMgAEEoRgRAQYwKKAIAQYIKLwEAIgVBA3RqIgBBBTYCAEGCCiAFQQFqOwEAIABBmAooAgAiAjYCBEGECigCAC8BAEEuRg0EQZgKIAJBAmo2AgBBARAlIQAgBkGYCigCACIBQQAgAhADQdQJKAIAIQMgCARAIAMgBDYCHAtBgApBgAovAQAiBEEBajsBAEGQCigCACAEQQJ0aiADNgIAAkAgAEEiRiAAQSdGckUEQAJAIABB4ABHDQBBnAooAgAhBiABIQADQCAAIgIgBk8NAQJAAkAgAEECaiIALwEAIgdB3ABrDgUAAgICBQELIAJBBGohAAwBCyAHQSRHDQAgAi8BBEH7AEcNAAsLQZgKIAFBAms2AgAPCyAAECZBmAooAgAhAAtBmAogAEECaiIANgIAAkACQAJAQQEQJUEpaw4EAQICAAILQZgKQZgKKAIAQQJqNgIAQQEQJRogAyAANgIEQZgKKAIAIQAgA0EBOgAYIAMgADYCEAwIC0GCCiAFOwEAIAMgADYCBEGYCigCACEAIANBAToAGCADIABBAmo2AgxBgAogBDsBAA8LQZgKQZgKKAIAQQJrNgIADwsgB0UgAEH7AEdyRQRAQZgKKAIAIQBBggovAQANBkGcCigCACEBA0ACQAJAIAAgAUkEQEEBECUiAEEiRiAAQSdGcg0BIABB/QBHDQJBmApBmAooAgBBAmo2AgALQQEQJSEBQZgKKAIAIQAgAUHmAEYEQCAAQQJqQZwIQQYQHw0HC0GYCiAAQQhqNgIAQQEQJSIAQSJHIABBJ0dxDQYgBiAAQQAQOQ8LIAAQJgtBmApBmAooAgBBAmoiADYCAAwACwALAkACQCAAQSdrDgQDAQEDAAsgAEEiRg0CC0GYCigCACEECyAEIAlHDQBBmAogBEECazYCAA8LIABBKkcgBXENAkGCCi8BAA0CQZgKKAIAIQBBnAooAgAhAgNAIAAgAk8NASAALwEAIgFBJ0cgAUEiR3EEQEGYCiAAQQJqIgA2AgAMAQUgBiABIAMQOQ8LAAsACxAyCw8LQZgKQZgKKAIAQQJrNgIADwtBmAogAEECazYCAAtDAQN/QZgKKAIAIQBBnAooAgAhAgNAAkAgAEECaiEBIAAgAk8NACABIQAgAS8BAEEKaw4EAAEBAAELC0GYCiABNgIAC3ABBH9BmAooAgBBAmohAUGcCigCACEEAkADQCABIgJBAmohASACIARPDQEgAS8BACEDAkAgAEUEQCADQSpGDQEgA0EKaw4EAwICAwILIANBKkcNAQsgAi8BBEEvRw0ACyACQQRqIQELQZgKIAE2AgALCwAgAEGfgIAEEDwLfQEEf0GcCigCACEDQZgKKAIAIQEDQAJAAkACQCABLwEAIgJBL0YEQCABLwECIgFBKkcEQCABQS9GDQJBLw8LIAAQIwwCCyAABEAgAhAkDQIMAwsgAhAuDQEMAgsQIgtBmApBmAooAgAiBEECaiIBNgIAIAMgBEsNAQsLIAILhgEBBH9BmAooAgAhAUGcCigCACEEAkADQAJAIAEiAkECaiEBIAIgBE8NACABLwEAIgMgAEYNAiADQdwARwRAIANBCmsOBAECAgECCyACQQRqIQEgAi8BBEENRw0BIAJBBmogASACLwEGQQpGGyEBDAELC0GYCiABNgIAEDIPC0GYCiABNgIAC24BAX8CQCAAQSlHIABBKGtB//8DcUEHSXEgAEEhayIBQQVNQQBBASABdEExcRtyRQRAIABBOmsiAUH//wNxQSVPQr+AgICgAiABrYinQQFxRXINAQtBAQ8LIABB/QBHIABB+wBrQf//A3FBBElxCy4BAX9BASEBAkAgAEGUCUEFECoNACAAQZ4JQQMQKg0AIABBpAlBAhAqIQELIAELbwEBfwJ/IAAvAQAiARAkIAFBKUZyIAFB/QBGckUEQEEAIAFB3QBHDQEaCwNAAkAgAEGgiwRNDQAgARAkRQ0AIABBAmsiAC8BACEBDAELC0EBIAFBKUYgAUHdAEZyIAFB/QBGcg0AGiABEDRBAXMLCz4BAn8CQCAAIAJBAXQiAmsiBEECaiIAQaCLBEkNACAAIAEgAhAfDQAgAEGgiwRGBEBBAQ8LIAQQMyEDCyADC4MBAQJ/QQEhAgJAAkACQAJAAkACQCAALwEAIgFBO2sOBAUEBAEACwJAIAFB5QBrDgQDBAQCAAsgAUEpRg0EIAFB+QBHDQMgAEECa0GwCUEGECoPCyAAQQJrLwEAQT1GDwsgAEECa0GoCUEEECoPCyAAQQJrQbwJQQMQKg8LQQAhAgsgAguqAwECfwJAAkACQAJAAkACQAJAAkACQAJAIAAvAQBB5ABrDhQAAQIJCQkJAwkJBAUJCQYJBwkJCAkLAkACQCAAQQJrLwEAQekAaw4EAAoKAQoLIABBBGtBuAhBAhAqDwsgAEEEa0G8CEEDECoPCwJAAkACQCAAQQJrLwEAQfMAaw4DAAECCgsgAEEEay8BACIBQeEARwRAIAFB7ABHDQogAEEGa0HlABA7DwsgAEEGa0HjABA7DwsgAEEEa0HCCEEEECoPCyAAQQRrQcoIQQYQKg8LIABBAmsvAQBB7wBHDQYgAEEEay8BAEHlAEcNBiAAQQZrLwEAIgFB8ABHBEAgAUHjAEcNByAAQQhrQdYIQQYQKg8LIABBCGtB4ghBAhAqDwsgAEECa0HmCEEEECoPC0EBIQIgAEECayIAQekAEDsNBCAAQe4IQQUQKg8LIABBAmtB5AAQOw8LIABBAmtB+AhBBxAqDwsgAEECa0GGCUEEECoPCyAAQQJrLwEAIgFB7wBHBEAgAUHlAEcNASAAQQRrQe4AEDsPCyAAQQRrQY4JQQMQKiECCyACCzQBAX8gAEGgAUYgAEEJayIBQRdNQQBBASABdEGfgIAEcRtyRQRAIAAQNCAAQS5HcQ8LQQELCwAgAEGNgIAEEDwLSAECfwJAIAAvAQAiAkHlAEcEQCACQesARw0BIABBAmtB5ghBBBAqDwsgAEECay8BAEH1AEcNACAAQQRrQcoIQQYQKiEBCyABC94BAQR/QZgKKAIAIQBBnAooAgAhAwJAAkADQAJAIAAiAUECaiEAIAEgA08NAAJAAkACQCAALwEAIgJB3ABrDgUCBAQEAQALIAJBJEcNAyABLwEEQfsARw0DQZgKIAFBBGoiAjYCAEGMCigCAEGCCi8BACIAQQN0aiIBQQQ2AgBBggogAEEBajsBACABIAI2AgQPC0GYCiAANgIAQYIKQYIKLwEAQQFrIgE7AQBBjAooAgAgAUH//wNxQQN0aigCAEEDRw0DDAQLIAFBBGohAAwBCwtBmAogADYCAAsQMgsL2wEBBH9BmAooAgAhAEGcCigCACEDA0AgAEECaiEBAkACQCAAIANPDQACQAJAAkAgAS8BACICQdsAaw4CAQIACyABIQAgAkEKaw4EAgQEAgMLAkADQAJAIAFBAmohACABIANPDQACQAJAIAAvAQAiAkHcAGsOAgAEAQsgAUEEaiEBDAILIAAhASACQQprDgQAAQEAAQsLQZgKIAA2AgAQMkGYCigCACEADAQLQZgKIAA2AgAMAwsgAEEEaiEADAILQZgKIAE2AgAQMg8LIAJBL0cNAAtBmAogADYCAAszAQF/QeQJQQE6AABBmAooAgAhAEGYCkGcCigCAEECajYCAEH0CSAAQaCLBGtBAXU2AgALPQEBfwJ/QQEgAC8BACIBQQlrQf//A3FBBUkgAUGAAXJBoAFGcg0AGkEAIAEQNEUNABogABA6IAFBLkdyCwteAQF/AkAgAEH4/wNxQShGIABBIWsiAUEFTUEAQQEgAXRBMXEbckUEQCAAQTprIgFB//8DcUElT0K/gICAoAMgAa2Ip0EBcUVyDQELQQEPCyAAQfsAa0H//wNxQQRJC1cBA39BmAooAgAhAQNAAkAgAEH//wNxIgIQJARAIAAhAwwBCyAAIQMgAhA0DQBBACEDQZgKIAFBAmoiAjYCACABLwECIQAgAiEBIAANAQsLIANB//8DcQulAQEEfwJAQZgKKAIAIgMvAQAiBUHhAEcEQCABIQIgACEEDAELQZgKIANBBGo2AgBBARAlIQJBmAooAgAhBAJAIAJBIkYgAkEnRnJFBEAgAhA1GkGYCigCACECDAELIAIQJkGYCkGYCigCAEECaiICNgIAC0EBECUhBUGYCigCACEDCyADIARHBEAgBCACQQAgACAAIAFGIgAbQQAgASAAGxAECyAFC9MEAQd/QZgKKAIAIQECQCAAQd//A3FB2wBGBEAgAS8BACEFQZgKIAFBAmo2AgBB/QBB3QAgBUH7AEYbIQZBARAlIQNBnAooAgAhBwNAAkAgBiADQf//A3EiAkZBmAooAgAiASAHS3INAAJAIAJBLkcNACABLwECQS5HDQAgAS8BBEEuRw0AQZgKIAFBBmo2AgBBARAlEDchAwwCCwJAAn8CQCAFQfsARgRAAkAgAkEiRiACQSdGckUEQCACQdsARw0BQQAQOBpBmApBmAooAgBBAmo2AgAgAQwECyACECZBmApBmAooAgBBAmo2AgAgAQwDCyABIQAgA0Ewa0H//wNxQQlLDQEDQCAAIgJBAmohACACLwECIgNBMGtB//8DcUEKSQ0AIANBwQBrIgRBHk1BAEEBIAR0Qb+AgYQEcRsNACADQeEAayIEQRdNQQBBASAEdEG/wIEEcRsNAAJAAkAgA0Eraw4EAAEAAgELIAIvAQBBIHJB5QBGDQELC0GYCiAANgIAIAEMAgsgAkEsRgRAQZgKIAFBAmo2AgBBARAlIQMMBQsgAhA3IQIMAgsgAhA1GkGYCigCAAshAEEBECUiAkE6RgRAQZgKQZgKKAIAQQJqNgIAQQEQJRA3IQIMAQsgACABTQ0AIAEgACABIAAQBAsgAkE9RgRAQQAQOCECC0GYCigCACEBIAJBLEcNAEGYCiABQQJqNgIAQQEQJSEDDAELC0GYCiABQQJqNgIADAELIAAQNRpBmAooAgAiACABTQ0AIAEgACABIAAQBAtBARAlC54NAQx/QYQKQZgKKAIAIgE2AgBBkAooAgAhCkGMCigCACEHQZwKKAIAIQxBggovAQAhCyABIgQhAgJAA0BBmAogAkECaiIJNgIAIAIgDE8EQEEAIQYMAgsCQAJAIAkvAQAiAxAuDQACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkBBggovAQAiBSALRw0AIAMhBgJAAkAgA0Epaw4EGgEBGgALIANBO0YgA0HdAEZyIANB/QBGcg0XCyAAIAhxQQFHDQACQCADQSJrDg4MExMTEwwFCRMTCBMTDQALAkAgA0HbAGsODwYTBxMTDhMTBBMCExMTAwALAkAgA0H7AGsOAwoTCwALIANBCmsOBBgSEhgSCwJAIANBImsODgsSEhISCwQIEhIHEhIMAAsCQCADQdsAaw4PBRIGEhINEhIDEgESEhICAAsCQCADQQprDgQVEhIVAAsgA0H7AGsOAwgRCRELIAUNECAJEB5FDRAgAkEEakGCCEEKEB8NEBAgDBALIAIvAQRB7QBHDQ8gCRAeRQ0PIAIpAAZC8IC8g6COgDpSDQ8QIQwPCyACLwEEQewARw0OIAkQHkUNDiACQQZqQbIIQQYQHw0OIAIvAQwQJEUNDkGUCkEBOgAADA4LIAcgBUEDdGoiAUEBNgIAQYIKIAVBAWo7AQAgASAENgIEDA0LIAcgBUEDdGoiAUEINgIAQYIKIAVBAWo7AQAgASAENgIEDAwLIAVFDQxBggogBUEBazsBAAwLCyAFRQ0KQYAKLwEAIgFFDQogByAFQQN0akEIaygCAEEFRw0KIAogAUECdGpBBGsoAgAiASgCBA0KIAEgBEECajYCBEGYCiACQQRqNgIAQQEQJRogAUGYCigCACIBNgIQQZgKIAFBAms2AgAMCgsgBUUNCkGCCiAFQQFrIgY7AQBBgAovAQAiAUUNCSAHIAZB//8DcUEDdGooAgBBBUcNCSAKIAFBAnRqQQRrKAIAIgYoAgRFBEAgBiAEQQJqNgIECyAGIAJBBGo2AgxBgAogAUEBazsBAAwJCwJAIAQvAQBBKUcNAEHUCSgCACIBRQ0AIAEoAgwgBEECakcNAEHUCUHYCSgCACIBNgIAIAEEQCABQQA2AiQMAQtBxAlBADYCAAsgByAFQQN0aiIBQQZBAkGUCi0AABs2AgBBggogBUEBajsBACABIAQ2AgRBlApBADoAAAwICyAFRQ0IQYIKIAVBAWsiATsBACAHIAFB//8DcUEDdGooAgBBBEYNAwwHCyADECYMBgsCQCACLwEEIgJBKkcEQCACQS9HDQEQIgwJC0EBECMMCAsCQCAELwEAIgEQJwRAAkACQAJAIAFBK2sOBAEJAgAJCyAEQQJrLwEAQTBrQf//A3FBCkkNAwwICyAEQQJrLwEAQStGDQIMBwsgBEECay8BAEEtRg0BDAYLIAFBKUcNACAHIAVBA3RqKAIEECgNBQsCQAJAIAVFIAFB5gBHcg0AIAcgBUEDdGoiAkEIaygCAEEBRw0AIARBAmsvAQBB7wBHDQEgBEEEaxApRQ0BIAJBBGsoAgBBnglBAxAqRQ0BDAYLIAFB/QBHDQAgByAFQQN0aiICKAIEECsNBSACKAIAQQZGDQULIAQQLA0EQYgKLQAAIAFBL0ZxIAFBAEdzRQ0EQdwJKAIAIgZFDQIgBCAGKAIASQ0CIAQiAiAGKAIETQ0EDAMLIAcgBUEDdGoiASAENgIEQYIKIAVBAWo7AQAgAUEDNgIACxAwDAMLIAQhAgsDQCACQaCLBEsEQCACQQJrIgIvAQAiARAtRQ0BCwsgARAuBEADQCACQaCLBEsEQEGECiACQQJrIgI2AgAgAi8BABAuDQELCyACEC8NAQtBiApBAToAAAwBCxAxQYgKQQA6AAALQYQKQZgKKAIAIgE2AgAMAQsQMgtBACEGQeQJLQAADQMCQCABIARGBEAgAEUNAUGCCi8BACALRiAIcUUNAUEBIQggASEEQZgKKAIALwEAIgZBCmsOBAUCAgUCCyADQS9GBEBBiAotAABBAXMhCAwBC0EBIQggA0Ewa0H//wNxQQpJIANB3/8DcUHBAGtB//8DcUEaSXIgA0EkRiADQd8ARnJyIANB/wBLcg0AIAEhBAJAAkAgA0Enaw4DAwEDAAsCQCADQd0Aaw4EAwEBAwALIANBIkYgA0H9AEZyDQELQQAhCAsgASEEC0GYCigCACECDAELCyADDwsgBguvBAEHfyABQSJGIAFBJ0ZyRQRAEDIPC0GYCigCACEDIAEQJiAAIANBAmpBmAooAgBBARADIAIEQEHUCSgCAEEEQQYgAkEBRhs2AhwLQZgKQZgKKAIAQQJqNgIAQQAQJSEAQZgKKAIAIQQCQAJAIABB9wBHDQAgBC8BAkHpAEcNACAELwEEQfQARw0AIAQvAQZB6ABGDQELQZgKIARBAms2AgAPC0GYCiAEQQhqNgIAAkBBARAlQfsARwRADAELQewJKAIAIQNB1AkoAgAhBUGYCigCACIGIQBBACECA0AgAyEBQZgKIABBAmo2AgBBARAlIQBBmAooAgAhBwJAAkACQCAAQSJHBEAgAEEnRw0BQScQJgwCC0EiECYMAQsgABA1IQNBmAooAgAhAAwBC0GYCigCAEECaiEAQZgKIAA2AgBBARAlIQMLIANBOkcEQAwCC0GYCkGYCigCAEECajYCAEEBECUiA0EiRiADQSdGckUEQAwCC0GYCigCACEIIAMQJkHsCSABQRRqIgM2AgBBmAooAgAhCSABQQA2AhAgASAINgIIIAEgADYCBCABIAc2AgAgASAJQQJqIgA2AgwCQCACRQRAIAUgATYCIAwBCyACIAE2AhALQZgKIAA2AgACQEEBECUiAEEsRwRAIABB/QBGDQEMAwtBmApBmAooAgBBAmoiADYCACABIQIMAQsLIAUgBjYCECAFQZgKKAIAQQJqNgIMDwtBmAogBDYCAAstAQF/AkAgAC8BAEEuRw0AIABBAmsvAQBBLkcNACAAQQRrLwEAQS5GIQELIAELNQEBfwJAIABBoIsESQ0AIAAvAQAgAUcNACAAQaCLBEYEQEEBDwsgAEECay8BABAtIQILIAILKQEBfyAAQaABRiAAQQlrIgJBF01BAEEBIAJ0IAFxG3JFBEBBAA8LQQELC8cBAQBBgggLvwF4AHAAbwByAHQAZQB0AGEAbwB1AHIAYwBlAHIAbwBtAHUAbgBjAHQAaQBvAG4AbABhAHMAcwB2AG8AeQBpAGUAZABlAGwAZQBjAG8AbgB0AGkAbgBpAG4AcwB0AGEAbgB0AHkAYgByAGUAYQByAGUAdAB1AHIAZABlAGIAdQBnAGcAZQBhAHcAYQBpAHQAaAByAHcAaABpAGwAZQBmAG8AcgBpAGYAYwBhAHQAYwBmAGkAbgBhAGwAbABlAGwAcw==", "undefined" != typeof Buffer ? Buffer.from(A, "base64") : Uint8Array.from(atob(A), (A) => A.charCodeAt(0));
	var A;
};
WebAssembly.compile(C()).then(WebAssembly.instantiate).then(({ exports: A }) => {});
"\n".charCodeAt(0);
"\r".charCodeAt(0);
createDebugger("vite:optimize-deps");
new Set(builtinModules);
/**
* @typedef ErrnoExceptionFields
* @property {number | undefined} [errnode]
* @property {string | undefined} [code]
* @property {string | undefined} [path]
* @property {string | undefined} [syscall]
* @property {string | undefined} [url]
*
* @typedef {Error & ErrnoExceptionFields} ErrnoException
*/
var own$1 = {}.hasOwnProperty;
var classRegExp = /^([A-Z][a-z\d]*)+$/;
var kTypes = /* @__PURE__ */ new Set([
	"string",
	"function",
	"number",
	"object",
	"Function",
	"Object",
	"boolean",
	"bigint",
	"symbol"
]);
var codes = {};
/**
* Create a list string in the form like 'A and B' or 'A, B, ..., and Z'.
* We cannot use Intl.ListFormat because it's not available in
* --without-intl builds.
*
* @param {Array<string>} array
*   An array of strings.
* @param {string} [type]
*   The list type to be inserted before the last element.
* @returns {string}
*/
function formatList(array, type = "and") {
	return array.length < 3 ? array.join(` ${type} `) : `${array.slice(0, -1).join(", ")}, ${type} ${array[array.length - 1]}`;
}
/** @type {Map<string, MessageFunction | string>} */
var messages = /* @__PURE__ */ new Map();
var nodeInternalPrefix = "__node_internal_";
/** @type {number} */
var userStackTraceLimit;
codes.ERR_INVALID_ARG_TYPE = createError(
	"ERR_INVALID_ARG_TYPE",
	/**
	* @param {string} name
	* @param {Array<string> | string} expected
	* @param {unknown} actual
	*/
	(name, expected, actual) => {
		assert.ok(typeof name === "string", "'name' must be a string");
		if (!Array.isArray(expected)) expected = [expected];
		let message = "The ";
		if (name.endsWith(" argument")) message += `${name} `;
		else {
			const type = name.includes(".") ? "property" : "argument";
			message += `"${name}" ${type} `;
		}
		message += "must be ";
		/** @type {Array<string>} */
		const types = [];
		/** @type {Array<string>} */
		const instances = [];
		/** @type {Array<string>} */
		const other = [];
		for (const value of expected) {
			assert.ok(typeof value === "string", "All expected entries have to be of type string");
			if (kTypes.has(value)) types.push(value.toLowerCase());
			else if (classRegExp.exec(value) === null) {
				assert.ok(value !== "object", "The value \"object\" should be written as \"Object\"");
				other.push(value);
			} else instances.push(value);
		}
		if (instances.length > 0) {
			const pos = types.indexOf("object");
			if (pos !== -1) {
				types.slice(pos, 1);
				instances.push("Object");
			}
		}
		if (types.length > 0) {
			message += `${types.length > 1 ? "one of type" : "of type"} ${formatList(types, "or")}`;
			if (instances.length > 0 || other.length > 0) message += " or ";
		}
		if (instances.length > 0) {
			message += `an instance of ${formatList(instances, "or")}`;
			if (other.length > 0) message += " or ";
		}
		if (other.length > 0) if (other.length > 1) message += `one of ${formatList(other, "or")}`;
		else {
			if (other[0].toLowerCase() !== other[0]) message += "an ";
			message += `${other[0]}`;
		}
		message += `. Received ${determineSpecificType(actual)}`;
		return message;
	},
	TypeError
);
codes.ERR_INVALID_MODULE_SPECIFIER = createError(
	"ERR_INVALID_MODULE_SPECIFIER",
	/**
	* @param {string} request
	* @param {string} reason
	* @param {string} [base]
	*/
	(request, reason, base = void 0) => {
		return `Invalid module "${request}" ${reason}${base ? ` imported from ${base}` : ""}`;
	},
	TypeError
);
codes.ERR_INVALID_PACKAGE_CONFIG = createError(
	"ERR_INVALID_PACKAGE_CONFIG",
	/**
	* @param {string} path
	* @param {string} [base]
	* @param {string} [message]
	*/
	(path, base, message) => {
		return `Invalid package config ${path}${base ? ` while importing ${base}` : ""}${message ? `. ${message}` : ""}`;
	},
	Error
);
codes.ERR_INVALID_PACKAGE_TARGET = createError(
	"ERR_INVALID_PACKAGE_TARGET",
	/**
	* @param {string} packagePath
	* @param {string} key
	* @param {unknown} target
	* @param {boolean} [isImport=false]
	* @param {string} [base]
	*/
	(packagePath, key, target, isImport = false, base = void 0) => {
		const relatedError = typeof target === "string" && !isImport && target.length > 0 && !target.startsWith("./");
		if (key === ".") {
			assert.ok(isImport === false);
			return `Invalid "exports" main target ${JSON.stringify(target)} defined in the package config ${packagePath}package.json${base ? ` imported from ${base}` : ""}${relatedError ? "; targets must start with \"./\"" : ""}`;
		}
		return `Invalid "${isImport ? "imports" : "exports"}" target ${JSON.stringify(target)} defined for '${key}' in the package config ${packagePath}package.json${base ? ` imported from ${base}` : ""}${relatedError ? "; targets must start with \"./\"" : ""}`;
	},
	Error
);
codes.ERR_MODULE_NOT_FOUND = createError(
	"ERR_MODULE_NOT_FOUND",
	/**
	* @param {string} path
	* @param {string} base
	* @param {boolean} [exactUrl]
	*/
	(path, base, exactUrl = false) => {
		return `Cannot find ${exactUrl ? "module" : "package"} '${path}' imported from ${base}`;
	},
	Error
);
codes.ERR_NETWORK_IMPORT_DISALLOWED = createError("ERR_NETWORK_IMPORT_DISALLOWED", "import of '%s' by %s is not supported: %s", Error);
codes.ERR_PACKAGE_IMPORT_NOT_DEFINED = createError(
	"ERR_PACKAGE_IMPORT_NOT_DEFINED",
	/**
	* @param {string} specifier
	* @param {string} packagePath
	* @param {string} base
	*/
	(specifier, packagePath, base) => {
		return `Package import specifier "${specifier}" is not defined${packagePath ? ` in package ${packagePath}package.json` : ""} imported from ${base}`;
	},
	TypeError
);
codes.ERR_PACKAGE_PATH_NOT_EXPORTED = createError(
	"ERR_PACKAGE_PATH_NOT_EXPORTED",
	/**
	* @param {string} packagePath
	* @param {string} subpath
	* @param {string} [base]
	*/
	(packagePath, subpath, base = void 0) => {
		if (subpath === ".") return `No "exports" main defined in ${packagePath}package.json${base ? ` imported from ${base}` : ""}`;
		return `Package subpath '${subpath}' is not defined by "exports" in ${packagePath}package.json${base ? ` imported from ${base}` : ""}`;
	},
	Error
);
codes.ERR_UNSUPPORTED_DIR_IMPORT = createError("ERR_UNSUPPORTED_DIR_IMPORT", "Directory import '%s' is not supported resolving ES modules imported from %s", Error);
codes.ERR_UNSUPPORTED_RESOLVE_REQUEST = createError("ERR_UNSUPPORTED_RESOLVE_REQUEST", "Failed to resolve module specifier \"%s\" from \"%s\": Invalid relative URL or base scheme is not hierarchical.", TypeError);
codes.ERR_UNKNOWN_FILE_EXTENSION = createError(
	"ERR_UNKNOWN_FILE_EXTENSION",
	/**
	* @param {string} extension
	* @param {string} path
	*/
	(extension, path) => {
		return `Unknown file extension "${extension}" for ${path}`;
	},
	TypeError
);
codes.ERR_INVALID_ARG_VALUE = createError(
	"ERR_INVALID_ARG_VALUE",
	/**
	* @param {string} name
	* @param {unknown} value
	* @param {string} [reason='is invalid']
	*/
	(name, value, reason = "is invalid") => {
		let inspected = inspect(value);
		if (inspected.length > 128) inspected = `${inspected.slice(0, 128)}...`;
		return `The ${name.includes(".") ? "property" : "argument"} '${name}' ${reason}. Received ${inspected}`;
	},
	TypeError
);
/**
* Utility function for registering the error codes. Only used here. Exported
* *only* to allow for testing.
* @param {string} sym
* @param {MessageFunction | string} value
* @param {ErrorConstructor} constructor
* @returns {new (...parameters: Array<any>) => Error}
*/
function createError(sym, value, constructor) {
	messages.set(sym, value);
	return makeNodeErrorWithCode(constructor, sym);
}
/**
* @param {ErrorConstructor} Base
* @param {string} key
* @returns {ErrorConstructor}
*/
function makeNodeErrorWithCode(Base, key) {
	return NodeError;
	/**
	* @param {Array<unknown>} parameters
	*/
	function NodeError(...parameters) {
		const limit = Error.stackTraceLimit;
		if (isErrorStackTraceLimitWritable()) Error.stackTraceLimit = 0;
		const error = new Base();
		if (isErrorStackTraceLimitWritable()) Error.stackTraceLimit = limit;
		const message = getMessage(key, parameters, error);
		Object.defineProperties(error, {
			message: {
				value: message,
				enumerable: false,
				writable: true,
				configurable: true
			},
			toString: {
				/** @this {Error} */
				value() {
					return `${this.name} [${key}]: ${this.message}`;
				},
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		captureLargerStackTrace(error);
		error.code = key;
		return error;
	}
}
/**
* @returns {boolean}
*/
function isErrorStackTraceLimitWritable() {
	try {
		if (v8_default.startupSnapshot.isBuildingSnapshot()) return false;
	} catch {}
	const desc = Object.getOwnPropertyDescriptor(Error, "stackTraceLimit");
	if (desc === void 0) return Object.isExtensible(Error);
	return own$1.call(desc, "writable") && desc.writable !== void 0 ? desc.writable : desc.set !== void 0;
}
/**
* This function removes unnecessary frames from Node.js core errors.
* @template {(...parameters: unknown[]) => unknown} T
* @param {T} wrappedFunction
* @returns {T}
*/
function hideStackFrames(wrappedFunction) {
	const hidden = nodeInternalPrefix + wrappedFunction.name;
	Object.defineProperty(wrappedFunction, "name", { value: hidden });
	return wrappedFunction;
}
var captureLargerStackTrace = hideStackFrames(
	/**
	* @param {Error} error
	* @returns {Error}
	*/
	function(error) {
		const stackTraceLimitIsWritable = isErrorStackTraceLimitWritable();
		if (stackTraceLimitIsWritable) {
			userStackTraceLimit = Error.stackTraceLimit;
			Error.stackTraceLimit = Number.POSITIVE_INFINITY;
		}
		Error.captureStackTrace(error);
		if (stackTraceLimitIsWritable) Error.stackTraceLimit = userStackTraceLimit;
		return error;
	}
);
/**
* @param {string} key
* @param {Array<unknown>} parameters
* @param {Error} self
* @returns {string}
*/
function getMessage(key, parameters, self) {
	const message = messages.get(key);
	assert.ok(message !== void 0, "expected `message` to be found");
	if (typeof message === "function") {
		assert.ok(message.length <= parameters.length, `Code: ${key}; The provided arguments length (${parameters.length}) does not match the required ones (${message.length}).`);
		return Reflect.apply(message, self, parameters);
	}
	const regex = /%[dfijoOs]/g;
	let expectedLength = 0;
	while (regex.exec(message) !== null) expectedLength++;
	assert.ok(expectedLength === parameters.length, `Code: ${key}; The provided arguments length (${parameters.length}) does not match the required ones (${expectedLength}).`);
	if (parameters.length === 0) return message;
	parameters.unshift(message);
	return Reflect.apply(format, null, parameters);
}
/**
* Determine the specific type of a value for type-mismatch errors.
* @param {unknown} value
* @returns {string}
*/
function determineSpecificType(value) {
	if (value === null || value === void 0) return String(value);
	if (typeof value === "function" && value.name) return `function ${value.name}`;
	if (typeof value === "object") {
		if (value.constructor && value.constructor.name) return `an instance of ${value.constructor.name}`;
		return `${inspect(value, { depth: -1 })}`;
	}
	let inspected = inspect(value, { colors: false });
	if (inspected.length > 28) inspected = `${inspected.slice(0, 25)}...`;
	return `type ${typeof value} (${inspected})`;
}
var DEFAULT_CONDITIONS = Object.freeze(["node", "import"]);
new Set(DEFAULT_CONDITIONS);
(/* @__PURE__ */ __commonJSMin(((exports, module) => {
	function _resolveEscapeSequences(value) {
		return value.replace(/\\\$/g, "$");
	}
	function expandValue(value, processEnv, runningParsed) {
		const env = {
			...runningParsed,
			...processEnv
		};
		const regex = /(?<!\\)\${([^{}]+)}|(?<!\\)\$([A-Za-z_][A-Za-z0-9_]*)/g;
		let result = value;
		let match;
		const seen = /* @__PURE__ */ new Set();
		while ((match = regex.exec(result)) !== null) {
			seen.add(result);
			const [template, bracedExpression, unbracedExpression] = match;
			const expression = bracedExpression || unbracedExpression;
			const opMatch = expression.match(/(:\+|\+|:-|-)/);
			const splitter = opMatch ? opMatch[0] : null;
			const r = expression.split(splitter);
			let defaultValue;
			let value;
			const key = r.shift();
			if ([":+", "+"].includes(splitter)) {
				defaultValue = env[key] ? r.join(splitter) : "";
				value = null;
			} else {
				defaultValue = r.join(splitter);
				value = env[key];
			}
			if (value) if (seen.has(value)) result = result.replace(template, defaultValue);
			else result = result.replace(template, value);
			else result = result.replace(template, defaultValue);
			if (result === runningParsed[key]) break;
			regex.lastIndex = 0;
		}
		return result;
	}
	function expand(options) {
		let processEnv = processModule.env;
		if (options && options.processEnv != null) processEnv = options.processEnv;
		for (const key in options.parsed) {
			let value = options.parsed[key];
			if (processEnv[key] && processEnv[key] !== value) value = processEnv[key];
			else value = expandValue(value, processEnv, options.parsed);
			options.parsed[key] = _resolveEscapeSequences(value);
		}
		for (const processKey in options.parsed) processEnv[processKey] = options.parsed[processKey];
		return options;
	}
	module.exports.expand = expand;
})))();
createDebugger("vite:env");
/*!
* encodeurl
* Copyright(c) 2016 Douglas Christopher Wilson
* MIT Licensed
*/
var require_encodeurl = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module exports.
	* @public
	*/
	module.exports = encodeUrl;
	/**
	* RegExp to match non-URL code points, *after* encoding (i.e. not including "%")
	* and including invalid escape sequences.
	* @private
	*/
	var ENCODE_CHARS_REGEXP = /(?:[^\x21\x25\x26-\x3B\x3D\x3F-\x5B\x5D\x5F\x61-\x7A\x7E]|%(?:[^0-9A-Fa-f]|[0-9A-Fa-f][^0-9A-Fa-f]|$))+/g;
	/**
	* RegExp to match unmatched surrogate pair.
	* @private
	*/
	var UNMATCHED_SURROGATE_PAIR_REGEXP = /(^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]|[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/g;
	/**
	* String to replace unmatched surrogate pair with.
	* @private
	*/
	var UNMATCHED_SURROGATE_PAIR_REPLACE = "$1�$2";
	/**
	* Encode a URL to a percent-encoded form, excluding already-encoded sequences.
	*
	* This function will take an already-encoded URL and encode all the non-URL
	* code points. This function will not encode the "%" character unless it is
	* not part of a valid sequence (`%20` will be left as-is, but `%foo` will
	* be encoded as `%25foo`).
	*
	* This encode is meant to be "safe" and does not throw errors. It will try as
	* hard as it can to properly encode the given URL, including replacing any raw,
	* unpaired surrogate pairs with the Unicode replacement character prior to
	* encoding.
	*
	* @param {string} url
	* @return {string}
	* @public
	*/
	function encodeUrl(url) {
		return String(url).replace(UNMATCHED_SURROGATE_PAIR_REGEXP, UNMATCHED_SURROGATE_PAIR_REPLACE).replace(ENCODE_CHARS_REGEXP, encodeURI);
	}
}));
/*!
* escape-html
* Copyright(c) 2012-2013 TJ Holowaychuk
* Copyright(c) 2015 Andreas Lubbe
* Copyright(c) 2015 Tiancheng "Timothy" Gu
* MIT Licensed
*/
var require_escape_html = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module variables.
	* @private
	*/
	var matchHtmlRegExp = /["'&<>]/;
	/**
	* Module exports.
	* @public
	*/
	module.exports = escapeHtml;
	/**
	* Escape special characters in the given string of html.
	*
	* @param  {string} string The string to escape for inserting into HTML
	* @return {string}
	* @public
	*/
	function escapeHtml(string) {
		var str = "" + string;
		var match = matchHtmlRegExp.exec(str);
		if (!match) return str;
		var escape;
		var html = "";
		var index = 0;
		var lastIndex = 0;
		for (index = match.index; index < str.length; index++) {
			switch (str.charCodeAt(index)) {
				case 34:
					escape = "&quot;";
					break;
				case 38:
					escape = "&amp;";
					break;
				case 39:
					escape = "&#39;";
					break;
				case 60:
					escape = "&lt;";
					break;
				case 62:
					escape = "&gt;";
					break;
				default: continue;
			}
			if (lastIndex !== index) html += str.substring(lastIndex, index);
			lastIndex = index + 1;
			html += escape;
		}
		return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
	}
}));
/*!
* ee-first
* Copyright(c) 2014 Jonathan Ong
* MIT Licensed
*/
var require_ee_first = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module exports.
	* @public
	*/
	module.exports = first;
	/**
	* Get the first event in a set of event emitters and event pairs.
	*
	* @param {array} stuff
	* @param {function} done
	* @public
	*/
	function first(stuff, done) {
		if (!Array.isArray(stuff)) throw new TypeError("arg must be an array of [ee, events...] arrays");
		var cleanups = [];
		for (var i = 0; i < stuff.length; i++) {
			var arr = stuff[i];
			if (!Array.isArray(arr) || arr.length < 2) throw new TypeError("each array member must be [ee, events...]");
			var ee = arr[0];
			for (var j = 1; j < arr.length; j++) {
				var event = arr[j];
				var fn = listener(event, callback);
				ee.on(event, fn);
				cleanups.push({
					ee,
					event,
					fn
				});
			}
		}
		function callback() {
			cleanup();
			done.apply(null, arguments);
		}
		function cleanup() {
			var x;
			for (var i = 0; i < cleanups.length; i++) {
				x = cleanups[i];
				x.ee.removeListener(x.event, x.fn);
			}
		}
		function thunk(fn) {
			done = fn;
		}
		thunk.cancel = cleanup;
		return thunk;
	}
	/**
	* Create the event listener.
	* @private
	*/
	function listener(event, done) {
		return function onevent(arg1) {
			var args = new Array(arguments.length);
			var ee = this;
			var err = event === "error" ? arg1 : null;
			for (var i = 0; i < args.length; i++) args[i] = arguments[i];
			done(err, ee, event, args);
		};
	}
}));
/*!
* on-finished
* Copyright(c) 2013 Jonathan Ong
* Copyright(c) 2014 Douglas Christopher Wilson
* MIT Licensed
*/
var require_on_finished = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module exports.
	* @public
	*/
	module.exports = onFinished;
	module.exports.isFinished = isFinished;
	/**
	* Module dependencies.
	* @private
	*/
	var first = require_ee_first();
	/**
	* Variables.
	* @private
	*/
	/* istanbul ignore next */
	var defer = typeof setImmediate === "function" ? setImmediate : function(fn) {
		processModule.nextTick(fn.bind.apply(fn, arguments));
	};
	/**
	* Invoke callback when the response has finished, useful for
	* cleaning up resources afterwards.
	*
	* @param {object} msg
	* @param {function} listener
	* @return {object}
	* @public
	*/
	function onFinished(msg, listener) {
		if (isFinished(msg) !== false) {
			defer(listener, null, msg);
			return msg;
		}
		attachListener(msg, listener);
		return msg;
	}
	/**
	* Determine if message is already finished.
	*
	* @param {object} msg
	* @return {boolean}
	* @public
	*/
	function isFinished(msg) {
		var socket = msg.socket;
		if (typeof msg.finished === "boolean") return Boolean(msg.finished || socket && !socket.writable);
		if (typeof msg.complete === "boolean") return Boolean(msg.upgrade || !socket || !socket.readable || msg.complete && !msg.readable);
	}
	/**
	* Attach a finished listener to the message.
	*
	* @param {object} msg
	* @param {function} callback
	* @private
	*/
	function attachFinishedListener(msg, callback) {
		var eeMsg;
		var eeSocket;
		var finished = false;
		function onFinish(error) {
			eeMsg.cancel();
			eeSocket.cancel();
			finished = true;
			callback(error);
		}
		eeMsg = eeSocket = first([[
			msg,
			"end",
			"finish"
		]], onFinish);
		function onSocket(socket) {
			msg.removeListener("socket", onSocket);
			if (finished) return;
			if (eeMsg !== eeSocket) return;
			eeSocket = first([[
				socket,
				"error",
				"close"
			]], onFinish);
		}
		if (msg.socket) {
			onSocket(msg.socket);
			return;
		}
		msg.on("socket", onSocket);
		if (msg.socket === void 0) patchAssignSocket(msg, onSocket);
	}
	/**
	* Attach the listener to the message.
	*
	* @param {object} msg
	* @return {function}
	* @private
	*/
	function attachListener(msg, listener) {
		var attached = msg.__onFinished;
		if (!attached || !attached.queue) {
			attached = msg.__onFinished = createListener(msg);
			attachFinishedListener(msg, attached);
		}
		attached.queue.push(listener);
	}
	/**
	* Create listener on message.
	*
	* @param {object} msg
	* @return {function}
	* @private
	*/
	function createListener(msg) {
		function listener(err) {
			if (msg.__onFinished === listener) msg.__onFinished = null;
			if (!listener.queue) return;
			var queue = listener.queue;
			listener.queue = null;
			for (var i = 0; i < queue.length; i++) queue[i](err, msg);
		}
		listener.queue = [];
		return listener;
	}
	/**
	* Patch ServerResponse.prototype.assignSocket for node.js 0.8.
	*
	* @param {ServerResponse} res
	* @param {function} callback
	* @private
	*/
	function patchAssignSocket(res, callback) {
		var assignSocket = res.assignSocket;
		if (typeof assignSocket !== "function") return;
		res.assignSocket = function _assignSocket(socket) {
			assignSocket.call(this, socket);
			callback(socket);
		};
	}
}));
/*!
* parseurl
* Copyright(c) 2014 Jonathan Ong
* Copyright(c) 2014-2017 Douglas Christopher Wilson
* MIT Licensed
*/
var require_parseurl = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module dependencies.
	* @private
	*/
	var url$2 = __require("url");
	var parse = url$2.parse;
	var Url = url$2.Url;
	/**
	* Module exports.
	* @public
	*/
	module.exports = parseurl;
	module.exports.original = originalurl;
	/**
	* Parse the `req` url with memoization.
	*
	* @param {ServerRequest} req
	* @return {Object}
	* @public
	*/
	function parseurl(req) {
		var url = req.url;
		if (url === void 0) return;
		var parsed = req._parsedUrl;
		if (fresh(url, parsed)) return parsed;
		parsed = fastparse(url);
		parsed._raw = url;
		return req._parsedUrl = parsed;
	}
	/**
	* Parse the `req` original url with fallback and memoization.
	*
	* @param {ServerRequest} req
	* @return {Object}
	* @public
	*/
	function originalurl(req) {
		var url = req.originalUrl;
		if (typeof url !== "string") return parseurl(req);
		var parsed = req._parsedOriginalUrl;
		if (fresh(url, parsed)) return parsed;
		parsed = fastparse(url);
		parsed._raw = url;
		return req._parsedOriginalUrl = parsed;
	}
	/**
	* Parse the `str` url with fast-path short-cut.
	*
	* @param {string} str
	* @return {Object}
	* @private
	*/
	function fastparse(str) {
		if (typeof str !== "string" || str.charCodeAt(0) !== 47) return parse(str);
		var pathname = str;
		var query = null;
		var search = null;
		for (var i = 1; i < str.length; i++) switch (str.charCodeAt(i)) {
			case 63:
				if (search === null) {
					pathname = str.substring(0, i);
					query = str.substring(i + 1);
					search = str.substring(i);
				}
				break;
			case 9:
			case 10:
			case 12:
			case 13:
			case 32:
			case 35:
			case 160:
			case 65279: return parse(str);
		}
		var url = Url !== void 0 ? new Url() : {};
		url.path = str;
		url.href = str;
		url.pathname = pathname;
		if (search !== null) {
			url.query = query;
			url.search = search;
		}
		return url;
	}
	/**
	* Determine if parsed is still fresh for url.
	*
	* @param {string} url
	* @param {object} parsedUrl
	* @return {boolean}
	* @private
	*/
	function fresh(url, parsedUrl) {
		return typeof parsedUrl === "object" && parsedUrl !== null && (Url === void 0 || parsedUrl instanceof Url) && parsedUrl._raw === url;
	}
}));
var require_codes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		"100": "Continue",
		"101": "Switching Protocols",
		"102": "Processing",
		"103": "Early Hints",
		"200": "OK",
		"201": "Created",
		"202": "Accepted",
		"203": "Non-Authoritative Information",
		"204": "No Content",
		"205": "Reset Content",
		"206": "Partial Content",
		"207": "Multi-Status",
		"208": "Already Reported",
		"226": "IM Used",
		"300": "Multiple Choices",
		"301": "Moved Permanently",
		"302": "Found",
		"303": "See Other",
		"304": "Not Modified",
		"305": "Use Proxy",
		"306": "(Unused)",
		"307": "Temporary Redirect",
		"308": "Permanent Redirect",
		"400": "Bad Request",
		"401": "Unauthorized",
		"402": "Payment Required",
		"403": "Forbidden",
		"404": "Not Found",
		"405": "Method Not Allowed",
		"406": "Not Acceptable",
		"407": "Proxy Authentication Required",
		"408": "Request Timeout",
		"409": "Conflict",
		"410": "Gone",
		"411": "Length Required",
		"412": "Precondition Failed",
		"413": "Payload Too Large",
		"414": "URI Too Long",
		"415": "Unsupported Media Type",
		"416": "Range Not Satisfiable",
		"417": "Expectation Failed",
		"418": "I'm a teapot",
		"421": "Misdirected Request",
		"422": "Unprocessable Entity",
		"423": "Locked",
		"424": "Failed Dependency",
		"425": "Unordered Collection",
		"426": "Upgrade Required",
		"428": "Precondition Required",
		"429": "Too Many Requests",
		"431": "Request Header Fields Too Large",
		"451": "Unavailable For Legal Reasons",
		"500": "Internal Server Error",
		"501": "Not Implemented",
		"502": "Bad Gateway",
		"503": "Service Unavailable",
		"504": "Gateway Timeout",
		"505": "HTTP Version Not Supported",
		"506": "Variant Also Negotiates",
		"507": "Insufficient Storage",
		"508": "Loop Detected",
		"509": "Bandwidth Limit Exceeded",
		"510": "Not Extended",
		"511": "Network Authentication Required"
	};
}));
/*!
* statuses
* Copyright(c) 2014 Jonathan Ong
* Copyright(c) 2016 Douglas Christopher Wilson
* MIT Licensed
*/
var require_statuses = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module dependencies.
	* @private
	*/
	var codes = require_codes();
	/**
	* Module exports.
	* @public
	*/
	module.exports = status;
	status.STATUS_CODES = codes;
	status.codes = populateStatusesMap(status, codes);
	status.redirect = {
		300: true,
		301: true,
		302: true,
		303: true,
		305: true,
		307: true,
		308: true
	};
	status.empty = {
		204: true,
		205: true,
		304: true
	};
	status.retry = {
		502: true,
		503: true,
		504: true
	};
	/**
	* Populate the statuses map for given codes.
	* @private
	*/
	function populateStatusesMap(statuses, codes) {
		var arr = [];
		Object.keys(codes).forEach(function forEachCode(code) {
			var message = codes[code];
			var status = Number(code);
			statuses[status] = message;
			statuses[message] = status;
			statuses[message.toLowerCase()] = status;
			arr.push(status);
		});
		return arr;
	}
	/**
	* Get the status code.
	*
	* Given a number, this will throw if it is not a known status
	* code, otherwise the code will be returned. Given a string,
	* the string will be parsed for a number and return the code
	* if valid, otherwise will lookup the code assuming this is
	* the status message.
	*
	* @param {string|number} code
	* @returns {number}
	* @public
	*/
	function status(code) {
		if (typeof code === "number") {
			if (!status[code]) throw new Error("invalid status code: " + code);
			return code;
		}
		if (typeof code !== "string") throw new TypeError("code must be a number or string");
		var n = parseInt(code, 10);
		if (!isNaN(n)) {
			if (!status[n]) throw new Error("invalid status code: " + n);
			return n;
		}
		n = status[code.toLowerCase()];
		if (!n) throw new Error("invalid status message: \"" + code + "\"");
		return n;
	}
}));
/*!
* unpipe
* Copyright(c) 2015 Douglas Christopher Wilson
* MIT Licensed
*/
var require_unpipe = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module exports.
	* @public
	*/
	module.exports = unpipe;
	/**
	* Determine if there are Node.js pipe-like data listeners.
	* @private
	*/
	function hasPipeDataListeners(stream) {
		var listeners = stream.listeners("data");
		for (var i = 0; i < listeners.length; i++) if (listeners[i].name === "ondata") return true;
		return false;
	}
	/**
	* Unpipe a stream from all destinations.
	*
	* @param {object} stream
	* @public
	*/
	function unpipe(stream) {
		if (!stream) throw new TypeError("argument stream is required");
		if (typeof stream.unpipe === "function") {
			stream.unpipe();
			return;
		}
		if (!hasPipeDataListeners(stream)) return;
		var listener;
		var listeners = stream.listeners("close");
		for (var i = 0; i < listeners.length; i++) {
			listener = listeners[i];
			if (listener.name !== "cleanup" && listener.name !== "onclose") continue;
			listener.call(stream);
		}
	}
}));
/*!
* finalhandler
* Copyright(c) 2014-2017 Douglas Christopher Wilson
* MIT Licensed
*/
var require_finalhandler = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module dependencies.
	* @private
	*/
	var debug = (init_node(), __toCommonJS(node_exports))("finalhandler");
	var encodeUrl = require_encodeurl();
	var escapeHtml = require_escape_html();
	var onFinished = require_on_finished();
	var parseUrl = require_parseurl();
	var statuses = require_statuses();
	var unpipe = require_unpipe();
	/**
	* Module variables.
	* @private
	*/
	var DOUBLE_SPACE_REGEXP = /\x20{2}/g;
	var NEWLINE_REGEXP = /\n/g;
	/* istanbul ignore next */
	var defer = typeof setImmediate === "function" ? setImmediate : function(fn) {
		processModule.nextTick(fn.bind.apply(fn, arguments));
	};
	var isFinished = onFinished.isFinished;
	/**
	* Create a minimal HTML document.
	*
	* @param {string} message
	* @private
	*/
	function createHtmlDocument(message) {
		return "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>" + escapeHtml(message).replace(NEWLINE_REGEXP, "<br>").replace(DOUBLE_SPACE_REGEXP, " &nbsp;") + "</pre>\n</body>\n</html>\n";
	}
	/**
	* Module exports.
	* @public
	*/
	module.exports = finalhandler;
	/**
	* Create a function to handle the final response.
	*
	* @param {Request} req
	* @param {Response} res
	* @param {Object} [options]
	* @return {Function}
	* @public
	*/
	function finalhandler(req, res, options) {
		var opts = options || {};
		var env = opts.env || "production";
		var onerror = opts.onerror;
		return function(err) {
			var headers;
			var msg;
			var status;
			if (!err && headersSent(res)) {
				debug("cannot 404 after headers sent");
				return;
			}
			if (err) {
				status = getErrorStatusCode(err);
				if (status === void 0) status = getResponseStatusCode(res);
				else headers = getErrorHeaders(err);
				msg = getErrorMessage(err, status, env);
			} else {
				status = 404;
				msg = "Cannot " + req.method + " " + encodeUrl(getResourceName(req));
			}
			debug("default %s", status);
			if (err && onerror) defer(onerror, err, req, res);
			if (headersSent(res)) {
				debug("cannot %d after headers sent", status);
				req.socket.destroy();
				return;
			}
			send(req, res, status, headers, msg);
		};
	}
	/**
	* Get headers from Error object.
	*
	* @param {Error} err
	* @return {object}
	* @private
	*/
	function getErrorHeaders(err) {
		if (!err.headers || typeof err.headers !== "object") return;
		var headers = Object.create(null);
		var keys = Object.keys(err.headers);
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			headers[key] = err.headers[key];
		}
		return headers;
	}
	/**
	* Get message from Error object, fallback to status message.
	*
	* @param {Error} err
	* @param {number} status
	* @param {string} env
	* @return {string}
	* @private
	*/
	function getErrorMessage(err, status, env) {
		var msg;
		if (env !== "production") {
			msg = err.stack;
			if (!msg && typeof err.toString === "function") msg = err.toString();
		}
		return msg || statuses[status];
	}
	/**
	* Get status code from Error object.
	*
	* @param {Error} err
	* @return {number}
	* @private
	*/
	function getErrorStatusCode(err) {
		if (typeof err.status === "number" && err.status >= 400 && err.status < 600) return err.status;
		if (typeof err.statusCode === "number" && err.statusCode >= 400 && err.statusCode < 600) return err.statusCode;
	}
	/**
	* Get resource name for the request.
	*
	* This is typically just the original pathname of the request
	* but will fallback to "resource" is that cannot be determined.
	*
	* @param {IncomingMessage} req
	* @return {string}
	* @private
	*/
	function getResourceName(req) {
		try {
			return parseUrl.original(req).pathname;
		} catch (e) {
			return "resource";
		}
	}
	/**
	* Get status code from response.
	*
	* @param {OutgoingMessage} res
	* @return {number}
	* @private
	*/
	function getResponseStatusCode(res) {
		var status = res.statusCode;
		if (typeof status !== "number" || status < 400 || status > 599) status = 500;
		return status;
	}
	/**
	* Determine if the response headers have been sent.
	*
	* @param {object} res
	* @returns {boolean}
	* @private
	*/
	function headersSent(res) {
		return typeof res.headersSent !== "boolean" ? Boolean(res._header) : res.headersSent;
	}
	/**
	* Send response.
	*
	* @param {IncomingMessage} req
	* @param {OutgoingMessage} res
	* @param {number} status
	* @param {object} headers
	* @param {string} message
	* @private
	*/
	function send(req, res, status, headers, message) {
		function write() {
			var body = createHtmlDocument(message);
			res.statusCode = status;
			res.statusMessage = statuses[status];
			setHeaders(res, headers);
			res.setHeader("Content-Security-Policy", "default-src 'none'");
			res.setHeader("X-Content-Type-Options", "nosniff");
			res.setHeader("Content-Type", "text/html; charset=utf-8");
			res.setHeader("Content-Length", Buffer.byteLength(body, "utf8"));
			if (req.method === "HEAD") {
				res.end();
				return;
			}
			res.end(body, "utf8");
		}
		if (isFinished(req)) {
			write();
			return;
		}
		unpipe(req);
		onFinished(req, write);
		req.resume();
	}
	/**
	* Set response headers from an object.
	*
	* @param {OutgoingMessage} res
	* @param {object} headers
	* @private
	*/
	function setHeaders(res, headers) {
		if (!headers) return;
		var keys = Object.keys(headers);
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			res.setHeader(key, headers[key]);
		}
	}
}));
var require_utils_merge = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Merge object b with object a.
	*
	*     var a = { foo: 'bar' }
	*       , b = { bar: 'baz' };
	*
	*     merge(a, b);
	*     // => { foo: 'bar', bar: 'baz' }
	*
	* @param {Object} a
	* @param {Object} b
	* @return {Object}
	* @api public
	*/
	exports = module.exports = function(a, b) {
		if (a && b) for (var key in b) a[key] = b[key];
		return a;
	};
}));
/*!
* connect
* Copyright(c) 2010 Sencha Inc.
* Copyright(c) 2011 TJ Holowaychuk
* Copyright(c) 2015 Douglas Christopher Wilson
* MIT Licensed
*/
var require_connect = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module dependencies.
	* @private
	*/
	var debug = (init_node(), __toCommonJS(node_exports))("connect:dispatcher");
	var EventEmitter$4 = __require("events").EventEmitter;
	var finalhandler = require_finalhandler();
	var http$6 = __require("http");
	var merge = require_utils_merge();
	var parseUrl = require_parseurl();
	/**
	* Module exports.
	* @public
	*/
	module.exports = createServer;
	/**
	* Module variables.
	* @private
	*/
	var env = "production";
	var proto = {};
	/* istanbul ignore next */
	var defer = typeof setImmediate === "function" ? setImmediate : function(fn) {
		processModule.nextTick(fn.bind.apply(fn, arguments));
	};
	/**
	* Create a new connect server.
	*
	* @return {function}
	* @public
	*/
	function createServer() {
		function app(req, res, next) {
			app.handle(req, res, next);
		}
		merge(app, proto);
		merge(app, EventEmitter$4.prototype);
		app.route = "/";
		app.stack = [];
		return app;
	}
	/**
	* Utilize the given middleware `handle` to the given `route`,
	* defaulting to _/_. This "route" is the mount-point for the
	* middleware, when given a value other than _/_ the middleware
	* is only effective when that segment is present in the request's
	* pathname.
	*
	* For example if we were to mount a function at _/admin_, it would
	* be invoked on _/admin_, and _/admin/settings_, however it would
	* not be invoked for _/_, or _/posts_.
	*
	* @param {String|Function|Server} route, callback or server
	* @param {Function|Server} callback or server
	* @return {Server} for chaining
	* @public
	*/
	proto.use = function use(route, fn) {
		var handle = fn;
		var path = route;
		if (typeof route !== "string") {
			handle = route;
			path = "/";
		}
		if (typeof handle.handle === "function") {
			var server = handle;
			server.route = path;
			handle = function(req, res, next) {
				server.handle(req, res, next);
			};
		}
		if (handle instanceof http$6.Server) handle = handle.listeners("request")[0];
		if (path[path.length - 1] === "/") path = path.slice(0, -1);
		debug("use %s %s", path || "/", handle.name || "anonymous");
		this.stack.push({
			route: path,
			handle
		});
		return this;
	};
	/**
	* Handle server requests, punting them down
	* the middleware stack.
	*
	* @private
	*/
	proto.handle = function handle(req, res, out) {
		var index = 0;
		var protohost = getProtohost(req.url) || "";
		var removed = "";
		var slashAdded = false;
		var stack = this.stack;
		var done = out || finalhandler(req, res, {
			env,
			onerror: logerror
		});
		req.originalUrl = req.originalUrl || req.url;
		function next(err) {
			if (slashAdded) {
				req.url = req.url.substr(1);
				slashAdded = false;
			}
			if (removed.length !== 0) {
				req.url = protohost + removed + req.url.substr(protohost.length);
				removed = "";
			}
			var layer = stack[index++];
			if (!layer) {
				defer(done, err);
				return;
			}
			var path = parseUrl(req).pathname || "/";
			var route = layer.route;
			if (path.toLowerCase().substr(0, route.length) !== route.toLowerCase()) return next(err);
			var c = path.length > route.length && path[route.length];
			if (c && c !== "/" && c !== ".") return next(err);
			if (route.length !== 0 && route !== "/") {
				removed = route;
				req.url = protohost + req.url.substr(protohost.length + removed.length);
				if (!protohost && req.url[0] !== "/") {
					req.url = "/" + req.url;
					slashAdded = true;
				}
			}
			call(layer.handle, route, err, req, res, next);
		}
		next();
	};
	/**
	* Listen for connections.
	*
	* This method takes the same arguments
	* as node's `http.Server#listen()`.
	*
	* HTTP and HTTPS:
	*
	* If you run your application both as HTTP
	* and HTTPS you may wrap them individually,
	* since your Connect "server" is really just
	* a JavaScript `Function`.
	*
	*      var connect = require('connect')
	*        , http = require('http')
	*        , https = require('https');
	*
	*      var app = connect();
	*
	*      http.createServer(app).listen(80);
	*      https.createServer(options, app).listen(443);
	*
	* @return {http.Server}
	* @api public
	*/
	proto.listen = function listen() {
		var server = http$6.createServer(this);
		return server.listen.apply(server, arguments);
	};
	/**
	* Invoke a route handle.
	* @private
	*/
	function call(handle, route, err, req, res, next) {
		var arity = handle.length;
		var error = err;
		var hasError = Boolean(err);
		debug("%s %s : %s", handle.name || "<anonymous>", route, req.originalUrl);
		try {
			if (hasError && arity === 4) {
				handle(err, req, res, next);
				return;
			} else if (!hasError && arity < 4) {
				handle(req, res, next);
				return;
			}
		} catch (e) {
			error = e;
		}
		next(error);
	}
	/**
	* Log error using console.error.
	*
	* @param {Error} err
	* @private
	*/
	function logerror(err) {
		if (env !== "test") console.error(err.stack || err.toString());
	}
	/**
	* Get get protocol + host for a URL.
	*
	* @param {string} url
	* @private
	*/
	function getProtohost(url) {
		if (url.length === 0 || url[0] === "/") return;
		var fqdnIndex = url.indexOf("://");
		return fqdnIndex !== -1 && url.lastIndexOf("?", fqdnIndex) === -1 ? url.substr(0, url.indexOf("/", 3 + fqdnIndex)) : void 0;
	}
}));
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var require_object_assign = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	function toObject(val) {
		if (val === null || val === void 0) throw new TypeError("Object.assign cannot be called with null or undefined");
		return Object(val);
	}
	function shouldUseNative() {
		try {
			if (!Object.assign) return false;
			var test1 = /* @__PURE__ */ new String("abc");
			test1[5] = "de";
			if (Object.getOwnPropertyNames(test1)[0] === "5") return false;
			var test2 = {};
			for (var i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
			if (Object.getOwnPropertyNames(test2).map(function(n) {
				return test2[n];
			}).join("") !== "0123456789") return false;
			var test3 = {};
			"abcdefghijklmnopqrst".split("").forEach(function(letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") return false;
			return true;
		} catch (err) {
			return false;
		}
	}
	module.exports = shouldUseNative() ? Object.assign : function(target, source) {
		var from;
		var to = toObject(target);
		var symbols;
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
			for (var key in from) if (hasOwnProperty.call(from, key)) to[key] = from[key];
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
			}
		}
		return to;
	};
}));
/*!
* vary
* Copyright(c) 2014-2017 Douglas Christopher Wilson
* MIT Licensed
*/
var require_vary = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module exports.
	*/
	module.exports = vary;
	module.exports.append = append;
	/**
	* RegExp to match field-name in RFC 7230 sec 3.2
	*
	* field-name    = token
	* token         = 1*tchar
	* tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
	*               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
	*               / DIGIT / ALPHA
	*               ; any VCHAR, except delimiters
	*/
	var FIELD_NAME_REGEXP = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
	/**
	* Append a field to a vary header.
	*
	* @param {String} header
	* @param {String|Array} field
	* @return {String}
	* @public
	*/
	function append(header, field) {
		if (typeof header !== "string") throw new TypeError("header argument is required");
		if (!field) throw new TypeError("field argument is required");
		var fields = !Array.isArray(field) ? parse(String(field)) : field;
		for (var j = 0; j < fields.length; j++) if (!FIELD_NAME_REGEXP.test(fields[j])) throw new TypeError("field argument contains an invalid header name");
		if (header === "*") return header;
		var val = header;
		var vals = parse(header.toLowerCase());
		if (fields.indexOf("*") !== -1 || vals.indexOf("*") !== -1) return "*";
		for (var i = 0; i < fields.length; i++) {
			var fld = fields[i].toLowerCase();
			if (vals.indexOf(fld) === -1) {
				vals.push(fld);
				val = val ? val + ", " + fields[i] : fields[i];
			}
		}
		return val;
	}
	/**
	* Parse a vary header into an array.
	*
	* @param {String} header
	* @return {Array}
	* @private
	*/
	function parse(header) {
		var end = 0;
		var list = [];
		var start = 0;
		for (var i = 0, len = header.length; i < len; i++) switch (header.charCodeAt(i)) {
			case 32:
				if (start === end) start = end = i + 1;
				break;
			case 44:
				list.push(header.substring(start, end));
				start = end = i + 1;
				break;
			default: end = i + 1;
		}
		list.push(header.substring(start, end));
		return list;
	}
	/**
	* Mark that a request is varied on a header field.
	*
	* @param {Object} res
	* @param {String|Array} field
	* @public
	*/
	function vary(res, field) {
		if (!res || !res.getHeader || !res.setHeader) throw new TypeError("res argument is required");
		var val = res.getHeader("Vary") || "";
		if (val = append(Array.isArray(val) ? val.join(", ") : String(val), field)) res.setHeader("Vary", val);
	}
}));
var require_lib$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		"use strict";
		var assign = require_object_assign();
		var vary = require_vary();
		var defaults = {
			origin: "*",
			methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
			preflightContinue: false,
			optionsSuccessStatus: 204
		};
		function isString(s) {
			return typeof s === "string" || s instanceof String;
		}
		function isOriginAllowed(origin, allowedOrigin) {
			if (Array.isArray(allowedOrigin)) {
				for (var i = 0; i < allowedOrigin.length; ++i) if (isOriginAllowed(origin, allowedOrigin[i])) return true;
				return false;
			} else if (isString(allowedOrigin)) return origin === allowedOrigin;
			else if (allowedOrigin instanceof RegExp) return allowedOrigin.test(origin);
			else return !!allowedOrigin;
		}
		function configureOrigin(options, req) {
			var requestOrigin = req.headers.origin, headers = [], isAllowed;
			if (!options.origin || options.origin === "*") headers.push([{
				key: "Access-Control-Allow-Origin",
				value: "*"
			}]);
			else if (isString(options.origin)) {
				headers.push([{
					key: "Access-Control-Allow-Origin",
					value: options.origin
				}]);
				headers.push([{
					key: "Vary",
					value: "Origin"
				}]);
			} else {
				isAllowed = isOriginAllowed(requestOrigin, options.origin);
				headers.push([{
					key: "Access-Control-Allow-Origin",
					value: isAllowed ? requestOrigin : false
				}]);
				headers.push([{
					key: "Vary",
					value: "Origin"
				}]);
			}
			return headers;
		}
		function configureMethods(options) {
			var methods = options.methods;
			if (methods.join) methods = options.methods.join(",");
			return {
				key: "Access-Control-Allow-Methods",
				value: methods
			};
		}
		function configureCredentials(options) {
			if (options.credentials === true) return {
				key: "Access-Control-Allow-Credentials",
				value: "true"
			};
			return null;
		}
		function configureAllowedHeaders(options, req) {
			var allowedHeaders = options.allowedHeaders || options.headers;
			var headers = [];
			if (!allowedHeaders) {
				allowedHeaders = req.headers["access-control-request-headers"];
				headers.push([{
					key: "Vary",
					value: "Access-Control-Request-Headers"
				}]);
			} else if (allowedHeaders.join) allowedHeaders = allowedHeaders.join(",");
			if (allowedHeaders && allowedHeaders.length) headers.push([{
				key: "Access-Control-Allow-Headers",
				value: allowedHeaders
			}]);
			return headers;
		}
		function configureExposedHeaders(options) {
			var headers = options.exposedHeaders;
			if (!headers) return null;
			else if (headers.join) headers = headers.join(",");
			if (headers && headers.length) return {
				key: "Access-Control-Expose-Headers",
				value: headers
			};
			return null;
		}
		function configureMaxAge(options) {
			var maxAge = (typeof options.maxAge === "number" || options.maxAge) && options.maxAge.toString();
			if (maxAge && maxAge.length) return {
				key: "Access-Control-Max-Age",
				value: maxAge
			};
			return null;
		}
		function applyHeaders(headers, res) {
			for (var i = 0, n = headers.length; i < n; i++) {
				var header = headers[i];
				if (header) {
					if (Array.isArray(header)) applyHeaders(header, res);
					else if (header.key === "Vary" && header.value) vary(res, header.value);
					else if (header.value) res.setHeader(header.key, header.value);
				}
			}
		}
		function cors(options, req, res, next) {
			var headers = [];
			if ((req.method && req.method.toUpperCase && req.method.toUpperCase()) === "OPTIONS") {
				headers.push(configureOrigin(options, req));
				headers.push(configureCredentials(options));
				headers.push(configureMethods(options));
				headers.push(configureAllowedHeaders(options, req));
				headers.push(configureMaxAge(options));
				headers.push(configureExposedHeaders(options));
				applyHeaders(headers, res);
				if (options.preflightContinue) next();
				else {
					res.statusCode = options.optionsSuccessStatus;
					res.setHeader("Content-Length", "0");
					res.end();
				}
			} else {
				headers.push(configureOrigin(options, req));
				headers.push(configureCredentials(options));
				headers.push(configureExposedHeaders(options));
				applyHeaders(headers, res);
				next();
			}
		}
		function middlewareWrapper(o) {
			var optionsCallback = null;
			if (typeof o === "function") optionsCallback = o;
			else optionsCallback = function(req, cb) {
				cb(null, o);
			};
			return function corsMiddleware(req, res, next) {
				optionsCallback(req, function(err, options) {
					if (err) next(err);
					else {
						var corsOptions = assign({}, defaults, options);
						var originCallback = null;
						if (corsOptions.origin && typeof corsOptions.origin === "function") originCallback = corsOptions.origin;
						else if (corsOptions.origin) originCallback = function(origin, cb) {
							cb(null, corsOptions.origin);
						};
						if (originCallback) originCallback(req.headers.origin, function(err2, origin) {
							if (err2 || !origin) next(err2);
							else {
								corsOptions.origin = origin;
								cors(corsOptions, req, res, next);
							}
						});
						else next();
					}
				});
			};
		}
		module.exports = middlewareWrapper;
	})();
}));
var require_readdirp = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const fs$10 = __require("fs");
	const { Readable: Readable$1 } = __require("stream");
	const sysPath$3 = __require("path");
	const { promisify: promisify$4 } = __require("util");
	const picomatch$1 = __require("picomatch");
	const readdir = promisify$4(fs$10.readdir);
	const stat = promisify$4(fs$10.stat);
	const lstat = promisify$4(fs$10.lstat);
	const realpath = promisify$4(fs$10.realpath);
	/**
	* @typedef {Object} EntryInfo
	* @property {String} path
	* @property {String} fullPath
	* @property {fs.Stats=} stats
	* @property {fs.Dirent=} dirent
	* @property {String} basename
	*/
	const BANG = "!";
	const RECURSIVE_ERROR_CODE = "READDIRP_RECURSIVE_ERROR";
	const NORMAL_FLOW_ERRORS = /* @__PURE__ */ new Set([
		"ENOENT",
		"EPERM",
		"EACCES",
		"ELOOP",
		RECURSIVE_ERROR_CODE
	]);
	const FILE_TYPE = "files";
	const DIR_TYPE = "directories";
	const FILE_DIR_TYPE = "files_directories";
	const EVERYTHING_TYPE = "all";
	const ALL_TYPES = [
		FILE_TYPE,
		DIR_TYPE,
		FILE_DIR_TYPE,
		EVERYTHING_TYPE
	];
	const isNormalFlowError = (error) => NORMAL_FLOW_ERRORS.has(error.code);
	const [maj, min] = processModule.versions.node.split(".").slice(0, 2).map((n) => Number.parseInt(n, 10));
	const wantBigintFsStats = processModule.platform === "win32" && (maj > 10 || maj === 10 && min >= 5);
	const normalizeFilter = (filter) => {
		if (filter === void 0) return;
		if (typeof filter === "function") return filter;
		if (typeof filter === "string") {
			const glob = picomatch$1(filter.trim());
			return (entry) => glob(entry.basename);
		}
		if (Array.isArray(filter)) {
			const positive = [];
			const negative = [];
			for (const item of filter) {
				const trimmed = item.trim();
				if (trimmed.charAt(0) === BANG) negative.push(picomatch$1(trimmed.slice(1)));
				else positive.push(picomatch$1(trimmed));
			}
			if (negative.length > 0) {
				if (positive.length > 0) return (entry) => positive.some((f) => f(entry.basename)) && !negative.some((f) => f(entry.basename));
				return (entry) => !negative.some((f) => f(entry.basename));
			}
			return (entry) => positive.some((f) => f(entry.basename));
		}
	};
	var ReaddirpStream = class ReaddirpStream extends Readable$1 {
		static get defaultOptions() {
			return {
				root: ".",
				fileFilter: (path) => true,
				directoryFilter: (path) => true,
				type: FILE_TYPE,
				lstat: false,
				depth: 2147483648,
				alwaysStat: false
			};
		}
		constructor(options = {}) {
			super({
				objectMode: true,
				autoDestroy: true,
				highWaterMark: options.highWaterMark || 4096
			});
			const opts = {
				...ReaddirpStream.defaultOptions,
				...options
			};
			const { root, type } = opts;
			this._fileFilter = normalizeFilter(opts.fileFilter);
			this._directoryFilter = normalizeFilter(opts.directoryFilter);
			const statMethod = opts.lstat ? lstat : stat;
			if (wantBigintFsStats) this._stat = (path) => statMethod(path, { bigint: true });
			else this._stat = statMethod;
			this._maxDepth = opts.depth;
			this._wantsDir = [
				DIR_TYPE,
				FILE_DIR_TYPE,
				EVERYTHING_TYPE
			].includes(type);
			this._wantsFile = [
				FILE_TYPE,
				FILE_DIR_TYPE,
				EVERYTHING_TYPE
			].includes(type);
			this._wantsEverything = type === EVERYTHING_TYPE;
			this._root = sysPath$3.resolve(root);
			this._isDirent = "Dirent" in fs$10 && !opts.alwaysStat;
			this._statsProp = this._isDirent ? "dirent" : "stats";
			this._rdOptions = {
				encoding: "utf8",
				withFileTypes: this._isDirent
			};
			this.parents = [this._exploreDir(root, 1)];
			this.reading = false;
			this.parent = void 0;
		}
		async _read(batch) {
			if (this.reading) return;
			this.reading = true;
			try {
				while (!this.destroyed && batch > 0) {
					const { path, depth, files = [] } = this.parent || {};
					if (files.length > 0) {
						const slice = files.splice(0, batch).map((dirent) => this._formatEntry(dirent, path));
						for (const entry of await Promise.all(slice)) {
							if (this.destroyed) return;
							const entryType = await this._getEntryType(entry);
							if (entryType === "directory" && this._directoryFilter(entry)) {
								if (depth <= this._maxDepth) this.parents.push(this._exploreDir(entry.fullPath, depth + 1));
								if (this._wantsDir) {
									this.push(entry);
									batch--;
								}
							} else if ((entryType === "file" || this._includeAsFile(entry)) && this._fileFilter(entry)) {
								if (this._wantsFile) {
									this.push(entry);
									batch--;
								}
							}
						}
					} else {
						const parent = this.parents.pop();
						if (!parent) {
							this.push(null);
							break;
						}
						this.parent = await parent;
						if (this.destroyed) return;
					}
				}
			} catch (error) {
				this.destroy(error);
			} finally {
				this.reading = false;
			}
		}
		async _exploreDir(path, depth) {
			let files;
			try {
				files = await readdir(path, this._rdOptions);
			} catch (error) {
				this._onError(error);
			}
			return {
				files,
				depth,
				path
			};
		}
		async _formatEntry(dirent, path) {
			let entry;
			try {
				const basename = this._isDirent ? dirent.name : dirent;
				const fullPath = sysPath$3.resolve(sysPath$3.join(path, basename));
				entry = {
					path: sysPath$3.relative(this._root, fullPath),
					fullPath,
					basename
				};
				entry[this._statsProp] = this._isDirent ? dirent : await this._stat(fullPath);
			} catch (err) {
				this._onError(err);
			}
			return entry;
		}
		_onError(err) {
			if (isNormalFlowError(err) && !this.destroyed) this.emit("warn", err);
			else this.destroy(err);
		}
		async _getEntryType(entry) {
			const stats = entry && entry[this._statsProp];
			if (!stats) return;
			if (stats.isFile()) return "file";
			if (stats.isDirectory()) return "directory";
			if (stats && stats.isSymbolicLink()) {
				const full = entry.fullPath;
				try {
					const entryRealPath = await realpath(full);
					const entryRealPathStats = await lstat(entryRealPath);
					if (entryRealPathStats.isFile()) return "file";
					if (entryRealPathStats.isDirectory()) {
						const len = entryRealPath.length;
						if (full.startsWith(entryRealPath) && full.substr(len, 1) === sysPath$3.sep) {
							const recursiveError = /* @__PURE__ */ new Error(`Circular symlink detected: "${full}" points to "${entryRealPath}"`);
							recursiveError.code = RECURSIVE_ERROR_CODE;
							return this._onError(recursiveError);
						}
						return "directory";
					}
				} catch (error) {
					this._onError(error);
				}
			}
		}
		_includeAsFile(entry) {
			const stats = entry && entry[this._statsProp];
			return stats && this._wantsEverything && !stats.isDirectory();
		}
	};
	/**
	* @typedef {Object} ReaddirpArguments
	* @property {Function=} fileFilter
	* @property {Function=} directoryFilter
	* @property {String=} type
	* @property {Number=} depth
	* @property {String=} root
	* @property {Boolean=} lstat
	* @property {Boolean=} bigint
	*/
	/**
	* Main function which ends up calling readdirRec and reads all files and directories in given root recursively.
	* @param {String} root Root directory
	* @param {ReaddirpArguments=} options Options to specify root (start directory), filters and recursion depth
	*/
	const readdirp = (root, options = {}) => {
		let type = options.entryType || options.type;
		if (type === "both") type = FILE_DIR_TYPE;
		if (type) options.type = type;
		if (!root) throw new Error("readdirp: root argument is required. Usage: readdirp(root, options)");
		else if (typeof root !== "string") throw new TypeError("readdirp: root argument must be a string. Usage: readdirp(root, options)");
		else if (type && !ALL_TYPES.includes(type)) throw new Error(`readdirp: Invalid type passed. Use one of ${ALL_TYPES.join(", ")}`);
		options.root = root;
		return new ReaddirpStream(options);
	};
	const readdirpPromise = (root, options = {}) => {
		return new Promise((resolve, reject) => {
			const files = [];
			readdirp(root, options).on("data", (entry) => files.push(entry)).on("end", () => resolve(files)).on("error", (error) => reject(error));
		});
	};
	readdirp.promise = readdirpPromise;
	readdirp.ReaddirpStream = ReaddirpStream;
	readdirp.default = readdirp;
	module.exports = readdirp;
}));
var require_normalize_path = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/*!
	* normalize-path <https://github.com/jonschlinkert/normalize-path>
	*
	* Copyright (c) 2014-2018, Jon Schlinkert.
	* Released under the MIT License.
	*/
	module.exports = function(path, stripTrailing) {
		if (typeof path !== "string") throw new TypeError("expected path to be a string");
		if (path === "\\" || path === "/") return "/";
		var len = path.length;
		if (len <= 1) return path;
		var prefix = "";
		if (len > 4 && path[3] === "\\") {
			var ch = path[2];
			if ((ch === "?" || ch === ".") && path.slice(0, 2) === "\\\\") {
				path = path.slice(2);
				prefix = "//";
			}
		}
		var segs = path.split(/[/\\]+/);
		if (stripTrailing !== false && segs[segs.length - 1] === "") segs.pop();
		return prefix + segs.join("/");
	};
}));
var require_anymatch = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	const picomatch = __require("picomatch");
	const normalizePath = require_normalize_path();
	/**
	* @typedef {(testString: string) => boolean} AnymatchFn
	* @typedef {string|RegExp|AnymatchFn} AnymatchPattern
	* @typedef {AnymatchPattern|AnymatchPattern[]} AnymatchMatcher
	*/
	const BANG = "!";
	const DEFAULT_OPTIONS = { returnIndex: false };
	const arrify = (item) => Array.isArray(item) ? item : [item];
	/**
	* @param {AnymatchPattern} matcher
	* @param {object} options
	* @returns {AnymatchFn}
	*/
	const createPattern = (matcher, options) => {
		if (typeof matcher === "function") return matcher;
		if (typeof matcher === "string") {
			const glob = picomatch(matcher, options);
			return (string) => matcher === string || glob(string);
		}
		if (matcher instanceof RegExp) return (string) => matcher.test(string);
		return (string) => false;
	};
	/**
	* @param {Array<Function>} patterns
	* @param {Array<Function>} negPatterns
	* @param {String|Array} args
	* @param {Boolean} returnIndex
	* @returns {boolean|number}
	*/
	const matchPatterns = (patterns, negPatterns, args, returnIndex) => {
		const isList = Array.isArray(args);
		const _path = isList ? args[0] : args;
		if (!isList && typeof _path !== "string") throw new TypeError("anymatch: second argument must be a string: got " + Object.prototype.toString.call(_path));
		const path = normalizePath(_path, false);
		for (let index = 0; index < negPatterns.length; index++) {
			const nglob = negPatterns[index];
			if (nglob(path)) return returnIndex ? -1 : false;
		}
		const applied = isList && [path].concat(args.slice(1));
		for (let index = 0; index < patterns.length; index++) {
			const pattern = patterns[index];
			if (isList ? pattern(...applied) : pattern(path)) return returnIndex ? index : true;
		}
		return returnIndex ? -1 : false;
	};
	/**
	* @param {AnymatchMatcher} matchers
	* @param {Array|string} testString
	* @param {object} options
	* @returns {boolean|number|Function}
	*/
	const anymatch = (matchers, testString, options = DEFAULT_OPTIONS) => {
		if (matchers == null) throw new TypeError("anymatch: specify first argument");
		const opts = typeof options === "boolean" ? { returnIndex: options } : options;
		const returnIndex = opts.returnIndex || false;
		const mtchers = arrify(matchers);
		const negatedGlobs = mtchers.filter((item) => typeof item === "string" && item.charAt(0) === BANG).map((item) => item.slice(1)).map((item) => picomatch(item, opts));
		const patterns = mtchers.filter((item) => typeof item !== "string" || typeof item === "string" && item.charAt(0) !== BANG).map((matcher) => createPattern(matcher, opts));
		if (testString == null) return (testString, ri = false) => {
			return matchPatterns(patterns, negatedGlobs, testString, typeof ri === "boolean" ? ri : false);
		};
		return matchPatterns(patterns, negatedGlobs, testString, returnIndex);
	};
	anymatch.default = anymatch;
	module.exports = anymatch;
}));
var require_is_extglob = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/*!
	* is-extglob <https://github.com/jonschlinkert/is-extglob>
	*
	* Copyright (c) 2014-2016, Jon Schlinkert.
	* Licensed under the MIT License.
	*/
	module.exports = function isExtglob(str) {
		if (typeof str !== "string" || str === "") return false;
		var match;
		while (match = /(\\).|([@?!+*]\(.*\))/g.exec(str)) {
			if (match[2]) return true;
			str = str.slice(match.index + match[0].length);
		}
		return false;
	};
}));
var require_is_glob = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/*!
	* is-glob <https://github.com/jonschlinkert/is-glob>
	*
	* Copyright (c) 2014-2017, Jon Schlinkert.
	* Released under the MIT License.
	*/
	var isExtglob = require_is_extglob();
	var chars = {
		"{": "}",
		"(": ")",
		"[": "]"
	};
	var strictCheck = function(str) {
		if (str[0] === "!") return true;
		var index = 0;
		var pipeIndex = -2;
		var closeSquareIndex = -2;
		var closeCurlyIndex = -2;
		var closeParenIndex = -2;
		var backSlashIndex = -2;
		while (index < str.length) {
			if (str[index] === "*") return true;
			if (str[index + 1] === "?" && /[\].+)]/.test(str[index])) return true;
			if (closeSquareIndex !== -1 && str[index] === "[" && str[index + 1] !== "]") {
				if (closeSquareIndex < index) closeSquareIndex = str.indexOf("]", index);
				if (closeSquareIndex > index) {
					if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) return true;
					backSlashIndex = str.indexOf("\\", index);
					if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) return true;
				}
			}
			if (closeCurlyIndex !== -1 && str[index] === "{" && str[index + 1] !== "}") {
				closeCurlyIndex = str.indexOf("}", index);
				if (closeCurlyIndex > index) {
					backSlashIndex = str.indexOf("\\", index);
					if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) return true;
				}
			}
			if (closeParenIndex !== -1 && str[index] === "(" && str[index + 1] === "?" && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ")") {
				closeParenIndex = str.indexOf(")", index);
				if (closeParenIndex > index) {
					backSlashIndex = str.indexOf("\\", index);
					if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) return true;
				}
			}
			if (pipeIndex !== -1 && str[index] === "(" && str[index + 1] !== "|") {
				if (pipeIndex < index) pipeIndex = str.indexOf("|", index);
				if (pipeIndex !== -1 && str[pipeIndex + 1] !== ")") {
					closeParenIndex = str.indexOf(")", pipeIndex);
					if (closeParenIndex > pipeIndex) {
						backSlashIndex = str.indexOf("\\", pipeIndex);
						if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) return true;
					}
				}
			}
			if (str[index] === "\\") {
				var open = str[index + 1];
				index += 2;
				var close = chars[open];
				if (close) {
					var n = str.indexOf(close, index);
					if (n !== -1) index = n + 1;
				}
				if (str[index] === "!") return true;
			} else index++;
		}
		return false;
	};
	var relaxedCheck = function(str) {
		if (str[0] === "!") return true;
		var index = 0;
		while (index < str.length) {
			if (/[*?{}()[\]]/.test(str[index])) return true;
			if (str[index] === "\\") {
				var open = str[index + 1];
				index += 2;
				var close = chars[open];
				if (close) {
					var n = str.indexOf(close, index);
					if (n !== -1) index = n + 1;
				}
				if (str[index] === "!") return true;
			} else index++;
		}
		return false;
	};
	module.exports = function isGlob(str, options) {
		if (typeof str !== "string" || str === "") return false;
		if (isExtglob(str)) return true;
		var check = strictCheck;
		if (options && options.strict === false) check = relaxedCheck;
		return check(str);
	};
}));
var require_glob_parent = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isGlob = require_is_glob();
	var pathPosixDirname = __require("path").posix.dirname;
	var isWin32 = __require("os").platform() === "win32";
	var slash = "/";
	var backslash = /\\/g;
	var enclosure = /[\{\[].*[\}\]]$/;
	var globby = /(^|[^\\])([\{\[]|\([^\)]+$)/;
	var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
	/**
	* @param {string} str
	* @param {Object} opts
	* @param {boolean} [opts.flipBackslashes=true]
	* @returns {string}
	*/
	module.exports = function globParent(str, opts) {
		if (Object.assign({ flipBackslashes: true }, opts).flipBackslashes && isWin32 && str.indexOf(slash) < 0) str = str.replace(backslash, slash);
		if (enclosure.test(str)) str += slash;
		str += "a";
		do
			str = pathPosixDirname(str);
		while (isGlob(str) || globby.test(str));
		return str.replace(escaped, "$1");
	};
}));
var require_utils = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.isInteger = (num) => {
		if (typeof num === "number") return Number.isInteger(num);
		if (typeof num === "string" && num.trim() !== "") return Number.isInteger(Number(num));
		return false;
	};
	/**
	* Find a node of the given type
	*/
	exports.find = (node, type) => node.nodes.find((node) => node.type === type);
	/**
	* Find a node of the given type
	*/
	exports.exceedsLimit = (min, max, step = 1, limit) => {
		if (limit === false) return false;
		if (!exports.isInteger(min) || !exports.isInteger(max)) return false;
		return (Number(max) - Number(min)) / Number(step) >= limit;
	};
	/**
	* Escape the given node with '\\' before node.value
	*/
	exports.escapeNode = (block, n = 0, type) => {
		const node = block.nodes[n];
		if (!node) return;
		if (type && node.type === type || node.type === "open" || node.type === "close") {
			if (node.escaped !== true) {
				node.value = "\\" + node.value;
				node.escaped = true;
			}
		}
	};
	/**
	* Returns true if the given brace node should be enclosed in literal braces
	*/
	exports.encloseBrace = (node) => {
		if (node.type !== "brace") return false;
		if (node.commas >> 0 + node.ranges >> 0 === 0) {
			node.invalid = true;
			return true;
		}
		return false;
	};
	/**
	* Returns true if a brace node is invalid.
	*/
	exports.isInvalidBrace = (block) => {
		if (block.type !== "brace") return false;
		if (block.invalid === true || block.dollar) return true;
		if (block.commas >> 0 + block.ranges >> 0 === 0) {
			block.invalid = true;
			return true;
		}
		if (block.open !== true || block.close !== true) {
			block.invalid = true;
			return true;
		}
		return false;
	};
	/**
	* Returns true if a node is an open or close node
	*/
	exports.isOpenOrClose = (node) => {
		if (node.type === "open" || node.type === "close") return true;
		return node.open === true || node.close === true;
	};
	/**
	* Reduce an array of text nodes.
	*/
	exports.reduce = (nodes) => nodes.reduce((acc, node) => {
		if (node.type === "text") acc.push(node.value);
		if (node.type === "range") node.type = "text";
		return acc;
	}, []);
	/**
	* Flatten an array
	*/
	exports.flatten = (...args) => {
		const result = [];
		const flat = (arr) => {
			for (let i = 0; i < arr.length; i++) {
				const ele = arr[i];
				if (Array.isArray(ele)) {
					flat(ele);
					continue;
				}
				if (ele !== void 0) result.push(ele);
			}
			return result;
		};
		flat(args);
		return result;
	};
}));
var require_stringify$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const utils = require_utils();
	module.exports = (ast, options = {}) => {
		const stringify = (node, parent = {}) => {
			const invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
			const invalidNode = node.invalid === true && options.escapeInvalid === true;
			let output = "";
			if (node.value) {
				if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) return "\\" + node.value;
				return node.value;
			}
			if (node.value) return node.value;
			if (node.nodes) for (const child of node.nodes) output += stringify(child);
			return output;
		};
		return stringify(ast);
	};
}));
/*!
* is-number <https://github.com/jonschlinkert/is-number>
*
* Copyright (c) 2014-present, Jon Schlinkert.
* Released under the MIT License.
*/
var require_is_number = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function(num) {
		if (typeof num === "number") return num - num === 0;
		if (typeof num === "string" && num.trim() !== "") return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
		return false;
	};
}));
/*!
* to-regex-range <https://github.com/micromatch/to-regex-range>
*
* Copyright (c) 2015-present, Jon Schlinkert.
* Released under the MIT License.
*/
var require_to_regex_range = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const isNumber = require_is_number();
	const toRegexRange = (min, max, options) => {
		if (isNumber(min) === false) throw new TypeError("toRegexRange: expected the first argument to be a number");
		if (max === void 0 || min === max) return String(min);
		if (isNumber(max) === false) throw new TypeError("toRegexRange: expected the second argument to be a number.");
		let opts = {
			relaxZeros: true,
			...options
		};
		if (typeof opts.strictZeros === "boolean") opts.relaxZeros = opts.strictZeros === false;
		let relax = String(opts.relaxZeros);
		let shorthand = String(opts.shorthand);
		let capture = String(opts.capture);
		let wrap = String(opts.wrap);
		let cacheKey = min + ":" + max + "=" + relax + shorthand + capture + wrap;
		if (toRegexRange.cache.hasOwnProperty(cacheKey)) return toRegexRange.cache[cacheKey].result;
		let a = Math.min(min, max);
		let b = Math.max(min, max);
		if (Math.abs(a - b) === 1) {
			let result = min + "|" + max;
			if (opts.capture) return `(${result})`;
			if (opts.wrap === false) return result;
			return `(?:${result})`;
		}
		let isPadded = hasPadding(min) || hasPadding(max);
		let state = {
			min,
			max,
			a,
			b
		};
		let positives = [];
		let negatives = [];
		if (isPadded) {
			state.isPadded = isPadded;
			state.maxLen = String(state.max).length;
		}
		if (a < 0) {
			negatives = splitToPatterns(b < 0 ? Math.abs(b) : 1, Math.abs(a), state, opts);
			a = state.a = 0;
		}
		if (b >= 0) positives = splitToPatterns(a, b, state, opts);
		state.negatives = negatives;
		state.positives = positives;
		state.result = collatePatterns(negatives, positives, opts);
		if (opts.capture === true) state.result = `(${state.result})`;
		else if (opts.wrap !== false && positives.length + negatives.length > 1) state.result = `(?:${state.result})`;
		toRegexRange.cache[cacheKey] = state;
		return state.result;
	};
	function collatePatterns(neg, pos, options) {
		let onlyNegative = filterPatterns(neg, pos, "-", false, options) || [];
		let onlyPositive = filterPatterns(pos, neg, "", false, options) || [];
		let intersected = filterPatterns(neg, pos, "-?", true, options) || [];
		return onlyNegative.concat(intersected).concat(onlyPositive).join("|");
	}
	function splitToRanges(min, max) {
		let nines = 1;
		let zeros = 1;
		let stop = countNines(min, nines);
		let stops = /* @__PURE__ */ new Set([max]);
		while (min <= stop && stop <= max) {
			stops.add(stop);
			nines += 1;
			stop = countNines(min, nines);
		}
		stop = countZeros(max + 1, zeros) - 1;
		while (min < stop && stop <= max) {
			stops.add(stop);
			zeros += 1;
			stop = countZeros(max + 1, zeros) - 1;
		}
		stops = [...stops];
		stops.sort(compare);
		return stops;
	}
	/**
	* Convert a range to a regex pattern
	* @param {Number} `start`
	* @param {Number} `stop`
	* @return {String}
	*/
	function rangeToPattern(start, stop, options) {
		if (start === stop) return {
			pattern: start,
			count: [],
			digits: 0
		};
		let zipped = zip(start, stop);
		let digits = zipped.length;
		let pattern = "";
		let count = 0;
		for (let i = 0; i < digits; i++) {
			let [startDigit, stopDigit] = zipped[i];
			if (startDigit === stopDigit) pattern += startDigit;
			else if (startDigit !== "0" || stopDigit !== "9") pattern += toCharacterClass(startDigit, stopDigit, options);
			else count++;
		}
		if (count) pattern += options.shorthand === true ? "\\d" : "[0-9]";
		return {
			pattern,
			count: [count],
			digits
		};
	}
	function splitToPatterns(min, max, tok, options) {
		let ranges = splitToRanges(min, max);
		let tokens = [];
		let start = min;
		let prev;
		for (let i = 0; i < ranges.length; i++) {
			let max = ranges[i];
			let obj = rangeToPattern(String(start), String(max), options);
			let zeros = "";
			if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
				if (prev.count.length > 1) prev.count.pop();
				prev.count.push(obj.count[0]);
				prev.string = prev.pattern + toQuantifier(prev.count);
				start = max + 1;
				continue;
			}
			if (tok.isPadded) zeros = padZeros(max, tok, options);
			obj.string = zeros + obj.pattern + toQuantifier(obj.count);
			tokens.push(obj);
			start = max + 1;
			prev = obj;
		}
		return tokens;
	}
	function filterPatterns(arr, comparison, prefix, intersection, options) {
		let result = [];
		for (let ele of arr) {
			let { string } = ele;
			if (!intersection && !contains(comparison, "string", string)) result.push(prefix + string);
			if (intersection && contains(comparison, "string", string)) result.push(prefix + string);
		}
		return result;
	}
	/**
	* Zip strings
	*/
	function zip(a, b) {
		let arr = [];
		for (let i = 0; i < a.length; i++) arr.push([a[i], b[i]]);
		return arr;
	}
	function compare(a, b) {
		return a > b ? 1 : b > a ? -1 : 0;
	}
	function contains(arr, key, val) {
		return arr.some((ele) => ele[key] === val);
	}
	function countNines(min, len) {
		return Number(String(min).slice(0, -len) + "9".repeat(len));
	}
	function countZeros(integer, zeros) {
		return integer - integer % Math.pow(10, zeros);
	}
	function toQuantifier(digits) {
		let [start = 0, stop = ""] = digits;
		if (stop || start > 1) return `{${start + (stop ? "," + stop : "")}}`;
		return "";
	}
	function toCharacterClass(a, b, options) {
		return `[${a}${b - a === 1 ? "" : "-"}${b}]`;
	}
	function hasPadding(str) {
		return /^-?(0+)\d/.test(str);
	}
	function padZeros(value, tok, options) {
		if (!tok.isPadded) return value;
		let diff = Math.abs(tok.maxLen - String(value).length);
		let relax = options.relaxZeros !== false;
		switch (diff) {
			case 0: return "";
			case 1: return relax ? "0?" : "0";
			case 2: return relax ? "0{0,2}" : "00";
			default: return relax ? `0{0,${diff}}` : `0{${diff}}`;
		}
	}
	/**
	* Cache
	*/
	toRegexRange.cache = {};
	toRegexRange.clearCache = () => toRegexRange.cache = {};
	/**
	* Expose `toRegexRange`
	*/
	module.exports = toRegexRange;
}));
/*!
* fill-range <https://github.com/jonschlinkert/fill-range>
*
* Copyright (c) 2014-present, Jon Schlinkert.
* Licensed under the MIT License.
*/
var require_fill_range = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const util = __require("util");
	const toRegexRange = require_to_regex_range();
	const isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
	const transform = (toNumber) => {
		return (value) => toNumber === true ? Number(value) : String(value);
	};
	const isValidValue = (value) => {
		return typeof value === "number" || typeof value === "string" && value !== "";
	};
	const isNumber = (num) => Number.isInteger(+num);
	const zeros = (input) => {
		let value = `${input}`;
		let index = -1;
		if (value[0] === "-") value = value.slice(1);
		if (value === "0") return false;
		while (value[++index] === "0");
		return index > 0;
	};
	const stringify = (start, end, options) => {
		if (typeof start === "string" || typeof end === "string") return true;
		return options.stringify === true;
	};
	const pad = (input, maxLength, toNumber) => {
		if (maxLength > 0) {
			let dash = input[0] === "-" ? "-" : "";
			if (dash) input = input.slice(1);
			input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
		}
		if (toNumber === false) return String(input);
		return input;
	};
	const toMaxLen = (input, maxLength) => {
		let negative = input[0] === "-" ? "-" : "";
		if (negative) {
			input = input.slice(1);
			maxLength--;
		}
		while (input.length < maxLength) input = "0" + input;
		return negative ? "-" + input : input;
	};
	const toSequence = (parts, options, maxLen) => {
		parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
		parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
		let prefix = options.capture ? "" : "?:";
		let positives = "";
		let negatives = "";
		let result;
		if (parts.positives.length) positives = parts.positives.map((v) => toMaxLen(String(v), maxLen)).join("|");
		if (parts.negatives.length) negatives = `-(${prefix}${parts.negatives.map((v) => toMaxLen(String(v), maxLen)).join("|")})`;
		if (positives && negatives) result = `${positives}|${negatives}`;
		else result = positives || negatives;
		if (options.wrap) return `(${prefix}${result})`;
		return result;
	};
	const toRange = (a, b, isNumbers, options) => {
		if (isNumbers) return toRegexRange(a, b, {
			wrap: false,
			...options
		});
		let start = String.fromCharCode(a);
		if (a === b) return start;
		return `[${start}-${String.fromCharCode(b)}]`;
	};
	const toRegex = (start, end, options) => {
		if (Array.isArray(start)) return options.wrap === true ? `(${options.capture ? "" : "?:"}${start.join("|")})` : start.join("|");
		return toRegexRange(start, end, options);
	};
	const rangeError = (...args) => {
		return /* @__PURE__ */ new RangeError("Invalid range arguments: " + util.inspect(...args));
	};
	const invalidRange = (start, end, options) => {
		if (options.strictRanges === true) throw rangeError([start, end]);
		return [];
	};
	const invalidStep = (step, options) => {
		if (options.strictRanges === true) throw new TypeError(`Expected step "${step}" to be a number`);
		return [];
	};
	const fillNumbers = (start, end, step = 1, options = {}) => {
		let a = Number(start);
		let b = Number(end);
		if (!Number.isInteger(a) || !Number.isInteger(b)) {
			if (options.strictRanges === true) throw rangeError([start, end]);
			return [];
		}
		if (a === 0) a = 0;
		if (b === 0) b = 0;
		let descending = a > b;
		let startString = String(start);
		let endString = String(end);
		let stepString = String(step);
		step = Math.max(Math.abs(step), 1);
		let padded = zeros(startString) || zeros(endString) || zeros(stepString);
		let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
		let toNumber = padded === false && stringify(start, end, options) === false;
		let format = options.transform || transform(toNumber);
		if (options.toRegex && step === 1) return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
		let parts = {
			negatives: [],
			positives: []
		};
		let push = (num) => parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
		let range = [];
		let index = 0;
		while (descending ? a >= b : a <= b) {
			if (options.toRegex === true && step > 1) push(a);
			else range.push(pad(format(a, index), maxLen, toNumber));
			a = descending ? a - step : a + step;
			index++;
		}
		if (options.toRegex === true) return step > 1 ? toSequence(parts, options, maxLen) : toRegex(range, null, {
			wrap: false,
			...options
		});
		return range;
	};
	const fillLetters = (start, end, step = 1, options = {}) => {
		if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) return invalidRange(start, end, options);
		let format = options.transform || ((val) => String.fromCharCode(val));
		let a = `${start}`.charCodeAt(0);
		let b = `${end}`.charCodeAt(0);
		let descending = a > b;
		let min = Math.min(a, b);
		let max = Math.max(a, b);
		if (options.toRegex && step === 1) return toRange(min, max, false, options);
		let range = [];
		let index = 0;
		while (descending ? a >= b : a <= b) {
			range.push(format(a, index));
			a = descending ? a - step : a + step;
			index++;
		}
		if (options.toRegex === true) return toRegex(range, null, {
			wrap: false,
			options
		});
		return range;
	};
	const fill = (start, end, step, options = {}) => {
		if (end == null && isValidValue(start)) return [start];
		if (!isValidValue(start) || !isValidValue(end)) return invalidRange(start, end, options);
		if (typeof step === "function") return fill(start, end, 1, { transform: step });
		if (isObject(step)) return fill(start, end, 0, step);
		let opts = { ...options };
		if (opts.capture === true) opts.wrap = true;
		step = step || opts.step || 1;
		if (!isNumber(step)) {
			if (step != null && !isObject(step)) return invalidStep(step, opts);
			return fill(start, end, 1, step);
		}
		if (isNumber(start) && isNumber(end)) return fillNumbers(start, end, step, opts);
		return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
	};
	module.exports = fill;
}));
var require_compile = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const fill = require_fill_range();
	const utils = require_utils();
	const compile = (ast, options = {}) => {
		const walk = (node, parent = {}) => {
			const invalid = utils.isInvalidBrace(parent) === true || (node.invalid === true && options.escapeInvalid === true) === true;
			const prefix = options.escapeInvalid === true ? "\\" : "";
			let output = "";
			if (node.isOpen === true) return prefix + node.value;
			if (node.isClose === true) {
				console.log("node.isClose", prefix, node.value);
				return prefix + node.value;
			}
			if (node.type === "open") return invalid ? prefix + node.value : "(";
			if (node.type === "close") return invalid ? prefix + node.value : ")";
			if (node.type === "comma") return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
			if (node.value) return node.value;
			if (node.nodes && node.ranges > 0) {
				const args = utils.reduce(node.nodes);
				const range = fill(...args, {
					...options,
					wrap: false,
					toRegex: true,
					strictZeros: true
				});
				if (range.length !== 0) return args.length > 1 && range.length > 1 ? `(${range})` : range;
			}
			if (node.nodes) for (const child of node.nodes) output += walk(child, node);
			return output;
		};
		return walk(ast);
	};
	module.exports = compile;
}));
var require_expand = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const fill = require_fill_range();
	const stringify = require_stringify$1();
	const utils = require_utils();
	const append = (queue = "", stash = "", enclose = false) => {
		const result = [];
		queue = [].concat(queue);
		stash = [].concat(stash);
		if (!stash.length) return queue;
		if (!queue.length) return enclose ? utils.flatten(stash).map((ele) => `{${ele}}`) : stash;
		for (const item of queue) if (Array.isArray(item)) for (const value of item) result.push(append(value, stash, enclose));
		else for (let ele of stash) {
			if (enclose === true && typeof ele === "string") ele = `{${ele}}`;
			result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
		}
		return utils.flatten(result);
	};
	const expand = (ast, options = {}) => {
		const rangeLimit = options.rangeLimit === void 0 ? 1e3 : options.rangeLimit;
		const walk = (node, parent = {}) => {
			node.queue = [];
			let p = parent;
			let q = parent.queue;
			while (p.type !== "brace" && p.type !== "root" && p.parent) {
				p = p.parent;
				q = p.queue;
			}
			if (node.invalid || node.dollar) {
				q.push(append(q.pop(), stringify(node, options)));
				return;
			}
			if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
				q.push(append(q.pop(), ["{}"]));
				return;
			}
			if (node.nodes && node.ranges > 0) {
				const args = utils.reduce(node.nodes);
				if (utils.exceedsLimit(...args, options.step, rangeLimit)) throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
				let range = fill(...args, options);
				if (range.length === 0) range = stringify(node, options);
				q.push(append(q.pop(), range));
				node.nodes = [];
				return;
			}
			const enclose = utils.encloseBrace(node);
			let queue = node.queue;
			let block = node;
			while (block.type !== "brace" && block.type !== "root" && block.parent) {
				block = block.parent;
				queue = block.queue;
			}
			for (let i = 0; i < node.nodes.length; i++) {
				const child = node.nodes[i];
				if (child.type === "comma" && node.type === "brace") {
					if (i === 1) queue.push("");
					queue.push("");
					continue;
				}
				if (child.type === "close") {
					q.push(append(q.pop(), queue, enclose));
					continue;
				}
				if (child.value && child.type !== "open") {
					queue.push(append(queue.pop(), child.value));
					continue;
				}
				if (child.nodes) walk(child, node);
			}
			return queue;
		};
		return utils.flatten(walk(ast));
	};
	module.exports = expand;
}));
var require_constants$2 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		MAX_LENGTH: 1e4,
		CHAR_0: "0",
		CHAR_9: "9",
		CHAR_UPPERCASE_A: "A",
		CHAR_LOWERCASE_A: "a",
		CHAR_UPPERCASE_Z: "Z",
		CHAR_LOWERCASE_Z: "z",
		CHAR_LEFT_PARENTHESES: "(",
		CHAR_RIGHT_PARENTHESES: ")",
		CHAR_ASTERISK: "*",
		CHAR_AMPERSAND: "&",
		CHAR_AT: "@",
		CHAR_BACKSLASH: "\\",
		CHAR_BACKTICK: "`",
		CHAR_CARRIAGE_RETURN: "\r",
		CHAR_CIRCUMFLEX_ACCENT: "^",
		CHAR_COLON: ":",
		CHAR_COMMA: ",",
		CHAR_DOLLAR: "$",
		CHAR_DOT: ".",
		CHAR_DOUBLE_QUOTE: "\"",
		CHAR_EQUAL: "=",
		CHAR_EXCLAMATION_MARK: "!",
		CHAR_FORM_FEED: "\f",
		CHAR_FORWARD_SLASH: "/",
		CHAR_HASH: "#",
		CHAR_HYPHEN_MINUS: "-",
		CHAR_LEFT_ANGLE_BRACKET: "<",
		CHAR_LEFT_CURLY_BRACE: "{",
		CHAR_LEFT_SQUARE_BRACKET: "[",
		CHAR_LINE_FEED: "\n",
		CHAR_NO_BREAK_SPACE: "\xA0",
		CHAR_PERCENT: "%",
		CHAR_PLUS: "+",
		CHAR_QUESTION_MARK: "?",
		CHAR_RIGHT_ANGLE_BRACKET: ">",
		CHAR_RIGHT_CURLY_BRACE: "}",
		CHAR_RIGHT_SQUARE_BRACKET: "]",
		CHAR_SEMICOLON: ";",
		CHAR_SINGLE_QUOTE: "'",
		CHAR_SPACE: " ",
		CHAR_TAB: "	",
		CHAR_UNDERSCORE: "_",
		CHAR_VERTICAL_LINE: "|",
		CHAR_ZERO_WIDTH_NOBREAK_SPACE: "﻿"
	};
}));
var require_parse$2 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const stringify = require_stringify$1();
	/**
	* Constants
	*/
	const { MAX_LENGTH, CHAR_BACKSLASH, CHAR_BACKTICK, CHAR_COMMA, CHAR_DOT, CHAR_LEFT_PARENTHESES, CHAR_RIGHT_PARENTHESES, CHAR_LEFT_CURLY_BRACE, CHAR_RIGHT_CURLY_BRACE, CHAR_LEFT_SQUARE_BRACKET, CHAR_RIGHT_SQUARE_BRACKET, CHAR_DOUBLE_QUOTE, CHAR_SINGLE_QUOTE, CHAR_NO_BREAK_SPACE, CHAR_ZERO_WIDTH_NOBREAK_SPACE } = require_constants$2();
	/**
	* parse
	*/
	const parse = (input, options = {}) => {
		if (typeof input !== "string") throw new TypeError("Expected a string");
		const opts = options || {};
		const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
		if (input.length > max) throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
		const ast = {
			type: "root",
			input,
			nodes: []
		};
		const stack = [ast];
		let block = ast;
		let prev = ast;
		let brackets = 0;
		const length = input.length;
		let index = 0;
		let depth = 0;
		let value;
		/**
		* Helpers
		*/
		const advance = () => input[index++];
		const push = (node) => {
			if (node.type === "text" && prev.type === "dot") prev.type = "text";
			if (prev && prev.type === "text" && node.type === "text") {
				prev.value += node.value;
				return;
			}
			block.nodes.push(node);
			node.parent = block;
			node.prev = prev;
			prev = node;
			return node;
		};
		push({ type: "bos" });
		while (index < length) {
			block = stack[stack.length - 1];
			value = advance();
			/**
			* Invalid chars
			*/
			if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) continue;
			/**
			* Escaped chars
			*/
			if (value === CHAR_BACKSLASH) {
				push({
					type: "text",
					value: (options.keepEscaping ? value : "") + advance()
				});
				continue;
			}
			/**
			* Right square bracket (literal): ']'
			*/
			if (value === CHAR_RIGHT_SQUARE_BRACKET) {
				push({
					type: "text",
					value: "\\" + value
				});
				continue;
			}
			/**
			* Left square bracket: '['
			*/
			if (value === CHAR_LEFT_SQUARE_BRACKET) {
				brackets++;
				let next;
				while (index < length && (next = advance())) {
					value += next;
					if (next === CHAR_LEFT_SQUARE_BRACKET) {
						brackets++;
						continue;
					}
					if (next === CHAR_BACKSLASH) {
						value += advance();
						continue;
					}
					if (next === CHAR_RIGHT_SQUARE_BRACKET) {
						brackets--;
						if (brackets === 0) break;
					}
				}
				push({
					type: "text",
					value
				});
				continue;
			}
			/**
			* Parentheses
			*/
			if (value === CHAR_LEFT_PARENTHESES) {
				block = push({
					type: "paren",
					nodes: []
				});
				stack.push(block);
				push({
					type: "text",
					value
				});
				continue;
			}
			if (value === CHAR_RIGHT_PARENTHESES) {
				if (block.type !== "paren") {
					push({
						type: "text",
						value
					});
					continue;
				}
				block = stack.pop();
				push({
					type: "text",
					value
				});
				block = stack[stack.length - 1];
				continue;
			}
			/**
			* Quotes: '|"|`
			*/
			if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
				const open = value;
				let next;
				if (options.keepQuotes !== true) value = "";
				while (index < length && (next = advance())) {
					if (next === CHAR_BACKSLASH) {
						value += next + advance();
						continue;
					}
					if (next === open) {
						if (options.keepQuotes === true) value += next;
						break;
					}
					value += next;
				}
				push({
					type: "text",
					value
				});
				continue;
			}
			/**
			* Left curly brace: '{'
			*/
			if (value === CHAR_LEFT_CURLY_BRACE) {
				depth++;
				block = push({
					type: "brace",
					open: true,
					close: false,
					dollar: prev.value && prev.value.slice(-1) === "$" || block.dollar === true,
					depth,
					commas: 0,
					ranges: 0,
					nodes: []
				});
				stack.push(block);
				push({
					type: "open",
					value
				});
				continue;
			}
			/**
			* Right curly brace: '}'
			*/
			if (value === CHAR_RIGHT_CURLY_BRACE) {
				if (block.type !== "brace") {
					push({
						type: "text",
						value
					});
					continue;
				}
				const type = "close";
				block = stack.pop();
				block.close = true;
				push({
					type,
					value
				});
				depth--;
				block = stack[stack.length - 1];
				continue;
			}
			/**
			* Comma: ','
			*/
			if (value === CHAR_COMMA && depth > 0) {
				if (block.ranges > 0) {
					block.ranges = 0;
					const open = block.nodes.shift();
					block.nodes = [open, {
						type: "text",
						value: stringify(block)
					}];
				}
				push({
					type: "comma",
					value
				});
				block.commas++;
				continue;
			}
			/**
			* Dot: '.'
			*/
			if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
				const siblings = block.nodes;
				if (depth === 0 || siblings.length === 0) {
					push({
						type: "text",
						value
					});
					continue;
				}
				if (prev.type === "dot") {
					block.range = [];
					prev.value += value;
					prev.type = "range";
					if (block.nodes.length !== 3 && block.nodes.length !== 5) {
						block.invalid = true;
						block.ranges = 0;
						prev.type = "text";
						continue;
					}
					block.ranges++;
					block.args = [];
					continue;
				}
				if (prev.type === "range") {
					siblings.pop();
					const before = siblings[siblings.length - 1];
					before.value += prev.value + value;
					prev = before;
					block.ranges--;
					continue;
				}
				push({
					type: "dot",
					value
				});
				continue;
			}
			/**
			* Text
			*/
			push({
				type: "text",
				value
			});
		}
		do {
			block = stack.pop();
			if (block.type !== "root") {
				block.nodes.forEach((node) => {
					if (!node.nodes) {
						if (node.type === "open") node.isOpen = true;
						if (node.type === "close") node.isClose = true;
						if (!node.nodes) node.type = "text";
						node.invalid = true;
					}
				});
				const parent = stack[stack.length - 1];
				const index = parent.nodes.indexOf(block);
				parent.nodes.splice(index, 1, ...block.nodes);
			}
		} while (stack.length > 0);
		push({ type: "eos" });
		return ast;
	};
	module.exports = parse;
}));
var require_braces = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const stringify = require_stringify$1();
	const compile = require_compile();
	const expand = require_expand();
	const parse = require_parse$2();
	/**
	* Expand the given pattern or create a regex-compatible string.
	*
	* ```js
	* const braces = require('braces');
	* console.log(braces('{a,b,c}', { compile: true })); //=> ['(a|b|c)']
	* console.log(braces('{a,b,c}')); //=> ['a', 'b', 'c']
	* ```
	* @param {String} `str`
	* @param {Object} `options`
	* @return {String}
	* @api public
	*/
	const braces = (input, options = {}) => {
		let output = [];
		if (Array.isArray(input)) for (const pattern of input) {
			const result = braces.create(pattern, options);
			if (Array.isArray(result)) output.push(...result);
			else output.push(result);
		}
		else output = [].concat(braces.create(input, options));
		if (options && options.expand === true && options.nodupes === true) output = [...new Set(output)];
		return output;
	};
	/**
	* Parse the given `str` with the given `options`.
	*
	* ```js
	* // braces.parse(pattern, [, options]);
	* const ast = braces.parse('a/{b,c}/d');
	* console.log(ast);
	* ```
	* @param {String} pattern Brace pattern to parse
	* @param {Object} options
	* @return {Object} Returns an AST
	* @api public
	*/
	braces.parse = (input, options = {}) => parse(input, options);
	/**
	* Creates a braces string from an AST, or an AST node.
	*
	* ```js
	* const braces = require('braces');
	* let ast = braces.parse('foo/{a,b}/bar');
	* console.log(stringify(ast.nodes[2])); //=> '{a,b}'
	* ```
	* @param {String} `input` Brace pattern or AST.
	* @param {Object} `options`
	* @return {Array} Returns an array of expanded values.
	* @api public
	*/
	braces.stringify = (input, options = {}) => {
		if (typeof input === "string") return stringify(braces.parse(input, options), options);
		return stringify(input, options);
	};
	/**
	* Compiles a brace pattern into a regex-compatible, optimized string.
	* This method is called by the main [braces](#braces) function by default.
	*
	* ```js
	* const braces = require('braces');
	* console.log(braces.compile('a/{b,c}/d'));
	* //=> ['a/(b|c)/d']
	* ```
	* @param {String} `input` Brace pattern or AST.
	* @param {Object} `options`
	* @return {Array} Returns an array of expanded values.
	* @api public
	*/
	braces.compile = (input, options = {}) => {
		if (typeof input === "string") input = braces.parse(input, options);
		return compile(input, options);
	};
	/**
	* Expands a brace pattern into an array. This method is called by the
	* main [braces](#braces) function when `options.expand` is true. Before
	* using this method it's recommended that you read the [performance notes](#performance))
	* and advantages of using [.compile](#compile) instead.
	*
	* ```js
	* const braces = require('braces');
	* console.log(braces.expand('a/{b,c}/d'));
	* //=> ['a/b/d', 'a/c/d'];
	* ```
	* @param {String} `pattern` Brace pattern
	* @param {Object} `options`
	* @return {Array} Returns an array of expanded values.
	* @api public
	*/
	braces.expand = (input, options = {}) => {
		if (typeof input === "string") input = braces.parse(input, options);
		let result = expand(input, options);
		if (options.noempty === true) result = result.filter(Boolean);
		if (options.nodupes === true) result = [...new Set(result)];
		return result;
	};
	/**
	* Processes a brace pattern and returns either an expanded array
	* (if `options.expand` is true), a highly optimized regex-compatible string.
	* This method is called by the main [braces](#braces) function.
	*
	* ```js
	* const braces = require('braces');
	* console.log(braces.create('user-{200..300}/project-{a,b,c}-{1..10}'))
	* //=> 'user-(20[0-9]|2[1-9][0-9]|300)/project-(a|b|c)-([1-9]|10)'
	* ```
	* @param {String} `pattern` Brace pattern
	* @param {Object} `options`
	* @return {Array} Returns an array of expanded values.
	* @api public
	*/
	braces.create = (input, options = {}) => {
		if (input === "" || input.length < 3) return [input];
		return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
	};
	/**
	* Expose "braces"
	*/
	module.exports = braces;
}));
var require_binary_extensions$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = [
		"3dm",
		"3ds",
		"3g2",
		"3gp",
		"7z",
		"a",
		"aac",
		"adp",
		"afdesign",
		"afphoto",
		"afpub",
		"ai",
		"aif",
		"aiff",
		"alz",
		"ape",
		"apk",
		"appimage",
		"ar",
		"arj",
		"asf",
		"au",
		"avi",
		"bak",
		"baml",
		"bh",
		"bin",
		"bk",
		"bmp",
		"btif",
		"bz2",
		"bzip2",
		"cab",
		"caf",
		"cgm",
		"class",
		"cmx",
		"cpio",
		"cr2",
		"cur",
		"dat",
		"dcm",
		"deb",
		"dex",
		"djvu",
		"dll",
		"dmg",
		"dng",
		"doc",
		"docm",
		"docx",
		"dot",
		"dotm",
		"dra",
		"DS_Store",
		"dsk",
		"dts",
		"dtshd",
		"dvb",
		"dwg",
		"dxf",
		"ecelp4800",
		"ecelp7470",
		"ecelp9600",
		"egg",
		"eol",
		"eot",
		"epub",
		"exe",
		"f4v",
		"fbs",
		"fh",
		"fla",
		"flac",
		"flatpak",
		"fli",
		"flv",
		"fpx",
		"fst",
		"fvt",
		"g3",
		"gh",
		"gif",
		"graffle",
		"gz",
		"gzip",
		"h261",
		"h263",
		"h264",
		"icns",
		"ico",
		"ief",
		"img",
		"ipa",
		"iso",
		"jar",
		"jpeg",
		"jpg",
		"jpgv",
		"jpm",
		"jxr",
		"key",
		"ktx",
		"lha",
		"lib",
		"lvp",
		"lz",
		"lzh",
		"lzma",
		"lzo",
		"m3u",
		"m4a",
		"m4v",
		"mar",
		"mdi",
		"mht",
		"mid",
		"midi",
		"mj2",
		"mka",
		"mkv",
		"mmr",
		"mng",
		"mobi",
		"mov",
		"movie",
		"mp3",
		"mp4",
		"mp4a",
		"mpeg",
		"mpg",
		"mpga",
		"mxu",
		"nef",
		"npx",
		"numbers",
		"nupkg",
		"o",
		"odp",
		"ods",
		"odt",
		"oga",
		"ogg",
		"ogv",
		"otf",
		"ott",
		"pages",
		"pbm",
		"pcx",
		"pdb",
		"pdf",
		"pea",
		"pgm",
		"pic",
		"png",
		"pnm",
		"pot",
		"potm",
		"potx",
		"ppa",
		"ppam",
		"ppm",
		"pps",
		"ppsm",
		"ppsx",
		"ppt",
		"pptm",
		"pptx",
		"psd",
		"pya",
		"pyc",
		"pyo",
		"pyv",
		"qt",
		"rar",
		"ras",
		"raw",
		"resources",
		"rgb",
		"rip",
		"rlc",
		"rmf",
		"rmvb",
		"rpm",
		"rtf",
		"rz",
		"s3m",
		"s7z",
		"scpt",
		"sgi",
		"shar",
		"snap",
		"sil",
		"sketch",
		"slk",
		"smv",
		"snk",
		"so",
		"stl",
		"suo",
		"sub",
		"swf",
		"tar",
		"tbz",
		"tbz2",
		"tga",
		"tgz",
		"thmx",
		"tif",
		"tiff",
		"tlz",
		"ttc",
		"ttf",
		"txz",
		"udf",
		"uvh",
		"uvi",
		"uvm",
		"uvp",
		"uvs",
		"uvu",
		"viv",
		"vob",
		"war",
		"wav",
		"wax",
		"wbmp",
		"wdp",
		"weba",
		"webm",
		"webp",
		"whl",
		"wim",
		"wm",
		"wma",
		"wmv",
		"wmx",
		"woff",
		"woff2",
		"wrm",
		"wvx",
		"xbm",
		"xif",
		"xla",
		"xlam",
		"xls",
		"xlsb",
		"xlsm",
		"xlsx",
		"xlt",
		"xltm",
		"xltx",
		"xm",
		"xmind",
		"xpi",
		"xpm",
		"xwd",
		"xz",
		"z",
		"zip",
		"zipx"
	];
}));
var require_binary_extensions = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_binary_extensions$1();
}));
var require_is_binary_path = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const path$10 = __require("path");
	const binaryExtensions = require_binary_extensions();
	const extensions = new Set(binaryExtensions);
	module.exports = (filePath) => extensions.has(path$10.extname(filePath).slice(1).toLowerCase());
}));
var require_constants$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	const { sep: sep$1 } = __require("path");
	const { platform } = processModule;
	const os$3 = __require("os");
	exports.EV_ALL = "all";
	exports.EV_READY = "ready";
	exports.EV_ADD = "add";
	exports.EV_CHANGE = "change";
	exports.EV_ADD_DIR = "addDir";
	exports.EV_UNLINK = "unlink";
	exports.EV_UNLINK_DIR = "unlinkDir";
	exports.EV_RAW = "raw";
	exports.EV_ERROR = "error";
	exports.STR_DATA = "data";
	exports.STR_END = "end";
	exports.STR_CLOSE = "close";
	exports.FSEVENT_CREATED = "created";
	exports.FSEVENT_MODIFIED = "modified";
	exports.FSEVENT_DELETED = "deleted";
	exports.FSEVENT_MOVED = "moved";
	exports.FSEVENT_CLONED = "cloned";
	exports.FSEVENT_UNKNOWN = "unknown";
	exports.FSEVENT_FLAG_MUST_SCAN_SUBDIRS = 1;
	exports.FSEVENT_TYPE_FILE = "file";
	exports.FSEVENT_TYPE_DIRECTORY = "directory";
	exports.FSEVENT_TYPE_SYMLINK = "symlink";
	exports.KEY_LISTENERS = "listeners";
	exports.KEY_ERR = "errHandlers";
	exports.KEY_RAW = "rawEmitters";
	exports.HANDLER_KEYS = [
		exports.KEY_LISTENERS,
		exports.KEY_ERR,
		exports.KEY_RAW
	];
	exports.DOT_SLASH = `.${sep$1}`;
	exports.BACK_SLASH_RE = /\\/g;
	exports.DOUBLE_SLASH_RE = /\/\//;
	exports.SLASH_OR_BACK_SLASH_RE = /[/\\]/;
	exports.DOT_RE = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/;
	exports.REPLACER_RE = /^\.[/\\]/;
	exports.SLASH = "/";
	exports.SLASH_SLASH = "//";
	exports.BRACE_START = "{";
	exports.BANG = "!";
	exports.ONE_DOT = ".";
	exports.TWO_DOTS = "..";
	exports.STAR = "*";
	exports.GLOBSTAR = "**";
	exports.ROOT_GLOBSTAR = "/**/*";
	exports.SLASH_GLOBSTAR = "/**";
	exports.DIR_SUFFIX = "Dir";
	exports.ANYMATCH_OPTS = { dot: true };
	exports.STRING_TYPE = "string";
	exports.FUNCTION_TYPE = "function";
	exports.EMPTY_STR = "";
	exports.EMPTY_FN = () => {};
	exports.IDENTITY_FN = (val) => val;
	exports.isWindows = platform === "win32";
	exports.isMacos = platform === "darwin";
	exports.isLinux = platform === "linux";
	exports.isIBMi = os$3.type() === "OS400";
}));
var require_nodefs_handler = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const fs$9 = __require("fs");
	const sysPath$2 = __require("path");
	const { promisify: promisify$3 } = __require("util");
	const isBinaryPath = require_is_binary_path();
	const { isWindows, isLinux, EMPTY_FN, EMPTY_STR, KEY_LISTENERS, KEY_ERR, KEY_RAW, HANDLER_KEYS, EV_CHANGE, EV_ADD, EV_ADD_DIR, EV_ERROR, STR_DATA, STR_END, BRACE_START, STAR } = require_constants$1();
	const THROTTLE_MODE_WATCH = "watch";
	const open = promisify$3(fs$9.open);
	const stat = promisify$3(fs$9.stat);
	const lstat = promisify$3(fs$9.lstat);
	const close = promisify$3(fs$9.close);
	const fsrealpath = promisify$3(fs$9.realpath);
	const statMethods = {
		lstat,
		stat
	};
	const foreach = (val, fn) => {
		if (val instanceof Set) val.forEach(fn);
		else fn(val);
	};
	const addAndConvert = (main, prop, item) => {
		let container = main[prop];
		if (!(container instanceof Set)) main[prop] = container = /* @__PURE__ */ new Set([container]);
		container.add(item);
	};
	const clearItem = (cont) => (key) => {
		const set = cont[key];
		if (set instanceof Set) set.clear();
		else delete cont[key];
	};
	const delFromSet = (main, prop, item) => {
		const container = main[prop];
		if (container instanceof Set) container.delete(item);
		else if (container === item) delete main[prop];
	};
	const isEmptySet = (val) => val instanceof Set ? val.size === 0 : !val;
	/**
	* @typedef {String} Path
	*/
	/**
	* @typedef {Object} FsWatchContainer
	* @property {Set} listeners
	* @property {Set} errHandlers
	* @property {Set} rawEmitters
	* @property {fs.FSWatcher=} watcher
	* @property {Boolean=} watcherUnusable
	*/
	/**
	* @type {Map<String,FsWatchContainer>}
	*/
	const FsWatchInstances = /* @__PURE__ */ new Map();
	/**
	* Instantiates the fs_watch interface
	* @param {String} path to be watched
	* @param {Object} options to be passed to fs_watch
	* @param {Function} listener main event handler
	* @param {Function} errHandler emits info about errors
	* @param {Function} emitRaw emits raw event data
	* @returns {fs.FSWatcher} new fsevents instance
	*/
	function createFsWatchInstance(path, options, listener, errHandler, emitRaw) {
		const handleEvent = (rawEvent, evPath) => {
			listener(path);
			emitRaw(rawEvent, evPath, { watchedPath: path });
			if (evPath && path !== evPath) fsWatchBroadcast(sysPath$2.resolve(path, evPath), KEY_LISTENERS, sysPath$2.join(path, evPath));
		};
		try {
			return fs$9.watch(path, options, handleEvent);
		} catch (error) {
			errHandler(error);
		}
	}
	/**
	* Helper for passing fs_watch event data to a collection of listeners
	* @param {Path} fullPath absolute path bound to fs_watch instance
	* @param {String} type listener type
	* @param {*=} val1 arguments to be passed to listeners
	* @param {*=} val2
	* @param {*=} val3
	*/
	const fsWatchBroadcast = (fullPath, type, val1, val2, val3) => {
		const cont = FsWatchInstances.get(fullPath);
		if (!cont) return;
		foreach(cont[type], (listener) => {
			listener(val1, val2, val3);
		});
	};
	/**
	* Instantiates the fs_watch interface or binds listeners
	* to an existing one covering the same file system entry
	* @param {String} path
	* @param {String} fullPath absolute path
	* @param {Object} options to be passed to fs_watch
	* @param {Object} handlers container for event listener functions
	*/
	const setFsWatchListener = (path, fullPath, options, handlers) => {
		const { listener, errHandler, rawEmitter } = handlers;
		let cont = FsWatchInstances.get(fullPath);
		/** @type {fs.FSWatcher=} */
		let watcher;
		if (!options.persistent) {
			watcher = createFsWatchInstance(path, options, listener, errHandler, rawEmitter);
			return watcher.close.bind(watcher);
		}
		if (cont) {
			addAndConvert(cont, KEY_LISTENERS, listener);
			addAndConvert(cont, KEY_ERR, errHandler);
			addAndConvert(cont, KEY_RAW, rawEmitter);
		} else {
			watcher = createFsWatchInstance(path, options, fsWatchBroadcast.bind(null, fullPath, KEY_LISTENERS), errHandler, fsWatchBroadcast.bind(null, fullPath, KEY_RAW));
			if (!watcher) return;
			watcher.on(EV_ERROR, async (error) => {
				const broadcastErr = fsWatchBroadcast.bind(null, fullPath, KEY_ERR);
				cont.watcherUnusable = true;
				if (isWindows && error.code === "EPERM") try {
					const fd = await open(path, "r");
					await close(fd);
					broadcastErr(error);
				} catch (err) {}
				else broadcastErr(error);
			});
			cont = {
				listeners: listener,
				errHandlers: errHandler,
				rawEmitters: rawEmitter,
				watcher
			};
			FsWatchInstances.set(fullPath, cont);
		}
		return () => {
			delFromSet(cont, KEY_LISTENERS, listener);
			delFromSet(cont, KEY_ERR, errHandler);
			delFromSet(cont, KEY_RAW, rawEmitter);
			if (isEmptySet(cont.listeners)) {
				cont.watcher.close();
				FsWatchInstances.delete(fullPath);
				HANDLER_KEYS.forEach(clearItem(cont));
				cont.watcher = void 0;
				Object.freeze(cont);
			}
		};
	};
	const FsWatchFileInstances = /* @__PURE__ */ new Map();
	/**
	* Instantiates the fs_watchFile interface or binds listeners
	* to an existing one covering the same file system entry
	* @param {String} path to be watched
	* @param {String} fullPath absolute path
	* @param {Object} options options to be passed to fs_watchFile
	* @param {Object} handlers container for event listener functions
	* @returns {Function} closer
	*/
	const setFsWatchFileListener = (path, fullPath, options, handlers) => {
		const { listener, rawEmitter } = handlers;
		let cont = FsWatchFileInstances.get(fullPath);
		const copts = cont && cont.options;
		if (copts && (copts.persistent < options.persistent || copts.interval > options.interval)) {
			fs$9.unwatchFile(fullPath);
			cont = void 0;
		}
		if (cont) {
			addAndConvert(cont, KEY_LISTENERS, listener);
			addAndConvert(cont, KEY_RAW, rawEmitter);
		} else {
			cont = {
				listeners: listener,
				rawEmitters: rawEmitter,
				options,
				watcher: fs$9.watchFile(fullPath, options, (curr, prev) => {
					foreach(cont.rawEmitters, (rawEmitter) => {
						rawEmitter(EV_CHANGE, fullPath, {
							curr,
							prev
						});
					});
					const currmtime = curr.mtimeMs;
					if (curr.size !== prev.size || currmtime > prev.mtimeMs || currmtime === 0) foreach(cont.listeners, (listener) => listener(path, curr));
				})
			};
			FsWatchFileInstances.set(fullPath, cont);
		}
		return () => {
			delFromSet(cont, KEY_LISTENERS, listener);
			delFromSet(cont, KEY_RAW, rawEmitter);
			if (isEmptySet(cont.listeners)) {
				FsWatchFileInstances.delete(fullPath);
				fs$9.unwatchFile(fullPath);
				cont.options = cont.watcher = void 0;
				Object.freeze(cont);
			}
		};
	};
	/**
	* @mixin
	*/
	var NodeFsHandler = class {
		/**
		* @param {import("../index").FSWatcher} fsW
		*/
		constructor(fsW) {
			this.fsw = fsW;
			this._boundHandleError = (error) => fsW._handleError(error);
		}
		/**
		* Watch file for changes with fs_watchFile or fs_watch.
		* @param {String} path to file or dir
		* @param {Function} listener on fs change
		* @returns {Function} closer for the watcher instance
		*/
		_watchWithNodeFs(path, listener) {
			const opts = this.fsw.options;
			const directory = sysPath$2.dirname(path);
			const basename = sysPath$2.basename(path);
			this.fsw._getWatchedDir(directory).add(basename);
			const absolutePath = sysPath$2.resolve(path);
			const options = { persistent: opts.persistent };
			if (!listener) listener = EMPTY_FN;
			let closer;
			if (opts.usePolling) {
				options.interval = opts.enableBinaryInterval && isBinaryPath(basename) ? opts.binaryInterval : opts.interval;
				closer = setFsWatchFileListener(path, absolutePath, options, {
					listener,
					rawEmitter: this.fsw._emitRaw
				});
			} else closer = setFsWatchListener(path, absolutePath, options, {
				listener,
				errHandler: this._boundHandleError,
				rawEmitter: this.fsw._emitRaw
			});
			return closer;
		}
		/**
		* Watch a file and emit add event if warranted.
		* @param {Path} file Path
		* @param {fs.Stats} stats result of fs_stat
		* @param {Boolean} initialAdd was the file added at watch instantiation?
		* @returns {Function} closer for the watcher instance
		*/
		_handleFile(file, stats, initialAdd) {
			if (this.fsw.closed) return;
			const dirname = sysPath$2.dirname(file);
			const basename = sysPath$2.basename(file);
			const parent = this.fsw._getWatchedDir(dirname);
			let prevStats = stats;
			if (parent.has(basename)) return;
			const listener = async (path, newStats) => {
				if (!this.fsw._throttle(THROTTLE_MODE_WATCH, file, 5)) return;
				if (!newStats || newStats.mtimeMs === 0) try {
					const newStats = await stat(file);
					if (this.fsw.closed) return;
					const at = newStats.atimeMs;
					const mt = newStats.mtimeMs;
					if (!at || at <= mt || mt !== prevStats.mtimeMs) this.fsw._emit(EV_CHANGE, file, newStats);
					if (isLinux && prevStats.ino !== newStats.ino) {
						this.fsw._closeFile(path);
						prevStats = newStats;
						this.fsw._addPathCloser(path, this._watchWithNodeFs(file, listener));
					} else prevStats = newStats;
				} catch (error) {
					this.fsw._remove(dirname, basename);
				}
				else if (parent.has(basename)) {
					const at = newStats.atimeMs;
					const mt = newStats.mtimeMs;
					if (!at || at <= mt || mt !== prevStats.mtimeMs) this.fsw._emit(EV_CHANGE, file, newStats);
					prevStats = newStats;
				}
			};
			const closer = this._watchWithNodeFs(file, listener);
			if (!(initialAdd && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(file)) {
				if (!this.fsw._throttle(EV_ADD, file, 0)) return;
				this.fsw._emit(EV_ADD, file, stats);
			}
			return closer;
		}
		/**
		* Handle symlinks encountered while reading a dir.
		* @param {Object} entry returned by readdirp
		* @param {String} directory path of dir being read
		* @param {String} path of this item
		* @param {String} item basename of this item
		* @returns {Promise<Boolean>} true if no more processing is needed for this entry.
		*/
		async _handleSymlink(entry, directory, path, item) {
			if (this.fsw.closed) return;
			const full = entry.fullPath;
			const dir = this.fsw._getWatchedDir(directory);
			if (!this.fsw.options.followSymlinks) {
				this.fsw._incrReadyCount();
				let linkPath;
				try {
					linkPath = await fsrealpath(path);
				} catch (e) {
					this.fsw._emitReady();
					return true;
				}
				if (this.fsw.closed) return;
				if (dir.has(item)) {
					if (this.fsw._symlinkPaths.get(full) !== linkPath) {
						this.fsw._symlinkPaths.set(full, linkPath);
						this.fsw._emit(EV_CHANGE, path, entry.stats);
					}
				} else {
					dir.add(item);
					this.fsw._symlinkPaths.set(full, linkPath);
					this.fsw._emit(EV_ADD, path, entry.stats);
				}
				this.fsw._emitReady();
				return true;
			}
			if (this.fsw._symlinkPaths.has(full)) return true;
			this.fsw._symlinkPaths.set(full, true);
		}
		_handleRead(directory, initialAdd, wh, target, dir, depth, throttler) {
			directory = sysPath$2.join(directory, EMPTY_STR);
			if (!wh.hasGlob) {
				throttler = this.fsw._throttle("readdir", directory, 1e3);
				if (!throttler) return;
			}
			const previous = this.fsw._getWatchedDir(wh.path);
			const current = /* @__PURE__ */ new Set();
			let stream = this.fsw._readdirp(directory, {
				fileFilter: (entry) => wh.filterPath(entry),
				directoryFilter: (entry) => wh.filterDir(entry),
				depth: 0
			}).on(STR_DATA, async (entry) => {
				if (this.fsw.closed) {
					stream = void 0;
					return;
				}
				const item = entry.path;
				let path = sysPath$2.join(directory, item);
				current.add(item);
				if (entry.stats.isSymbolicLink() && await this._handleSymlink(entry, directory, path, item)) return;
				if (this.fsw.closed) {
					stream = void 0;
					return;
				}
				if (item === target || !target && !previous.has(item)) {
					this.fsw._incrReadyCount();
					path = sysPath$2.join(dir, sysPath$2.relative(dir, path));
					this._addToNodeFs(path, initialAdd, wh, depth + 1);
				}
			}).on(EV_ERROR, this._boundHandleError);
			return new Promise((resolve) => stream.once(STR_END, () => {
				if (this.fsw.closed) {
					stream = void 0;
					return;
				}
				const wasThrottled = throttler ? throttler.clear() : false;
				resolve();
				previous.getChildren().filter((item) => {
					return item !== directory && !current.has(item) && (!wh.hasGlob || wh.filterPath({ fullPath: sysPath$2.resolve(directory, item) }));
				}).forEach((item) => {
					this.fsw._remove(directory, item);
				});
				stream = void 0;
				if (wasThrottled) this._handleRead(directory, false, wh, target, dir, depth, throttler);
			}));
		}
		/**
		* Read directory to add / remove files from `@watched` list and re-read it on change.
		* @param {String} dir fs path
		* @param {fs.Stats} stats
		* @param {Boolean} initialAdd
		* @param {Number} depth relative to user-supplied path
		* @param {String} target child path targeted for watch
		* @param {Object} wh Common watch helpers for this path
		* @param {String} realpath
		* @returns {Promise<Function>} closer for the watcher instance.
		*/
		async _handleDir(dir, stats, initialAdd, depth, target, wh, realpath) {
			const parentDir = this.fsw._getWatchedDir(sysPath$2.dirname(dir));
			const tracked = parentDir.has(sysPath$2.basename(dir));
			if (!(initialAdd && this.fsw.options.ignoreInitial) && !target && !tracked) {
				if (!wh.hasGlob || wh.globFilter(dir)) this.fsw._emit(EV_ADD_DIR, dir, stats);
			}
			parentDir.add(sysPath$2.basename(dir));
			this.fsw._getWatchedDir(dir);
			let throttler;
			let closer;
			const oDepth = this.fsw.options.depth;
			if ((oDepth == null || depth <= oDepth) && !this.fsw._symlinkPaths.has(realpath)) {
				if (!target) {
					await this._handleRead(dir, initialAdd, wh, target, dir, depth, throttler);
					if (this.fsw.closed) return;
				}
				closer = this._watchWithNodeFs(dir, (dirPath, stats) => {
					if (stats && stats.mtimeMs === 0) return;
					this._handleRead(dirPath, false, wh, target, dir, depth, throttler);
				});
			}
			return closer;
		}
		/**
		* Handle added file, directory, or glob pattern.
		* Delegates call to _handleFile / _handleDir after checks.
		* @param {String} path to file or ir
		* @param {Boolean} initialAdd was the file added at watch instantiation?
		* @param {Object} priorWh depth relative to user-supplied path
		* @param {Number} depth Child path actually targeted for watch
		* @param {String=} target Child path actually targeted for watch
		* @returns {Promise}
		*/
		async _addToNodeFs(path, initialAdd, priorWh, depth, target) {
			const ready = this.fsw._emitReady;
			if (this.fsw._isIgnored(path) || this.fsw.closed) {
				ready();
				return false;
			}
			const wh = this.fsw._getWatchHelpers(path, depth);
			if (!wh.hasGlob && priorWh) {
				wh.hasGlob = priorWh.hasGlob;
				wh.globFilter = priorWh.globFilter;
				wh.filterPath = (entry) => priorWh.filterPath(entry);
				wh.filterDir = (entry) => priorWh.filterDir(entry);
			}
			try {
				const stats = await statMethods[wh.statMethod](wh.watchPath);
				if (this.fsw.closed) return;
				if (this.fsw._isIgnored(wh.watchPath, stats)) {
					ready();
					return false;
				}
				const follow = this.fsw.options.followSymlinks && !path.includes(STAR) && !path.includes(BRACE_START);
				let closer;
				if (stats.isDirectory()) {
					const absPath = sysPath$2.resolve(path);
					const targetPath = follow ? await fsrealpath(path) : path;
					if (this.fsw.closed) return;
					closer = await this._handleDir(wh.watchPath, stats, initialAdd, depth, target, wh, targetPath);
					if (this.fsw.closed) return;
					if (absPath !== targetPath && targetPath !== void 0) this.fsw._symlinkPaths.set(absPath, targetPath);
				} else if (stats.isSymbolicLink()) {
					const targetPath = follow ? await fsrealpath(path) : path;
					if (this.fsw.closed) return;
					const parent = sysPath$2.dirname(wh.watchPath);
					this.fsw._getWatchedDir(parent).add(wh.watchPath);
					this.fsw._emit(EV_ADD, wh.watchPath, stats);
					closer = await this._handleDir(parent, stats, initialAdd, depth, path, wh, targetPath);
					if (this.fsw.closed) return;
					if (targetPath !== void 0) this.fsw._symlinkPaths.set(sysPath$2.resolve(path), targetPath);
				} else closer = this._handleFile(wh.watchPath, stats, initialAdd);
				ready();
				this.fsw._addPathCloser(path, closer);
				return false;
			} catch (error) {
				if (this.fsw._handleError(error)) {
					ready();
					return path;
				}
			}
		}
	};
	module.exports = NodeFsHandler;
}));
var require_fsevents_handler = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const fs$8 = __require("fs");
	const sysPath$1 = __require("path");
	const { promisify: promisify$2 } = __require("util");
	let fsevents;
	try {
		fsevents = __require("fsevents");
	} catch (error) {
		if (processModule.env.CHOKIDAR_PRINT_FSEVENTS_REQUIRE_ERROR) console.error(error);
	}
	if (fsevents) {
		const mtch = processModule.version.match(/v(\d+)\.(\d+)/);
		if (mtch && mtch[1] && mtch[2]) {
			if (Number.parseInt(mtch[1], 10) === 8 && Number.parseInt(mtch[2], 10) < 16) fsevents = void 0;
		}
	}
	const { EV_ADD, EV_CHANGE, EV_ADD_DIR, EV_UNLINK, EV_ERROR, STR_DATA, STR_END, FSEVENT_CREATED, FSEVENT_MODIFIED, FSEVENT_DELETED, FSEVENT_MOVED, FSEVENT_UNKNOWN, FSEVENT_FLAG_MUST_SCAN_SUBDIRS, FSEVENT_TYPE_FILE, FSEVENT_TYPE_DIRECTORY, FSEVENT_TYPE_SYMLINK, ROOT_GLOBSTAR, DIR_SUFFIX, DOT_SLASH, FUNCTION_TYPE, EMPTY_FN, IDENTITY_FN } = require_constants$1();
	const Depth = (value) => isNaN(value) ? {} : { depth: value };
	const stat = promisify$2(fs$8.stat);
	const lstat = promisify$2(fs$8.lstat);
	const realpath = promisify$2(fs$8.realpath);
	const statMethods = {
		stat,
		lstat
	};
	/**
	* @typedef {String} Path
	*/
	/**
	* @typedef {Object} FsEventsWatchContainer
	* @property {Set<Function>} listeners
	* @property {Function} rawEmitter
	* @property {{stop: Function}} watcher
	*/
	/**
	* Object to hold per-process fsevents instances (may be shared across chokidar FSWatcher instances)
	* @type {Map<Path,FsEventsWatchContainer>}
	*/
	const FSEventsWatchers = /* @__PURE__ */ new Map();
	const consolidateThreshhold = 10;
	const wrongEventFlags = /* @__PURE__ */ new Set([
		69888,
		70400,
		71424,
		72704,
		73472,
		131328,
		131840,
		262912
	]);
	/**
	* Instantiates the fsevents interface
	* @param {Path} path path to be watched
	* @param {Function} callback called when fsevents is bound and ready
	* @returns {{stop: Function}} new fsevents instance
	*/
	const createFSEventsInstance = (path, callback) => {
		return { stop: fsevents.watch(path, callback) };
	};
	/**
	* Instantiates the fsevents interface or binds listeners to an existing one covering
	* the same file tree.
	* @param {Path} path           - to be watched
	* @param {Path} realPath       - real path for symlinks
	* @param {Function} listener   - called when fsevents emits events
	* @param {Function} rawEmitter - passes data to listeners of the 'raw' event
	* @returns {Function} closer
	*/
	function setFSEventsListener(path, realPath, listener, rawEmitter) {
		let watchPath = sysPath$1.extname(realPath) ? sysPath$1.dirname(realPath) : realPath;
		const parentPath = sysPath$1.dirname(watchPath);
		let cont = FSEventsWatchers.get(watchPath);
		if (couldConsolidate(parentPath)) watchPath = parentPath;
		const resolvedPath = sysPath$1.resolve(path);
		const hasSymlink = resolvedPath !== realPath;
		const filteredListener = (fullPath, flags, info) => {
			if (hasSymlink) fullPath = fullPath.replace(realPath, resolvedPath);
			if (fullPath === resolvedPath || !fullPath.indexOf(resolvedPath + sysPath$1.sep)) listener(fullPath, flags, info);
		};
		let watchedParent = false;
		for (const watchedPath of FSEventsWatchers.keys()) if (realPath.indexOf(sysPath$1.resolve(watchedPath) + sysPath$1.sep) === 0) {
			watchPath = watchedPath;
			cont = FSEventsWatchers.get(watchPath);
			watchedParent = true;
			break;
		}
		if (cont || watchedParent) cont.listeners.add(filteredListener);
		else {
			cont = {
				listeners: /* @__PURE__ */ new Set([filteredListener]),
				rawEmitter,
				watcher: createFSEventsInstance(watchPath, (fullPath, flags) => {
					if (!cont.listeners.size) return;
					if (flags & FSEVENT_FLAG_MUST_SCAN_SUBDIRS) return;
					const info = fsevents.getInfo(fullPath, flags);
					cont.listeners.forEach((list) => {
						list(fullPath, flags, info);
					});
					cont.rawEmitter(info.event, fullPath, info);
				})
			};
			FSEventsWatchers.set(watchPath, cont);
		}
		return () => {
			const lst = cont.listeners;
			lst.delete(filteredListener);
			if (!lst.size) {
				FSEventsWatchers.delete(watchPath);
				if (cont.watcher) return cont.watcher.stop().then(() => {
					cont.rawEmitter = cont.watcher = void 0;
					Object.freeze(cont);
				});
			}
		};
	}
	const couldConsolidate = (path) => {
		let count = 0;
		for (const watchPath of FSEventsWatchers.keys()) if (watchPath.indexOf(path) === 0) {
			count++;
			if (count >= consolidateThreshhold) return true;
		}
		return false;
	};
	const canUse = () => fsevents && FSEventsWatchers.size < 128;
	const calcDepth = (path, root) => {
		let i = 0;
		while (!path.indexOf(root) && (path = sysPath$1.dirname(path)) !== root) i++;
		return i;
	};
	const sameTypes = (info, stats) => info.type === FSEVENT_TYPE_DIRECTORY && stats.isDirectory() || info.type === FSEVENT_TYPE_SYMLINK && stats.isSymbolicLink() || info.type === FSEVENT_TYPE_FILE && stats.isFile();
	/**
	* @mixin
	*/
	var FsEventsHandler = class {
		/**
		* @param {import('../index').FSWatcher} fsw
		*/
		constructor(fsw) {
			this.fsw = fsw;
		}
		checkIgnored(path, stats) {
			const ipaths = this.fsw._ignoredPaths;
			if (this.fsw._isIgnored(path, stats)) {
				ipaths.add(path);
				if (stats && stats.isDirectory()) ipaths.add(path + ROOT_GLOBSTAR);
				return true;
			}
			ipaths.delete(path);
			ipaths.delete(path + ROOT_GLOBSTAR);
		}
		addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts) {
			const event = watchedDir.has(item) ? EV_CHANGE : EV_ADD;
			this.handleEvent(event, path, fullPath, realPath, parent, watchedDir, item, info, opts);
		}
		async checkExists(path, fullPath, realPath, parent, watchedDir, item, info, opts) {
			try {
				const stats = await stat(path);
				if (this.fsw.closed) return;
				if (sameTypes(info, stats)) this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
				else this.handleEvent(EV_UNLINK, path, fullPath, realPath, parent, watchedDir, item, info, opts);
			} catch (error) {
				if (error.code === "EACCES") this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
				else this.handleEvent(EV_UNLINK, path, fullPath, realPath, parent, watchedDir, item, info, opts);
			}
		}
		handleEvent(event, path, fullPath, realPath, parent, watchedDir, item, info, opts) {
			if (this.fsw.closed || this.checkIgnored(path)) return;
			if (event === EV_UNLINK) {
				const isDirectory = info.type === FSEVENT_TYPE_DIRECTORY;
				if (isDirectory || watchedDir.has(item)) this.fsw._remove(parent, item, isDirectory);
			} else {
				if (event === EV_ADD) {
					if (info.type === FSEVENT_TYPE_DIRECTORY) this.fsw._getWatchedDir(path);
					if (info.type === FSEVENT_TYPE_SYMLINK && opts.followSymlinks) {
						const curDepth = opts.depth === void 0 ? void 0 : calcDepth(fullPath, realPath) + 1;
						return this._addToFsEvents(path, false, true, curDepth);
					}
					this.fsw._getWatchedDir(parent).add(item);
				}
				/**
				* @type {'add'|'addDir'|'unlink'|'unlinkDir'}
				*/
				const eventName = info.type === FSEVENT_TYPE_DIRECTORY ? event + DIR_SUFFIX : event;
				this.fsw._emit(eventName, path);
				if (eventName === EV_ADD_DIR) this._addToFsEvents(path, false, true);
			}
		}
		/**
		* Handle symlinks encountered during directory scan
		* @param {String} watchPath  - file/dir path to be watched with fsevents
		* @param {String} realPath   - real path (in case of symlinks)
		* @param {Function} transform  - path transformer
		* @param {Function} globFilter - path filter in case a glob pattern was provided
		* @returns {Function} closer for the watcher instance
		*/
		_watchWithFsEvents(watchPath, realPath, transform, globFilter) {
			if (this.fsw.closed || this.fsw._isIgnored(watchPath)) return;
			const opts = this.fsw.options;
			const watchCallback = async (fullPath, flags, info) => {
				if (this.fsw.closed || this.fsw._isIgnored(fullPath)) return;
				if (opts.depth !== void 0 && calcDepth(fullPath, realPath) > opts.depth) return;
				const path = transform(sysPath$1.join(watchPath, sysPath$1.relative(watchPath, fullPath)));
				if (globFilter && !globFilter(path)) return;
				const parent = sysPath$1.dirname(path);
				const item = sysPath$1.basename(path);
				const watchedDir = this.fsw._getWatchedDir(info.type === FSEVENT_TYPE_DIRECTORY ? path : parent);
				if (wrongEventFlags.has(flags) || info.event === FSEVENT_UNKNOWN) if (typeof opts.ignored === FUNCTION_TYPE) {
					let stats;
					try {
						stats = await stat(path);
					} catch (error) {}
					if (this.fsw.closed) return;
					if (this.checkIgnored(path, stats)) return;
					if (sameTypes(info, stats)) this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
					else this.handleEvent(EV_UNLINK, path, fullPath, realPath, parent, watchedDir, item, info, opts);
				} else this.checkExists(path, fullPath, realPath, parent, watchedDir, item, info, opts);
				else switch (info.event) {
					case FSEVENT_CREATED:
					case FSEVENT_MODIFIED: return this.addOrChange(path, fullPath, realPath, parent, watchedDir, item, info, opts);
					case FSEVENT_DELETED:
					case FSEVENT_MOVED: return this.checkExists(path, fullPath, realPath, parent, watchedDir, item, info, opts);
				}
			};
			const closer = setFSEventsListener(watchPath, realPath, watchCallback, this.fsw._emitRaw);
			this.fsw._emitReady();
			return closer;
		}
		/**
		* Handle symlinks encountered during directory scan
		* @param {String} linkPath path to symlink
		* @param {String} fullPath absolute path to the symlink
		* @param {Function} transform pre-existing path transformer
		* @param {Number} curDepth level of subdirectories traversed to where symlink is
		* @returns {Promise<void>}
		*/
		async _handleFsEventsSymlink(linkPath, fullPath, transform, curDepth) {
			if (this.fsw.closed || this.fsw._symlinkPaths.has(fullPath)) return;
			this.fsw._symlinkPaths.set(fullPath, true);
			this.fsw._incrReadyCount();
			try {
				const linkTarget = await realpath(linkPath);
				if (this.fsw.closed) return;
				if (this.fsw._isIgnored(linkTarget)) return this.fsw._emitReady();
				this.fsw._incrReadyCount();
				this._addToFsEvents(linkTarget || linkPath, (path) => {
					let aliasedPath = linkPath;
					if (linkTarget && linkTarget !== DOT_SLASH) aliasedPath = path.replace(linkTarget, linkPath);
					else if (path !== DOT_SLASH) aliasedPath = sysPath$1.join(linkPath, path);
					return transform(aliasedPath);
				}, false, curDepth);
			} catch (error) {
				if (this.fsw._handleError(error)) return this.fsw._emitReady();
			}
		}
		/**
		*
		* @param {Path} newPath
		* @param {fs.Stats} stats
		*/
		emitAdd(newPath, stats, processPath, opts, forceAdd) {
			const pp = processPath(newPath);
			const isDir = stats.isDirectory();
			const dirObj = this.fsw._getWatchedDir(sysPath$1.dirname(pp));
			const base = sysPath$1.basename(pp);
			if (isDir) this.fsw._getWatchedDir(pp);
			if (dirObj.has(base)) return;
			dirObj.add(base);
			if (!opts.ignoreInitial || forceAdd === true) this.fsw._emit(isDir ? EV_ADD_DIR : EV_ADD, pp, stats);
		}
		initWatch(realPath, path, wh, processPath) {
			if (this.fsw.closed) return;
			const closer = this._watchWithFsEvents(wh.watchPath, sysPath$1.resolve(realPath || wh.watchPath), processPath, wh.globFilter);
			this.fsw._addPathCloser(path, closer);
		}
		/**
		* Handle added path with fsevents
		* @param {String} path file/dir path or glob pattern
		* @param {Function|Boolean=} transform converts working path to what the user expects
		* @param {Boolean=} forceAdd ensure add is emitted
		* @param {Number=} priorDepth Level of subdirectories already traversed.
		* @returns {Promise<void>}
		*/
		async _addToFsEvents(path, transform, forceAdd, priorDepth) {
			if (this.fsw.closed) return;
			const opts = this.fsw.options;
			const processPath = typeof transform === FUNCTION_TYPE ? transform : IDENTITY_FN;
			const wh = this.fsw._getWatchHelpers(path);
			try {
				const stats = await statMethods[wh.statMethod](wh.watchPath);
				if (this.fsw.closed) return;
				if (this.fsw._isIgnored(wh.watchPath, stats)) throw null;
				if (stats.isDirectory()) {
					if (!wh.globFilter) this.emitAdd(processPath(path), stats, processPath, opts, forceAdd);
					if (priorDepth && priorDepth > opts.depth) return;
					this.fsw._readdirp(wh.watchPath, {
						fileFilter: (entry) => wh.filterPath(entry),
						directoryFilter: (entry) => wh.filterDir(entry),
						...Depth(opts.depth - (priorDepth || 0))
					}).on(STR_DATA, (entry) => {
						if (this.fsw.closed) return;
						if (entry.stats.isDirectory() && !wh.filterPath(entry)) return;
						const joinedPath = sysPath$1.join(wh.watchPath, entry.path);
						const { fullPath } = entry;
						if (wh.followSymlinks && entry.stats.isSymbolicLink()) {
							const curDepth = opts.depth === void 0 ? void 0 : calcDepth(joinedPath, sysPath$1.resolve(wh.watchPath)) + 1;
							this._handleFsEventsSymlink(joinedPath, fullPath, processPath, curDepth);
						} else this.emitAdd(joinedPath, entry.stats, processPath, opts, forceAdd);
					}).on(EV_ERROR, EMPTY_FN).on(STR_END, () => {
						this.fsw._emitReady();
					});
				} else {
					this.emitAdd(wh.watchPath, stats, processPath, opts, forceAdd);
					this.fsw._emitReady();
				}
			} catch (error) {
				if (!error || this.fsw._handleError(error)) {
					this.fsw._emitReady();
					this.fsw._emitReady();
				}
			}
			if (opts.persistent && forceAdd !== true) if (typeof transform === FUNCTION_TYPE) this.initWatch(void 0, path, wh, processPath);
			else {
				let realPath;
				try {
					realPath = await realpath(wh.watchPath);
				} catch (e) {}
				this.initWatch(realPath, path, wh, processPath);
			}
		}
	};
	module.exports = FsEventsHandler;
	module.exports.canUse = canUse;
}));
var require_chokidar = /* @__PURE__ */ __commonJSMin(((exports) => {
	const { EventEmitter: EventEmitter$3 } = __require("events");
	const fs$7 = __require("fs");
	const sysPath = __require("path");
	const { promisify: promisify$1 } = __require("util");
	const readdirp = require_readdirp();
	const anymatch = require_anymatch().default;
	const globParent = require_glob_parent();
	const isGlob = require_is_glob();
	const braces = require_braces();
	const normalizePath = require_normalize_path();
	const NodeFsHandler = require_nodefs_handler();
	const FsEventsHandler = require_fsevents_handler();
	const { EV_ALL, EV_READY, EV_ADD, EV_CHANGE, EV_UNLINK, EV_ADD_DIR, EV_UNLINK_DIR, EV_RAW, EV_ERROR, STR_CLOSE, STR_END, BACK_SLASH_RE, DOUBLE_SLASH_RE, SLASH_OR_BACK_SLASH_RE, DOT_RE, REPLACER_RE, SLASH, SLASH_SLASH, BRACE_START, BANG, ONE_DOT, TWO_DOTS, GLOBSTAR, SLASH_GLOBSTAR, ANYMATCH_OPTS, STRING_TYPE, FUNCTION_TYPE, EMPTY_STR, EMPTY_FN, isWindows, isMacos, isIBMi } = require_constants$1();
	const stat = promisify$1(fs$7.stat);
	const readdir = promisify$1(fs$7.readdir);
	/**
	* @typedef {String} Path
	* @typedef {'all'|'add'|'addDir'|'change'|'unlink'|'unlinkDir'|'raw'|'error'|'ready'} EventName
	* @typedef {'readdir'|'watch'|'add'|'remove'|'change'} ThrottleType
	*/
	/**
	*
	* @typedef {Object} WatchHelpers
	* @property {Boolean} followSymlinks
	* @property {'stat'|'lstat'} statMethod
	* @property {Path} path
	* @property {Path} watchPath
	* @property {Function} entryPath
	* @property {Boolean} hasGlob
	* @property {Object} globFilter
	* @property {Function} filterPath
	* @property {Function} filterDir
	*/
	const arrify = (value = []) => Array.isArray(value) ? value : [value];
	const flatten = (list, result = []) => {
		list.forEach((item) => {
			if (Array.isArray(item)) flatten(item, result);
			else result.push(item);
		});
		return result;
	};
	const unifyPaths = (paths_) => {
		/**
		* @type {Array<String>}
		*/
		const paths = flatten(arrify(paths_));
		if (!paths.every((p) => typeof p === STRING_TYPE)) throw new TypeError(`Non-string provided as watch path: ${paths}`);
		return paths.map(normalizePathToUnix);
	};
	const toUnix = (string) => {
		let str = string.replace(BACK_SLASH_RE, SLASH);
		let prepend = false;
		if (str.startsWith(SLASH_SLASH)) prepend = true;
		while (str.match(DOUBLE_SLASH_RE)) str = str.replace(DOUBLE_SLASH_RE, SLASH);
		if (prepend) str = SLASH + str;
		return str;
	};
	const normalizePathToUnix = (path) => toUnix(sysPath.normalize(toUnix(path)));
	const normalizeIgnored = (cwd = EMPTY_STR) => (path) => {
		if (typeof path !== STRING_TYPE) return path;
		return normalizePathToUnix(sysPath.isAbsolute(path) ? path : sysPath.join(cwd, path));
	};
	const getAbsolutePath = (path, cwd) => {
		if (sysPath.isAbsolute(path)) return path;
		if (path.startsWith(BANG)) return BANG + sysPath.join(cwd, path.slice(1));
		return sysPath.join(cwd, path);
	};
	const undef = (opts, key) => opts[key] === void 0;
	/**
	* Directory entry.
	* @property {Path} path
	* @property {Set<Path>} items
	*/
	var DirEntry = class {
		/**
		* @param {Path} dir
		* @param {Function} removeWatcher
		*/
		constructor(dir, removeWatcher) {
			this.path = dir;
			this._removeWatcher = removeWatcher;
			/** @type {Set<Path>} */
			this.items = /* @__PURE__ */ new Set();
		}
		add(item) {
			const { items } = this;
			if (!items) return;
			if (item !== ONE_DOT && item !== TWO_DOTS) items.add(item);
		}
		async remove(item) {
			const { items } = this;
			if (!items) return;
			items.delete(item);
			if (items.size > 0) return;
			const dir = this.path;
			try {
				await readdir(dir);
			} catch (err) {
				if (this._removeWatcher) this._removeWatcher(sysPath.dirname(dir), sysPath.basename(dir));
			}
		}
		has(item) {
			const { items } = this;
			if (!items) return;
			return items.has(item);
		}
		/**
		* @returns {Array<String>}
		*/
		getChildren() {
			const { items } = this;
			if (!items) return;
			return [...items.values()];
		}
		dispose() {
			this.items.clear();
			delete this.path;
			delete this._removeWatcher;
			delete this.items;
			Object.freeze(this);
		}
	};
	const STAT_METHOD_F = "stat";
	const STAT_METHOD_L = "lstat";
	var WatchHelper = class {
		constructor(path, watchPath, follow, fsw) {
			this.fsw = fsw;
			this.path = path = path.replace(REPLACER_RE, EMPTY_STR);
			this.watchPath = watchPath;
			this.fullWatchPath = sysPath.resolve(watchPath);
			this.hasGlob = watchPath !== path;
			/** @type {object|boolean} */
			if (path === EMPTY_STR) this.hasGlob = false;
			this.globSymlink = this.hasGlob && follow ? void 0 : false;
			this.globFilter = this.hasGlob ? anymatch(path, void 0, ANYMATCH_OPTS) : false;
			this.dirParts = this.getDirParts(path);
			this.dirParts.forEach((parts) => {
				if (parts.length > 1) parts.pop();
			});
			this.followSymlinks = follow;
			this.statMethod = follow ? STAT_METHOD_F : STAT_METHOD_L;
		}
		checkGlobSymlink(entry) {
			if (this.globSymlink === void 0) this.globSymlink = entry.fullParentDir === this.fullWatchPath ? false : {
				realPath: entry.fullParentDir,
				linkPath: this.fullWatchPath
			};
			if (this.globSymlink) return entry.fullPath.replace(this.globSymlink.realPath, this.globSymlink.linkPath);
			return entry.fullPath;
		}
		entryPath(entry) {
			return sysPath.join(this.watchPath, sysPath.relative(this.watchPath, this.checkGlobSymlink(entry)));
		}
		filterPath(entry) {
			const { stats } = entry;
			if (stats && stats.isSymbolicLink()) return this.filterDir(entry);
			const resolvedPath = this.entryPath(entry);
			return (this.hasGlob && typeof this.globFilter === FUNCTION_TYPE ? this.globFilter(resolvedPath) : true) && this.fsw._isntIgnored(resolvedPath, stats) && this.fsw._hasReadPermissions(stats);
		}
		getDirParts(path) {
			if (!this.hasGlob) return [];
			const parts = [];
			(path.includes(BRACE_START) ? braces.expand(path) : [path]).forEach((path) => {
				parts.push(sysPath.relative(this.watchPath, path).split(SLASH_OR_BACK_SLASH_RE));
			});
			return parts;
		}
		filterDir(entry) {
			if (this.hasGlob) {
				const entryParts = this.getDirParts(this.checkGlobSymlink(entry));
				let globstar = false;
				this.unmatchedGlob = !this.dirParts.some((parts) => {
					return parts.every((part, i) => {
						if (part === GLOBSTAR) globstar = true;
						return globstar || !entryParts[0][i] || anymatch(part, entryParts[0][i], ANYMATCH_OPTS);
					});
				});
			}
			return !this.unmatchedGlob && this.fsw._isntIgnored(this.entryPath(entry), entry.stats);
		}
	};
	/**
	* Watches files & directories for changes. Emitted events:
	* `add`, `addDir`, `change`, `unlink`, `unlinkDir`, `all`, `error`
	*
	*     new FSWatcher()
	*       .add(directories)
	*       .on('add', path => log('File', path, 'was added'))
	*/
	var FSWatcher = class extends EventEmitter$3 {
		constructor(_opts) {
			super();
			const opts = {};
			if (_opts) Object.assign(opts, _opts);
			/** @type {Map<String, DirEntry>} */
			this._watched = /* @__PURE__ */ new Map();
			/** @type {Map<String, Array>} */
			this._closers = /* @__PURE__ */ new Map();
			/** @type {Set<String>} */
			this._ignoredPaths = /* @__PURE__ */ new Set();
			/** @type {Map<ThrottleType, Map>} */
			this._throttled = /* @__PURE__ */ new Map();
			/** @type {Map<Path, String|Boolean>} */
			this._symlinkPaths = /* @__PURE__ */ new Map();
			this._streams = /* @__PURE__ */ new Set();
			this.closed = false;
			if (undef(opts, "persistent")) opts.persistent = true;
			if (undef(opts, "ignoreInitial")) opts.ignoreInitial = false;
			if (undef(opts, "ignorePermissionErrors")) opts.ignorePermissionErrors = false;
			if (undef(opts, "interval")) opts.interval = 100;
			if (undef(opts, "binaryInterval")) opts.binaryInterval = 300;
			if (undef(opts, "disableGlobbing")) opts.disableGlobbing = false;
			opts.enableBinaryInterval = opts.binaryInterval !== opts.interval;
			if (undef(opts, "useFsEvents")) opts.useFsEvents = !opts.usePolling;
			if (!FsEventsHandler.canUse()) opts.useFsEvents = false;
			if (undef(opts, "usePolling") && !opts.useFsEvents) opts.usePolling = isMacos;
			if (isIBMi) opts.usePolling = true;
			const envPoll = processModule.env.CHOKIDAR_USEPOLLING;
			if (envPoll !== void 0) {
				const envLower = envPoll.toLowerCase();
				if (envLower === "false" || envLower === "0") opts.usePolling = false;
				else if (envLower === "true" || envLower === "1") opts.usePolling = true;
				else opts.usePolling = !!envLower;
			}
			const envInterval = processModule.env.CHOKIDAR_INTERVAL;
			if (envInterval) opts.interval = Number.parseInt(envInterval, 10);
			if (undef(opts, "atomic")) opts.atomic = !opts.usePolling && !opts.useFsEvents;
			if (opts.atomic) this._pendingUnlinks = /* @__PURE__ */ new Map();
			if (undef(opts, "followSymlinks")) opts.followSymlinks = true;
			if (undef(opts, "awaitWriteFinish")) opts.awaitWriteFinish = false;
			if (opts.awaitWriteFinish === true) opts.awaitWriteFinish = {};
			const awf = opts.awaitWriteFinish;
			if (awf) {
				if (!awf.stabilityThreshold) awf.stabilityThreshold = 2e3;
				if (!awf.pollInterval) awf.pollInterval = 100;
				this._pendingWrites = /* @__PURE__ */ new Map();
			}
			if (opts.ignored) opts.ignored = arrify(opts.ignored);
			let readyCalls = 0;
			this._emitReady = () => {
				readyCalls++;
				if (readyCalls >= this._readyCount) {
					this._emitReady = EMPTY_FN;
					this._readyEmitted = true;
					processModule.nextTick(() => this.emit(EV_READY));
				}
			};
			this._emitRaw = (...args) => this.emit(EV_RAW, ...args);
			this._readyEmitted = false;
			this.options = opts;
			if (opts.useFsEvents) this._fsEventsHandler = new FsEventsHandler(this);
			else this._nodeFsHandler = new NodeFsHandler(this);
			Object.freeze(opts);
		}
		/**
		* Adds paths to be watched on an existing FSWatcher instance
		* @param {Path|Array<Path>} paths_
		* @param {String=} _origAdd private; for handling non-existent paths to be watched
		* @param {Boolean=} _internal private; indicates a non-user add
		* @returns {FSWatcher} for chaining
		*/
		add(paths_, _origAdd, _internal) {
			const { cwd, disableGlobbing } = this.options;
			this.closed = false;
			let paths = unifyPaths(paths_);
			if (cwd) paths = paths.map((path) => {
				const absPath = getAbsolutePath(path, cwd);
				if (disableGlobbing || !isGlob(path)) return absPath;
				return normalizePath(absPath);
			});
			paths = paths.filter((path) => {
				if (path.startsWith(BANG)) {
					this._ignoredPaths.add(path.slice(1));
					return false;
				}
				this._ignoredPaths.delete(path);
				this._ignoredPaths.delete(path + SLASH_GLOBSTAR);
				this._userIgnored = void 0;
				return true;
			});
			if (this.options.useFsEvents && this._fsEventsHandler) {
				if (!this._readyCount) this._readyCount = paths.length;
				if (this.options.persistent) this._readyCount += paths.length;
				paths.forEach((path) => this._fsEventsHandler._addToFsEvents(path));
			} else {
				if (!this._readyCount) this._readyCount = 0;
				this._readyCount += paths.length;
				Promise.all(paths.map(async (path) => {
					const res = await this._nodeFsHandler._addToNodeFs(path, !_internal, 0, 0, _origAdd);
					if (res) this._emitReady();
					return res;
				})).then((results) => {
					if (this.closed) return;
					results.filter((item) => item).forEach((item) => {
						this.add(sysPath.dirname(item), sysPath.basename(_origAdd || item));
					});
				});
			}
			return this;
		}
		/**
		* Close watchers or start ignoring events from specified paths.
		* @param {Path|Array<Path>} paths_ - string or array of strings, file/directory paths and/or globs
		* @returns {FSWatcher} for chaining
		*/
		unwatch(paths_) {
			if (this.closed) return this;
			const paths = unifyPaths(paths_);
			const { cwd } = this.options;
			paths.forEach((path) => {
				if (!sysPath.isAbsolute(path) && !this._closers.has(path)) {
					if (cwd) path = sysPath.join(cwd, path);
					path = sysPath.resolve(path);
				}
				this._closePath(path);
				this._ignoredPaths.add(path);
				if (this._watched.has(path)) this._ignoredPaths.add(path + SLASH_GLOBSTAR);
				this._userIgnored = void 0;
			});
			return this;
		}
		/**
		* Close watchers and remove all listeners from watched paths.
		* @returns {Promise<void>}.
		*/
		close() {
			if (this.closed) return this._closePromise;
			this.closed = true;
			this.removeAllListeners();
			const closers = [];
			this._closers.forEach((closerList) => closerList.forEach((closer) => {
				const promise = closer();
				if (promise instanceof Promise) closers.push(promise);
			}));
			this._streams.forEach((stream) => stream.destroy());
			this._userIgnored = void 0;
			this._readyCount = 0;
			this._readyEmitted = false;
			this._watched.forEach((dirent) => dirent.dispose());
			[
				"closers",
				"watched",
				"streams",
				"symlinkPaths",
				"throttled"
			].forEach((key) => {
				this[`_${key}`].clear();
			});
			this._closePromise = closers.length ? Promise.all(closers).then(() => void 0) : Promise.resolve();
			return this._closePromise;
		}
		/**
		* Expose list of watched paths
		* @returns {Object} for chaining
		*/
		getWatched() {
			const watchList = {};
			this._watched.forEach((entry, dir) => {
				const key = this.options.cwd ? sysPath.relative(this.options.cwd, dir) : dir;
				watchList[key || ONE_DOT] = entry.getChildren().sort();
			});
			return watchList;
		}
		emitWithAll(event, args) {
			this.emit(...args);
			if (event !== EV_ERROR) this.emit(EV_ALL, ...args);
		}
		/**
		* Normalize and emit events.
		* Calling _emit DOES NOT MEAN emit() would be called!
		* @param {EventName} event Type of event
		* @param {Path} path File or directory path
		* @param {*=} val1 arguments to be passed with event
		* @param {*=} val2
		* @param {*=} val3
		* @returns the error if defined, otherwise the value of the FSWatcher instance's `closed` flag
		*/
		async _emit(event, path, val1, val2, val3) {
			if (this.closed) return;
			const opts = this.options;
			if (isWindows) path = sysPath.normalize(path);
			if (opts.cwd) path = sysPath.relative(opts.cwd, path);
			/** @type Array<any> */
			const args = [event, path];
			if (val3 !== void 0) args.push(val1, val2, val3);
			else if (val2 !== void 0) args.push(val1, val2);
			else if (val1 !== void 0) args.push(val1);
			const awf = opts.awaitWriteFinish;
			let pw;
			if (awf && (pw = this._pendingWrites.get(path))) {
				pw.lastChange = /* @__PURE__ */ new Date();
				return this;
			}
			if (opts.atomic) {
				if (event === EV_UNLINK) {
					this._pendingUnlinks.set(path, args);
					setTimeout(() => {
						this._pendingUnlinks.forEach((entry, path) => {
							this.emit(...entry);
							this.emit(EV_ALL, ...entry);
							this._pendingUnlinks.delete(path);
						});
					}, typeof opts.atomic === "number" ? opts.atomic : 100);
					return this;
				}
				if (event === EV_ADD && this._pendingUnlinks.has(path)) {
					event = args[0] = EV_CHANGE;
					this._pendingUnlinks.delete(path);
				}
			}
			if (awf && (event === EV_ADD || event === EV_CHANGE) && this._readyEmitted) {
				const awfEmit = (err, stats) => {
					if (err) {
						event = args[0] = EV_ERROR;
						args[1] = err;
						this.emitWithAll(event, args);
					} else if (stats) {
						if (args.length > 2) args[2] = stats;
						else args.push(stats);
						this.emitWithAll(event, args);
					}
				};
				this._awaitWriteFinish(path, awf.stabilityThreshold, event, awfEmit);
				return this;
			}
			if (event === EV_CHANGE) {
				if (!this._throttle(EV_CHANGE, path, 50)) return this;
			}
			if (opts.alwaysStat && val1 === void 0 && (event === EV_ADD || event === EV_ADD_DIR || event === EV_CHANGE)) {
				const fullPath = opts.cwd ? sysPath.join(opts.cwd, path) : path;
				let stats;
				try {
					stats = await stat(fullPath);
				} catch (err) {}
				if (!stats || this.closed) return;
				args.push(stats);
			}
			this.emitWithAll(event, args);
			return this;
		}
		/**
		* Common handler for errors
		* @param {Error} error
		* @returns {Error|Boolean} The error if defined, otherwise the value of the FSWatcher instance's `closed` flag
		*/
		_handleError(error) {
			const code = error && error.code;
			if (error && code !== "ENOENT" && code !== "ENOTDIR" && (!this.options.ignorePermissionErrors || code !== "EPERM" && code !== "EACCES")) this.emit(EV_ERROR, error);
			return error || this.closed;
		}
		/**
		* Helper utility for throttling
		* @param {ThrottleType} actionType type being throttled
		* @param {Path} path being acted upon
		* @param {Number} timeout duration of time to suppress duplicate actions
		* @returns {Object|false} tracking object or false if action should be suppressed
		*/
		_throttle(actionType, path, timeout) {
			if (!this._throttled.has(actionType)) this._throttled.set(actionType, /* @__PURE__ */ new Map());
			/** @type {Map<Path, Object>} */
			const action = this._throttled.get(actionType);
			/** @type {Object} */
			const actionPath = action.get(path);
			if (actionPath) {
				actionPath.count++;
				return false;
			}
			let timeoutObject;
			const clear = () => {
				const item = action.get(path);
				const count = item ? item.count : 0;
				action.delete(path);
				clearTimeout(timeoutObject);
				if (item) clearTimeout(item.timeoutObject);
				return count;
			};
			timeoutObject = setTimeout(clear, timeout);
			const thr = {
				timeoutObject,
				clear,
				count: 0
			};
			action.set(path, thr);
			return thr;
		}
		_incrReadyCount() {
			return this._readyCount++;
		}
		/**
		* Awaits write operation to finish.
		* Polls a newly created file for size variations. When files size does not change for 'threshold' milliseconds calls callback.
		* @param {Path} path being acted upon
		* @param {Number} threshold Time in milliseconds a file size must be fixed before acknowledging write OP is finished
		* @param {EventName} event
		* @param {Function} awfEmit Callback to be called when ready for event to be emitted.
		*/
		_awaitWriteFinish(path, threshold, event, awfEmit) {
			let timeoutHandler;
			let fullPath = path;
			if (this.options.cwd && !sysPath.isAbsolute(path)) fullPath = sysPath.join(this.options.cwd, path);
			const now = /* @__PURE__ */ new Date();
			const awaitWriteFinish = (prevStat) => {
				fs$7.stat(fullPath, (err, curStat) => {
					if (err || !this._pendingWrites.has(path)) {
						if (err && err.code !== "ENOENT") awfEmit(err);
						return;
					}
					const now = Number(/* @__PURE__ */ new Date());
					if (prevStat && curStat.size !== prevStat.size) this._pendingWrites.get(path).lastChange = now;
					if (now - this._pendingWrites.get(path).lastChange >= threshold) {
						this._pendingWrites.delete(path);
						awfEmit(void 0, curStat);
					} else timeoutHandler = setTimeout(awaitWriteFinish, this.options.awaitWriteFinish.pollInterval, curStat);
				});
			};
			if (!this._pendingWrites.has(path)) {
				this._pendingWrites.set(path, {
					lastChange: now,
					cancelWait: () => {
						this._pendingWrites.delete(path);
						clearTimeout(timeoutHandler);
						return event;
					}
				});
				timeoutHandler = setTimeout(awaitWriteFinish, this.options.awaitWriteFinish.pollInterval);
			}
		}
		_getGlobIgnored() {
			return [...this._ignoredPaths.values()];
		}
		/**
		* Determines whether user has asked to ignore this path.
		* @param {Path} path filepath or dir
		* @param {fs.Stats=} stats result of fs.stat
		* @returns {Boolean}
		*/
		_isIgnored(path, stats) {
			if (this.options.atomic && DOT_RE.test(path)) return true;
			if (!this._userIgnored) {
				const { cwd } = this.options;
				const ign = this.options.ignored;
				const ignored = ign && ign.map(normalizeIgnored(cwd));
				const paths = arrify(ignored).filter((path) => typeof path === STRING_TYPE && !isGlob(path)).map((path) => path + SLASH_GLOBSTAR);
				const list = this._getGlobIgnored().map(normalizeIgnored(cwd)).concat(ignored, paths);
				this._userIgnored = anymatch(list, void 0, ANYMATCH_OPTS);
			}
			return this._userIgnored([path, stats]);
		}
		_isntIgnored(path, stat) {
			return !this._isIgnored(path, stat);
		}
		/**
		* Provides a set of common helpers and properties relating to symlink and glob handling.
		* @param {Path} path file, directory, or glob pattern being watched
		* @param {Number=} depth at any depth > 0, this isn't a glob
		* @returns {WatchHelper} object containing helpers for this path
		*/
		_getWatchHelpers(path, depth) {
			const watchPath = depth || this.options.disableGlobbing || !isGlob(path) ? path : globParent(path);
			const follow = this.options.followSymlinks;
			return new WatchHelper(path, watchPath, follow, this);
		}
		/**
		* Provides directory tracking objects
		* @param {String} directory path of the directory
		* @returns {DirEntry} the directory's tracking object
		*/
		_getWatchedDir(directory) {
			if (!this._boundRemove) this._boundRemove = this._remove.bind(this);
			const dir = sysPath.resolve(directory);
			if (!this._watched.has(dir)) this._watched.set(dir, new DirEntry(dir, this._boundRemove));
			return this._watched.get(dir);
		}
		/**
		* Check for read permissions.
		* Based on this answer on SO: https://stackoverflow.com/a/11781404/1358405
		* @param {fs.Stats} stats - object, result of fs_stat
		* @returns {Boolean} indicates whether the file can be read
		*/
		_hasReadPermissions(stats) {
			if (this.options.ignorePermissionErrors) return true;
			const st = (stats && Number.parseInt(stats.mode, 10)) & 511;
			const it = Number.parseInt(st.toString(8)[0], 10);
			return Boolean(4 & it);
		}
		/**
		* Handles emitting unlink events for
		* files and directories, and via recursion, for
		* files and directories within directories that are unlinked
		* @param {String} directory within which the following item is located
		* @param {String} item      base path of item/directory
		* @returns {void}
		*/
		_remove(directory, item, isDirectory) {
			const path = sysPath.join(directory, item);
			const fullPath = sysPath.resolve(path);
			isDirectory = isDirectory != null ? isDirectory : this._watched.has(path) || this._watched.has(fullPath);
			if (!this._throttle("remove", path, 100)) return;
			if (!isDirectory && !this.options.useFsEvents && this._watched.size === 1) this.add(directory, item, true);
			this._getWatchedDir(path).getChildren().forEach((nested) => this._remove(path, nested));
			const parent = this._getWatchedDir(directory);
			const wasTracked = parent.has(item);
			parent.remove(item);
			if (this._symlinkPaths.has(fullPath)) this._symlinkPaths.delete(fullPath);
			let relPath = path;
			if (this.options.cwd) relPath = sysPath.relative(this.options.cwd, path);
			if (this.options.awaitWriteFinish && this._pendingWrites.has(relPath)) {
				if (this._pendingWrites.get(relPath).cancelWait() === EV_ADD) return;
			}
			this._watched.delete(path);
			this._watched.delete(fullPath);
			const eventName = isDirectory ? EV_UNLINK_DIR : EV_UNLINK;
			if (wasTracked && !this._isIgnored(path)) this._emit(eventName, path);
			if (!this.options.useFsEvents) this._closePath(path);
		}
		/**
		* Closes all watchers for a path
		* @param {Path} path
		*/
		_closePath(path) {
			this._closeFile(path);
			const dir = sysPath.dirname(path);
			this._getWatchedDir(dir).remove(sysPath.basename(path));
		}
		/**
		* Closes only file-specific watchers
		* @param {Path} path
		*/
		_closeFile(path) {
			path = sysPath.normalize(path);
			const closers = this._closers.get(path);
			if (!closers) return;
			closers.forEach((closer) => closer());
			this._closers.delete(path);
		}
		/**
		*
		* @param {Path} path
		* @param {Function} closer
		*/
		_addPathCloser(path, closer) {
			if (!closer) return;
			path = sysPath.normalize(path);
			let list = this._closers.get(path);
			if (!list) {
				list = [];
				this._closers.set(path, list);
			}
			list.push(closer);
		}
		_readdirp(root, opts) {
			if (this.closed) return;
			let stream = readdirp(root, {
				type: EV_ALL,
				alwaysStat: true,
				lstat: true,
				...opts
			});
			this._streams.add(stream);
			stream.once(STR_CLOSE, () => {
				stream = void 0;
			});
			stream.once(STR_END, () => {
				if (stream) {
					this._streams.delete(stream);
					stream = void 0;
				}
			});
			return stream;
		}
	};
	/**
	* Instantiates watcher with paths to be tracked.
	* @param {String|Array<String>} paths file/directory paths and/or globs
	* @param {Object=} options chokidar opts
	* @returns an instance of FSWatcher for chaining.
	*/
	const watch = (paths, options) => {
		const watcher = new FSWatcher(options);
		watcher.add(paths);
		return watcher;
	};
	exports.watch = watch;
}));
var require_quote = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var OPS = [
		"||",
		"&&",
		";;",
		"|&",
		"<(",
		"<<<",
		">>",
		">&",
		"<&",
		"&",
		";",
		"(",
		")",
		"|",
		"<",
		">"
	];
	var LINE_TERMINATORS = /[\n\r\u2028\u2029]/;
	var GLOB_SHELL_SPECIAL = /[\s#!"$&'():;<=>@\\^`|]/g;
	module.exports = function quote(xs) {
		return xs.map(function(s) {
			if (s === "") return "''";
			if (s && typeof s === "object") {
				if (s.op === "glob") {
					if (typeof s.pattern !== "string") throw new TypeError("glob token requires a string `pattern`");
					if (LINE_TERMINATORS.test(s.pattern)) throw new TypeError("glob `pattern` must not contain line terminators");
					return s.pattern.replace(GLOB_SHELL_SPECIAL, "\\$&");
				}
				if (typeof s.op === "string") {
					if (OPS.indexOf(s.op) < 0) throw new TypeError("invalid `op` value: " + JSON.stringify(s.op));
					return s.op.replace(/[\s\S]/g, "\\$&");
				}
				if (typeof s.comment === "string") {
					if (LINE_TERMINATORS.test(s.comment)) throw new TypeError("`comment` must not contain line terminators");
					return "#" + s.comment;
				}
				throw new TypeError("unrecognized object token shape");
			}
			if (/["\s\\]/.test(s) && !/'/.test(s)) return "'" + s.replace(/(['])/g, "\\$1") + "'";
			if (/["'\s]/.test(s)) return "\"" + s.replace(/(["\\$`!])/g, "\\$1") + "\"";
			return String(s).replace(/([A-Za-z]:)?([#!"$&'()*,:;<=>?@[\\\]^`{|}])/g, "$1\\$2");
		}).join(" ");
	};
}));
var require_parse$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var CONTROL = "(?:" + [
		"\\|\\|",
		"\\&\\&",
		";;",
		"\\|\\&",
		"\\<\\(",
		"\\<\\<\\<",
		">>",
		">\\&",
		"<\\&",
		"[&;()|<>]"
	].join("|") + ")";
	var controlRE = new RegExp("^" + CONTROL + "$");
	var META = "|&;()<> \\t";
	var SINGLE_QUOTE = "\"((\\\\\"|[^\"])*?)\"";
	var DOUBLE_QUOTE = "'((\\\\'|[^'])*?)'";
	var hash = /^#$/;
	var SQ = "'";
	var DQ = "\"";
	var DS = "$";
	var TOKEN = "";
	var mult = 4294967296;
	for (var i = 0; i < 4; i++) TOKEN += (mult * Math.random()).toString(16);
	var startsWithToken = new RegExp("^" + TOKEN);
	function matchAll(s, r) {
		var origIndex = r.lastIndex;
		var matches = [];
		var matchObj;
		while (matchObj = r.exec(s)) {
			matches.push(matchObj);
			if (r.lastIndex === matchObj.index) r.lastIndex += 1;
		}
		r.lastIndex = origIndex;
		return matches;
	}
	function getVar(env, pre, key) {
		var r = typeof env === "function" ? env(key) : env[key];
		if (typeof r === "undefined" && key != "") r = "";
		else if (typeof r === "undefined") r = "$";
		if (typeof r === "object") return pre + TOKEN + JSON.stringify(r) + TOKEN;
		return pre + r;
	}
	function parseInternal(string, env, opts) {
		if (!opts) opts = {};
		var BS = opts.escape || "\\";
		var BAREWORD = "(\\" + BS + "['\"" + META + "]|[^\\s'\"" + META + "])+";
		var matches = matchAll(string, new RegExp(["(" + CONTROL + ")", "(" + BAREWORD + "|" + SINGLE_QUOTE + "|" + DOUBLE_QUOTE + ")+"].join("|"), "g"));
		if (matches.length === 0) return [];
		if (!env) env = {};
		var commented = false;
		return matches.map(function(match) {
			var s = match[0];
			if (!s || commented) return;
			if (controlRE.test(s)) return { op: s };
			var quote = false;
			var esc = false;
			var out = "";
			var isGlob = false;
			var i;
			function parseEnvVar() {
				i += 1;
				var varend;
				var varname;
				var char = s.charAt(i);
				if (char === "{") {
					i += 1;
					if (s.charAt(i) === "}") throw new Error("Bad substitution: " + s.slice(i - 2, i + 1));
					varend = s.indexOf("}", i);
					if (varend < 0) throw new Error("Bad substitution: " + s.slice(i));
					varname = s.slice(i, varend);
					i = varend;
				} else if (/[*@#?$!_-]/.test(char)) {
					varname = char;
					i += 1;
				} else {
					var slicedFromI = s.slice(i);
					varend = slicedFromI.match(/[^\w\d_]/);
					if (!varend) {
						varname = slicedFromI;
						i = s.length;
					} else {
						varname = slicedFromI.slice(0, varend.index);
						i += varend.index - 1;
					}
				}
				return getVar(env, "", varname);
			}
			for (i = 0; i < s.length; i++) {
				var c = s.charAt(i);
				isGlob = isGlob || !quote && (c === "*" || c === "?");
				if (esc) {
					out += c;
					esc = false;
				} else if (quote) if (c === quote) quote = false;
				else if (quote == SQ) out += c;
				else if (c === BS) {
					i += 1;
					c = s.charAt(i);
					if (c === DQ || c === BS || c === DS) out += c;
					else out += BS + c;
				} else if (c === DS) out += parseEnvVar();
				else out += c;
				else if (c === DQ || c === SQ) quote = c;
				else if (controlRE.test(c)) return { op: s };
				else if (hash.test(c)) {
					commented = true;
					var commentObj = { comment: string.slice(match.index + i + 1) };
					if (out.length) return [out, commentObj];
					return [commentObj];
				} else if (c === BS) esc = true;
				else if (c === DS) out += parseEnvVar();
				else out += c;
			}
			if (isGlob) return {
				op: "glob",
				pattern: out
			};
			return out;
		}).reduce(function(prev, arg) {
			return typeof arg === "undefined" ? prev : prev.concat(arg);
		}, []);
	}
	module.exports = function parse(s, env, opts) {
		var mapped = parseInternal(s, env, opts);
		if (typeof env !== "function") return mapped;
		return mapped.reduce(function(acc, s) {
			if (typeof s === "object") return acc.concat(s);
			var xs = s.split(RegExp("(" + TOKEN + ".*?" + TOKEN + ")", "g"));
			if (xs.length === 1) return acc.concat(xs[0]);
			return acc.concat(xs.filter(Boolean).map(function(x) {
				if (startsWithToken.test(x)) return JSON.parse(x.split(TOKEN)[1]);
				return x;
			}));
		}, []);
	};
}));
var require_shell_quote = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.quote = require_quote();
	exports.parse = require_parse$1();
}));
var require_macos = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		"/Applications/Atom.app/Contents/MacOS/Atom": "atom",
		"/Applications/Atom Beta.app/Contents/MacOS/Atom Beta": "/Applications/Atom Beta.app/Contents/MacOS/Atom Beta",
		"/Applications/Brackets.app/Contents/MacOS/Brackets": "brackets",
		"/Applications/Sublime Text.app/Contents/MacOS/Sublime Text": "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl",
		"/Applications/Sublime Text.app/Contents/MacOS/sublime_text": "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl",
		"/Applications/Sublime Text 2.app/Contents/MacOS/Sublime Text 2": "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl",
		"/Applications/Sublime Text Dev.app/Contents/MacOS/Sublime Text": "/Applications/Sublime Text Dev.app/Contents/SharedSupport/bin/subl",
		"/Applications/Visual Studio Code.app/Contents/MacOS/Code": "code",
		"/Applications/Visual Studio Code.app/Contents/MacOS/Electron": "code",
		"/Applications/Visual Studio Code - Insiders.app/Contents/MacOS/Code - Insiders": "code-insiders",
		"/Applications/Visual Studio Code - Insiders.app/Contents/MacOS/Electron": "code-insiders",
		"/Applications/VSCodium.app/Contents/MacOS/Electron": "codium",
		"/Applications/Cursor.app/Contents/MacOS/Cursor": "cursor",
		"/Applications/Trae.app/Contents/MacOS/Electron": "trae",
		"/Applications/Antigravity.app/Contents/MacOS/Electron": "antigravity",
		"/Applications/AppCode.app/Contents/MacOS/appcode": "/Applications/AppCode.app/Contents/MacOS/appcode",
		"/Applications/CLion.app/Contents/MacOS/clion": "/Applications/CLion.app/Contents/MacOS/clion",
		"/Applications/IntelliJ IDEA.app/Contents/MacOS/idea": "/Applications/IntelliJ IDEA.app/Contents/MacOS/idea",
		"/Applications/IntelliJ IDEA Ultimate.app/Contents/MacOS/idea": "/Applications/IntelliJ IDEA Ultimate.app/Contents/MacOS/idea",
		"/Applications/IntelliJ IDEA Community Edition.app/Contents/MacOS/idea": "/Applications/IntelliJ IDEA Community Edition.app/Contents/MacOS/idea",
		"/Applications/PhpStorm.app/Contents/MacOS/phpstorm": "/Applications/PhpStorm.app/Contents/MacOS/phpstorm",
		"/Applications/PyCharm.app/Contents/MacOS/pycharm": "/Applications/PyCharm.app/Contents/MacOS/pycharm",
		"/Applications/PyCharm CE.app/Contents/MacOS/pycharm": "/Applications/PyCharm CE.app/Contents/MacOS/pycharm",
		"/Applications/RubyMine.app/Contents/MacOS/rubymine": "/Applications/RubyMine.app/Contents/MacOS/rubymine",
		"/Applications/WebStorm.app/Contents/MacOS/webstorm": "/Applications/WebStorm.app/Contents/MacOS/webstorm",
		"/Applications/MacVim.app/Contents/MacOS/MacVim": "mvim",
		"/Applications/GoLand.app/Contents/MacOS/goland": "/Applications/GoLand.app/Contents/MacOS/goland",
		"/Applications/Rider.app/Contents/MacOS/rider": "/Applications/Rider.app/Contents/MacOS/rider",
		"/Applications/Zed.app/Contents/MacOS/zed": "zed"
	};
}));
var require_linux = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		atom: "atom",
		Brackets: "brackets",
		"code-insiders": "code-insiders",
		code: "code",
		vscodium: "vscodium",
		codium: "codium",
		cursor: "cursor",
		trae: "trae",
		antigravity: "antigravity",
		emacs: "emacs",
		gvim: "gvim",
		idea: "idea",
		"idea.sh": "idea",
		phpstorm: "phpstorm",
		"phpstorm.sh": "phpstorm",
		pycharm: "pycharm",
		"pycharm.sh": "pycharm",
		rubymine: "rubymine",
		"rubymine.sh": "rubymine",
		sublime_text: "subl",
		vim: "vim",
		webstorm: "webstorm",
		"webstorm.sh": "webstorm",
		goland: "goland",
		"goland.sh": "goland",
		rider: "rider",
		"rider.sh": "rider",
		zed: "zed"
	};
}));
var require_windows$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = [
		"Brackets.exe",
		"Code.exe",
		"Code - Insiders.exe",
		"VSCodium.exe",
		"Cursor.exe",
		"atom.exe",
		"sublime_text.exe",
		"notepad++.exe",
		"clion.exe",
		"clion64.exe",
		"idea.exe",
		"idea64.exe",
		"phpstorm.exe",
		"phpstorm64.exe",
		"pycharm.exe",
		"pycharm64.exe",
		"rubymine.exe",
		"rubymine64.exe",
		"webstorm.exe",
		"webstorm64.exe",
		"goland.exe",
		"goland64.exe",
		"rider.exe",
		"rider64.exe",
		"Trae.exe",
		"zed.exe",
		"Antigravity.exe"
	];
}));
var require_guess = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const path$9 = __require("path");
	const shellQuote = require_shell_quote();
	const childProcess$2 = __require("child_process");
	const COMMON_EDITORS_MACOS = require_macos();
	const COMMON_EDITORS_LINUX = require_linux();
	const COMMON_EDITORS_WIN = require_windows$1();
	function getEditorFromMacProcesses(output) {
		const processNames = Object.keys(COMMON_EDITORS_MACOS);
		const processList = output.split("\n");
		for (let i = 0; i < processNames.length; i++) {
			const processName = processNames[i];
			if (processList.includes(processName)) return COMMON_EDITORS_MACOS[processName];
			const processNameWithoutApplications = processName.replace("/Applications", "");
			if (output.indexOf(processNameWithoutApplications) !== -1) {
				if (processName !== COMMON_EDITORS_MACOS[processName]) return COMMON_EDITORS_MACOS[processName];
				const runningProcess = processList.find((procName) => procName.endsWith(processNameWithoutApplications));
				if (runningProcess !== void 0) return runningProcess;
			}
		}
	}
	function getEditorFromWindowsProcesses(output) {
		const runningProcesses = output.split("\r\n");
		for (let i = 0; i < runningProcesses.length; i++) {
			const fullProcessPath = runningProcesses[i].trim();
			const shortProcessName = path$9.win32.basename(fullProcessPath);
			if (COMMON_EDITORS_WIN.indexOf(shortProcessName) !== -1) return fullProcessPath;
		}
	}
	function getEditorFromLinuxProcesses(output) {
		const processNames = Object.keys(COMMON_EDITORS_LINUX);
		for (let i = 0; i < processNames.length; i++) {
			const processName = processNames[i];
			if (output.indexOf(processName) !== -1) return COMMON_EDITORS_LINUX[processName];
		}
	}
	function guessEditor(specifiedEditor) {
		if (specifiedEditor) return shellQuote.parse(specifiedEditor);
		if (processModule.env.LAUNCH_EDITOR) return [processModule.env.LAUNCH_EDITOR];
		if (processModule.versions.webcontainer) return [processModule.env.EDITOR || "code"];
		try {
			if (processModule.platform === "darwin") {
				const editor = getEditorFromMacProcesses(childProcess$2.execSync("ps x -o comm=", { stdio: [
					"pipe",
					"pipe",
					"ignore"
				] }).toString());
				if (editor !== void 0) return [editor];
			} else if (processModule.platform === "win32") {
				const editor = getEditorFromWindowsProcesses(childProcess$2.execSync("powershell -NoProfile -Command \"[Console]::OutputEncoding=[Text.Encoding]::UTF8;Get-CimInstance -Query \\\"select executablepath from win32_process where executablepath is not null\\\" | % { $_.ExecutablePath }\"", { stdio: [
					"pipe",
					"pipe",
					"ignore"
				] }).toString());
				if (editor !== void 0) return [editor];
			} else if (processModule.platform === "linux") {
				const editor = getEditorFromLinuxProcesses(childProcess$2.execSync("ps x --no-heading -o comm --sort=comm", { stdio: [
					"pipe",
					"pipe",
					"ignore"
				] }).toString());
				if (editor !== void 0) return [editor];
			}
		} catch (ignoreError) {}
		if (processModule.env.VISUAL) return [processModule.env.VISUAL];
		else if (processModule.env.EDITOR) return [processModule.env.EDITOR];
		return [null];
	}
	module.exports = guessEditor;
	module.exports.getEditorFromMacProcesses = getEditorFromMacProcesses;
	module.exports.getEditorFromWindowsProcesses = getEditorFromWindowsProcesses;
	module.exports.getEditorFromLinuxProcesses = getEditorFromLinuxProcesses;
}));
var require_get_args = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const path$8 = __require("path");
	module.exports = function getArgumentsForPosition(editor, fileName, lineNumber, columnNumber = 1) {
		switch (path$8.basename(editor).replace(/\.(exe|cmd|bat)$/i, "")) {
			case "atom":
			case "Atom":
			case "Atom Beta":
			case "subl":
			case "sublime":
			case "sublime_text":
			case "wstorm":
			case "charm":
			case "zed": return [`${fileName}:${lineNumber}:${columnNumber}`];
			case "notepad++": return [
				"-n" + lineNumber,
				"-c" + columnNumber,
				fileName
			];
			case "vim":
			case "mvim": return [`+call cursor(${lineNumber}, ${columnNumber})`, fileName];
			case "joe":
			case "gvim": return [`+${lineNumber}`, fileName];
			case "emacs":
			case "emacsclient": return [`+${lineNumber}:${columnNumber}`, fileName];
			case "rmate":
			case "mate":
			case "mine": return [
				"--line",
				lineNumber,
				fileName
			];
			case "code":
			case "Code":
			case "code-insiders":
			case "Code - Insiders":
			case "codium":
			case "trae":
			case "antigravity":
			case "cursor":
			case "vscodium":
			case "VSCodium": return [
				"-r",
				"-g",
				`${fileName}:${lineNumber}:${columnNumber}`
			];
			case "appcode":
			case "clion":
			case "clion64":
			case "idea":
			case "idea64":
			case "phpstorm":
			case "phpstorm64":
			case "pycharm":
			case "pycharm64":
			case "rubymine":
			case "rubymine64":
			case "webstorm":
			case "webstorm64":
			case "goland":
			case "goland64":
			case "rider":
			case "rider64": return [
				"--line",
				lineNumber,
				"--column",
				columnNumber,
				fileName
			];
		}
		if (processModule.env.LAUNCH_EDITOR) return [
			fileName,
			lineNumber,
			columnNumber
		];
		return [fileName];
	};
}));
var require_launch_editor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Copyright (c) 2015-present, Facebook, Inc.
	*
	* This source code is licensed under the MIT license found in the
	* LICENSE file at
	* https://github.com/facebookincubator/create-react-app/blob/master/LICENSE
	*
	* Modified by Yuxi Evan You
	*/
	const fs$6 = __require("fs");
	const os$2 = __require("os");
	const path$7 = __require("path");
	const colors = require_picocolors();
	const childProcess$1 = __require("child_process");
	const guessEditor = require_guess();
	const getArgumentsForPosition = require_get_args();
	function wrapErrorCallback(cb) {
		return (fileName, errorMessage) => {
			console.log();
			console.log(colors.red("Could not open " + path$7.basename(fileName) + " in the editor."));
			if (errorMessage) {
				if (errorMessage[errorMessage.length - 1] !== ".") errorMessage += ".";
				console.log(colors.red("The editor process exited with an error: " + errorMessage));
			}
			console.log();
			if (cb) cb(fileName, errorMessage);
		};
	}
	function isTerminalEditor(editor) {
		switch (editor) {
			case "vim":
			case "emacs":
			case "nano": return true;
		}
		return false;
	}
	const positionRE = /:(\d+)(:(\d+))?$/;
	function parseFile(file) {
		if (file.startsWith("file://")) file = __require("url").fileURLToPath(file);
		const fileName = file.replace(positionRE, "");
		const match = file.match(positionRE);
		return {
			fileName,
			lineNumber: match && match[1],
			columnNumber: match && match[3]
		};
	}
	let currentChildProcess = null;
	function launchEditor(file, specifiedEditor, onErrorCallback) {
		const parsed = parseFile(file);
		let { fileName } = parsed;
		const { lineNumber, columnNumber } = parsed;
		if (processModule.platform === "win32" && path$7.resolve(fileName).startsWith("\\\\")) return onErrorCallback(fileName, "UNC paths are not supported on Windows to avoid security issues. See https://github.com/vitejs/launch-editor/tree/main/packages/launch-editor#unc-paths-on-windows for details.");
		if (!fs$6.existsSync(fileName)) return;
		if (typeof specifiedEditor === "function") {
			onErrorCallback = specifiedEditor;
			specifiedEditor = void 0;
		}
		onErrorCallback = wrapErrorCallback(onErrorCallback);
		const [editor, ...args] = guessEditor(specifiedEditor);
		if (!editor) {
			onErrorCallback(fileName, null);
			return;
		}
		if (processModule.platform === "linux" && fileName.startsWith("/mnt/") && /Microsoft/i.test(os$2.release())) fileName = path$7.relative("", fileName);
		if (lineNumber) {
			const extraArgs = getArgumentsForPosition(editor, fileName, lineNumber, columnNumber);
			args.push.apply(args, extraArgs);
		} else args.push(fileName);
		if (currentChildProcess && isTerminalEditor(editor)) currentChildProcess.kill("SIGKILL");
		if (processModule.platform === "win32") {
			function escapeCmdArgs(cmdArgs) {
				return cmdArgs.replace(/([&|<>,;=^])/g, "^$1");
			}
			function doubleQuoteIfNeeded(str) {
				if (str.includes("^")) return `^"${str}^"`;
				else if (str.includes(" ")) return `"${str}"`;
				return str;
			}
			const launchCommand = [editor, ...args.map(escapeCmdArgs)].map(doubleQuoteIfNeeded).join(" ");
			currentChildProcess = childProcess$1.exec(launchCommand, {
				stdio: "inherit",
				shell: true
			});
		} else currentChildProcess = childProcess$1.spawn(editor, args, { stdio: "inherit" });
		currentChildProcess.on("exit", function(errorCode) {
			currentChildProcess = null;
			if (errorCode) onErrorCallback(fileName, "(code " + errorCode + ")");
		});
		currentChildProcess.on("error", function(error) {
			let { code, message } = error;
			if ("ENOENT" === code) message = `${message} ('${editor}' command does not exist in 'PATH')`;
			onErrorCallback(fileName, message);
		});
	}
	module.exports = launchEditor;
}));
var require_launch_editor_middleware = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const path$6 = __require("path");
	const launch = require_launch_editor();
	module.exports = (specifiedEditor, srcRoot, onErrorCallback) => {
		if (typeof specifiedEditor === "function") {
			onErrorCallback = specifiedEditor;
			specifiedEditor = void 0;
		}
		if (typeof srcRoot === "function") {
			onErrorCallback = srcRoot;
			srcRoot = void 0;
		}
		srcRoot = srcRoot || processModule.cwd();
		return function launchEditorMiddleware(req, res) {
			let url;
			try {
				const fullUrl = req.url.startsWith("http") ? req.url : `http://localhost${req.url}`;
				url = new URL(fullUrl);
			} catch (_err) {
				res.statusCode = 500;
				res.end(`launch-editor-middleware: invalid URL.`);
				return;
			}
			const file = url.searchParams.get("file");
			if (!file) {
				res.statusCode = 500;
				res.end(`launch-editor-middleware: required query param "file" is missing.`);
			} else {
				const resolved = file.startsWith("file://") ? file : path$6.resolve(srcRoot, file);
				launch(resolved, specifiedEditor, onErrorCallback);
				res.end();
			}
		};
	};
}));
var require_dist$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var src_exports = {};
	__export(src_exports, {
		KNOWN_AGENTS: () => KNOWN_AGENTS,
		determineAgent: () => determineAgent
	});
	module.exports = __toCommonJS(src_exports);
	var import_promises = __require("node:fs/promises");
	var import_node_fs = __require("node:fs");
	const DEVIN_LOCAL_PATH = "/opt/.devin";
	const CURSOR = "cursor";
	const CURSOR_CLI = "cursor-cli";
	const CLAUDE = "claude";
	const COWORK = "cowork";
	const DEVIN = "devin";
	const REPLIT = "replit";
	const GEMINI = "gemini";
	const CODEX = "codex";
	const ANTIGRAVITY = "antigravity";
	const AUGMENT_CLI = "augment-cli";
	const OPENCODE = "opencode";
	const GITHUB_COPILOT = "github-copilot";
	const GITHUB_COPILOT_CLI = "github-copilot-cli";
	const V0 = "v0";
	const KNOWN_AGENTS = {
		CURSOR,
		CURSOR_CLI,
		CLAUDE,
		COWORK,
		DEVIN,
		REPLIT,
		GEMINI,
		CODEX,
		ANTIGRAVITY,
		AUGMENT_CLI,
		OPENCODE,
		GITHUB_COPILOT,
		V0
	};
	async function determineAgent() {
		if (processModule.env.AI_AGENT) {
			const name = processModule.env.AI_AGENT.trim();
			if (name) {
				if (name === GITHUB_COPILOT || name === GITHUB_COPILOT_CLI) return {
					isAgent: true,
					agent: { name: GITHUB_COPILOT }
				};
				if (name === V0) return {
					isAgent: true,
					agent: { name: V0 }
				};
				return {
					isAgent: true,
					agent: { name }
				};
			}
		}
		if (processModule.env.CURSOR_TRACE_ID) return {
			isAgent: true,
			agent: { name: CURSOR }
		};
		if (processModule.env.CURSOR_AGENT || processModule.env.CURSOR_EXTENSION_HOST_ROLE === "agent-exec") return {
			isAgent: true,
			agent: { name: CURSOR_CLI }
		};
		if (processModule.env.GEMINI_CLI) return {
			isAgent: true,
			agent: { name: GEMINI }
		};
		if (processModule.env.CODEX_SANDBOX || processModule.env.CODEX_CI || processModule.env.CODEX_THREAD_ID) return {
			isAgent: true,
			agent: { name: CODEX }
		};
		if (processModule.env.ANTIGRAVITY_AGENT) return {
			isAgent: true,
			agent: { name: ANTIGRAVITY }
		};
		if (processModule.env.AUGMENT_AGENT) return {
			isAgent: true,
			agent: { name: AUGMENT_CLI }
		};
		if (processModule.env.OPENCODE_CLIENT) return {
			isAgent: true,
			agent: { name: OPENCODE }
		};
		if (processModule.env.CLAUDECODE || processModule.env.CLAUDE_CODE) {
			if (processModule.env.CLAUDE_CODE_IS_COWORK) return {
				isAgent: true,
				agent: { name: COWORK }
			};
			return {
				isAgent: true,
				agent: { name: CLAUDE }
			};
		}
		if (processModule.env.REPL_ID) return {
			isAgent: true,
			agent: { name: REPLIT }
		};
		if (processModule.env.COPILOT_MODEL || processModule.env.COPILOT_ALLOW_ALL || processModule.env.COPILOT_GITHUB_TOKEN) return {
			isAgent: true,
			agent: { name: GITHUB_COPILOT }
		};
		try {
			await (0, import_promises.access)(DEVIN_LOCAL_PATH, import_node_fs.constants.F_OK);
			return {
				isAgent: true,
				agent: { name: DEVIN }
			};
		} catch (_error) {}
		return {
			isAgent: false,
			agent: void 0
		};
	}
	0 && (module.exports = {
		KNOWN_AGENTS,
		determineAgent
	});
}));
new RegExp(`\\.(?:json|json5)(?:$|\\?)`);
var isDockerCached;
function hasDockerEnv() {
	try {
		fs.statSync("/.dockerenv");
		return true;
	} catch {
		return false;
	}
}
function hasDockerCGroup() {
	try {
		return fs.readFileSync("/proc/self/cgroup", "utf8").includes("docker");
	} catch {
		return false;
	}
}
function isDocker() {
	if (isDockerCached === void 0) isDockerCached = hasDockerEnv() || hasDockerCGroup();
	return isDockerCached;
}
var cachedResult;
var hasContainerEnv = () => {
	try {
		fs.statSync("/run/.containerenv");
		return true;
	} catch {
		return false;
	}
};
function isInsideContainer() {
	if (cachedResult === void 0) cachedResult = hasContainerEnv() || isDocker();
	return cachedResult;
}
var isWsl = () => {
	if (processModule.platform !== "linux") return false;
	if (os.release().toLowerCase().includes("microsoft")) {
		if (isInsideContainer()) return false;
		return true;
	}
	try {
		return fs.readFileSync("/proc/version", "utf8").toLowerCase().includes("microsoft") ? !isInsideContainer() : false;
	} catch {
		return false;
	}
};
var is_wsl_default = processModule.env.__IS_WSL_TEST__ ? isWsl : isWsl();
function defineLazyProperty(object, propertyName, valueGetter) {
	const define = (value) => Object.defineProperty(object, propertyName, {
		value,
		enumerable: true,
		writable: true
	});
	Object.defineProperty(object, propertyName, {
		configurable: true,
		enumerable: true,
		get() {
			const result = valueGetter();
			define(result);
			return result;
		},
		set(value) {
			define(value);
		}
	});
	return object;
}
promisify(execFile);
promisify(execFile);
promisify(execFile);
new Map(Object.entries({
	MSEdgeHTM: {
		name: "Edge",
		id: "com.microsoft.edge"
	},
	MSEdgeBHTML: {
		name: "Edge Beta",
		id: "com.microsoft.edge.beta"
	},
	MSEdgeDHTML: {
		name: "Edge Dev",
		id: "com.microsoft.edge.dev"
	},
	AppXq0fevzme2pys62n3e0fbqa7peapykr8v: {
		name: "Edge",
		id: "com.microsoft.edge.old"
	},
	ChromeHTML: {
		name: "Chrome",
		id: "com.google.chrome"
	},
	ChromeBHTML: {
		name: "Chrome Beta",
		id: "com.google.chrome.beta"
	},
	ChromeDHTML: {
		name: "Chrome Dev",
		id: "com.google.chrome.dev"
	},
	ChromiumHTM: {
		name: "Chromium",
		id: "org.chromium.Chromium"
	},
	BraveHTML: {
		name: "Brave",
		id: "com.brave.Browser"
	},
	BraveBHTML: {
		name: "Brave Beta",
		id: "com.brave.Browser.beta"
	},
	BraveDHTML: {
		name: "Brave Dev",
		id: "com.brave.Browser.dev"
	},
	BraveSSHTM: {
		name: "Brave Nightly",
		id: "com.brave.Browser.nightly"
	},
	FirefoxURL: {
		name: "Firefox",
		id: "org.mozilla.firefox"
	},
	OperaStable: {
		name: "Opera",
		id: "com.operasoftware.Opera"
	},
	VivaldiHTM: {
		name: "Vivaldi",
		id: "com.vivaldi.Vivaldi"
	},
	"IE.HTTP": {
		name: "Internet Explorer",
		id: "com.microsoft.ie"
	}
}));
promisify(execFile);
promisify(child_process_default.execFile);
var __dirname = path.dirname(fileURLToPath(import.meta.url));
path.join(__dirname, "xdg-open");
var { platform, arch } = processModule;
function detectArchBinary(binary) {
	if (typeof binary === "string" || Array.isArray(binary)) return binary;
	const { [arch]: archBinary } = binary;
	if (!archBinary) throw new Error(`${arch} is not supported`);
	return archBinary;
}
function detectPlatformBinary({ [platform]: platformBinary }, { wsl }) {
	if (wsl && is_wsl_default) return detectArchBinary(wsl);
	if (!platformBinary) throw new Error(`${platform} is not supported`);
	return detectArchBinary(platformBinary);
}
var apps = {};
defineLazyProperty(apps, "chrome", () => detectPlatformBinary({
	darwin: "google chrome",
	win32: "chrome",
	linux: [
		"google-chrome",
		"google-chrome-stable",
		"chromium"
	]
}, { wsl: {
	ia32: "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
	x64: ["/mnt/c/Program Files/Google/Chrome/Application/chrome.exe", "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe"]
} }));
defineLazyProperty(apps, "brave", () => detectPlatformBinary({
	darwin: "brave browser",
	win32: "brave",
	linux: ["brave-browser", "brave"]
}, { wsl: {
	ia32: "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe",
	x64: ["/mnt/c/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe", "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe"]
} }));
defineLazyProperty(apps, "firefox", () => detectPlatformBinary({
	darwin: "firefox",
	win32: String.raw`C:\Program Files\Mozilla Firefox\firefox.exe`,
	linux: "firefox"
}, { wsl: "/mnt/c/Program Files/Mozilla Firefox/firefox.exe" }));
defineLazyProperty(apps, "edge", () => detectPlatformBinary({
	darwin: "microsoft edge",
	win32: "msedge",
	linux: ["microsoft-edge", "microsoft-edge-dev"]
}, { wsl: "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" }));
defineLazyProperty(apps, "browser", () => "browser");
defineLazyProperty(apps, "browserPrivate", () => "browserPrivate");
var require_windows = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = isexe;
	isexe.sync = sync;
	var fs$5 = __require("fs");
	function checkPathExt(path, options) {
		var pathext = options.pathExt !== void 0 ? options.pathExt : processModule.env.PATHEXT;
		if (!pathext) return true;
		pathext = pathext.split(";");
		if (pathext.indexOf("") !== -1) return true;
		for (var i = 0; i < pathext.length; i++) {
			var p = pathext[i].toLowerCase();
			if (p && path.substr(-p.length).toLowerCase() === p) return true;
		}
		return false;
	}
	function checkStat(stat, path, options) {
		if (!stat.isSymbolicLink() && !stat.isFile()) return false;
		return checkPathExt(path, options);
	}
	function isexe(path, options, cb) {
		fs$5.stat(path, function(er, stat) {
			cb(er, er ? false : checkStat(stat, path, options));
		});
	}
	function sync(path, options) {
		return checkStat(fs$5.statSync(path), path, options);
	}
}));
var require_mode = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = isexe;
	isexe.sync = sync;
	var fs$4 = __require("fs");
	function isexe(path, options, cb) {
		fs$4.stat(path, function(er, stat) {
			cb(er, er ? false : checkStat(stat, options));
		});
	}
	function sync(path, options) {
		return checkStat(fs$4.statSync(path), options);
	}
	function checkStat(stat, options) {
		return stat.isFile() && checkMode(stat, options);
	}
	function checkMode(stat, options) {
		var mod = stat.mode;
		var uid = stat.uid;
		var gid = stat.gid;
		var myUid = options.uid !== void 0 ? options.uid : processModule.getuid && processModule.getuid();
		var myGid = options.gid !== void 0 ? options.gid : processModule.getgid && processModule.getgid();
		var u = parseInt("100", 8);
		var g = parseInt("010", 8);
		var o = parseInt("001", 8);
		var ug = u | g;
		return mod & o || mod & g && gid === myGid || mod & u && uid === myUid || mod & ug && myUid === 0;
	}
}));
var require_isexe = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	__require("fs");
	var core;
	if (processModule.platform === "win32" || globalthis_default.TESTING_WINDOWS) core = require_windows();
	else core = require_mode();
	module.exports = isexe;
	isexe.sync = sync;
	function isexe(path, options, cb) {
		if (typeof options === "function") {
			cb = options;
			options = {};
		}
		if (!cb) {
			if (typeof Promise !== "function") throw new TypeError("callback not provided");
			return new Promise(function(resolve, reject) {
				isexe(path, options || {}, function(er, is) {
					if (er) reject(er);
					else resolve(is);
				});
			});
		}
		core(path, options || {}, function(er, is) {
			if (er) {
				if (er.code === "EACCES" || options && options.ignoreErrors) {
					er = null;
					is = false;
				}
			}
			cb(er, is);
		});
	}
	function sync(path, options) {
		try {
			return core.sync(path, options || {});
		} catch (er) {
			if (options && options.ignoreErrors || er.code === "EACCES") return false;
			else throw er;
		}
	}
}));
var require_which = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const isWindows = processModule.platform === "win32" || processModule.env.OSTYPE === "cygwin" || processModule.env.OSTYPE === "msys";
	const path$5 = __require("path");
	const COLON = isWindows ? ";" : ":";
	const isexe = require_isexe();
	const getNotFoundError = (cmd) => Object.assign(/* @__PURE__ */ new Error(`not found: ${cmd}`), { code: "ENOENT" });
	const getPathInfo = (cmd, opt) => {
		const colon = opt.colon || COLON;
		const pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? [""] : [...isWindows ? [processModule.cwd()] : [], ...(opt.path || processModule.env.PATH || 
		/* istanbul ignore next: very unusual */ "").split(colon)];
		const pathExtExe = isWindows ? opt.pathExt || processModule.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
		const pathExt = isWindows ? pathExtExe.split(colon) : [""];
		if (isWindows) {
			if (cmd.indexOf(".") !== -1 && pathExt[0] !== "") pathExt.unshift("");
		}
		return {
			pathEnv,
			pathExt,
			pathExtExe
		};
	};
	const which = (cmd, opt, cb) => {
		if (typeof opt === "function") {
			cb = opt;
			opt = {};
		}
		if (!opt) opt = {};
		const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
		const found = [];
		const step = (i) => new Promise((resolve, reject) => {
			if (i === pathEnv.length) return opt.all && found.length ? resolve(found) : reject(getNotFoundError(cmd));
			const ppRaw = pathEnv[i];
			const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
			const pCmd = path$5.join(pathPart, cmd);
			const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
			resolve(subStep(p, i, 0));
		});
		const subStep = (p, i, ii) => new Promise((resolve, reject) => {
			if (ii === pathExt.length) return resolve(step(i + 1));
			const ext = pathExt[ii];
			isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
				if (!er && is) if (opt.all) found.push(p + ext);
				else return resolve(p + ext);
				return resolve(subStep(p, i, ii + 1));
			});
		});
		return cb ? step(0).then((res) => cb(null, res), cb) : step(0);
	};
	const whichSync = (cmd, opt) => {
		opt = opt || {};
		const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
		const found = [];
		for (let i = 0; i < pathEnv.length; i++) {
			const ppRaw = pathEnv[i];
			const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
			const pCmd = path$5.join(pathPart, cmd);
			const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
			for (let j = 0; j < pathExt.length; j++) {
				const cur = p + pathExt[j];
				try {
					if (isexe.sync(cur, { pathExt: pathExtExe })) if (opt.all) found.push(cur);
					else return cur;
				} catch (ex) {}
			}
		}
		if (opt.all && found.length) return found;
		if (opt.nothrow) return null;
		throw getNotFoundError(cmd);
	};
	module.exports = which;
	which.sync = whichSync;
}));
var require_path_key = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const pathKey = (options = {}) => {
		const environment = options.env || processModule.env;
		if ((options.platform || processModule.platform) !== "win32") return "PATH";
		return Object.keys(environment).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
	};
	module.exports = pathKey;
	module.exports.default = pathKey;
}));
var require_resolveCommand = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const path$4 = __require("path");
	const which = require_which();
	const getPathKey = require_path_key();
	function resolveCommandAttempt(parsed, withoutPathExt) {
		const env = parsed.options.env || processModule.env;
		const cwd = processModule.cwd();
		const hasCustomCwd = parsed.options.cwd != null;
		const shouldSwitchCwd = hasCustomCwd && processModule.chdir !== void 0 && !processModule.chdir.disabled;
		if (shouldSwitchCwd) try {
			processModule.chdir(parsed.options.cwd);
		} catch (err) {}
		let resolved;
		try {
			resolved = which.sync(parsed.command, {
				path: env[getPathKey({ env })],
				pathExt: withoutPathExt ? path$4.delimiter : void 0
			});
		} catch (e) {} finally {
			if (shouldSwitchCwd) processModule.chdir(cwd);
		}
		if (resolved) resolved = path$4.resolve(hasCustomCwd ? parsed.options.cwd : "", resolved);
		return resolved;
	}
	function resolveCommand(parsed) {
		return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
	}
	module.exports = resolveCommand;
}));
var require_escape = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;
	function escapeCommand(arg) {
		arg = arg.replace(metaCharsRegExp, "^$1");
		return arg;
	}
	function escapeArgument(arg, doubleEscapeMetaChars) {
		arg = `${arg}`;
		arg = arg.replace(/(?=(\\+?)?)\1"/g, "$1$1\\\"");
		arg = arg.replace(/(?=(\\+?)?)\1$/, "$1$1");
		arg = `"${arg}"`;
		arg = arg.replace(metaCharsRegExp, "^$1");
		if (doubleEscapeMetaChars) arg = arg.replace(metaCharsRegExp, "^$1");
		return arg;
	}
	module.exports.command = escapeCommand;
	module.exports.argument = escapeArgument;
}));
var require_shebang_regex = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = /^#!(.*)/;
}));
var require_shebang_command = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const shebangRegex = require_shebang_regex();
	module.exports = (string = "") => {
		const match = string.match(shebangRegex);
		if (!match) return null;
		const [path, argument] = match[0].replace(/#! ?/, "").split(" ");
		const binary = path.split("/").pop();
		if (binary === "env") return argument;
		return argument ? `${binary} ${argument}` : binary;
	};
}));
var require_readShebang = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const fs$3 = __require("fs");
	const shebangCommand = require_shebang_command();
	function readShebang(command) {
		const size = 150;
		const buffer = Buffer.alloc(size);
		let fd;
		try {
			fd = fs$3.openSync(command, "r");
			fs$3.readSync(fd, buffer, 0, size, 0);
			fs$3.closeSync(fd);
		} catch (e) {}
		return shebangCommand(buffer.toString());
	}
	module.exports = readShebang;
}));
var require_parse$3 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const path$3 = __require("path");
	const resolveCommand = require_resolveCommand();
	const escape = require_escape();
	const readShebang = require_readShebang();
	const isWin = processModule.platform === "win32";
	const isExecutableRegExp = /\.(?:com|exe)$/i;
	const isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
	function detectShebang(parsed) {
		parsed.file = resolveCommand(parsed);
		const shebang = parsed.file && readShebang(parsed.file);
		if (shebang) {
			parsed.args.unshift(parsed.file);
			parsed.command = shebang;
			return resolveCommand(parsed);
		}
		return parsed.file;
	}
	function parseNonShell(parsed) {
		if (!isWin) return parsed;
		const commandFile = detectShebang(parsed);
		const needsShell = !isExecutableRegExp.test(commandFile);
		if (parsed.options.forceShell || needsShell) {
			const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);
			parsed.command = path$3.normalize(parsed.command);
			parsed.command = escape.command(parsed.command);
			parsed.args = parsed.args.map((arg) => escape.argument(arg, needsDoubleEscapeMetaChars));
			parsed.args = [
				"/d",
				"/s",
				"/c",
				`"${[parsed.command].concat(parsed.args).join(" ")}"`
			];
			parsed.command = processModule.env.comspec || "cmd.exe";
			parsed.options.windowsVerbatimArguments = true;
		}
		return parsed;
	}
	function parse(command, args, options) {
		if (args && !Array.isArray(args)) {
			options = args;
			args = null;
		}
		args = args ? args.slice(0) : [];
		options = Object.assign({}, options);
		const parsed = {
			command,
			args,
			options,
			file: void 0,
			original: {
				command,
				args
			}
		};
		return options.shell ? parsed : parseNonShell(parsed);
	}
	module.exports = parse;
}));
var require_enoent = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const isWin = processModule.platform === "win32";
	function notFoundError(original, syscall) {
		return Object.assign(/* @__PURE__ */ new Error(`${syscall} ${original.command} ENOENT`), {
			code: "ENOENT",
			errno: "ENOENT",
			syscall: `${syscall} ${original.command}`,
			path: original.command,
			spawnargs: original.args
		});
	}
	function hookChildProcess(cp, parsed) {
		if (!isWin) return;
		const originalEmit = cp.emit;
		cp.emit = function(name, arg1) {
			if (name === "exit") {
				const err = verifyENOENT(arg1, parsed);
				if (err) return originalEmit.call(cp, "error", err);
			}
			return originalEmit.apply(cp, arguments);
		};
	}
	function verifyENOENT(status, parsed) {
		if (isWin && status === 1 && !parsed.file) return notFoundError(parsed.original, "spawn");
		return null;
	}
	function verifyENOENTSync(status, parsed) {
		if (isWin && status === 1 && !parsed.file) return notFoundError(parsed.original, "spawnSync");
		return null;
	}
	module.exports = {
		hookChildProcess,
		verifyENOENT,
		verifyENOENTSync,
		notFoundError
	};
}));
(/* @__PURE__ */ __commonJSMin(((exports, module) => {
	const cp = __require("child_process");
	const parse = require_parse$3();
	const enoent = require_enoent();
	function spawn(command, args, options) {
		const parsed = parse(command, args, options);
		const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);
		enoent.hookChildProcess(spawned, parsed);
		return spawned;
	}
	function spawnSync(command, args, options) {
		const parsed = parse(command, args, options);
		const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);
		result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
		return result;
	}
	module.exports = spawn;
	module.exports.spawn = spawn;
	module.exports.sync = spawnSync;
	module.exports._parse = parse;
	module.exports._enoent = enoent;
})))();
var require_constants = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const BINARY_TYPES = [
		"nodebuffer",
		"arraybuffer",
		"fragments"
	];
	const hasBlob = typeof Blob !== "undefined";
	if (hasBlob) BINARY_TYPES.push("blob");
	module.exports = {
		BINARY_TYPES,
		CLOSE_TIMEOUT: 3e4,
		EMPTY_BUFFER: Buffer.alloc(0),
		GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
		hasBlob,
		kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
		kListener: Symbol("kListener"),
		kStatusCode: Symbol("status-code"),
		kWebSocket: Symbol("websocket"),
		NOOP: () => {}
	};
}));
var require_buffer_util = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const { EMPTY_BUFFER } = require_constants();
	const FastBuffer = Buffer[Symbol.species];
	/**
	* Merges an array of buffers into a new buffer.
	*
	* @param {Buffer[]} list The array of buffers to concat
	* @param {Number} totalLength The total length of buffers in the list
	* @return {Buffer} The resulting buffer
	* @public
	*/
	function concat(list, totalLength) {
		if (list.length === 0) return EMPTY_BUFFER;
		if (list.length === 1) return list[0];
		const target = Buffer.allocUnsafe(totalLength);
		let offset = 0;
		for (let i = 0; i < list.length; i++) {
			const buf = list[i];
			target.set(buf, offset);
			offset += buf.length;
		}
		if (offset < totalLength) return new FastBuffer(target.buffer, target.byteOffset, offset);
		return target;
	}
	/**
	* Masks a buffer using the given mask.
	*
	* @param {Buffer} source The buffer to mask
	* @param {Buffer} mask The mask to use
	* @param {Buffer} output The buffer where to store the result
	* @param {Number} offset The offset at which to start writing
	* @param {Number} length The number of bytes to mask.
	* @public
	*/
	function _mask(source, mask, output, offset, length) {
		for (let i = 0; i < length; i++) output[offset + i] = source[i] ^ mask[i & 3];
	}
	/**
	* Unmasks a buffer using the given mask.
	*
	* @param {Buffer} buffer The buffer to unmask
	* @param {Buffer} mask The mask to use
	* @public
	*/
	function _unmask(buffer, mask) {
		for (let i = 0; i < buffer.length; i++) buffer[i] ^= mask[i & 3];
	}
	/**
	* Converts a buffer to an `ArrayBuffer`.
	*
	* @param {Buffer} buf The buffer to convert
	* @return {ArrayBuffer} Converted buffer
	* @public
	*/
	function toArrayBuffer(buf) {
		if (buf.length === buf.buffer.byteLength) return buf.buffer;
		return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
	}
	/**
	* Converts `data` to a `Buffer`.
	*
	* @param {*} data The data to convert
	* @return {Buffer} The buffer
	* @throws {TypeError}
	* @public
	*/
	function toBuffer(data) {
		toBuffer.readOnly = true;
		if (Buffer.isBuffer(data)) return data;
		let buf;
		if (data instanceof ArrayBuffer) buf = new FastBuffer(data);
		else if (ArrayBuffer.isView(data)) buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
		else {
			buf = Buffer.from(data);
			toBuffer.readOnly = false;
		}
		return buf;
	}
	module.exports = {
		concat,
		mask: _mask,
		toArrayBuffer,
		toBuffer,
		unmask: _unmask
	};
	/* istanbul ignore else  */
	if (!processModule.env.WS_NO_BUFFER_UTIL) try {
		const bufferUtil = __require("bufferutil");
		module.exports.mask = function(source, mask, output, offset, length) {
			if (length < 48) _mask(source, mask, output, offset, length);
			else bufferUtil.mask(source, mask, output, offset, length);
		};
		module.exports.unmask = function(buffer, mask) {
			if (buffer.length < 32) _unmask(buffer, mask);
			else bufferUtil.unmask(buffer, mask);
		};
	} catch (e) {}
}));
var require_limiter = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const kDone = Symbol("kDone");
	const kRun = Symbol("kRun");
	/**
	* A very simple job queue with adjustable concurrency. Adapted from
	* https://github.com/STRML/async-limiter
	*/
	var Limiter = class {
		/**
		* Creates a new `Limiter`.
		*
		* @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
		*     to run concurrently
		*/
		constructor(concurrency) {
			this[kDone] = () => {
				this.pending--;
				this[kRun]();
			};
			this.concurrency = concurrency || Infinity;
			this.jobs = [];
			this.pending = 0;
		}
		/**
		* Adds a job to the queue.
		*
		* @param {Function} job The job to run
		* @public
		*/
		add(job) {
			this.jobs.push(job);
			this[kRun]();
		}
		/**
		* Removes a job from the queue and runs it if possible.
		*
		* @private
		*/
		[kRun]() {
			if (this.pending === this.concurrency) return;
			if (this.jobs.length) {
				const job = this.jobs.shift();
				this.pending++;
				job(this[kDone]);
			}
		}
	};
	module.exports = Limiter;
}));
var require_permessage_deflate = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const zlib$1 = __require("zlib");
	const bufferUtil = require_buffer_util();
	const Limiter = require_limiter();
	const { kStatusCode } = require_constants();
	const FastBuffer = Buffer[Symbol.species];
	const TRAILER = Buffer.from([
		0,
		0,
		255,
		255
	]);
	const kPerMessageDeflate = Symbol("permessage-deflate");
	const kTotalLength = Symbol("total-length");
	const kCallback = Symbol("callback");
	const kBuffers = Symbol("buffers");
	const kError = Symbol("error");
	let zlibLimiter;
	/**
	* permessage-deflate implementation.
	*/
	var PerMessageDeflate = class {
		/**
		* Creates a PerMessageDeflate instance.
		*
		* @param {Object} [options] Configuration options
		* @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
		*     for, or request, a custom client window size
		* @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
		*     acknowledge disabling of client context takeover
		* @param {Number} [options.concurrencyLimit=10] The number of concurrent
		*     calls to zlib
		* @param {Boolean} [options.isServer=false] Create the instance in either
		*     server or client mode
		* @param {Number} [options.maxPayload=0] The maximum allowed message length
		* @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
		*     use of a custom server window size
		* @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
		*     disabling of server context takeover
		* @param {Number} [options.threshold=1024] Size (in bytes) below which
		*     messages should not be compressed if context takeover is disabled
		* @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
		*     deflate
		* @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
		*     inflate
		*/
		constructor(options) {
			this._options = options || {};
			this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024;
			this._maxPayload = this._options.maxPayload | 0;
			this._isServer = !!this._options.isServer;
			this._deflate = null;
			this._inflate = null;
			this.params = null;
			if (!zlibLimiter) {
				const concurrency = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
				zlibLimiter = new Limiter(concurrency);
			}
		}
		/**
		* @type {String}
		*/
		static get extensionName() {
			return "permessage-deflate";
		}
		/**
		* Create an extension negotiation offer.
		*
		* @return {Object} Extension parameters
		* @public
		*/
		offer() {
			const params = {};
			if (this._options.serverNoContextTakeover) params.server_no_context_takeover = true;
			if (this._options.clientNoContextTakeover) params.client_no_context_takeover = true;
			if (this._options.serverMaxWindowBits) params.server_max_window_bits = this._options.serverMaxWindowBits;
			if (this._options.clientMaxWindowBits) params.client_max_window_bits = this._options.clientMaxWindowBits;
			else if (this._options.clientMaxWindowBits == null) params.client_max_window_bits = true;
			return params;
		}
		/**
		* Accept an extension negotiation offer/response.
		*
		* @param {Array} configurations The extension negotiation offers/reponse
		* @return {Object} Accepted configuration
		* @public
		*/
		accept(configurations) {
			configurations = this.normalizeParams(configurations);
			this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
			return this.params;
		}
		/**
		* Releases all resources used by the extension.
		*
		* @public
		*/
		cleanup() {
			if (this._inflate) {
				this._inflate.close();
				this._inflate = null;
			}
			if (this._deflate) {
				const callback = this._deflate[kCallback];
				this._deflate.close();
				this._deflate = null;
				if (callback) callback(/* @__PURE__ */ new Error("The deflate stream was closed while data was being processed"));
			}
		}
		/**
		*  Accept an extension negotiation offer.
		*
		* @param {Array} offers The extension negotiation offers
		* @return {Object} Accepted configuration
		* @private
		*/
		acceptAsServer(offers) {
			const opts = this._options;
			const accepted = offers.find((params) => {
				if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && !params.client_max_window_bits) return false;
				return true;
			});
			if (!accepted) throw new Error("None of the extension offers can be accepted");
			if (opts.serverNoContextTakeover) accepted.server_no_context_takeover = true;
			if (opts.clientNoContextTakeover) accepted.client_no_context_takeover = true;
			if (typeof opts.serverMaxWindowBits === "number") accepted.server_max_window_bits = opts.serverMaxWindowBits;
			if (typeof opts.clientMaxWindowBits === "number") accepted.client_max_window_bits = opts.clientMaxWindowBits;
			else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) delete accepted.client_max_window_bits;
			return accepted;
		}
		/**
		* Accept the extension negotiation response.
		*
		* @param {Array} response The extension negotiation response
		* @return {Object} Accepted configuration
		* @private
		*/
		acceptAsClient(response) {
			const params = response[0];
			if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) throw new Error("Unexpected parameter \"client_no_context_takeover\"");
			if (!params.client_max_window_bits) {
				if (typeof this._options.clientMaxWindowBits === "number") params.client_max_window_bits = this._options.clientMaxWindowBits;
			} else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) throw new Error("Unexpected or invalid parameter \"client_max_window_bits\"");
			return params;
		}
		/**
		* Normalize parameters.
		*
		* @param {Array} configurations The extension negotiation offers/reponse
		* @return {Array} The offers/response with normalized parameters
		* @private
		*/
		normalizeParams(configurations) {
			configurations.forEach((params) => {
				Object.keys(params).forEach((key) => {
					let value = params[key];
					if (value.length > 1) throw new Error(`Parameter "${key}" must have only a single value`);
					value = value[0];
					if (key === "client_max_window_bits") {
						if (value !== true) {
							const num = +value;
							if (!Number.isInteger(num) || num < 8 || num > 15) throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
							value = num;
						} else if (!this._isServer) throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
					} else if (key === "server_max_window_bits") {
						const num = +value;
						if (!Number.isInteger(num) || num < 8 || num > 15) throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
						value = num;
					} else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
						if (value !== true) throw new TypeError(`Invalid value for parameter "${key}": ${value}`);
					} else throw new Error(`Unknown parameter "${key}"`);
					params[key] = value;
				});
			});
			return configurations;
		}
		/**
		* Decompress data. Concurrency limited.
		*
		* @param {Buffer} data Compressed data
		* @param {Boolean} fin Specifies whether or not this is the last fragment
		* @param {Function} callback Callback
		* @public
		*/
		decompress(data, fin, callback) {
			zlibLimiter.add((done) => {
				this._decompress(data, fin, (err, result) => {
					done();
					callback(err, result);
				});
			});
		}
		/**
		* Compress data. Concurrency limited.
		*
		* @param {(Buffer|String)} data Data to compress
		* @param {Boolean} fin Specifies whether or not this is the last fragment
		* @param {Function} callback Callback
		* @public
		*/
		compress(data, fin, callback) {
			zlibLimiter.add((done) => {
				this._compress(data, fin, (err, result) => {
					done();
					callback(err, result);
				});
			});
		}
		/**
		* Decompress data.
		*
		* @param {Buffer} data Compressed data
		* @param {Boolean} fin Specifies whether or not this is the last fragment
		* @param {Function} callback Callback
		* @private
		*/
		_decompress(data, fin, callback) {
			const endpoint = this._isServer ? "client" : "server";
			if (!this._inflate) {
				const key = `${endpoint}_max_window_bits`;
				const windowBits = typeof this.params[key] !== "number" ? zlib$1.Z_DEFAULT_WINDOWBITS : this.params[key];
				this._inflate = zlib$1.createInflateRaw({
					...this._options.zlibInflateOptions,
					windowBits
				});
				this._inflate[kPerMessageDeflate] = this;
				this._inflate[kTotalLength] = 0;
				this._inflate[kBuffers] = [];
				this._inflate.on("error", inflateOnError);
				this._inflate.on("data", inflateOnData);
			}
			this._inflate[kCallback] = callback;
			this._inflate.write(data);
			if (fin) this._inflate.write(TRAILER);
			this._inflate.flush(() => {
				const err = this._inflate[kError];
				if (err) {
					this._inflate.close();
					this._inflate = null;
					callback(err);
					return;
				}
				const data = bufferUtil.concat(this._inflate[kBuffers], this._inflate[kTotalLength]);
				if (this._inflate._readableState.endEmitted) {
					this._inflate.close();
					this._inflate = null;
				} else {
					this._inflate[kTotalLength] = 0;
					this._inflate[kBuffers] = [];
					if (fin && this.params[`${endpoint}_no_context_takeover`]) this._inflate.reset();
				}
				callback(null, data);
			});
		}
		/**
		* Compress data.
		*
		* @param {(Buffer|String)} data Data to compress
		* @param {Boolean} fin Specifies whether or not this is the last fragment
		* @param {Function} callback Callback
		* @private
		*/
		_compress(data, fin, callback) {
			const endpoint = this._isServer ? "server" : "client";
			if (!this._deflate) {
				const key = `${endpoint}_max_window_bits`;
				const windowBits = typeof this.params[key] !== "number" ? zlib$1.Z_DEFAULT_WINDOWBITS : this.params[key];
				this._deflate = zlib$1.createDeflateRaw({
					...this._options.zlibDeflateOptions,
					windowBits
				});
				this._deflate[kTotalLength] = 0;
				this._deflate[kBuffers] = [];
				this._deflate.on("data", deflateOnData);
			}
			this._deflate[kCallback] = callback;
			this._deflate.write(data);
			this._deflate.flush(zlib$1.Z_SYNC_FLUSH, () => {
				if (!this._deflate) return;
				let data = bufferUtil.concat(this._deflate[kBuffers], this._deflate[kTotalLength]);
				if (fin) data = new FastBuffer(data.buffer, data.byteOffset, data.length - 4);
				this._deflate[kCallback] = null;
				this._deflate[kTotalLength] = 0;
				this._deflate[kBuffers] = [];
				if (fin && this.params[`${endpoint}_no_context_takeover`]) this._deflate.reset();
				callback(null, data);
			});
		}
	};
	module.exports = PerMessageDeflate;
	/**
	* The listener of the `zlib.DeflateRaw` stream `'data'` event.
	*
	* @param {Buffer} chunk A chunk of data
	* @private
	*/
	function deflateOnData(chunk) {
		this[kBuffers].push(chunk);
		this[kTotalLength] += chunk.length;
	}
	/**
	* The listener of the `zlib.InflateRaw` stream `'data'` event.
	*
	* @param {Buffer} chunk A chunk of data
	* @private
	*/
	function inflateOnData(chunk) {
		this[kTotalLength] += chunk.length;
		if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
			this[kBuffers].push(chunk);
			return;
		}
		this[kError] = /* @__PURE__ */ new RangeError("Max payload size exceeded");
		this[kError].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
		this[kError][kStatusCode] = 1009;
		this.removeListener("data", inflateOnData);
		this.reset();
	}
	/**
	* The listener of the `zlib.InflateRaw` stream `'error'` event.
	*
	* @param {Error} err The emitted error
	* @private
	*/
	function inflateOnError(err) {
		this[kPerMessageDeflate]._inflate = null;
		if (this[kError]) {
			this[kCallback](this[kError]);
			return;
		}
		err[kStatusCode] = 1007;
		this[kCallback](err);
	}
}));
var require_validation = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const { isUtf8 } = __require("buffer");
	const { hasBlob } = require_constants();
	const tokenChars = [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		0,
		1,
		0
	];
	/**
	* Checks if a status code is allowed in a close frame.
	*
	* @param {Number} code The status code
	* @return {Boolean} `true` if the status code is valid, else `false`
	* @public
	*/
	function isValidStatusCode(code) {
		return code >= 1e3 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3e3 && code <= 4999;
	}
	/**
	* Checks if a given buffer contains only correct UTF-8.
	* Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
	* Markus Kuhn.
	*
	* @param {Buffer} buf The buffer to check
	* @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
	* @public
	*/
	function _isValidUTF8(buf) {
		const len = buf.length;
		let i = 0;
		while (i < len) if ((buf[i] & 128) === 0) i++;
		else if ((buf[i] & 224) === 192) {
			if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) return false;
			i += 2;
		} else if ((buf[i] & 240) === 224) {
			if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || buf[i] === 237 && (buf[i + 1] & 224) === 160) return false;
			i += 3;
		} else if ((buf[i] & 248) === 240) {
			if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) return false;
			i += 4;
		} else return false;
		return true;
	}
	/**
	* Determines whether a value is a `Blob`.
	*
	* @param {*} value The value to be tested
	* @return {Boolean} `true` if `value` is a `Blob`, else `false`
	* @private
	*/
	function isBlob(value) {
		return hasBlob && typeof value === "object" && typeof value.arrayBuffer === "function" && typeof value.type === "string" && typeof value.stream === "function" && (value[Symbol.toStringTag] === "Blob" || value[Symbol.toStringTag] === "File");
	}
	module.exports = {
		isBlob,
		isValidStatusCode,
		isValidUTF8: _isValidUTF8,
		tokenChars
	};
	if (isUtf8) module.exports.isValidUTF8 = function(buf) {
		return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
	};
	else if (!processModule.env.WS_NO_UTF_8_VALIDATE) try {
		const isValidUTF8 = __require("utf-8-validate");
		module.exports.isValidUTF8 = function(buf) {
			return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
		};
	} catch (e) {}
}));
var require_receiver = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const { Writable: Writable$1 } = __require("stream");
	const PerMessageDeflate = require_permessage_deflate();
	const { BINARY_TYPES, EMPTY_BUFFER, kStatusCode, kWebSocket } = require_constants();
	const { concat, toArrayBuffer, unmask } = require_buffer_util();
	const { isValidStatusCode, isValidUTF8 } = require_validation();
	const FastBuffer = Buffer[Symbol.species];
	const GET_INFO = 0;
	const GET_PAYLOAD_LENGTH_16 = 1;
	const GET_PAYLOAD_LENGTH_64 = 2;
	const GET_MASK = 3;
	const GET_DATA = 4;
	const INFLATING = 5;
	const DEFER_EVENT = 6;
	/**
	* HyBi Receiver implementation.
	*
	* @extends Writable
	*/
	var Receiver = class extends Writable$1 {
		/**
		* Creates a Receiver instance.
		*
		* @param {Object} [options] Options object
		* @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
		*     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
		*     multiple times in the same tick
		* @param {String} [options.binaryType=nodebuffer] The type for binary data
		* @param {Object} [options.extensions] An object containing the negotiated
		*     extensions
		* @param {Boolean} [options.isServer=false] Specifies whether to operate in
		*     client or server mode
		* @param {Number} [options.maxBufferedChunks=0] The maximum number of
		*     buffered data chunks
		* @param {Number} [options.maxFragments=0] The maximum number of message
		*     fragments
		* @param {Number} [options.maxPayload=0] The maximum allowed message length
		* @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
		*     not to skip UTF-8 validation for text and close messages
		*/
		constructor(options = {}) {
			super();
			this._allowSynchronousEvents = options.allowSynchronousEvents !== void 0 ? options.allowSynchronousEvents : true;
			this._binaryType = options.binaryType || BINARY_TYPES[0];
			this._extensions = options.extensions || {};
			this._isServer = !!options.isServer;
			this._maxBufferedChunks = options.maxBufferedChunks | 0;
			this._maxFragments = options.maxFragments | 0;
			this._maxPayload = options.maxPayload | 0;
			this._skipUTF8Validation = !!options.skipUTF8Validation;
			this[kWebSocket] = void 0;
			this._bufferedBytes = 0;
			this._buffers = [];
			this._compressed = false;
			this._payloadLength = 0;
			this._mask = void 0;
			this._fragmented = 0;
			this._masked = false;
			this._fin = false;
			this._opcode = 0;
			this._totalPayloadLength = 0;
			this._messageLength = 0;
			this._numFragments = 0;
			this._fragments = [];
			this._errored = false;
			this._loop = false;
			this._state = GET_INFO;
		}
		/**
		* Implements `Writable.prototype._write()`.
		*
		* @param {Buffer} chunk The chunk of data to write
		* @param {String} encoding The character encoding of `chunk`
		* @param {Function} cb Callback
		* @private
		*/
		_write(chunk, encoding, cb) {
			if (this._opcode === 8 && this._state == GET_INFO) return cb();
			if (this._maxBufferedChunks > 0 && this._buffers.length >= this._maxBufferedChunks) {
				cb(this.createError(RangeError, "Too many buffered chunks", false, 1008, "WS_ERR_TOO_MANY_BUFFERED_PARTS"));
				return;
			}
			this._bufferedBytes += chunk.length;
			this._buffers.push(chunk);
			this.startLoop(cb);
		}
		/**
		* Consumes `n` bytes from the buffered data.
		*
		* @param {Number} n The number of bytes to consume
		* @return {Buffer} The consumed bytes
		* @private
		*/
		consume(n) {
			this._bufferedBytes -= n;
			if (n === this._buffers[0].length) return this._buffers.shift();
			if (n < this._buffers[0].length) {
				const buf = this._buffers[0];
				this._buffers[0] = new FastBuffer(buf.buffer, buf.byteOffset + n, buf.length - n);
				return new FastBuffer(buf.buffer, buf.byteOffset, n);
			}
			const dst = Buffer.allocUnsafe(n);
			do {
				const buf = this._buffers[0];
				const offset = dst.length - n;
				if (n >= buf.length) dst.set(this._buffers.shift(), offset);
				else {
					dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
					this._buffers[0] = new FastBuffer(buf.buffer, buf.byteOffset + n, buf.length - n);
				}
				n -= buf.length;
			} while (n > 0);
			return dst;
		}
		/**
		* Starts the parsing loop.
		*
		* @param {Function} cb Callback
		* @private
		*/
		startLoop(cb) {
			this._loop = true;
			do
				switch (this._state) {
					case GET_INFO:
						this.getInfo(cb);
						break;
					case GET_PAYLOAD_LENGTH_16:
						this.getPayloadLength16(cb);
						break;
					case GET_PAYLOAD_LENGTH_64:
						this.getPayloadLength64(cb);
						break;
					case GET_MASK:
						this.getMask();
						break;
					case GET_DATA:
						this.getData(cb);
						break;
					case INFLATING:
					case DEFER_EVENT:
						this._loop = false;
						return;
				}
			while (this._loop);
			if (!this._errored) cb();
		}
		/**
		* Reads the first two bytes of a frame.
		*
		* @param {Function} cb Callback
		* @private
		*/
		getInfo(cb) {
			if (this._bufferedBytes < 2) {
				this._loop = false;
				return;
			}
			const buf = this.consume(2);
			if ((buf[0] & 48) !== 0) {
				cb(this.createError(RangeError, "RSV2 and RSV3 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_2_3"));
				return;
			}
			const compressed = (buf[0] & 64) === 64;
			if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
				cb(this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1"));
				return;
			}
			this._fin = (buf[0] & 128) === 128;
			this._opcode = buf[0] & 15;
			this._payloadLength = buf[1] & 127;
			if (this._opcode === 0) {
				if (compressed) {
					cb(this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1"));
					return;
				}
				if (!this._fragmented) {
					cb(this.createError(RangeError, "invalid opcode 0", true, 1002, "WS_ERR_INVALID_OPCODE"));
					return;
				}
				this._opcode = this._fragmented;
			} else if (this._opcode === 1 || this._opcode === 2) {
				if (this._fragmented) {
					cb(this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE"));
					return;
				}
				this._compressed = compressed;
			} else if (this._opcode > 7 && this._opcode < 11) {
				if (!this._fin) {
					cb(this.createError(RangeError, "FIN must be set", true, 1002, "WS_ERR_EXPECTED_FIN"));
					return;
				}
				if (compressed) {
					cb(this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1"));
					return;
				}
				if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
					cb(this.createError(RangeError, `invalid payload length ${this._payloadLength}`, true, 1002, "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"));
					return;
				}
			} else {
				cb(this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE"));
				return;
			}
			if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
			this._masked = (buf[1] & 128) === 128;
			if (this._isServer) {
				if (!this._masked) {
					cb(this.createError(RangeError, "MASK must be set", true, 1002, "WS_ERR_EXPECTED_MASK"));
					return;
				}
			} else if (this._masked) {
				cb(this.createError(RangeError, "MASK must be clear", true, 1002, "WS_ERR_UNEXPECTED_MASK"));
				return;
			}
			if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
			else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
			else this.haveLength(cb);
		}
		/**
		* Gets extended payload length (7+16).
		*
		* @param {Function} cb Callback
		* @private
		*/
		getPayloadLength16(cb) {
			if (this._bufferedBytes < 2) {
				this._loop = false;
				return;
			}
			this._payloadLength = this.consume(2).readUInt16BE(0);
			this.haveLength(cb);
		}
		/**
		* Gets extended payload length (7+64).
		*
		* @param {Function} cb Callback
		* @private
		*/
		getPayloadLength64(cb) {
			if (this._bufferedBytes < 8) {
				this._loop = false;
				return;
			}
			const buf = this.consume(8);
			const num = buf.readUInt32BE(0);
			if (num > Math.pow(2, 21) - 1) {
				cb(this.createError(RangeError, "Unsupported WebSocket frame: payload length > 2^53 - 1", false, 1009, "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"));
				return;
			}
			this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
			this.haveLength(cb);
		}
		/**
		* Payload length has been read.
		*
		* @param {Function} cb Callback
		* @private
		*/
		haveLength(cb) {
			if (this._payloadLength && this._opcode < 8) {
				this._totalPayloadLength += this._payloadLength;
				if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
					cb(this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"));
					return;
				}
			}
			if (this._masked) this._state = GET_MASK;
			else this._state = GET_DATA;
		}
		/**
		* Reads mask bytes.
		*
		* @private
		*/
		getMask() {
			if (this._bufferedBytes < 4) {
				this._loop = false;
				return;
			}
			this._mask = this.consume(4);
			this._state = GET_DATA;
		}
		/**
		* Reads data bytes.
		*
		* @param {Function} cb Callback
		* @private
		*/
		getData(cb) {
			let data = EMPTY_BUFFER;
			if (this._payloadLength) {
				if (this._bufferedBytes < this._payloadLength) {
					this._loop = false;
					return;
				}
				data = this.consume(this._payloadLength);
				if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) unmask(data, this._mask);
			}
			if (this._opcode > 7) {
				this.controlMessage(data, cb);
				return;
			}
			if (this._maxFragments > 0 && ++this._numFragments > this._maxFragments) {
				cb(this.createError(RangeError, "Too many message fragments", false, 1008, "WS_ERR_TOO_MANY_BUFFERED_PARTS"));
				return;
			}
			if (this._compressed) {
				this._state = INFLATING;
				this.decompress(data, cb);
				return;
			}
			if (data.length) {
				this._messageLength = this._totalPayloadLength;
				this._fragments.push(data);
			}
			this.dataMessage(cb);
		}
		/**
		* Decompresses data.
		*
		* @param {Buffer} data Compressed data
		* @param {Function} cb Callback
		* @private
		*/
		decompress(data, cb) {
			this._extensions[PerMessageDeflate.extensionName].decompress(data, this._fin, (err, buf) => {
				if (err) return cb(err);
				if (buf.length) {
					this._messageLength += buf.length;
					if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
						cb(this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"));
						return;
					}
					this._fragments.push(buf);
				}
				this.dataMessage(cb);
				if (this._state === GET_INFO) this.startLoop(cb);
			});
		}
		/**
		* Handles a data message.
		*
		* @param {Function} cb Callback
		* @private
		*/
		dataMessage(cb) {
			if (!this._fin) {
				this._state = GET_INFO;
				return;
			}
			const messageLength = this._messageLength;
			const fragments = this._fragments;
			this._totalPayloadLength = 0;
			this._messageLength = 0;
			this._fragmented = 0;
			this._numFragments = 0;
			this._fragments = [];
			if (this._opcode === 2) {
				let data;
				if (this._binaryType === "nodebuffer") data = concat(fragments, messageLength);
				else if (this._binaryType === "arraybuffer") data = toArrayBuffer(concat(fragments, messageLength));
				else if (this._binaryType === "blob") data = new Blob(fragments);
				else data = fragments;
				if (this._allowSynchronousEvents) {
					this.emit("message", data, true);
					this._state = GET_INFO;
				} else {
					this._state = DEFER_EVENT;
					setImmediate(() => {
						this.emit("message", data, true);
						this._state = GET_INFO;
						this.startLoop(cb);
					});
				}
			} else {
				const buf = concat(fragments, messageLength);
				if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
					cb(this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8"));
					return;
				}
				if (this._state === INFLATING || this._allowSynchronousEvents) {
					this.emit("message", buf, false);
					this._state = GET_INFO;
				} else {
					this._state = DEFER_EVENT;
					setImmediate(() => {
						this.emit("message", buf, false);
						this._state = GET_INFO;
						this.startLoop(cb);
					});
				}
			}
		}
		/**
		* Handles a control message.
		*
		* @param {Buffer} data Data to handle
		* @return {(Error|RangeError|undefined)} A possible error
		* @private
		*/
		controlMessage(data, cb) {
			if (this._opcode === 8) {
				if (data.length === 0) {
					this._loop = false;
					this.emit("conclude", 1005, EMPTY_BUFFER);
					this.end();
				} else {
					const code = data.readUInt16BE(0);
					if (!isValidStatusCode(code)) {
						cb(this.createError(RangeError, `invalid status code ${code}`, true, 1002, "WS_ERR_INVALID_CLOSE_CODE"));
						return;
					}
					const buf = new FastBuffer(data.buffer, data.byteOffset + 2, data.length - 2);
					if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
						cb(this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8"));
						return;
					}
					this._loop = false;
					this.emit("conclude", code, buf);
					this.end();
				}
				this._state = GET_INFO;
				return;
			}
			if (this._allowSynchronousEvents) {
				this.emit(this._opcode === 9 ? "ping" : "pong", data);
				this._state = GET_INFO;
			} else {
				this._state = DEFER_EVENT;
				setImmediate(() => {
					this.emit(this._opcode === 9 ? "ping" : "pong", data);
					this._state = GET_INFO;
					this.startLoop(cb);
				});
			}
		}
		/**
		* Builds an error object.
		*
		* @param {function(new:Error|RangeError)} ErrorCtor The error constructor
		* @param {String} message The error message
		* @param {Boolean} prefix Specifies whether or not to add a default prefix to
		*     `message`
		* @param {Number} statusCode The status code
		* @param {String} errorCode The exposed error code
		* @return {(Error|RangeError)} The error
		* @private
		*/
		createError(ErrorCtor, message, prefix, statusCode, errorCode) {
			this._loop = false;
			this._errored = true;
			const err = new ErrorCtor(prefix ? `Invalid WebSocket frame: ${message}` : message);
			Error.captureStackTrace(err, this.createError);
			err.code = errorCode;
			err[kStatusCode] = statusCode;
			return err;
		}
	};
	module.exports = Receiver;
}));
var require_sender = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const { Duplex: Duplex$3 } = __require("stream");
	const { randomFillSync } = __require("crypto");
	const { types: { isUint8Array } } = __require("util");
	const PerMessageDeflate = require_permessage_deflate();
	const { EMPTY_BUFFER, kWebSocket, NOOP } = require_constants();
	const { isBlob, isValidStatusCode } = require_validation();
	const { mask: applyMask, toBuffer } = require_buffer_util();
	const kByteLength = Symbol("kByteLength");
	const maskBuffer = Buffer.alloc(4);
	const RANDOM_POOL_SIZE = 8192;
	let randomPool;
	let randomPoolPointer = RANDOM_POOL_SIZE;
	const DEFAULT = 0;
	const DEFLATING = 1;
	const GET_BLOB_DATA = 2;
	module.exports = class Sender {
		/**
		* Creates a Sender instance.
		*
		* @param {Duplex} socket The connection socket
		* @param {Object} [extensions] An object containing the negotiated extensions
		* @param {Function} [generateMask] The function used to generate the masking
		*     key
		*/
		constructor(socket, extensions, generateMask) {
			this._extensions = extensions || {};
			if (generateMask) {
				this._generateMask = generateMask;
				this._maskBuffer = Buffer.alloc(4);
			}
			this._socket = socket;
			this._firstFragment = true;
			this._compress = false;
			this._bufferedBytes = 0;
			this._queue = [];
			this._state = DEFAULT;
			this.onerror = NOOP;
			this[kWebSocket] = void 0;
		}
		/**
		* Frames a piece of data according to the HyBi WebSocket protocol.
		*
		* @param {(Buffer|String)} data The data to frame
		* @param {Object} options Options object
		* @param {Boolean} [options.fin=false] Specifies whether or not to set the
		*     FIN bit
		* @param {Function} [options.generateMask] The function used to generate the
		*     masking key
		* @param {Boolean} [options.mask=false] Specifies whether or not to mask
		*     `data`
		* @param {Buffer} [options.maskBuffer] The buffer used to store the masking
		*     key
		* @param {Number} options.opcode The opcode
		* @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
		*     modified
		* @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
		*     RSV1 bit
		* @return {(Buffer|String)[]} The framed data
		* @public
		*/
		static frame(data, options) {
			let mask;
			let merge = false;
			let offset = 2;
			let skipMasking = false;
			if (options.mask) {
				mask = options.maskBuffer || maskBuffer;
				if (options.generateMask) options.generateMask(mask);
				else {
					if (randomPoolPointer === RANDOM_POOL_SIZE) {
						/* istanbul ignore else  */
						if (randomPool === void 0) randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
						randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
						randomPoolPointer = 0;
					}
					mask[0] = randomPool[randomPoolPointer++];
					mask[1] = randomPool[randomPoolPointer++];
					mask[2] = randomPool[randomPoolPointer++];
					mask[3] = randomPool[randomPoolPointer++];
				}
				skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
				offset = 6;
			}
			let dataLength;
			if (typeof data === "string") if ((!options.mask || skipMasking) && options[kByteLength] !== void 0) dataLength = options[kByteLength];
			else {
				data = Buffer.from(data);
				dataLength = data.length;
			}
			else {
				dataLength = data.length;
				merge = options.mask && options.readOnly && !skipMasking;
			}
			let payloadLength = dataLength;
			if (dataLength >= 65536) {
				offset += 8;
				payloadLength = 127;
			} else if (dataLength > 125) {
				offset += 2;
				payloadLength = 126;
			}
			const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
			target[0] = options.fin ? options.opcode | 128 : options.opcode;
			if (options.rsv1) target[0] |= 64;
			target[1] = payloadLength;
			if (payloadLength === 126) target.writeUInt16BE(dataLength, 2);
			else if (payloadLength === 127) {
				target[2] = target[3] = 0;
				target.writeUIntBE(dataLength, 4, 6);
			}
			if (!options.mask) return [target, data];
			target[1] |= 128;
			target[offset - 4] = mask[0];
			target[offset - 3] = mask[1];
			target[offset - 2] = mask[2];
			target[offset - 1] = mask[3];
			if (skipMasking) return [target, data];
			if (merge) {
				applyMask(data, mask, target, offset, dataLength);
				return [target];
			}
			applyMask(data, mask, data, 0, dataLength);
			return [target, data];
		}
		/**
		* Sends a close message to the other peer.
		*
		* @param {Number} [code] The status code component of the body
		* @param {(String|Buffer)} [data] The message component of the body
		* @param {Boolean} [mask=false] Specifies whether or not to mask the message
		* @param {Function} [cb] Callback
		* @public
		*/
		close(code, data, mask, cb) {
			let buf;
			if (code === void 0) buf = EMPTY_BUFFER;
			else if (typeof code !== "number" || !isValidStatusCode(code)) throw new TypeError("First argument must be a valid error code number");
			else if (data === void 0 || !data.length) {
				buf = Buffer.allocUnsafe(2);
				buf.writeUInt16BE(code, 0);
			} else {
				const length = Buffer.byteLength(data);
				if (length > 123) throw new RangeError("The message must not be greater than 123 bytes");
				buf = Buffer.allocUnsafe(2 + length);
				buf.writeUInt16BE(code, 0);
				if (typeof data === "string") buf.write(data, 2);
				else if (isUint8Array(data)) buf.set(data, 2);
				else throw new TypeError("Second argument must be a string or a Uint8Array");
			}
			const options = {
				[kByteLength]: buf.length,
				fin: true,
				generateMask: this._generateMask,
				mask,
				maskBuffer: this._maskBuffer,
				opcode: 8,
				readOnly: false,
				rsv1: false
			};
			if (this._state !== DEFAULT) this.enqueue([
				this.dispatch,
				buf,
				false,
				options,
				cb
			]);
			else this.sendFrame(Sender.frame(buf, options), cb);
		}
		/**
		* Sends a ping message to the other peer.
		*
		* @param {*} data The message to send
		* @param {Boolean} [mask=false] Specifies whether or not to mask `data`
		* @param {Function} [cb] Callback
		* @public
		*/
		ping(data, mask, cb) {
			let byteLength;
			let readOnly;
			if (typeof data === "string") {
				byteLength = Buffer.byteLength(data);
				readOnly = false;
			} else if (isBlob(data)) {
				byteLength = data.size;
				readOnly = false;
			} else {
				data = toBuffer(data);
				byteLength = data.length;
				readOnly = toBuffer.readOnly;
			}
			if (byteLength > 125) throw new RangeError("The data size must not be greater than 125 bytes");
			const options = {
				[kByteLength]: byteLength,
				fin: true,
				generateMask: this._generateMask,
				mask,
				maskBuffer: this._maskBuffer,
				opcode: 9,
				readOnly,
				rsv1: false
			};
			if (isBlob(data)) if (this._state !== DEFAULT) this.enqueue([
				this.getBlobData,
				data,
				false,
				options,
				cb
			]);
			else this.getBlobData(data, false, options, cb);
			else if (this._state !== DEFAULT) this.enqueue([
				this.dispatch,
				data,
				false,
				options,
				cb
			]);
			else this.sendFrame(Sender.frame(data, options), cb);
		}
		/**
		* Sends a pong message to the other peer.
		*
		* @param {*} data The message to send
		* @param {Boolean} [mask=false] Specifies whether or not to mask `data`
		* @param {Function} [cb] Callback
		* @public
		*/
		pong(data, mask, cb) {
			let byteLength;
			let readOnly;
			if (typeof data === "string") {
				byteLength = Buffer.byteLength(data);
				readOnly = false;
			} else if (isBlob(data)) {
				byteLength = data.size;
				readOnly = false;
			} else {
				data = toBuffer(data);
				byteLength = data.length;
				readOnly = toBuffer.readOnly;
			}
			if (byteLength > 125) throw new RangeError("The data size must not be greater than 125 bytes");
			const options = {
				[kByteLength]: byteLength,
				fin: true,
				generateMask: this._generateMask,
				mask,
				maskBuffer: this._maskBuffer,
				opcode: 10,
				readOnly,
				rsv1: false
			};
			if (isBlob(data)) if (this._state !== DEFAULT) this.enqueue([
				this.getBlobData,
				data,
				false,
				options,
				cb
			]);
			else this.getBlobData(data, false, options, cb);
			else if (this._state !== DEFAULT) this.enqueue([
				this.dispatch,
				data,
				false,
				options,
				cb
			]);
			else this.sendFrame(Sender.frame(data, options), cb);
		}
		/**
		* Sends a data message to the other peer.
		*
		* @param {*} data The message to send
		* @param {Object} options Options object
		* @param {Boolean} [options.binary=false] Specifies whether `data` is binary
		*     or text
		* @param {Boolean} [options.compress=false] Specifies whether or not to
		*     compress `data`
		* @param {Boolean} [options.fin=false] Specifies whether the fragment is the
		*     last one
		* @param {Boolean} [options.mask=false] Specifies whether or not to mask
		*     `data`
		* @param {Function} [cb] Callback
		* @public
		*/
		send(data, options, cb) {
			const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
			let opcode = options.binary ? 2 : 1;
			let rsv1 = options.compress;
			let byteLength;
			let readOnly;
			if (typeof data === "string") {
				byteLength = Buffer.byteLength(data);
				readOnly = false;
			} else if (isBlob(data)) {
				byteLength = data.size;
				readOnly = false;
			} else {
				data = toBuffer(data);
				byteLength = data.length;
				readOnly = toBuffer.readOnly;
			}
			if (this._firstFragment) {
				this._firstFragment = false;
				if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) rsv1 = byteLength >= perMessageDeflate._threshold;
				this._compress = rsv1;
			} else {
				rsv1 = false;
				opcode = 0;
			}
			if (options.fin) this._firstFragment = true;
			const opts = {
				[kByteLength]: byteLength,
				fin: options.fin,
				generateMask: this._generateMask,
				mask: options.mask,
				maskBuffer: this._maskBuffer,
				opcode,
				readOnly,
				rsv1
			};
			if (isBlob(data)) if (this._state !== DEFAULT) this.enqueue([
				this.getBlobData,
				data,
				this._compress,
				opts,
				cb
			]);
			else this.getBlobData(data, this._compress, opts, cb);
			else if (this._state !== DEFAULT) this.enqueue([
				this.dispatch,
				data,
				this._compress,
				opts,
				cb
			]);
			else this.dispatch(data, this._compress, opts, cb);
		}
		/**
		* Gets the contents of a blob as binary data.
		*
		* @param {Blob} blob The blob
		* @param {Boolean} [compress=false] Specifies whether or not to compress
		*     the data
		* @param {Object} options Options object
		* @param {Boolean} [options.fin=false] Specifies whether or not to set the
		*     FIN bit
		* @param {Function} [options.generateMask] The function used to generate the
		*     masking key
		* @param {Boolean} [options.mask=false] Specifies whether or not to mask
		*     `data`
		* @param {Buffer} [options.maskBuffer] The buffer used to store the masking
		*     key
		* @param {Number} options.opcode The opcode
		* @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
		*     modified
		* @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
		*     RSV1 bit
		* @param {Function} [cb] Callback
		* @private
		*/
		getBlobData(blob, compress, options, cb) {
			this._bufferedBytes += options[kByteLength];
			this._state = GET_BLOB_DATA;
			blob.arrayBuffer().then((arrayBuffer) => {
				if (this._socket.destroyed) {
					const err = /* @__PURE__ */ new Error("The socket was closed while the blob was being read");
					processModule.nextTick(callCallbacks, this, err, cb);
					return;
				}
				this._bufferedBytes -= options[kByteLength];
				const data = toBuffer(arrayBuffer);
				if (!compress) {
					this._state = DEFAULT;
					this.sendFrame(Sender.frame(data, options), cb);
					this.dequeue();
				} else this.dispatch(data, compress, options, cb);
			}).catch((err) => {
				processModule.nextTick(onError, this, err, cb);
			});
		}
		/**
		* Dispatches a message.
		*
		* @param {(Buffer|String)} data The message to send
		* @param {Boolean} [compress=false] Specifies whether or not to compress
		*     `data`
		* @param {Object} options Options object
		* @param {Boolean} [options.fin=false] Specifies whether or not to set the
		*     FIN bit
		* @param {Function} [options.generateMask] The function used to generate the
		*     masking key
		* @param {Boolean} [options.mask=false] Specifies whether or not to mask
		*     `data`
		* @param {Buffer} [options.maskBuffer] The buffer used to store the masking
		*     key
		* @param {Number} options.opcode The opcode
		* @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
		*     modified
		* @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
		*     RSV1 bit
		* @param {Function} [cb] Callback
		* @private
		*/
		dispatch(data, compress, options, cb) {
			if (!compress) {
				this.sendFrame(Sender.frame(data, options), cb);
				return;
			}
			const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
			this._bufferedBytes += options[kByteLength];
			this._state = DEFLATING;
			perMessageDeflate.compress(data, options.fin, (_, buf) => {
				if (this._socket.destroyed) {
					const err = /* @__PURE__ */ new Error("The socket was closed while data was being compressed");
					callCallbacks(this, err, cb);
					return;
				}
				this._bufferedBytes -= options[kByteLength];
				this._state = DEFAULT;
				options.readOnly = false;
				this.sendFrame(Sender.frame(buf, options), cb);
				this.dequeue();
			});
		}
		/**
		* Executes queued send operations.
		*
		* @private
		*/
		dequeue() {
			while (this._state === DEFAULT && this._queue.length) {
				const params = this._queue.shift();
				this._bufferedBytes -= params[3][kByteLength];
				Reflect.apply(params[0], this, params.slice(1));
			}
		}
		/**
		* Enqueues a send operation.
		*
		* @param {Array} params Send operation parameters.
		* @private
		*/
		enqueue(params) {
			this._bufferedBytes += params[3][kByteLength];
			this._queue.push(params);
		}
		/**
		* Sends a frame.
		*
		* @param {(Buffer | String)[]} list The frame to send
		* @param {Function} [cb] Callback
		* @private
		*/
		sendFrame(list, cb) {
			if (list.length === 2) {
				this._socket.cork();
				this._socket.write(list[0]);
				this._socket.write(list[1], cb);
				this._socket.uncork();
			} else this._socket.write(list[0], cb);
		}
	};
	/**
	* Calls queued callbacks with an error.
	*
	* @param {Sender} sender The `Sender` instance
	* @param {Error} err The error to call the callbacks with
	* @param {Function} [cb] The first callback
	* @private
	*/
	function callCallbacks(sender, err, cb) {
		if (typeof cb === "function") cb(err);
		for (let i = 0; i < sender._queue.length; i++) {
			const params = sender._queue[i];
			const callback = params[params.length - 1];
			if (typeof callback === "function") callback(err);
		}
	}
	/**
	* Handles a `Sender` error.
	*
	* @param {Sender} sender The `Sender` instance
	* @param {Error} err The error
	* @param {Function} [cb] The first pending callback
	* @private
	*/
	function onError(sender, err, cb) {
		callCallbacks(sender, err, cb);
		sender.onerror(err);
	}
}));
var require_event_target = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const { kForOnEventAttribute, kListener } = require_constants();
	const kCode = Symbol("kCode");
	const kData = Symbol("kData");
	const kError = Symbol("kError");
	const kMessage = Symbol("kMessage");
	const kReason = Symbol("kReason");
	const kTarget = Symbol("kTarget");
	const kType = Symbol("kType");
	const kWasClean = Symbol("kWasClean");
	/**
	* Class representing an event.
	*/
	var Event = class {
		/**
		* Create a new `Event`.
		*
		* @param {String} type The name of the event
		* @throws {TypeError} If the `type` argument is not specified
		*/
		constructor(type) {
			this[kTarget] = null;
			this[kType] = type;
		}
		/**
		* @type {*}
		*/
		get target() {
			return this[kTarget];
		}
		/**
		* @type {String}
		*/
		get type() {
			return this[kType];
		}
	};
	Object.defineProperty(Event.prototype, "target", { enumerable: true });
	Object.defineProperty(Event.prototype, "type", { enumerable: true });
	/**
	* Class representing a close event.
	*
	* @extends Event
	*/
	var CloseEvent = class extends Event {
		/**
		* Create a new `CloseEvent`.
		*
		* @param {String} type The name of the event
		* @param {Object} [options] A dictionary object that allows for setting
		*     attributes via object members of the same name
		* @param {Number} [options.code=0] The status code explaining why the
		*     connection was closed
		* @param {String} [options.reason=''] A human-readable string explaining why
		*     the connection was closed
		* @param {Boolean} [options.wasClean=false] Indicates whether or not the
		*     connection was cleanly closed
		*/
		constructor(type, options = {}) {
			super(type);
			this[kCode] = options.code === void 0 ? 0 : options.code;
			this[kReason] = options.reason === void 0 ? "" : options.reason;
			this[kWasClean] = options.wasClean === void 0 ? false : options.wasClean;
		}
		/**
		* @type {Number}
		*/
		get code() {
			return this[kCode];
		}
		/**
		* @type {String}
		*/
		get reason() {
			return this[kReason];
		}
		/**
		* @type {Boolean}
		*/
		get wasClean() {
			return this[kWasClean];
		}
	};
	Object.defineProperty(CloseEvent.prototype, "code", { enumerable: true });
	Object.defineProperty(CloseEvent.prototype, "reason", { enumerable: true });
	Object.defineProperty(CloseEvent.prototype, "wasClean", { enumerable: true });
	/**
	* Class representing an error event.
	*
	* @extends Event
	*/
	var ErrorEvent = class extends Event {
		/**
		* Create a new `ErrorEvent`.
		*
		* @param {String} type The name of the event
		* @param {Object} [options] A dictionary object that allows for setting
		*     attributes via object members of the same name
		* @param {*} [options.error=null] The error that generated this event
		* @param {String} [options.message=''] The error message
		*/
		constructor(type, options = {}) {
			super(type);
			this[kError] = options.error === void 0 ? null : options.error;
			this[kMessage] = options.message === void 0 ? "" : options.message;
		}
		/**
		* @type {*}
		*/
		get error() {
			return this[kError];
		}
		/**
		* @type {String}
		*/
		get message() {
			return this[kMessage];
		}
	};
	Object.defineProperty(ErrorEvent.prototype, "error", { enumerable: true });
	Object.defineProperty(ErrorEvent.prototype, "message", { enumerable: true });
	/**
	* Class representing a message event.
	*
	* @extends Event
	*/
	var MessageEvent = class extends Event {
		/**
		* Create a new `MessageEvent`.
		*
		* @param {String} type The name of the event
		* @param {Object} [options] A dictionary object that allows for setting
		*     attributes via object members of the same name
		* @param {*} [options.data=null] The message content
		*/
		constructor(type, options = {}) {
			super(type);
			this[kData] = options.data === void 0 ? null : options.data;
		}
		/**
		* @type {*}
		*/
		get data() {
			return this[kData];
		}
	};
	Object.defineProperty(MessageEvent.prototype, "data", { enumerable: true });
	module.exports = {
		CloseEvent,
		ErrorEvent,
		Event,
		EventTarget: {
			/**
			* Register an event listener.
			*
			* @param {String} type A string representing the event type to listen for
			* @param {(Function|Object)} handler The listener to add
			* @param {Object} [options] An options object specifies characteristics about
			*     the event listener
			* @param {Boolean} [options.once=false] A `Boolean` indicating that the
			*     listener should be invoked at most once after being added. If `true`,
			*     the listener would be automatically removed when invoked.
			* @public
			*/
			addEventListener(type, handler, options = {}) {
				for (const listener of this.listeners(type)) if (!options[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) return;
				let wrapper;
				if (type === "message") wrapper = function onMessage(data, isBinary) {
					const event = new MessageEvent("message", { data: isBinary ? data : data.toString() });
					event[kTarget] = this;
					callListener(handler, this, event);
				};
				else if (type === "close") wrapper = function onClose(code, message) {
					const event = new CloseEvent("close", {
						code,
						reason: message.toString(),
						wasClean: this._closeFrameReceived && this._closeFrameSent
					});
					event[kTarget] = this;
					callListener(handler, this, event);
				};
				else if (type === "error") wrapper = function onError(error) {
					const event = new ErrorEvent("error", {
						error,
						message: error.message
					});
					event[kTarget] = this;
					callListener(handler, this, event);
				};
				else if (type === "open") wrapper = function onOpen() {
					const event = new Event("open");
					event[kTarget] = this;
					callListener(handler, this, event);
				};
				else return;
				wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
				wrapper[kListener] = handler;
				if (options.once) this.once(type, wrapper);
				else this.on(type, wrapper);
			},
			/**
			* Remove an event listener.
			*
			* @param {String} type A string representing the event type to remove
			* @param {(Function|Object)} handler The listener to remove
			* @public
			*/
			removeEventListener(type, handler) {
				for (const listener of this.listeners(type)) if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
					this.removeListener(type, listener);
					break;
				}
			}
		},
		MessageEvent
	};
	/**
	* Call an event listener
	*
	* @param {(Function|Object)} listener The listener to call
	* @param {*} thisArg The value to use as `this`` when calling the listener
	* @param {Event} event The event to pass to the listener
	* @private
	*/
	function callListener(listener, thisArg, event) {
		if (typeof listener === "object" && listener.handleEvent) listener.handleEvent.call(listener, event);
		else listener.call(thisArg, event);
	}
}));
var require_extension = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const { tokenChars } = require_validation();
	/**
	* Adds an offer to the map of extension offers or a parameter to the map of
	* parameters.
	*
	* @param {Object} dest The map of extension offers or parameters
	* @param {String} name The extension or parameter name
	* @param {(Object|Boolean|String)} elem The extension parameters or the
	*     parameter value
	* @private
	*/
	function push(dest, name, elem) {
		if (dest[name] === void 0) dest[name] = [elem];
		else dest[name].push(elem);
	}
	/**
	* Parses the `Sec-WebSocket-Extensions` header into an object.
	*
	* @param {String} header The field value of the header
	* @return {Object} The parsed object
	* @public
	*/
	function parse(header) {
		const offers = Object.create(null);
		let params = Object.create(null);
		let mustUnescape = false;
		let isEscaping = false;
		let inQuotes = false;
		let extensionName;
		let paramName;
		let start = -1;
		let code = -1;
		let end = -1;
		let i = 0;
		for (; i < header.length; i++) {
			code = header.charCodeAt(i);
			if (extensionName === void 0) if (end === -1 && tokenChars[code] === 1) {
				if (start === -1) start = i;
			} else if (i !== 0 && (code === 32 || code === 9)) {
				if (end === -1 && start !== -1) end = i;
			} else if (code === 59 || code === 44) {
				if (start === -1) throw new SyntaxError(`Unexpected character at index ${i}`);
				if (end === -1) end = i;
				const name = header.slice(start, end);
				if (code === 44) {
					push(offers, name, params);
					params = Object.create(null);
				} else extensionName = name;
				start = end = -1;
			} else throw new SyntaxError(`Unexpected character at index ${i}`);
			else if (paramName === void 0) if (end === -1 && tokenChars[code] === 1) {
				if (start === -1) start = i;
			} else if (code === 32 || code === 9) {
				if (end === -1 && start !== -1) end = i;
			} else if (code === 59 || code === 44) {
				if (start === -1) throw new SyntaxError(`Unexpected character at index ${i}`);
				if (end === -1) end = i;
				push(params, header.slice(start, end), true);
				if (code === 44) {
					push(offers, extensionName, params);
					params = Object.create(null);
					extensionName = void 0;
				}
				start = end = -1;
			} else if (code === 61 && start !== -1 && end === -1) {
				paramName = header.slice(start, i);
				start = end = -1;
			} else throw new SyntaxError(`Unexpected character at index ${i}`);
			else if (isEscaping) {
				if (tokenChars[code] !== 1) throw new SyntaxError(`Unexpected character at index ${i}`);
				if (start === -1) start = i;
				else if (!mustUnescape) mustUnescape = true;
				isEscaping = false;
			} else if (inQuotes) if (tokenChars[code] === 1) {
				if (start === -1) start = i;
			} else if (code === 34 && start !== -1) {
				inQuotes = false;
				end = i;
			} else if (code === 92) isEscaping = true;
			else throw new SyntaxError(`Unexpected character at index ${i}`);
			else if (code === 34 && header.charCodeAt(i - 1) === 61) inQuotes = true;
			else if (end === -1 && tokenChars[code] === 1) {
				if (start === -1) start = i;
			} else if (start !== -1 && (code === 32 || code === 9)) {
				if (end === -1) end = i;
			} else if (code === 59 || code === 44) {
				if (start === -1) throw new SyntaxError(`Unexpected character at index ${i}`);
				if (end === -1) end = i;
				let value = header.slice(start, end);
				if (mustUnescape) {
					value = value.replace(/\\/g, "");
					mustUnescape = false;
				}
				push(params, paramName, value);
				if (code === 44) {
					push(offers, extensionName, params);
					params = Object.create(null);
					extensionName = void 0;
				}
				paramName = void 0;
				start = end = -1;
			} else throw new SyntaxError(`Unexpected character at index ${i}`);
		}
		if (start === -1 || inQuotes || code === 32 || code === 9) throw new SyntaxError("Unexpected end of input");
		if (end === -1) end = i;
		const token = header.slice(start, end);
		if (extensionName === void 0) push(offers, token, params);
		else {
			if (paramName === void 0) push(params, token, true);
			else if (mustUnescape) push(params, paramName, token.replace(/\\/g, ""));
			else push(params, paramName, token);
			push(offers, extensionName, params);
		}
		return offers;
	}
	/**
	* Builds the `Sec-WebSocket-Extensions` header field value.
	*
	* @param {Object} extensions The map of extensions and parameters to format
	* @return {String} A string representing the given object
	* @public
	*/
	function format(extensions) {
		return Object.keys(extensions).map((extension) => {
			let configurations = extensions[extension];
			if (!Array.isArray(configurations)) configurations = [configurations];
			return configurations.map((params) => {
				return [extension].concat(Object.keys(params).map((k) => {
					let values = params[k];
					if (!Array.isArray(values)) values = [values];
					return values.map((v) => v === true ? k : `${k}=${v}`).join("; ");
				})).join("; ");
			}).join(", ");
		}).join(", ");
	}
	module.exports = {
		format,
		parse
	};
}));
var require_websocket = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const EventEmitter$2 = __require("events");
	const https$3 = __require("https");
	const http$5 = __require("http");
	const net$1 = __require("net");
	const tls = __require("tls");
	const { randomBytes, createHash: createHash$1 } = __require("crypto");
	const { Duplex: Duplex$2, Readable } = __require("stream");
	const { URL: URL$2 } = __require("url");
	const PerMessageDeflate = require_permessage_deflate();
	const Receiver = require_receiver();
	const Sender = require_sender();
	const { isBlob } = require_validation();
	const { BINARY_TYPES, CLOSE_TIMEOUT, EMPTY_BUFFER, GUID, kForOnEventAttribute, kListener, kStatusCode, kWebSocket, NOOP } = require_constants();
	const { EventTarget: { addEventListener, removeEventListener } } = require_event_target();
	const { format, parse } = require_extension();
	const { toBuffer } = require_buffer_util();
	const kAborted = Symbol("kAborted");
	const protocolVersions = [8, 13];
	const readyStates = [
		"CONNECTING",
		"OPEN",
		"CLOSING",
		"CLOSED"
	];
	const subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
	/**
	* Class representing a WebSocket.
	*
	* @extends EventEmitter
	*/
	var WebSocket = class WebSocket extends EventEmitter$2 {
		/**
		* Create a new `WebSocket`.
		*
		* @param {(String|URL)} address The URL to which to connect
		* @param {(String|String[])} [protocols] The subprotocols
		* @param {Object} [options] Connection options
		*/
		constructor(address, protocols, options) {
			super();
			this._binaryType = BINARY_TYPES[0];
			this._closeCode = 1006;
			this._closeFrameReceived = false;
			this._closeFrameSent = false;
			this._closeMessage = EMPTY_BUFFER;
			this._closeTimer = null;
			this._errorEmitted = false;
			this._extensions = {};
			this._paused = false;
			this._protocol = "";
			this._readyState = WebSocket.CONNECTING;
			this._receiver = null;
			this._sender = null;
			this._socket = null;
			if (address !== null) {
				this._bufferedAmount = 0;
				this._isServer = false;
				this._redirects = 0;
				if (protocols === void 0) protocols = [];
				else if (!Array.isArray(protocols)) if (typeof protocols === "object" && protocols !== null) {
					options = protocols;
					protocols = [];
				} else protocols = [protocols];
				initAsClient(this, address, protocols, options);
			} else {
				this._autoPong = options.autoPong;
				this._closeTimeout = options.closeTimeout;
				this._isServer = true;
			}
		}
		/**
		* For historical reasons, the custom "nodebuffer" type is used by the default
		* instead of "blob".
		*
		* @type {String}
		*/
		get binaryType() {
			return this._binaryType;
		}
		set binaryType(type) {
			if (!BINARY_TYPES.includes(type)) return;
			this._binaryType = type;
			if (this._receiver) this._receiver._binaryType = type;
		}
		/**
		* @type {Number}
		*/
		get bufferedAmount() {
			if (!this._socket) return this._bufferedAmount;
			return this._socket._writableState.length + this._sender._bufferedBytes;
		}
		/**
		* @type {String}
		*/
		get extensions() {
			return Object.keys(this._extensions).join();
		}
		/**
		* @type {Boolean}
		*/
		get isPaused() {
			return this._paused;
		}
		/**
		* @type {Function}
		*/
		/* istanbul ignore next */
		get onclose() {
			return null;
		}
		/**
		* @type {Function}
		*/
		/* istanbul ignore next */
		get onerror() {
			return null;
		}
		/**
		* @type {Function}
		*/
		/* istanbul ignore next */
		get onopen() {
			return null;
		}
		/**
		* @type {Function}
		*/
		/* istanbul ignore next */
		get onmessage() {
			return null;
		}
		/**
		* @type {String}
		*/
		get protocol() {
			return this._protocol;
		}
		/**
		* @type {Number}
		*/
		get readyState() {
			return this._readyState;
		}
		/**
		* @type {String}
		*/
		get url() {
			return this._url;
		}
		/**
		* Set up the socket and the internal resources.
		*
		* @param {Duplex} socket The network socket between the server and client
		* @param {Buffer} head The first packet of the upgraded stream
		* @param {Object} options Options object
		* @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
		*     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
		*     multiple times in the same tick
		* @param {Function} [options.generateMask] The function used to generate the
		*     masking key
		* @param {Number} [options.maxBufferedChunks=0] The maximum number of
		*     buffered data chunks
		* @param {Number} [options.maxFragments=0] The maximum number of message
		*     fragments
		* @param {Number} [options.maxPayload=0] The maximum allowed message size
		* @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
		*     not to skip UTF-8 validation for text and close messages
		* @private
		*/
		setSocket(socket, head, options) {
			const receiver = new Receiver({
				allowSynchronousEvents: options.allowSynchronousEvents,
				binaryType: this.binaryType,
				extensions: this._extensions,
				isServer: this._isServer,
				maxBufferedChunks: options.maxBufferedChunks,
				maxFragments: options.maxFragments,
				maxPayload: options.maxPayload,
				skipUTF8Validation: options.skipUTF8Validation
			});
			const sender = new Sender(socket, this._extensions, options.generateMask);
			this._receiver = receiver;
			this._sender = sender;
			this._socket = socket;
			receiver[kWebSocket] = this;
			sender[kWebSocket] = this;
			socket[kWebSocket] = this;
			receiver.on("conclude", receiverOnConclude);
			receiver.on("drain", receiverOnDrain);
			receiver.on("error", receiverOnError);
			receiver.on("message", receiverOnMessage);
			receiver.on("ping", receiverOnPing);
			receiver.on("pong", receiverOnPong);
			sender.onerror = senderOnError;
			if (socket.setTimeout) socket.setTimeout(0);
			if (socket.setNoDelay) socket.setNoDelay();
			if (head.length > 0) socket.unshift(head);
			socket.on("close", socketOnClose);
			socket.on("data", socketOnData);
			socket.on("end", socketOnEnd);
			socket.on("error", socketOnError);
			this._readyState = WebSocket.OPEN;
			this.emit("open");
		}
		/**
		* Emit the `'close'` event.
		*
		* @private
		*/
		emitClose() {
			if (!this._socket) {
				this._readyState = WebSocket.CLOSED;
				this.emit("close", this._closeCode, this._closeMessage);
				return;
			}
			if (this._extensions[PerMessageDeflate.extensionName]) this._extensions[PerMessageDeflate.extensionName].cleanup();
			this._receiver.removeAllListeners();
			this._readyState = WebSocket.CLOSED;
			this.emit("close", this._closeCode, this._closeMessage);
		}
		/**
		* Start a closing handshake.
		*
		*          +----------+   +-----------+   +----------+
		*     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
		*    |     +----------+   +-----------+   +----------+     |
		*          +----------+   +-----------+         |
		* CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
		*          +----------+   +-----------+   |
		*    |           |                        |   +---+        |
		*                +------------------------+-->|fin| - - - -
		*    |         +---+                      |   +---+
		*     - - - - -|fin|<---------------------+
		*              +---+
		*
		* @param {Number} [code] Status code explaining why the connection is closing
		* @param {(String|Buffer)} [data] The reason why the connection is
		*     closing
		* @public
		*/
		close(code, data) {
			if (this.readyState === WebSocket.CLOSED) return;
			if (this.readyState === WebSocket.CONNECTING) {
				abortHandshake(this, this._req, "WebSocket was closed before the connection was established");
				return;
			}
			if (this.readyState === WebSocket.CLOSING) {
				if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) this._socket.end();
				return;
			}
			this._readyState = WebSocket.CLOSING;
			this._sender.close(code, data, !this._isServer, (err) => {
				if (err) return;
				this._closeFrameSent = true;
				if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) this._socket.end();
			});
			setCloseTimer(this);
		}
		/**
		* Pause the socket.
		*
		* @public
		*/
		pause() {
			if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) return;
			this._paused = true;
			this._socket.pause();
		}
		/**
		* Send a ping.
		*
		* @param {*} [data] The data to send
		* @param {Boolean} [mask] Indicates whether or not to mask `data`
		* @param {Function} [cb] Callback which is executed when the ping is sent
		* @public
		*/
		ping(data, mask, cb) {
			if (this.readyState === WebSocket.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
			if (typeof data === "function") {
				cb = data;
				data = mask = void 0;
			} else if (typeof mask === "function") {
				cb = mask;
				mask = void 0;
			}
			if (typeof data === "number") data = data.toString();
			if (this.readyState !== WebSocket.OPEN) {
				sendAfterClose(this, data, cb);
				return;
			}
			if (mask === void 0) mask = !this._isServer;
			this._sender.ping(data || EMPTY_BUFFER, mask, cb);
		}
		/**
		* Send a pong.
		*
		* @param {*} [data] The data to send
		* @param {Boolean} [mask] Indicates whether or not to mask `data`
		* @param {Function} [cb] Callback which is executed when the pong is sent
		* @public
		*/
		pong(data, mask, cb) {
			if (this.readyState === WebSocket.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
			if (typeof data === "function") {
				cb = data;
				data = mask = void 0;
			} else if (typeof mask === "function") {
				cb = mask;
				mask = void 0;
			}
			if (typeof data === "number") data = data.toString();
			if (this.readyState !== WebSocket.OPEN) {
				sendAfterClose(this, data, cb);
				return;
			}
			if (mask === void 0) mask = !this._isServer;
			this._sender.pong(data || EMPTY_BUFFER, mask, cb);
		}
		/**
		* Resume the socket.
		*
		* @public
		*/
		resume() {
			if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) return;
			this._paused = false;
			if (!this._receiver._writableState.needDrain) this._socket.resume();
		}
		/**
		* Send a data message.
		*
		* @param {*} data The message to send
		* @param {Object} [options] Options object
		* @param {Boolean} [options.binary] Specifies whether `data` is binary or
		*     text
		* @param {Boolean} [options.compress] Specifies whether or not to compress
		*     `data`
		* @param {Boolean} [options.fin=true] Specifies whether the fragment is the
		*     last one
		* @param {Boolean} [options.mask] Specifies whether or not to mask `data`
		* @param {Function} [cb] Callback which is executed when data is written out
		* @public
		*/
		send(data, options, cb) {
			if (this.readyState === WebSocket.CONNECTING) throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
			if (typeof options === "function") {
				cb = options;
				options = {};
			}
			if (typeof data === "number") data = data.toString();
			if (this.readyState !== WebSocket.OPEN) {
				sendAfterClose(this, data, cb);
				return;
			}
			const opts = {
				binary: typeof data !== "string",
				mask: !this._isServer,
				compress: true,
				fin: true,
				...options
			};
			if (!this._extensions[PerMessageDeflate.extensionName]) opts.compress = false;
			this._sender.send(data || EMPTY_BUFFER, opts, cb);
		}
		/**
		* Forcibly close the connection.
		*
		* @public
		*/
		terminate() {
			if (this.readyState === WebSocket.CLOSED) return;
			if (this.readyState === WebSocket.CONNECTING) {
				abortHandshake(this, this._req, "WebSocket was closed before the connection was established");
				return;
			}
			if (this._socket) {
				this._readyState = WebSocket.CLOSING;
				this._socket.destroy();
			}
		}
	};
	/**
	* @constant {Number} CONNECTING
	* @memberof WebSocket
	*/
	Object.defineProperty(WebSocket, "CONNECTING", {
		enumerable: true,
		value: readyStates.indexOf("CONNECTING")
	});
	/**
	* @constant {Number} CONNECTING
	* @memberof WebSocket.prototype
	*/
	Object.defineProperty(WebSocket.prototype, "CONNECTING", {
		enumerable: true,
		value: readyStates.indexOf("CONNECTING")
	});
	/**
	* @constant {Number} OPEN
	* @memberof WebSocket
	*/
	Object.defineProperty(WebSocket, "OPEN", {
		enumerable: true,
		value: readyStates.indexOf("OPEN")
	});
	/**
	* @constant {Number} OPEN
	* @memberof WebSocket.prototype
	*/
	Object.defineProperty(WebSocket.prototype, "OPEN", {
		enumerable: true,
		value: readyStates.indexOf("OPEN")
	});
	/**
	* @constant {Number} CLOSING
	* @memberof WebSocket
	*/
	Object.defineProperty(WebSocket, "CLOSING", {
		enumerable: true,
		value: readyStates.indexOf("CLOSING")
	});
	/**
	* @constant {Number} CLOSING
	* @memberof WebSocket.prototype
	*/
	Object.defineProperty(WebSocket.prototype, "CLOSING", {
		enumerable: true,
		value: readyStates.indexOf("CLOSING")
	});
	/**
	* @constant {Number} CLOSED
	* @memberof WebSocket
	*/
	Object.defineProperty(WebSocket, "CLOSED", {
		enumerable: true,
		value: readyStates.indexOf("CLOSED")
	});
	/**
	* @constant {Number} CLOSED
	* @memberof WebSocket.prototype
	*/
	Object.defineProperty(WebSocket.prototype, "CLOSED", {
		enumerable: true,
		value: readyStates.indexOf("CLOSED")
	});
	[
		"binaryType",
		"bufferedAmount",
		"extensions",
		"isPaused",
		"protocol",
		"readyState",
		"url"
	].forEach((property) => {
		Object.defineProperty(WebSocket.prototype, property, { enumerable: true });
	});
	[
		"open",
		"error",
		"close",
		"message"
	].forEach((method) => {
		Object.defineProperty(WebSocket.prototype, `on${method}`, {
			enumerable: true,
			get() {
				for (const listener of this.listeners(method)) if (listener[kForOnEventAttribute]) return listener[kListener];
				return null;
			},
			set(handler) {
				for (const listener of this.listeners(method)) if (listener[kForOnEventAttribute]) {
					this.removeListener(method, listener);
					break;
				}
				if (typeof handler !== "function") return;
				this.addEventListener(method, handler, { [kForOnEventAttribute]: true });
			}
		});
	});
	WebSocket.prototype.addEventListener = addEventListener;
	WebSocket.prototype.removeEventListener = removeEventListener;
	module.exports = WebSocket;
	/**
	* Initialize a WebSocket client.
	*
	* @param {WebSocket} websocket The client to initialize
	* @param {(String|URL)} address The URL to which to connect
	* @param {Array} protocols The subprotocols
	* @param {Object} [options] Connection options
	* @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether any
	*     of the `'message'`, `'ping'`, and `'pong'` events can be emitted multiple
	*     times in the same tick
	* @param {Boolean} [options.autoPong=true] Specifies whether or not to
	*     automatically send a pong in response to a ping
	* @param {Number} [options.closeTimeout=30000] Duration in milliseconds to wait
	*     for the closing handshake to finish after `websocket.close()` is called
	* @param {Function} [options.finishRequest] A function which can be used to
	*     customize the headers of each http request before it is sent
	* @param {Boolean} [options.followRedirects=false] Whether or not to follow
	*     redirects
	* @param {Function} [options.generateMask] The function used to generate the
	*     masking key
	* @param {Number} [options.handshakeTimeout] Timeout in milliseconds for the
	*     handshake request
	* @param {Number} [options.maxBufferedChunks=262144] The maximum number of
	*     buffered data chunks
	* @param {Number} [options.maxFragments=16384] The maximum number of message
	*     fragments
	* @param {Number} [options.maxPayload=104857600] The maximum allowed message
	*     size
	* @param {Number} [options.maxRedirects=10] The maximum number of redirects
	*     allowed
	* @param {String} [options.origin] Value of the `Origin` or
	*     `Sec-WebSocket-Origin` header
	* @param {(Boolean|Object)} [options.perMessageDeflate=true] Enable/disable
	*     permessage-deflate
	* @param {Number} [options.protocolVersion=13] Value of the
	*     `Sec-WebSocket-Version` header
	* @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
	*     not to skip UTF-8 validation for text and close messages
	* @private
	*/
	function initAsClient(websocket, address, protocols, options) {
		const opts = {
			allowSynchronousEvents: true,
			autoPong: true,
			closeTimeout: CLOSE_TIMEOUT,
			protocolVersion: protocolVersions[1],
			maxBufferedChunks: 262144,
			maxFragments: 16384,
			maxPayload: 104857600,
			skipUTF8Validation: false,
			perMessageDeflate: true,
			followRedirects: false,
			maxRedirects: 10,
			...options,
			socketPath: void 0,
			hostname: void 0,
			protocol: void 0,
			timeout: void 0,
			method: "GET",
			host: void 0,
			path: void 0,
			port: void 0
		};
		websocket._autoPong = opts.autoPong;
		websocket._closeTimeout = opts.closeTimeout;
		if (!protocolVersions.includes(opts.protocolVersion)) throw new RangeError(`Unsupported protocol version: ${opts.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`);
		let parsedUrl;
		if (address instanceof URL$2) parsedUrl = address;
		else try {
			parsedUrl = new URL$2(address);
		} catch {
			throw new SyntaxError(`Invalid URL: ${address}`);
		}
		if (parsedUrl.protocol === "http:") parsedUrl.protocol = "ws:";
		else if (parsedUrl.protocol === "https:") parsedUrl.protocol = "wss:";
		websocket._url = parsedUrl.href;
		const isSecure = parsedUrl.protocol === "wss:";
		const isIpcUrl = parsedUrl.protocol === "ws+unix:";
		let invalidUrlMessage;
		if (parsedUrl.protocol !== "ws:" && !isSecure && !isIpcUrl) invalidUrlMessage = "The URL's protocol must be one of \"ws:\", \"wss:\", \"http:\", \"https:\", or \"ws+unix:\"";
		else if (isIpcUrl && !parsedUrl.pathname) invalidUrlMessage = "The URL's pathname is empty";
		else if (parsedUrl.hash) invalidUrlMessage = "The URL contains a fragment identifier";
		if (invalidUrlMessage) {
			const err = new SyntaxError(invalidUrlMessage);
			if (websocket._redirects === 0) throw err;
			else {
				emitErrorAndClose(websocket, err);
				return;
			}
		}
		const defaultPort = isSecure ? 443 : 80;
		const key = randomBytes(16).toString("base64");
		const request = isSecure ? https$3.request : http$5.request;
		const protocolSet = /* @__PURE__ */ new Set();
		let perMessageDeflate;
		opts.createConnection = opts.createConnection || (isSecure ? tlsConnect : netConnect);
		opts.defaultPort = opts.defaultPort || defaultPort;
		opts.port = parsedUrl.port || defaultPort;
		opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
		opts.headers = {
			...opts.headers,
			"Sec-WebSocket-Version": opts.protocolVersion,
			"Sec-WebSocket-Key": key,
			Connection: "Upgrade",
			Upgrade: "websocket"
		};
		opts.path = parsedUrl.pathname + parsedUrl.search;
		opts.timeout = opts.handshakeTimeout;
		if (opts.perMessageDeflate) {
			perMessageDeflate = new PerMessageDeflate({
				...opts.perMessageDeflate,
				isServer: false,
				maxPayload: opts.maxPayload
			});
			opts.headers["Sec-WebSocket-Extensions"] = format({ [PerMessageDeflate.extensionName]: perMessageDeflate.offer() });
		}
		if (protocols.length) {
			for (const protocol of protocols) {
				if (typeof protocol !== "string" || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) throw new SyntaxError("An invalid or duplicated subprotocol was specified");
				protocolSet.add(protocol);
			}
			opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
		}
		if (opts.origin) if (opts.protocolVersion < 13) opts.headers["Sec-WebSocket-Origin"] = opts.origin;
		else opts.headers.Origin = opts.origin;
		if (parsedUrl.username || parsedUrl.password) opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
		if (isIpcUrl) {
			const parts = opts.path.split(":");
			opts.socketPath = parts[0];
			opts.path = parts[1];
		}
		let req;
		if (opts.followRedirects) {
			if (websocket._redirects === 0) {
				websocket._originalIpc = isIpcUrl;
				websocket._originalSecure = isSecure;
				websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
				const headers = options && options.headers;
				options = {
					...options,
					headers: {}
				};
				if (headers) for (const [key, value] of Object.entries(headers)) options.headers[key.toLowerCase()] = value;
			} else if (websocket.listenerCount("redirect") === 0) {
				const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
				if (!isSameHost || websocket._originalSecure && !isSecure) {
					delete opts.headers.authorization;
					delete opts.headers.cookie;
					if (!isSameHost) delete opts.headers.host;
					opts.auth = void 0;
				}
			}
			if (opts.auth && !options.headers.authorization) options.headers.authorization = "Basic " + Buffer.from(opts.auth).toString("base64");
			req = websocket._req = request(opts);
			if (websocket._redirects) websocket.emit("redirect", websocket.url, req);
		} else req = websocket._req = request(opts);
		if (opts.timeout) req.on("timeout", () => {
			abortHandshake(websocket, req, "Opening handshake has timed out");
		});
		req.on("error", (err) => {
			if (req === null || req[kAborted]) return;
			req = websocket._req = null;
			emitErrorAndClose(websocket, err);
		});
		req.on("response", (res) => {
			const location = res.headers.location;
			const statusCode = res.statusCode;
			if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
				if (++websocket._redirects > opts.maxRedirects) {
					abortHandshake(websocket, req, "Maximum redirects exceeded");
					return;
				}
				req.abort();
				let addr;
				try {
					addr = new URL$2(location, address);
				} catch (e) {
					emitErrorAndClose(websocket, /* @__PURE__ */ new SyntaxError(`Invalid URL: ${location}`));
					return;
				}
				initAsClient(websocket, addr, protocols, options);
			} else if (!websocket.emit("unexpected-response", req, res)) abortHandshake(websocket, req, `Unexpected server response: ${res.statusCode}`);
		});
		req.on("upgrade", (res, socket, head) => {
			websocket.emit("upgrade", res);
			if (websocket.readyState !== WebSocket.CONNECTING) return;
			req = websocket._req = null;
			const upgrade = res.headers.upgrade;
			if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
				abortHandshake(websocket, socket, "Invalid Upgrade header");
				return;
			}
			const digest = createHash$1("sha1").update(key + GUID).digest("base64");
			if (res.headers["sec-websocket-accept"] !== digest) {
				abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Accept header");
				return;
			}
			const serverProt = res.headers["sec-websocket-protocol"];
			let protError;
			if (serverProt !== void 0) {
				if (!protocolSet.size) protError = "Server sent a subprotocol but none was requested";
				else if (!protocolSet.has(serverProt)) protError = "Server sent an invalid subprotocol";
			} else if (protocolSet.size) protError = "Server sent no subprotocol";
			if (protError) {
				abortHandshake(websocket, socket, protError);
				return;
			}
			if (serverProt) websocket._protocol = serverProt;
			const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
			if (secWebSocketExtensions !== void 0) {
				if (!perMessageDeflate) {
					abortHandshake(websocket, socket, "Server sent a Sec-WebSocket-Extensions header but no extension was requested");
					return;
				}
				let extensions;
				try {
					extensions = parse(secWebSocketExtensions);
				} catch (err) {
					abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Extensions header");
					return;
				}
				const extensionNames = Object.keys(extensions);
				if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate.extensionName) {
					abortHandshake(websocket, socket, "Server indicated an extension that was not requested");
					return;
				}
				try {
					perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
				} catch (err) {
					abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Extensions header");
					return;
				}
				websocket._extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
			}
			websocket.setSocket(socket, head, {
				allowSynchronousEvents: opts.allowSynchronousEvents,
				generateMask: opts.generateMask,
				maxBufferedChunks: opts.maxBufferedChunks,
				maxFragments: opts.maxFragments,
				maxPayload: opts.maxPayload,
				skipUTF8Validation: opts.skipUTF8Validation
			});
		});
		if (opts.finishRequest) opts.finishRequest(req, websocket);
		else req.end();
	}
	/**
	* Emit the `'error'` and `'close'` events.
	*
	* @param {WebSocket} websocket The WebSocket instance
	* @param {Error} The error to emit
	* @private
	*/
	function emitErrorAndClose(websocket, err) {
		websocket._readyState = WebSocket.CLOSING;
		websocket._errorEmitted = true;
		websocket.emit("error", err);
		websocket.emitClose();
	}
	/**
	* Create a `net.Socket` and initiate a connection.
	*
	* @param {Object} options Connection options
	* @return {net.Socket} The newly created socket used to start the connection
	* @private
	*/
	function netConnect(options) {
		options.path = options.socketPath;
		return net$1.connect(options);
	}
	/**
	* Create a `tls.TLSSocket` and initiate a connection.
	*
	* @param {Object} options Connection options
	* @return {tls.TLSSocket} The newly created socket used to start the connection
	* @private
	*/
	function tlsConnect(options) {
		options.path = void 0;
		if (!options.servername && options.servername !== "") options.servername = net$1.isIP(options.host) ? "" : options.host;
		return tls.connect(options);
	}
	/**
	* Abort the handshake and emit an error.
	*
	* @param {WebSocket} websocket The WebSocket instance
	* @param {(http.ClientRequest|net.Socket|tls.Socket)} stream The request to
	*     abort or the socket to destroy
	* @param {String} message The error message
	* @private
	*/
	function abortHandshake(websocket, stream, message) {
		websocket._readyState = WebSocket.CLOSING;
		const err = new Error(message);
		Error.captureStackTrace(err, abortHandshake);
		if (stream.setHeader) {
			stream[kAborted] = true;
			stream.abort();
			if (stream.socket && !stream.socket.destroyed) stream.socket.destroy();
			processModule.nextTick(emitErrorAndClose, websocket, err);
		} else {
			stream.destroy(err);
			stream.once("error", websocket.emit.bind(websocket, "error"));
			stream.once("close", websocket.emitClose.bind(websocket));
		}
	}
	/**
	* Handle cases where the `ping()`, `pong()`, or `send()` methods are called
	* when the `readyState` attribute is `CLOSING` or `CLOSED`.
	*
	* @param {WebSocket} websocket The WebSocket instance
	* @param {*} [data] The data to send
	* @param {Function} [cb] Callback
	* @private
	*/
	function sendAfterClose(websocket, data, cb) {
		if (data) {
			const length = isBlob(data) ? data.size : toBuffer(data).length;
			if (websocket._socket) websocket._sender._bufferedBytes += length;
			else websocket._bufferedAmount += length;
		}
		if (cb) {
			const err = /* @__PURE__ */ new Error(`WebSocket is not open: readyState ${websocket.readyState} (${readyStates[websocket.readyState]})`);
			processModule.nextTick(cb, err);
		}
	}
	/**
	* The listener of the `Receiver` `'conclude'` event.
	*
	* @param {Number} code The status code
	* @param {Buffer} reason The reason for closing
	* @private
	*/
	function receiverOnConclude(code, reason) {
		const websocket = this[kWebSocket];
		websocket._closeFrameReceived = true;
		websocket._closeMessage = reason;
		websocket._closeCode = code;
		if (websocket._socket[kWebSocket] === void 0) return;
		websocket._socket.removeListener("data", socketOnData);
		processModule.nextTick(resume, websocket._socket);
		if (code === 1005) websocket.close();
		else websocket.close(code, reason);
	}
	/**
	* The listener of the `Receiver` `'drain'` event.
	*
	* @private
	*/
	function receiverOnDrain() {
		const websocket = this[kWebSocket];
		if (!websocket.isPaused) websocket._socket.resume();
	}
	/**
	* The listener of the `Receiver` `'error'` event.
	*
	* @param {(RangeError|Error)} err The emitted error
	* @private
	*/
	function receiverOnError(err) {
		const websocket = this[kWebSocket];
		if (websocket._socket[kWebSocket] !== void 0) {
			websocket._socket.removeListener("data", socketOnData);
			processModule.nextTick(resume, websocket._socket);
			websocket.close(err[kStatusCode]);
		}
		if (!websocket._errorEmitted) {
			websocket._errorEmitted = true;
			websocket.emit("error", err);
		}
	}
	/**
	* The listener of the `Receiver` `'finish'` event.
	*
	* @private
	*/
	function receiverOnFinish() {
		this[kWebSocket].emitClose();
	}
	/**
	* The listener of the `Receiver` `'message'` event.
	*
	* @param {Buffer|ArrayBuffer|Buffer[])} data The message
	* @param {Boolean} isBinary Specifies whether the message is binary or not
	* @private
	*/
	function receiverOnMessage(data, isBinary) {
		this[kWebSocket].emit("message", data, isBinary);
	}
	/**
	* The listener of the `Receiver` `'ping'` event.
	*
	* @param {Buffer} data The data included in the ping frame
	* @private
	*/
	function receiverOnPing(data) {
		const websocket = this[kWebSocket];
		if (websocket._autoPong) websocket.pong(data, !this._isServer, NOOP);
		websocket.emit("ping", data);
	}
	/**
	* The listener of the `Receiver` `'pong'` event.
	*
	* @param {Buffer} data The data included in the pong frame
	* @private
	*/
	function receiverOnPong(data) {
		this[kWebSocket].emit("pong", data);
	}
	/**
	* Resume a readable stream
	*
	* @param {Readable} stream The readable stream
	* @private
	*/
	function resume(stream) {
		stream.resume();
	}
	/**
	* The `Sender` error event handler.
	*
	* @param {Error} The error
	* @private
	*/
	function senderOnError(err) {
		const websocket = this[kWebSocket];
		if (websocket.readyState === WebSocket.CLOSED) return;
		if (websocket.readyState === WebSocket.OPEN) {
			websocket._readyState = WebSocket.CLOSING;
			setCloseTimer(websocket);
		}
		this._socket.end();
		if (!websocket._errorEmitted) {
			websocket._errorEmitted = true;
			websocket.emit("error", err);
		}
	}
	/**
	* Set a timer to destroy the underlying raw socket of a WebSocket.
	*
	* @param {WebSocket} websocket The WebSocket instance
	* @private
	*/
	function setCloseTimer(websocket) {
		websocket._closeTimer = setTimeout(websocket._socket.destroy.bind(websocket._socket), websocket._closeTimeout);
	}
	/**
	* The listener of the socket `'close'` event.
	*
	* @private
	*/
	function socketOnClose() {
		const websocket = this[kWebSocket];
		this.removeListener("close", socketOnClose);
		this.removeListener("data", socketOnData);
		this.removeListener("end", socketOnEnd);
		websocket._readyState = WebSocket.CLOSING;
		if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && this._readableState.length !== 0) {
			const chunk = this.read(this._readableState.length);
			websocket._receiver.write(chunk);
		}
		websocket._receiver.end();
		this[kWebSocket] = void 0;
		clearTimeout(websocket._closeTimer);
		if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) websocket.emitClose();
		else {
			websocket._receiver.on("error", receiverOnFinish);
			websocket._receiver.on("finish", receiverOnFinish);
		}
	}
	/**
	* The listener of the socket `'data'` event.
	*
	* @param {Buffer} chunk A chunk of data
	* @private
	*/
	function socketOnData(chunk) {
		if (!this[kWebSocket]._receiver.write(chunk)) this.pause();
	}
	/**
	* The listener of the socket `'end'` event.
	*
	* @private
	*/
	function socketOnEnd() {
		const websocket = this[kWebSocket];
		websocket._readyState = WebSocket.CLOSING;
		websocket._receiver.end();
		this.end();
	}
	/**
	* The listener of the socket `'error'` event.
	*
	* @private
	*/
	function socketOnError() {
		const websocket = this[kWebSocket];
		this.removeListener("error", socketOnError);
		this.on("error", NOOP);
		if (websocket) {
			websocket._readyState = WebSocket.CLOSING;
			this.destroy();
		}
	}
}));
var require_stream = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	require_websocket();
	const { Duplex: Duplex$1 } = __require("stream");
	/**
	* Emits the `'close'` event on a stream.
	*
	* @param {Duplex} stream The stream.
	* @private
	*/
	function emitClose(stream) {
		stream.emit("close");
	}
	/**
	* The listener of the `'end'` event.
	*
	* @private
	*/
	function duplexOnEnd() {
		if (!this.destroyed && this._writableState.finished) this.destroy();
	}
	/**
	* The listener of the `'error'` event.
	*
	* @param {Error} err The error
	* @private
	*/
	function duplexOnError(err) {
		this.removeListener("error", duplexOnError);
		this.destroy();
		if (this.listenerCount("error") === 0) this.emit("error", err);
	}
	/**
	* Wraps a `WebSocket` in a duplex stream.
	*
	* @param {WebSocket} ws The `WebSocket` to wrap
	* @param {Object} [options] The options for the `Duplex` constructor
	* @return {Duplex} The duplex stream
	* @public
	*/
	function createWebSocketStream(ws, options) {
		let terminateOnDestroy = true;
		const duplex = new Duplex$1({
			...options,
			autoDestroy: false,
			emitClose: false,
			objectMode: false,
			writableObjectMode: false
		});
		ws.on("message", function message(msg, isBinary) {
			const data = !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;
			if (!duplex.push(data)) ws.pause();
		});
		ws.once("error", function error(err) {
			if (duplex.destroyed) return;
			terminateOnDestroy = false;
			duplex.destroy(err);
		});
		ws.once("close", function close() {
			if (duplex.destroyed) return;
			duplex.push(null);
		});
		duplex._destroy = function(err, callback) {
			if (ws.readyState === ws.CLOSED) {
				callback(err);
				processModule.nextTick(emitClose, duplex);
				return;
			}
			let called = false;
			ws.once("error", function error(err) {
				called = true;
				callback(err);
			});
			ws.once("close", function close() {
				if (!called) callback(err);
				processModule.nextTick(emitClose, duplex);
			});
			if (terminateOnDestroy) ws.terminate();
		};
		duplex._final = function(callback) {
			if (ws.readyState === ws.CONNECTING) {
				ws.once("open", function open() {
					duplex._final(callback);
				});
				return;
			}
			if (ws._socket === null) return;
			if (ws._socket._writableState.finished) {
				callback();
				if (duplex._readableState.endEmitted) duplex.destroy();
			} else {
				ws._socket.once("finish", function finish() {
					callback();
				});
				ws.close();
			}
		};
		duplex._read = function() {
			if (ws.isPaused) ws.resume();
		};
		duplex._write = function(chunk, encoding, callback) {
			if (ws.readyState === ws.CONNECTING) {
				ws.once("open", function open() {
					duplex._write(chunk, encoding, callback);
				});
				return;
			}
			ws.send(chunk, callback);
		};
		duplex.on("end", duplexOnEnd);
		duplex.on("error", duplexOnError);
		return duplex;
	}
	module.exports = createWebSocketStream;
}));
var require_subprotocol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const { tokenChars } = require_validation();
	/**
	* Parses the `Sec-WebSocket-Protocol` header into a set of subprotocol names.
	*
	* @param {String} header The field value of the header
	* @return {Set} The subprotocol names
	* @public
	*/
	function parse(header) {
		const protocols = /* @__PURE__ */ new Set();
		let start = -1;
		let end = -1;
		let i = 0;
		for (; i < header.length; i++) {
			const code = header.charCodeAt(i);
			if (end === -1 && tokenChars[code] === 1) {
				if (start === -1) start = i;
			} else if (i !== 0 && (code === 32 || code === 9)) {
				if (end === -1 && start !== -1) end = i;
			} else if (code === 44) {
				if (start === -1) throw new SyntaxError(`Unexpected character at index ${i}`);
				if (end === -1) end = i;
				const protocol = header.slice(start, end);
				if (protocols.has(protocol)) throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
				protocols.add(protocol);
				start = end = -1;
			} else throw new SyntaxError(`Unexpected character at index ${i}`);
		}
		if (start === -1 || end !== -1) throw new SyntaxError("Unexpected end of input");
		const protocol = header.slice(start, i);
		if (protocols.has(protocol)) throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
		protocols.add(protocol);
		return protocols;
	}
	module.exports = { parse };
}));
var require_websocket_server = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const EventEmitter$1 = __require("events");
	const http$4 = __require("http");
	const { Duplex } = __require("stream");
	const { createHash } = __require("crypto");
	const extension = require_extension();
	const PerMessageDeflate = require_permessage_deflate();
	const subprotocol = require_subprotocol();
	const WebSocket = require_websocket();
	const { CLOSE_TIMEOUT, GUID, kWebSocket } = require_constants();
	const keyRegex = /^[+/0-9A-Za-z]{22}==$/;
	const RUNNING = 0;
	const CLOSING = 1;
	const CLOSED = 2;
	/**
	* Class representing a WebSocket server.
	*
	* @extends EventEmitter
	*/
	var WebSocketServer = class extends EventEmitter$1 {
		/**
		* Create a `WebSocketServer` instance.
		*
		* @param {Object} options Configuration options
		* @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
		*     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
		*     multiple times in the same tick
		* @param {Boolean} [options.autoPong=true] Specifies whether or not to
		*     automatically send a pong in response to a ping
		* @param {Number} [options.backlog=511] The maximum length of the queue of
		*     pending connections
		* @param {Boolean} [options.clientTracking=true] Specifies whether or not to
		*     track clients
		* @param {Number} [options.closeTimeout=30000] Duration in milliseconds to
		*     wait for the closing handshake to finish after `websocket.close()` is
		*     called
		* @param {Function} [options.handleProtocols] A hook to handle protocols
		* @param {String} [options.host] The hostname where to bind the server
		* @param {Number} [options.maxBufferedChunks=262144] The maximum number of
		*     buffered data chunks
		* @param {Number} [options.maxFragments=16384] The maximum number of message
		*     fragments
		* @param {Number} [options.maxPayload=104857600] The maximum allowed message
		*     size
		* @param {Boolean} [options.noServer=false] Enable no server mode
		* @param {String} [options.path] Accept only connections matching this path
		* @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
		*     permessage-deflate
		* @param {Number} [options.port] The port where to bind the server
		* @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
		*     server to use
		* @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
		*     not to skip UTF-8 validation for text and close messages
		* @param {Function} [options.verifyClient] A hook to reject connections
		* @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
		*     class to use. It must be the `WebSocket` class or class that extends it
		* @param {Function} [callback] A listener for the `listening` event
		*/
		constructor(options, callback) {
			super();
			options = {
				allowSynchronousEvents: true,
				autoPong: true,
				maxBufferedChunks: 262144,
				maxFragments: 16384,
				maxPayload: 104857600,
				skipUTF8Validation: false,
				perMessageDeflate: false,
				handleProtocols: null,
				clientTracking: true,
				closeTimeout: CLOSE_TIMEOUT,
				verifyClient: null,
				noServer: false,
				backlog: null,
				server: null,
				host: null,
				path: null,
				port: null,
				WebSocket,
				...options
			};
			if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) throw new TypeError("One and only one of the \"port\", \"server\", or \"noServer\" options must be specified");
			if (options.port != null) {
				this._server = http$4.createServer((req, res) => {
					const body = http$4.STATUS_CODES[426];
					res.writeHead(426, {
						"Content-Length": body.length,
						"Content-Type": "text/plain"
					});
					res.end(body);
				});
				this._server.listen(options.port, options.host, options.backlog, callback);
			} else if (options.server) this._server = options.server;
			if (this._server) {
				const emitConnection = this.emit.bind(this, "connection");
				this._removeListeners = addListeners(this._server, {
					listening: this.emit.bind(this, "listening"),
					error: this.emit.bind(this, "error"),
					upgrade: (req, socket, head) => {
						this.handleUpgrade(req, socket, head, emitConnection);
					}
				});
			}
			if (options.perMessageDeflate === true) options.perMessageDeflate = {};
			if (options.clientTracking) {
				this.clients = /* @__PURE__ */ new Set();
				this._shouldEmitClose = false;
			}
			this.options = options;
			this._state = RUNNING;
		}
		/**
		* Returns the bound address, the address family name, and port of the server
		* as reported by the operating system if listening on an IP socket.
		* If the server is listening on a pipe or UNIX domain socket, the name is
		* returned as a string.
		*
		* @return {(Object|String|null)} The address of the server
		* @public
		*/
		address() {
			if (this.options.noServer) throw new Error("The server is operating in \"noServer\" mode");
			if (!this._server) return null;
			return this._server.address();
		}
		/**
		* Stop the server from accepting new connections and emit the `'close'` event
		* when all existing connections are closed.
		*
		* @param {Function} [cb] A one-time listener for the `'close'` event
		* @public
		*/
		close(cb) {
			if (this._state === CLOSED) {
				if (cb) this.once("close", () => {
					cb(/* @__PURE__ */ new Error("The server is not running"));
				});
				processModule.nextTick(emitClose, this);
				return;
			}
			if (cb) this.once("close", cb);
			if (this._state === CLOSING) return;
			this._state = CLOSING;
			if (this.options.noServer || this.options.server) {
				if (this._server) {
					this._removeListeners();
					this._removeListeners = this._server = null;
				}
				if (this.clients) if (!this.clients.size) processModule.nextTick(emitClose, this);
				else this._shouldEmitClose = true;
				else processModule.nextTick(emitClose, this);
			} else {
				const server = this._server;
				this._removeListeners();
				this._removeListeners = this._server = null;
				server.close(() => {
					emitClose(this);
				});
			}
		}
		/**
		* See if a given request should be handled by this server instance.
		*
		* @param {http.IncomingMessage} req Request object to inspect
		* @return {Boolean} `true` if the request is valid, else `false`
		* @public
		*/
		shouldHandle(req) {
			if (this.options.path) {
				const index = req.url.indexOf("?");
				if ((index !== -1 ? req.url.slice(0, index) : req.url) !== this.options.path) return false;
			}
			return true;
		}
		/**
		* Handle a HTTP Upgrade request.
		*
		* @param {http.IncomingMessage} req The request object
		* @param {Duplex} socket The network socket between the server and client
		* @param {Buffer} head The first packet of the upgraded stream
		* @param {Function} cb Callback
		* @public
		*/
		handleUpgrade(req, socket, head, cb) {
			socket.on("error", socketOnError);
			const key = req.headers["sec-websocket-key"];
			const upgrade = req.headers.upgrade;
			const version = +req.headers["sec-websocket-version"];
			if (req.method !== "GET") {
				abortHandshakeOrEmitwsClientError(this, req, socket, 405, "Invalid HTTP method");
				return;
			}
			if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
				abortHandshakeOrEmitwsClientError(this, req, socket, 400, "Invalid Upgrade header");
				return;
			}
			if (key === void 0 || !keyRegex.test(key)) {
				abortHandshakeOrEmitwsClientError(this, req, socket, 400, "Missing or invalid Sec-WebSocket-Key header");
				return;
			}
			if (version !== 13 && version !== 8) {
				abortHandshakeOrEmitwsClientError(this, req, socket, 400, "Missing or invalid Sec-WebSocket-Version header", { "Sec-WebSocket-Version": "13, 8" });
				return;
			}
			if (!this.shouldHandle(req)) {
				abortHandshake(socket, 400);
				return;
			}
			const secWebSocketProtocol = req.headers["sec-websocket-protocol"];
			let protocols = /* @__PURE__ */ new Set();
			if (secWebSocketProtocol !== void 0) try {
				protocols = subprotocol.parse(secWebSocketProtocol);
			} catch (err) {
				abortHandshakeOrEmitwsClientError(this, req, socket, 400, "Invalid Sec-WebSocket-Protocol header");
				return;
			}
			const secWebSocketExtensions = req.headers["sec-websocket-extensions"];
			const extensions = {};
			if (this.options.perMessageDeflate && secWebSocketExtensions !== void 0) {
				const perMessageDeflate = new PerMessageDeflate({
					...this.options.perMessageDeflate,
					isServer: true,
					maxPayload: this.options.maxPayload
				});
				try {
					const offers = extension.parse(secWebSocketExtensions);
					if (offers[PerMessageDeflate.extensionName]) {
						perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
						extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
					}
				} catch (err) {
					abortHandshakeOrEmitwsClientError(this, req, socket, 400, "Invalid or unacceptable Sec-WebSocket-Extensions header");
					return;
				}
			}
			if (this.options.verifyClient) {
				const info = {
					origin: req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
					secure: !!(req.socket.authorized || req.socket.encrypted),
					req
				};
				if (this.options.verifyClient.length === 2) {
					this.options.verifyClient(info, (verified, code, message, headers) => {
						if (!verified) return abortHandshake(socket, code || 401, message, headers);
						this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
					});
					return;
				}
				if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
			}
			this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
		}
		/**
		* Upgrade the connection to WebSocket.
		*
		* @param {Object} extensions The accepted extensions
		* @param {String} key The value of the `Sec-WebSocket-Key` header
		* @param {Set} protocols The subprotocols
		* @param {http.IncomingMessage} req The request object
		* @param {Duplex} socket The network socket between the server and client
		* @param {Buffer} head The first packet of the upgraded stream
		* @param {Function} cb Callback
		* @throws {Error} If called more than once with the same socket
		* @private
		*/
		completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
			if (!socket.readable || !socket.writable) return socket.destroy();
			if (socket[kWebSocket]) throw new Error("server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration");
			if (this._state > RUNNING) return abortHandshake(socket, 503);
			const headers = [
				"HTTP/1.1 101 Switching Protocols",
				"Upgrade: websocket",
				"Connection: Upgrade",
				`Sec-WebSocket-Accept: ${createHash("sha1").update(key + GUID).digest("base64")}`
			];
			const ws = new this.options.WebSocket(null, void 0, this.options);
			if (protocols.size) {
				const protocol = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;
				if (protocol) {
					headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
					ws._protocol = protocol;
				}
			}
			if (extensions[PerMessageDeflate.extensionName]) {
				const params = extensions[PerMessageDeflate.extensionName].params;
				const value = extension.format({ [PerMessageDeflate.extensionName]: [params] });
				headers.push(`Sec-WebSocket-Extensions: ${value}`);
				ws._extensions = extensions;
			}
			this.emit("headers", headers, req);
			socket.write(headers.concat("\r\n").join("\r\n"));
			socket.removeListener("error", socketOnError);
			ws.setSocket(socket, head, {
				allowSynchronousEvents: this.options.allowSynchronousEvents,
				maxBufferedChunks: this.options.maxBufferedChunks,
				maxFragments: this.options.maxFragments,
				maxPayload: this.options.maxPayload,
				skipUTF8Validation: this.options.skipUTF8Validation
			});
			if (this.clients) {
				this.clients.add(ws);
				ws.on("close", () => {
					this.clients.delete(ws);
					if (this._shouldEmitClose && !this.clients.size) processModule.nextTick(emitClose, this);
				});
			}
			cb(ws, req);
		}
	};
	module.exports = WebSocketServer;
	/**
	* Add event listeners on an `EventEmitter` using a map of <event, listener>
	* pairs.
	*
	* @param {EventEmitter} server The event emitter
	* @param {Object.<String, Function>} map The listeners to add
	* @return {Function} A function that will remove the added listeners when
	*     called
	* @private
	*/
	function addListeners(server, map) {
		for (const event of Object.keys(map)) server.on(event, map[event]);
		return function removeListeners() {
			for (const event of Object.keys(map)) server.removeListener(event, map[event]);
		};
	}
	/**
	* Emit a `'close'` event on an `EventEmitter`.
	*
	* @param {EventEmitter} server The event emitter
	* @private
	*/
	function emitClose(server) {
		server._state = CLOSED;
		server.emit("close");
	}
	/**
	* Handle socket errors.
	*
	* @private
	*/
	function socketOnError() {
		this.destroy();
	}
	/**
	* Close the connection when preconditions are not fulfilled.
	*
	* @param {Duplex} socket The socket of the upgrade request
	* @param {Number} code The HTTP response status code
	* @param {String} [message] The HTTP response body
	* @param {Object} [headers] Additional HTTP response headers
	* @private
	*/
	function abortHandshake(socket, code, message, headers) {
		message = message || http$4.STATUS_CODES[code];
		headers = {
			Connection: "close",
			"Content-Type": "text/html",
			"Content-Length": Buffer.byteLength(message),
			...headers
		};
		socket.once("finish", socket.destroy);
		socket.end(`HTTP/1.1 ${code} ${http$4.STATUS_CODES[code]}\r\n` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join("\r\n") + "\r\n\r\n" + message);
	}
	/**
	* Emit a `'wsClientError'` event on a `WebSocketServer` if there is at least
	* one listener for it, otherwise call `abortHandshake()`.
	*
	* @param {WebSocketServer} server The WebSocket server
	* @param {http.IncomingMessage} req The request object
	* @param {Duplex} socket The socket of the upgrade request
	* @param {Number} code The HTTP response status code
	* @param {String} message The HTTP response body
	* @param {Object} [headers] The HTTP response headers
	* @private
	*/
	function abortHandshakeOrEmitwsClientError(server, req, socket, code, message, headers) {
		if (server.listenerCount("wsClientError")) {
			const err = new Error(message);
			Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
			server.emit("wsClientError", err, socket, req);
		} else abortHandshake(socket, code, message, headers);
	}
}));
require_stream();
require_extension();
require_permessage_deflate();
require_receiver();
require_sender();
require_subprotocol();
require_websocket();
var import_websocket_server = /* @__PURE__ */ __toESM(require_websocket_server(), 1);
processModule.versions.bun ? import.meta.require("ws").WebSocketServer : import_websocket_server.default;
var require_debug = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var debug;
	module.exports = function() {
		if (!debug) {
			try {
				debug = (init_node(), __toCommonJS(node_exports))("follow-redirects");
			} catch (error) {}
			if (typeof debug !== "function") debug = function() {};
		}
		debug.apply(null, arguments);
	};
}));
var require_follow_redirects = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var url$1 = __require("url");
	var URL = url$1.URL;
	var http$3 = __require("http");
	var https$2 = __require("https");
	var Writable = __require("stream").Writable;
	var assert$1 = __require("assert");
	var debug = require_debug();
	// istanbul ignore next
	(function detectUnsupportedEnvironment() {
		var looksLikeNode = typeof processModule !== "undefined";
		var looksLikeBrowser = typeof window !== "undefined" && typeof document !== "undefined";
		var looksLikeV8 = isFunction(Error.captureStackTrace);
		if (!looksLikeNode && (looksLikeBrowser || !looksLikeV8)) console.warn("The follow-redirects package should be excluded from browser builds.");
	})();
	var useNativeURL = false;
	try {
		assert$1(new URL(""));
	} catch (error) {
		useNativeURL = error.code === "ERR_INVALID_URL";
	}
	var sensitiveHeaders = [
		"Authorization",
		"Proxy-Authorization",
		"Cookie"
	];
	var preservedUrlFields = [
		"auth",
		"host",
		"hostname",
		"href",
		"path",
		"pathname",
		"port",
		"protocol",
		"query",
		"search",
		"hash"
	];
	var events = [
		"abort",
		"aborted",
		"connect",
		"error",
		"socket",
		"timeout"
	];
	var eventHandlers = Object.create(null);
	events.forEach(function(event) {
		eventHandlers[event] = function(arg1, arg2, arg3) {
			this._redirectable.emit(event, arg1, arg2, arg3);
		};
	});
	var InvalidUrlError = createErrorType("ERR_INVALID_URL", "Invalid URL", TypeError);
	var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
	var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", RedirectionError);
	var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
	var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
	// istanbul ignore next
	var destroy = Writable.prototype.destroy || noop;
	function RedirectableRequest(options, responseCallback) {
		Writable.call(this);
		this._sanitizeOptions(options);
		this._options = options;
		this._ended = false;
		this._ending = false;
		this._redirectCount = 0;
		this._redirects = [];
		this._requestBodyLength = 0;
		this._requestBodyBuffers = [];
		if (responseCallback) this.on("response", responseCallback);
		var self = this;
		this._onNativeResponse = function(response) {
			try {
				self._processResponse(response);
			} catch (cause) {
				self.emit("error", cause instanceof RedirectionError ? cause : new RedirectionError({ cause }));
			}
		};
		this._headerFilter = new RegExp("^(?:" + sensitiveHeaders.concat(options.sensitiveHeaders).map(escapeRegex).join("|") + ")$", "i");
		this._performRequest();
	}
	RedirectableRequest.prototype = Object.create(Writable.prototype);
	RedirectableRequest.prototype.abort = function() {
		destroyRequest(this._currentRequest);
		this._currentRequest.abort();
		this.emit("abort");
	};
	RedirectableRequest.prototype.destroy = function(error) {
		destroyRequest(this._currentRequest, error);
		destroy.call(this, error);
		return this;
	};
	RedirectableRequest.prototype.write = function(data, encoding, callback) {
		if (this._ending) throw new WriteAfterEndError();
		if (!isString(data) && !isBuffer(data)) throw new TypeError("data should be a string, Buffer or Uint8Array");
		if (isFunction(encoding)) {
			callback = encoding;
			encoding = null;
		}
		if (data.length === 0) {
			if (callback) callback();
			return;
		}
		if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
			this._requestBodyLength += data.length;
			this._requestBodyBuffers.push({
				data,
				encoding
			});
			this._currentRequest.write(data, encoding, callback);
		} else {
			this.emit("error", new MaxBodyLengthExceededError());
			this.abort();
		}
	};
	RedirectableRequest.prototype.end = function(data, encoding, callback) {
		if (isFunction(data)) {
			callback = data;
			data = encoding = null;
		} else if (isFunction(encoding)) {
			callback = encoding;
			encoding = null;
		}
		if (!data) {
			this._ended = this._ending = true;
			this._currentRequest.end(null, null, callback);
		} else {
			var self = this;
			var currentRequest = this._currentRequest;
			this.write(data, encoding, function() {
				self._ended = true;
				currentRequest.end(null, null, callback);
			});
			this._ending = true;
		}
	};
	RedirectableRequest.prototype.setHeader = function(name, value) {
		this._options.headers[name] = value;
		this._currentRequest.setHeader(name, value);
	};
	RedirectableRequest.prototype.removeHeader = function(name) {
		delete this._options.headers[name];
		this._currentRequest.removeHeader(name);
	};
	RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
		var self = this;
		function destroyOnTimeout(socket) {
			socket.setTimeout(msecs);
			socket.removeListener("timeout", socket.destroy);
			socket.addListener("timeout", socket.destroy);
		}
		function startTimer(socket) {
			if (self._timeout) clearTimeout(self._timeout);
			self._timeout = setTimeout(function() {
				self.emit("timeout");
				clearTimer();
			}, msecs);
			destroyOnTimeout(socket);
		}
		function clearTimer() {
			if (self._timeout) {
				clearTimeout(self._timeout);
				self._timeout = null;
			}
			self.removeListener("abort", clearTimer);
			self.removeListener("error", clearTimer);
			self.removeListener("response", clearTimer);
			self.removeListener("close", clearTimer);
			if (callback) self.removeListener("timeout", callback);
			if (!self.socket) self._currentRequest.removeListener("socket", startTimer);
		}
		if (callback) this.on("timeout", callback);
		if (this.socket) startTimer(this.socket);
		else this._currentRequest.once("socket", startTimer);
		this.on("socket", destroyOnTimeout);
		this.on("abort", clearTimer);
		this.on("error", clearTimer);
		this.on("response", clearTimer);
		this.on("close", clearTimer);
		return this;
	};
	[
		"flushHeaders",
		"getHeader",
		"setNoDelay",
		"setSocketKeepAlive"
	].forEach(function(method) {
		RedirectableRequest.prototype[method] = function(a, b) {
			return this._currentRequest[method](a, b);
		};
	});
	[
		"aborted",
		"connection",
		"socket"
	].forEach(function(property) {
		Object.defineProperty(RedirectableRequest.prototype, property, { get: function() {
			return this._currentRequest[property];
		} });
	});
	RedirectableRequest.prototype._sanitizeOptions = function(options) {
		if (!options.headers) options.headers = {};
		if (!isArray(options.sensitiveHeaders)) options.sensitiveHeaders = [];
		if (options.host) {
			if (!options.hostname) options.hostname = options.host;
			delete options.host;
		}
		if (!options.pathname && options.path) {
			var searchPos = options.path.indexOf("?");
			if (searchPos < 0) options.pathname = options.path;
			else {
				options.pathname = options.path.substring(0, searchPos);
				options.search = options.path.substring(searchPos);
			}
		}
	};
	RedirectableRequest.prototype._performRequest = function() {
		var protocol = this._options.protocol;
		var nativeProtocol = this._options.nativeProtocols[protocol];
		if (!nativeProtocol) throw new TypeError("Unsupported protocol " + protocol);
		if (this._options.agents) {
			var scheme = protocol.slice(0, -1);
			this._options.agent = this._options.agents[scheme];
		}
		var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
		request._redirectable = this;
		for (var event of events) request.on(event, eventHandlers[event]);
		this._currentUrl = /^\//.test(this._options.path) ? url$1.format(this._options) : this._options.path;
		if (this._isRedirect) {
			var i = 0;
			var self = this;
			var buffers = this._requestBodyBuffers;
			(function writeNext(error) {
				// istanbul ignore else
				if (request === self._currentRequest) {
					// istanbul ignore if
					if (error) self.emit("error", error);
					else if (i < buffers.length) {
						var buffer = buffers[i++];
						// istanbul ignore else
						if (!request.finished) request.write(buffer.data, buffer.encoding, writeNext);
					} else if (self._ended) request.end();
				}
			})();
		}
	};
	RedirectableRequest.prototype._processResponse = function(response) {
		var statusCode = response.statusCode;
		if (this._options.trackRedirects) this._redirects.push({
			url: this._currentUrl,
			headers: response.headers,
			statusCode
		});
		var location = response.headers.location;
		if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
			response.responseUrl = this._currentUrl;
			response.redirects = this._redirects;
			this.emit("response", response);
			this._requestBodyBuffers = [];
			return;
		}
		destroyRequest(this._currentRequest);
		response.destroy();
		if (++this._redirectCount > this._options.maxRedirects) throw new TooManyRedirectsError();
		var requestHeaders;
		var beforeRedirect = this._options.beforeRedirect;
		if (beforeRedirect) requestHeaders = Object.assign({ Host: response.req.getHeader("host") }, this._options.headers);
		var method = this._options.method;
		if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
			this._options.method = "GET";
			this._requestBodyBuffers = [];
			removeMatchingHeaders(/^content-/i, this._options.headers);
		}
		var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
		var currentUrlParts = parseUrl(this._currentUrl);
		var currentHost = currentHostHeader || currentUrlParts.host;
		var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url$1.format(Object.assign(currentUrlParts, { host: currentHost }));
		var redirectUrl = resolveUrl(location, currentUrl);
		debug("redirecting to", redirectUrl.href);
		this._isRedirect = true;
		spreadUrlObject(redirectUrl, this._options);
		if (redirectUrl.protocol !== currentUrlParts.protocol && redirectUrl.protocol !== "https:" || redirectUrl.host !== currentHost && !isSubdomain(redirectUrl.host, currentHost)) removeMatchingHeaders(this._headerFilter, this._options.headers);
		if (isFunction(beforeRedirect)) {
			var responseDetails = {
				headers: response.headers,
				statusCode
			};
			var requestDetails = {
				url: currentUrl,
				method,
				headers: requestHeaders
			};
			beforeRedirect(this._options, responseDetails, requestDetails);
			this._sanitizeOptions(this._options);
		}
		this._performRequest();
	};
	function wrap(protocols) {
		var exports$1 = {
			maxRedirects: 21,
			maxBodyLength: 10485760
		};
		var nativeProtocols = {};
		Object.keys(protocols).forEach(function(scheme) {
			var protocol = scheme + ":";
			var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
			var wrappedProtocol = exports$1[scheme] = Object.create(nativeProtocol);
			function request(input, options, callback) {
				if (isURL(input)) input = spreadUrlObject(input);
				else if (isString(input)) input = spreadUrlObject(parseUrl(input));
				else {
					callback = options;
					options = validateUrl(input);
					input = { protocol };
				}
				if (isFunction(options)) {
					callback = options;
					options = null;
				}
				options = Object.assign({
					maxRedirects: exports$1.maxRedirects,
					maxBodyLength: exports$1.maxBodyLength
				}, input, options);
				options.nativeProtocols = nativeProtocols;
				if (!isString(options.host) && !isString(options.hostname)) options.hostname = "::1";
				assert$1.equal(options.protocol, protocol, "protocol mismatch");
				debug("options", options);
				return new RedirectableRequest(options, callback);
			}
			function get(input, options, callback) {
				var wrappedRequest = wrappedProtocol.request(input, options, callback);
				wrappedRequest.end();
				return wrappedRequest;
			}
			Object.defineProperties(wrappedProtocol, {
				request: {
					value: request,
					configurable: true,
					enumerable: true,
					writable: true
				},
				get: {
					value: get,
					configurable: true,
					enumerable: true,
					writable: true
				}
			});
		});
		return exports$1;
	}
	function noop() {}
	function parseUrl(input) {
		var parsed;
		// istanbul ignore else
		if (useNativeURL) parsed = new URL(input);
		else {
			parsed = validateUrl(url$1.parse(input));
			if (!isString(parsed.protocol)) throw new InvalidUrlError({ input });
		}
		return parsed;
	}
	function resolveUrl(relative, base) {
		// istanbul ignore next
		return useNativeURL ? new URL(relative, base) : parseUrl(url$1.resolve(base, relative));
	}
	function validateUrl(input) {
		if (/^\[/.test(input.hostname) && !/^\[[:0-9a-f]+\]$/i.test(input.hostname)) throw new InvalidUrlError({ input: input.href || input });
		if (/^\[/.test(input.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(input.host)) throw new InvalidUrlError({ input: input.href || input });
		return input;
	}
	function spreadUrlObject(urlObject, target) {
		var spread = target || {};
		for (var key of preservedUrlFields) spread[key] = urlObject[key];
		if (spread.hostname.startsWith("[")) spread.hostname = spread.hostname.slice(1, -1);
		if (spread.port !== "") spread.port = Number(spread.port);
		spread.path = spread.search ? spread.pathname + spread.search : spread.pathname;
		return spread;
	}
	function removeMatchingHeaders(regex, headers) {
		var lastValue;
		for (var header in headers) if (regex.test(header)) {
			lastValue = headers[header];
			delete headers[header];
		}
		return lastValue === null || typeof lastValue === "undefined" ? void 0 : String(lastValue).trim();
	}
	function createErrorType(code, message, baseClass) {
		function CustomError(properties) {
			// istanbul ignore else
			if (isFunction(Error.captureStackTrace)) Error.captureStackTrace(this, this.constructor);
			Object.assign(this, properties || {});
			this.code = code;
			this.message = this.cause ? message + ": " + this.cause.message : message;
		}
		CustomError.prototype = new (baseClass || Error)();
		Object.defineProperties(CustomError.prototype, {
			constructor: {
				value: CustomError,
				enumerable: false
			},
			name: {
				value: "Error [" + code + "]",
				enumerable: false
			}
		});
		return CustomError;
	}
	function destroyRequest(request, error) {
		for (var event of events) request.removeListener(event, eventHandlers[event]);
		request.on("error", noop);
		request.destroy(error);
	}
	function isSubdomain(subdomain, domain) {
		assert$1(isString(subdomain) && isString(domain));
		var dot = subdomain.length - domain.length - 1;
		return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
	}
	function isArray(value) {
		return value instanceof Array;
	}
	function isString(value) {
		return typeof value === "string" || value instanceof String;
	}
	function isFunction(value) {
		return typeof value === "function";
	}
	function isBuffer(value) {
		return typeof value === "object" && "length" in value;
	}
	function isURL(value) {
		return URL && value instanceof URL;
	}
	function escapeRegex(regex) {
		return regex.replace(/[\]\\/()*+?.$]/g, "\\$&");
	}
	module.exports = wrap({
		http: http$3,
		https: https$2
	});
	module.exports.wrap = wrap;
}));
var require_common = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isSSL = void 0;
	exports.setupOutgoing = setupOutgoing;
	exports.setupSocket = setupSocket;
	exports.getPort = getPort;
	exports.hasEncryptedConnection = hasEncryptedConnection;
	exports.urlJoin = urlJoin;
	exports.rewriteCookieProperty = rewriteCookieProperty;
	exports.toURL = toURL;
	const node_tls_1 = __require("node:tls");
	const upgradeHeader = /(^|,)\s*upgrade\s*($|,)/i;
	exports.isSSL = /^https|wss/;
	const HEADER_BLACKLIST = "trailer";
	const HTTP2_HEADER_BLACKLIST = [
		":method",
		":path",
		":scheme",
		":authority",
		"connection",
		"keep-alive"
	];
	function setupOutgoing(outgoing, options, req, forward) {
		const target = options[forward || "target"];
		outgoing.port = +(target.port ?? (target.protocol !== void 0 && exports.isSSL.test(target.protocol) ? 443 : 80));
		for (const e of [
			"host",
			"hostname",
			"socketPath",
			"pfx",
			"key",
			"passphrase",
			"cert",
			"ca",
			"ciphers",
			"secureProtocol"
		]) outgoing[e] = target[e];
		if (outgoing.hostname?.startsWith("[") && outgoing.hostname.endsWith("]")) outgoing.hostname = outgoing.hostname.slice(1, -1);
		outgoing.method = options.method || req.method;
		outgoing.headers = { ...req.headers };
		if (req.headers?.[":authority"]) outgoing.headers.host = req.headers[":authority"];
		if (options.headers) outgoing.headers = {
			...outgoing.headers,
			...options.headers
		};
		for (const header in outgoing.headers) if (HEADER_BLACKLIST == header.toLowerCase()) {
			delete outgoing.headers[header];
			break;
		}
		if (req.httpVersionMajor > 1) for (const header of HTTP2_HEADER_BLACKLIST) delete outgoing.headers[header];
		if (options.auth) {
			delete outgoing.headers.authorization;
			outgoing.auth = options.auth;
		}
		if (options.ca) outgoing.ca = options.ca;
		if (target.protocol !== void 0 && exports.isSSL.test(target.protocol)) outgoing.rejectUnauthorized = typeof options.secure === "undefined" ? true : options.secure;
		outgoing.agent = options.agent || false;
		outgoing.localAddress = options.localAddress;
		if (!outgoing.agent) {
			outgoing.headers = outgoing.headers || {};
			if (typeof outgoing.headers.connection !== "string" || !upgradeHeader.test(outgoing.headers.connection)) outgoing.headers.connection = "close";
		}
		const targetPath = target && options.prependPath !== false && "pathname" in target ? getPath(`${target.pathname}${target.search ?? ""}`) : "/";
		let outgoingPath = options.toProxy ? req.url : getPath(req.url);
		outgoingPath = !options.ignorePath ? outgoingPath : "";
		outgoing.path = urlJoin(targetPath, outgoingPath ?? "");
		if (options.changeOrigin) outgoing.headers.host = target.protocol !== void 0 && required(outgoing.port, target.protocol) && !hasPort(outgoing.host) ? outgoing.host + ":" + outgoing.port : outgoing.host;
		outgoing.url = "href" in target && target.href || (target.protocol === "https" ? "https" : "http") + "://" + outgoing.host + (outgoing.port ? ":" + outgoing.port : "");
		if (req.httpVersionMajor > 1) for (const header of HTTP2_HEADER_BLACKLIST) delete outgoing.headers[header];
		return outgoing;
	}
	function setupSocket(socket) {
		socket.setTimeout(0);
		socket.setNoDelay(true);
		socket.setKeepAlive(true, 0);
		return socket;
	}
	function getPort(req) {
		const hostHeader = req.headers[":authority"] || req.headers.host;
		const res = hostHeader ? hostHeader.match(/:(\d+)/) : "";
		return res ? res[1] : hasEncryptedConnection(req) ? "443" : "80";
	}
	function hasEncryptedConnection(req) {
		const conn = req.connection;
		return conn instanceof node_tls_1.TLSSocket && conn.encrypted || Boolean(conn.pair);
	}
	function urlJoin(...args) {
		const queryParams = [];
		let queryParamRaw = "";
		args.forEach((url, index) => {
			const qpStart = url.indexOf("?");
			if (qpStart !== -1) {
				queryParams.push(url.substring(qpStart + 1));
				args[index] = url.substring(0, qpStart);
			}
		});
		queryParamRaw = queryParams.filter(Boolean).join("&");
		let retSegs = "";
		for (const seg of args) {
			if (!seg) continue;
			if (retSegs.endsWith("/")) if (seg.startsWith("/")) retSegs += seg.slice(1);
			else retSegs += seg;
			else if (seg.startsWith("/")) retSegs += seg;
			else retSegs += "/" + seg;
		}
		return queryParamRaw ? retSegs + "?" + queryParamRaw : retSegs;
	}
	function rewriteCookieProperty(header, config, property) {
		if (Array.isArray(header)) return header.map((headerElement) => {
			return rewriteCookieProperty(headerElement, config, property);
		});
		return header.replace(new RegExp("(;\\s*" + property + "=)([^;]+)", "i"), (match, prefix, previousValue) => {
			let newValue;
			if (previousValue in config) newValue = config[previousValue];
			else if ("*" in config) newValue = config["*"];
			else return match;
			if (newValue) return prefix + newValue;
			else return "";
		});
	}
	function hasPort(host) {
		if (host.startsWith("[")) {
			const closingBracket = host.indexOf("]");
			return closingBracket !== -1 && host.length > closingBracket + 1;
		}
		return host.includes(":");
	}
	function getPath(url) {
		if (url === "" || url?.startsWith("?")) return url;
		const u = toURL(url);
		return `${u.pathname ?? ""}${u.search ?? ""}`;
	}
	function toURL(url) {
		if (url instanceof URL) return url;
		else if (typeof url === "object" && "href" in url && typeof url.href === "string") url = url.href;
		if (!url) url = "";
		if (typeof url != "string") url = `${url}`;
		if (url.startsWith("//")) url = `http://base.invalid${url}`;
		return new URL(url, "http://base.invalid");
	}
	function required(port, protocol) {
		protocol = protocol.split(":")[0];
		port = +port;
		if (!port) return false;
		switch (protocol) {
			case "http":
			case "ws": return port !== 80;
			case "https":
			case "wss": return port !== 443;
		}
		return port !== 0;
	}
}));
var require_web_outgoing = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || (function() {
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		return function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.OUTGOING_PASSES = void 0;
	exports.removeChunked = removeChunked;
	exports.setConnection = setConnection;
	exports.setRedirectHostRewrite = setRedirectHostRewrite;
	exports.writeHeaders = writeHeaders;
	exports.writeStatusCode = writeStatusCode;
	const common = __importStar(require_common());
	const redirectRegex = /^201|30(1|2|7|8)$/;
	function removeChunked(_req, _res, proxyRes) {
		delete proxyRes.headers["transfer-encoding"];
	}
	function setConnection(req, _res, proxyRes) {
		if (req.httpVersion === "1.0") proxyRes.headers["connection"] = req.headers["connection"] || "close";
		else if (req.httpVersion !== "2.0" && !proxyRes.headers["connection"]) proxyRes.headers["connection"] = req.headers["connection"] || "keep-alive";
	}
	function setRedirectHostRewrite(req, _res, proxyRes, options) {
		if ((options.hostRewrite || options.autoRewrite || options.protocolRewrite) && proxyRes.headers["location"] && redirectRegex.test(`${proxyRes.statusCode}`)) {
			const target = common.toURL(options.target);
			const location = proxyRes.headers["location"];
			if (typeof location != "string") return;
			const u = common.toURL(location);
			if (target.host != u.host) return;
			if (options.hostRewrite) u.host = options.hostRewrite;
			else if (options.autoRewrite) u.host = req.headers[":authority"] ?? req.headers["host"] ?? "";
			if (options.protocolRewrite) u.protocol = options.protocolRewrite;
			proxyRes.headers["location"] = u.toString();
		}
	}
	function writeHeaders(_req, res, proxyRes, options) {
		const rewriteCookieDomainConfig = typeof options.cookieDomainRewrite === "string" ? { "*": options.cookieDomainRewrite } : options.cookieDomainRewrite;
		const rewriteCookiePathConfig = typeof options.cookiePathRewrite === "string" ? { "*": options.cookiePathRewrite } : options.cookiePathRewrite;
		const preserveHeaderKeyCase = options.preserveHeaderKeyCase;
		const setHeader = (key, header) => {
			if (header == void 0) return;
			if (rewriteCookieDomainConfig && key.toLowerCase() === "set-cookie") header = common.rewriteCookieProperty(header, rewriteCookieDomainConfig, "domain");
			if (rewriteCookiePathConfig && key.toLowerCase() === "set-cookie") header = common.rewriteCookieProperty(header, rewriteCookiePathConfig, "path");
			res.setHeader(String(key).trim(), header);
		};
		let rawHeaderKeyMap;
		if (preserveHeaderKeyCase && proxyRes.rawHeaders != void 0) {
			rawHeaderKeyMap = {};
			for (let i = 0; i < proxyRes.rawHeaders.length; i += 2) {
				const key = proxyRes.rawHeaders[i];
				rawHeaderKeyMap[key.toLowerCase()] = key;
			}
		}
		for (const key0 in proxyRes.headers) {
			let key = key0;
			if (_req.httpVersionMajor > 1 && (key === "connection" || key === "keep-alive")) continue;
			const header = proxyRes.headers[key];
			if (preserveHeaderKeyCase && rawHeaderKeyMap) key = rawHeaderKeyMap[key] ?? key;
			setHeader(key, header);
		}
	}
	function writeStatusCode(_req, res, proxyRes) {
		res.statusCode = proxyRes.statusCode;
		if (proxyRes.statusMessage && _req.httpVersionMajor === 1) res.statusMessage = proxyRes.statusMessage;
	}
	exports.OUTGOING_PASSES = {
		removeChunked,
		setConnection,
		setRedirectHostRewrite,
		writeHeaders,
		writeStatusCode
	};
}));
var require_web_incoming = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || (function() {
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		return function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.WEB_PASSES = void 0;
	exports.deleteLength = deleteLength;
	exports.timeout = timeout;
	exports.XHeaders = XHeaders;
	exports.stream = stream;
	const http$2 = __importStar(__require("node:http"));
	const https$1 = __importStar(__require("node:https"));
	const followRedirects = __importStar(require_follow_redirects());
	const common = __importStar(require_common());
	const web_outgoing_1 = require_web_outgoing();
	const node_stream_1 = __require("node:stream");
	const web_o = Object.values(web_outgoing_1.OUTGOING_PASSES);
	const nativeAgents = {
		http: http$2,
		https: https$1
	};
	function deleteLength(req) {
		if ((req.method === "DELETE" || req.method === "OPTIONS") && !req.headers["content-length"]) {
			req.headers["content-length"] = "0";
			delete req.headers["transfer-encoding"];
		}
	}
	function timeout(req, _res, options) {
		if (options.timeout) req.socket.setTimeout(options.timeout);
	}
	function XHeaders(req, _res, options) {
		if (!options.xfwd) return;
		const encrypted = common.hasEncryptedConnection(req);
		const values = {
			for: req.connection.remoteAddress || req.socket.remoteAddress,
			port: common.getPort(req),
			proto: encrypted ? "https" : "http"
		};
		for (const header of [
			"for",
			"port",
			"proto"
		]) req.headers["x-forwarded-" + header] = (req.headers["x-forwarded-" + header] || "") + (req.headers["x-forwarded-" + header] ? "," : "") + values[header];
		req.headers["x-forwarded-host"] = req.headers["x-forwarded-host"] || req.headers[":authority"] || req.headers["host"] || "";
	}
	function stream(req, res, options, _, server, cb) {
		server.emit("start", req, res, options.target || options.forward);
		if (options.fetch || options.fetchOptions || processModule.env.FORCE_FETCH_PATH === "true") return stream2(req, res, options, _, server, cb);
		const agents = options.followRedirects ? followRedirects : nativeAgents;
		const http = agents.http;
		const https = agents.https;
		if (options.forward) {
			const proto = options.forward.protocol === "https:" ? https : http;
			const outgoingOptions = common.setupOutgoing(options.ssl || {}, options, req, "forward");
			const forwardReq = proto.request(outgoingOptions);
			const forwardError = createErrorHandler(forwardReq, options.forward);
			req.on("error", forwardError);
			forwardReq.on("error", forwardError);
			(options.buffer || req).pipe(forwardReq);
			if (!options.target) return res.end();
		}
		const proto = options.target.protocol === "https:" ? https : http;
		const outgoingOptions = common.setupOutgoing(options.ssl || {}, options, req);
		const proxyReq = proto.request(outgoingOptions);
		proxyReq.on("socket", (socket) => {
			if (server && !proxyReq.getHeader("expect")) server.emit("proxyReq", proxyReq, req, res, options, socket);
		});
		if (options.proxyTimeout) proxyReq.setTimeout(options.proxyTimeout, () => {
			proxyReq.destroy();
		});
		res.on("close", () => {
			if (!res.writableFinished) proxyReq.destroy();
		});
		const proxyError = createErrorHandler(proxyReq, options.target);
		req.on("error", proxyError);
		proxyReq.on("error", proxyError);
		function createErrorHandler(proxyReq, url) {
			return (err) => {
				if (req.socket.destroyed && err.code === "ECONNRESET") {
					server.emit("econnreset", err, req, res, url);
					proxyReq.destroy();
					return;
				}
				if (cb) cb(err, req, res, url);
				else server.emit("error", err, req, res, url);
			};
		}
		(options.buffer || req).pipe(proxyReq);
		proxyReq.on("response", (proxyRes) => {
			server?.emit("proxyRes", proxyRes, req, res);
			if (!res.headersSent && !options.selfHandleResponse) for (const pass of web_o) pass(req, res, proxyRes, options);
			if (!res.finished) {
				proxyRes.on("end", () => {
					server?.emit("end", req, res, proxyRes);
				});
				if (!options.selfHandleResponse) proxyRes.pipe(res);
			} else server?.emit("end", req, res, proxyRes);
		});
	}
	async function stream2(req, res, options, _, server, cb) {
		const handleError = (err, target) => {
			const e = err;
			if (e.code === void 0 && e.cause?.code) e.code = e.cause.code;
			if (cb) cb(err, req, res, target);
			else server.emit("error", err, req, res, target);
		};
		req.on("error", (err) => {
			if (req.socket.destroyed && err.code === "ECONNRESET") {
				const target = options.target || options.forward;
				if (target) server.emit("econnreset", err, req, res, target);
				return;
			}
			handleError(err);
		});
		const customFetch = options.fetch || fetch;
		const fetchOptions = options.fetchOptions ?? {};
		const prepareRequest = (outgoing) => {
			const requestOptions = {
				method: outgoing.method,
				...fetchOptions.requestOptions
			};
			const headers = new Headers(fetchOptions.requestOptions?.headers);
			if (!fetchOptions.requestOptions?.headers && outgoing.headers) {
				for (const [key, value] of Object.entries(outgoing.headers)) if (typeof key === "string") {
					if (Array.isArray(value)) for (const v of value) headers.append(key, v);
					else if (value != null) headers.append(key, value);
				}
			}
			if (options.auth) headers.set("authorization", `Basic ${Buffer.from(options.auth).toString("base64")}`);
			if (options.proxyTimeout) requestOptions.signal = AbortSignal.timeout(options.proxyTimeout);
			requestOptions.headers = headers;
			if (options.buffer) requestOptions.body = options.buffer;
			else if (req.method !== "GET" && req.method !== "HEAD") {
				requestOptions.body = req;
				requestOptions.duplex = "half";
			}
			return requestOptions;
		};
		if (options.forward) {
			const outgoingOptions = common.setupOutgoing(options.ssl || {}, options, req, "forward");
			const requestOptions = prepareRequest(outgoingOptions);
			let targetUrl = new URL(outgoingOptions.url).origin + outgoingOptions.path;
			if (targetUrl.startsWith("ws")) targetUrl = targetUrl.replace("ws", "http");
			if (fetchOptions.onBeforeRequest) try {
				await fetchOptions.onBeforeRequest(requestOptions, req, res, options);
			} catch (err) {
				handleError(err, options.forward);
				return;
			}
			try {
				const result = await customFetch(targetUrl, requestOptions);
				if (fetchOptions.onAfterResponse) try {
					await fetchOptions.onAfterResponse(result, req, res, options);
				} catch (err) {
					handleError(err, options.forward);
					return;
				}
			} catch (err) {
				handleError(err, options.forward);
			}
			if (!options.target) return res.end();
		}
		const outgoingOptions = common.setupOutgoing(options.ssl || {}, options, req);
		const requestOptions = prepareRequest(outgoingOptions);
		let targetUrl = new URL(outgoingOptions.url).origin + outgoingOptions.path;
		if (targetUrl.startsWith("ws")) targetUrl = targetUrl.replace("ws", "http");
		if (fetchOptions.onBeforeRequest) try {
			await fetchOptions.onBeforeRequest(requestOptions, req, res, options);
		} catch (err) {
			handleError(err, options.target);
			return;
		}
		try {
			const response = await customFetch(targetUrl, requestOptions);
			if (fetchOptions.onAfterResponse) try {
				await fetchOptions.onAfterResponse(response, req, res, options);
			} catch (err) {
				handleError(err, options.target);
				return;
			}
			const fakeProxyRes = {
				statusCode: response.status,
				statusMessage: response.statusText,
				headers: Object.fromEntries(response.headers.entries()),
				rawHeaders: Object.entries(response.headers).flatMap(([key, value]) => {
					if (Array.isArray(value)) return value.flatMap((v) => v != null ? [key, v] : []);
					return value != null ? [key, value] : [];
				})
			};
			server?.emit("proxyRes", fakeProxyRes, req, res);
			if (!res.headersSent && !options.selfHandleResponse) for (const pass of web_o) pass(req, res, fakeProxyRes, options);
			if (!res.writableEnded) {
				const nodeStream = response.body ? node_stream_1.Readable.from(response.body) : null;
				if (nodeStream) {
					nodeStream.on("error", (err) => {
						handleError(err, options.target);
					});
					nodeStream.on("end", () => {
						server?.emit("end", req, res, fakeProxyRes);
					});
					if (!options.selfHandleResponse) nodeStream.pipe(res, { end: true });
					else nodeStream.resume();
				} else server?.emit("end", req, res, fakeProxyRes);
			} else server?.emit("end", req, res, fakeProxyRes);
		} catch (err) {
			handleError(err, options.target);
		}
	}
	exports.WEB_PASSES = {
		deleteLength,
		timeout,
		XHeaders,
		stream
	};
}));
var require_ws_incoming = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || (function() {
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		return function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
	})();
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.WS_PASSES = void 0;
	exports.numOpenSockets = numOpenSockets;
	exports.checkMethodAndHeader = checkMethodAndHeader;
	exports.XHeaders = XHeaders;
	exports.stream = stream;
	const http$1 = __importStar(__require("node:http"));
	const https = __importStar(__require("node:https"));
	const common = __importStar(require_common());
	const web_outgoing_1 = require_web_outgoing();
	const log = (0, __importDefault((init_node(), __toCommonJS(node_exports))).default)("http-proxy-3:ws-incoming");
	const web_o = Object.values(web_outgoing_1.OUTGOING_PASSES);
	function createSocketCounter(name) {
		let sockets = /* @__PURE__ */ new Set();
		return ({ add, rm } = {}) => {
			if (add) {
				if (!add.id) add.id = Math.random();
				if (!sockets.has(add.id)) sockets.add(add.id);
			}
			if (rm) {
				if (!rm.id) rm.id = Math.random();
				if (sockets.has(rm.id)) sockets.delete(rm.id);
			}
			log("socket counter:", { [name]: sockets.size }, add ? "add" : rm ? "rm" : "");
			return sockets.size;
		};
	}
	const socketCounter = createSocketCounter("socket");
	const proxySocketCounter = createSocketCounter("proxySocket");
	var MockResponse = class {
		constructor() {
			this.headers = {};
			this.statusCode = 200;
			this.statusMessage = "";
		}
		setHeader(key, value) {
			this.headers[key] = value;
			return this;
		}
	};
	function numOpenSockets() {
		return socketCounter() + proxySocketCounter();
	}
	function checkMethodAndHeader(req, socket) {
		log("websocket: checkMethodAndHeader");
		if (req.method !== "GET" || !req.headers.upgrade) {
			socket.destroy();
			return true;
		}
		if (req.headers.upgrade.toLowerCase() !== "websocket") {
			socket.destroy();
			return true;
		}
	}
	function XHeaders(req, _socket, options) {
		if (!options.xfwd) return;
		log("websocket: XHeaders");
		const values = {
			for: req.connection.remoteAddress || req.socket.remoteAddress,
			port: common.getPort(req),
			proto: common.hasEncryptedConnection(req) ? "wss" : "ws"
		};
		for (const header of [
			"for",
			"port",
			"proto"
		]) req.headers["x-forwarded-" + header] = (req.headers["x-forwarded-" + header] || "") + (req.headers["x-forwarded-" + header] ? "," : "") + values[header];
	}
	function stream(req, socket, options, head, server, cb) {
		log("websocket: new stream");
		const proxySockets = [];
		socketCounter({ add: socket });
		const cleanUpProxySockets = () => {
			for (const p of proxySockets) p.end();
		};
		socket.on("close", () => {
			socketCounter({ rm: socket });
			cleanUpProxySockets();
		});
		socket.on("error", cleanUpProxySockets);
		const createHttpHeader = (line, headers) => {
			return Object.keys(headers).reduce((head, key) => {
				const value = headers[key];
				if (!Array.isArray(value)) {
					head.push(key + ": " + value);
					return head;
				}
				for (let i = 0; i < value.length; i++) head.push(key + ": " + value[i]);
				return head;
			}, [line]).join("\r\n") + "\r\n\r\n";
		};
		common.setupSocket(socket);
		if (head && head.length) socket.unshift(head);
		const proto = common.isSSL.test(options.target.protocol) ? https : http$1;
		const outgoingOptions = common.setupOutgoing(options.ssl || {}, options, req);
		const proxyReq = proto.request(outgoingOptions);
		if (server) server.emit("proxyReqWs", proxyReq, req, socket, options, head);
		proxyReq.on("error", onOutgoingError);
		proxyReq.on("upgrade", (proxyRes, proxySocket, proxyHead) => {
			log("upgrade");
			proxySocketCounter({ add: proxySocket });
			proxySockets.push(proxySocket);
			proxySocket.on("close", () => {
				proxySocketCounter({ rm: proxySocket });
			});
			proxySocket.on("error", onOutgoingError);
			proxySocket.on("end", () => {
				server.emit("close", proxyRes, proxySocket, proxyHead);
			});
			proxySocket.on("close", () => {
				socket.end();
			});
			common.setupSocket(proxySocket);
			if (proxyHead && proxyHead.length) proxySocket.unshift(proxyHead);
			socket.write(createHttpHeader("HTTP/1.1 101 Switching Protocols", proxyRes.headers));
			proxySocket.pipe(socket).pipe(proxySocket);
			server.emit("open", proxySocket);
		});
		function onOutgoingError(err) {
			if (cb) cb(err, req, socket);
			else server.emit("error", err, req, socket);
			socket.destroySoon();
		}
		proxyReq.on("response", (proxyRes) => {
			log("got non-ws HTTP response", {
				statusCode: proxyRes.statusCode,
				statusMessage: proxyRes.statusMessage
			});
			const res = new MockResponse();
			for (const pass of web_o) pass(req, res, proxyRes, options);
			let writeChunk = (chunk) => {
				socket.write(chunk);
			};
			if (req.httpVersion === "1.1" && proxyRes.headers["content-length"] === void 0) {
				res.headers["transfer-encoding"] = "chunked";
				writeChunk = (chunk) => {
					socket.write(chunk.length.toString(16));
					socket.write("\r\n");
					socket.write(chunk);
					socket.write("\r\n");
				};
			}
			const proxyHead = createHttpHeader(`HTTP/${req.httpVersion} ${proxyRes.statusCode} ${proxyRes.statusMessage}`, res.headers);
			if (!socket.destroyed) {
				socket.write(proxyHead);
				proxyRes.on("data", (chunk) => {
					writeChunk(chunk);
				});
				proxyRes.on("end", () => {
					writeChunk("");
					socket.destroySoon();
				});
			} else proxyRes.resume();
		});
		proxyReq.end();
	}
	exports.WS_PASSES = {
		checkMethodAndHeader,
		XHeaders,
		stream
	};
}));
var require_http_proxy = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || (function() {
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		return function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
	})();
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ProxyServer = void 0;
	const http = __importStar(__require("node:http"));
	const http2 = __importStar(__require("node:http2"));
	const web_incoming_1 = require_web_incoming();
	const ws_incoming_1 = require_ws_incoming();
	const node_events_1 = __require("node:events");
	const debug_1 = __importDefault((init_node(), __toCommonJS(node_exports)));
	const common_1 = require_common();
	const log = (0, debug_1.default)("http-proxy-3");
	exports.ProxyServer = class ProxyServer extends node_events_1.EventEmitter {
		/**
		* Creates the proxy server with specified options.
		* @param options - Config object passed to the proxy
		*/
		constructor(options = {}) {
			super();
			this.createRightProxy = (type) => {
				log("createRightProxy", { type });
				return (options) => {
					return (...args) => {
						const req = args[0];
						log("proxy: ", {
							type,
							path: req.url
						});
						const res = args[1];
						const passes = type === "ws" ? this.wsPasses : this.webPasses;
						if (type == "ws") res.on("error", (err) => {
							this.emit("error", err, req, res);
						});
						let counter = args.length - 1;
						let head;
						let cb;
						if (typeof args[counter] === "function") {
							cb = args[counter];
							counter--;
						}
						let requestOptions;
						if (!(args[counter] instanceof Buffer) && args[counter] !== res) {
							requestOptions = {
								...options,
								...args[counter]
							};
							counter--;
						} else requestOptions = { ...options };
						if (args[counter] instanceof Buffer) head = args[counter];
						for (const e of ["target", "forward"]) if (typeof requestOptions[e] === "string") requestOptions[e] = (0, common_1.toURL)(requestOptions[e]);
						if (!requestOptions.target && !requestOptions.forward) {
							this.emit("error", /* @__PURE__ */ new Error("Must set target or forward"), req, res);
							return;
						}
						for (const pass of passes)
 /**
						* Call of passes functions
						*     pass(req, res, options, head)
						*
						* In WebSockets case, the `res` variable
						* refer to the connection socket
						*    pass(req, socket, options, head)
						*/
						if (pass(req, res, requestOptions, head, this, cb)) break;
					};
				};
			};
			this.onError = (err) => {
				if (this.listeners("error").length === 1) throw err;
			};
			/**
			* A function that wraps the object in a webserver, for your convenience
			* @param port - Port to listen on
			* @param hostname - The hostname to listen on
			*/
			this.listen = (port, hostname) => {
				log("listen", {
					port,
					hostname
				});
				const requestListener = (req, res) => {
					this.web(req, res);
				};
				this._server = this.options.ssl ? http2.createSecureServer({
					...this.options.ssl,
					allowHTTP1: true
				}, requestListener) : http.createServer(requestListener);
				if (this.options.ws) this._server.on("upgrade", (req, socket, head) => {
					this.ws(req, socket, head);
				});
				this._server.listen(port, hostname);
				return this;
			};
			this.address = () => {
				return this._server?.address();
			};
			/**
			* A function that closes the inner webserver and stops listening on given port
			*/
			this.close = (cb) => {
				if (this._server == null) {
					cb?.();
					return;
				}
				this._server.close((err) => {
					this._server = null;
					cb?.(err);
				});
			};
			this.before = (type, passName, cb) => {
				if (type !== "ws" && type !== "web") throw new Error("type must be `web` or `ws`");
				const passes = type === "ws" ? this.wsPasses : this.webPasses;
				let i = false;
				passes.forEach((v, idx) => {
					if (v.name === passName) i = idx;
				});
				if (i === false) throw new Error("No such pass");
				passes.splice(i, 0, cb);
			};
			this.after = (type, passName, cb) => {
				if (type !== "ws" && type !== "web") throw new Error("type must be `web` or `ws`");
				const passes = type === "ws" ? this.wsPasses : this.webPasses;
				let i = false;
				passes.forEach((v, idx) => {
					if (v.name === passName) i = idx;
				});
				if (i === false) throw new Error("No such pass");
				passes.splice(i++, 0, cb);
			};
			log("creating a ProxyServer", options);
			options.prependPath = options.prependPath !== false;
			this.options = options;
			this.web = this.createRightProxy("web")(options);
			this.ws = this.createRightProxy("ws")(options);
			this.webPasses = Object.values(web_incoming_1.WEB_PASSES);
			this.wsPasses = Object.values(ws_incoming_1.WS_PASSES);
			this.on("error", this.onError);
		}
		/**
		* Creates the proxy server with specified options.
		* @param options Config object passed to the proxy
		* @returns Proxy object with handlers for `ws` and `web` requests
		*/
		static createProxyServer(options) {
			return new ProxyServer(options);
		}
		/**
		* Creates the proxy server with specified options.
		* @param options Config object passed to the proxy
		* @returns Proxy object with handlers for `ws` and `web` requests
		*/
		static createServer(options) {
			return new ProxyServer(options);
		}
		/**
		* Creates the proxy server with specified options.
		* @param options Config object passed to the proxy
		* @returns Proxy object with handlers for `ws` and `web` requests
		*/
		static createProxy(options) {
			return new ProxyServer(options);
		}
	};
}));
(/* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.numOpenSockets = exports.ProxyServer = void 0;
	exports.createProxyServer = createProxyServer;
	const index_1 = require_http_proxy();
	Object.defineProperty(exports, "ProxyServer", {
		enumerable: true,
		get: function() {
			return index_1.ProxyServer;
		}
	});
	var ws_incoming_1 = require_ws_incoming();
	Object.defineProperty(exports, "numOpenSockets", {
		enumerable: true,
		get: function() {
			return ws_incoming_1.numOpenSockets;
		}
	});
	/**
	* Creates the proxy server.
	*
	* Examples:
	*
	*    httpProxy.createProxyServer({ .. }, 8000)
	*    // => '{ web: [Function], ws: [Function] ... }'
	*
	* @param {Object} Options Config object passed to the proxy
	*
	* @return {Object} Proxy Proxy object with handlers for `ws` and `web` requests
	*
	* @api public
	*/
	function createProxyServer(options = {}) {
		return new index_1.ProxyServer(options);
	}
})))();
createDebugger("vite:proxy");
createDebugger("vite:html-fallback");
var require_convert_source_map = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "commentRegex", { get: function getCommentRegex() {
		return /^\s*?\/[\/\*][@#]\s+?sourceMappingURL=data:(((?:application|text)\/json)(?:;charset=([^;,]+?)?)?)?(?:;(base64))?,(.*?)$/gm;
	} });
	Object.defineProperty(exports, "mapFileCommentRegex", { get: function getMapFileCommentRegex() {
		return /(?:\/\/[@#][ \t]+?sourceMappingURL=([^\s'"`]+?)[ \t]*?$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^*]+?)[ \t]*?(?:\*\/){1}[ \t]*?$)/gm;
	} });
	var decodeBase64;
	if (typeof Buffer !== "undefined") if (typeof Buffer.from === "function") decodeBase64 = decodeBase64WithBufferFrom;
	else decodeBase64 = decodeBase64WithNewBuffer;
	else decodeBase64 = decodeBase64WithAtob;
	function decodeBase64WithBufferFrom(base64) {
		return Buffer.from(base64, "base64").toString();
	}
	function decodeBase64WithNewBuffer(base64) {
		if (typeof value === "number") throw new TypeError("The value to decode must not be of type number.");
		return new Buffer(base64, "base64").toString();
	}
	function decodeBase64WithAtob(base64) {
		return decodeURIComponent(escape(atob(base64)));
	}
	function stripComment(sm) {
		return sm.split(",").pop();
	}
	function readFromFileMap(sm, read) {
		var r = exports.mapFileCommentRegex.exec(sm);
		var filename = r[1] || r[2];
		try {
			var sm = read(filename);
			if (sm != null && typeof sm.catch === "function") return sm.catch(throwError);
			else return sm;
		} catch (e) {
			throwError(e);
		}
		function throwError(e) {
			throw new Error("An error occurred while trying to read the map file at " + filename + "\n" + e.stack);
		}
	}
	function Converter(sm, opts) {
		opts = opts || {};
		if (opts.hasComment) sm = stripComment(sm);
		if (opts.encoding === "base64") sm = decodeBase64(sm);
		else if (opts.encoding === "uri") sm = decodeURIComponent(sm);
		if (opts.isJSON || opts.encoding) sm = JSON.parse(sm);
		this.sourcemap = sm;
	}
	Converter.prototype.toJSON = function(space) {
		return JSON.stringify(this.sourcemap, null, space);
	};
	if (typeof Buffer !== "undefined") if (typeof Buffer.from === "function") Converter.prototype.toBase64 = encodeBase64WithBufferFrom;
	else Converter.prototype.toBase64 = encodeBase64WithNewBuffer;
	else Converter.prototype.toBase64 = encodeBase64WithBtoa;
	function encodeBase64WithBufferFrom() {
		var json = this.toJSON();
		return Buffer.from(json, "utf8").toString("base64");
	}
	function encodeBase64WithNewBuffer() {
		var json = this.toJSON();
		if (typeof json === "number") throw new TypeError("The json to encode must not be of type number.");
		return new Buffer(json, "utf8").toString("base64");
	}
	function encodeBase64WithBtoa() {
		var json = this.toJSON();
		return btoa(unescape(encodeURIComponent(json)));
	}
	Converter.prototype.toURI = function() {
		var json = this.toJSON();
		return encodeURIComponent(json);
	};
	Converter.prototype.toComment = function(options) {
		var encoding, content, data;
		if (options != null && options.encoding === "uri") {
			encoding = "";
			content = this.toURI();
		} else {
			encoding = ";base64";
			content = this.toBase64();
		}
		data = "sourceMappingURL=data:application/json;charset=utf-8" + encoding + "," + content;
		return options != null && options.multiline ? "/*# " + data + " */" : "//# " + data;
	};
	Converter.prototype.toObject = function() {
		return JSON.parse(this.toJSON());
	};
	Converter.prototype.addProperty = function(key, value) {
		if (this.sourcemap.hasOwnProperty(key)) throw new Error("property \"" + key + "\" already exists on the sourcemap, use set property instead");
		return this.setProperty(key, value);
	};
	Converter.prototype.setProperty = function(key, value) {
		this.sourcemap[key] = value;
		return this;
	};
	Converter.prototype.getProperty = function(key) {
		return this.sourcemap[key];
	};
	exports.fromObject = function(obj) {
		return new Converter(obj);
	};
	exports.fromJSON = function(json) {
		return new Converter(json, { isJSON: true });
	};
	exports.fromURI = function(uri) {
		return new Converter(uri, { encoding: "uri" });
	};
	exports.fromBase64 = function(base64) {
		return new Converter(base64, { encoding: "base64" });
	};
	exports.fromComment = function(comment) {
		var m, encoding;
		comment = comment.replace(/^\/\*/g, "//").replace(/\*\/$/g, "");
		m = exports.commentRegex.exec(comment);
		encoding = m && m[4] || "uri";
		return new Converter(comment, {
			encoding,
			hasComment: true
		});
	};
	function makeConverter(sm) {
		return new Converter(sm, { isJSON: true });
	}
	exports.fromMapFileComment = function(comment, read) {
		if (typeof read === "string") throw new Error("String directory paths are no longer supported with `fromMapFileComment`\nPlease review the Upgrading documentation at https://github.com/thlorenz/convert-source-map#upgrading");
		var sm = readFromFileMap(comment, read);
		if (sm != null && typeof sm.then === "function") return sm.then(makeConverter);
		else return makeConverter(sm);
	};
	exports.fromSource = function(content) {
		var m = content.match(exports.commentRegex);
		return m ? exports.fromComment(m.pop()) : null;
	};
	exports.fromMapFileSource = function(content, read) {
		if (typeof read === "string") throw new Error("String directory paths are no longer supported with `fromMapFileSource`\nPlease review the Upgrading documentation at https://github.com/thlorenz/convert-source-map#upgrading");
		var m = content.match(exports.mapFileCommentRegex);
		return m ? exports.fromMapFileComment(m.pop(), read) : null;
	};
	exports.removeComments = function(src) {
		return src.replace(exports.commentRegex, "");
	};
	exports.removeMapFileComments = function(src) {
		return src.replace(exports.mapFileCommentRegex, "");
	};
	exports.generateMapFileComment = function(file, options) {
		var data = "sourceMappingURL=" + file;
		return options && options.multiline ? "/*# " + data + " */" : "//# " + data;
	};
}));
/*!
* etag
* Copyright(c) 2014-2016 Douglas Christopher Wilson
* MIT Licensed
*/
var require_etag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module exports.
	* @public
	*/
	module.exports = etag;
	/**
	* Module dependencies.
	* @private
	*/
	var crypto$1 = __require("crypto");
	var Stats = __require("fs").Stats;
	/**
	* Module variables.
	* @private
	*/
	var toString = Object.prototype.toString;
	/**
	* Generate an entity tag.
	*
	* @param {Buffer|string} entity
	* @return {string}
	* @private
	*/
	function entitytag(entity) {
		if (entity.length === 0) return "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"";
		var hash = crypto$1.createHash("sha1").update(entity, "utf8").digest("base64").substring(0, 27);
		return "\"" + (typeof entity === "string" ? Buffer.byteLength(entity, "utf8") : entity.length).toString(16) + "-" + hash + "\"";
	}
	/**
	* Create a simple ETag.
	*
	* @param {string|Buffer|Stats} entity
	* @param {object} [options]
	* @param {boolean} [options.weak]
	* @return {String}
	* @public
	*/
	function etag(entity, options) {
		if (entity == null) throw new TypeError("argument entity is required");
		var isStats = isstats(entity);
		var weak = options && typeof options.weak === "boolean" ? options.weak : isStats;
		if (!isStats && typeof entity !== "string" && !Buffer.isBuffer(entity)) throw new TypeError("argument entity must be string, Buffer, or fs.Stats");
		var tag = isStats ? stattag(entity) : entitytag(entity);
		return weak ? "W/" + tag : tag;
	}
	/**
	* Determine if object is a Stats object.
	*
	* @param {object} obj
	* @return {boolean}
	* @api private
	*/
	function isstats(obj) {
		if (typeof Stats === "function" && obj instanceof Stats) return true;
		return obj && typeof obj === "object" && "ctime" in obj && toString.call(obj.ctime) === "[object Date]" && "mtime" in obj && toString.call(obj.mtime) === "[object Date]" && "ino" in obj && typeof obj.ino === "number" && "size" in obj && typeof obj.size === "number";
	}
	/**
	* Generate a tag for a stat.
	*
	* @param {object} stat
	* @return {string}
	* @private
	*/
	function stattag(stat) {
		var mtime = stat.mtime.getTime().toString(16);
		return "\"" + stat.size.toString(16) + "-" + mtime + "\"";
	}
}));
require_convert_source_map();
createDebugger("vite:sourcemap", { onlyWhenFocused: true });
require_etag();
createDebugger("vite:send", { onlyWhenFocused: true });
require_escape_html();
createDebugger("vite:load");
createDebugger("vite:transform");
createDebugger("vite:cache");
RegExp(/\r?\n|[\r\u2028\u2029]/y.source);
Buffer.from("version https://git-lfs.github.com");
var require_src$1$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const path$2 = __require("path");
	const fs$1 = __require("fs");
	const os$1 = __require("os");
	const url = __require("url");
	const fsReadFileAsync = fs$1.promises.readFile;
	/** @type {(name: string, sync: boolean) => string[]} */
	function getDefaultSearchPlaces(name, sync) {
		return [
			"package.json",
			`.${name}rc.json`,
			`.${name}rc.js`,
			`.${name}rc.cjs`,
			...sync ? [] : [`.${name}rc.mjs`],
			`.config/${name}rc`,
			`.config/${name}rc.json`,
			`.config/${name}rc.js`,
			`.config/${name}rc.cjs`,
			...sync ? [] : [`.config/${name}rc.mjs`],
			`${name}.config.js`,
			`${name}.config.cjs`,
			...sync ? [] : [`${name}.config.mjs`]
		];
	}
	/**
	* @type {(p: string) => string}
	*
	* see #17
	* On *nix, if cwd is not under homedir,
	* the last path will be '', ('/build' -> '')
	* but it should be '/' actually.
	* And on Windows, this will never happen. ('C:\build' -> 'C:')
	*/
	function parentDir(p) {
		return path$2.dirname(p) || path$2.sep;
	}
	/** @type {import('./index').LoaderSync} */
	const jsonLoader = (_, content) => JSON.parse(content);
	const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : __require;
	/** @type {import('./index').LoadersSync} */
	const defaultLoadersSync = Object.freeze({
		".js": requireFunc,
		".json": requireFunc,
		".cjs": requireFunc,
		noExt: jsonLoader
	});
	module.exports.defaultLoadersSync = defaultLoadersSync;
	/** @type {import('./index').Loader} */
	const dynamicImport = async (id) => {
		try {
			return (await import(
				/* webpackIgnore: true */
				url.pathToFileURL(id).href
)).default;
		} catch (e) {
			try {
				return requireFunc(id);
			} catch (requireE) {
				if (requireE.code === "ERR_REQUIRE_ESM" || requireE instanceof SyntaxError && requireE.toString().includes("Cannot use import statement outside a module")) throw e;
				throw requireE;
			}
		}
	};
	/** @type {import('./index').Loaders} */
	const defaultLoaders = Object.freeze({
		".js": dynamicImport,
		".mjs": dynamicImport,
		".cjs": dynamicImport,
		".json": jsonLoader,
		noExt: jsonLoader
	});
	module.exports.defaultLoaders = defaultLoaders;
	/**
	* @param {string} name
	* @param {import('./index').Options | import('./index').OptionsSync} options
	* @param {boolean} sync
	* @returns {Required<import('./index').Options | import('./index').OptionsSync>}
	*/
	function getOptions(name, options, sync) {
		/** @type {Required<import('./index').Options>} */
		const conf = {
			stopDir: os$1.homedir(),
			searchPlaces: getDefaultSearchPlaces(name, sync),
			ignoreEmptySearchPlaces: true,
			cache: true,
			transform: (x) => x,
			packageProp: [name],
			...options,
			loaders: {
				...sync ? defaultLoadersSync : defaultLoaders,
				...options.loaders
			}
		};
		conf.searchPlaces.forEach((place) => {
			const key = path$2.extname(place) || "noExt";
			const loader = conf.loaders[key];
			if (!loader) throw new Error(`Missing loader for extension "${place}"`);
			if (typeof loader !== "function") throw new Error(`Loader for extension "${place}" is not a function: Received ${typeof loader}.`);
		});
		return conf;
	}
	/** @type {(props: string | string[], obj: Record<string, any>) => unknown} */
	function getPackageProp(props, obj) {
		if (typeof props === "string" && props in obj) return obj[props];
		return (Array.isArray(props) ? props : props.split(".")).reduce((acc, prop) => acc === void 0 ? acc : acc[prop], obj) || null;
	}
	/** @param {string} filepath */
	function validateFilePath(filepath) {
		if (!filepath) throw new Error("load must pass a non-empty string");
	}
	/** @type {(loader: import('./index').Loader, ext: string) => void} */
	function validateLoader(loader, ext) {
		if (!loader) throw new Error(`No loader specified for extension "${ext}"`);
		if (typeof loader !== "function") throw new Error("loader is not a function");
	}
	/** @type {(enableCache: boolean) => <T>(c: Map<string, T>, filepath: string, res: T) => T} */
	const makeEmplace = (enableCache) => (c, filepath, res) => {
		if (enableCache) c.set(filepath, res);
		return res;
	};
	/** @type {import('./index').lilconfig} */
	module.exports.lilconfig = function lilconfig(name, options) {
		const { ignoreEmptySearchPlaces, loaders, packageProp, searchPlaces, stopDir, transform, cache } = getOptions(name, options ?? {}, false);
		const searchCache = /* @__PURE__ */ new Map();
		const loadCache = /* @__PURE__ */ new Map();
		const emplace = makeEmplace(cache);
		return {
			async search(searchFrom = processModule.cwd()) {
				/** @type {import('./index').LilconfigResult} */
				const result = {
					config: null,
					filepath: ""
				};
				/** @type {Set<string>} */
				const visited = /* @__PURE__ */ new Set();
				let dir = searchFrom;
				dirLoop: while (true) {
					if (cache) {
						const r = searchCache.get(dir);
						if (r !== void 0) {
							for (const p of visited) searchCache.set(p, r);
							return r;
						}
						visited.add(dir);
					}
					for (const searchPlace of searchPlaces) {
						const filepath = path$2.join(dir, searchPlace);
						try {
							await fs$1.promises.access(filepath);
						} catch {
							continue;
						}
						const content = String(await fsReadFileAsync(filepath));
						const loaderKey = path$2.extname(searchPlace) || "noExt";
						const loader = loaders[loaderKey];
						if (searchPlace === "package.json") {
							const pkg = await loader(filepath, content);
							const maybeConfig = getPackageProp(packageProp, pkg);
							if (maybeConfig != null) {
								result.config = maybeConfig;
								result.filepath = filepath;
								break dirLoop;
							}
							continue;
						}
						const isEmpty = content.trim() === "";
						if (isEmpty && ignoreEmptySearchPlaces) continue;
						if (isEmpty) {
							result.isEmpty = true;
							result.config = void 0;
						} else {
							validateLoader(loader, loaderKey);
							result.config = await loader(filepath, content);
						}
						result.filepath = filepath;
						break dirLoop;
					}
					if (dir === stopDir || dir === parentDir(dir)) break dirLoop;
					dir = parentDir(dir);
				}
				const transformed = result.filepath === "" && result.config === null ? transform(null) : transform(result);
				if (cache) for (const p of visited) searchCache.set(p, transformed);
				return transformed;
			},
			async load(filepath) {
				validateFilePath(filepath);
				const absPath = path$2.resolve(processModule.cwd(), filepath);
				if (cache && loadCache.has(absPath)) return loadCache.get(absPath);
				const { base, ext } = path$2.parse(absPath);
				const loaderKey = ext || "noExt";
				const loader = loaders[loaderKey];
				validateLoader(loader, loaderKey);
				const content = String(await fsReadFileAsync(absPath));
				if (base === "package.json") {
					const pkg = await loader(absPath, content);
					return emplace(loadCache, absPath, transform({
						config: getPackageProp(packageProp, pkg),
						filepath: absPath
					}));
				}
				/** @type {import('./index').LilconfigResult} */
				const result = {
					config: null,
					filepath: absPath
				};
				const isEmpty = content.trim() === "";
				if (isEmpty && ignoreEmptySearchPlaces) return emplace(loadCache, absPath, transform({
					config: void 0,
					filepath: absPath,
					isEmpty: true
				}));
				result.config = isEmpty ? void 0 : await loader(absPath, content);
				return emplace(loadCache, absPath, transform(isEmpty ? {
					...result,
					isEmpty,
					config: void 0
				} : result));
			},
			clearLoadCache() {
				if (cache) loadCache.clear();
			},
			clearSearchCache() {
				if (cache) searchCache.clear();
			},
			clearCaches() {
				if (cache) {
					loadCache.clear();
					searchCache.clear();
				}
			}
		};
	};
	/** @type {import('./index').lilconfigSync} */
	module.exports.lilconfigSync = function lilconfigSync(name, options) {
		const { ignoreEmptySearchPlaces, loaders, packageProp, searchPlaces, stopDir, transform, cache } = getOptions(name, options ?? {}, true);
		const searchCache = /* @__PURE__ */ new Map();
		const loadCache = /* @__PURE__ */ new Map();
		const emplace = makeEmplace(cache);
		return {
			search(searchFrom = processModule.cwd()) {
				/** @type {import('./index').LilconfigResult} */
				const result = {
					config: null,
					filepath: ""
				};
				/** @type {Set<string>} */
				const visited = /* @__PURE__ */ new Set();
				let dir = searchFrom;
				dirLoop: while (true) {
					if (cache) {
						const r = searchCache.get(dir);
						if (r !== void 0) {
							for (const p of visited) searchCache.set(p, r);
							return r;
						}
						visited.add(dir);
					}
					for (const searchPlace of searchPlaces) {
						const filepath = path$2.join(dir, searchPlace);
						try {
							fs$1.accessSync(filepath);
						} catch {
							continue;
						}
						const loaderKey = path$2.extname(searchPlace) || "noExt";
						const loader = loaders[loaderKey];
						const content = String(fs$1.readFileSync(filepath));
						if (searchPlace === "package.json") {
							const pkg = loader(filepath, content);
							const maybeConfig = getPackageProp(packageProp, pkg);
							if (maybeConfig != null) {
								result.config = maybeConfig;
								result.filepath = filepath;
								break dirLoop;
							}
							continue;
						}
						const isEmpty = content.trim() === "";
						if (isEmpty && ignoreEmptySearchPlaces) continue;
						if (isEmpty) {
							result.isEmpty = true;
							result.config = void 0;
						} else {
							validateLoader(loader, loaderKey);
							result.config = loader(filepath, content);
						}
						result.filepath = filepath;
						break dirLoop;
					}
					if (dir === stopDir || dir === parentDir(dir)) break dirLoop;
					dir = parentDir(dir);
				}
				const transformed = result.filepath === "" && result.config === null ? transform(null) : transform(result);
				if (cache) for (const p of visited) searchCache.set(p, transformed);
				return transformed;
			},
			load(filepath) {
				validateFilePath(filepath);
				const absPath = path$2.resolve(processModule.cwd(), filepath);
				if (cache && loadCache.has(absPath)) return loadCache.get(absPath);
				const { base, ext } = path$2.parse(absPath);
				const loaderKey = ext || "noExt";
				const loader = loaders[loaderKey];
				validateLoader(loader, loaderKey);
				const content = String(fs$1.readFileSync(absPath));
				if (base === "package.json") {
					const pkg = loader(absPath, content);
					return transform({
						config: getPackageProp(packageProp, pkg),
						filepath: absPath
					});
				}
				const result = {
					config: null,
					filepath: absPath
				};
				const isEmpty = content.trim() === "";
				if (isEmpty && ignoreEmptySearchPlaces) return emplace(loadCache, absPath, transform({
					filepath: absPath,
					config: void 0,
					isEmpty: true
				}));
				result.config = isEmpty ? void 0 : loader(absPath, content);
				return emplace(loadCache, absPath, transform(isEmpty ? {
					...result,
					isEmpty,
					config: void 0
				} : result));
			},
			clearLoadCache() {
				if (cache) loadCache.clear();
			},
			clearSearchCache() {
				if (cache) searchCache.clear();
			},
			clearCaches() {
				if (cache) {
					loadCache.clear();
					searchCache.clear();
				}
			}
		};
	};
}));
var require_req = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const { createRequire: createRequire$1 } = __require("node:module");
	const { fileURLToPath: fileURLToPath$1, pathToFileURL: pathToFileURL$1 } = __require("node:url");
	const TS_EXT_RE = /\.[mc]?ts$/;
	let tsx;
	let jiti;
	let importError = [];
	/**
	* @param {string} name
	* @param {string} rootFile
	* @returns {Promise<any>}
	*/
	async function req(name, rootFile = fileURLToPath$1(import.meta.url)) {
		let url = createRequire$1(rootFile).resolve(name);
		try {
			return (await import(`${pathToFileURL$1(url)}?t=${Date.now()}`)).default;
		} catch (err) {
			if (!TS_EXT_RE.test(url))
 /* c8 ignore start */
			throw err;
		}
		if (tsx === void 0) try {
			tsx = await import("./tsx.mjs").then((n) => n.t);
		} catch (error) {
			importError.push(error);
		}
		if (tsx) {
			let loaded = tsx.require(name, rootFile);
			return loaded && "__esModule" in loaded ? loaded.default : loaded;
		}
		if (jiti === void 0) try {
			jiti = (await import("./jiti+unenv.mjs").then((n) => n.t)).default;
		} catch (error) {
			importError.push(error);
		}
		if (jiti) return jiti(rootFile, { interopDefault: true })(name);
		throw new Error(`'tsx' or 'jiti' is required for the TypeScript configuration files. Make sure it is installed\nError: ${importError.map((error) => error.message).join("\n")}`);
	}
	module.exports = req;
}));
var require_options = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const req = require_req();
	/**
	* Load Options
	*
	* @private
	* @method options
	*
	* @param  {Object} config  PostCSS Config
	*
	* @return {Promise<Object>} options PostCSS Options
	*/
	async function options(config, file) {
		if (config.parser && typeof config.parser === "string") try {
			config.parser = await req(config.parser, file);
		} catch (err) {
			throw new Error(`Loading PostCSS Parser failed: ${err.message}\n\n(@${file})`);
		}
		if (config.syntax && typeof config.syntax === "string") try {
			config.syntax = await req(config.syntax, file);
		} catch (err) {
			throw new Error(`Loading PostCSS Syntax failed: ${err.message}\n\n(@${file})`);
		}
		if (config.stringifier && typeof config.stringifier === "string") try {
			config.stringifier = await req(config.stringifier, file);
		} catch (err) {
			throw new Error(`Loading PostCSS Stringifier failed: ${err.message}\n\n(@${file})`);
		}
		return config;
	}
	module.exports = options;
}));
var require_plugins = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const req = require_req();
	/**
	* Plugin Loader
	*
	* @private
	* @method load
	*
	* @param  {String} plugin PostCSS Plugin Name
	* @param  {Object} options PostCSS Plugin Options
	*
	* @return {Promise<Function>} PostCSS Plugin
	*/
	async function load(plugin, options, file) {
		try {
			if (options === null || options === void 0 || Object.keys(options).length === 0) return await req(plugin, file);
			else return (await req(plugin, file))(options);
		} catch (err) {
			throw new Error(`Loading PostCSS Plugin failed: ${err.message}\n\n(@${file})`);
		}
	}
	/**
	* Load Plugins
	*
	* @private
	* @method plugins
	*
	* @param {Object} config PostCSS Config Plugins
	*
	* @return {Promise<Array>} plugins PostCSS Plugins
	*/
	async function plugins(config, file) {
		let list = [];
		if (Array.isArray(config.plugins)) list = config.plugins.filter(Boolean);
		else {
			list = Object.entries(config.plugins).filter(([, options]) => {
				return options !== false;
			}).map(([plugin, options]) => {
				return load(plugin, options, file);
			});
			list = await Promise.all(list);
		}
		if (list.length && list.length > 0) list.forEach((plugin, i) => {
			if (plugin.default) plugin = plugin.default;
			if (plugin.postcss === true) plugin = plugin();
			else if (plugin.postcss) plugin = plugin.postcss;
			if (!(typeof plugin === "object" && Array.isArray(plugin.plugins) || typeof plugin === "object" && plugin.postcssPlugin || typeof plugin === "function")) throw new TypeError(`Invalid PostCSS Plugin found at: plugins[${i}]\n\n(@${file})`);
		});
		return list;
	}
	module.exports = plugins;
}));
var require_src$5 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const { resolve: resolve$3 } = __require("node:path");
	const config = require_src$1$1();
	const loadOptions = require_options();
	const loadPlugins = require_plugins();
	const req = require_req();
	const interopRequireDefault = (obj) => obj && obj.__esModule ? obj : { default: obj };
	/**
	* Process the result from cosmiconfig
	*
	* @param  {Object} ctx Config Context
	* @param  {Object} result Cosmiconfig result
	*
	* @return {Promise<Object>} PostCSS Config
	*/
	async function processResult(ctx, result) {
		let file = result.filepath || "";
		let projectConfig = interopRequireDefault(result.config).default || {};
		if (typeof projectConfig === "function") projectConfig = projectConfig(ctx);
		else projectConfig = Object.assign({}, projectConfig, ctx);
		if (!projectConfig.plugins) projectConfig.plugins = [];
		let res = {
			file,
			options: await loadOptions(projectConfig, file),
			plugins: await loadPlugins(projectConfig, file)
		};
		delete projectConfig.plugins;
		return res;
	}
	/**
	* Builds the Config Context
	*
	* @param  {Object} ctx Config Context
	*
	* @return {Object} Config Context
	*/
	function createContext(ctx) {
		/**
		* @type {Object}
		*
		* @prop {String} cwd=process.cwd() Config search start location
		* @prop {String} env=process.env.NODE_ENV Config Enviroment, will be set to `development` by `postcss-load-config` if `process.env.NODE_ENV` is `undefined`
		*/
		ctx = Object.assign({
			cwd: processModule.cwd(),
			env: "production"
		}, ctx);
		if (!ctx.env) processModule.env.NODE_ENV = "development";
		return ctx;
	}
	async function loader(filepath) {
		return req(filepath);
	}
	let yaml;
	async function yamlLoader(_, content) {
		if (!yaml) try {
			yaml = await import("../__vite-optional-peer-dep_yaml_vite.mjs");
		} catch (e) {
			/* c8 ignore start */
			throw new Error(`'yaml' is required for the YAML configuration files. Make sure it is installed\nError: ${e.message}`);
		}
		return yaml.parse(content);
	}
	/** @return {import('lilconfig').Options} */
	const withLoaders = (options = {}) => {
		let moduleName = "postcss";
		return {
			...options,
			loaders: {
				...options.loaders,
				".cjs": loader,
				".cts": loader,
				".js": loader,
				".mjs": loader,
				".mts": loader,
				".ts": loader,
				".yaml": yamlLoader,
				".yml": yamlLoader
			},
			searchPlaces: [
				...options.searchPlaces || [],
				"package.json",
				`.${moduleName}rc`,
				`.${moduleName}rc.json`,
				`.${moduleName}rc.yaml`,
				`.${moduleName}rc.yml`,
				`.${moduleName}rc.ts`,
				`.${moduleName}rc.cts`,
				`.${moduleName}rc.mts`,
				`.${moduleName}rc.js`,
				`.${moduleName}rc.cjs`,
				`.${moduleName}rc.mjs`,
				`${moduleName}.config.ts`,
				`${moduleName}.config.cts`,
				`${moduleName}.config.mts`,
				`${moduleName}.config.js`,
				`${moduleName}.config.cjs`,
				`${moduleName}.config.mjs`
			]
		};
	};
	/**
	* Load Config
	*
	* @method rc
	*
	* @param  {Object} ctx Config Context
	* @param  {String} path Config Path
	* @param  {Object} options Config Options
	*
	* @return {Promise} config PostCSS Config
	*/
	function rc(ctx, path, options) {
		/**
		* @type {Object} The full Config Context
		*/
		ctx = createContext(ctx);
		/**
		* @type {String} `process.cwd()`
		*/
		path = path ? resolve$3(path) : processModule.cwd();
		return config.lilconfig("postcss", withLoaders(options)).search(path).then((result) => {
			if (!result) throw new Error(`No PostCSS Config found in: ${path}`);
			return processResult(ctx, result);
		});
	}
	/**
	* Autoload Config for PostCSS
	*
	* @author Michael Ciniawsky @michael-ciniawsky <michael.ciniawsky@gmail.com>
	* @license MIT
	*
	* @module postcss-load-config
	* @version 2.1.0
	*
	* @requires comsiconfig
	* @requires ./options
	* @requires ./plugins
	*/
	module.exports = rc;
}));
import_picocolors.default.blue, import_picocolors.default.magenta, import_picocolors.default.green, import_picocolors.default.gray;
require_src$5();
new TextDecoder();
var cssConfigDefaults = Object.freeze({
	/** @experimental */
	transformer: "postcss",
	preprocessorMaxWorkers: true,
	/** @experimental */
	devSourcemap: false
});
new RegExp(`\\.module${CSS_LANGS_RE.source}`);
var functionCallRE = /^[A-Z_][.\w-]*\(/i;
var nonEscapedDoubleQuoteRe = /(?<!\\)"/g;
var cssUrlRE = /(?<!@import\s+)(?<=^|[^\w\-\u0080-\uffff])url\((\s*('[^']+'|"[^"]+")\s*|(?:\\.|[^'")\\])+)\)/;
var cssImageSetRE = /(?<=image-set\()((?:[\w-]{1,256}\([^)]*\)|[^)])*)(?=\))/;
var UrlRewritePostcssPlugin = (opts) => {
	if (!opts) throw new Error("base or replace is required");
	return {
		postcssPlugin: "vite-url-rewrite",
		OnceExit(root) {
			const promises = [];
			root.walkDecls((declaration) => {
				const importer = declaration.source?.input.file;
				if (!importer) opts.logger.warnOnce("\nA PostCSS plugin did not pass the `from` option to `postcss.parse`. This may cause imported assets to be incorrectly transformed. If you've recently added a PostCSS plugin that raised this warning, please contact the package author to fix the issue.");
				const isCssUrl = cssUrlRE.test(declaration.value);
				const isCssImageSet = cssImageSetRE.test(declaration.value);
				if (isCssUrl || isCssImageSet) {
					const replacerForDeclaration = async (rawUrl) => {
						const [newUrl, resolvedId] = await opts.resolver(rawUrl, importer);
						if (resolvedId) opts.deps.add(resolvedId);
						return newUrl;
					};
					if (isCssUrl && isCssImageSet) promises.push(rewriteCssUrls(declaration.value, replacerForDeclaration).then((url) => rewriteCssImageSet(url, replacerForDeclaration)).then((url) => {
						declaration.value = url;
					}));
					else promises.push((isCssImageSet ? rewriteCssImageSet : rewriteCssUrls)(declaration.value, replacerForDeclaration).then((url) => {
						declaration.value = url;
					}));
				}
			});
			if (promises.length) return Promise.all(promises);
		}
	};
};
UrlRewritePostcssPlugin.postcss = true;
function rewriteCssUrls(css, replacer) {
	return asyncReplace(css, cssUrlRE, async (match) => {
		const [matched, rawUrl] = match;
		return await doUrlReplace(rawUrl.trim(), matched, replacer);
	});
}
var cssNotProcessedRE = /(?:gradient|element|cross-fade|image)\(/;
async function rewriteCssImageSet(css, replacer) {
	return await asyncReplace(css, cssImageSetRE, async (match) => {
		const [, rawUrl] = match;
		return await processSrcSet(rawUrl, async ({ url }) => {
			if (cssUrlRE.test(url)) return await rewriteCssUrls(url, replacer);
			if (!cssNotProcessedRE.test(url)) return await doUrlReplace(url, url, replacer);
			return url;
		});
	});
}
function skipUrlReplacer(unquotedUrl) {
	return isExternalUrl(unquotedUrl) || isDataUrl(unquotedUrl) || unquotedUrl[0] === "#" || functionCallRE.test(unquotedUrl) || unquotedUrl.startsWith("__VITE_ASSET__") || unquotedUrl.startsWith("__VITE_PUBLIC_ASSET__");
}
async function doUrlReplace(rawUrl, matched, replacer, funcName = "url") {
	let wrap = "";
	const first = rawUrl[0];
	let unquotedUrl = rawUrl;
	if (first === `"` || first === `'`) {
		wrap = first;
		unquotedUrl = rawUrl.slice(1, -1);
	}
	if (skipUrlReplacer(unquotedUrl)) return matched;
	unquotedUrl = unquotedUrl.replace(/\\(\W)/g, "$1");
	let newUrl = await replacer(unquotedUrl, rawUrl);
	if (newUrl === false) return matched;
	if (wrap === "" && (newUrl !== encodeURI(newUrl) || newUrl.includes(")"))) wrap = "\"";
	if (wrap === "'" && newUrl.includes("'")) wrap = "\"";
	if (wrap === "\"" && newUrl.includes("\"")) newUrl = newUrl.replace(nonEscapedDoubleQuoteRe, "\\\"");
	return `${funcName}(${wrap}${newUrl}${wrap})`;
}
new RegExp([/[ \t]*<script[^>]*type\s*=\s*(?:"module"|'module'|module)[^>]*>/i, /[ \t]*<link[^>]*rel\s*=\s*(?:"modulepreload"|'modulepreload'|modulepreload)[\s\S]*?>/i].map((r) => r.source).join("|"), "i");
createDebugger("vite:cache");
normalizePath(CLIENT_ENTRY);
normalizePath(BUNDLED_DEV_CLIENT_ENTRY);
normalizePath(ENV_ENTRY);
createDebugger("vite:time");
Object.freeze({});
require_connect();
require_lib$1();
require_chokidar();
require_launch_editor_middleware();
require_dist$1();
var serverConfigDefaults = Object.freeze({
	port: DEFAULT_DEV_PORT,
	strictPort: false,
	host: "localhost",
	allowedHosts: [],
	https: void 0,
	open: false,
	proxy: void 0,
	cors: { origin: defaultAllowedOrigins },
	headers: {},
	warmup: {
		clientFiles: [],
		ssrFiles: []
	},
	middlewareMode: false,
	fs: {
		strict: true,
		deny: [
			".env",
			".env.*",
			"*.{crt,pem,key,p12,pfx,cer,der}",
			".npmrc",
			".yarnrc.yml",
			"**/.git/**"
		]
	},
	preTransformRequests: true,
	perEnvironmentStartEndDuringDev: false,
	perEnvironmentWatchChangeDuringDev: false,
	forwardConsole: void 0
});
createDebugger("vite:hmr");
normalizePath(CLIENT_DIR);
createDebugger("vite:external");
createDebugger("vite:import-analysis");
normalizePath(CLIENT_DIR);
var interopHelper = (m, n) => n || !m?.__esModule ? {
	...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {},
	default: m
} : m;
interopHelper.toString().replaceAll("\n", "");
var wasmCompileOptions = {
	builtins: ["js-string"],
	importedStringConstants: "wasm:js/string-constants"
};
[...wasmCompileOptions.builtins.map((name) => `wasm:${name}`), wasmCompileOptions.importedStringConstants];
var wasmHelper = async (opts = {}, url) => {
	let result;
	if (url.startsWith("data:")) {
		const urlContent = url.replace(/^data:.*?base64,/, "");
		let bytes;
		if (typeof Buffer === "function" && typeof Buffer.from === "function") bytes = Buffer.from(urlContent, "base64");
		else if (typeof atob === "function") {
			const binaryString = atob(urlContent);
			bytes = new Uint8Array(binaryString.length);
			for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
		} else throw new Error("Failed to decode base64-encoded data URL, Buffer and atob are not supported");
		result = await WebAssembly.instantiate(bytes, opts, wasmCompileOptions);
	} else result = await instantiateFromUrl(url, opts);
	return result.instance;
};
wasmHelper.toString();
var instantiateFromUrl = async (url, opts) => {
	const response = await fetch(url);
	const contentType = response.headers.get("Content-Type") || "";
	if ("instantiateStreaming" in WebAssembly && contentType.startsWith("application/wasm")) return WebAssembly.instantiateStreaming(response, opts, wasmCompileOptions);
	else {
		const buffer = await response.arrayBuffer();
		return WebAssembly.instantiate(buffer, opts, wasmCompileOptions);
	}
};
instantiateFromUrl.toString();
var instantiateFromFile = async (fileUrlString, opts) => {
	const { readFile } = await import("node:fs/promises");
	const buffer = await readFile(new URL(
		fileUrlString,
		/** #__KEEP__ */
		import.meta.url
	));
	return WebAssembly.instantiate(buffer, opts, wasmCompileOptions);
};
instantiateFromFile.toString();
new RegExp(`__VITE_PRELOAD__`, "g");
var { basename: basename$1, dirname: dirname$1, relative: relative$1 } = posix;
",".charCodeAt(0);
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var intToChar = /* @__PURE__ */ new Uint8Array(64);
var charToInt = /* @__PURE__ */ new Uint8Array(128);
for (let i = 0; i < chars.length; i++) {
	const c = chars.charCodeAt(i);
	intToChar[i] = c;
	charToInt[c] = i;
}
var NOW_LENGTH = Date.now().toString().length;
new RegExp(`vitest=\\d{${NOW_LENGTH}}`);
Object.freeze({});
processModule.env.DEBUG_VITE_SOURCEMAP_COMBINE_FILTER;
createDebugger("vite:sourcemap-combine", { onlyWhenFocused: true });
createDebugger("vite:resolve");
createDebugger("vite:plugin-resolve", { onlyWhenFocused: "vite:plugin" });
createDebugger("vite:plugin-transform", { onlyWhenFocused: "vite:plugin" });
createDebugger("vite:plugin-container-context");
fsp.appendFile, fsp.copyFile, fsp.mkdir, fsp.mkdtemp, fsp.readdir, fsp.readFile, fsp.realpath, fsp.rename, fsp.rmdir, fsp.stat, fsp.lstat, fsp.unlink, fsp.writeFile;
createDebugger("vite:deps");
[...KNOWN_ASSET_TYPES];
createDebugger("vite:deps");
[
	{
		path: "node_modules/.pnpm/lock.yaml",
		checkPatchesDir: false,
		manager: "pnpm"
	},
	{
		path: "node_modules/.package-lock.json",
		checkPatchesDir: "patches",
		manager: "npm"
	},
	{
		path: "node_modules/.yarn-state.yml",
		checkPatchesDir: false,
		manager: "yarn"
	},
	{
		path: "bun.lock",
		checkPatchesDir: "patches",
		manager: "bun"
	},
	{
		path: ".rush/temp/shrinkwrap-deps.json",
		checkPatchesDir: false,
		manager: "pnpm"
	},
	{
		path: "aube-lock.yaml",
		checkPatchesDir: false,
		manager: "aube"
	},
	{
		path: "nub.lock",
		checkPatchesDir: "patches",
		manager: "nub"
	},
	{
		path: ".pnp.cjs",
		checkPatchesDir: ".yarn/patches",
		manager: "yarn"
	},
	{
		path: ".pnp.js",
		checkPatchesDir: ".yarn/patches",
		manager: "yarn"
	},
	{
		path: "node_modules/.yarn-integrity",
		checkPatchesDir: "patches",
		manager: "yarn"
	},
	{
		path: "bun.lockb",
		checkPatchesDir: "patches",
		manager: "bun"
	}
].sort((_, { manager }) => {
	return processModule.env.npm_config_user_agent?.startsWith(manager) ? 1 : -1;
}).map((l) => l.path);
var GRACEFUL_RENAME_TIMEOUT = 5e3;
promisify(function gracefulRename(from, to, cb) {
	const start = Date.now();
	let backoff = 0;
	fs.rename(from, to, function CB(er) {
		if (er && (er.code === "EACCES" || er.code === "EPERM") && Date.now() - start < GRACEFUL_RENAME_TIMEOUT) {
			setTimeout(function() {
				fs.stat(to, function(stater, _st) {
					if (stater && stater.code === "ENOENT") fs.rename(from, to, CB);
					else CB(er);
				});
			}, backoff);
			if (backoff < 100) backoff += 10;
			return;
		}
		cb(er);
	});
});
normalizePath(CLIENT_ENTRY);
normalizePath(ENV_ENTRY);
createDebugger("vite:resolve-details", { onlyWhenFocused: true });
Object.freeze({ fileName: ".vite/license.md" });
var buildEnvironmentOptionsDefaults = Object.freeze({
	target: "baseline-widely-available",
	/** @deprecated */
	polyfillModulePreload: true,
	modulePreload: true,
	outDir: "dist",
	assetsDir: "assets",
	assetsInlineLimit: DEFAULT_ASSETS_INLINE_LIMIT,
	sourcemap: false,
	terserOptions: {},
	chunkImportMap: false,
	rolldownOptions: {},
	commonjsOptions: {
		include: [/node_modules/],
		extensions: [".js", ".cjs"]
	},
	dynamicImportVarsOptions: { exclude: [/node_modules/] },
	write: true,
	emptyOutDir: null,
	copyPublicDir: true,
	license: false,
	manifest: false,
	lib: false,
	ssrManifest: false,
	ssrEmitAssets: false,
	reportCompressedSize: true,
	chunkSizeWarningLimit: 500,
	watch: null
});
var builderOptionsDefaults = Object.freeze({
	sharedConfigBuild: false,
	sharedPlugins: false
});
new RegExp(`//# ${SOURCEMAPPING_URL}=data:application/json[^,]+base64,([A-Za-z0-9+/=]+)$`, "gm");
createDebugger("vite:deps");
createDebugger("vite:full-bundle-mode");
var ssrConfigDefaults = Object.freeze({
	target: "node",
	optimizeDeps: {}
});
createDebugger("vite:config", { depth: 10 });
promisify(fs.realpath);
Object.freeze({
	define: {},
	dev: {
		warmup: [],
		/** @experimental */
		sourcemap: { js: true },
		sourcemapIgnoreList: void 0
	},
	build: buildEnvironmentOptionsDefaults,
	resolve: {
		externalConditions: [...DEFAULT_EXTERNAL_CONDITIONS],
		extensions: DEFAULT_EXTENSIONS,
		dedupe: [],
		/** @experimental */
		noExternal: [],
		external: [],
		preserveSymlinks: false,
		tsconfigPaths: false,
		alias: []
	},
	base: "/",
	publicDir: "public",
	plugins: [],
	html: { cspNonce: void 0 },
	css: cssConfigDefaults,
	json: {
		namedExports: true,
		stringify: "auto"
	},
	assetsInclude: void 0,
	/** @experimental */
	builder: builderOptionsDefaults,
	server: serverConfigDefaults,
	preview: { port: DEFAULT_PREVIEW_PORT },
	/** @experimental */
	experimental: {
		importGlobRestoreExtension: false,
		renderBuiltUrl: void 0,
		hmrPartialAccept: false,
		bundledDev: false
	},
	future: {
		removePluginHookHandleHotUpdate: void 0,
		removePluginHookSsrArgument: void 0,
		removeServerModuleGraph: void 0,
		removeServerHot: void 0,
		removeServerTransformRequest: void 0,
		removeServerWarmupRequest: void 0,
		removeSsrLoadModule: void 0
	},
	legacy: { skipWebSocketTokenCheck: false },
	logLevel: "info",
	customLogger: void 0,
	clearScreen: true,
	envDir: void 0,
	envPrefix: "VITE_",
	worker: {
		format: "iife",
		plugins: () => []
	},
	optimizeDeps: {
		include: [],
		exclude: [],
		needsInterop: [],
		rolldownOptions: {},
		/** @experimental */
		extensions: [],
		/** @deprecated @experimental */
		disabled: "build",
		/** @experimental */
		holdUntilCrawlEnd: true,
		/** @experimental */
		force: false,
		/** @experimental */
		ignoreOutdatedRequests: false
	},
	ssr: ssrConfigDefaults,
	environments: {},
	appType: "spa"
});
path.posix.join(FS_PREFIX, normalizePath(ENV_ENTRY)), path.posix.join(FS_PREFIX, normalizePath(CLIENT_ENTRY));
createRequire(
	/** #__KEEP__ */
	import.meta.url
);
//#endregion
//#region node_modules/vite/dist/node/chunks/lib.js
var require_parse = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var openParentheses = "(".charCodeAt(0);
	var closeParentheses = ")".charCodeAt(0);
	var singleQuote = "'".charCodeAt(0);
	var doubleQuote = "\"".charCodeAt(0);
	var backslash = "\\".charCodeAt(0);
	var slash = "/".charCodeAt(0);
	var comma = ",".charCodeAt(0);
	var colon = ":".charCodeAt(0);
	var star = "*".charCodeAt(0);
	var uLower = "u".charCodeAt(0);
	var uUpper = "U".charCodeAt(0);
	var plus = "+".charCodeAt(0);
	var isUnicodeRange = /^[a-f0-9?-]+$/i;
	module.exports = function(input) {
		var tokens = [];
		var value = input;
		var next, quote, prev, token, escape, escapePos, whitespacePos, parenthesesOpenPos;
		var pos = 0;
		var code = value.charCodeAt(pos);
		var max = value.length;
		var stack = [{ nodes: tokens }];
		var balanced = 0;
		var parent;
		var name = "";
		var before = "";
		var after = "";
		while (pos < max) if (code <= 32) {
			next = pos;
			do {
				next += 1;
				code = value.charCodeAt(next);
			} while (code <= 32);
			token = value.slice(pos, next);
			prev = tokens[tokens.length - 1];
			if (code === closeParentheses && balanced) after = token;
			else if (prev && prev.type === "div") {
				prev.after = token;
				prev.sourceEndIndex += token.length;
			} else if (code === comma || code === colon || code === slash && value.charCodeAt(next + 1) !== star && (!parent || parent && parent.type === "function" && parent.value !== "calc")) before = token;
			else tokens.push({
				type: "space",
				sourceIndex: pos,
				sourceEndIndex: next,
				value: token
			});
			pos = next;
		} else if (code === singleQuote || code === doubleQuote) {
			next = pos;
			quote = code === singleQuote ? "'" : "\"";
			token = {
				type: "string",
				sourceIndex: pos,
				quote
			};
			do {
				escape = false;
				next = value.indexOf(quote, next + 1);
				if (~next) {
					escapePos = next;
					while (value.charCodeAt(escapePos - 1) === backslash) {
						escapePos -= 1;
						escape = !escape;
					}
				} else {
					value += quote;
					next = value.length - 1;
					token.unclosed = true;
				}
			} while (escape);
			token.value = value.slice(pos + 1, next);
			token.sourceEndIndex = token.unclosed ? next : next + 1;
			tokens.push(token);
			pos = next + 1;
			code = value.charCodeAt(pos);
		} else if (code === slash && value.charCodeAt(pos + 1) === star) {
			next = value.indexOf("*/", pos);
			token = {
				type: "comment",
				sourceIndex: pos,
				sourceEndIndex: next + 2
			};
			if (next === -1) {
				token.unclosed = true;
				next = value.length;
				token.sourceEndIndex = next;
			}
			token.value = value.slice(pos + 2, next);
			tokens.push(token);
			pos = next + 2;
			code = value.charCodeAt(pos);
		} else if ((code === slash || code === star) && parent && parent.type === "function" && parent.value === "calc") {
			token = value[pos];
			tokens.push({
				type: "word",
				sourceIndex: pos - before.length,
				sourceEndIndex: pos + token.length,
				value: token
			});
			pos += 1;
			code = value.charCodeAt(pos);
		} else if (code === slash || code === comma || code === colon) {
			token = value[pos];
			tokens.push({
				type: "div",
				sourceIndex: pos - before.length,
				sourceEndIndex: pos + token.length,
				value: token,
				before,
				after: ""
			});
			before = "";
			pos += 1;
			code = value.charCodeAt(pos);
		} else if (openParentheses === code) {
			next = pos;
			do {
				next += 1;
				code = value.charCodeAt(next);
			} while (code <= 32);
			parenthesesOpenPos = pos;
			token = {
				type: "function",
				sourceIndex: pos - name.length,
				value: name,
				before: value.slice(parenthesesOpenPos + 1, next)
			};
			pos = next;
			if (name === "url" && code !== singleQuote && code !== doubleQuote) {
				next -= 1;
				do {
					escape = false;
					next = value.indexOf(")", next + 1);
					if (~next) {
						escapePos = next;
						while (value.charCodeAt(escapePos - 1) === backslash) {
							escapePos -= 1;
							escape = !escape;
						}
					} else {
						value += ")";
						next = value.length - 1;
						token.unclosed = true;
					}
				} while (escape);
				whitespacePos = next;
				do {
					whitespacePos -= 1;
					code = value.charCodeAt(whitespacePos);
				} while (code <= 32);
				if (parenthesesOpenPos < whitespacePos) {
					if (pos !== whitespacePos + 1) token.nodes = [{
						type: "word",
						sourceIndex: pos,
						sourceEndIndex: whitespacePos + 1,
						value: value.slice(pos, whitespacePos + 1)
					}];
					else token.nodes = [];
					if (token.unclosed && whitespacePos + 1 !== next) {
						token.after = "";
						token.nodes.push({
							type: "space",
							sourceIndex: whitespacePos + 1,
							sourceEndIndex: next,
							value: value.slice(whitespacePos + 1, next)
						});
					} else {
						token.after = value.slice(whitespacePos + 1, next);
						token.sourceEndIndex = next;
					}
				} else {
					token.after = "";
					token.nodes = [];
				}
				pos = next + 1;
				token.sourceEndIndex = token.unclosed ? next : pos;
				code = value.charCodeAt(pos);
				tokens.push(token);
			} else {
				balanced += 1;
				token.after = "";
				token.sourceEndIndex = pos + 1;
				tokens.push(token);
				stack.push(token);
				tokens = token.nodes = [];
				parent = token;
			}
			name = "";
		} else if (closeParentheses === code && balanced) {
			pos += 1;
			code = value.charCodeAt(pos);
			parent.after = after;
			parent.sourceEndIndex += after.length;
			after = "";
			balanced -= 1;
			stack[stack.length - 1].sourceEndIndex = pos;
			stack.pop();
			parent = stack[balanced];
			tokens = parent.nodes;
		} else {
			next = pos;
			do {
				if (code === backslash) next += 1;
				next += 1;
				code = value.charCodeAt(next);
			} while (next < max && !(code <= 32 || code === singleQuote || code === doubleQuote || code === comma || code === colon || code === slash || code === openParentheses || code === star && parent && parent.type === "function" && parent.value === "calc" || code === slash && parent.type === "function" && parent.value === "calc" || code === closeParentheses && balanced));
			token = value.slice(pos, next);
			if (openParentheses === code) name = token;
			else if ((uLower === token.charCodeAt(0) || uUpper === token.charCodeAt(0)) && plus === token.charCodeAt(1) && isUnicodeRange.test(token.slice(2))) tokens.push({
				type: "unicode-range",
				sourceIndex: pos,
				sourceEndIndex: next,
				value: token
			});
			else tokens.push({
				type: "word",
				sourceIndex: pos,
				sourceEndIndex: next,
				value: token
			});
			pos = next;
		}
		for (pos = stack.length - 1; pos; pos -= 1) {
			stack[pos].unclosed = true;
			stack[pos].sourceEndIndex = value.length;
		}
		return stack[0].nodes;
	};
}));
var require_walk = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function walk(nodes, cb, bubble) {
		var i, max, node, result;
		for (i = 0, max = nodes.length; i < max; i += 1) {
			node = nodes[i];
			if (!bubble) result = cb(node, i, nodes);
			if (result !== false && node.type === "function" && Array.isArray(node.nodes)) walk(node.nodes, cb, bubble);
			if (bubble) cb(node, i, nodes);
		}
	};
}));
var require_stringify = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function stringifyNode(node, custom) {
		var type = node.type;
		var value = node.value;
		var buf;
		var customResult;
		if (custom && (customResult = custom(node)) !== void 0) return customResult;
		else if (type === "word" || type === "space") return value;
		else if (type === "string") {
			buf = node.quote || "";
			return buf + value + (node.unclosed ? "" : buf);
		} else if (type === "comment") return "/*" + value + (node.unclosed ? "" : "*/");
		else if (type === "div") return (node.before || "") + value + (node.after || "");
		else if (Array.isArray(node.nodes)) {
			buf = stringify(node.nodes, custom);
			if (type !== "function") return buf;
			return value + "(" + (node.before || "") + buf + (node.after || "") + (node.unclosed ? "" : ")");
		}
		return value;
	}
	function stringify(nodes, custom) {
		var result, i;
		if (Array.isArray(nodes)) {
			result = "";
			for (i = nodes.length - 1; ~i; i -= 1) result = stringifyNode(nodes[i], custom) + result;
			return result;
		}
		return stringifyNode(nodes, custom);
	}
	module.exports = stringify;
}));
var require_unit = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var minus = "-".charCodeAt(0);
	var plus = "+".charCodeAt(0);
	var dot = ".".charCodeAt(0);
	var exp = "e".charCodeAt(0);
	var EXP = "E".charCodeAt(0);
	function likeNumber(value) {
		var code = value.charCodeAt(0);
		var nextCode;
		if (code === plus || code === minus) {
			nextCode = value.charCodeAt(1);
			if (nextCode >= 48 && nextCode <= 57) return true;
			var nextNextCode = value.charCodeAt(2);
			if (nextCode === dot && nextNextCode >= 48 && nextNextCode <= 57) return true;
			return false;
		}
		if (code === dot) {
			nextCode = value.charCodeAt(1);
			if (nextCode >= 48 && nextCode <= 57) return true;
			return false;
		}
		if (code >= 48 && code <= 57) return true;
		return false;
	}
	module.exports = function(value) {
		var pos = 0;
		var length = value.length;
		var code;
		var nextCode;
		var nextNextCode;
		if (length === 0 || !likeNumber(value)) return false;
		code = value.charCodeAt(pos);
		if (code === plus || code === minus) pos++;
		while (pos < length) {
			code = value.charCodeAt(pos);
			if (code < 48 || code > 57) break;
			pos += 1;
		}
		code = value.charCodeAt(pos);
		nextCode = value.charCodeAt(pos + 1);
		if (code === dot && nextCode >= 48 && nextCode <= 57) {
			pos += 2;
			while (pos < length) {
				code = value.charCodeAt(pos);
				if (code < 48 || code > 57) break;
				pos += 1;
			}
		}
		code = value.charCodeAt(pos);
		nextCode = value.charCodeAt(pos + 1);
		nextNextCode = value.charCodeAt(pos + 2);
		if ((code === exp || code === EXP) && (nextCode >= 48 && nextCode <= 57 || (nextCode === plus || nextCode === minus) && nextNextCode >= 48 && nextNextCode <= 57)) {
			pos += nextCode === plus || nextCode === minus ? 3 : 2;
			while (pos < length) {
				code = value.charCodeAt(pos);
				if (code < 48 || code > 57) break;
				pos += 1;
			}
		}
		return {
			number: value.slice(0, pos),
			unit: value.slice(pos)
		};
	};
}));
var require_lib = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var parse = require_parse();
	var walk = require_walk();
	var stringify = require_stringify();
	function ValueParser(value) {
		if (this instanceof ValueParser) {
			this.nodes = parse(value);
			return this;
		}
		return new ValueParser(value);
	}
	ValueParser.prototype.toString = function() {
		return Array.isArray(this.nodes) ? stringify(this.nodes) : "";
	};
	ValueParser.prototype.walk = function(cb, bubble) {
		walk(this.nodes, cb, bubble);
		return this;
	};
	ValueParser.unit = require_unit();
	ValueParser.walk = walk;
	ValueParser.stringify = stringify;
	module.exports = ValueParser;
}));
init_globalthis();
var require_fs = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	function _export(target, all) {
		for (var name in all) Object.defineProperty(target, name, {
			enumerable: true,
			get: Object.getOwnPropertyDescriptor(all, name).get
		});
	}
	_export(exports, {
		get getFileSystem() {
			return getFileSystem;
		},
		get setFileSystem() {
			return setFileSystem;
		}
	});
	let fileSystem = {
		readFile: () => {
			throw Error("readFile not implemented");
		},
		writeFile: () => {
			throw Error("writeFile not implemented");
		}
	};
	function setFileSystem(fs) {
		fileSystem.readFile = fs.readFile;
		fileSystem.writeFile = fs.writeFile;
	}
	function getFileSystem() {
		return fileSystem;
	}
}));
var require_unquote = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	Object.defineProperty(exports, "default", {
		enumerable: true,
		get: function() {
			return unquote;
		}
	});
	const reg = /['"]/;
	function unquote(str) {
		if (!str) return "";
		if (reg.test(str.charAt(0))) str = str.substr(1);
		if (reg.test(str.charAt(str.length - 1))) str = str.substr(0, str.length - 1);
		return str;
	}
}));
var require_replaceValueSymbols = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const matchValueName = /[$]?[\w-]+/g;
	const replaceValueSymbols = (value, replacements) => {
		let matches;
		while (matches = matchValueName.exec(value)) {
			const replacement = replacements[matches[0]];
			if (replacement) {
				value = value.slice(0, matches.index) + replacement + value.slice(matchValueName.lastIndex);
				matchValueName.lastIndex -= matches[0].length - replacement.length;
			}
		}
		return value;
	};
	module.exports = replaceValueSymbols;
}));
var require_replaceSymbols = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const replaceValueSymbols = require_replaceValueSymbols();
	const replaceSymbols = (css, replacements) => {
		css.walk((node) => {
			if (node.type === "decl" && node.value) node.value = replaceValueSymbols(node.value.toString(), replacements);
			else if (node.type === "rule" && node.selector) node.selector = replaceValueSymbols(node.selector.toString(), replacements);
			else if (node.type === "atrule" && node.params) node.params = replaceValueSymbols(node.params.toString(), replacements);
		});
	};
	module.exports = replaceSymbols;
}));
var require_extractICSS = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const importPattern = /^:import\(("[^"]*"|'[^']*'|[^"']+)\)$/;
	const balancedQuotes = /^("[^"]*"|'[^']*'|[^"']+)$/;
	const getDeclsObject = (rule) => {
		const object = {};
		rule.walkDecls((decl) => {
			const before = decl.raws.before ? decl.raws.before.trim() : "";
			object[before + decl.prop] = decl.value;
		});
		return object;
	};
	/**
	*
	* @param {string} css
	* @param {boolean} removeRules
	* @param {'auto' | 'rule' | 'at-rule'} mode
	*/
	const extractICSS = (css, removeRules = true, mode = "auto") => {
		const icssImports = {};
		const icssExports = {};
		function addImports(node, path) {
			const unquoted = path.replace(/'|"/g, "");
			icssImports[unquoted] = Object.assign(icssImports[unquoted] || {}, getDeclsObject(node));
			if (removeRules) node.remove();
		}
		function addExports(node) {
			Object.assign(icssExports, getDeclsObject(node));
			if (removeRules) node.remove();
		}
		css.each((node) => {
			if (node.type === "rule" && mode !== "at-rule") {
				if (node.selector.slice(0, 7) === ":import") {
					const matches = importPattern.exec(node.selector);
					if (matches) addImports(node, matches[1]);
				}
				if (node.selector === ":export") addExports(node);
			}
			if (node.type === "atrule" && mode !== "rule") {
				if (node.name === "icss-import") {
					const matches = balancedQuotes.exec(node.params);
					if (matches) addImports(node, matches[1]);
				}
				if (node.name === "icss-export") addExports(node);
			}
		});
		return {
			icssImports,
			icssExports
		};
	};
	module.exports = extractICSS;
}));
var require_createICSSRules = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const createImports = (imports, postcss, mode = "rule") => {
		return Object.keys(imports).map((path) => {
			const aliases = imports[path];
			const declarations = Object.keys(aliases).map((key) => postcss.decl({
				prop: key,
				value: aliases[key],
				raws: { before: "\n  " }
			}));
			const hasDeclarations = declarations.length > 0;
			const rule = mode === "rule" ? postcss.rule({
				selector: `:import('${path}')`,
				raws: { after: hasDeclarations ? "\n" : "" }
			}) : postcss.atRule({
				name: "icss-import",
				params: `'${path}'`,
				raws: { after: hasDeclarations ? "\n" : "" }
			});
			if (hasDeclarations) rule.append(declarations);
			return rule;
		});
	};
	const createExports = (exports$6, postcss, mode = "rule") => {
		const declarations = Object.keys(exports$6).map((key) => postcss.decl({
			prop: key,
			value: exports$6[key],
			raws: { before: "\n  " }
		}));
		if (declarations.length === 0) return [];
		const rule = mode === "rule" ? postcss.rule({
			selector: `:export`,
			raws: { after: "\n" }
		}) : postcss.atRule({
			name: "icss-export",
			raws: { after: "\n" }
		});
		rule.append(declarations);
		return [rule];
	};
	const createICSSRules = (imports, exports$7, postcss, mode) => [...createImports(imports, postcss, mode), ...createExports(exports$7, postcss, mode)];
	module.exports = createICSSRules;
}));
var require_src$4 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		replaceValueSymbols: require_replaceValueSymbols(),
		replaceSymbols: require_replaceSymbols(),
		extractICSS: require_extractICSS(),
		createICSSRules: require_createICSSRules()
	};
}));
var require_Parser = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	Object.defineProperty(exports, "default", {
		enumerable: true,
		get: function() {
			return Parser;
		}
	});
	const _icssutils = require_src$4();
	const importRegexp = /^:import\((.+)\)$/;
	var Parser = class {
		constructor(pathFetcher, trace) {
			this.pathFetcher = pathFetcher;
			this.plugin = this.plugin.bind(this);
			this.exportTokens = {};
			this.translations = {};
			this.trace = trace;
		}
		plugin() {
			const parser = this;
			return {
				postcssPlugin: "css-modules-parser",
				async OnceExit(css) {
					await Promise.all(parser.fetchAllImports(css));
					parser.linkImportedSymbols(css);
					return parser.extractExports(css);
				}
			};
		}
		fetchAllImports(css) {
			let imports = [];
			css.each((node) => {
				if (node.type == "rule" && node.selector.match(importRegexp)) imports.push(this.fetchImport(node, css.source.input.from, imports.length));
			});
			return imports;
		}
		linkImportedSymbols(css) {
			(0, _icssutils.replaceSymbols)(css, this.translations);
		}
		extractExports(css) {
			css.each((node) => {
				if (node.type == "rule" && node.selector == ":export") this.handleExport(node);
			});
		}
		handleExport(exportNode) {
			exportNode.each((decl) => {
				if (decl.type == "decl") {
					Object.keys(this.translations).forEach((translation) => {
						decl.value = decl.value.replace(translation, this.translations[translation]);
					});
					this.exportTokens[decl.prop] = decl.value;
				}
			});
			exportNode.remove();
		}
		async fetchImport(importNode, relativeTo, depNr) {
			const file = importNode.selector.match(importRegexp)[1];
			const depTrace = this.trace + String.fromCharCode(depNr);
			const exports1 = await this.pathFetcher(file, relativeTo, depTrace);
			try {
				importNode.each((decl) => {
					if (decl.type == "decl") this.translations[decl.prop] = exports1[decl.value];
				});
				importNode.remove();
			} catch (err) {
				console.log(err);
			}
		}
	};
}));
var require_saveJSON = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	Object.defineProperty(exports, "default", {
		enumerable: true,
		get: function() {
			return saveJSON;
		}
	});
	const _fs = require_fs();
	function saveJSON(cssFile, json) {
		return new Promise((resolve, reject) => {
			const { writeFile } = (0, _fs.getFileSystem)();
			writeFile(`${cssFile}.json`, JSON.stringify(json), (e) => e ? reject(e) : resolve(json));
		});
	}
}));
var require_lodash_camelcase = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** `Object#toString` result references. */
	var symbolTag = "[object Symbol]";
	/** Used to match words composed of alphanumeric characters. */
	var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
	/** Used to match Latin Unicode letters (excluding mathematical operators). */
	var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
	/** Used to compose unicode character classes. */
	var rsAstralRange = "\\ud800-\\udfff";
	var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
	var rsComboSymbolsRange = "\\u20d0-\\u20f0";
	var rsDingbatRange = "\\u2700-\\u27bf";
	var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
	var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
	var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
	var rsPunctuationRange = "\\u2000-\\u206f";
	var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
	var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
	var rsVarRange = "\\ufe0e\\ufe0f";
	var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
	/** Used to compose unicode capture groups. */
	var rsApos = "['’]";
	var rsAstral = "[" + rsAstralRange + "]";
	var rsBreak = "[" + rsBreakRange + "]";
	var rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]";
	var rsDigits = "\\d+";
	var rsDingbat = "[" + rsDingbatRange + "]";
	var rsLower = "[" + rsLowerRange + "]";
	var rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
	var rsFitz = "\\ud83c[\\udffb-\\udfff]";
	var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
	var rsNonAstral = "[^" + rsAstralRange + "]";
	var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
	var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
	var rsUpper = "[" + rsUpperRange + "]";
	var rsZWJ = "\\u200d";
	/** Used to compose unicode regexes. */
	var rsLowerMisc = "(?:" + rsLower + "|" + rsMisc + ")";
	var rsUpperMisc = "(?:" + rsUpper + "|" + rsMisc + ")";
	var rsOptLowerContr = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
	var rsOptUpperContr = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
	var reOptMod = rsModifier + "?";
	var rsOptVar = "[" + rsVarRange + "]?";
	var rsOptJoin = "(?:" + rsZWJ + "(?:" + [
		rsNonAstral,
		rsRegional,
		rsSurrPair
	].join("|") + ")" + rsOptVar + reOptMod + ")*";
	var rsSeq = rsOptVar + reOptMod + rsOptJoin;
	var rsEmoji = "(?:" + [
		rsDingbat,
		rsRegional,
		rsSurrPair
	].join("|") + ")" + rsSeq;
	var rsSymbol = "(?:" + [
		rsNonAstral + rsCombo + "?",
		rsCombo,
		rsRegional,
		rsSurrPair,
		rsAstral
	].join("|") + ")";
	/** Used to match apostrophes. */
	var reApos = RegExp(rsApos, "g");
	/**
	* Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	* [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	*/
	var reComboMark = RegExp(rsCombo, "g");
	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
	/** Used to match complex or compound words. */
	var reUnicodeWord = RegExp([
		rsUpper + "?" + rsLower + "+" + rsOptLowerContr + "(?=" + [
			rsBreak,
			rsUpper,
			"$"
		].join("|") + ")",
		rsUpperMisc + "+" + rsOptUpperContr + "(?=" + [
			rsBreak,
			rsUpper + rsLowerMisc,
			"$"
		].join("|") + ")",
		rsUpper + "?" + rsLowerMisc + "+" + rsOptLowerContr,
		rsUpper + "+" + rsOptUpperContr,
		rsDigits,
		rsEmoji
	].join("|"), "g");
	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]");
	/** Used to detect strings that need a more robust regexp to match words. */
	var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
	/** Used to map Latin Unicode letters to basic Latin letters. */
	var deburredLetters = {
		"À": "A",
		"Á": "A",
		"Â": "A",
		"Ã": "A",
		"Ä": "A",
		"Å": "A",
		"à": "a",
		"á": "a",
		"â": "a",
		"ã": "a",
		"ä": "a",
		"å": "a",
		"Ç": "C",
		"ç": "c",
		"Ð": "D",
		"ð": "d",
		"È": "E",
		"É": "E",
		"Ê": "E",
		"Ë": "E",
		"è": "e",
		"é": "e",
		"ê": "e",
		"ë": "e",
		"Ì": "I",
		"Í": "I",
		"Î": "I",
		"Ï": "I",
		"ì": "i",
		"í": "i",
		"î": "i",
		"ï": "i",
		"Ñ": "N",
		"ñ": "n",
		"Ò": "O",
		"Ó": "O",
		"Ô": "O",
		"Õ": "O",
		"Ö": "O",
		"Ø": "O",
		"ò": "o",
		"ó": "o",
		"ô": "o",
		"õ": "o",
		"ö": "o",
		"ø": "o",
		"Ù": "U",
		"Ú": "U",
		"Û": "U",
		"Ü": "U",
		"ù": "u",
		"ú": "u",
		"û": "u",
		"ü": "u",
		"Ý": "Y",
		"ý": "y",
		"ÿ": "y",
		"Æ": "Ae",
		"æ": "ae",
		"Þ": "Th",
		"þ": "th",
		"ß": "ss",
		"Ā": "A",
		"Ă": "A",
		"Ą": "A",
		"ā": "a",
		"ă": "a",
		"ą": "a",
		"Ć": "C",
		"Ĉ": "C",
		"Ċ": "C",
		"Č": "C",
		"ć": "c",
		"ĉ": "c",
		"ċ": "c",
		"č": "c",
		"Ď": "D",
		"Đ": "D",
		"ď": "d",
		"đ": "d",
		"Ē": "E",
		"Ĕ": "E",
		"Ė": "E",
		"Ę": "E",
		"Ě": "E",
		"ē": "e",
		"ĕ": "e",
		"ė": "e",
		"ę": "e",
		"ě": "e",
		"Ĝ": "G",
		"Ğ": "G",
		"Ġ": "G",
		"Ģ": "G",
		"ĝ": "g",
		"ğ": "g",
		"ġ": "g",
		"ģ": "g",
		"Ĥ": "H",
		"Ħ": "H",
		"ĥ": "h",
		"ħ": "h",
		"Ĩ": "I",
		"Ī": "I",
		"Ĭ": "I",
		"Į": "I",
		"İ": "I",
		"ĩ": "i",
		"ī": "i",
		"ĭ": "i",
		"į": "i",
		"ı": "i",
		"Ĵ": "J",
		"ĵ": "j",
		"Ķ": "K",
		"ķ": "k",
		"ĸ": "k",
		"Ĺ": "L",
		"Ļ": "L",
		"Ľ": "L",
		"Ŀ": "L",
		"Ł": "L",
		"ĺ": "l",
		"ļ": "l",
		"ľ": "l",
		"ŀ": "l",
		"ł": "l",
		"Ń": "N",
		"Ņ": "N",
		"Ň": "N",
		"Ŋ": "N",
		"ń": "n",
		"ņ": "n",
		"ň": "n",
		"ŋ": "n",
		"Ō": "O",
		"Ŏ": "O",
		"Ő": "O",
		"ō": "o",
		"ŏ": "o",
		"ő": "o",
		"Ŕ": "R",
		"Ŗ": "R",
		"Ř": "R",
		"ŕ": "r",
		"ŗ": "r",
		"ř": "r",
		"Ś": "S",
		"Ŝ": "S",
		"Ş": "S",
		"Š": "S",
		"ś": "s",
		"ŝ": "s",
		"ş": "s",
		"š": "s",
		"Ţ": "T",
		"Ť": "T",
		"Ŧ": "T",
		"ţ": "t",
		"ť": "t",
		"ŧ": "t",
		"Ũ": "U",
		"Ū": "U",
		"Ŭ": "U",
		"Ů": "U",
		"Ű": "U",
		"Ų": "U",
		"ũ": "u",
		"ū": "u",
		"ŭ": "u",
		"ů": "u",
		"ű": "u",
		"ų": "u",
		"Ŵ": "W",
		"ŵ": "w",
		"Ŷ": "Y",
		"ŷ": "y",
		"Ÿ": "Y",
		"Ź": "Z",
		"Ż": "Z",
		"Ž": "Z",
		"ź": "z",
		"ż": "z",
		"ž": "z",
		"Ĳ": "IJ",
		"ĳ": "ij",
		"Œ": "Oe",
		"œ": "oe",
		"ŉ": "'n",
		"ſ": "ss"
	};
	/** Used as a reference to the global object. */
	var root = typeof globalthis_default == "object" && globalthis_default && globalthis_default.Object === Object && globalthis_default || typeof self == "object" && self && self.Object === Object && self || Function("return this")();
	/**
	* A specialized version of `_.reduce` for arrays without support for
	* iteratee shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @param {*} [accumulator] The initial value.
	* @param {boolean} [initAccum] Specify using the first element of `array` as
	*  the initial value.
	* @returns {*} Returns the accumulated value.
	*/
	function arrayReduce(array, iteratee, accumulator, initAccum) {
		var index = -1, length = array ? array.length : 0;
		if (initAccum && length) accumulator = array[++index];
		while (++index < length) accumulator = iteratee(accumulator, array[index], index, array);
		return accumulator;
	}
	/**
	* Converts an ASCII `string` to an array.
	*
	* @private
	* @param {string} string The string to convert.
	* @returns {Array} Returns the converted array.
	*/
	function asciiToArray(string) {
		return string.split("");
	}
	/**
	* Splits an ASCII `string` into an array of its words.
	*
	* @private
	* @param {string} The string to inspect.
	* @returns {Array} Returns the words of `string`.
	*/
	function asciiWords(string) {
		return string.match(reAsciiWord) || [];
	}
	/**
	* The base implementation of `_.propertyOf` without support for deep paths.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Function} Returns the new accessor function.
	*/
	function basePropertyOf(object) {
		return function(key) {
			return object == null ? void 0 : object[key];
		};
	}
	/**
	* Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	* letters to basic Latin letters.
	*
	* @private
	* @param {string} letter The matched letter to deburr.
	* @returns {string} Returns the deburred letter.
	*/
	var deburrLetter = basePropertyOf(deburredLetters);
	/**
	* Checks if `string` contains Unicode symbols.
	*
	* @private
	* @param {string} string The string to inspect.
	* @returns {boolean} Returns `true` if a symbol is found, else `false`.
	*/
	function hasUnicode(string) {
		return reHasUnicode.test(string);
	}
	/**
	* Checks if `string` contains a word composed of Unicode symbols.
	*
	* @private
	* @param {string} string The string to inspect.
	* @returns {boolean} Returns `true` if a word is found, else `false`.
	*/
	function hasUnicodeWord(string) {
		return reHasUnicodeWord.test(string);
	}
	/**
	* Converts `string` to an array.
	*
	* @private
	* @param {string} string The string to convert.
	* @returns {Array} Returns the converted array.
	*/
	function stringToArray(string) {
		return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
	}
	/**
	* Converts a Unicode `string` to an array.
	*
	* @private
	* @param {string} string The string to convert.
	* @returns {Array} Returns the converted array.
	*/
	function unicodeToArray(string) {
		return string.match(reUnicode) || [];
	}
	/**
	* Splits a Unicode `string` into an array of its words.
	*
	* @private
	* @param {string} The string to inspect.
	* @returns {Array} Returns the words of `string`.
	*/
	function unicodeWords(string) {
		return string.match(reUnicodeWord) || [];
	}
	/**
	* Used to resolve the
	* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	* of values.
	*/
	var objectToString = Object.prototype.toString;
	/** Built-in value references. */
	var Symbol = root.Symbol;
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : void 0;
	var symbolToString = symbolProto ? symbolProto.toString : void 0;
	/**
	* The base implementation of `_.slice` without an iteratee call guard.
	*
	* @private
	* @param {Array} array The array to slice.
	* @param {number} [start=0] The start position.
	* @param {number} [end=array.length] The end position.
	* @returns {Array} Returns the slice of `array`.
	*/
	function baseSlice(array, start, end) {
		var index = -1, length = array.length;
		if (start < 0) start = -start > length ? 0 : length + start;
		end = end > length ? length : end;
		if (end < 0) end += length;
		length = start > end ? 0 : end - start >>> 0;
		start >>>= 0;
		var result = Array(length);
		while (++index < length) result[index] = array[index + start];
		return result;
	}
	/**
	* The base implementation of `_.toString` which doesn't convert nullish
	* values to empty strings.
	*
	* @private
	* @param {*} value The value to process.
	* @returns {string} Returns the string.
	*/
	function baseToString(value) {
		if (typeof value == "string") return value;
		if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
		var result = value + "";
		return result == "0" && 1 / value == -Infinity ? "-0" : result;
	}
	/**
	* Casts `array` to a slice if it's needed.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {number} start The start position.
	* @param {number} [end=array.length] The end position.
	* @returns {Array} Returns the cast slice.
	*/
	function castSlice(array, start, end) {
		var length = array.length;
		end = end === void 0 ? length : end;
		return !start && end >= length ? array : baseSlice(array, start, end);
	}
	/**
	* Creates a function like `_.lowerFirst`.
	*
	* @private
	* @param {string} methodName The name of the `String` case method to use.
	* @returns {Function} Returns the new case function.
	*/
	function createCaseFirst(methodName) {
		return function(string) {
			string = toString(string);
			var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
			var chr = strSymbols ? strSymbols[0] : string.charAt(0);
			var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
			return chr[methodName]() + trailing;
		};
	}
	/**
	* Creates a function like `_.camelCase`.
	*
	* @private
	* @param {Function} callback The function to combine each word.
	* @returns {Function} Returns the new compounder function.
	*/
	function createCompounder(callback) {
		return function(string) {
			return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
		};
	}
	/**
	* Checks if `value` is object-like. A value is object-like if it's not `null`
	* and has a `typeof` result of "object".
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	* @example
	*
	* _.isObjectLike({});
	* // => true
	*
	* _.isObjectLike([1, 2, 3]);
	* // => true
	*
	* _.isObjectLike(_.noop);
	* // => false
	*
	* _.isObjectLike(null);
	* // => false
	*/
	function isObjectLike(value) {
		return !!value && typeof value == "object";
	}
	/**
	* Checks if `value` is classified as a `Symbol` primitive or object.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	* @example
	*
	* _.isSymbol(Symbol.iterator);
	* // => true
	*
	* _.isSymbol('abc');
	* // => false
	*/
	function isSymbol(value) {
		return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
	}
	/**
	* Converts `value` to a string. An empty string is returned for `null`
	* and `undefined` values. The sign of `-0` is preserved.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to process.
	* @returns {string} Returns the string.
	* @example
	*
	* _.toString(null);
	* // => ''
	*
	* _.toString(-0);
	* // => '-0'
	*
	* _.toString([1, 2, 3]);
	* // => '1,2,3'
	*/
	function toString(value) {
		return value == null ? "" : baseToString(value);
	}
	/**
	* Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category String
	* @param {string} [string=''] The string to convert.
	* @returns {string} Returns the camel cased string.
	* @example
	*
	* _.camelCase('Foo Bar');
	* // => 'fooBar'
	*
	* _.camelCase('--foo-bar--');
	* // => 'fooBar'
	*
	* _.camelCase('__FOO_BAR__');
	* // => 'fooBar'
	*/
	var camelCase = createCompounder(function(result, word, index) {
		word = word.toLowerCase();
		return result + (index ? capitalize(word) : word);
	});
	/**
	* Converts the first character of `string` to upper case and the remaining
	* to lower case.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category String
	* @param {string} [string=''] The string to capitalize.
	* @returns {string} Returns the capitalized string.
	* @example
	*
	* _.capitalize('FRED');
	* // => 'Fred'
	*/
	function capitalize(string) {
		return upperFirst(toString(string).toLowerCase());
	}
	/**
	* Deburrs `string` by converting
	* [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	* and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	* letters to basic Latin letters and removing
	* [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category String
	* @param {string} [string=''] The string to deburr.
	* @returns {string} Returns the deburred string.
	* @example
	*
	* _.deburr('déjà vu');
	* // => 'deja vu'
	*/
	function deburr(string) {
		string = toString(string);
		return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
	}
	/**
	* Converts the first character of `string` to upper case.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category String
	* @param {string} [string=''] The string to convert.
	* @returns {string} Returns the converted string.
	* @example
	*
	* _.upperFirst('fred');
	* // => 'Fred'
	*
	* _.upperFirst('FRED');
	* // => 'FRED'
	*/
	var upperFirst = createCaseFirst("toUpperCase");
	/**
	* Splits `string` into an array of its words.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category String
	* @param {string} [string=''] The string to inspect.
	* @param {RegExp|string} [pattern] The pattern to match words.
	* @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	* @returns {Array} Returns the words of `string`.
	* @example
	*
	* _.words('fred, barney, & pebbles');
	* // => ['fred', 'barney', 'pebbles']
	*
	* _.words('fred, barney, & pebbles', /[^, ]+/g);
	* // => ['fred', 'barney', '&', 'pebbles']
	*/
	function words(string, pattern, guard) {
		string = toString(string);
		pattern = guard ? void 0 : pattern;
		if (pattern === void 0) return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
		return string.match(pattern) || [];
	}
	module.exports = camelCase;
}));
var require_localsConvention = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	Object.defineProperty(exports, "makeLocalsConventionReducer", {
		enumerable: true,
		get: function() {
			return makeLocalsConventionReducer;
		}
	});
	const _lodashcamelcase = /*#__PURE__*/ _interop_require_default(require_lodash_camelcase());
	function _interop_require_default(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	function dashesCamelCase(string) {
		return string.replace(/-+(\w)/g, (_, firstLetter) => firstLetter.toUpperCase());
	}
	function makeLocalsConventionReducer(localsConvention, inputFile) {
		const isFunc = typeof localsConvention === "function";
		return (tokens, [className, value]) => {
			if (isFunc) {
				const convention = localsConvention(className, value, inputFile);
				if (Array.isArray(convention)) {
					convention.forEach((name) => tokens[name] = value);
					return tokens;
				}
				tokens[convention] = value;
				return tokens;
			}
			switch (localsConvention) {
				case "none":
					tokens[className] = value;
					break;
				case "all":
					tokens[className] = value;
					tokens[(0, _lodashcamelcase.default)(className)] = value;
					tokens[dashesCamelCase(className)] = value;
					break;
				case "camelCase":
					tokens[className] = value;
					tokens[(0, _lodashcamelcase.default)(className)] = value;
					break;
				case "camelCaseOnly":
					tokens[(0, _lodashcamelcase.default)(className)] = value;
					break;
				case "dashes":
					tokens[className] = value;
					tokens[dashesCamelCase(className)] = value;
					break;
				case "dashesOnly": tokens[dashesCamelCase(className)] = value;
			}
			return tokens;
		};
	}
}));
var require_FileSystemLoader = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	Object.defineProperty(exports, "default", {
		enumerable: true,
		get: function() {
			return FileSystemLoader;
		}
	});
	const _postcss$1 = /*#__PURE__*/ _interop_require_default(__require("postcss"));
	const _path = /*#__PURE__*/ _interop_require_default(__require("path"));
	const _Parser = /*#__PURE__*/ _interop_require_default(require_Parser());
	const _fs = require_fs();
	function _interop_require_default(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	var Core = class Core {
		constructor(plugins) {
			this.plugins = plugins || Core.defaultPlugins;
		}
		async load(sourceString, sourcePath, trace, pathFetcher) {
			const parser = new _Parser.default(pathFetcher, trace);
			const plugins = this.plugins.concat([parser.plugin()]);
			return {
				injectableSource: (await (0, _postcss$1.default)(plugins).process(sourceString, { from: sourcePath })).css,
				exportTokens: parser.exportTokens
			};
		}
	};
	const traceKeySorter = (a, b) => {
		if (a.length < b.length) return a < b.substring(0, a.length) ? -1 : 1;
		if (a.length > b.length) return a.substring(0, b.length) <= b ? -1 : 1;
		return a < b ? -1 : 1;
	};
	var FileSystemLoader = class {
		constructor(root, plugins, fileResolve) {
			if (root === "/" && processModule.platform === "win32") {
				const cwdDrive = processModule.cwd().slice(0, 3);
				if (!/^[A-Za-z]:\\$/.test(cwdDrive)) throw new Error(`Failed to obtain root from "${processModule.cwd()}".`);
				root = cwdDrive;
			}
			this.root = root;
			this.fileResolve = fileResolve;
			this.sources = {};
			this.traces = {};
			this.importNr = 0;
			this.core = new Core(plugins);
			this.tokensByFile = {};
			this.fs = (0, _fs.getFileSystem)();
		}
		async fetch(_newPath, relativeTo, _trace) {
			const newPath = _newPath.replace(/^["']|["']$/g, "");
			const trace = _trace || String.fromCharCode(this.importNr++);
			const useFileResolve = typeof this.fileResolve === "function";
			const fileResolvedPath = useFileResolve ? await this.fileResolve(newPath, relativeTo) : await Promise.resolve();
			if (fileResolvedPath && !_path.default.isAbsolute(fileResolvedPath)) throw new Error("The returned path from the \"fileResolve\" option must be absolute.");
			const relativeDir = _path.default.dirname(relativeTo);
			const rootRelativePath = fileResolvedPath || _path.default.resolve(relativeDir, newPath);
			let fileRelativePath = fileResolvedPath || _path.default.resolve(_path.default.resolve(this.root, relativeDir), newPath);
			if (!useFileResolve && newPath[0] !== "." && !_path.default.isAbsolute(newPath)) try {
				fileRelativePath = __require.resolve(newPath);
			} catch {}
			const tokens = this.tokensByFile[fileRelativePath];
			if (tokens) return tokens;
			return new Promise((resolve, reject) => {
				this.fs.readFile(fileRelativePath, "utf-8", async (err, source) => {
					if (err) reject(err);
					const { injectableSource, exportTokens } = await this.core.load(source, rootRelativePath, trace, this.fetch.bind(this));
					this.sources[fileRelativePath] = injectableSource;
					this.traces[trace] = fileRelativePath;
					this.tokensByFile[fileRelativePath] = exportTokens;
					resolve(exportTokens);
				});
			});
		}
		get finalSource() {
			const traces = this.traces;
			const sources = this.sources;
			let written = /* @__PURE__ */ new Set();
			return Object.keys(traces).sort(traceKeySorter).map((key) => {
				const filename = traces[key];
				if (written.has(filename)) return null;
				written.add(filename);
				return sources[filename];
			}).join("");
		}
	};
}));
var require_topologicalSort = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const PERMANENT_MARKER = 2;
	const TEMPORARY_MARKER = 1;
	function createError(node, graph) {
		const er = /* @__PURE__ */ new Error("Nondeterministic import's order");
		er.nodes = [node, graph[node].find((relatedNode) => graph[relatedNode].indexOf(node) > -1)];
		return er;
	}
	function walkGraph(node, graph, state, result, strict) {
		if (state[node] === PERMANENT_MARKER) return;
		if (state[node] === TEMPORARY_MARKER) {
			if (strict) return createError(node, graph);
			return;
		}
		state[node] = TEMPORARY_MARKER;
		const children = graph[node];
		const length = children.length;
		for (let i = 0; i < length; ++i) {
			const error = walkGraph(children[i], graph, state, result, strict);
			if (error instanceof Error) return error;
		}
		state[node] = PERMANENT_MARKER;
		result.push(node);
	}
	function topologicalSort(graph, strict) {
		const result = [];
		const state = {};
		const nodes = Object.keys(graph);
		const length = nodes.length;
		for (let i = 0; i < length; ++i) {
			const er = walkGraph(nodes[i], graph, state, result, strict);
			if (er instanceof Error) return er;
		}
		return result;
	}
	module.exports = topologicalSort;
}));
var require_src$3 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const topologicalSort = require_topologicalSort();
	const matchImports = /^(.+?)\s+from\s+(?:"([^"]+)"|'([^']+)'|(global))$/;
	const icssImport = /^:import\((?:"([^"]+)"|'([^']+)')\)/;
	const VISITED_MARKER = 1;
	/**
	* :import('G') {}
	*
	* Rule
	*   composes: ... from 'A'
	*   composes: ... from 'B'
	
	* Rule
	*   composes: ... from 'A'
	*   composes: ... from 'A'
	*   composes: ... from 'C'
	*
	* Results in:
	*
	* graph: {
	*   G: [],
	*   A: [],
	*   B: ['A'],
	*   C: ['A'],
	* }
	*/
	function addImportToGraph(importId, parentId, graph, visited) {
		const siblingsId = parentId + "_siblings";
		const visitedId = parentId + "_" + importId;
		if (visited[visitedId] !== VISITED_MARKER) {
			if (!Array.isArray(visited[siblingsId])) visited[siblingsId] = [];
			const siblings = visited[siblingsId];
			if (Array.isArray(graph[importId])) graph[importId] = graph[importId].concat(siblings);
			else graph[importId] = siblings.slice();
			visited[visitedId] = VISITED_MARKER;
			siblings.push(importId);
		}
	}
	module.exports = (options = {}) => {
		let importIndex = 0;
		const createImportedName = typeof options.createImportedName !== "function" ? (importName) => `i__imported_${importName.replace(/\W/g, "_")}_${importIndex++}` : options.createImportedName;
		const failOnWrongOrder = options.failOnWrongOrder;
		return {
			postcssPlugin: "postcss-modules-extract-imports",
			prepare() {
				const graph = {};
				const visited = {};
				const existingImports = {};
				const importDecls = {};
				const imports = {};
				return { Once(root, postcss) {
					root.walkRules((rule) => {
						const matches = icssImport.exec(rule.selector);
						if (matches) {
							const [, doubleQuotePath, singleQuotePath] = matches;
							const importPath = doubleQuotePath || singleQuotePath;
							addImportToGraph(importPath, "root", graph, visited);
							existingImports[importPath] = rule;
						}
					});
					root.walkDecls(/^composes$/, (declaration) => {
						const multiple = declaration.value.split(",");
						const values = [];
						multiple.forEach((value) => {
							const matches = value.trim().match(matchImports);
							if (!matches) {
								values.push(value);
								return;
							}
							let tmpSymbols;
							let [, symbols, doubleQuotePath, singleQuotePath, global] = matches;
							if (global) tmpSymbols = symbols.split(/\s+/).map((s) => `global(${s})`);
							else {
								const importPath = doubleQuotePath || singleQuotePath;
								let parent = declaration.parent;
								let parentIndexes = "";
								while (parent.type !== "root") {
									parentIndexes = parent.parent.index(parent) + "_" + parentIndexes;
									parent = parent.parent;
								}
								const { selector } = declaration.parent;
								addImportToGraph(importPath, `_${parentIndexes}${selector}`, graph, visited);
								importDecls[importPath] = declaration;
								imports[importPath] = imports[importPath] || {};
								tmpSymbols = symbols.split(/\s+/).map((s) => {
									if (!imports[importPath][s]) imports[importPath][s] = createImportedName(s, importPath);
									return imports[importPath][s];
								});
							}
							values.push(tmpSymbols.join(" "));
						});
						declaration.value = values.join(", ");
					});
					const importsOrder = topologicalSort(graph, failOnWrongOrder);
					if (importsOrder instanceof Error) {
						const importPath = importsOrder.nodes.find((importPath) => importDecls.hasOwnProperty(importPath));
						throw importDecls[importPath].error("Failed to resolve order of composed modules " + importsOrder.nodes.map((importPath) => "`" + importPath + "`").join(", ") + ".", {
							plugin: "postcss-modules-extract-imports",
							word: "composes"
						});
					}
					let lastImportRule;
					importsOrder.forEach((path) => {
						const importedSymbols = imports[path];
						let rule = existingImports[path];
						if (!rule && importedSymbols) {
							rule = postcss.rule({
								selector: `:import("${path}")`,
								raws: { after: "\n" }
							});
							if (lastImportRule) root.insertAfter(lastImportRule, rule);
							else root.prepend(rule);
						}
						lastImportRule = rule;
						if (!importedSymbols) return;
						Object.keys(importedSymbols).forEach((importedSymbol) => {
							rule.append(postcss.decl({
								value: importedSymbol,
								prop: importedSymbols[importedSymbol],
								raws: { before: "\n  " }
							}));
						});
					});
				} };
			}
		};
	};
	module.exports.postcss = true;
}));
var require_wasm_hash = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const MAX_SHORT_STRING = Math.floor(16368) & -4;
	var WasmHash = class {
		/**
		* @param {WebAssembly.Instance} instance wasm instance
		* @param {WebAssembly.Instance[]} instancesPool pool of instances
		* @param {number} chunkSize size of data chunks passed to wasm
		* @param {number} digestSize size of digest returned by wasm
		*/
		constructor(instance, instancesPool, chunkSize, digestSize) {
			const exports$2 = instance.exports;
			exports$2.init();
			this.exports = exports$2;
			this.mem = Buffer.from(exports$2.memory.buffer, 0, 65536);
			this.buffered = 0;
			this.instancesPool = instancesPool;
			this.chunkSize = chunkSize;
			this.digestSize = digestSize;
		}
		reset() {
			this.buffered = 0;
			this.exports.init();
		}
		/**
		* @param {Buffer | string} data data
		* @param {BufferEncoding=} encoding encoding
		* @returns {this} itself
		*/
		update(data, encoding) {
			if (typeof data === "string") {
				while (data.length > MAX_SHORT_STRING) {
					this._updateWithShortString(data.slice(0, MAX_SHORT_STRING), encoding);
					data = data.slice(MAX_SHORT_STRING);
				}
				this._updateWithShortString(data, encoding);
				return this;
			}
			this._updateWithBuffer(data);
			return this;
		}
		/**
		* @param {string} data data
		* @param {BufferEncoding=} encoding encoding
		* @returns {void}
		*/
		_updateWithShortString(data, encoding) {
			const { exports: exports$3, buffered, mem, chunkSize } = this;
			let endPos;
			if (data.length < 70) if (!encoding || encoding === "utf-8" || encoding === "utf8") {
				endPos = buffered;
				for (let i = 0; i < data.length; i++) {
					const cc = data.charCodeAt(i);
					if (cc < 128) mem[endPos++] = cc;
					else if (cc < 2048) {
						mem[endPos] = cc >> 6 | 192;
						mem[endPos + 1] = cc & 63 | 128;
						endPos += 2;
					} else {
						endPos += mem.write(data.slice(i), endPos, encoding);
						break;
					}
				}
			} else if (encoding === "latin1") {
				endPos = buffered;
				for (let i = 0; i < data.length; i++) {
					const cc = data.charCodeAt(i);
					mem[endPos++] = cc;
				}
			} else endPos = buffered + mem.write(data, buffered, encoding);
			else endPos = buffered + mem.write(data, buffered, encoding);
			if (endPos < chunkSize) this.buffered = endPos;
			else {
				const l = endPos & ~(this.chunkSize - 1);
				exports$3.update(l);
				const newBuffered = endPos - l;
				this.buffered = newBuffered;
				if (newBuffered > 0) mem.copyWithin(0, l, endPos);
			}
		}
		/**
		* @param {Buffer} data data
		* @returns {void}
		*/
		_updateWithBuffer(data) {
			const { exports: exports$4, buffered, mem } = this;
			const length = data.length;
			if (buffered + length < this.chunkSize) {
				data.copy(mem, buffered, 0, length);
				this.buffered += length;
			} else {
				const l = buffered + length & ~(this.chunkSize - 1);
				if (l > 65536) {
					let i = 65536 - buffered;
					data.copy(mem, buffered, 0, i);
					exports$4.update(65536);
					const stop = l - buffered - 65536;
					while (i < stop) {
						data.copy(mem, 0, i, i + 65536);
						exports$4.update(65536);
						i += 65536;
					}
					data.copy(mem, 0, i, l - buffered);
					exports$4.update(l - buffered - i);
				} else {
					data.copy(mem, buffered, 0, l - buffered);
					exports$4.update(l);
				}
				const newBuffered = length + buffered - l;
				this.buffered = newBuffered;
				if (newBuffered > 0) data.copy(mem, 0, length - newBuffered, length);
			}
		}
		digest(type) {
			const { exports: exports$5, buffered, mem, digestSize } = this;
			exports$5.final(buffered);
			this.instancesPool.push(this);
			const hex = mem.toString("latin1", 0, digestSize);
			if (type === "hex") return hex;
			if (type === "binary" || !type) return Buffer.from(hex, "hex");
			return Buffer.from(hex, "hex").toString(type);
		}
	};
	const create = (wasmModule, instancesPool, chunkSize, digestSize) => {
		if (instancesPool.length > 0) {
			const old = instancesPool.pop();
			old.reset();
			return old;
		} else return new WasmHash(new WebAssembly.Instance(wasmModule), instancesPool, chunkSize, digestSize);
	};
	module.exports = create;
	module.exports.MAX_SHORT_STRING = MAX_SHORT_STRING;
}));
var require_xxhash64 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const create = require_wasm_hash();
	const xxhash64 = new WebAssembly.Module(Buffer.from("AGFzbQEAAAABCAJgAX8AYAAAAwQDAQAABQMBAAEGGgV+AUIAC34BQgALfgFCAAt+AUIAC34BQgALByIEBGluaXQAAAZ1cGRhdGUAAQVmaW5hbAACBm1lbW9yeQIACrUIAzAAQtbrgu7q/Yn14AAkAELP1tO+0ser2UIkAUIAJAJC+erQ0OfJoeThACQDQgAkBAvUAQIBfwR+IABFBEAPCyMEIACtfCQEIwAhAiMBIQMjAiEEIwMhBQNAIAIgASkDAELP1tO+0ser2UJ+fEIfiUKHla+vmLbem55/fiECIAMgASkDCELP1tO+0ser2UJ+fEIfiUKHla+vmLbem55/fiEDIAQgASkDEELP1tO+0ser2UJ+fEIfiUKHla+vmLbem55/fiEEIAUgASkDGELP1tO+0ser2UJ+fEIfiUKHla+vmLbem55/fiEFIAAgAUEgaiIBSw0ACyACJAAgAyQBIAQkAiAFJAMLqwYCAX8EfiMEQgBSBH4jACICQgGJIwEiA0IHiXwjAiIEQgyJfCMDIgVCEol8IAJCz9bTvtLHq9lCfkIfiUKHla+vmLbem55/foVCh5Wvr5i23puef35CnaO16oOxjYr6AH0gA0LP1tO+0ser2UJ+Qh+JQoeVr6+Ytt6bnn9+hUKHla+vmLbem55/fkKdo7Xqg7GNivoAfSAEQs/W077Sx6vZQn5CH4lCh5Wvr5i23puef36FQoeVr6+Ytt6bnn9+Qp2jteqDsY2K+gB9IAVCz9bTvtLHq9lCfkIfiUKHla+vmLbem55/foVCh5Wvr5i23puef35CnaO16oOxjYr6AH0FQsXP2bLx5brqJwsjBCAArXx8IQIDQCABQQhqIABNBEAgAiABKQMAQs/W077Sx6vZQn5CH4lCh5Wvr5i23puef36FQhuJQoeVr6+Ytt6bnn9+Qp2jteqDsY2K+gB9IQIgAUEIaiEBDAELCyABQQRqIABNBEACfyACIAE1AgBCh5Wvr5i23puef36FQheJQs/W077Sx6vZQn5C+fPd8Zn2masWfCECIAFBBGoLIQELA0AgACABRwRAIAIgATEAAELFz9my8eW66id+hUILiUKHla+vmLbem55/fiECIAFBAWohAQwBCwtBACACIAJCIYiFQs/W077Sx6vZQn4iAiACQh2IhUL5893xmfaZqxZ+IgIgAkIgiIUiAkIgiCIDQv//A4NCIIYgA0KAgPz/D4NCEIiEIgNC/4GAgPAfg0IQhiADQoD+g4CA4D+DQgiIhCIDQo+AvIDwgcAHg0IIhiADQvCBwIeAnoD4AINCBIiEIgNChoyYsODAgYMGfEIEiEKBgoSIkKDAgAGDQid+IANCsODAgYOGjJgwhHw3AwBBCCACQv////8PgyICQv//A4NCIIYgAkKAgPz/D4NCEIiEIgJC/4GAgPAfg0IQhiACQoD+g4CA4D+DQgiIhCICQo+AvIDwgcAHg0IIhiACQvCBwIeAnoD4AINCBIiEIgJChoyYsODAgYMGfEIEiEKBgoSIkKDAgAGDQid+IAJCsODAgYOGjJgwhHw3AwAL", "base64"));
	module.exports = create.bind(null, xxhash64, [], 32, 16);
}));
var require_BatchedHash = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const MAX_SHORT_STRING = require_wasm_hash().MAX_SHORT_STRING;
	var BatchedHash = class {
		constructor(hash) {
			this.string = void 0;
			this.encoding = void 0;
			this.hash = hash;
		}
		/**
		* Update hash {@link https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding}
		* @param {string|Buffer} data data
		* @param {string=} inputEncoding data encoding
		* @returns {this} updated hash
		*/
		update(data, inputEncoding) {
			if (this.string !== void 0) {
				if (typeof data === "string" && inputEncoding === this.encoding && this.string.length + data.length < MAX_SHORT_STRING) {
					this.string += data;
					return this;
				}
				this.hash.update(this.string, this.encoding);
				this.string = void 0;
			}
			if (typeof data === "string") if (data.length < MAX_SHORT_STRING && (!inputEncoding || !inputEncoding.startsWith("ba"))) {
				this.string = data;
				this.encoding = inputEncoding;
			} else this.hash.update(data, inputEncoding);
			else this.hash.update(data);
			return this;
		}
		/**
		* Calculates the digest {@link https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding}
		* @param {string=} encoding encoding of the return value
		* @returns {string|Buffer} digest
		*/
		digest(encoding) {
			if (this.string !== void 0) this.hash.update(this.string, this.encoding);
			return this.hash.digest(encoding);
		}
	};
	module.exports = BatchedHash;
}));
var require_md4 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const create = require_wasm_hash();
	const md4 = new WebAssembly.Module(Buffer.from("AGFzbQEAAAABCAJgAX8AYAAAAwUEAQAAAAUDAQABBhoFfwFBAAt/AUEAC38BQQALfwFBAAt/AUEACwciBARpbml0AAAGdXBkYXRlAAIFZmluYWwAAwZtZW1vcnkCAAqFEAQmAEGBxpS6BiQBQYnXtv5+JAJB/rnrxXkkA0H2qMmBASQEQQAkAAvMCgEYfyMBIQojAiEGIwMhByMEIQgDQCAAIAVLBEAgBSgCCCINIAcgBiAFKAIEIgsgCCAHIAUoAgAiDCAKIAggBiAHIAhzcXNqakEDdyIDIAYgB3Nxc2pqQQd3IgEgAyAGc3FzampBC3chAiAFKAIUIg8gASACIAUoAhAiCSADIAEgBSgCDCIOIAYgAyACIAEgA3Nxc2pqQRN3IgQgASACc3FzampBA3ciAyACIARzcXNqakEHdyEBIAUoAiAiEiADIAEgBSgCHCIRIAQgAyAFKAIYIhAgAiAEIAEgAyAEc3FzampBC3ciAiABIANzcXNqakETdyIEIAEgAnNxc2pqQQN3IQMgBSgCLCIVIAQgAyAFKAIoIhQgAiAEIAUoAiQiEyABIAIgAyACIARzcXNqakEHdyIBIAMgBHNxc2pqQQt3IgIgASADc3FzampBE3chBCAPIBAgCSAVIBQgEyAFKAI4IhYgAiAEIAUoAjQiFyABIAIgBSgCMCIYIAMgASAEIAEgAnNxc2pqQQN3IgEgAiAEc3FzampBB3ciAiABIARzcXNqakELdyIDIAkgAiAMIAEgBSgCPCIJIAQgASADIAEgAnNxc2pqQRN3IgEgAiADcnEgAiADcXJqakGZ84nUBWpBA3ciAiABIANycSABIANxcmpqQZnzidQFakEFdyIEIAEgAnJxIAEgAnFyaiASakGZ84nUBWpBCXciAyAPIAQgCyACIBggASADIAIgBHJxIAIgBHFyampBmfOJ1AVqQQ13IgEgAyAEcnEgAyAEcXJqakGZ84nUBWpBA3ciAiABIANycSABIANxcmpqQZnzidQFakEFdyIEIAEgAnJxIAEgAnFyampBmfOJ1AVqQQl3IgMgECAEIAIgFyABIAMgAiAEcnEgAiAEcXJqakGZ84nUBWpBDXciASADIARycSADIARxcmogDWpBmfOJ1AVqQQN3IgIgASADcnEgASADcXJqakGZ84nUBWpBBXciBCABIAJycSABIAJxcmpqQZnzidQFakEJdyIDIBEgBCAOIAIgFiABIAMgAiAEcnEgAiAEcXJqakGZ84nUBWpBDXciASADIARycSADIARxcmpqQZnzidQFakEDdyICIAEgA3JxIAEgA3FyampBmfOJ1AVqQQV3IgQgASACcnEgASACcXJqakGZ84nUBWpBCXciAyAMIAIgAyAJIAEgAyACIARycSACIARxcmpqQZnzidQFakENdyIBcyAEc2pqQaHX5/YGakEDdyICIAQgASACcyADc2ogEmpBodfn9gZqQQl3IgRzIAFzampBodfn9gZqQQt3IgMgAiADIBggASADIARzIAJzampBodfn9gZqQQ93IgFzIARzaiANakGh1+f2BmpBA3ciAiAUIAQgASACcyADc2pqQaHX5/YGakEJdyIEcyABc2pqQaHX5/YGakELdyIDIAsgAiADIBYgASADIARzIAJzampBodfn9gZqQQ93IgFzIARzampBodfn9gZqQQN3IgIgEyAEIAEgAnMgA3NqakGh1+f2BmpBCXciBHMgAXNqakGh1+f2BmpBC3chAyAKIA4gAiADIBcgASADIARzIAJzampBodfn9gZqQQ93IgFzIARzampBodfn9gZqQQN3IgJqIQogBiAJIAEgESADIAIgFSAEIAEgAnMgA3NqakGh1+f2BmpBCXciBHMgAXNqakGh1+f2BmpBC3ciAyAEcyACc2pqQaHX5/YGakEPd2ohBiADIAdqIQcgBCAIaiEIIAVBQGshBQwBCwsgCiQBIAYkAiAHJAMgCCQECw0AIAAQASMAIABqJAAL/wQCA38BfiMAIABqrUIDhiEEIABByABqQUBxIgJBCGshAyAAIgFBAWohACABQYABOgAAA0AgACACSUEAIABBB3EbBEAgAEEAOgAAIABBAWohAAwBCwsDQCAAIAJJBEAgAEIANwMAIABBCGohAAwBCwsgAyAENwMAIAIQAUEAIwGtIgRC//8DgyAEQoCA/P8Pg0IQhoQiBEL/gYCA8B+DIARCgP6DgIDgP4NCCIaEIgRCj4C8gPCBwAeDQgiGIARC8IHAh4CegPgAg0IEiIQiBEKGjJiw4MCBgwZ8QgSIQoGChIiQoMCAAYNCJ34gBEKw4MCBg4aMmDCEfDcDAEEIIwKtIgRC//8DgyAEQoCA/P8Pg0IQhoQiBEL/gYCA8B+DIARCgP6DgIDgP4NCCIaEIgRCj4C8gPCBwAeDQgiGIARC8IHAh4CegPgAg0IEiIQiBEKGjJiw4MCBgwZ8QgSIQoGChIiQoMCAAYNCJ34gBEKw4MCBg4aMmDCEfDcDAEEQIwOtIgRC//8DgyAEQoCA/P8Pg0IQhoQiBEL/gYCA8B+DIARCgP6DgIDgP4NCCIaEIgRCj4C8gPCBwAeDQgiGIARC8IHAh4CegPgAg0IEiIQiBEKGjJiw4MCBgwZ8QgSIQoGChIiQoMCAAYNCJ34gBEKw4MCBg4aMmDCEfDcDAEEYIwStIgRC//8DgyAEQoCA/P8Pg0IQhoQiBEL/gYCA8B+DIARCgP6DgIDgP4NCCIaEIgRCj4C8gPCBwAeDQgiGIARC8IHAh4CegPgAg0IEiIQiBEKGjJiw4MCBgwZ8QgSIQoGChIiQoMCAAYNCJ34gBEKw4MCBg4aMmDCEfDcDAAs=", "base64"));
	module.exports = create.bind(null, md4, [], 64, 32);
}));
var require_BulkUpdateDecorator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const BULK_SIZE = 2e3;
	const digestCaches = {};
	var BulkUpdateDecorator = class {
		/**
		* @param {Hash | function(): Hash} hashOrFactory function to create a hash
		* @param {string=} hashKey key for caching
		*/
		constructor(hashOrFactory, hashKey) {
			this.hashKey = hashKey;
			if (typeof hashOrFactory === "function") {
				this.hashFactory = hashOrFactory;
				this.hash = void 0;
			} else {
				this.hashFactory = void 0;
				this.hash = hashOrFactory;
			}
			this.buffer = "";
		}
		/**
		* Update hash {@link https://nodejs.org/api/crypto.html#crypto_hash_update_data_inputencoding}
		* @param {string|Buffer} data data
		* @param {string=} inputEncoding data encoding
		* @returns {this} updated hash
		*/
		update(data, inputEncoding) {
			if (inputEncoding !== void 0 || typeof data !== "string" || data.length > BULK_SIZE) {
				if (this.hash === void 0) this.hash = this.hashFactory();
				if (this.buffer.length > 0) {
					this.hash.update(this.buffer);
					this.buffer = "";
				}
				this.hash.update(data, inputEncoding);
			} else {
				this.buffer += data;
				if (this.buffer.length > BULK_SIZE) {
					if (this.hash === void 0) this.hash = this.hashFactory();
					this.hash.update(this.buffer);
					this.buffer = "";
				}
			}
			return this;
		}
		/**
		* Calculates the digest {@link https://nodejs.org/api/crypto.html#crypto_hash_digest_encoding}
		* @param {string=} encoding encoding of the return value
		* @returns {string|Buffer} digest
		*/
		digest(encoding) {
			let digestCache;
			const buffer = this.buffer;
			if (this.hash === void 0) {
				const cacheKey = `${this.hashKey}-${encoding}`;
				digestCache = digestCaches[cacheKey];
				if (digestCache === void 0) digestCache = digestCaches[cacheKey] = /* @__PURE__ */ new Map();
				const cacheEntry = digestCache.get(buffer);
				if (cacheEntry !== void 0) return cacheEntry;
				this.hash = this.hashFactory();
			}
			if (buffer.length > 0) this.hash.update(buffer);
			const digestResult = this.hash.digest(encoding);
			if (digestCache !== void 0) digestCache.set(buffer, digestResult);
			return digestResult;
		}
	};
	module.exports = BulkUpdateDecorator;
}));
var require_getHashDigest = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const baseEncodeTables = {
		26: "abcdefghijklmnopqrstuvwxyz",
		32: "123456789abcdefghjkmnpqrstuvwxyz",
		36: "0123456789abcdefghijklmnopqrstuvwxyz",
		49: "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
		52: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
		58: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
		62: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
		64: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"
	};
	/**
	* @param {Uint32Array} uint32Array Treated as a long base-0x100000000 number, little endian
	* @param {number} divisor The divisor
	* @return {number} Modulo (remainder) of the division
	*/
	function divmod32(uint32Array, divisor) {
		let carry = 0;
		for (let i = uint32Array.length - 1; i >= 0; i--) {
			const value = carry * 4294967296 + uint32Array[i];
			carry = value % divisor;
			uint32Array[i] = Math.floor(value / divisor);
		}
		return carry;
	}
	function encodeBufferToBase(buffer, base, length) {
		const encodeTable = baseEncodeTables[base];
		if (!encodeTable) throw new Error("Unknown encoding base" + base);
		const limit = Math.ceil(buffer.length * 8 / Math.log2(base));
		length = Math.min(length, limit);
		const uint32Array = new Uint32Array(Math.ceil(buffer.length / 4));
		buffer.copy(Buffer.from(uint32Array.buffer));
		let output = "";
		for (let i = 0; i < length; i++) output = encodeTable[divmod32(uint32Array, base)] + output;
		return output;
	}
	let crypto = void 0;
	let createXXHash64 = void 0;
	let createMd4 = void 0;
	let BatchedHash = void 0;
	let BulkUpdateDecorator = void 0;
	function getHashDigest(buffer, algorithm, digestType, maxLength) {
		algorithm = algorithm || "xxhash64";
		maxLength = maxLength || 9999;
		let hash;
		if (algorithm === "xxhash64") {
			if (createXXHash64 === void 0) {
				createXXHash64 = require_xxhash64();
				if (BatchedHash === void 0) BatchedHash = require_BatchedHash();
			}
			hash = new BatchedHash(createXXHash64());
		} else if (algorithm === "md4") {
			if (createMd4 === void 0) {
				createMd4 = require_md4();
				if (BatchedHash === void 0) BatchedHash = require_BatchedHash();
			}
			hash = new BatchedHash(createMd4());
		} else if (algorithm === "native-md4") {
			if (typeof crypto === "undefined") {
				crypto = __require("crypto");
				if (BulkUpdateDecorator === void 0) BulkUpdateDecorator = require_BulkUpdateDecorator();
			}
			hash = new BulkUpdateDecorator(() => crypto.createHash("md4"), "md4");
		} else {
			if (typeof crypto === "undefined") {
				crypto = __require("crypto");
				if (BulkUpdateDecorator === void 0) BulkUpdateDecorator = require_BulkUpdateDecorator();
			}
			hash = new BulkUpdateDecorator(() => crypto.createHash(algorithm), algorithm);
		}
		hash.update(buffer);
		if (digestType === "base26" || digestType === "base32" || digestType === "base36" || digestType === "base49" || digestType === "base52" || digestType === "base58" || digestType === "base62" || digestType === "base64safe") return encodeBufferToBase(hash.digest(), digestType === "base64safe" ? 64 : digestType.substr(4), maxLength);
		return hash.digest(digestType || "hex").substr(0, maxLength);
	}
	module.exports = getHashDigest;
}));
var require_interpolateName = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const path$1 = __require("path");
	const getHashDigest = require_getHashDigest();
	function interpolateName(loaderContext, name, options = {}) {
		let filename;
		const hasQuery = loaderContext.resourceQuery && loaderContext.resourceQuery.length > 1;
		if (typeof name === "function") filename = name(loaderContext.resourcePath, hasQuery ? loaderContext.resourceQuery : void 0);
		else filename = name || "[hash].[ext]";
		const context = options.context;
		const content = options.content;
		const regExp = options.regExp;
		let ext = "bin";
		let basename = "file";
		let directory = "";
		let folder = "";
		let query = "";
		if (loaderContext.resourcePath) {
			const parsed = path$1.parse(loaderContext.resourcePath);
			let resourcePath = loaderContext.resourcePath;
			if (parsed.ext) ext = parsed.ext.substr(1);
			if (parsed.dir) {
				basename = parsed.name;
				resourcePath = parsed.dir + path$1.sep;
			}
			if (typeof context !== "undefined") {
				directory = path$1.relative(context, resourcePath + "_").replace(/\\/g, "/").replace(/\.\.(\/)?/g, "_$1");
				directory = directory.substr(0, directory.length - 1);
			} else directory = resourcePath.replace(/\\/g, "/").replace(/\.\.(\/)?/g, "_$1");
			if (directory.length <= 1) directory = "";
			else folder = path$1.basename(directory);
		}
		if (loaderContext.resourceQuery && loaderContext.resourceQuery.length > 1) {
			query = loaderContext.resourceQuery;
			const hashIdx = query.indexOf("#");
			if (hashIdx >= 0) query = query.substr(0, hashIdx);
		}
		let url = filename;
		if (content) url = url.replace(/\[(?:([^[:\]]+):)?(?:hash|contenthash)(?::([a-z]+\d*(?:safe)?))?(?::(\d+))?\]/gi, (all, hashType, digestType, maxLength) => getHashDigest(content, hashType, digestType, parseInt(maxLength, 10)));
		url = url.replace(/\[ext\]/gi, () => ext).replace(/\[name\]/gi, () => basename).replace(/\[path\]/gi, () => directory).replace(/\[folder\]/gi, () => folder).replace(/\[query\]/gi, () => query);
		if (regExp && loaderContext.resourcePath) {
			const match = loaderContext.resourcePath.match(new RegExp(regExp));
			match && match.forEach((matched, i) => {
				url = url.replace(new RegExp("\\[" + i + "\\]", "ig"), matched);
			});
		}
		if (typeof loaderContext.options === "object" && typeof loaderContext.options.customInterpolateName === "function") url = loaderContext.options.customInterpolateName.call(loaderContext, url, name, options);
		return url;
	}
	module.exports = interpolateName;
}));
var require_generic_names = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var interpolateName = require_interpolateName();
	var path = __require("path");
	/**
	* @param  {string} pattern
	* @param  {object} options
	* @param  {string} options.context
	* @param  {string} options.hashPrefix
	* @return {function}
	*/
	module.exports = function createGenerator(pattern, options) {
		options = options || {};
		var context = options && typeof options.context === "string" ? options.context : processModule.cwd();
		var hashPrefix = options && typeof options.hashPrefix === "string" ? options.hashPrefix : "";
		/**
		* @param  {string} localName Usually a class name
		* @param  {string} filepath  Absolute path
		* @return {string}
		*/
		return function generate(localName, filepath) {
			var name = pattern.replace(/\[local\]/gi, localName);
			return interpolateName({ resourcePath: filepath }, name, {
				content: hashPrefix + path.relative(context, filepath).replace(/\\/g, "/") + "\0" + localName,
				context
			}).replace(/* @__PURE__ */ new RegExp("[^a-zA-Z0-9\\-_\xA0-￿]", "g"), "-").replace(/^((-?[0-9])|--)/, "_$1");
		};
	};
}));
var require_unesc = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = unesc;
	/**
	* 
	* @param {string} str 
	* @returns {[string, number]|undefined}
	*/
	function gobbleHex(str) {
		var lower = str.toLowerCase();
		var hex = "";
		var spaceTerminated = false;
		for (var i = 0; i < 6 && lower[i] !== void 0; i++) {
			var code = lower.charCodeAt(i);
			var valid = code >= 97 && code <= 102 || code >= 48 && code <= 57;
			spaceTerminated = code === 32;
			if (!valid) break;
			hex += lower[i];
		}
		if (hex.length === 0) return;
		var codePoint = parseInt(hex, 16);
		if (codePoint >= 55296 && codePoint <= 57343 || codePoint === 0 || codePoint > 1114111) return ["�", hex.length + (spaceTerminated ? 1 : 0)];
		return [String.fromCodePoint(codePoint), hex.length + (spaceTerminated ? 1 : 0)];
	}
	var CONTAINS_ESCAPE = /\\/;
	function unesc(str) {
		if (!CONTAINS_ESCAPE.test(str)) return str;
		var ret = "";
		for (var i = 0; i < str.length; i++) {
			if (str[i] === "\\") {
				var gobbled = gobbleHex(str.slice(i + 1, i + 7));
				if (gobbled !== void 0) {
					ret += gobbled[0];
					i += gobbled[1];
					continue;
				}
				if (str[i + 1] === "\\") {
					ret += "\\";
					i++;
					continue;
				}
				if (str.length === i + 1) ret += str[i];
				continue;
			}
			ret += str[i];
		}
		return ret;
	}
	module.exports = exports.default;
}));
var require_getProp = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = getProp;
	function getProp(obj) {
		for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) props[_key - 1] = arguments[_key];
		while (props.length > 0) {
			var prop = props.shift();
			if (!obj[prop]) return;
			obj = obj[prop];
		}
		return obj;
	}
	module.exports = exports.default;
}));
var require_ensureObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = ensureObject;
	function ensureObject(obj) {
		for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) props[_key - 1] = arguments[_key];
		while (props.length > 0) {
			var prop = props.shift();
			if (!obj[prop]) obj[prop] = {};
			obj = obj[prop];
		}
	}
	module.exports = exports.default;
}));
var require_stripComments = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = stripComments;
	function stripComments(str) {
		var s = "";
		var commentStart = str.indexOf("/*");
		var lastEnd = 0;
		while (commentStart >= 0) {
			s = s + str.slice(lastEnd, commentStart);
			var commentEnd = str.indexOf("*/", commentStart + 2);
			if (commentEnd < 0) return s;
			lastEnd = commentEnd + 2;
			commentStart = str.indexOf("/*", lastEnd);
		}
		s = s + str.slice(lastEnd);
		return s;
	}
	module.exports = exports.default;
}));
var require_util = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.__esModule = true;
	exports.unesc = exports.stripComments = exports.getProp = exports.ensureObject = void 0;
	exports.unesc = _interopRequireDefault(require_unesc())["default"];
	exports.getProp = _interopRequireDefault(require_getProp())["default"];
	exports.ensureObject = _interopRequireDefault(require_ensureObject())["default"];
	exports.stripComments = _interopRequireDefault(require_stripComments())["default"];
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
}));
var require_node$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = void 0;
	var _util = require_util();
	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		Object.defineProperty(Constructor, "prototype", { writable: false });
		return Constructor;
	}
	var cloneNode = function cloneNode(obj, parent) {
		if (typeof obj !== "object" || obj === null) return obj;
		var cloned = new obj.constructor();
		for (var i in obj) {
			if (!obj.hasOwnProperty(i)) continue;
			var value = obj[i];
			if (i === "parent" && typeof value === "object") {
				if (parent) cloned[i] = parent;
			} else if (value instanceof Array) cloned[i] = value.map(function(j) {
				return cloneNode(j, cloned);
			});
			else cloned[i] = cloneNode(value, cloned);
		}
		return cloned;
	};
	exports["default"] = /* @__PURE__ */ function() {
		function Node(opts) {
			if (opts === void 0) opts = {};
			Object.assign(this, opts);
			this.spaces = this.spaces || {};
			this.spaces.before = this.spaces.before || "";
			this.spaces.after = this.spaces.after || "";
		}
		var _proto = Node.prototype;
		_proto.remove = function remove() {
			if (this.parent) this.parent.removeChild(this);
			this.parent = void 0;
			return this;
		};
		_proto.replaceWith = function replaceWith() {
			if (this.parent) {
				for (var index in arguments) this.parent.insertBefore(this, arguments[index]);
				this.remove();
			}
			return this;
		};
		_proto.next = function next() {
			return this.parent.at(this.parent.index(this) + 1);
		};
		_proto.prev = function prev() {
			return this.parent.at(this.parent.index(this) - 1);
		};
		_proto.clone = function clone(overrides) {
			if (overrides === void 0) overrides = {};
			var cloned = cloneNode(this);
			for (var name in overrides) cloned[name] = overrides[name];
			return cloned;
		};
		_proto.appendToPropertyAndEscape = function appendToPropertyAndEscape(name, value, valueEscaped) {
			if (!this.raws) this.raws = {};
			var originalValue = this[name];
			var originalEscaped = this.raws[name];
			this[name] = originalValue + value;
			if (originalEscaped || valueEscaped !== value) this.raws[name] = (originalEscaped || originalValue) + valueEscaped;
			else delete this.raws[name];
		};
		_proto.setPropertyAndEscape = function setPropertyAndEscape(name, value, valueEscaped) {
			if (!this.raws) this.raws = {};
			this[name] = value;
			this.raws[name] = valueEscaped;
		};
		_proto.setPropertyWithoutEscape = function setPropertyWithoutEscape(name, value) {
			this[name] = value;
			if (this.raws) delete this.raws[name];
		};
		_proto.isAtPosition = function isAtPosition(line, column) {
			if (this.source && this.source.start && this.source.end) {
				if (this.source.start.line > line) return false;
				if (this.source.end.line < line) return false;
				if (this.source.start.line === line && this.source.start.column > column) return false;
				if (this.source.end.line === line && this.source.end.column < column) return false;
				return true;
			}
		};
		_proto.stringifyProperty = function stringifyProperty(name) {
			return this.raws && this.raws[name] || this[name];
		};
		_proto.valueToString = function valueToString() {
			return String(this.stringifyProperty("value"));
		};
		_proto.toString = function toString() {
			return [
				this.rawSpaceBefore,
				this.valueToString(),
				this.rawSpaceAfter
			].join("");
		};
		_createClass(Node, [{
			key: "rawSpaceBefore",
			get: function get() {
				var rawSpace = this.raws && this.raws.spaces && this.raws.spaces.before;
				if (rawSpace === void 0) rawSpace = this.spaces && this.spaces.before;
				return rawSpace || "";
			},
			set: function set(raw) {
				(0, _util.ensureObject)(this, "raws", "spaces");
				this.raws.spaces.before = raw;
			}
		}, {
			key: "rawSpaceAfter",
			get: function get() {
				var rawSpace = this.raws && this.raws.spaces && this.raws.spaces.after;
				if (rawSpace === void 0) rawSpace = this.spaces.after;
				return rawSpace || "";
			},
			set: function set(raw) {
				(0, _util.ensureObject)(this, "raws", "spaces");
				this.raws.spaces.after = raw;
			}
		}]);
		return Node;
	}();
	module.exports = exports.default;
}));
var require_types = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.__esModule = true;
	exports.UNIVERSAL = exports.TAG = exports.STRING = exports.SELECTOR = exports.ROOT = exports.PSEUDO = exports.NESTING = exports.ID = exports.COMMENT = exports.COMBINATOR = exports.CLASS = exports.ATTRIBUTE = void 0;
	exports.TAG = "tag";
	exports.STRING = "string";
	exports.SELECTOR = "selector";
	exports.ROOT = "root";
	exports.PSEUDO = "pseudo";
	exports.NESTING = "nesting";
	exports.ID = "id";
	exports.COMMENT = "comment";
	exports.COMBINATOR = "combinator";
	exports.CLASS = "class";
	exports.ATTRIBUTE = "attribute";
	exports.UNIVERSAL = "universal";
}));
var require_container = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = void 0;
	var _node = _interopRequireDefault(require_node$1());
	var types = _interopRequireWildcard(require_types());
	function _getRequireWildcardCache(nodeInterop) {
		if (typeof WeakMap !== "function") return null;
		var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
		var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
		return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
			return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
		})(nodeInterop);
	}
	function _interopRequireWildcard(obj, nodeInterop) {
		if (!nodeInterop && obj && obj.__esModule) return obj;
		if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { "default": obj };
		var cache = _getRequireWildcardCache(nodeInterop);
		if (cache && cache.has(obj)) return cache.get(obj);
		var newObj = {};
		var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
		for (var key in obj) if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
			var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
			if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
			else newObj[key] = obj[key];
		}
		newObj["default"] = obj;
		if (cache) cache.set(obj, newObj);
		return newObj;
	}
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
	function _createForOfIteratorHelperLoose(o, allowArrayLike) {
		var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
		if (it) return (it = it.call(o)).next.bind(it);
		if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
			if (it) o = it;
			var i = 0;
			return function() {
				if (i >= o.length) return { done: true };
				return {
					done: false,
					value: o[i++]
				};
			};
		}
		throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _unsupportedIterableToArray(o, minLen) {
		if (!o) return;
		if (typeof o === "string") return _arrayLikeToArray(o, minLen);
		var n = Object.prototype.toString.call(o).slice(8, -1);
		if (n === "Object" && o.constructor) n = o.constructor.name;
		if (n === "Map" || n === "Set") return Array.from(o);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}
	function _arrayLikeToArray(arr, len) {
		if (len == null || len > arr.length) len = arr.length;
		for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
		return arr2;
	}
	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		Object.defineProperty(Constructor, "prototype", { writable: false });
		return Constructor;
	}
	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		_setPrototypeOf(subClass, superClass);
	}
	function _setPrototypeOf(o, p) {
		_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};
		return _setPrototypeOf(o, p);
	}
	exports["default"] = /* @__PURE__ */ function(_Node) {
		_inheritsLoose(Container, _Node);
		function Container(opts) {
			var _this = _Node.call(this, opts) || this;
			if (!_this.nodes) _this.nodes = [];
			return _this;
		}
		var _proto = Container.prototype;
		_proto.append = function append(selector) {
			selector.parent = this;
			this.nodes.push(selector);
			return this;
		};
		_proto.prepend = function prepend(selector) {
			selector.parent = this;
			this.nodes.unshift(selector);
			for (var id in this.indexes) this.indexes[id]++;
			return this;
		};
		_proto.at = function at(index) {
			return this.nodes[index];
		};
		_proto.index = function index(child) {
			if (typeof child === "number") return child;
			return this.nodes.indexOf(child);
		};
		_proto.removeChild = function removeChild(child) {
			child = this.index(child);
			this.at(child).parent = void 0;
			this.nodes.splice(child, 1);
			var index;
			for (var id in this.indexes) {
				index = this.indexes[id];
				if (index >= child) this.indexes[id] = index - 1;
			}
			return this;
		};
		_proto.removeAll = function removeAll() {
			for (var _iterator = _createForOfIteratorHelperLoose(this.nodes), _step; !(_step = _iterator()).done;) {
				var node = _step.value;
				node.parent = void 0;
			}
			this.nodes = [];
			return this;
		};
		_proto.empty = function empty() {
			return this.removeAll();
		};
		_proto.insertAfter = function insertAfter(oldNode, newNode) {
			var _this$nodes;
			newNode.parent = this;
			var oldIndex = this.index(oldNode);
			var resetNode = [];
			for (var i = 2; i < arguments.length; i++) resetNode.push(arguments[i]);
			(_this$nodes = this.nodes).splice.apply(_this$nodes, [
				oldIndex + 1,
				0,
				newNode
			].concat(resetNode));
			newNode.parent = this;
			var index;
			for (var id in this.indexes) {
				index = this.indexes[id];
				if (oldIndex < index) this.indexes[id] = index + arguments.length - 1;
			}
			return this;
		};
		_proto.insertBefore = function insertBefore(oldNode, newNode) {
			var _this$nodes2;
			newNode.parent = this;
			var oldIndex = this.index(oldNode);
			var resetNode = [];
			for (var i = 2; i < arguments.length; i++) resetNode.push(arguments[i]);
			(_this$nodes2 = this.nodes).splice.apply(_this$nodes2, [
				oldIndex,
				0,
				newNode
			].concat(resetNode));
			newNode.parent = this;
			var index;
			for (var id in this.indexes) {
				index = this.indexes[id];
				if (index >= oldIndex) this.indexes[id] = index + arguments.length - 1;
			}
			return this;
		};
		_proto._findChildAtPosition = function _findChildAtPosition(line, col) {
			var found = void 0;
			this.each(function(node) {
				if (node.atPosition) {
					var foundChild = node.atPosition(line, col);
					if (foundChild) {
						found = foundChild;
						return false;
					}
				} else if (node.isAtPosition(line, col)) {
					found = node;
					return false;
				}
			});
			return found;
		};
		_proto.atPosition = function atPosition(line, col) {
			if (this.isAtPosition(line, col)) return this._findChildAtPosition(line, col) || this;
			else return;
		};
		_proto._inferEndPosition = function _inferEndPosition() {
			if (this.last && this.last.source && this.last.source.end) {
				this.source = this.source || {};
				this.source.end = this.source.end || {};
				Object.assign(this.source.end, this.last.source.end);
			}
		};
		_proto.each = function each(callback) {
			if (!this.lastEach) this.lastEach = 0;
			if (!this.indexes) this.indexes = {};
			this.lastEach++;
			var id = this.lastEach;
			this.indexes[id] = 0;
			if (!this.length) return;
			var index, result;
			while (this.indexes[id] < this.length) {
				index = this.indexes[id];
				result = callback(this.at(index), index);
				if (result === false) break;
				this.indexes[id] += 1;
			}
			delete this.indexes[id];
			if (result === false) return false;
		};
		_proto.walk = function walk(callback) {
			return this.each(function(node, i) {
				var result = callback(node, i);
				if (result !== false && node.length) result = node.walk(callback);
				if (result === false) return false;
			});
		};
		_proto.walkAttributes = function walkAttributes(callback) {
			var _this2 = this;
			return this.walk(function(selector) {
				if (selector.type === types.ATTRIBUTE) return callback.call(_this2, selector);
			});
		};
		_proto.walkClasses = function walkClasses(callback) {
			var _this3 = this;
			return this.walk(function(selector) {
				if (selector.type === types.CLASS) return callback.call(_this3, selector);
			});
		};
		_proto.walkCombinators = function walkCombinators(callback) {
			var _this4 = this;
			return this.walk(function(selector) {
				if (selector.type === types.COMBINATOR) return callback.call(_this4, selector);
			});
		};
		_proto.walkComments = function walkComments(callback) {
			var _this5 = this;
			return this.walk(function(selector) {
				if (selector.type === types.COMMENT) return callback.call(_this5, selector);
			});
		};
		_proto.walkIds = function walkIds(callback) {
			var _this6 = this;
			return this.walk(function(selector) {
				if (selector.type === types.ID) return callback.call(_this6, selector);
			});
		};
		_proto.walkNesting = function walkNesting(callback) {
			var _this7 = this;
			return this.walk(function(selector) {
				if (selector.type === types.NESTING) return callback.call(_this7, selector);
			});
		};
		_proto.walkPseudos = function walkPseudos(callback) {
			var _this8 = this;
			return this.walk(function(selector) {
				if (selector.type === types.PSEUDO) return callback.call(_this8, selector);
			});
		};
		_proto.walkTags = function walkTags(callback) {
			var _this9 = this;
			return this.walk(function(selector) {
				if (selector.type === types.TAG) return callback.call(_this9, selector);
			});
		};
		_proto.walkUniversals = function walkUniversals(callback) {
			var _this10 = this;
			return this.walk(function(selector) {
				if (selector.type === types.UNIVERSAL) return callback.call(_this10, selector);
			});
		};
		_proto.split = function split(callback) {
			var _this11 = this;
			var current = [];
			return this.reduce(function(memo, node, index) {
				var split = callback.call(_this11, node);
				current.push(node);
				if (split) {
					memo.push(current);
					current = [];
				} else if (index === _this11.length - 1) memo.push(current);
				return memo;
			}, []);
		};
		_proto.map = function map(callback) {
			return this.nodes.map(callback);
		};
		_proto.reduce = function reduce(callback, memo) {
			return this.nodes.reduce(callback, memo);
		};
		_proto.every = function every(callback) {
			return this.nodes.every(callback);
		};
		_proto.some = function some(callback) {
			return this.nodes.some(callback);
		};
		_proto.filter = function filter(callback) {
			return this.nodes.filter(callback);
		};
		_proto.sort = function sort(callback) {
			return this.nodes.sort(callback);
		};
		_proto.toString = function toString() {
			return this.map(String).join("");
		};
		_createClass(Container, [
			{
				key: "first",
				get: function get() {
					return this.at(0);
				}
			},
			{
				key: "last",
				get: function get() {
					return this.at(this.length - 1);
				}
			},
			{
				key: "length",
				get: function get() {
					return this.nodes.length;
				}
			}
		]);
		return Container;
	}(_node["default"]);
	module.exports = exports.default;
}));
var require_root = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = void 0;
	var _container = _interopRequireDefault(require_container());
	var _types = require_types();
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		Object.defineProperty(Constructor, "prototype", { writable: false });
		return Constructor;
	}
	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		_setPrototypeOf(subClass, superClass);
	}
	function _setPrototypeOf(o, p) {
		_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};
		return _setPrototypeOf(o, p);
	}
	exports["default"] = /* @__PURE__ */ function(_Container) {
		_inheritsLoose(Root, _Container);
		function Root(opts) {
			var _this = _Container.call(this, opts) || this;
			_this.type = _types.ROOT;
			return _this;
		}
		var _proto = Root.prototype;
		_proto.toString = function toString() {
			var str = this.reduce(function(memo, selector) {
				memo.push(String(selector));
				return memo;
			}, []).join(",");
			return this.trailingComma ? str + "," : str;
		};
		_proto.error = function error(message, options) {
			if (this._error) return this._error(message, options);
			else return new Error(message);
		};
		_createClass(Root, [{
			key: "errorGenerator",
			set: function set(handler) {
				this._error = handler;
			}
		}]);
		return Root;
	}(_container["default"]);
	module.exports = exports.default;
}));
var require_selector = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = void 0;
	var _container = _interopRequireDefault(require_container());
	var _types = require_types();
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		_setPrototypeOf(subClass, superClass);
	}
	function _setPrototypeOf(o, p) {
		_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};
		return _setPrototypeOf(o, p);
	}
	exports["default"] = /* @__PURE__ */ function(_Container) {
		_inheritsLoose(Selector, _Container);
		function Selector(opts) {
			var _this = _Container.call(this, opts) || this;
			_this.type = _types.SELECTOR;
			return _this;
		}
		return Selector;
	}(_container["default"]);
	module.exports = exports.default;
}));
/*! https://mths.be/cssesc v3.0.0 by @mathias */
var require_cssesc = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hasOwnProperty = {}.hasOwnProperty;
	var merge = function merge(options, defaults) {
		if (!options) return defaults;
		var result = {};
		for (var key in defaults) result[key] = hasOwnProperty.call(options, key) ? options[key] : defaults[key];
		return result;
	};
	var regexAnySingleEscape = /[ -,\.\/:-@\[-\^`\{-~]/;
	var regexSingleEscape = /[ -,\.\/:-@\[\]\^`\{-~]/;
	var regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;
	var cssesc = function cssesc(string, options) {
		options = merge(options, cssesc.options);
		if (options.quotes != "single" && options.quotes != "double") options.quotes = "single";
		var quote = options.quotes == "double" ? "\"" : "'";
		var isIdentifier = options.isIdentifier;
		var firstChar = string.charAt(0);
		var output = "";
		var counter = 0;
		var length = string.length;
		while (counter < length) {
			var character = string.charAt(counter++);
			var codePoint = character.charCodeAt();
			var value = void 0;
			if (codePoint < 32 || codePoint > 126) {
				if (codePoint >= 55296 && codePoint <= 56319 && counter < length) {
					var extra = string.charCodeAt(counter++);
					if ((extra & 64512) == 56320) codePoint = ((codePoint & 1023) << 10) + (extra & 1023) + 65536;
					else counter--;
				}
				value = "\\" + codePoint.toString(16).toUpperCase() + " ";
			} else if (options.escapeEverything) if (regexAnySingleEscape.test(character)) value = "\\" + character;
			else value = "\\" + codePoint.toString(16).toUpperCase() + " ";
			else if (/[\t\n\f\r\x0B]/.test(character)) value = "\\" + codePoint.toString(16).toUpperCase() + " ";
			else if (character == "\\" || !isIdentifier && (character == "\"" && quote == character || character == "'" && quote == character) || isIdentifier && regexSingleEscape.test(character)) value = "\\" + character;
			else value = character;
			output += value;
		}
		if (isIdentifier) {
			if (/^-[-\d]/.test(output)) output = "\\-" + output.slice(1);
			else if (/\d/.test(firstChar)) output = "\\3" + firstChar + " " + output.slice(1);
		}
		output = output.replace(regexExcessiveSpaces, function($0, $1, $2) {
			if ($1 && $1.length % 2) return $0;
			return ($1 || "") + $2;
		});
		if (!isIdentifier && options.wrap) return quote + output + quote;
		return output;
	};
	cssesc.options = {
		"escapeEverything": false,
		"isIdentifier": false,
		"quotes": "single",
		"wrap": false
	};
	cssesc.version = "3.0.0";
	module.exports = cssesc;
}));
var require_className = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = void 0;
	var _cssesc = _interopRequireDefault(require_cssesc());
	var _util = require_util();
	var _node = _interopRequireDefault(require_node$1());
	var _types = require_types();
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		Object.defineProperty(Constructor, "prototype", { writable: false });
		return Constructor;
	}
	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		_setPrototypeOf(subClass, superClass);
	}
	function _setPrototypeOf(o, p) {
		_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};
		return _setPrototypeOf(o, p);
	}
	exports["default"] = /* @__PURE__ */ function(_Node) {
		_inheritsLoose(ClassName, _Node);
		function ClassName(opts) {
			var _this = _Node.call(this, opts) || this;
			_this.type = _types.CLASS;
			_this._constructed = true;
			return _this;
		}
		var _proto = ClassName.prototype;
		_proto.valueToString = function valueToString() {
			return "." + _Node.prototype.valueToString.call(this);
		};
		_createClass(ClassName, [{
			key: "value",
			get: function get() {
				return this._value;
			},
			set: function set(v) {
				if (this._constructed) {
					var escaped = (0, _cssesc["default"])(v, { isIdentifier: true });
					if (escaped !== v) {
						(0, _util.ensureObject)(this, "raws");
						this.raws.value = escaped;
					} else if (this.raws) delete this.raws.value;
				}
				this._value = v;
			}
		}]);
		return ClassName;
	}(_node["default"]);
	module.exports = exports.default;
}));
var require_comment = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = void 0;
	var _node = _interopRequireDefault(require_node$1());
	var _types = require_types();
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		_setPrototypeOf(subClass, superClass);
	}
	function _setPrototypeOf(o, p) {
		_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};
		return _setPrototypeOf(o, p);
	}
	exports["default"] = /* @__PURE__ */ function(_Node) {
		_inheritsLoose(Comment, _Node);
		function Comment(opts) {
			var _this = _Node.call(this, opts) || this;
			_this.type = _types.COMMENT;
			return _this;
		}
		return Comment;
	}(_node["default"]);
	module.exports = exports.default;
}));
var require_id = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = void 0;
	var _node = _interopRequireDefault(require_node$1());
	var _types = require_types();
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		_setPrototypeOf(subClass, superClass);
	}
	function _setPrototypeOf(o, p) {
		_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};
		return _setPrototypeOf(o, p);
	}
	exports["default"] = /* @__PURE__ */ function(_Node) {
		_inheritsLoose(ID, _Node);
		function ID(opts) {
			var _this = _Node.call(this, opts) || this;
			_this.type = _types.ID;
			return _this;
		}
		var _proto = ID.prototype;
		_proto.valueToString = function valueToString() {
			return "#" + _Node.prototype.valueToString.call(this);
		};
		return ID;
	}(_node["default"]);
	module.exports = exports.default;
}));
var require_namespace = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = void 0;
	var _cssesc = _interopRequireDefault(require_cssesc());
	var _util = require_util();
	var _node = _interopRequireDefault(require_node$1());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		Object.defineProperty(Constructor, "prototype", { writable: false });
		return Constructor;
	}
	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		_setPrototypeOf(subClass, superClass);
	}
	function _setPrototypeOf(o, p) {
		_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};
		return _setPrototypeOf(o, p);
	}
	exports["default"] = /* @__PURE__ */ function(_Node) {
		_inheritsLoose(Namespace, _Node);
		function Namespace() {
			return _Node.apply(this, arguments) || this;
		}
		var _proto = Namespace.prototype;
		_proto.qualifiedName = function qualifiedName(value) {
			if (this.namespace) return this.namespaceString + "|" + value;
			else return value;
		};
		_proto.valueToString = function valueToString() {
			return this.qualifiedName(_Node.prototype.valueToString.call(this));
		};
		_createClass(Namespace, [
			{
				key: "namespace",
				get: function get() {
					return this._namespace;
				},
				set: function set(namespace) {
					if (namespace === true || namespace === "*" || namespace === "&") {
						this._namespace = namespace;
						if (this.raws) delete this.raws.namespace;
						return;
					}
					var escaped = (0, _cssesc["default"])(namespace, { isIdentifier: true });
					this._namespace = namespace;
					if (escaped !== namespace) {
						(0, _util.ensureObject)(this, "raws");
						this.raws.namespace = escaped;
					} else if (this.raws) delete this.raws.namespace;
				}
			},
			{
				key: "ns",
				get: function get() {
					return this._namespace;
				},
				set: function set(namespace) {
					this.namespace = namespace;
				}
			},
			{
				key: "namespaceString",
				get: function get() {
					if (this.namespace) {
						var ns = this.stringifyProperty("namespace");
						if (ns === true) return "";
						else return ns;
					} else return "";
				}
			}
		]);
		return Namespace;
	}(_node["default"]);
	module.exports = exports.default;
}));
var require_tag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = void 0;
	var _namespace = _interopRequireDefault(require_namespace());
	var _types = require_types();
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		_setPrototypeOf(subClass, superClass);
	}
	function _setPrototypeOf(o, p) {
		_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};
		return _setPrototypeOf(o, p);
	}
	exports["default"] = /* @__PURE__ */ function(_Namespace) {
		_inheritsLoose(Tag, _Namespace);
		function Tag(opts) {
			var _this = _Namespace.call(this, opts) || this;
			_this.type = _types.TAG;
			return _this;
		}
		return Tag;
	}(_namespace["default"]);
	module.exports = exports.default;
}));
var require_string = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = void 0;
	var _node = _interopRequireDefault(require_node$1());
	var _types = require_types();
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		_setPrototypeOf(subClass, superClass);
	}
	function _setPrototypeOf(o, p) {
		_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};
		return _setPrototypeOf(o, p);
	}
	exports["default"] = /* @__PURE__ */ function(_Node) {
		_inheritsLoose(String, _Node);
		function String(opts) {
			var _this = _Node.call(this, opts) || this;
			_this.type = _types.STRING;
			return _this;
		}
		return String;
	}(_node["default"]);
	module.exports = exports.default;
}));
var require_pseudo = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = void 0;
	var _container = _interopRequireDefault(require_container());
	var _types = require_types();
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		_setPrototypeOf(subClass, superClass);
	}
	function _setPrototypeOf(o, p) {
		_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};
		return _setPrototypeOf(o, p);
	}
	exports["default"] = /* @__PURE__ */ function(_Container) {
		_inheritsLoose(Pseudo, _Container);
		function Pseudo(opts) {
			var _this = _Container.call(this, opts) || this;
			_this.type = _types.PSEUDO;
			return _this;
		}
		var _proto = Pseudo.prototype;
		_proto.toString = function toString() {
			var params = this.length ? "(" + this.map(String).join(",") + ")" : "";
			return [
				this.rawSpaceBefore,
				this.stringifyProperty("value"),
				params,
				this.rawSpaceAfter
			].join("");
		};
		return Pseudo;
	}(_container["default"]);
	module.exports = exports.default;
}));
var require_node = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* For Node.js, simply re-export the core `util.deprecate` function.
	*/
	module.exports = __require("util").deprecate;
}));
var require_attribute = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.__esModule = true;
	exports["default"] = void 0;
	exports.unescapeValue = unescapeValue;
	var _cssesc = _interopRequireDefault(require_cssesc());
	var _unesc = _interopRequireDefault(require_unesc());
	var _namespace = _interopRequireDefault(require_namespace());
	var _types = require_types();
	var _CSSESC_QUOTE_OPTIONS;
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		Object.defineProperty(Constructor, "prototype", { writable: false });
		return Constructor;
	}
	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		_setPrototypeOf(subClass, superClass);
	}
	function _setPrototypeOf(o, p) {
		_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};
		return _setPrototypeOf(o, p);
	}
	var deprecate = require_node();
	var WRAPPED_IN_QUOTES = /^('|")([^]*)\1$/;
	var warnOfDeprecatedValueAssignment = deprecate(function() {}, "Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead.");
	var warnOfDeprecatedQuotedAssignment = deprecate(function() {}, "Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead.");
	var warnOfDeprecatedConstructor = deprecate(function() {}, "Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");
	function unescapeValue(value) {
		var deprecatedUsage = false;
		var quoteMark = null;
		var unescaped = value;
		var m = unescaped.match(WRAPPED_IN_QUOTES);
		if (m) {
			quoteMark = m[1];
			unescaped = m[2];
		}
		unescaped = (0, _unesc["default"])(unescaped);
		if (unescaped !== value) deprecatedUsage = true;
		return {
			deprecatedUsage,
			unescaped,
			quoteMark
		};
	}
	function handleDeprecatedContructorOpts(opts) {
		if (opts.quoteMark !== void 0) return opts;
		if (opts.value === void 0) return opts;
		warnOfDeprecatedConstructor();
		var _unescapeValue = unescapeValue(opts.value), quoteMark = _unescapeValue.quoteMark, unescaped = _unescapeValue.unescaped;
		if (!opts.raws) opts.raws = {};
		if (opts.raws.value === void 0) opts.raws.value = opts.value;
		opts.value = unescaped;
		opts.quoteMark = quoteMark;
		return opts;
	}
	var Attribute = /*#__PURE__*/ function(_Namespace) {
		_inheritsLoose(Attribute, _Namespace);
		function Attribute(opts) {
			var _this;
			if (opts === void 0) opts = {};
			_this = _Namespace.call(this, handleDeprecatedContructorOpts(opts)) || this;
			_this.type = _types.ATTRIBUTE;
			_this.raws = _this.raws || {};
			Object.defineProperty(_this.raws, "unquoted", {
				get: deprecate(function() {
					return _this.value;
				}, "attr.raws.unquoted is deprecated. Call attr.value instead."),
				set: deprecate(function() {
					return _this.value;
				}, "Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")
			});
			_this._constructed = true;
			return _this;
		}
		/**
		* Returns the Attribute's value quoted such that it would be legal to use
		* in the value of a css file. The original value's quotation setting
		* used for stringification is left unchanged. See `setValue(value, options)`
		* if you want to control the quote settings of a new value for the attribute.
		*
		* You can also change the quotation used for the current value by setting quoteMark.
		*
		* Options:
		*   * quoteMark {'"' | "'" | null} - Use this value to quote the value. If this
		*     option is not set, the original value for quoteMark will be used. If
		*     indeterminate, a double quote is used. The legal values are:
		*     * `null` - the value will be unquoted and characters will be escaped as necessary.
		*     * `'` - the value will be quoted with a single quote and single quotes are escaped.
		*     * `"` - the value will be quoted with a double quote and double quotes are escaped.
		*   * preferCurrentQuoteMark {boolean} - if true, prefer the source quote mark
		*     over the quoteMark option value.
		*   * smart {boolean} - if true, will select a quote mark based on the value
		*     and the other options specified here. See the `smartQuoteMark()`
		*     method.
		**/
		var _proto = Attribute.prototype;
		_proto.getQuotedValue = function getQuotedValue(options) {
			if (options === void 0) options = {};
			var cssescopts = CSSESC_QUOTE_OPTIONS[this._determineQuoteMark(options)];
			return (0, _cssesc["default"])(this._value, cssescopts);
		};
		_proto._determineQuoteMark = function _determineQuoteMark(options) {
			return options.smart ? this.smartQuoteMark(options) : this.preferredQuoteMark(options);
		};
		_proto.setValue = function setValue(value, options) {
			if (options === void 0) options = {};
			this._value = value;
			this._quoteMark = this._determineQuoteMark(options);
			this._syncRawValue();
		};
		_proto.smartQuoteMark = function smartQuoteMark(options) {
			var v = this.value;
			var numSingleQuotes = v.replace(/[^']/g, "").length;
			var numDoubleQuotes = v.replace(/[^"]/g, "").length;
			if (numSingleQuotes + numDoubleQuotes === 0) {
				var escaped = (0, _cssesc["default"])(v, { isIdentifier: true });
				if (escaped === v) return Attribute.NO_QUOTE;
				else {
					var pref = this.preferredQuoteMark(options);
					if (pref === Attribute.NO_QUOTE) {
						var quote = this.quoteMark || options.quoteMark || Attribute.DOUBLE_QUOTE;
						if ((0, _cssesc["default"])(v, CSSESC_QUOTE_OPTIONS[quote]).length < escaped.length) return quote;
					}
					return pref;
				}
			} else if (numDoubleQuotes === numSingleQuotes) return this.preferredQuoteMark(options);
			else if (numDoubleQuotes < numSingleQuotes) return Attribute.DOUBLE_QUOTE;
			else return Attribute.SINGLE_QUOTE;
		};
		_proto.preferredQuoteMark = function preferredQuoteMark(options) {
			var quoteMark = options.preferCurrentQuoteMark ? this.quoteMark : options.quoteMark;
			if (quoteMark === void 0) quoteMark = options.preferCurrentQuoteMark ? options.quoteMark : this.quoteMark;
			if (quoteMark === void 0) quoteMark = Attribute.DOUBLE_QUOTE;
			return quoteMark;
		};
		_proto._syncRawValue = function _syncRawValue() {
			var rawValue = (0, _cssesc["default"])(this._value, CSSESC_QUOTE_OPTIONS[this.quoteMark]);
			if (rawValue === this._value) {
				if (this.raws) delete this.raws.value;
			} else this.raws.value = rawValue;
		};
		_proto._handleEscapes = function _handleEscapes(prop, value) {
			if (this._constructed) {
				var escaped = (0, _cssesc["default"])(value, { isIdentifier: true });
				if (escaped !== value) this.raws[prop] = escaped;
				else delete this.raws[prop];
			}
		};
		_proto._spacesFor = function _spacesFor(name) {
			var attrSpaces = {
				before: "",
				after: ""
			};
			var spaces = this.spaces[name] || {};
			var rawSpaces = this.raws.spaces && this.raws.spaces[name] || {};
			return Object.assign(attrSpaces, spaces, rawSpaces);
		};
		_proto._stringFor = function _stringFor(name, spaceName, concat) {
			if (spaceName === void 0) spaceName = name;
			if (concat === void 0) concat = defaultAttrConcat;
			var attrSpaces = this._spacesFor(spaceName);
			return concat(this.stringifyProperty(name), attrSpaces);
		};
		_proto.offsetOf = function offsetOf(name) {
			var count = 1;
			var attributeSpaces = this._spacesFor("attribute");
			count += attributeSpaces.before.length;
			if (name === "namespace" || name === "ns") return this.namespace ? count : -1;
			if (name === "attributeNS") return count;
			count += this.namespaceString.length;
			if (this.namespace) count += 1;
			if (name === "attribute") return count;
			count += this.stringifyProperty("attribute").length;
			count += attributeSpaces.after.length;
			var operatorSpaces = this._spacesFor("operator");
			count += operatorSpaces.before.length;
			var operator = this.stringifyProperty("operator");
			if (name === "operator") return operator ? count : -1;
			count += operator.length;
			count += operatorSpaces.after.length;
			var valueSpaces = this._spacesFor("value");
			count += valueSpaces.before.length;
			var value = this.stringifyProperty("value");
			if (name === "value") return value ? count : -1;
			count += value.length;
			count += valueSpaces.after.length;
			var insensitiveSpaces = this._spacesFor("insensitive");
			count += insensitiveSpaces.before.length;
			if (name === "insensitive") return this.insensitive ? count : -1;
			return -1;
		};
		_proto.toString = function toString() {
			var _this2 = this;
			var selector = [this.rawSpaceBefore, "["];
			selector.push(this._stringFor("qualifiedAttribute", "attribute"));
			if (this.operator && (this.value || this.value === "")) {
				selector.push(this._stringFor("operator"));
				selector.push(this._stringFor("value"));
				selector.push(this._stringFor("insensitiveFlag", "insensitive", function(attrValue, attrSpaces) {
					if (attrValue.length > 0 && !_this2.quoted && attrSpaces.before.length === 0 && !(_this2.spaces.value && _this2.spaces.value.after)) attrSpaces.before = " ";
					return defaultAttrConcat(attrValue, attrSpaces);
				}));
			}
			selector.push("]");
			selector.push(this.rawSpaceAfter);
			return selector.join("");
		};
		_createClass(Attribute, [
			{
				key: "quoted",
				get: function get() {
					var qm = this.quoteMark;
					return qm === "'" || qm === "\"";
				},
				set: function set(value) {
					warnOfDeprecatedQuotedAssignment();
				}
			},
			{
				key: "quoteMark",
				get: function get() {
					return this._quoteMark;
				},
				set: function set(quoteMark) {
					if (!this._constructed) {
						this._quoteMark = quoteMark;
						return;
					}
					if (this._quoteMark !== quoteMark) {
						this._quoteMark = quoteMark;
						this._syncRawValue();
					}
				}
			},
			{
				key: "qualifiedAttribute",
				get: function get() {
					return this.qualifiedName(this.raws.attribute || this.attribute);
				}
			},
			{
				key: "insensitiveFlag",
				get: function get() {
					return this.insensitive ? "i" : "";
				}
			},
			{
				key: "value",
				get: function get() {
					return this._value;
				},
				set: 
				/**
				* Before 3.0, the value had to be set to an escaped value including any wrapped
				* quote marks. In 3.0, the semantics of `Attribute.value` changed so that the value
				* is unescaped during parsing and any quote marks are removed.
				*
				* Because the ambiguity of this semantic change, if you set `attr.value = newValue`,
				* a deprecation warning is raised when the new value contains any characters that would
				* require escaping (including if it contains wrapped quotes).
				*
				* Instead, you should call `attr.setValue(newValue, opts)` and pass options that describe
				* how the new value is quoted.
				*/
				function set(v) {
					if (this._constructed) {
						var _unescapeValue2 = unescapeValue(v), deprecatedUsage = _unescapeValue2.deprecatedUsage, unescaped = _unescapeValue2.unescaped, quoteMark = _unescapeValue2.quoteMark;
						if (deprecatedUsage) warnOfDeprecatedValueAssignment();
						if (unescaped === this._value && quoteMark === this._quoteMark) return;
						this._value = unescaped;
						this._quoteMark = quoteMark;
						this._syncRawValue();
					} else this._value = v;
				}
			},
			{
				key: "insensitive",
				get: function get() {
					return this._insensitive;
				},
				set: function set(insensitive) {
					if (!insensitive) {
						this._insensitive = false;
						if (this.raws && (this.raws.insensitiveFlag === "I" || this.raws.insensitiveFlag === "i")) this.raws.insensitiveFlag = void 0;
					}
					this._insensitive = insensitive;
				}
			},
			{
				key: "attribute",
				get: function get() {
					return this._attribute;
				},
				set: function set(name) {
					this._handleEscapes("attribute", name);
					this._attribute = name;
				}
			}
		]);
		return Attribute;
	}(_namespace["default"]);
	exports["default"] = Attribute;
	Attribute.NO_QUOTE = null;
	Attribute.SINGLE_QUOTE = "'";
	Attribute.DOUBLE_QUOTE = "\"";
	var CSSESC_QUOTE_OPTIONS = (_CSSESC_QUOTE_OPTIONS = {
		"'": {
			quotes: "single",
			wrap: true
		},
		"\"": {
			quotes: "double",
			wrap: true
		}
	}, _CSSESC_QUOTE_OPTIONS[null] = { isIdentifier: true }, _CSSESC_QUOTE_OPTIONS);
	function defaultAttrConcat(attrValue, attrSpaces) {
		return "" + attrSpaces.before + attrValue + attrSpaces.after;
	}
}));
var require_universal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = void 0;
	var _namespace = _interopRequireDefault(require_namespace());
	var _types = require_types();
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		_setPrototypeOf(subClass, superClass);
	}
	function _setPrototypeOf(o, p) {
		_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};
		return _setPrototypeOf(o, p);
	}
	exports["default"] = /* @__PURE__ */ function(_Namespace) {
		_inheritsLoose(Universal, _Namespace);
		function Universal(opts) {
			var _this = _Namespace.call(this, opts) || this;
			_this.type = _types.UNIVERSAL;
			_this.value = "*";
			return _this;
		}
		return Universal;
	}(_namespace["default"]);
	module.exports = exports.default;
}));
var require_combinator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = void 0;
	var _node = _interopRequireDefault(require_node$1());
	var _types = require_types();
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		_setPrototypeOf(subClass, superClass);
	}
	function _setPrototypeOf(o, p) {
		_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};
		return _setPrototypeOf(o, p);
	}
	exports["default"] = /* @__PURE__ */ function(_Node) {
		_inheritsLoose(Combinator, _Node);
		function Combinator(opts) {
			var _this = _Node.call(this, opts) || this;
			_this.type = _types.COMBINATOR;
			return _this;
		}
		return Combinator;
	}(_node["default"]);
	module.exports = exports.default;
}));
var require_nesting = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = void 0;
	var _node = _interopRequireDefault(require_node$1());
	var _types = require_types();
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
	function _inheritsLoose(subClass, superClass) {
		subClass.prototype = Object.create(superClass.prototype);
		subClass.prototype.constructor = subClass;
		_setPrototypeOf(subClass, superClass);
	}
	function _setPrototypeOf(o, p) {
		_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
			o.__proto__ = p;
			return o;
		};
		return _setPrototypeOf(o, p);
	}
	exports["default"] = /* @__PURE__ */ function(_Node) {
		_inheritsLoose(Nesting, _Node);
		function Nesting(opts) {
			var _this = _Node.call(this, opts) || this;
			_this.type = _types.NESTING;
			_this.value = "&";
			return _this;
		}
		return Nesting;
	}(_node["default"]);
	module.exports = exports.default;
}));
var require_sortAscending = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = sortAscending;
	function sortAscending(list) {
		return list.sort(function(a, b) {
			return a - b;
		});
	}
	module.exports = exports.default;
}));
var require_tokenTypes = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.__esModule = true;
	exports.word = exports.tilde = exports.tab = exports.str = exports.space = exports.slash = exports.singleQuote = exports.semicolon = exports.plus = exports.pipe = exports.openSquare = exports.openParenthesis = exports.newline = exports.greaterThan = exports.feed = exports.equals = exports.doubleQuote = exports.dollar = exports.cr = exports.comment = exports.comma = exports.combinator = exports.colon = exports.closeSquare = exports.closeParenthesis = exports.caret = exports.bang = exports.backslash = exports.at = exports.asterisk = exports.ampersand = void 0;
	exports.ampersand = 38;
	exports.asterisk = 42;
	exports.at = 64;
	exports.comma = 44;
	exports.colon = 58;
	exports.semicolon = 59;
	exports.openParenthesis = 40;
	exports.closeParenthesis = 41;
	exports.openSquare = 91;
	exports.closeSquare = 93;
	exports.dollar = 36;
	exports.tilde = 126;
	exports.caret = 94;
	exports.plus = 43;
	exports.equals = 61;
	exports.pipe = 124;
	exports.greaterThan = 62;
	exports.space = 32;
	var singleQuote = 39;
	exports.singleQuote = singleQuote;
	exports.doubleQuote = 34;
	exports.slash = 47;
	exports.bang = 33;
	exports.backslash = 92;
	exports.cr = 13;
	exports.feed = 12;
	exports.newline = 10;
	exports.tab = 9;
	exports.str = singleQuote;
	exports.comment = -1;
	exports.word = -2;
	exports.combinator = -3;
}));
var require_tokenize = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.__esModule = true;
	exports.FIELDS = void 0;
	exports["default"] = tokenize;
	var t = _interopRequireWildcard(require_tokenTypes());
	var _unescapable;
	var _wordDelimiters;
	function _getRequireWildcardCache(nodeInterop) {
		if (typeof WeakMap !== "function") return null;
		var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
		var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
		return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
			return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
		})(nodeInterop);
	}
	function _interopRequireWildcard(obj, nodeInterop) {
		if (!nodeInterop && obj && obj.__esModule) return obj;
		if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { "default": obj };
		var cache = _getRequireWildcardCache(nodeInterop);
		if (cache && cache.has(obj)) return cache.get(obj);
		var newObj = {};
		var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
		for (var key in obj) if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
			var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
			if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
			else newObj[key] = obj[key];
		}
		newObj["default"] = obj;
		if (cache) cache.set(obj, newObj);
		return newObj;
	}
	var unescapable = (_unescapable = {}, _unescapable[t.tab] = true, _unescapable[t.newline] = true, _unescapable[t.cr] = true, _unescapable[t.feed] = true, _unescapable);
	var wordDelimiters = (_wordDelimiters = {}, _wordDelimiters[t.space] = true, _wordDelimiters[t.tab] = true, _wordDelimiters[t.newline] = true, _wordDelimiters[t.cr] = true, _wordDelimiters[t.feed] = true, _wordDelimiters[t.ampersand] = true, _wordDelimiters[t.asterisk] = true, _wordDelimiters[t.bang] = true, _wordDelimiters[t.comma] = true, _wordDelimiters[t.colon] = true, _wordDelimiters[t.semicolon] = true, _wordDelimiters[t.openParenthesis] = true, _wordDelimiters[t.closeParenthesis] = true, _wordDelimiters[t.openSquare] = true, _wordDelimiters[t.closeSquare] = true, _wordDelimiters[t.singleQuote] = true, _wordDelimiters[t.doubleQuote] = true, _wordDelimiters[t.plus] = true, _wordDelimiters[t.pipe] = true, _wordDelimiters[t.tilde] = true, _wordDelimiters[t.greaterThan] = true, _wordDelimiters[t.equals] = true, _wordDelimiters[t.dollar] = true, _wordDelimiters[t.caret] = true, _wordDelimiters[t.slash] = true, _wordDelimiters);
	var hex = {};
	var hexChars = "0123456789abcdefABCDEF";
	for (var i = 0; i < hexChars.length; i++) hex[hexChars.charCodeAt(i)] = true;
	/**
	*  Returns the last index of the bar css word
	* @param {string} css The string in which the word begins
	* @param {number} start The index into the string where word's first letter occurs
	*/
	function consumeWord(css, start) {
		var next = start;
		var code;
		do {
			code = css.charCodeAt(next);
			if (wordDelimiters[code]) return next - 1;
			else if (code === t.backslash) next = consumeEscape(css, next) + 1;
			else next++;
		} while (next < css.length);
		return next - 1;
	}
	/**
	*  Returns the last index of the escape sequence
	* @param {string} css The string in which the sequence begins
	* @param {number} start The index into the string where escape character (`\`) occurs.
	*/
	function consumeEscape(css, start) {
		var next = start;
		var code = css.charCodeAt(next + 1);
		if (unescapable[code]) {} else if (hex[code]) {
			var hexDigits = 0;
			do {
				next++;
				hexDigits++;
				code = css.charCodeAt(next + 1);
			} while (hex[code] && hexDigits < 6);
			if (hexDigits < 6 && code === t.space) next++;
		} else next++;
		return next;
	}
	exports.FIELDS = {
		TYPE: 0,
		START_LINE: 1,
		START_COL: 2,
		END_LINE: 3,
		END_COL: 4,
		START_POS: 5,
		END_POS: 6
	};
	function tokenize(input) {
		var tokens = [];
		var css = input.css.valueOf();
		var length = css.length;
		var offset = -1;
		var line = 1;
		var start = 0;
		var end = 0;
		var code, content, endColumn, endLine, escaped, escapePos, last, lines, next, nextLine, nextOffset, quote, tokenType;
		function unclosed(what, fix) {
			if (input.safe) {
				css += fix;
				next = css.length - 1;
			} else throw input.error("Unclosed " + what, line, start - offset, start);
		}
		while (start < length) {
			code = css.charCodeAt(start);
			if (code === t.newline) {
				offset = start;
				line += 1;
			}
			switch (code) {
				case t.space:
				case t.tab:
				case t.newline:
				case t.cr:
				case t.feed:
					next = start;
					do {
						next += 1;
						code = css.charCodeAt(next);
						if (code === t.newline) {
							offset = next;
							line += 1;
						}
					} while (code === t.space || code === t.newline || code === t.tab || code === t.cr || code === t.feed);
					tokenType = t.space;
					endLine = line;
					endColumn = next - offset - 1;
					end = next;
					break;
				case t.plus:
				case t.greaterThan:
				case t.tilde:
				case t.pipe:
					next = start;
					do {
						next += 1;
						code = css.charCodeAt(next);
					} while (code === t.plus || code === t.greaterThan || code === t.tilde || code === t.pipe);
					tokenType = t.combinator;
					endLine = line;
					endColumn = start - offset;
					end = next;
					break;
				case t.asterisk:
				case t.ampersand:
				case t.bang:
				case t.comma:
				case t.equals:
				case t.dollar:
				case t.caret:
				case t.openSquare:
				case t.closeSquare:
				case t.colon:
				case t.semicolon:
				case t.openParenthesis:
				case t.closeParenthesis:
					next = start;
					tokenType = code;
					endLine = line;
					endColumn = start - offset;
					end = next + 1;
					break;
				case t.singleQuote:
				case t.doubleQuote:
					quote = code === t.singleQuote ? "'" : "\"";
					next = start;
					do {
						escaped = false;
						next = css.indexOf(quote, next + 1);
						if (next === -1) unclosed("quote", quote);
						escapePos = next;
						while (css.charCodeAt(escapePos - 1) === t.backslash) {
							escapePos -= 1;
							escaped = !escaped;
						}
					} while (escaped);
					tokenType = t.str;
					endLine = line;
					endColumn = start - offset;
					end = next + 1;
					break;
				default:
					if (code === t.slash && css.charCodeAt(start + 1) === t.asterisk) {
						next = css.indexOf("*/", start + 2) + 1;
						if (next === 0) unclosed("comment", "*/");
						content = css.slice(start, next + 1);
						lines = content.split("\n");
						last = lines.length - 1;
						if (last > 0) {
							nextLine = line + last;
							nextOffset = next - lines[last].length;
						} else {
							nextLine = line;
							nextOffset = offset;
						}
						tokenType = t.comment;
						line = nextLine;
						endLine = nextLine;
						endColumn = next - nextOffset;
					} else if (code === t.slash) {
						next = start;
						tokenType = code;
						endLine = line;
						endColumn = start - offset;
						end = next + 1;
					} else {
						next = consumeWord(css, start);
						tokenType = t.word;
						endLine = line;
						endColumn = next - offset;
					}
					end = next + 1;
			}
			tokens.push([
				tokenType,
				line,
				start - offset,
				endLine,
				endColumn,
				start,
				end
			]);
			if (nextOffset) {
				offset = nextOffset;
				nextOffset = null;
			}
			start = end;
		}
		return tokens;
	}
}));
var require_parser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = void 0;
	var _root = _interopRequireDefault(require_root());
	var _selector = _interopRequireDefault(require_selector());
	var _className = _interopRequireDefault(require_className());
	var _comment = _interopRequireDefault(require_comment());
	var _id = _interopRequireDefault(require_id());
	var _tag = _interopRequireDefault(require_tag());
	var _string = _interopRequireDefault(require_string());
	var _pseudo = _interopRequireDefault(require_pseudo());
	var _attribute = _interopRequireWildcard(require_attribute());
	var _universal = _interopRequireDefault(require_universal());
	var _combinator = _interopRequireDefault(require_combinator());
	var _nesting = _interopRequireDefault(require_nesting());
	var _sortAscending = _interopRequireDefault(require_sortAscending());
	var _tokenize = _interopRequireWildcard(require_tokenize());
	var tokens = _interopRequireWildcard(require_tokenTypes());
	var types = _interopRequireWildcard(require_types());
	var _util = require_util();
	var _WHITESPACE_TOKENS;
	var _Object$assign;
	function _getRequireWildcardCache(nodeInterop) {
		if (typeof WeakMap !== "function") return null;
		var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
		var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
		return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
			return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
		})(nodeInterop);
	}
	function _interopRequireWildcard(obj, nodeInterop) {
		if (!nodeInterop && obj && obj.__esModule) return obj;
		if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { "default": obj };
		var cache = _getRequireWildcardCache(nodeInterop);
		if (cache && cache.has(obj)) return cache.get(obj);
		var newObj = {};
		var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
		for (var key in obj) if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
			var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
			if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
			else newObj[key] = obj[key];
		}
		newObj["default"] = obj;
		if (cache) cache.set(obj, newObj);
		return newObj;
	}
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		Object.defineProperty(Constructor, "prototype", { writable: false });
		return Constructor;
	}
	var WHITESPACE_TOKENS = (_WHITESPACE_TOKENS = {}, _WHITESPACE_TOKENS[tokens.space] = true, _WHITESPACE_TOKENS[tokens.cr] = true, _WHITESPACE_TOKENS[tokens.feed] = true, _WHITESPACE_TOKENS[tokens.newline] = true, _WHITESPACE_TOKENS[tokens.tab] = true, _WHITESPACE_TOKENS);
	var WHITESPACE_EQUIV_TOKENS = Object.assign({}, WHITESPACE_TOKENS, (_Object$assign = {}, _Object$assign[tokens.comment] = true, _Object$assign));
	function tokenStart(token) {
		return {
			line: token[_tokenize.FIELDS.START_LINE],
			column: token[_tokenize.FIELDS.START_COL]
		};
	}
	function tokenEnd(token) {
		return {
			line: token[_tokenize.FIELDS.END_LINE],
			column: token[_tokenize.FIELDS.END_COL]
		};
	}
	function getSource(startLine, startColumn, endLine, endColumn) {
		return {
			start: {
				line: startLine,
				column: startColumn
			},
			end: {
				line: endLine,
				column: endColumn
			}
		};
	}
	function getTokenSource(token) {
		return getSource(token[_tokenize.FIELDS.START_LINE], token[_tokenize.FIELDS.START_COL], token[_tokenize.FIELDS.END_LINE], token[_tokenize.FIELDS.END_COL]);
	}
	function getTokenSourceSpan(startToken, endToken) {
		if (!startToken) return;
		return getSource(startToken[_tokenize.FIELDS.START_LINE], startToken[_tokenize.FIELDS.START_COL], endToken[_tokenize.FIELDS.END_LINE], endToken[_tokenize.FIELDS.END_COL]);
	}
	function unescapeProp(node, prop) {
		var value = node[prop];
		if (typeof value !== "string") return;
		if (value.indexOf("\\") !== -1) {
			(0, _util.ensureObject)(node, "raws");
			node[prop] = (0, _util.unesc)(value);
			if (node.raws[prop] === void 0) node.raws[prop] = value;
		}
		return node;
	}
	function indexesOf(array, item) {
		var i = -1;
		var indexes = [];
		while ((i = array.indexOf(item, i + 1)) !== -1) indexes.push(i);
		return indexes;
	}
	function uniqs() {
		var list = Array.prototype.concat.apply([], arguments);
		return list.filter(function(item, i) {
			return i === list.indexOf(item);
		});
	}
	exports["default"] = /* @__PURE__ */ function() {
		function Parser(rule, options) {
			if (options === void 0) options = {};
			this.rule = rule;
			this.options = Object.assign({
				lossy: false,
				safe: false
			}, options);
			this.position = 0;
			this.css = typeof this.rule === "string" ? this.rule : this.rule.selector;
			this.tokens = (0, _tokenize["default"])({
				css: this.css,
				error: this._errorGenerator(),
				safe: this.options.safe
			});
			var rootSource = getTokenSourceSpan(this.tokens[0], this.tokens[this.tokens.length - 1]);
			this.root = new _root["default"]({ source: rootSource });
			this.root.errorGenerator = this._errorGenerator();
			var selector = new _selector["default"]({
				source: { start: {
					line: 1,
					column: 1
				} },
				sourceIndex: 0
			});
			this.root.append(selector);
			this.current = selector;
			this.loop();
		}
		var _proto = Parser.prototype;
		_proto._errorGenerator = function _errorGenerator() {
			var _this = this;
			return function(message, errorOptions) {
				if (typeof _this.rule === "string") return new Error(message);
				return _this.rule.error(message, errorOptions);
			};
		};
		_proto.attribute = function attribute() {
			var attr = [];
			var startingToken = this.currToken;
			this.position++;
			while (this.position < this.tokens.length && this.currToken[_tokenize.FIELDS.TYPE] !== tokens.closeSquare) {
				attr.push(this.currToken);
				this.position++;
			}
			if (this.currToken[_tokenize.FIELDS.TYPE] !== tokens.closeSquare) return this.expected("closing square bracket", this.currToken[_tokenize.FIELDS.START_POS]);
			var len = attr.length;
			var node = {
				source: getSource(startingToken[1], startingToken[2], this.currToken[3], this.currToken[4]),
				sourceIndex: startingToken[_tokenize.FIELDS.START_POS]
			};
			if (len === 1 && !~[tokens.word].indexOf(attr[0][_tokenize.FIELDS.TYPE])) return this.expected("attribute", attr[0][_tokenize.FIELDS.START_POS]);
			var pos = 0;
			var spaceBefore = "";
			var commentBefore = "";
			var lastAdded = null;
			var spaceAfterMeaningfulToken = false;
			while (pos < len) {
				var token = attr[pos];
				var content = this.content(token);
				var next = attr[pos + 1];
				switch (token[_tokenize.FIELDS.TYPE]) {
					case tokens.space:
						spaceAfterMeaningfulToken = true;
						if (this.options.lossy) break;
						if (lastAdded) {
							(0, _util.ensureObject)(node, "spaces", lastAdded);
							node.spaces[lastAdded].after = (node.spaces[lastAdded].after || "") + content;
							var existingComment = (0, _util.getProp)(node, "raws", "spaces", lastAdded, "after") || null;
							if (existingComment) node.raws.spaces[lastAdded].after = existingComment + content;
						} else {
							spaceBefore = spaceBefore + content;
							commentBefore = commentBefore + content;
						}
						break;
					case tokens.asterisk:
						if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
							node.operator = content;
							lastAdded = "operator";
						} else if ((!node.namespace || lastAdded === "namespace" && !spaceAfterMeaningfulToken) && next) {
							if (spaceBefore) {
								(0, _util.ensureObject)(node, "spaces", "attribute");
								node.spaces.attribute.before = spaceBefore;
								spaceBefore = "";
							}
							if (commentBefore) {
								(0, _util.ensureObject)(node, "raws", "spaces", "attribute");
								node.raws.spaces.attribute.before = spaceBefore;
								commentBefore = "";
							}
							node.namespace = (node.namespace || "") + content;
							if ((0, _util.getProp)(node, "raws", "namespace") || null) node.raws.namespace += content;
							lastAdded = "namespace";
						}
						spaceAfterMeaningfulToken = false;
						break;
					case tokens.dollar: if (lastAdded === "value") {
						var oldRawValue = (0, _util.getProp)(node, "raws", "value");
						node.value += "$";
						if (oldRawValue) node.raws.value = oldRawValue + "$";
						break;
					}
					case tokens.caret:
						if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
							node.operator = content;
							lastAdded = "operator";
						}
						spaceAfterMeaningfulToken = false;
						break;
					case tokens.combinator:
						if (content === "~" && next[_tokenize.FIELDS.TYPE] === tokens.equals) {
							node.operator = content;
							lastAdded = "operator";
						}
						if (content !== "|") {
							spaceAfterMeaningfulToken = false;
							break;
						}
						if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
							node.operator = content;
							lastAdded = "operator";
						} else if (!node.namespace && !node.attribute) node.namespace = true;
						spaceAfterMeaningfulToken = false;
						break;
					case tokens.word:
						if (next && this.content(next) === "|" && attr[pos + 2] && attr[pos + 2][_tokenize.FIELDS.TYPE] !== tokens.equals && !node.operator && !node.namespace) {
							node.namespace = content;
							lastAdded = "namespace";
						} else if (!node.attribute || lastAdded === "attribute" && !spaceAfterMeaningfulToken) {
							if (spaceBefore) {
								(0, _util.ensureObject)(node, "spaces", "attribute");
								node.spaces.attribute.before = spaceBefore;
								spaceBefore = "";
							}
							if (commentBefore) {
								(0, _util.ensureObject)(node, "raws", "spaces", "attribute");
								node.raws.spaces.attribute.before = commentBefore;
								commentBefore = "";
							}
							node.attribute = (node.attribute || "") + content;
							if ((0, _util.getProp)(node, "raws", "attribute") || null) node.raws.attribute += content;
							lastAdded = "attribute";
						} else if (!node.value && node.value !== "" || lastAdded === "value" && !(spaceAfterMeaningfulToken || node.quoteMark)) {
							var _unescaped = (0, _util.unesc)(content);
							var _oldRawValue = (0, _util.getProp)(node, "raws", "value") || "";
							var oldValue = node.value || "";
							node.value = oldValue + _unescaped;
							node.quoteMark = null;
							if (_unescaped !== content || _oldRawValue) {
								(0, _util.ensureObject)(node, "raws");
								node.raws.value = (_oldRawValue || oldValue) + content;
							}
							lastAdded = "value";
						} else {
							var insensitive = content === "i" || content === "I";
							if ((node.value || node.value === "") && (node.quoteMark || spaceAfterMeaningfulToken)) {
								node.insensitive = insensitive;
								if (!insensitive || content === "I") {
									(0, _util.ensureObject)(node, "raws");
									node.raws.insensitiveFlag = content;
								}
								lastAdded = "insensitive";
								if (spaceBefore) {
									(0, _util.ensureObject)(node, "spaces", "insensitive");
									node.spaces.insensitive.before = spaceBefore;
									spaceBefore = "";
								}
								if (commentBefore) {
									(0, _util.ensureObject)(node, "raws", "spaces", "insensitive");
									node.raws.spaces.insensitive.before = commentBefore;
									commentBefore = "";
								}
							} else if (node.value || node.value === "") {
								lastAdded = "value";
								node.value += content;
								if (node.raws.value) node.raws.value += content;
							}
						}
						spaceAfterMeaningfulToken = false;
						break;
					case tokens.str:
						if (!node.attribute || !node.operator) return this.error("Expected an attribute followed by an operator preceding the string.", { index: token[_tokenize.FIELDS.START_POS] });
						var _unescapeValue = (0, _attribute.unescapeValue)(content), unescaped = _unescapeValue.unescaped, quoteMark = _unescapeValue.quoteMark;
						node.value = unescaped;
						node.quoteMark = quoteMark;
						lastAdded = "value";
						(0, _util.ensureObject)(node, "raws");
						node.raws.value = content;
						spaceAfterMeaningfulToken = false;
						break;
					case tokens.equals:
						if (!node.attribute) return this.expected("attribute", token[_tokenize.FIELDS.START_POS], content);
						if (node.value) return this.error("Unexpected \"=\" found; an operator was already defined.", { index: token[_tokenize.FIELDS.START_POS] });
						node.operator = node.operator ? node.operator + content : content;
						lastAdded = "operator";
						spaceAfterMeaningfulToken = false;
						break;
					case tokens.comment:
						if (lastAdded) if (spaceAfterMeaningfulToken || next && next[_tokenize.FIELDS.TYPE] === tokens.space || lastAdded === "insensitive") {
							var lastComment = (0, _util.getProp)(node, "spaces", lastAdded, "after") || "";
							var rawLastComment = (0, _util.getProp)(node, "raws", "spaces", lastAdded, "after") || lastComment;
							(0, _util.ensureObject)(node, "raws", "spaces", lastAdded);
							node.raws.spaces[lastAdded].after = rawLastComment + content;
						} else {
							var lastValue = node[lastAdded] || "";
							var rawLastValue = (0, _util.getProp)(node, "raws", lastAdded) || lastValue;
							(0, _util.ensureObject)(node, "raws");
							node.raws[lastAdded] = rawLastValue + content;
						}
						else commentBefore = commentBefore + content;
						break;
					default: return this.error("Unexpected \"" + content + "\" found.", { index: token[_tokenize.FIELDS.START_POS] });
				}
				pos++;
			}
			unescapeProp(node, "attribute");
			unescapeProp(node, "namespace");
			this.newNode(new _attribute["default"](node));
			this.position++;
		};
		_proto.parseWhitespaceEquivalentTokens = function parseWhitespaceEquivalentTokens(stopPosition) {
			if (stopPosition < 0) stopPosition = this.tokens.length;
			var startPosition = this.position;
			var nodes = [];
			var space = "";
			var lastComment = void 0;
			do
				if (WHITESPACE_TOKENS[this.currToken[_tokenize.FIELDS.TYPE]]) {
					if (!this.options.lossy) space += this.content();
				} else if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.comment) {
					var spaces = {};
					if (space) {
						spaces.before = space;
						space = "";
					}
					lastComment = new _comment["default"]({
						value: this.content(),
						source: getTokenSource(this.currToken),
						sourceIndex: this.currToken[_tokenize.FIELDS.START_POS],
						spaces
					});
					nodes.push(lastComment);
				}
			while (++this.position < stopPosition);
			if (space) {
				if (lastComment) lastComment.spaces.after = space;
				else if (!this.options.lossy) {
					var firstToken = this.tokens[startPosition];
					var lastToken = this.tokens[this.position - 1];
					nodes.push(new _string["default"]({
						value: "",
						source: getSource(firstToken[_tokenize.FIELDS.START_LINE], firstToken[_tokenize.FIELDS.START_COL], lastToken[_tokenize.FIELDS.END_LINE], lastToken[_tokenize.FIELDS.END_COL]),
						sourceIndex: firstToken[_tokenize.FIELDS.START_POS],
						spaces: {
							before: space,
							after: ""
						}
					}));
				}
			}
			return nodes;
		};
		_proto.convertWhitespaceNodesToSpace = function convertWhitespaceNodesToSpace(nodes, requiredSpace) {
			var _this2 = this;
			if (requiredSpace === void 0) requiredSpace = false;
			var space = "";
			var rawSpace = "";
			nodes.forEach(function(n) {
				var spaceBefore = _this2.lossySpace(n.spaces.before, requiredSpace);
				var rawSpaceBefore = _this2.lossySpace(n.rawSpaceBefore, requiredSpace);
				space += spaceBefore + _this2.lossySpace(n.spaces.after, requiredSpace && spaceBefore.length === 0);
				rawSpace += spaceBefore + n.value + _this2.lossySpace(n.rawSpaceAfter, requiredSpace && rawSpaceBefore.length === 0);
			});
			if (rawSpace === space) rawSpace = void 0;
			return {
				space,
				rawSpace
			};
		};
		_proto.isNamedCombinator = function isNamedCombinator(position) {
			if (position === void 0) position = this.position;
			return this.tokens[position + 0] && this.tokens[position + 0][_tokenize.FIELDS.TYPE] === tokens.slash && this.tokens[position + 1] && this.tokens[position + 1][_tokenize.FIELDS.TYPE] === tokens.word && this.tokens[position + 2] && this.tokens[position + 2][_tokenize.FIELDS.TYPE] === tokens.slash;
		};
		_proto.namedCombinator = function namedCombinator() {
			if (this.isNamedCombinator()) {
				var nameRaw = this.content(this.tokens[this.position + 1]);
				var name = (0, _util.unesc)(nameRaw).toLowerCase();
				var raws = {};
				if (name !== nameRaw) raws.value = "/" + nameRaw + "/";
				var node = new _combinator["default"]({
					value: "/" + name + "/",
					source: getSource(this.currToken[_tokenize.FIELDS.START_LINE], this.currToken[_tokenize.FIELDS.START_COL], this.tokens[this.position + 2][_tokenize.FIELDS.END_LINE], this.tokens[this.position + 2][_tokenize.FIELDS.END_COL]),
					sourceIndex: this.currToken[_tokenize.FIELDS.START_POS],
					raws
				});
				this.position = this.position + 3;
				return node;
			} else this.unexpected();
		};
		_proto.combinator = function combinator() {
			var _this3 = this;
			if (this.content() === "|") return this.namespace();
			var nextSigTokenPos = this.locateNextMeaningfulToken(this.position);
			if (nextSigTokenPos < 0 || this.tokens[nextSigTokenPos][_tokenize.FIELDS.TYPE] === tokens.comma || this.tokens[nextSigTokenPos][_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
				var nodes = this.parseWhitespaceEquivalentTokens(nextSigTokenPos);
				if (nodes.length > 0) {
					var last = this.current.last;
					if (last) {
						var _this$convertWhitespa = this.convertWhitespaceNodesToSpace(nodes), space = _this$convertWhitespa.space, rawSpace = _this$convertWhitespa.rawSpace;
						if (rawSpace !== void 0) last.rawSpaceAfter += rawSpace;
						last.spaces.after += space;
					} else nodes.forEach(function(n) {
						return _this3.newNode(n);
					});
				}
				return;
			}
			var firstToken = this.currToken;
			var spaceOrDescendantSelectorNodes = void 0;
			if (nextSigTokenPos > this.position) spaceOrDescendantSelectorNodes = this.parseWhitespaceEquivalentTokens(nextSigTokenPos);
			var node;
			if (this.isNamedCombinator()) node = this.namedCombinator();
			else if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.combinator) {
				node = new _combinator["default"]({
					value: this.content(),
					source: getTokenSource(this.currToken),
					sourceIndex: this.currToken[_tokenize.FIELDS.START_POS]
				});
				this.position++;
			} else if (WHITESPACE_TOKENS[this.currToken[_tokenize.FIELDS.TYPE]]) {} else if (!spaceOrDescendantSelectorNodes) this.unexpected();
			if (node) {
				if (spaceOrDescendantSelectorNodes) {
					var _this$convertWhitespa2 = this.convertWhitespaceNodesToSpace(spaceOrDescendantSelectorNodes), _space = _this$convertWhitespa2.space, _rawSpace = _this$convertWhitespa2.rawSpace;
					node.spaces.before = _space;
					node.rawSpaceBefore = _rawSpace;
				}
			} else {
				var _this$convertWhitespa3 = this.convertWhitespaceNodesToSpace(spaceOrDescendantSelectorNodes, true), _space2 = _this$convertWhitespa3.space, _rawSpace2 = _this$convertWhitespa3.rawSpace;
				if (!_rawSpace2) _rawSpace2 = _space2;
				var spaces = {};
				var raws = { spaces: {} };
				if (_space2.endsWith(" ") && _rawSpace2.endsWith(" ")) {
					spaces.before = _space2.slice(0, _space2.length - 1);
					raws.spaces.before = _rawSpace2.slice(0, _rawSpace2.length - 1);
				} else if (_space2[0] === " " && _rawSpace2[0] === " ") {
					spaces.after = _space2.slice(1);
					raws.spaces.after = _rawSpace2.slice(1);
				} else raws.value = _rawSpace2;
				node = new _combinator["default"]({
					value: " ",
					source: getTokenSourceSpan(firstToken, this.tokens[this.position - 1]),
					sourceIndex: firstToken[_tokenize.FIELDS.START_POS],
					spaces,
					raws
				});
			}
			if (this.currToken && this.currToken[_tokenize.FIELDS.TYPE] === tokens.space) {
				node.spaces.after = this.optionalSpace(this.content());
				this.position++;
			}
			return this.newNode(node);
		};
		_proto.comma = function comma() {
			if (this.position === this.tokens.length - 1) {
				this.root.trailingComma = true;
				this.position++;
				return;
			}
			this.current._inferEndPosition();
			var selector = new _selector["default"]({
				source: { start: tokenStart(this.tokens[this.position + 1]) },
				sourceIndex: this.tokens[this.position + 1][_tokenize.FIELDS.START_POS]
			});
			this.current.parent.append(selector);
			this.current = selector;
			this.position++;
		};
		_proto.comment = function comment() {
			var current = this.currToken;
			this.newNode(new _comment["default"]({
				value: this.content(),
				source: getTokenSource(current),
				sourceIndex: current[_tokenize.FIELDS.START_POS]
			}));
			this.position++;
		};
		_proto.error = function error(message, opts) {
			throw this.root.error(message, opts);
		};
		_proto.missingBackslash = function missingBackslash() {
			return this.error("Expected a backslash preceding the semicolon.", { index: this.currToken[_tokenize.FIELDS.START_POS] });
		};
		_proto.missingParenthesis = function missingParenthesis() {
			return this.expected("opening parenthesis", this.currToken[_tokenize.FIELDS.START_POS]);
		};
		_proto.missingSquareBracket = function missingSquareBracket() {
			return this.expected("opening square bracket", this.currToken[_tokenize.FIELDS.START_POS]);
		};
		_proto.unexpected = function unexpected() {
			return this.error("Unexpected '" + this.content() + "'. Escaping special characters with \\ may help.", this.currToken[_tokenize.FIELDS.START_POS]);
		};
		_proto.unexpectedPipe = function unexpectedPipe() {
			return this.error("Unexpected '|'.", this.currToken[_tokenize.FIELDS.START_POS]);
		};
		_proto.namespace = function namespace() {
			var before = this.prevToken && this.content(this.prevToken) || true;
			if (this.nextToken[_tokenize.FIELDS.TYPE] === tokens.word) {
				this.position++;
				return this.word(before);
			} else if (this.nextToken[_tokenize.FIELDS.TYPE] === tokens.asterisk) {
				this.position++;
				return this.universal(before);
			}
			this.unexpectedPipe();
		};
		_proto.nesting = function nesting() {
			if (this.nextToken) {
				if (this.content(this.nextToken) === "|") {
					this.position++;
					return;
				}
			}
			var current = this.currToken;
			this.newNode(new _nesting["default"]({
				value: this.content(),
				source: getTokenSource(current),
				sourceIndex: current[_tokenize.FIELDS.START_POS]
			}));
			this.position++;
		};
		_proto.parentheses = function parentheses() {
			var last = this.current.last;
			var unbalanced = 1;
			this.position++;
			if (last && last.type === types.PSEUDO) {
				var selector = new _selector["default"]({
					source: { start: tokenStart(this.tokens[this.position]) },
					sourceIndex: this.tokens[this.position][_tokenize.FIELDS.START_POS]
				});
				var cache = this.current;
				last.append(selector);
				this.current = selector;
				while (this.position < this.tokens.length && unbalanced) {
					if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) unbalanced++;
					if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) unbalanced--;
					if (unbalanced) this.parse();
					else {
						this.current.source.end = tokenEnd(this.currToken);
						this.current.parent.source.end = tokenEnd(this.currToken);
						this.position++;
					}
				}
				this.current = cache;
			} else {
				var parenStart = this.currToken;
				var parenValue = "(";
				var parenEnd;
				while (this.position < this.tokens.length && unbalanced) {
					if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) unbalanced++;
					if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) unbalanced--;
					parenEnd = this.currToken;
					parenValue += this.parseParenthesisToken(this.currToken);
					this.position++;
				}
				if (last) last.appendToPropertyAndEscape("value", parenValue, parenValue);
				else this.newNode(new _string["default"]({
					value: parenValue,
					source: getSource(parenStart[_tokenize.FIELDS.START_LINE], parenStart[_tokenize.FIELDS.START_COL], parenEnd[_tokenize.FIELDS.END_LINE], parenEnd[_tokenize.FIELDS.END_COL]),
					sourceIndex: parenStart[_tokenize.FIELDS.START_POS]
				}));
			}
			if (unbalanced) return this.expected("closing parenthesis", this.currToken[_tokenize.FIELDS.START_POS]);
		};
		_proto.pseudo = function pseudo() {
			var _this4 = this;
			var pseudoStr = "";
			var startingToken = this.currToken;
			while (this.currToken && this.currToken[_tokenize.FIELDS.TYPE] === tokens.colon) {
				pseudoStr += this.content();
				this.position++;
			}
			if (!this.currToken) return this.expected(["pseudo-class", "pseudo-element"], this.position - 1);
			if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.word) this.splitWord(false, function(first, length) {
				pseudoStr += first;
				_this4.newNode(new _pseudo["default"]({
					value: pseudoStr,
					source: getTokenSourceSpan(startingToken, _this4.currToken),
					sourceIndex: startingToken[_tokenize.FIELDS.START_POS]
				}));
				if (length > 1 && _this4.nextToken && _this4.nextToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis) _this4.error("Misplaced parenthesis.", { index: _this4.nextToken[_tokenize.FIELDS.START_POS] });
			});
			else return this.expected(["pseudo-class", "pseudo-element"], this.currToken[_tokenize.FIELDS.START_POS]);
		};
		_proto.space = function space() {
			var content = this.content();
			if (this.position === 0 || this.prevToken[_tokenize.FIELDS.TYPE] === tokens.comma || this.prevToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis || this.current.nodes.every(function(node) {
				return node.type === "comment";
			})) {
				this.spaces = this.optionalSpace(content);
				this.position++;
			} else if (this.position === this.tokens.length - 1 || this.nextToken[_tokenize.FIELDS.TYPE] === tokens.comma || this.nextToken[_tokenize.FIELDS.TYPE] === tokens.closeParenthesis) {
				this.current.last.spaces.after = this.optionalSpace(content);
				this.position++;
			} else this.combinator();
		};
		_proto.string = function string() {
			var current = this.currToken;
			this.newNode(new _string["default"]({
				value: this.content(),
				source: getTokenSource(current),
				sourceIndex: current[_tokenize.FIELDS.START_POS]
			}));
			this.position++;
		};
		_proto.universal = function universal(namespace) {
			var nextToken = this.nextToken;
			if (nextToken && this.content(nextToken) === "|") {
				this.position++;
				return this.namespace();
			}
			var current = this.currToken;
			this.newNode(new _universal["default"]({
				value: this.content(),
				source: getTokenSource(current),
				sourceIndex: current[_tokenize.FIELDS.START_POS]
			}), namespace);
			this.position++;
		};
		_proto.splitWord = function splitWord(namespace, firstCallback) {
			var _this5 = this;
			var nextToken = this.nextToken;
			var word = this.content();
			while (nextToken && ~[
				tokens.dollar,
				tokens.caret,
				tokens.equals,
				tokens.word
			].indexOf(nextToken[_tokenize.FIELDS.TYPE])) {
				this.position++;
				var current = this.content();
				word += current;
				if (current.lastIndexOf("\\") === current.length - 1) {
					var next = this.nextToken;
					if (next && next[_tokenize.FIELDS.TYPE] === tokens.space) {
						word += this.requiredSpace(this.content(next));
						this.position++;
					}
				}
				nextToken = this.nextToken;
			}
			var hasClass = indexesOf(word, ".").filter(function(i) {
				var escapedDot = word[i - 1] === "\\";
				var isKeyframesPercent = /^\d+\.\d+%$/.test(word);
				return !escapedDot && !isKeyframesPercent;
			});
			var hasId = indexesOf(word, "#").filter(function(i) {
				return word[i - 1] !== "\\";
			});
			var interpolations = indexesOf(word, "#{");
			if (interpolations.length) hasId = hasId.filter(function(hashIndex) {
				return !~interpolations.indexOf(hashIndex);
			});
			var indices = (0, _sortAscending["default"])(uniqs([0].concat(hasClass, hasId)));
			indices.forEach(function(ind, i) {
				var index = indices[i + 1] || word.length;
				var value = word.slice(ind, index);
				if (i === 0 && firstCallback) return firstCallback.call(_this5, value, indices.length);
				var node;
				var current = _this5.currToken;
				var sourceIndex = current[_tokenize.FIELDS.START_POS] + indices[i];
				var source = getSource(current[1], current[2] + ind, current[3], current[2] + (index - 1));
				if (~hasClass.indexOf(ind)) {
					var classNameOpts = {
						value: value.slice(1),
						source,
						sourceIndex
					};
					node = new _className["default"](unescapeProp(classNameOpts, "value"));
				} else if (~hasId.indexOf(ind)) {
					var idOpts = {
						value: value.slice(1),
						source,
						sourceIndex
					};
					node = new _id["default"](unescapeProp(idOpts, "value"));
				} else {
					var tagOpts = {
						value,
						source,
						sourceIndex
					};
					unescapeProp(tagOpts, "value");
					node = new _tag["default"](tagOpts);
				}
				_this5.newNode(node, namespace);
				namespace = null;
			});
			this.position++;
		};
		_proto.word = function word(namespace) {
			var nextToken = this.nextToken;
			if (nextToken && this.content(nextToken) === "|") {
				this.position++;
				return this.namespace();
			}
			return this.splitWord(namespace);
		};
		_proto.loop = function loop() {
			while (this.position < this.tokens.length) this.parse(true);
			this.current._inferEndPosition();
			return this.root;
		};
		_proto.parse = function parse(throwOnParenthesis) {
			switch (this.currToken[_tokenize.FIELDS.TYPE]) {
				case tokens.space:
					this.space();
					break;
				case tokens.comment:
					this.comment();
					break;
				case tokens.openParenthesis:
					this.parentheses();
					break;
				case tokens.closeParenthesis:
					if (throwOnParenthesis) this.missingParenthesis();
					break;
				case tokens.openSquare:
					this.attribute();
					break;
				case tokens.dollar:
				case tokens.caret:
				case tokens.equals:
				case tokens.word:
					this.word();
					break;
				case tokens.colon:
					this.pseudo();
					break;
				case tokens.comma:
					this.comma();
					break;
				case tokens.asterisk:
					this.universal();
					break;
				case tokens.ampersand:
					this.nesting();
					break;
				case tokens.slash:
				case tokens.combinator:
					this.combinator();
					break;
				case tokens.str:
					this.string();
					break;
				case tokens.closeSquare: this.missingSquareBracket();
				case tokens.semicolon: this.missingBackslash();
				default: this.unexpected();
			}
		};
		_proto.expected = function expected(description, index, found) {
			if (Array.isArray(description)) {
				var last = description.pop();
				description = description.join(", ") + " or " + last;
			}
			var an = /^[aeiou]/.test(description[0]) ? "an" : "a";
			if (!found) return this.error("Expected " + an + " " + description + ".", { index });
			return this.error("Expected " + an + " " + description + ", found \"" + found + "\" instead.", { index });
		};
		_proto.requiredSpace = function requiredSpace(space) {
			return this.options.lossy ? " " : space;
		};
		_proto.optionalSpace = function optionalSpace(space) {
			return this.options.lossy ? "" : space;
		};
		_proto.lossySpace = function lossySpace(space, required) {
			if (this.options.lossy) return required ? " " : "";
			else return space;
		};
		_proto.parseParenthesisToken = function parseParenthesisToken(token) {
			var content = this.content(token);
			if (token[_tokenize.FIELDS.TYPE] === tokens.space) return this.requiredSpace(content);
			else return content;
		};
		_proto.newNode = function newNode(node, namespace) {
			if (namespace) {
				if (/^ +$/.test(namespace)) {
					if (!this.options.lossy) this.spaces = (this.spaces || "") + namespace;
					namespace = true;
				}
				node.namespace = namespace;
				unescapeProp(node, "namespace");
			}
			if (this.spaces) {
				node.spaces.before = this.spaces;
				this.spaces = "";
			}
			return this.current.append(node);
		};
		_proto.content = function content(token) {
			if (token === void 0) token = this.currToken;
			return this.css.slice(token[_tokenize.FIELDS.START_POS], token[_tokenize.FIELDS.END_POS]);
		};
		/**
		* returns the index of the next non-whitespace, non-comment token.
		* returns -1 if no meaningful token is found.
		*/
		_proto.locateNextMeaningfulToken = function locateNextMeaningfulToken(startPosition) {
			if (startPosition === void 0) startPosition = this.position + 1;
			var searchPosition = startPosition;
			while (searchPosition < this.tokens.length) if (WHITESPACE_EQUIV_TOKENS[this.tokens[searchPosition][_tokenize.FIELDS.TYPE]]) {
				searchPosition++;
				continue;
			} else return searchPosition;
			return -1;
		};
		_createClass(Parser, [
			{
				key: "currToken",
				get: function get() {
					return this.tokens[this.position];
				}
			},
			{
				key: "nextToken",
				get: function get() {
					return this.tokens[this.position + 1];
				}
			},
			{
				key: "prevToken",
				get: function get() {
					return this.tokens[this.position - 1];
				}
			}
		]);
		return Parser;
	}();
	module.exports = exports.default;
}));
var require_processor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = void 0;
	var _parser = _interopRequireDefault(require_parser());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
	exports["default"] = /* @__PURE__ */ function() {
		function Processor(func, options) {
			this.func = func || function noop() {};
			this.funcRes = null;
			this.options = options;
		}
		var _proto = Processor.prototype;
		_proto._shouldUpdateSelector = function _shouldUpdateSelector(rule, options) {
			if (options === void 0) options = {};
			if (Object.assign({}, this.options, options).updateSelector === false) return false;
			else return typeof rule !== "string";
		};
		_proto._isLossy = function _isLossy(options) {
			if (options === void 0) options = {};
			if (Object.assign({}, this.options, options).lossless === false) return true;
			else return false;
		};
		_proto._root = function _root(rule, options) {
			if (options === void 0) options = {};
			return new _parser["default"](rule, this._parseOptions(options)).root;
		};
		_proto._parseOptions = function _parseOptions(options) {
			return { lossy: this._isLossy(options) };
		};
		_proto._run = function _run(rule, options) {
			var _this = this;
			if (options === void 0) options = {};
			return new Promise(function(resolve, reject) {
				try {
					var root = _this._root(rule, options);
					Promise.resolve(_this.func(root)).then(function(transform) {
						var string = void 0;
						if (_this._shouldUpdateSelector(rule, options)) {
							string = root.toString();
							rule.selector = string;
						}
						return {
							transform,
							root,
							string
						};
					}).then(resolve, reject);
				} catch (e) {
					reject(e);
					return;
				}
			});
		};
		_proto._runSync = function _runSync(rule, options) {
			if (options === void 0) options = {};
			var root = this._root(rule, options);
			var transform = this.func(root);
			if (transform && typeof transform.then === "function") throw new Error("Selector processor returned a promise to a synchronous call.");
			var string = void 0;
			if (options.updateSelector && typeof rule !== "string") {
				string = root.toString();
				rule.selector = string;
			}
			return {
				transform,
				root,
				string
			};
		};
		_proto.ast = function ast(rule, options) {
			return this._run(rule, options).then(function(result) {
				return result.root;
			});
		};
		_proto.astSync = function astSync(rule, options) {
			return this._runSync(rule, options).root;
		};
		_proto.transform = function transform(rule, options) {
			return this._run(rule, options).then(function(result) {
				return result.transform;
			});
		};
		_proto.transformSync = function transformSync(rule, options) {
			return this._runSync(rule, options).transform;
		};
		_proto.process = function process(rule, options) {
			return this._run(rule, options).then(function(result) {
				return result.string || result.root.toString();
			});
		};
		_proto.processSync = function processSync(rule, options) {
			var result = this._runSync(rule, options);
			return result.string || result.root.toString();
		};
		return Processor;
	}();
	module.exports = exports.default;
}));
var require_constructors = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.__esModule = true;
	exports.universal = exports.tag = exports.string = exports.selector = exports.root = exports.pseudo = exports.nesting = exports.id = exports.comment = exports.combinator = exports.className = exports.attribute = void 0;
	var _attribute = _interopRequireDefault(require_attribute());
	var _className = _interopRequireDefault(require_className());
	var _combinator = _interopRequireDefault(require_combinator());
	var _comment = _interopRequireDefault(require_comment());
	var _id = _interopRequireDefault(require_id());
	var _nesting = _interopRequireDefault(require_nesting());
	var _pseudo = _interopRequireDefault(require_pseudo());
	var _root = _interopRequireDefault(require_root());
	var _selector = _interopRequireDefault(require_selector());
	var _string = _interopRequireDefault(require_string());
	var _tag = _interopRequireDefault(require_tag());
	var _universal = _interopRequireDefault(require_universal());
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
	exports.attribute = function attribute(opts) {
		return new _attribute["default"](opts);
	};
	exports.className = function className(opts) {
		return new _className["default"](opts);
	};
	exports.combinator = function combinator(opts) {
		return new _combinator["default"](opts);
	};
	exports.comment = function comment(opts) {
		return new _comment["default"](opts);
	};
	exports.id = function id(opts) {
		return new _id["default"](opts);
	};
	exports.nesting = function nesting(opts) {
		return new _nesting["default"](opts);
	};
	exports.pseudo = function pseudo(opts) {
		return new _pseudo["default"](opts);
	};
	exports.root = function root(opts) {
		return new _root["default"](opts);
	};
	exports.selector = function selector(opts) {
		return new _selector["default"](opts);
	};
	exports.string = function string(opts) {
		return new _string["default"](opts);
	};
	exports.tag = function tag(opts) {
		return new _tag["default"](opts);
	};
	exports.universal = function universal(opts) {
		return new _universal["default"](opts);
	};
}));
var require_guards = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.__esModule = true;
	exports.isComment = exports.isCombinator = exports.isClassName = exports.isAttribute = void 0;
	exports.isContainer = isContainer;
	exports.isIdentifier = void 0;
	exports.isNamespace = isNamespace;
	exports.isNesting = void 0;
	exports.isNode = isNode;
	exports.isPseudo = void 0;
	exports.isPseudoClass = isPseudoClass;
	exports.isPseudoElement = isPseudoElement;
	exports.isUniversal = exports.isTag = exports.isString = exports.isSelector = exports.isRoot = void 0;
	var _types = require_types();
	var _IS_TYPE;
	var IS_TYPE = (_IS_TYPE = {}, _IS_TYPE[_types.ATTRIBUTE] = true, _IS_TYPE[_types.CLASS] = true, _IS_TYPE[_types.COMBINATOR] = true, _IS_TYPE[_types.COMMENT] = true, _IS_TYPE[_types.ID] = true, _IS_TYPE[_types.NESTING] = true, _IS_TYPE[_types.PSEUDO] = true, _IS_TYPE[_types.ROOT] = true, _IS_TYPE[_types.SELECTOR] = true, _IS_TYPE[_types.STRING] = true, _IS_TYPE[_types.TAG] = true, _IS_TYPE[_types.UNIVERSAL] = true, _IS_TYPE);
	function isNode(node) {
		return typeof node === "object" && IS_TYPE[node.type];
	}
	function isNodeType(type, node) {
		return isNode(node) && node.type === type;
	}
	var isAttribute = isNodeType.bind(null, _types.ATTRIBUTE);
	exports.isAttribute = isAttribute;
	exports.isClassName = isNodeType.bind(null, _types.CLASS);
	exports.isCombinator = isNodeType.bind(null, _types.COMBINATOR);
	exports.isComment = isNodeType.bind(null, _types.COMMENT);
	exports.isIdentifier = isNodeType.bind(null, _types.ID);
	exports.isNesting = isNodeType.bind(null, _types.NESTING);
	var isPseudo = isNodeType.bind(null, _types.PSEUDO);
	exports.isPseudo = isPseudo;
	exports.isRoot = isNodeType.bind(null, _types.ROOT);
	exports.isSelector = isNodeType.bind(null, _types.SELECTOR);
	exports.isString = isNodeType.bind(null, _types.STRING);
	var isTag = isNodeType.bind(null, _types.TAG);
	exports.isTag = isTag;
	exports.isUniversal = isNodeType.bind(null, _types.UNIVERSAL);
	function isPseudoElement(node) {
		return isPseudo(node) && node.value && (node.value.startsWith("::") || node.value.toLowerCase() === ":before" || node.value.toLowerCase() === ":after" || node.value.toLowerCase() === ":first-letter" || node.value.toLowerCase() === ":first-line");
	}
	function isPseudoClass(node) {
		return isPseudo(node) && !isPseudoElement(node);
	}
	function isContainer(node) {
		return !!(isNode(node) && node.walk);
	}
	function isNamespace(node) {
		return isAttribute(node) || isTag(node);
	}
}));
var require_selectors = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.__esModule = true;
	var _types = require_types();
	Object.keys(_types).forEach(function(key) {
		if (key === "default" || key === "__esModule") return;
		if (key in exports && exports[key] === _types[key]) return;
		exports[key] = _types[key];
	});
	var _constructors = require_constructors();
	Object.keys(_constructors).forEach(function(key) {
		if (key === "default" || key === "__esModule") return;
		if (key in exports && exports[key] === _constructors[key]) return;
		exports[key] = _constructors[key];
	});
	var _guards = require_guards();
	Object.keys(_guards).forEach(function(key) {
		if (key === "default" || key === "__esModule") return;
		if (key in exports && exports[key] === _guards[key]) return;
		exports[key] = _guards[key];
	});
}));
var require_dist = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	exports.__esModule = true;
	exports["default"] = void 0;
	var _processor = _interopRequireDefault(require_processor());
	var selectors = _interopRequireWildcard(require_selectors());
	function _getRequireWildcardCache(nodeInterop) {
		if (typeof WeakMap !== "function") return null;
		var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
		var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
		return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
			return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
		})(nodeInterop);
	}
	function _interopRequireWildcard(obj, nodeInterop) {
		if (!nodeInterop && obj && obj.__esModule) return obj;
		if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { "default": obj };
		var cache = _getRequireWildcardCache(nodeInterop);
		if (cache && cache.has(obj)) return cache.get(obj);
		var newObj = {};
		var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
		for (var key in obj) if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
			var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
			if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
			else newObj[key] = obj[key];
		}
		newObj["default"] = obj;
		if (cache) cache.set(obj, newObj);
		return newObj;
	}
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { "default": obj };
	}
	var parser = function parser(processor) {
		return new _processor["default"](processor);
	};
	Object.assign(parser, selectors);
	delete parser.__esModule;
	exports["default"] = parser;
	module.exports = exports.default;
}));
var require_src$2 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const selectorParser = require_dist();
	const valueParser = require_lib();
	const { extractICSS } = require_src$4();
	const IGNORE_FILE_MARKER = "cssmodules-pure-no-check";
	const IGNORE_NEXT_LINE_MARKER = "cssmodules-pure-ignore";
	const isSpacing = (node) => node.type === "combinator" && node.value === " ";
	const isPureCheckDisabled = (root) => {
		for (const node of root.nodes) {
			if (node.type !== "comment") return false;
			if (node.text.trim().startsWith(IGNORE_FILE_MARKER)) return true;
		}
		return false;
	};
	function getIgnoreComment(node) {
		if (!node.parent) return;
		const indexInParent = node.parent.index(node);
		for (let i = indexInParent - 1; i >= 0; i--) {
			const prevNode = node.parent.nodes[i];
			if (prevNode.type === "comment") {
				if (prevNode.text.trimStart().startsWith(IGNORE_NEXT_LINE_MARKER)) return prevNode;
			} else break;
		}
	}
	function normalizeNodeArray(nodes) {
		const array = [];
		nodes.forEach((x) => {
			if (Array.isArray(x)) normalizeNodeArray(x).forEach((item) => {
				array.push(item);
			});
			else if (x) array.push(x);
		});
		if (array.length > 0 && isSpacing(array[array.length - 1])) array.pop();
		return array;
	}
	const isPureSelectorSymbol = Symbol("is-pure-selector");
	function localizeNode(rule, mode, localAliasMap) {
		const transform = (node, context) => {
			if (context.ignoreNextSpacing && !isSpacing(node)) throw new Error("Missing whitespace after " + context.ignoreNextSpacing);
			if (context.enforceNoSpacing && isSpacing(node)) throw new Error("Missing whitespace before " + context.enforceNoSpacing);
			let newNodes;
			switch (node.type) {
				case "root": {
					let resultingGlobal;
					context.hasPureGlobals = false;
					newNodes = node.nodes.map((n) => {
						const nContext = {
							global: context.global,
							lastWasSpacing: true,
							hasLocals: false,
							explicit: false
						};
						n = transform(n, nContext);
						if (typeof resultingGlobal === "undefined") resultingGlobal = nContext.global;
						else if (resultingGlobal !== nContext.global) throw new Error("Inconsistent rule global/local result in rule \"" + node + "\" (multiple selectors must result in the same mode for the rule)");
						if (!nContext.hasLocals) context.hasPureGlobals = true;
						return n;
					});
					context.global = resultingGlobal;
					node.nodes = normalizeNodeArray(newNodes);
					break;
				}
				case "selector":
					newNodes = node.map((childNode) => transform(childNode, context));
					node = node.clone();
					node.nodes = normalizeNodeArray(newNodes);
					break;
				case "combinator":
					if (isSpacing(node)) {
						if (context.ignoreNextSpacing) {
							context.ignoreNextSpacing = false;
							context.lastWasSpacing = false;
							context.enforceNoSpacing = false;
							return null;
						}
						context.lastWasSpacing = true;
						return node;
					}
					break;
				case "pseudo": {
					let childContext;
					const isNested = !!node.length;
					const isScoped = node.value === ":local" || node.value === ":global";
					if (node.value === ":import" || node.value === ":export") context.hasLocals = true;
					else if (isNested) {
						if (isScoped) {
							if (node.nodes.length === 0) throw new Error(`${node.value}() can't be empty`);
							if (context.inside) throw new Error(`A ${node.value} is not allowed inside of a ${context.inside}(...)`);
							childContext = {
								global: node.value === ":global",
								inside: node.value,
								hasLocals: false,
								explicit: true
							};
							newNodes = node.map((childNode) => transform(childNode, childContext)).reduce((acc, next) => acc.concat(next.nodes), []);
							if (newNodes.length) {
								const { before, after } = node.spaces;
								const first = newNodes[0];
								const last = newNodes[newNodes.length - 1];
								first.spaces = {
									before,
									after: first.spaces.after
								};
								last.spaces = {
									before: last.spaces.before,
									after
								};
							}
							node = newNodes;
							break;
						} else {
							childContext = {
								global: context.global,
								inside: context.inside,
								lastWasSpacing: true,
								hasLocals: false,
								explicit: context.explicit
							};
							newNodes = node.map((childNode) => {
								const newContext = {
									...childContext,
									enforceNoSpacing: false
								};
								const result = transform(childNode, newContext);
								childContext.global = newContext.global;
								childContext.hasLocals = newContext.hasLocals;
								return result;
							});
							node = node.clone();
							node.nodes = normalizeNodeArray(newNodes);
							if (childContext.hasLocals) context.hasLocals = true;
						}
						break;
					} else if (isScoped) {
						if (context.inside) throw new Error(`A ${node.value} is not allowed inside of a ${context.inside}(...)`);
						const addBackSpacing = !!node.spaces.before;
						context.ignoreNextSpacing = context.lastWasSpacing ? node.value : false;
						context.enforceNoSpacing = context.lastWasSpacing ? false : node.value;
						context.global = node.value === ":global";
						context.explicit = true;
						return addBackSpacing ? selectorParser.combinator({ value: " " }) : null;
					}
					break;
				}
				case "id":
				case "class": {
					if (!node.value) throw new Error("Invalid class or id selector syntax");
					if (context.global) break;
					const isImportedValue = localAliasMap.has(node.value);
					if (!isImportedValue || isImportedValue && context.explicit) {
						const innerNode = node.clone();
						innerNode.spaces = {
							before: "",
							after: ""
						};
						node = selectorParser.pseudo({
							value: ":local",
							nodes: [innerNode],
							spaces: node.spaces
						});
						context.hasLocals = true;
					}
					break;
				}
				case "nesting": if (node.value === "&") context.hasLocals = rule.parent[isPureSelectorSymbol];
			}
			context.lastWasSpacing = false;
			context.ignoreNextSpacing = false;
			context.enforceNoSpacing = false;
			return node;
		};
		const rootContext = {
			global: mode === "global",
			hasPureGlobals: false
		};
		rootContext.selector = selectorParser((root) => {
			transform(root, rootContext);
		}).processSync(rule, {
			updateSelector: false,
			lossless: true
		});
		return rootContext;
	}
	function localizeDeclNode(node, context) {
		switch (node.type) {
			case "word":
				if (context.localizeNextItem) {
					if (!context.localAliasMap.has(node.value)) {
						node.value = ":local(" + node.value + ")";
						context.localizeNextItem = false;
					}
				}
				break;
			case "function": if (context.options && context.options.rewriteUrl && node.value.toLowerCase() === "url") node.nodes.map((nestedNode) => {
				if (nestedNode.type !== "string" && nestedNode.type !== "word") return;
				let newUrl = context.options.rewriteUrl(context.global, nestedNode.value);
				switch (nestedNode.type) {
					case "string":
						if (nestedNode.quote === "'") newUrl = newUrl.replace(/(\\)/g, "\\$1").replace(/'/g, "\\'");
						if (nestedNode.quote === "\"") newUrl = newUrl.replace(/(\\)/g, "\\$1").replace(/"/g, "\\\"");
						break;
					case "word": newUrl = newUrl.replace(/("|'|\)|\\)/g, "\\$1");
				}
				nestedNode.value = newUrl;
			});
		}
		return node;
	}
	const specialKeywords = [
		"none",
		"inherit",
		"initial",
		"revert",
		"revert-layer",
		"unset"
	];
	function localizeDeclarationValues(localize, declaration, context) {
		const valueNodes = valueParser(declaration.value);
		valueNodes.walk((node, index, nodes) => {
			if (node.type === "function" && (node.value.toLowerCase() === "var" || node.value.toLowerCase() === "env")) return false;
			if (node.type === "word" && specialKeywords.includes(node.value.toLowerCase())) return;
			nodes[index] = localizeDeclNode(node, {
				options: context.options,
				global: context.global,
				localizeNextItem: localize && !context.global,
				localAliasMap: context.localAliasMap
			});
		});
		declaration.value = valueNodes.toString();
	}
	const validIdent = /^-?([a-z\u0080-\uFFFF_]|(\\[^\r\n\f])|-(?![0-9]))((\\[^\r\n\f])|[a-z\u0080-\uFFFF_0-9-])*$/i;
	const animationKeywords = {
		$normal: 1,
		$reverse: 1,
		$alternate: 1,
		"$alternate-reverse": 1,
		$forwards: 1,
		$backwards: 1,
		$both: 1,
		$infinite: 1,
		$paused: 1,
		$running: 1,
		$ease: 1,
		"$ease-in": 1,
		"$ease-out": 1,
		"$ease-in-out": 1,
		$linear: 1,
		"$step-end": 1,
		"$step-start": 1,
		$none: Infinity,
		$initial: Infinity,
		$inherit: Infinity,
		$unset: Infinity,
		$revert: Infinity,
		"$revert-layer": Infinity
	};
	function localizeDeclaration(declaration, context) {
		if (/animation(-name)?$/i.test(declaration.prop)) {
			let parsedAnimationKeywords = {};
			declaration.value = valueParser(declaration.value).walk((node) => {
				if (node.type === "div") {
					parsedAnimationKeywords = {};
					return;
				} else if (node.type === "function" && node.value.toLowerCase() === "local" && node.nodes.length === 1) {
					node.type = "word";
					node.value = node.nodes[0].value;
					return localizeDeclNode(node, {
						options: context.options,
						global: context.global,
						localizeNextItem: true,
						localAliasMap: context.localAliasMap
					});
				} else if (node.type === "function") {
					if (node.value.toLowerCase() === "global" && node.nodes.length === 1) {
						node.type = "word";
						node.value = node.nodes[0].value;
					}
					return false;
				} else if (node.type !== "word") return;
				const value = node.type === "word" ? node.value.toLowerCase() : null;
				let shouldParseAnimationName = false;
				if (value && validIdent.test(value)) if ("$" + value in animationKeywords) {
					parsedAnimationKeywords["$" + value] = "$" + value in parsedAnimationKeywords ? parsedAnimationKeywords["$" + value] + 1 : 0;
					shouldParseAnimationName = parsedAnimationKeywords["$" + value] >= animationKeywords["$" + value];
				} else shouldParseAnimationName = true;
				return localizeDeclNode(node, {
					options: context.options,
					global: context.global,
					localizeNextItem: shouldParseAnimationName && !context.global,
					localAliasMap: context.localAliasMap
				});
			}).toString();
			return;
		}
		if (/url\(/i.test(declaration.value)) return localizeDeclarationValues(false, declaration, context);
	}
	const isPureSelector = (context, rule) => {
		if (!rule.parent || rule.type === "root") return !context.hasPureGlobals;
		if (rule.type === "rule" && rule[isPureSelectorSymbol]) return rule[isPureSelectorSymbol] || isPureSelector(context, rule.parent);
		return !context.hasPureGlobals || isPureSelector(context, rule.parent);
	};
	const isNodeWithoutDeclarations = (rule) => {
		if (rule.nodes.length > 0) return !rule.nodes.every((item) => item.type === "rule" || item.type === "atrule" && !isNodeWithoutDeclarations(item));
		return true;
	};
	module.exports = (options = {}) => {
		if (options && options.mode && options.mode !== "global" && options.mode !== "local" && options.mode !== "pure") throw new Error("options.mode must be either \"global\", \"local\" or \"pure\" (default \"local\")");
		const pureMode = options && options.mode === "pure";
		const globalMode = options && options.mode === "global";
		return {
			postcssPlugin: "postcss-modules-local-by-default",
			prepare() {
				const localAliasMap = /* @__PURE__ */ new Map();
				return { Once(root) {
					const { icssImports } = extractICSS(root, false);
					const enforcePureMode = pureMode && !isPureCheckDisabled(root);
					Object.keys(icssImports).forEach((key) => {
						Object.keys(icssImports[key]).forEach((prop) => {
							localAliasMap.set(prop, icssImports[key][prop]);
						});
					});
					root.walkAtRules((atRule) => {
						if (/keyframes$/i.test(atRule.name)) {
							const globalMatch = /^\s*:global\s*\((.+)\)\s*$/.exec(atRule.params);
							const localMatch = /^\s*:local\s*\((.+)\)\s*$/.exec(atRule.params);
							let globalKeyframes = globalMode;
							if (globalMatch) {
								if (enforcePureMode) {
									const ignoreComment = getIgnoreComment(atRule);
									if (!ignoreComment) throw atRule.error("@keyframes :global(...) is not allowed in pure mode");
									else ignoreComment.remove();
								}
								atRule.params = globalMatch[1];
								globalKeyframes = true;
							} else if (localMatch) {
								atRule.params = localMatch[0];
								globalKeyframes = false;
							} else if (atRule.params && !globalMode && !localAliasMap.has(atRule.params)) atRule.params = ":local(" + atRule.params + ")";
							atRule.walkDecls((declaration) => {
								localizeDeclaration(declaration, {
									localAliasMap,
									options,
									global: globalKeyframes
								});
							});
						} else if (/scope$/i.test(atRule.name)) {
							if (atRule.params) {
								const ignoreComment = pureMode ? getIgnoreComment(atRule) : void 0;
								if (ignoreComment) ignoreComment.remove();
								atRule.params = atRule.params.split("to").map((item) => {
									const selector = item.trim().slice(1, -1).trim();
									const context = localizeNode(selector, options.mode, localAliasMap);
									context.options = options;
									context.localAliasMap = localAliasMap;
									if (enforcePureMode && context.hasPureGlobals && !ignoreComment) throw atRule.error("Selector in at-rule\"" + selector + "\" is not pure (pure selectors must contain at least one local class or id)");
									return `(${context.selector})`;
								}).join(" to ");
							}
							atRule.nodes.forEach((declaration) => {
								if (declaration.type === "decl") localizeDeclaration(declaration, {
									localAliasMap,
									options,
									global: globalMode
								});
							});
						} else if (atRule.nodes) atRule.nodes.forEach((declaration) => {
							if (declaration.type === "decl") localizeDeclaration(declaration, {
								localAliasMap,
								options,
								global: globalMode
							});
						});
					});
					root.walkRules((rule) => {
						if (rule.parent && rule.parent.type === "atrule" && /keyframes$/i.test(rule.parent.name)) return;
						const context = localizeNode(rule, options.mode, localAliasMap);
						context.options = options;
						context.localAliasMap = localAliasMap;
						const ignoreComment = enforcePureMode ? getIgnoreComment(rule) : void 0;
						const isNotPure = enforcePureMode && !isPureSelector(context, rule);
						if (isNotPure && isNodeWithoutDeclarations(rule) && !ignoreComment) throw rule.error("Selector \"" + rule.selector + "\" is not pure (pure selectors must contain at least one local class or id)");
						else if (ignoreComment) ignoreComment.remove();
						if (pureMode) rule[isPureSelectorSymbol] = !isNotPure;
						rule.selector = context.selector;
						if (rule.nodes) rule.nodes.forEach((declaration) => localizeDeclaration(declaration, context));
					});
				} };
			}
		};
	};
	module.exports.postcss = true;
}));
var require_src$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const selectorParser = require_dist();
	const hasOwnProperty = Object.prototype.hasOwnProperty;
	function isNestedRule(rule) {
		if (!rule.parent || rule.parent.type === "root") return false;
		if (rule.parent.type === "rule") return true;
		return isNestedRule(rule.parent);
	}
	function getSingleLocalNamesForComposes(root, rule) {
		if (isNestedRule(rule)) throw new Error(`composition is not allowed in nested rule \n\n${rule}`);
		return root.nodes.map((node) => {
			if (node.type !== "selector" || node.nodes.length !== 1) throw new Error(`composition is only allowed when selector is single :local class name not in "${root}"`);
			node = node.nodes[0];
			if (node.type !== "pseudo" || node.value !== ":local" || node.nodes.length !== 1) throw new Error("composition is only allowed when selector is single :local class name not in \"" + root + "\", \"" + node + "\" is weird");
			node = node.first;
			if (node.type !== "selector" || node.length !== 1) throw new Error("composition is only allowed when selector is single :local class name not in \"" + root + "\", \"" + node + "\" is weird");
			node = node.first;
			if (node.type !== "class") throw new Error("composition is only allowed when selector is single :local class name not in \"" + root + "\", \"" + node + "\" is weird");
			return node.value;
		});
	}
	const unescapeRegExp = /* @__PURE__ */ new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig");
	function unescape(str) {
		return str.replace(unescapeRegExp, (_, escaped, escapedWhitespace) => {
			const high = "0x" + escaped - 65536;
			return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
		});
	}
	const plugin = (options = {}) => {
		const generateScopedName = options && options.generateScopedName || plugin.generateScopedName;
		const generateExportEntry = options && options.generateExportEntry || plugin.generateExportEntry;
		const exportGlobals = options && options.exportGlobals;
		return {
			postcssPlugin: "postcss-modules-scope",
			Once(root, { rule }) {
				const exports$1 = Object.create(null);
				function exportScopedName(name, rawName, node) {
					const scopedName = generateScopedName(rawName ? rawName : name, root.source.input.from, root.source.input.css, node);
					const { key, value } = generateExportEntry(rawName ? rawName : name, scopedName, root.source.input.from, root.source.input.css, node);
					exports$1[key] = exports$1[key] || [];
					if (exports$1[key].indexOf(value) < 0) exports$1[key].push(value);
					return scopedName;
				}
				function localizeNode(node) {
					switch (node.type) {
						case "selector":
							node.nodes = node.map((item) => localizeNode(item));
							return node;
						case "class": return selectorParser.className({ value: exportScopedName(node.value, node.raws && node.raws.value ? node.raws.value : null, node) });
						case "id": return selectorParser.id({ value: exportScopedName(node.value, node.raws && node.raws.value ? node.raws.value : null, node) });
						case "attribute": if (node.attribute === "class" && node.operator === "=") return selectorParser.attribute({
							attribute: node.attribute,
							operator: node.operator,
							quoteMark: "'",
							value: exportScopedName(node.value, null, null)
						});
					}
					throw new Error(`${node.type} ("${node}") is not allowed in a :local block`);
				}
				function traverseNode(node) {
					switch (node.type) {
						case "pseudo": if (node.value === ":local") {
							if (node.nodes.length !== 1) throw new Error("Unexpected comma (\",\") in :local block");
							const selector = localizeNode(node.first);
							selector.first.spaces = node.spaces;
							const nextNode = node.next();
							if (nextNode && nextNode.type === "combinator" && nextNode.value === " " && /\\[A-F0-9]{1,6}$/.test(selector.last.value)) selector.last.spaces.after = " ";
							node.replaceWith(selector);
							return;
						}
						case "root":
						case "selector":
							node.each((item) => traverseNode(item));
							break;
						case "id":
						case "class": if (exportGlobals) exports$1[node.value] = [node.value];
					}
					return node;
				}
				const importedNames = {};
				root.walkRules(/^:import\(.+\)$/, (rule) => {
					rule.walkDecls((decl) => {
						importedNames[decl.prop] = true;
					});
				});
				root.walkRules((rule) => {
					let parsedSelector = selectorParser().astSync(rule);
					rule.selector = traverseNode(parsedSelector.clone()).toString();
					rule.walkDecls(/^(composes|compose-with)$/i, (decl) => {
						const localNames = getSingleLocalNamesForComposes(parsedSelector, decl.parent);
						decl.value.split(",").forEach((value) => {
							value.trim().split(/\s+/).forEach((className) => {
								const global = /^global\(([^)]+)\)$/.exec(className);
								if (global) localNames.forEach((exportedName) => {
									exports$1[exportedName].push(global[1]);
								});
								else if (hasOwnProperty.call(importedNames, className)) localNames.forEach((exportedName) => {
									exports$1[exportedName].push(className);
								});
								else if (hasOwnProperty.call(exports$1, className)) localNames.forEach((exportedName) => {
									exports$1[className].forEach((item) => {
										exports$1[exportedName].push(item);
									});
								});
								else throw decl.error(`referenced class name "${className}" in ${decl.prop} not found`);
							});
						});
						decl.remove();
					});
					rule.walkDecls((decl) => {
						if (!/:local\s*\((.+?)\)/.test(decl.value)) return;
						let tokens = decl.value.split(/(,|'[^']*'|"[^"]*")/);
						tokens = tokens.map((token, idx) => {
							if (idx === 0 || tokens[idx - 1] === ",") {
								let result = token;
								const localMatch = /:local\s*\((.+?)\)/.exec(token);
								if (localMatch) {
									const input = localMatch.input;
									const matchPattern = localMatch[0];
									const matchVal = localMatch[1];
									const newVal = exportScopedName(matchVal);
									result = input.replace(matchPattern, newVal);
								} else return token;
								return result;
							} else return token;
						});
						decl.value = tokens.join("");
					});
				});
				root.walkAtRules(/keyframes$/i, (atRule) => {
					const localMatch = /^\s*:local\s*\((.+?)\)\s*$/.exec(atRule.params);
					if (!localMatch) return;
					atRule.params = exportScopedName(localMatch[1]);
				});
				root.walkAtRules(/scope$/i, (atRule) => {
					if (atRule.params) atRule.params = atRule.params.split("to").map((item) => {
						const selector = item.trim().slice(1, -1).trim();
						if (!/^\s*:local\s*\((.+?)\)\s*$/.exec(selector)) return `(${selector})`;
						return `(${traverseNode(selectorParser().astSync(selector)).toString()})`;
					}).join(" to ");
				});
				const exportedNames = Object.keys(exports$1);
				if (exportedNames.length > 0) {
					const exportRule = rule({ selector: ":export" });
					exportedNames.forEach((exportedName) => exportRule.append({
						prop: exportedName,
						value: exports$1[exportedName].join(" "),
						raws: { before: "\n  " }
					}));
					root.append(exportRule);
				}
			}
		};
	};
	plugin.postcss = true;
	plugin.generateScopedName = function(name, path) {
		return `_${path.replace(/\.[^./\\]+$/, "").replace(/[\W_]+/g, "_").replace(/^_|_$/g, "")}__${name}`.trim();
	};
	plugin.generateExportEntry = function(name, scopedName) {
		return {
			key: unescape(name),
			value: unescape(scopedName)
		};
	};
	module.exports = plugin;
}));
var require_string_hash = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function hash(str) {
		var hash = 5381, i = str.length;
		while (i) hash = hash * 33 ^ str.charCodeAt(--i);
		return hash >>> 0;
	}
	module.exports = hash;
}));
var require_src = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const ICSSUtils = require_src$4();
	const matchImports = /^(.+?|\([\s\S]+?\))\s+from\s+("[^"]*"|'[^']*'|[\w-]+)$/;
	const matchValueDefinition = /(?:\s+|^)([\w-]+):?(.*?)$/;
	const matchImport = /^([\w-]+)(?:\s+as\s+([\w-]+))?/;
	module.exports = (options) => {
		let importIndex = 0;
		const createImportedName = options && options.createImportedName || ((importName) => `i__const_${importName.replace(/\W/g, "_")}_${importIndex++}`);
		return {
			postcssPlugin: "postcss-modules-values",
			prepare(result) {
				const importAliases = [];
				const definitions = {};
				return { Once(root, postcss) {
					root.walkAtRules(/value/i, (atRule) => {
						const matches = atRule.params.match(matchImports);
						if (matches) {
							let [, aliases, path] = matches;
							if (definitions[path]) path = definitions[path];
							const imports = aliases.replace(/^\(\s*([\s\S]+)\s*\)$/, "$1").split(/\s*,\s*/).map((alias) => {
								const tokens = matchImport.exec(alias);
								if (tokens) {
									const [, theirName, myName = theirName] = tokens;
									const importedName = createImportedName(myName);
									definitions[myName] = importedName;
									return {
										theirName,
										importedName
									};
								} else throw new Error(`@import statement "${alias}" is invalid!`);
							});
							importAliases.push({
								path,
								imports
							});
							atRule.remove();
							return;
						}
						if (atRule.params.indexOf("@value") !== -1) result.warn("Invalid value definition: " + atRule.params);
						let [, key, value] = `${atRule.params}${atRule.raws.between}`.match(matchValueDefinition);
						const normalizedValue = value.replace(/\/\*((?!\*\/).*?)\*\//g, "");
						if (normalizedValue.length === 0) {
							result.warn("Invalid value definition: " + atRule.params);
							atRule.remove();
							return;
						}
						if (!/^\s+$/.test(normalizedValue)) value = value.trim();
						definitions[key] = ICSSUtils.replaceValueSymbols(value, definitions);
						atRule.remove();
					});
					if (!Object.keys(definitions).length) return;
					ICSSUtils.replaceSymbols(root, definitions);
					const exportDeclarations = Object.keys(definitions).map((key) => postcss.decl({
						value: definitions[key],
						prop: key,
						raws: { before: "\n  " }
					}));
					if (exportDeclarations.length > 0) {
						const exportRule = postcss.rule({
							selector: ":export",
							raws: { after: "\n" }
						});
						exportRule.append(exportDeclarations);
						root.prepend(exportRule);
					}
					importAliases.reverse().forEach(({ path, imports }) => {
						const importRule = postcss.rule({
							selector: `:import(${path})`,
							raws: { after: "\n" }
						});
						imports.forEach(({ theirName, importedName }) => {
							importRule.append({
								value: theirName,
								prop: importedName,
								raws: { before: "\n  " }
							});
						});
						root.prepend(importRule);
					});
				} };
			}
		};
	};
	module.exports.postcss = true;
}));
var require_scoping = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	function _export(target, all) {
		for (var name in all) Object.defineProperty(target, name, {
			enumerable: true,
			get: Object.getOwnPropertyDescriptor(all, name).get
		});
	}
	_export(exports, {
		get behaviours() {
			return behaviours;
		},
		get getDefaultPlugins() {
			return getDefaultPlugins;
		},
		get getDefaultScopeBehaviour() {
			return getDefaultScopeBehaviour;
		},
		get getScopedNameGenerator() {
			return getScopedNameGenerator;
		}
	});
	const _postcssmodulesextractimports = /*#__PURE__*/ _interop_require_default(require_src$3());
	const _genericnames = /*#__PURE__*/ _interop_require_default(require_generic_names());
	const _postcssmoduleslocalbydefault = /*#__PURE__*/ _interop_require_default(require_src$2());
	const _postcssmodulesscope = /*#__PURE__*/ _interop_require_default(require_src$1());
	const _stringhash = /*#__PURE__*/ _interop_require_default(require_string_hash());
	const _postcssmodulesvalues = /*#__PURE__*/ _interop_require_default(require_src());
	function _interop_require_default(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	const behaviours = {
		LOCAL: "local",
		GLOBAL: "global"
	};
	function getDefaultPlugins({ behaviour, generateScopedName, exportGlobals }) {
		const scope = (0, _postcssmodulesscope.default)({
			generateScopedName,
			exportGlobals
		});
		return {
			[behaviours.LOCAL]: [
				_postcssmodulesvalues.default,
				(0, _postcssmoduleslocalbydefault.default)({ mode: "local" }),
				_postcssmodulesextractimports.default,
				scope
			],
			[behaviours.GLOBAL]: [
				_postcssmodulesvalues.default,
				(0, _postcssmoduleslocalbydefault.default)({ mode: "global" }),
				_postcssmodulesextractimports.default,
				scope
			]
		}[behaviour];
	}
	function isValidBehaviour(behaviour) {
		return Object.keys(behaviours).map((key) => behaviours[key]).indexOf(behaviour) > -1;
	}
	function getDefaultScopeBehaviour(scopeBehaviour) {
		return scopeBehaviour && isValidBehaviour(scopeBehaviour) ? scopeBehaviour : behaviours.LOCAL;
	}
	function makeDefaultScopedNameGenerator(hashPrefix) {
		return function generateScopedNameDefault(name, filename, css) {
			const i = css.indexOf(`.${name}`);
			const lineNumber = css.substr(0, i).split(/[\r\n]/).length;
			return `_${name}_${(0, _stringhash.default)(`${hashPrefix || ""}${css}`).toString(36).substr(0, 5)}_${lineNumber}`;
		};
	}
	function getScopedNameGenerator(generateScopedName, hashPrefix) {
		const scopedNameGenerator = generateScopedName || makeDefaultScopedNameGenerator(hashPrefix);
		if (typeof scopedNameGenerator === "function") return scopedNameGenerator;
		return (0, _genericnames.default)(scopedNameGenerator, {
			context: processModule.cwd(),
			hashPrefix
		});
	}
}));
var require_pluginFactory = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	Object.defineProperty(exports, "makePlugin", {
		enumerable: true,
		get: function() {
			return makePlugin;
		}
	});
	const _postcss = /*#__PURE__*/ _interop_require_default(__require("postcss"));
	const _unquote = /*#__PURE__*/ _interop_require_default(require_unquote());
	const _Parser = /*#__PURE__*/ _interop_require_default(require_Parser());
	const _saveJSON = /*#__PURE__*/ _interop_require_default(require_saveJSON());
	const _localsConvention = require_localsConvention();
	const _FileSystemLoader = /*#__PURE__*/ _interop_require_default(require_FileSystemLoader());
	const _scoping = require_scoping();
	function _interop_require_default(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}
	const PLUGIN_NAME = "postcss-modules";
	function isGlobalModule(globalModules, inputFile) {
		return globalModules.some((regex) => inputFile.match(regex));
	}
	function getDefaultPluginsList(opts, inputFile) {
		const globalModulesList = opts.globalModulePaths || null;
		const exportGlobals = opts.exportGlobals || false;
		const defaultBehaviour = (0, _scoping.getDefaultScopeBehaviour)(opts.scopeBehaviour);
		const generateScopedName = (0, _scoping.getScopedNameGenerator)(opts.generateScopedName, opts.hashPrefix);
		if (globalModulesList && isGlobalModule(globalModulesList, inputFile)) return (0, _scoping.getDefaultPlugins)({
			behaviour: _scoping.behaviours.GLOBAL,
			generateScopedName,
			exportGlobals
		});
		return (0, _scoping.getDefaultPlugins)({
			behaviour: defaultBehaviour,
			generateScopedName,
			exportGlobals
		});
	}
	function getLoader(opts, plugins) {
		const root = typeof opts.root === "undefined" ? "/" : opts.root;
		return typeof opts.Loader === "function" ? new opts.Loader(root, plugins, opts.resolve) : new _FileSystemLoader.default(root, plugins, opts.resolve);
	}
	function isOurPlugin(plugin) {
		return plugin.postcssPlugin === PLUGIN_NAME;
	}
	function makePlugin(opts) {
		return {
			postcssPlugin: PLUGIN_NAME,
			async OnceExit(css, { result }) {
				const getJSON = opts.getJSON || _saveJSON.default;
				const inputFile = css.source.input.file;
				const pluginList = getDefaultPluginsList(opts, inputFile);
				const resultPluginIndex = result.processor.plugins.findIndex((plugin) => isOurPlugin(plugin));
				if (resultPluginIndex === -1) throw new Error("Plugin missing from options.");
				const loader = getLoader(opts, [...result.processor.plugins.slice(0, resultPluginIndex), ...pluginList]);
				const fetcher = async (file, relativeTo, depTrace) => {
					const unquoteFile = (0, _unquote.default)(file);
					return loader.fetch.call(loader, unquoteFile, relativeTo, depTrace);
				};
				const parser = new _Parser.default(fetcher);
				await (0, _postcss.default)([...pluginList, parser.plugin()]).process(css, { from: inputFile });
				css.walkRules((rule) => {
					if (rule.selector.trim() === "") rule.remove();
				});
				const out = loader.finalSource;
				if (out) css.prepend(out);
				if (opts.localsConvention) {
					const reducer = (0, _localsConvention.makeLocalsConventionReducer)(opts.localsConvention, inputFile);
					parser.exportTokens = Object.entries(parser.exportTokens).reduce(reducer, {});
				}
				result.messages.push({
					type: "export",
					plugin: "postcss-modules",
					exportTokens: parser.exportTokens
				});
				return getJSON(css.source.input.file, parser.exportTokens, result.opts.to);
			}
		};
	}
}));
(/* @__PURE__ */ __commonJSMin(((exports, module) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	const _fs = __require("fs");
	const _fs1 = require_fs();
	const _pluginFactory = require_pluginFactory();
	(0, _fs1.setFileSystem)({
		readFile: _fs.readFile,
		writeFile: _fs.writeFile
	});
	module.exports = (opts = {}) => (0, _pluginFactory.makePlugin)(opts);
	module.exports.postcss = true;
})))();
var require_format_import_prelude = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function formatImportPrelude(layer, media, supports) {
		const parts = [];
		if (typeof layer !== "undefined") {
			let layerParams = "layer";
			if (layer) layerParams = `layer(${layer})`;
			parts.push(layerParams);
		}
		if (typeof supports !== "undefined") parts.push(`supports(${supports})`);
		if (typeof media !== "undefined") parts.push(media);
		return parts.join(" ");
	};
}));
var require_base64_encoded_import = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const formatImportPrelude = require_format_import_prelude();
	module.exports = function base64EncodedConditionalImport(prelude, conditions) {
		if (!conditions?.length) return prelude;
		conditions.reverse();
		const first = conditions.pop();
		let params = `${prelude} ${formatImportPrelude(first.layer, first.media, first.supports)}`;
		for (const condition of conditions) params = `'data:text/css;base64,${Buffer.from(`@import ${params}`).toString("base64")}' ${formatImportPrelude(condition.layer, condition.media, condition.supports)}`;
		return params;
	};
}));
var require_apply_conditions = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const base64EncodedConditionalImport = require_base64_encoded_import();
	module.exports = function applyConditions(bundle, atRule) {
		const firstImportStatementIndex = bundle.findIndex((stmt) => stmt.type === "import");
		const lastImportStatementIndex = bundle.findLastIndex((stmt) => stmt.type === "import");
		bundle.forEach((stmt, index) => {
			if (stmt.type === "charset" || stmt.type === "warning") return;
			if (stmt.type === "layer" && (index < lastImportStatementIndex && stmt.conditions?.length || index > firstImportStatementIndex && index < lastImportStatementIndex)) {
				stmt.type = "import";
				stmt.node = stmt.node.clone({
					name: "import",
					params: base64EncodedConditionalImport(`'data:text/css;base64,${Buffer.from(stmt.node.toString()).toString("base64")}'`, stmt.conditions)
				});
				return;
			}
			if (!stmt.conditions?.length) return;
			if (stmt.type === "import") {
				stmt.node.params = base64EncodedConditionalImport(stmt.fullUri, stmt.conditions);
				return;
			}
			let nodes;
			let parent;
			if (stmt.type === "layer") {
				nodes = [stmt.node];
				parent = stmt.node.parent;
			} else {
				nodes = stmt.nodes;
				parent = nodes[0].parent;
			}
			const atRules = [];
			for (const condition of stmt.conditions) {
				if (typeof condition.media !== "undefined") {
					const mediaNode = atRule({
						name: "media",
						params: condition.media,
						source: parent.source
					});
					atRules.push(mediaNode);
				}
				if (typeof condition.supports !== "undefined") {
					const supportsNode = atRule({
						name: "supports",
						params: `(${condition.supports})`,
						source: parent.source
					});
					atRules.push(supportsNode);
				}
				if (typeof condition.layer !== "undefined") {
					const layerNode = atRule({
						name: "layer",
						params: condition.layer,
						source: parent.source
					});
					atRules.push(layerNode);
				}
			}
			const outerAtRule = atRules.shift();
			const innerAtRule = atRules.reduce((previous, next) => {
				previous.append(next);
				return next;
			}, outerAtRule);
			parent.insertBefore(nodes[0], outerAtRule);
			nodes.forEach((node) => {
				node.parent = void 0;
			});
			nodes[0].raws.before = nodes[0].raws.before || "\n";
			innerAtRule.append(nodes);
			stmt.type = "nodes";
			stmt.nodes = [outerAtRule];
			delete stmt.node;
		});
	};
}));
var require_apply_raws = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function applyRaws(bundle) {
		bundle.forEach((stmt, index) => {
			if (index === 0) return;
			if (stmt.parent) {
				const { before } = stmt.parent.node.raws;
				if (stmt.type === "nodes") stmt.nodes[0].raws.before = before;
				else stmt.node.raws.before = before;
			} else if (stmt.type === "nodes") stmt.nodes[0].raws.before = stmt.nodes[0].raws.before || "\n";
		});
	};
}));
var require_apply_styles = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function applyStyles(bundle, styles) {
		styles.nodes = [];
		bundle.forEach((stmt) => {
			if ([
				"charset",
				"import",
				"layer"
			].includes(stmt.type)) {
				stmt.node.parent = void 0;
				styles.append(stmt.node);
			} else if (stmt.type === "nodes") stmt.nodes.forEach((node) => {
				node.parent = void 0;
				styles.append(node);
			});
		});
	};
}));
var require_data_url = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const anyDataURLRegexp = /^data:text\/css(?:;(base64|plain))?,/i;
	const base64DataURLRegexp = /^data:text\/css;base64,/i;
	const plainDataURLRegexp = /^data:text\/css;plain,/i;
	function isValid(url) {
		return anyDataURLRegexp.test(url);
	}
	function contents(url) {
		if (base64DataURLRegexp.test(url)) return Buffer.from(url.slice(21), "base64").toString();
		if (plainDataURLRegexp.test(url)) return decodeURIComponent(url.slice(20));
		return decodeURIComponent(url.slice(14));
	}
	module.exports = {
		isValid,
		contents
	};
}));
var require_parse_statements = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const valueParser = require_lib();
	const { stringify } = valueParser;
	module.exports = function parseStatements(result, styles, conditions, from) {
		const statements = [];
		let nodes = [];
		let encounteredNonImportNodes = false;
		styles.each((node) => {
			let stmt;
			if (node.type === "atrule") {
				if (node.name === "import") stmt = parseImport(result, node, conditions, from);
				else if (node.name === "charset") stmt = parseCharset(result, node, conditions, from);
				else if (node.name === "layer" && !encounteredNonImportNodes && !node.nodes) stmt = parseLayer(result, node, conditions, from);
			} else if (node.type !== "comment") encounteredNonImportNodes = true;
			if (stmt) {
				if (nodes.length) {
					statements.push({
						type: "nodes",
						nodes,
						conditions: [...conditions],
						from
					});
					nodes = [];
				}
				statements.push(stmt);
			} else nodes.push(node);
		});
		if (nodes.length) statements.push({
			type: "nodes",
			nodes,
			conditions: [...conditions],
			from
		});
		return statements;
	};
	function parseCharset(result, atRule, conditions, from) {
		if (atRule.prev()) return result.warn("@charset must precede all other statements", { node: atRule });
		return {
			type: "charset",
			node: atRule,
			conditions: [...conditions],
			from
		};
	}
	function parseImport(result, atRule, conditions, from) {
		let prev = atRule.prev();
		if (prev) do {
			if (prev.type === "comment" || prev.type === "atrule" && prev.name === "import") {
				prev = prev.prev();
				continue;
			}
			break;
		} while (prev);
		if (prev) do {
			if (prev.type === "comment" || prev.type === "atrule" && (prev.name === "charset" || prev.name === "layer" && !prev.nodes)) {
				prev = prev.prev();
				continue;
			}
			return result.warn("@import must precede all other statements (besides @charset or empty @layer)", { node: atRule });
		} while (prev);
		if (atRule.nodes) return result.warn("It looks like you didn't end your @import statement correctly. Child nodes are attached to it.", { node: atRule });
		const params = valueParser(atRule.params).nodes;
		const stmt = {
			type: "import",
			uri: "",
			fullUri: "",
			node: atRule,
			conditions: [...conditions],
			from
		};
		let layer;
		let media;
		let supports;
		for (let i = 0; i < params.length; i++) {
			const node = params[i];
			if (node.type === "space" || node.type === "comment") continue;
			if (node.type === "string") {
				if (stmt.uri) return result.warn(`Multiple url's in '${atRule.toString()}'`, { node: atRule });
				if (!node.value) return result.warn(`Unable to find uri in '${atRule.toString()}'`, { node: atRule });
				stmt.uri = node.value;
				stmt.fullUri = stringify(node);
				continue;
			}
			if (node.type === "function" && /^url$/i.test(node.value)) {
				if (stmt.uri) return result.warn(`Multiple url's in '${atRule.toString()}'`, { node: atRule });
				if (!node.nodes?.[0]?.value) return result.warn(`Unable to find uri in '${atRule.toString()}'`, { node: atRule });
				stmt.uri = node.nodes[0].value;
				stmt.fullUri = stringify(node);
				continue;
			}
			if (!stmt.uri) return result.warn(`Unable to find uri in '${atRule.toString()}'`, { node: atRule });
			if ((node.type === "word" || node.type === "function") && /^layer$/i.test(node.value)) {
				if (typeof layer !== "undefined") return result.warn(`Multiple layers in '${atRule.toString()}'`, { node: atRule });
				if (typeof supports !== "undefined") return result.warn(`layers must be defined before support conditions in '${atRule.toString()}'`, { node: atRule });
				if (node.nodes) layer = stringify(node.nodes);
				else layer = "";
				continue;
			}
			if (node.type === "function" && /^supports$/i.test(node.value)) {
				if (typeof supports !== "undefined") return result.warn(`Multiple support conditions in '${atRule.toString()}'`, { node: atRule });
				supports = stringify(node.nodes);
				continue;
			}
			media = stringify(params.slice(i));
			break;
		}
		if (!stmt.uri) return result.warn(`Unable to find uri in '${atRule.toString()}'`, { node: atRule });
		if (typeof media !== "undefined" || typeof layer !== "undefined" || typeof supports !== "undefined") stmt.conditions.push({
			layer,
			media,
			supports
		});
		return stmt;
	}
	function parseLayer(result, atRule, conditions, from) {
		return {
			type: "layer",
			node: atRule,
			conditions: [...conditions],
			from
		};
	}
}));
var require_process_content = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const path$2 = __require("path");
	let sugarss;
	module.exports = function processContent(result, content, filename, options, postcss) {
		const { plugins } = options;
		const ext = path$2.extname(filename);
		const parserList = [];
		if (ext === ".sss") {
			if (!sugarss)
 /* c8 ignore next 3 */
			try {
				sugarss = __require("sugarss");
			} catch {}
			if (sugarss) return runPostcss(postcss, content, filename, plugins, [sugarss]);
		}
		if (result.opts.syntax?.parse) parserList.push(result.opts.syntax.parse);
		if (result.opts.parser) parserList.push(result.opts.parser);
		parserList.push(null);
		return runPostcss(postcss, content, filename, plugins, parserList);
	};
	function runPostcss(postcss, content, filename, plugins, parsers, index) {
		if (!index) index = 0;
		return postcss(plugins).process(content, {
			from: filename,
			parser: parsers[index]
		}).catch((err) => {
			index++;
			if (index === parsers.length) throw err;
			return runPostcss(postcss, content, filename, plugins, parsers, index);
		});
	}
}));
var require_parse_styles = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const path$1 = __require("path");
	const dataURL = require_data_url();
	const parseStatements = require_parse_statements();
	const processContent = require_process_content();
	const resolveId = (id) => id;
	const formatImportPrelude = require_format_import_prelude();
	async function parseStyles(result, styles, options, state, conditions, from, postcss) {
		const statements = parseStatements(result, styles, conditions, from);
		for (const stmt of statements) {
			if (stmt.type !== "import" || !isProcessableURL(stmt.uri)) continue;
			if (options.filter && !options.filter(stmt.uri)) continue;
			await resolveImportId(result, stmt, options, state, postcss);
		}
		let charset;
		const beforeBundle = [];
		const bundle = [];
		function handleCharset(stmt) {
			if (!charset) charset = stmt;
			else if (stmt.node.params.toLowerCase() !== charset.node.params.toLowerCase()) throw stmt.node.error(`Incompatible @charset statements:
  ${stmt.node.params} specified in ${stmt.node.source.input.file}
  ${charset.node.params} specified in ${charset.node.source.input.file}`);
		}
		statements.forEach((stmt) => {
			if (stmt.type === "charset") handleCharset(stmt);
			else if (stmt.type === "import") if (stmt.children) stmt.children.forEach((child, index) => {
				if (child.type === "import") beforeBundle.push(child);
				else if (child.type === "layer") beforeBundle.push(child);
				else if (child.type === "charset") handleCharset(child);
				else bundle.push(child);
				if (index === 0) child.parent = stmt;
			});
			else beforeBundle.push(stmt);
			else if (stmt.type === "layer") beforeBundle.push(stmt);
			else if (stmt.type === "nodes") bundle.push(stmt);
		});
		return charset ? [charset, ...beforeBundle.concat(bundle)] : beforeBundle.concat(bundle);
	}
	async function resolveImportId(result, stmt, options, state, postcss) {
		if (dataURL.isValid(stmt.uri)) {
			stmt.children = await loadImportContent(result, stmt, stmt.uri, options, state, postcss);
			return;
		} else if (dataURL.isValid(stmt.from.slice(-1))) throw stmt.node.error(`Unable to import '${stmt.uri}' from a stylesheet that is embedded in a data url`);
		const atRule = stmt.node;
		let sourceFile;
		if (atRule.source?.input?.file) sourceFile = atRule.source.input.file;
		const base = sourceFile ? path$1.dirname(atRule.source.input.file) : options.root;
		const paths = [await options.resolve(stmt.uri, base, options, atRule)].flat();
		const resolved = await Promise.all(paths.map((file) => {
			return !path$1.isAbsolute(file) ? resolveId(file, base, options, atRule) : file;
		}));
		resolved.forEach((file) => {
			result.messages.push({
				type: "dependency",
				plugin: "postcss-import",
				file,
				parent: sourceFile
			});
		});
		stmt.children = (await Promise.all(resolved.map((file) => {
			return loadImportContent(result, stmt, file, options, state, postcss);
		}))).flat().filter((x) => !!x);
	}
	async function loadImportContent(result, stmt, filename, options, state, postcss) {
		const atRule = stmt.node;
		const { conditions, from } = stmt;
		const stmtDuplicateCheckKey = conditions.map((condition) => formatImportPrelude(condition.layer, condition.media, condition.supports)).join(":");
		if (options.skipDuplicates) {
			if (state.importedFiles[filename]?.[stmtDuplicateCheckKey]) return;
			if (!state.importedFiles[filename]) state.importedFiles[filename] = {};
			state.importedFiles[filename][stmtDuplicateCheckKey] = true;
		}
		if (from.includes(filename)) return;
		const content = await options.load(filename, options);
		if (content.trim() === "" && options.warnOnEmpty) {
			result.warn(`${filename} is empty`, { node: atRule });
			return;
		}
		if (options.skipDuplicates && state.hashFiles[content]?.[stmtDuplicateCheckKey]) return;
		const importedResult = await processContent(result, content, filename, options, postcss);
		const styles = importedResult.root;
		result.messages = result.messages.concat(importedResult.messages);
		if (options.skipDuplicates) {
			if (!styles.some((child) => {
				return child.type === "atrule" && child.name === "import";
			})) {
				if (!state.hashFiles[content]) state.hashFiles[content] = {};
				state.hashFiles[content][stmtDuplicateCheckKey] = true;
			}
		}
		return parseStyles(result, styles, options, state, conditions, [...from, filename], postcss);
	}
	function isProcessableURL(uri) {
		if (/^(?:[a-z]+:)?\/\//i.test(uri)) return false;
		try {
			if (new URL(uri, "https://example.com").search) return false;
		} catch {}
		return true;
	}
	module.exports = parseStyles;
}));
(/* @__PURE__ */ __commonJSMin(((exports, module) => {
	const path = __require("path");
	const applyConditions = require_apply_conditions();
	const applyRaws = require_apply_raws();
	const applyStyles = require_apply_styles();
	const loadContent = () => "";
	const parseStyles = require_parse_styles();
	const resolveId = (id) => id;
	function AtImport(options) {
		options = {
			root: processModule.cwd(),
			path: [],
			skipDuplicates: true,
			resolve: resolveId,
			load: loadContent,
			plugins: [],
			addModulesDirectories: [],
			warnOnEmpty: true,
			...options
		};
		options.root = path.resolve(options.root);
		if (typeof options.path === "string") options.path = [options.path];
		if (!Array.isArray(options.path)) options.path = [];
		options.path = options.path.map((p) => path.resolve(options.root, p));
		return {
			postcssPlugin: "postcss-import",
			async Once(styles, { result, atRule, postcss }) {
				const state = {
					importedFiles: {},
					hashFiles: {}
				};
				if (styles.source?.input?.file) state.importedFiles[styles.source.input.file] = {};
				if (options.plugins && !Array.isArray(options.plugins)) throw new Error("plugins option must be an array");
				const bundle = await parseStyles(result, styles, options, state, [], [], postcss);
				applyRaws(bundle);
				applyConditions(bundle, atRule);
				applyStyles(bundle, styles);
			}
		};
	}
	AtImport.postcss = true;
	module.exports = AtImport;
})))();
//#endregion
export {};
