import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  defer,
} from "@remix-run/react";
import { SanityClient } from "./utils/SanityClient";
import { ROOT_QUERY } from "./graphql/queries/root";
import { Layout } from "./components/Layout/Layout";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

const App = () => {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
};

const Document = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default App;

export async function loader({ request, context }: LoaderFunctionArgs) {
  const response = await SanityClient.fetch(ROOT_QUERY);

  return defer({
    navigation: response.navigation,
  });
}
