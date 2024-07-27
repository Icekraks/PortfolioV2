import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Felix Portfolio" },
    { name: "description", content: "Felix Portfolio" },
  ];
};

export default function Index() {
  return (
    <div
      className="w-[100%]"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
    >
      <h1>Welcome to Remix</h1>
    </div>
  );
}
