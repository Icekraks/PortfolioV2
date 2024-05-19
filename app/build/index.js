var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// src/entry.server.tsx
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
          fileName: "src/entry.server.tsx",
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
          fileName: "src/entry.server.tsx",
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

// src/root.tsx
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

// src/utils/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createClient } from "@sanity/client";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var SanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  useCdn: !0,
  apiVersion: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
});

// src/graphql/fragments/link.ts
var LINK_FRAGMENT = `
title,
links[] {
  title,
  link,
  external
}
`;

// src/graphql/fragments/header.ts
var HEADER_FRAGMENT = `
header-> {
  ${LINK_FRAGMENT}
},
footer->{
  ${LINK_FRAGMENT}
}
`;

// src/graphql/queries/root.ts
var ROOT_QUERY = `
  {
    "navigation": *[_type == "settingsMenus"][0] {
      ${HEADER_FRAGMENT}
    }
  }
`;

// src/components/Header/Header.tsx
import { useRouteLoaderData } from "@remix-run/react";

// src/theme/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = React.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ jsxDEV2(
    asChild ? Slot : "button",
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "src/theme/ui/button.tsx",
      lineNumber: 46,
      columnNumber: 7
    },
    this
  )
);
Button.displayName = "Button";

// src/components/Header/Header.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Header = () => {
  let root = useRouteLoaderData("root");
  return /* @__PURE__ */ jsxDEV3("header", { children: /* @__PURE__ */ jsxDEV3("div", { className: "flex py-12 px-12", children: root.navigation.header.links.map((link, index) => /* @__PURE__ */ jsxDEV3(Button, { asChild: !0, children: /* @__PURE__ */ jsxDEV3(
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
      fileName: "src/components/Header/Header.tsx",
      lineNumber: 15,
      columnNumber: 15
    },
    this
  ) }, index, !1, {
    fileName: "src/components/Header/Header.tsx",
    lineNumber: 14,
    columnNumber: 13
  }, this)) }, void 0, !1, {
    fileName: "src/components/Header/Header.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/components/Header/Header.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
};

// src/components/Layout/Layout.tsx
import { useRef } from "react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var Layout = ({ children }) => {
  let mainRef = useRef(null);
  return /* @__PURE__ */ jsxDEV4("div", { children: [
    /* @__PURE__ */ jsxDEV4(Header, {}, void 0, !1, {
      fileName: "src/components/Layout/Layout.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("main", { ref: mainRef, children }, void 0, !1, {
      fileName: "src/components/Layout/Layout.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/components/Layout/Layout.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
};

// src/globals.css
var globals_default = "/build/_assets/globals-UJTH6DGR.css";

// src/root.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: globals_default },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
], App = () => /* @__PURE__ */ jsxDEV5(Document, { children: /* @__PURE__ */ jsxDEV5(Layout, { children: /* @__PURE__ */ jsxDEV5(Outlet, {}, void 0, !1, {
  fileName: "src/root.tsx",
  lineNumber: 26,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "src/root.tsx",
  lineNumber: 25,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "src/root.tsx",
  lineNumber: 24,
  columnNumber: 5
}, this), Document = ({ children }) => /* @__PURE__ */ jsxDEV5("html", { lang: "en", children: [
  /* @__PURE__ */ jsxDEV5("head", { children: [
    /* @__PURE__ */ jsxDEV5("meta", { charSet: "utf-8" }, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5(Meta, {}, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5(Links, {}, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/root.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV5("body", { children: [
    children,
    /* @__PURE__ */ jsxDEV5(ScrollRestoration, {}, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5(Scripts, {}, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5(LiveReload, {}, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/root.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "src/root.tsx",
  lineNumber: 34,
  columnNumber: 5
}, this), root_default = App;
async function loader({ request, context }) {
  let response = await SanityClient.fetch(ROOT_QUERY);
  return defer({
    navigation: response.navigation
  });
}

// src/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV6("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ jsxDEV6("h1", { children: "Welcome to Remix" }, void 0, !1, {
      fileName: "src/routes/_index.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("ul", { children: [
      /* @__PURE__ */ jsxDEV6("li", { children: /* @__PURE__ */ jsxDEV6(
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
          fileName: "src/routes/_index.tsx",
          lineNumber: 16,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "src/routes/_index.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("li", { children: /* @__PURE__ */ jsxDEV6(
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
          fileName: "src/routes/_index.tsx",
          lineNumber: 25,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "src/routes/_index.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("li", { children: /* @__PURE__ */ jsxDEV6("a", { target: "_blank", href: "https://remix.run/docs", rel: "noreferrer", children: "Remix Docs" }, void 0, !1, {
        fileName: "src/routes/_index.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "src/routes/_index.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/routes/_index.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/routes/_index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-7ACPLGJF.js", imports: ["/build/_shared/chunk-BA6NHEY4.js", "/build/_shared/chunk-E3M2U2UG.js", "/build/_shared/chunk-NRH5LTJ7.js", "/build/_shared/chunk-TSUL3J54.js", "/build/_shared/chunk-K6PKGSTD.js", "/build/_shared/chunk-H5ZE7JVG.js", "/build/_shared/chunk-O4OKU2LD.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-YF2VO2O2.js", imports: ["/build/_shared/chunk-XDT5BQM4.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-5PQL67TW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "76d2aad2", hmr: { runtime: "/build/_shared/chunk-TSUL3J54.js", timestamp: 1716106040106 }, url: "/build/manifest-76D2AAD2.js" };

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
