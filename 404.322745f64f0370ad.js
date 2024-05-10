(self.webpackChunkapp_dogeverse = self.webpackChunkapp_dogeverse || []).push([
    [404], {
        76010: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.CoinbaseWalletSDK = void 0;
            const e = t(55605),
                p = t(84110),
                h = t(98169),
                f = t(61579),
                b = t(43723),
                r = t(68509),
                o = t(89311),
                u = t(81260),
                g = t(7938);
            class c {
                constructor(a) {
                    var n, l, y;
                    this._appName = "", this._appLogoUrl = null, this._relay = null, this._relayEventManager = null;
                    const _ = a.linkAPIUrl || p.LINK_API_URL;
                    let v;
                    if (v = a.uiConstructor ? a.uiConstructor : E => new b.WalletSDKUI(E), this._overrideIsMetaMask = !(typeof a.overrideIsMetaMask > "u") && a.overrideIsMetaMask, this._overrideIsCoinbaseWallet = null === (n = a.overrideIsCoinbaseWallet) || void 0 === n || n, this._overrideIsCoinbaseBrowser = null !== (l = a.overrideIsCoinbaseBrowser) && void 0 !== l && l, a.diagnosticLogger && a.eventListener) throw new Error("Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger");
                    this._diagnosticLogger = a.eventListener ? {
                        log: a.eventListener.onEvent
                    } : a.diagnosticLogger, this._reloadOnDisconnect = null === (y = a.reloadOnDisconnect) || void 0 === y || y;
                    const w = new URL(_);
                    this._storage = new h.ScopedLocalStorage(`-walletlink:${w.protocol}//${w.host}`), this._storage.setItem("version", c.VERSION), !this.walletExtension && !this.coinbaseBrowser && (this._relayEventManager = new o.WalletSDKRelayEventManager, this._relay = new r.WalletSDKRelay({
                        linkAPIUrl: _,
                        version: g.LIB_VERSION,
                        darkMode: !!a.darkMode,
                        uiConstructor: v,
                        storage: this._storage,
                        relayEventManager: this._relayEventManager,
                        diagnosticLogger: this._diagnosticLogger,
                        reloadOnDisconnect: this._reloadOnDisconnect
                    }), this.setAppInfo(a.appName, a.appLogoUrl), !a.headlessMode && this._relay.attachUI())
                }
                makeWeb3Provider(a = "", n = 1) {
                    const l = this.walletExtension;
                    if (l) return this.isCipherProvider(l) || l.setProviderInfo(a, n), !1 === this._reloadOnDisconnect && "function" == typeof l.disableReloadOnDisconnect && l.disableReloadOnDisconnect(), l;
                    const y = this.coinbaseBrowser;
                    if (y) return y;
                    const _ = this._relay;
                    if (!_ || !this._relayEventManager || !this._storage) throw new Error("Relay not initialized, should never happen");
                    return a || _.setConnectDisabled(!0), new f.CoinbaseWalletProvider({
                        relayProvider: () => Promise.resolve(_),
                        relayEventManager: this._relayEventManager,
                        storage: this._storage,
                        jsonRpcUrl: a,
                        chainId: n,
                        qrUrl: this.getQrUrl(),
                        diagnosticLogger: this._diagnosticLogger,
                        overrideIsMetaMask: this._overrideIsMetaMask,
                        overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
                        overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser
                    })
                }
                setAppInfo(a, n) {
                    var l;
                    this._appName = a || "DApp", this._appLogoUrl = n || (0, u.getFavicon)();
                    const y = this.walletExtension;
                    y ? this.isCipherProvider(y) || y.setAppInfo(this._appName, this._appLogoUrl) : null === (l = this._relay) || void 0 === l || l.setAppInfo(this._appName, this._appLogoUrl)
                }
                disconnect() {
                    var a;
                    const n = this.walletExtension;
                    n ? n.close() : null === (a = this._relay) || void 0 === a || a.resetAndReload()
                }
                getQrUrl() {
                    var a, n;
                    return null !== (n = null === (a = this._relay) || void 0 === a ? void 0 : a.getQRCodeUrl()) && void 0 !== n ? n : null
                }
                getCoinbaseWalletLogo(a, n = 240) {
                    return (0, e.walletLogo)(a, n)
                }
                get walletExtension() {
                    var a;
                    return null !== (a = window.coinbaseWalletExtension) && void 0 !== a ? a : window.walletLinkExtension
                }
                get coinbaseBrowser() {
                    var a, n;
                    try {
                        const l = null !== (a = window.ethereum) && void 0 !== a ? a : null === (n = window.top) || void 0 === n ? void 0 : n.ethereum;
                        return l && "isCoinbaseBrowser" in l && l.isCoinbaseBrowser ? l : void 0
                    } catch {
                        return
                    }
                }
                isCipherProvider(a) {
                    return "boolean" == typeof a.isCipher && a.isCipher
                }
            }
            s.CoinbaseWalletSDK = c, c.VERSION = g.LIB_VERSION
        },
        55605: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.walletLogo = void 0, s.walletLogo = (e, p) => {
                let h;
                switch (e) {
                    case "standard":
                    default:
                        return h = p, `data:image/svg+xml,%3Csvg width='${p}' height='${h}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
                    case "circle":
                        return h = p, `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${p}' height='${h}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
                    case "text":
                        return h = (.1 * p).toFixed(2), `data:image/svg+xml,%3Csvg width='${p}' height='${h}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
                    case "textWithLogo":
                        return h = (.25 * p).toFixed(2), `data:image/svg+xml,%3Csvg width='${p}' height='${h}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
                    case "textLight":
                        return h = (.1 * p).toFixed(2), `data:image/svg+xml,%3Csvg width='${p}' height='${h}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
                    case "textWithLogoLight":
                        return h = (.25 * p).toFixed(2), `data:image/svg+xml,%3Csvg width='${p}' height='${h}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
                }
            }
        },
        68771: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-item.light.selected{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark.selected{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item.selected{border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}"
        },
        85174: function(R, s, t) {
            "use strict";
            var e = this && this.__importDefault || function(I) {
                return I && I.__esModule ? I : {
                    default: I
                }
            };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.CoinbaseAppSteps = s.CoinbaseWalletSteps = s.ConnectItem = s.ConnectContent = void 0;
            const p = e(t(46915)),
                h = t(24354),
                f = t(70491),
                b = t(81260),
                r = t(7938),
                o = t(53729),
                u = e(t(46678)),
                g = e(t(43710)),
                c = t(63801),
                d = e(t(937)),
                a = e(t(40469)),
                n = t(25068),
                l = t(95911),
                y = t(67560),
                _ = e(t(68771)),
                v = {
                    "coinbase-wallet-app": {
                        title: "Coinbase Wallet app",
                        description: "Connect with your self-custody wallet",
                        icon: g.default,
                        steps: x
                    },
                    "coinbase-app": {
                        title: "Coinbase app",
                        description: "Connect with your Coinbase account",
                        icon: u.default,
                        steps: O
                    }
                },
                w = I => "coinbase-app" === I ? d.default : a.default,
                C = I => "light" === I ? "#FFFFFF" : "#0A0B0D";

            function S({
                title: I,
                description: T,
                icon: k,
                selected: P,
                theme: Z,
                onClick: ie
            }) {
                return (0, h.h)("div", {
                    onClick: ie,
                    class: (0, p.default)("-cbwsdk-connect-item", Z, {
                        selected: P
                    })
                }, (0, h.h)("div", null, (0, h.h)("img", {
                    src: k,
                    alt: I
                })), (0, h.h)("div", {
                    class: "-cbwsdk-connect-item-copy-wrapper"
                }, (0, h.h)("h3", {
                    class: "-cbwsdk-connect-item-title"
                }, I), (0, h.h)("p", {
                    class: "-cbwsdk-connect-item-description"
                }, T)))
            }

            function x({
                theme: I
            }) {
                return (0, h.h)("ol", {
                    class: "-cbwsdk-wallet-steps"
                }, (0, h.h)("li", {
                    class: (0, p.default)("-cbwsdk-wallet-steps-item", I)
                }, (0, h.h)("div", {
                    class: "-cbwsdk-wallet-steps-item-wrapper"
                }, "Open Coinbase Wallet app")), (0, h.h)("li", {
                    class: (0, p.default)("-cbwsdk-wallet-steps-item", I)
                }, (0, h.h)("div", {
                    class: "-cbwsdk-wallet-steps-item-wrapper"
                }, (0, h.h)("span", null, "Tap ", (0, h.h)("strong", null, "Scan"), " "), (0, h.h)("span", {
                    class: (0, p.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", I)
                }, (0, h.h)(c.QRCodeIcon, {
                    fill: C(I)
                })))))
            }

            function O({
                theme: I
            }) {
                return (0, h.h)("ol", {
                    class: "-cbwsdk-wallet-steps"
                }, (0, h.h)("li", {
                    class: (0, p.default)("-cbwsdk-wallet-steps-item", I)
                }, (0, h.h)("div", {
                    class: "-cbwsdk-wallet-steps-item-wrapper"
                }, "Open Coinbase app")), (0, h.h)("li", {
                    class: (0, p.default)("-cbwsdk-wallet-steps-item", I)
                }, (0, h.h)("div", {
                    class: "-cbwsdk-wallet-steps-item-wrapper"
                }, (0, h.h)("span", null, "Tap ", (0, h.h)("strong", null, "More")), (0, h.h)("span", {
                    class: (0, p.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", I)
                }, (0, h.h)(n.StatusDotIcon, {
                    fill: C(I)
                })), (0, h.h)("span", {
                    class: "-cbwsdk-wallet-steps-pad-left"
                }, "then ", (0, h.h)("strong", null, "Scan")), (0, h.h)("span", {
                    class: (0, p.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", I)
                }, (0, h.h)(c.QRCodeIcon, {
                    fill: C(I)
                })))))
            }
            s.ConnectContent = function E(I) {
                const {
                    theme: T
                } = I, [k, P] = (0, f.useState)("coinbase-wallet-app"), Z = (0, f.useCallback)(ne => {
                    P(ne)
                }, []), ie = (0, b.createQrUrl)(I.sessionId, I.sessionSecret, I.linkAPIUrl, I.isParentConnection, I.version, I.chainId);
                if (!k) return null;
                const ee = v[k].steps,
                    j = "coinbase-app" === k;
                return (0, h.h)("div", {
                    "data-testid": "connect-content",
                    class: (0, p.default)("-cbwsdk-connect-content", T)
                }, (0, h.h)("style", null, _.default), (0, h.h)("div", {
                    class: "-cbwsdk-connect-content-header"
                }, (0, h.h)("h2", {
                    class: (0, p.default)("-cbwsdk-connect-content-heading", T)
                }, "Scan to connect with one of our mobile apps"), I.onCancel && (0, h.h)("button", {
                    type: "button",
                    class: "-cbwsdk-cancel-button",
                    onClick: I.onCancel
                }, (0, h.h)(o.CloseIcon, {
                    fill: "light" === T ? "#0A0B0D" : "#FFFFFF"
                }))), (0, h.h)("div", {
                    class: "-cbwsdk-connect-content-layout"
                }, (0, h.h)("div", {
                    class: "-cbwsdk-connect-content-column-left"
                }, (0, h.h)("div", null, Object.entries(v).map(([ne, Y]) => (0, h.h)(S, {
                    key: ne,
                    title: Y.title,
                    description: Y.description,
                    icon: Y.icon,
                    selected: k === ne,
                    onClick: () => Z(ne),
                    theme: T
                }))), j && (0, h.h)("div", {
                    class: (0, p.default)("-cbwsdk-connect-content-update-app", T)
                }, "Don\u2019t see a ", (0, h.h)("strong", null, "Scan"), " option? Update your Coinbase app to the latest version and try again.")), (0, h.h)("div", {
                    class: "-cbwsdk-connect-content-column-right"
                }, (0, h.h)("div", {
                    class: "-cbwsdk-connect-content-qr-wrapper"
                }, (0, h.h)(l.QRCode, {
                    content: ie,
                    width: 200,
                    height: 200,
                    fgColor: "#000",
                    bgColor: "transparent",
                    image: {
                        svg: w(k),
                        width: 25,
                        height: 25
                    }
                }), (0, h.h)("input", {
                    type: "hidden",
                    name: "cbw-cbwsdk-version",
                    value: r.LIB_VERSION
                }), (0, h.h)("input", {
                    type: "hidden",
                    value: ie
                })), (0, h.h)(ee, {
                    theme: T
                }), !I.isConnected && (0, h.h)("div", {
                    "data-testid": "connecting-spinner",
                    class: (0, p.default)("-cbwsdk-connect-content-qr-connecting", T)
                }, (0, h.h)(y.Spinner, {
                    size: 36,
                    color: "dark" === T ? "#FFF" : "#000"
                }), (0, h.h)("p", null, "Connecting...")))))
            }, s.ConnectItem = S, s.CoinbaseWalletSteps = x, s.CoinbaseAppSteps = O
        },
        17147: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}"
        },
        63161: function(R, s, t) {
            "use strict";
            var e = this && this.__importDefault || function(g) {
                return g && g.__esModule ? g : {
                    default: g
                }
            };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.ConnectDialog = void 0;
            const p = e(t(46915)),
                h = t(24354),
                f = t(70491),
                b = t(85174),
                r = t(40804),
                o = e(t(17147));
            s.ConnectDialog = g => {
                const {
                    isOpen: c,
                    darkMode: d
                } = g, [a, n] = (0, f.useState)(!c), [l, y] = (0, f.useState)(!c);
                (0, f.useEffect)(() => {
                    const v = [window.setTimeout(() => {
                        y(!c)
                    }, 10)];
                    return c ? n(!1) : v.push(window.setTimeout(() => {
                        n(!0)
                    }, 360)), () => {
                        v.forEach(window.clearTimeout)
                    }
                }, [g.isOpen]);
                const _ = d ? "dark" : "light";
                return (0, h.h)("div", {
                    class: (0, p.default)("-cbwsdk-connect-dialog-container", a && "-cbwsdk-connect-dialog-container-hidden")
                }, (0, h.h)("style", null, o.default), (0, h.h)("div", {
                    class: (0, p.default)("-cbwsdk-connect-dialog-backdrop", _, l && "-cbwsdk-connect-dialog-backdrop-hidden")
                }), (0, h.h)("div", {
                    class: "-cbwsdk-connect-dialog"
                }, (0, h.h)("div", {
                    class: (0, p.default)("-cbwsdk-connect-dialog-box", l && "-cbwsdk-connect-dialog-box-hidden")
                }, g.connectDisabled ? null : (0, h.h)(b.ConnectContent, {
                    theme: _,
                    version: g.version,
                    sessionId: g.sessionId,
                    sessionSecret: g.sessionSecret,
                    linkAPIUrl: g.linkAPIUrl,
                    isConnected: g.isConnected,
                    isParentConnection: g.isParentConnection,
                    chainId: g.chainId,
                    onCancel: g.onCancel
                }), (0, h.h)(r.TryExtensionContent, {
                    theme: _
                }))))
            }
        },
        23824: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.LinkFlow = void 0;
            const e = t(24354),
                p = t(45397),
                h = t(63161);
            s.LinkFlow = class f {
                constructor(r) {
                    this.extensionUI$ = new p.BehaviorSubject({}), this.subscriptions = new p.Subscription, this.isConnected = !1, this.chainId = 1, this.isOpen = !1, this.onCancel = null, this.root = null, this.connectDisabled = !1, this.darkMode = r.darkMode, this.version = r.version, this.sessionId = r.sessionId, this.sessionSecret = r.sessionSecret, this.linkAPIUrl = r.linkAPIUrl, this.isParentConnection = r.isParentConnection, this.connected$ = r.connected$, this.chainId$ = r.chainId$
                }
                attach(r) {
                    this.root = document.createElement("div"), this.root.className = "-cbwsdk-link-flow-root", r.appendChild(this.root), this.render(), this.subscriptions.add(this.connected$.subscribe(o => {
                        this.isConnected !== o && (this.isConnected = o, this.render())
                    })), this.subscriptions.add(this.chainId$.subscribe(o => {
                        this.chainId !== o && (this.chainId = o, this.render())
                    }))
                }
                detach() {
                    var r;
                    this.root && (this.subscriptions.unsubscribe(), (0, e.render)(null, this.root), null === (r = this.root.parentElement) || void 0 === r || r.removeChild(this.root))
                }
                setConnectDisabled(r) {
                    this.connectDisabled = r
                }
                open(r) {
                    this.isOpen = !0, this.onCancel = r.onCancel, this.render()
                }
                close() {
                    this.isOpen = !1, this.onCancel = null, this.render()
                }
                render() {
                    if (!this.root) return;
                    const r = this.extensionUI$.subscribe(() => {
                        this.root && (0, e.render)((0, e.h)(h.ConnectDialog, {
                            darkMode: this.darkMode,
                            version: this.version,
                            sessionId: this.sessionId,
                            sessionSecret: this.sessionSecret,
                            linkAPIUrl: this.linkAPIUrl,
                            isOpen: this.isOpen,
                            isConnected: this.isConnected,
                            isParentConnection: this.isParentConnection,
                            chainId: this.chainId,
                            onCancel: this.onCancel,
                            connectDisabled: this.connectDisabled
                        }), this.root)
                    });
                    this.subscriptions.add(r)
                }
            }
        },
        95911: function(R, s, t) {
            "use strict";
            var e = this && this.__importDefault || function(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.QRCode = void 0;
            const p = t(24354),
                h = t(70491),
                f = e(t(38167));
            s.QRCode = r => {
                const [o, u] = (0, h.useState)("");
                return (0, h.useEffect)(() => {
                    var g, c;
                    const d = new f.default({
                            content: r.content,
                            background: r.bgColor || "#ffffff",
                            color: r.fgColor || "#000000",
                            container: "svg",
                            ecl: "M",
                            width: null !== (g = r.width) && void 0 !== g ? g : 256,
                            height: null !== (c = r.height) && void 0 !== c ? c : 256,
                            padding: 0,
                            image: r.image
                        }),
                        a = Buffer.from(d.svg(), "utf8").toString("base64");
                    u(`data:image/svg+xml;base64,${a}`)
                }), o ? (0, p.h)("img", {
                    src: o,
                    alt: "QR Code"
                }) : null
            }
        },
        65392: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
        },
        99045: function(R, s, t) {
            "use strict";
            var e = this && this.__importDefault || function(d) {
                return d && d.__esModule ? d : {
                    default: d
                }
            };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.SnackbarInstance = s.SnackbarContainer = s.Snackbar = void 0;
            const p = e(t(46915)),
                h = t(24354),
                f = t(70491),
                b = e(t(65392));

            function o(d) {
                return "coinbase-app" === d ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjY3NCAxOC44NThjLTIuMDQ1IDAtMy42NDgtMS43MjItMy42NDgtMy44NDVzMS42NTktMy44NDUgMy42NDgtMy44NDVjMS44MjQgMCAzLjMxNyAxLjM3NyAzLjU5MyAzLjIxNGgzLjcwM2MtLjMzMS0zLjk2LTMuNDgyLTcuMDU5LTcuMjk2LTcuMDU5LTQuMDM0IDAtNy4zNSAzLjQ0My03LjM1IDcuNjkgMCA0LjI0NiAzLjI2IDcuNjkgNy4zNSA3LjY5IDMuODcgMCA2Ljk2NS0zLjEgNy4yOTYtNy4wNTloLTMuNzAzYy0uMjc2IDEuODM2LTEuNzY5IDMuMjE0LTMuNTkzIDMuMjE0WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0wIDEwLjY3OGMwLTMuNzExIDAtNS41OTYuNzQyLTcuMDIzQTYuNTMyIDYuNTMyIDAgMCAxIDMuNjU1Ljc0MkM1LjA4MiAwIDYuOTY3IDAgMTAuNjc4IDBoNy45MzhjMy43MTEgMCA1LjU5NiAwIDcuMDIzLjc0MmE2LjUzMSA2LjUzMSAwIDAgMSAyLjkxMyAyLjkxM2MuNzQyIDEuNDI3Ljc0MiAzLjMxMi43NDIgNy4wMjN2Ny45MzhjMCAzLjcxMSAwIDUuNTk2LS43NDIgNy4wMjNhNi41MzEgNi41MzEgMCAwIDEtMi45MTMgMi45MTNjLTEuNDI3Ljc0Mi0zLjMxMi43NDItNy4wMjMuNzQyaC03LjkzOGMtMy43MTEgMC01LjU5NiAwLTcuMDIzLS43NDJhNi41MzEgNi41MzEgMCAwIDEtMi45MTMtMi45MTNDMCAyNC4yMTIgMCAyMi4zODQgMCAxOC42MTZ2LTcuOTM4WiIgZmlsbD0iIzAwNTJGRiIvPjxwYXRoIGQ9Ik0xNC42ODQgMTkuNzczYy0yLjcyNyAwLTQuODY0LTIuMjk1LTQuODY0LTUuMTI2IDAtMi44MzEgMi4yMS01LjEyNyA0Ljg2NC01LjEyNyAyLjQzMiAwIDQuNDIyIDEuODM3IDQuNzkgNC4yODVoNC45MzhjLS40NDItNS4yOC00LjY0My05LjQxMS05LjcyOC05LjQxMS01LjM4IDAtOS44MDIgNC41OS05LjgwMiAxMC4yNTMgMCA1LjY2MiA0LjM0OCAxMC4yNTMgOS44MDIgMTAuMjUzIDUuMTU5IDAgOS4yODYtNC4xMzIgOS43MjgtOS40MTFoLTQuOTM4Yy0uMzY4IDIuNDQ4LTIuMzU4IDQuMjg0LTQuNzkgNC4yODRaIiBmaWxsPSIjZmZmIi8+PC9zdmc+" : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+"
            }
            s.Snackbar = class u {
                constructor(a) {
                    this.items = new Map, this.nextItemKey = 0, this.root = null, this.darkMode = a.darkMode
                }
                attach(a) {
                    this.root = document.createElement("div"), this.root.className = "-cbwsdk-snackbar-root", a.appendChild(this.root), this.render()
                }
                presentItem(a) {
                    const n = this.nextItemKey++;
                    return this.items.set(n, a), this.render(), () => {
                        this.items.delete(n), this.render()
                    }
                }
                clear() {
                    this.items.clear(), this.render()
                }
                render() {
                    this.root && (0, h.render)((0, h.h)("div", null, (0, h.h)(s.SnackbarContainer, {
                        darkMode: this.darkMode
                    }, Array.from(this.items.entries()).map(([a, n]) => (0, h.h)(s.SnackbarInstance, Object.assign({}, n, {
                        key: a
                    }))))), this.root)
                }
            }, s.SnackbarContainer = d => (0, h.h)("div", {
                class: (0, p.default)("-cbwsdk-snackbar-container")
            }, (0, h.h)("style", null, b.default), (0, h.h)("div", {
                class: "-cbwsdk-snackbar"
            }, d.children)), s.SnackbarInstance = ({
                autoExpand: d,
                message: a,
                menuItems: n,
                appSrc: l
            }) => {
                const [y, _] = (0, f.useState)(!0), [v, w] = (0, f.useState)(d ? ? !1);
                return (0, f.useEffect)(() => {
                    const E = [window.setTimeout(() => {
                        _(!1)
                    }, 1), window.setTimeout(() => {
                        w(!0)
                    }, 1e4)];
                    return () => {
                        E.forEach(window.clearTimeout)
                    }
                }), (0, h.h)("div", {
                    class: (0, p.default)("-cbwsdk-snackbar-instance", y && "-cbwsdk-snackbar-instance-hidden", v && "-cbwsdk-snackbar-instance-expanded")
                }, (0, h.h)("div", {
                    class: "-cbwsdk-snackbar-instance-header",
                    onClick: () => {
                        w(!v)
                    }
                }, (0, h.h)("img", {
                    src: o(l),
                    class: "-cbwsdk-snackbar-instance-header-cblogo"
                }), (0, h.h)("div", {
                    class: "-cbwsdk-snackbar-instance-header-message"
                }, a), (0, h.h)("div", {
                    class: "-gear-container"
                }, !v && (0, h.h)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, h.h)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "12",
                    fill: "#F5F7F8"
                })), (0, h.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand"
                }))), n && n.length > 0 && (0, h.h)("div", {
                    class: "-cbwsdk-snackbar-instance-menu"
                }, n.map((E, S) => (0, h.h)("div", {
                    class: (0, p.default)("-cbwsdk-snackbar-instance-menu-item", E.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"),
                    onClick: E.onClick,
                    key: S
                }, (0, h.h)("svg", {
                    width: E.svgWidth,
                    height: E.svgHeight,
                    viewBox: "0 0 10 11",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, h.h)("path", {
                    "fill-rule": E.defaultFillRule,
                    "clip-rule": E.defaultClipRule,
                    d: E.path,
                    fill: "#AAAAAA"
                })), (0, h.h)("span", {
                    class: (0, p.default)("-cbwsdk-snackbar-instance-menu-item-info", E.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red")
                }, E.info)))))
            }
        },
        49081: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}"
        },
        67560: function(R, s, t) {
            "use strict";
            var e = this && this.__importDefault || function(b) {
                return b && b.__esModule ? b : {
                    default: b
                }
            };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.Spinner = void 0;
            const p = t(24354),
                h = e(t(49081));
            s.Spinner = b => {
                var r;
                const o = null !== (r = b.size) && void 0 !== r ? r : 64,
                    u = b.color || "#000";
                return (0, p.h)("div", {
                    class: "-cbwsdk-spinner"
                }, (0, p.h)("style", null, h.default), (0, p.h)("svg", {
                    viewBox: "0 0 100 100",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: {
                        width: o,
                        height: o
                    }
                }, (0, p.h)("circle", {
                    style: {
                        cx: 50,
                        cy: 50,
                        r: 45,
                        stroke: u
                    }
                })))
            }
        },
        23226: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}"
        },
        40804: function(R, s, t) {
            "use strict";
            var e = this && this.__importDefault || function(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.TryExtensionContent = void 0;
            const p = e(t(46915)),
                h = t(24354),
                f = t(70491),
                b = t(92407),
                r = t(7877),
                o = t(89294),
                u = e(t(23226));
            s.TryExtensionContent = function g({
                theme: c
            }) {
                const [d, a] = (0, f.useState)(!1), n = (0, f.useCallback)(() => {
                    window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank")
                }, []), l = (0, f.useCallback)(() => {
                    d ? window.location.reload() : (n(), a(!0))
                }, [n, d]);
                return (0, h.h)("div", {
                    class: (0, p.default)("-cbwsdk-try-extension", c)
                }, (0, h.h)("style", null, u.default), (0, h.h)("div", {
                    class: "-cbwsdk-try-extension-column-half"
                }, (0, h.h)("h3", {
                    class: (0, p.default)("-cbwsdk-try-extension-heading", c)
                }, "Or try the Coinbase Wallet browser extension"), (0, h.h)("div", {
                    class: "-cbwsdk-try-extension-cta-wrapper"
                }, (0, h.h)("button", {
                    class: (0, p.default)("-cbwsdk-try-extension-cta", c),
                    onClick: l
                }, d ? "Refresh" : "Install"), (0, h.h)("div", null, !d && (0, h.h)(b.ArrowLeftIcon, {
                    class: "-cbwsdk-try-extension-cta-icon",
                    fill: "light" === c ? "#0052FF" : "#588AF5"
                })))), (0, h.h)("div", {
                    class: "-cbwsdk-try-extension-column-half"
                }, (0, h.h)("ul", {
                    class: "-cbwsdk-try-extension-list"
                }, (0, h.h)("li", {
                    class: "-cbwsdk-try-extension-list-item"
                }, (0, h.h)("div", {
                    class: "-cbwsdk-try-extension-list-item-icon-wrapper"
                }, (0, h.h)("span", {
                    class: (0, p.default)("-cbwsdk-try-extension-list-item-icon", c)
                }, (0, h.h)(r.LaptopIcon, {
                    fill: "light" === c ? "#0A0B0D" : "#FFFFFF"
                }))), (0, h.h)("div", {
                    class: (0, p.default)("-cbwsdk-try-extension-list-item-copy", c)
                }, "Connect with dapps with just one click on your desktop browser")), (0, h.h)("li", {
                    class: "-cbwsdk-try-extension-list-item"
                }, (0, h.h)("div", {
                    class: "-cbwsdk-try-extension-list-item-icon-wrapper"
                }, (0, h.h)("span", {
                    class: (0, p.default)("-cbwsdk-try-extension-list-item-icon", c)
                }, (0, h.h)(o.SafeIcon, {
                    fill: "light" === c ? "#0A0B0D" : "#FFFFFF"
                }))), (0, h.h)("div", {
                    class: (0, p.default)("-cbwsdk-try-extension-list-item-copy", c)
                }, "Add an additional layer of security by using a supported Ledger hardware wallet")))))
            }
        },
        92407: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.ArrowLeftIcon = void 0;
            const e = t(24354);
            s.ArrowLeftIcon = function p(h) {
                return (0, e.h)("svg", Object.assign({
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg"
                }, h), (0, e.h)("path", {
                    d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z"
                }))
            }
        },
        53729: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.CloseIcon = void 0;
            const e = t(24354);
            s.CloseIcon = function p(h) {
                return (0, e.h)("svg", Object.assign({
                    width: "40",
                    height: "40",
                    viewBox: "0 0 40 40",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, h), (0, e.h)("path", {
                    d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z"
                }))
            }
        },
        7877: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.LaptopIcon = void 0;
            const e = t(24354);
            s.LaptopIcon = function p(h) {
                return (0, e.h)("svg", Object.assign({
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    xmlns: "http://www.w3.org/2000/svg"
                }, h), (0, e.h)("path", {
                    d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z"
                }), (0, e.h)("path", {
                    d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z"
                }))
            }
        },
        63801: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.QRCodeIcon = void 0;
            const e = t(24354);
            s.QRCodeIcon = function p(h) {
                return (0, e.h)("svg", Object.assign({
                    width: "10",
                    height: "10",
                    viewBox: "0 0 10 10",
                    xmlns: "http://www.w3.org/2000/svg"
                }, h), (0, e.h)("path", {
                    d: "M8.2271 1.77124L7.0271 1.77124V2.97124H8.2271V1.77124Z"
                }), (0, e.h)("path", {
                    d: "M5.44922 0.199219L5.44922 4.54922L9.79922 4.54922V0.199219L5.44922 0.199219ZM8.89922 3.64922L6.34922 3.64922L6.34922 1.09922L8.89922 1.09922V3.64922Z"
                }), (0, e.h)("path", {
                    d: "M2.97124 1.77124L1.77124 1.77124L1.77124 2.97124H2.97124V1.77124Z"
                }), (0, e.h)("path", {
                    d: "M0.199219 4.54922L4.54922 4.54922L4.54922 0.199219L0.199219 0.199219L0.199219 4.54922ZM1.09922 1.09922L3.64922 1.09922L3.64922 3.64922L1.09922 3.64922L1.09922 1.09922Z"
                }), (0, e.h)("path", {
                    d: "M2.97124 7.0271H1.77124L1.77124 8.2271H2.97124V7.0271Z"
                }), (0, e.h)("path", {
                    d: "M0.199219 9.79922H4.54922L4.54922 5.44922L0.199219 5.44922L0.199219 9.79922ZM1.09922 6.34922L3.64922 6.34922L3.64922 8.89922H1.09922L1.09922 6.34922Z"
                }), (0, e.h)("path", {
                    d: "M8.89922 7.39912H7.99922V5.40112H5.44922L5.44922 9.79912H6.34922L6.34922 6.30112H7.09922V8.29912H9.79922V5.40112H8.89922V7.39912Z"
                }), (0, e.h)("path", {
                    d: "M7.99912 8.89917H7.09912V9.79917H7.99912V8.89917Z"
                }), (0, e.h)("path", {
                    d: "M9.79917 8.89917H8.89917V9.79917H9.79917V8.89917Z"
                }))
            }
        },
        937: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = '\n    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>\n        <path d="M50.512 94C74.2907 94 93.5673 74.5244 93.5673 50.5C93.5673 26.4756 74.2907 7 50.512 7C26.7332 7 7.45667 26.4756 7.45667 50.5C7.45667 74.5244 26.7332 94 50.512 94Z" fill="#0052FF"/>\n        <path d="M50.6248 65.4335C42.3697 65.4335 35.8996 58.7469 35.8996 50.5C35.8996 42.2531 42.5928 35.5664 50.6248 35.5664C57.9873 35.5664 64.0111 40.9157 65.1267 48.0481H80.0749C78.7363 32.6688 66.0191 20.6328 50.6248 20.6328C34.3379 20.6328 20.9514 34.0062 20.9514 50.5C20.9514 66.9936 34.1148 80.3671 50.6248 80.3671C66.2422 80.3671 78.7363 68.331 80.0749 52.9516H65.1267C64.0111 60.0841 57.9873 65.4335 50.6248 65.4335Z" fill="white"/>\n    </svg>\n'
        },
        40469: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = '\n    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <circle cx="50" cy="50" r="50" fill="white"/>\n        <circle cx="49.9996" cy="49.9996" r="43.6363" fill="#1B53E4"/>\n        <circle cx="49.9996" cy="49.9996" r="43.6363" stroke="white"/>\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3379 49.9484C19.3379 66.8508 33.04 80.553 49.9425 80.553C66.8449 80.553 80.5471 66.8508 80.5471 49.9484C80.5471 33.0459 66.8449 19.3438 49.9425 19.3438C33.04 19.3438 19.3379 33.0459 19.3379 49.9484ZM44.0817 40.0799C41.8725 40.0799 40.0817 41.8708 40.0817 44.0799V55.8029C40.0817 58.012 41.8725 59.8029 44.0817 59.8029H55.8046C58.0138 59.8029 59.8046 58.012 59.8046 55.8029V44.0799C59.8046 41.8708 58.0138 40.0799 55.8046 40.0799H44.0817Z" fill="white"/>\n    </svg>\n'
        },
        89294: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.SafeIcon = void 0;
            const e = t(24354);
            s.SafeIcon = function p(h) {
                return (0, e.h)("svg", Object.assign({
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    xmlns: "http://www.w3.org/2000/svg"
                }, h), (0, e.h)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z"
                }))
            }
        },
        25068: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.StatusDotIcon = void 0;
            const e = t(24354);
            s.StatusDotIcon = function p(h) {
                return (0, e.h)("svg", Object.assign({
                    width: "10",
                    height: "10",
                    viewBox: "0 0 10 10",
                    xmlns: "http://www.w3.org/2000/svg"
                }, h), (0, e.h)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M2.29995 4.99995C2.29995 5.57985 1.82985 6.04995 1.24995 6.04995C0.670052 6.04995 0.199951 5.57985 0.199951 4.99995C0.199951 4.42005 0.670052 3.94995 1.24995 3.94995C1.82985 3.94995 2.29995 4.42005 2.29995 4.99995ZM4.99995 6.04995C5.57985 6.04995 6.04995 5.57985 6.04995 4.99995C6.04995 4.42005 5.57985 3.94995 4.99995 3.94995C4.42005 3.94995 3.94995 4.42005 3.94995 4.99995C3.94995 5.57985 4.42005 6.04995 4.99995 6.04995ZM8.74995 6.04995C9.32985 6.04995 9.79995 5.57985 9.79995 4.99995C9.79995 4.42005 9.32985 3.94995 8.74995 3.94995C8.17005 3.94995 7.69995 4.42005 7.69995 4.99995C7.69995 5.57985 8.17005 6.04995 8.74995 6.04995Z"
                }))
            }
        },
        46678: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMTQuMDM3IDE4LjkyNmMtMi43NSAwLTQuOTA3LTIuMjA1LTQuOTA3LTQuOTI2IDAtMi43MiAyLjIzLTQuOTI2IDQuOTA3LTQuOTI2YTQuODY2IDQuODY2IDAgMCAxIDQuODMzIDQuMTE4aDQuOTgyYy0uNDQ2LTUuMDczLTQuNjg0LTkuMDQ0LTkuODE1LTkuMDQ0QzguNjEgNC4xNDggNC4xNDkgOC41NiA0LjE0OSAxNHM0LjM4NyA5Ljg1MiA5Ljg5IDkuODUyYzUuMjA0IDAgOS4zNjgtMy45NyA5LjgxNC05LjA0M0gxOC44N2E0Ljg2NiA0Ljg2NiAwIDAgMS00LjgzMyA0LjExN1oiIGZpbGw9IiNmZmYiLz48L3N2Zz4="
        },
        43710: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMjMuODUyIDE0QTkuODM0IDkuODM0IDAgMCAxIDE0IDIzLjg1MiA5LjgzNCA5LjgzNCAwIDAgMSA0LjE0OCAxNCA5LjgzNCA5LjgzNCAwIDAgMSAxNCA0LjE0OCA5LjgzNCA5LjgzNCAwIDAgMSAyMy44NTIgMTRaIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTExLjE4NSAxMi41MDRjMC0uNDU2IDAtLjcxLjA5OC0uODYyLjA5OC0uMTUyLjE5Ni0uMzA0LjM0My0uMzU1LjE5Ni0uMTAyLjM5Mi0uMTAyLjg4MS0uMTAyaDIuOTg2Yy40OSAwIC42ODYgMCAuODgyLjEwMi4xNDYuMTAxLjI5My4yMDMuMzQyLjM1NS4wOTguMjAzLjA5OC40MDYuMDk4Ljg2MnYyLjk5MmMwIC40NTcgMCAuNzEtLjA5OC44NjMtLjA5OC4xNTItLjE5NS4zMDQtLjM0Mi4zNTUtLjE5Ni4xMDEtLjM5Mi4xMDEtLjg4Mi4xMDFoLTIuOTg2Yy0uNDkgMC0uNjg1IDAtLjg4LS4xMDEtLjE0OC0uMTAyLS4yOTUtLjIwMy0uMzQ0LS4zNTUtLjA5OC0uMjAzLS4wOTgtLjQwNi0uMDk4LS44NjN2LTIuOTkyWiIgZmlsbD0iIzAwNTJGRiIvPjwvc3ZnPg=="
        },
        42423: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.ClientMessagePublishEvent = s.ClientMessageSetSessionConfig = s.ClientMessageGetSessionConfig = s.ClientMessageIsLinked = s.ClientMessageHostSession = void 0, s.ClientMessageHostSession = function t(b) {
                return Object.assign({
                    type: "HostSession"
                }, b)
            }, s.ClientMessageIsLinked = function e(b) {
                return Object.assign({
                    type: "IsLinked"
                }, b)
            }, s.ClientMessageGetSessionConfig = function p(b) {
                return Object.assign({
                    type: "GetSessionConfig"
                }, b)
            }, s.ClientMessageSetSessionConfig = function h(b) {
                return Object.assign({
                    type: "SetSessionConfig"
                }, b)
            }, s.ClientMessagePublishEvent = function f(b) {
                return Object.assign({
                    type: "PublishEvent"
                }, b)
            }
        },
        32051: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.EVENTS = void 0, s.EVENTS = {
                STARTED_CONNECTING: "walletlink_sdk.started.connecting",
                CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
                DISCONNECTED: "walletlink_sdk.disconnected",
                METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
                LINKED: "walletlink_sdk.linked",
                FAILURE: "walletlink_sdk.generic_failure",
                SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
                ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
                SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
                UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
                SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
                GENERAL_ERROR: "walletlink_sdk.general_error",
                WEB3_REQUEST: "walletlink_sdk.web3.request",
                WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
                WEB3_RESPONSE: "walletlink_sdk.web3.response",
                UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered"
            }
        },
        77517: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.RxWebSocket = s.ConnectionState = void 0;
            const e = t(45397),
                p = t(58551);
            var h, b;
            (b = h = s.ConnectionState || (s.ConnectionState = {}))[b.DISCONNECTED = 0] = "DISCONNECTED", b[b.CONNECTING = 1] = "CONNECTING", b[b.CONNECTED = 2] = "CONNECTED", s.RxWebSocket = class f {
                constructor(r, o = WebSocket) {
                    this.WebSocketClass = o, this.webSocket = null, this.connectionStateSubject = new e.BehaviorSubject(h.DISCONNECTED), this.incomingDataSubject = new e.Subject, this.url = r.replace(/^http/, "ws")
                }
                connect() {
                    return this.webSocket ? (0, e.throwError)(new Error("webSocket object is not null")) : new e.Observable(r => {
                        let o;
                        try {
                            this.webSocket = o = new this.WebSocketClass(this.url)
                        } catch (u) {
                            return void r.error(u)
                        }
                        this.connectionStateSubject.next(h.CONNECTING), o.onclose = u => {
                            this.clearWebSocket(), r.error(new Error(`websocket error ${u.code}: ${u.reason}`)), this.connectionStateSubject.next(h.DISCONNECTED)
                        }, o.onopen = u => {
                            r.next(), r.complete(), this.connectionStateSubject.next(h.CONNECTED)
                        }, o.onmessage = u => {
                            this.incomingDataSubject.next(u.data)
                        }
                    }).pipe((0, p.take)(1))
                }
                disconnect() {
                    const {
                        webSocket: r
                    } = this;
                    if (r) {
                        this.clearWebSocket(), this.connectionStateSubject.next(h.DISCONNECTED);
                        try {
                            r.close()
                        } catch {}
                    }
                }
                get connectionState$() {
                    return this.connectionStateSubject.asObservable()
                }
                get incomingData$() {
                    return this.incomingDataSubject.asObservable()
                }
                get incomingJSONData$() {
                    return this.incomingData$.pipe((0, p.flatMap)(r => {
                        let o;
                        try {
                            o = JSON.parse(r)
                        } catch {
                            return (0, e.empty)()
                        }
                        return (0, e.of)(o)
                    }))
                }
                sendData(r) {
                    const {
                        webSocket: o
                    } = this;
                    if (!o) throw new Error("websocket is not connected");
                    o.send(r)
                }
                clearWebSocket() {
                    const {
                        webSocket: r
                    } = this;
                    r && (this.webSocket = null, r.onclose = null, r.onerror = null, r.onmessage = null, r.onopen = null)
                }
            }
        },
        65124: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.isServerMessageFail = void 0, s.isServerMessageFail = function t(e) {
                return e && "Fail" === e.type && "number" == typeof e.id && "string" == typeof e.sessionId && "string" == typeof e.error
            }
        },
        86745: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.WalletSDKConnection = void 0;
            const e = t(45397),
                p = t(58551),
                h = t(66293),
                f = t(56703),
                b = t(42423),
                r = t(32051),
                o = t(77517),
                u = t(65124);
            s.WalletSDKConnection = class d {
                constructor(n, l, y, _, v = WebSocket) {
                    this.sessionId = n, this.sessionKey = l, this.diagnostic = _, this.subscriptions = new e.Subscription, this.destroyed = !1, this.lastHeartbeatResponse = 0, this.nextReqId = (0, f.IntNumber)(1), this.connectedSubject = new e.BehaviorSubject(!1), this.linkedSubject = new e.BehaviorSubject(!1), this.sessionConfigSubject = new e.ReplaySubject(1);
                    const w = new o.RxWebSocket(y + "/rpc", v);
                    this.ws = w, this.subscriptions.add(w.connectionState$.pipe((0, p.tap)(C => {
                        var E;
                        return null === (E = this.diagnostic) || void 0 === E ? void 0 : E.log(r.EVENTS.CONNECTED_STATE_CHANGE, {
                            state: C,
                            sessionIdHash: h.Session.hash(n)
                        })
                    }), (0, p.skip)(1), (0, p.filter)(C => C === o.ConnectionState.DISCONNECTED && !this.destroyed), (0, p.delay)(5e3), (0, p.filter)(C => !this.destroyed), (0, p.flatMap)(C => w.connect()), (0, p.retry)()).subscribe()), this.subscriptions.add(w.connectionState$.pipe((0, p.skip)(2), (0, p.switchMap)(C => (0, e.iif)(() => C === o.ConnectionState.CONNECTED, this.authenticate().pipe((0, p.tap)(E => this.sendIsLinked()), (0, p.tap)(E => this.sendGetSessionConfig()), (0, p.map)(E => !0)), (0, e.of)(!1))), (0, p.distinctUntilChanged)(), (0, p.catchError)(C => (0, e.of)(!1))).subscribe(C => this.connectedSubject.next(C))), this.subscriptions.add(w.connectionState$.pipe((0, p.skip)(1), (0, p.switchMap)(C => (0, e.iif)(() => C === o.ConnectionState.CONNECTED, (0, e.timer)(0, 1e4)))).subscribe(C => 0 === C ? this.updateLastHeartbeat() : this.heartbeat())), this.subscriptions.add(w.incomingData$.pipe((0, p.filter)(C => "h" === C)).subscribe(C => this.updateLastHeartbeat())), this.subscriptions.add(w.incomingJSONData$.pipe((0, p.filter)(C => ["IsLinkedOK", "Linked"].includes(C.type))).subscribe(C => {
                        var E;
                        const S = C;
                        null === (E = this.diagnostic) || void 0 === E || E.log(r.EVENTS.LINKED, {
                            sessionIdHash: h.Session.hash(n),
                            linked: S.linked,
                            type: C.type,
                            onlineGuests: S.onlineGuests
                        }), this.linkedSubject.next(S.linked || S.onlineGuests > 0)
                    })), this.subscriptions.add(w.incomingJSONData$.pipe((0, p.filter)(C => ["GetSessionConfigOK", "SessionConfigUpdated"].includes(C.type))).subscribe(C => {
                        var E;
                        const S = C;
                        null === (E = this.diagnostic) || void 0 === E || E.log(r.EVENTS.SESSION_CONFIG_RECEIVED, {
                            sessionIdHash: h.Session.hash(n),
                            metadata_keys: S && S.metadata ? Object.keys(S.metadata) : void 0
                        }), this.sessionConfigSubject.next({
                            webhookId: S.webhookId,
                            webhookUrl: S.webhookUrl,
                            metadata: S.metadata
                        })
                    }))
                }
                connect() {
                    var n;
                    if (this.destroyed) throw new Error("instance is destroyed");
                    null === (n = this.diagnostic) || void 0 === n || n.log(r.EVENTS.STARTED_CONNECTING, {
                        sessionIdHash: h.Session.hash(this.sessionId)
                    }), this.ws.connect().subscribe()
                }
                destroy() {
                    var n;
                    this.subscriptions.unsubscribe(), this.ws.disconnect(), null === (n = this.diagnostic) || void 0 === n || n.log(r.EVENTS.DISCONNECTED, {
                        sessionIdHash: h.Session.hash(this.sessionId)
                    }), this.destroyed = !0
                }
                get isDestroyed() {
                    return this.destroyed
                }
                get connected$() {
                    return this.connectedSubject.asObservable()
                }
                get onceConnected$() {
                    return this.connected$.pipe((0, p.filter)(n => n), (0, p.take)(1), (0, p.map)(() => {}))
                }
                get linked$() {
                    return this.linkedSubject.asObservable()
                }
                get onceLinked$() {
                    return this.linked$.pipe((0, p.filter)(n => n), (0, p.take)(1), (0, p.map)(() => {}))
                }
                get sessionConfig$() {
                    return this.sessionConfigSubject.asObservable()
                }
                get incomingEvent$() {
                    return this.ws.incomingJSONData$.pipe((0, p.filter)(n => "Event" === n.type && ("string" == typeof n.sessionId && "string" == typeof n.eventId && "string" == typeof n.event && "string" == typeof n.data)), (0, p.map)(n => n))
                }
                setSessionMetadata(n, l) {
                    const y = (0, b.ClientMessageSetSessionConfig)({
                        id: (0, f.IntNumber)(this.nextReqId++),
                        sessionId: this.sessionId,
                        metadata: {
                            [n]: l
                        }
                    });
                    return this.onceConnected$.pipe((0, p.flatMap)(_ => this.makeRequest(y)), (0, p.map)(_ => {
                        if ((0, u.isServerMessageFail)(_)) throw new Error(_.error || "failed to set session metadata")
                    }))
                }
                publishEvent(n, l, y = !1) {
                    const _ = (0, b.ClientMessagePublishEvent)({
                        id: (0, f.IntNumber)(this.nextReqId++),
                        sessionId: this.sessionId,
                        event: n,
                        data: l,
                        callWebhook: y
                    });
                    return this.onceLinked$.pipe((0, p.flatMap)(v => this.makeRequest(_)), (0, p.map)(v => {
                        if ((0, u.isServerMessageFail)(v)) throw new Error(v.error || "failed to publish event");
                        return v.eventId
                    }))
                }
                sendData(n) {
                    this.ws.sendData(JSON.stringify(n))
                }
                updateLastHeartbeat() {
                    this.lastHeartbeatResponse = Date.now()
                }
                heartbeat() {
                    if (Date.now() - this.lastHeartbeatResponse > 2e4) this.ws.disconnect();
                    else try {
                        this.ws.sendData("h")
                    } catch {}
                }
                makeRequest(n, l = 6e4) {
                    const y = n.id;
                    try {
                        this.sendData(n)
                    } catch (_) {
                        return (0, e.throwError)(_)
                    }
                    return this.ws.incomingJSONData$.pipe((0, p.timeoutWith)(l, (0, e.throwError)(new Error(`request ${y} timed out`))), (0, p.filter)(_ => _.id === y), (0, p.take)(1))
                }
                authenticate() {
                    const n = (0, b.ClientMessageHostSession)({
                        id: (0, f.IntNumber)(this.nextReqId++),
                        sessionId: this.sessionId,
                        sessionKey: this.sessionKey
                    });
                    return this.makeRequest(n).pipe((0, p.map)(l => {
                        if ((0, u.isServerMessageFail)(l)) throw new Error(l.error || "failed to authentcate")
                    }))
                }
                sendIsLinked() {
                    const n = (0, b.ClientMessageIsLinked)({
                        id: (0, f.IntNumber)(this.nextReqId++),
                        sessionId: this.sessionId
                    });
                    this.sendData(n)
                }
                sendGetSessionConfig() {
                    const n = (0, b.ClientMessageGetSessionConfig)({
                        id: (0, f.IntNumber)(this.nextReqId++),
                        sessionId: this.sessionId
                    });
                    this.sendData(n)
                }
            }
        },
        84110: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.LINK_API_URL = void 0, s.LINK_API_URL = "https://www.walletlink.org"
        },
        23139: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.getErrorCode = s.serializeError = s.standardErrors = s.standardErrorMessage = s.standardErrorCodes = void 0;
            const e = t(90664),
                p = t(75800),
                h = t(7938);
            s.standardErrorCodes = Object.freeze(Object.assign(Object.assign({}, e.errorCodes), {
                provider: Object.freeze(Object.assign(Object.assign({}, e.errorCodes.provider), {
                    unsupportedChain: 4902
                }))
            })), s.standardErrorMessage = function f(c) {
                return void 0 !== c ? (0, e.getMessageFromCode)(c) : "Unknown error"
            }, s.standardErrors = Object.freeze(Object.assign(Object.assign({}, e.ethErrors), {
                provider: Object.freeze(Object.assign(Object.assign({}, e.ethErrors.provider), {
                    unsupportedChain: (c = "") => e.ethErrors.provider.custom({
                        code: s.standardErrorCodes.provider.unsupportedChain,
                        message: `Unrecognized chain ID ${c}. Try adding the chain using wallet_addEthereumChain first.`
                    })
                }))
            })), s.serializeError = function b(c, d) {
                const a = (0, e.serializeError)(function r(c) {
                        return "string" == typeof c ? {
                            message: c,
                            code: s.standardErrorCodes.rpc.internal
                        } : (0, p.isErrorResponse)(c) ? Object.assign(Object.assign({}, c), {
                            message: c.errorMessage,
                            code: c.errorCode,
                            data: {
                                method: c.method,
                                result: c.result
                            }
                        }) : c
                    }(c), {
                        shouldIncludeStack: !0
                    }),
                    n = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
                n.searchParams.set("version", h.LIB_VERSION), n.searchParams.set("code", a.code.toString());
                const l = function o(c, d) {
                    var a;
                    const n = null === (a = c) || void 0 === a ? void 0 : a.method;
                    return n || (void 0 !== d ? "string" == typeof d ? d : Array.isArray(d) ? d.length > 0 ? d[0].method : void 0 : d.method : void 0)
                }(a.data, d);
                return l && n.searchParams.set("method", l), n.searchParams.set("message", a.message), Object.assign(Object.assign({}, a), {
                    docUrl: n.href
                })
            }, s.getErrorCode = function u(c) {
                var d;
                return "number" == typeof c ? c : function g(c) {
                    return "object" == typeof c && null !== c && ("number" == typeof c.code || "number" == typeof c.errorCode)
                }(c) ? null !== (d = c.code) && void 0 !== d ? d : c.errorCode : void 0
            }
        },
        29404: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.CoinbaseWalletProvider = s.CoinbaseWalletSDK = void 0;
            const e = t(76010),
                p = t(61579);
            var h = t(76010);
            Object.defineProperty(s, "CoinbaseWalletSDK", {
                enumerable: !0,
                get: function() {
                    return h.CoinbaseWalletSDK
                }
            });
            var f = t(61579);
            Object.defineProperty(s, "CoinbaseWalletProvider", {
                enumerable: !0,
                get: function() {
                    return f.CoinbaseWalletProvider
                }
            }), s.default = e.CoinbaseWalletSDK, typeof window < "u" && (window.CoinbaseWalletSDK = e.CoinbaseWalletSDK, window.CoinbaseWalletProvider = p.CoinbaseWalletProvider, window.WalletLink = e.CoinbaseWalletSDK, window.WalletLinkProvider = p.CoinbaseWalletProvider)
        },
        98169: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.ScopedLocalStorage = void 0, s.ScopedLocalStorage = class t {
                constructor(p) {
                    this.scope = p
                }
                setItem(p, h) {
                    localStorage.setItem(this.scopedKey(p), h)
                }
                getItem(p) {
                    return localStorage.getItem(this.scopedKey(p))
                }
                removeItem(p) {
                    localStorage.removeItem(this.scopedKey(p))
                }
                clear() {
                    const p = this.scopedKey(""),
                        h = [];
                    for (let f = 0; f < localStorage.length; f++) {
                        const b = localStorage.key(f);
                        "string" == typeof b && b.startsWith(p) && h.push(b)
                    }
                    h.forEach(f => localStorage.removeItem(f))
                }
                scopedKey(p) {
                    return `${this.scope}:${p}`
                }
            }
        },
        93187: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
        },
        8070: function(R, s, t) {
            "use strict";
            var e = this && this.__importDefault || function(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.injectCssReset = void 0;
            const p = e(t(93187));
            s.injectCssReset = function h() {
                const f = document.createElement("style");
                f.type = "text/css", f.appendChild(document.createTextNode(p.default)), document.documentElement.appendChild(f)
            }
        },
        61579: function(R, s, t) {
            "use strict";
            var e = t(17156).default,
                p = this && this.__importDefault || function(C) {
                    return C && C.__esModule ? C : {
                        default: C
                    }
                };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.CoinbaseWalletProvider = void 0;
            const h = p(t(91184)),
                f = p(t(62662)),
                b = t(32051),
                r = t(23139),
                o = t(66293),
                u = t(9740),
                g = t(82844),
                c = t(75800),
                d = t(81260),
                a = p(t(83348)),
                n = t(94016),
                l = t(61234),
                y = t(82506),
                _ = "DefaultChainId",
                v = "DefaultJsonRpcUrl";
            s.CoinbaseWalletProvider = class w extends h.default {
                constructor(E) {
                    var S, x;
                    super(), this._filterPolyfill = new n.FilterPolyfill(this), this._subscriptionManager = new y.SubscriptionManager(this), this._relay = null, this._addresses = [], this.hasMadeFirstChainChangedEmission = !1, this.setProviderInfo = this.setProviderInfo.bind(this), this.updateProviderInfo = this.updateProviderInfo.bind(this), this.getChainId = this.getChainId.bind(this), this.setAppInfo = this.setAppInfo.bind(this), this.enable = this.enable.bind(this), this.close = this.close.bind(this), this.send = this.send.bind(this), this.sendAsync = this.sendAsync.bind(this), this.request = this.request.bind(this), this._setAddresses = this._setAddresses.bind(this), this.scanQRCode = this.scanQRCode.bind(this), this.genericRequest = this.genericRequest.bind(this), this._chainIdFromOpts = E.chainId, this._jsonRpcUrlFromOpts = E.jsonRpcUrl, this._overrideIsMetaMask = E.overrideIsMetaMask, this._relayProvider = E.relayProvider, this._storage = E.storage, this._relayEventManager = E.relayEventManager, this.diagnostic = E.diagnosticLogger, this.reloadOnDisconnect = !0, this.isCoinbaseWallet = null === (S = E.overrideIsCoinbaseWallet) || void 0 === S || S, this.isCoinbaseBrowser = null !== (x = E.overrideIsCoinbaseBrowser) && void 0 !== x && x, this.qrUrl = E.qrUrl;
                    const O = this.getChainId(),
                        I = (0, d.prepend0x)(O.toString(16));
                    this.emit("connect", {
                        chainIdStr: I
                    });
                    const T = this._storage.getItem(u.LOCAL_STORAGE_ADDRESSES_KEY);
                    if (T) {
                        const k = T.split(" ");
                        "" !== k[0] && (this._addresses = k.map(P => (0, d.ensureAddressString)(P)), this.emit("accountsChanged", k))
                    }
                    this._subscriptionManager.events.on("notification", k => {
                        this.emit("message", {
                            type: k.method,
                            data: k.params
                        })
                    }), this._isAuthorized() && this.initializeRelay(), window.addEventListener("message", k => {
                        var P;
                        if (k.origin === location.origin && k.source === window && "walletLinkMessage" === k.data.type) {
                            if ("dappChainSwitched" === k.data.data.action) {
                                const ie = null !== (P = k.data.data.jsonRpcUrl) && void 0 !== P ? P : this.jsonRpcUrl;
                                this.updateProviderInfo(ie, Number(k.data.data.chainId))
                            }
                            "addressChanged" === k.data.data.action && this._setAddresses([k.data.data.address])
                        }
                    })
                }
                get selectedAddress() {
                    return this._addresses[0] || void 0
                }
                get networkVersion() {
                    return this.getChainId().toString(10)
                }
                get chainId() {
                    return (0, d.prepend0x)(this.getChainId().toString(16))
                }
                get isWalletLink() {
                    return !0
                }
                get isMetaMask() {
                    return this._overrideIsMetaMask
                }
                get host() {
                    return this.jsonRpcUrl
                }
                get connected() {
                    return !0
                }
                isConnected() {
                    return !0
                }
                get jsonRpcUrl() {
                    var E;
                    return null !== (E = this._storage.getItem(v)) && void 0 !== E ? E : this._jsonRpcUrlFromOpts
                }
                set jsonRpcUrl(E) {
                    this._storage.setItem(v, E)
                }
                disableReloadOnDisconnect() {
                    this.reloadOnDisconnect = !1
                }
                setProviderInfo(E, S) {
                    this.isCoinbaseBrowser || (this._chainIdFromOpts = S, this._jsonRpcUrlFromOpts = E), this.updateProviderInfo(this.jsonRpcUrl, this.getChainId())
                }
                updateProviderInfo(E, S) {
                    this.jsonRpcUrl = E;
                    const x = this.getChainId();
                    this._storage.setItem(_, S.toString(10)), ((0, d.ensureIntNumber)(S) !== x || !this.hasMadeFirstChainChangedEmission) && (this.emit("chainChanged", this.getChainId()), this.hasMadeFirstChainChangedEmission = !0)
                }
                watchAsset(E, S, x, O, I, T) {
                    var k = this;
                    return e(function*() {
                        return !!(yield(yield k.initializeRelay()).watchAsset(E, S, x, O, I, T ? .toString()).promise).result
                    })()
                }
                addEthereumChain(E, S, x, O, I, T) {
                    var k = this;
                    return e(function*() {
                        var P, Z;
                        if ((0, d.ensureIntNumber)(E) === k.getChainId()) return !1;
                        const ie = yield k.initializeRelay(), se = ie.inlineAddEthereumChain(E.toString());
                        !k._isAuthorized() && !se && (yield ie.requestEthereumAccounts().promise);
                        const ee = yield ie.addEthereumChain(E.toString(), S, I, x, O, T).promise;
                        return !0 === (null === (P = ee.result) || void 0 === P ? void 0 : P.isApproved) && k.updateProviderInfo(S[0], E), !0 === (null === (Z = ee.result) || void 0 === Z ? void 0 : Z.isApproved)
                    })()
                }
                switchEthereumChain(E) {
                    var S = this;
                    return e(function*() {
                        const O = yield(yield S.initializeRelay()).switchEthereumChain(E.toString(10), S.selectedAddress || void 0).promise;
                        if ((0, c.isErrorResponse)(O) && O.errorCode) throw O.errorCode === r.standardErrorCodes.provider.unsupportedChain ? r.standardErrors.provider.unsupportedChain(E) : r.standardErrors.provider.custom({
                            message: O.errorMessage,
                            code: O.errorCode
                        });
                        const I = O.result;
                        I.isApproved && I.rpcUrl.length > 0 && S.updateProviderInfo(I.rpcUrl, E)
                    })()
                }
                setAppInfo(E, S) {
                    this.initializeRelay().then(x => x.setAppInfo(E, S))
                }
                enable() {
                    var E = this;
                    return e(function*() {
                        var S;
                        return null === (S = E.diagnostic) || void 0 === S || S.log(b.EVENTS.ETH_ACCOUNTS_STATE, {
                            method: "provider::enable",
                            addresses_length: E._addresses.length,
                            sessionIdHash: E._relay ? o.Session.hash(E._relay.session.id) : void 0
                        }), E._isAuthorized() ? [...E._addresses] : yield E.send(l.JSONRPCMethod.eth_requestAccounts)
                    })()
                }
                close() {
                    var E = this;
                    return e(function*() {
                        (yield E.initializeRelay()).resetAndReload()
                    })()
                }
                send(E, S) {
                    try {
                        const x = this._send(E, S);
                        if (x instanceof Promise) return x.catch(O => {
                            throw (0, r.serializeError)(O, E)
                        })
                    } catch (x) {
                        throw (0, r.serializeError)(x, E)
                    }
                }
                _send(E, S) {
                    if ("string" == typeof E) {
                        const O = E,
                            I = Array.isArray(S) ? S : void 0 !== S ? [S] : [];
                        return this._sendRequestAsync({
                            jsonrpc: "2.0",
                            id: 0,
                            method: O,
                            params: I
                        }).then(k => k.result)
                    }
                    return "function" == typeof S ? this._sendAsync(E, S) : Array.isArray(E) ? E.map(I => this._sendRequest(I)) : this._sendRequest(E)
                }
                sendAsync(E, S) {
                    var x = this;
                    return e(function*() {
                        try {
                            return x._sendAsync(E, S).catch(O => {
                                throw (0, r.serializeError)(O, E)
                            })
                        } catch (O) {
                            return Promise.reject((0, r.serializeError)(O, E))
                        }
                    })()
                }
                _sendAsync(E, S) {
                    var x = this;
                    return e(function*() {
                        if ("function" != typeof S) throw new Error("callback is required");
                        if (Array.isArray(E)) {
                            const I = S;
                            return void x._sendMultipleRequestsAsync(E).then(T => I(null, T)).catch(T => I(T, null))
                        }
                        const O = S;
                        return x._sendRequestAsync(E).then(I => O(null, I)).catch(I => O(I, null))
                    })()
                }
                request(E) {
                    var S = this;
                    return e(function*() {
                        try {
                            return S._request(E).catch(x => {
                                throw (0, r.serializeError)(x, E.method)
                            })
                        } catch (x) {
                            return Promise.reject((0, r.serializeError)(x, E.method))
                        }
                    })()
                }
                _request(E) {
                    var S = this;
                    return e(function*() {
                        if (!E || "object" != typeof E || Array.isArray(E)) throw r.standardErrors.rpc.invalidRequest({
                            message: "Expected a single, non-array, object argument.",
                            data: E
                        });
                        const {
                            method: x,
                            params: O
                        } = E;
                        if ("string" != typeof x || 0 === x.length) throw r.standardErrors.rpc.invalidRequest({
                            message: "'args.method' must be a non-empty string.",
                            data: E
                        });
                        if (void 0 !== O && !Array.isArray(O) && ("object" != typeof O || null === O)) throw r.standardErrors.rpc.invalidRequest({
                            message: "'args.params' must be an object or array if provided.",
                            data: E
                        });
                        const I = void 0 === O ? [] : O,
                            T = S._relayEventManager.makeRequestId();
                        return (yield S._sendRequestAsync({
                            method: x,
                            params: I,
                            jsonrpc: "2.0",
                            id: T
                        })).result
                    })()
                }
                scanQRCode(E) {
                    var S = this;
                    return e(function*() {
                        var x;
                        const I = yield(yield S.initializeRelay()).scanQRCode((0, d.ensureRegExpString)(E)).promise;
                        if ("string" != typeof I.result) throw (0, r.serializeError)(null !== (x = I.errorMessage) && void 0 !== x ? x : "result was not a string", g.Web3Method.scanQRCode);
                        return I.result
                    })()
                }
                genericRequest(E, S) {
                    var x = this;
                    return e(function*() {
                        var O;
                        const T = yield(yield x.initializeRelay()).genericRequest(E, S).promise;
                        if ("string" != typeof T.result) throw (0, r.serializeError)(null !== (O = T.errorMessage) && void 0 !== O ? O : "result was not a string", g.Web3Method.generic);
                        return T.result
                    })()
                }
                selectProvider(E) {
                    var S = this;
                    return e(function*() {
                        var x;
                        const I = yield(yield S.initializeRelay()).selectProvider(E).promise;
                        if ("string" != typeof I.result) throw (0, r.serializeError)(null !== (x = I.errorMessage) && void 0 !== x ? x : "result was not a string", g.Web3Method.selectProvider);
                        return I.result
                    })()
                }
                supportsSubscriptions() {
                    return !1
                }
                subscribe() {
                    throw new Error("Subscriptions are not supported")
                }
                unsubscribe() {
                    throw new Error("Subscriptions are not supported")
                }
                disconnect() {
                    return !0
                }
                _sendRequest(E) {
                    const S = {
                            jsonrpc: "2.0",
                            id: E.id
                        },
                        {
                            method: x
                        } = E;
                    if (S.result = this._handleSynchronousMethods(E), void 0 === S.result) throw new Error(`Coinbase Wallet does not support calling ${x} synchronously without a callback. Please provide a callback parameter to call ${x} asynchronously.`);
                    return S
                }
                _setAddresses(E, S) {
                    if (!Array.isArray(E)) throw new Error("addresses is not an array");
                    const x = E.map(O => (0, d.ensureAddressString)(O));
                    JSON.stringify(x) !== JSON.stringify(this._addresses) && (this._addresses = x, this.emit("accountsChanged", this._addresses), this._storage.setItem(u.LOCAL_STORAGE_ADDRESSES_KEY, x.join(" ")))
                }
                _sendRequestAsync(E) {
                    return new Promise((S, x) => {
                        try {
                            const O = this._handleSynchronousMethods(E);
                            if (void 0 !== O) return S({
                                jsonrpc: "2.0",
                                id: E.id,
                                result: O
                            });
                            const I = this._handleAsynchronousFilterMethods(E);
                            if (void 0 !== I) return void I.then(k => S(Object.assign(Object.assign({}, k), {
                                id: E.id
                            }))).catch(k => x(k));
                            const T = this._handleSubscriptionMethods(E);
                            if (void 0 !== T) return void T.then(k => S({
                                jsonrpc: "2.0",
                                id: E.id,
                                result: k.result
                            })).catch(k => x(k))
                        } catch (O) {
                            return x(O)
                        }
                        this._handleAsynchronousMethods(E).then(O => O && S(Object.assign(Object.assign({}, O), {
                            id: E.id
                        }))).catch(O => x(O))
                    })
                }
                _sendMultipleRequestsAsync(E) {
                    return Promise.all(E.map(S => this._sendRequestAsync(S)))
                }
                _handleSynchronousMethods(E) {
                    const {
                        method: S
                    } = E, x = E.params || [];
                    switch (S) {
                        case l.JSONRPCMethod.eth_accounts:
                            return this._eth_accounts();
                        case l.JSONRPCMethod.eth_coinbase:
                            return this._eth_coinbase();
                        case l.JSONRPCMethod.eth_uninstallFilter:
                            return this._eth_uninstallFilter(x);
                        case l.JSONRPCMethod.net_version:
                            return this._net_version();
                        case l.JSONRPCMethod.eth_chainId:
                            return this._eth_chainId();
                        default:
                            return
                    }
                }
                _handleAsynchronousMethods(E) {
                    var S = this;
                    return e(function*() {
                        const {
                            method: x
                        } = E, O = E.params || [];
                        switch (x) {
                            case l.JSONRPCMethod.eth_requestAccounts:
                                return S._eth_requestAccounts();
                            case l.JSONRPCMethod.eth_sign:
                                return S._eth_sign(O);
                            case l.JSONRPCMethod.eth_ecRecover:
                                return S._eth_ecRecover(O);
                            case l.JSONRPCMethod.personal_sign:
                                return S._personal_sign(O);
                            case l.JSONRPCMethod.personal_ecRecover:
                                return S._personal_ecRecover(O);
                            case l.JSONRPCMethod.eth_signTransaction:
                                return S._eth_signTransaction(O);
                            case l.JSONRPCMethod.eth_sendRawTransaction:
                                return S._eth_sendRawTransaction(O);
                            case l.JSONRPCMethod.eth_sendTransaction:
                                return S._eth_sendTransaction(O);
                            case l.JSONRPCMethod.eth_signTypedData_v1:
                                return S._eth_signTypedData_v1(O);
                            case l.JSONRPCMethod.eth_signTypedData_v2:
                                return S._throwUnsupportedMethodError();
                            case l.JSONRPCMethod.eth_signTypedData_v3:
                                return S._eth_signTypedData_v3(O);
                            case l.JSONRPCMethod.eth_signTypedData_v4:
                            case l.JSONRPCMethod.eth_signTypedData:
                                return S._eth_signTypedData_v4(O);
                            case l.JSONRPCMethod.cbWallet_arbitrary:
                                return S._cbwallet_arbitrary(O);
                            case l.JSONRPCMethod.wallet_addEthereumChain:
                                return S._wallet_addEthereumChain(O);
                            case l.JSONRPCMethod.wallet_switchEthereumChain:
                                return S._wallet_switchEthereumChain(O);
                            case l.JSONRPCMethod.wallet_watchAsset:
                                return S._wallet_watchAsset(O)
                        }
                        return (yield S.initializeRelay()).makeEthereumJSONRPCRequest(E, S.jsonRpcUrl)
                    })()
                }
                _handleAsynchronousFilterMethods(E) {
                    const {
                        method: S
                    } = E, x = E.params || [];
                    switch (S) {
                        case l.JSONRPCMethod.eth_newFilter:
                            return this._eth_newFilter(x);
                        case l.JSONRPCMethod.eth_newBlockFilter:
                            return this._eth_newBlockFilter();
                        case l.JSONRPCMethod.eth_newPendingTransactionFilter:
                            return this._eth_newPendingTransactionFilter();
                        case l.JSONRPCMethod.eth_getFilterChanges:
                            return this._eth_getFilterChanges(x);
                        case l.JSONRPCMethod.eth_getFilterLogs:
                            return this._eth_getFilterLogs(x)
                    }
                }
                _handleSubscriptionMethods(E) {
                    switch (E.method) {
                        case l.JSONRPCMethod.eth_subscribe:
                        case l.JSONRPCMethod.eth_unsubscribe:
                            return this._subscriptionManager.handleRequest(E)
                    }
                }
                _isKnownAddress(E) {
                    try {
                        const S = (0, d.ensureAddressString)(E);
                        return this._addresses.map(O => (0, d.ensureAddressString)(O)).includes(S)
                    } catch {}
                    return !1
                }
                _ensureKnownAddress(E) {
                    var S;
                    if (!this._isKnownAddress(E)) throw null === (S = this.diagnostic) || void 0 === S || S.log(b.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED), new Error("Unknown Ethereum address")
                }
                _prepareTransactionParams(E) {
                    const S = E.from ? (0, d.ensureAddressString)(E.from) : this.selectedAddress;
                    if (!S) throw new Error("Ethereum address is unavailable");
                    return this._ensureKnownAddress(S), {
                        fromAddress: S,
                        toAddress: E.to ? (0, d.ensureAddressString)(E.to) : null,
                        weiValue: null != E.value ? (0, d.ensureBN)(E.value) : new f.default(0),
                        data: E.data ? (0, d.ensureBuffer)(E.data) : Buffer.alloc(0),
                        nonce: null != E.nonce ? (0, d.ensureIntNumber)(E.nonce) : null,
                        gasPriceInWei: null != E.gasPrice ? (0, d.ensureBN)(E.gasPrice) : null,
                        maxFeePerGas: null != E.maxFeePerGas ? (0, d.ensureBN)(E.maxFeePerGas) : null,
                        maxPriorityFeePerGas: null != E.maxPriorityFeePerGas ? (0, d.ensureBN)(E.maxPriorityFeePerGas) : null,
                        gasLimit: null != E.gas ? (0, d.ensureBN)(E.gas) : null,
                        chainId: this.getChainId()
                    }
                }
                _isAuthorized() {
                    return this._addresses.length > 0
                }
                _requireAuthorization() {
                    if (!this._isAuthorized()) throw r.standardErrors.provider.unauthorized({})
                }
                _throwUnsupportedMethodError() {
                    throw r.standardErrors.provider.unsupportedMethod({})
                }
                _signEthereumMessage(E, S, x, O) {
                    var I = this;
                    return e(function*() {
                        I._ensureKnownAddress(S);
                        try {
                            return {
                                jsonrpc: "2.0",
                                id: 0,
                                result: (yield(yield I.initializeRelay()).signEthereumMessage(E, S, x, O).promise).result
                            }
                        } catch (T) {
                            throw "string" == typeof T.message && T.message.match(/(denied|rejected)/i) ? r.standardErrors.provider.userRejectedRequest("User denied message signature") : T
                        }
                    })()
                }
                _ethereumAddressFromSignedMessage(E, S, x) {
                    var O = this;
                    return e(function*() {
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: (yield(yield O.initializeRelay()).ethereumAddressFromSignedMessage(E, S, x).promise).result
                        }
                    })()
                }
                _eth_accounts() {
                    return [...this._addresses]
                }
                _eth_coinbase() {
                    return this.selectedAddress || null
                }
                _net_version() {
                    return this.getChainId().toString(10)
                }
                _eth_chainId() {
                    return (0, d.hexStringFromIntNumber)(this.getChainId())
                }
                getChainId() {
                    const E = this._storage.getItem(_);
                    if (!E) return (0, d.ensureIntNumber)(this._chainIdFromOpts);
                    const S = parseInt(E, 10);
                    return (0, d.ensureIntNumber)(S)
                }
                _eth_requestAccounts() {
                    var E = this;
                    return e(function*() {
                        var S;
                        if (null === (S = E.diagnostic) || void 0 === S || S.log(b.EVENTS.ETH_ACCOUNTS_STATE, {
                                method: "provider::_eth_requestAccounts",
                                addresses_length: E._addresses.length,
                                sessionIdHash: E._relay ? o.Session.hash(E._relay.session.id) : void 0
                            }), E._isAuthorized()) return Promise.resolve({
                            jsonrpc: "2.0",
                            id: 0,
                            result: E._addresses
                        });
                        let x;
                        try {
                            x = yield(yield E.initializeRelay()).requestEthereumAccounts().promise
                        } catch (O) {
                            throw "string" == typeof O.message && O.message.match(/(denied|rejected)/i) ? r.standardErrors.provider.userRejectedRequest("User denied account authorization") : O
                        }
                        if (!x.result) throw new Error("accounts received is empty");
                        return E._setAddresses(x.result), E.isCoinbaseBrowser || (yield E.switchEthereumChain(E.getChainId())), {
                            jsonrpc: "2.0",
                            id: 0,
                            result: E._addresses
                        }
                    })()
                }
                _eth_sign(E) {
                    this._requireAuthorization();
                    const S = (0, d.ensureAddressString)(E[0]),
                        x = (0, d.ensureBuffer)(E[1]);
                    return this._signEthereumMessage(x, S, !1)
                }
                _eth_ecRecover(E) {
                    const S = (0, d.ensureBuffer)(E[0]),
                        x = (0, d.ensureBuffer)(E[1]);
                    return this._ethereumAddressFromSignedMessage(S, x, !1)
                }
                _personal_sign(E) {
                    this._requireAuthorization();
                    const S = (0, d.ensureBuffer)(E[0]),
                        x = (0, d.ensureAddressString)(E[1]);
                    return this._signEthereumMessage(S, x, !0)
                }
                _personal_ecRecover(E) {
                    const S = (0, d.ensureBuffer)(E[0]),
                        x = (0, d.ensureBuffer)(E[1]);
                    return this._ethereumAddressFromSignedMessage(S, x, !0)
                }
                _eth_signTransaction(E) {
                    var S = this;
                    return e(function*() {
                        S._requireAuthorization();
                        const x = S._prepareTransactionParams(E[0] || {});
                        try {
                            return {
                                jsonrpc: "2.0",
                                id: 0,
                                result: (yield(yield S.initializeRelay()).signEthereumTransaction(x).promise).result
                            }
                        } catch (O) {
                            throw "string" == typeof O.message && O.message.match(/(denied|rejected)/i) ? r.standardErrors.provider.userRejectedRequest("User denied transaction signature") : O
                        }
                    })()
                }
                _eth_sendRawTransaction(E) {
                    var S = this;
                    return e(function*() {
                        const x = (0, d.ensureBuffer)(E[0]);
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: (yield(yield S.initializeRelay()).submitEthereumTransaction(x, S.getChainId()).promise).result
                        }
                    })()
                }
                _eth_sendTransaction(E) {
                    var S = this;
                    return e(function*() {
                        S._requireAuthorization();
                        const x = S._prepareTransactionParams(E[0] || {});
                        try {
                            return {
                                jsonrpc: "2.0",
                                id: 0,
                                result: (yield(yield S.initializeRelay()).signAndSubmitEthereumTransaction(x).promise).result
                            }
                        } catch (O) {
                            throw "string" == typeof O.message && O.message.match(/(denied|rejected)/i) ? r.standardErrors.provider.userRejectedRequest("User denied transaction signature") : O
                        }
                    })()
                }
                _eth_signTypedData_v1(E) {
                    var S = this;
                    return e(function*() {
                        S._requireAuthorization();
                        const x = (0, d.ensureParsedJSONObject)(E[0]),
                            O = (0, d.ensureAddressString)(E[1]);
                        S._ensureKnownAddress(O);
                        const I = a.default.hashForSignTypedDataLegacy({
                                data: x
                            }),
                            T = JSON.stringify(x, null, 2);
                        return S._signEthereumMessage(I, O, !1, T)
                    })()
                }
                _eth_signTypedData_v3(E) {
                    var S = this;
                    return e(function*() {
                        S._requireAuthorization();
                        const x = (0, d.ensureAddressString)(E[0]),
                            O = (0, d.ensureParsedJSONObject)(E[1]);
                        S._ensureKnownAddress(x);
                        const I = a.default.hashForSignTypedData_v3({
                                data: O
                            }),
                            T = JSON.stringify(O, null, 2);
                        return S._signEthereumMessage(I, x, !1, T)
                    })()
                }
                _eth_signTypedData_v4(E) {
                    var S = this;
                    return e(function*() {
                        S._requireAuthorization();
                        const x = (0, d.ensureAddressString)(E[0]),
                            O = (0, d.ensureParsedJSONObject)(E[1]);
                        S._ensureKnownAddress(x);
                        const I = a.default.hashForSignTypedData_v4({
                                data: O
                            }),
                            T = JSON.stringify(O, null, 2);
                        return S._signEthereumMessage(I, x, !1, T)
                    })()
                }
                _cbwallet_arbitrary(E) {
                    var S = this;
                    return e(function*() {
                        const x = E[0],
                            O = E[1];
                        if ("string" != typeof O) throw new Error("parameter must be a string");
                        if ("object" != typeof x || null === x) throw new Error("parameter must be an object");
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: yield S.genericRequest(x, O)
                        }
                    })()
                }
                _wallet_addEthereumChain(E) {
                    var S = this;
                    return e(function*() {
                        var x, O, I, T;
                        const k = E[0];
                        if (0 === (null === (x = k.rpcUrls) || void 0 === x ? void 0 : x.length)) return {
                            jsonrpc: "2.0",
                            id: 0,
                            error: {
                                code: 2,
                                message: "please pass in at least 1 rpcUrl"
                            }
                        };
                        if (!k.chainName || "" === k.chainName.trim()) throw r.standardErrors.rpc.invalidParams("chainName is a required field");
                        if (!k.nativeCurrency) throw r.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
                        const P = parseInt(k.chainId, 16);
                        return (yield S.addEthereumChain(P, null !== (O = k.rpcUrls) && void 0 !== O ? O : [], null !== (I = k.blockExplorerUrls) && void 0 !== I ? I : [], k.chainName, null !== (T = k.iconUrls) && void 0 !== T ? T : [], k.nativeCurrency)) ? {
                            jsonrpc: "2.0",
                            id: 0,
                            result: null
                        } : {
                            jsonrpc: "2.0",
                            id: 0,
                            error: {
                                code: 2,
                                message: "unable to add ethereum chain"
                            }
                        }
                    })()
                }
                _wallet_switchEthereumChain(E) {
                    var S = this;
                    return e(function*() {
                        const x = E[0];
                        return yield S.switchEthereumChain(parseInt(x.chainId, 16)), {
                            jsonrpc: "2.0",
                            id: 0,
                            result: null
                        }
                    })()
                }
                _wallet_watchAsset(E) {
                    var S = this;
                    return e(function*() {
                        const x = Array.isArray(E) ? E[0] : E;
                        if (!x.type) throw r.standardErrors.rpc.invalidParams("Type is required");
                        if ("ERC20" !== x ? .type) throw r.standardErrors.rpc.invalidParams(`Asset of type '${x.type}' is not supported`);
                        if (!x ? .options) throw r.standardErrors.rpc.invalidParams("Options are required");
                        if (!x ? .options.address) throw r.standardErrors.rpc.invalidParams("Address is required");
                        const O = S.getChainId(),
                            {
                                address: I,
                                symbol: T,
                                image: k,
                                decimals: P
                            } = x.options;
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: yield S.watchAsset(x.type, I, T, P, k, O)
                        }
                    })()
                }
                _eth_uninstallFilter(E) {
                    const S = (0, d.ensureHexString)(E[0]);
                    return this._filterPolyfill.uninstallFilter(S)
                }
                _eth_newFilter(E) {
                    var S = this;
                    return e(function*() {
                        const x = E[0];
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: yield S._filterPolyfill.newFilter(x)
                        }
                    })()
                }
                _eth_newBlockFilter() {
                    var E = this;
                    return e(function*() {
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: yield E._filterPolyfill.newBlockFilter()
                        }
                    })()
                }
                _eth_newPendingTransactionFilter() {
                    var E = this;
                    return e(function*() {
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: yield E._filterPolyfill.newPendingTransactionFilter()
                        }
                    })()
                }
                _eth_getFilterChanges(E) {
                    const S = (0, d.ensureHexString)(E[0]);
                    return this._filterPolyfill.getFilterChanges(S)
                }
                _eth_getFilterLogs(E) {
                    const S = (0, d.ensureHexString)(E[0]);
                    return this._filterPolyfill.getFilterLogs(S)
                }
                initializeRelay() {
                    return this._relay ? Promise.resolve(this._relay) : this._relayProvider().then(E => (E.setAccountsCallback((S, x) => this._setAddresses(S, x)), E.setChainCallback((S, x) => {
                        this.updateProviderInfo(x, parseInt(S, 10))
                    }), E.setDappDefaultChainCallback(this._chainIdFromOpts), this._relay = E, E))
                }
            }
        },
        94016: (R, s, t) => {
            "use strict";
            var e = t(17156).default;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.filterFromParam = s.FilterPolyfill = void 0;
            const p = t(56703),
                h = t(81260),
                b = {
                    jsonrpc: "2.0",
                    id: 0
                };

            function o(n) {
                return {
                    fromBlock: g(n.fromBlock),
                    toBlock: g(n.toBlock),
                    addresses: void 0 === n.address ? null : Array.isArray(n.address) ? n.address : [n.address],
                    topics: n.topics || []
                }
            }

            function u(n) {
                const l = {
                    fromBlock: c(n.fromBlock),
                    toBlock: c(n.toBlock),
                    topics: n.topics
                };
                return null !== n.addresses && (l.address = n.addresses), l
            }

            function g(n) {
                if (void 0 === n || "latest" === n || "pending" === n) return "latest";
                if ("earliest" === n) return (0, p.IntNumber)(0);
                if ((0, h.isHexString)(n)) return (0, h.intNumberFromHexString)(n);
                throw new Error(`Invalid block option: ${String(n)}`)
            }

            function c(n) {
                return "latest" === n ? n : (0, h.hexStringFromIntNumber)(n)
            }

            function d() {
                return Object.assign(Object.assign({}, b), {
                    error: {
                        code: -32e3,
                        message: "filter not found"
                    }
                })
            }

            function a() {
                return Object.assign(Object.assign({}, b), {
                    result: []
                })
            }
            s.FilterPolyfill = class r {
                constructor(l) {
                    this.logFilters = new Map, this.blockFilters = new Set, this.pendingTransactionFilters = new Set, this.cursors = new Map, this.timeouts = new Map, this.nextFilterId = (0, p.IntNumber)(1), this.provider = l
                }
                newFilter(l) {
                    var y = this;
                    return e(function*() {
                        const _ = o(l),
                            v = y.makeFilterId(),
                            w = yield y.setInitialCursorPosition(v, _.fromBlock);
                        return console.log(`Installing new log filter(${v}):`, _, "initial cursor position:", w), y.logFilters.set(v, _), y.setFilterTimeout(v), (0, h.hexStringFromIntNumber)(v)
                    })()
                }
                newBlockFilter() {
                    var l = this;
                    return e(function*() {
                        const y = l.makeFilterId(),
                            _ = yield l.setInitialCursorPosition(y, "latest");
                        return console.log(`Installing new block filter (${y}) with initial cursor position:`, _), l.blockFilters.add(y), l.setFilterTimeout(y), (0, h.hexStringFromIntNumber)(y)
                    })()
                }
                newPendingTransactionFilter() {
                    var l = this;
                    return e(function*() {
                        const y = l.makeFilterId(),
                            _ = yield l.setInitialCursorPosition(y, "latest");
                        return console.log(`Installing new block filter (${y}) with initial cursor position:`, _), l.pendingTransactionFilters.add(y), l.setFilterTimeout(y), (0, h.hexStringFromIntNumber)(y)
                    })()
                }
                uninstallFilter(l) {
                    const y = (0, h.intNumberFromHexString)(l);
                    return console.log(`Uninstalling filter (${y})`), this.deleteFilter(y), !0
                }
                getFilterChanges(l) {
                    const y = (0, h.intNumberFromHexString)(l);
                    return this.timeouts.has(y) && this.setFilterTimeout(y), this.logFilters.has(y) ? this.getLogFilterChanges(y) : this.blockFilters.has(y) ? this.getBlockFilterChanges(y) : this.pendingTransactionFilters.has(y) ? this.getPendingTransactionFilterChanges(y) : Promise.resolve(d())
                }
                getFilterLogs(l) {
                    var y = this;
                    return e(function*() {
                        const _ = (0, h.intNumberFromHexString)(l),
                            v = y.logFilters.get(_);
                        return v ? y.sendAsyncPromise(Object.assign(Object.assign({}, b), {
                            method: "eth_getLogs",
                            params: [u(v)]
                        })) : d()
                    })()
                }
                makeFilterId() {
                    return (0, p.IntNumber)(++this.nextFilterId)
                }
                sendAsyncPromise(l) {
                    return new Promise((y, _) => {
                        this.provider.sendAsync(l, (v, w) => v ? _(v) : Array.isArray(w) || null == w ? _(new Error(`unexpected response received: ${JSON.stringify(w)}`)) : void y(w))
                    })
                }
                deleteFilter(l) {
                    console.log(`Deleting filter (${l})`), this.logFilters.delete(l), this.blockFilters.delete(l), this.pendingTransactionFilters.delete(l), this.cursors.delete(l), this.timeouts.delete(l)
                }
                getLogFilterChanges(l) {
                    var y = this;
                    return e(function*() {
                        const _ = y.logFilters.get(l),
                            v = y.cursors.get(l);
                        if (!v || !_) return d();
                        const w = yield y.getCurrentBlockHeight(), C = "latest" === _.toBlock ? w : _.toBlock;
                        if (v > w || v > _.toBlock) return a();
                        console.log(`Fetching logs from ${v} to ${C} for filter ${l}`);
                        const E = yield y.sendAsyncPromise(Object.assign(Object.assign({}, b), {
                            method: "eth_getLogs",
                            params: [u(Object.assign(Object.assign({}, _), {
                                fromBlock: v,
                                toBlock: C
                            }))]
                        }));
                        if (Array.isArray(E.result)) {
                            const S = E.result.map(O => (0, h.intNumberFromHexString)(O.blockNumber || "0x0")),
                                x = Math.max(...S);
                            if (x && x > v) {
                                const O = (0, p.IntNumber)(x + 1);
                                console.log(`Moving cursor position for filter (${l}) from ${v} to ${O}`), y.cursors.set(l, O)
                            }
                        }
                        return E
                    })()
                }
                getBlockFilterChanges(l) {
                    var y = this;
                    return e(function*() {
                        const _ = y.cursors.get(l);
                        if (!_) return d();
                        const v = yield y.getCurrentBlockHeight();
                        if (_ > v) return a();
                        console.log(`Fetching blocks from ${_} to ${v} for filter (${l})`);
                        const w = (yield Promise.all((0, h.range)(_, v + 1).map(E => y.getBlockHashByNumber((0, p.IntNumber)(E))))).filter(E => !!E),
                            C = (0, p.IntNumber)(_ + w.length);
                        return console.log(`Moving cursor position for filter (${l}) from ${_} to ${C}`), y.cursors.set(l, C), Object.assign(Object.assign({}, b), {
                            result: w
                        })
                    })()
                }
                getPendingTransactionFilterChanges(l) {
                    return e(function*() {
                        return Promise.resolve(a())
                    })()
                }
                setInitialCursorPosition(l, y) {
                    var _ = this;
                    return e(function*() {
                        const v = yield _.getCurrentBlockHeight(), w = "number" == typeof y && y > v ? y : v;
                        return _.cursors.set(l, w), w
                    })()
                }
                setFilterTimeout(l) {
                    const y = this.timeouts.get(l);
                    y && window.clearTimeout(y);
                    const _ = window.setTimeout(() => {
                        console.log(`Filter (${l}) timed out`), this.deleteFilter(l)
                    }, 3e5);
                    this.timeouts.set(l, _)
                }
                getCurrentBlockHeight() {
                    var l = this;
                    return e(function*() {
                        const {
                            result: y
                        } = yield l.sendAsyncPromise(Object.assign(Object.assign({}, b), {
                            method: "eth_blockNumber",
                            params: []
                        }));
                        return (0, h.intNumberFromHexString)((0, h.ensureHexString)(y))
                    })()
                }
                getBlockHashByNumber(l) {
                    var y = this;
                    return e(function*() {
                        const _ = yield y.sendAsyncPromise(Object.assign(Object.assign({}, b), {
                            method: "eth_getBlockByNumber",
                            params: [(0, h.hexStringFromIntNumber)(l), !1]
                        }));
                        return _.result && "string" == typeof _.result.hash ? (0, h.ensureHexString)(_.result.hash) : null
                    })()
                }
            }, s.filterFromParam = o
        },
        61234: (R, s) => {
            "use strict";
            var e;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.JSONRPCMethod = void 0, (e = s.JSONRPCMethod || (s.JSONRPCMethod = {})).eth_accounts = "eth_accounts", e.eth_coinbase = "eth_coinbase", e.net_version = "net_version", e.eth_chainId = "eth_chainId", e.eth_uninstallFilter = "eth_uninstallFilter", e.eth_requestAccounts = "eth_requestAccounts", e.eth_sign = "eth_sign", e.eth_ecRecover = "eth_ecRecover", e.personal_sign = "personal_sign", e.personal_ecRecover = "personal_ecRecover", e.eth_signTransaction = "eth_signTransaction", e.eth_sendRawTransaction = "eth_sendRawTransaction", e.eth_sendTransaction = "eth_sendTransaction", e.eth_signTypedData_v1 = "eth_signTypedData_v1", e.eth_signTypedData_v2 = "eth_signTypedData_v2", e.eth_signTypedData_v3 = "eth_signTypedData_v3", e.eth_signTypedData_v4 = "eth_signTypedData_v4", e.eth_signTypedData = "eth_signTypedData", e.cbWallet_arbitrary = "walletlink_arbitrary", e.wallet_addEthereumChain = "wallet_addEthereumChain", e.wallet_switchEthereumChain = "wallet_switchEthereumChain", e.wallet_watchAsset = "wallet_watchAsset", e.eth_subscribe = "eth_subscribe", e.eth_unsubscribe = "eth_unsubscribe", e.eth_newFilter = "eth_newFilter", e.eth_newBlockFilter = "eth_newBlockFilter", e.eth_newPendingTransactionFilter = "eth_newPendingTransactionFilter", e.eth_getFilterChanges = "eth_getFilterChanges", e.eth_getFilterLogs = "eth_getFilterLogs"
        },
        82506: (R, s, t) => {
            "use strict";
            var e = t(17156).default;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.SubscriptionManager = void 0;
            const p = t(21496),
                h = t(34035),
                f = () => {};
            s.SubscriptionManager = class b {
                constructor(o) {
                    const u = new p.PollingBlockTracker({
                            provider: o,
                            pollingInterval: 15e3,
                            setSkipCacheFlag: !0
                        }),
                        {
                            events: g,
                            middleware: c
                        } = h({
                            blockTracker: u,
                            provider: o
                        });
                    this.events = g, this.subscriptionMiddleware = c
                }
                handleRequest(o) {
                    var u = this;
                    return e(function*() {
                        const g = {};
                        return yield u.subscriptionMiddleware(o, g, f, f), g
                    })()
                }
                destroy() {
                    this.subscriptionMiddleware.destroy()
                }
            }
        },
        43723: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.WalletSDKUI = void 0;
            const e = t(23824),
                p = t(99045),
                h = t(8070);
            s.WalletSDKUI = class f {
                constructor(r) {
                    this.standalone = null, this.attached = !1, this.appSrc = null, this.snackbar = new p.Snackbar({
                        darkMode: r.darkMode
                    }), this.linkFlow = new e.LinkFlow({
                        darkMode: r.darkMode,
                        version: r.version,
                        sessionId: r.session.id,
                        sessionSecret: r.session.secret,
                        linkAPIUrl: r.linkAPIUrl,
                        connected$: r.connected$,
                        chainId$: r.chainId$,
                        isParentConnection: !1
                    })
                }
                attach() {
                    if (this.attached) throw new Error("Coinbase Wallet SDK UI is already attached");
                    const r = document.documentElement,
                        o = document.createElement("div");
                    o.className = "-cbwsdk-css-reset", r.appendChild(o), this.linkFlow.attach(o), this.snackbar.attach(o), this.attached = !0, (0, h.injectCssReset)()
                }
                setConnectDisabled(r) {
                    this.linkFlow.setConnectDisabled(r)
                }
                addEthereumChain(r) {}
                watchAsset(r) {}
                switchEthereumChain(r) {}
                requestEthereumAccounts(r) {
                    this.linkFlow.open({
                        onCancel: r.onCancel
                    })
                }
                hideRequestEthereumAccounts() {
                    this.linkFlow.close()
                }
                signEthereumMessage(r) {}
                signEthereumTransaction(r) {}
                submitEthereumTransaction(r) {}
                ethereumAddressFromSignedMessage(r) {}
                showConnecting(r) {
                    let o;
                    return o = r.isUnlinkedErrorState ? {
                        autoExpand: !0,
                        message: "Connection lost",
                        appSrc: this.appSrc,
                        menuItems: [{
                            isRed: !1,
                            info: "Reset connection",
                            svgWidth: "10",
                            svgHeight: "11",
                            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                            defaultFillRule: "evenodd",
                            defaultClipRule: "evenodd",
                            onClick: r.onResetConnection
                        }]
                    } : {
                        message: "Confirm on phone",
                        appSrc: this.appSrc,
                        menuItems: [{
                            isRed: !0,
                            info: "Cancel transaction",
                            svgWidth: "11",
                            svgHeight: "11",
                            path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                            defaultFillRule: "inherit",
                            defaultClipRule: "inherit",
                            onClick: r.onCancel
                        }, {
                            isRed: !1,
                            info: "Reset connection",
                            svgWidth: "10",
                            svgHeight: "11",
                            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                            defaultFillRule: "evenodd",
                            defaultClipRule: "evenodd",
                            onClick: r.onResetConnection
                        }]
                    }, this.snackbar.presentItem(o)
                }
                setAppSrc(r) {
                    this.appSrc = r
                }
                reloadUI() {
                    document.location.reload()
                }
                inlineAccountsResponse() {
                    return !1
                }
                inlineAddEthereumChain(r) {
                    return !1
                }
                inlineWatchAsset() {
                    return !1
                }
                inlineSwitchEthereumChain() {
                    return !1
                }
                setStandalone(r) {
                    this.standalone = r
                }
                isStandalone() {
                    var r;
                    return null !== (r = this.standalone) && void 0 !== r && r
                }
            }
        },
        47600: (R, s) => {
            "use strict";
            var e;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.RelayMessageType = void 0, (e = s.RelayMessageType || (s.RelayMessageType = {})).SESSION_ID_REQUEST = "SESSION_ID_REQUEST", e.SESSION_ID_RESPONSE = "SESSION_ID_RESPONSE", e.LINKED = "LINKED", e.UNLINKED = "UNLINKED", e.WEB3_REQUEST = "WEB3_REQUEST", e.WEB3_REQUEST_CANCELED = "WEB3_REQUEST_CANCELED", e.WEB3_RESPONSE = "WEB3_RESPONSE"
        },
        66293: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.Session = void 0;
            const e = t(97965),
                p = t(81260),
                h = "session:id",
                f = "session:secret",
                b = "session:linked";
            class r {
                constructor(u, g, c, d) {
                    this._storage = u, this._id = g || (0, p.randomBytesHex)(16), this._secret = c || (0, p.randomBytesHex)(32), this._key = (new e.sha256).update(`${this._id}, ${this._secret} WalletLink`).digest("hex"), this._linked = !!d
                }
                static load(u) {
                    const g = u.getItem(h),
                        c = u.getItem(b),
                        d = u.getItem(f);
                    return g && d ? new r(u, g, d, "1" === c) : null
                }
                static hash(u) {
                    return (new e.sha256).update(u).digest("hex")
                }
                get id() {
                    return this._id
                }
                get secret() {
                    return this._secret
                }
                get key() {
                    return this._key
                }
                get linked() {
                    return this._linked
                }
                set linked(u) {
                    this._linked = u, this.persistLinked()
                }
                save() {
                    return this._storage.setItem(h, this._id), this._storage.setItem(f, this._secret), this.persistLinked(), this
                }
                persistLinked() {
                    this._storage.setItem(b, this._linked ? "1" : "0")
                }
            }
            s.Session = r
        },
        68509: function(R, s, t) {
            "use strict";
            var e = this && this.__createBinding || (Object.create ? function(O, I, T, k) {
                    void 0 === k && (k = T), Object.defineProperty(O, k, {
                        enumerable: !0,
                        get: function() {
                            return I[T]
                        }
                    })
                } : function(O, I, T, k) {
                    void 0 === k && (k = T), O[k] = I[T]
                }),
                p = this && this.__setModuleDefault || (Object.create ? function(O, I) {
                    Object.defineProperty(O, "default", {
                        enumerable: !0,
                        value: I
                    })
                } : function(O, I) {
                    O.default = I
                }),
                h = this && this.__decorate || function(O, I, T, k) {
                    var ie, P = arguments.length,
                        Z = P < 3 ? I : null === k ? k = Object.getOwnPropertyDescriptor(I, T) : k;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) Z = Reflect.decorate(O, I, T, k);
                    else
                        for (var se = O.length - 1; se >= 0; se--)(ie = O[se]) && (Z = (P < 3 ? ie(Z) : P > 3 ? ie(I, T, Z) : ie(I, T)) || Z);
                    return P > 3 && Z && Object.defineProperty(I, T, Z), Z
                },
                f = this && this.__importStar || function(O) {
                    if (O && O.__esModule) return O;
                    var I = {};
                    if (null != O)
                        for (var T in O) "default" !== T && Object.prototype.hasOwnProperty.call(O, T) && e(I, O, T);
                    return p(I, O), I
                },
                b = this && this.__importDefault || function(O) {
                    return O && O.__esModule ? O : {
                        default: O
                    }
                };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.WalletSDKRelay = void 0;
            const r = b(t(81979)),
                o = t(45397),
                u = t(58551),
                g = t(32051),
                c = t(86745),
                d = t(23139),
                a = t(56703),
                n = t(81260),
                l = f(t(28148)),
                y = t(66293),
                _ = t(9740),
                v = t(82844),
                w = t(53724),
                C = t(7112),
                E = t(75800),
                S = t(79197);
            class x extends _.WalletSDKRelayAbstract {
                constructor(I) {
                    var T;
                    super(), this.accountsCallback = null, this.chainCallback = null, this.dappDefaultChainSubject = new o.BehaviorSubject(1), this.dappDefaultChain = 1, this.appName = "", this.appLogoUrl = null, this.subscriptions = new o.Subscription, this.linkAPIUrl = I.linkAPIUrl, this.storage = I.storage, this.options = I;
                    const {
                        session: k,
                        ui: P,
                        connection: Z
                    } = this.subscribe();
                    if (this._session = k, this.connection = Z, this.relayEventManager = I.relayEventManager, I.diagnosticLogger && I.eventListener) throw new Error("Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger");
                    this.diagnostic = I.eventListener ? {
                        log: I.eventListener.onEvent
                    } : I.diagnosticLogger, this._reloadOnDisconnect = null === (T = I.reloadOnDisconnect) || void 0 === T || T, this.ui = P
                }
                subscribe() {
                    this.subscriptions.add(this.dappDefaultChainSubject.subscribe(P => {
                        this.dappDefaultChain !== P && (this.dappDefaultChain = P)
                    }));
                    const I = y.Session.load(this.storage) || new y.Session(this.storage).save(),
                        T = new c.WalletSDKConnection(I.id, I.key, this.linkAPIUrl, this.diagnostic);
                    this.subscriptions.add(T.sessionConfig$.subscribe({
                        next: P => {
                            this.onSessionConfigChanged(P)
                        },
                        error: () => {
                            var P;
                            null === (P = this.diagnostic) || void 0 === P || P.log(g.EVENTS.GENERAL_ERROR, {
                                message: "error while invoking session config callback"
                            })
                        }
                    })), this.subscriptions.add(T.incomingEvent$.pipe((0, u.filter)(P => "Web3Response" === P.event)).subscribe({
                        next: this.handleIncomingEvent
                    })), this.subscriptions.add(T.linked$.pipe((0, u.skip)(1), (0, u.tap)(P => {
                        var Z;
                        this.isLinked = P;
                        const ie = this.storage.getItem(_.LOCAL_STORAGE_ADDRESSES_KEY);
                        if (P && (this.session.linked = P), this.isUnlinkedErrorState = !1, ie) {
                            const se = ie.split(" "),
                                ee = "true" === this.storage.getItem("IsStandaloneSigning");
                            if ("" !== se[0] && !P && this.session.linked && !ee) {
                                this.isUnlinkedErrorState = !0;
                                const j = this.getSessionIdHash();
                                null === (Z = this.diagnostic) || void 0 === Z || Z.log(g.EVENTS.UNLINKED_ERROR_STATE, {
                                    sessionIdHash: j
                                })
                            }
                        }
                    })).subscribe()), this.subscriptions.add(T.sessionConfig$.pipe((0, u.filter)(P => !!P.metadata && "1" === P.metadata.__destroyed)).subscribe(() => {
                        var P;
                        return null === (P = this.diagnostic) || void 0 === P || P.log(g.EVENTS.METADATA_DESTROYED, {
                            alreadyDestroyed: T.isDestroyed,
                            sessionIdHash: this.getSessionIdHash()
                        }), this.resetAndReload()
                    })), this.subscriptions.add(T.sessionConfig$.pipe((0, u.filter)(P => P.metadata && void 0 !== P.metadata.WalletUsername)).pipe((0, u.mergeMap)(P => l.decrypt(P.metadata.WalletUsername, I.secret))).subscribe({
                        next: P => {
                            this.storage.setItem(_.WALLET_USER_NAME_KEY, P)
                        },
                        error: () => {
                            var P;
                            null === (P = this.diagnostic) || void 0 === P || P.log(g.EVENTS.GENERAL_ERROR, {
                                message: "Had error decrypting",
                                value: "username"
                            })
                        }
                    })), this.subscriptions.add(T.sessionConfig$.pipe((0, u.filter)(P => P.metadata && void 0 !== P.metadata.AppVersion)).pipe((0, u.mergeMap)(P => l.decrypt(P.metadata.AppVersion, I.secret))).subscribe({
                        next: P => {
                            this.storage.setItem(_.APP_VERSION_KEY, P)
                        },
                        error: () => {
                            var P;
                            null === (P = this.diagnostic) || void 0 === P || P.log(g.EVENTS.GENERAL_ERROR, {
                                message: "Had error decrypting",
                                value: "appversion"
                            })
                        }
                    })), this.subscriptions.add(T.sessionConfig$.pipe((0, u.filter)(P => P.metadata && void 0 !== P.metadata.ChainId && void 0 !== P.metadata.JsonRpcUrl)).pipe((0, u.mergeMap)(P => (0, o.zip)(l.decrypt(P.metadata.ChainId, I.secret), l.decrypt(P.metadata.JsonRpcUrl, I.secret)))).pipe((0, u.distinctUntilChanged)()).subscribe({
                        next: ([P, Z]) => {
                            this.chainCallback && this.chainCallback(P, Z)
                        },
                        error: () => {
                            var P;
                            null === (P = this.diagnostic) || void 0 === P || P.log(g.EVENTS.GENERAL_ERROR, {
                                message: "Had error decrypting",
                                value: "chainId|jsonRpcUrl"
                            })
                        }
                    })), this.subscriptions.add(T.sessionConfig$.pipe((0, u.filter)(P => P.metadata && void 0 !== P.metadata.EthereumAddress)).pipe((0, u.mergeMap)(P => l.decrypt(P.metadata.EthereumAddress, I.secret))).subscribe({
                        next: P => {
                            this.accountsCallback && this.accountsCallback([P]), x.accountRequestCallbackIds.size > 0 && (Array.from(x.accountRequestCallbackIds.values()).forEach(Z => {
                                const ie = (0, S.Web3ResponseMessage)({
                                    id: Z,
                                    response: (0, E.RequestEthereumAccountsResponse)([P])
                                });
                                this.invokeCallback(Object.assign(Object.assign({}, ie), {
                                    id: Z
                                }))
                            }), x.accountRequestCallbackIds.clear())
                        },
                        error: () => {
                            var P;
                            null === (P = this.diagnostic) || void 0 === P || P.log(g.EVENTS.GENERAL_ERROR, {
                                message: "Had error decrypting",
                                value: "selectedAddress"
                            })
                        }
                    })), this.subscriptions.add(T.sessionConfig$.pipe((0, u.filter)(P => P.metadata && void 0 !== P.metadata.AppSrc)).pipe((0, u.mergeMap)(P => l.decrypt(P.metadata.AppSrc, I.secret))).subscribe({
                        next: P => {
                            this.ui.setAppSrc(P)
                        },
                        error: () => {
                            var P;
                            null === (P = this.diagnostic) || void 0 === P || P.log(g.EVENTS.GENERAL_ERROR, {
                                message: "Had error decrypting",
                                value: "appSrc"
                            })
                        }
                    }));
                    const k = this.options.uiConstructor({
                        linkAPIUrl: this.options.linkAPIUrl,
                        version: this.options.version,
                        darkMode: this.options.darkMode,
                        session: I,
                        connected$: T.connected$,
                        chainId$: this.dappDefaultChainSubject
                    });
                    return T.connect(), {
                        session: I,
                        ui: k,
                        connection: T
                    }
                }
                attachUI() {
                    this.ui.attach()
                }
                resetAndReload() {
                    this.connection.setSessionMetadata("__destroyed", "1").pipe((0, u.timeout)(1e3), (0, u.catchError)(I => (0, o.of)(null))).subscribe(I => {
                        var T, k, P;
                        const Z = this.ui.isStandalone();
                        try {
                            this.subscriptions.unsubscribe()
                        } catch {
                            null === (T = this.diagnostic) || void 0 === T || T.log(g.EVENTS.GENERAL_ERROR, {
                                message: "Had error unsubscribing"
                            })
                        }
                        null === (k = this.diagnostic) || void 0 === k || k.log(g.EVENTS.SESSION_STATE_CHANGE, {
                            method: "relay::resetAndReload",
                            sessionMetadataChange: "__destroyed, 1",
                            sessionIdHash: this.getSessionIdHash()
                        }), this.connection.destroy();
                        const ie = y.Session.load(this.storage);
                        if (ie ? .id === this._session.id ? this.storage.clear() : ie && (null === (P = this.diagnostic) || void 0 === P || P.log(g.EVENTS.SKIPPED_CLEARING_SESSION, {
                                sessionIdHash: this.getSessionIdHash(),
                                storedSessionIdHash: y.Session.hash(ie.id)
                            })), this._reloadOnDisconnect) return void this.ui.reloadUI();
                        this.accountsCallback && this.accountsCallback([], !0), this.subscriptions = new o.Subscription;
                        const {
                            session: se,
                            ui: ee,
                            connection: j
                        } = this.subscribe();
                        this._session = se, this.connection = j, this.ui = ee, Z && this.ui.setStandalone && this.ui.setStandalone(!0), this.attachUI()
                    }, I => {
                        var T;
                        null === (T = this.diagnostic) || void 0 === T || T.log(g.EVENTS.FAILURE, {
                            method: "relay::resetAndReload",
                            message: `failed to reset and reload with ${I}`,
                            sessionIdHash: this.getSessionIdHash()
                        })
                    })
                }
                setAppInfo(I, T) {
                    this.appName = I, this.appLogoUrl = T
                }
                getStorageItem(I) {
                    return this.storage.getItem(I)
                }
                get session() {
                    return this._session
                }
                setStorageItem(I, T) {
                    this.storage.setItem(I, T)
                }
                signEthereumMessage(I, T, k, P) {
                    return this.sendRequest({
                        method: v.Web3Method.signEthereumMessage,
                        params: {
                            message: (0, n.hexStringFromBuffer)(I, !0),
                            address: T,
                            addPrefix: k,
                            typedDataJson: P || null
                        }
                    })
                }
                ethereumAddressFromSignedMessage(I, T, k) {
                    return this.sendRequest({
                        method: v.Web3Method.ethereumAddressFromSignedMessage,
                        params: {
                            message: (0, n.hexStringFromBuffer)(I, !0),
                            signature: (0, n.hexStringFromBuffer)(T, !0),
                            addPrefix: k
                        }
                    })
                }
                signEthereumTransaction(I) {
                    return this.sendRequest({
                        method: v.Web3Method.signEthereumTransaction,
                        params: {
                            fromAddress: I.fromAddress,
                            toAddress: I.toAddress,
                            weiValue: (0, n.bigIntStringFromBN)(I.weiValue),
                            data: (0, n.hexStringFromBuffer)(I.data, !0),
                            nonce: I.nonce,
                            gasPriceInWei: I.gasPriceInWei ? (0, n.bigIntStringFromBN)(I.gasPriceInWei) : null,
                            maxFeePerGas: I.gasPriceInWei ? (0, n.bigIntStringFromBN)(I.gasPriceInWei) : null,
                            maxPriorityFeePerGas: I.gasPriceInWei ? (0, n.bigIntStringFromBN)(I.gasPriceInWei) : null,
                            gasLimit: I.gasLimit ? (0, n.bigIntStringFromBN)(I.gasLimit) : null,
                            chainId: I.chainId,
                            shouldSubmit: !1
                        }
                    })
                }
                signAndSubmitEthereumTransaction(I) {
                    return this.sendRequest({
                        method: v.Web3Method.signEthereumTransaction,
                        params: {
                            fromAddress: I.fromAddress,
                            toAddress: I.toAddress,
                            weiValue: (0, n.bigIntStringFromBN)(I.weiValue),
                            data: (0, n.hexStringFromBuffer)(I.data, !0),
                            nonce: I.nonce,
                            gasPriceInWei: I.gasPriceInWei ? (0, n.bigIntStringFromBN)(I.gasPriceInWei) : null,
                            maxFeePerGas: I.maxFeePerGas ? (0, n.bigIntStringFromBN)(I.maxFeePerGas) : null,
                            maxPriorityFeePerGas: I.maxPriorityFeePerGas ? (0, n.bigIntStringFromBN)(I.maxPriorityFeePerGas) : null,
                            gasLimit: I.gasLimit ? (0, n.bigIntStringFromBN)(I.gasLimit) : null,
                            chainId: I.chainId,
                            shouldSubmit: !0
                        }
                    })
                }
                submitEthereumTransaction(I, T) {
                    return this.sendRequest({
                        method: v.Web3Method.submitEthereumTransaction,
                        params: {
                            signedTransaction: (0, n.hexStringFromBuffer)(I, !0),
                            chainId: T
                        }
                    })
                }
                scanQRCode(I) {
                    return this.sendRequest({
                        method: v.Web3Method.scanQRCode,
                        params: {
                            regExp: I
                        }
                    })
                }
                getQRCodeUrl() {
                    return (0, n.createQrUrl)(this._session.id, this._session.secret, this.linkAPIUrl, !1, this.options.version, this.dappDefaultChain)
                }
                genericRequest(I, T) {
                    return this.sendRequest({
                        method: v.Web3Method.generic,
                        params: {
                            action: T,
                            data: I
                        }
                    })
                }
                sendGenericMessage(I) {
                    return this.sendRequest(I)
                }
                sendRequest(I) {
                    let T = null;
                    const k = (0, n.randomBytesHex)(8),
                        P = ie => {
                            this.publishWeb3RequestCanceledEvent(k), this.handleErrorResponse(k, I.method, ie), T ? .()
                        };
                    return {
                        promise: new Promise((ie, se) => {
                            this.ui.isStandalone() || (T = this.ui.showConnecting({
                                isUnlinkedErrorState: this.isUnlinkedErrorState,
                                onCancel: P,
                                onResetConnection: this.resetAndReload
                            })), this.relayEventManager.callbacks.set(k, ee => {
                                if (T ? .(), ee.errorMessage) return se(new Error(ee.errorMessage));
                                ie(ee)
                            }), this.ui.isStandalone() ? this.sendRequestStandalone(k, I) : this.publishWeb3RequestEvent(k, I)
                        }),
                        cancel: P
                    }
                }
                setConnectDisabled(I) {
                    this.ui.setConnectDisabled(I)
                }
                setAccountsCallback(I) {
                    this.accountsCallback = I
                }
                setChainCallback(I) {
                    this.chainCallback = I
                }
                setDappDefaultChainCallback(I) {
                    this.dappDefaultChainSubject.next(I)
                }
                publishWeb3RequestEvent(I, T) {
                    var k;
                    const P = (0, C.Web3RequestMessage)({
                            id: I,
                            request: T
                        }),
                        Z = y.Session.load(this.storage);
                    null === (k = this.diagnostic) || void 0 === k || k.log(g.EVENTS.WEB3_REQUEST, {
                        eventId: P.id,
                        method: `relay::${P.request.method}`,
                        sessionIdHash: this.getSessionIdHash(),
                        storedSessionIdHash: Z ? y.Session.hash(Z.id) : "",
                        isSessionMismatched: (Z ? .id !== this._session.id).toString()
                    }), this.subscriptions.add(this.publishEvent("Web3Request", P, !0).subscribe({
                        next: ie => {
                            var se;
                            null === (se = this.diagnostic) || void 0 === se || se.log(g.EVENTS.WEB3_REQUEST_PUBLISHED, {
                                eventId: P.id,
                                method: `relay::${P.request.method}`,
                                sessionIdHash: this.getSessionIdHash(),
                                storedSessionIdHash: Z ? y.Session.hash(Z.id) : "",
                                isSessionMismatched: (Z ? .id !== this._session.id).toString()
                            })
                        },
                        error: ie => {
                            this.handleWeb3ResponseMessage((0, S.Web3ResponseMessage)({
                                id: P.id,
                                response: {
                                    method: P.request.method,
                                    errorMessage: ie.message
                                }
                            }))
                        }
                    }))
                }
                publishWeb3RequestCanceledEvent(I) {
                    const T = (0, w.Web3RequestCanceledMessage)(I);
                    this.subscriptions.add(this.publishEvent("Web3RequestCanceled", T, !1).subscribe())
                }
                publishEvent(I, T, k) {
                    const P = this.session.secret;
                    return new o.Observable(Z => {
                        l.encrypt(JSON.stringify(Object.assign(Object.assign({}, T), {
                            origin: location.origin
                        })), P).then(ie => {
                            Z.next(ie), Z.complete()
                        })
                    }).pipe((0, u.mergeMap)(Z => this.connection.publishEvent(I, Z, k)))
                }
                handleIncomingEvent(I) {
                    try {
                        this.subscriptions.add((0, o.from)(l.decrypt(I.data, this.session.secret)).pipe((0, u.map)(T => JSON.parse(T))).subscribe({
                            next: T => {
                                const k = (0, S.isWeb3ResponseMessage)(T) ? T : null;
                                k && this.handleWeb3ResponseMessage(k)
                            },
                            error: () => {
                                var T;
                                null === (T = this.diagnostic) || void 0 === T || T.log(g.EVENTS.GENERAL_ERROR, {
                                    message: "Had error decrypting",
                                    value: "incomingEvent"
                                })
                            }
                        }))
                    } catch {
                        return
                    }
                }
                handleWeb3ResponseMessage(I) {
                    var T;
                    const {
                        response: k
                    } = I;
                    if (null === (T = this.diagnostic) || void 0 === T || T.log(g.EVENTS.WEB3_RESPONSE, {
                            eventId: I.id,
                            method: `relay::${k.method}`,
                            sessionIdHash: this.getSessionIdHash()
                        }), (0, E.isRequestEthereumAccountsResponse)(k)) return x.accountRequestCallbackIds.forEach(P => this.invokeCallback(Object.assign(Object.assign({}, I), {
                        id: P
                    }))), void x.accountRequestCallbackIds.clear();
                    this.invokeCallback(I)
                }
                handleErrorResponse(I, T, k, P) {
                    var Z;
                    const ie = null !== (Z = k ? .message) && void 0 !== Z ? Z : (0, d.standardErrorMessage)(P);
                    this.handleWeb3ResponseMessage((0, S.Web3ResponseMessage)({
                        id: I,
                        response: {
                            method: T,
                            errorMessage: ie,
                            errorCode: P
                        }
                    }))
                }
                invokeCallback(I) {
                    const T = this.relayEventManager.callbacks.get(I.id);
                    T && (T(I.response), this.relayEventManager.callbacks.delete(I.id))
                }
                requestEthereumAccounts() {
                    const I = {
                            method: v.Web3Method.requestEthereumAccounts,
                            params: {
                                appName: this.appName,
                                appLogoUrl: this.appLogoUrl || null
                            }
                        },
                        k = (0, n.randomBytesHex)(8),
                        P = ie => {
                            this.publishWeb3RequestCanceledEvent(k), this.handleErrorResponse(k, I.method, ie)
                        };
                    return {
                        promise: new Promise((ie, se) => {
                            var ee;
                            this.relayEventManager.callbacks.set(k, ne => {
                                if (this.ui.hideRequestEthereumAccounts(), ne.errorMessage) return se(new Error(ne.errorMessage));
                                ie(ne)
                            });
                            const j = (null === (ee = window ? .navigator) || void 0 === ee ? void 0 : ee.userAgent) || null;
                            if (j && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(j)) {
                                let ne;
                                try {
                                    ne = (0, n.isInIFrame)() && window.top ? window.top.location : window.location
                                } catch {
                                    ne = window.location
                                }
                                ne.href = `https://www.coinbase.com/connect-dapp?uri=${encodeURIComponent(ne.href)}`
                            } else {
                                if (this.ui.inlineAccountsResponse()) this.ui.requestEthereumAccounts({
                                    onCancel: P,
                                    onAccounts: Y => {
                                        this.handleWeb3ResponseMessage((0, S.Web3ResponseMessage)({
                                            id: k,
                                            response: (0, E.RequestEthereumAccountsResponse)(Y)
                                        }))
                                    }
                                });
                                else {
                                    const ne = d.standardErrors.provider.userRejectedRequest("User denied account authorization");
                                    this.ui.requestEthereumAccounts({
                                        onCancel: () => P(ne)
                                    })
                                }
                                x.accountRequestCallbackIds.add(k), !this.ui.inlineAccountsResponse() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(k, I)
                            }
                        }),
                        cancel: P
                    }
                }
                selectProvider(I) {
                    const T = {
                            method: v.Web3Method.selectProvider,
                            params: {
                                providerOptions: I
                            }
                        },
                        k = (0, n.randomBytesHex)(8);
                    return {
                        cancel: ie => {
                            this.publishWeb3RequestCanceledEvent(k), this.handleErrorResponse(k, T.method, ie)
                        },
                        promise: new Promise((ie, se) => {
                            this.relayEventManager.callbacks.set(k, ne => {
                                if (ne.errorMessage) return se(new Error(ne.errorMessage));
                                ie(ne)
                            }), this.ui.selectProvider && this.ui.selectProvider({
                                onApprove: ne => {
                                    this.handleWeb3ResponseMessage((0, S.Web3ResponseMessage)({
                                        id: k,
                                        response: (0, E.SelectProviderResponse)(ne)
                                    }))
                                },
                                onCancel: ne => {
                                    this.handleWeb3ResponseMessage((0, S.Web3ResponseMessage)({
                                        id: k,
                                        response: (0, E.SelectProviderResponse)(a.ProviderType.Unselected)
                                    }))
                                },
                                providerOptions: I
                            })
                        })
                    }
                }
                watchAsset(I, T, k, P, Z, ie) {
                    const se = {
                        method: v.Web3Method.watchAsset,
                        params: {
                            type: I,
                            options: {
                                address: T,
                                symbol: k,
                                decimals: P,
                                image: Z
                            },
                            chainId: ie
                        }
                    };
                    let ee = null;
                    const j = (0, n.randomBytesHex)(8),
                        ne = G => {
                            this.publishWeb3RequestCanceledEvent(j), this.handleErrorResponse(j, se.method, G), ee ? .()
                        };
                    return this.ui.inlineWatchAsset() || (ee = this.ui.showConnecting({
                        isUnlinkedErrorState: this.isUnlinkedErrorState,
                        onCancel: ne,
                        onResetConnection: this.resetAndReload
                    })), {
                        cancel: ne,
                        promise: new Promise((G, K) => {
                            this.relayEventManager.callbacks.set(j, de => {
                                if (ee ? .(), de.errorMessage) return K(new Error(de.errorMessage));
                                G(de)
                            }), this.ui.inlineWatchAsset() && this.ui.watchAsset({
                                onApprove: () => {
                                    this.handleWeb3ResponseMessage((0, S.Web3ResponseMessage)({
                                        id: j,
                                        response: (0, E.WatchAssetReponse)(!0)
                                    }))
                                },
                                onCancel: de => {
                                    this.handleWeb3ResponseMessage((0, S.Web3ResponseMessage)({
                                        id: j,
                                        response: (0, E.WatchAssetReponse)(!1)
                                    }))
                                },
                                type: I,
                                address: T,
                                symbol: k,
                                decimals: P,
                                image: Z,
                                chainId: ie
                            }), !this.ui.inlineWatchAsset() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(j, se)
                        })
                    }
                }
                addEthereumChain(I, T, k, P, Z, ie) {
                    const se = {
                        method: v.Web3Method.addEthereumChain,
                        params: {
                            chainId: I,
                            rpcUrls: T,
                            blockExplorerUrls: P,
                            chainName: Z,
                            iconUrls: k,
                            nativeCurrency: ie
                        }
                    };
                    let ee = null;
                    const j = (0, n.randomBytesHex)(8),
                        ne = G => {
                            this.publishWeb3RequestCanceledEvent(j), this.handleErrorResponse(j, se.method, G), ee ? .()
                        };
                    return this.ui.inlineAddEthereumChain(I) || (ee = this.ui.showConnecting({
                        isUnlinkedErrorState: this.isUnlinkedErrorState,
                        onCancel: ne,
                        onResetConnection: this.resetAndReload
                    })), {
                        promise: new Promise((G, K) => {
                            this.relayEventManager.callbacks.set(j, de => {
                                if (ee ? .(), de.errorMessage) return K(new Error(de.errorMessage));
                                G(de)
                            }), this.ui.inlineAddEthereumChain(I) && this.ui.addEthereumChain({
                                onCancel: de => {
                                    this.handleWeb3ResponseMessage((0, S.Web3ResponseMessage)({
                                        id: j,
                                        response: (0, E.AddEthereumChainResponse)({
                                            isApproved: !1,
                                            rpcUrl: ""
                                        })
                                    }))
                                },
                                onApprove: de => {
                                    this.handleWeb3ResponseMessage((0, S.Web3ResponseMessage)({
                                        id: j,
                                        response: (0, E.AddEthereumChainResponse)({
                                            isApproved: !0,
                                            rpcUrl: de
                                        })
                                    }))
                                },
                                chainId: se.params.chainId,
                                rpcUrls: se.params.rpcUrls,
                                blockExplorerUrls: se.params.blockExplorerUrls,
                                chainName: se.params.chainName,
                                iconUrls: se.params.iconUrls,
                                nativeCurrency: se.params.nativeCurrency
                            }), !this.ui.inlineAddEthereumChain(I) && !this.ui.isStandalone() && this.publishWeb3RequestEvent(j, se)
                        }),
                        cancel: ne
                    }
                }
                switchEthereumChain(I, T) {
                    const k = {
                            method: v.Web3Method.switchEthereumChain,
                            params: Object.assign({
                                chainId: I
                            }, {
                                address: T
                            })
                        },
                        P = (0, n.randomBytesHex)(8);
                    return {
                        promise: new Promise((se, ee) => {
                            this.relayEventManager.callbacks.set(P, Y => (0, E.isErrorResponse)(Y) && Y.errorCode ? ee(d.standardErrors.provider.custom({
                                code: Y.errorCode,
                                message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
                            })) : Y.errorMessage ? ee(new Error(Y.errorMessage)) : void se(Y)), this.ui.switchEthereumChain({
                                onCancel: Y => {
                                    var G;
                                    if (Y) {
                                        const K = null !== (G = (0, d.getErrorCode)(Y)) && void 0 !== G ? G : d.standardErrorCodes.provider.unsupportedChain;
                                        this.handleErrorResponse(P, v.Web3Method.switchEthereumChain, Y instanceof Error ? Y : d.standardErrors.provider.unsupportedChain(I), K)
                                    } else this.handleWeb3ResponseMessage((0, S.Web3ResponseMessage)({
                                        id: P,
                                        response: (0, E.SwitchEthereumChainResponse)({
                                            isApproved: !1,
                                            rpcUrl: ""
                                        })
                                    }))
                                },
                                onApprove: Y => {
                                    this.handleWeb3ResponseMessage((0, S.Web3ResponseMessage)({
                                        id: P,
                                        response: (0, E.SwitchEthereumChainResponse)({
                                            isApproved: !0,
                                            rpcUrl: Y
                                        })
                                    }))
                                },
                                chainId: k.params.chainId,
                                address: k.params.address
                            }), !this.ui.inlineSwitchEthereumChain() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(P, k)
                        }),
                        cancel: se => {
                            this.publishWeb3RequestCanceledEvent(P), this.handleErrorResponse(P, k.method, se)
                        }
                    }
                }
                inlineAddEthereumChain(I) {
                    return this.ui.inlineAddEthereumChain(I)
                }
                getSessionIdHash() {
                    return y.Session.hash(this._session.id)
                }
                sendRequestStandalone(I, T) {
                    const k = Z => {
                            this.handleErrorResponse(I, T.method, Z)
                        },
                        P = Z => {
                            this.handleWeb3ResponseMessage((0, S.Web3ResponseMessage)({
                                id: I,
                                response: Z
                            }))
                        };
                    switch (T.method) {
                        case v.Web3Method.signEthereumMessage:
                            this.ui.signEthereumMessage({
                                request: T,
                                onSuccess: P,
                                onCancel: k
                            });
                            break;
                        case v.Web3Method.signEthereumTransaction:
                            this.ui.signEthereumTransaction({
                                request: T,
                                onSuccess: P,
                                onCancel: k
                            });
                            break;
                        case v.Web3Method.submitEthereumTransaction:
                            this.ui.submitEthereumTransaction({
                                request: T,
                                onSuccess: P,
                                onCancel: k
                            });
                            break;
                        case v.Web3Method.ethereumAddressFromSignedMessage:
                            this.ui.ethereumAddressFromSignedMessage({
                                request: T,
                                onSuccess: P
                            });
                            break;
                        default:
                            k()
                    }
                }
                onSessionConfigChanged(I) {}
            }
            x.accountRequestCallbackIds = new Set, h([r.default], x.prototype, "resetAndReload", null), h([r.default], x.prototype, "handleIncomingEvent", null), s.WalletSDKRelay = x
        },
        9740: (R, s, t) => {
            "use strict";
            var e = t(17156).default;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.WalletSDKRelayAbstract = s.APP_VERSION_KEY = s.LOCAL_STORAGE_ADDRESSES_KEY = s.WALLET_USER_NAME_KEY = void 0;
            const p = t(23139);
            s.WALLET_USER_NAME_KEY = "walletUsername", s.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses", s.APP_VERSION_KEY = "AppVersion", s.WalletSDKRelayAbstract = class h {
                makeEthereumJSONRPCRequest(b, r) {
                    return e(function*() {
                        if (!r) throw new Error("Error: No jsonRpcUrl provided");
                        return window.fetch(r, {
                            method: "POST",
                            body: JSON.stringify(b),
                            mode: "cors",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(o => o.json()).then(o => {
                            if (!o) throw p.standardErrors.rpc.parse({});
                            const u = o,
                                {
                                    error: g
                                } = u;
                            if (g) throw (0, p.serializeError)(g, b.method);
                            return u
                        })
                    })()
                }
            }
        },
        89311: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.WalletSDKRelayEventManager = void 0;
            const e = t(81260);
            s.WalletSDKRelayEventManager = class p {
                constructor() {
                    this._nextRequestId = 0, this.callbacks = new Map
                }
                makeRequestId() {
                    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
                    const f = this._nextRequestId,
                        b = (0, e.prepend0x)(f.toString(16));
                    return this.callbacks.get(b) && this.callbacks.delete(b), f
                }
            }
        },
        82844: (R, s) => {
            "use strict";
            var e;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.Web3Method = void 0, (e = s.Web3Method || (s.Web3Method = {})).requestEthereumAccounts = "requestEthereumAccounts", e.signEthereumMessage = "signEthereumMessage", e.signEthereumTransaction = "signEthereumTransaction", e.submitEthereumTransaction = "submitEthereumTransaction", e.ethereumAddressFromSignedMessage = "ethereumAddressFromSignedMessage", e.scanQRCode = "scanQRCode", e.generic = "generic", e.childRequestEthereumAccounts = "childRequestEthereumAccounts", e.addEthereumChain = "addEthereumChain", e.switchEthereumChain = "switchEthereumChain", e.makeEthereumJSONRPCRequest = "makeEthereumJSONRPCRequest", e.watchAsset = "watchAsset", e.selectProvider = "selectProvider"
        },
        53724: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.Web3RequestCanceledMessage = void 0;
            const e = t(47600);
            s.Web3RequestCanceledMessage = function p(h) {
                return {
                    type: e.RelayMessageType.WEB3_REQUEST_CANCELED,
                    id: h
                }
            }
        },
        7112: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.Web3RequestMessage = void 0;
            const e = t(47600);
            s.Web3RequestMessage = function p(h) {
                return Object.assign({
                    type: e.RelayMessageType.WEB3_REQUEST
                }, h)
            }
        },
        75800: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.EthereumAddressFromSignedMessageResponse = s.SubmitEthereumTransactionResponse = s.SignEthereumTransactionResponse = s.SignEthereumMessageResponse = s.isRequestEthereumAccountsResponse = s.SelectProviderResponse = s.WatchAssetReponse = s.RequestEthereumAccountsResponse = s.SwitchEthereumChainResponse = s.AddEthereumChainResponse = s.isErrorResponse = void 0;
            const e = t(82844);
            s.isErrorResponse = function p(n) {
                var l, y;
                return void 0 !== (null === (l = n) || void 0 === l ? void 0 : l.method) && void 0 !== (null === (y = n) || void 0 === y ? void 0 : y.errorMessage)
            }, s.AddEthereumChainResponse = function h(n) {
                return {
                    method: e.Web3Method.addEthereumChain,
                    result: n
                }
            }, s.SwitchEthereumChainResponse = function f(n) {
                return {
                    method: e.Web3Method.switchEthereumChain,
                    result: n
                }
            }, s.RequestEthereumAccountsResponse = function b(n) {
                return {
                    method: e.Web3Method.requestEthereumAccounts,
                    result: n
                }
            }, s.WatchAssetReponse = function r(n) {
                return {
                    method: e.Web3Method.watchAsset,
                    result: n
                }
            }, s.SelectProviderResponse = function o(n) {
                return {
                    method: e.Web3Method.selectProvider,
                    result: n
                }
            }, s.isRequestEthereumAccountsResponse = function u(n) {
                return n && n.method === e.Web3Method.requestEthereumAccounts
            }, s.SignEthereumMessageResponse = function g(n) {
                return {
                    method: e.Web3Method.signEthereumMessage,
                    result: n
                }
            }, s.SignEthereumTransactionResponse = function c(n) {
                return {
                    method: e.Web3Method.signEthereumTransaction,
                    result: n
                }
            }, s.SubmitEthereumTransactionResponse = function d(n) {
                return {
                    method: e.Web3Method.submitEthereumTransaction,
                    result: n
                }
            }, s.EthereumAddressFromSignedMessageResponse = function a(n) {
                return {
                    method: e.Web3Method.ethereumAddressFromSignedMessage,
                    result: n
                }
            }
        },
        79197: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.isWeb3ResponseMessage = s.Web3ResponseMessage = void 0;
            const e = t(47600);
            s.Web3ResponseMessage = function p(f) {
                return Object.assign({
                    type: e.RelayMessageType.WEB3_RESPONSE
                }, f)
            }, s.isWeb3ResponseMessage = function h(f) {
                return f && f.type === e.RelayMessageType.WEB3_RESPONSE
            }
        },
        28148: (R, s, t) => {
            "use strict";
            var e = t(17156).default;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.decrypt = s.encrypt = void 0;
            const p = t(81260);

            function f() {
                return (f = e(function*(r, o) {
                    if (64 !== o.length) throw Error("secret must be 256 bits");
                    const u = crypto.getRandomValues(new Uint8Array(12)),
                        g = yield crypto.subtle.importKey("raw", (0, p.hexStringToUint8Array)(o), {
                            name: "aes-gcm"
                        }, !1, ["encrypt", "decrypt"]), c = new TextEncoder, d = yield window.crypto.subtle.encrypt({
                            name: "AES-GCM",
                            iv: u
                        }, g, c.encode(r)), n = d.slice(d.byteLength - 16), l = d.slice(0, d.byteLength - 16), y = new Uint8Array(n), _ = new Uint8Array(l), v = new Uint8Array([...u, ...y, ..._]);
                    return (0, p.uint8ArrayToHex)(v)
                })).apply(this, arguments)
            }
            s.encrypt = function h(r, o) {
                return f.apply(this, arguments)
            }, s.decrypt = function b(r, o) {
                if (64 !== o.length) throw Error("secret must be 256 bits");
                return new Promise((u, g) => {
                    e(function*() {
                        const c = yield crypto.subtle.importKey("raw", (0, p.hexStringToUint8Array)(o), {
                            name: "aes-gcm"
                        }, !1, ["encrypt", "decrypt"]), d = (0, p.hexStringToUint8Array)(r), a = d.slice(0, 12), n = d.slice(12, 28), l = d.slice(28), y = new Uint8Array([...l, ...n]), _ = {
                            name: "AES-GCM",
                            iv: new Uint8Array(a)
                        };
                        try {
                            const v = yield window.crypto.subtle.decrypt(_, c, y), w = new TextDecoder;
                            u(w.decode(v))
                        } catch (v) {
                            g(v)
                        }
                    })()
                })
            }
        },
        56703: (R, s) => {
            "use strict";
            var h;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.ProviderType = s.RegExpString = s.IntNumber = s.BigIntString = s.AddressString = s.HexString = s.OpaqueType = void 0, s.OpaqueType = function t() {
                return h => h
            }, s.HexString = h => h, s.AddressString = h => h, s.BigIntString = h => h, s.IntNumber = function e(h) {
                return Math.floor(h)
            }, s.RegExpString = h => h, (h = s.ProviderType || (s.ProviderType = {})).CoinbaseWallet = "CoinbaseWallet", h.MetaMask = "MetaMask", h.Unselected = ""
        },
        81260: function(R, s, t) {
            "use strict";
            var e = this && this.__importDefault || function(j) {
                return j && j.__esModule ? j : {
                    default: j
                }
            };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.isInIFrame = s.createQrUrl = s.getFavicon = s.range = s.isBigNumber = s.ensureParsedJSONObject = s.ensureBN = s.ensureRegExpString = s.ensureIntNumber = s.ensureBuffer = s.ensureAddressString = s.ensureEvenLengthHexString = s.ensureHexString = s.isHexString = s.prepend0x = s.strip0x = s.has0xPrefix = s.hexStringFromIntNumber = s.intNumberFromHexString = s.bigIntStringFromBN = s.hexStringFromBuffer = s.hexStringToUint8Array = s.uint8ArrayToHex = s.randomBytesHex = void 0;
            const p = e(t(62662)),
                h = t(72956),
                f = t(23139),
                b = t(56703),
                r = /^[0-9]*$/,
                o = /^[a-f0-9]*$/;

            function g(j) {
                return [...j].map(ne => ne.toString(16).padStart(2, "0")).join("")
            }

            function y(j) {
                return j.startsWith("0x") || j.startsWith("0X")
            }

            function _(j) {
                return y(j) ? j.slice(2) : j
            }

            function v(j) {
                return y(j) ? "0x" + j.slice(2) : "0x" + j
            }

            function w(j) {
                if ("string" != typeof j) return !1;
                const ne = _(j).toLowerCase();
                return o.test(ne)
            }

            function C(j, ne = !1) {
                if ("string" == typeof j) {
                    const Y = _(j).toLowerCase();
                    if (o.test(Y)) return (0, b.HexString)(ne ? "0x" + Y : Y)
                }
                throw f.standardErrors.rpc.invalidParams(`"${String(j)}" is not a hexadecimal string`)
            }

            function E(j, ne = !1) {
                let Y = C(j, !1);
                return Y.length % 2 == 1 && (Y = (0, b.HexString)("0" + Y)), ne ? (0, b.HexString)("0x" + Y) : Y
            }

            function O(j) {
                if ("number" == typeof j && Number.isInteger(j)) return (0, b.IntNumber)(j);
                if ("string" == typeof j) {
                    if (r.test(j)) return (0, b.IntNumber)(Number(j));
                    if (w(j)) return (0, b.IntNumber)(new p.default(E(j, !1), 16).toNumber())
                }
                throw f.standardErrors.rpc.invalidParams(`Not an integer: ${String(j)}`)
            }

            function P(j) {
                if (null == j || "function" != typeof j.constructor) return !1;
                const {
                    constructor: ne
                } = j;
                return "function" == typeof ne.config && "number" == typeof ne.EUCLID
            }
            s.randomBytesHex = function u(j) {
                return g(crypto.getRandomValues(new Uint8Array(j)))
            }, s.uint8ArrayToHex = g, s.hexStringToUint8Array = function c(j) {
                return new Uint8Array(j.match(/.{1,2}/g).map(ne => parseInt(ne, 16)))
            }, s.hexStringFromBuffer = function d(j, ne = !1) {
                const Y = j.toString("hex");
                return (0, b.HexString)(ne ? "0x" + Y : Y)
            }, s.bigIntStringFromBN = function a(j) {
                return (0, b.BigIntString)(j.toString(10))
            }, s.intNumberFromHexString = function n(j) {
                return (0, b.IntNumber)(new p.default(E(j, !1), 16).toNumber())
            }, s.hexStringFromIntNumber = function l(j) {
                return (0, b.HexString)("0x" + new p.default(j).toString(16))
            }, s.has0xPrefix = y, s.strip0x = _, s.prepend0x = v, s.isHexString = w, s.ensureHexString = C, s.ensureEvenLengthHexString = E, s.ensureAddressString = function S(j) {
                if ("string" == typeof j) {
                    const ne = _(j).toLowerCase();
                    if (w(ne) && 40 === ne.length) return (0, b.AddressString)(v(ne))
                }
                throw f.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(j)}`)
            }, s.ensureBuffer = function x(j) {
                if (Buffer.isBuffer(j)) return j;
                if ("string" == typeof j) {
                    if (w(j)) {
                        const ne = E(j, !1);
                        return Buffer.from(ne, "hex")
                    }
                    return Buffer.from(j, "utf8")
                }
                throw f.standardErrors.rpc.invalidParams(`Not binary data: ${String(j)}`)
            }, s.ensureIntNumber = O, s.ensureRegExpString = function I(j) {
                if (j instanceof RegExp) return (0, b.RegExpString)(j.toString());
                throw f.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(j)}`)
            }, s.ensureBN = function T(j) {
                if (null !== j && (p.default.isBN(j) || P(j))) return new p.default(j.toString(10), 10);
                if ("number" == typeof j) return new p.default(O(j));
                if ("string" == typeof j) {
                    if (r.test(j)) return new p.default(j, 10);
                    if (w(j)) return new p.default(E(j, !1), 16)
                }
                throw f.standardErrors.rpc.invalidParams(`Not an integer: ${String(j)}`)
            }, s.ensureParsedJSONObject = function k(j) {
                if ("string" == typeof j) return JSON.parse(j);
                if ("object" == typeof j) return j;
                throw f.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(j)}`)
            }, s.isBigNumber = P, s.range = function Z(j, ne) {
                return Array.from({
                    length: ne - j
                }, (Y, G) => j + G)
            }, s.getFavicon = function ie() {
                const j = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]'),
                    {
                        protocol: ne,
                        host: Y
                    } = document.location,
                    G = j ? j.getAttribute("href") : null;
                return !G || G.startsWith("javascript:") ? null : G.startsWith("http://") || G.startsWith("https://") || G.startsWith("data:") ? G : G.startsWith("//") ? ne + G : `${ne}//${Y}${G}`
            }, s.createQrUrl = function se(j, ne, Y, G, K, X) {
                return `${Y}/#/link?${(0,h.stringify)({[G?"parent-id":"id"]:j,secret:ne,server:Y,v:K,chainId:X})}`
            }, s.isInIFrame = function ee() {
                try {
                    return null !== window.frameElement
                } catch {
                    return !1
                }
            }
        },
        37252: (R, s, t) => {
            const e = t(92814),
                p = t(62662);

            function h(l) {
                return l.startsWith("int[") ? "int256" + l.slice(3) : "int" === l ? "int256" : l.startsWith("uint[") ? "uint256" + l.slice(4) : "uint" === l ? "uint256" : l.startsWith("fixed[") ? "fixed128x128" + l.slice(5) : "fixed" === l ? "fixed128x128" : l.startsWith("ufixed[") ? "ufixed128x128" + l.slice(6) : "ufixed" === l ? "ufixed128x128" : l
            }

            function f(l) {
                return parseInt(/^\D+(\d+)$/.exec(l)[1], 10)
            }

            function b(l) {
                var y = /^\D+(\d+)x(\d+)$/.exec(l);
                return [parseInt(y[1], 10), parseInt(y[2], 10)]
            }

            function r(l) {
                var y = l.match(/(.*)\[(.*?)\]$/);
                return y ? "" === y[2] ? "dynamic" : parseInt(y[2], 10) : null
            }

            function o(l) {
                var y = typeof l;
                if ("string" === y) return e.isHexString(l) ? new p(e.stripHexPrefix(l), 16) : new p(l, 10);
                if ("number" === y) return new p(l);
                if (l.toArray) return l;
                throw new Error("Argument is not a number")
            }

            function u(l, y) {
                var _, v, w, C;
                if ("address" === l) return u("uint160", o(y));
                if ("bool" === l) return u("uint8", y ? 1 : 0);
                if ("string" === l) return u("bytes", new Buffer(y, "utf8"));
                if (function c(l) {
                        return l.lastIndexOf("]") === l.length - 1
                    }(l)) {
                    if (typeof y.length > "u") throw new Error("Not an array?");
                    if ("dynamic" !== (_ = r(l)) && 0 !== _ && y.length > _) throw new Error("Elements exceed array size: " + _);
                    for (C in w = [], l = l.slice(0, l.lastIndexOf("[")), "string" == typeof y && (y = JSON.parse(y)), y) w.push(u(l, y[C]));
                    if ("dynamic" === _) {
                        var E = u("uint256", y.length);
                        w.unshift(E)
                    }
                    return Buffer.concat(w)
                }
                if ("bytes" === l) return y = new Buffer(y), w = Buffer.concat([u("uint256", y.length), y]), y.length % 32 != 0 && (w = Buffer.concat([w, e.zeros(32 - y.length % 32)])), w;
                if (l.startsWith("bytes")) {
                    if ((_ = f(l)) < 1 || _ > 32) throw new Error("Invalid bytes<N> width: " + _);
                    return e.setLengthRight(y, 32)
                }
                if (l.startsWith("uint")) {
                    if ((_ = f(l)) % 8 || _ < 8 || _ > 256) throw new Error("Invalid uint<N> width: " + _);
                    if ((v = o(y)).bitLength() > _) throw new Error("Supplied uint exceeds width: " + _ + " vs " + v.bitLength());
                    if (v < 0) throw new Error("Supplied uint is negative");
                    return v.toArrayLike(Buffer, "be", 32)
                }
                if (l.startsWith("int")) {
                    if ((_ = f(l)) % 8 || _ < 8 || _ > 256) throw new Error("Invalid int<N> width: " + _);
                    if ((v = o(y)).bitLength() > _) throw new Error("Supplied int exceeds width: " + _ + " vs " + v.bitLength());
                    return v.toTwos(256).toArrayLike(Buffer, "be", 32)
                }
                if (l.startsWith("ufixed")) {
                    if (_ = b(l), (v = o(y)) < 0) throw new Error("Supplied ufixed is negative");
                    return u("uint256", v.mul(new p(2).pow(new p(_[1]))))
                }
                if (l.startsWith("fixed")) return _ = b(l), u("int256", o(y).mul(new p(2).pow(new p(_[1]))));
                throw new Error("Unsupported or invalid type: " + l)
            }

            function g(l) {
                return "string" === l || "bytes" === l || "dynamic" === r(l)
            }

            function a(l, y) {
                if (l.length !== y.length) throw new Error("Number of types are not matching the values");
                for (var _, v, w = [], C = 0; C < l.length; C++) {
                    var E = h(l[C]),
                        S = y[C];
                    if ("bytes" === E) w.push(S);
                    else if ("string" === E) w.push(new Buffer(S, "utf8"));
                    else if ("bool" === E) w.push(new Buffer(S ? "01" : "00", "hex"));
                    else if ("address" === E) w.push(e.setLength(S, 20));
                    else if (E.startsWith("bytes")) {
                        if ((_ = f(E)) < 1 || _ > 32) throw new Error("Invalid bytes<N> width: " + _);
                        w.push(e.setLengthRight(S, _))
                    } else if (E.startsWith("uint")) {
                        if ((_ = f(E)) % 8 || _ < 8 || _ > 256) throw new Error("Invalid uint<N> width: " + _);
                        if ((v = o(S)).bitLength() > _) throw new Error("Supplied uint exceeds width: " + _ + " vs " + v.bitLength());
                        w.push(v.toArrayLike(Buffer, "be", _ / 8))
                    } else {
                        if (!E.startsWith("int")) throw new Error("Unsupported or invalid type: " + E);
                        if ((_ = f(E)) % 8 || _ < 8 || _ > 256) throw new Error("Invalid int<N> width: " + _);
                        if ((v = o(S)).bitLength() > _) throw new Error("Supplied int exceeds width: " + _ + " vs " + v.bitLength());
                        w.push(v.toTwos(_).toArrayLike(Buffer, "be", _ / 8))
                    }
                }
                return Buffer.concat(w)
            }
            R.exports = {
                rawEncode: function d(l, y) {
                    var _ = [],
                        v = [],
                        w = 32 * l.length;
                    for (var C in l) {
                        var E = h(l[C]),
                            x = u(E, y[C]);
                        g(E) ? (_.push(u("uint256", w)), v.push(x), w += x.length) : _.push(x)
                    }
                    return Buffer.concat(_.concat(v))
                },
                solidityPack: a,
                soliditySHA3: function n(l, y) {
                    return e.keccak(a(l, y))
                }
            }
        },
        83348: (R, s, t) => {
            const e = t(92814),
                p = t(37252),
                h = {
                    type: "object",
                    properties: {
                        types: {
                            type: "object",
                            additionalProperties: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string"
                                        },
                                        type: {
                                            type: "string"
                                        }
                                    },
                                    required: ["name", "type"]
                                }
                            }
                        },
                        primaryType: {
                            type: "string"
                        },
                        domain: {
                            type: "object"
                        },
                        message: {
                            type: "object"
                        }
                    },
                    required: ["types", "primaryType", "domain", "message"]
                },
                f = {
                    encodeData(r, o, u, g = !0) {
                        const c = ["bytes32"],
                            d = [this.hashType(r, u)];
                        if (g) {
                            const a = (n, l, y) => {
                                if (void 0 !== u[l]) return ["bytes32", null == y ? "0x0000000000000000000000000000000000000000000000000000000000000000" : e.keccak(this.encodeData(l, y, u, g))];
                                if (void 0 === y) throw new Error(`missing value for field ${n} of type ${l}`);
                                if ("bytes" === l) return ["bytes32", e.keccak(y)];
                                if ("string" === l) return "string" == typeof y && (y = Buffer.from(y, "utf8")), ["bytes32", e.keccak(y)];
                                if (l.lastIndexOf("]") === l.length - 1) {
                                    const _ = l.slice(0, l.lastIndexOf("[")),
                                        v = y.map(w => a(n, _, w));
                                    return ["bytes32", e.keccak(p.rawEncode(v.map(([w]) => w), v.map(([, w]) => w)))]
                                }
                                return [l, y]
                            };
                            for (const n of u[r]) {
                                const [l, y] = a(n.name, n.type, o[n.name]);
                                c.push(l), d.push(y)
                            }
                        } else
                            for (const a of u[r]) {
                                let n = o[a.name];
                                if (void 0 !== n)
                                    if ("bytes" === a.type) c.push("bytes32"), n = e.keccak(n), d.push(n);
                                    else if ("string" === a.type) c.push("bytes32"), "string" == typeof n && (n = Buffer.from(n, "utf8")), n = e.keccak(n), d.push(n);
                                else if (void 0 !== u[a.type]) c.push("bytes32"), n = e.keccak(this.encodeData(a.type, n, u, g)), d.push(n);
                                else {
                                    if (a.type.lastIndexOf("]") === a.type.length - 1) throw new Error("Arrays currently unimplemented in encodeData");
                                    c.push(a.type), d.push(n)
                                }
                            }
                        return p.rawEncode(c, d)
                    },
                    encodeType(r, o) {
                        let u = "",
                            g = this.findTypeDependencies(r, o).filter(c => c !== r);
                        g = [r].concat(g.sort());
                        for (const c of g) {
                            if (!o[c]) throw new Error("No type definition specified: " + c);
                            u += c + "(" + o[c].map(({
                                name: a,
                                type: n
                            }) => n + " " + a).join(",") + ")"
                        }
                        return u
                    },
                    findTypeDependencies(r, o, u = []) {
                        if (r = r.match(/^\w*/)[0], u.includes(r) || void 0 === o[r]) return u;
                        u.push(r);
                        for (const g of o[r])
                            for (const c of this.findTypeDependencies(g.type, o, u)) !u.includes(c) && u.push(c);
                        return u
                    },
                    hashStruct(r, o, u, g = !0) {
                        return e.keccak(this.encodeData(r, o, u, g))
                    },
                    hashType(r, o) {
                        return e.keccak(this.encodeType(r, o))
                    },
                    sanitizeData(r) {
                        const o = {};
                        for (const u in h.properties) r[u] && (o[u] = r[u]);
                        return o.types && (o.types = Object.assign({
                            EIP712Domain: []
                        }, o.types)), o
                    },
                    hash(r, o = !0) {
                        const u = this.sanitizeData(r),
                            g = [Buffer.from("1901", "hex")];
                        return g.push(this.hashStruct("EIP712Domain", u.domain, u.types, o)), "EIP712Domain" !== u.primaryType && g.push(this.hashStruct(u.primaryType, u.message, u.types, o)), e.keccak(Buffer.concat(g))
                    }
                };
            R.exports = {
                TYPED_MESSAGE_SCHEMA: h,
                TypedDataUtils: f,
                hashForSignTypedDataLegacy: function(r) {
                    return function b(r) {
                        const o = new Error("Expect argument to be non-empty array");
                        if ("object" != typeof r || !r.length) throw o;
                        const u = r.map(function(d) {
                                return "bytes" === d.type ? e.toBuffer(d.value) : d.value
                            }),
                            g = r.map(function(d) {
                                return d.type
                            }),
                            c = r.map(function(d) {
                                if (!d.name) throw o;
                                return d.type + " " + d.name
                            });
                        return p.soliditySHA3(["bytes32", "bytes32"], [p.soliditySHA3(new Array(r.length).fill("string"), c), p.soliditySHA3(g, u)])
                    }(r.data)
                },
                hashForSignTypedData_v3: function(r) {
                    return f.hash(r.data, !1)
                },
                hashForSignTypedData_v4: function(r) {
                    return f.hash(r.data)
                }
            }
        },
        92814: (R, s, t) => {
            const e = t(70568),
                p = t(62662);

            function h(a) {
                return Buffer.allocUnsafe(a).fill(0)
            }

            function f(a, n, l) {
                const y = h(n);
                return a = r(a), l ? a.length < n ? (a.copy(y), y) : a.slice(0, n) : a.length < n ? (a.copy(y, n - a.length), y) : a.slice(-n)
            }

            function r(a) {
                if (!Buffer.isBuffer(a))
                    if (Array.isArray(a)) a = Buffer.from(a);
                    else if ("string" == typeof a) a = c(a) ? Buffer.from(function g(a) {
                    return a.length % 2 ? "0" + a : a
                }(d(a)), "hex") : Buffer.from(a);
                else if ("number" == typeof a) a = intToBuffer(a);
                else if (null == a) a = Buffer.allocUnsafe(0);
                else if (p.isBN(a)) a = a.toArrayLike(Buffer);
                else {
                    if (!a.toArray) throw new Error("invalid type");
                    a = Buffer.from(a.toArray())
                }
                return a
            }

            function c(a) {
                return "string" == typeof a && a.match(/^0x[0-9A-Fa-f]*$/)
            }

            function d(a) {
                return "string" == typeof a && a.startsWith("0x") ? a.slice(2) : a
            }
            R.exports = {
                zeros: h,
                setLength: f,
                setLengthRight: function b(a, n) {
                    return f(a, n, !0)
                },
                isHexString: c,
                stripHexPrefix: d,
                toBuffer: r,
                bufferToHex: function o(a) {
                    return "0x" + (a = r(a)).toString("hex")
                },
                keccak: function u(a, n) {
                    return a = r(a), n || (n = 256), e("keccak" + n).update(a).digest()
                }
            }
        },
        38167: R => {
            function s(a) {
                this.mode = e.MODE_8BIT_BYTE, this.data = a, this.parsedData = [];
                for (var n = 0, l = this.data.length; n < l; n++) {
                    var y = [],
                        _ = this.data.charCodeAt(n);
                    _ > 65536 ? (y[0] = 240 | (1835008 & _) >>> 18, y[1] = 128 | (258048 & _) >>> 12, y[2] = 128 | (4032 & _) >>> 6, y[3] = 128 | 63 & _) : _ > 2048 ? (y[0] = 224 | (61440 & _) >>> 12, y[1] = 128 | (4032 & _) >>> 6, y[2] = 128 | 63 & _) : _ > 128 ? (y[0] = 192 | (1984 & _) >>> 6, y[1] = 128 | 63 & _) : y[0] = _, this.parsedData.push(y)
                }
                this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
            }

            function t(a, n) {
                this.typeNumber = a, this.errorCorrectLevel = n, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
            }
            s.prototype = {
                getLength: function(a) {
                    return this.parsedData.length
                },
                write: function(a) {
                    for (var n = 0, l = this.parsedData.length; n < l; n++) a.put(this.parsedData[n], 8)
                }
            }, t.prototype = {
                addData: function(a) {
                    var n = new s(a);
                    this.dataList.push(n), this.dataCache = null
                },
                isDark: function(a, n) {
                    if (a < 0 || this.moduleCount <= a || n < 0 || this.moduleCount <= n) throw new Error(a + "," + n);
                    return this.modules[a][n]
                },
                getModuleCount: function() {
                    return this.moduleCount
                },
                make: function() {
                    this.makeImpl(!1, this.getBestMaskPattern())
                },
                makeImpl: function(a, n) {
                    this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
                    for (var l = 0; l < this.moduleCount; l++) {
                        this.modules[l] = new Array(this.moduleCount);
                        for (var y = 0; y < this.moduleCount; y++) this.modules[l][y] = null
                    }
                    this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(a, n), this.typeNumber >= 7 && this.setupTypeNumber(a), null == this.dataCache && (this.dataCache = t.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, n)
                },
                setupPositionProbePattern: function(a, n) {
                    for (var l = -1; l <= 7; l++)
                        if (!(a + l <= -1 || this.moduleCount <= a + l))
                            for (var y = -1; y <= 7; y++) n + y <= -1 || this.moduleCount <= n + y || (this.modules[a + l][n + y] = 0 <= l && l <= 6 && (0 == y || 6 == y) || 0 <= y && y <= 6 && (0 == l || 6 == l) || 2 <= l && l <= 4 && 2 <= y && y <= 4)
                },
                getBestMaskPattern: function() {
                    for (var a = 0, n = 0, l = 0; l < 8; l++) {
                        this.makeImpl(!0, l);
                        var y = f.getLostPoint(this);
                        (0 == l || a > y) && (a = y, n = l)
                    }
                    return n
                },
                createMovieClip: function(a, n, l) {
                    var y = a.createEmptyMovieClip(n, l);
                    this.make();
                    for (var v = 0; v < this.modules.length; v++)
                        for (var w = 1 * v, C = 0; C < this.modules[v].length; C++) {
                            var E = 1 * C;
                            this.modules[v][C] && (y.beginFill(0, 100), y.moveTo(E, w), y.lineTo(E + 1, w), y.lineTo(E + 1, w + 1), y.lineTo(E, w + 1), y.endFill())
                        }
                    return y
                },
                setupTimingPattern: function() {
                    for (var a = 8; a < this.moduleCount - 8; a++) null == this.modules[a][6] && (this.modules[a][6] = a % 2 == 0);
                    for (var n = 8; n < this.moduleCount - 8; n++) null == this.modules[6][n] && (this.modules[6][n] = n % 2 == 0)
                },
                setupPositionAdjustPattern: function() {
                    for (var a = f.getPatternPosition(this.typeNumber), n = 0; n < a.length; n++)
                        for (var l = 0; l < a.length; l++) {
                            var y = a[n],
                                _ = a[l];
                            if (null == this.modules[y][_])
                                for (var v = -2; v <= 2; v++)
                                    for (var w = -2; w <= 2; w++) this.modules[y + v][_ + w] = -2 == v || 2 == v || -2 == w || 2 == w || 0 == v && 0 == w
                        }
                },
                setupTypeNumber: function(a) {
                    for (var n = f.getBCHTypeNumber(this.typeNumber), l = 0; l < 18; l++) {
                        var y = !a && 1 == (n >> l & 1);
                        this.modules[Math.floor(l / 3)][l % 3 + this.moduleCount - 8 - 3] = y
                    }
                    for (l = 0; l < 18; l++) y = !a && 1 == (n >> l & 1), this.modules[l % 3 + this.moduleCount - 8 - 3][Math.floor(l / 3)] = y
                },
                setupTypeInfo: function(a, n) {
                    for (var y = f.getBCHTypeInfo(this.errorCorrectLevel << 3 | n), _ = 0; _ < 15; _++) {
                        var v = !a && 1 == (y >> _ & 1);
                        _ < 6 ? this.modules[_][8] = v : _ < 8 ? this.modules[_ + 1][8] = v : this.modules[this.moduleCount - 15 + _][8] = v
                    }
                    for (_ = 0; _ < 15; _++) v = !a && 1 == (y >> _ & 1), _ < 8 ? this.modules[8][this.moduleCount - _ - 1] = v : _ < 9 ? this.modules[8][15 - _ - 1 + 1] = v : this.modules[8][15 - _ - 1] = v;
                    this.modules[this.moduleCount - 8][8] = !a
                },
                mapData: function(a, n) {
                    for (var l = -1, y = this.moduleCount - 1, _ = 7, v = 0, w = this.moduleCount - 1; w > 0; w -= 2)
                        for (6 == w && w--;;) {
                            for (var C = 0; C < 2; C++)
                                if (null == this.modules[y][w - C]) {
                                    var E = !1;
                                    v < a.length && (E = 1 == (a[v] >>> _ & 1)), f.getMask(n, y, w - C) && (E = !E), this.modules[y][w - C] = E, -1 == --_ && (v++, _ = 7)
                                }
                            if ((y += l) < 0 || this.moduleCount <= y) {
                                y -= l, l = -l;
                                break
                            }
                        }
                }
            }, t.PAD0 = 236, t.PAD1 = 17, t.createData = function(a, n, l) {
                for (var y = u.getRSBlocks(a, n), _ = new g, v = 0; v < l.length; v++) {
                    var w = l[v];
                    _.put(w.mode, 4), _.put(w.getLength(), f.getLengthInBits(w.mode, a)), w.write(_)
                }
                var C = 0;
                for (v = 0; v < y.length; v++) C += y[v].dataCount;
                if (_.getLengthInBits() > 8 * C) throw new Error("code length overflow. (" + _.getLengthInBits() + ">" + 8 * C + ")");
                for (_.getLengthInBits() + 4 <= 8 * C && _.put(0, 4); _.getLengthInBits() % 8 != 0;) _.putBit(!1);
                for (; !(_.getLengthInBits() >= 8 * C || (_.put(t.PAD0, 8), _.getLengthInBits() >= 8 * C));) _.put(t.PAD1, 8);
                return t.createBytes(_, y)
            }, t.createBytes = function(a, n) {
                for (var l = 0, y = 0, _ = 0, v = new Array(n.length), w = new Array(n.length), C = 0; C < n.length; C++) {
                    var E = n[C].dataCount,
                        S = n[C].totalCount - E;
                    y = Math.max(y, E), _ = Math.max(_, S), v[C] = new Array(E);
                    for (var x = 0; x < v[C].length; x++) v[C][x] = 255 & a.buffer[x + l];
                    l += E;
                    var O = f.getErrorCorrectPolynomial(S),
                        T = new o(v[C], O.getLength() - 1).mod(O);
                    for (w[C] = new Array(O.getLength() - 1), x = 0; x < w[C].length; x++) {
                        var k = x + T.getLength() - w[C].length;
                        w[C][x] = k >= 0 ? T.get(k) : 0
                    }
                }
                var P = 0;
                for (x = 0; x < n.length; x++) P += n[x].totalCount;
                var Z = new Array(P),
                    ie = 0;
                for (x = 0; x < y; x++)
                    for (C = 0; C < n.length; C++) x < v[C].length && (Z[ie++] = v[C][x]);
                for (x = 0; x < _; x++)
                    for (C = 0; C < n.length; C++) x < w[C].length && (Z[ie++] = w[C][x]);
                return Z
            };
            for (var e = {
                    MODE_NUMBER: 1,
                    MODE_ALPHA_NUM: 2,
                    MODE_8BIT_BYTE: 4,
                    MODE_KANJI: 8
                }, p = {
                    L: 1,
                    M: 0,
                    Q: 3,
                    H: 2
                }, h = {
                    PATTERN000: 0,
                    PATTERN001: 1,
                    PATTERN010: 2,
                    PATTERN011: 3,
                    PATTERN100: 4,
                    PATTERN101: 5,
                    PATTERN110: 6,
                    PATTERN111: 7
                }, f = {
                    PATTERN_POSITION_TABLE: [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(a) {
                        for (var n = a << 10; f.getBCHDigit(n) - f.getBCHDigit(f.G15) >= 0;) n ^= f.G15 << f.getBCHDigit(n) - f.getBCHDigit(f.G15);
                        return (a << 10 | n) ^ f.G15_MASK
                    },
                    getBCHTypeNumber: function(a) {
                        for (var n = a << 12; f.getBCHDigit(n) - f.getBCHDigit(f.G18) >= 0;) n ^= f.G18 << f.getBCHDigit(n) - f.getBCHDigit(f.G18);
                        return a << 12 | n
                    },
                    getBCHDigit: function(a) {
                        for (var n = 0; 0 != a;) n++, a >>>= 1;
                        return n
                    },
                    getPatternPosition: function(a) {
                        return f.PATTERN_POSITION_TABLE[a - 1]
                    },
                    getMask: function(a, n, l) {
                        switch (a) {
                            case h.PATTERN000:
                                return (n + l) % 2 == 0;
                            case h.PATTERN001:
                                return n % 2 == 0;
                            case h.PATTERN010:
                                return l % 3 == 0;
                            case h.PATTERN011:
                                return (n + l) % 3 == 0;
                            case h.PATTERN100:
                                return (Math.floor(n / 2) + Math.floor(l / 3)) % 2 == 0;
                            case h.PATTERN101:
                                return n * l % 2 + n * l % 3 == 0;
                            case h.PATTERN110:
                                return (n * l % 2 + n * l % 3) % 2 == 0;
                            case h.PATTERN111:
                                return (n * l % 3 + (n + l) % 2) % 2 == 0;
                            default:
                                throw new Error("bad maskPattern:" + a)
                        }
                    },
                    getErrorCorrectPolynomial: function(a) {
                        for (var n = new o([1], 0), l = 0; l < a; l++) n = n.multiply(new o([1, b.gexp(l)], 0));
                        return n
                    },
                    getLengthInBits: function(a, n) {
                        if (1 <= n && n < 10) switch (a) {
                            case e.MODE_NUMBER:
                                return 10;
                            case e.MODE_ALPHA_NUM:
                                return 9;
                            case e.MODE_8BIT_BYTE:
                            case e.MODE_KANJI:
                                return 8;
                            default:
                                throw new Error("mode:" + a)
                        } else if (n < 27) switch (a) {
                            case e.MODE_NUMBER:
                                return 12;
                            case e.MODE_ALPHA_NUM:
                                return 11;
                            case e.MODE_8BIT_BYTE:
                                return 16;
                            case e.MODE_KANJI:
                                return 10;
                            default:
                                throw new Error("mode:" + a)
                        } else {
                            if (!(n < 41)) throw new Error("type:" + n);
                            switch (a) {
                                case e.MODE_NUMBER:
                                    return 14;
                                case e.MODE_ALPHA_NUM:
                                    return 13;
                                case e.MODE_8BIT_BYTE:
                                    return 16;
                                case e.MODE_KANJI:
                                    return 12;
                                default:
                                    throw new Error("mode:" + a)
                            }
                        }
                    },
                    getLostPoint: function(a) {
                        for (var n = a.getModuleCount(), l = 0, y = 0; y < n; y++)
                            for (var _ = 0; _ < n; _++) {
                                for (var v = 0, w = a.isDark(y, _), C = -1; C <= 1; C++)
                                    if (!(y + C < 0 || n <= y + C))
                                        for (var E = -1; E <= 1; E++) _ + E < 0 || n <= _ + E || 0 == C && 0 == E || w == a.isDark(y + C, _ + E) && v++;
                                v > 5 && (l += 3 + v - 5)
                            }
                        for (y = 0; y < n - 1; y++)
                            for (_ = 0; _ < n - 1; _++) {
                                var S = 0;
                                a.isDark(y, _) && S++, a.isDark(y + 1, _) && S++, a.isDark(y, _ + 1) && S++, a.isDark(y + 1, _ + 1) && S++, (0 == S || 4 == S) && (l += 3)
                            }
                        for (y = 0; y < n; y++)
                            for (_ = 0; _ < n - 6; _++) a.isDark(y, _) && !a.isDark(y, _ + 1) && a.isDark(y, _ + 2) && a.isDark(y, _ + 3) && a.isDark(y, _ + 4) && !a.isDark(y, _ + 5) && a.isDark(y, _ + 6) && (l += 40);
                        for (_ = 0; _ < n; _++)
                            for (y = 0; y < n - 6; y++) a.isDark(y, _) && !a.isDark(y + 1, _) && a.isDark(y + 2, _) && a.isDark(y + 3, _) && a.isDark(y + 4, _) && !a.isDark(y + 5, _) && a.isDark(y + 6, _) && (l += 40);
                        var x = 0;
                        for (_ = 0; _ < n; _++)
                            for (y = 0; y < n; y++) a.isDark(y, _) && x++;
                        return l + Math.abs(100 * x / n / n - 50) / 5 * 10
                    }
                }, b = {
                    glog: function(a) {
                        if (a < 1) throw new Error("glog(" + a + ")");
                        return b.LOG_TABLE[a]
                    },
                    gexp: function(a) {
                        for (; a < 0;) a += 255;
                        for (; a >= 256;) a -= 255;
                        return b.EXP_TABLE[a]
                    },
                    EXP_TABLE: new Array(256),
                    LOG_TABLE: new Array(256)
                }, r = 0; r < 8; r++) b.EXP_TABLE[r] = 1 << r;
            for (r = 8; r < 256; r++) b.EXP_TABLE[r] = b.EXP_TABLE[r - 4] ^ b.EXP_TABLE[r - 5] ^ b.EXP_TABLE[r - 6] ^ b.EXP_TABLE[r - 8];
            for (r = 0; r < 255; r++) b.LOG_TABLE[b.EXP_TABLE[r]] = r;

            function o(a, n) {
                if (null == a.length) throw new Error(a.length + "/" + n);
                for (var l = 0; l < a.length && 0 == a[l];) l++;
                this.num = new Array(a.length - l + n);
                for (var y = 0; y < a.length - l; y++) this.num[y] = a[y + l]
            }

            function u(a, n) {
                this.totalCount = a, this.dataCount = n
            }

            function g() {
                this.buffer = [], this.length = 0
            }
            o.prototype = {
                get: function(a) {
                    return this.num[a]
                },
                getLength: function() {
                    return this.num.length
                },
                multiply: function(a) {
                    for (var n = new Array(this.getLength() + a.getLength() - 1), l = 0; l < this.getLength(); l++)
                        for (var y = 0; y < a.getLength(); y++) n[l + y] ^= b.gexp(b.glog(this.get(l)) + b.glog(a.get(y)));
                    return new o(n, 0)
                },
                mod: function(a) {
                    if (this.getLength() - a.getLength() < 0) return this;
                    for (var n = b.glog(this.get(0)) - b.glog(a.get(0)), l = new Array(this.getLength()), y = 0; y < this.getLength(); y++) l[y] = this.get(y);
                    for (y = 0; y < a.getLength(); y++) l[y] ^= b.gexp(b.glog(a.get(y)) + n);
                    return new o(l, 0).mod(a)
                }
            }, u.RS_BLOCK_TABLE = [
                [1, 26, 19],
                [1, 26, 16],
                [1, 26, 13],
                [1, 26, 9],
                [1, 44, 34],
                [1, 44, 28],
                [1, 44, 22],
                [1, 44, 16],
                [1, 70, 55],
                [1, 70, 44],
                [2, 35, 17],
                [2, 35, 13],
                [1, 100, 80],
                [2, 50, 32],
                [2, 50, 24],
                [4, 25, 9],
                [1, 134, 108],
                [2, 67, 43],
                [2, 33, 15, 2, 34, 16],
                [2, 33, 11, 2, 34, 12],
                [2, 86, 68],
                [4, 43, 27],
                [4, 43, 19],
                [4, 43, 15],
                [2, 98, 78],
                [4, 49, 31],
                [2, 32, 14, 4, 33, 15],
                [4, 39, 13, 1, 40, 14],
                [2, 121, 97],
                [2, 60, 38, 2, 61, 39],
                [4, 40, 18, 2, 41, 19],
                [4, 40, 14, 2, 41, 15],
                [2, 146, 116],
                [3, 58, 36, 2, 59, 37],
                [4, 36, 16, 4, 37, 17],
                [4, 36, 12, 4, 37, 13],
                [2, 86, 68, 2, 87, 69],
                [4, 69, 43, 1, 70, 44],
                [6, 43, 19, 2, 44, 20],
                [6, 43, 15, 2, 44, 16],
                [4, 101, 81],
                [1, 80, 50, 4, 81, 51],
                [4, 50, 22, 4, 51, 23],
                [3, 36, 12, 8, 37, 13],
                [2, 116, 92, 2, 117, 93],
                [6, 58, 36, 2, 59, 37],
                [4, 46, 20, 6, 47, 21],
                [7, 42, 14, 4, 43, 15],
                [4, 133, 107],
                [8, 59, 37, 1, 60, 38],
                [8, 44, 20, 4, 45, 21],
                [12, 33, 11, 4, 34, 12],
                [3, 145, 115, 1, 146, 116],
                [4, 64, 40, 5, 65, 41],
                [11, 36, 16, 5, 37, 17],
                [11, 36, 12, 5, 37, 13],
                [5, 109, 87, 1, 110, 88],
                [5, 65, 41, 5, 66, 42],
                [5, 54, 24, 7, 55, 25],
                [11, 36, 12],
                [5, 122, 98, 1, 123, 99],
                [7, 73, 45, 3, 74, 46],
                [15, 43, 19, 2, 44, 20],
                [3, 45, 15, 13, 46, 16],
                [1, 135, 107, 5, 136, 108],
                [10, 74, 46, 1, 75, 47],
                [1, 50, 22, 15, 51, 23],
                [2, 42, 14, 17, 43, 15],
                [5, 150, 120, 1, 151, 121],
                [9, 69, 43, 4, 70, 44],
                [17, 50, 22, 1, 51, 23],
                [2, 42, 14, 19, 43, 15],
                [3, 141, 113, 4, 142, 114],
                [3, 70, 44, 11, 71, 45],
                [17, 47, 21, 4, 48, 22],
                [9, 39, 13, 16, 40, 14],
                [3, 135, 107, 5, 136, 108],
                [3, 67, 41, 13, 68, 42],
                [15, 54, 24, 5, 55, 25],
                [15, 43, 15, 10, 44, 16],
                [4, 144, 116, 4, 145, 117],
                [17, 68, 42],
                [17, 50, 22, 6, 51, 23],
                [19, 46, 16, 6, 47, 17],
                [2, 139, 111, 7, 140, 112],
                [17, 74, 46],
                [7, 54, 24, 16, 55, 25],
                [34, 37, 13],
                [4, 151, 121, 5, 152, 122],
                [4, 75, 47, 14, 76, 48],
                [11, 54, 24, 14, 55, 25],
                [16, 45, 15, 14, 46, 16],
                [6, 147, 117, 4, 148, 118],
                [6, 73, 45, 14, 74, 46],
                [11, 54, 24, 16, 55, 25],
                [30, 46, 16, 2, 47, 17],
                [8, 132, 106, 4, 133, 107],
                [8, 75, 47, 13, 76, 48],
                [7, 54, 24, 22, 55, 25],
                [22, 45, 15, 13, 46, 16],
                [10, 142, 114, 2, 143, 115],
                [19, 74, 46, 4, 75, 47],
                [28, 50, 22, 6, 51, 23],
                [33, 46, 16, 4, 47, 17],
                [8, 152, 122, 4, 153, 123],
                [22, 73, 45, 3, 74, 46],
                [8, 53, 23, 26, 54, 24],
                [12, 45, 15, 28, 46, 16],
                [3, 147, 117, 10, 148, 118],
                [3, 73, 45, 23, 74, 46],
                [4, 54, 24, 31, 55, 25],
                [11, 45, 15, 31, 46, 16],
                [7, 146, 116, 7, 147, 117],
                [21, 73, 45, 7, 74, 46],
                [1, 53, 23, 37, 54, 24],
                [19, 45, 15, 26, 46, 16],
                [5, 145, 115, 10, 146, 116],
                [19, 75, 47, 10, 76, 48],
                [15, 54, 24, 25, 55, 25],
                [23, 45, 15, 25, 46, 16],
                [13, 145, 115, 3, 146, 116],
                [2, 74, 46, 29, 75, 47],
                [42, 54, 24, 1, 55, 25],
                [23, 45, 15, 28, 46, 16],
                [17, 145, 115],
                [10, 74, 46, 23, 75, 47],
                [10, 54, 24, 35, 55, 25],
                [19, 45, 15, 35, 46, 16],
                [17, 145, 115, 1, 146, 116],
                [14, 74, 46, 21, 75, 47],
                [29, 54, 24, 19, 55, 25],
                [11, 45, 15, 46, 46, 16],
                [13, 145, 115, 6, 146, 116],
                [14, 74, 46, 23, 75, 47],
                [44, 54, 24, 7, 55, 25],
                [59, 46, 16, 1, 47, 17],
                [12, 151, 121, 7, 152, 122],
                [12, 75, 47, 26, 76, 48],
                [39, 54, 24, 14, 55, 25],
                [22, 45, 15, 41, 46, 16],
                [6, 151, 121, 14, 152, 122],
                [6, 75, 47, 34, 76, 48],
                [46, 54, 24, 10, 55, 25],
                [2, 45, 15, 64, 46, 16],
                [17, 152, 122, 4, 153, 123],
                [29, 74, 46, 14, 75, 47],
                [49, 54, 24, 10, 55, 25],
                [24, 45, 15, 46, 46, 16],
                [4, 152, 122, 18, 153, 123],
                [13, 74, 46, 32, 75, 47],
                [48, 54, 24, 14, 55, 25],
                [42, 45, 15, 32, 46, 16],
                [20, 147, 117, 4, 148, 118],
                [40, 75, 47, 7, 76, 48],
                [43, 54, 24, 22, 55, 25],
                [10, 45, 15, 67, 46, 16],
                [19, 148, 118, 6, 149, 119],
                [18, 75, 47, 31, 76, 48],
                [34, 54, 24, 34, 55, 25],
                [20, 45, 15, 61, 46, 16]
            ], u.getRSBlocks = function(a, n) {
                var l = u.getRsBlockTable(a, n);
                if (null == l) throw new Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + n);
                for (var y = l.length / 3, _ = [], v = 0; v < y; v++)
                    for (var w = l[3 * v + 0], C = l[3 * v + 1], E = l[3 * v + 2], S = 0; S < w; S++) _.push(new u(C, E));
                return _
            }, u.getRsBlockTable = function(a, n) {
                switch (n) {
                    case p.L:
                        return u.RS_BLOCK_TABLE[4 * (a - 1) + 0];
                    case p.M:
                        return u.RS_BLOCK_TABLE[4 * (a - 1) + 1];
                    case p.Q:
                        return u.RS_BLOCK_TABLE[4 * (a - 1) + 2];
                    case p.H:
                        return u.RS_BLOCK_TABLE[4 * (a - 1) + 3];
                    default:
                        return
                }
            }, g.prototype = {
                get: function(a) {
                    var n = Math.floor(a / 8);
                    return 1 == (this.buffer[n] >>> 7 - a % 8 & 1)
                },
                put: function(a, n) {
                    for (var l = 0; l < n; l++) this.putBit(1 == (a >>> n - l - 1 & 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(a) {
                    var n = Math.floor(this.length / 8);
                    this.buffer.length <= n && this.buffer.push(0), a && (this.buffer[n] |= 128 >>> this.length % 8), this.length++
                }
            };
            var c = [
                [17, 14, 11, 7],
                [32, 26, 20, 14],
                [53, 42, 32, 24],
                [78, 62, 46, 34],
                [106, 84, 60, 44],
                [134, 106, 74, 58],
                [154, 122, 86, 64],
                [192, 152, 108, 84],
                [230, 180, 130, 98],
                [271, 213, 151, 119],
                [321, 251, 177, 137],
                [367, 287, 203, 155],
                [425, 331, 241, 177],
                [458, 362, 258, 194],
                [520, 412, 292, 220],
                [586, 450, 322, 250],
                [644, 504, 364, 280],
                [718, 560, 394, 310],
                [792, 624, 442, 338],
                [858, 666, 482, 382],
                [929, 711, 509, 403],
                [1003, 779, 565, 439],
                [1091, 857, 611, 461],
                [1171, 911, 661, 511],
                [1273, 997, 715, 535],
                [1367, 1059, 751, 593],
                [1465, 1125, 805, 625],
                [1528, 1190, 868, 658],
                [1628, 1264, 908, 698],
                [1732, 1370, 982, 742],
                [1840, 1452, 1030, 790],
                [1952, 1538, 1112, 842],
                [2068, 1628, 1168, 898],
                [2188, 1722, 1228, 958],
                [2303, 1809, 1283, 983],
                [2431, 1911, 1351, 1051],
                [2563, 1989, 1423, 1093],
                [2699, 2099, 1499, 1139],
                [2809, 2213, 1579, 1219],
                [2953, 2331, 1663, 1273]
            ];

            function d(a) {
                if (this.options = {
                        padding: 4,
                        width: 256,
                        height: 256,
                        typeNumber: 4,
                        color: "#000000",
                        background: "#ffffff",
                        ecl: "M",
                        image: {
                            svg: "",
                            width: 0,
                            height: 0
                        }
                    }, "string" == typeof a && (a = {
                        content: a
                    }), a)
                    for (var l in a) this.options[l] = a[l];
                if ("string" != typeof this.options.content) throw new Error("Expected 'content' as string!");
                if (0 === this.options.content.length) throw new Error("Expected 'content' to be non-empty!");
                if (!(this.options.padding >= 0)) throw new Error("Expected 'padding' value to be non-negative!");
                if (!(this.options.width > 0 && this.options.height > 0)) throw new Error("Expected 'width' or 'height' value to be higher than zero!");
                var w = this.options.content,
                    C = function _(S, x) {
                        for (var O = function v(S) {
                                var x = encodeURI(S).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
                                return x.length + (x.length != S ? 3 : 0)
                            }(S), I = 1, T = 0, k = 0, P = c.length; k <= P; k++) {
                            var Z = c[k];
                            if (!Z) throw new Error("Content too long: expected " + T + " but got " + O);
                            switch (x) {
                                case "L":
                                    T = Z[0];
                                    break;
                                case "M":
                                    T = Z[1];
                                    break;
                                case "Q":
                                    T = Z[2];
                                    break;
                                case "H":
                                    T = Z[3];
                                    break;
                                default:
                                    throw new Error("Unknwon error correction level: " + x)
                            }
                            if (O <= T) break;
                            I++
                        }
                        if (I > c.length) throw new Error("Content too long");
                        return I
                    }(w, this.options.ecl),
                    E = function y(S) {
                        switch (S) {
                            case "L":
                                return p.L;
                            case "M":
                                return p.M;
                            case "Q":
                                return p.Q;
                            case "H":
                                return p.H;
                            default:
                                throw new Error("Unknwon error correction level: " + S)
                        }
                    }(this.options.ecl);
                this.qrcode = new t(C, E), this.qrcode.addData(w), this.qrcode.make()
            }
            d.prototype.svg = function(a) {
                var n = this.options || {},
                    l = this.qrcode.modules;
                typeof a > "u" && (a = {
                    container: n.container || "svg"
                });
                for (var y = !(typeof n.pretty < "u" && !n.pretty), _ = y ? "  " : "", v = y ? "\r\n" : "", w = n.width, C = n.height, E = l.length, S = w / (E + 2 * n.padding), x = C / (E + 2 * n.padding), O = typeof n.join < "u" && !!n.join, I = typeof n.swap < "u" && !!n.swap, T = !(typeof n.xmlDeclaration < "u" && !n.xmlDeclaration), k = typeof n.predefined < "u" && !!n.predefined, P = k ? _ + '<defs><path id="qrmodule" d="M0 0 h' + x + " v" + S + ' H0 z" style="fill:' + n.color + ';shape-rendering:crispEdges;" /></defs>' + v : "", Z = _ + '<rect x="0" y="0" width="' + w + '" height="' + C + '" style="fill:' + n.background + ';shape-rendering:crispEdges;"/>' + v, ie = "", se = "", ee = 0; ee < E; ee++)
                    for (var j = 0; j < E; j++)
                        if (l[j][ee]) {
                            var Y = j * S + n.padding * S,
                                G = ee * x + n.padding * x;
                            if (I) {
                                var K = Y;
                                Y = G, G = K
                            }
                            if (O) {
                                var X = S + Y,
                                    te = x + G;
                                Y = Number.isInteger(Y) ? Number(Y) : Y.toFixed(2), G = Number.isInteger(G) ? Number(G) : G.toFixed(2), X = Number.isInteger(X) ? Number(X) : X.toFixed(2), se += "M" + Y + "," + G + " V" + (te = Number.isInteger(te) ? Number(te) : te.toFixed(2)) + " H" + X + " V" + G + " H" + Y + " Z "
                            } else ie += k ? _ + '<use x="' + Y.toString() + '" y="' + G.toString() + '" href="#qrmodule" />' + v : _ + '<rect x="' + Y.toString() + '" y="' + G.toString() + '" width="' + S + '" height="' + x + '" style="fill:' + n.color + ';shape-rendering:crispEdges;"/>' + v
                        }
                O && (ie = _ + '<path x="0" y="0" style="fill:' + n.color + ';shape-rendering:crispEdges;" d="' + se + '" />');
                let de = "";
                if (void 0 !== this.options.image && this.options.image.svg) {
                    const _e = w * this.options.image.width / 100,
                        Ee = C * this.options.image.height / 100;
                    de += `<svg x="${w/2-_e/2}" y="${C/2-Ee/2}" width="${_e}" height="${Ee}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`, de += this.options.image.svg + v, de += "</svg>"
                }
                var ve = "";
                switch (a.container) {
                    case "svg":
                        T && (ve += '<?xml version="1.0" standalone="yes"?>' + v), ve += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + w + '" height="' + C + '">' + v, ve += P + Z + ie, ve += de, ve += "</svg>";
                        break;
                    case "svg-viewbox":
                        T && (ve += '<?xml version="1.0" standalone="yes"?>' + v), ve += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + w + " " + C + '">' + v, ve += P + Z + ie, ve += de, ve += "</svg>";
                        break;
                    case "g":
                        ve += '<g width="' + w + '" height="' + C + '">' + v, ve += P + Z + ie, ve += de, ve += "</g>";
                        break;
                    default:
                        ve += (P + Z + ie + de).replace(/^\s+/, "")
                }
                return ve
            }, R.exports = d
        },
        7938: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.LIB_VERSION = void 0, s.LIB_VERSION = "3.7.2"
        },
        45397: (R, s, t) => {
            "use strict";
            t.r(s), t.d(s, {
                ArgumentOutOfRangeError: () => Z.W,
                AsyncSubject: () => u.c,
                BehaviorSubject: () => r.X,
                ConnectableObservable: () => p.c,
                EMPTY: () => V.E,
                EmptyError: () => ie.K,
                GroupedObservable: () => h.T,
                NEVER: () => Be,
                Notification: () => O.P,
                NotificationKind: () => O.W,
                ObjectUnsubscribedError: () => se.N,
                Observable: () => e.y,
                ReplaySubject: () => o.t,
                Scheduler: () => E.b,
                Subject: () => b.xQ,
                Subscriber: () => x.L,
                Subscription: () => S.w,
                TimeoutError: () => j.W,
                UnsubscriptionError: () => ee.B,
                VirtualAction: () => C,
                VirtualTimeScheduler: () => w,
                animationFrame: () => v,
                animationFrameScheduler: () => _,
                asap: () => g.e,
                asapScheduler: () => g.E,
                async: () => c.P,
                asyncScheduler: () => c.z,
                bindCallback: () => X,
                bindNodeCallback: () => _e,
                combineLatest: () => H.aj,
                concat: () => D.z,
                config: () => Qe.config,
                defer: () => B.P,
                empty: () => V.c,
                forkJoin: () => U,
                from: () => L.D,
                fromEvent: () => be,
                fromEventPattern: () => Pe,
                generate: () => F,
                identity: () => k.y,
                iif: () => z,
                interval: () => pe,
                isObservable: () => P,
                merge: () => Le.T,
                never: () => De,
                noop: () => T.Z,
                observable: () => f.L,
                of: () => Q.of,
                onErrorResumeNext: () => q,
                pairs: () => Ne,
                partition: () => Ze,
                pipe: () => I.z,
                queue: () => d.c,
                queueScheduler: () => d.N,
                race: () => He.S3,
                range: () => Ke,
                scheduled: () => tt.x,
                throwError: () => Xe._,
                timer: () => Ve.H,
                using: () => qe,
                zip: () => Ye.$R
            });
            var e = t(59488),
                p = t(53101),
                h = t(80374),
                f = t(10402),
                b = t(87922),
                r = t(13388),
                o = t(47191),
                u = t(94046),
                g = t(98704),
                c = t(22229),
                d = t(1044),
                a = t(62637),
                l = t(41680);
            const _ = new class y extends l.v {
                    flush(oe) {
                        this.active = !0, this.scheduled = void 0;
                        const {
                            actions: ue
                        } = this;
                        let fe, ge = -1,
                            we = ue.length;
                        oe = oe || ue.shift();
                        do {
                            if (fe = oe.execute(oe.state, oe.delay)) break
                        } while (++ge < we && (oe = ue.shift()));
                        if (this.active = !1, fe) {
                            for (; ++ge < we && (oe = ue.shift());) oe.unsubscribe();
                            throw fe
                        }
                    }
                }(class n extends a.o {
                    constructor(oe, ue) {
                        super(oe, ue), this.scheduler = oe, this.work = ue
                    }
                    requestAsyncId(oe, ue, fe = 0) {
                        return null !== fe && fe > 0 ? super.requestAsyncId(oe, ue, fe) : (oe.actions.push(this), oe.scheduled || (oe.scheduled = requestAnimationFrame(() => oe.flush(null))))
                    }
                    recycleAsyncId(oe, ue, fe = 0) {
                        if (null !== fe && fe > 0 || null === fe && this.delay > 0) return super.recycleAsyncId(oe, ue, fe);
                        0 === oe.actions.length && (cancelAnimationFrame(ue), oe.scheduled = void 0)
                    }
                }),
                v = _;
            let w = (() => {
                class ce extends l.v {
                    constructor(ue = C, fe = Number.POSITIVE_INFINITY) {
                        super(ue, () => this.frame), this.maxFrames = fe, this.frame = 0, this.index = -1
                    }
                    flush() {
                        const {
                            actions: ue,
                            maxFrames: fe
                        } = this;
                        let ge, we;
                        for (;
                            (we = ue[0]) && we.delay <= fe && (ue.shift(), this.frame = we.delay, !(ge = we.execute(we.state, we.delay))););
                        if (ge) {
                            for (; we = ue.shift();) we.unsubscribe();
                            throw ge
                        }
                    }
                }
                return ce.frameTimeFactor = 10, ce
            })();
            class C extends a.o {
                constructor(oe, ue, fe = (oe.index += 1)) {
                    super(oe, ue), this.scheduler = oe, this.work = ue, this.index = fe, this.active = !0, this.index = oe.index = fe
                }
                schedule(oe, ue = 0) {
                    if (!this.id) return super.schedule(oe, ue);
                    this.active = !1;
                    const fe = new C(this.scheduler, this.work);
                    return this.add(fe), fe.schedule(oe, ue)
                }
                requestAsyncId(oe, ue, fe = 0) {
                    this.delay = oe.frame + fe;
                    const {
                        actions: ge
                    } = oe;
                    return ge.push(this), ge.sort(C.sortActions), !0
                }
                recycleAsyncId(oe, ue, fe = 0) {}
                _execute(oe, ue) {
                    if (!0 === this.active) return super._execute(oe, ue)
                }
                static sortActions(oe, ue) {
                    return oe.delay === ue.delay ? oe.index === ue.index ? 0 : oe.index > ue.index ? 1 : -1 : oe.delay > ue.delay ? 1 : -1
                }
            }
            var E = t(97506),
                S = t(50144),
                x = t(43619),
                O = t(29944),
                I = t(77817),
                T = t(11027),
                k = t(40601);

            function P(ce) {
                return !!ce && (ce instanceof e.y || "function" == typeof ce.lift && "function" == typeof ce.subscribe)
            }
            var Z = t(34477),
                ie = t(8685),
                se = t(35093),
                ee = t(31159),
                j = t(95025),
                ne = t(32974),
                Y = t(79618),
                G = t(35212),
                K = t(54234);

            function X(ce, oe, ue) {
                if (oe) {
                    if (!(0, K.K)(oe)) return (...fe) => X(ce, ue)(...fe).pipe((0, ne.U)(ge => (0, G.k)(ge) ? oe(...ge) : oe(ge)));
                    ue = oe
                }
                return function(...fe) {
                    const ge = this;
                    let we;
                    const Me = {
                        context: ge,
                        subject: we,
                        callbackFunc: ce,
                        scheduler: ue
                    };
                    return new e.y(Re => {
                        if (ue) return ue.schedule(te, 0, {
                            args: fe,
                            subscriber: Re,
                            params: Me
                        });
                        if (!we) {
                            we = new u.c;
                            const Ue = (...ke) => {
                                we.next(ke.length <= 1 ? ke[0] : ke), we.complete()
                            };
                            try {
                                ce.apply(ge, [...fe, Ue])
                            } catch (ke) {
                                (0, Y._)(we) ? we.error(ke): console.warn(ke)
                            }
                        }
                        return we.subscribe(Re)
                    })
                }
            }

            function te(ce) {
                const {
                    args: ue,
                    subscriber: fe,
                    params: ge
                } = ce, {
                    callbackFunc: we,
                    context: Me,
                    scheduler: Re
                } = ge;
                let {
                    subject: Ue
                } = ge;
                if (!Ue) {
                    Ue = ge.subject = new u.c;
                    const ke = (...We) => {
                        this.add(Re.schedule(de, 0, {
                            value: We.length <= 1 ? We[0] : We,
                            subject: Ue
                        }))
                    };
                    try {
                        we.apply(Me, [...ue, ke])
                    } catch (We) {
                        Ue.error(We)
                    }
                }
                this.add(Ue.subscribe(fe))
            }

            function de(ce) {
                const {
                    value: oe,
                    subject: ue
                } = ce;
                ue.next(oe), ue.complete()
            }

            function _e(ce, oe, ue) {
                if (oe) {
                    if (!(0, K.K)(oe)) return (...fe) => _e(ce, ue)(...fe).pipe((0, ne.U)(ge => (0, G.k)(ge) ? oe(...ge) : oe(ge)));
                    ue = oe
                }
                return function(...fe) {
                    const ge = {
                        subject: void 0,
                        args: fe,
                        callbackFunc: ce,
                        scheduler: ue,
                        context: this
                    };
                    return new e.y(we => {
                        const {
                            context: Me
                        } = ge;
                        let {
                            subject: Re
                        } = ge;
                        if (ue) return ue.schedule(Ee, 0, {
                            params: ge,
                            subscriber: we,
                            context: Me
                        });
                        if (!Re) {
                            Re = ge.subject = new u.c;
                            const Ue = (...ke) => {
                                const We = ke.shift();
                                We ? Re.error(We) : (Re.next(ke.length <= 1 ? ke[0] : ke), Re.complete())
                            };
                            try {
                                ce.apply(Me, [...fe, Ue])
                            } catch (ke) {
                                (0, Y._)(Re) ? Re.error(ke): console.warn(ke)
                            }
                        }
                        return Re.subscribe(we)
                    })
                }
            }

            function Ee(ce) {
                const {
                    params: oe,
                    subscriber: ue,
                    context: fe
                } = ce, {
                    callbackFunc: ge,
                    args: we,
                    scheduler: Me
                } = oe;
                let Re = oe.subject;
                if (!Re) {
                    Re = oe.subject = new u.c;
                    const Ue = (...ke) => {
                        const We = ke.shift();
                        this.add(We ? Me.schedule(J, 0, {
                            err: We,
                            subject: Re
                        }) : Me.schedule(xe, 0, {
                            value: ke.length <= 1 ? ke[0] : ke,
                            subject: Re
                        }))
                    };
                    try {
                        ge.apply(fe, [...we, Ue])
                    } catch (ke) {
                        this.add(Me.schedule(J, 0, {
                            err: ke,
                            subject: Re
                        }))
                    }
                }
                this.add(Re.subscribe(ue))
            }

            function xe(ce) {
                const {
                    value: oe,
                    subject: ue
                } = ce;
                ue.next(oe), ue.complete()
            }

            function J(ce) {
                const {
                    err: oe,
                    subject: ue
                } = ce;
                ue.error(oe)
            }
            var H = t(9422),
                D = t(94732),
                B = t(73737),
                V = t(88805),
                N = t(21633),
                L = t(96056);

            function U(...ce) {
                if (1 === ce.length) {
                    const oe = ce[0];
                    if ((0, G.k)(oe)) return ae(oe, null);
                    if ((0, N.K)(oe) && Object.getPrototypeOf(oe) === Object.prototype) {
                        const ue = Object.keys(oe);
                        return ae(ue.map(fe => oe[fe]), ue)
                    }
                }
                if ("function" == typeof ce[ce.length - 1]) {
                    const oe = ce.pop();
                    return ae(ce = 1 === ce.length && (0, G.k)(ce[0]) ? ce[0] : ce, null).pipe((0, ne.U)(ue => oe(...ue)))
                }
                return ae(ce, null)
            }

            function ae(ce, oe) {
                return new e.y(ue => {
                    const fe = ce.length;
                    if (0 === fe) return void ue.complete();
                    const ge = new Array(fe);
                    let we = 0,
                        Me = 0;
                    for (let Re = 0; Re < fe; Re++) {
                        const Ue = (0, L.D)(ce[Re]);
                        let ke = !1;
                        ue.add(Ue.subscribe({
                            next: We => {
                                ke || (ke = !0, Me++), ge[Re] = We
                            },
                            error: We => ue.error(We),
                            complete: () => {
                                we++, (we === fe || !ke) && (Me === fe && ue.next(oe ? oe.reduce((We, Je, et) => (We[Je] = ge[et], We), {}) : ge), ue.complete())
                            }
                        }))
                    }
                })
            }
            var ye = t(83932);

            function be(ce, oe, ue, fe) {
                return (0, ye.m)(ue) && (fe = ue, ue = void 0), fe ? be(ce, oe, ue).pipe((0, ne.U)(ge => (0, G.k)(ge) ? fe(...ge) : fe(ge))) : new e.y(ge => {
                    Ae(ce, oe, function we(Me) {
                        ge.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : Me)
                    }, ge, ue)
                })
            }

            function Ae(ce, oe, ue, fe, ge) {
                let we;
                if (function Se(ce) {
                        return ce && "function" == typeof ce.addEventListener && "function" == typeof ce.removeEventListener
                    }(ce)) {
                    const Me = ce;
                    ce.addEventListener(oe, ue, ge), we = () => Me.removeEventListener(oe, ue, ge)
                } else if (function Te(ce) {
                        return ce && "function" == typeof ce.on && "function" == typeof ce.off
                    }(ce)) {
                    const Me = ce;
                    ce.on(oe, ue), we = () => Me.off(oe, ue)
                } else if (function he(ce) {
                        return ce && "function" == typeof ce.addListener && "function" == typeof ce.removeListener
                    }(ce)) {
                    const Me = ce;
                    ce.addListener(oe, ue), we = () => Me.removeListener(oe, ue)
                } else {
                    if (!ce || !ce.length) throw new TypeError("Invalid event target");
                    for (let Me = 0, Re = ce.length; Me < Re; Me++) Ae(ce[Me], oe, ue, fe, ge)
                }
                fe.add(we)
            }

            function Pe(ce, oe, ue) {
                return ue ? Pe(ce, oe).pipe((0, ne.U)(fe => (0, G.k)(fe) ? ue(...fe) : ue(fe))) : new e.y(fe => {
                    const ge = (...Me) => fe.next(1 === Me.length ? Me[0] : Me);
                    let we;
                    try {
                        we = ce(ge)
                    } catch (Me) {
                        return void fe.error(Me)
                    }
                    if ((0, ye.m)(oe)) return () => oe(ge, we)
                })
            }

            function F(ce, oe, ue, fe, ge) {
                let we, Me;
                return 1 == arguments.length ? (Me = ce.initialState, oe = ce.condition, ue = ce.iterate, we = ce.resultSelector || k.y, ge = ce.scheduler) : void 0 === fe || (0, K.K)(fe) ? (Me = ce, we = k.y, ge = fe) : (Me = ce, we = fe), new e.y(Re => {
                    let Ue = Me;
                    if (ge) return ge.schedule($, 0, {
                        subscriber: Re,
                        iterate: ue,
                        condition: oe,
                        resultSelector: we,
                        state: Ue
                    });
                    for (;;) {
                        if (oe) {
                            let We;
                            try {
                                We = oe(Ue)
                            } catch (Je) {
                                return void Re.error(Je)
                            }
                            if (!We) {
                                Re.complete();
                                break
                            }
                        }
                        let ke;
                        try {
                            ke = we(Ue)
                        } catch (We) {
                            return void Re.error(We)
                        }
                        if (Re.next(ke), Re.closed) break;
                        try {
                            Ue = ue(Ue)
                        } catch (We) {
                            return void Re.error(We)
                        }
                    }
                })
            }

            function $(ce) {
                const {
                    subscriber: oe,
                    condition: ue
                } = ce;
                if (oe.closed) return;
                if (ce.needIterate) try {
                    ce.state = ce.iterate(ce.state)
                } catch (ge) {
                    return void oe.error(ge)
                } else ce.needIterate = !0;
                if (ue) {
                    let ge;
                    try {
                        ge = ue(ce.state)
                    } catch (we) {
                        return void oe.error(we)
                    }
                    if (!ge) return void oe.complete();
                    if (oe.closed) return
                }
                let fe;
                try {
                    fe = ce.resultSelector(ce.state)
                } catch (ge) {
                    return void oe.error(ge)
                }
                return oe.closed || (oe.next(fe), oe.closed) ? void 0 : this.schedule(ce)
            }

            function z(ce, oe = V.E, ue = V.E) {
                return (0, B.P)(() => ce() ? oe : ue)
            }
            var re = t(43618);

            function pe(ce = 0, oe = c.P) {
                return (!(0, re.k)(ce) || ce < 0) && (ce = 0), (!oe || "function" != typeof oe.schedule) && (oe = c.P), new e.y(ue => (ue.add(oe.schedule(Ce, ce, {
                    subscriber: ue,
                    counter: 0,
                    period: ce
                })), ue))
            }

            function Ce(ce) {
                const {
                    subscriber: oe,
                    counter: ue,
                    period: fe
                } = ce;
                oe.next(ue), this.schedule({
                    subscriber: oe,
                    counter: ue + 1,
                    period: fe
                }, fe)
            }
            var Le = t(14685);
            const Be = new e.y(T.Z);

            function De() {
                return Be
            }
            var Q = t(9556);

            function q(...ce) {
                if (0 === ce.length) return V.E;
                const [oe, ...ue] = ce;
                return 1 === ce.length && (0, G.k)(oe) ? q(...oe) : new e.y(fe => {
                    const ge = () => fe.add(q(...ue).subscribe(fe));
                    return (0, L.D)(oe).subscribe({
                        next(we) {
                            fe.next(we)
                        },
                        error: ge,
                        complete: ge
                    })
                })
            }

            function Ne(ce, oe) {
                return new e.y(oe ? ue => {
                    const fe = Object.keys(ce),
                        ge = new S.w;
                    return ge.add(oe.schedule(je, 0, {
                        keys: fe,
                        index: 0,
                        subscriber: ue,
                        subscription: ge,
                        obj: ce
                    })), ge
                } : ue => {
                    const fe = Object.keys(ce);
                    for (let ge = 0; ge < fe.length && !ue.closed; ge++) {
                        const we = fe[ge];
                        ce.hasOwnProperty(we) && ue.next([we, ce[we]])
                    }
                    ue.complete()
                })
            }

            function je(ce) {
                const {
                    keys: oe,
                    index: ue,
                    subscriber: fe,
                    subscription: ge,
                    obj: we
                } = ce;
                if (!fe.closed)
                    if (ue < oe.length) {
                        const Me = oe[ue];
                        fe.next([Me, we[Me]]), ge.add(this.schedule({
                            keys: oe,
                            index: ue + 1,
                            subscriber: fe,
                            subscription: ge,
                            obj: we
                        }))
                    } else fe.complete()
            }
            var Fe = t(1958),
                Oe = t(90508),
                Ge = t(6167);

            function Ze(ce, oe, ue) {
                return [(0, Ge.h)(oe, ue)(new e.y((0, Oe.s)(ce))), (0, Ge.h)((0, Fe.f)(oe, ue))(new e.y((0, Oe.s)(ce)))]
            }
            var He = t(54285);

            function Ke(ce = 0, oe, ue) {
                return new e.y(fe => {
                    void 0 === oe && (oe = ce, ce = 0);
                    let ge = 0,
                        we = ce;
                    if (ue) return ue.schedule(rt, 0, {
                        index: ge,
                        count: oe,
                        start: ce,
                        subscriber: fe
                    });
                    for (;;) {
                        if (ge++ >= oe) {
                            fe.complete();
                            break
                        }
                        if (fe.next(we++), fe.closed) break
                    }
                })
            }

            function rt(ce) {
                const {
                    start: oe,
                    index: ue,
                    count: fe,
                    subscriber: ge
                } = ce;
                ue >= fe ? ge.complete() : (ge.next(oe), !ge.closed && (ce.index = ue + 1, ce.start = oe + 1, this.schedule(ce)))
            }
            var Xe = t(2040),
                Ve = t(55580);

            function qe(ce, oe) {
                return new e.y(ue => {
                    let fe, ge;
                    try {
                        fe = ce()
                    } catch (Re) {
                        return void ue.error(Re)
                    }
                    try {
                        ge = oe(fe)
                    } catch (Re) {
                        return void ue.error(Re)
                    }
                    const Me = (ge ? (0, L.D)(ge) : V.E).subscribe(ue);
                    return () => {
                        Me.unsubscribe(), fe && fe.unsubscribe()
                    }
                })
            }
            var Ye = t(85289),
                tt = t(33505),
                Qe = t(24638)
        },
        94046: (R, s, t) => {
            "use strict";
            t.d(s, {
                c: () => h
            });
            var e = t(87922),
                p = t(50144);
            class h extends e.xQ {
                constructor() {
                    super(...arguments), this.value = null, this.hasNext = !1, this.hasCompleted = !1
                }
                _subscribe(b) {
                    return this.hasError ? (b.error(this.thrownError), p.w.EMPTY) : this.hasCompleted && this.hasNext ? (b.next(this.value), b.complete(), p.w.EMPTY) : super._subscribe(b)
                }
                next(b) {
                    this.hasCompleted || (this.value = b, this.hasNext = !0)
                }
                error(b) {
                    this.hasCompleted || super.error(b)
                }
                complete() {
                    this.hasCompleted = !0, this.hasNext && super.next(this.value), super.complete()
                }
            }
        },
        13388: (R, s, t) => {
            "use strict";
            t.d(s, {
                X: () => h
            });
            var e = t(87922),
                p = t(35093);
            class h extends e.xQ {
                constructor(b) {
                    super(), this._value = b
                }
                get value() {
                    return this.getValue()
                }
                _subscribe(b) {
                    const r = super._subscribe(b);
                    return r && !r.closed && b.next(this._value), r
                }
                getValue() {
                    if (this.hasError) throw this.thrownError;
                    if (this.closed) throw new p.N;
                    return this._value
                }
                next(b) {
                    super.next(this._value = b)
                }
            }
        },
        29944: (R, s, t) => {
            "use strict";
            t.d(s, {
                P: () => b,
                W: () => f
            });
            var e = t(88805),
                p = t(9556),
                h = t(2040),
                f = function(r) {
                    return r.NEXT = "N", r.ERROR = "E", r.COMPLETE = "C", r
                }(f || {});
            class b {
                constructor(o, u, g) {
                    this.kind = o, this.value = u, this.error = g, this.hasValue = "N" === o
                }
                observe(o) {
                    switch (this.kind) {
                        case "N":
                            return o.next && o.next(this.value);
                        case "E":
                            return o.error && o.error(this.error);
                        case "C":
                            return o.complete && o.complete()
                    }
                }
                do(o, u, g) {
                    switch (this.kind) {
                        case "N":
                            return o && o(this.value);
                        case "E":
                            return u && u(this.error);
                        case "C":
                            return g && g()
                    }
                }
                accept(o, u, g) {
                    return o && "function" == typeof o.next ? this.observe(o) : this.do(o, u, g)
                }
                toObservable() {
                    switch (this.kind) {
                        case "N":
                            return (0, p.of)(this.value);
                        case "E":
                            return (0, h._)(this.error);
                        case "C":
                            return (0, e.c)()
                    }
                    throw new Error("unexpected notification kind value")
                }
                static
                createNext(o) {
                    return typeof o < "u" ? new b("N", o) : b.undefinedValueNotification
                }
                static createError(o) {
                    return new b("E", void 0, o)
                }
                static createComplete() {
                    return b.completeNotification
                }
            }
            b.completeNotification = new b("C"), b.undefinedValueNotification = new b("N", void 0)
        },
        59488: (R, s, t) => {
            "use strict";
            t.d(s, {
                y: () => g
            });
            var e = t(79618),
                p = t(43619),
                h = t(45137),
                f = t(80890),
                r = t(10402),
                o = t(77817),
                u = t(24638);
            let g = (() => {
                class d {
                    constructor(n) {
                        this._isScalar = !1, n && (this._subscribe = n)
                    }
                    lift(n) {
                        const l = new d;
                        return l.source = this, l.operator = n, l
                    }
                    subscribe(n, l, y) {
                        const {
                            operator: _
                        } = this, v = function b(d, a, n) {
                            if (d) {
                                if (d instanceof p.L) return d;
                                if (d[h.b]) return d[h.b]()
                            }
                            return d || a || n ? new p.L(d, a, n) : new p.L(f.c)
                        }(n, l, y);
                        if (v.add(_ ? _.call(v, this.source) : this.source || u.config.useDeprecatedSynchronousErrorHandling && !v.syncErrorThrowable ? this._subscribe(v) : this._trySubscribe(v)), u.config.useDeprecatedSynchronousErrorHandling && v.syncErrorThrowable && (v.syncErrorThrowable = !1, v.syncErrorThrown)) throw v.syncErrorValue;
                        return v
                    }
                    _trySubscribe(n) {
                        try {
                            return this._subscribe(n)
                        } catch (l) {
                            u.config.useDeprecatedSynchronousErrorHandling && (n.syncErrorThrown = !0, n.syncErrorValue = l), (0, e._)(n) ? n.error(l) : console.warn(l)
                        }
                    }
                    forEach(n, l) {
                        return new(l = c(l))((y, _) => {
                            let v;
                            v = this.subscribe(w => {
                                try {
                                    n(w)
                                } catch (C) {
                                    _(C), v && v.unsubscribe()
                                }
                            }, _, y)
                        })
                    }
                    _subscribe(n) {
                        const {
                            source: l
                        } = this;
                        return l && l.subscribe(n)
                    }[r.L]() {
                        return this
                    }
                    pipe(...n) {
                        return 0 === n.length ? this : (0, o.U)(n)(this)
                    }
                    toPromise(n) {
                        return new(n = c(n))((l, y) => {
                            let _;
                            this.subscribe(v => _ = v, v => y(v), () => l(_))
                        })
                    }
                }
                return d.create = a => new d(a), d
            })();

            function c(d) {
                if (d || (d = u.config.Promise || Promise), !d) throw new Error("no Promise impl found");
                return d
            }
        },
        80890: (R, s, t) => {
            "use strict";
            t.d(s, {
                c: () => h
            });
            var e = t(24638),
                p = t(20869);
            const h = {
                closed: !0,
                next(f) {},
                error(f) {
                    if (e.config.useDeprecatedSynchronousErrorHandling) throw f;
                    (0, p.z)(f)
                },
                complete() {}
            }
        },
        59048: (R, s, t) => {
            "use strict";
            t.d(s, {
                L: () => p
            });
            var e = t(43619);
            class p extends e.L {
                notifyNext(f, b, r, o, u) {
                    this.destination.next(b)
                }
                notifyError(f, b) {
                    this.destination.error(f)
                }
                notifyComplete(f) {
                    this.destination.complete()
                }
            }
        },
        47191: (R, s, t) => {
            "use strict";
            t.d(s, {
                t: () => o
            });
            var e = t(87922),
                p = t(1044),
                h = t(50144),
                f = t(87167),
                b = t(35093),
                r = t(30992);
            class o extends e.xQ {
                constructor(c = Number.POSITIVE_INFINITY, d = Number.POSITIVE_INFINITY, a) {
                    super(), this.scheduler = a, this._events = [], this._infiniteTimeWindow = !1, this._bufferSize = c < 1 ? 1 : c, this._windowTime = d < 1 ? 1 : d, d === Number.POSITIVE_INFINITY ? (this._infiniteTimeWindow = !0, this.next = this.nextInfiniteTimeWindow) : this.next = this.nextTimeWindow
                }
                nextInfiniteTimeWindow(c) {
                    if (!this.isStopped) {
                        const d = this._events;
                        d.push(c), d.length > this._bufferSize && d.shift()
                    }
                    super.next(c)
                }
                nextTimeWindow(c) {
                    this.isStopped || (this._events.push(new u(this._getNow(), c)), this._trimBufferThenGetEvents()), super.next(c)
                }
                _subscribe(c) {
                    const d = this._infiniteTimeWindow,
                        a = d ? this._events : this._trimBufferThenGetEvents(),
                        n = this.scheduler,
                        l = a.length;
                    let y;
                    if (this.closed) throw new b.N;
                    if (this.isStopped || this.hasError ? y = h.w.EMPTY : (this.observers.push(c), y = new r.W(this, c)), n && c.add(c = new f.ht(c, n)), d)
                        for (let _ = 0; _ < l && !c.closed; _++) c.next(a[_]);
                    else
                        for (let _ = 0; _ < l && !c.closed; _++) c.next(a[_].value);
                    return this.hasError ? c.error(this.thrownError) : this.isStopped && c.complete(), y
                }
                _getNow() {
                    return (this.scheduler || p.c).now()
                }
                _trimBufferThenGetEvents() {
                    const c = this._getNow(),
                        d = this._bufferSize,
                        a = this._windowTime,
                        n = this._events,
                        l = n.length;
                    let y = 0;
                    for (; y < l && !(c - n[y].time < a);) y++;
                    return l > d && (y = Math.max(y, l - d)), y > 0 && n.splice(0, y), n
                }
            }
            class u {
                constructor(c, d) {
                    this.time = c, this.value = d
                }
            }
        },
        97506: (R, s, t) => {
            "use strict";
            t.d(s, {
                b: () => e
            });
            let e = (() => {
                class p {
                    constructor(f, b = p.now) {
                        this.SchedulerAction = f, this.now = b
                    }
                    schedule(f, b = 0, r) {
                        return new this.SchedulerAction(this, f).schedule(r, b)
                    }
                }
                return p.now = () => Date.now(), p
            })()
        },
        87922: (R, s, t) => {
            "use strict";
            t.d(s, {
                Yc: () => o,
                xQ: () => u
            });
            var e = t(59488),
                p = t(43619),
                h = t(50144),
                f = t(35093),
                b = t(30992),
                r = t(45137);
            class o extends p.L {
                constructor(d) {
                    super(d), this.destination = d
                }
            }
            let u = (() => {
                class c extends e.y {
                    constructor() {
                        super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
                    }[r.b]() {
                        return new o(this)
                    }
                    lift(a) {
                        const n = new g(this, this);
                        return n.operator = a, n
                    }
                    next(a) {
                        if (this.closed) throw new f.N;
                        if (!this.isStopped) {
                            const {
                                observers: n
                            } = this, l = n.length, y = n.slice();
                            for (let _ = 0; _ < l; _++) y[_].next(a)
                        }
                    }
                    error(a) {
                        if (this.closed) throw new f.N;
                        this.hasError = !0, this.thrownError = a, this.isStopped = !0;
                        const {
                            observers: n
                        } = this, l = n.length, y = n.slice();
                        for (let _ = 0; _ < l; _++) y[_].error(a);
                        this.observers.length = 0
                    }
                    complete() {
                        if (this.closed) throw new f.N;
                        this.isStopped = !0;
                        const {
                            observers: a
                        } = this, n = a.length, l = a.slice();
                        for (let y = 0; y < n; y++) l[y].complete();
                        this.observers.length = 0
                    }
                    unsubscribe() {
                        this.isStopped = !0, this.closed = !0, this.observers = null
                    }
                    _trySubscribe(a) {
                        if (this.closed) throw new f.N;
                        return super._trySubscribe(a)
                    }
                    _subscribe(a) {
                        if (this.closed) throw new f.N;
                        return this.hasError ? (a.error(this.thrownError), h.w.EMPTY) : this.isStopped ? (a.complete(), h.w.EMPTY) : (this.observers.push(a), new b.W(this, a))
                    }
                    asObservable() {
                        const a = new e.y;
                        return a.source = this, a
                    }
                }
                return c.create = (d, a) => new g(d, a), c
            })();
            class g extends u {
                constructor(d, a) {
                    super(), this.destination = d, this.source = a
                }
                next(d) {
                    const {
                        destination: a
                    } = this;
                    a && a.next && a.next(d)
                }
                error(d) {
                    const {
                        destination: a
                    } = this;
                    a && a.error && this.destination.error(d)
                }
                complete() {
                    const {
                        destination: d
                    } = this;
                    d && d.complete && this.destination.complete()
                }
                _subscribe(d) {
                    const {
                        source: a
                    } = this;
                    return a ? this.source.subscribe(d) : h.w.EMPTY
                }
            }
        },
        30992: (R, s, t) => {
            "use strict";
            t.d(s, {
                W: () => p
            });
            var e = t(50144);
            class p extends e.w {
                constructor(f, b) {
                    super(), this.subject = f, this.subscriber = b, this.closed = !1
                }
                unsubscribe() {
                    if (this.closed) return;
                    this.closed = !0;
                    const f = this.subject,
                        b = f.observers;
                    if (this.subject = null, !b || 0 === b.length || f.isStopped || f.closed) return;
                    const r = b.indexOf(this.subscriber); - 1 !== r && b.splice(r, 1)
                }
            }
        },
        43619: (R, s, t) => {
            "use strict";
            t.d(s, {
                L: () => o
            });
            var e = t(83932),
                p = t(80890),
                h = t(50144),
                f = t(45137),
                b = t(24638),
                r = t(20869);
            class o extends h.w {
                constructor(c, d, a) {
                    switch (super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
                        case 0:
                            this.destination = p.c;
                            break;
                        case 1:
                            if (!c) {
                                this.destination = p.c;
                                break
                            }
                            if ("object" == typeof c) {
                                c instanceof o ? (this.syncErrorThrowable = c.syncErrorThrowable, this.destination = c, c.add(this)) : (this.syncErrorThrowable = !0, this.destination = new u(this, c));
                                break
                            }
                        default:
                            this.syncErrorThrowable = !0, this.destination = new u(this, c, d, a)
                    }
                }[f.b]() {
                    return this
                }
                static create(c, d, a) {
                    const n = new o(c, d, a);
                    return n.syncErrorThrowable = !1, n
                }
                next(c) {
                    this.isStopped || this._next(c)
                }
                error(c) {
                    this.isStopped || (this.isStopped = !0, this._error(c))
                }
                complete() {
                    this.isStopped || (this.isStopped = !0, this._complete())
                }
                unsubscribe() {
                    this.closed || (this.isStopped = !0, super.unsubscribe())
                }
                _next(c) {
                    this.destination.next(c)
                }
                _error(c) {
                    this.destination.error(c), this.unsubscribe()
                }
                _complete() {
                    this.destination.complete(), this.unsubscribe()
                }
                _unsubscribeAndRecycle() {
                    const {
                        _parentOrParents: c
                    } = this;
                    return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = c, this
                }
            }
            class u extends o {
                constructor(c, d, a, n) {
                    super(), this._parentSubscriber = c;
                    let l, y = this;
                    (0, e.m)(d) ? l = d: d && (l = d.next, a = d.error, n = d.complete, d !== p.c && (y = Object.create(d), (0, e.m)(y.unsubscribe) && this.add(y.unsubscribe.bind(y)), y.unsubscribe = this.unsubscribe.bind(this))), this._context = y, this._next = l, this._error = a, this._complete = n
                }
                next(c) {
                    if (!this.isStopped && this._next) {
                        const {
                            _parentSubscriber: d
                        } = this;
                        b.config.useDeprecatedSynchronousErrorHandling && d.syncErrorThrowable ? this.__tryOrSetError(d, this._next, c) && this.unsubscribe() : this.__tryOrUnsub(this._next, c)
                    }
                }
                error(c) {
                    if (!this.isStopped) {
                        const {
                            _parentSubscriber: d
                        } = this, {
                            useDeprecatedSynchronousErrorHandling: a
                        } = b.config;
                        if (this._error) a && d.syncErrorThrowable ? (this.__tryOrSetError(d, this._error, c), this.unsubscribe()) : (this.__tryOrUnsub(this._error, c), this.unsubscribe());
                        else if (d.syncErrorThrowable) a ? (d.syncErrorValue = c, d.syncErrorThrown = !0) : (0, r.z)(c), this.unsubscribe();
                        else {
                            if (this.unsubscribe(), a) throw c;
                            (0, r.z)(c)
                        }
                    }
                }
                complete() {
                    if (!this.isStopped) {
                        const {
                            _parentSubscriber: c
                        } = this;
                        if (this._complete) {
                            const d = () => this._complete.call(this._context);
                            b.config.useDeprecatedSynchronousErrorHandling && c.syncErrorThrowable ? (this.__tryOrSetError(c, d), this.unsubscribe()) : (this.__tryOrUnsub(d), this.unsubscribe())
                        } else this.unsubscribe()
                    }
                }
                __tryOrUnsub(c, d) {
                    try {
                        c.call(this._context, d)
                    } catch (a) {
                        if (this.unsubscribe(), b.config.useDeprecatedSynchronousErrorHandling) throw a;
                        (0, r.z)(a)
                    }
                }
                __tryOrSetError(c, d, a) {
                    if (!b.config.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                    try {
                        d.call(this._context, a)
                    } catch (n) {
                        return b.config.useDeprecatedSynchronousErrorHandling ? (c.syncErrorValue = n, c.syncErrorThrown = !0, !0) : ((0, r.z)(n), !0)
                    }
                    return !1
                }
                _unsubscribe() {
                    const {
                        _parentSubscriber: c
                    } = this;
                    this._context = null, this._parentSubscriber = null, c.unsubscribe()
                }
            }
        },
        50144: (R, s, t) => {
            "use strict";
            t.d(s, {
                w: () => b
            });
            var o, e = t(35212),
                p = t(21633),
                h = t(83932),
                f = t(31159);
            class b {
                constructor(u) {
                    this.closed = !1, this._parentOrParents = null, this._subscriptions = null, u && (this._ctorUnsubscribe = !0, this._unsubscribe = u)
                }
                unsubscribe() {
                    let u;
                    if (this.closed) return;
                    let {
                        _parentOrParents: g,
                        _ctorUnsubscribe: c,
                        _unsubscribe: d,
                        _subscriptions: a
                    } = this;
                    if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, g instanceof b) g.remove(this);
                    else if (null !== g)
                        for (let n = 0; n < g.length; ++n) g[n].remove(this);
                    if ((0, h.m)(d)) {
                        c && (this._unsubscribe = void 0);
                        try {
                            d.call(this)
                        } catch (n) {
                            u = n instanceof f.B ? r(n.errors) : [n]
                        }
                    }
                    if ((0, e.k)(a)) {
                        let n = -1,
                            l = a.length;
                        for (; ++n < l;) {
                            const y = a[n];
                            if ((0, p.K)(y)) try {
                                y.unsubscribe()
                            } catch (_) {
                                u = u || [], _ instanceof f.B ? u = u.concat(r(_.errors)) : u.push(_)
                            }
                        }
                    }
                    if (u) throw new f.B(u)
                }
                add(u) {
                    let g = u;
                    if (!u) return b.EMPTY;
                    switch (typeof u) {
                        case "function":
                            g = new b(u);
                        case "object":
                            if (g === this || g.closed || "function" != typeof g.unsubscribe) return g;
                            if (this.closed) return g.unsubscribe(), g;
                            if (!(g instanceof b)) {
                                const a = g;
                                g = new b, g._subscriptions = [a]
                            }
                            break;
                        default:
                            throw new Error("unrecognized teardown " + u + " added to Subscription.")
                    }
                    let {
                        _parentOrParents: c
                    } = g;
                    if (null === c) g._parentOrParents = this;
                    else if (c instanceof b) {
                        if (c === this) return g;
                        g._parentOrParents = [c, this]
                    } else {
                        if (-1 !== c.indexOf(this)) return g;
                        c.push(this)
                    }
                    const d = this._subscriptions;
                    return null === d ? this._subscriptions = [g] : d.push(g), g
                }
                remove(u) {
                    const g = this._subscriptions;
                    if (g) {
                        const c = g.indexOf(u); - 1 !== c && g.splice(c, 1)
                    }
                }
            }

            function r(o) {
                return o.reduce((u, g) => u.concat(g instanceof f.B ? g.errors : g), [])
            }
            b.EMPTY = ((o = new b).closed = !0, o)
        },
        24638: (R, s, t) => {
            "use strict";
            t.d(s, {
                config: () => p
            });
            let e = !1;
            const p = {
                Promise: void 0,
                set useDeprecatedSynchronousErrorHandling(h) {
                    if (h) {
                        const f = new Error;
                        console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + f.stack)
                    } else e && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                    e = h
                },
                get useDeprecatedSynchronousErrorHandling() {
                    return e
                }
            }
        },
        24323: (R, s, t) => {
            "use strict";
            t.d(s, {
                Ds: () => r,
                IY: () => f,
                ft: () => u
            });
            var e = t(43619),
                p = t(59488),
                h = t(90508);
            class f extends e.L {
                constructor(c) {
                    super(), this.parent = c
                }
                _next(c) {
                    this.parent.notifyNext(c)
                }
                _error(c) {
                    this.parent.notifyError(c), this.unsubscribe()
                }
                _complete() {
                    this.parent.notifyComplete(), this.unsubscribe()
                }
            }
            class r extends e.L {
                notifyNext(c) {
                    this.destination.next(c)
                }
                notifyError(c) {
                    this.destination.error(c)
                }
                notifyComplete() {
                    this.destination.complete()
                }
            }

            function u(g, c) {
                if (c.closed) return;
                if (g instanceof p.y) return g.subscribe(c);
                let d;
                try {
                    d = (0, h.s)(g)(c)
                } catch (a) {
                    c.error(a)
                }
                return d
            }
        },
        53101: (R, s, t) => {
            "use strict";
            t.d(s, {
                N: () => r,
                c: () => b
            });
            var e = t(87922),
                p = t(59488),
                h = t(50144),
                f = t(98153);
            class b extends p.y {
                constructor(d, a) {
                    super(), this.source = d, this.subjectFactory = a, this._refCount = 0, this._isComplete = !1
                }
                _subscribe(d) {
                    return this.getSubject().subscribe(d)
                }
                getSubject() {
                    const d = this._subject;
                    return (!d || d.isStopped) && (this._subject = this.subjectFactory()), this._subject
                }
                connect() {
                    let d = this._connection;
                    return d || (this._isComplete = !1, d = this._connection = new h.w, d.add(this.source.subscribe(new o(this.getSubject(), this))), d.closed && (this._connection = null, d = h.w.EMPTY)), d
                }
                refCount() {
                    return (0, f.x)()(this)
                }
            }
            const r = (() => {
                const c = b.prototype;
                return {
                    operator: {
                        value: null
                    },
                    _refCount: {
                        value: 0,
                        writable: !0
                    },
                    _subject: {
                        value: null,
                        writable: !0
                    },
                    _connection: {
                        value: null,
                        writable: !0
                    },
                    _subscribe: {
                        value: c._subscribe
                    },
                    _isComplete: {
                        value: c._isComplete,
                        writable: !0
                    },
                    getSubject: {
                        value: c.getSubject
                    },
                    connect: {
                        value: c.connect
                    },
                    refCount: {
                        value: c.refCount
                    }
                }
            })();
            class o extends e.Yc {
                constructor(d, a) {
                    super(d), this.connectable = a
                }
                _error(d) {
                    this._unsubscribe(), super._error(d)
                }
                _complete() {
                    this.connectable._isComplete = !0, this._unsubscribe(), super._complete()
                }
                _unsubscribe() {
                    const d = this.connectable;
                    if (d) {
                        this.connectable = null;
                        const a = d._connection;
                        d._refCount = 0, d._subject = null, d._connection = null, a && a.unsubscribe()
                    }
                }
            }
        },
        9422: (R, s, t) => {
            "use strict";
            t.d(s, {
                Ms: () => u,
                aj: () => o
            });
            var e = t(54234),
                p = t(35212),
                h = t(59048),
                f = t(78540),
                b = t(75759);
            const r = {};

            function o(...c) {
                let d, a;
                return (0, e.K)(c[c.length - 1]) && (a = c.pop()), "function" == typeof c[c.length - 1] && (d = c.pop()), 1 === c.length && (0, p.k)(c[0]) && (c = c[0]), (0, b.n)(c, a).lift(new u(d))
            }
            class u {
                constructor(d) {
                    this.resultSelector = d
                }
                call(d, a) {
                    return a.subscribe(new g(d, this.resultSelector))
                }
            }
            class g extends h.L {
                constructor(d, a) {
                    super(d), this.resultSelector = a, this.active = 0, this.values = [], this.observables = []
                }
                _next(d) {
                    this.values.push(r), this.observables.push(d)
                }
                _complete() {
                    const d = this.observables,
                        a = d.length;
                    if (0 === a) this.destination.complete();
                    else {
                        this.active = a, this.toRespond = a;
                        for (let n = 0; n < a; n++) this.add((0, f.D)(this, d[n], void 0, n))
                    }
                }
                notifyComplete(d) {
                    0 == (this.active -= 1) && this.destination.complete()
                }
                notifyNext(d, a, n) {
                    const l = this.values,
                        _ = this.toRespond ? l[n] === r ? --this.toRespond : this.toRespond : 0;
                    l[n] = a, 0 === _ && (this.resultSelector ? this._tryResultSelector(l) : this.destination.next(l.slice()))
                }
                _tryResultSelector(d) {
                    let a;
                    try {
                        a = this.resultSelector.apply(this, d)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    this.destination.next(a)
                }
            }
        },
        94732: (R, s, t) => {
            "use strict";
            t.d(s, {
                z: () => h
            });
            var e = t(9556),
                p = t(94061);

            function h(...f) {
                return (0, p.u)()((0, e.of)(...f))
            }
        },
        73737: (R, s, t) => {
            "use strict";
            t.d(s, {
                P: () => f
            });
            var e = t(59488),
                p = t(96056),
                h = t(88805);

            function f(b) {
                return new e.y(r => {
                    let o;
                    try {
                        o = b()
                    } catch (g) {
                        return void r.error(g)
                    }
                    return (o ? (0, p.D)(o) : (0, h.c)()).subscribe(r)
                })
            }
        },
        88805: (R, s, t) => {
            "use strict";
            t.d(s, {
                E: () => p,
                c: () => h
            });
            var e = t(59488);
            const p = new e.y(b => b.complete());

            function h(b) {
                return b ? function f(b) {
                    return new e.y(r => b.schedule(() => r.complete()))
                }(b) : p
            }
        },
        96056: (R, s, t) => {
            "use strict";
            t.d(s, {
                D: () => f
            });
            var e = t(59488),
                p = t(90508),
                h = t(33505);

            function f(b, r) {
                return r ? (0, h.x)(b, r) : b instanceof e.y ? b : new e.y((0, p.s)(b))
            }
        },
        75759: (R, s, t) => {
            "use strict";
            t.d(s, {
                n: () => f
            });
            var e = t(59488),
                p = t(40060),
                h = t(71359);

            function f(b, r) {
                return r ? (0, h.r)(b, r) : new e.y((0, p.V)(b))
            }
        },
        14685: (R, s, t) => {
            "use strict";
            t.d(s, {
                T: () => b
            });
            var e = t(59488),
                p = t(54234),
                h = t(39019),
                f = t(75759);

            function b(...r) {
                let o = Number.POSITIVE_INFINITY,
                    u = null,
                    g = r[r.length - 1];
                return (0, p.K)(g) ? (u = r.pop(), r.length > 1 && "number" == typeof r[r.length - 1] && (o = r.pop())) : "number" == typeof g && (o = r.pop()), null === u && 1 === r.length && r[0] instanceof e.y ? r[0] : (0, h.J)(o)((0, f.n)(r, u))
            }
        },
        9556: (R, s, t) => {
            "use strict";
            t.d(s, { of: () => f
            });
            var e = t(54234),
                p = t(75759),
                h = t(71359);

            function f(...b) {
                let r = b[b.length - 1];
                return (0, e.K)(r) ? (b.pop(), (0, h.r)(b, r)) : (0, p.n)(b)
            }
        },
        54285: (R, s, t) => {
            "use strict";
            t.d(s, {
                S3: () => b
            });
            var e = t(35212),
                p = t(75759),
                h = t(59048),
                f = t(78540);

            function b(...u) {
                if (1 === u.length) {
                    if (!(0, e.k)(u[0])) return u[0];
                    u = u[0]
                }
                return (0, p.n)(u, void 0).lift(new r)
            }
            class r {
                call(g, c) {
                    return c.subscribe(new o(g))
                }
            }
            class o extends h.L {
                constructor(g) {
                    super(g), this.hasFirst = !1, this.observables = [], this.subscriptions = []
                }
                _next(g) {
                    this.observables.push(g)
                }
                _complete() {
                    const g = this.observables,
                        c = g.length;
                    if (0 === c) this.destination.complete();
                    else {
                        for (let d = 0; d < c && !this.hasFirst; d++) {
                            const n = (0, f.D)(this, g[d], void 0, d);
                            this.subscriptions && this.subscriptions.push(n), this.add(n)
                        }
                        this.observables = null
                    }
                }
                notifyNext(g, c, d) {
                    if (!this.hasFirst) {
                        this.hasFirst = !0;
                        for (let a = 0; a < this.subscriptions.length; a++)
                            if (a !== d) {
                                let n = this.subscriptions[a];
                                n.unsubscribe(), this.remove(n)
                            }
                        this.subscriptions = null
                    }
                    this.destination.next(c)
                }
            }
        },
        2040: (R, s, t) => {
            "use strict";
            t.d(s, {
                _: () => p
            });
            var e = t(59488);

            function p(f, b) {
                return new e.y(b ? r => b.schedule(h, 0, {
                    error: f,
                    subscriber: r
                }) : r => r.error(f))
            }

            function h({
                error: f,
                subscriber: b
            }) {
                b.error(f)
            }
        },
        55580: (R, s, t) => {
            "use strict";
            t.d(s, {
                H: () => b
            });
            var e = t(59488),
                p = t(22229),
                h = t(43618),
                f = t(54234);

            function b(o = 0, u, g) {
                let c = -1;
                return (0, h.k)(u) ? c = Number(u) < 1 ? 1 : Number(u) : (0, f.K)(u) && (g = u), (0, f.K)(g) || (g = p.P), new e.y(d => {
                    const a = (0, h.k)(o) ? o : +o - g.now();
                    return g.schedule(r, a, {
                        index: 0,
                        period: c,
                        subscriber: d
                    })
                })
            }

            function r(o) {
                const {
                    index: u,
                    period: g,
                    subscriber: c
                } = o;
                if (c.next(u), !c.closed) {
                    if (-1 === g) return c.complete();
                    o.index = u + 1, this.schedule(o, g)
                }
            }
        },
        85289: (R, s, t) => {
            "use strict";
            t.d(s, {
                $R: () => r,
                mx: () => o
            });
            var e = t(75759),
                p = t(35212),
                h = t(43619),
                f = t(54693),
                b = t(24323);

            function r(...a) {
                const n = a[a.length - 1];
                return "function" == typeof n && a.pop(), (0, e.n)(a, void 0).lift(new o(n))
            }
            class o {
                constructor(n) {
                    this.resultSelector = n
                }
                call(n, l) {
                    return l.subscribe(new u(n, this.resultSelector))
                }
            }
            class u extends h.L {
                constructor(n, l, y = Object.create(null)) {
                    super(n), this.resultSelector = l, this.iterators = [], this.active = 0, this.resultSelector = "function" == typeof l ? l : void 0
                }
                _next(n) {
                    const l = this.iterators;
                    (0, p.k)(n) ? l.push(new c(n)): l.push("function" == typeof n[f.hZ] ? new g(n[f.hZ]()) : new d(this.destination, this, n))
                }
                _complete() {
                    const n = this.iterators,
                        l = n.length;
                    if (this.unsubscribe(), 0 !== l) {
                        this.active = l;
                        for (let y = 0; y < l; y++) {
                            let _ = n[y];
                            _.stillUnsubscribed ? this.destination.add(_.subscribe()) : this.active--
                        }
                    } else this.destination.complete()
                }
                notifyInactive() {
                    this.active--, 0 === this.active && this.destination.complete()
                }
                checkIterators() {
                    const n = this.iterators,
                        l = n.length,
                        y = this.destination;
                    for (let w = 0; w < l; w++) {
                        let C = n[w];
                        if ("function" == typeof C.hasValue && !C.hasValue()) return
                    }
                    let _ = !1;
                    const v = [];
                    for (let w = 0; w < l; w++) {
                        let C = n[w],
                            E = C.next();
                        if (C.hasCompleted() && (_ = !0), E.done) return void y.complete();
                        v.push(E.value)
                    }
                    this.resultSelector ? this._tryresultSelector(v) : y.next(v), _ && y.complete()
                }
                _tryresultSelector(n) {
                    let l;
                    try {
                        l = this.resultSelector.apply(this, n)
                    } catch (y) {
                        return void this.destination.error(y)
                    }
                    this.destination.next(l)
                }
            }
            class g {
                constructor(n) {
                    this.iterator = n, this.nextResult = n.next()
                }
                hasValue() {
                    return !0
                }
                next() {
                    const n = this.nextResult;
                    return this.nextResult = this.iterator.next(), n
                }
                hasCompleted() {
                    const n = this.nextResult;
                    return !(!n || !n.done)
                }
            }
            class c {
                constructor(n) {
                    this.array = n, this.index = 0, this.length = 0, this.length = n.length
                }[f.hZ]() {
                    return this
                }
                next(n) {
                    const l = this.index++;
                    return l < this.length ? {
                        value: this.array[l],
                        done: !1
                    } : {
                        value: null,
                        done: !0
                    }
                }
                hasValue() {
                    return this.array.length > this.index
                }
                hasCompleted() {
                    return this.array.length === this.index
                }
            }
            class d extends b.Ds {
                constructor(n, l, y) {
                    super(n), this.parent = l, this.observable = y, this.stillUnsubscribed = !0, this.buffer = [], this.isComplete = !1
                }[f.hZ]() {
                    return this
                }
                next() {
                    const n = this.buffer;
                    return 0 === n.length && this.isComplete ? {
                        value: null,
                        done: !0
                    } : {
                        value: n.shift(),
                        done: !1
                    }
                }
                hasValue() {
                    return this.buffer.length > 0
                }
                hasCompleted() {
                    return 0 === this.buffer.length && this.isComplete
                }
                notifyComplete() {
                    this.buffer.length > 0 ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete()
                }
                notifyNext(n) {
                    this.buffer.push(n), this.parent.checkIterators()
                }
                subscribe() {
                    return (0, b.ft)(this.observable, new b.IY(this))
                }
            }
        },
        94061: (R, s, t) => {
            "use strict";
            t.d(s, {
                u: () => p
            });
            var e = t(39019);

            function p() {
                return (0, e.J)(1)
            }
        },
        6167: (R, s, t) => {
            "use strict";
            t.d(s, {
                h: () => p
            });
            var e = t(43619);

            function p(b, r) {
                return function(u) {
                    return u.lift(new h(b, r))
                }
            }
            class h {
                constructor(r, o) {
                    this.predicate = r, this.thisArg = o
                }
                call(r, o) {
                    return o.subscribe(new f(r, this.predicate, this.thisArg))
                }
            }
            class f extends e.L {
                constructor(r, o, u) {
                    super(r), this.predicate = o, this.thisArg = u, this.count = 0
                }
                _next(r) {
                    let o;
                    try {
                        o = this.predicate.call(this.thisArg, r, this.count++)
                    } catch (u) {
                        return void this.destination.error(u)
                    }
                    o && this.destination.next(r)
                }
            }
        },
        80374: (R, s, t) => {
            "use strict";
            t.d(s, {
                T: () => g,
                v: () => b
            });
            var e = t(43619),
                p = t(50144),
                h = t(59488),
                f = t(87922);

            function b(d, a, n, l) {
                return y => y.lift(new r(d, a, n, l))
            }
            class r {
                constructor(a, n, l, y) {
                    this.keySelector = a, this.elementSelector = n, this.durationSelector = l, this.subjectSelector = y
                }
                call(a, n) {
                    return n.subscribe(new o(a, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector))
                }
            }
            class o extends e.L {
                constructor(a, n, l, y, _) {
                    super(a), this.keySelector = n, this.elementSelector = l, this.durationSelector = y, this.subjectSelector = _, this.groups = null, this.attemptedToUnsubscribe = !1, this.count = 0
                }
                _next(a) {
                    let n;
                    try {
                        n = this.keySelector(a)
                    } catch (l) {
                        return void this.error(l)
                    }
                    this._group(a, n)
                }
                _group(a, n) {
                    let l = this.groups;
                    l || (l = this.groups = new Map);
                    let _, y = l.get(n);
                    if (this.elementSelector) try {
                        _ = this.elementSelector(a)
                    } catch (v) {
                        this.error(v)
                    } else _ = a;
                    if (!y) {
                        y = this.subjectSelector ? this.subjectSelector() : new f.xQ, l.set(n, y);
                        const v = new g(n, y, this);
                        if (this.destination.next(v), this.durationSelector) {
                            let w;
                            try {
                                w = this.durationSelector(new g(n, y))
                            } catch (C) {
                                return void this.error(C)
                            }
                            this.add(w.subscribe(new u(n, y, this)))
                        }
                    }
                    y.closed || y.next(_)
                }
                _error(a) {
                    const n = this.groups;
                    n && (n.forEach((l, y) => {
                        l.error(a)
                    }), n.clear()), this.destination.error(a)
                }
                _complete() {
                    const a = this.groups;
                    a && (a.forEach((n, l) => {
                        n.complete()
                    }), a.clear()), this.destination.complete()
                }
                removeGroup(a) {
                    this.groups.delete(a)
                }
                unsubscribe() {
                    this.closed || (this.attemptedToUnsubscribe = !0, 0 === this.count && super.unsubscribe())
                }
            }
            class u extends e.L {
                constructor(a, n, l) {
                    super(n), this.key = a, this.group = n, this.parent = l
                }
                _next(a) {
                    this.complete()
                }
                _unsubscribe() {
                    const {
                        parent: a,
                        key: n
                    } = this;
                    this.key = this.parent = null, a && a.removeGroup(n)
                }
            }
            class g extends h.y {
                constructor(a, n, l) {
                    super(), this.key = a, this.groupSubject = n, this.refCountSubscription = l
                }
                _subscribe(a) {
                    const n = new p.w,
                        {
                            refCountSubscription: l,
                            groupSubject: y
                        } = this;
                    return l && !l.closed && n.add(new c(l)), n.add(y.subscribe(a)), n
                }
            }
            class c extends p.w {
                constructor(a) {
                    super(), this.parent = a, a.count++
                }
                unsubscribe() {
                    const a = this.parent;
                    !a.closed && !this.closed && (super.unsubscribe(), a.count -= 1, 0 === a.count && a.attemptedToUnsubscribe && a.unsubscribe())
                }
            }
        },
        32974: (R, s, t) => {
            "use strict";
            t.d(s, {
                U: () => p
            });
            var e = t(43619);

            function p(b, r) {
                return function(u) {
                    if ("function" != typeof b) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                    return u.lift(new h(b, r))
                }
            }
            class h {
                constructor(r, o) {
                    this.project = r, this.thisArg = o
                }
                call(r, o) {
                    return o.subscribe(new f(r, this.project, this.thisArg))
                }
            }
            class f extends e.L {
                constructor(r, o, u) {
                    super(r), this.project = o, this.count = 0, this.thisArg = u || this
                }
                _next(r) {
                    let o;
                    try {
                        o = this.project.call(this.thisArg, r, this.count++)
                    } catch (u) {
                        return void this.destination.error(u)
                    }
                    this.destination.next(o)
                }
            }
        },
        39019: (R, s, t) => {
            "use strict";
            t.d(s, {
                J: () => h
            });
            var e = t(13223),
                p = t(40601);

            function h(f = Number.POSITIVE_INFINITY) {
                return (0, e.zg)(p.y, f)
            }
        },
        13223: (R, s, t) => {
            "use strict";
            t.d(s, {
                VS: () => o,
                zg: () => f
            });
            var e = t(32974),
                p = t(96056),
                h = t(24323);

            function f(u, g, c = Number.POSITIVE_INFINITY) {
                return "function" == typeof g ? d => d.pipe(f((a, n) => (0, p.D)(u(a, n)).pipe((0, e.U)((l, y) => g(a, l, n, y))), c)) : ("number" == typeof g && (c = g), d => d.lift(new b(u, c)))
            }
            class b {
                constructor(g, c = Number.POSITIVE_INFINITY) {
                    this.project = g, this.concurrent = c
                }
                call(g, c) {
                    return c.subscribe(new r(g, this.project, this.concurrent))
                }
            }
            class r extends h.Ds {
                constructor(g, c, d = Number.POSITIVE_INFINITY) {
                    super(g), this.project = c, this.concurrent = d, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
                }
                _next(g) {
                    this.active < this.concurrent ? this._tryNext(g) : this.buffer.push(g)
                }
                _tryNext(g) {
                    let c;
                    const d = this.index++;
                    try {
                        c = this.project(g, d)
                    } catch (a) {
                        return void this.destination.error(a)
                    }
                    this.active++, this._innerSub(c)
                }
                _innerSub(g) {
                    const c = new h.IY(this),
                        d = this.destination;
                    d.add(c);
                    const a = (0, h.ft)(g, c);
                    a !== c && d.add(a)
                }
                _complete() {
                    this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
                }
                notifyNext(g) {
                    this.destination.next(g)
                }
                notifyComplete() {
                    const g = this.buffer;
                    this.active--, g.length > 0 ? this._next(g.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                }
            }
            const o = f
        },
        87167: (R, s, t) => {
            "use strict";
            t.d(s, {
                QV: () => h,
                ht: () => b
            });
            var e = t(43619),
                p = t(29944);

            function h(o, u = 0) {
                return function(c) {
                    return c.lift(new f(o, u))
                }
            }
            class f {
                constructor(u, g = 0) {
                    this.scheduler = u, this.delay = g
                }
                call(u, g) {
                    return g.subscribe(new b(u, this.scheduler, this.delay))
                }
            }
            class b extends e.L {
                constructor(u, g, c = 0) {
                    super(u), this.scheduler = g, this.delay = c
                }
                static dispatch(u) {
                    const {
                        notification: g,
                        destination: c
                    } = u;
                    g.observe(c), this.unsubscribe()
                }
                scheduleMessage(u) {
                    this.destination.add(this.scheduler.schedule(b.dispatch, this.delay, new r(u, this.destination)))
                }
                _next(u) {
                    this.scheduleMessage(p.P.createNext(u))
                }
                _error(u) {
                    this.scheduleMessage(p.P.createError(u)), this.unsubscribe()
                }
                _complete() {
                    this.scheduleMessage(p.P.createComplete()), this.unsubscribe()
                }
            }
            class r {
                constructor(u, g) {
                    this.notification = u, this.destination = g
                }
            }
        },
        98153: (R, s, t) => {
            "use strict";
            t.d(s, {
                x: () => p
            });
            var e = t(43619);

            function p() {
                return function(r) {
                    return r.lift(new h(r))
                }
            }
            class h {
                constructor(r) {
                    this.connectable = r
                }
                call(r, o) {
                    const {
                        connectable: u
                    } = this;
                    u._refCount++;
                    const g = new f(r, u),
                        c = o.subscribe(g);
                    return g.closed || (g.connection = u.connect()), c
                }
            }
            class f extends e.L {
                constructor(r, o) {
                    super(r), this.connectable = o
                }
                _unsubscribe() {
                    const {
                        connectable: r
                    } = this;
                    if (!r) return void(this.connection = null);
                    this.connectable = null;
                    const o = r._refCount;
                    if (o <= 0) return void(this.connection = null);
                    if (r._refCount = o - 1, o > 1) return void(this.connection = null);
                    const {
                        connection: u
                    } = this, g = r._connection;
                    this.connection = null, g && (!u || g === u) && g.unsubscribe()
                }
            }
        },
        71359: (R, s, t) => {
            "use strict";
            t.d(s, {
                r: () => h
            });
            var e = t(59488),
                p = t(50144);

            function h(f, b) {
                return new e.y(r => {
                    const o = new p.w;
                    let u = 0;
                    return o.add(b.schedule(function() {
                        u !== f.length ? (r.next(f[u++]), r.closed || o.add(this.schedule())) : r.complete()
                    })), o
                })
            }
        },
        33505: (R, s, t) => {
            "use strict";
            t.d(s, {
                x: () => n
            });
            var e = t(59488),
                p = t(50144),
                h = t(10402),
                r = t(71359),
                o = t(54693),
                c = t(84140),
                d = t(15555);

            function n(l, y) {
                if (null != l) {
                    if (function g(l) {
                            return l && "function" == typeof l[h.L]
                        }(l)) return function f(l, y) {
                        return new e.y(_ => {
                            const v = new p.w;
                            return v.add(y.schedule(() => {
                                const w = l[h.L]();
                                v.add(w.subscribe({
                                    next(C) {
                                        v.add(y.schedule(() => _.next(C)))
                                    },
                                    error(C) {
                                        v.add(y.schedule(() => _.error(C)))
                                    },
                                    complete() {
                                        v.add(y.schedule(() => _.complete()))
                                    }
                                }))
                            })), v
                        })
                    }(l, y);
                    if ((0, c.t)(l)) return function b(l, y) {
                        return new e.y(_ => {
                            const v = new p.w;
                            return v.add(y.schedule(() => l.then(w => {
                                v.add(y.schedule(() => {
                                    _.next(w), v.add(y.schedule(() => _.complete()))
                                }))
                            }, w => {
                                v.add(y.schedule(() => _.error(w)))
                            }))), v
                        })
                    }(l, y);
                    if ((0, d.z)(l)) return (0, r.r)(l, y);
                    if (function a(l) {
                            return l && "function" == typeof l[o.hZ]
                        }(l) || "string" == typeof l) return function u(l, y) {
                        if (!l) throw new Error("Iterable cannot be null");
                        return new e.y(_ => {
                            const v = new p.w;
                            let w;
                            return v.add(() => {
                                w && "function" == typeof w.return && w.return()
                            }), v.add(y.schedule(() => {
                                w = l[o.hZ](), v.add(y.schedule(function() {
                                    if (_.closed) return;
                                    let C, E;
                                    try {
                                        const S = w.next();
                                        C = S.value, E = S.done
                                    } catch (S) {
                                        return void _.error(S)
                                    }
                                    E ? _.complete() : (_.next(C), this.schedule())
                                }))
                            })), v
                        })
                    }(l, y)
                }
                throw new TypeError((null !== l && typeof l || l) + " is not observable")
            }
        },
        62637: (R, s, t) => {
            "use strict";
            t.d(s, {
                o: () => h
            });
            var e = t(50144);
            class p extends e.w {
                constructor(b, r) {
                    super()
                }
                schedule(b, r = 0) {
                    return this
                }
            }
            class h extends p {
                constructor(b, r) {
                    super(b, r), this.scheduler = b, this.work = r, this.pending = !1
                }
                schedule(b, r = 0) {
                    if (this.closed) return this;
                    this.state = b;
                    const o = this.id,
                        u = this.scheduler;
                    return null != o && (this.id = this.recycleAsyncId(u, o, r)), this.pending = !0, this.delay = r, this.id = this.id || this.requestAsyncId(u, this.id, r), this
                }
                requestAsyncId(b, r, o = 0) {
                    return setInterval(b.flush.bind(b, this), o)
                }
                recycleAsyncId(b, r, o = 0) {
                    if (null !== o && this.delay === o && !1 === this.pending) return r;
                    clearInterval(r)
                }
                execute(b, r) {
                    if (this.closed) return new Error("executing a cancelled action");
                    this.pending = !1;
                    const o = this._execute(b, r);
                    if (o) return o;
                    !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                }
                _execute(b, r) {
                    let u, o = !1;
                    try {
                        this.work(b)
                    } catch (g) {
                        o = !0, u = !!g && g || new Error(g)
                    }
                    if (o) return this.unsubscribe(), u
                }
                _unsubscribe() {
                    const b = this.id,
                        r = this.scheduler,
                        o = r.actions,
                        u = o.indexOf(this);
                    this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== u && o.splice(u, 1), null != b && (this.id = this.recycleAsyncId(r, b, null)), this.delay = null
                }
            }
        },
        41680: (R, s, t) => {
            "use strict";
            t.d(s, {
                v: () => p
            });
            var e = t(97506);
            class p extends e.b {
                constructor(f, b = e.b.now) {
                    super(f, () => p.delegate && p.delegate !== this ? p.delegate.now() : b()), this.actions = [], this.active = !1, this.scheduled = void 0
                }
                schedule(f, b = 0, r) {
                    return p.delegate && p.delegate !== this ? p.delegate.schedule(f, b, r) : super.schedule(f, b, r)
                }
                flush(f) {
                    const {
                        actions: b
                    } = this;
                    if (this.active) return void b.push(f);
                    let r;
                    this.active = !0;
                    do {
                        if (r = f.execute(f.state, f.delay)) break
                    } while (f = b.shift());
                    if (this.active = !1, r) {
                        for (; f = b.shift();) f.unsubscribe();
                        throw r
                    }
                }
            }
        },
        98704: (R, s, t) => {
            "use strict";
            t.d(s, {
                e: () => a,
                E: () => d
            });
            let e = 1;
            const p = Promise.resolve(),
                h = {};

            function f(n) {
                return n in h && (delete h[n], !0)
            }
            const b = {
                setImmediate(n) {
                    const l = e++;
                    return h[l] = !0, p.then(() => f(l) && n()), l
                },
                clearImmediate(n) {
                    f(n)
                }
            };
            var o = t(62637),
                g = t(41680);
            const d = new class c extends g.v {
                    flush(l) {
                        this.active = !0, this.scheduled = void 0;
                        const {
                            actions: y
                        } = this;
                        let _, v = -1,
                            w = y.length;
                        l = l || y.shift();
                        do {
                            if (_ = l.execute(l.state, l.delay)) break
                        } while (++v < w && (l = y.shift()));
                        if (this.active = !1, _) {
                            for (; ++v < w && (l = y.shift());) l.unsubscribe();
                            throw _
                        }
                    }
                }(class u extends o.o {
                    constructor(l, y) {
                        super(l, y), this.scheduler = l, this.work = y
                    }
                    requestAsyncId(l, y, _ = 0) {
                        return null !== _ && _ > 0 ? super.requestAsyncId(l, y, _) : (l.actions.push(this), l.scheduled || (l.scheduled = b.setImmediate(l.flush.bind(l, null))))
                    }
                    recycleAsyncId(l, y, _ = 0) {
                        if (null !== _ && _ > 0 || null === _ && this.delay > 0) return super.recycleAsyncId(l, y, _);
                        0 === l.actions.length && (b.clearImmediate(y), l.scheduled = void 0)
                    }
                }),
                a = d
        },
        22229: (R, s, t) => {
            "use strict";
            t.d(s, {
                P: () => f,
                z: () => h
            });
            var e = t(62637);
            const h = new(t(41680).v)(e.o),
                f = h
        },
        1044: (R, s, t) => {
            "use strict";
            t.d(s, {
                c: () => r,
                N: () => b
            });
            var e = t(62637),
                h = t(41680);
            const b = new class f extends h.v {}(class p extends e.o {
                    constructor(u, g) {
                        super(u, g), this.scheduler = u, this.work = g
                    }
                    schedule(u, g = 0) {
                        return g > 0 ? super.schedule(u, g) : (this.delay = g, this.state = u, this.scheduler.flush(this), this)
                    }
                    execute(u, g) {
                        return g > 0 || this.closed ? super.execute(u, g) : this._execute(u, g)
                    }
                    requestAsyncId(u, g, c = 0) {
                        return null !== c && c > 0 || null === c && this.delay > 0 ? super.requestAsyncId(u, g, c) : u.flush(this)
                    }
                }),
                r = b
        },
        54693: (R, s, t) => {
            "use strict";
            t.d(s, {
                hZ: () => p
            });
            const p = function e() {
                return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
            }()
        },
        10402: (R, s, t) => {
            "use strict";
            t.d(s, {
                L: () => e
            });
            const e = "function" == typeof Symbol && Symbol.observable || "@@observable"
        },
        45137: (R, s, t) => {
            "use strict";
            t.d(s, {
                b: () => e
            });
            const e = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
        },
        34477: (R, s, t) => {
            "use strict";
            t.d(s, {
                W: () => p
            });
            const p = (() => {
                function h() {
                    return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
                }
                return h.prototype = Object.create(Error.prototype), h
            })()
        },
        8685: (R, s, t) => {
            "use strict";
            t.d(s, {
                K: () => p
            });
            const p = (() => {
                function h() {
                    return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
                }
                return h.prototype = Object.create(Error.prototype), h
            })()
        },
        35093: (R, s, t) => {
            "use strict";
            t.d(s, {
                N: () => p
            });
            const p = (() => {
                function h() {
                    return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                }
                return h.prototype = Object.create(Error.prototype), h
            })()
        },
        95025: (R, s, t) => {
            "use strict";
            t.d(s, {
                W: () => p
            });
            const p = (() => {
                function h() {
                    return Error.call(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this
                }
                return h.prototype = Object.create(Error.prototype), h
            })()
        },
        31159: (R, s, t) => {
            "use strict";
            t.d(s, {
                B: () => p
            });
            const p = (() => {
                function h(f) {
                    return Error.call(this), this.message = f ? `${f.length} errors occurred during unsubscription:\n${f.map((b,r)=>`${r+1}) ${b.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = f, this
                }
                return h.prototype = Object.create(Error.prototype), h
            })()
        },
        79618: (R, s, t) => {
            "use strict";
            t.d(s, {
                _: () => p
            });
            var e = t(43619);

            function p(h) {
                for (; h;) {
                    const {
                        closed: f,
                        destination: b,
                        isStopped: r
                    } = h;
                    if (f || r) return !1;
                    h = b && b instanceof e.L ? b : null
                }
                return !0
            }
        },
        20869: (R, s, t) => {
            "use strict";

            function e(p) {
                setTimeout(() => {
                    throw p
                }, 0)
            }
            t.d(s, {
                z: () => e
            })
        },
        40601: (R, s, t) => {
            "use strict";

            function e(p) {
                return p
            }
            t.d(s, {
                y: () => e
            })
        },
        35212: (R, s, t) => {
            "use strict";
            t.d(s, {
                k: () => e
            });
            const e = Array.isArray || (p => p && "number" == typeof p.length)
        },
        15555: (R, s, t) => {
            "use strict";
            t.d(s, {
                z: () => e
            });
            const e = p => p && "number" == typeof p.length && "function" != typeof p
        },
        83932: (R, s, t) => {
            "use strict";

            function e(p) {
                return "function" == typeof p
            }
            t.d(s, {
                m: () => e
            })
        },
        43618: (R, s, t) => {
            "use strict";
            t.d(s, {
                k: () => p
            });
            var e = t(35212);

            function p(h) {
                return !(0, e.k)(h) && h - parseFloat(h) + 1 >= 0
            }
        },
        21633: (R, s, t) => {
            "use strict";

            function e(p) {
                return null !== p && "object" == typeof p
            }
            t.d(s, {
                K: () => e
            })
        },
        84140: (R, s, t) => {
            "use strict";

            function e(p) {
                return !!p && "function" != typeof p.subscribe && "function" == typeof p.then
            }
            t.d(s, {
                t: () => e
            })
        },
        54234: (R, s, t) => {
            "use strict";

            function e(p) {
                return p && "function" == typeof p.schedule
            }
            t.d(s, {
                K: () => e
            })
        },
        11027: (R, s, t) => {
            "use strict";

            function e() {}
            t.d(s, {
                Z: () => e
            })
        },
        1958: (R, s, t) => {
            "use strict";

            function e(p, h) {
                function f() {
                    return !f.pred.apply(f.thisArg, arguments)
                }
                return f.pred = p, f.thisArg = h, f
            }
            t.d(s, {
                f: () => e
            })
        },
        77817: (R, s, t) => {
            "use strict";
            t.d(s, {
                U: () => h,
                z: () => p
            });
            var e = t(40601);

            function p(...f) {
                return h(f)
            }

            function h(f) {
                return 0 === f.length ? e.y : 1 === f.length ? f[0] : function(r) {
                    return f.reduce((o, u) => u(o), r)
                }
            }
        },
        90508: (R, s, t) => {
            "use strict";
            t.d(s, {
                s: () => d
            });
            var e = t(40060),
                p = t(20869),
                f = t(54693),
                r = t(10402),
                u = t(15555),
                g = t(84140),
                c = t(21633);
            const d = a => {
                if (a && "function" == typeof a[r.L]) return (a => n => {
                    const l = a[r.L]();
                    if ("function" != typeof l.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                    return l.subscribe(n)
                })(a);
                if ((0, u.z)(a)) return (0, e.V)(a);
                if ((0, g.t)(a)) return (a => n => (a.then(l => {
                    n.closed || (n.next(l), n.complete())
                }, l => n.error(l)).then(null, p.z), n))(a);
                if (a && "function" == typeof a[f.hZ]) return (a => n => {
                    const l = a[f.hZ]();
                    for (;;) {
                        let y;
                        try {
                            y = l.next()
                        } catch (_) {
                            return n.error(_), n
                        }
                        if (y.done) {
                            n.complete();
                            break
                        }
                        if (n.next(y.value), n.closed) break
                    }
                    return "function" == typeof l.return && n.add(() => {
                        l.return && l.return()
                    }), n
                })(a); {
                    const l = `You provided ${(0,c.K)(a)?"an invalid object":`'${a}'`} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`;
                    throw new TypeError(l)
                }
            }
        },
        40060: (R, s, t) => {
            "use strict";
            t.d(s, {
                V: () => e
            });
            const e = p => h => {
                for (let f = 0, b = p.length; f < b && !h.closed; f++) h.next(p[f]);
                h.complete()
            }
        },
        78540: (R, s, t) => {
            "use strict";
            t.d(s, {
                D: () => b
            });
            var e = t(43619);
            class p extends e.L {
                constructor(o, u, g) {
                    super(), this.parent = o, this.outerValue = u, this.outerIndex = g, this.index = 0
                }
                _next(o) {
                    this.parent.notifyNext(this.outerValue, o, this.outerIndex, this.index++, this)
                }
                _error(o) {
                    this.parent.notifyError(o, this), this.unsubscribe()
                }
                _complete() {
                    this.parent.notifyComplete(this), this.unsubscribe()
                }
            }
            var h = t(90508),
                f = t(59488);

            function b(r, o, u, g, c = new p(r, u, g)) {
                if (!c.closed) return o instanceof f.y ? o.subscribe(c) : (0, h.s)(o)(c)
            }
        },
        58551: (R, s, t) => {
            "use strict";
            t.r(s), t.d(s, {
                audit: () => p,
                auditTime: () => o,
                buffer: () => u,
                bufferCount: () => a,
                bufferTime: () => v,
                bufferToggle: () => P,
                bufferWhen: () => se,
                catchError: () => ne,
                combineAll: () => X,
                combineLatest: () => _e,
                concat: () => xe,
                concatAll: () => J.u,
                concatMap: () => D,
                concatMapTo: () => B,
                count: () => V,
                debounce: () => U,
                debounceTime: () => me,
                defaultIfEmpty: () => Te,
                delay: () => z,
                delayWhen: () => Be,
                dematerialize: () => je,
                distinct: () => Ge,
                distinctUntilChanged: () => Ke,
                distinctUntilKeyChanged: () => Ve,
                elementAt: () => Re,
                endWith: () => ke,
                every: () => We,
                exhaust: () => st,
                exhaustMap: () => dt,
                expand: () => bt,
                filter: () => Ye.h,
                finalize: () => yt,
                find: () => Et,
                findIndex: () => Gt,
                first: () => Kt,
                flatMap: () => H.VS,
                groupBy: () => Jt.v,
                ignoreElements: () => Qt,
                isEmpty: () => Xt,
                last: () => rn,
                map: () => it.U,
                mapTo: () => sn,
                materialize: () => cn,
                max: () => fn,
                merge: () => gn,
                mergeAll: () => bn.J,
                mergeMap: () => H.zg,
                mergeMapTo: () => mn,
                mergeScan: () => yn,
                min: () => En,
                multicast: () => ht,
                observeOn: () => Cn.QV,
                onErrorResumeNext: () => In,
                pairwise: () => Rn,
                partition: () => On,
                pluck: () => Nn,
                publish: () => Pn,
                publishBehavior: () => kn,
                publishLast: () => jn,
                publishReplay: () => Fn,
                race: () => Un,
                reduce: () => xt,
                refCount: () => jt.x,
                repeat: () => $n,
                repeatWhen: () => Vn,
                retry: () => Kn,
                retryWhen: () => Zn,
                sample: () => qn,
                sampleTime: () => nr,
                scan: () => It,
                sequenceEqual: () => or,
                share: () => hr,
                shareReplay: () => dr,
                single: () => pr,
                skip: () => mr,
                skipLast: () => _r,
                skipUntil: () => Sr,
                skipWhile: () => xr,
                startWith: () => Mr,
                subscribeOn: () => Tr,
                switchAll: () => Pr,
                switchMap: () => wt,
                switchMapTo: () => Dr,
                take: () => ge,
                takeLast: () => Ct,
                takeUntil: () => kr,
                takeWhile: () => Fr,
                tap: () => Hr,
                throttle: () => Gr,
                throttleTime: () => Qr,
                throwIfEmpty: () => Qe,
                timeInterval: () => es,
                timeout: () => is,
                timeoutWith: () => Wt,
                timestamp: () => os,
                toArray: () => us,
                window: () => ls,
                windowCount: () => fs,
                windowTime: () => bs,
                windowToggle: () => ws,
                windowWhen: () => Is,
                withLatestFrom: () => As,
                zip: () => Os,
                zipAll: () => Ns
            });
            var e = t(24323);

            function p(A) {
                return function(m) {
                    return m.lift(new h(A))
                }
            }
            class h {
                constructor(i) {
                    this.durationSelector = i
                }
                call(i, m) {
                    return m.subscribe(new f(i, this.durationSelector))
                }
            }
            class f extends e.Ds {
                constructor(i, m) {
                    super(i), this.durationSelector = m, this.hasValue = !1
                }
                _next(i) {
                    if (this.value = i, this.hasValue = !0, !this.throttled) {
                        let m;
                        try {
                            const {
                                durationSelector: W
                            } = this;
                            m = W(i)
                        } catch (W) {
                            return this.destination.error(W)
                        }
                        const M = (0, e.ft)(m, new e.IY(this));
                        !M || M.closed ? this.clearThrottle() : this.add(this.throttled = M)
                    }
                }
                clearThrottle() {
                    const {
                        value: i,
                        hasValue: m,
                        throttled: M
                    } = this;
                    M && (this.remove(M), this.throttled = void 0, M.unsubscribe()), m && (this.value = void 0, this.hasValue = !1, this.destination.next(i))
                }
                notifyNext() {
                    this.clearThrottle()
                }
                notifyComplete() {
                    this.clearThrottle()
                }
            }
            var b = t(22229),
                r = t(55580);

            function o(A, i = b.P) {
                return p(() => (0, r.H)(A, i))
            }

            function u(A) {
                return function(m) {
                    return m.lift(new g(A))
                }
            }
            class g {
                constructor(i) {
                    this.closingNotifier = i
                }
                call(i, m) {
                    return m.subscribe(new c(i, this.closingNotifier))
                }
            }
            class c extends e.Ds {
                constructor(i, m) {
                    super(i), this.buffer = [], this.add((0, e.ft)(m, new e.IY(this)))
                }
                _next(i) {
                    this.buffer.push(i)
                }
                notifyNext() {
                    const i = this.buffer;
                    this.buffer = [], this.destination.next(i)
                }
            }
            var d = t(43619);

            function a(A, i = null) {
                return function(M) {
                    return M.lift(new n(A, i))
                }
            }
            class n {
                constructor(i, m) {
                    this.bufferSize = i, this.startBufferEvery = m, this.subscriberClass = m && i !== m ? y : l
                }
                call(i, m) {
                    return m.subscribe(new this.subscriberClass(i, this.bufferSize, this.startBufferEvery))
                }
            }
            class l extends d.L {
                constructor(i, m) {
                    super(i), this.bufferSize = m, this.buffer = []
                }
                _next(i) {
                    const m = this.buffer;
                    m.push(i), m.length == this.bufferSize && (this.destination.next(m), this.buffer = [])
                }
                _complete() {
                    const i = this.buffer;
                    i.length > 0 && this.destination.next(i), super._complete()
                }
            }
            class y extends d.L {
                constructor(i, m, M) {
                    super(i), this.bufferSize = m, this.startBufferEvery = M, this.buffers = [], this.count = 0
                }
                _next(i) {
                    const {
                        bufferSize: m,
                        startBufferEvery: M,
                        buffers: W,
                        count: le
                    } = this;
                    this.count++, le % M == 0 && W.push([]);
                    for (let Ie = W.length; Ie--;) {
                        const $e = W[Ie];
                        $e.push(i), $e.length === m && (W.splice(Ie, 1), this.destination.next($e))
                    }
                }
                _complete() {
                    const {
                        buffers: i,
                        destination: m
                    } = this;
                    for (; i.length > 0;) {
                        let M = i.shift();
                        M.length > 0 && m.next(M)
                    }
                    super._complete()
                }
            }
            var _ = t(54234);

            function v(A) {
                let i = arguments.length,
                    m = b.P;
                (0, _.K)(arguments[arguments.length - 1]) && (m = arguments[arguments.length - 1], i--);
                let M = null;
                i >= 2 && (M = arguments[1]);
                let W = Number.POSITIVE_INFINITY;
                return i >= 3 && (W = arguments[2]),
                    function(Ie) {
                        return Ie.lift(new w(A, M, W, m))
                    }
            }
            class w {
                constructor(i, m, M, W) {
                    this.bufferTimeSpan = i, this.bufferCreationInterval = m, this.maxBufferSize = M, this.scheduler = W
                }
                call(i, m) {
                    return m.subscribe(new E(i, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler))
                }
            }
            class C {
                constructor() {
                    this.buffer = []
                }
            }
            class E extends d.L {
                constructor(i, m, M, W, le) {
                    super(i), this.bufferTimeSpan = m, this.bufferCreationInterval = M, this.maxBufferSize = W, this.scheduler = le, this.contexts = [];
                    const Ie = this.openContext();
                    if (this.timespanOnly = null == M || M < 0, this.timespanOnly) this.add(Ie.closeAction = le.schedule(S, m, {
                        subscriber: this,
                        context: Ie,
                        bufferTimeSpan: m
                    }));
                    else {
                        const ze = {
                            bufferTimeSpan: m,
                            bufferCreationInterval: M,
                            subscriber: this,
                            scheduler: le
                        };
                        this.add(Ie.closeAction = le.schedule(O, m, {
                            subscriber: this,
                            context: Ie
                        })), this.add(le.schedule(x, M, ze))
                    }
                }
                _next(i) {
                    const m = this.contexts,
                        M = m.length;
                    let W;
                    for (let le = 0; le < M; le++) {
                        const Ie = m[le],
                            $e = Ie.buffer;
                        $e.push(i), $e.length == this.maxBufferSize && (W = Ie)
                    }
                    W && this.onBufferFull(W)
                }
                _error(i) {
                    this.contexts.length = 0, super._error(i)
                }
                _complete() {
                    const {
                        contexts: i,
                        destination: m
                    } = this;
                    for (; i.length > 0;) {
                        const M = i.shift();
                        m.next(M.buffer)
                    }
                    super._complete()
                }
                _unsubscribe() {
                    this.contexts = null
                }
                onBufferFull(i) {
                    this.closeContext(i);
                    const m = i.closeAction;
                    if (m.unsubscribe(), this.remove(m), !this.closed && this.timespanOnly) {
                        i = this.openContext();
                        const M = this.bufferTimeSpan;
                        this.add(i.closeAction = this.scheduler.schedule(S, M, {
                            subscriber: this,
                            context: i,
                            bufferTimeSpan: M
                        }))
                    }
                }
                openContext() {
                    const i = new C;
                    return this.contexts.push(i), i
                }
                closeContext(i) {
                    this.destination.next(i.buffer);
                    const m = this.contexts;
                    (m ? m.indexOf(i) : -1) >= 0 && m.splice(m.indexOf(i), 1)
                }
            }

            function S(A) {
                const i = A.subscriber,
                    m = A.context;
                m && i.closeContext(m), i.closed || (A.context = i.openContext(), A.context.closeAction = this.schedule(A, A.bufferTimeSpan))
            }

            function x(A) {
                const {
                    bufferCreationInterval: i,
                    bufferTimeSpan: m,
                    subscriber: M,
                    scheduler: W
                } = A, le = M.openContext();
                M.closed || (M.add(le.closeAction = W.schedule(O, m, {
                    subscriber: M,
                    context: le
                })), this.schedule(A, i))
            }

            function O(A) {
                const {
                    subscriber: i,
                    context: m
                } = A;
                i.closeContext(m)
            }
            var I = t(50144),
                T = t(78540),
                k = t(59048);

            function P(A, i) {
                return function(M) {
                    return M.lift(new Z(A, i))
                }
            }
            class Z {
                constructor(i, m) {
                    this.openings = i, this.closingSelector = m
                }
                call(i, m) {
                    return m.subscribe(new ie(i, this.openings, this.closingSelector))
                }
            }
            class ie extends k.L {
                constructor(i, m, M) {
                    super(i), this.closingSelector = M, this.contexts = [], this.add((0, T.D)(this, m))
                }
                _next(i) {
                    const m = this.contexts,
                        M = m.length;
                    for (let W = 0; W < M; W++) m[W].buffer.push(i)
                }
                _error(i) {
                    const m = this.contexts;
                    for (; m.length > 0;) {
                        const M = m.shift();
                        M.subscription.unsubscribe(), M.buffer = null, M.subscription = null
                    }
                    this.contexts = null, super._error(i)
                }
                _complete() {
                    const i = this.contexts;
                    for (; i.length > 0;) {
                        const m = i.shift();
                        this.destination.next(m.buffer), m.subscription.unsubscribe(), m.buffer = null, m.subscription = null
                    }
                    this.contexts = null, super._complete()
                }
                notifyNext(i, m) {
                    i ? this.closeBuffer(i) : this.openBuffer(m)
                }
                notifyComplete(i) {
                    this.closeBuffer(i.context)
                }
                openBuffer(i) {
                    try {
                        const M = this.closingSelector.call(this, i);
                        M && this.trySubscribe(M)
                    } catch (m) {
                        this._error(m)
                    }
                }
                closeBuffer(i) {
                    const m = this.contexts;
                    if (m && i) {
                        const {
                            buffer: M,
                            subscription: W
                        } = i;
                        this.destination.next(M), m.splice(m.indexOf(i), 1), this.remove(W), W.unsubscribe()
                    }
                }
                trySubscribe(i) {
                    const m = this.contexts,
                        W = new I.w,
                        le = {
                            buffer: [],
                            subscription: W
                        };
                    m.push(le);
                    const Ie = (0, T.D)(this, i, le);
                    !Ie || Ie.closed ? this.closeBuffer(le) : (Ie.context = le, this.add(Ie), W.add(Ie))
                }
            }

            function se(A) {
                return function(i) {
                    return i.lift(new ee(A))
                }
            }
            class ee {
                constructor(i) {
                    this.closingSelector = i
                }
                call(i, m) {
                    return m.subscribe(new j(i, this.closingSelector))
                }
            }
            class j extends e.Ds {
                constructor(i, m) {
                    super(i), this.closingSelector = m, this.subscribing = !1, this.openBuffer()
                }
                _next(i) {
                    this.buffer.push(i)
                }
                _complete() {
                    const i = this.buffer;
                    i && this.destination.next(i), super._complete()
                }
                _unsubscribe() {
                    this.buffer = void 0, this.subscribing = !1
                }
                notifyNext() {
                    this.openBuffer()
                }
                notifyComplete() {
                    this.subscribing ? this.complete() : this.openBuffer()
                }
                openBuffer() {
                    let M, {
                        closingSubscription: i
                    } = this;
                    i && (this.remove(i), i.unsubscribe()), this.buffer && this.destination.next(this.buffer), this.buffer = [];
                    try {
                        const {
                            closingSelector: W
                        } = this;
                        M = W()
                    } catch (W) {
                        return this.error(W)
                    }
                    i = new I.w, this.closingSubscription = i, this.add(i), this.subscribing = !0, i.add((0, e.ft)(M, new e.IY(this))), this.subscribing = !1
                }
            }

            function ne(A) {
                return function(m) {
                    const M = new Y(A),
                        W = m.lift(M);
                    return M.caught = W
                }
            }
            class Y {
                constructor(i) {
                    this.selector = i
                }
                call(i, m) {
                    return m.subscribe(new G(i, this.selector, this.caught))
                }
            }
            class G extends e.Ds {
                constructor(i, m, M) {
                    super(i), this.selector = m, this.caught = M
                }
                error(i) {
                    if (!this.isStopped) {
                        let m;
                        try {
                            m = this.selector(i, this.caught)
                        } catch (le) {
                            return void super.error(le)
                        }
                        this._unsubscribeAndRecycle();
                        const M = new e.IY(this);
                        this.add(M);
                        const W = (0, e.ft)(m, M);
                        W !== M && this.add(W)
                    }
                }
            }
            var K = t(9422);

            function X(A) {
                return i => i.lift(new K.Ms(A))
            }
            var te = t(35212),
                de = t(96056);

            function _e(...A) {
                let i = null;
                return "function" == typeof A[A.length - 1] && (i = A.pop()), 1 === A.length && (0, te.k)(A[0]) && (A = A[0].slice()), m => m.lift.call((0, de.D)([m, ...A]), new K.Ms(i))
            }
            var Ee = t(94732);

            function xe(...A) {
                return i => i.lift.call((0, Ee.z)(i, ...A))
            }
            var J = t(94061),
                H = t(13223);

            function D(A, i) {
                return (0, H.zg)(A, i, 1)
            }

            function B(A, i) {
                return D(() => A, i)
            }

            function V(A) {
                return i => i.lift(new N(A, i))
            }
            class N {
                constructor(i, m) {
                    this.predicate = i, this.source = m
                }
                call(i, m) {
                    return m.subscribe(new L(i, this.predicate, this.source))
                }
            }
            class L extends d.L {
                constructor(i, m, M) {
                    super(i), this.predicate = m, this.source = M, this.count = 0, this.index = 0
                }
                _next(i) {
                    this.predicate ? this._tryPredicate(i) : this.count++
                }
                _tryPredicate(i) {
                    let m;
                    try {
                        m = this.predicate(i, this.index++, this.source)
                    } catch (M) {
                        return void this.destination.error(M)
                    }
                    m && this.count++
                }
                _complete() {
                    this.destination.next(this.count), this.destination.complete()
                }
            }

            function U(A) {
                return i => i.lift(new ae(A))
            }
            class ae {
                constructor(i) {
                    this.durationSelector = i
                }
                call(i, m) {
                    return m.subscribe(new ye(i, this.durationSelector))
                }
            }
            class ye extends e.Ds {
                constructor(i, m) {
                    super(i), this.durationSelector = m, this.hasValue = !1
                }
                _next(i) {
                    try {
                        const m = this.durationSelector.call(this, i);
                        m && this._tryNext(i, m)
                    } catch (m) {
                        this.destination.error(m)
                    }
                }
                _complete() {
                    this.emitValue(), this.destination.complete()
                }
                _tryNext(i, m) {
                    let M = this.durationSubscription;
                    this.value = i, this.hasValue = !0, M && (M.unsubscribe(), this.remove(M)), M = (0, e.ft)(m, new e.IY(this)), M && !M.closed && this.add(this.durationSubscription = M)
                }
                notifyNext() {
                    this.emitValue()
                }
                notifyComplete() {
                    this.emitValue()
                }
                emitValue() {
                    if (this.hasValue) {
                        const i = this.value,
                            m = this.durationSubscription;
                        m && (this.durationSubscription = void 0, m.unsubscribe(), this.remove(m)), this.value = void 0, this.hasValue = !1, super._next(i)
                    }
                }
            }

            function me(A, i = b.P) {
                return m => m.lift(new be(A, i))
            }
            class be {
                constructor(i, m) {
                    this.dueTime = i, this.scheduler = m
                }
                call(i, m) {
                    return m.subscribe(new Ae(i, this.dueTime, this.scheduler))
                }
            }
            class Ae extends d.L {
                constructor(i, m, M) {
                    super(i), this.dueTime = m, this.scheduler = M, this.debouncedSubscription = null, this.lastValue = null, this.hasValue = !1
                }
                _next(i) {
                    this.clearDebounce(), this.lastValue = i, this.hasValue = !0, this.add(this.debouncedSubscription = this.scheduler.schedule(he, this.dueTime, this))
                }
                _complete() {
                    this.debouncedNext(), this.destination.complete()
                }
                debouncedNext() {
                    if (this.clearDebounce(), this.hasValue) {
                        const {
                            lastValue: i
                        } = this;
                        this.lastValue = null, this.hasValue = !1, this.destination.next(i)
                    }
                }
                clearDebounce() {
                    const i = this.debouncedSubscription;
                    null !== i && (this.remove(i), i.unsubscribe(), this.debouncedSubscription = null)
                }
            }

            function he(A) {
                A.debouncedNext()
            }

            function Te(A = null) {
                return i => i.lift(new Se(A))
            }
            class Se {
                constructor(i) {
                    this.defaultValue = i
                }
                call(i, m) {
                    return m.subscribe(new Pe(i, this.defaultValue))
                }
            }
            class Pe extends d.L {
                constructor(i, m) {
                    super(i), this.defaultValue = m, this.isEmpty = !0
                }
                _next(i) {
                    this.isEmpty = !1, this.destination.next(i)
                }
                _complete() {
                    this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
                }
            }

            function F(A) {
                return A instanceof Date && !isNaN(+A)
            }
            var $ = t(29944);

            function z(A, i = b.P) {
                const M = F(A) ? +A - i.now() : Math.abs(A);
                return W => W.lift(new re(M, i))
            }
            class re {
                constructor(i, m) {
                    this.delay = i, this.scheduler = m
                }
                call(i, m) {
                    return m.subscribe(new pe(i, this.delay, this.scheduler))
                }
            }
            class pe extends d.L {
                constructor(i, m, M) {
                    super(i), this.delay = m, this.scheduler = M, this.queue = [], this.active = !1, this.errored = !1
                }
                static dispatch(i) {
                    const m = i.source,
                        M = m.queue,
                        W = i.scheduler,
                        le = i.destination;
                    for (; M.length > 0 && M[0].time - W.now() <= 0;) M.shift().notification.observe(le);
                    if (M.length > 0) {
                        const Ie = Math.max(0, M[0].time - W.now());
                        this.schedule(i, Ie)
                    } else this.unsubscribe(), m.active = !1
                }
                _schedule(i) {
                    this.active = !0, this.destination.add(i.schedule(pe.dispatch, this.delay, {
                        source: this,
                        destination: this.destination,
                        scheduler: i
                    }))
                }
                scheduleNotification(i) {
                    if (!0 === this.errored) return;
                    const m = this.scheduler,
                        M = new Ce(m.now() + this.delay, i);
                    this.queue.push(M), !1 === this.active && this._schedule(m)
                }
                _next(i) {
                    this.scheduleNotification($.P.createNext(i))
                }
                _error(i) {
                    this.errored = !0, this.queue = [], this.destination.error(i), this.unsubscribe()
                }
                _complete() {
                    this.scheduleNotification($.P.createComplete()), this.unsubscribe()
                }
            }
            class Ce {
                constructor(i, m) {
                    this.time = i, this.notification = m
                }
            }
            var Le = t(59488);

            function Be(A, i) {
                return i ? m => new q(m, i).lift(new De(A)) : m => m.lift(new De(A))
            }
            class De {
                constructor(i) {
                    this.delayDurationSelector = i
                }
                call(i, m) {
                    return m.subscribe(new Q(i, this.delayDurationSelector))
                }
            }
            class Q extends k.L {
                constructor(i, m) {
                    super(i), this.delayDurationSelector = m, this.completed = !1, this.delayNotifierSubscriptions = [], this.index = 0
                }
                notifyNext(i, m, M, W, le) {
                    this.destination.next(i), this.removeSubscription(le), this.tryComplete()
                }
                notifyError(i, m) {
                    this._error(i)
                }
                notifyComplete(i) {
                    const m = this.removeSubscription(i);
                    m && this.destination.next(m), this.tryComplete()
                }
                _next(i) {
                    const m = this.index++;
                    try {
                        const M = this.delayDurationSelector(i, m);
                        M && this.tryDelay(M, i)
                    } catch (M) {
                        this.destination.error(M)
                    }
                }
                _complete() {
                    this.completed = !0, this.tryComplete(), this.unsubscribe()
                }
                removeSubscription(i) {
                    i.unsubscribe();
                    const m = this.delayNotifierSubscriptions.indexOf(i);
                    return -1 !== m && this.delayNotifierSubscriptions.splice(m, 1), i.outerValue
                }
                tryDelay(i, m) {
                    const M = (0, T.D)(this, i, m);
                    M && !M.closed && (this.destination.add(M), this.delayNotifierSubscriptions.push(M))
                }
                tryComplete() {
                    this.completed && 0 === this.delayNotifierSubscriptions.length && this.destination.complete()
                }
            }
            class q extends Le.y {
                constructor(i, m) {
                    super(), this.source = i, this.subscriptionDelay = m
                }
                _subscribe(i) {
                    this.subscriptionDelay.subscribe(new Ne(i, this.source))
                }
            }
            class Ne extends d.L {
                constructor(i, m) {
                    super(), this.parent = i, this.source = m, this.sourceSubscribed = !1
                }
                _next(i) {
                    this.subscribeToSource()
                }
                _error(i) {
                    this.unsubscribe(), this.parent.error(i)
                }
                _complete() {
                    this.unsubscribe(), this.subscribeToSource()
                }
                subscribeToSource() {
                    this.sourceSubscribed || (this.sourceSubscribed = !0, this.unsubscribe(), this.source.subscribe(this.parent))
                }
            }

            function je() {
                return function(i) {
                    return i.lift(new Fe)
                }
            }
            class Fe {
                call(i, m) {
                    return m.subscribe(new Oe(i))
                }
            }
            class Oe extends d.L {
                constructor(i) {
                    super(i)
                }
                _next(i) {
                    i.observe(this.destination)
                }
            }

            function Ge(A, i) {
                return m => m.lift(new Ze(A, i))
            }
            class Ze {
                constructor(i, m) {
                    this.keySelector = i, this.flushes = m
                }
                call(i, m) {
                    return m.subscribe(new He(i, this.keySelector, this.flushes))
                }
            }
            class He extends e.Ds {
                constructor(i, m, M) {
                    super(i), this.keySelector = m, this.values = new Set, M && this.add((0, e.ft)(M, new e.IY(this)))
                }
                notifyNext() {
                    this.values.clear()
                }
                notifyError(i) {
                    this._error(i)
                }
                _next(i) {
                    this.keySelector ? this._useKeySelector(i) : this._finalizeNext(i, i)
                }
                _useKeySelector(i) {
                    let m;
                    const {
                        destination: M
                    } = this;
                    try {
                        m = this.keySelector(i)
                    } catch (W) {
                        return void M.error(W)
                    }
                    this._finalizeNext(m, i)
                }
                _finalizeNext(i, m) {
                    const {
                        values: M
                    } = this;
                    M.has(i) || (M.add(i), this.destination.next(m))
                }
            }

            function Ke(A, i) {
                return m => m.lift(new rt(A, i))
            }
            class rt {
                constructor(i, m) {
                    this.compare = i, this.keySelector = m
                }
                call(i, m) {
                    return m.subscribe(new Xe(i, this.compare, this.keySelector))
                }
            }
            class Xe extends d.L {
                constructor(i, m, M) {
                    super(i), this.keySelector = M, this.hasKey = !1, "function" == typeof m && (this.compare = m)
                }
                compare(i, m) {
                    return i === m
                }
                _next(i) {
                    let m;
                    try {
                        const {
                            keySelector: W
                        } = this;
                        m = W ? W(i) : i
                    } catch (W) {
                        return this.destination.error(W)
                    }
                    let M = !1;
                    if (this.hasKey) try {
                        const {
                            compare: W
                        } = this;
                        M = W(this.key, m)
                    } catch (W) {
                        return this.destination.error(W)
                    } else this.hasKey = !0;
                    M || (this.key = m, this.destination.next(i))
                }
            }

            function Ve(A, i) {
                return Ke((m, M) => i ? i(m[A], M[A]) : m[A] === M[A])
            }
            var qe = t(34477),
                Ye = t(6167),
                tt = t(8685);

            function Qe(A = ue) {
                return i => i.lift(new ce(A))
            }
            class ce {
                constructor(i) {
                    this.errorFactory = i
                }
                call(i, m) {
                    return m.subscribe(new oe(i, this.errorFactory))
                }
            }
            class oe extends d.L {
                constructor(i, m) {
                    super(i), this.errorFactory = m, this.hasValue = !1
                }
                _next(i) {
                    this.hasValue = !0, this.destination.next(i)
                }
                _complete() {
                    if (this.hasValue) return this.destination.complete(); {
                        let i;
                        try {
                            i = this.errorFactory()
                        } catch (m) {
                            i = m
                        }
                        this.destination.error(i)
                    }
                }
            }

            function ue() {
                return new tt.K
            }
            var fe = t(88805);

            function ge(A) {
                return i => 0 === A ? (0, fe.c)() : i.lift(new we(A))
            }
            class we {
                constructor(i) {
                    if (this.total = i, this.total < 0) throw new qe.W
                }
                call(i, m) {
                    return m.subscribe(new Me(i, this.total))
                }
            }
            class Me extends d.L {
                constructor(i, m) {
                    super(i), this.total = m, this.count = 0
                }
                _next(i) {
                    const m = this.total,
                        M = ++this.count;
                    M <= m && (this.destination.next(i), M === m && (this.destination.complete(), this.unsubscribe()))
                }
            }

            function Re(A, i) {
                if (A < 0) throw new qe.W;
                const m = arguments.length >= 2;
                return M => M.pipe((0, Ye.h)((W, le) => le === A), ge(1), m ? Te(i) : Qe(() => new qe.W))
            }
            var Ue = t(9556);

            function ke(...A) {
                return i => (0, Ee.z)(i, (0, Ue.of)(...A))
            }

            function We(A, i) {
                return m => m.lift(new Je(A, i, m))
            }
            class Je {
                constructor(i, m, M) {
                    this.predicate = i, this.thisArg = m, this.source = M
                }
                call(i, m) {
                    return m.subscribe(new et(i, this.predicate, this.thisArg, this.source))
                }
            }
            class et extends d.L {
                constructor(i, m, M, W) {
                    super(i), this.predicate = m, this.thisArg = M, this.source = W, this.index = 0, this.thisArg = M || this
                }
                notifyComplete(i) {
                    this.destination.next(i), this.destination.complete()
                }
                _next(i) {
                    let m = !1;
                    try {
                        m = this.predicate.call(this.thisArg, i, this.index++, this.source)
                    } catch (M) {
                        return void this.destination.error(M)
                    }
                    m || this.notifyComplete(!1)
                }
                _complete() {
                    this.notifyComplete(!0)
                }
            }

            function st() {
                return A => A.lift(new ut)
            }
            class ut {
                call(i, m) {
                    return m.subscribe(new ot(i))
                }
            }
            class ot extends e.Ds {
                constructor(i) {
                    super(i), this.hasCompleted = !1, this.hasSubscription = !1
                }
                _next(i) {
                    this.hasSubscription || (this.hasSubscription = !0, this.add((0, e.ft)(i, new e.IY(this))))
                }
                _complete() {
                    this.hasCompleted = !0, this.hasSubscription || this.destination.complete()
                }
                notifyComplete() {
                    this.hasSubscription = !1, this.hasCompleted && this.destination.complete()
                }
            }
            var it = t(32974);

            function dt(A, i) {
                return i ? m => m.pipe(dt((M, W) => (0, de.D)(A(M, W)).pipe((0, it.U)((le, Ie) => i(M, le, W, Ie))))) : m => m.lift(new pt(A))
            }
            class pt {
                constructor(i) {
                    this.project = i
                }
                call(i, m) {
                    return m.subscribe(new gt(i, this.project))
                }
            }
            class gt extends e.Ds {
                constructor(i, m) {
                    super(i), this.project = m, this.hasSubscription = !1, this.hasCompleted = !1, this.index = 0
                }
                _next(i) {
                    this.hasSubscription || this.tryNext(i)
                }
                tryNext(i) {
                    let m;
                    const M = this.index++;
                    try {
                        m = this.project(i, M)
                    } catch (W) {
                        return void this.destination.error(W)
                    }
                    this.hasSubscription = !0, this._innerSub(m)
                }
                _innerSub(i) {
                    const m = new e.IY(this),
                        M = this.destination;
                    M.add(m);
                    const W = (0, e.ft)(i, m);
                    W !== m && M.add(W)
                }
                _complete() {
                    this.hasCompleted = !0, this.hasSubscription || this.destination.complete(), this.unsubscribe()
                }
                notifyNext(i) {
                    this.destination.next(i)
                }
                notifyError(i) {
                    this.destination.error(i)
                }
                notifyComplete() {
                    this.hasSubscription = !1, this.hasCompleted && this.destination.complete()
                }
            }

            function bt(A, i = Number.POSITIVE_INFINITY, m) {
                return i = (i || 0) < 1 ? Number.POSITIVE_INFINITY : i, M => M.lift(new mt(A, i, m))
            }
            class mt {
                constructor(i, m, M) {
                    this.project = i, this.concurrent = m, this.scheduler = M
                }
                call(i, m) {
                    return m.subscribe(new lt(i, this.project, this.concurrent, this.scheduler))
                }
            }
            class lt extends e.Ds {
                constructor(i, m, M, W) {
                    super(i), this.project = m, this.concurrent = M, this.scheduler = W, this.index = 0, this.active = 0, this.hasCompleted = !1, M < Number.POSITIVE_INFINITY && (this.buffer = [])
                }
                static dispatch(i) {
                    const {
                        subscriber: m,
                        result: M,
                        value: W,
                        index: le
                    } = i;
                    m.subscribeToProjection(M, W, le)
                }
                _next(i) {
                    const m = this.destination;
                    if (m.closed) return void this._complete();
                    const M = this.index++;
                    if (this.active < this.concurrent) {
                        m.next(i);
                        try {
                            const {
                                project: W
                            } = this, le = W(i, M);
                            this.scheduler ? this.destination.add(this.scheduler.schedule(lt.dispatch, 0, {
                                subscriber: this,
                                result: le,
                                value: i,
                                index: M
                            })) : this.subscribeToProjection(le, i, M)
                        } catch (W) {
                            m.error(W)
                        }
                    } else this.buffer.push(i)
                }
                subscribeToProjection(i, m, M) {
                    this.active++, this.destination.add((0, e.ft)(i, new e.IY(this)))
                }
                _complete() {
                    this.hasCompleted = !0, this.hasCompleted && 0 === this.active && this.destination.complete(), this.unsubscribe()
                }
                notifyNext(i) {
                    this._next(i)
                }
                notifyComplete() {
                    const i = this.buffer;
                    this.active--, i && i.length > 0 && this._next(i.shift()), this.hasCompleted && 0 === this.active && this.destination.complete()
                }
            }

            function yt(A) {
                return i => i.lift(new vt(A))
            }
            class vt {
                constructor(i) {
                    this.callback = i
                }
                call(i, m) {
                    return m.subscribe(new _t(i, this.callback))
                }
            }
            class _t extends d.L {
                constructor(i, m) {
                    super(i), this.add(new I.w(m))
                }
            }

            function Et(A, i) {
                if ("function" != typeof A) throw new TypeError("predicate is not a function");
                return m => m.lift(new ft(A, m, !1, i))
            }
            class ft {
                constructor(i, m, M, W) {
                    this.predicate = i, this.source = m, this.yieldIndex = M, this.thisArg = W
                }
                call(i, m) {
                    return m.subscribe(new zt(i, this.predicate, this.source, this.yieldIndex, this.thisArg))
                }
            }
            class zt extends d.L {
                constructor(i, m, M, W, le) {
                    super(i), this.predicate = m, this.source = M, this.yieldIndex = W, this.thisArg = le, this.index = 0
                }
                notifyComplete(i) {
                    const m = this.destination;
                    m.next(i), m.complete(), this.unsubscribe()
                }
                _next(i) {
                    const {
                        predicate: m,
                        thisArg: M
                    } = this, W = this.index++;
                    try {
                        m.call(M || this, i, W, this.source) && this.notifyComplete(this.yieldIndex ? W : i)
                    } catch (le) {
                        this.destination.error(le)
                    }
                }
                _complete() {
                    this.notifyComplete(this.yieldIndex ? -1 : void 0)
                }
            }

            function Gt(A, i) {
                return m => m.lift(new ft(A, m, !0, i))
            }
            var Mt = t(40601);

            function Kt(A, i) {
                const m = arguments.length >= 2;
                return M => M.pipe(A ? (0, Ye.h)((W, le) => A(W, le, M)) : Mt.y, ge(1), m ? Te(i) : Qe(() => new tt.K))
            }
            var Jt = t(80374);

            function Qt() {
                return function(i) {
                    return i.lift(new Zt)
                }
            }
            class Zt {
                call(i, m) {
                    return m.subscribe(new Yt(i))
                }
            }
            class Yt extends d.L {
                _next(i) {}
            }

            function Xt() {
                return A => A.lift(new qt)
            }
            class qt {
                call(i, m) {
                    return m.subscribe(new en(i))
                }
            }
            class en extends d.L {
                constructor(i) {
                    super(i)
                }
                notifyComplete(i) {
                    const m = this.destination;
                    m.next(i), m.complete()
                }
                _next(i) {
                    this.notifyComplete(!1)
                }
                _complete() {
                    this.notifyComplete(!0)
                }
            }

            function Ct(A) {
                return function(m) {
                    return 0 === A ? (0, fe.c)() : m.lift(new tn(A))
                }
            }
            class tn {
                constructor(i) {
                    if (this.total = i, this.total < 0) throw new qe.W
                }
                call(i, m) {
                    return m.subscribe(new nn(i, this.total))
                }
            }
            class nn extends d.L {
                constructor(i, m) {
                    super(i), this.total = m, this.ring = new Array, this.count = 0
                }
                _next(i) {
                    const m = this.ring,
                        M = this.total,
                        W = this.count++;
                    m.length < M ? m.push(i) : m[W % M] = i
                }
                _complete() {
                    const i = this.destination;
                    let m = this.count;
                    if (m > 0) {
                        const M = this.count >= this.total ? this.total : this.count,
                            W = this.ring;
                        for (let le = 0; le < M; le++) {
                            const Ie = m++ % M;
                            i.next(W[Ie])
                        }
                    }
                    i.complete()
                }
            }

            function rn(A, i) {
                const m = arguments.length >= 2;
                return M => M.pipe(A ? (0, Ye.h)((W, le) => A(W, le, M)) : Mt.y, Ct(1), m ? Te(i) : Qe(() => new tt.K))
            }

            function sn(A) {
                return i => i.lift(new on(A))
            }
            class on {
                constructor(i) {
                    this.value = i
                }
                call(i, m) {
                    return m.subscribe(new an(i, this.value))
                }
            }
            class an extends d.L {
                constructor(i, m) {
                    super(i), this.value = m
                }
                _next(i) {
                    this.destination.next(this.value)
                }
            }

            function cn() {
                return function(i) {
                    return i.lift(new un)
                }
            }
            class un {
                call(i, m) {
                    return m.subscribe(new ln(i))
                }
            }
            class ln extends d.L {
                constructor(i) {
                    super(i)
                }
                _next(i) {
                    this.destination.next($.P.createNext(i))
                }
                _error(i) {
                    const m = this.destination;
                    m.next($.P.createError(i)), m.complete()
                }
                _complete() {
                    const i = this.destination;
                    i.next($.P.createComplete()), i.complete()
                }
            }

            function It(A, i) {
                let m = !1;
                return arguments.length >= 2 && (m = !0),
                    function(W) {
                        return W.lift(new hn(A, i, m))
                    }
            }
            class hn {
                constructor(i, m, M = !1) {
                    this.accumulator = i, this.seed = m, this.hasSeed = M
                }
                call(i, m) {
                    return m.subscribe(new dn(i, this.accumulator, this.seed, this.hasSeed))
                }
            }
            class dn extends d.L {
                constructor(i, m, M, W) {
                    super(i), this.accumulator = m, this._seed = M, this.hasSeed = W, this.index = 0
                }
                get seed() {
                    return this._seed
                }
                set seed(i) {
                    this.hasSeed = !0, this._seed = i
                }
                _next(i) {
                    if (this.hasSeed) return this._tryNext(i);
                    this.seed = i, this.destination.next(i)
                }
                _tryNext(i) {
                    const m = this.index++;
                    let M;
                    try {
                        M = this.accumulator(this.seed, i, m)
                    } catch (W) {
                        this.destination.error(W)
                    }
                    this.seed = M, this.destination.next(M)
                }
            }
            var Pt = t(77817);

            function xt(A, i) {
                return arguments.length >= 2 ? function(M) {
                    return (0, Pt.z)(It(A, i), Ct(1), Te(i))(M)
                } : function(M) {
                    return (0, Pt.z)(It((W, le, Ie) => A(W, le, Ie + 1)), Ct(1))(M)
                }
            }

            function fn(A) {
                return xt("function" == typeof A ? (m, M) => A(m, M) > 0 ? m : M : (m, M) => m > M ? m : M)
            }
            var pn = t(14685);

            function gn(...A) {
                return i => i.lift.call((0, pn.T)(i, ...A))
            }
            var bn = t(39019);

            function mn(A, i, m = Number.POSITIVE_INFINITY) {
                return "function" == typeof i ? (0, H.zg)(() => A, i, m) : ("number" == typeof i && (m = i), (0, H.zg)(() => A, m))
            }

            function yn(A, i, m = Number.POSITIVE_INFINITY) {
                return M => M.lift(new vn(A, i, m))
            }
            class vn {
                constructor(i, m, M) {
                    this.accumulator = i, this.seed = m, this.concurrent = M
                }
                call(i, m) {
                    return m.subscribe(new _n(i, this.accumulator, this.seed, this.concurrent))
                }
            }
            class _n extends e.Ds {
                constructor(i, m, M, W) {
                    super(i), this.accumulator = m, this.acc = M, this.concurrent = W, this.hasValue = !1, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
                }
                _next(i) {
                    if (this.active < this.concurrent) {
                        const m = this.index++,
                            M = this.destination;
                        let W;
                        try {
                            const {
                                accumulator: le
                            } = this;
                            W = le(this.acc, i, m)
                        } catch (le) {
                            return M.error(le)
                        }
                        this.active++, this._innerSub(W)
                    } else this.buffer.push(i)
                }
                _innerSub(i) {
                    const m = new e.IY(this),
                        M = this.destination;
                    M.add(m);
                    const W = (0, e.ft)(i, m);
                    W !== m && M.add(W)
                }
                _complete() {
                    this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && (!1 === this.hasValue && this.destination.next(this.acc), this.destination.complete()), this.unsubscribe()
                }
                notifyNext(i) {
                    const {
                        destination: m
                    } = this;
                    this.acc = i, this.hasValue = !0, m.next(i)
                }
                notifyComplete() {
                    const i = this.buffer;
                    this.active--, i.length > 0 ? this._next(i.shift()) : 0 === this.active && this.hasCompleted && (!1 === this.hasValue && this.destination.next(this.acc), this.destination.complete())
                }
            }

            function En(A) {
                return xt("function" == typeof A ? (m, M) => A(m, M) < 0 ? m : M : (m, M) => m < M ? m : M)
            }
            var wn = t(53101);

            function ht(A, i) {
                return function(M) {
                    let W;
                    if (W = "function" == typeof A ? A : function() {
                            return A
                        }, "function" == typeof i) return M.lift(new Sn(W, i));
                    const le = Object.create(M, wn.N);
                    return le.source = M, le.subjectFactory = W, le
                }
            }
            class Sn {
                constructor(i, m) {
                    this.subjectFactory = i, this.selector = m
                }
                call(i, m) {
                    const {
                        selector: M
                    } = this, W = this.subjectFactory(), le = M(W).subscribe(i);
                    return le.add(m.subscribe(W)), le
                }
            }
            var Cn = t(87167);

            function In(...A) {
                return 1 === A.length && (0, te.k)(A[0]) && (A = A[0]), i => i.lift(new Dt(A))
            }
            class Dt {
                constructor(i) {
                    this.nextSources = i
                }
                call(i, m) {
                    return m.subscribe(new xn(i, this.nextSources))
                }
            }
            class xn extends e.Ds {
                constructor(i, m) {
                    super(i), this.destination = i, this.nextSources = m
                }
                notifyError() {
                    this.subscribeToNextSource()
                }
                notifyComplete() {
                    this.subscribeToNextSource()
                }
                _error(i) {
                    this.subscribeToNextSource(), this.unsubscribe()
                }
                _complete() {
                    this.subscribeToNextSource(), this.unsubscribe()
                }
                subscribeToNextSource() {
                    const i = this.nextSources.shift();
                    if (i) {
                        const m = new e.IY(this),
                            M = this.destination;
                        M.add(m);
                        const W = (0, e.ft)(i, m);
                        W !== m && M.add(W)
                    } else this.destination.complete()
                }
            }

            function Rn() {
                return A => A.lift(new An)
            }
            class An {
                call(i, m) {
                    return m.subscribe(new Mn(i))
                }
            }
            class Mn extends d.L {
                constructor(i) {
                    super(i), this.hasPrev = !1
                }
                _next(i) {
                    let m;
                    this.hasPrev ? m = [this.prev, i] : this.hasPrev = !0, this.prev = i, m && this.destination.next(m)
                }
            }
            var Tn = t(1958);

            function On(A, i) {
                return m => [(0, Ye.h)(A, i)(m), (0, Ye.h)((0, Tn.f)(A, i))(m)]
            }

            function Nn(...A) {
                const i = A.length;
                if (0 === i) throw new Error("list of properties cannot be empty.");
                return m => (0, it.U)(function Ln(A, i) {
                    return M => {
                        let W = M;
                        for (let le = 0; le < i; le++) {
                            const Ie = W ? .[A[le]];
                            if (void 0 === Ie) return;
                            W = Ie
                        }
                        return W
                    }
                }(A, i))(m)
            }
            var nt = t(87922);

            function Pn(A) {
                return A ? ht(() => new nt.xQ, A) : ht(new nt.xQ)
            }
            var Dn = t(13388);

            function kn(A) {
                return i => ht(new Dn.X(A))(i)
            }
            var Bn = t(94046);

            function jn() {
                return A => ht(new Bn.c)(A)
            }
            var kt = t(47191);

            function Fn(A, i, m, M) {
                m && "function" != typeof m && (M = m);
                const W = "function" == typeof m ? m : void 0,
                    le = new kt.t(A, i, M);
                return Ie => ht(() => le, W)(Ie)
            }
            var Wn = t(54285);

            function Un(...A) {
                return function(m) {
                    return 1 === A.length && (0, te.k)(A[0]) && (A = A[0]), m.lift.call((0, Wn.S3)(m, ...A))
                }
            }

            function $n(A = -1) {
                return i => 0 === A ? (0, fe.c)() : i.lift(new Bt(A < 0 ? -1 : A - 1, i))
            }
            class Bt {
                constructor(i, m) {
                    this.count = i, this.source = m
                }
                call(i, m) {
                    return m.subscribe(new Hn(i, this.count, this.source))
                }
            }
            class Hn extends d.L {
                constructor(i, m, M) {
                    super(i), this.count = m, this.source = M
                }
                complete() {
                    if (!this.isStopped) {
                        const {
                            source: i,
                            count: m
                        } = this;
                        if (0 === m) return super.complete();
                        m > -1 && (this.count = m - 1), i.subscribe(this._unsubscribeAndRecycle())
                    }
                }
            }

            function Vn(A) {
                return i => i.lift(new zn(A))
            }
            class zn {
                constructor(i) {
                    this.notifier = i
                }
                call(i, m) {
                    return m.subscribe(new Gn(i, this.notifier, m))
                }
            }
            class Gn extends e.Ds {
                constructor(i, m, M) {
                    super(i), this.notifier = m, this.source = M, this.sourceIsBeingSubscribedTo = !0
                }
                notifyNext() {
                    this.sourceIsBeingSubscribedTo = !0, this.source.subscribe(this)
                }
                notifyComplete() {
                    if (!1 === this.sourceIsBeingSubscribedTo) return super.complete()
                }
                complete() {
                    if (this.sourceIsBeingSubscribedTo = !1, !this.isStopped) {
                        if (this.retries || this.subscribeToRetries(), !this.retriesSubscription || this.retriesSubscription.closed) return super.complete();
                        this._unsubscribeAndRecycle(), this.notifications.next(void 0)
                    }
                }
                _unsubscribe() {
                    const {
                        notifications: i,
                        retriesSubscription: m
                    } = this;
                    i && (i.unsubscribe(), this.notifications = void 0), m && (m.unsubscribe(), this.retriesSubscription = void 0), this.retries = void 0
                }
                _unsubscribeAndRecycle() {
                    const {
                        _unsubscribe: i
                    } = this;
                    return this._unsubscribe = null, super._unsubscribeAndRecycle(), this._unsubscribe = i, this
                }
                subscribeToRetries() {
                    let i;
                    this.notifications = new nt.xQ;
                    try {
                        const {
                            notifier: m
                        } = this;
                        i = m(this.notifications)
                    } catch {
                        return super.complete()
                    }
                    this.retries = i, this.retriesSubscription = (0, e.ft)(i, new e.IY(this))
                }
            }

            function Kn(A = -1) {
                return i => i.lift(new Jn(A, i))
            }
            class Jn {
                constructor(i, m) {
                    this.count = i, this.source = m
                }
                call(i, m) {
                    return m.subscribe(new Qn(i, this.count, this.source))
                }
            }
            class Qn extends d.L {
                constructor(i, m, M) {
                    super(i), this.count = m, this.source = M
                }
                error(i) {
                    if (!this.isStopped) {
                        const {
                            source: m,
                            count: M
                        } = this;
                        if (0 === M) return super.error(i);
                        M > -1 && (this.count = M - 1), m.subscribe(this._unsubscribeAndRecycle())
                    }
                }
            }

            function Zn(A) {
                return i => i.lift(new Yn(A, i))
            }
            class Yn {
                constructor(i, m) {
                    this.notifier = i, this.source = m
                }
                call(i, m) {
                    return m.subscribe(new Xn(i, this.notifier, this.source))
                }
            }
            class Xn extends e.Ds {
                constructor(i, m, M) {
                    super(i), this.notifier = m, this.source = M
                }
                error(i) {
                    if (!this.isStopped) {
                        let m = this.errors,
                            M = this.retries,
                            W = this.retriesSubscription;
                        if (M) this.errors = void 0, this.retriesSubscription = void 0;
                        else {
                            m = new nt.xQ;
                            try {
                                const {
                                    notifier: le
                                } = this;
                                M = le(m)
                            } catch (le) {
                                return super.error(le)
                            }
                            W = (0, e.ft)(M, new e.IY(this))
                        }
                        this._unsubscribeAndRecycle(), this.errors = m, this.retries = M, this.retriesSubscription = W, m.next(i)
                    }
                }
                _unsubscribe() {
                    const {
                        errors: i,
                        retriesSubscription: m
                    } = this;
                    i && (i.unsubscribe(), this.errors = void 0), m && (m.unsubscribe(), this.retriesSubscription = void 0), this.retries = void 0
                }
                notifyNext() {
                    const {
                        _unsubscribe: i
                    } = this;
                    this._unsubscribe = null, this._unsubscribeAndRecycle(), this._unsubscribe = i, this.source.subscribe(this)
                }
            }
            var jt = t(98153);

            function qn(A) {
                return i => i.lift(new er(A))
            }
            class er {
                constructor(i) {
                    this.notifier = i
                }
                call(i, m) {
                    const M = new tr(i),
                        W = m.subscribe(M);
                    return W.add((0, e.ft)(this.notifier, new e.IY(M))), W
                }
            }
            class tr extends e.Ds {
                constructor() {
                    super(...arguments), this.hasValue = !1
                }
                _next(i) {
                    this.value = i, this.hasValue = !0
                }
                notifyNext() {
                    this.emitValue()
                }
                notifyComplete() {
                    this.emitValue()
                }
                emitValue() {
                    this.hasValue && (this.hasValue = !1, this.destination.next(this.value))
                }
            }

            function nr(A, i = b.P) {
                return m => m.lift(new rr(A, i))
            }
            class rr {
                constructor(i, m) {
                    this.period = i, this.scheduler = m
                }
                call(i, m) {
                    return m.subscribe(new sr(i, this.period, this.scheduler))
                }
            }
            class sr extends d.L {
                constructor(i, m, M) {
                    super(i), this.period = m, this.scheduler = M, this.hasValue = !1, this.add(M.schedule(ir, m, {
                        subscriber: this,
                        period: m
                    }))
                }
                _next(i) {
                    this.lastValue = i, this.hasValue = !0
                }
                notifyNext() {
                    this.hasValue && (this.hasValue = !1, this.destination.next(this.lastValue))
                }
            }

            function ir(A) {
                let {
                    subscriber: i,
                    period: m
                } = A;
                i.notifyNext(), this.schedule(A, m)
            }

            function or(A, i) {
                return m => m.lift(new ar(A, i))
            }
            class ar {
                constructor(i, m) {
                    this.compareTo = i, this.comparator = m
                }
                call(i, m) {
                    return m.subscribe(new cr(i, this.compareTo, this.comparator))
                }
            }
            class cr extends d.L {
                constructor(i, m, M) {
                    super(i), this.compareTo = m, this.comparator = M, this._a = [], this._b = [], this._oneComplete = !1, this.destination.add(m.subscribe(new ur(i, this)))
                }
                _next(i) {
                    this._oneComplete && 0 === this._b.length ? this.emit(!1) : (this._a.push(i), this.checkValues())
                }
                _complete() {
                    this._oneComplete ? this.emit(0 === this._a.length && 0 === this._b.length) : this._oneComplete = !0, this.unsubscribe()
                }
                checkValues() {
                    const {
                        _a: i,
                        _b: m,
                        comparator: M
                    } = this;
                    for (; i.length > 0 && m.length > 0;) {
                        let W = i.shift(),
                            le = m.shift(),
                            Ie = !1;
                        try {
                            Ie = M ? M(W, le) : W === le
                        } catch ($e) {
                            this.destination.error($e)
                        }
                        Ie || this.emit(!1)
                    }
                }
                emit(i) {
                    const {
                        destination: m
                    } = this;
                    m.next(i), m.complete()
                }
                nextB(i) {
                    this._oneComplete && 0 === this._a.length ? this.emit(!1) : (this._b.push(i), this.checkValues())
                }
                completeB() {
                    this._oneComplete ? this.emit(0 === this._a.length && 0 === this._b.length) : this._oneComplete = !0
                }
            }
            class ur extends d.L {
                constructor(i, m) {
                    super(i), this.parent = m
                }
                _next(i) {
                    this.parent.nextB(i)
                }
                _error(i) {
                    this.parent.error(i), this.unsubscribe()
                }
                _complete() {
                    this.parent.completeB(), this.unsubscribe()
                }
            }

            function lr() {
                return new nt.xQ
            }

            function hr() {
                return A => (0, jt.x)()(ht(lr)(A))
            }

            function dr(A, i, m) {
                let M;
                return M = A && "object" == typeof A ? A : {
                    bufferSize: A,
                    windowTime: i,
                    refCount: !1,
                    scheduler: m
                }, W => W.lift(function fr({
                    bufferSize: A = Number.POSITIVE_INFINITY,
                    windowTime: i = Number.POSITIVE_INFINITY,
                    refCount: m,
                    scheduler: M
                }) {
                    let W, Ie, le = 0,
                        $e = !1,
                        ze = !1;
                    return function(St) {
                        let ct;
                        le++, !W || $e ? ($e = !1, W = new kt.t(A, i, M), ct = W.subscribe(this), Ie = St.subscribe({
                            next(Lt) {
                                W.next(Lt)
                            },
                            error(Lt) {
                                $e = !0, W.error(Lt)
                            },
                            complete() {
                                ze = !0, Ie = void 0, W.complete()
                            }
                        }), ze && (Ie = void 0)) : ct = W.subscribe(this), this.add(() => {
                            le--, ct.unsubscribe(), ct = void 0, Ie && !ze && m && 0 === le && (Ie.unsubscribe(), Ie = void 0, W = void 0)
                        })
                    }
                }(M))
            }

            function pr(A) {
                return i => i.lift(new gr(A, i))
            }
            class gr {
                constructor(i, m) {
                    this.predicate = i, this.source = m
                }
                call(i, m) {
                    return m.subscribe(new br(i, this.predicate, this.source))
                }
            }
            class br extends d.L {
                constructor(i, m, M) {
                    super(i), this.predicate = m, this.source = M, this.seenValue = !1, this.index = 0
                }
                applySingleValue(i) {
                    this.seenValue ? this.destination.error("Sequence contains more than one element") : (this.seenValue = !0, this.singleValue = i)
                }
                _next(i) {
                    const m = this.index++;
                    this.predicate ? this.tryNext(i, m) : this.applySingleValue(i)
                }
                tryNext(i, m) {
                    try {
                        this.predicate(i, m, this.source) && this.applySingleValue(i)
                    } catch (M) {
                        this.destination.error(M)
                    }
                }
                _complete() {
                    const i = this.destination;
                    this.index > 0 ? (i.next(this.seenValue ? this.singleValue : void 0), i.complete()) : i.error(new tt.K)
                }
            }

            function mr(A) {
                return i => i.lift(new yr(A))
            }
            class yr {
                constructor(i) {
                    this.total = i
                }
                call(i, m) {
                    return m.subscribe(new vr(i, this.total))
                }
            }
            class vr extends d.L {
                constructor(i, m) {
                    super(i), this.total = m, this.count = 0
                }
                _next(i) {
                    ++this.count > this.total && this.destination.next(i)
                }
            }

            function _r(A) {
                return i => i.lift(new Er(A))
            }
            class Er {
                constructor(i) {
                    if (this._skipCount = i, this._skipCount < 0) throw new qe.W
                }
                call(i, m) {
                    return m.subscribe(0 === this._skipCount ? new d.L(i) : new wr(i, this._skipCount))
                }
            }
            class wr extends d.L {
                constructor(i, m) {
                    super(i), this._skipCount = m, this._count = 0, this._ring = new Array(m)
                }
                _next(i) {
                    const m = this._skipCount,
                        M = this._count++;
                    if (M < m) this._ring[M] = i;
                    else {
                        const W = M % m,
                            le = this._ring,
                            Ie = le[W];
                        le[W] = i, this.destination.next(Ie)
                    }
                }
            }

            function Sr(A) {
                return i => i.lift(new Cr(A))
            }
            class Cr {
                constructor(i) {
                    this.notifier = i
                }
                call(i, m) {
                    return m.subscribe(new Ir(i, this.notifier))
                }
            }
            class Ir extends e.Ds {
                constructor(i, m) {
                    super(i), this.hasValue = !1;
                    const M = new e.IY(this);
                    this.add(M), this.innerSubscription = M;
                    const W = (0, e.ft)(m, M);
                    W !== M && (this.add(W), this.innerSubscription = W)
                }
                _next(i) {
                    this.hasValue && super._next(i)
                }
                notifyNext() {
                    this.hasValue = !0, this.innerSubscription && this.innerSubscription.unsubscribe()
                }
                notifyComplete() {}
            }

            function xr(A) {
                return i => i.lift(new Rr(A))
            }
            class Rr {
                constructor(i) {
                    this.predicate = i
                }
                call(i, m) {
                    return m.subscribe(new Ar(i, this.predicate))
                }
            }
            class Ar extends d.L {
                constructor(i, m) {
                    super(i), this.predicate = m, this.skipping = !0, this.index = 0
                }
                _next(i) {
                    const m = this.destination;
                    this.skipping && this.tryCallPredicate(i), this.skipping || m.next(i)
                }
                tryCallPredicate(i) {
                    try {
                        const m = this.predicate(i, this.index++);
                        this.skipping = !!m
                    } catch (m) {
                        this.destination.error(m)
                    }
                }
            }

            function Mr(...A) {
                const i = A[A.length - 1];
                return (0, _.K)(i) ? (A.pop(), m => (0, Ee.z)(A, m, i)) : m => (0, Ee.z)(A, m)
            }
            var Tt = t(98704),
                Ot = t(43618);
            class Rt extends Le.y {
                constructor(i, m = 0, M = Tt.e) {
                    super(), this.source = i, this.delayTime = m, this.scheduler = M, (!(0, Ot.k)(m) || m < 0) && (this.delayTime = 0), (!M || "function" != typeof M.schedule) && (this.scheduler = Tt.e)
                }
                static create(i, m = 0, M = Tt.e) {
                    return new Rt(i, m, M)
                }
                static dispatch(i) {
                    const {
                        source: m,
                        subscriber: M
                    } = i;
                    return this.add(m.subscribe(M))
                }
                _subscribe(i) {
                    return this.scheduler.schedule(Rt.dispatch, this.delayTime, {
                        source: this.source,
                        subscriber: i
                    })
                }
            }

            function Tr(A, i = 0) {
                return function(M) {
                    return M.lift(new Or(A, i))
                }
            }
            class Or {
                constructor(i, m) {
                    this.scheduler = i, this.delay = m
                }
                call(i, m) {
                    return new Rt(m, this.delay, this.scheduler).subscribe(i)
                }
            }

            function wt(A, i) {
                return "function" == typeof i ? m => m.pipe(wt((M, W) => (0, de.D)(A(M, W)).pipe((0, it.U)((le, Ie) => i(M, le, W, Ie))))) : m => m.lift(new Nr(A))
            }
            class Nr {
                constructor(i) {
                    this.project = i
                }
                call(i, m) {
                    return m.subscribe(new Lr(i, this.project))
                }
            }
            class Lr extends e.Ds {
                constructor(i, m) {
                    super(i), this.project = m, this.index = 0
                }
                _next(i) {
                    let m;
                    const M = this.index++;
                    try {
                        m = this.project(i, M)
                    } catch (W) {
                        return void this.destination.error(W)
                    }
                    this._innerSub(m)
                }
                _innerSub(i) {
                    const m = this.innerSubscription;
                    m && m.unsubscribe();
                    const M = new e.IY(this),
                        W = this.destination;
                    W.add(M), this.innerSubscription = (0, e.ft)(i, M), this.innerSubscription !== M && W.add(this.innerSubscription)
                }
                _complete() {
                    const {
                        innerSubscription: i
                    } = this;
                    (!i || i.closed) && super._complete(), this.unsubscribe()
                }
                _unsubscribe() {
                    this.innerSubscription = void 0
                }
                notifyComplete() {
                    this.innerSubscription = void 0, this.isStopped && super._complete()
                }
                notifyNext(i) {
                    this.destination.next(i)
                }
            }

            function Pr() {
                return wt(Mt.y)
            }

            function Dr(A, i) {
                return i ? wt(() => A, i) : wt(() => A)
            }

            function kr(A) {
                return i => i.lift(new Br(A))
            }
            class Br {
                constructor(i) {
                    this.notifier = i
                }
                call(i, m) {
                    const M = new jr(i),
                        W = (0, e.ft)(this.notifier, new e.IY(M));
                    return W && !M.seenValue ? (M.add(W), m.subscribe(M)) : M
                }
            }
            class jr extends e.Ds {
                constructor(i) {
                    super(i), this.seenValue = !1
                }
                notifyNext() {
                    this.seenValue = !0, this.complete()
                }
                notifyComplete() {}
            }

            function Fr(A, i = !1) {
                return m => m.lift(new Wr(A, i))
            }
            class Wr {
                constructor(i, m) {
                    this.predicate = i, this.inclusive = m
                }
                call(i, m) {
                    return m.subscribe(new Ur(i, this.predicate, this.inclusive))
                }
            }
            class Ur extends d.L {
                constructor(i, m, M) {
                    super(i), this.predicate = m, this.inclusive = M, this.index = 0
                }
                _next(i) {
                    const m = this.destination;
                    let M;
                    try {
                        M = this.predicate(i, this.index++)
                    } catch (W) {
                        return void m.error(W)
                    }
                    this.nextOrComplete(i, M)
                }
                nextOrComplete(i, m) {
                    const M = this.destination;
                    m ? M.next(i) : (this.inclusive && M.next(i), M.complete())
                }
            }
            var at = t(11027),
                $r = t(83932);

            function Hr(A, i, m) {
                return function(W) {
                    return W.lift(new Vr(A, i, m))
                }
            }
            class Vr {
                constructor(i, m, M) {
                    this.nextOrObserver = i, this.error = m, this.complete = M
                }
                call(i, m) {
                    return m.subscribe(new zr(i, this.nextOrObserver, this.error, this.complete))
                }
            }
            class zr extends d.L {
                constructor(i, m, M, W) {
                    super(i), this._tapNext = at.Z, this._tapError = at.Z, this._tapComplete = at.Z, this._tapError = M || at.Z, this._tapComplete = W || at.Z, (0, $r.m)(m) ? (this._context = this, this._tapNext = m) : m && (this._context = m, this._tapNext = m.next || at.Z, this._tapError = m.error || at.Z, this._tapComplete = m.complete || at.Z)
                }
                _next(i) {
                    try {
                        this._tapNext.call(this._context, i)
                    } catch (m) {
                        return void this.destination.error(m)
                    }
                    this.destination.next(i)
                }
                _error(i) {
                    try {
                        this._tapError.call(this._context, i)
                    } catch (m) {
                        return void this.destination.error(m)
                    }
                    this.destination.error(i)
                }
                _complete() {
                    try {
                        this._tapComplete.call(this._context)
                    } catch (i) {
                        return void this.destination.error(i)
                    }
                    return this.destination.complete()
                }
            }
            const Ft = {
                leading: !0,
                trailing: !1
            };

            function Gr(A, i = Ft) {
                return m => m.lift(new Kr(A, !!i.leading, !!i.trailing))
            }
            class Kr {
                constructor(i, m, M) {
                    this.durationSelector = i, this.leading = m, this.trailing = M
                }
                call(i, m) {
                    return m.subscribe(new Jr(i, this.durationSelector, this.leading, this.trailing))
                }
            }
            class Jr extends e.Ds {
                constructor(i, m, M, W) {
                    super(i), this.destination = i, this.durationSelector = m, this._leading = M, this._trailing = W, this._hasValue = !1
                }
                _next(i) {
                    this._hasValue = !0, this._sendValue = i, this._throttled || (this._leading ? this.send() : this.throttle(i))
                }
                send() {
                    const {
                        _hasValue: i,
                        _sendValue: m
                    } = this;
                    i && (this.destination.next(m), this.throttle(m)), this._hasValue = !1, this._sendValue = void 0
                }
                throttle(i) {
                    const m = this.tryDurationSelector(i);
                    m && this.add(this._throttled = (0, e.ft)(m, new e.IY(this)))
                }
                tryDurationSelector(i) {
                    try {
                        return this.durationSelector(i)
                    } catch (m) {
                        return this.destination.error(m), null
                    }
                }
                throttlingDone() {
                    const {
                        _throttled: i,
                        _trailing: m
                    } = this;
                    i && i.unsubscribe(), this._throttled = void 0, m && this.send()
                }
                notifyNext() {
                    this.throttlingDone()
                }
                notifyComplete() {
                    this.throttlingDone()
                }
            }

            function Qr(A, i = b.P, m = Ft) {
                return M => M.lift(new Zr(A, i, m.leading, m.trailing))
            }
            class Zr {
                constructor(i, m, M, W) {
                    this.duration = i, this.scheduler = m, this.leading = M, this.trailing = W
                }
                call(i, m) {
                    return m.subscribe(new Yr(i, this.duration, this.scheduler, this.leading, this.trailing))
                }
            }
            class Yr extends d.L {
                constructor(i, m, M, W, le) {
                    super(i), this.duration = m, this.scheduler = M, this.leading = W, this.trailing = le, this._hasTrailingValue = !1, this._trailingValue = null
                }
                _next(i) {
                    this.throttled ? this.trailing && (this._trailingValue = i, this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule(Xr, this.duration, {
                        subscriber: this
                    })), this.leading ? this.destination.next(i) : this.trailing && (this._trailingValue = i, this._hasTrailingValue = !0))
                }
                _complete() {
                    this._hasTrailingValue ? (this.destination.next(this._trailingValue), this.destination.complete()) : this.destination.complete()
                }
                clearThrottle() {
                    const i = this.throttled;
                    i && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue), this._trailingValue = null, this._hasTrailingValue = !1), i.unsubscribe(), this.remove(i), this.throttled = null)
                }
            }

            function Xr(A) {
                const {
                    subscriber: i
                } = A;
                i.clearThrottle()
            }
            var qr = t(73737);

            function es(A = b.P) {
                return i => (0, qr.P)(() => i.pipe(It(({
                    current: m
                }, M) => ({
                    value: M,
                    current: A.now(),
                    last: m
                }), {
                    current: A.now(),
                    value: void 0,
                    last: void 0
                }), (0, it.U)(({
                    current: m,
                    last: M,
                    value: W
                }) => new ts(W, m - M))))
            }
            class ts {
                constructor(i, m) {
                    this.value = i, this.interval = m
                }
            }
            var ns = t(95025);

            function Wt(A, i, m = b.P) {
                return M => {
                    let W = F(A),
                        le = W ? +A - m.now() : Math.abs(A);
                    return M.lift(new rs(le, W, i, m))
                }
            }
            class rs {
                constructor(i, m, M, W) {
                    this.waitFor = i, this.absoluteTimeout = m, this.withObservable = M, this.scheduler = W
                }
                call(i, m) {
                    return m.subscribe(new Nt(i, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler))
                }
            }
            class Nt extends e.Ds {
                constructor(i, m, M, W, le) {
                    super(i), this.absoluteTimeout = m, this.waitFor = M, this.withObservable = W, this.scheduler = le, this.scheduleTimeout()
                }
                static dispatchTimeout(i) {
                    const {
                        withObservable: m
                    } = i;
                    i._unsubscribeAndRecycle(), i.add((0, e.ft)(m, new e.IY(i)))
                }
                scheduleTimeout() {
                    const {
                        action: i
                    } = this;
                    i ? this.action = i.schedule(this, this.waitFor) : this.add(this.action = this.scheduler.schedule(Nt.dispatchTimeout, this.waitFor, this))
                }
                _next(i) {
                    this.absoluteTimeout || this.scheduleTimeout(), super._next(i)
                }
                _unsubscribe() {
                    this.action = void 0, this.scheduler = null, this.withObservable = null
                }
            }
            var ss = t(2040);

            function is(A, i = b.P) {
                return Wt(A, (0, ss._)(new ns.W), i)
            }

            function os(A = b.P) {
                return (0, it.U)(i => new as(i, A.now()))
            }
            class as {
                constructor(i, m) {
                    this.value = i, this.timestamp = m
                }
            }

            function cs(A, i, m) {
                return 0 === m ? [i] : (A.push(i), A)
            }

            function us() {
                return xt(cs, [])
            }

            function ls(A) {
                return function(m) {
                    return m.lift(new hs(A))
                }
            }
            class hs {
                constructor(i) {
                    this.windowBoundaries = i
                }
                call(i, m) {
                    const M = new ds(i),
                        W = m.subscribe(M);
                    return W.closed || M.add((0, e.ft)(this.windowBoundaries, new e.IY(M))), W
                }
            }
            class ds extends e.Ds {
                constructor(i) {
                    super(i), this.window = new nt.xQ, i.next(this.window)
                }
                notifyNext() {
                    this.openWindow()
                }
                notifyError(i) {
                    this._error(i)
                }
                notifyComplete() {
                    this._complete()
                }
                _next(i) {
                    this.window.next(i)
                }
                _error(i) {
                    this.window.error(i), this.destination.error(i)
                }
                _complete() {
                    this.window.complete(), this.destination.complete()
                }
                _unsubscribe() {
                    this.window = null
                }
                openWindow() {
                    const i = this.window;
                    i && i.complete();
                    const m = this.destination,
                        M = this.window = new nt.xQ;
                    m.next(M)
                }
            }

            function fs(A, i = 0) {
                return function(M) {
                    return M.lift(new ps(A, i))
                }
            }
            class ps {
                constructor(i, m) {
                    this.windowSize = i, this.startWindowEvery = m
                }
                call(i, m) {
                    return m.subscribe(new gs(i, this.windowSize, this.startWindowEvery))
                }
            }
            class gs extends d.L {
                constructor(i, m, M) {
                    super(i), this.destination = i, this.windowSize = m, this.startWindowEvery = M, this.windows = [new nt.xQ], this.count = 0, i.next(this.windows[0])
                }
                _next(i) {
                    const m = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize,
                        M = this.destination,
                        W = this.windowSize,
                        le = this.windows,
                        Ie = le.length;
                    for (let ze = 0; ze < Ie && !this.closed; ze++) le[ze].next(i);
                    const $e = this.count - W + 1;
                    if ($e >= 0 && $e % m == 0 && !this.closed && le.shift().complete(), ++this.count % m == 0 && !this.closed) {
                        const ze = new nt.xQ;
                        le.push(ze), M.next(ze)
                    }
                }
                _error(i) {
                    const m = this.windows;
                    if (m)
                        for (; m.length > 0 && !this.closed;) m.shift().error(i);
                    this.destination.error(i)
                }
                _complete() {
                    const i = this.windows;
                    if (i)
                        for (; i.length > 0 && !this.closed;) i.shift().complete();
                    this.destination.complete()
                }
                _unsubscribe() {
                    this.count = 0, this.windows = null
                }
            }

            function bs(A) {
                let i = b.P,
                    m = null,
                    M = Number.POSITIVE_INFINITY;
                return (0, _.K)(arguments[3]) && (i = arguments[3]), (0, _.K)(arguments[2]) ? i = arguments[2] : (0, Ot.k)(arguments[2]) && (M = Number(arguments[2])), (0, _.K)(arguments[1]) ? i = arguments[1] : (0, Ot.k)(arguments[1]) && (m = Number(arguments[1])),
                    function(le) {
                        return le.lift(new ms(A, m, M, i))
                    }
            }
            class ms {
                constructor(i, m, M, W) {
                    this.windowTimeSpan = i, this.windowCreationInterval = m, this.maxWindowSize = M, this.scheduler = W
                }
                call(i, m) {
                    return m.subscribe(new vs(i, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler))
                }
            }
            class ys extends nt.xQ {
                constructor() {
                    super(...arguments), this._numberOfNextedValues = 0
                }
                next(i) {
                    this._numberOfNextedValues++, super.next(i)
                }
                get numberOfNextedValues() {
                    return this._numberOfNextedValues
                }
            }
            class vs extends d.L {
                constructor(i, m, M, W, le) {
                    super(i), this.destination = i, this.windowTimeSpan = m, this.windowCreationInterval = M, this.maxWindowSize = W, this.scheduler = le, this.windows = [];
                    const Ie = this.openWindow();
                    if (null !== M && M >= 0) {
                        const ze = {
                            windowTimeSpan: m,
                            windowCreationInterval: M,
                            subscriber: this,
                            scheduler: le
                        };
                        this.add(le.schedule(Ut, m, {
                            subscriber: this,
                            window: Ie,
                            context: null
                        })), this.add(le.schedule(Es, M, ze))
                    } else this.add(le.schedule(_s, m, {
                        subscriber: this,
                        window: Ie,
                        windowTimeSpan: m
                    }))
                }
                _next(i) {
                    const m = this.windows,
                        M = m.length;
                    for (let W = 0; W < M; W++) {
                        const le = m[W];
                        le.closed || (le.next(i), le.numberOfNextedValues >= this.maxWindowSize && this.closeWindow(le))
                    }
                }
                _error(i) {
                    const m = this.windows;
                    for (; m.length > 0;) m.shift().error(i);
                    this.destination.error(i)
                }
                _complete() {
                    const i = this.windows;
                    for (; i.length > 0;) {
                        const m = i.shift();
                        m.closed || m.complete()
                    }
                    this.destination.complete()
                }
                openWindow() {
                    const i = new ys;
                    return this.windows.push(i), this.destination.next(i), i
                }
                closeWindow(i) {
                    i.complete();
                    const m = this.windows;
                    m.splice(m.indexOf(i), 1)
                }
            }

            function _s(A) {
                const {
                    subscriber: i,
                    windowTimeSpan: m,
                    window: M
                } = A;
                M && i.closeWindow(M), A.window = i.openWindow(), this.schedule(A, m)
            }

            function Es(A) {
                const {
                    windowTimeSpan: i,
                    subscriber: m,
                    scheduler: M,
                    windowCreationInterval: W
                } = A, le = m.openWindow();
                let $e = {
                    action: this,
                    subscription: null
                };
                $e.subscription = M.schedule(Ut, i, {
                    subscriber: m,
                    window: le,
                    context: $e
                }), this.add($e.subscription), this.schedule(A, W)
            }

            function Ut(A) {
                const {
                    subscriber: i,
                    window: m,
                    context: M
                } = A;
                M && M.action && M.subscription && M.action.remove(M.subscription), i.closeWindow(m)
            }

            function ws(A, i) {
                return m => m.lift(new Ss(A, i))
            }
            class Ss {
                constructor(i, m) {
                    this.openings = i, this.closingSelector = m
                }
                call(i, m) {
                    return m.subscribe(new Cs(i, this.openings, this.closingSelector))
                }
            }
            class Cs extends k.L {
                constructor(i, m, M) {
                    super(i), this.openings = m, this.closingSelector = M, this.contexts = [], this.add(this.openSubscription = (0, T.D)(this, m, m))
                }
                _next(i) {
                    const {
                        contexts: m
                    } = this;
                    if (m) {
                        const M = m.length;
                        for (let W = 0; W < M; W++) m[W].window.next(i)
                    }
                }
                _error(i) {
                    const {
                        contexts: m
                    } = this;
                    if (this.contexts = null, m) {
                        const M = m.length;
                        let W = -1;
                        for (; ++W < M;) {
                            const le = m[W];
                            le.window.error(i), le.subscription.unsubscribe()
                        }
                    }
                    super._error(i)
                }
                _complete() {
                    const {
                        contexts: i
                    } = this;
                    if (this.contexts = null, i) {
                        const m = i.length;
                        let M = -1;
                        for (; ++M < m;) {
                            const W = i[M];
                            W.window.complete(), W.subscription.unsubscribe()
                        }
                    }
                    super._complete()
                }
                _unsubscribe() {
                    const {
                        contexts: i
                    } = this;
                    if (this.contexts = null, i) {
                        const m = i.length;
                        let M = -1;
                        for (; ++M < m;) {
                            const W = i[M];
                            W.window.unsubscribe(), W.subscription.unsubscribe()
                        }
                    }
                }
                notifyNext(i, m, M, W, le) {
                    if (i === this.openings) {
                        let Ie;
                        try {
                            const {
                                closingSelector: ct
                            } = this;
                            Ie = ct(m)
                        } catch (ct) {
                            return this.error(ct)
                        }
                        const $e = new nt.xQ,
                            ze = new I.w,
                            At = {
                                window: $e,
                                subscription: ze
                            };
                        this.contexts.push(At);
                        const St = (0, T.D)(this, Ie, At);
                        St.closed ? this.closeWindow(this.contexts.length - 1) : (St.context = At, ze.add(St)), this.destination.next($e)
                    } else this.closeWindow(this.contexts.indexOf(i))
                }
                notifyError(i) {
                    this.error(i)
                }
                notifyComplete(i) {
                    i !== this.openSubscription && this.closeWindow(this.contexts.indexOf(i.context))
                }
                closeWindow(i) {
                    if (-1 === i) return;
                    const {
                        contexts: m
                    } = this, M = m[i], {
                        window: W,
                        subscription: le
                    } = M;
                    m.splice(i, 1), W.complete(), le.unsubscribe()
                }
            }

            function Is(A) {
                return function(m) {
                    return m.lift(new xs(A))
                }
            }
            class xs {
                constructor(i) {
                    this.closingSelector = i
                }
                call(i, m) {
                    return m.subscribe(new Rs(i, this.closingSelector))
                }
            }
            class Rs extends k.L {
                constructor(i, m) {
                    super(i), this.destination = i, this.closingSelector = m, this.openWindow()
                }
                notifyNext(i, m, M, W, le) {
                    this.openWindow(le)
                }
                notifyError(i) {
                    this._error(i)
                }
                notifyComplete(i) {
                    this.openWindow(i)
                }
                _next(i) {
                    this.window.next(i)
                }
                _error(i) {
                    this.window.error(i), this.destination.error(i), this.unsubscribeClosingNotification()
                }
                _complete() {
                    this.window.complete(), this.destination.complete(), this.unsubscribeClosingNotification()
                }
                unsubscribeClosingNotification() {
                    this.closingNotification && this.closingNotification.unsubscribe()
                }
                openWindow(i = null) {
                    i && (this.remove(i), i.unsubscribe());
                    const m = this.window;
                    m && m.complete();
                    const M = this.window = new nt.xQ;
                    let W;
                    this.destination.next(M);
                    try {
                        const {
                            closingSelector: le
                        } = this;
                        W = le()
                    } catch (le) {
                        return this.destination.error(le), void this.window.error(le)
                    }
                    this.add(this.closingNotification = (0, T.D)(this, W))
                }
            }

            function As(...A) {
                return i => {
                    let m;
                    return "function" == typeof A[A.length - 1] && (m = A.pop()), i.lift(new Ms(A, m))
                }
            }
            class Ms {
                constructor(i, m) {
                    this.observables = i, this.project = m
                }
                call(i, m) {
                    return m.subscribe(new Ts(i, this.observables, this.project))
                }
            }
            class Ts extends k.L {
                constructor(i, m, M) {
                    super(i), this.observables = m, this.project = M, this.toRespond = [];
                    const W = m.length;
                    this.values = new Array(W);
                    for (let le = 0; le < W; le++) this.toRespond.push(le);
                    for (let le = 0; le < W; le++) this.add((0, T.D)(this, m[le], void 0, le))
                }
                notifyNext(i, m, M) {
                    this.values[M] = m;
                    const W = this.toRespond;
                    if (W.length > 0) {
                        const le = W.indexOf(M); - 1 !== le && W.splice(le, 1)
                    }
                }
                notifyComplete() {}
                _next(i) {
                    if (0 === this.toRespond.length) {
                        const m = [i, ...this.values];
                        this.project ? this._tryProject(m) : this.destination.next(m)
                    }
                }
                _tryProject(i) {
                    let m;
                    try {
                        m = this.project.apply(this, i)
                    } catch (M) {
                        return void this.destination.error(M)
                    }
                    this.destination.next(m)
                }
            }
            var $t = t(85289);

            function Os(...A) {
                return function(m) {
                    return m.lift.call((0, $t.$R)(m, ...A))
                }
            }

            function Ns(A) {
                return i => i.lift(new $t.mx(A))
            }
        },
        91184: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            });
            const e = t(82016);

            function p(b, r, o) {
                try {
                    Reflect.apply(b, r, o)
                } catch (u) {
                    setTimeout(() => {
                        throw u
                    })
                }
            }
            s.default = class f extends e.EventEmitter {
                emit(r, ...o) {
                    let u = "error" === r;
                    const g = this._events;
                    if (void 0 !== g) u = u && void 0 === g.error;
                    else if (!u) return !1;
                    if (u) {
                        let d;
                        if (o.length > 0 && ([d] = o), d instanceof Error) throw d;
                        const a = new Error("Unhandled error." + (d ? ` (${d.message})` : ""));
                        throw a.context = d, a
                    }
                    const c = g[r];
                    if (void 0 === c) return !1;
                    if ("function" == typeof c) p(c, this, o);
                    else {
                        const d = c.length,
                            a = function h(b) {
                                const r = b.length,
                                    o = new Array(r);
                                for (let u = 0; u < r; u += 1) o[u] = b[u];
                                return o
                            }(c);
                        for (let n = 0; n < d; n += 1) p(a[n], this, o)
                    }
                    return !0
                }
            }
        },
        23689: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.assertExhaustive = s.assertStruct = s.assert = s.AssertionError = void 0;
            const e = t(13921);

            function b(c, d) {
                return function h(c) {
                    var d, a;
                    return "string" == typeof(null === (a = null === (d = c ? .prototype) || void 0 === d ? void 0 : d.constructor) || void 0 === a ? void 0 : a.name)
                }(c) ? new c({
                    message: d
                }) : c({
                    message: d
                })
            }
            class r extends Error {
                constructor(d) {
                    super(d.message), this.code = "ERR_ASSERTION"
                }
            }
            s.AssertionError = r, s.assert = function o(c, d = "Assertion failed.", a = r) {
                if (!c) throw d instanceof Error ? d : b(a, d)
            }, s.assertStruct = function u(c, d, a = "Assertion failed", n = r) {
                try {
                    (0, e.assert)(c, d)
                } catch (l) {
                    throw b(n, `${a}: ${function f(c){const d=function p(c){return"object"==typeof c&&null!==c&&"message"in c}(c)?c.message:String(c);return d.endsWith(".")?d.slice(0,-1):d}(l)}.`)
                }
            }, s.assertExhaustive = function g(c) {
                throw new Error("Invalid branch reached. Should be detected during compilation.")
            }
        },
        73845: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.base64 = void 0;
            const e = t(13921),
                p = t(23689);
            s.base64 = (f, b = {}) => {
                var r, o;
                const u = null !== (r = b.paddingRequired) && void 0 !== r && r,
                    g = null !== (o = b.characterSet) && void 0 !== o ? o : "base64";
                let c, d;
                return "base64" === g ? c = String.raw `[A-Za-z0-9+\/]` : ((0, p.assert)("base64url" === g), c = String.raw `[-_A-Za-z0-9]`), d = u ? new RegExp(`^(?:${c}{4})*(?:${c}{3}=|${c}{2}==)?$`, "u") : new RegExp(`^(?:${c}{4})*(?:${c}{2,3}|${c}{3}=|${c}{2}==)?$`, "u"), (0, e.pattern)(f, d)
            }
        },
        6468: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.createDataView = s.concatBytes = s.valueToBytes = s.stringToBytes = s.numberToBytes = s.signedBigIntToBytes = s.bigIntToBytes = s.hexToBytes = s.bytesToString = s.bytesToNumber = s.bytesToSignedBigInt = s.bytesToBigInt = s.bytesToHex = s.assertIsBytes = s.isBytes = void 0;
            const e = t(23689),
                p = t(1506),
                h = 48,
                f = 58,
                b = 87,
                o = function r() {
                    const I = [];
                    return () => {
                        if (0 === I.length)
                            for (let T = 0; T < 256; T++) I.push(T.toString(16).padStart(2, "0"));
                        return I
                    }
                }();

            function u(I) {
                return I instanceof Uint8Array
            }

            function g(I) {
                (0, e.assert)(u(I), "Value must be a Uint8Array.")
            }

            function c(I) {
                if (g(I), 0 === I.length) return "0x";
                const T = o(),
                    k = new Array(I.length);
                for (let P = 0; P < I.length; P++) k[P] = T[I[P]];
                return (0, p.add0x)(k.join(""))
            }

            function d(I) {
                g(I);
                const T = c(I);
                return BigInt(T)
            }

            function y(I) {
                var T;
                if ("0x" === (null === (T = I ? .toLowerCase) || void 0 === T ? void 0 : T.call(I))) return new Uint8Array;
                (0, p.assertIsHexString)(I);
                const k = (0, p.remove0x)(I).toLowerCase(),
                    P = k.length % 2 == 0 ? k : `0${k}`,
                    Z = new Uint8Array(P.length / 2);
                for (let ie = 0; ie < Z.length; ie++) {
                    const se = P.charCodeAt(2 * ie),
                        ee = P.charCodeAt(2 * ie + 1);
                    Z[ie] = 16 * (se - (se < f ? h : b)) + (ee - (ee < f ? h : b))
                }
                return Z
            }

            function _(I) {
                return (0, e.assert)("bigint" == typeof I, "Value must be a bigint."), (0, e.assert)(I >= BigInt(0), "Value must be a non-negative bigint."), y(I.toString(16))
            }

            function C(I) {
                return (0, e.assert)("number" == typeof I, "Value must be a number."), (0, e.assert)(I >= 0, "Value must be a non-negative number."), (0, e.assert)(Number.isSafeInteger(I), "Value is not a safe integer. Use `bigIntToBytes` instead."), y(I.toString(16))
            }

            function E(I) {
                return (0, e.assert)("string" == typeof I, "Value must be a string."), (new TextEncoder).encode(I)
            }

            function S(I) {
                if ("bigint" == typeof I) return _(I);
                if ("number" == typeof I) return C(I);
                if ("string" == typeof I) return I.startsWith("0x") ? y(I) : E(I);
                if (u(I)) return I;
                throw new TypeError(`Unsupported value type: "${typeof I}".`)
            }
            s.isBytes = u, s.assertIsBytes = g, s.bytesToHex = c, s.bytesToBigInt = d, s.bytesToSignedBigInt = function a(I) {
                g(I);
                let T = BigInt(0);
                for (const k of I) T = (T << BigInt(8)) + BigInt(k);
                return BigInt.asIntN(8 * I.length, T)
            }, s.bytesToNumber = function n(I) {
                g(I);
                const T = d(I);
                return (0, e.assert)(T <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead."), Number(T)
            }, s.bytesToString = function l(I) {
                return g(I), (new TextDecoder).decode(I)
            }, s.hexToBytes = y, s.bigIntToBytes = _, s.signedBigIntToBytes = function w(I, T) {
                (0, e.assert)("bigint" == typeof I, "Value must be a bigint."), (0, e.assert)("number" == typeof T, "Byte length must be a number."), (0, e.assert)(T > 0, "Byte length must be greater than 0."), (0, e.assert)(function v(I, T) {
                    (0, e.assert)(T > 0);
                    const k = I >> BigInt(31);
                    return !((~I & k) + (I & ~k) >> BigInt(8 * T - 1))
                }(I, T), "Byte length is too small to represent the given value.");
                let k = I;
                const P = new Uint8Array(T);
                for (let Z = 0; Z < P.length; Z++) P[Z] = Number(BigInt.asUintN(8, k)), k >>= BigInt(8);
                return P.reverse()
            }, s.numberToBytes = C, s.stringToBytes = E, s.valueToBytes = S, s.concatBytes = function x(I) {
                const T = new Array(I.length);
                let k = 0;
                for (let Z = 0; Z < I.length; Z++) {
                    const ie = S(I[Z]);
                    T[Z] = ie, k += ie.length
                }
                const P = new Uint8Array(k);
                for (let Z = 0, ie = 0; Z < T.length; Z++) P.set(T[Z], ie), ie += T[Z].length;
                return P
            }, s.createDataView = function O(I) {
                if (typeof Buffer < "u" && I instanceof Buffer) {
                    const T = I.buffer.slice(I.byteOffset, I.byteOffset + I.byteLength);
                    return new DataView(T)
                }
                return new DataView(I.buffer, I.byteOffset, I.byteLength)
            }
        },
        17634: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.ChecksumStruct = void 0;
            const e = t(13921),
                p = t(73845);
            s.ChecksumStruct = (0, e.size)((0, p.base64)((0, e.string)(), {
                paddingRequired: !0
            }), 44, 44)
        },
        56021: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.createHex = s.createBytes = s.createBigInt = s.createNumber = void 0;
            const e = t(13921),
                p = t(23689),
                h = t(6468),
                f = t(1506),
                b = (0, e.union)([(0, e.number)(), (0, e.bigint)(), (0, e.string)(), f.StrictHexStruct]),
                r = (0, e.coerce)((0, e.number)(), b, Number),
                o = (0, e.coerce)((0, e.bigint)(), b, BigInt),
                g = ((0, e.union)([f.StrictHexStruct, (0, e.instance)(Uint8Array)]), (0, e.coerce)((0, e.instance)(Uint8Array), (0, e.union)([f.StrictHexStruct]), h.hexToBytes)),
                c = (0, e.coerce)(f.StrictHexStruct, (0, e.instance)(Uint8Array), h.bytesToHex);
            s.createNumber = function d(y) {
                try {
                    const _ = (0, e.create)(y, r);
                    return (0, p.assert)(Number.isFinite(_), `Expected a number-like value, got "${y}".`), _
                } catch (_) {
                    throw _ instanceof e.StructError ? new Error(`Expected a number-like value, got "${y}".`) : _
                }
            }, s.createBigInt = function a(y) {
                try {
                    return (0, e.create)(y, o)
                } catch (_) {
                    throw _ instanceof e.StructError ? new Error(`Expected a number-like value, got "${String(_.value)}".`) : _
                }
            }, s.createBytes = function n(y) {
                if ("string" == typeof y && "0x" === y.toLowerCase()) return new Uint8Array;
                try {
                    return (0, e.create)(y, g)
                } catch (_) {
                    throw _ instanceof e.StructError ? new Error(`Expected a bytes-like value, got "${String(_.value)}".`) : _
                }
            }, s.createHex = function l(y) {
                if (y instanceof Uint8Array && 0 === y.length || "string" == typeof y && "0x" === y.toLowerCase()) return "0x";
                try {
                    return (0, e.create)(y, c)
                } catch (_) {
                    throw _ instanceof e.StructError ? new Error(`Expected a bytes-like value, got "${String(_.value)}".`) : _
                }
            }
        },
        56722: function(R, s) {
            "use strict";
            var p, h, t = this && this.__classPrivateFieldSet || function(r, o, u, g, c) {
                    if ("m" === g) throw new TypeError("Private method is not writable");
                    if ("a" === g && !c) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof o ? r !== o || !c : !o.has(r)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === g ? c.call(r, u) : c ? c.value = u : o.set(r, u), u
                },
                e = this && this.__classPrivateFieldGet || function(r, o, u, g) {
                    if ("a" === u && !g) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof o ? r !== o || !g : !o.has(r)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === u ? g : "a" === u ? g.call(r) : g ? g.value : o.get(r)
                };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.FrozenSet = s.FrozenMap = void 0;
            class f {
                constructor(o) {
                    p.set(this, void 0), t(this, p, new Map(o), "f"), Object.freeze(this)
                }
                get size() {
                    return e(this, p, "f").size
                }[(p = new WeakMap, Symbol.iterator)]() {
                    return e(this, p, "f")[Symbol.iterator]()
                }
                entries() {
                    return e(this, p, "f").entries()
                }
                forEach(o, u) {
                    return e(this, p, "f").forEach((g, c, d) => o.call(u, g, c, this))
                }
                get(o) {
                    return e(this, p, "f").get(o)
                }
                has(o) {
                    return e(this, p, "f").has(o)
                }
                keys() {
                    return e(this, p, "f").keys()
                }
                values() {
                    return e(this, p, "f").values()
                }
                toString() {
                    return `FrozenMap(${this.size}) {${this.size>0?` ${[...this.entries()].map(([o,u])=>`${String(o)} => ${String(u)}`).join(", ")} `:""}}`
                }
            }
            s.FrozenMap = f;
            class b {
                constructor(o) {
                    h.set(this, void 0), t(this, h, new Set(o), "f"), Object.freeze(this)
                }
                get size() {
                    return e(this, h, "f").size
                }[(h = new WeakMap, Symbol.iterator)]() {
                    return e(this, h, "f")[Symbol.iterator]()
                }
                entries() {
                    return e(this, h, "f").entries()
                }
                forEach(o, u) {
                    return e(this, h, "f").forEach((g, c, d) => o.call(u, g, c, this))
                }
                has(o) {
                    return e(this, h, "f").has(o)
                }
                keys() {
                    return e(this, h, "f").keys()
                }
                values() {
                    return e(this, h, "f").values()
                }
                toString() {
                    return `FrozenSet(${this.size}) {${this.size>0?` ${[...this.values()].map(o=>String(o)).join(", ")} `:""}}`
                }
            }
            s.FrozenSet = b, Object.freeze(f), Object.freeze(f.prototype), Object.freeze(b), Object.freeze(b.prototype)
        },
        1506: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.remove0x = s.add0x = s.assertIsStrictHexString = s.assertIsHexString = s.isStrictHexString = s.isHexString = s.StrictHexStruct = s.HexStruct = void 0;
            const e = t(13921),
                p = t(23689);

            function h(g) {
                return (0, e.is)(g, s.HexStruct)
            }

            function f(g) {
                return (0, e.is)(g, s.StrictHexStruct)
            }
            s.HexStruct = (0, e.pattern)((0, e.string)(), /^(?:0x)?[0-9a-f]+$/iu), s.StrictHexStruct = (0, e.pattern)((0, e.string)(), /^0x[0-9a-f]+$/iu), s.isHexString = h, s.isStrictHexString = f, s.assertIsHexString = function b(g) {
                (0, p.assert)(h(g), "Value must be a hexadecimal string.")
            }, s.assertIsStrictHexString = function r(g) {
                (0, p.assert)(f(g), 'Value must be a hexadecimal string, starting with "0x".')
            }, s.add0x = function o(g) {
                return g.startsWith("0x") ? g : g.startsWith("0X") ? `0x${g.substring(2)}` : `0x${g}`
            }, s.remove0x = function u(g) {
                return g.startsWith("0x") || g.startsWith("0X") ? g.substring(2) : g
            }
        },
        27184: function(R, s, t) {
            "use strict";
            var e = this && this.__createBinding || (Object.create ? function(h, f, b, r) {
                    void 0 === r && (r = b);
                    var o = Object.getOwnPropertyDescriptor(f, b);
                    (!o || ("get" in o ? !f.__esModule : o.writable || o.configurable)) && (o = {
                        enumerable: !0,
                        get: function() {
                            return f[b]
                        }
                    }), Object.defineProperty(h, r, o)
                } : function(h, f, b, r) {
                    void 0 === r && (r = b), h[r] = f[b]
                }),
                p = this && this.__exportStar || function(h, f) {
                    for (var b in h) "default" !== b && !Object.prototype.hasOwnProperty.call(f, b) && e(f, h, b)
                };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), p(t(23689), s), p(t(73845), s), p(t(6468), s), p(t(17634), s), p(t(56021), s), p(t(56722), s), p(t(1506), s), p(t(16261), s), p(t(77464), s), p(t(3571), s), p(t(6885), s), p(t(35127), s), p(t(49246), s), p(t(39383), s)
        },
        16261: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.validateJsonAndGetSize = s.getJsonRpcIdValidator = s.assertIsJsonRpcError = s.isJsonRpcError = s.assertIsJsonRpcFailure = s.isJsonRpcFailure = s.assertIsJsonRpcSuccess = s.isJsonRpcSuccess = s.assertIsJsonRpcResponse = s.isJsonRpcResponse = s.assertIsPendingJsonRpcResponse = s.isPendingJsonRpcResponse = s.JsonRpcResponseStruct = s.JsonRpcFailureStruct = s.JsonRpcSuccessStruct = s.PendingJsonRpcResponseStruct = s.assertIsJsonRpcRequest = s.isJsonRpcRequest = s.assertIsJsonRpcNotification = s.isJsonRpcNotification = s.JsonRpcNotificationStruct = s.JsonRpcRequestStruct = s.JsonRpcParamsStruct = s.JsonRpcErrorStruct = s.JsonRpcIdStruct = s.JsonRpcVersionStruct = s.jsonrpc2 = s.isValidJson = s.JsonStruct = void 0;
            const e = t(13921),
                p = t(23689),
                h = t(3571);

            function E(S, x = !1) {
                const O = new Set;
                return function I(T, k) {
                    if (void 0 === T) return [!1, 0];
                    if (null === T) return [!0, k ? 0 : h.JsonSize.Null];
                    const P = typeof T;
                    try {
                        if ("function" === P) return [!1, 0];
                        if ("string" === P || T instanceof String) return [!0, k ? 0 : (0, h.calculateStringSize)(T) + 2 * h.JsonSize.Quote];
                        if ("boolean" === P || T instanceof Boolean) return k ? [!0, 0] : [!0, 1 == T ? h.JsonSize.True : h.JsonSize.False];
                        if ("number" === P || T instanceof Number) return k ? [!0, 0] : [!0, (0, h.calculateNumberSize)(T)];
                        if (T instanceof Date) return k ? [!0, 0] : [!0, isNaN(T.getDate()) ? h.JsonSize.Null : h.JsonSize.Date + 2 * h.JsonSize.Quote]
                    } catch {
                        return [!1, 0]
                    }
                    if (!(0, h.isPlainObject)(T) && !Array.isArray(T)) return [!1, 0];
                    if (O.has(T)) return [!1, 0];
                    O.add(T);
                    try {
                        return [!0, Object.entries(T).reduce((Z, [ie, se], ee, j) => {
                            let [ne, Y] = I(se, k);
                            if (!ne) throw new Error("JSON validation did not pass. Validation process stopped.");
                            return O.delete(T), k ? 0 : Z + (Array.isArray(T) ? 0 : ie.length + h.JsonSize.Comma + 2 * h.JsonSize.Colon) + Y + (ee < j.length - 1 ? h.JsonSize.Comma : 0)
                        }, k ? 0 : 2 * h.JsonSize.Wrapper)]
                    } catch {
                        return [!1, 0]
                    }
                }(S, x)
            }
            s.JsonStruct = (0, e.define)("Json", S => {
                const [x] = E(S, !0);
                return !!x || "Expected a valid JSON-serializable value"
            }), s.isValidJson = function f(S) {
                return (0, e.is)(S, s.JsonStruct)
            }, s.jsonrpc2 = "2.0", s.JsonRpcVersionStruct = (0, e.literal)(s.jsonrpc2), s.JsonRpcIdStruct = (0, e.nullable)((0, e.union)([(0, e.number)(), (0, e.string)()])), s.JsonRpcErrorStruct = (0, e.object)({
                code: (0, e.integer)(),
                message: (0, e.string)(),
                data: (0, e.optional)(s.JsonStruct),
                stack: (0, e.optional)((0, e.string)())
            }), s.JsonRpcParamsStruct = (0, e.optional)((0, e.union)([(0, e.record)((0, e.string)(), s.JsonStruct), (0, e.array)(s.JsonStruct)])), s.JsonRpcRequestStruct = (0, e.object)({
                id: s.JsonRpcIdStruct,
                jsonrpc: s.JsonRpcVersionStruct,
                method: (0, e.string)(),
                params: s.JsonRpcParamsStruct
            }), s.JsonRpcNotificationStruct = (0, e.omit)(s.JsonRpcRequestStruct, ["id"]), s.isJsonRpcNotification = function b(S) {
                return (0, e.is)(S, s.JsonRpcNotificationStruct)
            }, s.assertIsJsonRpcNotification = function r(S, x) {
                (0, p.assertStruct)(S, s.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", x)
            }, s.isJsonRpcRequest = function o(S) {
                return (0, e.is)(S, s.JsonRpcRequestStruct)
            }, s.assertIsJsonRpcRequest = function u(S, x) {
                (0, p.assertStruct)(S, s.JsonRpcRequestStruct, "Invalid JSON-RPC request", x)
            }, s.PendingJsonRpcResponseStruct = (0, e.object)({
                id: s.JsonRpcIdStruct,
                jsonrpc: s.JsonRpcVersionStruct,
                result: (0, e.optional)((0, e.unknown)()),
                error: (0, e.optional)(s.JsonRpcErrorStruct)
            }), s.JsonRpcSuccessStruct = (0, e.object)({
                id: s.JsonRpcIdStruct,
                jsonrpc: s.JsonRpcVersionStruct,
                result: s.JsonStruct
            }), s.JsonRpcFailureStruct = (0, e.object)({
                id: s.JsonRpcIdStruct,
                jsonrpc: s.JsonRpcVersionStruct,
                error: s.JsonRpcErrorStruct
            }), s.JsonRpcResponseStruct = (0, e.union)([s.JsonRpcSuccessStruct, s.JsonRpcFailureStruct]), s.isPendingJsonRpcResponse = function g(S) {
                return (0, e.is)(S, s.PendingJsonRpcResponseStruct)
            }, s.assertIsPendingJsonRpcResponse = function c(S, x) {
                (0, p.assertStruct)(S, s.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", x)
            }, s.isJsonRpcResponse = function d(S) {
                return (0, e.is)(S, s.JsonRpcResponseStruct)
            }, s.assertIsJsonRpcResponse = function a(S, x) {
                (0, p.assertStruct)(S, s.JsonRpcResponseStruct, "Invalid JSON-RPC response", x)
            }, s.isJsonRpcSuccess = function n(S) {
                return (0, e.is)(S, s.JsonRpcSuccessStruct)
            }, s.assertIsJsonRpcSuccess = function l(S, x) {
                (0, p.assertStruct)(S, s.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", x)
            }, s.isJsonRpcFailure = function y(S) {
                return (0, e.is)(S, s.JsonRpcFailureStruct)
            }, s.assertIsJsonRpcFailure = function _(S, x) {
                (0, p.assertStruct)(S, s.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", x)
            }, s.isJsonRpcError = function v(S) {
                return (0, e.is)(S, s.JsonRpcErrorStruct)
            }, s.assertIsJsonRpcError = function w(S, x) {
                (0, p.assertStruct)(S, s.JsonRpcErrorStruct, "Invalid JSON-RPC error", x)
            }, s.getJsonRpcIdValidator = function C(S) {
                const {
                    permitEmptyString: x,
                    permitFractions: O,
                    permitNull: I
                } = Object.assign({
                    permitEmptyString: !0,
                    permitFractions: !1,
                    permitNull: !0
                }, S);
                return k => !!("number" == typeof k && (O || Number.isInteger(k)) || "string" == typeof k && (x || k.length > 0) || I && null === k)
            }, s.validateJsonAndGetSize = E
        },
        77464: function(R, s, t) {
            "use strict";
            var e = this && this.__importDefault || function(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.createModuleLogger = s.createProjectLogger = void 0;
            const h = (0, e(t(20563)).default)("metamask");
            s.createProjectLogger = function f(r) {
                return h.extend(r)
            }, s.createModuleLogger = function b(r, o) {
                return r.extend(o)
            }
        },
        3571: (R, s) => {
            "use strict";
            var g;

            function r(g) {
                return g.charCodeAt(0) <= 127
            }
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.calculateNumberSize = s.calculateStringSize = s.isASCII = s.isPlainObject = s.ESCAPE_CHARACTERS_REGEXP = s.JsonSize = s.hasProperty = s.isObject = s.isNullOrUndefined = s.isNonEmptyArray = void 0, s.isNonEmptyArray = function t(g) {
                return Array.isArray(g) && g.length > 0
            }, s.isNullOrUndefined = function e(g) {
                return null == g
            }, s.isObject = function p(g) {
                return !!g && "object" == typeof g && !Array.isArray(g)
            }, s.hasProperty = (g, c) => Object.hasOwnProperty.call(g, c), (g = s.JsonSize || (s.JsonSize = {}))[g.Null = 4] = "Null", g[g.Comma = 1] = "Comma", g[g.Wrapper = 1] = "Wrapper", g[g.True = 4] = "True", g[g.False = 5] = "False", g[g.Quote = 1] = "Quote", g[g.Colon = 1] = "Colon", g[g.Date = 24] = "Date", s.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu, s.isPlainObject = function b(g) {
                if ("object" != typeof g || null === g) return !1;
                try {
                    let c = g;
                    for (; null !== Object.getPrototypeOf(c);) c = Object.getPrototypeOf(c);
                    return Object.getPrototypeOf(g) === c
                } catch {
                    return !1
                }
            }, s.isASCII = r, s.calculateStringSize = function o(g) {
                var c;
                return g.split("").reduce((a, n) => r(n) ? a + 1 : a + 2, 0) + (null !== (c = g.match(s.ESCAPE_CHARACTERS_REGEXP)) && void 0 !== c ? c : []).length
            }, s.calculateNumberSize = function u(g) {
                return g.toString().length
            }
        },
        6885: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.hexToBigInt = s.hexToNumber = s.bigIntToHex = s.numberToHex = void 0;
            const e = t(23689),
                p = t(1506);
            s.numberToHex = o => ((0, e.assert)("number" == typeof o, "Value must be a number."), (0, e.assert)(o >= 0, "Value must be a non-negative number."), (0, e.assert)(Number.isSafeInteger(o), "Value is not a safe integer. Use `bigIntToHex` instead."), (0, p.add0x)(o.toString(16))), s.bigIntToHex = o => ((0, e.assert)("bigint" == typeof o, "Value must be a bigint."), (0, e.assert)(o >= 0, "Value must be a non-negative bigint."), (0, p.add0x)(o.toString(16))), s.hexToNumber = o => {
                (0, p.assertIsHexString)(o);
                const u = parseInt(o, 16);
                return (0, e.assert)(Number.isSafeInteger(u), "Value is not a safe integer. Use `hexToBigInt` instead."), u
            }, s.hexToBigInt = o => ((0, p.assertIsHexString)(o), BigInt((0, p.add0x)(o)))
        },
        35127: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            })
        },
        49246: (R, s) => {
            "use strict";
            var b;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.timeSince = s.inMilliseconds = s.Duration = void 0, (b = s.Duration || (s.Duration = {}))[b.Millisecond = 1] = "Millisecond", b[b.Second = 1e3] = "Second", b[b.Minute = 6e4] = "Minute", b[b.Hour = 36e5] = "Hour", b[b.Day = 864e5] = "Day", b[b.Week = 6048e5] = "Week", b[b.Year = 31536e6] = "Year";
            const p = (b, r) => {
                if (!(b => Number.isInteger(b) && b >= 0)(b)) throw new Error(`"${r}" must be a non-negative integer. Received: "${b}".`)
            };
            s.inMilliseconds = function h(b, r) {
                return p(b, "count"), b * r
            }, s.timeSince = function f(b) {
                return p(b, "timestamp"), Date.now() - b
            }
        },
        39383: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.satisfiesVersionRange = s.gtRange = s.gtVersion = s.assertIsSemVerRange = s.assertIsSemVerVersion = s.isValidSemVerRange = s.isValidSemVerVersion = s.VersionRangeStruct = s.VersionStruct = void 0;
            const e = t(70424),
                p = t(13921),
                h = t(23689);
            s.VersionStruct = (0, p.refine)((0, p.string)(), "Version", d => null !== (0, e.valid)(d) || `Expected SemVer version, got "${d}"`), s.VersionRangeStruct = (0, p.refine)((0, p.string)(), "Version range", d => null !== (0, e.validRange)(d) || `Expected SemVer range, got "${d}"`), s.isValidSemVerVersion = function f(d) {
                return (0, p.is)(d, s.VersionStruct)
            }, s.isValidSemVerRange = function b(d) {
                return (0, p.is)(d, s.VersionRangeStruct)
            }, s.assertIsSemVerVersion = function r(d) {
                (0, h.assertStruct)(d, s.VersionStruct)
            }, s.assertIsSemVerRange = function o(d) {
                (0, h.assertStruct)(d, s.VersionRangeStruct)
            }, s.gtVersion = function u(d, a) {
                return (0, e.gt)(d, a)
            }, s.gtRange = function g(d, a) {
                return (0, e.gtr)(d, a)
            }, s.satisfiesVersionRange = function c(d, a) {
                return (0, e.satisfies)(d, a, {
                    includePrerelease: !0
                })
            }
        },
        14248: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            });
            var e = t(97582),
                p = t(8883),
                h = function() {
                    function f() {
                        this._semaphore = new p.default(1)
                    }
                    return f.prototype.acquire = function() {
                        return e.__awaiter(this, void 0, void 0, function() {
                            return e.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this._semaphore.acquire()];
                                    case 1:
                                        return [2, o.sent()[1]]
                                }
                            })
                        })
                    }, f.prototype.runExclusive = function(b) {
                        return this._semaphore.runExclusive(function() {
                            return b()
                        })
                    }, f.prototype.isLocked = function() {
                        return this._semaphore.isLocked()
                    }, f.prototype.release = function() {
                        this._semaphore.release()
                    }, f
                }();
            s.default = h
        },
        8883: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            });
            var e = t(97582),
                p = function() {
                    function h(f) {
                        if (this._maxConcurrency = f, this._queue = [], f <= 0) throw new Error("semaphore must be initialized to a positive value");
                        this._value = f
                    }
                    return h.prototype.acquire = function() {
                        var f = this,
                            b = this.isLocked(),
                            r = new Promise(function(o) {
                                return f._queue.push(o)
                            });
                        return b || this._dispatch(), r
                    }, h.prototype.runExclusive = function(f) {
                        return e.__awaiter(this, void 0, void 0, function() {
                            var b, r, o;
                            return e.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, this.acquire()];
                                    case 1:
                                        b = u.sent(), r = b[0], o = b[1], u.label = 2;
                                    case 2:
                                        return u.trys.push([2, , 4, 5]), [4, f(r)];
                                    case 3:
                                        return [2, u.sent()];
                                    case 4:
                                        return o(), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, h.prototype.isLocked = function() {
                        return this._value <= 0
                    }, h.prototype.release = function() {
                        if (this._maxConcurrency > 1) throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
                        if (this._currentReleaser) {
                            var f = this._currentReleaser;
                            this._currentReleaser = void 0, f()
                        }
                    }, h.prototype._dispatch = function() {
                        var f = this,
                            b = this._queue.shift();
                        if (b) {
                            var r = !1;
                            this._currentReleaser = function() {
                                r || (r = !0, f._value++, f._dispatch())
                            }, b([this._value--, this._currentReleaser])
                        }
                    }, h
                }();
            s.default = p
        },
        13290: (R, s, t) => {
            "use strict";
            s.WU = void 0;
            var p = t(14248);
            Object.defineProperty(s, "WU", {
                enumerable: !0,
                get: function() {
                    return p.default
                }
            });
            t(8883), t(82292)
        },
        82292: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.withTimeout = void 0;
            var e = t(97582);
            s.withTimeout = function p(h, f, b) {
                var r = this;
                return void 0 === b && (b = new Error("timeout")), {
                    acquire: function() {
                        return new Promise(function(o, u) {
                            return e.__awaiter(r, void 0, void 0, function() {
                                var g, c;
                                return e.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return g = !1, setTimeout(function() {
                                                g = !0, u(b)
                                            }, f), [4, h.acquire()];
                                        case 1:
                                            return c = a.sent(), g ? (Array.isArray(c) ? c[1] : c)() : o(c), [2]
                                    }
                                })
                            })
                        })
                    },
                    runExclusive: function(o) {
                        return e.__awaiter(this, void 0, void 0, function() {
                            var u, g;
                            return e.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        u = function() {}, c.label = 1;
                                    case 1:
                                        return c.trys.push([1, , 7, 8]), [4, this.acquire()];
                                    case 2:
                                        return g = c.sent(), Array.isArray(g) ? (u = g[1], [4, o(g[0])]) : [3, 4];
                                    case 3:
                                        return [2, c.sent()];
                                    case 4:
                                        return u = g, [4, o()];
                                    case 5:
                                        return [2, c.sent()];
                                    case 6:
                                        return [3, 8];
                                    case 7:
                                        return u(), [7];
                                    case 8:
                                        return [2]
                                }
                            })
                        })
                    },
                    release: function() {
                        h.release()
                    },
                    isLocked: function() {
                        return h.isLocked()
                    }
                }
            }
        },
        81979: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            });
            var t = function(p) {
                return p.typeOfFunction = "function", p.boolTrue = !0, p
            }(t || {});

            function e(p, h, f) {
                if (!f || typeof f.value !== t.typeOfFunction) throw new TypeError("Only methods can be decorated with @bind. <" + h + "> is not a method!");
                return {
                    configurable: t.boolTrue,
                    get: function() {
                        var b = f.value.bind(this);
                        return Object.defineProperty(this, h, {
                            value: b,
                            configurable: t.boolTrue,
                            writable: t.boolTrue
                        }), b
                    }
                }
            }
            s.bind = e, s.default = e
        },
        41098: (R, s, t) => {
            "use strict";
            var e = t(90491),
                p = t(35436),
                h = p(e("String.prototype.indexOf"));
            R.exports = function(b, r) {
                var o = e(b, !!r);
                return "function" == typeof o && h(b, ".prototype.") > -1 ? p(o) : o
            }
        },
        35436: (R, s, t) => {
            "use strict";
            var e = t(45333),
                p = t(90491),
                h = t(62245),
                f = t(95223),
                b = p("%Function.prototype.apply%"),
                r = p("%Function.prototype.call%"),
                o = p("%Reflect.apply%", !0) || e.call(r, b),
                u = t(20474),
                g = p("%Math.max%");
            R.exports = function(a) {
                if ("function" != typeof a) throw new f("a function is required");
                var n = o(e, r, arguments);
                return h(n, 1 + g(0, a.length - (arguments.length - 1)), !0)
            };
            var c = function() {
                return o(e, b, arguments)
            };
            u ? u(R.exports, "apply", {
                value: c
            }) : R.exports.apply = c
        },
        46915: (R, s, t) => {
            "use strict";

            function e(f) {
                var b, r, o = "";
                if ("string" == typeof f || "number" == typeof f) o += f;
                else if ("object" == typeof f)
                    if (Array.isArray(f))
                        for (b = 0; b < f.length; b++) f[b] && (r = e(f[b])) && (o && (o += " "), o += r);
                    else
                        for (b in f) f[b] && (o && (o += " "), o += b);
                return o
            }

            function p() {
                for (var f, b, r = 0, o = ""; r < arguments.length;)(f = arguments[r++]) && (b = e(f)) && (o && (o += " "), o += b);
                return o
            }
            t.r(s), t.d(s, {
                clsx: () => p,
                default: () => h
            });
            const h = p
        },
        20563: (R, s, t) => {
            s.formatArgs = function p(o) {
                if (o[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + o[0] + (this.useColors ? "%c " : " ") + "+" + R.exports.humanize(this.diff), !this.useColors) return;
                const u = "color: " + this.color;
                o.splice(1, 0, u, "color: inherit");
                let g = 0,
                    c = 0;
                o[0].replace(/%[a-zA-Z%]/g, d => {
                    "%%" !== d && (g++, "%c" === d && (c = g))
                }), o.splice(c, 0, u)
            }, s.save = function h(o) {
                try {
                    o ? s.storage.setItem("debug", o) : s.storage.removeItem("debug")
                } catch {}
            }, s.load = function f() {
                let o;
                try {
                    o = s.storage.getItem("debug")
                } catch {}
                return !o && typeof process < "u" && "env" in process && (o = process.env.DEBUG), o
            }, s.useColors = function e() {
                return !(!(typeof window < "u" && window.process) || "renderer" !== window.process.type && !window.process.__nwjs) || !(typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && (typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            }, s.storage = function b() {
                try {
                    return localStorage
                } catch {}
            }(), s.destroy = (() => {
                let o = !1;
                return () => {
                    o || (o = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
                }
            })(), s.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], s.log = console.debug || console.log || (() => {}), R.exports = t(56018)(s);
            const {
                formatters: r
            } = R.exports;
            r.j = function(o) {
                try {
                    return JSON.stringify(o)
                } catch (u) {
                    return "[UnexpectedJSONParseError]: " + u.message
                }
            }
        },
        56018: (R, s, t) => {
            R.exports = function e(p) {
                function f(a) {
                    let n, y, _, l = null;

                    function v(...w) {
                        if (!v.enabled) return;
                        const C = v,
                            E = Number(new Date);
                        C.diff = E - (n || E), C.prev = n, C.curr = E, n = E, w[0] = f.coerce(w[0]), "string" != typeof w[0] && w.unshift("%O");
                        let x = 0;
                        w[0] = w[0].replace(/%([a-zA-Z%])/g, (I, T) => {
                            if ("%%" === I) return "%";
                            x++;
                            const k = f.formatters[T];
                            return "function" == typeof k && (I = k.call(C, w[x]), w.splice(x, 1), x--), I
                        }), f.formatArgs.call(C, w), (C.log || f.log).apply(C, w)
                    }
                    return v.namespace = a, v.useColors = f.useColors(), v.color = f.selectColor(a), v.extend = b, v.destroy = f.destroy, Object.defineProperty(v, "enabled", {
                        enumerable: !0,
                        configurable: !1,
                        get: () => null !== l ? l : (y !== f.namespaces && (y = f.namespaces, _ = f.enabled(a)), _),
                        set: w => {
                            l = w
                        }
                    }), "function" == typeof f.init && f.init(v), v
                }

                function b(a, n) {
                    const l = f(this.namespace + (typeof n > "u" ? ":" : n) + a);
                    return l.log = this.log, l
                }

                function g(a) {
                    return a.toString().substring(2, a.toString().length - 2).replace(/\.\*\?$/, "*")
                }
                return f.debug = f, f.default = f, f.coerce = function c(a) {
                    return a instanceof Error ? a.stack || a.message : a
                }, f.disable = function o() {
                    const a = [...f.names.map(g), ...f.skips.map(g).map(n => "-" + n)].join(",");
                    return f.enable(""), a
                }, f.enable = function r(a) {
                    let n;
                    f.save(a), f.namespaces = a, f.names = [], f.skips = [];
                    const l = ("string" == typeof a ? a : "").split(/[\s,]+/),
                        y = l.length;
                    for (n = 0; n < y; n++) l[n] && ("-" === (a = l[n].replace(/\*/g, ".*?"))[0] ? f.skips.push(new RegExp("^" + a.slice(1) + "$")) : f.names.push(new RegExp("^" + a + "$")))
                }, f.enabled = function u(a) {
                    if ("*" === a[a.length - 1]) return !0;
                    let n, l;
                    for (n = 0, l = f.skips.length; n < l; n++)
                        if (f.skips[n].test(a)) return !1;
                    for (n = 0, l = f.names.length; n < l; n++)
                        if (f.names[n].test(a)) return !0;
                    return !1
                }, f.humanize = t(67253), f.destroy = function d() {
                    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
                }, Object.keys(p).forEach(a => {
                    f[a] = p[a]
                }), f.names = [], f.skips = [], f.formatters = {}, f.selectColor = function h(a) {
                    let n = 0;
                    for (let l = 0; l < a.length; l++) n = (n << 5) - n + a.charCodeAt(l), n |= 0;
                    return f.colors[Math.abs(n) % f.colors.length]
                }, f.enable(f.load()), f
            }
        },
        19224: (R, s, t) => {
            "use strict";
            var e = t(20474),
                p = t(94203),
                h = t(95223),
                f = t(79262);
            R.exports = function(r, o, u) {
                if (!r || "object" != typeof r && "function" != typeof r) throw new h("`obj` must be an object or a function`");
                if ("string" != typeof o && "symbol" != typeof o) throw new h("`property` must be a string or a symbol`");
                if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3]) throw new h("`nonEnumerable`, if provided, must be a boolean or null");
                if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4]) throw new h("`nonWritable`, if provided, must be a boolean or null");
                if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5]) throw new h("`nonConfigurable`, if provided, must be a boolean or null");
                if (arguments.length > 6 && "boolean" != typeof arguments[6]) throw new h("`loose`, if provided, must be a boolean");
                var g = arguments.length > 3 ? arguments[3] : null,
                    c = arguments.length > 4 ? arguments[4] : null,
                    d = arguments.length > 5 ? arguments[5] : null,
                    a = arguments.length > 6 && arguments[6],
                    n = !!f && f(r, o);
                if (e) e(r, o, {
                    configurable: null === d && n ? n.configurable : !d,
                    enumerable: null === g && n ? n.enumerable : !g,
                    value: u,
                    writable: null === c && n ? n.writable : !c
                });
                else {
                    if (!a && (g || c || d)) throw new p("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
                    r[o] = u
                }
            }
        },
        20474: (R, s, t) => {
            "use strict";
            var p = t(90491)("%Object.defineProperty%", !0) || !1;
            if (p) try {
                p({}, "a", {
                    value: 1
                })
            } catch {
                p = !1
            }
            R.exports = p
        },
        74500: R => {
            "use strict";
            R.exports = EvalError
        },
        22050: R => {
            "use strict";
            R.exports = Error
        },
        2992: R => {
            "use strict";
            R.exports = RangeError
        },
        43944: R => {
            "use strict";
            R.exports = ReferenceError
        },
        94203: R => {
            "use strict";
            R.exports = SyntaxError
        },
        95223: R => {
            "use strict";
            R.exports = TypeError
        },
        6130: R => {
            "use strict";
            R.exports = URIError
        },
        7167: function(R, s, t) {
            "use strict";
            var e = t(17156).default,
                p = this && this.__importDefault || function(g) {
                    return g && g.__esModule ? g : {
                        default: g
                    }
                };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.BaseBlockTracker = void 0;
            const h = p(t(91184)),
                b = (g, c) => g + c,
                r = ["sync", "latest"];

            function u(g) {
                return Number.parseInt(g, 16)
            }
            s.BaseBlockTracker = class o extends h.default {
                constructor(c) {
                    super(), this._blockResetDuration = c.blockResetDuration || 2e4, this._currentBlock = null, this._isRunning = !1, this._onNewListener = this._onNewListener.bind(this), this._onRemoveListener = this._onRemoveListener.bind(this), this._resetCurrentBlock = this._resetCurrentBlock.bind(this), this._setupInternalEvents()
                }
                destroy() {
                    var c = () => super.removeAllListeners,
                        d = this;
                    return e(function*() {
                        d._cancelBlockResetTimeout(), yield d._maybeEnd(), c().call(d)
                    })()
                }
                isRunning() {
                    return this._isRunning
                }
                getCurrentBlock() {
                    return this._currentBlock
                }
                getLatestBlock() {
                    var c = this;
                    return e(function*() {
                        return c._currentBlock ? c._currentBlock : yield new Promise(a => c.once("latest", a))
                    })()
                }
                removeAllListeners(c) {
                    return c ? super.removeAllListeners(c) : super.removeAllListeners(), this._setupInternalEvents(), this._onRemoveListener(), this
                }
                _setupInternalEvents() {
                    this.removeListener("newListener", this._onNewListener), this.removeListener("removeListener", this._onRemoveListener), this.on("newListener", this._onNewListener), this.on("removeListener", this._onRemoveListener)
                }
                _onNewListener(c) {
                    r.includes(c) && this._maybeStart()
                }
                _onRemoveListener() {
                    this._getBlockTrackerEventCount() > 0 || this._maybeEnd()
                }
                _maybeStart() {
                    var c = this;
                    return e(function*() {
                        c._isRunning || (c._isRunning = !0, c._cancelBlockResetTimeout(), yield c._start(), c.emit("_started"))
                    })()
                }
                _maybeEnd() {
                    var c = this;
                    return e(function*() {
                        c._isRunning && (c._isRunning = !1, c._setupBlockResetTimeout(), yield c._end(), c.emit("_ended"))
                    })()
                }
                _getBlockTrackerEventCount() {
                    return r.map(c => this.listenerCount(c)).reduce(b)
                }
                _newPotentialLatest(c) {
                    const d = this._currentBlock;
                    d && u(c) <= u(d) || this._setCurrentBlock(c)
                }
                _setCurrentBlock(c) {
                    const d = this._currentBlock;
                    this._currentBlock = c, this.emit("latest", c), this.emit("sync", {
                        oldBlock: d,
                        newBlock: c
                    })
                }
                _setupBlockResetTimeout() {
                    this._cancelBlockResetTimeout(), this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration), this._blockResetTimeout.unref && this._blockResetTimeout.unref()
                }
                _cancelBlockResetTimeout() {
                    this._blockResetTimeout && clearTimeout(this._blockResetTimeout)
                }
                _resetCurrentBlock() {
                    this._currentBlock = null
                }
            }
        },
        46270: function(R, s, t) {
            "use strict";
            var e = t(17156).default,
                p = this && this.__importDefault || function(a) {
                    return a && a.__esModule ? a : {
                        default: a
                    }
                };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.PollingBlockTracker = void 0;
            const h = p(t(40519)),
                f = p(t(14107)),
                b = t(7167),
                r = t(47157),
                o = (0, r.createModuleLogger)(r.projectLogger, "polling-block-tracker"),
                u = (0, h.default)();

            function d(a, n) {
                return new Promise(l => {
                    const y = setTimeout(l, a);
                    y.unref && n && y.unref()
                })
            }
            s.PollingBlockTracker = class c extends b.BaseBlockTracker {
                constructor(n = {}) {
                    var l;
                    if (!n.provider) throw new Error("PollingBlockTracker - no provider specified.");
                    super({
                        blockResetDuration: null !== (l = n.blockResetDuration) && void 0 !== l ? l : n.pollingInterval
                    }), this._provider = n.provider, this._pollingInterval = n.pollingInterval || 2e4, this._retryTimeout = n.retryTimeout || this._pollingInterval / 10, this._keepEventLoopActive = void 0 === n.keepEventLoopActive || n.keepEventLoopActive, this._setSkipCacheFlag = n.setSkipCacheFlag || !1
                }
                checkForLatestBlock() {
                    var n = this;
                    return e(function*() {
                        return yield n._updateLatestBlock(), yield n.getLatestBlock()
                    })()
                }
                _start() {
                    var n = this;
                    return e(function*() {
                        n._synchronize()
                    })()
                }
                _end() {
                    return e(function*() {})()
                }
                _synchronize() {
                    var n = this;
                    return e(function*() {
                        for (var l; n._isRunning;) try {
                            yield n._updateLatestBlock();
                            const y = d(n._pollingInterval, !n._keepEventLoopActive);
                            n.emit("_waitingForNextIteration"), yield y
                        } catch (y) {
                            const _ = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:\n${null!==(l=y.stack)&&void 0!==l?l:y}`);
                            try {
                                n.emit("error", _)
                            } catch {
                                console.error(_)
                            }
                            const v = d(n._retryTimeout, !n._keepEventLoopActive);
                            n.emit("_waitingForNextIteration"), yield v
                        }
                    })()
                }
                _updateLatestBlock() {
                    var n = this;
                    return e(function*() {
                        const l = yield n._fetchLatestBlock();
                        n._newPotentialLatest(l)
                    })()
                }
                _fetchLatestBlock() {
                    var n = this;
                    return e(function*() {
                        const l = {
                            jsonrpc: "2.0",
                            id: u(),
                            method: "eth_blockNumber",
                            params: []
                        };
                        n._setSkipCacheFlag && (l.skipCache = !0), o("Making request", l);
                        const y = yield(0, f.default)(_ => n._provider.sendAsync(l, _))();
                        if (o("Got response", y), y.error) throw new Error(`PollingBlockTracker - encountered error fetching block:\n${y.error.message}`);
                        return y.result
                    })()
                }
            }
        },
        52271: function(R, s, t) {
            "use strict";
            var e = t(17156).default,
                p = this && this.__importDefault || function(o) {
                    return o && o.__esModule ? o : {
                        default: o
                    }
                };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.SubscribeBlockTracker = void 0;
            const h = p(t(40519)),
                f = t(7167),
                b = (0, h.default)();
            s.SubscribeBlockTracker = class r extends f.BaseBlockTracker {
                constructor(u = {}) {
                    if (!u.provider) throw new Error("SubscribeBlockTracker - no provider specified.");
                    super(u), this._provider = u.provider, this._subscriptionId = null
                }
                checkForLatestBlock() {
                    var u = this;
                    return e(function*() {
                        return yield u.getLatestBlock()
                    })()
                }
                _start() {
                    var u = this;
                    return e(function*() {
                        if (null == u._subscriptionId) try {
                            const g = yield u._call("eth_blockNumber");
                            u._subscriptionId = yield u._call("eth_subscribe", "newHeads"), u._provider.on("data", u._handleSubData.bind(u)), u._newPotentialLatest(g)
                        } catch (g) {
                            u.emit("error", g)
                        }
                    })()
                }
                _end() {
                    var u = this;
                    return e(function*() {
                        if (null != u._subscriptionId) try {
                            yield u._call("eth_unsubscribe", u._subscriptionId), u._subscriptionId = null
                        } catch (g) {
                            u.emit("error", g)
                        }
                    })()
                }
                _call(u, ...g) {
                    return new Promise((c, d) => {
                        this._provider.sendAsync({
                            id: b(),
                            method: u,
                            params: g,
                            jsonrpc: "2.0"
                        }, (a, n) => {
                            a ? d(a) : c(n.result)
                        })
                    })
                }
                _handleSubData(u, g) {
                    var c;
                    "eth_subscription" === g.method && (null === (c = g.params) || void 0 === c ? void 0 : c.subscription) === this._subscriptionId && this._newPotentialLatest(g.params.result.number)
                }
            }
        },
        21496: function(R, s, t) {
            "use strict";
            var e = this && this.__createBinding || (Object.create ? function(h, f, b, r) {
                    void 0 === r && (r = b), Object.defineProperty(h, r, {
                        enumerable: !0,
                        get: function() {
                            return f[b]
                        }
                    })
                } : function(h, f, b, r) {
                    void 0 === r && (r = b), h[r] = f[b]
                }),
                p = this && this.__exportStar || function(h, f) {
                    for (var b in h) "default" !== b && !Object.prototype.hasOwnProperty.call(f, b) && e(f, h, b)
                };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), p(t(46270), s), p(t(52271), s), p(t(32772), s)
        },
        47157: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.createModuleLogger = s.projectLogger = void 0;
            const e = t(27184);
            Object.defineProperty(s, "createModuleLogger", {
                enumerable: !0,
                get: function() {
                    return e.createModuleLogger
                }
            }), s.projectLogger = (0, e.createProjectLogger)("eth-block-tracker")
        },
        32772: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            })
        },
        64224: (R, s, t) => {
            var e = t(17156).default;
            const p = t(40040);
            R.exports = class h extends p {
                constructor() {
                    super(), this.allResults = []
                }
                update() {
                    return e(function*() {
                        throw new Error("BaseFilterWithHistory - no update method specified")
                    })()
                }
                addResults(b) {
                    this.allResults = this.allResults.concat(b), super.addResults(b)
                }
                addInitialResults(b) {
                    this.allResults = this.allResults.concat(b), super.addInitialResults(b)
                }
                getAllResults() {
                    return this.allResults
                }
            }
        },
        40040: (R, s, t) => {
            var e = t(17156).default;
            const p = t(91184).default;
            R.exports = class h extends p {
                constructor() {
                    super(), this.updates = []
                }
                initialize() {
                    return e(function*() {})()
                }
                update() {
                    return e(function*() {
                        throw new Error("BaseFilter - no update method specified")
                    })()
                }
                addResults(b) {
                    this.updates = this.updates.concat(b), b.forEach(r => this.emit("update", r))
                }
                addInitialResults(b) {}
                getChangesAndClear() {
                    const b = this.updates;
                    return this.updates = [], b
                }
            }
        },
        90880: (R, s, t) => {
            var e = t(17156).default;
            const p = t(40040),
                h = t(2341),
                {
                    incrementHexInt: f
                } = t(71086);
            R.exports = class b extends p {
                constructor({
                    provider: o
                }) {
                    super(), this.type = "block", this.provider = o
                }
                update({
                    oldBlock: o,
                    newBlock: u
                }) {
                    var g = this;
                    return e(function*() {
                        const c = u,
                            d = f(o),
                            n = (yield h({
                                provider: g.provider,
                                fromBlock: d,
                                toBlock: c
                            })).map(l => l.hash);
                        g.addResults(n)
                    })()
                }
            }
        },
        2341: (R, s, t) => {
            var e = t(17156).default;

            function h() {
                return h = e(function*({
                    provider: c,
                    fromBlock: d,
                    toBlock: a
                }) {
                    d || (d = a);
                    const n = f(d),
                        y = f(a) - n + 1,
                        _ = Array(y).fill().map((w, C) => n + C).map(r);
                    return yield Promise.all(_.map(w => function u(c, d, a) {
                        return g.apply(this, arguments)
                    }(c, "eth_getBlockByNumber", [w, !1])))
                }), h.apply(this, arguments)
            }

            function f(c) {
                return null == c ? c : Number.parseInt(c, 16)
            }

            function r(c) {
                return null == c ? c : "0x" + c.toString(16)
            }

            function o(c, d) {
                return new Promise((a, n) => {
                    c.sendAsync(d, (l, y) => {
                        l ? n(l) : y.error ? n(y.error) : y.result ? a(y.result) : n(new Error("Result was empty"))
                    })
                })
            }

            function g() {
                return (g = e(function*(c, d, a) {
                    for (let n = 0; n < 3; n++) try {
                        return yield o(c, {
                            id: 1,
                            jsonrpc: "2.0",
                            method: d,
                            params: a
                        })
                    } catch (l) {
                        console.error(`provider.sendAsync failed: ${l.stack||l.message||l}`)
                    }
                    throw new Error(`Block not found for params: ${JSON.stringify(a)}`)
                })).apply(this, arguments)
            }
            R.exports = function p(c) {
                return h.apply(this, arguments)
            }
        },
        71086: R => {
            function e(g) {
                return g.sort((c, d) => "latest" === c || "earliest" === d ? 1 : "latest" === d || "earliest" === c ? -1 : f(c) - f(d))
            }

            function f(g) {
                return null == g ? g : Number.parseInt(g, 16)
            }

            function r(g) {
                if (null == g) return g;
                let c = g.toString(16);
                return c.length % 2 && (c = "0" + c), "0x" + c
            }

            function u() {
                return Math.floor(16 * Math.random()).toString(16)
            }
            R.exports = {
                minBlockRef: function s(...g) {
                    return e(g)[0]
                },
                maxBlockRef: function t(...g) {
                    const c = e(g);
                    return c[c.length - 1]
                },
                sortBlockRefs: e,
                bnToHex: function p(g) {
                    return "0x" + g.toString(16)
                },
                blockRefIsNumber: function h(g) {
                    return g && !["earliest", "latest", "pending"].includes(g)
                },
                hexToInt: f,
                incrementHexInt: function b(g) {
                    return null == g ? g : r(f(g) + 1)
                },
                intToHex: r,
                unsafeRandomBytes: function o(g) {
                    let c = "0x";
                    for (let d = 0; d < g; d++) c += u(), c += u();
                    return c
                }
            }
        },
        66255: (R, s, t) => {
            var e = t(17156).default;
            const p = t(13290).WU,
                {
                    createAsyncMiddleware: h,
                    createScaffoldMiddleware: f
                } = t(47547),
                b = t(74969),
                r = t(90880),
                o = t(95785),
                {
                    intToHex: u,
                    hexToInt: g
                } = t(71086);

            function d(y) {
                return a(e(function*(..._) {
                    const v = yield y(..._);
                    return u(v.id)
                }))
            }

            function a(y) {
                return h(function() {
                    var _ = e(function*(v, w) {
                        const C = yield y.apply(null, v.params);
                        w.result = C
                    });
                    return function(v, w) {
                        return _.apply(this, arguments)
                    }
                }())
            }

            function l(y, _) {
                const v = [];
                for (let w in y) v.push(y[w]);
                return v
            }
            R.exports = function c({
                blockTracker: y,
                provider: _
            }) {
                let v = 0,
                    w = {};
                const C = new p,
                    E = function n({
                        mutex: y
                    }) {
                        return _ => function() {
                            var v = e(function*(w, C, E, S) {
                                (yield y.acquire())(), _(w, C, E, S)
                            });
                            return function(w, C, E, S) {
                                return v.apply(this, arguments)
                            }
                        }()
                    }({
                        mutex: C
                    }),
                    S = f({
                        eth_newFilter: E(d(O)),
                        eth_newBlockFilter: E(d(T)),
                        eth_newPendingTransactionFilter: E(d(P)),
                        eth_uninstallFilter: E(a(ne)),
                        eth_getFilterChanges: E(a(ie)),
                        eth_getFilterLogs: E(a(ee))
                    }),
                    x = function() {
                        var Ee = e(function*({
                            oldBlock: xe,
                            newBlock: J
                        }) {
                            if (0 === w.length) return;
                            const H = yield C.acquire();
                            try {
                                yield Promise.all(l(w).map(function() {
                                    var D = e(function*(B) {
                                        try {
                                            yield B.update({
                                                oldBlock: xe,
                                                newBlock: J
                                            })
                                        } catch (V) {
                                            console.error(V)
                                        }
                                    });
                                    return function(B) {
                                        return D.apply(this, arguments)
                                    }
                                }()))
                            } catch (D) {
                                console.error(D)
                            }
                            H()
                        });
                        return function(J) {
                            return Ee.apply(this, arguments)
                        }
                    }();
                return S.newLogFilter = O, S.newBlockFilter = T, S.newPendingTransactionFilter = P, S.uninstallFilter = ne, S.getFilterChanges = ie, S.getFilterLogs = ee, S.destroy = () => {
                    ! function de() {
                        ve.apply(this, arguments)
                    }()
                }, S;

                function O(Ee) {
                    return I.apply(this, arguments)
                }

                function I() {
                    return (I = e(function*(Ee) {
                        const xe = new b({
                            provider: _,
                            params: Ee
                        });
                        return yield G(xe), xe
                    })).apply(this, arguments)
                }

                function T() {
                    return k.apply(this, arguments)
                }

                function k() {
                    return (k = e(function*() {
                        const Ee = new r({
                            provider: _
                        });
                        return yield G(Ee), Ee
                    })).apply(this, arguments)
                }

                function P() {
                    return Z.apply(this, arguments)
                }

                function Z() {
                    return (Z = e(function*() {
                        const Ee = new o({
                            provider: _
                        });
                        return yield G(Ee), Ee
                    })).apply(this, arguments)
                }

                function ie(Ee) {
                    return se.apply(this, arguments)
                }

                function se() {
                    return (se = e(function*(Ee) {
                        const xe = g(Ee),
                            J = w[xe];
                        if (!J) throw new Error(`No filter for index "${xe}"`);
                        return J.getChangesAndClear()
                    })).apply(this, arguments)
                }

                function ee(Ee) {
                    return j.apply(this, arguments)
                }

                function j() {
                    return (j = e(function*(Ee) {
                        const xe = g(Ee),
                            J = w[xe];
                        if (!J) throw new Error(`No filter for index "${xe}"`);
                        let H = [];
                        return "log" === J.type && (H = J.getAllResults()), H
                    })).apply(this, arguments)
                }

                function ne(Ee) {
                    return Y.apply(this, arguments)
                }

                function Y() {
                    return Y = e(function*(Ee) {
                        const xe = g(Ee),
                            H = !!w[xe];
                        return H && (yield function X(Ee) {
                            return te.apply(this, arguments)
                        }(xe)), H
                    }), Y.apply(this, arguments)
                }

                function G(Ee) {
                    return K.apply(this, arguments)
                }

                function K() {
                    return (K = e(function*(Ee) {
                        const xe = l(w).length,
                            J = yield y.getLatestBlock();
                        return yield Ee.initialize({
                            currentBlock: J
                        }), v++, w[v] = Ee, Ee.id = v, Ee.idHex = u(v), _e({
                            prevFilterCount: xe,
                            newFilterCount: l(w).length
                        }), v
                    })).apply(this, arguments)
                }

                function te() {
                    return (te = e(function*(Ee) {
                        const xe = l(w).length;
                        delete w[Ee], _e({
                            prevFilterCount: xe,
                            newFilterCount: l(w).length
                        })
                    })).apply(this, arguments)
                }

                function ve() {
                    return (ve = e(function*() {
                        const Ee = l(w).length;
                        w = {}, _e({
                            prevFilterCount: Ee,
                            newFilterCount: 0
                        })
                    })).apply(this, arguments)
                }

                function _e({
                    prevFilterCount: Ee,
                    newFilterCount: xe
                }) {
                    0 === Ee && xe > 0 ? y.on("sync", x) : Ee > 0 && 0 === xe && y.removeListener("sync", x)
                }
            }
        },
        74969: (R, s, t) => {
            var e = t(17156).default;
            const p = t(14431),
                h = t(99998),
                f = t(64224),
                {
                    hexToInt: r,
                    incrementHexInt: o,
                    minBlockRef: u,
                    blockRefIsNumber: g
                } = t(71086);
            R.exports = class c extends f {
                constructor({
                    provider: a,
                    params: n
                }) {
                    super(), this.type = "log", this.ethQuery = new p(a), this.params = Object.assign({
                        fromBlock: "latest",
                        toBlock: "latest",
                        address: void 0,
                        topics: []
                    }, n), this.params.address && (Array.isArray(this.params.address) || (this.params.address = [this.params.address]), this.params.address = this.params.address.map(l => l.toLowerCase()))
                }
                initialize({
                    currentBlock: a
                }) {
                    var n = this;
                    return e(function*() {
                        let l = n.params.fromBlock;
                        ["latest", "pending"].includes(l) && (l = a), "earliest" === l && (l = "0x0"), n.params.fromBlock = l;
                        const y = u(n.params.toBlock, a),
                            _ = Object.assign({}, n.params, {
                                toBlock: y
                            }),
                            v = yield n._fetchLogs(_);
                        n.addInitialResults(v)
                    })()
                }
                update({
                    oldBlock: a,
                    newBlock: n
                }) {
                    var l = this;
                    return e(function*() {
                        const y = n;
                        let _;
                        _ = a ? o(a) : n;
                        const v = Object.assign({}, l.params, {
                                fromBlock: _,
                                toBlock: y
                            }),
                            C = (yield l._fetchLogs(v)).filter(E => l.matchLog(E));
                        l.addResults(C)
                    })()
                }
                _fetchLogs(a) {
                    var n = this;
                    return e(function*() {
                        return yield h(y => n.ethQuery.getLogs(a, y))()
                    })()
                }
                matchLog(a) {
                    if (r(this.params.fromBlock) >= r(a.blockNumber) || g(this.params.toBlock) && r(this.params.toBlock) <= r(a.blockNumber)) return !1;
                    const n = a.address && a.address.toLowerCase();
                    return !(this.params.address && n && !this.params.address.includes(n)) && this.params.topics.every((y, _) => {
                        let v = a.topics[_];
                        if (!v) return !1;
                        v = v.toLowerCase();
                        let w = Array.isArray(y) ? y : [y];
                        return !!w.includes(null) || (w = w.map(S => S.toLowerCase()), w.includes(v))
                    })
                }
            }
        },
        99998: R => {
            "use strict";
            const s = (e, p, h, f) => function(...b) {
                    return new(0, p.promiseModule)((o, u) => {
                        b.push(p.multiArgs ? (...c) => {
                            p.errorFirst ? c[0] ? u(c) : (c.shift(), o(c)) : o(c)
                        } : p.errorFirst ? (c, d) => {
                            c ? u(c) : o(d)
                        } : o), Reflect.apply(e, this === h ? f : this, b)
                    })
                },
                t = new WeakMap;
            R.exports = (e, p) => {
                p = {
                    exclude: [/.+(?:Sync|Stream)$/],
                    errorFirst: !0,
                    promiseModule: Promise,
                    ...p
                };
                const h = typeof e;
                if (null === e || "object" !== h && "function" !== h) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${null===e?"null":h}\``);
                const b = new WeakMap,
                    r = new Proxy(e, {
                        apply(o, u, g) {
                            const c = b.get(o);
                            if (c) return Reflect.apply(c, u, g);
                            const d = p.excludeMain ? o : s(o, p, r, o);
                            return b.set(o, d), Reflect.apply(d, u, g)
                        },
                        get(o, u) {
                            const g = o[u];
                            if (!((o, u) => {
                                    let g = t.get(o);
                                    if (g || (g = {}, t.set(o, g)), u in g) return g[u];
                                    const c = y => "string" == typeof y || "symbol" == typeof u ? u === y : y.test(u),
                                        d = Reflect.getOwnPropertyDescriptor(o, u),
                                        a = void 0 === d || d.writable || d.configurable,
                                        l = (p.include ? p.include.some(c) : !p.exclude.some(c)) && a;
                                    return g[u] = l, l
                                })(o, u) || g === Function.prototype[u]) return g;
                            const c = b.get(g);
                            if (c) return c;
                            if ("function" == typeof g) {
                                const d = s(g, p, r, o);
                                return b.set(g, d), d
                            }
                            return g
                        }
                    });
                return r
            }
        },
        34035: (R, s, t) => {
            var e = t(17156).default;
            const p = t(91184).default,
                {
                    createAsyncMiddleware: h,
                    createScaffoldMiddleware: f
                } = t(47547),
                b = t(66255),
                {
                    unsafeRandomBytes: r,
                    incrementHexInt: o
                } = t(71086),
                u = t(2341);

            function c(d) {
                return null == d ? null : {
                    hash: d.hash,
                    parentHash: d.parentHash,
                    sha3Uncles: d.sha3Uncles,
                    miner: d.miner,
                    stateRoot: d.stateRoot,
                    transactionsRoot: d.transactionsRoot,
                    receiptsRoot: d.receiptsRoot,
                    logsBloom: d.logsBloom,
                    difficulty: d.difficulty,
                    number: d.number,
                    gasLimit: d.gasLimit,
                    gasUsed: d.gasUsed,
                    nonce: d.nonce,
                    mixHash: d.mixHash,
                    timestamp: d.timestamp,
                    extraData: d.extraData
                }
            }
            R.exports = function g({
                blockTracker: d,
                provider: a
            }) {
                const n = {},
                    l = b({
                        blockTracker: d,
                        provider: a
                    });
                let y = !1;
                const _ = new p,
                    v = f({
                        eth_subscribe: h(function w(I, T) {
                            return C.apply(this, arguments)
                        }),
                        eth_unsubscribe: h(function E(I, T) {
                            return S.apply(this, arguments)
                        })
                    });
                return v.destroy = function O() {
                    _.removeAllListeners();
                    for (const I in n) n[I].destroy(), delete n[I];
                    y = !0
                }, {
                    events: _,
                    middleware: v
                };

                function C() {
                    return C = e(function*(I, T) {
                        if (y) throw new Error("SubscriptionManager - attempting to use after destroying");
                        const k = I.params[0],
                            P = r(16);
                        let Z;
                        switch (k) {
                            case "newHeads":
                                Z = function ie({
                                    subId: ee
                                }) {
                                    const j = {
                                        type: k,
                                        destroy: (ne = e(function*() {
                                            d.removeListener("sync", j.update)
                                        }), function() {
                                            return ne.apply(this, arguments)
                                        }),
                                        update: function() {
                                            var ne = e(function*({
                                                oldBlock: Y,
                                                newBlock: G
                                            }) {
                                                const K = G,
                                                    X = o(Y);
                                                (yield u({
                                                    provider: a,
                                                    fromBlock: X,
                                                    toBlock: K
                                                })).map(c).filter(ve => null !== ve).forEach(ve => {
                                                    x(ee, ve)
                                                })
                                            });
                                            return function(G) {
                                                return ne.apply(this, arguments)
                                            }
                                        }()
                                    };
                                    var ne;
                                    return d.on("sync", j.update), j
                                }({
                                    subId: P
                                });
                                break;
                            case "logs":
                                const ee = I.params[1];
                                Z = function se({
                                    subId: ee,
                                    filter: j
                                }) {
                                    return j.on("update", Y => x(ee, Y)), {
                                        type: k,
                                        destroy: (Y = e(function*() {
                                            return yield l.uninstallFilter(j.idHex)
                                        }), function() {
                                            return Y.apply(this, arguments)
                                        })
                                    };
                                    var Y
                                }({
                                    subId: P,
                                    filter: yield l.newLogFilter(ee)
                                });
                                break;
                            default:
                                throw new Error(`SubscriptionManager - unsupported subscription type "${k}"`)
                        }
                        return n[P] = Z, void(T.result = P)
                    }), C.apply(this, arguments)
                }

                function S() {
                    return (S = e(function*(I, T) {
                        if (y) throw new Error("SubscriptionManager - attempting to use after destroying");
                        const k = I.params[0],
                            P = n[k];
                        P ? (delete n[k], yield P.destroy(), T.result = !0) : T.result = !1
                    })).apply(this, arguments)
                }

                function x(I, T) {
                    _.emit("notification", {
                        jsonrpc: "2.0",
                        method: "eth_subscription",
                        params: {
                            subscription: I,
                            result: T
                        }
                    })
                }
            }
        },
        95785: (R, s, t) => {
            var e = t(17156).default;
            const p = t(40040),
                h = t(2341),
                {
                    incrementHexInt: f
                } = t(71086);
            R.exports = class b extends p {
                constructor({
                    provider: o
                }) {
                    super(), this.type = "tx", this.provider = o
                }
                update({
                    oldBlock: o
                }) {
                    var u = this;
                    return e(function*() {
                        const g = o,
                            c = f(o),
                            d = yield h({
                                provider: u.provider,
                                fromBlock: c,
                                toBlock: g
                            }), a = [];
                        for (const n of d) a.push(...n.transactions);
                        u.addResults(a)
                    })()
                }
            }
        },
        14431: (R, s, t) => {
            const e = t(20498),
                p = t(40519)();

            function h(o) {
                this.currentProvider = o
            }

            function f(o) {
                return function() {
                    var g = [].slice.call(arguments),
                        c = g.pop();
                    this.sendAsync({
                        method: o,
                        params: g
                    }, c)
                }
            }

            function b(o, u) {
                return function() {
                    var c = [].slice.call(arguments),
                        d = c.pop();
                    c.length < o && c.push("latest"), this.sendAsync({
                        method: u,
                        params: c
                    }, d)
                }
            }
            R.exports = h, h.prototype.getBalance = b(2, "eth_getBalance"), h.prototype.getCode = b(2, "eth_getCode"), h.prototype.getTransactionCount = b(2, "eth_getTransactionCount"), h.prototype.getStorageAt = b(3, "eth_getStorageAt"), h.prototype.call = b(2, "eth_call"), h.prototype.protocolVersion = f("eth_protocolVersion"), h.prototype.syncing = f("eth_syncing"), h.prototype.coinbase = f("eth_coinbase"), h.prototype.mining = f("eth_mining"), h.prototype.hashrate = f("eth_hashrate"), h.prototype.gasPrice = f("eth_gasPrice"), h.prototype.accounts = f("eth_accounts"), h.prototype.blockNumber = f("eth_blockNumber"), h.prototype.getBlockTransactionCountByHash = f("eth_getBlockTransactionCountByHash"), h.prototype.getBlockTransactionCountByNumber = f("eth_getBlockTransactionCountByNumber"), h.prototype.getUncleCountByBlockHash = f("eth_getUncleCountByBlockHash"), h.prototype.getUncleCountByBlockNumber = f("eth_getUncleCountByBlockNumber"), h.prototype.sign = f("eth_sign"), h.prototype.sendTransaction = f("eth_sendTransaction"), h.prototype.sendRawTransaction = f("eth_sendRawTransaction"), h.prototype.estimateGas = f("eth_estimateGas"), h.prototype.getBlockByHash = f("eth_getBlockByHash"), h.prototype.getBlockByNumber = f("eth_getBlockByNumber"), h.prototype.getTransactionByHash = f("eth_getTransactionByHash"), h.prototype.getTransactionByBlockHashAndIndex = f("eth_getTransactionByBlockHashAndIndex"), h.prototype.getTransactionByBlockNumberAndIndex = f("eth_getTransactionByBlockNumberAndIndex"), h.prototype.getTransactionReceipt = f("eth_getTransactionReceipt"), h.prototype.getUncleByBlockHashAndIndex = f("eth_getUncleByBlockHashAndIndex"), h.prototype.getUncleByBlockNumberAndIndex = f("eth_getUncleByBlockNumberAndIndex"), h.prototype.getCompilers = f("eth_getCompilers"), h.prototype.compileLLL = f("eth_compileLLL"), h.prototype.compileSolidity = f("eth_compileSolidity"), h.prototype.compileSerpent = f("eth_compileSerpent"), h.prototype.newFilter = f("eth_newFilter"), h.prototype.newBlockFilter = f("eth_newBlockFilter"), h.prototype.newPendingTransactionFilter = f("eth_newPendingTransactionFilter"), h.prototype.uninstallFilter = f("eth_uninstallFilter"), h.prototype.getFilterChanges = f("eth_getFilterChanges"), h.prototype.getFilterLogs = f("eth_getFilterLogs"), h.prototype.getLogs = f("eth_getLogs"), h.prototype.getWork = f("eth_getWork"), h.prototype.submitWork = f("eth_submitWork"), h.prototype.submitHashrate = f("eth_submitHashrate"), h.prototype.sendAsync = function(o, u) {
                this.currentProvider.sendAsync(function r(o) {
                    return e({
                        id: p(),
                        jsonrpc: "2.0",
                        params: []
                    }, o)
                }(o), function(c, d) {
                    if (!c && d.error && (c = new Error("EthQuery - RPC Error - " + d.error.message)), c) return u(c);
                    u(null, d.result)
                })
            }
        },
        10117: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.EthereumProviderError = s.EthereumRpcError = void 0;
            const e = t(38701);
            class p extends Error {
                constructor(o, u, g) {
                    if (!Number.isInteger(o)) throw new Error('"code" must be an integer.');
                    if (!u || "string" != typeof u) throw new Error('"message" must be a nonempty string.');
                    super(u), this.code = o, void 0 !== g && (this.data = g)
                }
                serialize() {
                    const o = {
                        code: this.code,
                        message: this.message
                    };
                    return void 0 !== this.data && (o.data = this.data), this.stack && (o.stack = this.stack), o
                }
                toString() {
                    return e.default(this.serialize(), b, 2)
                }
            }

            function b(r, o) {
                if ("[Circular]" !== o) return o
            }
            s.EthereumRpcError = p, s.EthereumProviderError = class h extends p {
                constructor(o, u, g) {
                    if (! function f(r) {
                            return Number.isInteger(r) && r >= 1e3 && r <= 4999
                        }(o)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
                    super(o, u, g)
                }
            }
        },
        53661: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.errorValues = s.errorCodes = void 0, s.errorCodes = {
                rpc: {
                    invalidInput: -32e3,
                    resourceNotFound: -32001,
                    resourceUnavailable: -32002,
                    transactionRejected: -32003,
                    methodNotSupported: -32004,
                    limitExceeded: -32005,
                    parse: -32700,
                    invalidRequest: -32600,
                    methodNotFound: -32601,
                    invalidParams: -32602,
                    internal: -32603
                },
                provider: {
                    userRejectedRequest: 4001,
                    unauthorized: 4100,
                    unsupportedMethod: 4200,
                    disconnected: 4900,
                    chainDisconnected: 4901
                }
            }, s.errorValues = {
                "-32700": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
                },
                "-32600": {
                    standard: "JSON RPC 2.0",
                    message: "The JSON sent is not a valid Request object."
                },
                "-32601": {
                    standard: "JSON RPC 2.0",
                    message: "The method does not exist / is not available."
                },
                "-32602": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid method parameter(s)."
                },
                "-32603": {
                    standard: "JSON RPC 2.0",
                    message: "Internal JSON-RPC error."
                },
                "-32000": {
                    standard: "EIP-1474",
                    message: "Invalid input."
                },
                "-32001": {
                    standard: "EIP-1474",
                    message: "Resource not found."
                },
                "-32002": {
                    standard: "EIP-1474",
                    message: "Resource unavailable."
                },
                "-32003": {
                    standard: "EIP-1474",
                    message: "Transaction rejected."
                },
                "-32004": {
                    standard: "EIP-1474",
                    message: "Method not supported."
                },
                "-32005": {
                    standard: "EIP-1474",
                    message: "Request limit exceeded."
                },
                4001: {
                    standard: "EIP-1193",
                    message: "User rejected the request."
                },
                4100: {
                    standard: "EIP-1193",
                    message: "The requested account and/or method has not been authorized by the user."
                },
                4200: {
                    standard: "EIP-1193",
                    message: "The requested method is not supported by this Ethereum provider."
                },
                4900: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from all chains."
                },
                4901: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from the specified chain."
                }
            }
        },
        27296: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.ethErrors = void 0;
            const e = t(10117),
                p = t(65114),
                h = t(53661);

            function f(o, u) {
                const [g, c] = r(u);
                return new e.EthereumRpcError(o, g || p.getMessageFromCode(o), c)
            }

            function b(o, u) {
                const [g, c] = r(u);
                return new e.EthereumProviderError(o, g || p.getMessageFromCode(o), c)
            }

            function r(o) {
                if (o) {
                    if ("string" == typeof o) return [o];
                    if ("object" == typeof o && !Array.isArray(o)) {
                        const {
                            message: u,
                            data: g
                        } = o;
                        if (u && "string" != typeof u) throw new Error("Must specify string message.");
                        return [u || void 0, g]
                    }
                }
                return []
            }
            s.ethErrors = {
                rpc: {
                    parse: o => f(h.errorCodes.rpc.parse, o),
                    invalidRequest: o => f(h.errorCodes.rpc.invalidRequest, o),
                    invalidParams: o => f(h.errorCodes.rpc.invalidParams, o),
                    methodNotFound: o => f(h.errorCodes.rpc.methodNotFound, o),
                    internal: o => f(h.errorCodes.rpc.internal, o),
                    server: o => {
                        if (!o || "object" != typeof o || Array.isArray(o)) throw new Error("Ethereum RPC Server errors must provide single object argument.");
                        const {
                            code: u
                        } = o;
                        if (!Number.isInteger(u) || u > -32005 || u < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
                        return f(u, o)
                    },
                    invalidInput: o => f(h.errorCodes.rpc.invalidInput, o),
                    resourceNotFound: o => f(h.errorCodes.rpc.resourceNotFound, o),
                    resourceUnavailable: o => f(h.errorCodes.rpc.resourceUnavailable, o),
                    transactionRejected: o => f(h.errorCodes.rpc.transactionRejected, o),
                    methodNotSupported: o => f(h.errorCodes.rpc.methodNotSupported, o),
                    limitExceeded: o => f(h.errorCodes.rpc.limitExceeded, o)
                },
                provider: {
                    userRejectedRequest: o => b(h.errorCodes.provider.userRejectedRequest, o),
                    unauthorized: o => b(h.errorCodes.provider.unauthorized, o),
                    unsupportedMethod: o => b(h.errorCodes.provider.unsupportedMethod, o),
                    disconnected: o => b(h.errorCodes.provider.disconnected, o),
                    chainDisconnected: o => b(h.errorCodes.provider.chainDisconnected, o),
                    custom: o => {
                        if (!o || "object" != typeof o || Array.isArray(o)) throw new Error("Ethereum Provider custom errors must provide single object argument.");
                        const {
                            code: u,
                            message: g,
                            data: c
                        } = o;
                        if (!g || "string" != typeof g) throw new Error('"message" must be a nonempty string');
                        return new e.EthereumProviderError(u, g, c)
                    }
                }
            }
        },
        90664: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.getMessageFromCode = s.serializeError = s.EthereumProviderError = s.EthereumRpcError = s.ethErrors = s.errorCodes = void 0;
            const e = t(10117);
            Object.defineProperty(s, "EthereumRpcError", {
                enumerable: !0,
                get: function() {
                    return e.EthereumRpcError
                }
            }), Object.defineProperty(s, "EthereumProviderError", {
                enumerable: !0,
                get: function() {
                    return e.EthereumProviderError
                }
            });
            const p = t(65114);
            Object.defineProperty(s, "serializeError", {
                enumerable: !0,
                get: function() {
                    return p.serializeError
                }
            }), Object.defineProperty(s, "getMessageFromCode", {
                enumerable: !0,
                get: function() {
                    return p.getMessageFromCode
                }
            });
            const h = t(27296);
            Object.defineProperty(s, "ethErrors", {
                enumerable: !0,
                get: function() {
                    return h.ethErrors
                }
            });
            const f = t(53661);
            Object.defineProperty(s, "errorCodes", {
                enumerable: !0,
                get: function() {
                    return f.errorCodes
                }
            })
        },
        65114: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.serializeError = s.isValidCode = s.getMessageFromCode = s.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
            const e = t(53661),
                p = t(10117),
                h = e.errorCodes.rpc.internal,
                b = {
                    code: h,
                    message: r(h)
                };

            function r(a, n = "Unspecified error message. This is a bug, please report it.") {
                if (Number.isInteger(a)) {
                    const l = a.toString();
                    if (d(e.errorValues, l)) return e.errorValues[l].message;
                    if (g(a)) return s.JSON_RPC_SERVER_ERROR_MESSAGE
                }
                return n
            }

            function o(a) {
                if (!Number.isInteger(a)) return !1;
                const n = a.toString();
                return !(!e.errorValues[n] && !g(a))
            }

            function g(a) {
                return a >= -32099 && a <= -32e3
            }

            function c(a) {
                return a && "object" == typeof a && !Array.isArray(a) ? Object.assign({}, a) : a
            }

            function d(a, n) {
                return Object.prototype.hasOwnProperty.call(a, n)
            }
            s.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.", s.getMessageFromCode = r, s.isValidCode = o, s.serializeError = function u(a, {
                fallbackError: n = b,
                shouldIncludeStack: l = !1
            } = {}) {
                var y, _;
                if (!n || !Number.isInteger(n.code) || "string" != typeof n.message) throw new Error("Must provide fallback error with integer number code and string message.");
                if (a instanceof p.EthereumRpcError) return a.serialize();
                const v = {};
                if (a && "object" == typeof a && !Array.isArray(a) && d(a, "code") && o(a.code)) {
                    const C = a;
                    v.code = C.code, C.message && "string" == typeof C.message ? (v.message = C.message, d(C, "data") && (v.data = C.data)) : (v.message = r(v.code), v.data = {
                        originalError: c(a)
                    })
                } else {
                    v.code = n.code;
                    const C = null === (y = a) || void 0 === y ? void 0 : y.message;
                    v.message = C && "string" == typeof C ? C : n.message, v.data = {
                        originalError: c(a)
                    }
                }
                const w = null === (_ = a) || void 0 === _ ? void 0 : _.stack;
                return l && a && w && "string" == typeof w && (v.stack = w), v
            }
        },
        38701: R => {
            R.exports = f, f.default = f, f.stable = u, f.stableStringify = u;
            var s = "[...]",
                t = "[Circular]",
                e = [],
                p = [];

            function h() {
                return {
                    depthLimit: Number.MAX_SAFE_INTEGER,
                    edgesLimit: Number.MAX_SAFE_INTEGER
                }
            }

            function f(d, a, n, l) {
                var y;
                typeof l > "u" && (l = h()), r(d, "", 0, [], void 0, 0, l);
                try {
                    y = 0 === p.length ? JSON.stringify(d, a, n) : JSON.stringify(d, c(a), n)
                } catch {
                    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
                } finally {
                    for (; 0 !== e.length;) {
                        var _ = e.pop();
                        4 === _.length ? Object.defineProperty(_[0], _[1], _[3]) : _[0][_[1]] = _[2]
                    }
                }
                return y
            }

            function b(d, a, n, l) {
                var y = Object.getOwnPropertyDescriptor(l, n);
                void 0 !== y.get ? y.configurable ? (Object.defineProperty(l, n, {
                    value: d
                }), e.push([l, n, a, y])) : p.push([a, n, d]) : (l[n] = d, e.push([l, n, a]))
            }

            function r(d, a, n, l, y, _, v) {
                var w;
                if (_ += 1, "object" == typeof d && null !== d) {
                    for (w = 0; w < l.length; w++)
                        if (l[w] === d) return void b(t, d, a, y);
                    if (typeof v.depthLimit < "u" && _ > v.depthLimit) return void b(s, d, a, y);
                    if (typeof v.edgesLimit < "u" && n + 1 > v.edgesLimit) return void b(s, d, a, y);
                    if (l.push(d), Array.isArray(d))
                        for (w = 0; w < d.length; w++) r(d[w], w, w, l, d, _, v);
                    else {
                        var C = Object.keys(d);
                        for (w = 0; w < C.length; w++) {
                            var E = C[w];
                            r(d[E], E, w, l, d, _, v)
                        }
                    }
                    l.pop()
                }
            }

            function o(d, a) {
                return d < a ? -1 : d > a ? 1 : 0
            }

            function u(d, a, n, l) {
                typeof l > "u" && (l = h());
                var _, y = g(d, "", 0, [], void 0, 0, l) || d;
                try {
                    _ = 0 === p.length ? JSON.stringify(y, a, n) : JSON.stringify(y, c(a), n)
                } catch {
                    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
                } finally {
                    for (; 0 !== e.length;) {
                        var v = e.pop();
                        4 === v.length ? Object.defineProperty(v[0], v[1], v[3]) : v[0][v[1]] = v[2]
                    }
                }
                return _
            }

            function g(d, a, n, l, y, _, v) {
                var w;
                if (_ += 1, "object" == typeof d && null !== d) {
                    for (w = 0; w < l.length; w++)
                        if (l[w] === d) return void b(t, d, a, y);
                    try {
                        if ("function" == typeof d.toJSON) return
                    } catch {
                        return
                    }
                    if (typeof v.depthLimit < "u" && _ > v.depthLimit) return void b(s, d, a, y);
                    if (typeof v.edgesLimit < "u" && n + 1 > v.edgesLimit) return void b(s, d, a, y);
                    if (l.push(d), Array.isArray(d))
                        for (w = 0; w < d.length; w++) g(d[w], w, w, l, d, _, v);
                    else {
                        var C = {},
                            E = Object.keys(d).sort(o);
                        for (w = 0; w < E.length; w++) {
                            var S = E[w];
                            g(d[S], S, w, l, d, _, v), C[S] = d[S]
                        }
                        if (!(typeof y < "u")) return C;
                        e.push([y, a, d]), y[a] = C
                    }
                    l.pop()
                }
            }

            function c(d) {
                return d = typeof d < "u" ? d : function(a, n) {
                        return n
                    },
                    function(a, n) {
                        if (p.length > 0)
                            for (var l = 0; l < p.length; l++) {
                                var y = p[l];
                                if (y[1] === a && y[0] === n) {
                                    n = y[2], p.splice(l, 1);
                                    break
                                }
                            }
                        return d.call(this, a, n)
                    }
            }
        },
        80238: R => {
            "use strict";
            var t = Object.prototype.toString,
                e = Math.max,
                h = function(o, u) {
                    for (var g = [], c = 0; c < o.length; c += 1) g[c] = o[c];
                    for (var d = 0; d < u.length; d += 1) g[d + o.length] = u[d];
                    return g
                };
            R.exports = function(o) {
                var u = this;
                if ("function" != typeof u || "[object Function]" !== t.apply(u)) throw new TypeError("Function.prototype.bind called on incompatible " + u);
                for (var c, g = function(o, u) {
                        for (var g = [], c = 1, d = 0; c < o.length; c += 1, d += 1) g[d] = o[c];
                        return g
                    }(arguments), a = e(0, u.length - g.length), n = [], l = 0; l < a; l++) n[l] = "$" + l;
                if (c = Function("binder", "return function (" + function(r, o) {
                        for (var u = "", g = 0; g < r.length; g += 1) u += r[g], g + 1 < r.length && (u += ",");
                        return u
                    }(n) + "){ return binder.apply(this,arguments); }")(function() {
                        if (this instanceof c) {
                            var _ = u.apply(this, h(g, arguments));
                            return Object(_) === _ ? _ : this
                        }
                        return u.apply(o, h(g, arguments))
                    }), u.prototype) {
                    var y = function() {};
                    y.prototype = u.prototype, c.prototype = new y, y.prototype = null
                }
                return c
            }
        },
        45333: (R, s, t) => {
            "use strict";
            var e = t(80238);
            R.exports = Function.prototype.bind || e
        },
        90491: (R, s, t) => {
            "use strict";
            var e, p = t(22050),
                h = t(74500),
                f = t(2992),
                b = t(43944),
                r = t(94203),
                o = t(95223),
                u = t(6130),
                g = Function,
                c = function(Y) {
                    try {
                        return g('"use strict"; return (' + Y + ").constructor;")()
                    } catch {}
                },
                d = Object.getOwnPropertyDescriptor;
            if (d) try {
                d({}, "")
            } catch {
                d = null
            }
            var a = function() {
                    throw new o
                },
                n = d ? function() {
                    try {
                        return a
                    } catch {
                        try {
                            return d(arguments, "callee").get
                        } catch {
                            return a
                        }
                    }
                }() : a,
                l = t(76152)(),
                y = t(39028)(),
                _ = Object.getPrototypeOf || (y ? function(Y) {
                    return Y.__proto__
                } : null),
                v = {},
                w = typeof Uint8Array > "u" || !_ ? e : _(Uint8Array),
                C = {
                    __proto__: null,
                    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
                    "%Array%": Array,
                    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
                    "%ArrayIteratorPrototype%": l && _ ? _([][Symbol.iterator]()) : e,
                    "%AsyncFromSyncIteratorPrototype%": e,
                    "%AsyncFunction%": v,
                    "%AsyncGenerator%": v,
                    "%AsyncGeneratorFunction%": v,
                    "%AsyncIteratorPrototype%": v,
                    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
                    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
                    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
                    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
                    "%Boolean%": Boolean,
                    "%DataView%": typeof DataView > "u" ? e : DataView,
                    "%Date%": Date,
                    "%decodeURI%": decodeURI,
                    "%decodeURIComponent%": decodeURIComponent,
                    "%encodeURI%": encodeURI,
                    "%encodeURIComponent%": encodeURIComponent,
                    "%Error%": p,
                    "%eval%": eval,
                    "%EvalError%": h,
                    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
                    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
                    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
                    "%Function%": g,
                    "%GeneratorFunction%": v,
                    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
                    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
                    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
                    "%isFinite%": isFinite,
                    "%isNaN%": isNaN,
                    "%IteratorPrototype%": l && _ ? _(_([][Symbol.iterator]())) : e,
                    "%JSON%": "object" == typeof JSON ? JSON : e,
                    "%Map%": typeof Map > "u" ? e : Map,
                    "%MapIteratorPrototype%": typeof Map > "u" || !l || !_ ? e : _((new Map)[Symbol.iterator]()),
                    "%Math%": Math,
                    "%Number%": Number,
                    "%Object%": Object,
                    "%parseFloat%": parseFloat,
                    "%parseInt%": parseInt,
                    "%Promise%": typeof Promise > "u" ? e : Promise,
                    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
                    "%RangeError%": f,
                    "%ReferenceError%": b,
                    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
                    "%RegExp%": RegExp,
                    "%Set%": typeof Set > "u" ? e : Set,
                    "%SetIteratorPrototype%": typeof Set > "u" || !l || !_ ? e : _((new Set)[Symbol.iterator]()),
                    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
                    "%String%": String,
                    "%StringIteratorPrototype%": l && _ ? _("" [Symbol.iterator]()) : e,
                    "%Symbol%": l ? Symbol : e,
                    "%SyntaxError%": r,
                    "%ThrowTypeError%": n,
                    "%TypedArray%": w,
                    "%TypeError%": o,
                    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
                    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
                    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
                    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
                    "%URIError%": u,
                    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
                    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
                    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet
                };
            if (_) try {
                null.error
            } catch (Y) {
                var E = _(_(Y));
                C["%Error.prototype%"] = E
            }
            var S = function Y(G) {
                    var K;
                    if ("%AsyncFunction%" === G) K = c("async function () {}");
                    else if ("%GeneratorFunction%" === G) K = c("function* () {}");
                    else if ("%AsyncGeneratorFunction%" === G) K = c("async function* () {}");
                    else if ("%AsyncGenerator%" === G) {
                        var X = Y("%AsyncGeneratorFunction%");
                        X && (K = X.prototype)
                    } else if ("%AsyncIteratorPrototype%" === G) {
                        var te = Y("%AsyncGenerator%");
                        te && _ && (K = _(te.prototype))
                    }
                    return C[G] = K, K
                },
                x = {
                    __proto__: null,
                    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                    "%ArrayPrototype%": ["Array", "prototype"],
                    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                    "%ArrayProto_values%": ["Array", "prototype", "values"],
                    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                    "%BooleanPrototype%": ["Boolean", "prototype"],
                    "%DataViewPrototype%": ["DataView", "prototype"],
                    "%DatePrototype%": ["Date", "prototype"],
                    "%ErrorPrototype%": ["Error", "prototype"],
                    "%EvalErrorPrototype%": ["EvalError", "prototype"],
                    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                    "%FunctionPrototype%": ["Function", "prototype"],
                    "%Generator%": ["GeneratorFunction", "prototype"],
                    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                    "%JSONParse%": ["JSON", "parse"],
                    "%JSONStringify%": ["JSON", "stringify"],
                    "%MapPrototype%": ["Map", "prototype"],
                    "%NumberPrototype%": ["Number", "prototype"],
                    "%ObjectPrototype%": ["Object", "prototype"],
                    "%ObjProto_toString%": ["Object", "prototype", "toString"],
                    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                    "%PromisePrototype%": ["Promise", "prototype"],
                    "%PromiseProto_then%": ["Promise", "prototype", "then"],
                    "%Promise_all%": ["Promise", "all"],
                    "%Promise_reject%": ["Promise", "reject"],
                    "%Promise_resolve%": ["Promise", "resolve"],
                    "%RangeErrorPrototype%": ["RangeError", "prototype"],
                    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                    "%RegExpPrototype%": ["RegExp", "prototype"],
                    "%SetPrototype%": ["Set", "prototype"],
                    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                    "%StringPrototype%": ["String", "prototype"],
                    "%SymbolPrototype%": ["Symbol", "prototype"],
                    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                    "%TypeErrorPrototype%": ["TypeError", "prototype"],
                    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                    "%URIErrorPrototype%": ["URIError", "prototype"],
                    "%WeakMapPrototype%": ["WeakMap", "prototype"],
                    "%WeakSetPrototype%": ["WeakSet", "prototype"]
                },
                O = t(45333),
                I = t(10836),
                T = O.call(Function.call, Array.prototype.concat),
                k = O.call(Function.apply, Array.prototype.splice),
                P = O.call(Function.call, String.prototype.replace),
                Z = O.call(Function.call, String.prototype.slice),
                ie = O.call(Function.call, RegExp.prototype.exec),
                se = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                ee = /\\(\\)?/g,
                ne = function(G, K) {
                    var te, X = G;
                    if (I(x, X) && (X = "%" + (te = x[X])[0] + "%"), I(C, X)) {
                        var de = C[X];
                        if (de === v && (de = S(X)), typeof de > "u" && !K) throw new o("intrinsic " + G + " exists, but is not available. Please file an issue!");
                        return {
                            alias: te,
                            name: X,
                            value: de
                        }
                    }
                    throw new r("intrinsic " + G + " does not exist!")
                };
            R.exports = function(G, K) {
                if ("string" != typeof G || 0 === G.length) throw new o("intrinsic name must be a non-empty string");
                if (arguments.length > 1 && "boolean" != typeof K) throw new o('"allowMissing" argument must be a boolean');
                if (null === ie(/^%?[^%]*%?$/, G)) throw new r("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                var X = function(G) {
                        var K = Z(G, 0, 1),
                            X = Z(G, -1);
                        if ("%" === K && "%" !== X) throw new r("invalid intrinsic syntax, expected closing `%`");
                        if ("%" === X && "%" !== K) throw new r("invalid intrinsic syntax, expected opening `%`");
                        var te = [];
                        return P(G, se, function(de, ve, _e, Ee) {
                            te[te.length] = _e ? P(Ee, ee, "$1") : ve || de
                        }), te
                    }(G),
                    te = X.length > 0 ? X[0] : "",
                    de = ne("%" + te + "%", K),
                    ve = de.name,
                    _e = de.value,
                    Ee = !1,
                    xe = de.alias;
                xe && (te = xe[0], k(X, T([0, 1], xe)));
                for (var J = 1, H = !0; J < X.length; J += 1) {
                    var D = X[J],
                        B = Z(D, 0, 1),
                        V = Z(D, -1);
                    if (('"' === B || "'" === B || "`" === B || '"' === V || "'" === V || "`" === V) && B !== V) throw new r("property names with quotes must have matching quotes");
                    if (("constructor" === D || !H) && (Ee = !0), I(C, ve = "%" + (te += "." + D) + "%")) _e = C[ve];
                    else if (null != _e) {
                        if (!(D in _e)) {
                            if (!K) throw new o("base intrinsic for " + G + " exists, but the property is not available.");
                            return
                        }
                        if (d && J + 1 >= X.length) {
                            var N = d(_e, D);
                            _e = (H = !!N) && "get" in N && !("originalValue" in N.get) ? N.get : _e[D]
                        } else H = I(_e, D), _e = _e[D];
                        H && !Ee && (C[ve] = _e)
                    }
                }
                return _e
            }
        },
        79262: (R, s, t) => {
            "use strict";
            var p = t(90491)("%Object.getOwnPropertyDescriptor%", !0);
            if (p) try {
                p([], "length")
            } catch {
                p = null
            }
            R.exports = p
        },
        2486: (R, s, t) => {
            "use strict";
            var e = t(20474),
                p = function() {
                    return !!e
                };
            p.hasArrayLengthDefineBug = function() {
                if (!e) return null;
                try {
                    return 1 !== e([], "length", {
                        value: 1
                    }).length
                } catch {
                    return !0
                }
            }, R.exports = p
        },
        39028: R => {
            "use strict";
            var s = {
                    __proto__: null,
                    foo: {}
                },
                t = Object;
            R.exports = function() {
                return {
                    __proto__: s
                }.foo === s.foo && !(s instanceof t)
            }
        },
        76152: (R, s, t) => {
            "use strict";
            var e = typeof Symbol < "u" && Symbol,
                p = t(65441);
            R.exports = function() {
                return "function" == typeof e && "function" == typeof Symbol && "symbol" == typeof e("foo") && "symbol" == typeof Symbol("bar") && p()
            }
        },
        65441: R => {
            "use strict";
            R.exports = function() {
                if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                if ("symbol" == typeof Symbol.iterator) return !0;
                var t = {},
                    e = Symbol("test"),
                    p = Object(e);
                if ("string" == typeof e || "[object Symbol]" !== Object.prototype.toString.call(e) || "[object Symbol]" !== Object.prototype.toString.call(p)) return !1;
                for (e in t[e] = 42, t) return !1;
                if ("function" == typeof Object.keys && 0 !== Object.keys(t).length || "function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
                var f = Object.getOwnPropertySymbols(t);
                if (1 !== f.length || f[0] !== e || !Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                    var b = Object.getOwnPropertyDescriptor(t, e);
                    if (42 !== b.value || !0 !== b.enumerable) return !1
                }
                return !0
            }
        },
        10836: (R, s, t) => {
            "use strict";
            var e = Function.prototype.call,
                p = Object.prototype.hasOwnProperty,
                h = t(45333);
            R.exports = h.call(e, p)
        },
        66698: R => {
            R.exports = "function" == typeof Object.create ? function(t, e) {
                e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : function(t, e) {
                if (e) {
                    t.super_ = e;
                    var p = function() {};
                    p.prototype = e.prototype, t.prototype = new p, t.prototype.constructor = t
                }
            }
        },
        15887: function(R, s, t) {
            "use strict";
            var e = t(17156).default,
                p = this && this.__importDefault || function(o) {
                    return o && o.__esModule ? o : {
                        default: o
                    }
                };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.JsonRpcEngine = void 0;
            const h = p(t(91184)),
                f = t(90664);
            class b extends h.default {
                constructor() {
                    super(), this._middleware = []
                }
                push(u) {
                    this._middleware.push(u)
                }
                handle(u, g) {
                    if (g && "function" != typeof g) throw new Error('"callback" must be a function if provided.');
                    return Array.isArray(u) ? g ? this._handleBatch(u, g) : this._handleBatch(u) : g ? this._handle(u, g) : this._promiseHandle(u)
                }
                asMiddleware() {
                    var u = this;
                    return function() {
                        var g = e(function*(c, d, a, n) {
                            try {
                                const [l, y, _] = yield b._runAllMiddleware(c, d, u._middleware);
                                return y ? (yield b._runReturnHandlers(_), n(l)) : a(function() {
                                    var v = e(function*(w) {
                                        try {
                                            yield b._runReturnHandlers(_)
                                        } catch (C) {
                                            return w(C)
                                        }
                                        return w()
                                    });
                                    return function(w) {
                                        return v.apply(this, arguments)
                                    }
                                }())
                            } catch (l) {
                                return n(l)
                            }
                        });
                        return function(c, d, a, n) {
                            return g.apply(this, arguments)
                        }
                    }()
                }
                _handleBatch(u, g) {
                    var c = this;
                    return e(function*() {
                        try {
                            const d = yield Promise.all(u.map(c._promiseHandle.bind(c)));
                            return g ? g(null, d) : d
                        } catch (d) {
                            if (g) return g(d);
                            throw d
                        }
                    })()
                }
                _promiseHandle(u) {
                    return new Promise(g => {
                        this._handle(u, (c, d) => {
                            g(d)
                        })
                    })
                }
                _handle(u, g) {
                    var c = this;
                    return e(function*() {
                        if (!u || Array.isArray(u) || "object" != typeof u) {
                            const l = new f.EthereumRpcError(f.errorCodes.rpc.invalidRequest, "Requests must be plain objects. Received: " + typeof u, {
                                request: u
                            });
                            return g(l, {
                                id: void 0,
                                jsonrpc: "2.0",
                                error: l
                            })
                        }
                        if ("string" != typeof u.method) {
                            const l = new f.EthereumRpcError(f.errorCodes.rpc.invalidRequest, "Must specify a string method. Received: " + typeof u.method, {
                                request: u
                            });
                            return g(l, {
                                id: u.id,
                                jsonrpc: "2.0",
                                error: l
                            })
                        }
                        const d = Object.assign({}, u),
                            a = {
                                id: d.id,
                                jsonrpc: d.jsonrpc
                            };
                        let n = null;
                        try {
                            yield c._processRequest(d, a)
                        } catch (l) {
                            n = l
                        }
                        return n && (delete a.result, a.error || (a.error = f.serializeError(n))), g(n, a)
                    })()
                }
                _processRequest(u, g) {
                    var c = this;
                    return e(function*() {
                        const [d, a, n] = yield b._runAllMiddleware(u, g, c._middleware);
                        if (b._checkForCompletion(u, g, a), yield b._runReturnHandlers(n), d) throw d
                    })()
                }
                static _runAllMiddleware(u, g, c) {
                    return e(function*() {
                        const d = [];
                        let a = null,
                            n = !1;
                        for (const l of c)
                            if ([a, n] = yield b._runMiddleware(u, g, l, d), n) break;
                        return [a, n, d.reverse()]
                    })()
                }
                static _runMiddleware(u, g, c, d) {
                    return new Promise(a => {
                        const n = y => {
                                const _ = y || g.error;
                                _ && (g.error = f.serializeError(_)), a([_, !0])
                            },
                            l = y => {
                                g.error ? n(g.error) : (y && ("function" != typeof y && n(new f.EthereumRpcError(f.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof y}" for request:\n${r(u)}`, {
                                    request: u
                                })), d.push(y)), a([null, !1]))
                            };
                        try {
                            c(u, g, l, n)
                        } catch (y) {
                            n(y)
                        }
                    })
                }
                static _runReturnHandlers(u) {
                    return e(function*() {
                        for (const g of u) yield new Promise((c, d) => {
                            g(a => a ? d(a) : c())
                        })
                    })()
                }
                static _checkForCompletion(u, g, c) {
                    if (!("result" in g) && !("error" in g)) throw new f.EthereumRpcError(f.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:\n${r(u)}`, {
                        request: u
                    });
                    if (!c) throw new f.EthereumRpcError(f.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:\n${r(u)}`, {
                        request: u
                    })
                }
            }

            function r(o) {
                return JSON.stringify(o, null, 2)
            }
            s.JsonRpcEngine = b
        },
        34527: (R, s, t) => {
            "use strict";
            var e = t(17156).default;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.createAsyncMiddleware = void 0, s.createAsyncMiddleware = function p(h) {
                return function() {
                    var f = e(function*(b, r, o, u) {
                        let g;
                        const c = new Promise(l => {
                            g = l
                        });
                        let d = null,
                            a = !1;
                        const n = function() {
                            var l = e(function*() {
                                a = !0, o(y => {
                                    d = y, g()
                                }), yield c
                            });
                            return function() {
                                return l.apply(this, arguments)
                            }
                        }();
                        try {
                            yield h(b, r, n), a ? (yield c, d(null)) : u(null)
                        } catch (l) {
                            d ? d(l) : u(l)
                        }
                    });
                    return function(b, r, o, u) {
                        return f.apply(this, arguments)
                    }
                }()
            }
        },
        90128: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.createScaffoldMiddleware = void 0, s.createScaffoldMiddleware = function t(e) {
                return (p, h, f, b) => {
                    const r = e[p.method];
                    return void 0 === r ? f() : "function" == typeof r ? r(p, h, f, b) : (h.result = r, b())
                }
            }
        },
        15802: (R, s) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.getUniqueId = void 0;
            const t = 4294967295;
            let e = Math.floor(Math.random() * t);
            s.getUniqueId = function p() {
                return e = (e + 1) % t, e
            }
        },
        15608: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.createIdRemapMiddleware = void 0;
            const e = t(15802);
            s.createIdRemapMiddleware = function p() {
                return (h, f, b, r) => {
                    const o = h.id,
                        u = e.getUniqueId();
                    h.id = u, f.id = u, b(g => {
                        h.id = o, f.id = o, g()
                    })
                }
            }
        },
        47547: function(R, s, t) {
            "use strict";
            var e = this && this.__createBinding || (Object.create ? function(h, f, b, r) {
                    void 0 === r && (r = b), Object.defineProperty(h, r, {
                        enumerable: !0,
                        get: function() {
                            return f[b]
                        }
                    })
                } : function(h, f, b, r) {
                    void 0 === r && (r = b), h[r] = f[b]
                }),
                p = this && this.__exportStar || function(h, f) {
                    for (var b in h) "default" !== b && !Object.prototype.hasOwnProperty.call(f, b) && e(f, h, b)
                };
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), p(t(15608), s), p(t(34527), s), p(t(90128), s), p(t(15802), s), p(t(15887), s), p(t(64606), s)
        },
        64606: (R, s, t) => {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.mergeMiddleware = void 0;
            const e = t(15887);
            s.mergeMiddleware = function p(h) {
                const f = new e.JsonRpcEngine;
                return h.forEach(b => f.push(b)), f.asMiddleware()
            }
        },
        40519: R => {
            R.exports = function s(t) {
                var e = (t = t || {}).max || Number.MAX_SAFE_INTEGER,
                    p = typeof t.start < "u" ? t.start : Math.floor(Math.random() * e);
                return function() {
                    return p %= e, p++
                }
            }
        },
        70568: (R, s, t) => {
            R.exports = t(98554)(t(96322))
        },
        98554: (R, s, t) => {
            const e = t(40773),
                p = t(67256);
            R.exports = function(h) {
                const f = e(h),
                    b = p(h);
                return function(r, o) {
                    switch ("string" == typeof r ? r.toLowerCase() : r) {
                        case "keccak224":
                            return new f(1152, 448, null, 224, o);
                        case "keccak256":
                            return new f(1088, 512, null, 256, o);
                        case "keccak384":
                            return new f(832, 768, null, 384, o);
                        case "keccak512":
                            return new f(576, 1024, null, 512, o);
                        case "sha3-224":
                            return new f(1152, 448, 6, 224, o);
                        case "sha3-256":
                            return new f(1088, 512, 6, 256, o);
                        case "sha3-384":
                            return new f(832, 768, 6, 384, o);
                        case "sha3-512":
                            return new f(576, 1024, 6, 512, o);
                        case "shake128":
                            return new b(1344, 256, 31, o);
                        case "shake256":
                            return new b(1088, 512, 31, o);
                        default:
                            throw new Error("Invald algorithm: " + r)
                    }
                }
            }
        },
        40773: (R, s, t) => {
            const {
                Transform: e
            } = t(96745);
            R.exports = p => class Ht extends e {
                constructor(f, b, r, o, u) {
                    super(u), this._rate = f, this._capacity = b, this._delimitedSuffix = r, this._hashBitLength = o, this._options = u, this._state = new p, this._state.initialize(f, b), this._finalized = !1
                }
                _transform(f, b, r) {
                    let o = null;
                    try {
                        this.update(f, b)
                    } catch (u) {
                        o = u
                    }
                    r(o)
                }
                _flush(f) {
                    let b = null;
                    try {
                        this.push(this.digest())
                    } catch (r) {
                        b = r
                    }
                    f(b)
                }
                update(f, b) {
                    if (!Buffer.isBuffer(f) && "string" != typeof f) throw new TypeError("Data must be a string or a buffer");
                    if (this._finalized) throw new Error("Digest already called");
                    return Buffer.isBuffer(f) || (f = Buffer.from(f, b)), this._state.absorb(f), this
                }
                digest(f) {
                    if (this._finalized) throw new Error("Digest already called");
                    this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
                    let b = this._state.squeeze(this._hashBitLength / 8);
                    return void 0 !== f && (b = b.toString(f)), this._resetState(), b
                }
                _resetState() {
                    return this._state.initialize(this._rate, this._capacity), this
                }
                _clone() {
                    const f = new Ht(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
                    return this._state.copy(f._state), f._finalized = this._finalized, f
                }
            }
        },
        67256: (R, s, t) => {
            const {
                Transform: e
            } = t(96745);
            R.exports = p => class Vt extends e {
                constructor(f, b, r, o) {
                    super(o), this._rate = f, this._capacity = b, this._delimitedSuffix = r, this._options = o, this._state = new p, this._state.initialize(f, b), this._finalized = !1
                }
                _transform(f, b, r) {
                    let o = null;
                    try {
                        this.update(f, b)
                    } catch (u) {
                        o = u
                    }
                    r(o)
                }
                _flush() {}
                _read(f) {
                    this.push(this.squeeze(f))
                }
                update(f, b) {
                    if (!Buffer.isBuffer(f) && "string" != typeof f) throw new TypeError("Data must be a string or a buffer");
                    if (this._finalized) throw new Error("Squeeze already called");
                    return Buffer.isBuffer(f) || (f = Buffer.from(f, b)), this._state.absorb(f), this
                }
                squeeze(f, b) {
                    this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));
                    let r = this._state.squeeze(f);
                    return void 0 !== b && (r = r.toString(b)), r
                }
                _resetState() {
                    return this._state.initialize(this._rate, this._capacity), this
                }
                _clone() {
                    const f = new Vt(this._rate, this._capacity, this._delimitedSuffix, this._options);
                    return this._state.copy(f._state), f._finalized = this._finalized, f
                }
            }
        },
        58363: (R, s) => {
            const t = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
            s.p1600 = function(e) {
                for (let p = 0; p < 24; ++p) {
                    const h = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
                        f = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
                        b = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
                        r = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
                        o = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
                        u = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
                        g = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
                        c = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
                        d = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
                        a = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
                    let n = d ^ (b << 1 | r >>> 31),
                        l = a ^ (r << 1 | b >>> 31);
                    const y = e[0] ^ n,
                        _ = e[1] ^ l,
                        v = e[10] ^ n,
                        w = e[11] ^ l,
                        C = e[20] ^ n,
                        E = e[21] ^ l,
                        S = e[30] ^ n,
                        x = e[31] ^ l,
                        O = e[40] ^ n,
                        I = e[41] ^ l;
                    n = h ^ (o << 1 | u >>> 31), l = f ^ (u << 1 | o >>> 31);
                    const T = e[2] ^ n,
                        k = e[3] ^ l,
                        P = e[12] ^ n,
                        Z = e[13] ^ l,
                        ie = e[22] ^ n,
                        se = e[23] ^ l,
                        ee = e[32] ^ n,
                        j = e[33] ^ l,
                        ne = e[42] ^ n,
                        Y = e[43] ^ l;
                    n = b ^ (g << 1 | c >>> 31), l = r ^ (c << 1 | g >>> 31);
                    const G = e[4] ^ n,
                        K = e[5] ^ l,
                        X = e[14] ^ n,
                        te = e[15] ^ l,
                        de = e[24] ^ n,
                        ve = e[25] ^ l,
                        _e = e[34] ^ n,
                        Ee = e[35] ^ l,
                        xe = e[44] ^ n,
                        J = e[45] ^ l;
                    n = o ^ (d << 1 | a >>> 31), l = u ^ (a << 1 | d >>> 31);
                    const H = e[6] ^ n,
                        D = e[7] ^ l,
                        B = e[16] ^ n,
                        V = e[17] ^ l,
                        N = e[26] ^ n,
                        L = e[27] ^ l,
                        U = e[36] ^ n,
                        ae = e[37] ^ l,
                        ye = e[46] ^ n,
                        me = e[47] ^ l;
                    n = g ^ (h << 1 | f >>> 31), l = c ^ (f << 1 | h >>> 31);
                    const be = e[8] ^ n,
                        Ae = e[9] ^ l,
                        he = e[18] ^ n,
                        Te = e[19] ^ l,
                        Se = e[28] ^ n,
                        Pe = e[29] ^ l,
                        F = e[38] ^ n,
                        $ = e[39] ^ l,
                        z = e[48] ^ n,
                        re = e[49] ^ l,
                        pe = y,
                        Ce = _,
                        Le = w << 4 | v >>> 28,
                        Be = v << 4 | w >>> 28,
                        De = C << 3 | E >>> 29,
                        Q = E << 3 | C >>> 29,
                        q = x << 9 | S >>> 23,
                        Ne = S << 9 | x >>> 23,
                        je = O << 18 | I >>> 14,
                        Fe = I << 18 | O >>> 14,
                        Oe = T << 1 | k >>> 31,
                        Ge = k << 1 | T >>> 31,
                        Ze = Z << 12 | P >>> 20,
                        He = P << 12 | Z >>> 20,
                        Ke = ie << 10 | se >>> 22,
                        rt = se << 10 | ie >>> 22,
                        Xe = j << 13 | ee >>> 19,
                        Ve = ee << 13 | j >>> 19,
                        qe = ne << 2 | Y >>> 30,
                        Ye = Y << 2 | ne >>> 30,
                        tt = K << 30 | G >>> 2,
                        Qe = G << 30 | K >>> 2,
                        ce = X << 6 | te >>> 26,
                        oe = te << 6 | X >>> 26,
                        ue = ve << 11 | de >>> 21,
                        fe = de << 11 | ve >>> 21,
                        ge = _e << 15 | Ee >>> 17,
                        we = Ee << 15 | _e >>> 17,
                        Me = J << 29 | xe >>> 3,
                        Re = xe << 29 | J >>> 3,
                        Ue = H << 28 | D >>> 4,
                        ke = D << 28 | H >>> 4,
                        We = V << 23 | B >>> 9,
                        Je = B << 23 | V >>> 9,
                        et = N << 25 | L >>> 7,
                        st = L << 25 | N >>> 7,
                        ut = U << 21 | ae >>> 11,
                        ot = ae << 21 | U >>> 11,
                        it = me << 24 | ye >>> 8,
                        dt = ye << 24 | me >>> 8,
                        pt = be << 27 | Ae >>> 5,
                        gt = Ae << 27 | be >>> 5,
                        bt = he << 20 | Te >>> 12,
                        mt = Te << 20 | he >>> 12,
                        lt = Pe << 7 | Se >>> 25,
                        yt = Se << 7 | Pe >>> 25,
                        vt = F << 8 | $ >>> 24,
                        _t = $ << 8 | F >>> 24,
                        Et = z << 14 | re >>> 18,
                        ft = re << 14 | z >>> 18;
                    e[0] = pe ^ ~Ze & ue, e[1] = Ce ^ ~He & fe, e[10] = Ue ^ ~bt & De, e[11] = ke ^ ~mt & Q, e[20] = Oe ^ ~ce & et, e[21] = Ge ^ ~oe & st, e[30] = pt ^ ~Le & Ke, e[31] = gt ^ ~Be & rt, e[40] = tt ^ ~We & lt, e[41] = Qe ^ ~Je & yt, e[2] = Ze ^ ~ue & ut, e[3] = He ^ ~fe & ot, e[12] = bt ^ ~De & Xe, e[13] = mt ^ ~Q & Ve, e[22] = ce ^ ~et & vt, e[23] = oe ^ ~st & _t, e[32] = Le ^ ~Ke & ge, e[33] = Be ^ ~rt & we, e[42] = We ^ ~lt & q, e[43] = Je ^ ~yt & Ne, e[4] = ue ^ ~ut & Et, e[5] = fe ^ ~ot & ft, e[14] = De ^ ~Xe & Me, e[15] = Q ^ ~Ve & Re, e[24] = et ^ ~vt & je, e[25] = st ^ ~_t & Fe, e[34] = Ke ^ ~ge & it, e[35] = rt ^ ~we & dt, e[44] = lt ^ ~q & qe, e[45] = yt ^ ~Ne & Ye, e[6] = ut ^ ~Et & pe, e[7] = ot ^ ~ft & Ce, e[16] = Xe ^ ~Me & Ue, e[17] = Ve ^ ~Re & ke, e[26] = vt ^ ~je & Oe, e[27] = _t ^ ~Fe & Ge, e[36] = ge ^ ~it & pt, e[37] = we ^ ~dt & gt, e[46] = q ^ ~qe & tt, e[47] = Ne ^ ~Ye & Qe, e[8] = Et ^ ~pe & Ze, e[9] = ft ^ ~Ce & He, e[18] = Me ^ ~Ue & bt, e[19] = Re ^ ~ke & mt, e[28] = je ^ ~Oe & ce, e[29] = Fe ^ ~Ge & oe, e[38] = it ^ ~pt & Le, e[39] = dt ^ ~gt & Be, e[48] = qe ^ ~tt & We, e[49] = Ye ^ ~Qe & Je, e[0] ^= t[2 * p], e[1] ^= t[2 * p + 1]
                }
            }
        },
        96322: (R, s, t) => {
            const e = t(58363);

            function p() {
                this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.blockSize = null, this.count = 0, this.squeezing = !1
            }
            p.prototype.initialize = function(h, f) {
                for (let b = 0; b < 50; ++b) this.state[b] = 0;
                this.blockSize = h / 8, this.count = 0, this.squeezing = !1
            }, p.prototype.absorb = function(h) {
                for (let f = 0; f < h.length; ++f) this.state[~~(this.count / 4)] ^= h[f] << this.count % 4 * 8, this.count += 1, this.count === this.blockSize && (e.p1600(this.state), this.count = 0)
            }, p.prototype.absorbLastFewBits = function(h) {
                this.state[~~(this.count / 4)] ^= h << this.count % 4 * 8, 128 & h && this.count === this.blockSize - 1 && e.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << (this.blockSize - 1) % 4 * 8, e.p1600(this.state), this.count = 0, this.squeezing = !0
            }, p.prototype.squeeze = function(h) {
                this.squeezing || this.absorbLastFewBits(1);
                const f = Buffer.alloc(h);
                for (let b = 0; b < h; ++b) f[b] = this.state[~~(this.count / 4)] >>> this.count % 4 * 8 & 255, this.count += 1, this.count === this.blockSize && (e.p1600(this.state), this.count = 0);
                return f
            }, p.prototype.copy = function(h) {
                for (let f = 0; f < 50; ++f) h.state[f] = this.state[f];
                h.blockSize = this.blockSize, h.count = this.count, h.squeezing = this.squeezing
            }, R.exports = p
        },
        67253: R => {
            var s = 1e3,
                t = 60 * s,
                e = 60 * t,
                p = 24 * e;

            function u(g, c, d, a) {
                var n = c >= 1.5 * d;
                return Math.round(g / d) + " " + a + (n ? "s" : "")
            }
            R.exports = function(g, c) {
                c = c || {};
                var d = typeof g;
                if ("string" === d && g.length > 0) return function b(g) {
                    if (!((g = String(g)).length > 100)) {
                        var c = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(g);
                        if (c) {
                            var d = parseFloat(c[1]);
                            switch ((c[2] || "ms").toLowerCase()) {
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return 315576e5 * d;
                                case "weeks":
                                case "week":
                                case "w":
                                    return 6048e5 * d;
                                case "days":
                                case "day":
                                case "d":
                                    return d * p;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return d * e;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return d * t;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return d * s;
                                case "milliseconds":
                                case "millisecond":
                                case "msecs":
                                case "msec":
                                case "ms":
                                    return d;
                                default:
                                    return
                            }
                        }
                    }
                }(g);
                if ("number" === d && isFinite(g)) return c.long ? function o(g) {
                    var c = Math.abs(g);
                    return c >= p ? u(g, c, p, "day") : c >= e ? u(g, c, e, "hour") : c >= t ? u(g, c, t, "minute") : c >= s ? u(g, c, s, "second") : g + " ms"
                }(g) : function r(g) {
                    var c = Math.abs(g);
                    return c >= p ? Math.round(g / p) + "d" : c >= e ? Math.round(g / e) + "h" : c >= t ? Math.round(g / t) + "m" : c >= s ? Math.round(g / s) + "s" : g + "ms"
                }(g);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(g))
            }
        },
        61826: (R, s, t) => {
            var e = "function" == typeof Map && Map.prototype,
                p = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
                h = e && p && "function" == typeof p.get ? p.get : null,
                f = e && Map.prototype.forEach,
                b = "function" == typeof Set && Set.prototype,
                r = Object.getOwnPropertyDescriptor && b ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
                o = b && r && "function" == typeof r.get ? r.get : null,
                u = b && Set.prototype.forEach,
                c = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
                a = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
                l = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
                y = Boolean.prototype.valueOf,
                _ = Object.prototype.toString,
                v = Function.prototype.toString,
                w = String.prototype.match,
                C = String.prototype.slice,
                E = String.prototype.replace,
                S = String.prototype.toUpperCase,
                x = String.prototype.toLowerCase,
                O = RegExp.prototype.test,
                I = Array.prototype.concat,
                T = Array.prototype.join,
                k = Array.prototype.slice,
                P = Math.floor,
                Z = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
                ie = Object.getOwnPropertySymbols,
                se = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
                ee = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
                j = "function" == typeof Symbol && Symbol.toStringTag && (Symbol, 1) ? Symbol.toStringTag : null,
                ne = Object.prototype.propertyIsEnumerable,
                Y = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(Q) {
                    return Q.__proto__
                } : null);

            function G(Q, q) {
                if (Q === 1 / 0 || Q === -1 / 0 || Q != Q || Q && Q > -1e3 && Q < 1e3 || O.call(/e/, q)) return q;
                var Ne = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
                if ("number" == typeof Q) {
                    var je = Q < 0 ? -P(-Q) : P(Q);
                    if (je !== Q) {
                        var Fe = String(je),
                            Oe = C.call(q, Fe.length + 1);
                        return E.call(Fe, Ne, "$&_") + "." + E.call(E.call(Oe, /([0-9]{3})/g, "$&_"), /_$/, "")
                    }
                }
                return E.call(q, Ne, "$&_")
            }
            var K = t(24654),
                X = K.custom,
                te = V(X) ? X : null;

            function de(Q, q, Ne) {
                var je = "double" === (Ne.quoteStyle || q) ? '"' : "'";
                return je + Q + je
            }

            function ve(Q) {
                return E.call(String(Q), /"/g, "&quot;")
            }

            function _e(Q) {
                return !("[object Array]" !== ae(Q) || j && "object" == typeof Q && j in Q)
            }

            function xe(Q) {
                return !("[object RegExp]" !== ae(Q) || j && "object" == typeof Q && j in Q)
            }

            function V(Q) {
                if (ee) return Q && "object" == typeof Q && Q instanceof Symbol;
                if ("symbol" == typeof Q) return !0;
                if (!Q || "object" != typeof Q || !se) return !1;
                try {
                    return se.call(Q), !0
                } catch {}
                return !1
            }
            R.exports = function Q(q, Ne, je, Fe) {
                var Oe = Ne || {};
                if (U(Oe, "quoteStyle") && "single" !== Oe.quoteStyle && "double" !== Oe.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
                if (U(Oe, "maxStringLength") && ("number" == typeof Oe.maxStringLength ? Oe.maxStringLength < 0 && Oe.maxStringLength !== 1 / 0 : null !== Oe.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
                var Ge = !U(Oe, "customInspect") || Oe.customInspect;
                if ("boolean" != typeof Ge && "symbol" !== Ge) throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
                if (U(Oe, "indent") && null !== Oe.indent && "\t" !== Oe.indent && !(parseInt(Oe.indent, 10) === Oe.indent && Oe.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
                if (U(Oe, "numericSeparator") && "boolean" != typeof Oe.numericSeparator) throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
                var Ze = Oe.numericSeparator;
                if (typeof q > "u") return "undefined";
                if (null === q) return "null";
                if ("boolean" == typeof q) return q ? "true" : "false";
                if ("string" == typeof q) return F(q, Oe);
                if ("number" == typeof q) {
                    if (0 === q) return 1 / 0 / q > 0 ? "0" : "-0";
                    var He = String(q);
                    return Ze ? G(q, He) : He
                }
                if ("bigint" == typeof q) {
                    var Ke = String(q) + "n";
                    return Ze ? G(q, Ke) : Ke
                }
                var rt = typeof Oe.depth > "u" ? 5 : Oe.depth;
                if (typeof je > "u" && (je = 0), je >= rt && rt > 0 && "object" == typeof q) return _e(q) ? "[Array]" : "[Object]";
                var Xe = function Le(Q, q) {
                    var Ne;
                    if ("\t" === Q.indent) Ne = "\t";
                    else {
                        if (!("number" == typeof Q.indent && Q.indent > 0)) return null;
                        Ne = T.call(Array(Q.indent + 1), " ")
                    }
                    return {
                        base: Ne,
                        prev: T.call(Array(q + 1), Ne)
                    }
                }(Oe, je);
                if (typeof Fe > "u") Fe = [];
                else if (me(Fe, q) >= 0) return "[Circular]";

                function Ve(et, st, ut) {
                    if (st && (Fe = k.call(Fe)).push(st), ut) {
                        var ot = {
                            depth: Oe.depth
                        };
                        return U(Oe, "quoteStyle") && (ot.quoteStyle = Oe.quoteStyle), Q(et, ot, je + 1, Fe)
                    }
                    return Q(et, Oe, je + 1, Fe)
                }
                if ("function" == typeof q && !xe(q)) {
                    var qe = function ye(Q) {
                            if (Q.name) return Q.name;
                            var q = w.call(v.call(Q), /^function\s*([\w$]+)/);
                            return q ? q[1] : null
                        }(q),
                        Ye = De(q, Ve);
                    return "[Function" + (qe ? ": " + qe : " (anonymous)") + "]" + (Ye.length > 0 ? " { " + T.call(Ye, ", ") + " }" : "")
                }
                if (V(q)) {
                    var tt = ee ? E.call(String(q), /^(Symbol\(.*\))_[^)]*$/, "$1") : se.call(q);
                    return "object" != typeof q || ee ? tt : z(tt)
                }
                if (function Pe(Q) {
                        return !(!Q || "object" != typeof Q) && (typeof HTMLElement < "u" && Q instanceof HTMLElement || "string" == typeof Q.nodeName && "function" == typeof Q.getAttribute)
                    }(q)) {
                    for (var Qe = "<" + x.call(String(q.nodeName)), ce = q.attributes || [], oe = 0; oe < ce.length; oe++) Qe += " " + ce[oe].name + "=" + de(ve(ce[oe].value), "double", Oe);
                    return Qe += ">", q.childNodes && q.childNodes.length && (Qe += "..."), Qe + "</" + x.call(String(q.nodeName)) + ">"
                }
                if (_e(q)) {
                    if (0 === q.length) return "[]";
                    var ue = De(q, Ve);
                    return Xe && ! function Ce(Q) {
                        for (var q = 0; q < Q.length; q++)
                            if (me(Q[q], "\n") >= 0) return !1;
                        return !0
                    }(ue) ? "[" + Be(ue, Xe) + "]" : "[ " + T.call(ue, ", ") + " ]"
                }
                if (function J(Q) {
                        return !("[object Error]" !== ae(Q) || j && "object" == typeof Q && j in Q)
                    }(q)) {
                    var fe = De(q, Ve);
                    return "cause" in Error.prototype || !("cause" in q) || ne.call(q, "cause") ? 0 === fe.length ? "[" + String(q) + "]" : "{ [" + String(q) + "] " + T.call(fe, ", ") + " }" : "{ [" + String(q) + "] " + T.call(I.call("[cause]: " + Ve(q.cause), fe), ", ") + " }"
                }
                if ("object" == typeof q && Ge) {
                    if (te && "function" == typeof q[te] && K) return K(q, {
                        depth: rt - je
                    });
                    if ("symbol" !== Ge && "function" == typeof q.inspect) return q.inspect()
                }
                if (function be(Q) {
                        if (!h || !Q || "object" != typeof Q) return !1;
                        try {
                            h.call(Q);
                            try {
                                o.call(Q)
                            } catch {
                                return !0
                            }
                            return Q instanceof Map
                        } catch {}
                        return !1
                    }(q)) {
                    var ge = [];
                    return f && f.call(q, function(et, st) {
                        ge.push(Ve(st, q, !0) + " => " + Ve(et, q))
                    }), pe("Map", h.call(q), ge, Xe)
                }
                if (function Te(Q) {
                        if (!o || !Q || "object" != typeof Q) return !1;
                        try {
                            o.call(Q);
                            try {
                                h.call(Q)
                            } catch {
                                return !0
                            }
                            return Q instanceof Set
                        } catch {}
                        return !1
                    }(q)) {
                    var we = [];
                    return u && u.call(q, function(et) {
                        we.push(Ve(et, q))
                    }), pe("Set", o.call(q), we, Xe)
                }
                if (function Ae(Q) {
                        if (!c || !Q || "object" != typeof Q) return !1;
                        try {
                            c.call(Q, c);
                            try {
                                a.call(Q, a)
                            } catch {
                                return !0
                            }
                            return Q instanceof WeakMap
                        } catch {}
                        return !1
                    }(q)) return re("WeakMap");
                if (function Se(Q) {
                        if (!a || !Q || "object" != typeof Q) return !1;
                        try {
                            a.call(Q, a);
                            try {
                                c.call(Q, c)
                            } catch {
                                return !0
                            }
                            return Q instanceof WeakSet
                        } catch {}
                        return !1
                    }(q)) return re("WeakSet");
                if (function he(Q) {
                        if (!l || !Q || "object" != typeof Q) return !1;
                        try {
                            return l.call(Q), !0
                        } catch {}
                        return !1
                    }(q)) return re("WeakRef");
                if (function D(Q) {
                        return !("[object Number]" !== ae(Q) || j && "object" == typeof Q && j in Q)
                    }(q)) return z(Ve(Number(q)));
                if (function N(Q) {
                        if (!Q || "object" != typeof Q || !Z) return !1;
                        try {
                            return Z.call(Q), !0
                        } catch {}
                        return !1
                    }(q)) return z(Ve(Z.call(q)));
                if (function B(Q) {
                        return !("[object Boolean]" !== ae(Q) || j && "object" == typeof Q && j in Q)
                    }(q)) return z(y.call(q));
                if (function H(Q) {
                        return !("[object String]" !== ae(Q) || j && "object" == typeof Q && j in Q)
                    }(q)) return z(Ve(String(q)));
                if (typeof window < "u" && q === window) return "{ [object Window] }";
                if (q === global) return "{ [object globalThis] }";
                if (! function Ee(Q) {
                        return !("[object Date]" !== ae(Q) || j && "object" == typeof Q && j in Q)
                    }(q) && !xe(q)) {
                    var Me = De(q, Ve),
                        Re = Y ? Y(q) === Object.prototype : q instanceof Object || q.constructor === Object,
                        Ue = q instanceof Object ? "" : "null prototype",
                        ke = !Re && j && Object(q) === q && j in q ? C.call(ae(q), 8, -1) : Ue ? "Object" : "",
                        Je = (Re || "function" != typeof q.constructor ? "" : q.constructor.name ? q.constructor.name + " " : "") + (ke || Ue ? "[" + T.call(I.call([], ke || [], Ue || []), ": ") + "] " : "");
                    return 0 === Me.length ? Je + "{}" : Xe ? Je + "{" + Be(Me, Xe) + "}" : Je + "{ " + T.call(Me, ", ") + " }"
                }
                return String(q)
            };
            var L = Object.prototype.hasOwnProperty || function(Q) {
                return Q in this
            };

            function U(Q, q) {
                return L.call(Q, q)
            }

            function ae(Q) {
                return _.call(Q)
            }

            function me(Q, q) {
                if (Q.indexOf) return Q.indexOf(q);
                for (var Ne = 0, je = Q.length; Ne < je; Ne++)
                    if (Q[Ne] === q) return Ne;
                return -1
            }

            function F(Q, q) {
                if (Q.length > q.maxStringLength) {
                    var Ne = Q.length - q.maxStringLength,
                        je = "... " + Ne + " more character" + (Ne > 1 ? "s" : "");
                    return F(C.call(Q, 0, q.maxStringLength), q) + je
                }
                return de(E.call(E.call(Q, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, $), "single", q)
            }

            function $(Q) {
                var q = Q.charCodeAt(0),
                    Ne = {
                        8: "b",
                        9: "t",
                        10: "n",
                        12: "f",
                        13: "r"
                    }[q];
                return Ne ? "\\" + Ne : "\\x" + (q < 16 ? "0" : "") + S.call(q.toString(16))
            }

            function z(Q) {
                return "Object(" + Q + ")"
            }

            function re(Q) {
                return Q + " { ? }"
            }

            function pe(Q, q, Ne, je) {
                return Q + " (" + q + ") {" + (je ? Be(Ne, je) : T.call(Ne, ", ")) + "}"
            }

            function Be(Q, q) {
                if (0 === Q.length) return "";
                var Ne = "\n" + q.prev + q.base;
                return Ne + T.call(Q, "," + Ne) + "\n" + q.prev
            }

            function De(Q, q) {
                var Ne = _e(Q),
                    je = [];
                if (Ne) {
                    je.length = Q.length;
                    for (var Fe = 0; Fe < Q.length; Fe++) je[Fe] = U(Q, Fe) ? q(Q[Fe], Q) : ""
                }
                var Ge, Oe = "function" == typeof ie ? ie(Q) : [];
                if (ee) {
                    Ge = {};
                    for (var Ze = 0; Ze < Oe.length; Ze++) Ge["$" + Oe[Ze]] = Oe[Ze]
                }
                for (var He in Q) U(Q, He) && (Ne && String(Number(He)) === He && He < Q.length || ee && Ge["$" + He] instanceof Symbol || (O.call(/[^\w$]/, He) ? je.push(q(He, Q) + ": " + q(Q[He], Q)) : je.push(He + ": " + q(Q[He], Q))));
                if ("function" == typeof ie)
                    for (var Ke = 0; Ke < Oe.length; Ke++) ne.call(Q, Oe[Ke]) && je.push("[" + q(Oe[Ke]) + "]: " + q(Q[Oe[Ke]], Q));
                return je
            }
        },
        14107: R => {
            "use strict";
            const s = (t, e) => function() {
                const p = e.promiseModule,
                    h = new Array(arguments.length);
                for (let f = 0; f < arguments.length; f++) h[f] = arguments[f];
                return new p((f, b) => {
                    h.push(e.errorFirst ? function(r, o) {
                        if (e.multiArgs) {
                            const u = new Array(arguments.length - 1);
                            for (let g = 1; g < arguments.length; g++) u[g - 1] = arguments[g];
                            r ? (u.unshift(r), b(u)) : f(u)
                        } else r ? b(r) : f(o)
                    } : function(r) {
                        if (e.multiArgs) {
                            const o = new Array(arguments.length - 1);
                            for (let u = 0; u < arguments.length; u++) o[u] = arguments[u];
                            f(o)
                        } else f(r)
                    }), t.apply(this, h)
                })
            };
            R.exports = (t, e) => {
                e = Object.assign({
                    exclude: [/.+(Sync|Stream)$/],
                    errorFirst: !0,
                    promiseModule: Promise
                }, e);
                const p = f => {
                    const b = r => "string" == typeof r ? f === r : r.test(f);
                    return e.include ? e.include.some(b) : !e.exclude.some(b)
                };
                let h;
                h = "function" == typeof t ? function() {
                    return e.excludeMain ? t.apply(this, arguments) : s(t, e).apply(this, arguments)
                } : Object.create(Object.getPrototypeOf(t));
                for (const f in t) {
                    const b = t[f];
                    h[f] = "function" == typeof b && p(f) ? s(b, e) : b
                }
                return h
            }
        },
        24354: (R, s, t) => {
            "use strict";
            t.r(s), t.d(s, {
                Component: () => O,
                Fragment: () => x,
                cloneElement: () => J,
                createContext: () => H,
                createElement: () => C,
                createRef: () => S,
                h: () => C,
                hydrate: () => xe,
                isValidElement: () => f,
                options: () => p,
                render: () => Ee,
                toChildArray: () => ee
            });
            var e, p, h, f, b, r, o, u, g, c, d, a, n = {},
                l = [],
                y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
                _ = Array.isArray;

            function v(D, B) {
                for (var V in B) D[V] = B[V];
                return D
            }

            function w(D) {
                var B = D.parentNode;
                B && B.removeChild(D)
            }

            function C(D, B, V) {
                var N, L, U, ae = {};
                for (U in B) "key" == U ? N = B[U] : "ref" == U ? L = B[U] : ae[U] = B[U];
                if (arguments.length > 2 && (ae.children = arguments.length > 3 ? e.call(arguments, 2) : V), "function" == typeof D && null != D.defaultProps)
                    for (U in D.defaultProps) void 0 === ae[U] && (ae[U] = D.defaultProps[U]);
                return E(D, ae, N, L, null)
            }

            function E(D, B, V, N, L) {
                var U = {
                    type: D,
                    props: B,
                    key: V,
                    ref: N,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    constructor: void 0,
                    __v: L ? ? ++h,
                    __i: -1,
                    __u: 0
                };
                return null == L && null != p.vnode && p.vnode(U), U
            }

            function S() {
                return {
                    current: null
                }
            }

            function x(D) {
                return D.children
            }

            function O(D, B) {
                this.props = D, this.context = B
            }

            function I(D, B) {
                if (null == B) return D.__ ? I(D.__, D.__i + 1) : null;
                for (var V; B < D.__k.length; B++)
                    if (null != (V = D.__k[B]) && null != V.__e) return V.__e;
                return "function" == typeof D.type ? I(D) : null
            }

            function T(D) {
                var B, V;
                if (null != (D = D.__) && null != D.__c) {
                    for (D.__e = D.__c.base = null, B = 0; B < D.__k.length; B++)
                        if (null != (V = D.__k[B]) && null != V.__e) {
                            D.__e = D.__c.base = V.__e;
                            break
                        }
                    return T(D)
                }
            }

            function k(D) {
                (!D.__d && (D.__d = !0) && b.push(D) && !P.__r++ || r !== p.debounceRendering) && ((r = p.debounceRendering) || o)(P)
            }

            function P() {
                var D, B, V, N, L, U, ae, ye;
                for (b.sort(u); D = b.shift();) D.__d && (B = b.length, N = void 0, U = (L = (V = D).__v).__e, ae = [], ye = [], V.__P && ((N = v({}, L)).__v = L.__v + 1, p.vnode && p.vnode(N), K(V.__P, N, L, V.__n, void 0 !== V.__P.ownerSVGElement, 32 & L.__u ? [U] : null, ae, U ? ? I(L), !!(32 & L.__u), ye), N.__v = L.__v, N.__.__k[N.__i] = N, X(ae, N, ye), N.__e != U && T(N)), b.length > B && b.sort(u));
                P.__r = 0
            }

            function Z(D, B, V, N, L, U, ae, ye, me, be, Ae) {
                var he, Te, Se, Pe, F, $ = N && N.__k || l,
                    z = B.length;
                for (V.__d = me, function ie(D, B, V) {
                        var N, L, U, ae, ye, me = B.length,
                            be = V.length,
                            Ae = be,
                            he = 0;
                        for (D.__k = [], N = 0; N < me; N++) ae = N + he, null != (L = D.__k[N] = null == (L = B[N]) || "boolean" == typeof L || "function" == typeof L ? null : "string" == typeof L || "number" == typeof L || "bigint" == typeof L || L.constructor == String ? E(null, L, null, null, null) : _(L) ? E(x, {
                            children: L
                        }, null, null, null) : void 0 === L.constructor && L.__b > 0 ? E(L.type, L.props, L.key, L.ref ? L.ref : null, L.__v) : L) ? (L.__ = D, L.__b = D.__b + 1, ye = j(L, V, ae, Ae), L.__i = ye, U = null, -1 !== ye && (Ae--, (U = V[ye]) && (U.__u |= 131072)), null == U || null === U.__v ? (-1 == ye && he--, "function" != typeof L.type && (L.__u |= 65536)) : ye !== ae && (ye === ae + 1 ? he++ : ye > ae ? Ae > me - ae ? he += ye - ae : he-- : ye < ae ? ye == ae - 1 && (he = ye - ae) : he = 0, ye !== N + he && (L.__u |= 65536))) : (U = V[ae]) && null == U.key && U.__e && !(131072 & U.__u) && (U.__e == D.__d && (D.__d = I(U)), ve(U, U, !1), V[ae] = null, Ae--);
                        if (Ae)
                            for (N = 0; N < be; N++) null != (U = V[N]) && !(131072 & U.__u) && (U.__e == D.__d && (D.__d = I(U)), ve(U, U))
                    }(V, B, $), me = V.__d, he = 0; he < z; he++) null != (Se = V.__k[he]) && "boolean" != typeof Se && "function" != typeof Se && (Te = -1 === Se.__i ? n : $[Se.__i] || n, Se.__i = he, K(D, Se, Te, L, U, ae, ye, me, be, Ae), Pe = Se.__e, Se.ref && Te.ref != Se.ref && (Te.ref && de(Te.ref, null, Se), Ae.push(Se.ref, Se.__c || Pe, Se)), null == F && null != Pe && (F = Pe), 65536 & Se.__u || Te.__k === Se.__k ? (me && !me.isConnected && (me = I(Te)), me = se(Se, me, D)) : "function" == typeof Se.type && void 0 !== Se.__d ? me = Se.__d : Pe && (me = Pe.nextSibling), Se.__d = void 0, Se.__u &= -196609);
                V.__d = me, V.__e = F
            }

            function se(D, B, V) {
                var N, L;
                if ("function" == typeof D.type) {
                    for (N = D.__k, L = 0; N && L < N.length; L++) N[L] && (N[L].__ = D, B = se(N[L], B, V));
                    return B
                }
                D.__e != B && (V.insertBefore(D.__e, B || null), B = D.__e);
                do {
                    B = B && B.nextSibling
                } while (null != B && 8 === B.nodeType);
                return B
            }

            function ee(D, B) {
                return B = B || [], null == D || "boolean" == typeof D || (_(D) ? D.some(function(V) {
                    ee(V, B)
                }) : B.push(D)), B
            }

            function j(D, B, V, N) {
                var L = D.key,
                    U = D.type,
                    ae = V - 1,
                    ye = V + 1,
                    me = B[V];
                if (null === me || me && L == me.key && U === me.type && !(131072 & me.__u)) return V;
                if (N > (null == me || 131072 & me.__u ? 0 : 1))
                    for (; ae >= 0 || ye < B.length;) {
                        if (ae >= 0) {
                            if ((me = B[ae]) && !(131072 & me.__u) && L == me.key && U === me.type) return ae;
                            ae--
                        }
                        if (ye < B.length) {
                            if ((me = B[ye]) && !(131072 & me.__u) && L == me.key && U === me.type) return ye;
                            ye++
                        }
                    }
                return -1
            }

            function ne(D, B, V) {
                "-" === B[0] ? D.setProperty(B, V ? ? "") : D[B] = null == V ? "" : "number" != typeof V || y.test(B) ? V : V + "px"
            }

            function Y(D, B, V, N, L) {
                var U;
                e: if ("style" === B)
                    if ("string" == typeof V) D.style.cssText = V;
                    else {
                        if ("string" == typeof N && (D.style.cssText = N = ""), N)
                            for (B in N) V && B in V || ne(D.style, B, "");
                        if (V)
                            for (B in V) N && V[B] === N[B] || ne(D.style, B, V[B])
                    }
                else if ("o" === B[0] && "n" === B[1]) U = B !== (B = B.replace(/(PointerCapture)$|Capture$/i, "$1")), B = B.toLowerCase() in D || "onFocusOut" === B || "onFocusIn" === B ? B.toLowerCase().slice(2) : B.slice(2), D.l || (D.l = {}), D.l[B + U] = V, V ? N ? V.u = N.u : (V.u = g, D.addEventListener(B, U ? d : c, U)) : D.removeEventListener(B, U ? d : c, U);
                else {
                    if (L) B = B.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("width" != B && "height" != B && "href" != B && "list" != B && "form" != B && "tabIndex" != B && "download" != B && "rowSpan" != B && "colSpan" != B && "role" != B && B in D) try {
                        D[B] = V ? ? "";
                        break e
                    } catch {}
                    "function" == typeof V || (null == V || !1 === V && "-" !== B[4] ? D.removeAttribute(B) : D.setAttribute(B, V))
                }
            }

            function G(D) {
                return function(B) {
                    if (this.l) {
                        var V = this.l[B.type + D];
                        if (null == B.t) B.t = g++;
                        else if (B.t < V.u) return;
                        return V(p.event ? p.event(B) : B)
                    }
                }
            }

            function K(D, B, V, N, L, U, ae, ye, me, be) {
                var Ae, he, Te, Se, Pe, F, $, z, re, pe, Ce, Le, Be, De, Q, q = B.type;
                if (void 0 !== B.constructor) return null;
                128 & V.__u && (me = !!(32 & V.__u), U = [ye = B.__e = V.__e]), (Ae = p.__b) && Ae(B);
                e: if ("function" == typeof q) try {
                    if (z = B.props, re = (Ae = q.contextType) && N[Ae.__c], pe = Ae ? re ? re.props.value : Ae.__ : N, V.__c ? $ = (he = B.__c = V.__c).__ = he.__E : ("prototype" in q && q.prototype.render ? B.__c = he = new q(z, pe) : (B.__c = he = new O(z, pe), he.constructor = q, he.render = _e), re && re.sub(he), he.props = z, he.state || (he.state = {}), he.context = pe, he.__n = N, Te = he.__d = !0, he.__h = [], he._sb = []), null == he.__s && (he.__s = he.state), null != q.getDerivedStateFromProps && (he.__s == he.state && (he.__s = v({}, he.__s)), v(he.__s, q.getDerivedStateFromProps(z, he.__s))), Se = he.props, Pe = he.state, he.__v = B, Te) null == q.getDerivedStateFromProps && null != he.componentWillMount && he.componentWillMount(), null != he.componentDidMount && he.__h.push(he.componentDidMount);
                    else {
                        if (null == q.getDerivedStateFromProps && z !== Se && null != he.componentWillReceiveProps && he.componentWillReceiveProps(z, pe), !he.__e && (null != he.shouldComponentUpdate && !1 === he.shouldComponentUpdate(z, he.__s, pe) || B.__v === V.__v)) {
                            for (B.__v !== V.__v && (he.props = z, he.state = he.__s, he.__d = !1), B.__e = V.__e, B.__k = V.__k, B.__k.forEach(function(Ne) {
                                    Ne && (Ne.__ = B)
                                }), Ce = 0; Ce < he._sb.length; Ce++) he.__h.push(he._sb[Ce]);
                            he._sb = [], he.__h.length && ae.push(he);
                            break e
                        }
                        null != he.componentWillUpdate && he.componentWillUpdate(z, he.__s, pe), null != he.componentDidUpdate && he.__h.push(function() {
                            he.componentDidUpdate(Se, Pe, F)
                        })
                    }
                    if (he.context = pe, he.props = z, he.__P = D, he.__e = !1, Le = p.__r, Be = 0, "prototype" in q && q.prototype.render) {
                        for (he.state = he.__s, he.__d = !1, Le && Le(B), Ae = he.render(he.props, he.state, he.context), De = 0; De < he._sb.length; De++) he.__h.push(he._sb[De]);
                        he._sb = []
                    } else
                        do {
                            he.__d = !1, Le && Le(B), Ae = he.render(he.props, he.state, he.context), he.state = he.__s
                        } while (he.__d && ++Be < 25);
                    he.state = he.__s, null != he.getChildContext && (N = v(v({}, N), he.getChildContext())), Te || null == he.getSnapshotBeforeUpdate || (F = he.getSnapshotBeforeUpdate(Se, Pe)), Z(D, _(Q = null != Ae && Ae.type === x && null == Ae.key ? Ae.props.children : Ae) ? Q : [Q], B, V, N, L, U, ae, ye, me, be), he.base = B.__e, B.__u &= -161, he.__h.length && ae.push(he), $ && (he.__E = he.__ = null)
                } catch (Ne) {
                    B.__v = null, me || null != U ? (B.__e = ye, B.__u |= me ? 160 : 32, U[U.indexOf(ye)] = null) : (B.__e = V.__e, B.__k = V.__k), p.__e(Ne, B, V)
                } else null == U && B.__v === V.__v ? (B.__k = V.__k, B.__e = V.__e) : B.__e = function te(D, B, V, N, L, U, ae, ye, me) {
                    var be, Ae, he, Te, Se, Pe, F, $ = V.props,
                        z = B.props,
                        re = B.type;
                    if ("svg" === re && (L = !0), null != U)
                        for (be = 0; be < U.length; be++)
                            if ((Se = U[be]) && "setAttribute" in Se == !!re && (re ? Se.localName === re : 3 === Se.nodeType)) {
                                D = Se, U[be] = null;
                                break
                            }
                    if (null == D) {
                        if (null === re) return document.createTextNode(z);
                        D = L ? document.createElementNS("http://www.w3.org/2000/svg", re) : document.createElement(re, z.is && z), U = null, ye = !1
                    }
                    if (null === re) $ === z || ye && D.data === z || (D.data = z);
                    else {
                        if (U = U && e.call(D.childNodes), $ = V.props || n, !ye && null != U)
                            for ($ = {}, be = 0; be < D.attributes.length; be++) $[(Se = D.attributes[be]).name] = Se.value;
                        for (be in $)
                            if (Se = $[be], "children" != be)
                                if ("dangerouslySetInnerHTML" == be) he = Se;
                                else if ("key" !== be && !(be in z)) {
                            if ("value" == be && "defaultValue" in z || "checked" == be && "defaultChecked" in z) continue;
                            Y(D, be, null, Se, L)
                        }
                        for (be in z) Se = z[be], "children" == be ? Te = Se : "dangerouslySetInnerHTML" == be ? Ae = Se : "value" == be ? Pe = Se : "checked" == be ? F = Se : "key" === be || ye && "function" != typeof Se || $[be] === Se || Y(D, be, Se, $[be], L);
                        if (Ae) ye || he && (Ae.__html === he.__html || Ae.__html === D.innerHTML) || (D.innerHTML = Ae.__html), B.__k = [];
                        else if (he && (D.innerHTML = ""), Z(D, _(Te) ? Te : [Te], B, V, N, L && "foreignObject" !== re, U, ae, U ? U[0] : V.__k && I(V, 0), ye, me), null != U)
                            for (be = U.length; be--;) null != U[be] && w(U[be]);
                        ye || (be = "value", void 0 !== Pe && (Pe !== D[be] || "progress" === re && !Pe || "option" === re && Pe !== $[be]) && Y(D, be, Pe, $[be], !1), be = "checked", void 0 !== F && F !== D[be] && Y(D, be, F, $[be], !1))
                    }
                    return D
                }(V.__e, B, V, N, L, U, ae, me, be);
                (Ae = p.diffed) && Ae(B)
            }

            function X(D, B, V) {
                B.__d = void 0;
                for (var N = 0; N < V.length; N++) de(V[N], V[++N], V[++N]);
                p.__c && p.__c(B, D), D.some(function(L) {
                    try {
                        D = L.__h, L.__h = [], D.some(function(U) {
                            U.call(L)
                        })
                    } catch (U) {
                        p.__e(U, L.__v)
                    }
                })
            }

            function de(D, B, V) {
                try {
                    "function" == typeof D ? D(B) : D.current = B
                } catch (N) {
                    p.__e(N, V)
                }
            }

            function ve(D, B, V) {
                var N, L;
                if (p.unmount && p.unmount(D), (N = D.ref) && (N.current && N.current !== D.__e || de(N, null, B)), null != (N = D.__c)) {
                    if (N.componentWillUnmount) try {
                        N.componentWillUnmount()
                    } catch (U) {
                        p.__e(U, B)
                    }
                    N.base = N.__P = null
                }
                if (N = D.__k)
                    for (L = 0; L < N.length; L++) N[L] && ve(N[L], B, V || "function" != typeof D.type);
                V || null == D.__e || w(D.__e), D.__c = D.__ = D.__e = D.__d = void 0
            }

            function _e(D, B, V) {
                return this.constructor(D, V)
            }

            function Ee(D, B, V) {
                var N, L, U, ae;
                p.__ && p.__(D, B), L = (N = "function" == typeof V) ? null : V && V.__k || B.__k, U = [], ae = [], K(B, D = (!N && V || B).__k = C(x, null, [D]), L || n, n, void 0 !== B.ownerSVGElement, !N && V ? [V] : L ? null : B.firstChild ? e.call(B.childNodes) : null, U, !N && V ? V : L ? L.__e : B.firstChild, N, ae), X(U, D, ae)
            }

            function xe(D, B) {
                Ee(D, B, xe)
            }

            function J(D, B, V) {
                var N, L, U, ae, ye = v({}, D.props);
                for (U in D.type && D.type.defaultProps && (ae = D.type.defaultProps), B) "key" == U ? N = B[U] : "ref" == U ? L = B[U] : ye[U] = void 0 === B[U] && void 0 !== ae ? ae[U] : B[U];
                return arguments.length > 2 && (ye.children = arguments.length > 3 ? e.call(arguments, 2) : V), E(D.type, ye, N || D.key, L || D.ref, null)
            }

            function H(D, B) {
                var V = {
                    __c: B = "__cC" + a++,
                    __: D,
                    Consumer: function(N, L) {
                        return N.children(L)
                    },
                    Provider: function(N) {
                        var L, U;
                        return this.getChildContext || (L = [], (U = {})[B] = this, this.getChildContext = function() {
                            return U
                        }, this.shouldComponentUpdate = function(ae) {
                            this.props.value !== ae.value && L.some(function(ye) {
                                ye.__e = !0, k(ye)
                            })
                        }, this.sub = function(ae) {
                            L.push(ae);
                            var ye = ae.componentWillUnmount;
                            ae.componentWillUnmount = function() {
                                L.splice(L.indexOf(ae), 1), ye && ye.call(ae)
                            }
                        }), N.children
                    }
                };
                return V.Provider.__ = V.Consumer.contextType = V
            }
            e = l.slice, p = {
                __e: function(D, B, V, N) {
                    for (var L, U, ae; B = B.__;)
                        if ((L = B.__c) && !L.__) try {
                            if ((U = L.constructor) && null != U.getDerivedStateFromError && (L.setState(U.getDerivedStateFromError(D)), ae = L.__d), null != L.componentDidCatch && (L.componentDidCatch(D, N || {}), ae = L.__d), ae) return L.__E = L
                        } catch (ye) {
                            D = ye
                        }
                    throw D
                }
            }, h = 0, f = function(D) {
                return null != D && null == D.constructor
            }, O.prototype.setState = function(D, B) {
                var V;
                V = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof D && (D = D(v({}, V), this.props)), D && v(V, D), null != D && this.__v && (B && this._sb.push(B), k(this))
            }, O.prototype.forceUpdate = function(D) {
                this.__v && (this.__e = !0, D && this.__h.push(D), k(this))
            }, O.prototype.render = x, b = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, u = function(D, B) {
                return D.__v.__b - B.__v.__b
            }, P.__r = 0, g = 0, c = G(!1), d = G(!0), a = 0
        },
        70491: (R, s, t) => {
            "use strict";
            t.r(s), t.d(s, {
                useCallback: () => I,
                useContext: () => T,
                useDebugValue: () => k,
                useEffect: () => C,
                useErrorBoundary: () => P,
                useId: () => Z,
                useImperativeHandle: () => x,
                useLayoutEffect: () => E,
                useMemo: () => O,
                useReducer: () => w,
                useRef: () => S,
                useState: () => v
            });
            var p, h, f, b, e = t(24354),
                r = 0,
                o = [],
                u = [],
                g = e.options,
                c = g.__b,
                d = g.__r,
                a = g.diffed,
                n = g.__c,
                l = g.unmount,
                y = g.__;

            function _(K, X) {
                g.__h && g.__h(h, K, r || X), r = 0;
                var te = h.__H || (h.__H = {
                    __: [],
                    __h: []
                });
                return K >= te.__.length && te.__.push({
                    __V: u
                }), te.__[K]
            }

            function v(K) {
                return r = 1, w(G, K)
            }

            function w(K, X, te) {
                var de = _(p++, 2);
                if (de.t = K, !de.__c && (de.__ = [te ? te(X) : G(void 0, X), function(xe) {
                        var J = de.__N ? de.__N[0] : de.__[0],
                            H = de.t(J, xe);
                        J !== H && (de.__N = [H, de.__[1]], de.__c.setState({}))
                    }], de.__c = h, !h.u)) {
                    var ve = function(xe, J, H) {
                        if (!de.__c.__H) return !0;
                        var D = de.__c.__H.__.filter(function(V) {
                            return !!V.__c
                        });
                        if (D.every(function(V) {
                                return !V.__N
                            })) return !_e || _e.call(this, xe, J, H);
                        var B = !1;
                        return D.forEach(function(V) {
                            if (V.__N) {
                                var N = V.__[0];
                                V.__ = V.__N, V.__N = void 0, N !== V.__[0] && (B = !0)
                            }
                        }), !(!B && de.__c.props === xe) && (!_e || _e.call(this, xe, J, H))
                    };
                    h.u = !0;
                    var _e = h.shouldComponentUpdate,
                        Ee = h.componentWillUpdate;
                    h.componentWillUpdate = function(xe, J, H) {
                        if (this.__e) {
                            var D = _e;
                            _e = void 0, ve(xe, J, H), _e = D
                        }
                        Ee && Ee.call(this, xe, J, H)
                    }, h.shouldComponentUpdate = ve
                }
                return de.__N || de.__
            }

            function C(K, X) {
                var te = _(p++, 3);
                !g.__s && Y(te.__H, X) && (te.__ = K, te.i = X, h.__H.__h.push(te))
            }

            function E(K, X) {
                var te = _(p++, 4);
                !g.__s && Y(te.__H, X) && (te.__ = K, te.i = X, h.__h.push(te))
            }

            function S(K) {
                return r = 5, O(function() {
                    return {
                        current: K
                    }
                }, [])
            }

            function x(K, X, te) {
                r = 6, E(function() {
                    return "function" == typeof K ? (K(X()), function() {
                        return K(null)
                    }) : K ? (K.current = X(), function() {
                        return K.current = null
                    }) : void 0
                }, null == te ? te : te.concat(K))
            }

            function O(K, X) {
                var te = _(p++, 7);
                return Y(te.__H, X) ? (te.__V = K(), te.i = X, te.__h = K, te.__V) : te.__
            }

            function I(K, X) {
                return r = 8, O(function() {
                    return K
                }, X)
            }

            function T(K) {
                var X = h.context[K.__c],
                    te = _(p++, 9);
                return te.c = K, X ? (null == te.__ && (te.__ = !0, X.sub(h)), X.props.value) : K.__
            }

            function k(K, X) {
                g.useDebugValue && g.useDebugValue(X ? X(K) : K)
            }

            function P(K) {
                var X = _(p++, 10),
                    te = v();
                return X.__ = K, h.componentDidCatch || (h.componentDidCatch = function(de, ve) {
                    X.__ && X.__(de, ve), te[1](de)
                }), [te[0], function() {
                    te[1](void 0)
                }]
            }

            function Z() {
                var K = _(p++, 11);
                if (!K.__) {
                    for (var X = h.__v; null !== X && !X.__m && null !== X.__;) X = X.__;
                    var te = X.__m || (X.__m = [0, 0]);
                    K.__ = "P" + te[0] + "-" + te[1]++
                }
                return K.__
            }

            function ie() {
                for (var K; K = o.shift();)
                    if (K.__P && K.__H) try {
                        K.__H.__h.forEach(j), K.__H.__h.forEach(ne), K.__H.__h = []
                    } catch (X) {
                        K.__H.__h = [], g.__e(X, K.__v)
                    }
            }
            g.__b = function(K) {
                h = null, c && c(K)
            }, g.__ = function(K, X) {
                K && X.__k && X.__k.__m && (K.__m = X.__k.__m), y && y(K, X)
            }, g.__r = function(K) {
                d && d(K), p = 0;
                var X = (h = K.__c).__H;
                X && (f === h ? (X.__h = [], h.__h = [], X.__.forEach(function(te) {
                    te.__N && (te.__ = te.__N), te.__V = u, te.__N = te.i = void 0
                })) : (X.__h.forEach(j), X.__h.forEach(ne), X.__h = [], p = 0)), f = h
            }, g.diffed = function(K) {
                a && a(K);
                var X = K.__c;
                X && X.__H && (X.__H.__h.length && (1 !== o.push(X) && b === g.requestAnimationFrame || ((b = g.requestAnimationFrame) || ee)(ie)), X.__H.__.forEach(function(te) {
                    te.i && (te.__H = te.i), te.__V !== u && (te.__ = te.__V), te.i = void 0, te.__V = u
                })), f = h = null
            }, g.__c = function(K, X) {
                X.some(function(te) {
                    try {
                        te.__h.forEach(j), te.__h = te.__h.filter(function(de) {
                            return !de.__ || ne(de)
                        })
                    } catch (de) {
                        X.some(function(ve) {
                            ve.__h && (ve.__h = [])
                        }), X = [], g.__e(de, te.__v)
                    }
                }), n && n(K, X)
            }, g.unmount = function(K) {
                l && l(K);
                var X, te = K.__c;
                te && te.__H && (te.__H.__.forEach(function(de) {
                    try {
                        j(de)
                    } catch (ve) {
                        X = ve
                    }
                }), te.__H = void 0, X && g.__e(X, te.__v))
            };
            var se = "function" == typeof requestAnimationFrame;

            function ee(K) {
                var X, te = function() {
                        clearTimeout(de), se && cancelAnimationFrame(X), setTimeout(K)
                    },
                    de = setTimeout(te, 100);
                se && (X = requestAnimationFrame(te))
            }

            function j(K) {
                var X = h,
                    te = K.__c;
                "function" == typeof te && (K.__c = void 0, te()), h = X
            }

            function ne(K) {
                var X = h;
                K.__c = K.__(), h = X
            }

            function Y(K, X) {
                return !K || K.length !== X.length || X.some(function(te, de) {
                    return te !== K[de]
                })
            }

            function G(K, X) {
                return "function" == typeof X ? X(K) : X
            }
        },
        12556: R => {
            "use strict";
            var s = String.prototype.replace,
                t = /%20/g;
            R.exports = {
                default: "RFC3986",
                formatters: {
                    RFC1738: function(p) {
                        return s.call(p, t, "+")
                    },
                    RFC3986: function(p) {
                        return String(p)
                    }
                },
                RFC1738: "RFC1738",
                RFC3986: "RFC3986"
            }
        },
        72956: (R, s, t) => {
            "use strict";
            var e = t(76562),
                p = t(51625),
                h = t(12556);
            R.exports = {
                formats: h,
                parse: p,
                stringify: e
            }
        },
        51625: (R, s, t) => {
            "use strict";
            var e = t(83978),
                p = Object.prototype.hasOwnProperty,
                h = Array.isArray,
                f = {
                    allowDots: !1,
                    allowEmptyArrays: !1,
                    allowPrototypes: !1,
                    allowSparse: !1,
                    arrayLimit: 20,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    comma: !1,
                    decodeDotInKeys: !1,
                    decoder: e.decode,
                    delimiter: "&",
                    depth: 5,
                    duplicates: "combine",
                    ignoreQueryPrefix: !1,
                    interpretNumericEntities: !1,
                    parameterLimit: 1e3,
                    parseArrays: !0,
                    plainObjects: !1,
                    strictNullHandling: !1
                },
                r = function(n, l) {
                    return n && "string" == typeof n && l.comma && n.indexOf(",") > -1 ? n.split(",") : n
                },
                d = function(l, y, _, v) {
                    if (l) {
                        var w = _.allowDots ? l.replace(/\.([^.[]+)/g, "[$1]") : l,
                            E = /(\[[^[\]]*])/g,
                            S = _.depth > 0 && /(\[[^[\]]*])/.exec(w),
                            x = S ? w.slice(0, S.index) : w,
                            O = [];
                        if (x) {
                            if (!_.plainObjects && p.call(Object.prototype, x) && !_.allowPrototypes) return;
                            O.push(x)
                        }
                        for (var I = 0; _.depth > 0 && null !== (S = E.exec(w)) && I < _.depth;) {
                            if (I += 1, !_.plainObjects && p.call(Object.prototype, S[1].slice(1, -1)) && !_.allowPrototypes) return;
                            O.push(S[1])
                        }
                        return S && O.push("[" + w.slice(S.index) + "]"),
                            function(n, l, y, _) {
                                for (var v = _ ? l : r(l, y), w = n.length - 1; w >= 0; --w) {
                                    var C, E = n[w];
                                    if ("[]" === E && y.parseArrays) C = y.allowEmptyArrays && "" === v ? [] : [].concat(v);
                                    else {
                                        C = y.plainObjects ? Object.create(null) : {};
                                        var S = "[" === E.charAt(0) && "]" === E.charAt(E.length - 1) ? E.slice(1, -1) : E,
                                            x = y.decodeDotInKeys ? S.replace(/%2E/g, ".") : S,
                                            O = parseInt(x, 10);
                                        y.parseArrays || "" !== x ? !isNaN(O) && E !== x && String(O) === x && O >= 0 && y.parseArrays && O <= y.arrayLimit ? (C = [])[O] = v : "__proto__" !== x && (C[x] = v) : C = {
                                            0: v
                                        }
                                    }
                                    v = C
                                }
                                return v
                            }(O, y, _, v)
                    }
                };
            R.exports = function(n, l) {
                var y = function(l) {
                    if (!l) return f;
                    if (typeof l.allowEmptyArrays < "u" && "boolean" != typeof l.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
                    if (typeof l.decodeDotInKeys < "u" && "boolean" != typeof l.decodeDotInKeys) throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
                    if (null !== l.decoder && typeof l.decoder < "u" && "function" != typeof l.decoder) throw new TypeError("Decoder has to be a function.");
                    if (typeof l.charset < "u" && "utf-8" !== l.charset && "iso-8859-1" !== l.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var y = typeof l.charset > "u" ? f.charset : l.charset,
                        _ = typeof l.duplicates > "u" ? f.duplicates : l.duplicates;
                    if ("combine" !== _ && "first" !== _ && "last" !== _) throw new TypeError("The duplicates option must be either combine, first, or last");
                    return {
                        allowDots: typeof l.allowDots > "u" ? !0 === l.decodeDotInKeys || f.allowDots : !!l.allowDots,
                        allowEmptyArrays: "boolean" == typeof l.allowEmptyArrays ? !!l.allowEmptyArrays : f.allowEmptyArrays,
                        allowPrototypes: "boolean" == typeof l.allowPrototypes ? l.allowPrototypes : f.allowPrototypes,
                        allowSparse: "boolean" == typeof l.allowSparse ? l.allowSparse : f.allowSparse,
                        arrayLimit: "number" == typeof l.arrayLimit ? l.arrayLimit : f.arrayLimit,
                        charset: y,
                        charsetSentinel: "boolean" == typeof l.charsetSentinel ? l.charsetSentinel : f.charsetSentinel,
                        comma: "boolean" == typeof l.comma ? l.comma : f.comma,
                        decodeDotInKeys: "boolean" == typeof l.decodeDotInKeys ? l.decodeDotInKeys : f.decodeDotInKeys,
                        decoder: "function" == typeof l.decoder ? l.decoder : f.decoder,
                        delimiter: "string" == typeof l.delimiter || e.isRegExp(l.delimiter) ? l.delimiter : f.delimiter,
                        depth: "number" == typeof l.depth || !1 === l.depth ? +l.depth : f.depth,
                        duplicates: _,
                        ignoreQueryPrefix: !0 === l.ignoreQueryPrefix,
                        interpretNumericEntities: "boolean" == typeof l.interpretNumericEntities ? l.interpretNumericEntities : f.interpretNumericEntities,
                        parameterLimit: "number" == typeof l.parameterLimit ? l.parameterLimit : f.parameterLimit,
                        parseArrays: !1 !== l.parseArrays,
                        plainObjects: "boolean" == typeof l.plainObjects ? l.plainObjects : f.plainObjects,
                        strictNullHandling: "boolean" == typeof l.strictNullHandling ? l.strictNullHandling : f.strictNullHandling
                    }
                }(l);
                if ("" === n || null === n || typeof n > "u") return y.plainObjects ? Object.create(null) : {};
                for (var _ = "string" == typeof n ? function(l, y) {
                        var S, _ = {
                                __proto__: null
                            },
                            C = (y.ignoreQueryPrefix ? l.replace(/^\?/, "") : l).split(y.delimiter, y.parameterLimit === 1 / 0 ? void 0 : y.parameterLimit),
                            E = -1,
                            x = y.charset;
                        if (y.charsetSentinel)
                            for (S = 0; S < C.length; ++S) 0 === C[S].indexOf("utf8=") && ("utf8=%E2%9C%93" === C[S] ? x = "utf-8" : "utf8=%26%2310003%3B" === C[S] && (x = "iso-8859-1"), E = S, S = C.length);
                        for (S = 0; S < C.length; ++S)
                            if (S !== E) {
                                var k, P, O = C[S],
                                    I = O.indexOf("]="),
                                    T = -1 === I ? O.indexOf("=") : I + 1; - 1 === T ? (k = y.decoder(O, f.decoder, x, "key"), P = y.strictNullHandling ? null : "") : (k = y.decoder(O.slice(0, T), f.decoder, x, "key"), P = e.maybeMap(r(O.slice(T + 1), y), function(ie) {
                                    return y.decoder(ie, f.decoder, x, "value")
                                })), P && y.interpretNumericEntities && "iso-8859-1" === x && (P = P.replace(/&#(\d+);/g, function(l, y) {
                                    return String.fromCharCode(parseInt(y, 10))
                                })), O.indexOf("[]=") > -1 && (P = h(P) ? [P] : P);
                                var Z = p.call(_, k);
                                Z && "combine" === y.duplicates ? _[k] = e.combine(_[k], P) : (!Z || "last" === y.duplicates) && (_[k] = P)
                            }
                        return _
                    }(n, y) : n, v = y.plainObjects ? Object.create(null) : {}, w = Object.keys(_), C = 0; C < w.length; ++C) {
                    var E = w[C],
                        S = d(E, _[E], y, "string" == typeof n);
                    v = e.merge(v, S, y)
                }
                return !0 === y.allowSparse ? v : e.compact(v)
            }
        },
        76562: (R, s, t) => {
            "use strict";
            var e = t(57379),
                p = t(83978),
                h = t(12556),
                f = Object.prototype.hasOwnProperty,
                b = {
                    brackets: function(v) {
                        return v + "[]"
                    },
                    comma: "comma",
                    indices: function(v, w) {
                        return v + "[" + w + "]"
                    },
                    repeat: function(v) {
                        return v
                    }
                },
                r = Array.isArray,
                o = Array.prototype.push,
                u = function(_, v) {
                    o.apply(_, r(v) ? v : [v])
                },
                g = Date.prototype.toISOString,
                c = h.default,
                d = {
                    addQueryPrefix: !1,
                    allowDots: !1,
                    allowEmptyArrays: !1,
                    arrayFormat: "indices",
                    charset: "utf-8",
                    charsetSentinel: !1,
                    delimiter: "&",
                    encode: !0,
                    encodeDotInKeys: !1,
                    encoder: p.encode,
                    encodeValuesOnly: !1,
                    format: c,
                    formatter: h.formatters[c],
                    indices: !1,
                    serializeDate: function(v) {
                        return g.call(v)
                    },
                    skipNulls: !1,
                    strictNullHandling: !1
                },
                n = {},
                l = function _(v, w, C, E, S, x, O, I, T, k, P, Z, ie, se, ee, j, ne, Y) {
                    for (var G = v, K = Y, X = 0, te = !1; void 0 !== (K = K.get(n)) && !te;) {
                        var de = K.get(v);
                        if (X += 1, typeof de < "u") {
                            if (de === X) throw new RangeError("Cyclic object value");
                            te = !0
                        }
                        typeof K.get(n) > "u" && (X = 0)
                    }
                    if ("function" == typeof k ? G = k(w, G) : G instanceof Date ? G = ie(G) : "comma" === C && r(G) && (G = p.maybeMap(G, function(ae) {
                            return ae instanceof Date ? ie(ae) : ae
                        })), null === G) {
                        if (x) return T && !j ? T(w, d.encoder, ne, "key", se) : w;
                        G = ""
                    }
                    if (function(v) {
                            return "string" == typeof v || "number" == typeof v || "boolean" == typeof v || "symbol" == typeof v || "bigint" == typeof v
                        }(G) || p.isBuffer(G)) return T ? [ee(j ? w : T(w, d.encoder, ne, "key", se)) + "=" + ee(T(G, d.encoder, ne, "value", se))] : [ee(w) + "=" + ee(String(G))];
                    var Ee, _e = [];
                    if (typeof G > "u") return _e;
                    if ("comma" === C && r(G)) j && T && (G = p.maybeMap(G, T)), Ee = [{
                        value: G.length > 0 ? G.join(",") || null : void 0
                    }];
                    else if (r(k)) Ee = k;
                    else {
                        var xe = Object.keys(G);
                        Ee = P ? xe.sort(P) : xe
                    }
                    var J = I ? w.replace(/\./g, "%2E") : w,
                        H = E && r(G) && 1 === G.length ? J + "[]" : J;
                    if (S && r(G) && 0 === G.length) return H + "[]";
                    for (var D = 0; D < Ee.length; ++D) {
                        var B = Ee[D],
                            V = "object" == typeof B && typeof B.value < "u" ? B.value : G[B];
                        if (!O || null !== V) {
                            var N = Z && I ? B.replace(/\./g, "%2E") : B,
                                L = r(G) ? "function" == typeof C ? C(H, N) : H : H + (Z ? "." + N : "[" + N + "]");
                            Y.set(v, X);
                            var U = e();
                            U.set(n, Y), u(_e, _(V, L, C, E, S, x, O, I, "comma" === C && j && r(G) ? null : T, k, P, Z, ie, se, ee, j, ne, U))
                        }
                    }
                    return _e
                };
            R.exports = function(_, v) {
                var E, w = _,
                    C = function(v) {
                        if (!v) return d;
                        if (typeof v.allowEmptyArrays < "u" && "boolean" != typeof v.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
                        if (typeof v.encodeDotInKeys < "u" && "boolean" != typeof v.encodeDotInKeys) throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
                        if (null !== v.encoder && typeof v.encoder < "u" && "function" != typeof v.encoder) throw new TypeError("Encoder has to be a function.");
                        var w = v.charset || d.charset;
                        if (typeof v.charset < "u" && "utf-8" !== v.charset && "iso-8859-1" !== v.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                        var C = h.default;
                        if (typeof v.format < "u") {
                            if (!f.call(h.formatters, v.format)) throw new TypeError("Unknown format option provided.");
                            C = v.format
                        }
                        var x, E = h.formatters[C],
                            S = d.filter;
                        if (("function" == typeof v.filter || r(v.filter)) && (S = v.filter), x = v.arrayFormat in b ? v.arrayFormat : "indices" in v ? v.indices ? "indices" : "repeat" : d.arrayFormat, "commaRoundTrip" in v && "boolean" != typeof v.commaRoundTrip) throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
                        return {
                            addQueryPrefix: "boolean" == typeof v.addQueryPrefix ? v.addQueryPrefix : d.addQueryPrefix,
                            allowDots: typeof v.allowDots > "u" ? !0 === v.encodeDotInKeys || d.allowDots : !!v.allowDots,
                            allowEmptyArrays: "boolean" == typeof v.allowEmptyArrays ? !!v.allowEmptyArrays : d.allowEmptyArrays,
                            arrayFormat: x,
                            charset: w,
                            charsetSentinel: "boolean" == typeof v.charsetSentinel ? v.charsetSentinel : d.charsetSentinel,
                            commaRoundTrip: v.commaRoundTrip,
                            delimiter: typeof v.delimiter > "u" ? d.delimiter : v.delimiter,
                            encode: "boolean" == typeof v.encode ? v.encode : d.encode,
                            encodeDotInKeys: "boolean" == typeof v.encodeDotInKeys ? v.encodeDotInKeys : d.encodeDotInKeys,
                            encoder: "function" == typeof v.encoder ? v.encoder : d.encoder,
                            encodeValuesOnly: "boolean" == typeof v.encodeValuesOnly ? v.encodeValuesOnly : d.encodeValuesOnly,
                            filter: S,
                            format: C,
                            formatter: E,
                            serializeDate: "function" == typeof v.serializeDate ? v.serializeDate : d.serializeDate,
                            skipNulls: "boolean" == typeof v.skipNulls ? v.skipNulls : d.skipNulls,
                            sort: "function" == typeof v.sort ? v.sort : null,
                            strictNullHandling: "boolean" == typeof v.strictNullHandling ? v.strictNullHandling : d.strictNullHandling
                        }
                    }(v);
                "function" == typeof C.filter ? w = (0, C.filter)("", w) : r(C.filter) && (E = C.filter);
                var x = [];
                if ("object" != typeof w || null === w) return "";
                var O = b[C.arrayFormat],
                    I = "comma" === O && C.commaRoundTrip;
                E || (E = Object.keys(w)), C.sort && E.sort(C.sort);
                for (var T = e(), k = 0; k < E.length; ++k) {
                    var P = E[k];
                    C.skipNulls && null === w[P] || u(x, l(w[P], P, O, I, C.allowEmptyArrays, C.strictNullHandling, C.skipNulls, C.encodeDotInKeys, C.encode ? C.encoder : null, C.filter, C.sort, C.allowDots, C.serializeDate, C.format, C.formatter, C.encodeValuesOnly, C.charset, T))
                }
                var Z = x.join(C.delimiter),
                    ie = !0 === C.addQueryPrefix ? "?" : "";
                return C.charsetSentinel && (ie += "iso-8859-1" === C.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), Z.length > 0 ? ie + Z : ""
            }
        },
        83978: (R, s, t) => {
            "use strict";
            var e = t(12556),
                p = Object.prototype.hasOwnProperty,
                h = Array.isArray,
                f = function() {
                    for (var v = [], w = 0; w < 256; ++w) v.push("%" + ((w < 16 ? "0" : "") + w.toString(16)).toUpperCase());
                    return v
                }(),
                r = function(w, C) {
                    for (var E = C && C.plainObjects ? Object.create(null) : {}, S = 0; S < w.length; ++S) typeof w[S] < "u" && (E[S] = w[S]);
                    return E
                },
                c = 1024;
            R.exports = {
                arrayToObject: r,
                assign: function(w, C) {
                    return Object.keys(C).reduce(function(E, S) {
                        return E[S] = C[S], E
                    }, w)
                },
                combine: function(w, C) {
                    return [].concat(w, C)
                },
                compact: function(w) {
                    for (var C = [{
                            obj: {
                                o: w
                            },
                            prop: "o"
                        }], E = [], S = 0; S < C.length; ++S)
                        for (var x = C[S], O = x.obj[x.prop], I = Object.keys(O), T = 0; T < I.length; ++T) {
                            var k = I[T],
                                P = O[k];
                            "object" == typeof P && null !== P && -1 === E.indexOf(P) && (C.push({
                                obj: O,
                                prop: k
                            }), E.push(P))
                        }
                    return function(w) {
                        for (; w.length > 1;) {
                            var C = w.pop(),
                                E = C.obj[C.prop];
                            if (h(E)) {
                                for (var S = [], x = 0; x < E.length; ++x) typeof E[x] < "u" && S.push(E[x]);
                                C.obj[C.prop] = S
                            }
                        }
                    }(C), w
                },
                decode: function(v, w, C) {
                    var E = v.replace(/\+/g, " ");
                    if ("iso-8859-1" === C) return E.replace(/%[0-9a-f]{2}/gi, unescape);
                    try {
                        return decodeURIComponent(E)
                    } catch {
                        return E
                    }
                },
                encode: function(w, C, E, S, x) {
                    if (0 === w.length) return w;
                    var O = w;
                    if ("symbol" == typeof w ? O = Symbol.prototype.toString.call(w) : "string" != typeof w && (O = String(w)), "iso-8859-1" === E) return escape(O).replace(/%u[0-9a-f]{4}/gi, function(se) {
                        return "%26%23" + parseInt(se.slice(2), 16) + "%3B"
                    });
                    for (var I = "", T = 0; T < O.length; T += c) {
                        for (var k = O.length >= c ? O.slice(T, T + c) : O, P = [], Z = 0; Z < k.length; ++Z) {
                            var ie = k.charCodeAt(Z);
                            45 === ie || 46 === ie || 95 === ie || 126 === ie || ie >= 48 && ie <= 57 || ie >= 65 && ie <= 90 || ie >= 97 && ie <= 122 || x === e.RFC1738 && (40 === ie || 41 === ie) ? P[P.length] = k.charAt(Z) : ie < 128 ? P[P.length] = f[ie] : ie < 2048 ? P[P.length] = f[192 | ie >> 6] + f[128 | 63 & ie] : ie < 55296 || ie >= 57344 ? P[P.length] = f[224 | ie >> 12] + f[128 | ie >> 6 & 63] + f[128 | 63 & ie] : (ie = 65536 + ((1023 & ie) << 10 | 1023 & k.charCodeAt(Z += 1)), P[P.length] = f[240 | ie >> 18] + f[128 | ie >> 12 & 63] + f[128 | ie >> 6 & 63] + f[128 | 63 & ie])
                        }
                        I += P.join("")
                    }
                    return I
                },
                isBuffer: function(w) {
                    return !(!w || "object" != typeof w || !(w.constructor && w.constructor.isBuffer && w.constructor.isBuffer(w)))
                },
                isRegExp: function(w) {
                    return "[object RegExp]" === Object.prototype.toString.call(w)
                },
                maybeMap: function(w, C) {
                    if (h(w)) {
                        for (var E = [], S = 0; S < w.length; S += 1) E.push(C(w[S]));
                        return E
                    }
                    return C(w)
                },
                merge: function v(w, C, E) {
                    if (!C) return w;
                    if ("object" != typeof C) {
                        if (h(w)) w.push(C);
                        else {
                            if (!w || "object" != typeof w) return [w, C];
                            (E && (E.plainObjects || E.allowPrototypes) || !p.call(Object.prototype, C)) && (w[C] = !0)
                        }
                        return w
                    }
                    if (!w || "object" != typeof w) return [w].concat(C);
                    var S = w;
                    return h(w) && !h(C) && (S = r(w, E)), h(w) && h(C) ? (C.forEach(function(x, O) {
                        if (p.call(w, O)) {
                            var I = w[O];
                            I && "object" == typeof I && x && "object" == typeof x ? w[O] = v(I, x, E) : w.push(x)
                        } else w[O] = x
                    }), w) : Object.keys(C).reduce(function(x, O) {
                        var I = C[O];
                        return x[O] = p.call(x, O) ? v(x[O], I, E) : I, x
                    }, S)
                }
            }
        },
        97218: R => {
            "use strict";
            var t = {};

            function e(r, o, u) {
                u || (u = Error);
                var c = function(d) {
                    function a(n, l, y) {
                        return d.call(this, function g(d, a, n) {
                            return "string" == typeof o ? o : o(d, a, n)
                        }(n, l, y)) || this
                    }
                    return function s(r, o) {
                        r.prototype = Object.create(o.prototype), r.prototype.constructor = r, r.__proto__ = o
                    }(a, d), a
                }(u);
                c.prototype.name = u.name, c.prototype.code = r, t[r] = c
            }

            function p(r, o) {
                if (Array.isArray(r)) {
                    var u = r.length;
                    return r = r.map(function(g) {
                        return String(g)
                    }), u > 2 ? "one of ".concat(o, " ").concat(r.slice(0, u - 1).join(", "), ", or ") + r[u - 1] : 2 === u ? "one of ".concat(o, " ").concat(r[0], " or ").concat(r[1]) : "of ".concat(o, " ").concat(r[0])
                }
                return "of ".concat(o, " ").concat(String(r))
            }
            e("ERR_INVALID_OPT_VALUE", function(r, o) {
                return 'The value "' + o + '" is invalid for option "' + r + '"'
            }, TypeError), e("ERR_INVALID_ARG_TYPE", function(r, o, u) {
                var g, c;
                if ("string" == typeof o && function h(r, o, u) {
                        return r.substr(!u || u < 0 ? 0 : +u, o.length) === o
                    }(o, "not ") ? (g = "must not be", o = o.replace(/^not /, "")) : g = "must be", function f(r, o, u) {
                        return (void 0 === u || u > r.length) && (u = r.length), r.substring(u - o.length, u) === o
                    }(r, " argument")) c = "The ".concat(r, " ").concat(g, " ").concat(p(o, "type"));
                else {
                    var d = function b(r, o, u) {
                        return "number" != typeof u && (u = 0), !(u + o.length > r.length) && -1 !== r.indexOf(o, u)
                    }(r, ".") ? "property" : "argument";
                    c = 'The "'.concat(r, '" ').concat(d, " ").concat(g, " ").concat(p(o, "type"))
                }
                return c + ". Received type ".concat(typeof u)
            }, TypeError), e("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), e("ERR_METHOD_NOT_IMPLEMENTED", function(r) {
                return "The " + r + " method is not implemented"
            }), e("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), e("ERR_STREAM_DESTROYED", function(r) {
                return "Cannot call " + r + " after a stream was destroyed"
            }), e("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), e("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), e("ERR_STREAM_WRITE_AFTER_END", "write after end"), e("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), e("ERR_UNKNOWN_ENCODING", function(r) {
                return "Unknown encoding: " + r
            }, TypeError), e("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), R.exports.q = t
        },
        70247: (R, s, t) => {
            "use strict";
            var e = Object.keys || function(c) {
                var d = [];
                for (var a in c) d.push(a);
                return d
            };
            R.exports = o;
            var p = t(80309),
                h = t(56563);
            t(66698)(o, p);
            for (var f = e(h.prototype), b = 0; b < f.length; b++) {
                var r = f[b];
                o.prototype[r] || (o.prototype[r] = h.prototype[r])
            }

            function o(c) {
                if (!(this instanceof o)) return new o(c);
                p.call(this, c), h.call(this, c), this.allowHalfOpen = !0, c && (!1 === c.readable && (this.readable = !1), !1 === c.writable && (this.writable = !1), !1 === c.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", u)))
            }

            function u() {
                this._writableState.ended || process.nextTick(g, this)
            }

            function g(c) {
                c.end()
            }
            Object.defineProperty(o.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            }), Object.defineProperty(o.prototype, "writableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._writableState && this._writableState.getBuffer()
                }
            }), Object.defineProperty(o.prototype, "writableLength", {
                enumerable: !1,
                get: function() {
                    return this._writableState.length
                }
            }), Object.defineProperty(o.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
                },
                set: function(d) {
                    void 0 === this._readableState || void 0 === this._writableState || (this._readableState.destroyed = d, this._writableState.destroyed = d)
                }
            })
        },
        95096: (R, s, t) => {
            "use strict";
            R.exports = p;
            var e = t(16307);

            function p(h) {
                if (!(this instanceof p)) return new p(h);
                e.call(this, h)
            }
            t(66698)(p, e), p.prototype._transform = function(h, f, b) {
                b(null, h)
            }
        },
        80309: (R, s, t) => {
            "use strict";
            var e;
            R.exports = P, P.ReadableState = k, t(82016);
            var c, h = function(L, U) {
                    return L.listeners(U).length
                },
                f = t(78240),
                b = t(39007).Buffer,
                r = (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {},
                g = t(94616);
            c = g && g.debuglog ? g.debuglog("stream") : function() {};
            var E, S, x, d = t(2960),
                a = t(65601),
                l = t(78782).getHighWaterMark,
                y = t(97218).q,
                _ = y.ERR_INVALID_ARG_TYPE,
                v = y.ERR_STREAM_PUSH_AFTER_EOF,
                w = y.ERR_METHOD_NOT_IMPLEMENTED,
                C = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
            t(66698)(P, f);
            var O = a.errorOrDestroy,
                I = ["error", "close", "destroy", "pause", "resume"];

            function k(N, L, U) {
                e = e || t(70247), "boolean" != typeof U && (U = L instanceof e), this.objectMode = !!(N = N || {}).objectMode, U && (this.objectMode = this.objectMode || !!N.readableObjectMode), this.highWaterMark = l(this, N, "readableHighWaterMark", U), this.buffer = new d, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== N.emitClose, this.autoDestroy = !!N.autoDestroy, this.destroyed = !1, this.defaultEncoding = N.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, N.encoding && (E || (E = t(72024).s), this.decoder = new E(N.encoding), this.encoding = N.encoding)
            }

            function P(N) {
                if (e = e || t(70247), !(this instanceof P)) return new P(N);
                this._readableState = new k(N, this, this instanceof e), this.readable = !0, N && ("function" == typeof N.read && (this._read = N.read), "function" == typeof N.destroy && (this._destroy = N.destroy)), f.call(this)
            }

            function Z(N, L, U, ae, ye) {
                c("readableAddChunk", L);
                var be, me = N._readableState;
                if (null === L) me.reading = !1,
                    function Y(N, L) {
                        if (c("onEofChunk"), !L.ended) {
                            if (L.decoder) {
                                var U = L.decoder.end();
                                U && U.length && (L.buffer.push(U), L.length += L.objectMode ? 1 : U.length)
                            }
                            L.ended = !0, L.sync ? G(N) : (L.needReadable = !1, L.emittedReadable || (L.emittedReadable = !0, K(N)))
                        }
                    }(N, me);
                else if (ye || (be = function se(N, L) {
                        var U;
                        return ! function u(N) {
                            return b.isBuffer(N) || N instanceof r
                        }(L) && "string" != typeof L && void 0 !== L && !N.objectMode && (U = new _("chunk", ["string", "Buffer", "Uint8Array"], L)), U
                    }(me, L)), be) O(N, be);
                else if (me.objectMode || L && L.length > 0)
                    if ("string" != typeof L && !me.objectMode && Object.getPrototypeOf(L) !== b.prototype && (L = function o(N) {
                            return b.from(N)
                        }(L)), ae) me.endEmitted ? O(N, new C) : ie(N, me, L, !0);
                    else if (me.ended) O(N, new v);
                else {
                    if (me.destroyed) return !1;
                    me.reading = !1, me.decoder && !U ? (L = me.decoder.write(L), me.objectMode || 0 !== L.length ? ie(N, me, L, !1) : X(N, me)) : ie(N, me, L, !1)
                } else ae || (me.reading = !1, X(N, me));
                return !me.ended && (me.length < me.highWaterMark || 0 === me.length)
            }

            function ie(N, L, U, ae) {
                L.flowing && 0 === L.length && !L.sync ? (L.awaitDrain = 0, N.emit("data", U)) : (L.length += L.objectMode ? 1 : U.length, ae ? L.buffer.unshift(U) : L.buffer.push(U), L.needReadable && G(N)), X(N, L)
            }
            Object.defineProperty(P.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && this._readableState.destroyed
                },
                set: function(L) {
                    this._readableState && (this._readableState.destroyed = L)
                }
            }), P.prototype.destroy = a.destroy, P.prototype._undestroy = a.undestroy, P.prototype._destroy = function(N, L) {
                L(N)
            }, P.prototype.push = function(N, L) {
                var ae, U = this._readableState;
                return U.objectMode ? ae = !0 : "string" == typeof N && ((L = L || U.defaultEncoding) !== U.encoding && (N = b.from(N, L), L = ""), ae = !0), Z(this, N, L, !1, ae)
            }, P.prototype.unshift = function(N) {
                return Z(this, N, null, !0, !1)
            }, P.prototype.isPaused = function() {
                return !1 === this._readableState.flowing
            }, P.prototype.setEncoding = function(N) {
                E || (E = t(72024).s);
                var L = new E(N);
                this._readableState.decoder = L, this._readableState.encoding = this._readableState.decoder.encoding;
                for (var U = this._readableState.buffer.head, ae = ""; null !== U;) ae += L.write(U.data), U = U.next;
                return this._readableState.buffer.clear(), "" !== ae && this._readableState.buffer.push(ae), this._readableState.length = ae.length, this
            };
            var ee = 1073741824;

            function ne(N, L) {
                return N <= 0 || 0 === L.length && L.ended ? 0 : L.objectMode ? 1 : N != N ? L.flowing && L.length ? L.buffer.head.data.length : L.length : (N > L.highWaterMark && (L.highWaterMark = function j(N) {
                    return N >= ee ? N = ee : (N--, N |= N >>> 1, N |= N >>> 2, N |= N >>> 4, N |= N >>> 8, N |= N >>> 16, N++), N
                }(N)), N <= L.length ? N : L.ended ? L.length : (L.needReadable = !0, 0))
            }

            function G(N) {
                var L = N._readableState;
                c("emitReadable", L.needReadable, L.emittedReadable), L.needReadable = !1, L.emittedReadable || (c("emitReadable", L.flowing), L.emittedReadable = !0, process.nextTick(K, N))
            }

            function K(N) {
                var L = N._readableState;
                c("emitReadable_", L.destroyed, L.length, L.ended), !L.destroyed && (L.length || L.ended) && (N.emit("readable"), L.emittedReadable = !1), L.needReadable = !L.flowing && !L.ended && L.length <= L.highWaterMark, J(N)
            }

            function X(N, L) {
                L.readingMore || (L.readingMore = !0, process.nextTick(te, N, L))
            }

            function te(N, L) {
                for (; !L.reading && !L.ended && (L.length < L.highWaterMark || L.flowing && 0 === L.length);) {
                    var U = L.length;
                    if (c("maybeReadMore read 0"), N.read(0), U === L.length) break
                }
                L.readingMore = !1
            }

            function ve(N) {
                var L = N._readableState;
                L.readableListening = N.listenerCount("readable") > 0, L.resumeScheduled && !L.paused ? L.flowing = !0 : N.listenerCount("data") > 0 && N.resume()
            }

            function _e(N) {
                c("readable nexttick read 0"), N.read(0)
            }

            function xe(N, L) {
                c("resume", L.reading), L.reading || N.read(0), L.resumeScheduled = !1, N.emit("resume"), J(N), L.flowing && !L.reading && N.read(0)
            }

            function J(N) {
                var L = N._readableState;
                for (c("flow", L.flowing); L.flowing && null !== N.read(););
            }

            function H(N, L) {
                return 0 === L.length ? null : (L.objectMode ? U = L.buffer.shift() : !N || N >= L.length ? (U = L.decoder ? L.buffer.join("") : 1 === L.buffer.length ? L.buffer.first() : L.buffer.concat(L.length), L.buffer.clear()) : U = L.buffer.consume(N, L.decoder), U);
                var U
            }

            function D(N) {
                var L = N._readableState;
                c("endReadable", L.endEmitted), L.endEmitted || (L.ended = !0, process.nextTick(B, L, N))
            }

            function B(N, L) {
                if (c("endReadableNT", N.endEmitted, N.length), !N.endEmitted && 0 === N.length && (N.endEmitted = !0, L.readable = !1, L.emit("end"), N.autoDestroy)) {
                    var U = L._writableState;
                    (!U || U.autoDestroy && U.finished) && L.destroy()
                }
            }

            function V(N, L) {
                for (var U = 0, ae = N.length; U < ae; U++)
                    if (N[U] === L) return U;
                return -1
            }
            P.prototype.read = function(N) {
                c("read", N), N = parseInt(N, 10);
                var L = this._readableState,
                    U = N;
                if (0 !== N && (L.emittedReadable = !1), 0 === N && L.needReadable && ((0 !== L.highWaterMark ? L.length >= L.highWaterMark : L.length > 0) || L.ended)) return c("read: emitReadable", L.length, L.ended), 0 === L.length && L.ended ? D(this) : G(this), null;
                if (0 === (N = ne(N, L)) && L.ended) return 0 === L.length && D(this), null;
                var ye, ae = L.needReadable;
                return c("need readable", ae), (0 === L.length || L.length - N < L.highWaterMark) && c("length less than watermark", ae = !0), L.ended || L.reading ? c("reading or ended", ae = !1) : ae && (c("do read"), L.reading = !0, L.sync = !0, 0 === L.length && (L.needReadable = !0), this._read(L.highWaterMark), L.sync = !1, L.reading || (N = ne(U, L))), null === (ye = N > 0 ? H(N, L) : null) ? (L.needReadable = L.length <= L.highWaterMark, N = 0) : (L.length -= N, L.awaitDrain = 0), 0 === L.length && (L.ended || (L.needReadable = !0), U !== N && L.ended && D(this)), null !== ye && this.emit("data", ye), ye
            }, P.prototype._read = function(N) {
                O(this, new w("_read()"))
            }, P.prototype.pipe = function(N, L) {
                var U = this,
                    ae = this._readableState;
                switch (ae.pipesCount) {
                    case 0:
                        ae.pipes = N;
                        break;
                    case 1:
                        ae.pipes = [ae.pipes, N];
                        break;
                    default:
                        ae.pipes.push(N)
                }
                ae.pipesCount += 1, c("pipe count=%d opts=%j", ae.pipesCount, L);
                var me = L && !1 === L.end || N === process.stdout || N === process.stderr ? re : Ae;

                function Ae() {
                    c("onend"), N.end()
                }
                ae.endEmitted ? process.nextTick(me) : U.once("end", me), N.on("unpipe", function be(pe, Ce) {
                    c("onunpipe"), pe === U && Ce && !1 === Ce.hasUnpiped && (Ce.hasUnpiped = !0, function Se() {
                        c("cleanup"), N.removeListener("close", $), N.removeListener("finish", z), N.removeListener("drain", he), N.removeListener("error", F), N.removeListener("unpipe", be), U.removeListener("end", Ae), U.removeListener("end", re), U.removeListener("data", Pe), Te = !0, ae.awaitDrain && (!N._writableState || N._writableState.needDrain) && he()
                    }())
                });
                var he = function de(N) {
                    return function() {
                        var U = N._readableState;
                        c("pipeOnDrain", U.awaitDrain), U.awaitDrain && U.awaitDrain--, 0 === U.awaitDrain && h(N, "data") && (U.flowing = !0, J(N))
                    }
                }(U);
                N.on("drain", he);
                var Te = !1;

                function Pe(pe) {
                    c("ondata");
                    var Ce = N.write(pe);
                    c("dest.write", Ce), !1 === Ce && ((1 === ae.pipesCount && ae.pipes === N || ae.pipesCount > 1 && -1 !== V(ae.pipes, N)) && !Te && (c("false write response, pause", ae.awaitDrain), ae.awaitDrain++), U.pause())
                }

                function F(pe) {
                    c("onerror", pe), re(), N.removeListener("error", F), 0 === h(N, "error") && O(N, pe)
                }

                function $() {
                    N.removeListener("finish", z), re()
                }

                function z() {
                    c("onfinish"), N.removeListener("close", $), re()
                }

                function re() {
                    c("unpipe"), U.unpipe(N)
                }
                return U.on("data", Pe),
                    function T(N, L, U) {
                        if ("function" == typeof N.prependListener) return N.prependListener(L, U);
                        N._events && N._events[L] ? Array.isArray(N._events[L]) ? N._events[L].unshift(U) : N._events[L] = [U, N._events[L]] : N.on(L, U)
                    }(N, "error", F), N.once("close", $), N.once("finish", z), N.emit("pipe", U), ae.flowing || (c("pipe resume"), U.resume()), N
            }, P.prototype.unpipe = function(N) {
                var L = this._readableState,
                    U = {
                        hasUnpiped: !1
                    };
                if (0 === L.pipesCount) return this;
                if (1 === L.pipesCount) return N && N !== L.pipes || (N || (N = L.pipes), L.pipes = null, L.pipesCount = 0, L.flowing = !1, N && N.emit("unpipe", this, U)), this;
                if (!N) {
                    var ae = L.pipes,
                        ye = L.pipesCount;
                    L.pipes = null, L.pipesCount = 0, L.flowing = !1;
                    for (var me = 0; me < ye; me++) ae[me].emit("unpipe", this, {
                        hasUnpiped: !1
                    });
                    return this
                }
                var be = V(L.pipes, N);
                return -1 === be || (L.pipes.splice(be, 1), L.pipesCount -= 1, 1 === L.pipesCount && (L.pipes = L.pipes[0]), N.emit("unpipe", this, U)), this
            }, P.prototype.addListener = P.prototype.on = function(N, L) {
                var U = f.prototype.on.call(this, N, L),
                    ae = this._readableState;
                return "data" === N ? (ae.readableListening = this.listenerCount("readable") > 0, !1 !== ae.flowing && this.resume()) : "readable" === N && !ae.endEmitted && !ae.readableListening && (ae.readableListening = ae.needReadable = !0, ae.flowing = !1, ae.emittedReadable = !1, c("on readable", ae.length, ae.reading), ae.length ? G(this) : ae.reading || process.nextTick(_e, this)), U
            }, P.prototype.removeListener = function(N, L) {
                var U = f.prototype.removeListener.call(this, N, L);
                return "readable" === N && process.nextTick(ve, this), U
            }, P.prototype.removeAllListeners = function(N) {
                var L = f.prototype.removeAllListeners.apply(this, arguments);
                return ("readable" === N || void 0 === N) && process.nextTick(ve, this), L
            }, P.prototype.resume = function() {
                var N = this._readableState;
                return N.flowing || (c("resume"), N.flowing = !N.readableListening, function Ee(N, L) {
                    L.resumeScheduled || (L.resumeScheduled = !0, process.nextTick(xe, N, L))
                }(this, N)), N.paused = !1, this
            }, P.prototype.pause = function() {
                return c("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (c("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
            }, P.prototype.wrap = function(N) {
                var L = this,
                    U = this._readableState,
                    ae = !1;
                for (var ye in N.on("end", function() {
                        if (c("wrapped end"), U.decoder && !U.ended) {
                            var be = U.decoder.end();
                            be && be.length && L.push(be)
                        }
                        L.push(null)
                    }), N.on("data", function(be) {
                        c("wrapped data"), U.decoder && (be = U.decoder.write(be)), U.objectMode && null == be || !(U.objectMode || be && be.length) || L.push(be) || (ae = !0, N.pause())
                    }), N) void 0 === this[ye] && "function" == typeof N[ye] && (this[ye] = function(Ae) {
                    return function() {
                        return N[Ae].apply(N, arguments)
                    }
                }(ye));
                for (var me = 0; me < I.length; me++) N.on(I[me], this.emit.bind(this, I[me]));
                return this._read = function(be) {
                    c("wrapped _read", be), ae && (ae = !1, N.resume())
                }, this
            }, "function" == typeof Symbol && (P.prototype[Symbol.asyncIterator] = function() {
                return void 0 === S && (S = t(10457)), S(this)
            }), Object.defineProperty(P.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._readableState.highWaterMark
                }
            }), Object.defineProperty(P.prototype, "readableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._readableState && this._readableState.buffer
                }
            }), Object.defineProperty(P.prototype, "readableFlowing", {
                enumerable: !1,
                get: function() {
                    return this._readableState.flowing
                },
                set: function(L) {
                    this._readableState && (this._readableState.flowing = L)
                }
            }), P._fromList = H, Object.defineProperty(P.prototype, "readableLength", {
                enumerable: !1,
                get: function() {
                    return this._readableState.length
                }
            }), "function" == typeof Symbol && (P.from = function(N, L) {
                return void 0 === x && (x = t(33335)), x(P, N, L)
            })
        },
        16307: (R, s, t) => {
            "use strict";
            R.exports = u;
            var e = t(97218).q,
                p = e.ERR_METHOD_NOT_IMPLEMENTED,
                h = e.ERR_MULTIPLE_CALLBACK,
                f = e.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                b = e.ERR_TRANSFORM_WITH_LENGTH_0,
                r = t(70247);

            function o(d, a) {
                var n = this._transformState;
                n.transforming = !1;
                var l = n.writecb;
                if (null === l) return this.emit("error", new h);
                n.writechunk = null, n.writecb = null, null != a && this.push(a), l(d);
                var y = this._readableState;
                y.reading = !1, (y.needReadable || y.length < y.highWaterMark) && this._read(y.highWaterMark)
            }

            function u(d) {
                if (!(this instanceof u)) return new u(d);
                r.call(this, d), this._transformState = {
                    afterTransform: o.bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null
                }, this._readableState.needReadable = !0, this._readableState.sync = !1, d && ("function" == typeof d.transform && (this._transform = d.transform), "function" == typeof d.flush && (this._flush = d.flush)), this.on("prefinish", g)
            }

            function g() {
                var d = this;
                "function" != typeof this._flush || this._readableState.destroyed ? c(this, null, null) : this._flush(function(a, n) {
                    c(d, a, n)
                })
            }

            function c(d, a, n) {
                if (a) return d.emit("error", a);
                if (null != n && d.push(n), d._writableState.length) throw new b;
                if (d._transformState.transforming) throw new f;
                return d.push(null)
            }
            t(66698)(u, r), u.prototype.push = function(d, a) {
                return this._transformState.needTransform = !1, r.prototype.push.call(this, d, a)
            }, u.prototype._transform = function(d, a, n) {
                n(new p("_transform()"))
            }, u.prototype._write = function(d, a, n) {
                var l = this._transformState;
                if (l.writecb = n, l.writechunk = d, l.writeencoding = a, !l.transforming) {
                    var y = this._readableState;
                    (l.needTransform || y.needReadable || y.length < y.highWaterMark) && this._read(y.highWaterMark)
                }
            }, u.prototype._read = function(d) {
                var a = this._transformState;
                null === a.writechunk || a.transforming ? a.needTransform = !0 : (a.transforming = !0, this._transform(a.writechunk, a.writeencoding, a.afterTransform))
            }, u.prototype._destroy = function(d, a) {
                r.prototype._destroy.call(this, d, function(n) {
                    a(n)
                })
            }
        },
        56563: (R, s, t) => {
            "use strict";

            function p(J) {
                var H = this;
                this.next = null, this.entry = null, this.finish = function() {
                    ! function xe(J, H, D) {
                        var B = J.entry;
                        for (J.entry = null; B;) {
                            var V = B.callback;
                            H.pendingcb--, V(D), B = B.next
                        }
                        H.corkedRequestsFree.next = J
                    }(H, J)
                }
            }
            var h;
            R.exports = k, k.WritableState = I;
            var T, f = {
                    deprecate: t(90496)
                },
                b = t(78240),
                r = t(39007).Buffer,
                o = (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {},
                c = t(65601),
                a = t(78782).getHighWaterMark,
                n = t(97218).q,
                l = n.ERR_INVALID_ARG_TYPE,
                y = n.ERR_METHOD_NOT_IMPLEMENTED,
                _ = n.ERR_MULTIPLE_CALLBACK,
                v = n.ERR_STREAM_CANNOT_PIPE,
                w = n.ERR_STREAM_DESTROYED,
                C = n.ERR_STREAM_NULL_VALUES,
                E = n.ERR_STREAM_WRITE_AFTER_END,
                S = n.ERR_UNKNOWN_ENCODING,
                x = c.errorOrDestroy;

            function O() {}

            function I(J, H, D) {
                h = h || t(70247), "boolean" != typeof D && (D = H instanceof h), this.objectMode = !!(J = J || {}).objectMode, D && (this.objectMode = this.objectMode || !!J.writableObjectMode), this.highWaterMark = a(this, J, "writableHighWaterMark", D), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1, this.decodeStrings = !(!1 === J.decodeStrings), this.defaultEncoding = J.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(V) {
                    ! function Y(J, H) {
                        var D = J._writableState,
                            B = D.sync,
                            V = D.writecb;
                        if ("function" != typeof V) throw new _;
                        if (function ne(J) {
                                J.writing = !1, J.writecb = null, J.length -= J.writelen, J.writelen = 0
                            }(D), H) ! function j(J, H, D, B, V) {
                            --H.pendingcb, D ? (process.nextTick(V, B), process.nextTick(_e, J, H), J._writableState.errorEmitted = !0, x(J, B)) : (V(B), J._writableState.errorEmitted = !0, x(J, B), _e(J, H))
                        }(J, D, B, H, V);
                        else {
                            var N = te(D) || J.destroyed;
                            !N && !D.corked && !D.bufferProcessing && D.bufferedRequest && X(J, D), B ? process.nextTick(G, J, D, N, V) : G(J, D, N, V)
                        }
                    }(H, V)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== J.emitClose, this.autoDestroy = !!J.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new p(this)
            }

            function k(J) {
                var H = this instanceof(h = h || t(70247));
                if (!H && !T.call(k, this)) return new k(J);
                this._writableState = new I(J, this, H), this.writable = !0, J && ("function" == typeof J.write && (this._write = J.write), "function" == typeof J.writev && (this._writev = J.writev), "function" == typeof J.destroy && (this._destroy = J.destroy), "function" == typeof J.final && (this._final = J.final)), b.call(this)
            }

            function ee(J, H, D, B, V, N, L) {
                H.writelen = B, H.writecb = L, H.writing = !0, H.sync = !0, H.destroyed ? H.onwrite(new w("write")) : D ? J._writev(V, H.onwrite) : J._write(V, N, H.onwrite), H.sync = !1
            }

            function G(J, H, D, B) {
                D || function K(J, H) {
                    0 === H.length && H.needDrain && (H.needDrain = !1, J.emit("drain"))
                }(J, H), H.pendingcb--, B(), _e(J, H)
            }

            function X(J, H) {
                H.bufferProcessing = !0;
                var D = H.bufferedRequest;
                if (J._writev && D && D.next) {
                    var V = new Array(H.bufferedRequestCount),
                        N = H.corkedRequestsFree;
                    N.entry = D;
                    for (var L = 0, U = !0; D;) V[L] = D, D.isBuf || (U = !1), D = D.next, L += 1;
                    V.allBuffers = U, ee(J, H, !0, H.length, V, "", N.finish), H.pendingcb++, H.lastBufferedRequest = null, N.next ? (H.corkedRequestsFree = N.next, N.next = null) : H.corkedRequestsFree = new p(H), H.bufferedRequestCount = 0
                } else {
                    for (; D;) {
                        var ae = D.chunk;
                        if (ee(J, H, !1, H.objectMode ? 1 : ae.length, ae, D.encoding, D.callback), D = D.next, H.bufferedRequestCount--, H.writing) break
                    }
                    null === D && (H.lastBufferedRequest = null)
                }
                H.bufferedRequest = D, H.bufferProcessing = !1
            }

            function te(J) {
                return J.ending && 0 === J.length && null === J.bufferedRequest && !J.finished && !J.writing
            }

            function de(J, H) {
                J._final(function(D) {
                    H.pendingcb--, D && x(J, D), H.prefinished = !0, J.emit("prefinish"), _e(J, H)
                })
            }

            function _e(J, H) {
                var D = te(H);
                if (D && (function ve(J, H) {
                        !H.prefinished && !H.finalCalled && ("function" != typeof J._final || H.destroyed ? (H.prefinished = !0, J.emit("prefinish")) : (H.pendingcb++, H.finalCalled = !0, process.nextTick(de, J, H)))
                    }(J, H), 0 === H.pendingcb && (H.finished = !0, J.emit("finish"), H.autoDestroy))) {
                    var B = J._readableState;
                    (!B || B.autoDestroy && B.endEmitted) && J.destroy()
                }
                return D
            }
            t(66698)(k, b), I.prototype.getBuffer = function() {
                    for (var H = this.bufferedRequest, D = []; H;) D.push(H), H = H.next;
                    return D
                },
                function() {
                    try {
                        Object.defineProperty(I.prototype, "buffer", {
                            get: f.deprecate(function() {
                                return this.getBuffer()
                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch {}
                }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (T = Function.prototype[Symbol.hasInstance], Object.defineProperty(k, Symbol.hasInstance, {
                    value: function(H) {
                        return !!T.call(this, H) || this === k && H && H._writableState instanceof I
                    }
                })) : T = function(H) {
                    return H instanceof this
                }, k.prototype.pipe = function() {
                    x(this, new v)
                }, k.prototype.write = function(J, H, D) {
                    var B = this._writableState,
                        V = !1,
                        N = !B.objectMode && function g(J) {
                            return r.isBuffer(J) || J instanceof o
                        }(J);
                    return N && !r.isBuffer(J) && (J = function u(J) {
                        return r.from(J)
                    }(J)), "function" == typeof H && (D = H, H = null), N ? H = "buffer" : H || (H = B.defaultEncoding), "function" != typeof D && (D = O), B.ending ? function P(J, H) {
                        var D = new E;
                        x(J, D), process.nextTick(H, D)
                    }(this, D) : (N || function Z(J, H, D, B) {
                        var V;
                        return null === D ? V = new C : "string" != typeof D && !H.objectMode && (V = new l("chunk", ["string", "Buffer"], D)), !V || (x(J, V), process.nextTick(B, V), !1)
                    }(this, B, J, D)) && (B.pendingcb++, V = function se(J, H, D, B, V, N) {
                        if (!D) {
                            var L = function ie(J, H, D) {
                                return !J.objectMode && !1 !== J.decodeStrings && "string" == typeof H && (H = r.from(H, D)), H
                            }(H, B, V);
                            B !== L && (D = !0, V = "buffer", B = L)
                        }
                        var U = H.objectMode ? 1 : B.length;
                        H.length += U;
                        var ae = H.length < H.highWaterMark;
                        if (ae || (H.needDrain = !0), H.writing || H.corked) {
                            var ye = H.lastBufferedRequest;
                            H.lastBufferedRequest = {
                                chunk: B,
                                encoding: V,
                                isBuf: D,
                                callback: N,
                                next: null
                            }, ye ? ye.next = H.lastBufferedRequest : H.bufferedRequest = H.lastBufferedRequest, H.bufferedRequestCount += 1
                        } else ee(J, H, !1, U, B, V, N);
                        return ae
                    }(this, B, N, J, H, D)), V
                }, k.prototype.cork = function() {
                    this._writableState.corked++
                }, k.prototype.uncork = function() {
                    var J = this._writableState;
                    J.corked && (J.corked--, !J.writing && !J.corked && !J.bufferProcessing && J.bufferedRequest && X(this, J))
                }, k.prototype.setDefaultEncoding = function(H) {
                    if ("string" == typeof H && (H = H.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((H + "").toLowerCase()) > -1)) throw new S(H);
                    return this._writableState.defaultEncoding = H, this
                }, Object.defineProperty(k.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }), Object.defineProperty(k.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }), k.prototype._write = function(J, H, D) {
                    D(new y("_write()"))
                }, k.prototype._writev = null, k.prototype.end = function(J, H, D) {
                    var B = this._writableState;
                    return "function" == typeof J ? (D = J, J = null, H = null) : "function" == typeof H && (D = H, H = null), null != J && this.write(J, H), B.corked && (B.corked = 1, this.uncork()), B.ending || function Ee(J, H, D) {
                        H.ending = !0, _e(J, H), D && (H.finished ? process.nextTick(D) : J.once("finish", D)), H.ended = !0, J.writable = !1
                    }(this, B, D), this
                }, Object.defineProperty(k.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }), Object.defineProperty(k.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(H) {
                        this._writableState && (this._writableState.destroyed = H)
                    }
                }), k.prototype.destroy = c.destroy, k.prototype._undestroy = c.undestroy, k.prototype._destroy = function(J, H) {
                    H(J)
                }
        },
        10457: (R, s, t) => {
            "use strict";
            var e;

            function p(E, S, x) {
                return S = function h(E) {
                    var S = function f(E, S) {
                        if ("object" != typeof E || null === E) return E;
                        var x = E[Symbol.toPrimitive];
                        if (void 0 !== x) {
                            var O = x.call(E, S || "default");
                            if ("object" != typeof O) return O;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === S ? String : Number)(E)
                    }(E, "string");
                    return "symbol" == typeof S ? S : String(S)
                }(S), S in E ? Object.defineProperty(E, S, {
                    value: x,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : E[S] = x, E
            }
            var b = t(54618),
                r = Symbol("lastResolve"),
                o = Symbol("lastReject"),
                u = Symbol("error"),
                g = Symbol("ended"),
                c = Symbol("lastPromise"),
                d = Symbol("handlePromise"),
                a = Symbol("stream");

            function n(E, S) {
                return {
                    value: E,
                    done: S
                }
            }

            function l(E) {
                var S = E[r];
                if (null !== S) {
                    var x = E[a].read();
                    null !== x && (E[c] = null, E[r] = null, E[o] = null, S(n(x, !1)))
                }
            }

            function y(E) {
                process.nextTick(l, E)
            }
            var v = Object.getPrototypeOf(function() {}),
                w = Object.setPrototypeOf((p(e = {
                    get stream() {
                        return this[a]
                    },
                    next: function() {
                        var S = this,
                            x = this[u];
                        if (null !== x) return Promise.reject(x);
                        if (this[g]) return Promise.resolve(n(void 0, !0));
                        if (this[a].destroyed) return new Promise(function(k, P) {
                            process.nextTick(function() {
                                S[u] ? P(S[u]) : k(n(void 0, !0))
                            })
                        });
                        var I, O = this[c];
                        if (O) I = new Promise(function _(E, S) {
                            return function(x, O) {
                                E.then(function() {
                                    S[g] ? x(n(void 0, !0)) : S[d](x, O)
                                }, O)
                            }
                        }(O, this));
                        else {
                            var T = this[a].read();
                            if (null !== T) return Promise.resolve(n(T, !1));
                            I = new Promise(this[d])
                        }
                        return this[c] = I, I
                    }
                }, Symbol.asyncIterator, function() {
                    return this
                }), p(e, "return", function() {
                    var S = this;
                    return new Promise(function(x, O) {
                        S[a].destroy(null, function(I) {
                            I ? O(I) : x(n(void 0, !0))
                        })
                    })
                }), e), v);
            R.exports = function(S) {
                var x, O = Object.create(w, (p(x = {}, a, {
                    value: S,
                    writable: !0
                }), p(x, r, {
                    value: null,
                    writable: !0
                }), p(x, o, {
                    value: null,
                    writable: !0
                }), p(x, u, {
                    value: null,
                    writable: !0
                }), p(x, g, {
                    value: S._readableState.endEmitted,
                    writable: !0
                }), p(x, d, {
                    value: function(T, k) {
                        var P = O[a].read();
                        P ? (O[c] = null, O[r] = null, O[o] = null, T(n(P, !1))) : (O[r] = T, O[o] = k)
                    },
                    writable: !0
                }), x));
                return O[c] = null, b(S, function(I) {
                    if (I && "ERR_STREAM_PREMATURE_CLOSE" !== I.code) {
                        var T = O[o];
                        return null !== T && (O[c] = null, O[r] = null, O[o] = null, T(I)), void(O[u] = I)
                    }
                    var k = O[r];
                    null !== k && (O[c] = null, O[r] = null, O[o] = null, k(n(void 0, !0))), O[g] = !0
                }), S.on("readable", y.bind(null, O)), O
            }
        },
        2960: (R, s, t) => {
            "use strict";

            function e(y, _) {
                var v = Object.keys(y);
                if (Object.getOwnPropertySymbols) {
                    var w = Object.getOwnPropertySymbols(y);
                    _ && (w = w.filter(function(C) {
                        return Object.getOwnPropertyDescriptor(y, C).enumerable
                    })), v.push.apply(v, w)
                }
                return v
            }

            function p(y) {
                for (var _ = 1; _ < arguments.length; _++) {
                    var v = null != arguments[_] ? arguments[_] : {};
                    _ % 2 ? e(Object(v), !0).forEach(function(w) {
                        h(y, w, v[w])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(v)) : e(Object(v)).forEach(function(w) {
                        Object.defineProperty(y, w, Object.getOwnPropertyDescriptor(v, w))
                    })
                }
                return y
            }

            function h(y, _, v) {
                return (_ = o(_)) in y ? Object.defineProperty(y, _, {
                    value: v,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : y[_] = v, y
            }

            function b(y, _) {
                for (var v = 0; v < _.length; v++) {
                    var w = _[v];
                    w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(y, o(w.key), w)
                }
            }

            function o(y) {
                var _ = function u(y, _) {
                    if ("object" != typeof y || null === y) return y;
                    var v = y[Symbol.toPrimitive];
                    if (void 0 !== v) {
                        var w = v.call(y, _ || "default");
                        if ("object" != typeof w) return w;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === _ ? String : Number)(y)
                }(y, "string");
                return "symbol" == typeof _ ? _ : String(_)
            }
            var c = t(39007).Buffer,
                a = t(52361).inspect,
                n = a && a.custom || "inspect";

            function l(y, _, v) {
                c.prototype.copy.call(y, _, v)
            }
            R.exports = function() {
                function y() {
                    (function f(y, _) {
                        if (!(y instanceof _)) throw new TypeError("Cannot call a class as a function")
                    })(this, y), this.head = null, this.tail = null, this.length = 0
                }
                return function r(y, _, v) {
                    _ && b(y.prototype, _), v && b(y, v), Object.defineProperty(y, "prototype", {
                        writable: !1
                    })
                }(y, [{
                    key: "push",
                    value: function(v) {
                        var w = {
                            data: v,
                            next: null
                        };
                        this.length > 0 ? this.tail.next = w : this.head = w, this.tail = w, ++this.length
                    }
                }, {
                    key: "unshift",
                    value: function(v) {
                        var w = {
                            data: v,
                            next: this.head
                        };
                        0 === this.length && (this.tail = w), this.head = w, ++this.length
                    }
                }, {
                    key: "shift",
                    value: function() {
                        if (0 !== this.length) {
                            var v = this.head.data;
                            return this.head = 1 === this.length ? this.tail = null : this.head.next, --this.length, v
                        }
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.head = this.tail = null, this.length = 0
                    }
                }, {
                    key: "join",
                    value: function(v) {
                        if (0 === this.length) return "";
                        for (var w = this.head, C = "" + w.data; w = w.next;) C += v + w.data;
                        return C
                    }
                }, {
                    key: "concat",
                    value: function(v) {
                        if (0 === this.length) return c.alloc(0);
                        for (var w = c.allocUnsafe(v >>> 0), C = this.head, E = 0; C;) l(C.data, w, E), E += C.data.length, C = C.next;
                        return w
                    }
                }, {
                    key: "consume",
                    value: function(v, w) {
                        var C;
                        return v < this.head.data.length ? (C = this.head.data.slice(0, v), this.head.data = this.head.data.slice(v)) : C = v === this.head.data.length ? this.shift() : w ? this._getString(v) : this._getBuffer(v), C
                    }
                }, {
                    key: "first",
                    value: function() {
                        return this.head.data
                    }
                }, {
                    key: "_getString",
                    value: function(v) {
                        var w = this.head,
                            C = 1,
                            E = w.data;
                        for (v -= E.length; w = w.next;) {
                            var S = w.data,
                                x = v > S.length ? S.length : v;
                            if (E += x === S.length ? S : S.slice(0, v), 0 == (v -= x)) {
                                x === S.length ? (++C, this.head = w.next ? w.next : this.tail = null) : (this.head = w, w.data = S.slice(x));
                                break
                            }++C
                        }
                        return this.length -= C, E
                    }
                }, {
                    key: "_getBuffer",
                    value: function(v) {
                        var w = c.allocUnsafe(v),
                            C = this.head,
                            E = 1;
                        for (C.data.copy(w), v -= C.data.length; C = C.next;) {
                            var S = C.data,
                                x = v > S.length ? S.length : v;
                            if (S.copy(w, w.length - v, 0, x), 0 == (v -= x)) {
                                x === S.length ? (++E, this.head = C.next ? C.next : this.tail = null) : (this.head = C, C.data = S.slice(x));
                                break
                            }++E
                        }
                        return this.length -= E, w
                    }
                }, {
                    key: n,
                    value: function(v, w) {
                        return a(this, p(p({}, w), {}, {
                            depth: 0,
                            customInspect: !1
                        }))
                    }
                }]), y
            }()
        },
        65601: R => {
            "use strict";

            function t(b, r) {
                h(b, r), e(b)
            }

            function e(b) {
                b._writableState && !b._writableState.emitClose || b._readableState && !b._readableState.emitClose || b.emit("close")
            }

            function h(b, r) {
                b.emit("error", r)
            }
            R.exports = {
                destroy: function s(b, r) {
                    var o = this;
                    return this._readableState && this._readableState.destroyed || this._writableState && this._writableState.destroyed ? (r ? r(b) : b && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(h, this, b)) : process.nextTick(h, this, b)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(b || null, function(c) {
                        !r && c ? o._writableState ? o._writableState.errorEmitted ? process.nextTick(e, o) : (o._writableState.errorEmitted = !0, process.nextTick(t, o, c)) : process.nextTick(t, o, c) : r ? (process.nextTick(e, o), r(c)) : process.nextTick(e, o)
                    }), this)
                },
                undestroy: function p() {
                    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                },
                errorOrDestroy: function f(b, r) {
                    var o = b._readableState,
                        u = b._writableState;
                    o && o.autoDestroy || u && u.autoDestroy ? b.destroy(r) : b.emit("error", r)
                }
            }
        },
        54618: (R, s, t) => {
            "use strict";
            var e = t(97218).q.ERR_STREAM_PREMATURE_CLOSE;

            function h() {}
            R.exports = function b(r, o, u) {
                if ("function" == typeof o) return b(r, null, o);
                o || (o = {}), u = function p(r) {
                    var o = !1;
                    return function() {
                        if (!o) {
                            o = !0;
                            for (var u = arguments.length, g = new Array(u), c = 0; c < u; c++) g[c] = arguments[c];
                            r.apply(this, g)
                        }
                    }
                }(u || h);
                var g = o.readable || !1 !== o.readable && r.readable,
                    c = o.writable || !1 !== o.writable && r.writable,
                    d = function() {
                        r.writable || n()
                    },
                    a = r._writableState && r._writableState.finished,
                    n = function() {
                        c = !1, a = !0, g || u.call(r)
                    },
                    l = r._readableState && r._readableState.endEmitted,
                    y = function() {
                        g = !1, l = !0, c || u.call(r)
                    },
                    _ = function(E) {
                        u.call(r, E)
                    },
                    v = function() {
                        var E;
                        return g && !l ? ((!r._readableState || !r._readableState.ended) && (E = new e), u.call(r, E)) : c && !a ? ((!r._writableState || !r._writableState.ended) && (E = new e), u.call(r, E)) : void 0
                    },
                    w = function() {
                        r.req.on("finish", n)
                    };
                return function f(r) {
                        return r.setHeader && "function" == typeof r.abort
                    }(r) ? (r.on("complete", n), r.on("abort", v), r.req ? w() : r.on("request", w)) : c && !r._writableState && (r.on("end", d), r.on("close", d)), r.on("end", y), r.on("finish", n), !1 !== o.error && r.on("error", _), r.on("close", v),
                    function() {
                        r.removeListener("complete", n), r.removeListener("abort", v), r.removeListener("request", w), r.req && r.req.removeListener("finish", n), r.removeListener("end", d), r.removeListener("close", d), r.removeListener("finish", n), r.removeListener("end", y), r.removeListener("error", _), r.removeListener("close", v)
                    }
            }
        },
        33335: R => {
            R.exports = function() {
                throw new Error("Readable.from is not available in the browser")
            }
        },
        84514: (R, s, t) => {
            "use strict";
            var e, h = t(97218).q,
                f = h.ERR_MISSING_ARGS,
                b = h.ERR_STREAM_DESTROYED;

            function r(n) {
                if (n) throw n
            }

            function g(n) {
                n()
            }

            function c(n, l) {
                return n.pipe(l)
            }
            R.exports = function a() {
                for (var n = arguments.length, l = new Array(n), y = 0; y < n; y++) l[y] = arguments[y];
                var _ = function d(n) {
                    return n.length && "function" == typeof n[n.length - 1] ? n.pop() : r
                }(l);
                if (Array.isArray(l[0]) && (l = l[0]), l.length < 2) throw new f("streams");
                var v, w = l.map(function(C, E) {
                    var S = E < l.length - 1;
                    return function u(n, l, y, _) {
                        _ = function p(n) {
                            var l = !1;
                            return function() {
                                l || (l = !0, n.apply(void 0, arguments))
                            }
                        }(_);
                        var v = !1;
                        n.on("close", function() {
                            v = !0
                        }), void 0 === e && (e = t(54618)), e(n, {
                            readable: l,
                            writable: y
                        }, function(C) {
                            if (C) return _(C);
                            v = !0, _()
                        });
                        var w = !1;
                        return function(C) {
                            if (!v && !w) {
                                if (w = !0, function o(n) {
                                        return n.setHeader && "function" == typeof n.abort
                                    }(n)) return n.abort();
                                if ("function" == typeof n.destroy) return n.destroy();
                                _(C || new b("pipe"))
                            }
                        }
                    }(C, S, E > 0, function(O) {
                        v || (v = O), O && w.forEach(g), !S && (w.forEach(g), _(v))
                    })
                });
                return l.reduce(c)
            }
        },
        78782: (R, s, t) => {
            "use strict";
            var e = t(97218).q.ERR_INVALID_OPT_VALUE;
            R.exports = {
                getHighWaterMark: function h(f, b, r, o) {
                    var u = function p(f, b, r) {
                        return null != f.highWaterMark ? f.highWaterMark : b ? f[r] : null
                    }(b, o, r);
                    if (null != u) {
                        if (!isFinite(u) || Math.floor(u) !== u || u < 0) throw new e(o ? r : "highWaterMark", u);
                        return Math.floor(u)
                    }
                    return f.objectMode ? 16 : 16384
                }
            }
        },
        78240: (R, s, t) => {
            R.exports = t(82016).EventEmitter
        },
        96745: (R, s, t) => {
            (s = R.exports = t(80309)).Stream = s, s.Readable = s, s.Writable = t(56563), s.Duplex = t(70247), s.Transform = t(16307), s.PassThrough = t(95096), s.finished = t(54618), s.pipeline = t(84514)
        },
        61858: (R, s, t) => {
            const e = Symbol("SemVer ANY");
            class p {
                static get ANY() {
                    return e
                }
                constructor(d, a) {
                    if (a = h(a), d instanceof p) {
                        if (d.loose === !!a.loose) return d;
                        d = d.value
                    }
                    d = d.trim().split(/\s+/).join(" "), o("comparator", d, a), this.options = a, this.loose = !!a.loose, this.parse(d), this.value = this.semver === e ? "" : this.operator + this.semver.version, o("comp", this)
                }
                parse(d) {
                    const n = d.match(this.options.loose ? f[b.COMPARATORLOOSE] : f[b.COMPARATOR]);
                    if (!n) throw new TypeError(`Invalid comparator: ${d}`);
                    this.operator = void 0 !== n[1] ? n[1] : "", "=" === this.operator && (this.operator = ""), this.semver = n[2] ? new u(n[2], this.options.loose) : e
                }
                toString() {
                    return this.value
                }
                test(d) {
                    if (o("Comparator.test", d, this.options.loose), this.semver === e || d === e) return !0;
                    if ("string" == typeof d) try {
                        d = new u(d, this.options)
                    } catch {
                        return !1
                    }
                    return r(d, this.operator, this.semver, this.options)
                }
                intersects(d, a) {
                    if (!(d instanceof p)) throw new TypeError("a Comparator is required");
                    return "" === this.operator ? "" === this.value || new g(d.value, a).test(this.value) : "" === d.operator ? "" === d.value || new g(this.value, a).test(d.semver) : !((a = h(a)).includePrerelease && ("<0.0.0-0" === this.value || "<0.0.0-0" === d.value) || !a.includePrerelease && (this.value.startsWith("<0.0.0") || d.value.startsWith("<0.0.0")) || !(this.operator.startsWith(">") && d.operator.startsWith(">") || this.operator.startsWith("<") && d.operator.startsWith("<") || this.semver.version === d.semver.version && this.operator.includes("=") && d.operator.includes("=") || r(this.semver, "<", d.semver, a) && this.operator.startsWith(">") && d.operator.startsWith("<") || r(this.semver, ">", d.semver, a) && this.operator.startsWith("<") && d.operator.startsWith(">")))
                }
            }
            R.exports = p;
            const h = t(33367),
                {
                    safeRe: f,
                    t: b
                } = t(75808),
                r = t(10269),
                o = t(14859),
                u = t(71003),
                g = t(72441)
        },
        72441: (R, s, t) => {
            class e {
                constructor(ee, j) {
                    if (j = f(j), ee instanceof e) return ee.loose === !!j.loose && ee.includePrerelease === !!j.includePrerelease ? ee : new e(ee.raw, j);
                    if (ee instanceof b) return this.raw = ee.value, this.set = [
                        [ee]
                    ], this.format(), this;
                    if (this.options = j, this.loose = !!j.loose, this.includePrerelease = !!j.includePrerelease, this.raw = ee.trim().split(/\s+/).join(" "), this.set = this.raw.split("||").map(ne => this.parseRange(ne.trim())).filter(ne => ne.length), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
                    if (this.set.length > 1) {
                        const ne = this.set[0];
                        if (this.set = this.set.filter(Y => !y(Y[0])), 0 === this.set.length) this.set = [ne];
                        else if (this.set.length > 1)
                            for (const Y of this.set)
                                if (1 === Y.length && _(Y[0])) {
                                    this.set = [Y];
                                    break
                                }
                    }
                    this.format()
                }
                format() {
                    return this.range = this.set.map(ee => ee.join(" ").trim()).join("||").trim(), this.range
                }
                toString() {
                    return this.range
                }
                parseRange(ee) {
                    const ne = ((this.options.includePrerelease && n) | (this.options.loose && l)) + ":" + ee,
                        Y = h.get(ne);
                    if (Y) return Y;
                    const G = this.options.loose;
                    ee = ee.replace(G ? u[g.HYPHENRANGELOOSE] : u[g.HYPHENRANGE], Z(this.options.includePrerelease)), r("hyphen replace", ee), ee = ee.replace(u[g.COMPARATORTRIM], c), r("comparator trim", ee), ee = ee.replace(u[g.TILDETRIM], d), r("tilde trim", ee), ee = ee.replace(u[g.CARETTRIM], a), r("caret trim", ee);
                    let X = ee.split(" ").map(_e => w(_e, this.options)).join(" ").split(/\s+/).map(_e => P(_e, this.options));
                    G && (X = X.filter(_e => (r("loose invalid filter", _e, this.options), !!_e.match(u[g.COMPARATORLOOSE])))), r("range list", X);
                    const te = new Map,
                        de = X.map(_e => new b(_e, this.options));
                    for (const _e of de) {
                        if (y(_e)) return [_e];
                        te.set(_e.value, _e)
                    }
                    te.size > 1 && te.has("") && te.delete("");
                    const ve = [...te.values()];
                    return h.set(ne, ve), ve
                }
                intersects(ee, j) {
                    if (!(ee instanceof e)) throw new TypeError("a Range is required");
                    return this.set.some(ne => v(ne, j) && ee.set.some(Y => v(Y, j) && ne.every(G => Y.every(K => G.intersects(K, j)))))
                }
                test(ee) {
                    if (!ee) return !1;
                    if ("string" == typeof ee) try {
                        ee = new o(ee, this.options)
                    } catch {
                        return !1
                    }
                    for (let j = 0; j < this.set.length; j++)
                        if (ie(this.set[j], ee, this.options)) return !0;
                    return !1
                }
            }
            R.exports = e;
            const h = new(t(93756))({
                    max: 1e3
                }),
                f = t(33367),
                b = t(61858),
                r = t(14859),
                o = t(71003),
                {
                    safeRe: u,
                    t: g,
                    comparatorTrimReplace: c,
                    tildeTrimReplace: d,
                    caretTrimReplace: a
                } = t(75808),
                {
                    FLAG_INCLUDE_PRERELEASE: n,
                    FLAG_LOOSE: l
                } = t(10610),
                y = se => "<0.0.0-0" === se.value,
                _ = se => "" === se.value,
                v = (se, ee) => {
                    let j = !0;
                    const ne = se.slice();
                    let Y = ne.pop();
                    for (; j && ne.length;) j = ne.every(G => Y.intersects(G, ee)), Y = ne.pop();
                    return j
                },
                w = (se, ee) => (r("comp", se, ee), se = x(se, ee), r("caret", se), se = E(se, ee), r("tildes", se), se = I(se, ee), r("xrange", se), se = k(se, ee), r("stars", se), se),
                C = se => !se || "x" === se.toLowerCase() || "*" === se,
                E = (se, ee) => se.trim().split(/\s+/).map(j => S(j, ee)).join(" "),
                S = (se, ee) => se.replace(ee.loose ? u[g.TILDELOOSE] : u[g.TILDE], (ne, Y, G, K, X) => {
                    let te;
                    return r("tilde", se, ne, Y, G, K, X), C(Y) ? te = "" : C(G) ? te = `>=${Y}.0.0 <${+Y+1}.0.0-0` : C(K) ? te = `>=${Y}.${G}.0 <${Y}.${+G+1}.0-0` : X ? (r("replaceTilde pr", X), te = `>=${Y}.${G}.${K}-${X} <${Y}.${+G+1}.0-0`) : te = `>=${Y}.${G}.${K} <${Y}.${+G+1}.0-0`, r("tilde return", te), te
                }),
                x = (se, ee) => se.trim().split(/\s+/).map(j => O(j, ee)).join(" "),
                O = (se, ee) => {
                    r("caret", se, ee);
                    const ne = ee.includePrerelease ? "-0" : "";
                    return se.replace(ee.loose ? u[g.CARETLOOSE] : u[g.CARET], (Y, G, K, X, te) => {
                        let de;
                        return r("caret", se, Y, G, K, X, te), C(G) ? de = "" : C(K) ? de = `>=${G}.0.0${ne} <${+G+1}.0.0-0` : C(X) ? de = "0" === G ? `>=${G}.${K}.0${ne} <${G}.${+K+1}.0-0` : `>=${G}.${K}.0${ne} <${+G+1}.0.0-0` : te ? (r("replaceCaret pr", te), de = "0" === G ? "0" === K ? `>=${G}.${K}.${X}-${te} <${G}.${K}.${+X+1}-0` : `>=${G}.${K}.${X}-${te} <${G}.${+K+1}.0-0` : `>=${G}.${K}.${X}-${te} <${+G+1}.0.0-0`) : (r("no pr"), de = "0" === G ? "0" === K ? `>=${G}.${K}.${X}${ne} <${G}.${K}.${+X+1}-0` : `>=${G}.${K}.${X}${ne} <${G}.${+K+1}.0-0` : `>=${G}.${K}.${X} <${+G+1}.0.0-0`), r("caret return", de), de
                    })
                },
                I = (se, ee) => (r("replaceXRanges", se, ee), se.split(/\s+/).map(j => T(j, ee)).join(" ")),
                T = (se, ee) => (se = se.trim()).replace(ee.loose ? u[g.XRANGELOOSE] : u[g.XRANGE], (ne, Y, G, K, X, te) => {
                    r("xRange", se, ne, Y, G, K, X, te);
                    const de = C(G),
                        ve = de || C(K),
                        _e = ve || C(X);
                    return "=" === Y && _e && (Y = ""), te = ee.includePrerelease ? "-0" : "", de ? ne = ">" === Y || "<" === Y ? "<0.0.0-0" : "*" : Y && _e ? (ve && (K = 0), X = 0, ">" === Y ? (Y = ">=", ve ? (G = +G + 1, K = 0, X = 0) : (K = +K + 1, X = 0)) : "<=" === Y && (Y = "<", ve ? G = +G + 1 : K = +K + 1), "<" === Y && (te = "-0"), ne = `${Y+G}.${K}.${X}${te}`) : ve ? ne = `>=${G}.0.0${te} <${+G+1}.0.0-0` : _e && (ne = `>=${G}.${K}.0${te} <${G}.${+K+1}.0-0`), r("xRange return", ne), ne
                }),
                k = (se, ee) => (r("replaceStars", se, ee), se.trim().replace(u[g.STAR], "")),
                P = (se, ee) => (r("replaceGTE0", se, ee), se.trim().replace(u[ee.includePrerelease ? g.GTE0PRE : g.GTE0], "")),
                Z = se => (ee, j, ne, Y, G, K, X, te, de, ve, _e, Ee, xe) => `${j=C(ne)?"":C(Y)?`>=${ne}.0.0${se?"-0":""}`:C(G)?`>=${ne}.${Y}.0${se?"-0":""}`:K?`>=${j}`:`>=${j}${se?"-0":""}`} ${te=C(de)?"":C(ve)?`<${+de+1}.0.0-0`:C(_e)?`<${de}.${+ve+1}.0-0`:Ee?`<=${de}.${ve}.${_e}-${Ee}`:se?`<${de}.${ve}.${+_e+1}-0`:`<=${te}`}`.trim(),
                ie = (se, ee, j) => {
                    for (let ne = 0; ne < se.length; ne++)
                        if (!se[ne].test(ee)) return !1;
                    if (ee.prerelease.length && !j.includePrerelease) {
                        for (let ne = 0; ne < se.length; ne++)
                            if (r(se[ne].semver), se[ne].semver !== b.ANY && se[ne].semver.prerelease.length > 0) {
                                const Y = se[ne].semver;
                                if (Y.major === ee.major && Y.minor === ee.minor && Y.patch === ee.patch) return !0
                            }
                        return !1
                    }
                    return !0
                }
        },
        71003: (R, s, t) => {
            const e = t(14859),
                {
                    MAX_LENGTH: p,
                    MAX_SAFE_INTEGER: h
                } = t(10610),
                {
                    safeRe: f,
                    t: b
                } = t(75808),
                r = t(33367),
                {
                    compareIdentifiers: o
                } = t(40709);
            class u {
                constructor(c, d) {
                    if (d = r(d), c instanceof u) {
                        if (c.loose === !!d.loose && c.includePrerelease === !!d.includePrerelease) return c;
                        c = c.version
                    } else if ("string" != typeof c) throw new TypeError(`Invalid version. Must be a string. Got type "${typeof c}".`);
                    if (c.length > p) throw new TypeError(`version is longer than ${p} characters`);
                    e("SemVer", c, d), this.options = d, this.loose = !!d.loose, this.includePrerelease = !!d.includePrerelease;
                    const a = c.trim().match(d.loose ? f[b.LOOSE] : f[b.FULL]);
                    if (!a) throw new TypeError(`Invalid Version: ${c}`);
                    if (this.raw = c, this.major = +a[1], this.minor = +a[2], this.patch = +a[3], this.major > h || this.major < 0) throw new TypeError("Invalid major version");
                    if (this.minor > h || this.minor < 0) throw new TypeError("Invalid minor version");
                    if (this.patch > h || this.patch < 0) throw new TypeError("Invalid patch version");
                    this.prerelease = a[4] ? a[4].split(".").map(n => {
                        if (/^[0-9]+$/.test(n)) {
                            const l = +n;
                            if (l >= 0 && l < h) return l
                        }
                        return n
                    }) : [], this.build = a[5] ? a[5].split(".") : [], this.format()
                }
                format() {
                    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version
                }
                toString() {
                    return this.version
                }
                compare(c) {
                    if (e("SemVer.compare", this.version, this.options, c), !(c instanceof u)) {
                        if ("string" == typeof c && c === this.version) return 0;
                        c = new u(c, this.options)
                    }
                    return c.version === this.version ? 0 : this.compareMain(c) || this.comparePre(c)
                }
                compareMain(c) {
                    return c instanceof u || (c = new u(c, this.options)), o(this.major, c.major) || o(this.minor, c.minor) || o(this.patch, c.patch)
                }
                comparePre(c) {
                    if (c instanceof u || (c = new u(c, this.options)), this.prerelease.length && !c.prerelease.length) return -1;
                    if (!this.prerelease.length && c.prerelease.length) return 1;
                    if (!this.prerelease.length && !c.prerelease.length) return 0;
                    let d = 0;
                    do {
                        const a = this.prerelease[d],
                            n = c.prerelease[d];
                        if (e("prerelease compare", d, a, n), void 0 === a && void 0 === n) return 0;
                        if (void 0 === n) return 1;
                        if (void 0 === a) return -1;
                        if (a !== n) return o(a, n)
                    } while (++d)
                }
                compareBuild(c) {
                    c instanceof u || (c = new u(c, this.options));
                    let d = 0;
                    do {
                        const a = this.build[d],
                            n = c.build[d];
                        if (e("prerelease compare", d, a, n), void 0 === a && void 0 === n) return 0;
                        if (void 0 === n) return 1;
                        if (void 0 === a) return -1;
                        if (a !== n) return o(a, n)
                    } while (++d)
                }
                inc(c, d, a) {
                    switch (c) {
                        case "premajor":
                            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", d, a);
                            break;
                        case "preminor":
                            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", d, a);
                            break;
                        case "prepatch":
                            this.prerelease.length = 0, this.inc("patch", d, a), this.inc("pre", d, a);
                            break;
                        case "prerelease":
                            0 === this.prerelease.length && this.inc("patch", d, a), this.inc("pre", d, a);
                            break;
                        case "major":
                            (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                            break;
                        case "minor":
                            (0 !== this.patch || 0 === this.prerelease.length) && this.minor++, this.patch = 0, this.prerelease = [];
                            break;
                        case "patch":
                            0 === this.prerelease.length && this.patch++, this.prerelease = [];
                            break;
                        case "pre":
                            {
                                const n = Number(a) ? 1 : 0;
                                if (!d && !1 === a) throw new Error("invalid increment argument: identifier is empty");
                                if (0 === this.prerelease.length) this.prerelease = [n];
                                else {
                                    let l = this.prerelease.length;
                                    for (; --l >= 0;) "number" == typeof this.prerelease[l] && (this.prerelease[l]++, l = -2);
                                    if (-1 === l) {
                                        if (d === this.prerelease.join(".") && !1 === a) throw new Error("invalid increment argument: identifier already exists");
                                        this.prerelease.push(n)
                                    }
                                }
                                if (d) {
                                    let l = [d, n];
                                    !1 === a && (l = [d]), 0 === o(this.prerelease[0], d) ? isNaN(this.prerelease[1]) && (this.prerelease = l) : this.prerelease = l
                                }
                                break
                            }
                        default:
                            throw new Error(`invalid increment argument: ${c}`)
                    }
                    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this
                }
            }
            R.exports = u
        },
        17521: (R, s, t) => {
            const e = t(49247);
            R.exports = (h, f) => {
                const b = e(h.trim().replace(/^[=v]+/, ""), f);
                return b ? b.version : null
            }
        },
        10269: (R, s, t) => {
            const e = t(89196),
                p = t(86780),
                h = t(6691),
                f = t(4439),
                b = t(62473),
                r = t(19776);
            R.exports = (u, g, c, d) => {
                switch (g) {
                    case "===":
                        return "object" == typeof u && (u = u.version), "object" == typeof c && (c = c.version), u === c;
                    case "!==":
                        return "object" == typeof u && (u = u.version), "object" == typeof c && (c = c.version), u !== c;
                    case "":
                    case "=":
                    case "==":
                        return e(u, c, d);
                    case "!=":
                        return p(u, c, d);
                    case ">":
                        return h(u, c, d);
                    case ">=":
                        return f(u, c, d);
                    case "<":
                        return b(u, c, d);
                    case "<=":
                        return r(u, c, d);
                    default:
                        throw new TypeError(`Invalid operator: ${g}`)
                }
            }
        },
        74660: (R, s, t) => {
            const e = t(71003),
                p = t(49247),
                {
                    safeRe: h,
                    t: f
                } = t(75808);
            R.exports = (r, o) => {
                if (r instanceof e) return r;
                if ("number" == typeof r && (r = String(r)), "string" != typeof r) return null;
                let u = null;
                if ((o = o || {}).rtl) {
                    let g;
                    for (;
                        (g = h[f.COERCERTL].exec(r)) && (!u || u.index + u[0].length !== r.length);)(!u || g.index + g[0].length !== u.index + u[0].length) && (u = g), h[f.COERCERTL].lastIndex = g.index + g[1].length + g[2].length;
                    h[f.COERCERTL].lastIndex = -1
                } else u = r.match(h[f.COERCE]);
                return null === u ? null : p(`${u[2]}.${u[3]||"0"}.${u[4]||"0"}`, o)
            }
        },
        61239: (R, s, t) => {
            const e = t(71003);
            R.exports = (h, f, b) => {
                const r = new e(h, b),
                    o = new e(f, b);
                return r.compare(o) || r.compareBuild(o)
            }
        },
        66999: (R, s, t) => {
            const e = t(22214);
            R.exports = (h, f) => e(h, f, !0)
        },
        22214: (R, s, t) => {
            const e = t(71003);
            R.exports = (h, f, b) => new e(h, b).compare(new e(f, b))
        },
        71183: (R, s, t) => {
            const e = t(49247);
            R.exports = (h, f) => {
                const b = e(h, null, !0),
                    r = e(f, null, !0),
                    o = b.compare(r);
                if (0 === o) return null;
                const u = o > 0,
                    g = u ? b : r,
                    c = u ? r : b,
                    d = !!g.prerelease.length;
                if (c.prerelease.length && !d) return c.patch || c.minor ? g.patch ? "patch" : g.minor ? "minor" : "major" : "major";
                const n = d ? "pre" : "";
                return b.major !== r.major ? n + "major" : b.minor !== r.minor ? n + "minor" : b.patch !== r.patch ? n + "patch" : "prerelease"
            }
        },
        89196: (R, s, t) => {
            const e = t(22214);
            R.exports = (h, f, b) => 0 === e(h, f, b)
        },
        6691: (R, s, t) => {
            const e = t(22214);
            R.exports = (h, f, b) => e(h, f, b) > 0
        },
        4439: (R, s, t) => {
            const e = t(22214);
            R.exports = (h, f, b) => e(h, f, b) >= 0
        },
        66939: (R, s, t) => {
            const e = t(71003);
            R.exports = (h, f, b, r, o) => {
                "string" == typeof b && (o = r, r = b, b = void 0);
                try {
                    return new e(h instanceof e ? h.version : h, b).inc(f, r, o).version
                } catch {
                    return null
                }
            }
        },
        62473: (R, s, t) => {
            const e = t(22214);
            R.exports = (h, f, b) => e(h, f, b) < 0
        },
        19776: (R, s, t) => {
            const e = t(22214);
            R.exports = (h, f, b) => e(h, f, b) <= 0
        },
        2136: (R, s, t) => {
            const e = t(71003);
            R.exports = (h, f) => new e(h, f).major
        },
        57662: (R, s, t) => {
            const e = t(71003);
            R.exports = (h, f) => new e(h, f).minor
        },
        86780: (R, s, t) => {
            const e = t(22214);
            R.exports = (h, f, b) => 0 !== e(h, f, b)
        },
        49247: (R, s, t) => {
            const e = t(71003);
            R.exports = (h, f, b = !1) => {
                if (h instanceof e) return h;
                try {
                    return new e(h, f)
                } catch (r) {
                    if (!b) return null;
                    throw r
                }
            }
        },
        76884: (R, s, t) => {
            const e = t(71003);
            R.exports = (h, f) => new e(h, f).patch
        },
        38635: (R, s, t) => {
            const e = t(49247);
            R.exports = (h, f) => {
                const b = e(h, f);
                return b && b.prerelease.length ? b.prerelease : null
            }
        },
        90640: (R, s, t) => {
            const e = t(22214);
            R.exports = (h, f, b) => e(f, h, b)
        },
        45876: (R, s, t) => {
            const e = t(61239);
            R.exports = (h, f) => h.sort((b, r) => e(r, b, f))
        },
        67100: (R, s, t) => {
            const e = t(72441);
            R.exports = (h, f, b) => {
                try {
                    f = new e(f, b)
                } catch {
                    return !1
                }
                return f.test(h)
            }
        },
        64194: (R, s, t) => {
            const e = t(61239);
            R.exports = (h, f) => h.sort((b, r) => e(b, r, f))
        },
        47676: (R, s, t) => {
            const e = t(49247);
            R.exports = (h, f) => {
                const b = e(h, f);
                return b ? b.version : null
            }
        },
        70424: (R, s, t) => {
            const e = t(75808),
                p = t(10610),
                h = t(71003),
                f = t(40709),
                b = t(49247),
                r = t(47676),
                o = t(17521),
                u = t(66939),
                g = t(71183),
                c = t(2136),
                d = t(57662),
                a = t(76884),
                n = t(38635),
                l = t(22214),
                y = t(90640),
                _ = t(66999),
                v = t(61239),
                w = t(64194),
                C = t(45876),
                E = t(6691),
                S = t(62473),
                x = t(89196),
                O = t(86780),
                I = t(4439),
                T = t(19776),
                k = t(10269),
                P = t(74660),
                Z = t(61858),
                ie = t(72441),
                se = t(67100),
                ee = t(31250),
                j = t(2755),
                ne = t(21639),
                Y = t(24816),
                G = t(82321),
                K = t(87416),
                X = t(30562),
                te = t(73013),
                de = t(44006),
                ve = t(22326),
                _e = t(71538);
            R.exports = {
                parse: b,
                valid: r,
                clean: o,
                inc: u,
                diff: g,
                major: c,
                minor: d,
                patch: a,
                prerelease: n,
                compare: l,
                rcompare: y,
                compareLoose: _,
                compareBuild: v,
                sort: w,
                rsort: C,
                gt: E,
                lt: S,
                eq: x,
                neq: O,
                gte: I,
                lte: T,
                cmp: k,
                coerce: P,
                Comparator: Z,
                Range: ie,
                satisfies: se,
                toComparators: ee,
                maxSatisfying: j,
                minSatisfying: ne,
                minVersion: Y,
                validRange: G,
                outside: K,
                gtr: X,
                ltr: te,
                intersects: de,
                simplifyRange: ve,
                subset: _e,
                SemVer: h,
                re: e.re,
                src: e.src,
                tokens: e.t,
                SEMVER_SPEC_VERSION: p.SEMVER_SPEC_VERSION,
                RELEASE_TYPES: p.RELEASE_TYPES,
                compareIdentifiers: f.compareIdentifiers,
                rcompareIdentifiers: f.rcompareIdentifiers
            }
        },
        10610: R => {
            R.exports = {
                MAX_LENGTH: 256,
                MAX_SAFE_COMPONENT_LENGTH: 16,
                MAX_SAFE_BUILD_LENGTH: 250,
                MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991,
                RELEASE_TYPES: ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"],
                SEMVER_SPEC_VERSION: "2.0.0",
                FLAG_INCLUDE_PRERELEASE: 1,
                FLAG_LOOSE: 2
            }
        },
        14859: R => {
            const s = "object" == typeof process && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...t) => console.error("SEMVER", ...t) : () => {};
            R.exports = s
        },
        40709: R => {
            const s = /^[0-9]+$/,
                t = (p, h) => {
                    const f = s.test(p),
                        b = s.test(h);
                    return f && b && (p = +p, h = +h), p === h ? 0 : f && !b ? -1 : b && !f ? 1 : p < h ? -1 : 1
                };
            R.exports = {
                compareIdentifiers: t,
                rcompareIdentifiers: (p, h) => t(h, p)
            }
        },
        33367: R => {
            const s = Object.freeze({
                    loose: !0
                }),
                t = Object.freeze({});
            R.exports = p => p ? "object" != typeof p ? s : p : t
        },
        75808: (R, s, t) => {
            const {
                MAX_SAFE_COMPONENT_LENGTH: e,
                MAX_SAFE_BUILD_LENGTH: p,
                MAX_LENGTH: h
            } = t(10610), f = t(14859), b = (s = R.exports = {}).re = [], r = s.safeRe = [], o = s.src = [], u = s.t = {};
            let g = 0;
            const c = "[a-zA-Z0-9-]",
                d = [
                    ["\\s", 1],
                    ["\\d", h],
                    [c, p]
                ],
                n = (l, y, _) => {
                    const v = (l => {
                            for (const [y, _] of d) l = l.split(`${y}*`).join(`${y}{0,${_}}`).split(`${y}+`).join(`${y}{1,${_}}`);
                            return l
                        })(y),
                        w = g++;
                    f(l, w, y), u[l] = w, o[w] = y, b[w] = new RegExp(y, _ ? "g" : void 0), r[w] = new RegExp(v, _ ? "g" : void 0)
                };
            n("NUMERICIDENTIFIER", "0|[1-9]\\d*"), n("NUMERICIDENTIFIERLOOSE", "\\d+"), n("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${c}*`), n("MAINVERSION", `(${o[u.NUMERICIDENTIFIER]})\\.(${o[u.NUMERICIDENTIFIER]})\\.(${o[u.NUMERICIDENTIFIER]})`), n("MAINVERSIONLOOSE", `(${o[u.NUMERICIDENTIFIERLOOSE]})\\.(${o[u.NUMERICIDENTIFIERLOOSE]})\\.(${o[u.NUMERICIDENTIFIERLOOSE]})`), n("PRERELEASEIDENTIFIER", `(?:${o[u.NUMERICIDENTIFIER]}|${o[u.NONNUMERICIDENTIFIER]})`), n("PRERELEASEIDENTIFIERLOOSE", `(?:${o[u.NUMERICIDENTIFIERLOOSE]}|${o[u.NONNUMERICIDENTIFIER]})`), n("PRERELEASE", `(?:-(${o[u.PRERELEASEIDENTIFIER]}(?:\\.${o[u.PRERELEASEIDENTIFIER]})*))`), n("PRERELEASELOOSE", `(?:-?(${o[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${o[u.PRERELEASEIDENTIFIERLOOSE]})*))`), n("BUILDIDENTIFIER", `${c}+`), n("BUILD", `(?:\\+(${o[u.BUILDIDENTIFIER]}(?:\\.${o[u.BUILDIDENTIFIER]})*))`), n("FULLPLAIN", `v?${o[u.MAINVERSION]}${o[u.PRERELEASE]}?${o[u.BUILD]}?`), n("FULL", `^${o[u.FULLPLAIN]}$`), n("LOOSEPLAIN", `[v=\\s]*${o[u.MAINVERSIONLOOSE]}${o[u.PRERELEASELOOSE]}?${o[u.BUILD]}?`), n("LOOSE", `^${o[u.LOOSEPLAIN]}$`), n("GTLT", "((?:<|>)?=?)"), n("XRANGEIDENTIFIERLOOSE", `${o[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), n("XRANGEIDENTIFIER", `${o[u.NUMERICIDENTIFIER]}|x|X|\\*`), n("XRANGEPLAIN", `[v=\\s]*(${o[u.XRANGEIDENTIFIER]})(?:\\.(${o[u.XRANGEIDENTIFIER]})(?:\\.(${o[u.XRANGEIDENTIFIER]})(?:${o[u.PRERELEASE]})?${o[u.BUILD]}?)?)?`), n("XRANGEPLAINLOOSE", `[v=\\s]*(${o[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[u.XRANGEIDENTIFIERLOOSE]})(?:${o[u.PRERELEASELOOSE]})?${o[u.BUILD]}?)?)?`), n("XRANGE", `^${o[u.GTLT]}\\s*${o[u.XRANGEPLAIN]}$`), n("XRANGELOOSE", `^${o[u.GTLT]}\\s*${o[u.XRANGEPLAINLOOSE]}$`), n("COERCE", `(^|[^\\d])(\\d{1,${e}})(?:\\.(\\d{1,${e}}))?(?:\\.(\\d{1,${e}}))?(?:$|[^\\d])`), n("COERCERTL", o[u.COERCE], !0), n("LONETILDE", "(?:~>?)"), n("TILDETRIM", `(\\s*)${o[u.LONETILDE]}\\s+`, !0), s.tildeTrimReplace = "$1~", n("TILDE", `^${o[u.LONETILDE]}${o[u.XRANGEPLAIN]}$`), n("TILDELOOSE", `^${o[u.LONETILDE]}${o[u.XRANGEPLAINLOOSE]}$`), n("LONECARET", "(?:\\^)"), n("CARETTRIM", `(\\s*)${o[u.LONECARET]}\\s+`, !0), s.caretTrimReplace = "$1^", n("CARET", `^${o[u.LONECARET]}${o[u.XRANGEPLAIN]}$`), n("CARETLOOSE", `^${o[u.LONECARET]}${o[u.XRANGEPLAINLOOSE]}$`), n("COMPARATORLOOSE", `^${o[u.GTLT]}\\s*(${o[u.LOOSEPLAIN]})$|^$`), n("COMPARATOR", `^${o[u.GTLT]}\\s*(${o[u.FULLPLAIN]})$|^$`), n("COMPARATORTRIM", `(\\s*)${o[u.GTLT]}\\s*(${o[u.LOOSEPLAIN]}|${o[u.XRANGEPLAIN]})`, !0), s.comparatorTrimReplace = "$1$2$3", n("HYPHENRANGE", `^\\s*(${o[u.XRANGEPLAIN]})\\s+-\\s+(${o[u.XRANGEPLAIN]})\\s*$`), n("HYPHENRANGELOOSE", `^\\s*(${o[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${o[u.XRANGEPLAINLOOSE]})\\s*$`), n("STAR", "(<|>)?=?\\s*\\*"), n("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), n("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
        },
        93756: (R, s, t) => {
            "use strict";
            const e = t(46952),
                p = Symbol("max"),
                h = Symbol("length"),
                f = Symbol("lengthCalculator"),
                b = Symbol("allowStale"),
                r = Symbol("maxAge"),
                o = Symbol("dispose"),
                u = Symbol("noDisposeOnSet"),
                g = Symbol("lruList"),
                c = Symbol("cache"),
                d = Symbol("updateAgeOnGet"),
                a = () => 1,
                l = (E, S, x) => {
                    const O = E[c].get(S);
                    if (O) {
                        const I = O.value;
                        if (y(E, I)) {
                            if (v(E, O), !E[b]) return
                        } else x && (E[d] && (O.value.now = Date.now()), E[g].unshiftNode(O));
                        return I.value
                    }
                },
                y = (E, S) => {
                    if (!S || !S.maxAge && !E[r]) return !1;
                    const x = Date.now() - S.now;
                    return S.maxAge ? x > S.maxAge : E[r] && x > E[r]
                },
                _ = E => {
                    if (E[h] > E[p])
                        for (let S = E[g].tail; E[h] > E[p] && null !== S;) {
                            const x = S.prev;
                            v(E, S), S = x
                        }
                },
                v = (E, S) => {
                    if (S) {
                        const x = S.value;
                        E[o] && E[o](x.key, x.value), E[h] -= x.length, E[c].delete(x.key), E[g].removeNode(S)
                    }
                };
            class w {
                constructor(S, x, O, I, T) {
                    this.key = S, this.value = x, this.length = O, this.now = I, this.maxAge = T || 0
                }
            }
            const C = (E, S, x, O) => {
                let I = x.value;
                y(E, I) && (v(E, x), E[b] || (I = void 0)), I && S.call(O, I.value, I.key, E)
            };
            R.exports = class n {
                constructor(S) {
                    if ("number" == typeof S && (S = {
                            max: S
                        }), S || (S = {}), S.max && ("number" != typeof S.max || S.max < 0)) throw new TypeError("max must be a non-negative number");
                    this[p] = S.max || 1 / 0;
                    const O = S.length || a;
                    if (this[f] = "function" != typeof O ? a : O, this[b] = S.stale || !1, S.maxAge && "number" != typeof S.maxAge) throw new TypeError("maxAge must be a number");
                    this[r] = S.maxAge || 0, this[o] = S.dispose, this[u] = S.noDisposeOnSet || !1, this[d] = S.updateAgeOnGet || !1, this.reset()
                }
                set max(S) {
                    if ("number" != typeof S || S < 0) throw new TypeError("max must be a non-negative number");
                    this[p] = S || 1 / 0, _(this)
                }
                get max() {
                    return this[p]
                }
                set allowStale(S) {
                    this[b] = !!S
                }
                get allowStale() {
                    return this[b]
                }
                set maxAge(S) {
                    if ("number" != typeof S) throw new TypeError("maxAge must be a non-negative number");
                    this[r] = S, _(this)
                }
                get maxAge() {
                    return this[r]
                }
                set lengthCalculator(S) {
                    "function" != typeof S && (S = a), S !== this[f] && (this[f] = S, this[h] = 0, this[g].forEach(x => {
                        x.length = this[f](x.value, x.key), this[h] += x.length
                    })), _(this)
                }
                get lengthCalculator() {
                    return this[f]
                }
                get length() {
                    return this[h]
                }
                get itemCount() {
                    return this[g].length
                }
                rforEach(S, x) {
                    x = x || this;
                    for (let O = this[g].tail; null !== O;) {
                        const I = O.prev;
                        C(this, S, O, x), O = I
                    }
                }
                forEach(S, x) {
                    x = x || this;
                    for (let O = this[g].head; null !== O;) {
                        const I = O.next;
                        C(this, S, O, x), O = I
                    }
                }
                keys() {
                    return this[g].toArray().map(S => S.key)
                }
                values() {
                    return this[g].toArray().map(S => S.value)
                }
                reset() {
                    this[o] && this[g] && this[g].length && this[g].forEach(S => this[o](S.key, S.value)), this[c] = new Map, this[g] = new e, this[h] = 0
                }
                dump() {
                    return this[g].map(S => !y(this, S) && {
                        k: S.key,
                        v: S.value,
                        e: S.now + (S.maxAge || 0)
                    }).toArray().filter(S => S)
                }
                dumpLru() {
                    return this[g]
                }
                set(S, x, O) {
                    if ((O = O || this[r]) && "number" != typeof O) throw new TypeError("maxAge must be a number");
                    const I = O ? Date.now() : 0,
                        T = this[f](x, S);
                    if (this[c].has(S)) {
                        if (T > this[p]) return v(this, this[c].get(S)), !1;
                        const Z = this[c].get(S).value;
                        return this[o] && (this[u] || this[o](S, Z.value)), Z.now = I, Z.maxAge = O, Z.value = x, this[h] += T - Z.length, Z.length = T, this.get(S), _(this), !0
                    }
                    const k = new w(S, x, T, I, O);
                    return k.length > this[p] ? (this[o] && this[o](S, x), !1) : (this[h] += k.length, this[g].unshift(k), this[c].set(S, this[g].head), _(this), !0)
                }
                has(S) {
                    if (!this[c].has(S)) return !1;
                    const x = this[c].get(S).value;
                    return !y(this, x)
                }
                get(S) {
                    return l(this, S, !0)
                }
                peek(S) {
                    return l(this, S, !1)
                }
                pop() {
                    const S = this[g].tail;
                    return S ? (v(this, S), S.value) : null
                }
                del(S) {
                    v(this, this[c].get(S))
                }
                load(S) {
                    this.reset();
                    const x = Date.now();
                    for (let O = S.length - 1; O >= 0; O--) {
                        const I = S[O],
                            T = I.e || 0;
                        if (0 === T) this.set(I.k, I.v);
                        else {
                            const k = T - x;
                            k > 0 && this.set(I.k, I.v, k)
                        }
                    }
                }
                prune() {
                    this[c].forEach((S, x) => l(this, x, !1))
                }
            }
        },
        80032: R => {
            "use strict";
            R.exports = function(s) {
                s.prototype[Symbol.iterator] = function*() {
                    for (let t = this.head; t; t = t.next) yield t.value
                }
            }
        },
        46952: (R, s, t) => {
            "use strict";

            function e(r) {
                var o = this;
                if (o instanceof e || (o = new e), o.tail = null, o.head = null, o.length = 0, r && "function" == typeof r.forEach) r.forEach(function(c) {
                    o.push(c)
                });
                else if (arguments.length > 0)
                    for (var u = 0, g = arguments.length; u < g; u++) o.push(arguments[u]);
                return o
            }

            function p(r, o, u) {
                var g = o === r.head ? new b(u, null, o, r) : new b(u, o, o.next, r);
                return null === g.next && (r.tail = g), null === g.prev && (r.head = g), r.length++, g
            }

            function h(r, o) {
                r.tail = new b(o, r.tail, null, r), r.head || (r.head = r.tail), r.length++
            }

            function f(r, o) {
                r.head = new b(o, null, r.head, r), r.tail || (r.tail = r.head), r.length++
            }

            function b(r, o, u, g) {
                if (!(this instanceof b)) return new b(r, o, u, g);
                this.list = g, this.value = r, o ? (o.next = this, this.prev = o) : this.prev = null, u ? (u.prev = this, this.next = u) : this.next = null
            }
            R.exports = e, e.Node = b, e.create = e, e.prototype.removeNode = function(r) {
                if (r.list !== this) throw new Error("removing node which does not belong to this list");
                var o = r.next,
                    u = r.prev;
                return o && (o.prev = u), u && (u.next = o), r === this.head && (this.head = o), r === this.tail && (this.tail = u), r.list.length--, r.next = null, r.prev = null, r.list = null, o
            }, e.prototype.unshiftNode = function(r) {
                if (r !== this.head) {
                    r.list && r.list.removeNode(r);
                    var o = this.head;
                    r.list = this, r.next = o, o && (o.prev = r), this.head = r, this.tail || (this.tail = r), this.length++
                }
            }, e.prototype.pushNode = function(r) {
                if (r !== this.tail) {
                    r.list && r.list.removeNode(r);
                    var o = this.tail;
                    r.list = this, r.prev = o, o && (o.next = r), this.tail = r, this.head || (this.head = r), this.length++
                }
            }, e.prototype.push = function() {
                for (var r = 0, o = arguments.length; r < o; r++) h(this, arguments[r]);
                return this.length
            }, e.prototype.unshift = function() {
                for (var r = 0, o = arguments.length; r < o; r++) f(this, arguments[r]);
                return this.length
            }, e.prototype.pop = function() {
                if (this.tail) {
                    var r = this.tail.value;
                    return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, r
                }
            }, e.prototype.shift = function() {
                if (this.head) {
                    var r = this.head.value;
                    return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, r
                }
            }, e.prototype.forEach = function(r, o) {
                o = o || this;
                for (var u = this.head, g = 0; null !== u; g++) r.call(o, u.value, g, this), u = u.next
            }, e.prototype.forEachReverse = function(r, o) {
                o = o || this;
                for (var u = this.tail, g = this.length - 1; null !== u; g--) r.call(o, u.value, g, this), u = u.prev
            }, e.prototype.get = function(r) {
                for (var o = 0, u = this.head; null !== u && o < r; o++) u = u.next;
                if (o === r && null !== u) return u.value
            }, e.prototype.getReverse = function(r) {
                for (var o = 0, u = this.tail; null !== u && o < r; o++) u = u.prev;
                if (o === r && null !== u) return u.value
            }, e.prototype.map = function(r, o) {
                o = o || this;
                for (var u = new e, g = this.head; null !== g;) u.push(r.call(o, g.value, this)), g = g.next;
                return u
            }, e.prototype.mapReverse = function(r, o) {
                o = o || this;
                for (var u = new e, g = this.tail; null !== g;) u.push(r.call(o, g.value, this)), g = g.prev;
                return u
            }, e.prototype.reduce = function(r, o) {
                var u, g = this.head;
                if (arguments.length > 1) u = o;
                else {
                    if (!this.head) throw new TypeError("Reduce of empty list with no initial value");
                    g = this.head.next, u = this.head.value
                }
                for (var c = 0; null !== g; c++) u = r(u, g.value, c), g = g.next;
                return u
            }, e.prototype.reduceReverse = function(r, o) {
                var u, g = this.tail;
                if (arguments.length > 1) u = o;
                else {
                    if (!this.tail) throw new TypeError("Reduce of empty list with no initial value");
                    g = this.tail.prev, u = this.tail.value
                }
                for (var c = this.length - 1; null !== g; c--) u = r(u, g.value, c), g = g.prev;
                return u
            }, e.prototype.toArray = function() {
                for (var r = new Array(this.length), o = 0, u = this.head; null !== u; o++) r[o] = u.value, u = u.next;
                return r
            }, e.prototype.toArrayReverse = function() {
                for (var r = new Array(this.length), o = 0, u = this.tail; null !== u; o++) r[o] = u.value, u = u.prev;
                return r
            }, e.prototype.slice = function(r, o) {
                (o = o || this.length) < 0 && (o += this.length), (r = r || 0) < 0 && (r += this.length);
                var u = new e;
                if (o < r || o < 0) return u;
                r < 0 && (r = 0), o > this.length && (o = this.length);
                for (var g = 0, c = this.head; null !== c && g < r; g++) c = c.next;
                for (; null !== c && g < o; g++, c = c.next) u.push(c.value);
                return u
            }, e.prototype.sliceReverse = function(r, o) {
                (o = o || this.length) < 0 && (o += this.length), (r = r || 0) < 0 && (r += this.length);
                var u = new e;
                if (o < r || o < 0) return u;
                r < 0 && (r = 0), o > this.length && (o = this.length);
                for (var g = this.length, c = this.tail; null !== c && g > o; g--) c = c.prev;
                for (; null !== c && g > r; g--, c = c.prev) u.push(c.value);
                return u
            }, e.prototype.splice = function(r, o, ...u) {
                r > this.length && (r = this.length - 1), r < 0 && (r = this.length + r);
                for (var g = 0, c = this.head; null !== c && g < r; g++) c = c.next;
                var d = [];
                for (g = 0; c && g < o; g++) d.push(c.value), c = this.removeNode(c);
                for (null === c && (c = this.tail), c !== this.head && c !== this.tail && (c = c.prev), g = 0; g < u.length; g++) c = p(this, c, u[g]);
                return d
            }, e.prototype.reverse = function() {
                for (var r = this.head, o = this.tail, u = r; null !== u; u = u.prev) {
                    var g = u.prev;
                    u.prev = u.next, u.next = g
                }
                return this.head = o, this.tail = r, this
            };
            try {
                t(80032)(e)
            } catch {}
        },
        30562: (R, s, t) => {
            const e = t(87416);
            R.exports = (h, f, b) => e(h, f, ">", b)
        },
        44006: (R, s, t) => {
            const e = t(72441);
            R.exports = (h, f, b) => (h = new e(h, b), f = new e(f, b), h.intersects(f, b))
        },
        73013: (R, s, t) => {
            const e = t(87416);
            R.exports = (h, f, b) => e(h, f, "<", b)
        },
        2755: (R, s, t) => {
            const e = t(71003),
                p = t(72441);
            R.exports = (f, b, r) => {
                let o = null,
                    u = null,
                    g = null;
                try {
                    g = new p(b, r)
                } catch {
                    return null
                }
                return f.forEach(c => {
                    g.test(c) && (!o || -1 === u.compare(c)) && (o = c, u = new e(o, r))
                }), o
            }
        },
        21639: (R, s, t) => {
            const e = t(71003),
                p = t(72441);
            R.exports = (f, b, r) => {
                let o = null,
                    u = null,
                    g = null;
                try {
                    g = new p(b, r)
                } catch {
                    return null
                }
                return f.forEach(c => {
                    g.test(c) && (!o || 1 === u.compare(c)) && (o = c, u = new e(o, r))
                }), o
            }
        },
        24816: (R, s, t) => {
            const e = t(71003),
                p = t(72441),
                h = t(6691);
            R.exports = (b, r) => {
                b = new p(b, r);
                let o = new e("0.0.0");
                if (b.test(o) || (o = new e("0.0.0-0"), b.test(o))) return o;
                o = null;
                for (let u = 0; u < b.set.length; ++u) {
                    let c = null;
                    b.set[u].forEach(d => {
                        const a = new e(d.semver.version);
                        switch (d.operator) {
                            case ">":
                                0 === a.prerelease.length ? a.patch++ : a.prerelease.push(0), a.raw = a.format();
                            case "":
                            case ">=":
                                (!c || h(a, c)) && (c = a);
                                break;
                            case "<":
                            case "<=":
                                break;
                            default:
                                throw new Error(`Unexpected operation: ${d.operator}`)
                        }
                    }), c && (!o || h(o, c)) && (o = c)
                }
                return o && b.test(o) ? o : null
            }
        },
        87416: (R, s, t) => {
            const e = t(71003),
                p = t(61858),
                {
                    ANY: h
                } = p,
                f = t(72441),
                b = t(67100),
                r = t(6691),
                o = t(62473),
                u = t(19776),
                g = t(4439);
            R.exports = (d, a, n, l) => {
                let y, _, v, w, C;
                switch (d = new e(d, l), a = new f(a, l), n) {
                    case ">":
                        y = r, _ = u, v = o, w = ">", C = ">=";
                        break;
                    case "<":
                        y = o, _ = g, v = r, w = "<", C = "<=";
                        break;
                    default:
                        throw new TypeError('Must provide a hilo val of "<" or ">"')
                }
                if (b(d, a, l)) return !1;
                for (let E = 0; E < a.set.length; ++E) {
                    let x = null,
                        O = null;
                    if (a.set[E].forEach(I => {
                            I.semver === h && (I = new p(">=0.0.0")), x = x || I, O = O || I, y(I.semver, x.semver, l) ? x = I : v(I.semver, O.semver, l) && (O = I)
                        }), x.operator === w || x.operator === C || (!O.operator || O.operator === w) && _(d, O.semver)) return !1;
                    if (O.operator === C && v(d, O.semver)) return !1
                }
                return !0
            }
        },
        22326: (R, s, t) => {
            const e = t(67100),
                p = t(22214);
            R.exports = (h, f, b) => {
                const r = [];
                let o = null,
                    u = null;
                const g = h.sort((n, l) => p(n, l, b));
                for (const n of g) e(n, f, b) ? (u = n, o || (o = n)) : (u && r.push([o, u]), u = null, o = null);
                o && r.push([o, null]);
                const c = [];
                for (const [n, l] of r) c.push(n === l ? n : l || n !== g[0] ? l ? n === g[0] ? `<=${l}` : `${n} - ${l}` : `>=${n}` : "*");
                const d = c.join(" || "),
                    a = "string" == typeof f.raw ? f.raw : String(f);
                return d.length < a.length ? d : f
            }
        },
        71538: (R, s, t) => {
            const e = t(72441),
                p = t(61858),
                {
                    ANY: h
                } = p,
                f = t(67100),
                b = t(22214),
                o = [new p(">=0.0.0-0")],
                u = [new p(">=0.0.0")],
                g = (a, n, l) => {
                    if (a === n) return !0;
                    if (1 === a.length && a[0].semver === h) {
                        if (1 === n.length && n[0].semver === h) return !0;
                        a = l.includePrerelease ? o : u
                    }
                    if (1 === n.length && n[0].semver === h) {
                        if (l.includePrerelease) return !0;
                        n = u
                    }
                    const y = new Set;
                    let _, v, w;
                    for (const T of a) ">" === T.operator || ">=" === T.operator ? _ = c(_, T, l) : "<" === T.operator || "<=" === T.operator ? v = d(v, T, l) : y.add(T.semver);
                    if (y.size > 1) return null;
                    if (_ && v) {
                        if (w = b(_.semver, v.semver, l), w > 0) return null;
                        if (0 === w && (">=" !== _.operator || "<=" !== v.operator)) return null
                    }
                    for (const T of y) {
                        if (_ && !f(T, String(_), l) || v && !f(T, String(v), l)) return null;
                        for (const k of n)
                            if (!f(T, String(k), l)) return !1;
                        return !0
                    }
                    let C, E, S, x, O = !(!v || l.includePrerelease || !v.semver.prerelease.length) && v.semver,
                        I = !(!_ || l.includePrerelease || !_.semver.prerelease.length) && _.semver;
                    O && 1 === O.prerelease.length && "<" === v.operator && 0 === O.prerelease[0] && (O = !1);
                    for (const T of n) {
                        if (x = x || ">" === T.operator || ">=" === T.operator, S = S || "<" === T.operator || "<=" === T.operator, _)
                            if (I && T.semver.prerelease && T.semver.prerelease.length && T.semver.major === I.major && T.semver.minor === I.minor && T.semver.patch === I.patch && (I = !1), ">" === T.operator || ">=" === T.operator) {
                                if (C = c(_, T, l), C === T && C !== _) return !1
                            } else if (">=" === _.operator && !f(_.semver, String(T), l)) return !1;
                        if (v)
                            if (O && T.semver.prerelease && T.semver.prerelease.length && T.semver.major === O.major && T.semver.minor === O.minor && T.semver.patch === O.patch && (O = !1), "<" === T.operator || "<=" === T.operator) {
                                if (E = d(v, T, l), E === T && E !== v) return !1
                            } else if ("<=" === v.operator && !f(v.semver, String(T), l)) return !1;
                        if (!T.operator && (v || _) && 0 !== w) return !1
                    }
                    return !(_ && S && !v && 0 !== w || v && x && !_ && 0 !== w || I || O)
                },
                c = (a, n, l) => {
                    if (!a) return n;
                    const y = b(a.semver, n.semver, l);
                    return y > 0 ? a : y < 0 || ">" === n.operator && ">=" === a.operator ? n : a
                },
                d = (a, n, l) => {
                    if (!a) return n;
                    const y = b(a.semver, n.semver, l);
                    return y < 0 ? a : y > 0 || "<" === n.operator && "<=" === a.operator ? n : a
                };
            R.exports = (a, n, l = {}) => {
                if (a === n) return !0;
                a = new e(a, l), n = new e(n, l);
                let y = !1;
                e: for (const _ of a.set) {
                    for (const v of n.set) {
                        const w = g(_, v, l);
                        if (y = y || null !== w, w) continue e
                    }
                    if (y) return !1
                }
                return !0
            }
        },
        31250: (R, s, t) => {
            const e = t(72441);
            R.exports = (h, f) => new e(h, f).set.map(b => b.map(r => r.value).join(" ").trim().split(" "))
        },
        82321: (R, s, t) => {
            const e = t(72441);
            R.exports = (h, f) => {
                try {
                    return new e(h, f).range || "*"
                } catch {
                    return null
                }
            }
        },
        62245: (R, s, t) => {
            "use strict";
            var e = t(90491),
                p = t(19224),
                h = t(2486)(),
                f = t(79262),
                b = t(95223),
                r = e("%Math.floor%");
            R.exports = function(u, g) {
                if ("function" != typeof u) throw new b("`fn` is not a function");
                if ("number" != typeof g || g < 0 || g > 4294967295 || r(g) !== g) throw new b("`length` must be a positive 32-bit integer");
                var c = arguments.length > 2 && !!arguments[2],
                    d = !0,
                    a = !0;
                if ("length" in u && f) {
                    var n = f(u, "length");
                    n && !n.configurable && (d = !1), n && !n.writable && (a = !1)
                }
                return (d || a || !c) && (h ? p(u, "length", g, !0, !0) : p(u, "length", g)), u
            }
        },
        83581: (R, s, t) => {
            var e = t(843).Buffer;

            function p(h, f) {
                this._block = e.alloc(h), this._finalSize = f, this._blockSize = h, this._len = 0
            }
            p.prototype.update = function(h, f) {
                "string" == typeof h && (h = e.from(h, f = f || "utf8"));
                for (var b = this._block, r = this._blockSize, o = h.length, u = this._len, g = 0; g < o;) {
                    for (var c = u % r, d = Math.min(o - g, r - c), a = 0; a < d; a++) b[c + a] = h[g + a];
                    g += d, (u += d) % r == 0 && this._update(b)
                }
                return this._len += o, this
            }, p.prototype.digest = function(h) {
                var f = this._len % this._blockSize;
                this._block[f] = 128, this._block.fill(0, f + 1), f >= this._finalSize && (this._update(this._block), this._block.fill(0));
                var b = 8 * this._len;
                if (b <= 4294967295) this._block.writeUInt32BE(b, this._blockSize - 4);
                else {
                    var r = (4294967295 & b) >>> 0;
                    this._block.writeUInt32BE((b - r) / 4294967296, this._blockSize - 8), this._block.writeUInt32BE(r, this._blockSize - 4)
                }
                this._update(this._block);
                var u = this._hash();
                return h ? u.toString(h) : u
            }, p.prototype._update = function() {
                throw new Error("_update must be implemented by subclass")
            }, R.exports = p
        },
        97965: (R, s, t) => {
            var e = R.exports = function(h) {
                h = h.toLowerCase();
                var f = e[h];
                if (!f) throw new Error(h + " is not supported (we accept pull requests)");
                return new f
            };
            e.sha = t(77915), e.sha1 = t(1229), e.sha224 = t(72959), e.sha256 = t(50450), e.sha384 = t(61723), e.sha512 = t(47914)
        },
        77915: (R, s, t) => {
            var e = t(66698),
                p = t(83581),
                h = t(843).Buffer,
                f = [1518500249, 1859775393, -1894007588, -899497514],
                b = new Array(80);

            function r() {
                this.init(), this._w = b, p.call(this, 64, 56)
            }

            function o(c) {
                return c << 5 | c >>> 27
            }

            function u(c) {
                return c << 30 | c >>> 2
            }

            function g(c, d, a, n) {
                return 0 === c ? d & a | ~d & n : 2 === c ? d & a | d & n | a & n : d ^ a ^ n
            }
            e(r, p), r.prototype.init = function() {
                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
            }, r.prototype._update = function(c) {
                for (var d = this._w, a = 0 | this._a, n = 0 | this._b, l = 0 | this._c, y = 0 | this._d, _ = 0 | this._e, v = 0; v < 16; ++v) d[v] = c.readInt32BE(4 * v);
                for (; v < 80; ++v) d[v] = d[v - 3] ^ d[v - 8] ^ d[v - 14] ^ d[v - 16];
                for (var w = 0; w < 80; ++w) {
                    var C = ~~(w / 20),
                        E = o(a) + g(C, n, l, y) + _ + d[w] + f[C] | 0;
                    _ = y, y = l, l = u(n), n = a, a = E
                }
                this._a = a + this._a | 0, this._b = n + this._b | 0, this._c = l + this._c | 0, this._d = y + this._d | 0, this._e = _ + this._e | 0
            }, r.prototype._hash = function() {
                var c = h.allocUnsafe(20);
                return c.writeInt32BE(0 | this._a, 0), c.writeInt32BE(0 | this._b, 4), c.writeInt32BE(0 | this._c, 8), c.writeInt32BE(0 | this._d, 12), c.writeInt32BE(0 | this._e, 16), c
            }, R.exports = r
        },
        1229: (R, s, t) => {
            var e = t(66698),
                p = t(83581),
                h = t(843).Buffer,
                f = [1518500249, 1859775393, -1894007588, -899497514],
                b = new Array(80);

            function r() {
                this.init(), this._w = b, p.call(this, 64, 56)
            }

            function o(d) {
                return d << 1 | d >>> 31
            }

            function u(d) {
                return d << 5 | d >>> 27
            }

            function g(d) {
                return d << 30 | d >>> 2
            }

            function c(d, a, n, l) {
                return 0 === d ? a & n | ~a & l : 2 === d ? a & n | a & l | n & l : a ^ n ^ l
            }
            e(r, p), r.prototype.init = function() {
                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
            }, r.prototype._update = function(d) {
                for (var a = this._w, n = 0 | this._a, l = 0 | this._b, y = 0 | this._c, _ = 0 | this._d, v = 0 | this._e, w = 0; w < 16; ++w) a[w] = d.readInt32BE(4 * w);
                for (; w < 80; ++w) a[w] = o(a[w - 3] ^ a[w - 8] ^ a[w - 14] ^ a[w - 16]);
                for (var C = 0; C < 80; ++C) {
                    var E = ~~(C / 20),
                        S = u(n) + c(E, l, y, _) + v + a[C] + f[E] | 0;
                    v = _, _ = y, y = g(l), l = n, n = S
                }
                this._a = n + this._a | 0, this._b = l + this._b | 0, this._c = y + this._c | 0, this._d = _ + this._d | 0, this._e = v + this._e | 0
            }, r.prototype._hash = function() {
                var d = h.allocUnsafe(20);
                return d.writeInt32BE(0 | this._a, 0), d.writeInt32BE(0 | this._b, 4), d.writeInt32BE(0 | this._c, 8), d.writeInt32BE(0 | this._d, 12), d.writeInt32BE(0 | this._e, 16), d
            }, R.exports = r
        },
        72959: (R, s, t) => {
            var e = t(66698),
                p = t(50450),
                h = t(83581),
                f = t(843).Buffer,
                b = new Array(64);

            function r() {
                this.init(), this._w = b, h.call(this, 64, 56)
            }
            e(r, p), r.prototype.init = function() {
                return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
            }, r.prototype._hash = function() {
                var o = f.allocUnsafe(28);
                return o.writeInt32BE(this._a, 0), o.writeInt32BE(this._b, 4), o.writeInt32BE(this._c, 8), o.writeInt32BE(this._d, 12), o.writeInt32BE(this._e, 16), o.writeInt32BE(this._f, 20), o.writeInt32BE(this._g, 24), o
            }, R.exports = r
        },
        50450: (R, s, t) => {
            var e = t(66698),
                p = t(83581),
                h = t(843).Buffer,
                f = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                b = new Array(64);

            function r() {
                this.init(), this._w = b, p.call(this, 64, 56)
            }

            function o(n, l, y) {
                return y ^ n & (l ^ y)
            }

            function u(n, l, y) {
                return n & l | y & (n | l)
            }

            function g(n) {
                return (n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)
            }

            function c(n) {
                return (n >>> 6 | n << 26) ^ (n >>> 11 | n << 21) ^ (n >>> 25 | n << 7)
            }

            function d(n) {
                return (n >>> 7 | n << 25) ^ (n >>> 18 | n << 14) ^ n >>> 3
            }

            function a(n) {
                return (n >>> 17 | n << 15) ^ (n >>> 19 | n << 13) ^ n >>> 10
            }
            e(r, p), r.prototype.init = function() {
                return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
            }, r.prototype._update = function(n) {
                for (var l = this._w, y = 0 | this._a, _ = 0 | this._b, v = 0 | this._c, w = 0 | this._d, C = 0 | this._e, E = 0 | this._f, S = 0 | this._g, x = 0 | this._h, O = 0; O < 16; ++O) l[O] = n.readInt32BE(4 * O);
                for (; O < 64; ++O) l[O] = a(l[O - 2]) + l[O - 7] + d(l[O - 15]) + l[O - 16] | 0;
                for (var I = 0; I < 64; ++I) {
                    var T = x + c(C) + o(C, E, S) + f[I] + l[I] | 0,
                        k = g(y) + u(y, _, v) | 0;
                    x = S, S = E, E = C, C = w + T | 0, w = v, v = _, _ = y, y = T + k | 0
                }
                this._a = y + this._a | 0, this._b = _ + this._b | 0, this._c = v + this._c | 0, this._d = w + this._d | 0, this._e = C + this._e | 0, this._f = E + this._f | 0, this._g = S + this._g | 0, this._h = x + this._h | 0
            }, r.prototype._hash = function() {
                var n = h.allocUnsafe(32);
                return n.writeInt32BE(this._a, 0), n.writeInt32BE(this._b, 4), n.writeInt32BE(this._c, 8), n.writeInt32BE(this._d, 12), n.writeInt32BE(this._e, 16), n.writeInt32BE(this._f, 20), n.writeInt32BE(this._g, 24), n.writeInt32BE(this._h, 28), n
            }, R.exports = r
        },
        61723: (R, s, t) => {
            var e = t(66698),
                p = t(47914),
                h = t(83581),
                f = t(843).Buffer,
                b = new Array(160);

            function r() {
                this.init(), this._w = b, h.call(this, 128, 112)
            }
            e(r, p), r.prototype.init = function() {
                return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
            }, r.prototype._hash = function() {
                var o = f.allocUnsafe(48);

                function u(g, c, d) {
                    o.writeInt32BE(g, d), o.writeInt32BE(c, d + 4)
                }
                return u(this._ah, this._al, 0), u(this._bh, this._bl, 8), u(this._ch, this._cl, 16), u(this._dh, this._dl, 24), u(this._eh, this._el, 32), u(this._fh, this._fl, 40), o
            }, R.exports = r
        },
        47914: (R, s, t) => {
            var e = t(66698),
                p = t(83581),
                h = t(843).Buffer,
                f = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
                b = new Array(160);

            function r() {
                this.init(), this._w = b, p.call(this, 128, 112)
            }

            function o(_, v, w) {
                return w ^ _ & (v ^ w)
            }

            function u(_, v, w) {
                return _ & v | w & (_ | v)
            }

            function g(_, v) {
                return (_ >>> 28 | v << 4) ^ (v >>> 2 | _ << 30) ^ (v >>> 7 | _ << 25)
            }

            function c(_, v) {
                return (_ >>> 14 | v << 18) ^ (_ >>> 18 | v << 14) ^ (v >>> 9 | _ << 23)
            }

            function d(_, v) {
                return (_ >>> 1 | v << 31) ^ (_ >>> 8 | v << 24) ^ _ >>> 7
            }

            function a(_, v) {
                return (_ >>> 1 | v << 31) ^ (_ >>> 8 | v << 24) ^ (_ >>> 7 | v << 25)
            }

            function n(_, v) {
                return (_ >>> 19 | v << 13) ^ (v >>> 29 | _ << 3) ^ _ >>> 6
            }

            function l(_, v) {
                return (_ >>> 19 | v << 13) ^ (v >>> 29 | _ << 3) ^ (_ >>> 6 | v << 26)
            }

            function y(_, v) {
                return _ >>> 0 < v >>> 0 ? 1 : 0
            }
            e(r, p), r.prototype.init = function() {
                return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
            }, r.prototype._update = function(_) {
                for (var v = this._w, w = 0 | this._ah, C = 0 | this._bh, E = 0 | this._ch, S = 0 | this._dh, x = 0 | this._eh, O = 0 | this._fh, I = 0 | this._gh, T = 0 | this._hh, k = 0 | this._al, P = 0 | this._bl, Z = 0 | this._cl, ie = 0 | this._dl, se = 0 | this._el, ee = 0 | this._fl, j = 0 | this._gl, ne = 0 | this._hl, Y = 0; Y < 32; Y += 2) v[Y] = _.readInt32BE(4 * Y), v[Y + 1] = _.readInt32BE(4 * Y + 4);
                for (; Y < 160; Y += 2) {
                    var G = v[Y - 30],
                        K = v[Y - 30 + 1],
                        X = d(G, K),
                        te = a(K, G),
                        de = n(G = v[Y - 4], K = v[Y - 4 + 1]),
                        ve = l(K, G),
                        xe = v[Y - 32],
                        J = v[Y - 32 + 1],
                        H = te + v[Y - 14 + 1] | 0,
                        D = X + v[Y - 14] + y(H, te) | 0;
                    D = (D = D + de + y(H = H + ve | 0, ve) | 0) + xe + y(H = H + J | 0, J) | 0, v[Y] = D, v[Y + 1] = H
                }
                for (var B = 0; B < 160; B += 2) {
                    D = v[B], H = v[B + 1];
                    var V = u(w, C, E),
                        N = u(k, P, Z),
                        L = g(w, k),
                        U = g(k, w),
                        ae = c(x, se),
                        ye = c(se, x),
                        me = f[B],
                        be = f[B + 1],
                        Ae = o(x, O, I),
                        he = o(se, ee, j),
                        Te = ne + ye | 0,
                        Se = T + ae + y(Te, ne) | 0;
                    Se = (Se = (Se = Se + Ae + y(Te = Te + he | 0, he) | 0) + me + y(Te = Te + be | 0, be) | 0) + D + y(Te = Te + H | 0, H) | 0;
                    var Pe = U + N | 0,
                        F = L + V + y(Pe, U) | 0;
                    T = I, ne = j, I = O, j = ee, O = x, ee = se, x = S + Se + y(se = ie + Te | 0, ie) | 0, S = E, ie = Z, E = C, Z = P, C = w, P = k, w = Se + F + y(k = Te + Pe | 0, Te) | 0
                }
                this._al = this._al + k | 0, this._bl = this._bl + P | 0, this._cl = this._cl + Z | 0, this._dl = this._dl + ie | 0, this._el = this._el + se | 0, this._fl = this._fl + ee | 0, this._gl = this._gl + j | 0, this._hl = this._hl + ne | 0, this._ah = this._ah + w + y(this._al, k) | 0, this._bh = this._bh + C + y(this._bl, P) | 0, this._ch = this._ch + E + y(this._cl, Z) | 0, this._dh = this._dh + S + y(this._dl, ie) | 0, this._eh = this._eh + x + y(this._el, se) | 0, this._fh = this._fh + O + y(this._fl, ee) | 0, this._gh = this._gh + I + y(this._gl, j) | 0, this._hh = this._hh + T + y(this._hl, ne) | 0
            }, r.prototype._hash = function() {
                var _ = h.allocUnsafe(64);

                function v(w, C, E) {
                    _.writeInt32BE(w, E), _.writeInt32BE(C, E + 4)
                }
                return v(this._ah, this._al, 0), v(this._bh, this._bl, 8), v(this._ch, this._cl, 16), v(this._dh, this._dl, 24), v(this._eh, this._el, 32), v(this._fh, this._fl, 40), v(this._gh, this._gl, 48), v(this._hh, this._hl, 56), _
            }, R.exports = r
        },
        57379: (R, s, t) => {
            "use strict";
            var e = t(90491),
                p = t(41098),
                h = t(61826),
                f = t(95223),
                b = e("%WeakMap%", !0),
                r = e("%Map%", !0),
                o = p("WeakMap.prototype.get", !0),
                u = p("WeakMap.prototype.set", !0),
                g = p("WeakMap.prototype.has", !0),
                c = p("Map.prototype.get", !0),
                d = p("Map.prototype.set", !0),
                a = p("Map.prototype.has", !0),
                n = function(v, w) {
                    for (var E, C = v; null !== (E = C.next); C = E)
                        if (E.key === w) return C.next = E.next, E.next = v.next, v.next = E, E
                };
            R.exports = function() {
                var w, C, E, S = {
                    assert: function(x) {
                        if (!S.has(x)) throw new f("Side channel does not contain " + h(x))
                    },
                    get: function(x) {
                        if (b && x && ("object" == typeof x || "function" == typeof x)) {
                            if (w) return o(w, x)
                        } else if (r) {
                            if (C) return c(C, x)
                        } else if (E) return function(v, w) {
                            var C = n(v, w);
                            return C && C.value
                        }(E, x)
                    },
                    has: function(x) {
                        if (b && x && ("object" == typeof x || "function" == typeof x)) {
                            if (w) return g(w, x)
                        } else if (r) {
                            if (C) return a(C, x)
                        } else if (E) return function(v, w) {
                            return !!n(v, w)
                        }(E, x);
                        return !1
                    },
                    set: function(x, O) {
                        b && x && ("object" == typeof x || "function" == typeof x) ? (w || (w = new b), u(w, x, O)) : r ? (C || (C = new r), d(C, x, O)) : (E || (E = {
                            key: {},
                            next: null
                        }), function(v, w, C) {
                            var E = n(v, w);
                            E ? E.value = C : v.next = {
                                key: w,
                                next: v.next,
                                value: C
                            }
                        }(E, x, O))
                    }
                };
                return S
            }
        },
        72024: (R, s, t) => {
            "use strict";
            var e = t(843).Buffer,
                p = e.isEncoding || function(w) {
                    switch ((w = "" + w) && w.toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                        case "raw":
                            return !0;
                        default:
                            return !1
                    }
                };

            function b(w) {
                var C;
                switch (this.encoding = function f(w) {
                    var C = function h(w) {
                        if (!w) return "utf8";
                        for (var C;;) switch (w) {
                            case "utf8":
                            case "utf-8":
                                return "utf8";
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return "utf16le";
                            case "latin1":
                            case "binary":
                                return "latin1";
                            case "base64":
                            case "ascii":
                            case "hex":
                                return w;
                            default:
                                if (C) return;
                                w = ("" + w).toLowerCase(), C = !0
                        }
                    }(w);
                    if ("string" != typeof C && (e.isEncoding === p || !p(w))) throw new Error("Unknown encoding: " + w);
                    return C || w
                }(w), this.encoding) {
                    case "utf16le":
                        this.text = a, this.end = n, C = 4;
                        break;
                    case "utf8":
                        this.fillLast = g, C = 4;
                        break;
                    case "base64":
                        this.text = l, this.end = y, C = 3;
                        break;
                    default:
                        return this.write = _, void(this.end = v)
                }
                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = e.allocUnsafe(C)
            }

            function r(w) {
                return w <= 127 ? 0 : w >> 5 == 6 ? 2 : w >> 4 == 14 ? 3 : w >> 3 == 30 ? 4 : w >> 6 == 2 ? -1 : -2
            }

            function g(w) {
                var C = this.lastTotal - this.lastNeed,
                    E = function u(w, C, E) {
                        if (128 != (192 & C[0])) return w.lastNeed = 0, "\ufffd";
                        if (w.lastNeed > 1 && C.length > 1) {
                            if (128 != (192 & C[1])) return w.lastNeed = 1, "\ufffd";
                            if (w.lastNeed > 2 && C.length > 2 && 128 != (192 & C[2])) return w.lastNeed = 2, "\ufffd"
                        }
                    }(this, w);
                return void 0 !== E ? E : this.lastNeed <= w.length ? (w.copy(this.lastChar, C, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (w.copy(this.lastChar, C, 0, w.length), void(this.lastNeed -= w.length))
            }

            function a(w, C) {
                if ((w.length - C) % 2 == 0) {
                    var E = w.toString("utf16le", C);
                    if (E) {
                        var S = E.charCodeAt(E.length - 1);
                        if (S >= 55296 && S <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = w[w.length - 2], this.lastChar[1] = w[w.length - 1], E.slice(0, -1)
                    }
                    return E
                }
                return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = w[w.length - 1], w.toString("utf16le", C, w.length - 1)
            }

            function n(w) {
                var C = w && w.length ? this.write(w) : "";
                return this.lastNeed ? C + this.lastChar.toString("utf16le", 0, this.lastTotal - this.lastNeed) : C
            }

            function l(w, C) {
                var E = (w.length - C) % 3;
                return 0 === E ? w.toString("base64", C) : (this.lastNeed = 3 - E, this.lastTotal = 3, 1 === E ? this.lastChar[0] = w[w.length - 1] : (this.lastChar[0] = w[w.length - 2], this.lastChar[1] = w[w.length - 1]), w.toString("base64", C, w.length - E))
            }

            function y(w) {
                var C = w && w.length ? this.write(w) : "";
                return this.lastNeed ? C + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : C
            }

            function _(w) {
                return w.toString(this.encoding)
            }

            function v(w) {
                return w && w.length ? this.write(w) : ""
            }
            s.s = b, b.prototype.write = function(w) {
                if (0 === w.length) return "";
                var C, E;
                if (this.lastNeed) {
                    if (void 0 === (C = this.fillLast(w))) return "";
                    E = this.lastNeed, this.lastNeed = 0
                } else E = 0;
                return E < w.length ? C ? C + this.text(w, E) : this.text(w, E) : C || ""
            }, b.prototype.end = function d(w) {
                var C = w && w.length ? this.write(w) : "";
                return this.lastNeed ? C + "\ufffd" : C
            }, b.prototype.text = function c(w, C) {
                var E = function o(w, C, E) {
                    var S = C.length - 1;
                    if (S < E) return 0;
                    var x = r(C[S]);
                    return x >= 0 ? (x > 0 && (w.lastNeed = x - 1), x) : --S < E || -2 === x ? 0 : (x = r(C[S])) >= 0 ? (x > 0 && (w.lastNeed = x - 2), x) : --S < E || -2 === x ? 0 : (x = r(C[S])) >= 0 ? (x > 0 && (2 === x ? x = 0 : w.lastNeed = x - 3), x) : 0
                }(this, w, C);
                if (!this.lastNeed) return w.toString("utf8", C);
                this.lastTotal = E;
                var S = w.length - (E - this.lastNeed);
                return w.copy(this.lastChar, 0, S), w.toString("utf8", C, S)
            }, b.prototype.fillLast = function(w) {
                if (this.lastNeed <= w.length) return w.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                w.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, w.length), this.lastNeed -= w.length
            }
        },
        90496: R => {
            function t(e) {
                try {
                    if (!global.localStorage) return !1
                } catch {
                    return !1
                }
                var p = global.localStorage[e];
                return null != p && "true" === String(p).toLowerCase()
            }
            R.exports = function s(e, p) {
                if (t("noDeprecation")) return e;
                var h = !1;
                return function f() {
                    if (!h) {
                        if (t("throwDeprecation")) throw new Error(p);
                        t("traceDeprecation") ? console.trace(p) : console.warn(p), h = !0
                    }
                    return e.apply(this, arguments)
                }
            }
        },
        20498: R => {
            R.exports = function t() {
                for (var e = {}, p = 0; p < arguments.length; p++) {
                    var h = arguments[p];
                    for (var f in h) s.call(h, f) && (e[f] = h[f])
                }
                return e
            };
            var s = Object.prototype.hasOwnProperty
        },
        24654: () => {},
        52361: () => {},
        94616: () => {},
        13921: (R, s, t) => {
            "use strict";
            t.r(s), t.d(s, {
                Struct: () => c,
                StructError: () => e,
                any: () => T,
                array: () => k,
                assert: () => d,
                assign: () => _,
                bigint: () => P,
                boolean: () => Z,
                coerce: () => L,
                create: () => a,
                date: () => ie,
                defaulted: () => U,
                define: () => v,
                deprecated: () => w,
                dynamic: () => C,
                empty: () => ye,
                enums: () => se,
                func: () => ee,
                instance: () => j,
                integer: () => ne,
                intersection: () => Y,
                is: () => l,
                lazy: () => E,
                literal: () => G,
                map: () => K,
                mask: () => n,
                max: () => be,
                min: () => Ae,
                never: () => X,
                nonempty: () => he,
                nullable: () => te,
                number: () => de,
                object: () => ve,
                omit: () => S,
                optional: () => _e,
                partial: () => x,
                pattern: () => Te,
                pick: () => O,
                record: () => Ee,
                refine: () => Pe,
                regexp: () => xe,
                set: () => J,
                size: () => Se,
                string: () => H,
                struct: () => I,
                trimmed: () => ae,
                tuple: () => D,
                type: () => B,
                union: () => V,
                unknown: () => N,
                validate: () => y
            });
            class e extends TypeError {
                constructor($, z) {
                    let re;
                    const {
                        message: pe,
                        explanation: Ce,
                        ...Le
                    } = $, {
                        path: Be
                    } = $, De = 0 === Be.length ? pe : `At path: ${Be.join(".")} -- ${pe}`;
                    super(Ce ? ? De), null != Ce && (this.cause = De), Object.assign(this, Le), this.name = this.constructor.name, this.failures = () => re ? ? (re = [$, ...z()])
                }
            }

            function h(F) {
                return "object" == typeof F && null != F
            }

            function f(F) {
                if ("[object Object]" !== Object.prototype.toString.call(F)) return !1;
                const $ = Object.getPrototypeOf(F);
                return null === $ || $ === Object.prototype
            }

            function b(F) {
                return "symbol" == typeof F ? F.toString() : "string" == typeof F ? JSON.stringify(F) : `${F}`
            }

            function o(F, $, z, re) {
                if (!0 === F) return;
                !1 === F ? F = {} : "string" == typeof F && (F = {
                    message: F
                });
                const {
                    path: pe,
                    branch: Ce
                } = $, {
                    type: Le
                } = z, {
                    refinement: Be,
                    message: De = `Expected a value of type \`${Le}\`${Be?` with refinement \`${Be}\``:""}, but received: \`${b(re)}\``
                } = F;
                return {
                    value: re,
                    type: Le,
                    refinement: Be,
                    key: pe[pe.length - 1],
                    path: pe,
                    branch: Ce,
                    ...F,
                    message: De
                }
            }

            function* u(F, $, z, re) {
                (function p(F) {
                    return h(F) && "function" == typeof F[Symbol.iterator]
                })(F) || (F = [F]);
                for (const pe of F) {
                    const Ce = o(pe, $, z, re);
                    Ce && (yield Ce)
                }
            }

            function* g(F, $, z = {}) {
                const {
                    path: re = [],
                    branch: pe = [F],
                    coerce: Ce = !1,
                    mask: Le = !1
                } = z, Be = {
                    path: re,
                    branch: pe
                };
                if (Ce && (F = $.coercer(F, Be), Le && "type" !== $.type && h($.schema) && h(F) && !Array.isArray(F)))
                    for (const Q in F) void 0 === $.schema[Q] && delete F[Q];
                let De = "valid";
                for (const Q of $.validator(F, Be)) Q.explanation = z.message, De = "not_valid", yield [Q, void 0];
                for (let [Q, q, Ne] of $.entries(F, Be)) {
                    const je = g(q, Ne, {
                        path: void 0 === Q ? re : [...re, Q],
                        branch: void 0 === Q ? pe : [...pe, q],
                        coerce: Ce,
                        mask: Le,
                        message: z.message
                    });
                    for (const Fe of je) Fe[0] ? (De = null != Fe[0].refinement ? "not_refined" : "not_valid", yield [Fe[0], void 0]) : Ce && (q = Fe[1], void 0 === Q ? F = q : F instanceof Map ? F.set(Q, q) : F instanceof Set ? F.add(q) : h(F) && (void 0 !== q || Q in F) && (F[Q] = q))
                }
                if ("not_valid" !== De)
                    for (const Q of $.refiner(F, Be)) Q.explanation = z.message, De = "not_refined", yield [Q, void 0];
                "valid" === De && (yield [void 0, F])
            }
            class c {
                constructor($) {
                    const {
                        type: z,
                        schema: re,
                        validator: pe,
                        refiner: Ce,
                        coercer: Le = (De => De),
                        entries: Be = function*() {}
                    } = $;
                    this.type = z, this.schema = re, this.entries = Be, this.coercer = Le, this.validator = pe ? (De, Q) => u(pe(De, Q), Q, this, De) : () => [], this.refiner = Ce ? (De, Q) => u(Ce(De, Q), Q, this, De) : () => []
                }
                assert($, z) {
                    return d($, this, z)
                }
                create($, z) {
                    return a($, this, z)
                }
                is($) {
                    return l($, this)
                }
                mask($, z) {
                    return n($, this, z)
                }
                validate($, z = {}) {
                    return y($, this, z)
                }
            }

            function d(F, $, z) {
                const re = y(F, $, {
                    message: z
                });
                if (re[0]) throw re[0]
            }

            function a(F, $, z) {
                const re = y(F, $, {
                    coerce: !0,
                    message: z
                });
                if (re[0]) throw re[0];
                return re[1]
            }

            function n(F, $, z) {
                const re = y(F, $, {
                    coerce: !0,
                    mask: !0,
                    message: z
                });
                if (re[0]) throw re[0];
                return re[1]
            }

            function l(F, $) {
                return !y(F, $)[0]
            }

            function y(F, $, z = {}) {
                const re = g(F, $, z),
                    pe = function r(F) {
                        const {
                            done: $,
                            value: z
                        } = F.next();
                        return $ ? void 0 : z
                    }(re);
                return pe[0] ? [new e(pe[0], function*() {
                    for (const Le of re) Le[0] && (yield Le[0])
                }), void 0] : [void 0, pe[1]]
            }

            function _(...F) {
                const $ = "type" === F[0].type,
                    z = F.map(pe => pe.schema),
                    re = Object.assign({}, ...z);
                return $ ? B(re) : ve(re)
            }

            function v(F, $) {
                return new c({
                    type: F,
                    schema: null,
                    validator: $
                })
            }

            function w(F, $) {
                return new c({ ...F,
                    refiner: (z, re) => void 0 === z || F.refiner(z, re),
                    validator: (z, re) => void 0 === z || ($(z, re), F.validator(z, re))
                })
            }

            function C(F) {
                return new c({
                    type: "dynamic",
                    schema: null,
                    * entries($, z) {
                        yield* F($, z).entries($, z)
                    },
                    validator: ($, z) => F($, z).validator($, z),
                    coercer: ($, z) => F($, z).coercer($, z),
                    refiner: ($, z) => F($, z).refiner($, z)
                })
            }

            function E(F) {
                let $;
                return new c({
                    type: "lazy",
                    schema: null,
                    * entries(z, re) {
                        $ ? ? ($ = F()), yield* $.entries(z, re)
                    },
                    validator: (z, re) => ($ ? ? ($ = F()), $.validator(z, re)),
                    coercer: (z, re) => ($ ? ? ($ = F()), $.coercer(z, re)),
                    refiner: (z, re) => ($ ? ? ($ = F()), $.refiner(z, re))
                })
            }

            function S(F, $) {
                const {
                    schema: z
                } = F, re = { ...z
                };
                for (const pe of $) delete re[pe];
                return "type" === F.type ? B(re) : ve(re)
            }

            function x(F) {
                const $ = F instanceof c,
                    z = $ ? { ...F.schema
                    } : { ...F
                    };
                for (const re in z) z[re] = _e(z[re]);
                return $ && "type" === F.type ? B(z) : ve(z)
            }

            function O(F, $) {
                const {
                    schema: z
                } = F, re = {};
                for (const pe of $) re[pe] = z[pe];
                return "type" === F.type ? B(re) : ve(re)
            }

            function I(F, $) {
                return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."), v(F, $)
            }

            function T() {
                return v("any", () => !0)
            }

            function k(F) {
                return new c({
                    type: "array",
                    schema: F,
                    * entries($) {
                        if (F && Array.isArray($))
                            for (const [z, re] of $.entries()) yield [z, re, F]
                    },
                    coercer: $ => Array.isArray($) ? $.slice() : $,
                    validator: $ => Array.isArray($) || `Expected an array value, but received: ${b($)}`
                })
            }

            function P() {
                return v("bigint", F => "bigint" == typeof F)
            }

            function Z() {
                return v("boolean", F => "boolean" == typeof F)
            }

            function ie() {
                return v("date", F => F instanceof Date && !isNaN(F.getTime()) || `Expected a valid \`Date\` object, but received: ${b(F)}`)
            }

            function se(F) {
                const $ = {},
                    z = F.map(re => b(re)).join();
                for (const re of F) $[re] = re;
                return new c({
                    type: "enums",
                    schema: $,
                    validator: re => F.includes(re) || `Expected one of \`${z}\`, but received: ${b(re)}`
                })
            }

            function ee() {
                return v("func", F => "function" == typeof F || `Expected a function, but received: ${b(F)}`)
            }

            function j(F) {
                return v("instance", $ => $ instanceof F || `Expected a \`${F.name}\` instance, but received: ${b($)}`)
            }

            function ne() {
                return v("integer", F => "number" == typeof F && !isNaN(F) && Number.isInteger(F) || `Expected an integer, but received: ${b(F)}`)
            }

            function Y(F) {
                return new c({
                    type: "intersection",
                    schema: null,
                    * entries($, z) {
                        for (const re of F) yield* re.entries($, z)
                    },
                    * validator($, z) {
                        for (const re of F) yield* re.validator($, z)
                    },
                    * refiner($, z) {
                        for (const re of F) yield* re.refiner($, z)
                    }
                })
            }

            function G(F) {
                const $ = b(F),
                    z = typeof F;
                return new c({
                    type: "literal",
                    schema: "string" === z || "number" === z || "boolean" === z ? F : null,
                    validator: re => re === F || `Expected the literal \`${$}\`, but received: ${b(re)}`
                })
            }

            function K(F, $) {
                return new c({
                    type: "map",
                    schema: null,
                    * entries(z) {
                        if (F && $ && z instanceof Map)
                            for (const [re, pe] of z.entries()) yield [re, re, F], yield [re, pe, $]
                    },
                    coercer: z => z instanceof Map ? new Map(z) : z,
                    validator: z => z instanceof Map || `Expected a \`Map\` object, but received: ${b(z)}`
                })
            }

            function X() {
                return v("never", () => !1)
            }

            function te(F) {
                return new c({ ...F,
                    validator: ($, z) => null === $ || F.validator($, z),
                    refiner: ($, z) => null === $ || F.refiner($, z)
                })
            }

            function de() {
                return v("number", F => "number" == typeof F && !isNaN(F) || `Expected a number, but received: ${b(F)}`)
            }

            function ve(F) {
                const $ = F ? Object.keys(F) : [],
                    z = X();
                return new c({
                    type: "object",
                    schema: F || null,
                    * entries(re) {
                        if (F && h(re)) {
                            const pe = new Set(Object.keys(re));
                            for (const Ce of $) pe.delete(Ce), yield [Ce, re[Ce], F[Ce]];
                            for (const Ce of pe) yield [Ce, re[Ce], z]
                        }
                    },
                    validator: re => h(re) || `Expected an object, but received: ${b(re)}`,
                    coercer: re => h(re) ? { ...re
                    } : re
                })
            }

            function _e(F) {
                return new c({ ...F,
                    validator: ($, z) => void 0 === $ || F.validator($, z),
                    refiner: ($, z) => void 0 === $ || F.refiner($, z)
                })
            }

            function Ee(F, $) {
                return new c({
                    type: "record",
                    schema: null,
                    * entries(z) {
                        if (h(z))
                            for (const re in z) {
                                const pe = z[re];
                                yield [re, re, F], yield [re, pe, $]
                            }
                    },
                    validator: z => h(z) || `Expected an object, but received: ${b(z)}`
                })
            }

            function xe() {
                return v("regexp", F => F instanceof RegExp)
            }

            function J(F) {
                return new c({
                    type: "set",
                    schema: null,
                    * entries($) {
                        if (F && $ instanceof Set)
                            for (const z of $) yield [z, z, F]
                    },
                    coercer: $ => $ instanceof Set ? new Set($) : $,
                    validator: $ => $ instanceof Set || `Expected a \`Set\` object, but received: ${b($)}`
                })
            }

            function H() {
                return v("string", F => "string" == typeof F || `Expected a string, but received: ${b(F)}`)
            }

            function D(F) {
                const $ = X();
                return new c({
                    type: "tuple",
                    schema: null,
                    * entries(z) {
                        if (Array.isArray(z)) {
                            const re = Math.max(F.length, z.length);
                            for (let pe = 0; pe < re; pe++) yield [pe, z[pe], F[pe] || $]
                        }
                    },
                    validator: z => Array.isArray(z) || `Expected an array, but received: ${b(z)}`
                })
            }

            function B(F) {
                const $ = Object.keys(F);
                return new c({
                    type: "type",
                    schema: F,
                    * entries(z) {
                        if (h(z))
                            for (const re of $) yield [re, z[re], F[re]]
                    },
                    validator: z => h(z) || `Expected an object, but received: ${b(z)}`,
                    coercer: z => h(z) ? { ...z
                    } : z
                })
            }

            function V(F) {
                const $ = F.map(z => z.type).join(" | ");
                return new c({
                    type: "union",
                    schema: null,
                    coercer(z) {
                        for (const re of F) {
                            const [pe, Ce] = re.validate(z, {
                                coerce: !0
                            });
                            if (!pe) return Ce
                        }
                        return z
                    },
                    validator(z, re) {
                        const pe = [];
                        for (const Ce of F) {
                            const [...Le] = g(z, Ce, re), [Be] = Le;
                            if (!Be[0]) return [];
                            for (const [De] of Le) De && pe.push(De)
                        }
                        return [`Expected the value to satisfy a union of \`${$}\`, but received: ${b(z)}`, ...pe]
                    }
                })
            }

            function N() {
                return v("unknown", () => !0)
            }

            function L(F, $, z) {
                return new c({ ...F,
                    coercer: (re, pe) => l(re, $) ? F.coercer(z(re, pe), pe) : F.coercer(re, pe)
                })
            }

            function U(F, $, z = {}) {
                return L(F, N(), re => {
                    const pe = "function" == typeof $ ? $() : $;
                    if (void 0 === re) return pe;
                    if (!z.strict && f(re) && f(pe)) {
                        const Ce = { ...re
                        };
                        let Le = !1;
                        for (const Be in pe) void 0 === Ce[Be] && (Ce[Be] = pe[Be], Le = !0);
                        if (Le) return Ce
                    }
                    return re
                })
            }

            function ae(F) {
                return L(F, H(), $ => $.trim())
            }

            function ye(F) {
                return Pe(F, "empty", $ => {
                    const z = me($);
                    return 0 === z || `Expected an empty ${F.type} but received one with a size of \`${z}\``
                })
            }

            function me(F) {
                return F instanceof Map || F instanceof Set ? F.size : F.length
            }

            function be(F, $, z = {}) {
                const {
                    exclusive: re
                } = z;
                return Pe(F, "max", pe => re ? pe < $ : pe <= $ || `Expected a ${F.type} less than ${re?"":"or equal to "}${$} but received \`${pe}\``)
            }

            function Ae(F, $, z = {}) {
                const {
                    exclusive: re
                } = z;
                return Pe(F, "min", pe => re ? pe > $ : pe >= $ || `Expected a ${F.type} greater than ${re?"":"or equal to "}${$} but received \`${pe}\``)
            }

            function he(F) {
                return Pe(F, "nonempty", $ => me($) > 0 || `Expected a nonempty ${F.type} but received an empty one`)
            }

            function Te(F, $) {
                return Pe(F, "pattern", z => $.test(z) || `Expected a ${F.type} matching \`/${$.source}/\` but received "${z}"`)
            }

            function Se(F, $, z = $) {
                const re = `Expected a ${F.type}`,
                    pe = $ === z ? `of \`${$}\`` : `between \`${$}\` and \`${z}\``;
                return Pe(F, "size", Ce => {
                    if ("number" == typeof Ce || Ce instanceof Date) return $ <= Ce && Ce <= z || `${re} ${pe} but received \`${Ce}\``;
                    if (Ce instanceof Map || Ce instanceof Set) {
                        const {
                            size: Le
                        } = Ce;
                        return $ <= Le && Le <= z || `${re} with a size ${pe} but received one with a size of \`${Le}\``
                    } {
                        const {
                            length: Le
                        } = Ce;
                        return $ <= Le && Le <= z || `${re} with a length ${pe} but received one with a length of \`${Le}\``
                    }
                })
            }

            function Pe(F, $, z) {
                return new c({ ...F,
                    * refiner(re, pe) {
                        yield* F.refiner(re, pe);
                        const Le = u(z(re, pe), pe, F, re);
                        for (const Be of Le) yield { ...Be,
                            refinement: $
                        }
                    }
                })
            }
        }
    }
]);