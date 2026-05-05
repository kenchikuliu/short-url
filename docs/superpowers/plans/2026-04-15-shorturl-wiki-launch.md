# Shorturl Wiki Launch Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the existing short URL app into a clean multilingual `shorturl.wiki` product with monthly-plan API support and visible contact email.

**Architecture:** Keep the current React + Express + Redis stack, but split new behavior into small modules: frontend language/content config, frontend product sections, backend plan/auth/quota helpers, and API endpoints. Preserve the existing free web shortener flow while adding a separate paid API surface.

**Tech Stack:** React 18, Redux Toolkit, Express 4, Redis 4, Jest via react-scripts

---

### Task 1: Lock translation and plan rules with tests

**Files:**
- Create: `src/lib/i18n.js`
- Create: `src/lib/i18n.test.js`
- Create: `src/lib/apiPlans.js`
- Create: `src/lib/apiPlans.test.js`

- [ ] **Step 1: Write failing translation tests**
- [ ] **Step 2: Run translation tests and verify failure**
- [ ] **Step 3: Implement minimal language dictionary and helpers**
- [ ] **Step 4: Run translation tests and verify pass**
- [ ] **Step 5: Write failing API plan tests**
- [ ] **Step 6: Run API plan tests and verify failure**
- [ ] **Step 7: Implement plan definitions and monthly quota helpers**
- [ ] **Step 8: Run API plan tests and verify pass**

### Task 2: Replace the current single-purpose landing page with clean multilingual product UI

**Files:**
- Modify: `src/App.js`
- Modify: `src/index.css`
- Modify: `src/components/Header.js`
- Modify: `src/components/Body.js`
- Modify: `src/components/Search.js`
- Modify: `src/components/Entity.js`
- Modify: `src/components/Footer.js`
- Create: `src/components/LanguageSwitcher.js`
- Create: `src/components/Hero.js`
- Create: `src/components/FeatureGrid.js`
- Create: `src/components/ApiSection.js`
- Create: `src/components/PricingSection.js`
- Create: `src/components/DocsSection.js`
- Create: `src/components/ContactSection.js`
- Create: `src/components/App.test.js`

- [ ] **Step 1: Write a failing App render test for clean branding, language switcher, pricing, and contact email**
- [ ] **Step 2: Run the App test and verify failure**
- [ ] **Step 3: Implement the new one-page multilingual layout**
- [ ] **Step 4: Remove old footer branding and replace with neutral contact footer**
- [ ] **Step 5: Update free shortener form and result copy to use translation helpers**
- [ ] **Step 6: Run App test and targeted Jest suite**

### Task 3: Add paid API key and monthly quota backend support

**Files:**
- Modify: `server.js`
- Create: `server/apiAuth.js`
- Create: `server/apiAuth.test.js`
- Create: `.env.example`

- [ ] **Step 1: Write failing tests for API key validation and monthly usage accounting**
- [ ] **Step 2: Run backend helper tests and verify failure**
- [ ] **Step 3: Implement reusable API auth and quota helpers**
- [ ] **Step 4: Refactor server routes to use helper modules**
- [ ] **Step 5: Add `POST /api/shorten`, `GET /api/usage`, and `GET /api/plans`**
- [ ] **Step 6: Keep the existing free web endpoint working**
- [ ] **Step 7: Run backend helper tests and manual curl verification**

### Task 4: Production-readiness and deployment prep

**Files:**
- Modify: `README.md`
- Modify: `public/index.html`
- Modify: `Dockerfile` if needed

- [ ] **Step 1: Update product copy and deployment docs for `shorturl.wiki`**
- [ ] **Step 2: Document `hello@shorturl.wiki` and mail forwarding target `kenchikuliu@outlook.com`**
- [ ] **Step 3: Run production build**
- [ ] **Step 4: Verify build output and key routes**
- [ ] **Step 5: Prepare server deployment commands and DNS/mail-forward checklist**
