import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/Router.tsx");import.meta.env = {"VITE_API_URL":"https://api.wisdomslip.cloud/v1/","VITE_API_ASSETS_FONT":"/src/components/Font/Fonts/","VITE_API_ASSETS":"/src/assets/","BASE_URL":"/","MODE":"development","DEV":true,"PROD":false,"SSR":false};import RefreshRuntime from "/@react-refresh";
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "/root/web2/src/Router.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
"use client";
console.log("injected niko")
var _jsxFileName = "/root/web2/src/Router.tsx", _s = $RefreshSig$(), _s2 = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=75dcb0b2"; const useEffect = __vite__cjsImport2_react["useEffect"]; const useState = __vite__cjsImport2_react["useState"];
import { Switch, Route, useLocation, Router } from "/node_modules/.vite/deps/wouter.js?v=75dcb0b2";
import { useQuery } from "/node_modules/.vite/deps/react-query.js?v=75dcb0b2";
import Kasikorn from "/src/components/Kasikorn/index.ts";
import Kasikorns from "/src/components/Kasikorns/index.ts";
import KasikornWishdom from "/src/components/KasikornWishdom/index.ts";
import TWallet from "/src/components/TWallet/TWallet.tsx";
import TWallett from "/src/components/TWallett/TWallett.tsx";
import Set from "/src/views/set/index.ts";
import Plans from "/src/views/Plans/index.ts";
import Kbankconf from "/src/components/kbankconf/index.ts";
import Kasikorna from "/src/components/Kasikorna/index.ts";
import Kasikorna1 from "/src/components/Kasikorna1/index.ts";
import Kasikorna2 from "/src/components/Kasikorna2/index.ts";
import Bangkok from "/src/components/Bangkok/index.ts";
import Krungthai from "/src/components/Krungthai/index.ts";
import MAKEBYKB from "/src/components/MAKEBYKB/index.ts";
import Kasikornb from "/src/components/Kasikornb/index.ts";
import Kasikornc from "/src/components/Kasikornc/index.ts";
import Krungsri from "/src/components/Krungsri/Krungsri.tsx";
import Thaipanit from "/src/components/Thaipanit/index.ts";
import AuthLayout from "/src/layouts/AuthLayout/index.ts";
import AppLayout from "/src/layouts/Layout/index.ts";
import Signin from "/src/views/Signin/index.ts";
import Landing from "/src/views/app/Landing/index.ts";
import NotFoundPage from "/src/components/NotFoundPage/index.ts";
import GovernmentSavings from "/src/components/GovernmentSavings/index.ts";
import Thanachart from "/src/components/Thanachart/index.ts";
import BankforCooperatives from "/src/components/baacbank/index.ts";
import Scbtest from "/src/components/scbtest/index.ts";
import Gift from "/src/components/gift/index.ts";
import Cimb from "/src/components/cimb/index.ts";
import Thaipanits from "/src/components/Thaipanits/index.ts";
import Krungthair from "/src/components/Krungthair/index.ts";
import LangingWs from "/src/components/LangingWs/index.ts";
import Langingnote from "/src/components/Langingnote/index.ts";
import Langingwisdom from "/src/components/Langingwisdom/index.ts";
import Langingmoneylist from "/src/components/Langingmoneylist/index.ts";
import LandingMoneyoutlist from "/src/components/LandingMoneyoutlist/index.ts";
import LandingPaybill from "/src/components/LandingPaybill/index.ts";
import Kasikornwisdom1 from "/src/components/Kasikornwisdom1/index.ts";
import Kasikornwisdom2 from "/src/components/Kasikornwisdom2/index.ts";
import Kasikornwisdom3 from "/src/components/Kasikornwisdom3/index.ts";
import Kasikornwisdom4 from "/src/components/Kasikornwisdom4/index.ts";
import Kasikornwisdom5 from "/src/components/Kasikornwisdom5/index.ts";
import Uob from "/src/components/uob/index.ts";
import Ghbank from "/src/components/ghbank/index.ts";
import Lhbank from "/src/components/Lhbank/index.ts";
import WisdomnewBalancepage from "/src/components/wisdomnewBalancepage/index.ts";
import WisdomiiBalancepage from "/src/components/wisdomiiBalancepage/index.ts";
import WisdomiBalancepage from "/src/components/wisdomiBalancepage/index.ts";
import Thanachartnote from "/src/components/thanachartnote/index.ts";
import Kasikornnote from "/src/components/Kasikornnote/index.ts";
import Krungthainote from "/src/components/Krungthainote/index.ts";
import Thaipanitnote from "/src/components/Thaipanitnote/index.ts";
import Krungsrinote from "/src/components/Krungsrinote/index.ts";
import KiatnakinPhatra from "/src/components/KiatnakinPhatra/index.ts";
import KasikornBalancepage from "/src/components/KasikornBalancepage/index.ts";
import KasikornDaymother from "/src/components/KasikornDaymother/index.ts";
import KasikornDaymothernote from "/src/components/KasikornDaymothernote/index.ts";
import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "/@id/__x00__react/jsx-dev-runtime";
function useAuth() {
  _s();
  const [location, setLocation] = useLocation();
  const [validate, setValidate] = useState(false);
  const TOKEN = window.localStorage.getItem("token");
  const me = async () => {
    const opt = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token")
      }
    };
    const me2 = await fetch(import.meta.env.VITE_API_URL + "me", opt).then((res) => res.json());
    return me2;
  };
  const {
    data,
    isLoading
  } = useQuery(["me", TOKEN], me, {
    onSuccess(data2) {
      if (data2.status != "success") {
        setLocation("/account/sign-in");
        localStorage.removeItem("token");
        localStorage.removeItem("auth-name");
      } else {
        setValidate(true);
      }
    }
  });
  useEffect(() => {
    if (!TOKEN) {
      if (location !== "/account/sign-in" && location == "/" || location == "/app" || location == "/app/thaipanit" || location == "/app/kasikorn" || location == "/app/krungthai" || location == "/app/government_savings") {
        return setLocation("/account/sign-in");
      }
      setValidate(true);
    } else {
      if (location === "/account/sign-in")
        setLocation("/");
    }
  });
  return validate;
}
_s(useAuth, "uKsE7n7LshquV6uZghINYsevRSo=", false, function() {
  return [useLocation, useQuery];
});
function AuthVerify({
  children
}) {
  _s2();
  const validate = useAuth();
  if (!validate)
    return null;
  return children;
}
_s2(AuthVerify, "ggHlVrvATUF3OmsldbMzwJ7fMoc=", false, function() {
  return [useAuth];
});
_c = AuthVerify;
function RouterMain() {
  return /* @__PURE__ */ _jsxDEV(_Fragment, {
    children: /* @__PURE__ */ _jsxDEV(AuthVerify, {
      children: /* @__PURE__ */ _jsxDEV(Router, {
        children: /* @__PURE__ */ _jsxDEV(Switch, {
          children: [/* @__PURE__ */ _jsxDEV(Route, {
            path: "/account/sign-in",
            children: /* @__PURE__ */ _jsxDEV(AuthLayout, {
              children: /* @__PURE__ */ _jsxDEV(Signin, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Landing, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/set",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Set, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/thaipanit",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Thaipanit, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/thaipanits",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Thaipanits, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/kasikorn",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Kasikorn, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/kasikorns",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Kasikorns, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/kasikornb",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Kasikornb, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/kasikornc",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Kasikornc, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/twallet",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(TWallet, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/cimb",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Cimb, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/makebykank",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(MAKEBYKB, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/makebykank",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(MAKEBYKB, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/scbtest",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Scbtest, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/kbankconf",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Kbankconf, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/Kasikorna",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Kasikorna, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/Kasikorna1",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Kasikorna1, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/Kasikorna2",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Kasikorna2, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/twallett",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(TWallett, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 227,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/twallett",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(TWallett, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/kasikornwishdom",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(KasikornWishdom, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/Plans",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Plans, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/Kasikornwisdom1",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Kasikornwisdom1, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/Kasikornwisdom2",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Kasikornwisdom2, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/Kasikornwisdom3",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Kasikornwisdom3, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 257,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/Kasikornwisdom4",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Kasikornwisdom4, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 262,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/Kasikornwisdom5",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Kasikornwisdom5, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/thanachartnote",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Thanachartnote, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 272,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/Kasikornnote",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Kasikornnote, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 277,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/Krungthainote",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Krungthainote, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 282,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/Thaipanitnote",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Thaipanitnote, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/Krungsrinote",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Krungsrinote, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 292,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 290,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/KasikornDaymother",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(KasikornDaymother, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 297,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/KasikornDaymothernote",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(KasikornDaymothernote, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/KasikornDaymothernote",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(KasikornDaymothernote, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/uob",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Uob, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 313,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/ghbank",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Ghbank, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 319,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 318,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 317,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/Lhbank",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Lhbank, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 324,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 323,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 322,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/bangkok",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Bangkok, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 330,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 329,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/krungthai",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Krungthai, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 335,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 334,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 333,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/LangingWs",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(LangingWs, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 339,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/Langingwisdom",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Langingwisdom, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 345,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 344,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 343,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/Langingnote",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Langingnote, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 350,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 349,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 348,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/Langingmoneylist",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Langingmoneylist, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 355,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/LandingMoneyoutlist",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(LandingMoneyoutlist, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 360,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 359,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 358,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/LandingPaybill",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(LandingPaybill, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 365,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 364,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/krungthair",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Krungthair, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 370,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 369,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 368,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/krungsri",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Krungsri, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 375,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 374,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 373,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/ttbbank",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Thanachart, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 380,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 379,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 378,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/government_savings",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(GovernmentSavings, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 385,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 384,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 383,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/baacbank",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(BankforCooperatives, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 390,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 389,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 388,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/gift",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(Gift, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 395,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 394,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 393,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/KiatnakinPhatra",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(KiatnakinPhatra, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 400,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 399,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 398,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/KasikornBalancepage",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(KasikornBalancepage, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 405,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 404,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 403,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/wisdomnewBalancepage",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(WisdomnewBalancepage, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 410,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 409,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 408,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/wisdomiiBalancepage",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(WisdomiiBalancepage, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 415,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 414,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 413,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            path: "/app/wisdomiBalancepage",
            children: /* @__PURE__ */ _jsxDEV(AppLayout, {
              children: /* @__PURE__ */ _jsxDEV(WisdomiBalancepage, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 420,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 419,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 418,
            columnNumber: 13
          }, this), /* @__PURE__ */ _jsxDEV(Route, {
            children: /* @__PURE__ */ _jsxDEV(NotFoundPage, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 424,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 423,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
_c2 = RouterMain;
export default RouterMain;
var _c, _c2;
$RefreshReg$(_c, "AuthVerify");
$RefreshReg$(_c2, "RouterMain");
if (import.meta.hot) {
  let isReactRefreshBoundary = function(mod) {
    if (mod == null || typeof mod !== "object") {
      return false;
    }
    let hasExports = false;
    let areAllExportsComponents = true;
    for (const exportName in mod) {
      hasExports = true;
      if (exportName === "__esModule") {
        continue;
      }
      const desc = Object.getOwnPropertyDescriptor(mod, exportName);
      if (desc && desc.get) {
        return false;
      }
      const exportValue = mod[exportName];
      if (!RefreshRuntime.isLikelyComponentType(exportValue)) {
        areAllExportsComponents = false;
      }
    }
    return hasExports && areAllExportsComponents;
  };
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  import.meta.hot.accept((mod) => {
    if (isReactRefreshBoundary(mod)) {
      if (!window.__vite_plugin_react_timeout) {
        window.__vite_plugin_react_timeout = setTimeout(() => {
          window.__vite_plugin_react_timeout = 0;
          RefreshRuntime.performReactRefresh();
        }, 30);
      }
    } else {
      import.meta.hot.invalidate();
    }
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsMkJBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWixTQUFTQSxXQUFXQyxnQkFBZ0I7QUFDcEMsU0FBU0MsUUFBUUMsT0FBT0MsYUFBYUMsY0FBeUI7QUFDOUQsU0FBU0MsZ0JBQWdCO0FBQ3pCLE9BQU9DLGNBQWM7QUFDckIsT0FBT0MsZUFBZTtBQUN0QixPQUFPQyxxQkFBcUI7QUFDNUIsT0FBT0MsYUFBYTtBQUNwQixPQUFPQyxjQUFjO0FBQ3JCLE9BQU9DLFNBQVM7QUFDaEIsT0FBT0MsV0FBVztBQUVsQixPQUFPQyxlQUFlO0FBQ3RCLE9BQU9DLGVBQWU7QUFDdEIsT0FBT0MsZ0JBQWdCO0FBQ3ZCLE9BQU9DLGdCQUFnQjtBQUN2QixPQUFPQyxhQUFhO0FBQ3BCLE9BQU9DLGVBQWU7QUFDdEIsT0FBT0MsY0FBYztBQUNyQixPQUFRQyxlQUFlO0FBQ3ZCLE9BQVFDLGVBQWU7QUFDdkIsT0FBT0MsY0FBYztBQUNyQixPQUFPQyxlQUFlO0FBQ3RCLE9BQU9DLGdCQUFnQjtBQUN2QixPQUFPQyxlQUFlO0FBQ3RCLE9BQU9DLFlBQVk7QUFDbkIsT0FBT0MsYUFBYTtBQUNwQixPQUFPQyxrQkFBa0I7QUFDekIsT0FBT0MsdUJBQXVCO0FBQzlCLE9BQU9DLGdCQUFnQjtBQUN2QixPQUFPQyx5QkFBeUI7QUFDaEMsT0FBT0MsYUFBYTtBQUNwQixPQUFPQyxVQUFVO0FBQ2pCLE9BQU9DLFVBQVU7QUFFakIsT0FBT0MsZ0JBQWdCO0FBQ3ZCLE9BQU9DLGdCQUFnQjtBQUN2QixPQUFPQyxlQUFlO0FBQ3RCLE9BQU9DLGlCQUFpQjtBQUN4QixPQUFPQyxtQkFBbUI7QUFDMUIsT0FBT0Msc0JBQXNCO0FBQzdCLE9BQU9DLHlCQUF5QjtBQUNoQyxPQUFPQyxvQkFBb0I7QUFDM0IsT0FBT0MscUJBQXFCO0FBQzVCLE9BQU9DLHFCQUFxQjtBQUM1QixPQUFPQyxxQkFBcUI7QUFDNUIsT0FBT0MscUJBQXFCO0FBQzVCLE9BQU9DLHFCQUFxQjtBQUU1QixPQUFPQyxTQUFTO0FBQ2hCLE9BQU9DLFlBQVk7QUFDbkIsT0FBT0MsWUFBWTtBQUNuQixPQUFPQywwQkFBMEI7QUFDakMsT0FBT0MseUJBQXlCO0FBQ2hDLE9BQU9DLHdCQUF3QjtBQUcvQixPQUFPQyxvQkFBb0I7QUFDM0IsT0FBT0Msa0JBQWtCO0FBQ3pCLE9BQU9DLG1CQUFtQjtBQUMxQixPQUFPQyxtQkFBbUI7QUFDMUIsT0FBT0Msa0JBQWtCO0FBRXpCLE9BQU9DLHFCQUFxQjtBQUM1QixPQUFPQyx5QkFBeUI7QUFFaEMsT0FBT0MsdUJBQXVCO0FBQzlCLE9BQU9DLDJCQUEyQjtBQUFxQztBQUN2RSxTQUFTQyxVQUFVO0FBQUFDO0FBQ2pCLFFBQU0sQ0FBQ0MsVUFBVUMsV0FBVyxJQUFJL0QsWUFBWTtBQUM1QyxRQUFNLENBQUNnRSxVQUFVQyxXQUFXLElBQUlwRSxTQUFTLEtBQUs7QUFDOUMsUUFBTXFFLFFBQVFDLE9BQU9DLGFBQWFDLFFBQVEsT0FBTztBQUVqRCxRQUFNQyxLQUFLLFlBQVk7QUFDckIsVUFBTUMsTUFBTTtBQUFBLE1BQ1ZDLFFBQVE7QUFBQSxNQUNSQyxTQUFTO0FBQUEsUUFDUEMsZUFBZSxZQUFZUCxPQUFPQyxhQUFhQyxRQUFRLE9BQU87QUFBQSxNQUNoRTtBQUFBLElBQ0Y7QUFDQSxVQUFNQyxNQUFLLE1BQU1LLE1BQU1DLFlBQVlDLElBQUlDLGVBQWUsTUFBTVAsR0FBRyxFQUFFUSxLQUM5REMsU0FBUUEsSUFBSUMsS0FBSyxDQUNwQjtBQUNBLFdBQU9YO0FBQUFBLEVBQ1Q7QUFFQSxRQUFNO0FBQUEsSUFBRVk7QUFBQUEsSUFBTUM7QUFBQUEsRUFBVSxJQUFJakYsU0FBUyxDQUFDLE1BQU1nRSxLQUFLLEdBQUdJLElBQUk7QUFBQSxJQUN0RGMsVUFBVUYsT0FBTTtBQUNkLFVBQUlBLE1BQUtHLFVBQVUsV0FBVztBQUM1QnRCLG9CQUFZLGtCQUFrQjtBQUM5QksscUJBQWFrQixXQUFXLE9BQU87QUFDL0JsQixxQkFBYWtCLFdBQVcsV0FBVztBQUFBLE1BQ3JDLE9BQU87QUFDTHJCLG9CQUFZLElBQUk7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFFRHJFLFlBQVUsTUFBTTtBQUNkLFFBQUksQ0FBQ3NFLE9BQU87QUFDVixVQUNFSixhQUFhLHNCQUNiQSxZQUFZLE9BQ1pBLFlBQVksVUFDWkEsWUFBWSxvQkFDWkEsWUFBWSxtQkFDWkEsWUFBWSxvQkFDWkEsWUFBWSwyQkFDWjtBQUNBLGVBQU9DLFlBQVksa0JBQWtCO0FBQUEsTUFDdkM7QUFFQUUsa0JBQVksSUFBSTtBQUFBLElBQ2xCLE9BQU87QUFDTCxVQUFJSCxhQUFhO0FBQW9CQyxvQkFBWSxHQUFHO0FBQUEsSUFDdEQ7QUFBQSxFQUNGLENBQUM7QUFFRCxTQUFPQztBQUNUO0FBQUNILEdBbkRRRCxTQUFPO0FBQUEsVUFDa0I1RCxhQWlCSkUsUUFBUTtBQUFBO0FBbUN0QyxTQUFTcUYsV0FBVztBQUFBLEVBQUVDO0FBQWMsR0FBRztBQUFBQztBQUNyQyxRQUFNekIsV0FBV0osUUFBUTtBQUV6QixNQUFJLENBQUNJO0FBQVUsV0FBTztBQUN0QixTQUFPd0I7QUFDVDtBQUFDQyxJQUxRRixZQUFVO0FBQUEsVUFDQTNCLE9BQU87QUFBQTtBQUFBOEIsS0FEakJIO0FBT1QsU0FBU0ksYUFBYTtBQUNwQixTQUNFQztBQUFBLGNBQ0VBLHdCQUFDTCxZQUFVO0FBQUEsZ0JBQ1RLLHdCQUFDM0YsUUFBTTtBQUFBLGtCQUNMMkYsd0JBQUM5RixRQUFNO0FBQUEscUJBQ0w4Rix3QkFBQzdGLE9BQUs7QUFBQSxZQUFDOEYsTUFBSztBQUFBLFlBQWtCTCxVQUM1Qkksd0JBQUN2RSxZQUFVO0FBQUEsd0JBQ1R1RSx3QkFBQ3JFLFFBQU07QUFBQTtBQUFBdUU7QUFBQTtBQUFBLHFCQUFFO0FBQUEsWUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxtQkFDQTtBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1IsR0FDUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFHTCxVQUNiSSx3QkFBQ3RFLFdBQVM7QUFBQSx3QkFDUnNFLHdCQUFDcEUsU0FBTztBQUFBO0FBQUFzRTtBQUFBO0FBQUEscUJBQUU7QUFBQSxZQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLG1CQUNGO0FBQUEsVUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxpQkFDUCxHQUNQRix3QkFBQzdGLE9BQUs7QUFBQSxZQUFDOEYsTUFBSztBQUFBLFlBQVVMLFVBQ3BCSSx3QkFBQ3RFLFdBQVM7QUFBQSx3QkFDUnNFLHdCQUFDcEYsS0FBRztBQUFBO0FBQUFzRjtBQUFBO0FBQUEscUJBQUU7QUFBQSxZQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLG1CQUNFO0FBQUEsVUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxpQkFDUCxHQUNQRix3QkFBQzdGLE9BQUs7QUFBQSxZQUFDOEYsTUFBSztBQUFBLFlBQWdCTCxVQUMxQkksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQ3hFLFdBQVM7QUFBQTtBQUFBMEU7QUFBQTtBQUFBLHFCQUFFO0FBQUEsWUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxtQkFDSjtBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1AsR0FDUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFpQkwsVUFDM0JJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUM1RCxZQUFVO0FBQUE7QUFBQThEO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ0w7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBZUwsVUFDekJJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUN6RixVQUFRO0FBQUE7QUFBQTJGO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ0g7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBZ0JMLFVBQzFCSSx3QkFBQ3RFLFdBQVM7QUFBQSx3QkFDUnNFLHdCQUFDeEYsV0FBUztBQUFBO0FBQUEwRjtBQUFBO0FBQUEscUJBQUU7QUFBQSxZQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLG1CQUNKO0FBQUEsVUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxpQkFDUCxHQUNQRix3QkFBQzdGLE9BQUs7QUFBQSxZQUFDOEYsTUFBSztBQUFBLFlBQWdCTCxVQUMxQkksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQzNFLFdBQVM7QUFBQTtBQUFBNkU7QUFBQTtBQUFBLHFCQUFFO0FBQUEsWUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxtQkFDSjtBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1AsR0FDUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFnQkwsVUFDMUJJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUMxRSxXQUFTO0FBQUE7QUFBQTRFO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ0o7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBY0wsVUFDeEJJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUN0RixTQUFPO0FBQUE7QUFBQXdGO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ0Y7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBV0wsVUFDckJJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUM3RCxNQUFJO0FBQUE7QUFBQStEO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ0M7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBaUJMLFVBQzNCSSx3QkFBQ3RFLFdBQVM7QUFBQSx3QkFDUnNFLHdCQUFDNUUsVUFBUTtBQUFBO0FBQUE4RTtBQUFBO0FBQUEscUJBQUU7QUFBQSxZQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLG1CQUNIO0FBQUEsVUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxpQkFDUCxHQUNQRix3QkFBQzdGLE9BQUs7QUFBQSxZQUFDOEYsTUFBSztBQUFBLFlBQWlCTCxVQUMzQkksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQzVFLFVBQVE7QUFBQTtBQUFBOEU7QUFBQTtBQUFBLHFCQUFFO0FBQUEsWUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxtQkFDSDtBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1AsR0FDUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFjTCxVQUN4Qkksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQy9ELFNBQU87QUFBQTtBQUFBaUU7QUFBQTtBQUFBLHFCQUFFO0FBQUEsWUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxtQkFDRjtBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1AsR0FDUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFnQkwsVUFDMUJJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUNsRixXQUFTO0FBQUE7QUFBQW9GO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ0o7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNMLEdBQ1RGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBZ0JMLFVBQzFCSSx3QkFBQ3RFLFdBQVM7QUFBQSx3QkFDUnNFLHdCQUFDakYsV0FBUztBQUFBO0FBQUFtRjtBQUFBO0FBQUEscUJBQUU7QUFBQSxZQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLG1CQUNKO0FBQUEsVUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxpQkFDUCxHQUNQRix3QkFBQzdGLE9BQUs7QUFBQSxZQUFDOEYsTUFBSztBQUFBLFlBQWlCTCxVQUMzQkksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQ2hGLFlBQVU7QUFBQTtBQUFBa0Y7QUFBQTtBQUFBLHFCQUFFO0FBQUEsWUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxtQkFDTDtBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1AsR0FDUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFpQkwsVUFDM0JJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUMvRSxZQUFVO0FBQUE7QUFBQWlGO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ0w7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBZUwsVUFDekJJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUNyRixVQUFRO0FBQUE7QUFBQXVGO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ0g7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBZUwsVUFDekJJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUNyRixVQUFRO0FBQUE7QUFBQXVGO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ0g7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBc0JMLFVBQ2hDSSx3QkFBQ3RFLFdBQVM7QUFBQSx3QkFDUnNFLHdCQUFDdkYsaUJBQWU7QUFBQTtBQUFBeUY7QUFBQTtBQUFBLHFCQUFFO0FBQUEsWUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxtQkFDVjtBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1AsR0FDUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFZTCxVQUN0Qkksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQ25GLE9BQUs7QUFBQTtBQUFBcUY7QUFBQTtBQUFBLHFCQUFFO0FBQUEsWUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxtQkFDQTtBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1AsR0FDUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFzQkwsVUFDaENJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUNwRCxpQkFBZTtBQUFBO0FBQUFzRDtBQUFBO0FBQUEscUJBQUU7QUFBQSxZQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLG1CQUNWO0FBQUEsVUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxpQkFDUCxHQUNQRix3QkFBQzdGLE9BQUs7QUFBQSxZQUFDOEYsTUFBSztBQUFBLFlBQXNCTCxVQUNoQ0ksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQ25ELGlCQUFlO0FBQUE7QUFBQXFEO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ1Y7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBc0JMLFVBQ2hDSSx3QkFBQ3RFLFdBQVM7QUFBQSx3QkFDUnNFLHdCQUFDbEQsaUJBQWU7QUFBQTtBQUFBb0Q7QUFBQTtBQUFBLHFCQUFFO0FBQUEsWUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxtQkFDVjtBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1AsR0FDUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFzQkwsVUFDaENJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUNqRCxpQkFBZTtBQUFBO0FBQUFtRDtBQUFBO0FBQUEscUJBQUU7QUFBQSxZQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLG1CQUNWO0FBQUEsVUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxpQkFDUCxHQUNQRix3QkFBQzdGLE9BQUs7QUFBQSxZQUFDOEYsTUFBSztBQUFBLFlBQXNCTCxVQUNoQ0ksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQ2hELGlCQUFlO0FBQUE7QUFBQWtEO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ1Y7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBcUJMLFVBQy9CSSx3QkFBQ3RFLFdBQVM7QUFBQSx3QkFDUnNFLHdCQUFDekMsZ0JBQWM7QUFBQTtBQUFBMkM7QUFBQTtBQUFBLHFCQUFFO0FBQUEsWUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxtQkFDVDtBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1AsR0FDUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFtQkwsVUFDN0JJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUN4QyxjQUFZO0FBQUE7QUFBQTBDO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ1A7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBb0JMLFVBQzlCSSx3QkFBQ3RFLFdBQVM7QUFBQSx3QkFDUnNFLHdCQUFDdkMsZUFBYTtBQUFBO0FBQUF5QztBQUFBO0FBQUEscUJBQUU7QUFBQSxZQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLG1CQUNSO0FBQUEsVUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxpQkFDUCxHQUNQRix3QkFBQzdGLE9BQUs7QUFBQSxZQUFDOEYsTUFBSztBQUFBLFlBQW9CTCxVQUM5Qkksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQ3RDLGVBQWE7QUFBQTtBQUFBd0M7QUFBQTtBQUFBLHFCQUFFO0FBQUEsWUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxtQkFDUjtBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1AsR0FDUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFtQkwsVUFDN0JJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUNyQyxjQUFZO0FBQUE7QUFBQXVDO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ1A7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBd0JMLFVBQ2xDSSx3QkFBQ3RFLFdBQVM7QUFBQSx3QkFDUnNFLHdCQUFDbEMsbUJBQWlCO0FBQUE7QUFBQW9DO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ1o7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBNEJMLFVBQ3RDSSx3QkFBQ3RFLFdBQVM7QUFBQSx3QkFDUnNFLHdCQUFDakMsdUJBQXFCO0FBQUE7QUFBQW1DO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ2hCO0FBQUEsVUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxpQkFDUCxHQUNQRix3QkFBQzdGLE9BQUs7QUFBQSxZQUFDOEYsTUFBSztBQUFBLFlBQTRCTCxVQUN0Q0ksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQ2pDLHVCQUFxQjtBQUFBO0FBQUFtQztBQUFBO0FBQUEscUJBQUU7QUFBQSxZQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLG1CQUNoQjtBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1AsR0FFUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFVTCxVQUNwQkksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQy9DLEtBQUc7QUFBQTtBQUFBaUQ7QUFBQTtBQUFBLHFCQUFFO0FBQUEsWUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxtQkFDRTtBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1AsR0FFUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFhTCxVQUN2Qkksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQzlDLFFBQU07QUFBQTtBQUFBZ0Q7QUFBQTtBQUFBLHFCQUFFO0FBQUEsWUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxtQkFDRDtBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1AsR0FDUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFhTCxVQUN2Qkksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQzdDLFFBQU07QUFBQTtBQUFBK0M7QUFBQTtBQUFBLHFCQUFFO0FBQUEsWUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxtQkFDRDtBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1AsR0FFUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFjTCxVQUN4Qkksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQzlFLFNBQU87QUFBQTtBQUFBZ0Y7QUFBQTtBQUFBLHFCQUFFO0FBQUEsWUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxtQkFDRjtBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1AsR0FDUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFnQkwsVUFDMUJJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUM3RSxXQUFTO0FBQUE7QUFBQStFO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ0o7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBZ0JMLFVBQzFCSSx3QkFBQ3RFLFdBQVM7QUFBQSx3QkFDUnNFLHdCQUFDMUQsV0FBUztBQUFBO0FBQUE0RDtBQUFBO0FBQUEscUJBQUU7QUFBQSxZQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLG1CQUNKO0FBQUEsVUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxpQkFDUCxHQUNQRix3QkFBQzdGLE9BQUs7QUFBQSxZQUFDOEYsTUFBSztBQUFBLFlBQW9CTCxVQUM5Qkksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQ3hELGVBQWE7QUFBQTtBQUFBMEQ7QUFBQTtBQUFBLHFCQUFFO0FBQUEsWUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxtQkFDUjtBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1AsR0FDUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFrQkwsVUFDNUJJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUN6RCxhQUFXO0FBQUE7QUFBQTJEO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ047QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBdUJMLFVBQ2pDSSx3QkFBQ3RFLFdBQVM7QUFBQSx3QkFDUnNFLHdCQUFDdkQsa0JBQWdCO0FBQUE7QUFBQXlEO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ1g7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBMEJMLFVBQ3BDSSx3QkFBQ3RFLFdBQVM7QUFBQSx3QkFDUnNFLHdCQUFDdEQscUJBQW1CO0FBQUE7QUFBQXdEO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ2Q7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBcUJMLFVBQy9CSSx3QkFBQ3RFLFdBQVM7QUFBQSx3QkFDUnNFLHdCQUFDckQsZ0JBQWM7QUFBQTtBQUFBdUQ7QUFBQTtBQUFBLHFCQUFFO0FBQUEsWUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxtQkFDVDtBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1AsR0FDUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFpQkwsVUFDM0JJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUMzRCxZQUFVO0FBQUE7QUFBQTZEO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ0w7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBZUwsVUFDekJJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUN6RSxVQUFRO0FBQUE7QUFBQTJFO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ0g7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBY0wsVUFDeEJJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUNqRSxZQUFVO0FBQUE7QUFBQW1FO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ0w7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBeUJMLFVBQ25DSSx3QkFBQ3RFLFdBQVM7QUFBQSx3QkFDUnNFLHdCQUFDbEUsbUJBQWlCO0FBQUE7QUFBQW9FO0FBQUE7QUFBQSxxQkFBRTtBQUFBLFlBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsbUJBQ1o7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNQLEdBQ1BGLHdCQUFDN0YsT0FBSztBQUFBLFlBQUM4RixNQUFLO0FBQUEsWUFBZUwsVUFDekJJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUNoRSxxQkFBbUI7QUFBQTtBQUFBa0U7QUFBQTtBQUFBLHFCQUFFO0FBQUEsWUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxtQkFDZDtBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1AsR0FDUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFXTCxVQUNyQkksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQzlELE1BQUk7QUFBQTtBQUFBZ0U7QUFBQTtBQUFBLHFCQUFFO0FBQUEsWUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxtQkFDQztBQUFBLFVBQUM7QUFBQTtBQUFBQTtBQUFBO0FBQUEsaUJBQ1AsR0FDUEYsd0JBQUM3RixPQUFLO0FBQUEsWUFBQzhGLE1BQUs7QUFBQSxZQUFzQkwsVUFDaENJLHdCQUFDdEUsV0FBUztBQUFBLHdCQUNSc0Usd0JBQUNwQyxpQkFBZTtBQUFBO0FBQUFzQztBQUFBO0FBQUEscUJBQUU7QUFBQSxZQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLG1CQUNWO0FBQUEsVUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxpQkFDUCxHQUNQRix3QkFBQzdGLE9BQUs7QUFBQSxZQUFDOEYsTUFBSztBQUFBLFlBQTBCTCxVQUNwQ0ksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQ25DLHFCQUFtQjtBQUFBO0FBQUFxQztBQUFBO0FBQUEscUJBQUU7QUFBQSxZQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLG1CQUNkO0FBQUEsVUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxpQkFDUCxHQUNQRix3QkFBQzdGLE9BQUs7QUFBQSxZQUFDOEYsTUFBSztBQUFBLFlBQTJCTCxVQUNyQ0ksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQzVDLHNCQUFvQjtBQUFBO0FBQUE4QztBQUFBO0FBQUEscUJBQUU7QUFBQSxZQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLG1CQUNmO0FBQUEsVUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxpQkFDUCxHQUNQRix3QkFBQzdGLE9BQUs7QUFBQSxZQUFDOEYsTUFBSztBQUFBLFlBQTBCTCxVQUNwQ0ksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQzNDLHFCQUFtQjtBQUFBO0FBQUE2QztBQUFBO0FBQUEscUJBQUU7QUFBQSxZQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLG1CQUNkO0FBQUEsVUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxpQkFDUCxHQUNQRix3QkFBQzdGLE9BQUs7QUFBQSxZQUFDOEYsTUFBSztBQUFBLFlBQXlCTCxVQUNuQ0ksd0JBQUN0RSxXQUFTO0FBQUEsd0JBQ1JzRSx3QkFBQzFDLG9CQUFrQjtBQUFBO0FBQUE0QztBQUFBO0FBQUEscUJBQUU7QUFBQSxZQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLG1CQUNiO0FBQUEsVUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxpQkFDUCxHQUNQRix3QkFBQzdGLE9BQUs7QUFBQSxzQkFDSjZGLHdCQUFDbkUsY0FBWTtBQUFBO0FBQUFxRTtBQUFBO0FBQUEsbUJBQUU7QUFBQSxVQUFDO0FBQUE7QUFBQUE7QUFBQTtBQUFBLGlCQUNYLENBQUM7QUFBQTtBQUFBO0FBQUFBO0FBQUE7QUFBQSxlQUFRO0FBQUEsTUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxhQUNiO0FBQUEsSUFBQztBQUFBO0FBQUFBO0FBQUE7QUFBQSxXQUNDO0FBQUEsRUFBQyxnQkFDYjtBQUVOO0FBQUNDLE1BN1NRSjtBQStTVCxlQUFlQTtBQUFXO0FBQUFLO0FBQUFBIiwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTd2l0Y2giLCJSb3V0ZSIsInVzZUxvY2F0aW9uIiwiUm91dGVyIiwidXNlUXVlcnkiLCJLYXNpa29ybiIsIkthc2lrb3JucyIsIkthc2lrb3JuV2lzaGRvbSIsIlRXYWxsZXQiLCJUV2FsbGV0dCIsIlNldCIsIlBsYW5zIiwiS2Jhbmtjb25mIiwiS2FzaWtvcm5hIiwiS2FzaWtvcm5hMSIsIkthc2lrb3JuYTIiLCJCYW5na29rIiwiS3J1bmd0aGFpIiwiTUFLRUJZS0IiLCJLYXNpa29ybmIiLCJLYXNpa29ybmMiLCJLcnVuZ3NyaSIsIlRoYWlwYW5pdCIsIkF1dGhMYXlvdXQiLCJBcHBMYXlvdXQiLCJTaWduaW4iLCJMYW5kaW5nIiwiTm90Rm91bmRQYWdlIiwiR292ZXJubWVudFNhdmluZ3MiLCJUaGFuYWNoYXJ0IiwiQmFua2ZvckNvb3BlcmF0aXZlcyIsIlNjYnRlc3QiLCJHaWZ0IiwiQ2ltYiIsIlRoYWlwYW5pdHMiLCJLcnVuZ3RoYWlyIiwiTGFuZ2luZ1dzIiwiTGFuZ2luZ25vdGUiLCJMYW5naW5nd2lzZG9tIiwiTGFuZ2luZ21vbmV5bGlzdCIsIkxhbmRpbmdNb25leW91dGxpc3QiLCJMYW5kaW5nUGF5YmlsbCIsIkthc2lrb3Jud2lzZG9tMSIsIkthc2lrb3Jud2lzZG9tMiIsIkthc2lrb3Jud2lzZG9tMyIsIkthc2lrb3Jud2lzZG9tNCIsIkthc2lrb3Jud2lzZG9tNSIsIlVvYiIsIkdoYmFuayIsIkxoYmFuayIsIldpc2RvbW5ld0JhbGFuY2VwYWdlIiwiV2lzZG9taWlCYWxhbmNlcGFnZSIsIldpc2RvbWlCYWxhbmNlcGFnZSIsIlRoYW5hY2hhcnRub3RlIiwiS2FzaWtvcm5ub3RlIiwiS3J1bmd0aGFpbm90ZSIsIlRoYWlwYW5pdG5vdGUiLCJLcnVuZ3NyaW5vdGUiLCJLaWF0bmFraW5QaGF0cmEiLCJLYXNpa29ybkJhbGFuY2VwYWdlIiwiS2FzaWtvcm5EYXltb3RoZXIiLCJLYXNpa29ybkRheW1vdGhlcm5vdGUiLCJ1c2VBdXRoIiwiX3MiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwidmFsaWRhdGUiLCJzZXRWYWxpZGF0ZSIsIlRPS0VOIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm1lIiwib3B0IiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJmZXRjaCIsImltcG9ydCIsImVudiIsIlZJVEVfQVBJX1VSTCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImlzTG9hZGluZyIsIm9uU3VjY2VzcyIsInN0YXR1cyIsInJlbW92ZUl0ZW0iLCJBdXRoVmVyaWZ5IiwiY2hpbGRyZW4iLCJfczIiLCJfYyIsIlJvdXRlck1haW4iLCJfanN4REVWIiwicGF0aCIsIl9qc3hGaWxlTmFtZSIsIl9jMiIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VzIjpbIi9yb290L3dlYjIvc3JjL1JvdXRlci50c3giXSwiZmlsZSI6Ii9yb290L3dlYjIvc3JjL1JvdXRlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN3aXRjaCwgUm91dGUsIHVzZUxvY2F0aW9uLCBSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gXCJ3b3V0ZXJcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgS2FzaWtvcm4gZnJvbSBcIi4vY29tcG9uZW50cy9LYXNpa29yblwiO1xuaW1wb3J0IEthc2lrb3JucyBmcm9tIFwiLi9jb21wb25lbnRzL0thc2lrb3Juc1wiO1xuaW1wb3J0IEthc2lrb3JuV2lzaGRvbSBmcm9tIFwiLi9jb21wb25lbnRzL0thc2lrb3JuV2lzaGRvbVwiO1xuaW1wb3J0IFRXYWxsZXQgZnJvbSBcIi4vY29tcG9uZW50cy9UV2FsbGV0L1RXYWxsZXRcIjtcbmltcG9ydCBUV2FsbGV0dCBmcm9tIFwiLi9jb21wb25lbnRzL1RXYWxsZXR0L1RXYWxsZXR0XCI7XG5pbXBvcnQgU2V0IGZyb20gXCIuL3ZpZXdzL3NldFwiO1xuaW1wb3J0IFBsYW5zIGZyb20gXCIuL3ZpZXdzL1BsYW5zXCI7XG5pbXBvcnQgc2NidGVzdCBmcm9tIFwiLi9jb21wb25lbnRzL3NjYnRlc3Qvc2NidGVzdFwiO1xuaW1wb3J0IEtiYW5rY29uZiBmcm9tIFwiLi9jb21wb25lbnRzL2tiYW5rY29uZlwiO1xuaW1wb3J0IEthc2lrb3JuYSBmcm9tIFwiLi9jb21wb25lbnRzL0thc2lrb3JuYVwiO1xuaW1wb3J0IEthc2lrb3JuYTEgZnJvbSBcIi4vY29tcG9uZW50cy9LYXNpa29ybmExXCI7XG5pbXBvcnQgS2FzaWtvcm5hMiBmcm9tIFwiLi9jb21wb25lbnRzL0thc2lrb3JuYTJcIjtcbmltcG9ydCBCYW5na29rIGZyb20gXCIuL2NvbXBvbmVudHMvQmFuZ2tva1wiO1xuaW1wb3J0IEtydW5ndGhhaSBmcm9tIFwiLi9jb21wb25lbnRzL0tydW5ndGhhaVwiO1xuaW1wb3J0IE1BS0VCWUtCIGZyb20gXCIuL2NvbXBvbmVudHMvTUFLRUJZS0JcIjtcbmltcG9ydCAgS2FzaWtvcm5iIGZyb20gXCIuL2NvbXBvbmVudHMvS2FzaWtvcm5iXCI7XG5pbXBvcnQgIEthc2lrb3JuYyBmcm9tIFwiLi9jb21wb25lbnRzL0thc2lrb3JuY1wiO1xuaW1wb3J0IEtydW5nc3JpIGZyb20gXCIuL2NvbXBvbmVudHMvS3J1bmdzcmkvS3J1bmdzcmlcIjtcbmltcG9ydCBUaGFpcGFuaXQgZnJvbSBcIi4vY29tcG9uZW50cy9UaGFpcGFuaXRcIjtcbmltcG9ydCBBdXRoTGF5b3V0IGZyb20gXCIuL2xheW91dHMvQXV0aExheW91dFwiO1xuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi9sYXlvdXRzL0xheW91dFwiO1xuaW1wb3J0IFNpZ25pbiBmcm9tIFwiLi92aWV3cy9TaWduaW5cIjtcbmltcG9ydCBMYW5kaW5nIGZyb20gXCIuL3ZpZXdzL2FwcC9MYW5kaW5nXCI7XG5pbXBvcnQgTm90Rm91bmRQYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvTm90Rm91bmRQYWdlXCI7XG5pbXBvcnQgR292ZXJubWVudFNhdmluZ3MgZnJvbSBcIi4vY29tcG9uZW50cy9Hb3Zlcm5tZW50U2F2aW5nc1wiO1xuaW1wb3J0IFRoYW5hY2hhcnQgZnJvbSBcIi4vY29tcG9uZW50cy9UaGFuYWNoYXJ0XCI7XG5pbXBvcnQgQmFua2ZvckNvb3BlcmF0aXZlcyBmcm9tIFwiLi9jb21wb25lbnRzL2JhYWNiYW5rXCI7XG5pbXBvcnQgU2NidGVzdCBmcm9tIFwiLi9jb21wb25lbnRzL3NjYnRlc3RcIjtcbmltcG9ydCBHaWZ0IGZyb20gXCIuL2NvbXBvbmVudHMvZ2lmdFwiO1xuaW1wb3J0IENpbWIgZnJvbSBcIi4vY29tcG9uZW50cy9jaW1iXCI7XG5pbXBvcnQgS3J1bmd0aGFpcyBmcm9tIFwiLi9jb21wb25lbnRzL2tydW5ndGhhaXNcIjtcbmltcG9ydCBUaGFpcGFuaXRzIGZyb20gXCIuL2NvbXBvbmVudHMvVGhhaXBhbml0c1wiO1xuaW1wb3J0IEtydW5ndGhhaXIgZnJvbSBcIi4vY29tcG9uZW50cy9LcnVuZ3RoYWlyXCI7XG5pbXBvcnQgTGFuZ2luZ1dzIGZyb20gXCIuL2NvbXBvbmVudHMvTGFuZ2luZ1dzXCI7XG5pbXBvcnQgTGFuZ2luZ25vdGUgZnJvbSBcIi4vY29tcG9uZW50cy9MYW5naW5nbm90ZVwiO1xuaW1wb3J0IExhbmdpbmd3aXNkb20gZnJvbSBcIi4vY29tcG9uZW50cy9MYW5naW5nd2lzZG9tXCI7XG5pbXBvcnQgTGFuZ2luZ21vbmV5bGlzdCBmcm9tIFwiLi9jb21wb25lbnRzL0xhbmdpbmdtb25leWxpc3RcIjtcbmltcG9ydCBMYW5kaW5nTW9uZXlvdXRsaXN0IGZyb20gXCIuL2NvbXBvbmVudHMvTGFuZGluZ01vbmV5b3V0bGlzdFwiO1xuaW1wb3J0IExhbmRpbmdQYXliaWxsIGZyb20gXCIuL2NvbXBvbmVudHMvTGFuZGluZ1BheWJpbGxcIjtcbmltcG9ydCBLYXNpa29ybndpc2RvbTEgZnJvbSBcIi4vY29tcG9uZW50cy9LYXNpa29ybndpc2RvbTFcIjtcbmltcG9ydCBLYXNpa29ybndpc2RvbTIgZnJvbSBcIi4vY29tcG9uZW50cy9LYXNpa29ybndpc2RvbTJcIjtcbmltcG9ydCBLYXNpa29ybndpc2RvbTMgZnJvbSBcIi4vY29tcG9uZW50cy9LYXNpa29ybndpc2RvbTNcIjtcbmltcG9ydCBLYXNpa29ybndpc2RvbTQgZnJvbSBcIi4vY29tcG9uZW50cy9LYXNpa29ybndpc2RvbTRcIjtcbmltcG9ydCBLYXNpa29ybndpc2RvbTUgZnJvbSBcIi4vY29tcG9uZW50cy9LYXNpa29ybndpc2RvbTVcIjtcblxuaW1wb3J0IFVvYiBmcm9tIFwiLi9jb21wb25lbnRzL3VvYlwiO1xuaW1wb3J0IEdoYmFuayBmcm9tIFwiLi9jb21wb25lbnRzL2doYmFua1wiO1xuaW1wb3J0IExoYmFuayBmcm9tIFwiLi9jb21wb25lbnRzL0xoYmFua1wiO1xuaW1wb3J0IFdpc2RvbW5ld0JhbGFuY2VwYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvd2lzZG9tbmV3QmFsYW5jZXBhZ2VcIjtcbmltcG9ydCBXaXNkb21paUJhbGFuY2VwYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvd2lzZG9taWlCYWxhbmNlcGFnZVwiO1xuaW1wb3J0IFdpc2RvbWlCYWxhbmNlcGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL3dpc2RvbWlCYWxhbmNlcGFnZVwiO1xuXG5cbmltcG9ydCBUaGFuYWNoYXJ0bm90ZSBmcm9tIFwiLi9jb21wb25lbnRzL3RoYW5hY2hhcnRub3RlXCI7XG5pbXBvcnQgS2FzaWtvcm5ub3RlIGZyb20gXCIuL2NvbXBvbmVudHMvS2FzaWtvcm5ub3RlXCI7XG5pbXBvcnQgS3J1bmd0aGFpbm90ZSBmcm9tIFwiLi9jb21wb25lbnRzL0tydW5ndGhhaW5vdGVcIjtcbmltcG9ydCBUaGFpcGFuaXRub3RlIGZyb20gXCIuL2NvbXBvbmVudHMvVGhhaXBhbml0bm90ZVwiO1xuaW1wb3J0IEtydW5nc3Jpbm90ZSBmcm9tIFwiLi9jb21wb25lbnRzL0tydW5nc3Jpbm90ZVwiO1xuXG5pbXBvcnQgS2lhdG5ha2luUGhhdHJhIGZyb20gXCIuL2NvbXBvbmVudHMvS2lhdG5ha2luUGhhdHJhXCI7XG5pbXBvcnQgS2FzaWtvcm5CYWxhbmNlcGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL0thc2lrb3JuQmFsYW5jZXBhZ2VcIjtcblxuaW1wb3J0IEthc2lrb3JuRGF5bW90aGVyIGZyb20gXCIuL2NvbXBvbmVudHMvS2FzaWtvcm5EYXltb3RoZXJcIjtcbmltcG9ydCBLYXNpa29ybkRheW1vdGhlcm5vdGUgZnJvbSBcIi4vY29tcG9uZW50cy9LYXNpa29ybkRheW1vdGhlcm5vdGVcIjtcbmZ1bmN0aW9uIHVzZUF1dGgoKSB7XG4gIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgW3ZhbGlkYXRlLCBzZXRWYWxpZGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFRPS0VOID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG5cbiAgY29uc3QgbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgb3B0ID0ge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IG1lID0gYXdhaXQgZmV0Y2goaW1wb3J0Lm1ldGEuZW52LlZJVEVfQVBJX1VSTCArIFwibWVcIiwgb3B0KS50aGVuKFxuICAgICAgKHJlcykgPT4gcmVzLmpzb24oKVxuICAgICk7XG4gICAgcmV0dXJuIG1lO1xuICB9O1xuXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nIH0gPSB1c2VRdWVyeShbXCJtZVwiLCBUT0tFTl0sIG1lLCB7XG4gICAgb25TdWNjZXNzKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLnN0YXR1cyAhPSBcInN1Y2Nlc3NcIikge1xuICAgICAgICBzZXRMb2NhdGlvbihcIi9hY2NvdW50L3NpZ24taW5cIilcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKVxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGgtbmFtZVwiKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VmFsaWRhdGUodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghVE9LRU4pIHtcbiAgICAgIGlmIChcbiAgICAgICAgbG9jYXRpb24gIT09IFwiL2FjY291bnQvc2lnbi1pblwiICYmXG4gICAgICAgIGxvY2F0aW9uID09IFwiL1wiIHx8XG4gICAgICAgIGxvY2F0aW9uID09IFwiL2FwcFwiIHx8XG4gICAgICAgIGxvY2F0aW9uID09IFwiL2FwcC90aGFpcGFuaXRcIiB8fFxuICAgICAgICBsb2NhdGlvbiA9PSBcIi9hcHAva2FzaWtvcm5cIiB8fFxuICAgICAgICBsb2NhdGlvbiA9PSBcIi9hcHAva3J1bmd0aGFpXCIgfHxcbiAgICAgICAgbG9jYXRpb24gPT0gXCIvYXBwL2dvdmVybm1lbnRfc2F2aW5nc1wiXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHNldExvY2F0aW9uKFwiL2FjY291bnQvc2lnbi1pblwiKTtcbiAgICAgIH1cblxuICAgICAgc2V0VmFsaWRhdGUodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChsb2NhdGlvbiA9PT0gXCIvYWNjb3VudC9zaWduLWluXCIpIHNldExvY2F0aW9uKFwiL1wiKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB2YWxpZGF0ZTtcbn1cblxuZnVuY3Rpb24gQXV0aFZlcmlmeSh7IGNoaWxkcmVuIH06IGFueSkge1xuICBjb25zdCB2YWxpZGF0ZSA9IHVzZUF1dGgoKTtcblxuICBpZiAoIXZhbGlkYXRlKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBSb3V0ZXJNYWluKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QXV0aFZlcmlmeT5cbiAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWNjb3VudC9zaWduLWluXCI+XG4gICAgICAgICAgICAgIDxBdXRoTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxTaWduaW4gLz5cbiAgICAgICAgICAgICAgPC9BdXRoTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxMYW5kaW5nIC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC9zZXRcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8U2V0IC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC90aGFpcGFuaXRcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8VGhhaXBhbml0IC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC90aGFpcGFuaXRzXCI+XG4gICAgICAgICAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPFRoYWlwYW5pdHMgLz5cbiAgICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL2thc2lrb3JuXCI+XG4gICAgICAgICAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPEthc2lrb3JuIC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC9rYXNpa29ybnNcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8S2FzaWtvcm5zIC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC9rYXNpa29ybmJcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8S2FzaWtvcm5iIC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC9rYXNpa29ybmNcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8S2FzaWtvcm5jIC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC90d2FsbGV0XCI+XG4gICAgICAgICAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPFRXYWxsZXQgLz5cbiAgICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL2NpbWJcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8Q2ltYiAvPlxuICAgICAgICAgICAgICA8L0FwcExheW91dD5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHAvbWFrZWJ5a2Fua1wiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxNQUtFQllLQiAvPlxuICAgICAgICAgICAgICA8L0FwcExheW91dD5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHAvbWFrZWJ5a2Fua1wiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxNQUtFQllLQiAvPlxuICAgICAgICAgICAgICA8L0FwcExheW91dD5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHAvc2NidGVzdFwiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxTY2J0ZXN0IC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC9rYmFua2NvbmZcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8S2Jhbmtjb25mIC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL0thc2lrb3JuYVwiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxLYXNpa29ybmEgLz5cbiAgICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL0thc2lrb3JuYTFcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8S2FzaWtvcm5hMSAvPlxuICAgICAgICAgICAgICA8L0FwcExheW91dD5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHAvS2FzaWtvcm5hMlwiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxLYXNpa29ybmEyIC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC90d2FsbGV0dFwiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxUV2FsbGV0dCAvPlxuICAgICAgICAgICAgICA8L0FwcExheW91dD5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHAvdHdhbGxldHRcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8VFdhbGxldHQgLz5cbiAgICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL2thc2lrb3Jud2lzaGRvbVwiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxLYXNpa29ybldpc2hkb20gLz5cbiAgICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL1BsYW5zXCI+XG4gICAgICAgICAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPFBsYW5zIC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC9LYXNpa29ybndpc2RvbTFcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8S2FzaWtvcm53aXNkb20xIC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC9LYXNpa29ybndpc2RvbTJcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8S2FzaWtvcm53aXNkb20yIC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC9LYXNpa29ybndpc2RvbTNcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8S2FzaWtvcm53aXNkb20zIC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC9LYXNpa29ybndpc2RvbTRcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8S2FzaWtvcm53aXNkb200IC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC9LYXNpa29ybndpc2RvbTVcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8S2FzaWtvcm53aXNkb201IC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC90aGFuYWNoYXJ0bm90ZVwiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxUaGFuYWNoYXJ0bm90ZSAvPlxuICAgICAgICAgICAgICA8L0FwcExheW91dD5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHAvS2FzaWtvcm5ub3RlXCI+XG4gICAgICAgICAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPEthc2lrb3Jubm90ZSAvPlxuICAgICAgICAgICAgICA8L0FwcExheW91dD5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHAvS3J1bmd0aGFpbm90ZVwiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxLcnVuZ3RoYWlub3RlIC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC9UaGFpcGFuaXRub3RlXCI+XG4gICAgICAgICAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPFRoYWlwYW5pdG5vdGUgLz5cbiAgICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL0tydW5nc3Jpbm90ZVwiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxLcnVuZ3NyaW5vdGUgLz5cbiAgICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL0thc2lrb3JuRGF5bW90aGVyXCI+XG4gICAgICAgICAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPEthc2lrb3JuRGF5bW90aGVyIC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC9LYXNpa29ybkRheW1vdGhlcm5vdGVcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8S2FzaWtvcm5EYXltb3RoZXJub3RlIC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC9LYXNpa29ybkRheW1vdGhlcm5vdGVcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8S2FzaWtvcm5EYXltb3RoZXJub3RlIC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cblxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL3VvYlwiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxVb2IgLz5cbiAgICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHAvZ2hiYW5rXCI+XG4gICAgICAgICAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPEdoYmFuayAvPlxuICAgICAgICAgICAgICA8L0FwcExheW91dD5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHAvTGhiYW5rXCI+XG4gICAgICAgICAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPExoYmFuayAvPlxuICAgICAgICAgICAgICA8L0FwcExheW91dD5cbiAgICAgICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC9iYW5na29rXCI+XG4gICAgICAgICAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPEJhbmdrb2sgLz5cbiAgICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL2tydW5ndGhhaVwiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxLcnVuZ3RoYWkgLz5cbiAgICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL0xhbmdpbmdXc1wiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxMYW5naW5nV3MgLz5cbiAgICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL0xhbmdpbmd3aXNkb21cIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8TGFuZ2luZ3dpc2RvbSAvPlxuICAgICAgICAgICAgICA8L0FwcExheW91dD5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHAvTGFuZ2luZ25vdGVcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8TGFuZ2luZ25vdGUgLz5cbiAgICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL0xhbmdpbmdtb25leWxpc3RcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8TGFuZ2luZ21vbmV5bGlzdCAvPlxuICAgICAgICAgICAgICA8L0FwcExheW91dD5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHAvTGFuZGluZ01vbmV5b3V0bGlzdFwiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxMYW5kaW5nTW9uZXlvdXRsaXN0IC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC9MYW5kaW5nUGF5YmlsbFwiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxMYW5kaW5nUGF5YmlsbCAvPlxuICAgICAgICAgICAgICA8L0FwcExheW91dD5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHAva3J1bmd0aGFpclwiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxLcnVuZ3RoYWlyIC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC9rcnVuZ3NyaVwiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxLcnVuZ3NyaSAvPlxuICAgICAgICAgICAgICA8L0FwcExheW91dD5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHAvdHRiYmFua1wiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxUaGFuYWNoYXJ0IC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC9nb3Zlcm5tZW50X3NhdmluZ3NcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8R292ZXJubWVudFNhdmluZ3MgLz5cbiAgICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL2JhYWNiYW5rXCI+XG4gICAgICAgICAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPEJhbmtmb3JDb29wZXJhdGl2ZXMgLz5cbiAgICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXBwL2dpZnRcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8R2lmdCAvPlxuICAgICAgICAgICAgICA8L0FwcExheW91dD5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHAvS2lhdG5ha2luUGhhdHJhXCI+XG4gICAgICAgICAgICAgIDxBcHBMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPEtpYXRuYWtpblBoYXRyYSAvPlxuICAgICAgICAgICAgICA8L0FwcExheW91dD5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHAvS2FzaWtvcm5CYWxhbmNlcGFnZVwiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxLYXNpa29ybkJhbGFuY2VwYWdlIC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC93aXNkb21uZXdCYWxhbmNlcGFnZVwiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxXaXNkb21uZXdCYWxhbmNlcGFnZSAvPlxuICAgICAgICAgICAgICA8L0FwcExheW91dD5cbiAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hcHAvd2lzZG9taWlCYWxhbmNlcGFnZVwiPlxuICAgICAgICAgICAgICA8QXBwTGF5b3V0PlxuICAgICAgICAgICAgICAgIDxXaXNkb21paUJhbGFuY2VwYWdlIC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FwcC93aXNkb21pQmFsYW5jZXBhZ2VcIj5cbiAgICAgICAgICAgICAgPEFwcExheW91dD5cbiAgICAgICAgICAgICAgICA8V2lzZG9taUJhbGFuY2VwYWdlIC8+XG4gICAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxuICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDxSb3V0ZT5cbiAgICAgICAgICAgICAgPE5vdEZvdW5kUGFnZSAvPlxuICAgICAgICAgICAgPC9Sb3V0ZT48L1N3aXRjaD5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICA8L0F1dGhWZXJpZnk+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlck1haW47XG4iXX0=
