import { t as __commonJSMin } from "../_runtime.mjs";
//#region node_modules/nanoid/non-secure/index.cjs
var require_non_secure = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
	var customAlphabet = (alphabet, defaultSize = 21) => {
		return (size = defaultSize) => {
			let id = "";
			let i = size | 0;
			while (i-- > 0) id += alphabet[Math.random() * alphabet.length | 0];
			return id;
		};
	};
	var nanoid = (size = 21) => {
		let id = "";
		let i = size | 0;
		while (i-- > 0) id += urlAlphabet[Math.random() * 64 | 0];
		return id;
	};
	module.exports = {
		nanoid,
		customAlphabet
	};
}));
//#endregion
export { require_non_secure as t };
