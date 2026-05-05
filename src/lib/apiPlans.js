export const API_PLANS = [
  {
    id: "basic",
    name: "Basic",
    monthlyPriceUsd: 19,
    monthlyQuota: 5000,
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPriceUsd: 59,
    monthlyQuota: 25000,
  },
  {
    id: "business",
    name: "Business",
    monthlyPriceUsd: 199,
    monthlyQuota: 100000,
  },
];

export const getPlanById = (planId) =>
  API_PLANS.find((plan) => plan.id === planId) || null;

export const getUsageSummary = (plan, used) => ({
  limit: plan.monthlyQuota,
  used,
  remaining: Math.max(plan.monthlyQuota - used, 0),
});

export const isQuotaAvailable = (plan, used) => used < plan.monthlyQuota;
