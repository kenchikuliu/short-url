import "@testing-library/jest-dom";

jest.mock("./services/entity", () => ({
  __esModule: true,
  default: {
    shortUrl: jest.fn(),
  },
}));

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { waitFor } from "@testing-library/react";
import App from "./App";
import store from "./store";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ recommendedLanguage: null, source: "none" }),
    })
  );
});

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

afterEach(() => {
  window.localStorage.clear();
  window.history.replaceState({}, "", "/");
  document.cookie = "shorturl_wiki_language=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  jest.resetAllMocks();
});

test("renders the shorturl wiki landing page", () => {
  renderApp();

  expect(screen.getByText("ShortURL Wiki")).toBeInTheDocument();
  expect(screen.getAllByText(/hello@shorturl\.wiki/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Monthly API plans/i)).toBeInTheDocument();
});

test("shows all approved language options in the language selector", () => {
  renderApp();

  expect(screen.getByRole("option", { name: "English" })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: "简体中文" })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: "日本語" })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: "한국어" })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: "Español" })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: "Deutsch" })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: "Français" })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: "Português (Brasil)" })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: "हिन्दी" })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: "Bahasa Indonesia" })).toBeInTheDocument();
});

test("uses the URL language to update the document seo state", () => {
  window.history.replaceState({}, "", "/es/");

  renderApp();

  expect(document.documentElement.lang).toBe("es");
  expect(document.title).toMatch(/Acortador|enlaces/i);
  expect(document.querySelector('meta[name="description"]')?.getAttribute("content")).toMatch(/enlaces|API/i);
  expect(document.querySelector('meta[property="og:url"]')?.getAttribute("content")).toContain("/es/");
  expect(document.querySelector('meta[name="twitter:title"]')?.getAttribute("content")).toBe(document.title);
  expect(document.querySelector('link[rel="canonical"]')?.getAttribute("href")).toContain("/es/");
  expect(document.querySelector('link[rel="alternate"][hreflang="de"]')).toBeInTheDocument();
  expect(document.querySelector("script#shorturl-structured-data")?.textContent).toContain("\"@type\":\"WebSite\"");
});

test("renders language-prefixed seo landing pages", () => {
  window.history.replaceState({}, "", "/de/qr-code-generator");

  renderApp();

  expect(document.documentElement.lang).toBe("de");
  expect(document.title).toMatch(/Kurzlinks|QR|Branding/i);
  expect(document.title).not.toBe("ShortURL Wiki | ShortURL Wiki");
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/QR|Kurz|Code/i);
  expect(screen.getAllByText(/Einsatzbereiche/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Typische Einsatzbereiche/i)).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/QR-Code|Kurzlink|Mobile/i);
  expect(screen.queryByText("Multilingual landing pages for core short-link demand.")).not.toBeInTheDocument();
  expect(document.querySelector('link[rel="canonical"]')?.getAttribute("href")).toContain("/de/qr-code-generator");
  expect(document.querySelector('meta[property="og:type"]')?.getAttribute("content")).toBe("article");
  expect(document.querySelector("script#shorturl-structured-data")?.textContent).toContain("\"@type\":\"FAQPage\"");
});

test("renders slug-specific body content for chinese seo pages", () => {
  window.history.replaceState({}, "", "/zh/whatsapp-link-shortener");

  renderApp();

  expect(screen.getByText("常见使用场景")).toBeInTheDocument();
  expect(screen.getByText(/Instagram、TikTok 等简介页里的 WhatsApp 联系入口/)).toBeInTheDocument();
  expect(screen.getByText("常见问题")).toBeInTheDocument();
});

test("renders localized language recommendation prompt", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ recommendedLanguage: "ja", source: "ip" }),
    })
  );
  window.history.replaceState({}, "", "/en/");

  renderApp();

  await waitFor(() => {
    expect(screen.getByText("Language recommendation")).toBeInTheDocument();
  });
  expect(screen.getByRole("button", { name: "Switch to 日本語" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Keep current" })).toBeInTheDocument();
});
