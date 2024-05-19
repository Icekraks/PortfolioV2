var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => root_default,
  links: () => links,
  loader: () => loader
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  defer
} from "@remix-run/react";

// app/utils/SanityClient.ts
import { createClient } from "@sanity/client";
var SanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  useCdn: !0,
  apiVersion: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
});

// app/graphql/fragments/link.ts
var LINK_FRAGMENT = `
title,
links[] {
  title,
  link,
  external
}
`;

// app/graphql/fragments/header.ts
var HEADER_FRAGMENT = `
header-> {
  ${LINK_FRAGMENT}
},
footer->{
  ${LINK_FRAGMENT}
}
`;

// app/graphql/queries/root.ts
var ROOT_QUERY = `
  {
    "navigation": *[_type == "settingsMenus"][0] {
      ${HEADER_FRAGMENT}
    }
  }
`;

// app/components/Header/Header.tsx
import { useRouteLoaderData } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var Header = () => {
  let root = useRouteLoaderData("root");
  return console.log(root), /* @__PURE__ */ jsxDEV2("header", { children: /* @__PURE__ */ jsxDEV2("div", { className: "flex", children: root.navigation.header.links.map((link, index) => (console.log(link), /* @__PURE__ */ jsxDEV2(
    "a",
    {
      href: link.link,
      target: link.external ? "_blank" : "",
      rel: "noreferrer",
      children: link.title
    },
    index,
    !1,
    {
      fileName: "app/components/Header/Header.tsx",
      lineNumber: 15,
      columnNumber: 13
    },
    this
  ))) }, void 0, !1, {
    fileName: "app/components/Header/Header.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Header/Header.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
};

// app/components/Layout/Layout.tsx
import { useRef } from "react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Layout = ({ children }) => {
  let mainRef = useRef(null);
  return /* @__PURE__ */ jsxDEV3("div", { children: [
    /* @__PURE__ */ jsxDEV3(Header, {}, void 0, !1, {
      fileName: "app/components/Layout/Layout.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("main", { ref: mainRef, children }, void 0, !1, {
      fileName: "app/components/Layout/Layout.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout/Layout.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
};

// app/root.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
], App = () => /* @__PURE__ */ jsxDEV4(Document, { children: /* @__PURE__ */ jsxDEV4(Layout, { children: /* @__PURE__ */ jsxDEV4(Outlet, {}, void 0, !1, {
  fileName: "app/root.tsx",
  lineNumber: 24,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/root.tsx",
  lineNumber: 23,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/root.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this), Document = ({ children }) => /* @__PURE__ */ jsxDEV4("html", { lang: "en", children: [
  /* @__PURE__ */ jsxDEV4("head", { children: [
    /* @__PURE__ */ jsxDEV4("meta", { charSet: "utf-8" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4(Meta, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4(Links, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV4("body", { children: [
    children,
    /* @__PURE__ */ jsxDEV4(ScrollRestoration, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4(Scripts, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4(LiveReload, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/root.tsx",
  lineNumber: 32,
  columnNumber: 5
}, this), root_default = App;
async function loader({ request, context }) {
  let response = await SanityClient.fetch(ROOT_QUERY);
  return defer({
    navigation: response.navigation
  });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV5("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ jsxDEV5("h1", { children: "Welcome to Remix" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("ul", { children: [
      /* @__PURE__ */ jsxDEV5("li", { children: /* @__PURE__ */ jsxDEV5(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/blog",
          rel: "noreferrer",
          children: "15m Quickstart Blog Tutorial"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 16,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("li", { children: /* @__PURE__ */ jsxDEV5(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/jokes",
          rel: "noreferrer",
          children: "Deep Dive Jokes App Tutorial"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 25,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("li", { children: /* @__PURE__ */ jsxDEV5("a", { target: "_blank", href: "https://remix.run/docs", rel: "noreferrer", children: "Remix Docs" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ME7NU33V.js", imports: ["/build/_shared/chunk-BA6NHEY4.js", "/build/_shared/chunk-E3M2U2UG.js", "/build/_shared/chunk-NRH5LTJ7.js", "/build/_shared/chunk-TSUL3J54.js", "/build/_shared/chunk-K6PKGSTD.js", "/build/_shared/chunk-H5ZE7JVG.js", "/build/_shared/chunk-O4OKU2LD.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DLC5YHD4.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-C54NKEUA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "54541cb6", hmr: { runtime: "/build/_shared/chunk-TSUL3J54.js", timestamp: 1716103489042 }, url: "/build/manifest-54541CB6.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
