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

// server.ts
import { createClient } from "@sanity/client";
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
    },
    "social": *[_type == "settingsSocial"][0] {
      email,
      linkedin,
      github,
      youtube 
    
    }
  }
`;

// src/components/Header/Header.tsx
import React2, { useEffect } from "react";
import { useRouteLoaderData } from "@remix-run/react";

// src/theme/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// src/utils/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/theme/ui/button.tsx
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
import { Github, Linkedin, Mail, Menu, Youtube } from "lucide-react";

// src/hooks/useMedia.ts
import { useMediaQuery } from "react-responsive";

// tailwind.config.ts
import tailwindcssAnimate from "tailwindcss-animate";
var tailwind_config_default = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px"
    },
    container: {
      center: !0,
      padding: "2rem"
    },
    extend: {
      colors: {
        border: "#b58900",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [tailwindcssAnimate]
};

// src/hooks/useMedia.ts
var useMedia = () => {
  let breakpoints = tailwind_config_default.theme.screens;
  return {
    isBase: useMediaQuery({ query: "(min-width: 0px)" }),
    isSm: useMediaQuery({
      query: `(min-width: ${breakpoints.sm})`
    }),
    isMd: useMediaQuery({
      query: `(min-width: ${breakpoints.md})`
    }),
    isLg: useMediaQuery({
      query: `(min-width: ${breakpoints.lg})`
    }),
    isXl: useMediaQuery({
      query: `(min-width: ${breakpoints.xl})`
    }),
    is2xl: useMediaQuery({
      query: `(min-width: ${breakpoints.xl})`
    }),
    touch: useMediaQuery({ query: "(hover: none)" })
  };
};

// src/components/Header/Header.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Header = () => {
  let root = useRouteLoaderData("root"), [isMenuOpen, setIsMenuOpen] = React2.useState(!1), isMd = useMedia();
  return useEffect(() => {
    isMd && setIsMenuOpen(!1);
  }, [isMd]), /* @__PURE__ */ jsxDEV3("header", { children: [
    /* @__PURE__ */ jsxDEV3(
      "div",
      {
        className: cn(
          "fixed md:sticky md:translate-x-0 transition-transform top-0 left-0 w-[15rem] flex flex-col bg-[#002b36] h-[100dvh] justify-between px-4 pt-12 pb-4 md:px-12 md:pt-12 md:pb-12",
          isMenuOpen ? "translate-x-0" : "translate-x-[-100%]"
        ),
        children: [
          /* @__PURE__ */ jsxDEV3("div", { className: "flex flex-col gap-4", children: root.navigation.header.links.map((link, index) => /* @__PURE__ */ jsxDEV3(Button, { variant: "secondary", asChild: !0, children: /* @__PURE__ */ jsxDEV3(
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
              lineNumber: 32,
              columnNumber: 17
            },
            this
          ) }, index, !1, {
            fileName: "src/components/Header/Header.tsx",
            lineNumber: 31,
            columnNumber: 15
          }, this)) }, void 0, !1, {
            fileName: "src/components/Header/Header.tsx",
            lineNumber: 28,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { className: "flex md:flex-col justify-center items-center gap-2 md:gap-8", children: [
            root.social.email && /* @__PURE__ */ jsxDEV3(Button, { variant: "outline", size: "icon", asChild: !0, children: /* @__PURE__ */ jsxDEV3(
              "a",
              {
                href: `mailto:${root.social.email}`,
                target: "_blank",
                rel: "noreferrer",
                children: /* @__PURE__ */ jsxDEV3(Mail, {}, void 0, !1, {
                  fileName: "src/components/Header/Header.tsx",
                  lineNumber: 53,
                  columnNumber: 17
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "src/components/Header/Header.tsx",
                lineNumber: 48,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "src/components/Header/Header.tsx",
              lineNumber: 47,
              columnNumber: 13
            }, this),
            root.social.linkedin && /* @__PURE__ */ jsxDEV3(Button, { variant: "outline", size: "icon", asChild: !0, children: /* @__PURE__ */ jsxDEV3("a", { href: root.social.linkedin, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxDEV3(Linkedin, {}, void 0, !1, {
              fileName: "src/components/Header/Header.tsx",
              lineNumber: 60,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "src/components/Header/Header.tsx",
              lineNumber: 59,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "src/components/Header/Header.tsx",
              lineNumber: 58,
              columnNumber: 13
            }, this),
            root.social.github && /* @__PURE__ */ jsxDEV3(Button, { variant: "outline", size: "icon", asChild: !0, children: /* @__PURE__ */ jsxDEV3("a", { href: root.social.github, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxDEV3(Github, {}, void 0, !1, {
              fileName: "src/components/Header/Header.tsx",
              lineNumber: 67,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "src/components/Header/Header.tsx",
              lineNumber: 66,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "src/components/Header/Header.tsx",
              lineNumber: 65,
              columnNumber: 13
            }, this),
            root.social.youtube && /* @__PURE__ */ jsxDEV3(Button, { variant: "outline", size: "icon", asChild: !0, children: /* @__PURE__ */ jsxDEV3("a", { href: root.social.youtube, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ jsxDEV3(Youtube, {}, void 0, !1, {
              fileName: "src/components/Header/Header.tsx",
              lineNumber: 74,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "src/components/Header/Header.tsx",
              lineNumber: 73,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "src/components/Header/Header.tsx",
              lineNumber: 72,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "src/components/Header/Header.tsx",
            lineNumber: 45,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/components/Header/Header.tsx",
        lineNumber: 22,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV3(
      Button,
      {
        variant: "secondary",
        className: "fixed top-4 left-4 md:hidden z-50",
        onClick: () => setIsMenuOpen(!0),
        children: /* @__PURE__ */ jsxDEV3(Menu, {}, void 0, !1, {
          fileName: "src/components/Header/Header.tsx",
          lineNumber: 85,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "src/components/Header/Header.tsx",
        lineNumber: 80,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/components/Header/Header.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
};

// src/components/Layout/Layout.tsx
import { useRef } from "react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var Layout = ({ children }) => {
  let mainRef = useRef(null);
  return /* @__PURE__ */ jsxDEV4("div", { className: "flex", children: [
    /* @__PURE__ */ jsxDEV4(Header, {}, void 0, !1, {
      fileName: "src/components/Layout/Layout.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("main", { className: "w-max", ref: mainRef, children }, void 0, !1, {
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
var globals_default = "/build/_assets/globals-RDMKISYC.css";

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
    /* @__PURE__ */ jsxDEV5(Scripts, {}, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5(ScrollRestoration, {}, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5(LiveReload, {}, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    children
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
async function loader() {
  let response = await SanityClient.fetch(ROOT_QUERY);
  return defer({
    navigation: response.navigation,
    social: response.social
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
  return /* @__PURE__ */ jsxDEV6(
    "div",
    {
      className: "w-[100%]",
      style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" },
      children: /* @__PURE__ */ jsxDEV6("h1", { children: "Welcome to Remix" }, void 0, !1, {
        fileName: "src/routes/_index.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "src/routes/_index.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-NUFJYMC6.js", imports: ["/build/_shared/chunk-BA6NHEY4.js", "/build/_shared/chunk-E3M2U2UG.js", "/build/_shared/chunk-NRH5LTJ7.js", "/build/_shared/chunk-TSUL3J54.js", "/build/_shared/chunk-K6PKGSTD.js", "/build/_shared/chunk-H5ZE7JVG.js", "/build/_shared/chunk-O4OKU2LD.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-FUOLDCOE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-BMDHQEVH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "87307dee", hmr: { runtime: "/build/_shared/chunk-TSUL3J54.js", timestamp: 1721998374856 }, url: "/build/manifest-87307DEE.js" };

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
