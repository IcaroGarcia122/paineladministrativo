import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AppContext-w0-l3Ny3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
require_jsx_dev_runtime();
var AppContext = (0, import_react.createContext)(void 0);
var useApp = () => {
	const context = (0, import_react.useContext)(AppContext);
	if (!context) throw new Error("useApp must be used within an AppProvider");
	return context;
};
//#endregion
export { useApp as t };
