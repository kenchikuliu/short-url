# Analytics

shorturl.wiki sends global click/form intent events to GA4, Plausible, and OpenPanel when those browser globals are present. The static page also detects URL-based success returns.

## Current Events

| Event Name | When it fires |
| --- | --- |
| `cta_clicked` | Generic high-intent CTA click |
| `signup_started` | Signup/register/start CTA click |
| `login_started` | Login/sign-in CTA click |
| `trial_clicked` | Trial/free CTA click |
| `pricing_viewed` | Pricing/API/plan CTA click |
| `checkout_started` | Buy/pay/subscribe CTA click |
| `form_submitted` | Form submit starts |
| `lead_submitted` | URL success return indicates a lead/contact succeeded |
| `signup_completed` | URL success return indicates registration succeeded |
| `login_success` | URL success return indicates login succeeded |
| `payment_succeeded` | URL success return indicates checkout/payment succeeded |

## GA4 Key Events

The source of truth is:

- [analytics/ga4-key-events.json](/Users/Yuki/short-url/analytics/ga4-key-events.json)

Create or verify the GA4 key events after DebugView confirms the events are firing:

```bash
npm run ga4:key-events -- --dry-run
GA4_PROPERTY_ID="123456789" GOOGLE_API_ACCESS_TOKEN="ya29..." npm run ga4:key-events
```
