import { r as __exportAll } from "../_runtime.mjs";
import { n as globalthis_default, r as init_globalthis } from "./supabase__realtime-js+unenv.mjs";
import { t as require_main } from "./esbuild+unenv.mjs";
import $, { createRequire } from "node:module";
import processModule from "node:process";
import { Buffer } from "node:buffer";
import { setImmediate } from "node:timers";
import path from "node:path";
import { inspect } from "node:util";
import fs, { existsSync, writeSync } from "node:fs";
import net from "node:net";
import { fileURLToPath, pathToFileURL } from "node:url";
import crypto from "node:crypto";
import os from "node:os";
//#region node_modules/tsx/dist/temporary-directory-BDDVQOvU.mjs
var { geteuid: r$1 } = processModule, t$3 = r$1 ? r$1() : os.userInfo().username, e$2 = path.join(os.tmpdir(), `tsx-${t$3}`);
//#endregion
//#region node_modules/tsx/dist/get-pipe-path-_tAJyU_v.mjs
var o$2 = Object.defineProperty;
var t$2 = (e, r) => o$2(e, "name", {
	value: r,
	configurable: !0
});
var m$2 = createRequire(import.meta.url || "file:///");
var i$3 = processModule.platform === "win32";
var n$1 = t$2((e) => {
	const r = path.join(e$2, `${e}.pipe`);
	return i$3 ? `\\\\?\\pipe\\${r}` : r;
}, "getPipePath");
//#endregion
//#region node_modules/tsx/dist/node-features-JeyyvQz6.mjs
init_globalthis();
var import_main = require_main();
var i$2 = Object.defineProperty;
var o$1 = (e, t) => i$2(e, "name", {
	value: t,
	configurable: !0
});
var n = o$1((e, t) => {
	const s = e[0] - t[0];
	if (s === 0) {
		const r = e[1] - t[1];
		return r === 0 ? e[2] >= t[2] : r > 0;
	}
	return s > 0;
}, "isVersionGreaterOrEqual");
var a$3 = processModule.versions.node.split(".").map(Number);
var c$2 = o$1((e, t = a$3) => {
	for (let s = 0; s < e.length; s += 1) {
		const r = e[s];
		if (s === e.length - 1 || t[0] === r[0]) return n(t, r);
	}
	return !1;
}, "isFeatureSupported");
var d$1 = [[
	20,
	11,
	0
], [
	21,
	2,
	0
]];
var R$3 = [
	[
		20,
		19,
		0
	],
	[
		22,
		12,
		0
	],
	[
		23,
		0,
		0
	]
];
//#endregion
//#region node_modules/tsx/dist/index-DQtFPMc2.mjs
var Xt$1 = Object.defineProperty;
var u$1 = (s, e) => Xt$1(s, "name", {
	value: e,
	configurable: !0
});
var xe$1 = u$1((s) => crypto.createHash("sha1").update(s).digest("hex"), "sha1");
var E$1;
var oe$1;
var ve$1;
var Y$2 = 2 << 19;
var Be$1 = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1 ? function(s, e) {
	const n = s.length;
	let i = 0;
	for (; i < n;) e[i] = s.charCodeAt(i++);
} : function(s, e) {
	const n = s.length;
	let i = 0;
	for (; i < n;) {
		const o = s.charCodeAt(i);
		e[i++] = (255 & o) << 8 | o >>> 8;
	}
};
var sn$1 = "xportmportlassforetaourceromsyncunctionssertvoyiedelecontininstantybreareturdebuggeawaithrwhileifcatcfinallels";
var I$2;
var Pe;
var C$1;
function on$1(s, e = "@") {
	I$2 = s, Pe = e;
	const n = 2 * I$2.length + (2 << 18);
	if (n > Y$2 || !E$1) {
		for (; n > Y$2;) Y$2 *= 2;
		oe$1 = new ArrayBuffer(Y$2), Be$1(sn$1, new Uint16Array(oe$1, 16, 110)), E$1 = function(l, p, g) {
			var b = new l.Int8Array(g), d = new l.Int16Array(g), r = new l.Int32Array(g), S = new l.Uint8Array(g);
			new l.Uint16Array(g);
			var _ = 1040;
			function N() {
				var t = 0, c = 0, h = 0, f = 0, m = 0, w = 0, y = 0;
				y = _, _ = _ + 10240 | 0, b[804] = 1, b[803] = 0, d[399] = 0, d[400] = 0, r[69] = r[2], b[805] = 0, r[68] = 0, b[802] = 0, r[70] = y + 2048, r[71] = y, b[806] = 0, t = (r[3] | 0) + -2 | 0, r[72] = t, c = t + (r[66] << 1) | 0, r[73] = c;
				e: for (;;) {
					if (h = t + 2 | 0, r[72] = h, t >>> 0 >= c >>> 0) {
						f = 18;
						break;
					}
					t: do
						switch (d[h >> 1] | 0) {
							case 9:
							case 10:
							case 11:
							case 12:
							case 13:
							case 32: break;
							case 101:
								if (!(d[400] | 0) && K(h) | 0 && !(A(t + 4 | 0, 16, 10) | 0) && ($(), (b[804] | 0) == 0)) {
									f = 9;
									break e;
								} else f = 17;
								break;
							case 105:
								K(h) | 0 && !(A(t + 4 | 0, 26, 10) | 0) && B(), f = 17;
								break;
							case 59:
								f = 17;
								break;
							case 47: switch (d[t + 4 >> 1] | 0) {
								case 47:
									pe();
									break t;
								case 42:
									ge(1);
									break t;
								default:
									f = 16;
									break e;
							}
							default:
								f = 16;
								break e;
						}
					while (!1);
					(f | 0) == 17 && (f = 0, r[69] = r[72]), t = r[72] | 0, c = r[73] | 0;
				}
				(f | 0) == 9 ? (t = r[72] | 0, r[69] = t, f = 19) : (f | 0) == 16 ? (b[804] = 0, r[72] = t, f = 19) : (f | 0) == 18 && (b[802] | 0 ? t = 0 : (t = h, f = 19));
				do
					if ((f | 0) == 19) {
						e: for (;;) {
							if (c = t + 2 | 0, r[72] = c, t >>> 0 >= (r[73] | 0) >>> 0) {
								f = 92;
								break;
							}
							t: do
								switch (d[c >> 1] | 0) {
									case 9:
									case 10:
									case 11:
									case 12:
									case 13:
									case 32: break;
									case 101:
										!(d[400] | 0) && K(c) | 0 && !(A(t + 4 | 0, 16, 10) | 0) && $(), f = 91;
										break;
									case 105:
										K(c) | 0 && !(A(t + 4 | 0, 26, 10) | 0) && B(), f = 91;
										break;
									case 99:
										K(c) | 0 && !(A(t + 4 | 0, 36, 8) | 0) && W(d[t + 12 >> 1] | 0) | 0 && (b[806] = 1), f = 91;
										break;
									case 40:
										h = r[70] | 0, t = d[400] | 0, f = t & 65535, r[h + (f << 3) >> 2] = 1, c = r[69] | 0, d[400] = t + 1 << 16 >> 16, r[h + (f << 3) + 4 >> 2] = c, f = 91;
										break;
									case 41:
										if (c = d[400] | 0, !(c << 16 >> 16)) {
											f = 36;
											break e;
										}
										h = c + -1 << 16 >> 16, d[400] = h, f = d[399] | 0, c = f & 65535, f << 16 >> 16 && (r[(r[70] | 0) + ((h & 65535) << 3) >> 2] | 0) == 5 && (c = r[(r[71] | 0) + (c + -1 << 2) >> 2] | 0, h = c + 4 | 0, r[h >> 2] | 0 || (r[h >> 2] = (r[69] | 0) + 2), r[c + 12 >> 2] = t + 4, d[399] = f + -1 << 16 >> 16), f = 91;
										break;
									case 123:
										f = r[69] | 0, h = r[63] | 0, t = f;
										do
											if ((d[f >> 1] | 0) == 41 & (h | 0) != 0 && (r[h + 4 >> 2] | 0) == (f | 0)) if (c = r[64] | 0, r[63] = c, c) {
												r[c + 32 >> 2] = 0;
												break;
											} else {
												r[59] = 0;
												break;
											}
										while (!1);
										h = r[70] | 0, c = d[400] | 0, f = c & 65535, r[h + (f << 3) >> 2] = b[806] | 0 ? 6 : 2, d[400] = c + 1 << 16 >> 16, r[h + (f << 3) + 4 >> 2] = t, b[806] = 0, f = 91;
										break;
									case 125:
										if (t = d[400] | 0, !(t << 16 >> 16)) {
											f = 49;
											break e;
										}
										h = r[70] | 0, f = t + -1 << 16 >> 16, d[400] = f, (r[h + ((f & 65535) << 3) >> 2] | 0) == 4 && De(), f = 91;
										break;
									case 39:
										R(39), f = 91;
										break;
									case 34:
										R(34), f = 91;
										break;
									case 47: switch (d[t + 4 >> 1] | 0) {
										case 47:
											pe();
											break t;
										case 42:
											ge(1);
											break t;
										default:
											t = r[69] | 0, c = d[t >> 1] | 0;
											n: do
												if (!(_t(c) | 0)) c << 16 >> 16 == 41 ? (h = d[400] | 0, At(r[(r[70] | 0) + ((h & 65535) << 3) + 4 >> 2] | 0) | 0 || (f = 65)) : f = 64;
												else switch (c << 16 >> 16) {
													case 46: if (((d[t + -2 >> 1] | 0) + -48 & 65535) < 10) {
														f = 64;
														break n;
													} else break n;
													case 43: if ((d[t + -2 >> 1] | 0) == 43) {
														f = 64;
														break n;
													} else break n;
													case 45: if ((d[t + -2 >> 1] | 0) == 45) {
														f = 64;
														break n;
													} else break n;
													default: break n;
												}
											while (!1);
											(f | 0) == 64 && (h = d[400] | 0, f = 65);
											n: do
												if ((f | 0) == 65) {
													if (f = 0, h << 16 >> 16 && (m = r[70] | 0, w = (h & 65535) + -1 | 0, c << 16 >> 16 == 102 ? (r[m + (w << 3) >> 2] | 0) == 1 : 0)) {
														if ((d[t + -2 >> 1] | 0) == 111 && L(r[m + (w << 3) + 4 >> 2] | 0, 44, 3) | 0) break;
													} else f = 69;
													if ((f | 0) == 69 && c << 16 >> 16 == 125 && (f = r[70] | 0, h = h & 65535, Et(r[f + (h << 3) + 4 >> 2] | 0) | 0 || (r[f + (h << 3) >> 2] | 0) == 6)) break;
													if (!(xt(t) | 0)) {
														switch (c << 16 >> 16) {
															case 0: break n;
															case 47: if (b[805] | 0) break n;
														}
														if (f = r[65] | 0, f | 0 && t >>> 0 >= (r[f >> 2] | 0) >>> 0 && t >>> 0 <= (r[f + 4 >> 2] | 0) >>> 0) {
															de(), b[805] = 0, f = 91;
															break t;
														}
														h = r[3] | 0;
														do {
															if (t >>> 0 <= h >>> 0) break;
															t = t + -2 | 0, r[69] = t, c = d[t >> 1] | 0;
														} while (!(be(c) | 0));
														if (se(c) | 0) {
															do {
																if (t >>> 0 <= h >>> 0) break;
																t = t + -2 | 0, r[69] = t;
															} while (se(d[t >> 1] | 0) | 0);
															if (Lt(t) | 0) {
																de(), b[805] = 0, f = 91;
																break t;
															}
														}
														b[805] = 1, f = 91;
														break t;
													}
												}
											while (!1);
											de(), b[805] = 0, f = 91;
											break t;
									}
									case 96:
										h = r[70] | 0, c = d[400] | 0, f = c & 65535, r[h + (f << 3) + 4 >> 2] = r[69], d[400] = c + 1 << 16 >> 16, r[h + (f << 3) >> 2] = 3, De(), f = 91;
										break;
									default: f = 91;
								}
							while (!1);
							(f | 0) == 91 && (f = 0, r[69] = r[72]), t = r[72] | 0;
						}
						if ((f | 0) == 36) {
							M(), t = 0;
							break;
						} else if ((f | 0) == 49) {
							M(), t = 0;
							break;
						} else if ((f | 0) == 92) {
							t = b[802] | 0 ? 0 : (d[399] | d[400]) << 16 >> 16 == 0;
							break;
						}
					}
				while (!1);
				return _ = y, t | 0;
			}
			u$1(N, "b");
			function $() {
				var t = 0, c = 0, h = 0, f = 0, m = 0, w = 0, y = 0, T = 0, we = 0, ke = 0, Ce = 0, ye = 0, x = 0, v = 0;
				T = r[72] | 0, we = r[65] | 0, v = T + 12 | 0, r[72] = v, h = k(1) | 0, t = r[72] | 0, (t | 0) == (v | 0) && !(ie(h) | 0) || (x = 3);
				e: do
					if ((x | 0) == 3) {
						t: do
							switch (h << 16 >> 16) {
								case 123:
									for (r[72] = t + 2, t = k(1) | 0, c = r[72] | 0;;) {
										if (X(t) | 0 ? (R(t), t = (r[72] | 0) + 2 | 0, r[72] = t) : (j(t) | 0, t = r[72] | 0), k(1) | 0, t = je(c, t) | 0, t << 16 >> 16 == 44 && (r[72] = (r[72] | 0) + 2, t = k(1) | 0), t << 16 >> 16 == 125) {
											x = 15;
											break;
										}
										if (v = c, c = r[72] | 0, (c | 0) == (v | 0)) {
											x = 12;
											break;
										}
										if (c >>> 0 > (r[73] | 0) >>> 0) {
											x = 14;
											break;
										}
									}
									if ((x | 0) == 12) {
										M();
										break e;
									} else if ((x | 0) == 14) {
										M();
										break e;
									} else if ((x | 0) == 15) {
										b[803] = 1, r[72] = (r[72] | 0) + 2;
										break t;
									}
									break;
								case 42:
									r[72] = t + 2, k(1) | 0, v = r[72] | 0, je(v, v) | 0;
									break;
								default:
									switch (b[804] = 0, h << 16 >> 16) {
										case 100:
											switch (T = t + 14 | 0, r[72] = T, (k(1) | 0) << 16 >> 16) {
												case 97:
													c = r[72] | 0, !(A(c + 2 | 0, 72, 8) | 0) && (m = c + 10 | 0, se(d[m >> 1] | 0) | 0) && (r[72] = m, k(0) | 0, x = 22);
													break;
												case 102:
													x = 22;
													break;
												case 99: c = r[72] | 0, !(A(c + 2 | 0, 36, 8) | 0) && (f = c + 10 | 0, v = d[f >> 1] | 0, W(v) | 0 | v << 16 >> 16 == 123) && (r[72] = f, w = k(1) | 0, w << 16 >> 16 != 123) && (ye = w, x = 31);
											}
											n: do
												if ((x | 0) == 22 && (y = r[72] | 0, (A(y + 2 | 0, 80, 14) | 0) == 0)) {
													if (h = y + 16 | 0, c = d[h >> 1] | 0, !(W(c) | 0)) switch (c << 16 >> 16) {
														case 40:
														case 42: break;
														default: break n;
													}
													r[72] = h, c = k(1) | 0, c << 16 >> 16 == 42 && (r[72] = (r[72] | 0) + 2, c = k(1) | 0), c << 16 >> 16 != 40 && (ye = c, x = 31);
												}
											while (!1);
											if ((x | 0) == 31 && (ke = r[72] | 0, j(ye) | 0, Ce = r[72] | 0, Ce >>> 0 > ke >>> 0)) {
												P(t, T, ke, Ce), r[72] = (r[72] | 0) + -2;
												break e;
											}
											P(t, T, 0, 0), r[72] = t + 12;
											break e;
										case 97:
											r[72] = t + 10, k(0) | 0, t = r[72] | 0, x = 35;
											break;
										case 102:
											x = 35;
											break;
										case 99:
											if (!(A(t + 2 | 0, 36, 8) | 0) && (c = t + 10 | 0, be(d[c >> 1] | 0) | 0)) {
												r[72] = c, v = k(1) | 0, x = r[72] | 0, j(v) | 0, v = r[72] | 0, P(x, v, x, v), r[72] = (r[72] | 0) + -2;
												break e;
											}
											t = t + 4 | 0, r[72] = t;
											break;
										case 108:
										case 118: break;
										default: break e;
									}
									if ((x | 0) == 35) {
										r[72] = t + 16, t = k(1) | 0, t << 16 >> 16 == 42 && (r[72] = (r[72] | 0) + 2, t = k(1) | 0), x = r[72] | 0, j(t) | 0, v = r[72] | 0, P(x, v, x, v), r[72] = (r[72] | 0) + -2;
										break e;
									}
									r[72] = t + 6, b[804] = 0, h = k(1) | 0, t = r[72] | 0, h = (j(h) | 32) << 16 >> 16 == 123, f = r[72] | 0, h && (r[72] = f + 2, v = k(1) | 0, t = r[72] | 0, j(v) | 0);
									n: for (; c = r[72] | 0, (c | 0) != (t | 0);) {
										if (P(t, c, t, c), c = k(1) | 0, h) switch (c << 16 >> 16) {
											case 93:
											case 125: break e;
											default:
										}
										if (t = r[72] | 0, c << 16 >> 16 != 44) {
											x = 51;
											break;
										}
										switch (r[72] = t + 2, c = k(1) | 0, t = r[72] | 0, c << 16 >> 16) {
											case 91:
											case 123:
												x = 51;
												break n;
										}
										j(c) | 0;
									}
									if ((x | 0) == 51 && (r[72] = t + -2), !h) break e;
									r[72] = f + -2;
									break e;
							}
						while (!1);
						if (v = (k(1) | 0) << 16 >> 16 == 102, t = r[72] | 0, v && !(A(t + 2 | 0, 66, 6) | 0)) for (r[72] = t + 8, H(T, k(1) | 0, 0), t = we | 0 ? we + 16 | 0 : 240;;) {
							if (t = r[t >> 2] | 0, !t) break e;
							r[t + 12 >> 2] = 0, r[t + 8 >> 2] = 0, t = t + 16 | 0;
						}
						r[72] = t + -2;
					}
				while (!1);
			}
			u$1($, "k");
			function B() {
				var t = 0, c = 0, h = 0, f = 0, m = 0, w = 0, y = 0;
				m = r[72] | 0, h = m + 12 | 0, r[72] = h, f = k(1) | 0, c = r[72] | 0;
				e: do
					if (f << 16 >> 16 != 46) f << 16 >> 16 == 115 & c >>> 0 > h >>> 0 ? !(A(c + 2 | 0, 56, 10) | 0) && (t = c + 12 | 0, W(d[t >> 1] | 0) | 0) ? w = 14 : (c = 6, h = 0, w = 46) : (t = f, h = 0, w = 15);
					else switch (r[72] = c + 2, (k(1) | 0) << 16 >> 16) {
						case 109:
							if (t = r[72] | 0, A(t + 2 | 0, 50, 6) | 0 || (c = r[69] | 0, !(me(c) | 0) && (d[c >> 1] | 0) == 46)) break e;
							he(m, m, t + 8 | 0, 2);
							break e;
						case 115:
							if (t = r[72] | 0, A(t + 2 | 0, 56, 10) | 0 || (c = r[69] | 0, !(me(c) | 0) && (d[c >> 1] | 0) == 46)) break e;
							t = t + 12 | 0, w = 14;
							break e;
						default: break e;
					}
				while (!1);
				(w | 0) == 14 && (r[72] = t, t = k(1) | 0, h = 1, w = 15);
				e: do
					if ((w | 0) == 15) switch (t << 16 >> 16) {
						case 40:
							if (c = r[70] | 0, y = d[400] | 0, f = y & 65535, r[c + (f << 3) >> 2] = 5, t = r[72] | 0, d[400] = y + 1 << 16 >> 16, r[c + (f << 3) + 4 >> 2] = t, (d[r[69] >> 1] | 0) == 46) break e;
							switch (r[72] = t + 2, c = k(1) | 0, he(m, r[72] | 0, 0, t), h ? (t = r[63] | 0, r[t + 28 >> 2] = 5) : t = r[63] | 0, m = r[71] | 0, y = d[399] | 0, d[399] = y + 1 << 16 >> 16, r[m + ((y & 65535) << 2) >> 2] = t, c << 16 >> 16) {
								case 39:
									R(39);
									break;
								case 34:
									R(34);
									break;
								default:
									r[72] = (r[72] | 0) + -2;
									break e;
							}
							switch (t = (r[72] | 0) + 2 | 0, r[72] = t, (k(1) | 0) << 16 >> 16) {
								case 44:
									r[72] = (r[72] | 0) + 2, k(1) | 0, m = r[63] | 0, r[m + 4 >> 2] = t, y = r[72] | 0, r[m + 16 >> 2] = y, b[m + 24 >> 0] = 1, r[72] = y + -2;
									break e;
								case 41:
									d[400] = (d[400] | 0) + -1 << 16 >> 16, y = r[63] | 0, r[y + 4 >> 2] = t, r[y + 12 >> 2] = (r[72] | 0) + 2, b[y + 24 >> 0] = 1, d[399] = (d[399] | 0) + -1 << 16 >> 16;
									break e;
								default:
									r[72] = (r[72] | 0) + -2;
									break e;
							}
						case 123:
							if (h) {
								c = 12, h = 1, w = 46;
								break e;
							}
							if (t = r[72] | 0, d[400] | 0) {
								r[72] = t + -2;
								break e;
							}
							for (; !(t >>> 0 >= (r[73] | 0) >>> 0);) {
								if (t = k(1) | 0, X(t) | 0) R(t);
								else if (t << 16 >> 16 == 125) {
									w = 36;
									break;
								}
								t = (r[72] | 0) + 2 | 0, r[72] = t;
							}
							if ((w | 0) == 36 && (r[72] = (r[72] | 0) + 2), y = (k(1) | 0) << 16 >> 16 == 102, t = r[72] | 0, y && A(t + 2 | 0, 66, 6) | 0) {
								M();
								break e;
							}
							if (r[72] = t + 8, t = k(1) | 0, X(t) | 0) {
								H(m, t, 0);
								break e;
							} else {
								M();
								break e;
							}
						default:
							if (h) {
								c = 12, h = 1, w = 46;
								break e;
							}
							switch (t << 16 >> 16) {
								case 42:
								case 39:
								case 34:
									h = 0, w = 48;
									break e;
								default:
									c = 6, h = 0, w = 46;
									break e;
							}
					}
				while (!1);
				(w | 0) == 46 && (t = r[72] | 0, (t | 0) == (m + (c << 1) | 0) ? r[72] = t + -2 : w = 48);
				do
					if ((w | 0) == 48) {
						if (d[400] | 0) {
							r[72] = (r[72] | 0) + -2;
							break;
						}
						for (t = r[73] | 0, c = r[72] | 0;;) {
							if (c >>> 0 >= t >>> 0) {
								w = 55;
								break;
							}
							if (f = d[c >> 1] | 0, X(f) | 0) {
								w = 53;
								break;
							}
							y = c + 2 | 0, r[72] = y, c = y;
						}
						if ((w | 0) == 53) {
							H(m, f, h);
							break;
						} else if ((w | 0) == 55) {
							M();
							break;
						}
					}
				while (!1);
			}
			u$1(B, "l");
			function H(t, c, h) {
				t = t | 0, c = c | 0, h = h | 0;
				var f = 0, m = 0;
				switch (f = (r[72] | 0) + 2 | 0, c << 16 >> 16) {
					case 39:
						R(39), m = 5;
						break;
					case 34:
						R(34), m = 5;
						break;
					default: M();
				}
				do
					if ((m | 0) == 5) {
						if (he(t, f, r[72] | 0, 1), h && (r[(r[63] | 0) + 28 >> 2] = 4), r[72] = (r[72] | 0) + 2, c = k(0) | 0, h = c << 16 >> 16 == 97, h ? (f = r[72] | 0, A(f + 2 | 0, 94, 10) | 0 && (m = 13)) : (f = r[72] | 0, c << 16 >> 16 == 119 && (d[f + 2 >> 1] | 0) == 105 && (d[f + 4 >> 1] | 0) == 116 && (d[f + 6 >> 1] | 0) == 104 || (m = 13)), (m | 0) == 13) {
							r[72] = f + -2;
							break;
						}
						if (r[72] = f + ((h ? 6 : 4) << 1), (k(1) | 0) << 16 >> 16 != 123) {
							r[72] = f;
							break;
						}
						h = r[72] | 0, c = h;
						e: for (;;) {
							switch (r[72] = c + 2, c = k(1) | 0, c << 16 >> 16) {
								case 39:
									R(39), r[72] = (r[72] | 0) + 2, c = k(1) | 0;
									break;
								case 34:
									R(34), r[72] = (r[72] | 0) + 2, c = k(1) | 0;
									break;
								default: c = j(c) | 0;
							}
							if (c << 16 >> 16 != 58) {
								m = 22;
								break;
							}
							switch (r[72] = (r[72] | 0) + 2, (k(1) | 0) << 16 >> 16) {
								case 39:
									R(39);
									break;
								case 34:
									R(34);
									break;
								default:
									m = 26;
									break e;
							}
							switch (r[72] = (r[72] | 0) + 2, (k(1) | 0) << 16 >> 16) {
								case 125:
									m = 31;
									break e;
								case 44: break;
								default:
									m = 30;
									break e;
							}
							if (r[72] = (r[72] | 0) + 2, (k(1) | 0) << 16 >> 16 == 125) {
								m = 31;
								break;
							}
							c = r[72] | 0;
						}
						if ((m | 0) == 22) {
							r[72] = f;
							break;
						} else if ((m | 0) == 26) {
							r[72] = f;
							break;
						} else if ((m | 0) == 30) {
							r[72] = f;
							break;
						} else if ((m | 0) == 31) {
							m = r[63] | 0, r[m + 16 >> 2] = h, r[m + 12 >> 2] = (r[72] | 0) + 2;
							break;
						}
					}
				while (!1);
			}
			u$1(H, "u");
			function xt(t) {
				t = t | 0;
				e: do
					switch (d[t >> 1] | 0) {
						case 100: switch (d[t + -2 >> 1] | 0) {
							case 105:
								t = L(t + -4 | 0, 104, 2) | 0;
								break e;
							case 108:
								t = L(t + -4 | 0, 108, 3) | 0;
								break e;
							default:
								t = 0;
								break e;
						}
						case 101: switch (d[t + -2 >> 1] | 0) {
							case 115: switch (d[t + -4 >> 1] | 0) {
								case 108:
									t = G(t + -6 | 0, 101) | 0;
									break e;
								case 97:
									t = G(t + -6 | 0, 99) | 0;
									break e;
								default:
									t = 0;
									break e;
							}
							case 116:
								t = L(t + -4 | 0, 114, 4) | 0;
								break e;
							case 117:
								t = L(t + -4 | 0, 122, 6) | 0;
								break e;
							default:
								t = 0;
								break e;
						}
						case 102:
							if ((d[t + -2 >> 1] | 0) == 111 && (d[t + -4 >> 1] | 0) == 101) switch (d[t + -6 >> 1] | 0) {
								case 99:
									t = L(t + -8 | 0, 134, 6) | 0;
									break e;
								case 112:
									t = L(t + -8 | 0, 146, 2) | 0;
									break e;
								default:
									t = 0;
									break e;
							}
							else t = 0;
							break;
						case 107:
							t = L(t + -2 | 0, 150, 4) | 0;
							break;
						case 110:
							t = t + -2 | 0, G(t, 105) | 0 ? t = 1 : t = L(t, 158, 5) | 0;
							break;
						case 111:
							t = G(t + -2 | 0, 100) | 0;
							break;
						case 114:
							t = L(t + -2 | 0, 168, 7) | 0;
							break;
						case 116:
							t = L(t + -2 | 0, 182, 4) | 0;
							break;
						case 119: switch (d[t + -2 >> 1] | 0) {
							case 101:
								t = G(t + -4 | 0, 110) | 0;
								break e;
							case 111:
								t = L(t + -4 | 0, 190, 3) | 0;
								break e;
							default:
								t = 0;
								break e;
						}
						default: t = 0;
					}
				while (!1);
				return t | 0;
			}
			u$1(xt, "o");
			function De() {
				var t = 0, c = 0, h = 0, f = 0;
				c = r[73] | 0, h = r[72] | 0;
				e: for (;;) {
					if (t = h + 2 | 0, h >>> 0 >= c >>> 0) {
						c = 10;
						break;
					}
					switch (d[t >> 1] | 0) {
						case 96:
							c = 7;
							break e;
						case 36:
							if ((d[h + 4 >> 1] | 0) == 123) {
								c = 6;
								break e;
							}
							break;
						case 92: t = h + 4 | 0;
					}
					h = t;
				}
				(c | 0) == 6 ? (t = h + 4 | 0, r[72] = t, c = r[70] | 0, f = d[400] | 0, h = f & 65535, r[c + (h << 3) >> 2] = 4, d[400] = f + 1 << 16 >> 16, r[c + (h << 3) + 4 >> 2] = t) : (c | 0) == 7 ? (r[72] = t, h = r[70] | 0, f = (d[400] | 0) + -1 << 16 >> 16, d[400] = f, (r[h + ((f & 65535) << 3) >> 2] | 0) != 3 && M()) : (c | 0) == 10 && (r[72] = t, M());
			}
			u$1(De, "h");
			function k(t) {
				t = t | 0;
				var c = 0, h = 0, f = 0;
				h = r[72] | 0;
				e: do {
					c = d[h >> 1] | 0;
					t: do
						if (c << 16 >> 16 != 47) if (t) {
							if (W(c) | 0) break;
							break e;
						} else {
							if (se(c) | 0) break;
							break e;
						}
						else switch (d[h + 2 >> 1] | 0) {
							case 47:
								pe();
								break t;
							case 42:
								ge(t);
								break t;
							default:
								c = 47;
								break e;
						}
					while (!1);
					f = r[72] | 0, h = f + 2 | 0, r[72] = h;
				} while (f >>> 0 < (r[73] | 0) >>> 0);
				return c | 0;
			}
			u$1(k, "w");
			function he(t, c, h, f) {
				t = t | 0, c = c | 0, h = h | 0, f = f | 0;
				var m = 0, w = 0;
				w = r[67] | 0, r[67] = w + 36, m = r[63] | 0, r[(m | 0 ? m + 32 | 0 : 236) >> 2] = w, r[64] = m, r[63] = w, r[w + 8 >> 2] = t, (f | 0) == 2 ? (t = 3, m = h) : (m = (f | 0) == 1, t = m ? 1 : 2, m = m ? h + 2 | 0 : 0), r[w + 12 >> 2] = m, r[w + 28 >> 2] = t, r[w >> 2] = c, r[w + 4 >> 2] = h, r[w + 16 >> 2] = 0, r[w + 20 >> 2] = f, c = (f | 0) == 1, b[w + 24 >> 0] = c & 1, r[w + 32 >> 2] = 0, c | (f | 0) == 2 && (b[803] = 1);
			}
			u$1(he, "d");
			function R(t) {
				t = t | 0;
				var c = 0, h = 0, f = 0, m = 0;
				for (m = r[73] | 0, c = r[72] | 0;;) {
					if (f = c + 2 | 0, c >>> 0 >= m >>> 0) {
						c = 9;
						break;
					}
					if (h = d[f >> 1] | 0, h << 16 >> 16 == t << 16 >> 16) {
						c = 10;
						break;
					}
					if (h << 16 >> 16 == 92) h = c + 4 | 0, (d[h >> 1] | 0) == 13 ? (c = c + 6 | 0, c = (d[c >> 1] | 0) == 10 ? c : h) : c = h;
					else if (Te(h) | 0) {
						c = 9;
						break;
					} else c = f;
				}
				(c | 0) == 9 ? (r[72] = f, M()) : (c | 0) == 10 && (r[72] = f);
			}
			u$1(R, "v");
			function je(t, c) {
				t = t | 0, c = c | 0;
				var h = 0, f = 0, m = 0, w = 0;
				return h = r[72] | 0, f = d[h >> 1] | 0, w = (t | 0) == (c | 0), m = w ? 0 : t, w = w ? 0 : c, f << 16 >> 16 == 97 && (r[72] = h + 4, h = k(1) | 0, t = r[72] | 0, X(h) | 0 ? (R(h), c = (r[72] | 0) + 2 | 0, r[72] = c) : (j(h) | 0, c = r[72] | 0), f = k(1) | 0, h = r[72] | 0), (h | 0) != (t | 0) && P(t, c, m, w), f | 0;
			}
			u$1(je, "A");
			function vt() {
				var t = 0, c = 0, h = 0;
				h = r[73] | 0, c = r[72] | 0;
				e: for (;;) {
					if (t = c + 2 | 0, c >>> 0 >= h >>> 0) {
						c = 6;
						break;
					}
					switch (d[t >> 1] | 0) {
						case 13:
						case 10:
							c = 6;
							break e;
						case 93:
							c = 7;
							break e;
						case 92: t = c + 4 | 0;
					}
					c = t;
				}
				return (c | 0) == 6 ? (r[72] = t, M(), t = 0) : (c | 0) == 7 && (r[72] = t, t = 93), t | 0;
			}
			u$1(vt, "C");
			function de() {
				var t = 0, c = 0, h = 0;
				e: for (;;) {
					if (t = r[72] | 0, c = t + 2 | 0, r[72] = c, t >>> 0 >= (r[73] | 0) >>> 0) {
						h = 7;
						break;
					}
					switch (d[c >> 1] | 0) {
						case 13:
						case 10:
							h = 7;
							break e;
						case 47: break e;
						case 91:
							vt() | 0;
							break;
						case 92: r[72] = t + 4;
					}
				}
				(h | 0) == 7 && M();
			}
			u$1(de, "g");
			function Et(t) {
				switch (t = t | 0, d[t >> 1] | 0) {
					case 62:
						t = (d[t + -2 >> 1] | 0) == 61;
						break;
					case 41:
					case 59:
						t = 1;
						break;
					case 104:
						t = L(t + -2 | 0, 210, 4) | 0;
						break;
					case 121:
						t = L(t + -2 | 0, 218, 6) | 0;
						break;
					case 101:
						t = L(t + -2 | 0, 230, 3) | 0;
						break;
					default: t = 0;
				}
				return t | 0;
			}
			u$1(Et, "p");
			function ge(t) {
				t = t | 0;
				var c = 0, h = 0, f = 0, m = 0, w = 0;
				for (m = (r[72] | 0) + 2 | 0, r[72] = m, h = r[73] | 0; c = m + 2 | 0, !(m >>> 0 >= h >>> 0 || (f = d[c >> 1] | 0, !t && Te(f) | 0));) {
					if (f << 16 >> 16 == 42 && (d[m + 4 >> 1] | 0) == 47) {
						w = 8;
						break;
					}
					m = c;
				}
				(w | 0) == 8 && (r[72] = c, c = m + 4 | 0), r[72] = c;
			}
			u$1(ge, "y");
			function A(t, c, h) {
				t = t | 0, c = c | 0, h = h | 0;
				var f = 0, m = 0;
				e: do
					if (!h) t = 0;
					else {
						for (; f = b[t >> 0] | 0, m = b[c >> 0] | 0, f << 24 >> 24 == m << 24 >> 24;) if (h = h + -1 | 0, h) t = t + 1 | 0, c = c + 1 | 0;
						else {
							t = 0;
							break e;
						}
						t = (f & 255) - (m & 255) | 0;
					}
				while (!1);
				return t | 0;
			}
			u$1(A, "m");
			function ie(t) {
				t = t | 0;
				e: do
					switch (t << 16 >> 16) {
						case 38:
						case 37:
						case 33:
							t = 1;
							break;
						default: if ((t & -8) << 16 >> 16 == 40 | (t + -58 & 65535) < 6) t = 1;
						else {
							switch (t << 16 >> 16) {
								case 91:
								case 93:
								case 94:
									t = 1;
									break e;
							}
							t = (t + -123 & 65535) < 4;
						}
					}
				while (!1);
				return t | 0;
			}
			u$1(ie, "I");
			function _t(t) {
				t = t | 0;
				e: do
					switch (t << 16 >> 16) {
						case 38:
						case 37:
						case 33: break;
						default: if (!((t + -58 & 65535) < 6 | (t + -40 & 65535) < 7 & t << 16 >> 16 != 41)) {
							switch (t << 16 >> 16) {
								case 91:
								case 94: break e;
							}
							return t << 16 >> 16 != 125 & (t + -123 & 65535) < 4 | 0;
						}
					}
				while (!1);
				return 1;
			}
			u$1(_t, "U");
			function Ue(t) {
				t = t | 0;
				var c = 0;
				c = d[t >> 1] | 0;
				e: do
					if ((c + -9 & 65535) >= 5) {
						switch (c << 16 >> 16) {
							case 160:
							case 32:
								c = 1;
								break e;
						}
						if (ie(c) | 0) return c << 16 >> 16 != 46 | (me(t) | 0) | 0;
						c = 0;
					} else c = 1;
				while (!1);
				return c | 0;
			}
			u$1(Ue, "x");
			function It(t) {
				t = t | 0;
				var c = 0, h = 0, f = 0, m = 0;
				return h = _, _ = _ + 16 | 0, f = h, r[f >> 2] = 0, r[66] = t, c = r[3] | 0, m = c + (t << 1) | 0, t = m + 2 | 0, d[m >> 1] = 0, r[f >> 2] = t, r[67] = t, r[59] = 0, r[63] = 0, r[61] = 0, r[60] = 0, r[65] = 0, r[62] = 0, _ = h, c | 0;
			}
			u$1(It, "S");
			function P(t, c, h, f) {
				t = t | 0, c = c | 0, h = h | 0, f = f | 0;
				var m = 0, w = 0;
				m = r[67] | 0, r[67] = m + 20, w = r[65] | 0, r[(w | 0 ? w + 16 | 0 : 240) >> 2] = m, r[65] = m, r[m >> 2] = t, r[m + 4 >> 2] = c, r[m + 8 >> 2] = h, r[m + 12 >> 2] = f, r[m + 16 >> 2] = 0, b[803] = 1;
			}
			u$1(P, "O");
			function L(t, c, h) {
				t = t | 0, c = c | 0, h = h | 0;
				var f = 0, m = 0;
				return f = t + (0 - h << 1) | 0, m = f + 2 | 0, t = r[3] | 0, m >>> 0 >= t >>> 0 && !(A(m, c, h << 1) | 0) ? (m | 0) == (t | 0) ? t = 1 : t = Ue(f) | 0 : t = 0, t | 0;
			}
			u$1(L, "$");
			function Lt(t) {
				switch (t = t | 0, d[t >> 1] | 0) {
					case 107:
						t = L(t + -2 | 0, 150, 4) | 0;
						break;
					case 101:
						(d[t + -2 >> 1] | 0) == 117 ? t = L(t + -4 | 0, 122, 6) | 0 : t = 0;
						break;
					default: t = 0;
				}
				return t | 0;
			}
			u$1(Lt, "j");
			function G(t, c) {
				t = t | 0, c = c | 0;
				var h = 0;
				return h = r[3] | 0, h >>> 0 <= t >>> 0 && (d[t >> 1] | 0) == c << 16 >> 16 ? (h | 0) == (t | 0) ? h = 1 : h = be(d[t + -2 >> 1] | 0) | 0 : h = 0, h | 0;
			}
			u$1(G, "B");
			function be(t) {
				t = t | 0;
				e: do
					if ((t + -9 & 65535) < 5) t = 1;
					else {
						switch (t << 16 >> 16) {
							case 32:
							case 160:
								t = 1;
								break e;
						}
						t = t << 16 >> 16 != 46 & (ie(t) | 0);
					}
				while (!1);
				return t | 0;
			}
			u$1(be, "E");
			function pe() {
				var t = 0, c = 0, h = 0;
				t = r[73] | 0, h = r[72] | 0;
				e: for (; c = h + 2 | 0, !(h >>> 0 >= t >>> 0);) switch (d[c >> 1] | 0) {
					case 13:
					case 10: break e;
					default: h = c;
				}
				r[72] = c;
			}
			u$1(pe, "P");
			function j(t) {
				for (t = t | 0; !(W(t) | 0 || ie(t) | 0);) if (t = (r[72] | 0) + 2 | 0, r[72] = t, t = d[t >> 1] | 0, !(t << 16 >> 16)) {
					t = 0;
					break;
				}
				return t | 0;
			}
			u$1(j, "q");
			function Ot() {
				var t = 0;
				switch (t = r[(r[61] | 0) + 20 >> 2] | 0, t | 0) {
					case 1:
						t = -1;
						break;
					case 2:
						t = -2;
						break;
					default: t = t - (r[3] | 0) >> 1;
				}
				return t | 0;
			}
			u$1(Ot, "z");
			function At(t) {
				return t = t | 0, !(L(t, 196, 5) | 0) && !(L(t, 44, 3) | 0) ? t = L(t, 206, 2) | 0 : t = 1, t | 0;
			}
			u$1(At, "D");
			function se(t) {
				switch (t = t | 0, t << 16 >> 16) {
					case 160:
					case 32:
					case 12:
					case 11:
					case 9:
						t = 1;
						break;
					default: t = 0;
				}
				return t | 0;
			}
			u$1(se, "F");
			function me(t) {
				return t = t | 0, (d[t >> 1] | 0) == 46 && (d[t + -2 >> 1] | 0) == 46 ? t = (d[t + -4 >> 1] | 0) == 46 : t = 0, t | 0;
			}
			u$1(me, "G");
			function K(t) {
				return t = t | 0, (r[3] | 0) == (t | 0) ? t = 1 : t = Ue(t + -2 | 0) | 0, t | 0;
			}
			u$1(K, "H");
			function Nt() {
				var t = 0;
				return t = r[(r[62] | 0) + 12 >> 2] | 0, t ? t = t - (r[3] | 0) >> 1 : t = -1, t | 0;
			}
			u$1(Nt, "J");
			function Rt() {
				var t = 0;
				return t = r[(r[61] | 0) + 12 >> 2] | 0, t ? t = t - (r[3] | 0) >> 1 : t = -1, t | 0;
			}
			u$1(Rt, "K");
			function Mt() {
				var t = 0;
				return t = r[(r[62] | 0) + 8 >> 2] | 0, t ? t = t - (r[3] | 0) >> 1 : t = -1, t | 0;
			}
			u$1(Mt, "L");
			function $t() {
				var t = 0;
				return t = r[(r[61] | 0) + 16 >> 2] | 0, t ? t = t - (r[3] | 0) >> 1 : t = -1, t | 0;
			}
			u$1($t, "M");
			function Dt() {
				var t = 0;
				return t = r[(r[61] | 0) + 4 >> 2] | 0, t ? t = t - (r[3] | 0) >> 1 : t = -1, t | 0;
			}
			u$1(Dt, "N");
			function jt() {
				var t = 0;
				return t = r[61] | 0, t = r[(t | 0 ? t + 32 | 0 : 236) >> 2] | 0, r[61] = t, (t | 0) != 0 | 0;
			}
			u$1(jt, "Q");
			function Ut() {
				var t = 0;
				return t = r[62] | 0, t = r[(t | 0 ? t + 16 | 0 : 240) >> 2] | 0, r[62] = t, (t | 0) != 0 | 0;
			}
			u$1(Ut, "R");
			function M() {
				b[802] = 1, r[68] = (r[72] | 0) - (r[3] | 0) >> 1, r[72] = (r[73] | 0) + 2;
			}
			u$1(M, "T");
			function W(t) {
				return t = t | 0, (t | 128) << 16 >> 16 == 160 | (t + -9 & 65535) < 5 | 0;
			}
			u$1(W, "V");
			function X(t) {
				return t = t | 0, t << 16 >> 16 == 39 | t << 16 >> 16 == 34 | 0;
			}
			u$1(X, "W");
			function Tt() {
				return (r[(r[61] | 0) + 8 >> 2] | 0) - (r[3] | 0) >> 1 | 0;
			}
			u$1(Tt, "X");
			function Ft() {
				return (r[(r[62] | 0) + 4 >> 2] | 0) - (r[3] | 0) >> 1 | 0;
			}
			u$1(Ft, "Y");
			function Te(t) {
				return t = t | 0, t << 16 >> 16 == 13 | t << 16 >> 16 == 10 | 0;
			}
			u$1(Te, "Z");
			function Bt() {
				return (r[r[61] >> 2] | 0) - (r[3] | 0) >> 1 | 0;
			}
			u$1(Bt, "_");
			function Pt() {
				return (r[r[62] >> 2] | 0) - (r[3] | 0) >> 1 | 0;
			}
			u$1(Pt, "ee");
			function Wt() {
				return S[(r[61] | 0) + 24 >> 0] | 0;
			}
			u$1(Wt, "ae");
			function Jt(t) {
				t = t | 0, r[3] = t;
			}
			u$1(Jt, "re");
			function qt() {
				return r[(r[61] | 0) + 28 >> 2] | 0;
			}
			u$1(qt, "ie");
			function zt() {
				return (b[803] | 0) != 0 | 0;
			}
			u$1(zt, "se");
			function Ht() {
				return (b[804] | 0) != 0 | 0;
			}
			u$1(Ht, "fe");
			function Gt() {
				return r[68] | 0;
			}
			u$1(Gt, "te");
			function Kt(t) {
				return t = t | 0, _ = t + 992 + 15 & -16, 992;
			}
			return u$1(Kt, "ce"), {
				su: Kt,
				ai: $t,
				e: Gt,
				ee: Ft,
				ele: Nt,
				els: Mt,
				es: Pt,
				f: Ht,
				id: Ot,
				ie: Dt,
				ip: Wt,
				is: Bt,
				it: qt,
				ms: zt,
				p: N,
				re: Ut,
				ri: jt,
				sa: It,
				se: Rt,
				ses: Jt,
				ss: Tt
			};
		}(typeof self < "u" ? self : globalthis_default, {}, oe$1), ve$1 = E$1.su(Y$2 - (2 << 17));
	}
	const i = I$2.length + 1;
	E$1.ses(ve$1), E$1.sa(i - 1), Be$1(I$2, new Uint16Array(oe$1, ve$1, i)), E$1.p() || (C$1 = E$1.e(), U$1());
	const o = [], a = [];
	for (; E$1.ri();) {
		const l = E$1.is(), p = E$1.ie(), g = E$1.ai(), b = E$1.id(), d = E$1.ss(), r = E$1.se(), S = E$1.it();
		let O;
		E$1.ip() && (O = Ee$1(b === -1 ? l : l + 1, I$2.charCodeAt(b === -1 ? l - 1 : l))), o.push({
			t: S,
			n: O,
			s: l,
			e: p,
			ss: d,
			se: r,
			d: b,
			a: g
		});
	}
	for (; E$1.re();) {
		const l = E$1.es(), p = E$1.ee(), g = E$1.els(), b = E$1.ele(), d = I$2.charCodeAt(l), r = g >= 0 ? I$2.charCodeAt(g) : -1;
		a.push({
			s: l,
			e: p,
			ls: g,
			le: b,
			n: d === 34 || d === 39 ? Ee$1(l + 1, d) : I$2.slice(l, p),
			ln: g < 0 ? void 0 : r === 34 || r === 39 ? Ee$1(g + 1, r) : I$2.slice(g, b)
		});
	}
	return [
		o,
		a,
		!!E$1.f(),
		!!E$1.ms()
	];
}
u$1(on$1, "parse");
function Ee$1(s, e) {
	C$1 = s;
	let n = "", i = C$1;
	for (;;) {
		C$1 >= I$2.length && U$1();
		const o = I$2.charCodeAt(C$1);
		if (o === e) break;
		o === 92 ? (n += I$2.slice(i, C$1), n += an$1(), i = C$1) : (o === 8232 || o === 8233 || We$1(o) && U$1(), ++C$1);
	}
	return n += I$2.slice(i, C$1++), n;
}
u$1(Ee$1, "b");
function an$1() {
	let s = I$2.charCodeAt(++C$1);
	switch (++C$1, s) {
		case 110: return `
`;
		case 114: return "\r";
		case 120: return String.fromCharCode(_e(2));
		case 117: return function() {
			const e = I$2.charCodeAt(C$1);
			let n;
			return e === 123 ? (++C$1, n = _e(I$2.indexOf("}", C$1) - C$1), ++C$1, n > 1114111 && U$1()) : n = _e(4), n <= 65535 ? String.fromCharCode(n) : (n -= 65536, String.fromCharCode(55296 + (n >> 10), 56320 + (1023 & n)));
		}();
		case 116: return "	";
		case 98: return "\b";
		case 118: return "\v";
		case 102: return "\f";
		case 13: I$2.charCodeAt(C$1) === 10 && ++C$1;
		case 10: return "";
		case 56:
		case 57: U$1();
		default:
			if (s >= 48 && s <= 55) {
				let e = I$2.substr(C$1 - 1, 3).match(/^[0-7]+/)[0], n = parseInt(e, 8);
				return n > 255 && (e = e.slice(0, -1), n = parseInt(e, 8)), C$1 += e.length - 1, s = I$2.charCodeAt(C$1), e === "0" && s !== 56 && s !== 57 || U$1(), String.fromCharCode(n);
			}
			return We$1(s) ? "" : String.fromCharCode(s);
	}
}
u$1(an$1, "k");
function _e(s) {
	const e = C$1;
	let n = 0, i = 0;
	for (let o = 0; o < s; ++o, ++C$1) {
		let a, l = I$2.charCodeAt(C$1);
		if (l !== 95) {
			if (l >= 97) a = l - 97 + 10;
			else if (l >= 65) a = l - 65 + 10;
			else {
				if (!(l >= 48 && l <= 57)) break;
				a = l - 48;
			}
			if (a >= 16) break;
			i = l, n = 16 * n + a;
		} else i !== 95 && o !== 0 || U$1(), i = l;
	}
	return i !== 95 && C$1 - e === s || U$1(), n;
}
u$1(_e, "l");
function We$1(s) {
	return s === 13 || s === 10;
}
u$1(We$1, "u");
function U$1() {
	throw Object.assign(Error(`Parse error ${Pe}:${I$2.slice(0, C$1).split(`
`).length}:${C$1 - I$2.lastIndexOf(`
`, C$1 - 1)}`), { idx: C$1 });
}
u$1(U$1, "o");
var Ie$1;
typeof WebAssembly < "u" && (async () => {
	const { parse: s, init: e } = await Promise.resolve().then(() => lexer_DQCqS3nf_exports);
	await e, Ie$1 = s;
})();
var ae$1 = u$1((s, e) => Ie$1 ? Ie$1(s, e) : on$1(s, e), "parseEsm");
var cn$1 = u$1((s) => {
	if (!s.includes("import") && !s.includes("export")) return !1;
	try {
		return ae$1(s)[3];
	} catch {
		return !0;
	}
}, "isESM");
var ln$1 = 44;
var un$1 = 59;
var Je$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var qe$1 = /* @__PURE__ */ new Uint8Array(64);
var fn$1 = /* @__PURE__ */ new Uint8Array(128);
for (let s = 0; s < Je$1.length; s++) {
	const e = Je$1.charCodeAt(s);
	qe$1[s] = e, fn$1[e] = s;
}
function Q$2(s, e, n) {
	let i = e - n;
	i = i < 0 ? -i << 1 | 1 : i << 1;
	do {
		let o = i & 31;
		i >>>= 5, i > 0 && (o |= 32), s.write(qe$1[o]);
	} while (i > 0);
	return e;
}
u$1(Q$2, "encodeInteger$1");
var ze$1 = 16384;
var He$1 = typeof TextDecoder < "u" ? new TextDecoder() : typeof Buffer < "u" ? { decode(s) {
	return Buffer.from(s.buffer, s.byteOffset, s.byteLength).toString();
} } : { decode(s) {
	let e = "";
	for (let n = 0; n < s.length; n++) e += String.fromCharCode(s[n]);
	return e;
} };
var hn$1 = class {
	static {
		u$1(this, "StringWriter");
	}
	constructor() {
		this.pos = 0, this.out = "", this.buffer = new Uint8Array(ze$1);
	}
	write(s) {
		const { buffer: e } = this;
		e[this.pos++] = s, this.pos === ze$1 && (this.out += He$1.decode(e), this.pos = 0);
	}
	flush() {
		const { buffer: s, out: e, pos: n } = this;
		return n > 0 ? e + He$1.decode(s.subarray(0, n)) : e;
	}
};
function dn$1(s) {
	const e = new hn$1();
	let n = 0, i = 0, o = 0, a = 0;
	for (let l = 0; l < s.length; l++) {
		const p = s[l];
		if (l > 0 && e.write(un$1), p.length === 0) continue;
		let g = 0;
		for (let b = 0; b < p.length; b++) {
			const d = p[b];
			b > 0 && e.write(ln$1), g = Q$2(e, d[0], g), d.length !== 1 && (n = Q$2(e, d[1], n), i = Q$2(e, d[2], i), o = Q$2(e, d[3], o), d.length !== 4 && (a = Q$2(e, d[4], a)));
		}
	}
	return e.flush();
}
u$1(dn$1, "encode$1");
var fe$1 = class fe$1 {
	static {
		u$1(this, "BitSet");
	}
	constructor(e) {
		this.bits = e instanceof fe$1 ? e.bits.slice() : [];
	}
	add(e) {
		this.bits[e >> 5] |= 1 << (e & 31);
	}
	has(e) {
		return !!(this.bits[e >> 5] & 1 << (e & 31));
	}
};
var re$1 = class re$1 {
	static {
		u$1(this, "Chunk");
	}
	constructor(e, n, i) {
		this.start = e, this.end = n, this.original = i, this.intro = "", this.outro = "", this.content = i, this.storeName = !1, this.edited = !1, this.previous = null, this.next = null;
	}
	appendLeft(e) {
		this.outro += e;
	}
	appendRight(e) {
		this.intro = this.intro + e;
	}
	clone() {
		const e = new re$1(this.start, this.end, this.original);
		return e.intro = this.intro, e.outro = this.outro, e.content = this.content, e.storeName = this.storeName, e.edited = this.edited, e;
	}
	contains(e) {
		return this.start < e && e < this.end;
	}
	eachNext(e) {
		let n = this;
		for (; n;) e(n), n = n.next;
	}
	eachPrevious(e) {
		let n = this;
		for (; n;) e(n), n = n.previous;
	}
	edit(e, n, i) {
		return this.content = e, i || (this.intro = "", this.outro = ""), this.storeName = n, this.edited = !0, this;
	}
	prependLeft(e) {
		this.outro = e + this.outro;
	}
	prependRight(e) {
		this.intro = e + this.intro;
	}
	reset() {
		this.intro = "", this.outro = "", this.edited && (this.content = this.original, this.storeName = !1, this.edited = !1);
	}
	split(e) {
		const n = e - this.start, i = this.original.slice(0, n), o = this.original.slice(n);
		this.original = i;
		const a = new re$1(e, this.end, o);
		return a.outro = this.outro, this.outro = "", this.end = e, this.edited ? (a.edit("", !1), this.content = "") : this.content = i, a.next = this.next, a.next && (a.next.previous = a), a.previous = this, this.next = a, a;
	}
	toString() {
		return this.intro + this.content + this.outro;
	}
	trimEnd(e) {
		if (this.outro = this.outro.replace(e, ""), this.outro.length) return !0;
		const n = this.content.replace(e, "");
		if (n.length) return n !== this.content && (this.split(this.start + n.length).edit("", void 0, !0), this.edited && this.edit(n, this.storeName, !0)), !0;
		if (this.edit("", void 0, !0), this.intro = this.intro.replace(e, ""), this.intro.length) return !0;
	}
	trimStart(e) {
		if (this.intro = this.intro.replace(e, ""), this.intro.length) return !0;
		const n = this.content.replace(e, "");
		if (n.length) {
			if (n !== this.content) {
				const i = this.split(this.end - n.length);
				this.edited && i.edit(n, this.storeName, !0), this.edit("", void 0, !0);
			}
			return !0;
		} else if (this.edit("", void 0, !0), this.outro = this.outro.replace(e, ""), this.outro.length) return !0;
	}
};
function gn$1() {
	return typeof globalThis < "u" && typeof globalThis.btoa == "function" ? (s) => globalThis.btoa(unescape(encodeURIComponent(s))) : typeof Buffer == "function" ? (s) => Buffer.from(s, "utf-8").toString("base64") : () => {
		throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
	};
}
u$1(gn$1, "getBtoa");
var bn$1 = gn$1();
var pn$1 = class {
	static {
		u$1(this, "SourceMap");
	}
	constructor(e) {
		this.version = 3, this.file = e.file, this.sources = e.sources, this.sourcesContent = e.sourcesContent, this.names = e.names, this.mappings = dn$1(e.mappings), typeof e.x_google_ignoreList < "u" && (this.x_google_ignoreList = e.x_google_ignoreList), typeof e.debugId < "u" && (this.debugId = e.debugId);
	}
	toString() {
		return JSON.stringify(this);
	}
	toUrl() {
		return "data:application/json;charset=utf-8;base64," + bn$1(this.toString());
	}
};
function mn$1(s) {
	const e = s.split(`
`), n = e.filter((a) => /^\t+/.test(a)), i = e.filter((a) => /^ {2,}/.test(a));
	if (n.length === 0 && i.length === 0) return null;
	if (n.length >= i.length) return "	";
	const o = i.reduce((a, l) => {
		const p = /^ +/.exec(l)[0].length;
		return Math.min(p, a);
	}, 1 / 0);
	return new Array(o + 1).join(" ");
}
u$1(mn$1, "guessIndent");
function wn(s, e) {
	const n = s.split(/[/\\]/), i = e.split(/[/\\]/);
	for (n.pop(); n[0] === i[0];) n.shift(), i.shift();
	if (n.length) {
		let o = n.length;
		for (; o--;) n[o] = "..";
	}
	return n.concat(i).join("/");
}
u$1(wn, "getRelativePath");
var kn$1 = Object.prototype.toString;
function Cn$1(s) {
	return kn$1.call(s) === "[object Object]";
}
u$1(Cn$1, "isObject");
function Ge$1(s) {
	const e = s.split(`
`), n = [];
	for (let i = 0, o = 0; i < e.length; i++) n.push(o), o += e[i].length + 1;
	return u$1(function(o) {
		let a = 0, l = n.length;
		for (; a < l;) {
			const b = a + l >> 1;
			o < n[b] ? l = b : a = b + 1;
		}
		const p = a - 1;
		return {
			line: p,
			column: o - n[p]
		};
	}, "locate");
}
u$1(Ge$1, "getLocator");
var yn$1 = /\w/;
var Sn$1 = class {
	static {
		u$1(this, "Mappings");
	}
	constructor(e) {
		this.hires = e, this.generatedCodeLine = 0, this.generatedCodeColumn = 0, this.raw = [], this.rawSegments = this.raw[this.generatedCodeLine] = [], this.pending = null;
	}
	addEdit(e, n, i, o) {
		if (n.length) {
			const a = n.length - 1;
			let l = n.indexOf(`
`, 0), p = -1;
			for (; l >= 0 && a > l;) {
				const b = [
					this.generatedCodeColumn,
					e,
					i.line,
					i.column
				];
				o >= 0 && b.push(o), this.rawSegments.push(b), this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, p = l, l = n.indexOf(`
`, l + 1);
			}
			const g = [
				this.generatedCodeColumn,
				e,
				i.line,
				i.column
			];
			o >= 0 && g.push(o), this.rawSegments.push(g), this.advance(n.slice(p + 1));
		} else this.pending && (this.rawSegments.push(this.pending), this.advance(n));
		this.pending = null;
	}
	addUneditedChunk(e, n, i, o, a) {
		let l = n.start, p = !0, g = !1;
		for (; l < n.end;) {
			if (i[l] === `
`) o.line += 1, o.column = 0, this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, p = !0, g = !1;
			else {
				if (this.hires || p || a.has(l)) {
					const b = [
						this.generatedCodeColumn,
						e,
						o.line,
						o.column
					];
					this.hires === "boundary" ? yn$1.test(i[l]) ? g || (this.rawSegments.push(b), g = !0) : (this.rawSegments.push(b), g = !1) : this.rawSegments.push(b);
				}
				o.column += 1, this.generatedCodeColumn += 1, p = !1;
			}
			l += 1;
		}
		this.pending = null;
	}
	advance(e) {
		if (!e) return;
		const n = e.split(`
`);
		if (n.length > 1) {
			for (let i = 0; i < n.length - 1; i++) this.generatedCodeLine++, this.raw[this.generatedCodeLine] = this.rawSegments = [];
			this.generatedCodeColumn = 0;
		}
		this.generatedCodeColumn += n[n.length - 1].length;
	}
};
var Z = `
`;
var q = {
	insertLeft: !1,
	insertRight: !1,
	storeName: !1
};
var $e = class $e {
	static {
		u$1(this, "MagicString");
	}
	constructor(e, n = {}) {
		const i = new re$1(0, e.length, e);
		Object.defineProperties(this, {
			original: {
				writable: !0,
				value: e
			},
			outro: {
				writable: !0,
				value: ""
			},
			intro: {
				writable: !0,
				value: ""
			},
			firstChunk: {
				writable: !0,
				value: i
			},
			lastChunk: {
				writable: !0,
				value: i
			},
			lastSearchedChunk: {
				writable: !0,
				value: i
			},
			byStart: {
				writable: !0,
				value: {}
			},
			byEnd: {
				writable: !0,
				value: {}
			},
			filename: {
				writable: !0,
				value: n.filename
			},
			indentExclusionRanges: {
				writable: !0,
				value: n.indentExclusionRanges
			},
			sourcemapLocations: {
				writable: !0,
				value: new fe$1()
			},
			storedNames: {
				writable: !0,
				value: {}
			},
			indentStr: {
				writable: !0,
				value: void 0
			},
			ignoreList: {
				writable: !0,
				value: n.ignoreList
			},
			offset: {
				writable: !0,
				value: n.offset || 0
			}
		}), this.byStart[0] = i, this.byEnd[e.length] = i;
	}
	addSourcemapLocation(e) {
		this.sourcemapLocations.add(e);
	}
	append(e) {
		if (typeof e != "string") throw new TypeError("outro content must be a string");
		return this.outro += e, this;
	}
	appendLeft(e, n) {
		if (e = e + this.offset, typeof n != "string") throw new TypeError("inserted content must be a string");
		this._split(e);
		const i = this.byEnd[e];
		return i ? i.appendLeft(n) : this.intro += n, this;
	}
	appendRight(e, n) {
		if (e = e + this.offset, typeof n != "string") throw new TypeError("inserted content must be a string");
		this._split(e);
		const i = this.byStart[e];
		return i ? i.appendRight(n) : this.outro += n, this;
	}
	clone() {
		const e = new $e(this.original, {
			filename: this.filename,
			offset: this.offset
		});
		let n = this.firstChunk, i = e.firstChunk = e.lastSearchedChunk = n.clone();
		for (; n;) {
			e.byStart[i.start] = i, e.byEnd[i.end] = i;
			const o = n.next, a = o && o.clone();
			a && (i.next = a, a.previous = i, i = a), n = o;
		}
		return e.lastChunk = i, this.indentExclusionRanges && (e.indentExclusionRanges = this.indentExclusionRanges.slice()), e.sourcemapLocations = new fe$1(this.sourcemapLocations), e.intro = this.intro, e.outro = this.outro, e;
	}
	generateDecodedMap(e) {
		e = e || {};
		const n = 0, i = Object.keys(this.storedNames), o = new Sn$1(e.hires), a = Ge$1(this.original);
		return this.intro && o.advance(this.intro), this.firstChunk.eachNext((l) => {
			const p = a(l.start);
			l.intro.length && o.advance(l.intro), l.edited ? o.addEdit(n, l.content, p, l.storeName ? i.indexOf(l.original) : -1) : o.addUneditedChunk(n, l, this.original, p, this.sourcemapLocations), l.outro.length && o.advance(l.outro);
		}), {
			file: e.file ? e.file.split(/[/\\]/).pop() : void 0,
			sources: [e.source ? wn(e.file || "", e.source) : e.file || ""],
			sourcesContent: e.includeContent ? [this.original] : void 0,
			names: i,
			mappings: o.raw,
			x_google_ignoreList: this.ignoreList ? [n] : void 0
		};
	}
	generateMap(e) {
		return new pn$1(this.generateDecodedMap(e));
	}
	_ensureindentStr() {
		this.indentStr === void 0 && (this.indentStr = mn$1(this.original));
	}
	_getRawIndentString() {
		return this._ensureindentStr(), this.indentStr;
	}
	getIndentString() {
		return this._ensureindentStr(), this.indentStr === null ? "	" : this.indentStr;
	}
	indent(e, n) {
		const i = /^[^\r\n]/gm;
		if (Cn$1(e) && (n = e, e = void 0), e === void 0 && (this._ensureindentStr(), e = this.indentStr || "	"), e === "") return this;
		n = n || {};
		const o = {};
		n.exclude && (typeof n.exclude[0] == "number" ? [n.exclude] : n.exclude).forEach((d) => {
			for (let r = d[0]; r < d[1]; r += 1) o[r] = !0;
		});
		let a = n.indentStart !== !1;
		const l = u$1((b) => a ? `${e}${b}` : (a = !0, b), "replacer");
		this.intro = this.intro.replace(i, l);
		let p = 0, g = this.firstChunk;
		for (; g;) {
			const b = g.end;
			if (g.edited) o[p] || (g.content = g.content.replace(i, l), g.content.length && (a = g.content[g.content.length - 1] === `
`));
			else for (p = g.start; p < b;) {
				if (!o[p]) {
					const d = this.original[p];
					d === `
` ? a = !0 : d !== "\r" && a && (a = !1, p === g.start || (this._splitChunk(g, p), g = g.next), g.prependRight(e));
				}
				p += 1;
			}
			p = g.end, g = g.next;
		}
		return this.outro = this.outro.replace(i, l), this;
	}
	insert() {
		throw new Error("magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)");
	}
	insertLeft(e, n) {
		return q.insertLeft || (console.warn("magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"), q.insertLeft = !0), this.appendLeft(e, n);
	}
	insertRight(e, n) {
		return q.insertRight || (console.warn("magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"), q.insertRight = !0), this.prependRight(e, n);
	}
	move(e, n, i) {
		if (e = e + this.offset, n = n + this.offset, i = i + this.offset, i >= e && i <= n) throw new Error("Cannot move a selection inside itself");
		this._split(e), this._split(n), this._split(i);
		const o = this.byStart[e], a = this.byEnd[n], l = o.previous, p = a.next, g = this.byStart[i];
		if (!g && a === this.lastChunk) return this;
		const b = g ? g.previous : this.lastChunk;
		return l && (l.next = p), p && (p.previous = l), b && (b.next = o), g && (g.previous = a), o.previous || (this.firstChunk = a.next), a.next || (this.lastChunk = o.previous, this.lastChunk.next = null), o.previous = b, a.next = g || null, b || (this.firstChunk = o), g || (this.lastChunk = a), this;
	}
	overwrite(e, n, i, o) {
		return o = o || {}, this.update(e, n, i, {
			...o,
			overwrite: !o.contentOnly
		});
	}
	update(e, n, i, o) {
		if (e = e + this.offset, n = n + this.offset, typeof i != "string") throw new TypeError("replacement content must be a string");
		if (this.original.length !== 0) {
			for (; e < 0;) e += this.original.length;
			for (; n < 0;) n += this.original.length;
		}
		if (n > this.original.length) throw new Error("end is out of bounds");
		if (e === n) throw new Error("Cannot overwrite a zero-length range – use appendLeft or prependRight instead");
		this._split(e), this._split(n), o === !0 && (q.storeName || (console.warn("The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"), q.storeName = !0), o = { storeName: !0 });
		const a = o !== void 0 ? o.storeName : !1, l = o !== void 0 ? o.overwrite : !1;
		if (a) {
			const b = this.original.slice(e, n);
			Object.defineProperty(this.storedNames, b, {
				writable: !0,
				value: !0,
				enumerable: !0
			});
		}
		const p = this.byStart[e], g = this.byEnd[n];
		if (p) {
			let b = p;
			for (; b !== g;) {
				if (b.next !== this.byStart[b.end]) throw new Error("Cannot overwrite across a split point");
				b = b.next, b.edit("", !1);
			}
			p.edit(i, a, !l);
		} else {
			const b = new re$1(e, n, "").edit(i, a);
			g.next = b, b.previous = g;
		}
		return this;
	}
	prepend(e) {
		if (typeof e != "string") throw new TypeError("outro content must be a string");
		return this.intro = e + this.intro, this;
	}
	prependLeft(e, n) {
		if (e = e + this.offset, typeof n != "string") throw new TypeError("inserted content must be a string");
		this._split(e);
		const i = this.byEnd[e];
		return i ? i.prependLeft(n) : this.intro = n + this.intro, this;
	}
	prependRight(e, n) {
		if (e = e + this.offset, typeof n != "string") throw new TypeError("inserted content must be a string");
		this._split(e);
		const i = this.byStart[e];
		return i ? i.prependRight(n) : this.outro = n + this.outro, this;
	}
	remove(e, n) {
		if (e = e + this.offset, n = n + this.offset, this.original.length !== 0) {
			for (; e < 0;) e += this.original.length;
			for (; n < 0;) n += this.original.length;
		}
		if (e === n) return this;
		if (e < 0 || n > this.original.length) throw new Error("Character is out of bounds");
		if (e > n) throw new Error("end must be greater than start");
		this._split(e), this._split(n);
		let i = this.byStart[e];
		for (; i;) i.intro = "", i.outro = "", i.edit(""), i = n > i.end ? this.byStart[i.end] : null;
		return this;
	}
	reset(e, n) {
		if (e = e + this.offset, n = n + this.offset, this.original.length !== 0) {
			for (; e < 0;) e += this.original.length;
			for (; n < 0;) n += this.original.length;
		}
		if (e === n) return this;
		if (e < 0 || n > this.original.length) throw new Error("Character is out of bounds");
		if (e > n) throw new Error("end must be greater than start");
		this._split(e), this._split(n);
		let i = this.byStart[e];
		for (; i;) i.reset(), i = n > i.end ? this.byStart[i.end] : null;
		return this;
	}
	lastChar() {
		if (this.outro.length) return this.outro[this.outro.length - 1];
		let e = this.lastChunk;
		do {
			if (e.outro.length) return e.outro[e.outro.length - 1];
			if (e.content.length) return e.content[e.content.length - 1];
			if (e.intro.length) return e.intro[e.intro.length - 1];
		} while (e = e.previous);
		return this.intro.length ? this.intro[this.intro.length - 1] : "";
	}
	lastLine() {
		let e = this.outro.lastIndexOf(Z);
		if (e !== -1) return this.outro.substr(e + 1);
		let n = this.outro, i = this.lastChunk;
		do {
			if (i.outro.length > 0) {
				if (e = i.outro.lastIndexOf(Z), e !== -1) return i.outro.substr(e + 1) + n;
				n = i.outro + n;
			}
			if (i.content.length > 0) {
				if (e = i.content.lastIndexOf(Z), e !== -1) return i.content.substr(e + 1) + n;
				n = i.content + n;
			}
			if (i.intro.length > 0) {
				if (e = i.intro.lastIndexOf(Z), e !== -1) return i.intro.substr(e + 1) + n;
				n = i.intro + n;
			}
		} while (i = i.previous);
		return e = this.intro.lastIndexOf(Z), e !== -1 ? this.intro.substr(e + 1) + n : this.intro + n;
	}
	slice(e = 0, n = this.original.length - this.offset) {
		if (e = e + this.offset, n = n + this.offset, this.original.length !== 0) {
			for (; e < 0;) e += this.original.length;
			for (; n < 0;) n += this.original.length;
		}
		let i = "", o = this.firstChunk;
		for (; o && (o.start > e || o.end <= e);) {
			if (o.start < n && o.end >= n) return i;
			o = o.next;
		}
		if (o && o.edited && o.start !== e) throw new Error(`Cannot use replaced character ${e} as slice start anchor.`);
		const a = o;
		for (; o;) {
			o.intro && (a !== o || o.start === e) && (i += o.intro);
			const l = o.start < n && o.end >= n;
			if (l && o.edited && o.end !== n) throw new Error(`Cannot use replaced character ${n} as slice end anchor.`);
			const p = a === o ? e - o.start : 0, g = l ? o.content.length + n - o.end : o.content.length;
			if (i += o.content.slice(p, g), o.outro && (!l || o.end === n) && (i += o.outro), l) break;
			o = o.next;
		}
		return i;
	}
	snip(e, n) {
		const i = this.clone();
		return i.remove(0, e), i.remove(n, i.original.length), i;
	}
	_split(e) {
		if (this.byStart[e] || this.byEnd[e]) return;
		let n = this.lastSearchedChunk, i = n;
		const o = e > n.end;
		for (; n;) {
			if (n.contains(e)) return this._splitChunk(n, e);
			if (n = o ? this.byStart[n.end] : this.byEnd[n.start], n === i) return;
			i = n;
		}
	}
	_splitChunk(e, n) {
		if (e.edited && e.content.length) {
			const o = Ge$1(this.original)(n);
			throw new Error(`Cannot split a chunk that has already been edited (${o.line}:${o.column} \u2013 "${e.original}")`);
		}
		const i = e.split(n);
		return this.byEnd[n] = e, this.byStart[n] = i, this.byEnd[i.end] = i, e === this.lastChunk && (this.lastChunk = i), this.lastSearchedChunk = e, !0;
	}
	toString() {
		let e = this.intro, n = this.firstChunk;
		for (; n;) e += n.toString(), n = n.next;
		return e + this.outro;
	}
	isEmpty() {
		let e = this.firstChunk;
		do
			if (e.intro.length && e.intro.trim() || e.content.length && e.content.trim() || e.outro.length && e.outro.trim()) return !1;
		while (e = e.next);
		return !0;
	}
	length() {
		let e = this.firstChunk, n = 0;
		do
			n += e.intro.length + e.content.length + e.outro.length;
		while (e = e.next);
		return n;
	}
	trimLines() {
		return this.trim("[\\r\\n]");
	}
	trim(e) {
		return this.trimStart(e).trimEnd(e);
	}
	trimEndAborted(e) {
		const n = new RegExp((e || "\\s") + "+$");
		if (this.outro = this.outro.replace(n, ""), this.outro.length) return !0;
		let i = this.lastChunk;
		do {
			const o = i.end, a = i.trimEnd(n);
			if (i.end !== o && (this.lastChunk === i && (this.lastChunk = i.next), this.byEnd[i.end] = i, this.byStart[i.next.start] = i.next, this.byEnd[i.next.end] = i.next), a) return !0;
			i = i.previous;
		} while (i);
		return !1;
	}
	trimEnd(e) {
		return this.trimEndAborted(e), this;
	}
	trimStartAborted(e) {
		const n = new RegExp("^" + (e || "\\s") + "+");
		if (this.intro = this.intro.replace(n, ""), this.intro.length) return !0;
		let i = this.firstChunk;
		do {
			const o = i.end, a = i.trimStart(n);
			if (i.end !== o && (i === this.lastChunk && (this.lastChunk = i.next), this.byEnd[i.end] = i, this.byStart[i.next.start] = i.next, this.byEnd[i.next.end] = i.next), a) return !0;
			i = i.next;
		} while (i);
		return !1;
	}
	trimStart(e) {
		return this.trimStartAborted(e), this;
	}
	hasChanged() {
		return this.original !== this.toString();
	}
	_replaceRegexp(e, n) {
		function i(a, l) {
			return typeof n == "string" ? n.replace(/\$(\$|&|\d+)/g, (p, g) => g === "$" ? "$" : g === "&" ? a[0] : +g < a.length ? a[+g] : `$${g}`) : n(...a, a.index, l, a.groups);
		}
		u$1(i, "getReplacement");
		function o(a, l) {
			let p;
			const g = [];
			for (; p = a.exec(l);) g.push(p);
			return g;
		}
		if (u$1(o, "matchAll"), e.global) o(e, this.original).forEach((l) => {
			if (l.index != null) {
				const p = i(l, this.original);
				p !== l[0] && this.overwrite(l.index, l.index + l[0].length, p);
			}
		});
		else {
			const a = this.original.match(e);
			if (a && a.index != null) {
				const l = i(a, this.original);
				l !== a[0] && this.overwrite(a.index, a.index + a[0].length, l);
			}
		}
		return this;
	}
	_replaceString(e, n) {
		const { original: i } = this, o = i.indexOf(e);
		return o !== -1 && this.overwrite(o, o + e.length, n), this;
	}
	replace(e, n) {
		return typeof e == "string" ? this._replaceString(e, n) : this._replaceRegexp(e, n);
	}
	_replaceAllString(e, n) {
		const { original: i } = this, o = e.length;
		for (let a = i.indexOf(e); a !== -1; a = i.indexOf(e, a + o)) i.slice(a, a + o) !== n && this.overwrite(a, a + o, n);
		return this;
	}
	replaceAll(e, n) {
		if (typeof e == "string") return this._replaceAllString(e, n);
		if (!e.global) throw new TypeError("MagicString.prototype.replaceAll called with a non-global RegExp argument");
		return this._replaceRegexp(e, n);
	}
};
var Le$1 = "2";
var vn$1 = `.then(${((s) => {
	const e = "default";
	return s[e] && typeof s[e] == "object" && "__esModule" in s[e] ? s[e] : s;
}).toString()})`;
var ce$1 = u$1((s, e, n) => {
	if (n) {
		if (!e.includes("import(")) return;
	} else if (!e.includes("import")) return;
	const o = ae$1(e, s)[0].filter((g) => g.d > -1);
	if (o.length === 0) return;
	const a = new $e(e);
	for (const g of o) a.appendRight(g.se, vn$1);
	return {
		code: a.toString(),
		map: a.generateMap({
			source: s,
			includeContent: !1,
			hires: "boundary"
		})
	};
}, "transformDynamicImport");
var Ke$1 = u$1((s) => {
	try {
		const e = fs.readFileSync(s, "utf8");
		return JSON.parse(e);
	} catch {}
}, "readJsonFile");
var V$1 = u$1(() => {}, "noop");
var Xe$1 = u$1(() => Math.floor(Date.now() / 1e8), "getTime");
var En$1 = /^(\d+)-([^-]+)$/;
var _n$1 = class extends Map {
	static {
		u$1(this, "FileCache");
	}
	cacheDirectory;
	oldCacheDirectory;
	diskCacheIndex;
	diskCacheEntries;
	constructor(e = e$2, n = path.join(os.tmpdir(), "tsx")) {
		super(), this.cacheDirectory = e, this.oldCacheDirectory = n;
	}
	getDiskCacheIndex() {
		if (this.diskCacheIndex) return this.diskCacheIndex;
		fs.mkdirSync(this.cacheDirectory, { recursive: !0 });
		const e = /* @__PURE__ */ new Map(), n = [];
		for (const i of fs.readdirSync(this.cacheDirectory)) {
			const o = En$1.exec(i);
			if (!o) continue;
			const a = Number(o[1]);
			if (!Number.isSafeInteger(a)) continue;
			const l = o[2], p = {
				time: a,
				key: l,
				fileName: i
			};
			n.push(p);
			const g = e.get(l);
			(!g || g.time < a) && e.set(l, p);
		}
		return this.diskCacheIndex = e, this.diskCacheEntries = n, setImmediate(() => {
			this.expireDiskCache().catch(V$1), this.removeOldCacheDirectory().catch(V$1);
		}), e;
	}
	removeDiskCacheEntry(e) {
		const n = this.diskCacheEntries.indexOf(e);
		if (n !== -1 && this.diskCacheEntries.splice(n, 1), this.diskCacheIndex.get(e.key) === e) {
			let i;
			for (const o of this.diskCacheEntries) o.key === e.key && (!i || o.time > i.time) && (i = o);
			i ? this.diskCacheIndex.set(e.key, i) : this.diskCacheIndex.delete(e.key);
		}
	}
	get(e) {
		const n = super.get(e);
		if (n) return n;
		const i = this.getDiskCacheIndex();
		let o = i.get(e);
		for (; o;) {
			const a = path.join(this.cacheDirectory, o.fileName), l = Ke$1(a);
			if (l) return super.set(e, l), l;
			this.removeDiskCacheEntry(o), fs.promises.unlink(a).catch(V$1), o = i.get(e);
		}
	}
	set(e, n) {
		if (super.set(e, n), n) {
			const i = Xe$1(), o = `${i}-${e}`, a = this.getDiskCacheIndex(), l = {
				time: i,
				key: e,
				fileName: o
			};
			fs.promises.writeFile(path.join(this.cacheDirectory, o), JSON.stringify(n)).then(() => {
				const p = a.get(e);
				p?.fileName === o && this.removeDiskCacheEntry(p), a.set(e, l), this.diskCacheEntries.push(l);
			}, V$1);
		}
		return this;
	}
	async expireDiskCache() {
		this.getDiskCacheIndex();
		const e = Xe$1(), n = [];
		for (const i of this.diskCacheEntries) e - i.time > 7 && n.push(fs.promises.unlink(path.join(this.cacheDirectory, i.fileName)).then(() => this.removeDiskCacheEntry(i), V$1));
		await Promise.all(n);
	}
	async removeOldCacheDirectory() {
		try {
			await fs.promises.access(this.oldCacheDirectory).then(() => !0) && ("rm" in fs.promises ? await fs.promises.rm(this.oldCacheDirectory, {
				recursive: !0,
				force: !0
			}) : await fs.promises.rmdir(this.oldCacheDirectory, { recursive: !0 }));
		} catch {}
	}
};
var z$1 = processModule.env.TSX_DISABLE_CACHE ? /* @__PURE__ */ new Map() : new _n$1();
var Ye$1 = 44;
var In$1 = 59;
var Qe$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var Ze$1 = /* @__PURE__ */ new Uint8Array(64);
var Ve$1 = /* @__PURE__ */ new Uint8Array(128);
for (let s = 0; s < 64; s++) {
	const e = Qe$1.charCodeAt(s);
	Ze$1[s] = e, Ve$1[e] = s;
}
var Oe$1 = typeof TextDecoder < "u" ? new TextDecoder() : typeof Buffer < "u" ? { decode(s) {
	return Buffer.from(s.buffer, s.byteOffset, s.byteLength).toString();
} } : { decode(s) {
	let e = "";
	for (let n = 0; n < s.length; n++) e += String.fromCharCode(s[n]);
	return e;
} };
function Ln$1(s) {
	const e = /* @__PURE__ */ new Int32Array(5), n = [];
	let i = 0;
	do {
		const o = On$1(s, i), a = [];
		let l = !0, p = 0;
		e[0] = 0;
		for (let g = i; g < o; g++) {
			let b;
			g = ee(s, g, e, 0);
			const d = e[0];
			d < p && (l = !1), p = d, et$1(s, g, o) ? (g = ee(s, g, e, 1), g = ee(s, g, e, 2), g = ee(s, g, e, 3), et$1(s, g, o) ? (g = ee(s, g, e, 4), b = [
				d,
				e[1],
				e[2],
				e[3],
				e[4]
			]) : b = [
				d,
				e[1],
				e[2],
				e[3]
			]) : b = [d], a.push(b);
		}
		l || An$1(a), n.push(a), i = o + 1;
	} while (i <= s.length);
	return n;
}
u$1(Ln$1, "decode");
function On$1(s, e) {
	const n = s.indexOf(";", e);
	return n === -1 ? s.length : n;
}
u$1(On$1, "indexOf");
function ee(s, e, n, i) {
	let o = 0, a = 0, l = 0;
	do
		l = Ve$1[s.charCodeAt(e++)], o |= (l & 31) << a, a += 5;
	while (l & 32);
	const p = o & 1;
	return o >>>= 1, p && (o = -2147483648 | -o), n[i] += o, e;
}
u$1(ee, "decodeInteger");
function et$1(s, e, n) {
	return e >= n ? !1 : s.charCodeAt(e) !== Ye$1;
}
u$1(et$1, "hasMoreVlq");
function An$1(s) {
	s.sort(Nn$1);
}
u$1(An$1, "sort");
function Nn$1(s, e) {
	return s[0] - e[0];
}
u$1(Nn$1, "sortComparator$1");
function Rn$1(s) {
	const e = /* @__PURE__ */ new Int32Array(5), n = 16384, i = 16348, o = new Uint8Array(n), a = o.subarray(0, i);
	let l = 0, p = "";
	for (let g = 0; g < s.length; g++) {
		const b = s[g];
		if (g > 0 && (l === n && (p += Oe$1.decode(o), l = 0), o[l++] = In$1), b.length !== 0) {
			e[0] = 0;
			for (let d = 0; d < b.length; d++) {
				const r = b[d];
				l > i && (p += Oe$1.decode(a), o.copyWithin(0, i, l), l -= i), d > 0 && (o[l++] = Ye$1), l = te$1(o, l, e, r, 0), r.length !== 1 && (l = te$1(o, l, e, r, 1), l = te$1(o, l, e, r, 2), l = te$1(o, l, e, r, 3), r.length !== 4 && (l = te$1(o, l, e, r, 4)));
			}
		}
	}
	return p + Oe$1.decode(o.subarray(0, l));
}
u$1(Rn$1, "encode");
function te$1(s, e, n, i, o) {
	const a = i[o];
	let l = a - n[o];
	n[o] = a, l = l < 0 ? -l << 1 | 1 : l << 1;
	do {
		let p = l & 31;
		l >>>= 5, l > 0 && (p |= 32), s[e++] = Ze$1[p];
	} while (l > 0);
	return e;
}
u$1(te$1, "encodeInteger");
var Mn$1 = /^[\w+.-]+:\/\//;
var $n$1 = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/;
var Dn$1 = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
function jn$1(s) {
	return Mn$1.test(s);
}
u$1(jn$1, "isAbsoluteUrl");
function Un$1(s) {
	return s.startsWith("//");
}
u$1(Un$1, "isSchemeRelativeUrl");
function tt$1(s) {
	return s.startsWith("/");
}
u$1(tt$1, "isAbsolutePath");
function Tn$1(s) {
	return s.startsWith("file:");
}
u$1(Tn$1, "isFileUrl");
function nt$1(s) {
	return /^[.?#]/.test(s);
}
u$1(nt$1, "isRelative");
function le$1(s) {
	const e = $n$1.exec(s);
	return rt$1(e[1], e[2] || "", e[3], e[4] || "", e[5] || "/", e[6] || "", e[7] || "");
}
u$1(le$1, "parseAbsoluteUrl");
function Fn$1(s) {
	const e = Dn$1.exec(s), n = e[2];
	return rt$1("file:", "", e[1] || "", "", tt$1(n) ? n : "/" + n, e[3] || "", e[4] || "");
}
u$1(Fn$1, "parseFileUrl");
function rt$1(s, e, n, i, o, a, l) {
	return {
		scheme: s,
		user: e,
		host: n,
		port: i,
		path: o,
		query: a,
		hash: l,
		type: 7
	};
}
u$1(rt$1, "makeUrl");
function it$1(s) {
	if (Un$1(s)) {
		const n = le$1("http:" + s);
		return n.scheme = "", n.type = 6, n;
	}
	if (tt$1(s)) {
		const n = le$1("http://foo.com" + s);
		return n.scheme = "", n.host = "", n.type = 5, n;
	}
	if (Tn$1(s)) return Fn$1(s);
	if (jn$1(s)) return le$1(s);
	const e = le$1("http://foo.com/" + s);
	return e.scheme = "", e.host = "", e.type = s ? s.startsWith("?") ? 3 : s.startsWith("#") ? 2 : 4 : 1, e;
}
u$1(it$1, "parseUrl");
function Bn$1(s) {
	if (s.endsWith("/..")) return s;
	const e = s.lastIndexOf("/");
	return s.slice(0, e + 1);
}
u$1(Bn$1, "stripPathFilename");
function Pn$1(s, e) {
	st$1(e, e.type), s.path === "/" ? s.path = e.path : s.path = Bn$1(e.path) + s.path;
}
u$1(Pn$1, "mergePaths");
function st$1(s, e) {
	const n = e <= 4, i = s.path.split("/");
	let o = 1, a = 0, l = !1;
	for (let g = 1; g < i.length; g++) {
		const b = i[g];
		if (!b) {
			l = !0;
			continue;
		}
		if (l = !1, b !== ".") {
			if (b === "..") {
				a ? (l = !0, a--, o--) : n && (i[o++] = b);
				continue;
			}
			i[o++] = b, a++;
		}
	}
	let p = "";
	for (let g = 1; g < o; g++) p += "/" + i[g];
	(!p || l && !p.endsWith("/..")) && (p += "/"), s.path = p;
}
u$1(st$1, "normalizePath");
function Wn$1(s, e) {
	if (!s && !e) return "";
	const n = it$1(s);
	let i = n.type;
	if (e && i !== 7) {
		const a = it$1(e), l = a.type;
		switch (i) {
			case 1: n.hash = a.hash;
			case 2: n.query = a.query;
			case 3:
			case 4: Pn$1(n, a);
			case 5: n.user = a.user, n.host = a.host, n.port = a.port;
			case 6: n.scheme = a.scheme;
		}
		l > i && (i = l);
	}
	st$1(n, i);
	const o = n.query + n.hash;
	switch (i) {
		case 2:
		case 3: return o;
		case 4: {
			const a = n.path.slice(1);
			return a ? nt$1(e || s) && !nt$1(a) ? "./" + a + o : a + o : o || ".";
		}
		case 5: return n.path + o;
		default: return n.scheme + "//" + n.user + n.host + n.port + n.path + o;
	}
}
u$1(Wn$1, "resolve$1");
function ot$1(s, e) {
	return e && !e.endsWith("/") && (e += "/"), Wn$1(s, e);
}
u$1(ot$1, "resolve");
function Jn$1(s) {
	if (!s) return "";
	const e = s.lastIndexOf("/");
	return s.slice(0, e + 1);
}
u$1(Jn$1, "stripFilename");
var F$1 = 0;
function qn$1(s, e) {
	const n = at$1(s, 0);
	if (n === s.length) return s;
	e || (s = s.slice());
	for (let i = n; i < s.length; i = at$1(s, i + 1)) s[i] = Hn$1(s[i], e);
	return s;
}
u$1(qn$1, "maybeSort");
function at$1(s, e) {
	for (let n = e; n < s.length; n++) if (!zn$1(s[n])) return n;
	return s.length;
}
u$1(at$1, "nextUnsortedSegmentLine");
function zn$1(s) {
	for (let e = 1; e < s.length; e++) if (s[e][F$1] < s[e - 1][F$1]) return !1;
	return !0;
}
u$1(zn$1, "isSorted");
function Hn$1(s, e) {
	return e || (s = s.slice()), s.sort(Gn$1);
}
u$1(Hn$1, "sortSegments");
function Gn$1(s, e) {
	return s[F$1] - e[F$1];
}
u$1(Gn$1, "sortComparator");
var ue$1 = !1;
function Kn$1(s, e, n, i) {
	for (; n <= i;) {
		const o = n + (i - n >> 1), a = s[o][F$1] - e;
		if (a === 0) return ue$1 = !0, o;
		a < 0 ? n = o + 1 : i = o - 1;
	}
	return ue$1 = !1, n - 1;
}
u$1(Kn$1, "binarySearch");
function Xn$1(s, e, n) {
	for (let i = n - 1; i >= 0 && s[i][F$1] === e; n = i--);
	return n;
}
u$1(Xn$1, "lowerBound");
function Yn$1() {
	return {
		lastKey: -1,
		lastNeedle: -1,
		lastIndex: -1
	};
}
u$1(Yn$1, "memoizedState");
function Qn$1(s, e, n, i) {
	const { lastKey: o, lastNeedle: a, lastIndex: l } = n;
	let p = 0, g = s.length - 1;
	if (i === o) {
		if (e === a) return ue$1 = l !== -1 && s[l][F$1] === e, l;
		e >= a ? p = l === -1 ? 0 : l : g = l;
	}
	return n.lastKey = i, n.lastNeedle = e, n.lastIndex = Kn$1(s, e, p, g);
}
u$1(Qn$1, "memoizedBinarySearch");
var ct$1 = class {
	static {
		u$1(this, "TraceMap");
	}
	constructor(e, n) {
		const i = typeof e == "string";
		if (!i && e._decodedMemo) return e;
		const o = i ? JSON.parse(e) : e, { version: a, file: l, names: p, sourceRoot: g, sources: b, sourcesContent: d } = o;
		this.version = a, this.file = l, this.names = p || [], this.sourceRoot = g, this.sources = b, this.sourcesContent = d, this.ignoreList = o.ignoreList || o.x_google_ignoreList || void 0;
		const r = ot$1(g || "", Jn$1(n));
		this.resolvedSources = b.map((O) => ot$1(O || "", r));
		const { mappings: S } = o;
		typeof S == "string" ? (this._encoded = S, this._decoded = void 0) : (this._encoded = void 0, this._decoded = qn$1(S, i)), this._decodedMemo = Yn$1(), this._bySources = void 0, this._bySourceMemos = void 0;
	}
};
function Hr(s) {
	return s;
}
u$1(Hr, "cast$2");
function lt$1(s) {
	var e;
	return (e = s)._decoded || (e._decoded = Ln$1(s._encoded));
}
u$1(lt$1, "decodedMappings");
function Zn$1(s, e, n) {
	const i = lt$1(s);
	if (e >= i.length) return null;
	const o = i[e], a = Vn$1(o, s._decodedMemo, e, n);
	return a === -1 ? null : o[a];
}
u$1(Zn$1, "traceSegment");
function Vn$1(s, e, n, i, o) {
	let a = Qn$1(s, i, e, n);
	return ue$1 && (a = Xn$1(s, i, a)), a === -1 || a === s.length ? -1 : a;
}
u$1(Vn$1, "traceSegmentInternal");
var Ae = class {
	static {
		u$1(this, "SetArray");
	}
	constructor() {
		this._indexes = { __proto__: null }, this.array = [];
	}
};
function Gr(s) {
	return s;
}
u$1(Gr, "cast$1");
function ut$1(s, e) {
	return s._indexes[e];
}
u$1(ut$1, "get");
function ne$1(s, e) {
	const n = ut$1(s, e);
	if (n !== void 0) return n;
	const { array: i, _indexes: o } = s;
	return o[e] = i.push(e) - 1;
}
u$1(ne$1, "put");
function er$1(s, e) {
	const n = ut$1(s, e);
	if (n === void 0) return;
	const { array: i, _indexes: o } = s;
	for (let a = n + 1; a < i.length; a++) {
		const l = i[a];
		i[a - 1] = l, o[l]--;
	}
	o[e] = void 0, i.pop();
}
u$1(er$1, "remove");
var tr$1 = 0;
var nr$1 = 1;
var rr$1 = 2;
var ir = 3;
var sr$1 = 4;
var ft$1 = -1;
var or$1 = class {
	static {
		u$1(this, "GenMapping");
	}
	constructor({ file: e, sourceRoot: n } = {}) {
		this._names = new Ae(), this._sources = new Ae(), this._sourcesContent = [], this._mappings = [], this.file = e, this.sourceRoot = n, this._ignoreList = new Ae();
	}
};
function Kr(s) {
	return s;
}
u$1(Kr, "cast");
var ar$1 = u$1((s, e, n, i, o, a, l, p) => fr(!0, s, e, n, i, o, a, l), "maybeAddSegment");
function cr(s, e, n) {
	const { _sources: i, _sourcesContent: o } = s, a = ne$1(i, e);
	o[a] = n;
}
u$1(cr, "setSourceContent");
function lr(s, e, n = !0) {
	const { _sources: i, _sourcesContent: o, _ignoreList: a } = s, l = ne$1(i, e);
	l === o.length && (o[l] = null), n ? ne$1(a, l) : er$1(a, l);
}
u$1(lr, "setIgnore");
function ht$1(s) {
	const { _mappings: e, _sources: n, _sourcesContent: i, _names: o, _ignoreList: a } = s;
	return gr(e), {
		version: 3,
		file: s.file || void 0,
		names: o.array,
		sourceRoot: s.sourceRoot || void 0,
		sources: n.array,
		sourcesContent: i,
		mappings: e,
		ignoreList: a.array
	};
}
u$1(ht$1, "toDecodedMap");
function ur(s) {
	const e = ht$1(s);
	return Object.assign(Object.assign({}, e), { mappings: Rn$1(e.mappings) });
}
u$1(ur, "toEncodedMap");
function fr(s, e, n, i, o, a, l, p, g) {
	const { _mappings: b, _sources: d, _sourcesContent: r, _names: S } = e, O = hr(b, n), _ = dr(O, i);
	if (!o) return br(O, _) ? void 0 : dt$1(O, _, [i]);
	const N = ne$1(d, o), $ = p ? ne$1(S, p) : ft$1;
	if (N === r.length && (r[N] = null), !pr(O, _, N, a, l, $)) return dt$1(O, _, p ? [
		i,
		N,
		a,
		l,
		$
	] : [
		i,
		N,
		a,
		l
	]);
}
u$1(fr, "addSegmentInternal");
function hr(s, e) {
	for (let n = s.length; n <= e; n++) s[n] = [];
	return s[e];
}
u$1(hr, "getLine");
function dr(s, e) {
	let n = s.length;
	for (let i = n - 1; i >= 0; n = i--) if (e >= s[i][tr$1]) break;
	return n;
}
u$1(dr, "getColumnIndex");
function dt$1(s, e, n) {
	for (let i = s.length; i > e; i--) s[i] = s[i - 1];
	s[e] = n;
}
u$1(dt$1, "insert");
function gr(s) {
	const { length: e } = s;
	let n = e;
	for (let i = n - 1; i >= 0 && !(s[i].length > 0); n = i, i--);
	n < e && (s.length = n);
}
u$1(gr, "removeEmptyFinalLines");
function br(s, e) {
	return e === 0 ? !0 : s[e - 1].length === 1;
}
u$1(br, "skipSourceless");
function pr(s, e, n, i, o, a) {
	if (e === 0) return !1;
	const l = s[e - 1];
	return l.length === 1 ? !1 : n === l[nr$1] && i === l[rr$1] && o === l[ir] && a === (l.length === 5 ? l[sr$1] : ft$1);
}
u$1(pr, "skipSource");
var gt$1 = bt$1("", -1, -1, "", null, !1);
var mr = [];
function bt$1(s, e, n, i, o, a) {
	return {
		source: s,
		line: e,
		column: n,
		name: i,
		content: o,
		ignore: a
	};
}
u$1(bt$1, "SegmentObject");
function pt$1(s, e, n, i, o) {
	return {
		map: s,
		sources: e,
		source: n,
		content: i,
		ignore: o
	};
}
u$1(pt$1, "Source");
function mt$1(s, e) {
	return pt$1(s, e, "", null, !1);
}
u$1(mt$1, "MapSource");
function wr(s, e, n) {
	return pt$1(null, mr, s, e, n);
}
u$1(wr, "OriginalSource");
function kr(s) {
	const e = new or$1({ file: s.map.file }), { sources: n, map: i } = s, o = i.names, a = lt$1(i);
	for (let l = 0; l < a.length; l++) {
		const p = a[l];
		for (let g = 0; g < p.length; g++) {
			const b = p[g], d = b[0];
			let r = gt$1;
			if (b.length !== 1) {
				const H = n[b[1]];
				if (r = wt$1(H, b[2], b[3], b.length === 5 ? o[b[4]] : ""), r == null) continue;
			}
			const { column: S, line: O, name: _, content: N, source: $, ignore: B } = r;
			ar$1(e, l, d, $, O, S, _), $ && N != null && cr(e, $, N), B && lr(e, $, !0);
		}
	}
	return e;
}
u$1(kr, "traceMappings");
function wt$1(s, e, n, i) {
	if (!s.map) return bt$1(s.source, e, n, i, s.content, s.ignore);
	const o = Zn$1(s.map, e, n);
	return o == null ? null : o.length === 1 ? gt$1 : wt$1(s.sources[o[1]], o[2], o[3], o.length === 5 ? s.map.names[o[4]] : i);
}
u$1(wt$1, "originalPositionFor");
function Cr(s) {
	return Array.isArray(s) ? s : [s];
}
u$1(Cr, "asArray");
function yr(s, e) {
	const n = Cr(s).map((a) => new ct$1(a, "")), i = n.pop();
	for (let a = 0; a < n.length; a++) if (n[a].sources.length > 1) throw new Error(`Transformation map ${a} must have exactly one source file.
Did you specify these with the most recent transformation maps first?`);
	let o = kt$1(i, e, "", 0);
	for (let a = n.length - 1; a >= 0; a--) o = mt$1(n[a], [o]);
	return o;
}
u$1(yr, "buildSourceMapTree");
function kt$1(s, e, n, i) {
	const { resolvedSources: o, sourcesContent: a, ignoreList: l } = s, p = i + 1;
	return mt$1(s, o.map((b, d) => {
		const r = {
			importer: n,
			depth: p,
			source: b || "",
			content: void 0,
			ignore: void 0
		}, S = e(r.source, r), { source: O, content: _, ignore: N } = r;
		if (S) return kt$1(new ct$1(S, O), e, O, p);
		return wr(O, _ !== void 0 ? _ : a ? a[d] : null, N !== void 0 ? N : l ? l.includes(d) : !1);
	}));
}
u$1(kt$1, "build");
var Sr = class {
	static {
		u$1(this, "SourceMap");
	}
	constructor(e, n) {
		const i = n.decodedMappings ? ht$1(e) : ur(e);
		this.version = i.version, this.file = i.file, this.mappings = i.mappings, this.names = i.names, this.ignoreList = i.ignoreList, this.sourceRoot = i.sourceRoot, this.sources = i.sources, n.excludeContent || (this.sourcesContent = i.sourcesContent);
	}
	toString() {
		return JSON.stringify(this);
	}
};
function Ct(s, e, n) {
	const i = {
		excludeContent: !!n,
		decodedMappings: !1
	};
	return new Sr(kr(yr(s, e)), i);
}
u$1(Ct, "remapping");
var yt$1 = u$1((s, e, n) => {
	const i = [], o = { code: e };
	for (const a of n) {
		const l = a(s, o.code);
		l && (Object.assign(o, l), i.unshift(l.map));
	}
	return {
		...o,
		map: Ct(i, () => null)
	};
}, "applyTransformersSync");
var xr = u$1(async (s, e, n) => {
	const i = [], o = { code: e };
	for (const a of n) {
		const l = await a(s, o.code);
		l && (Object.assign(o, l), i.unshift(l.map));
	}
	return {
		...o,
		map: Ct(i, () => null)
	};
}, "applyTransformers");
var vr = u$1((s) => {
	const e = [];
	let n = !1, i = !0;
	for (let o = 0; o < s.length; o += 1) {
		let a = s[o];
		if (a === "\\" && n) {
			if (o + 1 === s.length) return e;
			o += 1, a = s[o];
		} else if (a === " " && !n) {
			i = !0;
			continue;
		} else if (a === "\"") {
			n = !n;
			continue;
		}
		i ? (e.push(a), i = !1) : e[e.length - 1] += a;
	}
	return e;
}, "tokenizeNodeOptionsEnv");
var St = u$1((s, e, n) => {
	for (let i = 0; i < e.length; i += 1) {
		const o = e[i];
		if (o.length <= 1 || o[0] !== "-") continue;
		const a = o[1] === "-" ? o.indexOf("=") : -1;
		let l = a === -1 ? o : o.slice(0, a);
		l.includes("_", 2) && (l = l.slice(0, 2) + l.slice(2).replaceAll("_", "-"));
		for (const p of s.forms) {
			const [g, b] = p;
			if (l !== g || (b === 3 || b === 5) && a === -1) continue;
			const d = b === 4 || b === 5, r = b >= 3 ? 0 : b;
			let S = d ? p[2] : "";
			r === 0 && !d && (a === -1 ? (i += 1, S = e[i] ?? "", S[0] === "\\" && S[1] === "-" && (S = S.slice(1))) : S = o.slice(a + 1)), n = s.fold(S, n, r);
			break;
		}
	}
	return n;
}, "scanSource");
var Er = u$1((s) => {
	let e = s.init();
	const n = processModule.env.NODE_OPTIONS;
	return n && (e = St(s, vr(n), e)), e = St(s, processModule.execArgv, e), e;
}, "getOptionValue");
var _r = u$1((s, e, n) => n === 1, "setByEffect");
var Lr = u$1((s, e) => ({
	forms: e,
	init: u$1(() => s, "init"),
	fold: _r
}), "booleanFlag")(!1, [
	["--inspect-brk-node", 1],
	["--inspect-brk", 1],
	["--inspect-wait", 1],
	["--inspect", 1],
	["--no-inspect", 2]
]);
var Or = Object.freeze({
	target: `node${processModule.versions.node}`,
	loader: "default"
});
var Ar = Er(Lr);
var Ne$1 = {
	...Or,
	sourcemap: !0,
	sourcesContent: !!processModule.env.NODE_V8_COVERAGE || Ar,
	minifyWhitespace: !0,
	keepNames: !0
};
var Re$1 = u$1((s) => {
	const e = s.sourcefile;
	if (e) {
		const n = path.extname(e.split("?")[0]);
		n ? n === ".cts" || n === ".mts" ? s.sourcefile = `${e.slice(0, -3)}ts` : n === ".mjs" && (s.sourcefile = `${e.slice(0, -3)}js`) : s.sourcefile += ".js";
	}
	return (n) => (n.map && (s.sourcefile !== e && (n.map = n.map.replace(JSON.stringify(s.sourcefile), JSON.stringify(e))), n.map = JSON.parse(n.map)), n);
}, "patchOptions");
var Me$1 = u$1((s) => {
	throw s.name = "TransformError", delete s.errors, delete s.warnings, s;
}, "formatEsbuildError");
var Nr = u$1((s, e) => ({
	...c$2(d$1) ? {
		dirname: path.dirname(s),
		filename: s
	} : {},
	url: e
}), "getImportMeta");
var Rr = u$1((s, e) => {
	if (!s.includes("import")) return !1;
	try {
		return ae$1(s, e)[0].some((n) => n.d === -2);
	} catch {
		return !0;
	}
}, "hasImportMeta");
var Mr = u$1((s, e, n) => {
	let i, o, a;
	if (e.startsWith("file://")) {
		i = e;
		const r = new URL(e);
		o = fileURLToPath(r);
	} else [o, a] = e.split("?"), i = pathToFileURL(o) + (a ? `?${a}` : "");
	const { cjsBanner: l, ...p } = n ?? {}, g = {
		...Ne$1,
		format: "cjs",
		sourcefile: o,
		banner: `__filename=${JSON.stringify(o)};(()=>{${l ?? ""}`,
		footer: "})()",
		platform: "node",
		...p
	};
	g.format === "cjs" && !o.endsWith(".cjs") && !o.endsWith(".cts") && Rr(s, o) && (g.define = {
		...g.define,
		"import.meta": JSON.stringify(Nr(o, i))
	});
	const b = xe$1([
		s,
		i,
		JSON.stringify(g),
		import_main.version,
		Le$1
	].join("-"));
	let d = z$1.get(b);
	return d || (d = yt$1(e, s, [(r, S) => {
		const O = Re$1(g);
		let _;
		try {
			_ = (0, import_main.transformSync)(S, g);
		} catch (N) {
			throw Me$1(N);
		}
		return O(_);
	}, (r, S) => ce$1(r, S, !0)]), z$1.set(b, d)), d;
}, "transformSync");
u$1(async (s, e, n) => {
	const i = {
		...Ne$1,
		format: "esm",
		sourcefile: e,
		...n
	}, o = xe$1([
		s,
		JSON.stringify(i),
		import_main.version,
		Le$1
	].join("-"));
	let a = z$1.get(o);
	return a || (a = await xr(e, s, [async (l, p) => {
		const g = Re$1(i);
		let b;
		try {
			b = await (0, import_main.transform)(p, i);
		} catch (d) {
			throw Me$1(d);
		}
		return g(b);
	}, (l, p) => ce$1(l, p, !0)]), z$1.set(o, a)), a;
}, "transform");
u$1((s, e, n) => {
	const i = {
		...Ne$1,
		format: "esm",
		sourcefile: e,
		...n
	}, o = xe$1([
		s,
		JSON.stringify(i),
		import_main.version,
		Le$1
	].join("-"));
	let a = z$1.get(o);
	return a || (a = yt$1(e, s, [(l, p) => {
		const g = Re$1(i);
		let b;
		try {
			b = (0, import_main.transformSync)(p, i);
		} catch (d) {
			throw Me$1(d);
		}
		return g(b);
	}, (l, p) => ce$1(l, p, !0)]), z$1.set(o, a)), a;
}, "transformEsmSync");
//#endregion
//#region node_modules/tsx/dist/client-D_mPDF5S.mjs
var p$1 = Object.defineProperty;
var t$1 = (e, n) => p$1(e, "name", {
	value: n,
	configurable: !0
});
var o = [];
var m$1 = t$1(() => new Promise((e) => {
	const n = n$1(processModule.ppid), r = net.createConnection(n, () => {
		e(t$1((i) => {
			const c = Buffer.from(JSON.stringify(i)), f = Buffer.alloc(4);
			f.writeInt32BE(c.length, 0), r.write(Buffer.concat([f, c]));
		}, "sendToParent"));
	});
	r.on("error", () => {
		e();
	}), r.unref();
}), "connectToServer");
var s$1 = { send: t$1((e) => {
	o.push(e);
}, "send") };
m$1().then((e) => {
	if (e) for (const n of o) e(n);
	o = [], s$1.send = e;
}, () => {
	o = [], s$1.send = void 0;
});
//#endregion
//#region node_modules/tsx/dist/index-gbaejti9.mjs
init_globalthis();
var u = Object.defineProperty;
var g = (s, n) => u(s, "name", {
	value: n,
	configurable: !0
});
var t = !0;
var l = typeof self < "u" ? self : typeof window < "u" ? window : typeof globalthis_default < "u" ? globalthis_default : {};
var i$1 = 0;
if (l.process && l.process.env && l.process.stdout) {
	const { FORCE_COLOR: s, NODE_DISABLE_COLORS: n, NO_COLOR: r, TERM: o, COLORTERM: c } = l.process.env;
	n || r || s === "0" ? t = !1 : s === "1" || s === "2" || s === "3" ? t = !0 : o === "dumb" ? t = !1 : "CI" in l.process.env && [
		"TRAVIS",
		"CIRCLECI",
		"APPVEYOR",
		"GITLAB_CI",
		"GITHUB_ACTIONS",
		"BUILDKITE",
		"DRONE"
	].some((a) => a in l.process.env) ? t = !0 : t = processModule.stdout.isTTY, t && (processModule.platform === "win32" || c && (c === "truecolor" || c === "24bit") ? i$1 = 3 : o && (o.endsWith("-256color") || o.endsWith("256")) ? i$1 = 2 : i$1 = 1);
}
var f = {
	enabled: t,
	supportLevel: i$1
};
function e$1(s, n, r = 1) {
	const o = `\x1B[${s}m`, c = `\x1B[${n}m`, a = new RegExp(`\\x1b\\[${n}m`, "g");
	return (p) => f.enabled && f.supportLevel >= r ? o + ("" + p).replace(a, o) + c : "" + p;
}
g(e$1, "kolorist");
var b = e$1(30, 39);
e$1(33, 39);
e$1(90, 39);
e$1(92, 39);
e$1(95, 39);
e$1(96, 39);
var L$1 = e$1(44, 49);
var E = e$1(100, 49);
var T = e$1(103, 49);
//#endregion
//#region node_modules/tsx/dist/register-C9AniqUt.mjs
var wt = Object.defineProperty;
var p = (e, t) => wt(e, "name", {
	value: t,
	configurable: !0
});
var De = p((e) => {
	if (!e.startsWith("data:text/javascript,")) return;
	const t = e.indexOf("?");
	if (t === -1) return;
	const n = new URLSearchParams(e.slice(t + 1)).get("filePath");
	if (n) return n;
}, "getOriginalFilePath");
var Le = p((e) => {
	const t = De(e);
	return t && ($._cache[t] = $._cache[e], delete $._cache[e], e = t), e;
}, "interopCjsExports");
var Ue = p((e) => e !== null && typeof e == "object", "A");
var B = p((e, t) => Object.assign(/* @__PURE__ */ new Error(`[${e}]: ${t}`), { code: e }), "a");
var Re = "ERR_INVALID_PACKAGE_CONFIG";
var ue = "ERR_INVALID_PACKAGE_TARGET";
var It = "ERR_PACKAGE_PATH_NOT_EXPORTED";
var Nt = /^\d+$/;
var Wt = /^(\.{1,2}|node_modules)$/i;
var Bt = /\/|\\/;
var Fe = ((e) => (e.Export = "exports", e.Import = "imports", e))(Fe || {});
var fe = p((e, t, r, n, s) => {
	if (t == null) return [];
	if (typeof t == "string") {
		const [o, ...a] = t.split(Bt);
		if (o === ".." || a.some((i) => Wt.test(i))) throw B(ue, `Invalid "${e}" target "${t}" defined in the package config`);
		return [s ? t.replace(/\*/g, s) : t];
	}
	if (Array.isArray(t)) return t.flatMap((o) => fe(e, o, r, n, s));
	if (Ue(t)) {
		for (const o of Object.keys(t)) {
			if (Nt.test(o)) throw B(Re, "Cannot contain numeric property keys");
			if (o === "default" || n.includes(o)) return fe(e, t[o], r, n, s);
		}
		return [];
	}
	throw B(ue, `Invalid "${e}" target "${t}"`);
}, "f");
var G$1 = "*";
var Mt = p((e, t) => {
	const r = e.indexOf(G$1), n = t.indexOf(G$1);
	return r === n ? t.length > e.length : n > r;
}, "m");
function Jt(e, t) {
	if (!t.includes(G$1) && e.hasOwnProperty(t)) return [t];
	let r, n;
	for (const s of Object.keys(e)) if (s.includes(G$1)) {
		const [o, a, i] = s.split(G$1);
		if (i === void 0 && t.startsWith(o) && t.endsWith(a)) {
			const m = t.slice(o.length, -a.length || void 0);
			m && (!r || Mt(r, s)) && (r = s, n = m);
		}
	}
	return [r, n];
}
p(Jt, "d");
var Vt = p((e) => Object.keys(e).reduce((t, r) => {
	const n = r === "" || r[0] !== ".";
	if (t === void 0 || t === n) return n;
	throw B(Re, "\"exports\" cannot contain some keys starting with \".\" and some not");
}, void 0), "p");
var Qt = /^\w+:/;
var Gt = p((e, t, r) => {
	if (!e) throw new Error("\"exports\" is required");
	t = t === "" ? "." : `./${t}`, (typeof e == "string" || Array.isArray(e) || Ue(e) && Vt(e)) && (e = { ".": e });
	const [n, s] = Jt(e, t), o = fe(Fe.Export, e[n], t, r, s);
	if (o.length === 0) throw B(It, t === "." ? "No \"exports\" main defined" : `Package subpath '${t}' is not defined by "exports"`);
	for (const a of o) if (!a.startsWith("./") && !Qt.test(a)) throw B(ue, `Invalid "exports" target "${a}" defined in the package config`);
	return o;
}, "v");
var Kt = Object.defineProperty;
var c$1 = p((e, t) => Kt(e, "name", {
	value: t,
	configurable: !0
}), "i");
function A(e) {
	return e.startsWith("\\\\?\\") ? e : e.replace(/\\/g, "/");
}
p(A, "x"), c$1(A, "slash");
var zt = c$1((e, t) => {
	const r = `readFileSync:${t}`;
	let n = e?.get(r);
	return n === void 0 && (n = fs.readFileSync(t, "utf8"), e?.set(r, n)), n;
}, "readFile");
var _ = c$1((e, t) => {
	const r = `tryStat:${t}`;
	let n = e?.get(r);
	if (n === void 0) {
		try {
			n = fs.statSync(t);
		} catch {
			n = null;
		}
		e?.set(r, n);
	}
	return n ?? void 0;
}, "tryStat");
var K = c$1((e, t, r) => {
	for (;;) {
		const n = path.posix.join(e, t);
		if (_(r, n)) return n;
		const s = path.dirname(e);
		if (s === e) return;
		e = s;
	}
}, "findUp");
function Ie(e, t = !1) {
	const r = e.length;
	let n = 0, s = "", o = 0, a = 16, i = 0, m = 0, u = 0, y = 0, f = 0;
	function E(l, C) {
		let S = 0, x = 0;
		for (; S < l;) {
			let w = e.charCodeAt(n);
			if (w >= 48 && w <= 57) x = x * 16 + w - 48;
			else if (w >= 65 && w <= 70) x = x * 16 + w - 65 + 10;
			else if (w >= 97 && w <= 102) x = x * 16 + w - 97 + 10;
			else break;
			n++, S++;
		}
		return S < l && (x = -1), x;
	}
	p(E, "A"), c$1(E, "scanHexDigits");
	function b(l) {
		n = l, s = "", o = 0, a = 16, f = 0;
	}
	p(b, "O"), c$1(b, "setPosition");
	function k() {
		let l = n;
		if (e.charCodeAt(n) === 48) n++;
		else for (n++; n < e.length && I(e.charCodeAt(n));) n++;
		if (n < e.length && e.charCodeAt(n) === 46) if (n++, n < e.length && I(e.charCodeAt(n))) for (n++; n < e.length && I(e.charCodeAt(n));) n++;
		else return f = 3, e.substring(l, n);
		let C = n;
		if (n < e.length && (e.charCodeAt(n) === 69 || e.charCodeAt(n) === 101)) if (n++, (n < e.length && e.charCodeAt(n) === 43 || e.charCodeAt(n) === 45) && n++, n < e.length && I(e.charCodeAt(n))) {
			for (n++; n < e.length && I(e.charCodeAt(n));) n++;
			C = n;
		} else f = 3;
		return e.substring(l, C);
	}
	p(k, "h"), c$1(k, "scanNumber");
	function v() {
		let l = "", C = n;
		for (;;) {
			if (n >= r) {
				l += e.substring(C, n), f = 2;
				break;
			}
			const S = e.charCodeAt(n);
			if (S === 34) {
				l += e.substring(C, n), n++;
				break;
			}
			if (S === 92) {
				if (l += e.substring(C, n), n++, n >= r) {
					f = 2;
					break;
				}
				switch (e.charCodeAt(n++)) {
					case 34:
						l += "\"";
						break;
					case 92:
						l += "\\";
						break;
					case 47:
						l += "/";
						break;
					case 98:
						l += "\b";
						break;
					case 102:
						l += "\f";
						break;
					case 110:
						l += `
`;
						break;
					case 114:
						l += "\r";
						break;
					case 116:
						l += "	";
						break;
					case 117:
						const x = E(4);
						x >= 0 ? l += String.fromCharCode(x) : f = 4;
						break;
					default: f = 5;
				}
				C = n;
				continue;
			}
			if (S >= 0 && S <= 31) if (M(S)) {
				l += e.substring(C, n), f = 2;
				break;
			} else f = 6;
			n++;
		}
		return l;
	}
	p(v, "D"), c$1(v, "scanString");
	function d() {
		if (s = "", f = 0, o = n, m = i, y = u, n >= r) return o = r, a = 17;
		let l = e.charCodeAt(n);
		if (te(l)) {
			do
				n++, s += String.fromCharCode(l), l = e.charCodeAt(n);
			while (te(l));
			return a = 15;
		}
		if (M(l)) return n++, s += String.fromCharCode(l), l === 13 && e.charCodeAt(n) === 10 && (n++, s += `
`), i++, u = n, a = 14;
		switch (l) {
			case 123: return n++, a = 1;
			case 125: return n++, a = 2;
			case 91: return n++, a = 3;
			case 93: return n++, a = 4;
			case 58: return n++, a = 6;
			case 44: return n++, a = 5;
			case 34: return n++, s = v(), a = 10;
			case 47:
				const C = n - 1;
				if (e.charCodeAt(n + 1) === 47) {
					for (n += 2; n < r && !M(e.charCodeAt(n));) n++;
					return s = e.substring(C, n), a = 12;
				}
				if (e.charCodeAt(n + 1) === 42) {
					n += 2;
					const S = r - 1;
					let x = !1;
					for (; n < S;) {
						const w = e.charCodeAt(n);
						if (w === 42 && e.charCodeAt(n + 1) === 47) {
							n += 2, x = !0;
							break;
						}
						n++, M(w) && (w === 13 && e.charCodeAt(n) === 10 && n++, i++, u = n);
					}
					return x || (n++, f = 1), s = e.substring(C, n), a = 13;
				}
				return s += String.fromCharCode(l), n++, a = 16;
			case 45: if (s += String.fromCharCode(l), n++, n === r || !I(e.charCodeAt(n))) return a = 16;
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57: return s += k(), a = 11;
			default:
				for (; n < r && g(l);) n++, l = e.charCodeAt(n);
				if (o !== n) {
					switch (s = e.substring(o, n), s) {
						case "true": return a = 8;
						case "false": return a = 9;
						case "null": return a = 7;
					}
					return a = 16;
				}
				return s += String.fromCharCode(l), n++, a = 16;
		}
	}
	p(d, "c"), c$1(d, "scanNext");
	function g(l) {
		if (te(l) || M(l)) return !1;
		switch (l) {
			case 125:
			case 93:
			case 123:
			case 91:
			case 34:
			case 58:
			case 44:
			case 47: return !1;
		}
		return !0;
	}
	p(g, "p"), c$1(g, "isUnknownContentCharacter");
	function T() {
		let l;
		do
			l = d();
		while (l >= 12 && l <= 15);
		return l;
	}
	return p(T, "b"), c$1(T, "scanNextNonTrivia"), {
		setPosition: b,
		getPosition: c$1(() => n, "getPosition"),
		scan: t ? T : d,
		getToken: c$1(() => a, "getToken"),
		getTokenValue: c$1(() => s, "getTokenValue"),
		getTokenOffset: c$1(() => o, "getTokenOffset"),
		getTokenLength: c$1(() => n - o, "getTokenLength"),
		getTokenStartLine: c$1(() => m, "getTokenStartLine"),
		getTokenStartCharacter: c$1(() => o - y, "getTokenStartCharacter"),
		getTokenError: c$1(() => f, "getTokenError")
	};
}
p(Ie, "Ne"), c$1(Ie, "createScanner");
function te(e) {
	return e === 32 || e === 9;
}
p(te, "X"), c$1(te, "isWhiteSpace");
function M(e) {
	return e === 10 || e === 13;
}
p(M, "P"), c$1(M, "isLineBreak");
function I(e) {
	return e >= 48 && e <= 57;
}
p(I, "S"), c$1(I, "isDigit");
var Ne;
(function(e) {
	e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.space = 32] = "space", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.asterisk = 42] = "asterisk", e[e.backslash = 92] = "backslash", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.plus = 43] = "plus", e[e.slash = 47] = "slash", e[e.formFeed = 12] = "formFeed", e[e.tab = 9] = "tab";
})(Ne || (Ne = {})), new Array(20).fill(0).map((e, t) => " ".repeat(t));
var J = 200;
new Array(J).fill(0).map((e, t) => `
` + " ".repeat(t)), new Array(J).fill(0).map((e, t) => "\r" + " ".repeat(t)), new Array(J).fill(0).map((e, t) => `\r
` + " ".repeat(t)), new Array(J).fill(0).map((e, t) => `
` + "	".repeat(t)), new Array(J).fill(0).map((e, t) => "\r" + "	".repeat(t)), new Array(J).fill(0).map((e, t) => `\r
` + "	".repeat(t));
var ne;
(function(e) {
	e.DEFAULT = { allowTrailingComma: !1 };
})(ne || (ne = {}));
function We(e, t = [], r = ne.DEFAULT) {
	let n = null, s = [];
	const o = [];
	function a(i) {
		Array.isArray(s) ? s.push(i) : n !== null && (s[n] = i);
	}
	return p(a, "l"), c$1(a, "onValue"), Be(e, {
		onObjectBegin: c$1(() => {
			const i = {};
			a(i), o.push(s), s = i, n = null;
		}, "onObjectBegin"),
		onObjectProperty: c$1((i) => {
			n = i;
		}, "onObjectProperty"),
		onObjectEnd: c$1(() => {
			s = o.pop();
		}, "onObjectEnd"),
		onArrayBegin: c$1(() => {
			const i = [];
			a(i), o.push(s), s = i, n = null;
		}, "onArrayBegin"),
		onArrayEnd: c$1(() => {
			s = o.pop();
		}, "onArrayEnd"),
		onLiteralValue: a,
		onError: c$1((i, m, u) => {
			t.push({
				error: i,
				offset: m,
				length: u
			});
		}, "onError")
	}, r), s[0];
}
p(We, "Re"), c$1(We, "parse$1");
function Be(e, t, r = ne.DEFAULT) {
	const n = Ie(e, !1), s = [];
	let o = 0;
	function a(j) {
		return j ? () => o === 0 && j(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter()) : () => !0;
	}
	p(a, "l"), c$1(a, "toNoArgVisit");
	function i(j) {
		return j ? (O) => o === 0 && j(O, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter()) : () => !0;
	}
	p(i, "g"), c$1(i, "toOneArgVisit");
	function m(j) {
		return j ? (O) => o === 0 && j(O, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), () => s.slice()) : () => !0;
	}
	p(m, "m"), c$1(m, "toOneArgVisitWithPath");
	function u(j) {
		return j ? () => {
			o > 0 ? o++ : j(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), () => s.slice()) === !1 && (o = 1);
		} : () => !0;
	}
	p(u, "k"), c$1(u, "toBeginVisit");
	function y(j) {
		return j ? () => {
			o > 0 && o--, o === 0 && j(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter());
		} : () => !0;
	}
	p(y, "w"), c$1(y, "toEndVisit");
	const f = u(t.onObjectBegin), E = m(t.onObjectProperty), b = y(t.onObjectEnd), k = u(t.onArrayBegin), v = y(t.onArrayEnd), d = m(t.onLiteralValue), g = i(t.onSeparator), T = a(t.onComment), l = i(t.onError), C = r && r.disallowComments, S = r && r.allowTrailingComma;
	function x() {
		for (;;) {
			const j = n.scan();
			switch (n.getTokenError()) {
				case 4:
					w(14);
					break;
				case 5:
					w(15);
					break;
				case 3:
					w(13);
					break;
				case 1:
					C || w(11);
					break;
				case 2:
					w(12);
					break;
				case 6: w(16);
			}
			switch (j) {
				case 12:
				case 13:
					C ? w(10) : T();
					break;
				case 16:
					w(1);
					break;
				case 15:
				case 14: break;
				default: return j;
			}
		}
	}
	p(x, "v"), c$1(x, "scanNext");
	function w(j, O = [], $e = []) {
		if (l(j), O.length + $e.length > 0) {
			let q = n.getToken();
			for (; q !== 17;) {
				if (O.indexOf(q) !== -1) {
					x();
					break;
				} else if ($e.indexOf(q) !== -1) break;
				q = x();
			}
		}
	}
	p(w, "d"), c$1(w, "handleError");
	function D(j) {
		const O = n.getTokenValue();
		return j ? d(O) : (E(O), s.push(O)), x(), !0;
	}
	p(D, "L"), c$1(D, "parseString");
	function L() {
		switch (n.getToken()) {
			case 11:
				const j = n.getTokenValue();
				let O = Number(j);
				isNaN(O) && (w(2), O = 0), d(O);
				break;
			case 7:
				d(null);
				break;
			case 8:
				d(!0);
				break;
			case 9:
				d(!1);
				break;
			default: return !1;
		}
		return x(), !0;
	}
	p(L, "B"), c$1(L, "parseLiteral");
	function P() {
		return n.getToken() !== 10 ? (w(3, [], [2, 5]), !1) : (D(!1), n.getToken() === 6 ? (g(":"), x(), Z() || w(4, [], [2, 5])) : w(5, [], [2, 5]), s.pop(), !0);
	}
	p(P, "$"), c$1(P, "parseProperty");
	function W() {
		f(), x();
		let j = !1;
		for (; n.getToken() !== 2 && n.getToken() !== 17;) {
			if (n.getToken() === 5) {
				if (j || w(4, [], []), g(","), x(), n.getToken() === 2 && S) break;
			} else j && w(6, [], []);
			P() || w(4, [], [2, 5]), j = !0;
		}
		return b(), n.getToken() !== 2 ? w(7, [2], []) : x(), !0;
	}
	p(W, "N"), c$1(W, "parseObject");
	function Ae() {
		k(), x();
		let j = !0, O = !1;
		for (; n.getToken() !== 4 && n.getToken() !== 17;) {
			if (n.getToken() === 5) {
				if (O || w(4, [], []), g(","), x(), n.getToken() === 4 && S) break;
			} else O && w(6, [], []);
			j ? (s.push(0), j = !1) : s[s.length - 1]++, Z() || w(4, [], [4, 5]), O = !0;
		}
		return v(), j || s.pop(), n.getToken() !== 4 ? w(8, [4], []) : x(), !0;
	}
	p(Ae, "$e"), c$1(Ae, "parseArray");
	function Z() {
		switch (n.getToken()) {
			case 3: return Ae();
			case 1: return W();
			case 10: return D(!0);
			default: return L();
		}
	}
	return p(Z, "H"), c$1(Z, "parseValue"), x(), n.getToken() === 17 ? r.allowEmptyContent ? !0 : (w(4, [], []), !1) : Z() ? (n.getToken() !== 17 && w(9, [], []), !0) : (w(4, [], []), !1);
}
p(Be, "Pe"), c$1(Be, "visit");
var Me;
(function(e) {
	e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter";
})(Me || (Me = {}));
var Je;
(function(e) {
	e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.Unknown = 16] = "Unknown", e[e.EOF = 17] = "EOF";
})(Je || (Je = {}));
var Ht = We;
var Ve;
(function(e) {
	e[e.InvalidSymbol = 1] = "InvalidSymbol", e[e.InvalidNumberFormat = 2] = "InvalidNumberFormat", e[e.PropertyNameExpected = 3] = "PropertyNameExpected", e[e.ValueExpected = 4] = "ValueExpected", e[e.ColonExpected = 5] = "ColonExpected", e[e.CommaExpected = 6] = "CommaExpected", e[e.CloseBraceExpected = 7] = "CloseBraceExpected", e[e.CloseBracketExpected = 8] = "CloseBracketExpected", e[e.EndOfFileExpected = 9] = "EndOfFileExpected", e[e.InvalidCommentToken = 10] = "InvalidCommentToken", e[e.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 14] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 16] = "InvalidCharacter";
})(Ve || (Ve = {}));
var de = c$1((e, t) => Ht(zt(t, e)), "readJsonc");
var Qe = c$1(() => {
	const { findPnpApi: e } = $;
	return e && e(processModule.cwd());
}, "getPnpApi");
var Xt = "detectTypeScriptVersion:";
var Yt = c$1((e, t) => {
	const r = `${Xt}${e}`, n = t?.get(r);
	if (n !== void 0) return n ?? void 0;
	let s;
	const o = Qe();
	if (o) try {
		s = o.resolveRequest("typescript/package.json", e) ?? void 0;
	} catch {}
	s ??= K(path.resolve(e), path.join("node_modules", "typescript", "package.json"), t);
	let a;
	if (s) try {
		const i = de(s, t);
		typeof i?.version == "string" && (a = i.version);
	} catch {}
	return t?.set(r, a ?? null), a;
}, "detectTypeScriptVersion");
var N = "package.json";
var re = "tsconfig.json";
var Zt = c$1((e, t, r) => {
	const n = $.createRequire(path.join(r, "tsconfig.json"));
	if (e !== t) try {
		return n.resolve(e);
	} catch {}
	try {
		return n.resolve(t);
	} catch {}
	try {
		return n.resolve(`${t}/${N}`);
	} catch {}
}, "resolvePackageEntryWithNode");
var me = c$1((e, t, r, n) => {
	const s = `resolveFromPackageJsonPath:${e}:${t}:${r}`;
	if (n?.has(s)) return n.get(s) || !1;
	const o = de(e, n);
	if (!o) return;
	let a = t || re;
	if (!r && o.exports) try {
		const [i] = Gt(o.exports, t, ["require", "types"]);
		a = i;
	} catch {
		return n?.set(s, ""), !1;
	}
	else !t && o.tsconfig && (a = o.tsconfig);
	return a = path.join(e, "..", a), n?.set(s, a), a;
}, "resolveFromPackageJsonPath");
var qt = c$1((e, t, r) => {
	const n = `resolveExtendsPath:${e}:${t}`;
	if (r?.has(n)) return r.get(n) || void 0;
	const s = en(e, t, r);
	return r?.set(n, s || ""), s;
}, "resolveExtendsPath");
var en = c$1((e, t, r) => {
	let n = e;
	if (e === ".." && (n = path.join(n, re)), e[0] === "." && (n = path.resolve(t, n)), path.isAbsolute(n)) {
		const d = _(r, n);
		if (d) {
			if (d.isFile()) return n;
		} else if (!n.endsWith(".json")) {
			const g = `${n}.json`;
			if (_(r, g)) return g;
		}
		return;
	}
	const [s, ...o] = e.split("/"), a = s[0] === "@" ? `${s}/${o.shift()}` : s, i = o.join("/"), m = Qe();
	if (m) {
		const { resolveRequest: d } = m;
		try {
			if (a === e) {
				const g = d(path.join(a, N), t);
				if (g) {
					const T = me(g, i, !1, r);
					if (T && _(r, T)) return T;
				}
			} else {
				let g;
				try {
					g = d(e, t, { extensions: [".json"] });
				} catch {
					g = d(path.join(e, re), t);
				}
				if (g) return g;
			}
		} catch {}
	}
	const u = Zt(e, a, t);
	let y;
	if (u) {
		if (path.basename(u) !== N && u.endsWith(".json")) return u;
		y = path.basename(u) === N ? u : K(path.dirname(u), N, r);
	}
	const f = y && path.dirname(y) || K(path.resolve(t), path.join("node_modules", a), r);
	if (!f || !_(r, f)?.isDirectory()) return;
	const E = path.join(f, N);
	if (_(r, E)) {
		const d = me(E, i, !1, r);
		if (d === !1) return;
		if (d && _(r, d)?.isFile()) return d;
	}
	const b = path.join(f, i), k = b.endsWith(".json");
	if (!k) {
		const d = `${b}.json`;
		if (_(r, d)) return d;
	}
	const v = _(r, b);
	if (v) {
		if (v.isDirectory()) {
			const d = path.join(b, N);
			if (_(r, d)) {
				const T = me(d, "", !0, r);
				if (T && _(r, T)) return T;
			}
			const g = path.join(b, re);
			if (_(r, g)) return g;
		} else if (k) return b;
	}
}, "resolveExtendsPathUncached");
var he = Symbol("implicitBaseUrl");
var U = "${configDir}";
var ge = /^\.{1,2}(\/.*)?$/;
var se = c$1((e) => {
	const t = A(e);
	return ge.test(t) ? t : `./${t}`;
}, "normalizeRelativePath");
var tn = c$1((e) => {
	const t = { ...e };
	if (t.strict) for (const n of [
		"noImplicitAny",
		"noImplicitThis",
		"strictNullChecks",
		"strictFunctionTypes",
		"strictBindCallApply",
		"strictPropertyInitialization",
		"strictBuiltinIteratorReturn",
		"alwaysStrict",
		"useUnknownInCatchVariables"
	]) t[n] === void 0 && (t[n] = !0);
	if (t.composite && (t.declaration ??= !0, t.incremental ??= !0), t.target) {
		let r = t.target.toLowerCase();
		r === "es2015" && (r = "es6"), t.target = r, r === "esnext" && (t.module ??= "es6", t.useDefineForClassFields ??= !0), (r === "es6" || r === "es2016" || r === "es2017" || r === "es2018" || r === "es2019" || r === "es2020" || r === "es2021" || r === "es2022" || r === "es2023" || r === "es2024" || r === "es2025") && (t.module ??= "es6"), (r === "es2022" || r === "es2023" || r === "es2024" || r === "es2025") && (t.useDefineForClassFields ??= !0);
	}
	if (t.module) {
		let r = t.module.toLowerCase();
		if (r === "es2015" && (r = "es6"), t.module = r, (r === "es6" || r === "es2020" || r === "es2022" || r === "esnext" || r === "none" || r === "system" || r === "umd" || r === "amd") && (t.moduleResolution ??= "classic"), r === "system" && (t.allowSyntheticDefaultImports ??= !0), (r === "node16" || r === "node18" || r === "node20" || r === "nodenext" || r === "preserve") && (t.esModuleInterop ??= !0, t.allowSyntheticDefaultImports ??= !0), (r === "node16" || r === "node18" || r === "node20" || r === "nodenext") && (t.moduleDetection ??= "force"), (r === "node16" || r === "node18") && (t.target ??= "es2022", t.moduleResolution ??= "node16"), r === "node20" && (t.target ??= "es2023", t.moduleResolution ??= "node16", t.resolveJsonModule ??= !0), r === "nodenext" && (t.target ??= "esnext", t.moduleResolution ??= "nodenext", t.resolveJsonModule ??= !0), r === "node16" || r === "node18" || r === "node20" || r === "nodenext") {
			const n = t.target;
			(n === "es3" || n === "es2022" || n === "es2023" || n === "es2024" || n === "esnext") && (t.useDefineForClassFields ??= !0);
		}
		r === "preserve" && (t.moduleResolution ??= "bundler");
	}
	if (t.moduleResolution) {
		let r = t.moduleResolution.toLowerCase();
		r === "node" && (r = "node10"), t.moduleResolution = r, (r === "node16" || r === "nodenext" || r === "bundler") && (t.resolvePackageJsonExports ??= !0, t.resolvePackageJsonImports ??= !0), r === "bundler" && (t.allowSyntheticDefaultImports ??= !0, t.resolveJsonModule ??= !0);
	}
	for (const r of [
		"jsx",
		"moduleDetection",
		"importsNotUsedAsValues",
		"newLine"
	]) t[r] && (t[r] = t[r].toLowerCase());
	return t.esModuleInterop && (t.allowSyntheticDefaultImports ??= !0), t.verbatimModuleSyntax && (t.isolatedModules ??= !0, t.preserveConstEnums ??= !0), t.isolatedModules && (t.preserveConstEnums ??= !0), t.rewriteRelativeImportExtensions && (t.allowImportingTsExtensions ??= !0), t.lib && (t.lib = t.lib.map((r) => r.toLowerCase())), t.checkJs && (t.allowJs ??= !0), t;
}, "normalizeCompilerOptions");
var nn = c$1((e, t) => {
	!t.has("target") && !rn(e.module) && (e.target = "es3");
}, "applyV4Defaults");
var rn = c$1((e) => e === "node16" || e === "node18" || e === "node20" || e === "nodenext", "moduleDictatesTarget$1");
var sn = c$1((e, t) => {
	!t.has("target") && !on(e.module) && (e.target = "es5");
}, "applyV5Defaults");
var on = c$1((e) => e === "node16" || e === "node18" || e === "node20" || e === "nodenext", "moduleDictatesTarget");
var an = c$1((e, t) => {
	t.has("strict") || (e.strict = !0), t.has("target") || (e.target = "es2025"), t.has("module") || (e.module = "es2022"), t.has("moduleResolution") || (e.moduleResolution = "bundler"), t.has("rootDir") || (e.rootDir = "."), t.has("types") || (e.types = []), t.has("noUncheckedSideEffectImports") || (e.noUncheckedSideEffectImports = !0), t.has("libReplacement") || (e.libReplacement = !1);
}, "applyV6Defaults");
var cn = [
	[4, nn],
	[5, sn],
	[6, an]
];
var ln = c$1((e) => {
	const t = /^v?(\d+)/.exec(e);
	return t ? Number(t[1]) : void 0;
}, "parseMajor");
var pn = c$1((e, t) => {
	const r = ln(t);
	if (r === void 0) return;
	const n = new Set(Object.keys(e));
	for (const [s, o] of cn) s <= r && o(e, n);
}, "applyVersionDefaults");
var ye = c$1((e, t) => se(path.relative(e, t)), "pathRelative");
var Ge = [
	"files",
	"include",
	"exclude"
];
var Ke = c$1((e, t, r) => {
	const n = path.join(t, r);
	return A(path.relative(e, n)) || "./";
}, "resolveAndRelativize");
var un = c$1((e, t, r) => {
	const n = path.relative(e, t);
	if (!n) return r;
	return A(`${n}/${r.startsWith("./") ? r.slice(2) : r}`);
}, "prefixPattern");
var ze = ["outDir", "declarationDir"];
var oe = c$1((e, t) => {
	if (e.startsWith(U)) return A(path.join(t, e.slice(12)));
}, "interpolateConfigDir");
var fn = [
	"outDir",
	"declarationDir",
	"outFile",
	"rootDir",
	"baseUrl",
	"tsBuildInfoFile"
];
var dn = c$1((e, t = {}) => {
	if (e.length === 0) throw new Error("Chain must not be empty");
	const { typescriptVersion: r } = t, n = new Map(e.map((f) => [f.path, f])), s = /* @__PURE__ */ new Map(), o = c$1((f) => {
		const E = s.get(f);
		if (E) return E;
		const b = n.get(f);
		if (!b) throw new Error(`Config not found in chain: ${f}`);
		const k = b.config, v = path.dirname(f);
		let d = {
			...k,
			...k.compilerOptions && { compilerOptions: { ...k.compilerOptions } },
			...k.watchOptions && { watchOptions: { ...k.watchOptions } }
		};
		if (delete d.extends, d.compilerOptions?.paths && !d.compilerOptions.baseUrl && (d.compilerOptions[he] = v), k.extends) {
			const g = Array.isArray(k.extends) ? k.extends : [k.extends];
			for (const T of g.toReversed()) {
				const l = o(T), C = path.dirname(T), { references: S, ...x } = l;
				if (x.compilerOptions) {
					const D = { ...x.compilerOptions };
					for (const L of [
						"baseUrl",
						"outDir",
						"declarationDir",
						"rootDir"
					]) {
						const P = D[L];
						P && !P.startsWith(U) && (D[L] = Ke(v, C, P));
					}
					for (const L of ["rootDirs", "typeRoots"]) {
						const P = D[L];
						P && (D[L] = P.map((W) => W.startsWith(U) ? W : Ke(v, C, W)));
					}
					x.compilerOptions = D;
				}
				for (const D of Ge) {
					const L = x[D];
					L && (x[D] = L.map((P) => P.startsWith(U) ? P : un(v, C, P)));
				}
				const w = {
					...x,
					...d,
					compilerOptions: {
						...x.compilerOptions,
						...d.compilerOptions
					}
				};
				x.watchOptions && (w.watchOptions = {
					...x.watchOptions,
					...d.watchOptions
				}), d = w;
			}
		}
		if (d.compilerOptions) {
			const { compilerOptions: g } = d;
			for (const l of ["baseUrl", "rootDir"]) {
				const C = g[l];
				if (C && !C.startsWith(U)) g[l] = ye(v, path.resolve(v, C));
			}
			for (const l of ze) {
				let C = g[l];
				C && (Array.isArray(d.exclude) || (d.exclude = ze.map((S) => g[S]).filter(Boolean)), C.startsWith(U) || (C = se(C)), g[l] = C);
			}
		} else d.compilerOptions = {};
		if (d.include && (d.include = d.include.map(A)), d.files && (d.files = d.files.map((g) => g.startsWith(U) ? g : se(g))), d.watchOptions) {
			const { watchOptions: g } = d;
			for (const T of ["excludeDirectories", "excludeFiles"]) g[T] && (g[T] = g[T].map((l) => A(path.resolve(v, l))));
			for (const T of [
				"watchFile",
				"watchDirectory",
				"fallbackPolling"
			]) if (g[T]) {
				const l = g;
				l[T] = g[T].toLowerCase();
			}
		}
		return s.set(f, d), d;
	}, "resolveEntry"), a = e[0], i = o(a.path), m = path.dirname(a.path), u = {
		...i,
		compilerOptions: i.compilerOptions ? { ...i.compilerOptions } : {}
	}, { compilerOptions: y } = u;
	if (y) {
		for (const f of fn) {
			const E = y[f];
			if (E) {
				const b = oe(E, m);
				y[f] = b ? ye(m, b) : E;
			}
		}
		for (const f of ["rootDirs", "typeRoots"]) {
			const E = y[f];
			E && (y[f] = E.map((b) => {
				const k = oe(b, m);
				return k ? ye(m, k) : se(b);
			}));
		}
		if (y.paths) {
			const f = {};
			for (const [E, b] of Object.entries(y.paths)) f[E] = b.map((k) => oe(k, m) ?? k);
			y.paths = f;
		}
		r && pn(y, r), u.compilerOptions = tn(y);
	}
	for (const f of Ge) {
		const E = u[f];
		E && (u[f] = E.map((b) => oe(b, m) ?? b));
	}
	return {
		path: a.path,
		config: u,
		sources: e.map((f) => f.path)
	};
}, "resolveExtendsChain");
var mn = c$1((e, t = {}) => {
	const { cache: r = /* @__PURE__ */ new Map() } = t, n = path.resolve(e), s = [], o = /* @__PURE__ */ new Set(), a = c$1((i, m) => {
		const u = A(i);
		if (o.has(u)) return;
		o.add(u);
		let y;
		try {
			y = de(i, r) || {};
		} catch {
			throw new Error(`Cannot resolve tsconfig at path: ${i}`);
		}
		if (typeof y != "object") throw new SyntaxError(`Failed to parse tsconfig at: ${i}`);
		const f = path.dirname(i);
		if (y.extends) {
			const E = Array.isArray(y.extends), b = (E ? y.extends : [y.extends]).map((v) => {
				const d = qt(v, f, r);
				if (!d) throw new Error(`File '${v}' not found.`);
				const g = A(d);
				if (m.has(g) || g === u) throw new Error(`Circularity detected while resolving configuration: ${g}`);
				return g;
			});
			y.extends = E ? b : b[0], s.push({
				path: u,
				config: y
			});
			const k = new Set(m);
			k.add(u);
			for (const v of [...b].reverse()) a(v, k);
		} else s.push({
			path: u,
			config: y
		});
	}, "collect");
	return a(n, /* @__PURE__ */ new Set()), s;
}, "getExtendsChain");
var ke = c$1((e, t = {}) => {
	const { cache: r = /* @__PURE__ */ new Map(), typescriptVersion: n = "auto" } = t, s = mn(e, { cache: r });
	let o;
	return n === "auto" ? o = Yt(path.dirname(s[0].path), r) : n !== !1 && (o = n), dn(s, { typescriptVersion: o });
}, "readTsconfig");
var hn = Object.defineProperty;
var ae = c$1((e, t) => hn(e, "name", {
	value: t,
	configurable: !0
}), "s"), He = ae((e) => {
	let t = "";
	for (let r = 0; r < e.length; r += 1) {
		const n = e[r], s = n.toUpperCase();
		t += n === s ? n.toLowerCase() : s;
	}
	return t;
}, "invertCase"), be = /* @__PURE__ */ new Map(), Xe = ae((e, t) => {
	const r = path.join(e, `.is-fs-case-sensitive-test-${processModule.pid}`);
	try {
		return t.writeFileSync(r, ""), !t.existsSync(He(r));
	} finally {
		try {
			t.unlinkSync(r);
		} catch {}
	}
}, "checkDirectoryCaseWithWrite"), gn = ae((e, t, r) => {
	try {
		return Xe(e, r);
	} catch (n) {
		if (t === void 0) return Xe(os.tmpdir(), r);
		throw n;
	}
}, "checkDirectoryCaseWithFallback"), yn = ae((e, t = fs, r = !0) => {
	const n = e ?? processModule.cwd();
	if (r && be.has(n)) return be.get(n);
	let s;
	const o = He(n);
	return o !== n && t.existsSync(n) ? s = !t.existsSync(o) : s = gn(n, e, t), r && be.set(n, s), s;
}, "isFsCaseSensitive"), { join: Ye } = path.posix, we = {
	ts: [
		".ts",
		".tsx",
		".d.ts"
	],
	cts: [".cts", ".d.cts"],
	mts: [".mts", ".d.mts"]
}, kn = c$1((e) => {
	const t = [...we.ts], r = [...we.cts], n = [...we.mts];
	return e?.allowJs && (t.push(".js", ".jsx"), r.push(".cjs"), n.push(".mjs")), [
		...t,
		...r,
		...n
	];
}, "getSupportedExtensions"), bn = c$1((e) => {
	const t = [];
	if (!e) return t;
	const { outDir: r, declarationDir: n } = e;
	return r && t.push(r), n && t.push(n), t;
}, "getDefaultExcludeSpec"), Ze = c$1((e) => e.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`), "escapeForRegexp"), xe = `(?!(${[
	"node_modules",
	"bower_components",
	"jspm_packages"
].join("|")})(/|$))`, xn = /(?:^|\/)[^.*?]+$/, qe = "**/*", ie = "[^/]", Ee = "[^./]", et = processModule.platform === "win32", En = c$1(({ config: e, path: t }, r) => {
	if ("extends" in e) throw new Error("tsconfig#extends must be resolved. Use getTsconfig or readTsconfig to resolve it.");
	if (!path.isAbsolute(t)) throw new Error("The tsconfig path must be absolute");
	et && (t = A(t));
	const n = path.dirname(t), { files: s, include: o, exclude: a, compilerOptions: i } = e, m = c$1((v) => path.isAbsolute(v) ? v : Ye(n, v), "resolvePattern"), u = s ? new Set(s.map(m)) : void 0, y = kn(i), f = r ? "" : "i", E = (a || bn(i)).map((v) => {
		const g = Ze(m(v)).replaceAll(String.raw`\*\*/`, "(.+/)?").replaceAll(String.raw`\*`, `${ie}*`).replaceAll(String.raw`\?`, ie);
		return new RegExp(`^${g}($|/)`, f);
	}), b = s || o ? o : [qe];
	return {
		filesSet: u,
		extensions: y,
		excludePatterns: E,
		includePatterns: b ? b.map((v) => {
			let d = m(v);
			xn.test(d) && (d = Ye(d, qe));
			const g = Ze(d).replaceAll(String.raw`/\*\*`, `(/${xe}${Ee}${ie}*)*?`).replaceAll(/(\/)?\\\*/g, (T, l) => {
				const C = String.raw`(${Ee}|(\.(?!min\.js$))?)*`;
				return l ? `/${xe}${Ee}${C}` : C;
			}).replaceAll(/(\/)?\\\?/g, (T, l) => {
				const C = ie;
				return l ? `/${xe}${C}` : C;
			});
			return new RegExp(`^${g}$`, f);
		}) : void 0
	};
}, "compilePatterns"), tt = /* @__PURE__ */ new WeakMap(), ve = c$1((e, t) => {
	if (!path.isAbsolute(t)) return !1;
	et && (t = A(t));
	let r = tt.get(e);
	r || (r = En(e, yn()), tt.set(e, r));
	const { filesSet: n, extensions: s, excludePatterns: o, includePatterns: a } = r;
	return n?.has(t) ? !0 : !s.some((i) => t.endsWith(i)) || o.some((i) => i.test(t)) ? !1 : !!(a && a.some((i) => i.test(t)));
}, "isFileIncluded"), nt = c$1((e, t, r, n) => {
	const s = path.resolve(e);
	let o = A(e);
	for (;;) {
		const a = K(o, t, r);
		if (!a) return;
		const m = ke(path.resolve(a), {
			cache: r,
			typescriptVersion: n
		});
		if (ve(m, s)) return m;
		const u = path.dirname(a), y = path.dirname(u);
		if (y === u) return;
		o = y;
	}
}, "findConfigApplicable"), vn = c$1((e = processModule.cwd(), t = {}) => {
	const { configName: r = "tsconfig.json", cache: n = /* @__PURE__ */ new Map(), includes: s = !1 } = t;
	if (!s) {
		const o = path.resolve(e);
		return path.basename(o) === r && _(n, o)?.isFile() ? A(o) : K(A(e), r, n);
	}
	return nt(e, r, n, !1)?.path;
}, "findTsconfig"), Cn = c$1((e = processModule.cwd(), t = {}) => {
	const { configName: r = "tsconfig.json", cache: n = /* @__PURE__ */ new Map(), includes: s = !1, typescriptVersion: o = "auto" } = t;
	if (!s) {
		const a = vn(e, {
			configName: r,
			cache: n
		});
		return a ? ke(a, {
			cache: n,
			typescriptVersion: o
		}) : void 0;
	}
	return nt(e, r, n, o);
}, "getTsconfig"), jn = /\*/g, rt = c$1((e, t) => {
	const r = e.match(jn);
	if (r && r.length > 1) throw new Error(t);
}, "assertStarCount"), Tn = c$1((e) => {
	if (e.includes("*")) {
		const [t, r] = e.split("*");
		return {
			prefix: t,
			suffix: r
		};
	}
	return e;
}, "parsePattern"), Sn = c$1(({ prefix: e, suffix: t }, r) => r.startsWith(e) && r.endsWith(t), "isPatternMatch"), On = c$1((e, t, r) => Object.entries(e).map(([n, s]) => (rt(n, `Pattern '${n}' can have at most one '*' character.`), {
	pattern: Tn(n),
	substitutions: s.map((o) => {
		if (rt(o, `Substitution '${o}' in pattern '${n}' can have at most one '*' character.`), !t && !ge.test(o) && !path.isAbsolute(o)) throw new Error("Non-relative paths are not allowed when 'baseUrl' is not set. Did you forget a leading './'?");
		return path.resolve(r, o);
	})
})), "parsePaths"), An = c$1((e) => {
	const { compilerOptions: t } = e.config;
	if (!t) return null;
	const { baseUrl: r, paths: n } = t;
	if (!r && !n) return null;
	const s = he in t && t[he], o = path.resolve(path.dirname(e.path), r || s || "."), a = n ? On(n, r, o) : [], i = /* @__PURE__ */ new Map(), m = [];
	for (const u of a) typeof u.pattern == "string" ? i.set(u.pattern, u.substitutions) : m.push(u);
	return {
		exactEntries: i,
		patternEntries: m,
		resolvedBaseUrl: o,
		baseUrl: r
	};
}, "compilePaths"), st = /* @__PURE__ */ new WeakMap(), ot = c$1((e, t) => {
	let r = st.get(e);
	if (r === void 0 && (r = An(e), st.set(e, r)), !r) return [];
	if (ge.test(t)) return [];
	const { exactEntries: n, patternEntries: s, resolvedBaseUrl: o, baseUrl: a } = r, i = n.get(t);
	if (i) return i.map(A);
	let m, u = -1;
	for (const f of s) Sn(f.pattern, t) && f.pattern.prefix.length > u && (u = f.pattern.prefix.length, m = f);
	if (!m) return a ? [A(path.join(o, t))] : [];
	const y = t.slice(m.pattern.prefix.length, t.length - m.pattern.suffix.length);
	return m.substitutions.map((f) => A(f.replace("*", y)));
}, "resolvePathAlias"), at = p((e) => {
	if (e) return ke(e);
	try {
		return Cn() ?? void 0;
	} catch {}
}, "loadTsconfig"), $n = `
//# sourceMappingURL=data:application/json;base64,`, it = p(() => processModule.sourceMapsEnabled ?? !0, "shouldApplySourceMap"), Ce = p(({ code: e, map: t }) => e + $n + Buffer.from(JSON.stringify(t), "utf8").toString("base64"), "inlineSourceMap"), z = Symbol.for("tsx:global-cjs-loader-count"), H = globalThis;
p(() => (H[z] ?? 0) > 0, "isGlobalCjsLoaderActive");
var _n = p(() => (H[z] = (H[z] ?? 0) + 1, () => {
	H[z] = Math.max((H[z] ?? 1) - 1, 0);
}), "activateGlobalCjsLoader"), je = p((e) => e[0] === "." && (e[1] === "/" || e[1] === "." || e[2] === "/"), "isRelativePath"), V = p((e) => je(e) || path.isAbsolute(e), "isFilePath"), ct = /\.([cm]?ts|[tj]sx)(?:$|[?#])/, ce = /\/(?:$|[?#])/, lt = `${path.sep}node_modules${path.sep}`, Te = p((e) => e?.split(path.sep).includes("node_modules") ?? !1, "isDependencyPath"), le = Number(processModule.env.TSX_DEBUG);
le && (f.enabled = !0, f.supportLevel = 3);
var pt = p((e) => (t, ...r) => {
	if (!le || t > le) return;
	const n = `${E(` tsx P${processModule.pid} `)} ${e}`, s = r.map((o) => typeof o == "string" ? o : inspect(o, { colors: !0 })).join(" ");
	writeSync(1, `${n} ${s}
`);
}, "createLog");
var Q$1 = pt(T(b(" CJS ")));
pt(L$1(" ESM "));
var R$1 = /* @__PURE__ */ new Map();
var Nn = p(async (e) => {
	if (R$1.has(e)) return R$1.get(e);
	if (!await fs.promises.access(e).then(() => !0, () => !1)) {
		R$1.set(e, void 0);
		return;
	}
	const r = await fs.promises.readFile(e, "utf8");
	try {
		const n = JSON.parse(r);
		return R$1.set(e, n), n;
	} catch {
		throw new Error(`Error parsing: ${e}`);
	}
}, "readPackageJson");
var Wn = p((e) => {
	if (R$1.has(e)) return R$1.get(e);
	if (!fs.existsSync(e)) {
		R$1.set(e, void 0);
		return;
	}
	const t = fs.readFileSync(e, "utf8");
	try {
		const r = JSON.parse(t);
		return R$1.set(e, r), r;
	} catch {
		throw new Error(`Error parsing: ${e}`);
	}
}, "readPackageJsonSync");
var Bn = p(async (e) => {
	let t = new URL("package.json", e);
	for (; !t.pathname.endsWith("/node_modules/package.json");) {
		const n = await Nn(fileURLToPath(t));
		if (n) return n;
		const s = t;
		if (t = new URL("../package.json", t), t.pathname === s.pathname) break;
	}
}, "findPackageJson");
var ut = p((e) => {
	let t = new URL("package.json", e);
	for (; !t.pathname.endsWith("/node_modules/package.json");) {
		const n = Wn(fileURLToPath(t));
		if (n) return n;
		const s = t;
		if (t = new URL("../package.json", t), t.pathname === s.pathname) break;
	}
}, "findPackageJsonSync");
p(async (e) => (await Bn(e))?.type ?? "commonjs", "getPackageType");
p((e) => ut(e)?.type ?? "commonjs", "getPackageTypeSync");
var Vn = p((e) => ut(e)?.type, "getNearestPackageTypeSync");
var ft = [".js", ".json"];
var dt = [
	".ts",
	".tsx",
	".jsx"
];
var Qn = /* @__PURE__ */ new Set([".json", ".node"]);
var Gn = [...dt, ...ft];
var Kn = [...ft, ...dt];
var Y$1 = Object.create(null);
Y$1[".js"] = [
	".ts",
	".tsx",
	".js",
	".jsx"
], Y$1[".jsx"] = [
	".tsx",
	".ts",
	".jsx",
	".js"
], Y$1[".cjs"] = [".cts"], Y$1[".mjs"] = [".mts"];
var zn = /* @__PURE__ */ new Set([
	".ts",
	".tsx",
	".mts",
	".cts"
]);
var mt = p((e, t = !1) => {
	const r = e.indexOf("?"), n = r === -1 ? e : e.slice(0, r), s = r === -1 ? "" : e.slice(r);
	if (!t && !V(n) && !n.startsWith("file://")) return;
	const o = path.extname(n);
	if (zn.has(o)) return;
	const a = Y$1[o];
	if (a) {
		const m = n.slice(0, -o.length);
		return a.map((u) => m + u + s);
	}
	return Qn.has(o) ? void 0 : (!(e.startsWith("file://") || V(n)) || n.includes(lt) || n.includes("/node_modules/") ? Kn : Gn).map((m) => n + m + s);
}, "getExtensionResolution");
var Se = p((e) => Array.from(e).length > 0 ? `?${e.toString()}` : "", "urlSearchParamsStringify");
var Hn = [
	".cts",
	".mts",
	".ts",
	".tsx",
	".jsx"
];
var Xn = [
	".js",
	".cjs",
	".mjs"
];
var ht = [
	".ts",
	".tsx",
	".jsx"
];
var gt = "module.exports";
var Yn = "Top-level await is currently not supported with the \"cjs\" output format";
var yt = p((e) => {
	const t = path.extname(e);
	return t === ".mjs" || t === ".mts" || (t === ".js" || t === ".ts") && Vn(pathToFileURL(e).toString()) !== "commonjs";
}, "isRequireEsmCandidate");
var Oe = p((e, t, r, n) => {
	const s = Object.getOwnPropertyDescriptor(e, t);
	s?.set ? e[t] = r : (!s || s.configurable) && Object.defineProperty(e, t, {
		value: r,
		enumerable: s?.enumerable || n?.enumerable,
		writable: n?.writable ?? (s ? s.writable : !0),
		configurable: n?.configurable ?? (s ? s.configurable : !0)
	});
}, "safeSet");
var Zn = p((e, t, r, n) => {
	const s = t[".js"], o = processModule.features.require_module ?? c$2(R$3), a = p((i, m) => {
		if (e.enabled === !1) return s(i, m);
		const [u, y] = m.split("?");
		if ((new URLSearchParams(y).get("namespace") ?? void 0) !== n) return s(i, m);
		Q$1(2, "load", { filePath: m }), i.id?.startsWith("data:text/javascript,") && (i.path = path.dirname(u)), s$1?.send && s$1.send({
			type: "dependency",
			path: u
		});
		const E = Hn.some((l) => u.endsWith(l)), b = Xn.some((l) => u.endsWith(l));
		if (!E && !b) return s(i, u);
		let k = fs.readFileSync(u, "utf8");
		const v = b && !u.endsWith(".cjs") && !u.endsWith(".cts") && cn$1(k), d = (E || v) && r && ve(r, u) ? r.config : void 0;
		if (u.endsWith(".cjs")) {
			const l = ce$1(m, k);
			l && (k = it() ? Ce(l) : l.code);
		} else if (E || v) try {
			const l = Mr(k, m, { tsconfigRaw: d });
			k = it() ? Ce(l) : l.code;
		} catch (l) {
			throw yt(u) && l instanceof Error && l.name === "TransformError" && l.message.includes(Yn) && Object.assign(l, { code: o ? "ERR_REQUIRE_ASYNC_MODULE" : "ERR_REQUIRE_ESM" }), l;
		}
		Q$1(1, "loaded", { filePath: u }), i._compile(k, u), y && $._cache[u] === i && ($._cache[m] = i, delete $._cache[u]);
		const { exports: g } = i;
		(o && g && (typeof g == "object" || typeof g == "function") ? Object.getOwnPropertyDescriptor(g, gt) : void 0)?.get && yt(u) && (i.exports = g[gt]);
	}, "transformer");
	Oe(t, ".js", a);
	for (const i of ht) Oe(t, i, a, {
		enumerable: !n,
		writable: !0,
		configurable: !0
	});
	return Oe(t, ".mjs", a, {
		writable: !0,
		configurable: !0
	}), () => {
		t[".js"] === a && (t[".js"] = s);
		for (const i of [...ht, ".mjs"]) t[i] === a && delete t[i];
	};
}, "createExtensions");
var qn = p((e) => (t) => {
	if ((t === "." || t === ".." || t.endsWith("/..")) && (t += "/"), ce.test(t)) {
		let r = path.join(t, "index");
		t.startsWith("./") && (r = `./${r}`);
		try {
			return e(r);
		} catch {}
	}
	try {
		return e(t);
	} catch (r) {
		const n = r;
		if (n.code === "MODULE_NOT_FOUND") try {
			return e(`${t}${path.sep}index`);
		} catch {}
		throw n;
	}
}, "createImplicitResolver");
var er = p((e, t) => {
	let r;
	return path.isAbsolute(e) ? r = e : je(e) && t && (r = path.resolve(t, e)), r !== void 0 && !existsSync(r);
}, "candidateDoesntExist");
var pe = p((e, t, r, n) => {
	if (Q$1(3, "resolveTsFilename", {
		request: t,
		isDirectory: ce.test(t)
	}), ce.test(t)) return;
	const s = mt(t, n);
	if (s) {
		for (const o of s) if (!er(o, r)) try {
			return e(o);
		} catch (a) {
			const { code: i } = a;
			if (i !== "MODULE_NOT_FOUND" && i !== "ERR_PACKAGE_PATH_NOT_EXPORTED") throw a;
		}
	}
}, "resolveTsFilename");
var tr = p((e, t, r, n) => (s) => {
	if (Q$1(3, "resolveTsFilename", {
		request: s,
		resolveTsExtensions: r,
		isFilePath: V(s)
	}), r && V(s)) {
		const o = pe(e, s, t, n);
		if (o) return o;
	}
	try {
		return e(s);
	} catch (o) {
		const a = o;
		if (r && a.code === "MODULE_NOT_FOUND") {
			if (a.path) {
				const m = a.message.match(/^Cannot find module '([^']+)'$/);
				if (m) {
					const y = m[1], f = pe(e, y, t, n);
					if (f) return f;
				}
				const u = a.message.match(/^Cannot find module '([^']+)'. Please verify that the package.json has a valid "main" entry$/);
				if (u) {
					const y = u[1], f = pe(e, y, t, n);
					if (f) return f;
				}
			}
			const i = pe(e, s, t, n);
			if (i) return i;
		}
		throw a;
	}
}, "createTsExtensionResolver");
var kt = "at cjsPreparseModuleExports (node:internal";
var nr = p((e) => {
	const t = e.stack.split(`
`).slice(1);
	return t[1].includes(kt) || t[2].includes(kt);
}, "isFromCjsLexer");
var rr = p((e, t) => {
	const r = e.split("?"), n = new URLSearchParams(r[1]);
	if (t?.filename) {
		const s = De(t.filename);
		let o;
		if (s) {
			const m = s.split("?"), u = m[0];
			o = m[1];
			const f = new URLSearchParams(o).get("namespace");
			t.filename = u, t.path = path.dirname(u), t.paths = $._nodeModulePaths(t.path), f || ($._cache[u] = t);
		}
		o || (o = t.filename.split("?")[1]);
		const i = new URLSearchParams(o).get("namespace");
		i && n.append("namespace", i);
	}
	return [
		r[0],
		n,
		(s, o) => (path.isAbsolute(s) && !s.endsWith(".json") && !s.endsWith(".node") && !(o === 0 && nr(/* @__PURE__ */ new Error())) && (s += Se(n)), s)
	];
}, "preserveQuery");
var sr = p((e, t, r, n) => {
	if (e.startsWith("file://") && (e = fileURLToPath(e)), n && !V(e) && !Te(t?.filename)) {
		const s = ot(n, e);
		for (const o of s) try {
			return r(o);
		} catch {}
	}
	return r(e);
}, "resolveTsPaths");
var or = p((e, t, r, n) => (s, o, ...a) => {
	if (e.enabled === !1) return t(s, o, ...a);
	s = Le(s);
	const [i, m, u] = rr(s, o);
	if ((m.get("namespace") ?? void 0) !== n) return t(s, o, ...a);
	Q$1(2, "resolve", {
		request: s,
		parent: o?.filename ?? o,
		restOfArgs: a
	});
	let y = p((v) => t(v, o, ...a), "nextResolveSimple");
	const f = Te(o?.filename), E = !!(n || o?.filename && ct.test(o.filename)), b = !!(E || r?.config.compilerOptions?.allowJs && !f);
	y = tr(y, o?.path ?? void 0, b, E), y = qn(y);
	const k = u(sr(i, o, y, r), a.length);
	return Q$1(1, "resolved", {
		request: s,
		parent: o?.filename ?? o,
		resolved: k
	}), k;
}, "createResolveFilename");
var bt = p((e, t) => {
	if (!t) throw new Error("The current file path (__filename or import.meta.url) must be provided in the second argument of tsx.require()");
	return e.startsWith(".") ? ((typeof t == "string" && t.startsWith("file://") || t instanceof URL) && (t = fileURLToPath(t)), path.resolve(path.dirname(t), e)) : e;
}, "resolveContext");
var ar = p((e) => {
	const { sourceMapsEnabled: t } = processModule, r = { enabled: !0 }, n = at(processModule.env.TSX_TSCONFIG_PATH);
	processModule.setSourceMapsEnabled(!0);
	const s = $._resolveFilename, o = or(r, s, n, e?.namespace);
	$._resolveFilename = o;
	const a = Zn(r, $._extensions, n, e?.namespace), i = e?.namespace ? void 0 : _n(), m = p(() => {
		t === !1 && processModule.setSourceMapsEnabled(!1), r.enabled = !1, $._resolveFilename === o && ($._resolveFilename = s), a(), i?.();
	}, "unregister");
	if (e?.namespace) {
		m.require = p((f, E) => {
			const [k, v] = bt(f, E).split("?"), d = new URLSearchParams(v);
			return e.namespace && !k.startsWith("node:") && d.set("namespace", e.namespace), m$2(k + Se(d));
		}, "scopedRequire");
		m.resolve = p((f, E, b) => {
			const [v, d] = bt(f, E).split("?"), g = new URLSearchParams(d);
			return e.namespace && !v.startsWith("node:") && g.set("namespace", e.namespace), o(v + Se(g), module, !1, b);
		}, "scopedResolve"), m.unregister = m;
	}
	return m;
}, "register");
//#endregion
//#region node_modules/tsx/dist/require-CywAB2e6.mjs
var m = Object.defineProperty;
var a$1 = (r, t) => m(r, "name", {
	value: t,
	configurable: !0
});
var e;
var s = a$1((r, t) => (e || (e = ar({ namespace: Date.now().toString() })), e.require(r, t)), "tsxRequire");
var i = a$1((r, t, c) => (e || (e = ar({ namespace: Date.now().toString() })), e.resolve(r, t, c)), "resolve");
i.paths = m$2.resolve.paths, s.resolve = i, s.main = m$2.main, s.extensions = m$2.extensions, s.cache = m$2.cache;
//#endregion
//#region node_modules/tsx/dist/cjs/api/index.mjs
var api_exports = /* @__PURE__ */ __exportAll({
	register: () => ar,
	require: () => s
});
//#endregion
//#region node_modules/tsx/dist/lexer-DQCqS3nf.mjs
var lexer_DQCqS3nf_exports = /* @__PURE__ */ __exportAll({
	ImportType: () => L,
	init: () => G,
	parse: () => F
});
var Y = Object.defineProperty;
var k = (A, E) => Y(A, "name", {
	value: E,
	configurable: !0
});
var L;
(function(A) {
	A[A.Static = 1] = "Static", A[A.Dynamic = 2] = "Dynamic", A[A.ImportMeta = 3] = "ImportMeta", A[A.StaticSourcePhase = 4] = "StaticSourcePhase", A[A.DynamicSourcePhase = 5] = "DynamicSourcePhase";
})(L || (L = {}));
var R = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
function F(A, E = "@") {
	if (!Q) return G.then(() => F(A));
	const g = A.length + 1, B = (Q.__heap_base.value || Q.__heap_base) + 4 * g - Q.memory.buffer.byteLength;
	B > 0 && Q.memory.grow(Math.ceil(B / 65536));
	const s = Q.sa(g - 1);
	if ((R ? c : r)(A, new Uint16Array(Q.memory.buffer, s, g)), !Q.parse()) throw Object.assign(/* @__PURE__ */ new Error(`Parse error ${E}:${A.slice(0, Q.e()).split(`
`).length}:${Q.e() - A.lastIndexOf(`
`, Q.e() - 1)}`), { idx: Q.e() });
	const U = [], t = [];
	for (; Q.ri();) {
		const C = Q.is(), I = Q.ie(), D = Q.it(), i = Q.ai(), w = Q.id(), J = Q.ss(), K = Q.se();
		let o;
		Q.ip() && (o = N(A.slice(w === -1 ? C - 1 : C, w === -1 ? I + 1 : I))), U.push({
			n: o,
			t: D,
			s: C,
			e: I,
			ss: J,
			se: K,
			d: w,
			a: i
		});
	}
	for (; Q.re();) {
		const C = Q.es(), I = Q.ee(), D = Q.els(), i = Q.ele(), w = A.slice(C, I), J = w[0], K = D < 0 ? void 0 : A.slice(D, i), o = K ? K[0] : "";
		t.push({
			s: C,
			e: I,
			ls: D,
			le: i,
			n: J === "\"" || J === "'" ? N(w) : w,
			ln: o === "\"" || o === "'" ? N(K) : K
		});
	}
	function N(C) {
		try {
			return (0, eval)(C);
		} catch {}
	}
	return k(N, "k"), [
		U,
		t,
		!!Q.f(),
		!!Q.ms()
	];
}
k(F, "parse");
function r(A, E) {
	const g = A.length;
	let B = 0;
	for (; B < g;) {
		const s = A.charCodeAt(B);
		E[B++] = (255 & s) << 8 | s >>> 8;
	}
}
k(r, "Q");
function c(A, E) {
	const g = A.length;
	let B = 0;
	for (; B < g;) E[B] = A.charCodeAt(B++);
}
k(c, "B");
var Q;
var G = WebAssembly.compile((a = "AGFzbQEAAAABKwhgAX8Bf2AEf39/fwBgAAF/YAAAYAF/AGADf39/AX9gAn9/AX9gA39/fwADMTAAAQECAgICAgICAgICAgICAgICAgIAAwMDBAQAAAUAAAAAAAMDAwAGAAAABwAGAgUEBQFwAQEBBQMBAAEGDwJ/AUHA8gALfwBBwPIACwd6FQZtZW1vcnkCAAJzYQAAAWUAAwJpcwAEAmllAAUCc3MABgJzZQAHAml0AAgCYWkACQJpZAAKAmlwAAsCZXMADAJlZQANA2VscwAOA2VsZQAPAnJpABACcmUAEQFmABICbXMAEwVwYXJzZQAUC19faGVhcF9iYXNlAwEKm0EwaAEBf0EAIAA2AoAKQQAoAtwJIgEgAEEBdGoiAEEAOwEAQQAgAEECaiIANgKECkEAIAA2AogKQQBBADYC4AlBAEEANgLwCUEAQQA2AugJQQBBADYC5AlBAEEANgL4CUEAQQA2AuwJIAEL0wEBA39BACgC8AkhBEEAQQAoAogKIgU2AvAJQQAgBDYC9AlBACAFQSRqNgKICiAEQSBqQeAJIAQbIAU2AgBBACgC1AkhBEEAKALQCSEGIAUgATYCACAFIAA2AgggBSACIAJBAmpBACAGIANGIgAbIAQgA0YiBBs2AgwgBSADNgIUIAVBADYCECAFIAI2AgQgBUEANgIgIAVBA0EBQQIgABsgBBs2AhwgBUEAKALQCSADRiICOgAYAkACQCACDQBBACgC1AkgA0cNAQtBAEEBOgCMCgsLXgEBf0EAKAL4CSIEQRBqQeQJIAQbQQAoAogKIgQ2AgBBACAENgL4CUEAIARBFGo2AogKQQBBAToAjAogBEEANgIQIAQgAzYCDCAEIAI2AgggBCABNgIEIAQgADYCAAsIAEEAKAKQCgsVAEEAKALoCSgCAEEAKALcCWtBAXULHgEBf0EAKALoCSgCBCIAQQAoAtwJa0EBdUF/IAAbCxUAQQAoAugJKAIIQQAoAtwJa0EBdQseAQF/QQAoAugJKAIMIgBBACgC3AlrQQF1QX8gABsLCwBBACgC6AkoAhwLHgEBf0EAKALoCSgCECIAQQAoAtwJa0EBdUF/IAAbCzsBAX8CQEEAKALoCSgCFCIAQQAoAtAJRw0AQX8PCwJAIABBACgC1AlHDQBBfg8LIABBACgC3AlrQQF1CwsAQQAoAugJLQAYCxUAQQAoAuwJKAIAQQAoAtwJa0EBdQsVAEEAKALsCSgCBEEAKALcCWtBAXULHgEBf0EAKALsCSgCCCIAQQAoAtwJa0EBdUF/IAAbCx4BAX9BACgC7AkoAgwiAEEAKALcCWtBAXVBfyAAGwslAQF/QQBBACgC6AkiAEEgakHgCSAAGygCACIANgLoCSAAQQBHCyUBAX9BAEEAKALsCSIAQRBqQeQJIAAbKAIAIgA2AuwJIABBAEcLCABBAC0AlAoLCABBAC0AjAoL3Q0BBX8jAEGA0ABrIgAkAEEAQQE6AJQKQQBBACgC2Ak2ApwKQQBBACgC3AlBfmoiATYCsApBACABQQAoAoAKQQF0aiICNgK0CkEAQQA6AIwKQQBBADsBlgpBAEEAOwGYCkEAQQA6AKAKQQBBADYCkApBAEEAOgD8CUEAIABBgBBqNgKkCkEAIAA2AqgKQQBBADoArAoCQAJAAkACQANAQQAgAUECaiIDNgKwCiABIAJPDQECQCADLwEAIgJBd2pBBUkNAAJAAkACQAJAAkAgAkGbf2oOBQEICAgCAAsgAkEgRg0EIAJBL0YNAyACQTtGDQIMBwtBAC8BmAoNASADEBVFDQEgAUEEakGCCEEKEC8NARAWQQAtAJQKDQFBAEEAKAKwCiIBNgKcCgwHCyADEBVFDQAgAUEEakGMCEEKEC8NABAXC0EAQQAoArAKNgKcCgwBCwJAIAEvAQQiA0EqRg0AIANBL0cNBBAYDAELQQEQGQtBACgCtAohAkEAKAKwCiEBDAALC0EAIQIgAyEBQQAtAPwJDQIMAQtBACABNgKwCkEAQQA6AJQKCwNAQQAgAUECaiIDNgKwCgJAAkACQAJAAkACQAJAIAFBACgCtApPDQAgAy8BACICQXdqQQVJDQYCQAJAAkACQAJAAkACQAJAAkACQCACQWBqDgoQDwYPDw8PBQECAAsCQAJAAkACQCACQaB/ag4KCxISAxIBEhISAgALIAJBhX9qDgMFEQYJC0EALwGYCg0QIAMQFUUNECABQQRqQYIIQQoQLw0QEBYMEAsgAxAVRQ0PIAFBBGpBjAhBChAvDQ8QFwwPCyADEBVFDQ4gASkABELsgISDsI7AOVINDiABLwEMIgNBd2oiAUEXSw0MQQEgAXRBn4CABHFFDQwMDQtBAEEALwGYCiIBQQFqOwGYCkEAKAKkCiABQQN0aiIBQQE2AgAgAUEAKAKcCjYCBAwNC0EALwGYCiIDRQ0JQQAgA0F/aiIDOwGYCkEALwGWCiICRQ0MQQAoAqQKIANB//8DcUEDdGooAgBBBUcNDAJAIAJBAnRBACgCqApqQXxqKAIAIgMoAgQNACADQQAoApwKQQJqNgIEC0EAIAJBf2o7AZYKIAMgAUEEajYCDAwMCwJAQQAoApwKIgEvAQBBKUcNAEEAKALwCSIDRQ0AIAMoAgQgAUcNAEEAQQAoAvQJIgM2AvAJAkAgA0UNACADQQA2AiAMAQtBAEEANgLgCQtBAEEALwGYCiIDQQFqOwGYCkEAKAKkCiADQQN0aiIDQQZBAkEALQCsChs2AgAgAyABNgIEQQBBADoArAoMCwtBAC8BmAoiAUUNB0EAIAFBf2oiATsBmApBACgCpAogAUH//wNxQQN0aigCAEEERg0EDAoLQScQGgwJC0EiEBoMCAsgAkEvRw0HAkACQCABLwEEIgFBKkYNACABQS9HDQEQGAwKC0EBEBkMCQsCQAJAAkACQEEAKAKcCiIBLwEAIgMQG0UNAAJAAkAgA0FVag4EAAkBAwkLIAFBfmovAQBBK0YNAwwICyABQX5qLwEAQS1GDQIMBwsgA0EpRw0BQQAoAqQKQQAvAZgKIgJBA3RqKAIEEBxFDQIMBgsgAUF+ai8BAEFQakH//wNxQQpPDQULQQAvAZgKIQILAkACQCACQf//A3EiAkUNACADQeYARw0AQQAoAqQKIAJBf2pBA3RqIgQoAgBBAUcNACABQX5qLwEAQe8ARw0BIAQoAgRBlghBAxAdRQ0BDAULIANB/QBHDQBBACgCpAogAkEDdGoiAigCBBAeDQQgAigCAEEGRg0ECyABEB8NAyADRQ0DIANBL0ZBAC0AoApBAEdxDQMCQEEAKAL4CSICRQ0AIAEgAigCAEkNACABIAIoAgRNDQQLIAFBfmohAUEAKALcCSECAkADQCABQQJqIgQgAk0NAUEAIAE2ApwKIAEvAQAhAyABQX5qIgQhASADECBFDQALIARBAmohBAsCQCADQf//A3EQIUUNACAEQX5qIQECQANAIAFBAmoiAyACTQ0BQQAgATYCnAogAS8BACEDIAFBfmoiBCEBIAMQIQ0ACyAEQQJqIQMLIAMQIg0EC0EAQQE6AKAKDAcLQQAoAqQKQQAvAZgKIgFBA3QiA2pBACgCnAo2AgRBACABQQFqOwGYCkEAKAKkCiADakEDNgIACxAjDAULQQAtAPwJQQAvAZYKQQAvAZgKcnJFIQIMBwsQJEEAQQA6AKAKDAMLECVBACECDAULIANBoAFHDQELQQBBAToArAoLQQBBACgCsAo2ApwKC0EAKAKwCiEBDAALCyAAQYDQAGokACACCxoAAkBBACgC3AkgAEcNAEEBDwsgAEF+ahAmC/4KAQZ/QQBBACgCsAoiAEEMaiIBNgKwCkEAKAL4CSECQQEQKSEDAkACQAJAAkACQAJAAkACQAJAQQAoArAKIgQgAUcNACADEChFDQELAkACQAJAAkACQAJAAkAgA0EqRg0AIANB+wBHDQFBACAEQQJqNgKwCkEBECkhA0EAKAKwCiEEA0ACQAJAIANB//8DcSIDQSJGDQAgA0EnRg0AIAMQLBpBACgCsAohAwwBCyADEBpBAEEAKAKwCkECaiIDNgKwCgtBARApGgJAIAQgAxAtIgNBLEcNAEEAQQAoArAKQQJqNgKwCkEBECkhAwsgA0H9AEYNA0EAKAKwCiIFIARGDQ8gBSEEIAVBACgCtApNDQAMDwsLQQAgBEECajYCsApBARApGkEAKAKwCiIDIAMQLRoMAgtBAEEAOgCUCgJAAkACQAJAAkACQCADQZ9/ag4MAgsEAQsDCwsLCwsFAAsgA0H2AEYNBAwKC0EAIARBDmoiAzYCsAoCQAJAAkBBARApQZ9/ag4GABICEhIBEgtBACgCsAoiBSkAAkLzgOSD4I3AMVINESAFLwEKECFFDRFBACAFQQpqNgKwCkEAECkaC0EAKAKwCiIFQQJqQbIIQQ4QLw0QIAUvARAiAkF3aiIBQRdLDQ1BASABdEGfgIAEcUUNDQwOC0EAKAKwCiIFKQACQuyAhIOwjsA5Ug0PIAUvAQoiAkF3aiIBQRdNDQYMCgtBACAEQQpqNgKwCkEAECkaQQAoArAKIQQLQQAgBEEQajYCsAoCQEEBECkiBEEqRw0AQQBBACgCsApBAmo2ArAKQQEQKSEEC0EAKAKwCiEDIAQQLBogA0EAKAKwCiIEIAMgBBACQQBBACgCsApBfmo2ArAKDwsCQCAEKQACQuyAhIOwjsA5Ug0AIAQvAQoQIEUNAEEAIARBCmo2ArAKQQEQKSEEQQAoArAKIQMgBBAsGiADQQAoArAKIgQgAyAEEAJBAEEAKAKwCkF+ajYCsAoPC0EAIARBBGoiBDYCsAoLQQAgBEEGajYCsApBAEEAOgCUCkEBECkhBEEAKAKwCiEDIAQQLCEEQQAoArAKIQIgBEHf/wNxIgFB2wBHDQNBACACQQJqNgKwCkEBECkhBUEAKAKwCiEDQQAhBAwEC0EAQQE6AIwKQQBBACgCsApBAmo2ArAKC0EBECkhBEEAKAKwCiEDAkAgBEHmAEcNACADQQJqQawIQQYQLw0AQQAgA0EIajYCsAogAEEBEClBABArIAJBEGpB5AkgAhshAwNAIAMoAgAiA0UNBSADQgA3AgggA0EQaiEDDAALC0EAIANBfmo2ArAKDAMLQQEgAXRBn4CABHFFDQMMBAtBASEECwNAAkACQCAEDgIAAQELIAVB//8DcRAsGkEBIQQMAQsCQAJAQQAoArAKIgQgA0YNACADIAQgAyAEEAJBARApIQQCQCABQdsARw0AIARBIHJB/QBGDQQLQQAoArAKIQMCQCAEQSxHDQBBACADQQJqNgKwCkEBECkhBUEAKAKwCiEDIAVBIHJB+wBHDQILQQAgA0F+ajYCsAoLIAFB2wBHDQJBACACQX5qNgKwCg8LQQAhBAwACwsPCyACQaABRg0AIAJB+wBHDQQLQQAgBUEKajYCsApBARApIgVB+wBGDQMMAgsCQCACQVhqDgMBAwEACyACQaABRw0CC0EAIAVBEGo2ArAKAkBBARApIgVBKkcNAEEAQQAoArAKQQJqNgKwCkEBECkhBQsgBUEoRg0BC0EAKAKwCiEBIAUQLBpBACgCsAoiBSABTQ0AIAQgAyABIAUQAkEAQQAoArAKQX5qNgKwCg8LIAQgA0EAQQAQAkEAIARBDGo2ArAKDwsQJQvcCAEGf0EAIQBBAEEAKAKwCiIBQQxqIgI2ArAKQQEQKSEDQQAoArAKIQQCQAJAAkACQAJAAkACQAJAIANBLkcNAEEAIARBAmo2ArAKAkBBARApIgNB8wBGDQAgA0HtAEcNB0EAKAKwCiIDQQJqQZwIQQYQLw0HAkBBACgCnAoiBBAqDQAgBC8BAEEuRg0ICyABIAEgA0EIakEAKALUCRABDwtBACgCsAoiA0ECakGiCEEKEC8NBgJAQQAoApwKIgQQKg0AIAQvAQBBLkYNBwsgA0EMaiEDDAELIANB8wBHDQEgBCACTQ0BQQYhAEEAIQIgBEECakGiCEEKEC8NAiAEQQxqIQMCQCAELwEMIgVBd2oiBEEXSw0AQQEgBHRBn4CABHENAQsgBUGgAUcNAgtBACADNgKwCkEBIQBBARApIQMLAkACQAJAAkAgA0H7AEYNACADQShHDQFBACgCpApBAC8BmAoiA0EDdGoiBEEAKAKwCjYCBEEAIANBAWo7AZgKIARBBTYCAEEAKAKcCi8BAEEuRg0HQQBBACgCsAoiBEECajYCsApBARApIQMgAUEAKAKwCkEAIAQQAQJAAkAgAA0AQQAoAvAJIQQMAQtBACgC8AkiBEEFNgIcC0EAQQAvAZYKIgBBAWo7AZYKQQAoAqgKIABBAnRqIAQ2AgACQCADQSJGDQAgA0EnRg0AQQBBACgCsApBfmo2ArAKDwsgAxAaQQBBACgCsApBAmoiAzYCsAoCQAJAAkBBARApQVdqDgQBAgIAAgtBAEEAKAKwCkECajYCsApBARApGkEAKALwCSIEIAM2AgQgBEEBOgAYIARBACgCsAoiAzYCEEEAIANBfmo2ArAKDwtBACgC8AkiBCADNgIEIARBAToAGEEAQQAvAZgKQX9qOwGYCiAEQQAoArAKQQJqNgIMQQBBAC8BlgpBf2o7AZYKDwtBAEEAKAKwCkF+ajYCsAoPCyAADQJBACgCsAohA0EALwGYCg0BA0ACQAJAAkAgA0EAKAK0Ck8NAEEBECkiA0EiRg0BIANBJ0YNASADQf0ARw0CQQBBACgCsApBAmo2ArAKC0EBECkhBEEAKAKwCiEDAkAgBEHmAEcNACADQQJqQawIQQYQLw0JC0EAIANBCGo2ArAKAkBBARApIgNBIkYNACADQSdHDQkLIAEgA0EAECsPCyADEBoLQQBBACgCsApBAmoiAzYCsAoMAAsLIAANAUEGIQBBACECAkAgA0FZag4EBAMDBAALIANBIkYNAwwCC0EAIANBfmo2ArAKDwtBDCEAQQEhAgtBACgCsAoiAyABIABBAXRqRw0AQQAgA0F+ajYCsAoPC0EALwGYCg0CQQAoArAKIQNBACgCtAohAANAIAMgAE8NAQJAAkAgAy8BACIEQSdGDQAgBEEiRw0BCyABIAQgAhArDwtBACADQQJqIgM2ArAKDAALCxAlCw8LQQBBACgCsApBfmo2ArAKC0cBA39BACgCsApBAmohAEEAKAK0CiEBAkADQCAAIgJBfmogAU8NASACQQJqIQAgAi8BAEF2ag4EAQAAAQALC0EAIAI2ArAKC5gBAQN/QQBBACgCsAoiAUECajYCsAogAUEGaiEBQQAoArQKIQIDQAJAAkACQCABQXxqIAJPDQAgAUF+ai8BACEDAkACQCAADQAgA0EqRg0BIANBdmoOBAIEBAIECyADQSpHDQMLIAEvAQBBL0cNAkEAIAFBfmo2ArAKDAELIAFBfmohAQtBACABNgKwCg8LIAFBAmohAQwACwuIAQEEf0EAKAKwCiEBQQAoArQKIQICQAJAA0AgASIDQQJqIQEgAyACTw0BIAEvAQAiBCAARg0CAkAgBEHcAEYNACAEQXZqDgQCAQECAQsgA0EEaiEBIAMvAQRBDUcNACADQQZqIAEgAy8BBkEKRhshAQwACwtBACABNgKwChAlDwtBACABNgKwCgtsAQF/AkACQCAAQV9qIgFBBUsNAEEBIAF0QTFxDQELIABBRmpB//8DcUEGSQ0AIABBKUcgAEFYakH//wNxQQdJcQ0AAkAgAEGlf2oOBAEAAAEACyAAQf0ARyAAQYV/akH//wNxQQRJcQ8LQQELLgEBf0EBIQECQCAAQaYJQQUQHQ0AIABBlghBAxAdDQAgAEGwCUECEB0hAQsgAQtGAQN/QQAhAwJAIAAgAkEBdCICayIEQQJqIgBBACgC3AkiBUkNACAAIAEgAhAvDQACQCAAIAVHDQBBAQ8LIAQQJiEDCyADC4MBAQJ/QQEhAQJAAkACQAJAAkACQCAALwEAIgJBRWoOBAUEBAEACwJAIAJBm39qDgQDBAQCAAsgAkEpRg0EIAJB+QBHDQMgAEF+akG8CUEGEB0PCyAAQX5qLwEAQT1GDwsgAEF+akG0CUEEEB0PCyAAQX5qQcgJQQMQHQ8LQQAhAQsgAQu0AwECf0EAIQECQAJAAkACQAJAAkACQAJAAkACQCAALwEAQZx/ag4UAAECCQkJCQMJCQQFCQkGCQcJCQgJCwJAAkAgAEF+ai8BAEGXf2oOBAAKCgEKCyAAQXxqQcoIQQIQHQ8LIABBfGpBzghBAxAdDwsCQAJAAkAgAEF+ai8BAEGNf2oOAwABAgoLAkAgAEF8ai8BACICQeEARg0AIAJB7ABHDQogAEF6akHlABAnDwsgAEF6akHjABAnDwsgAEF8akHUCEEEEB0PCyAAQXxqQdwIQQYQHQ8LIABBfmovAQBB7wBHDQYgAEF8ai8BAEHlAEcNBgJAIABBemovAQAiAkHwAEYNACACQeMARw0HIABBeGpB6AhBBhAdDwsgAEF4akH0CEECEB0PCyAAQX5qQfgIQQQQHQ8LQQEhASAAQX5qIgBB6QAQJw0EIABBgAlBBRAdDwsgAEF+akHkABAnDwsgAEF+akGKCUEHEB0PCyAAQX5qQZgJQQQQHQ8LAkAgAEF+ai8BACICQe8ARg0AIAJB5QBHDQEgAEF8akHuABAnDwsgAEF8akGgCUEDEB0hAQsgAQs0AQF/QQEhAQJAIABBd2pB//8DcUEFSQ0AIABBgAFyQaABRg0AIABBLkcgABAocSEBCyABCzABAX8CQAJAIABBd2oiAUEXSw0AQQEgAXRBjYCABHENAQsgAEGgAUYNAEEADwtBAQtOAQJ/QQAhAQJAAkAgAC8BACICQeUARg0AIAJB6wBHDQEgAEF+akH4CEEEEB0PCyAAQX5qLwEAQfUARw0AIABBfGpB3AhBBhAdIQELIAEL3gEBBH9BACgCsAohAEEAKAK0CiEBAkACQAJAA0AgACICQQJqIQAgAiABTw0BAkACQAJAIAAvAQAiA0Gkf2oOBQIDAwMBAAsgA0EkRw0CIAIvAQRB+wBHDQJBACACQQRqIgA2ArAKQQBBAC8BmAoiAkEBajsBmApBACgCpAogAkEDdGoiAkEENgIAIAIgADYCBA8LQQAgADYCsApBAEEALwGYCkF/aiIAOwGYCkEAKAKkCiAAQf//A3FBA3RqKAIAQQNHDQMMBAsgAkEEaiEADAALC0EAIAA2ArAKCxAlCwtwAQJ/AkACQANAQQBBACgCsAoiAEECaiIBNgKwCiAAQQAoArQKTw0BAkACQAJAIAEvAQAiAUGlf2oOAgECAAsCQCABQXZqDgQEAwMEAAsgAUEvRw0CDAQLEC4aDAELQQAgAEEEajYCsAoMAAsLECULCzUBAX9BAEEBOgD8CUEAKAKwCiEAQQBBACgCtApBAmo2ArAKQQAgAEEAKALcCWtBAXU2ApAKC0MBAn9BASEBAkAgAC8BACICQXdqQf//A3FBBUkNACACQYABckGgAUYNAEEAIQEgAhAoRQ0AIAJBLkcgABAqcg8LIAELPQECf0EAIQICQEEAKALcCSIDIABLDQAgAC8BACABRw0AAkAgAyAARw0AQQEPCyAAQX5qLwEAECAhAgsgAgtoAQJ/QQEhAQJAAkAgAEFfaiICQQVLDQBBASACdEExcQ0BCyAAQfj/A3FBKEYNACAAQUZqQf//A3FBBkkNAAJAIABBpX9qIgJBA0sNACACQQFHDQELIABBhX9qQf//A3FBBEkhAQsgAQucAQEDf0EAKAKwCiEBAkADQAJAAkAgAS8BACICQS9HDQACQCABLwECIgFBKkYNACABQS9HDQQQGAwCCyAAEBkMAQsCQAJAIABFDQAgAkF3aiIBQRdLDQFBASABdEGfgIAEcUUNAQwCCyACECFFDQMMAQsgAkGgAUcNAgtBAEEAKAKwCiIDQQJqIgE2ArAKIANBACgCtApJDQALCyACCzEBAX9BACEBAkAgAC8BAEEuRw0AIABBfmovAQBBLkcNACAAQXxqLwEAQS5GIQELIAELnAQBAX8CQCABQSJGDQAgAUEnRg0AECUPC0EAKAKwCiEDIAEQGiAAIANBAmpBACgCsApBACgC0AkQAQJAIAJFDQBBACgC8AlBBDYCHAtBAEEAKAKwCkECajYCsAoCQAJAAkACQEEAECkiAUHhAEYNACABQfcARg0BQQAoArAKIQEMAgtBACgCsAoiAUECakHACEEKEC8NAUEGIQAMAgtBACgCsAoiAS8BAkHpAEcNACABLwEEQfQARw0AQQQhACABLwEGQegARg0BC0EAIAFBfmo2ArAKDwtBACABIABBAXRqNgKwCgJAQQEQKUH7AEYNAEEAIAE2ArAKDwtBACgCsAoiAiEAA0BBACAAQQJqNgKwCgJAAkACQEEBECkiAEEiRg0AIABBJ0cNAUEnEBpBAEEAKAKwCkECajYCsApBARApIQAMAgtBIhAaQQBBACgCsApBAmo2ArAKQQEQKSEADAELIAAQLCEACwJAIABBOkYNAEEAIAE2ArAKDwtBAEEAKAKwCkECajYCsAoCQEEBECkiAEEiRg0AIABBJ0YNAEEAIAE2ArAKDwsgABAaQQBBACgCsApBAmo2ArAKAkACQEEBECkiAEEsRg0AIABB/QBGDQFBACABNgKwCg8LQQBBACgCsApBAmo2ArAKQQEQKUH9AEYNAEEAKAKwCiEADAELC0EAKALwCSIBIAI2AhAgAUEAKAKwCkECajYCDAttAQJ/AkACQANAAkAgAEH//wNxIgFBd2oiAkEXSw0AQQEgAnRBn4CABHENAgsgAUGgAUYNASAAIQIgARAoDQJBACECQQBBACgCsAoiAEECajYCsAogAC8BAiIADQAMAgsLIAAhAgsgAkH//wNxC6sBAQR/AkACQEEAKAKwCiICLwEAIgNB4QBGDQAgASEEIAAhBQwBC0EAIAJBBGo2ArAKQQEQKSECQQAoArAKIQUCQAJAIAJBIkYNACACQSdGDQAgAhAsGkEAKAKwCiEEDAELIAIQGkEAQQAoArAKQQJqIgQ2ArAKC0EBECkhA0EAKAKwCiECCwJAIAIgBUYNACAFIARBACAAIAAgAUYiAhtBACABIAIbEAILIAMLcgEEf0EAKAKwCiEAQQAoArQKIQECQAJAA0AgAEECaiECIAAgAU8NAQJAAkAgAi8BACIDQaR/ag4CAQQACyACIQAgA0F2ag4EAgEBAgELIABBBGohAAwACwtBACACNgKwChAlQQAPC0EAIAI2ArAKQd0AC0kBA39BACEDAkAgAkUNAAJAA0AgAC0AACIEIAEtAAAiBUcNASABQQFqIQEgAEEBaiEAIAJBf2oiAg0ADAILCyAEIAVrIQMLIAMLC+wBAgBBgAgLzgEAAHgAcABvAHIAdABtAHAAbwByAHQAZgBvAHIAZQB0AGEAbwB1AHIAYwBlAHIAbwBtAHUAbgBjAHQAaQBvAG4AcwBzAGUAcgB0AHYAbwB5AGkAZQBkAGUAbABlAGMAbwBuAHQAaQBuAGkAbgBzAHQAYQBuAHQAeQBiAHIAZQBhAHIAZQB0AHUAcgBkAGUAYgB1AGcAZwBlAGEAdwBhAGkAdABoAHIAdwBoAGkAbABlAGkAZgBjAGEAdABjAGYAaQBuAGEAbABsAGUAbABzAABB0AkLEAEAAAACAAAAAAQAAEA5AAA=", typeof Buffer < "u" ? Buffer.from(a, "base64") : Uint8Array.from(atob(a), (A) => A.charCodeAt(0)))).then(WebAssembly.instantiate).then(({ exports: A }) => {
	Q = A;
});
var a;
//#endregion
export { api_exports as t };
