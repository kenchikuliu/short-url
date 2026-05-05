import { API_PLANS, getPlanById, getUsageSummary, isQuotaAvailable } from "./apiPlans";

describe("API monthly plans", () => {
  test("defines three monthly plans", () => {
    expect(API_PLANS.map((plan) => plan.id)).toEqual(["basic", "pro", "business"]);
  });

  test("returns usage summary for a plan", () => {
    const plan = getPlanById("pro");
    expect(getUsageSummary(plan, 1200)).toEqual({
      limit: plan.monthlyQuota,
      used: 1200,
      remaining: plan.monthlyQuota - 1200,
    });
  });

  test("detects quota exhaustion", () => {
    const plan = getPlanById("basic");
    expect(isQuotaAvailable(plan, plan.monthlyQuota - 1)).toBe(true);
    expect(isQuotaAvailable(plan, plan.monthlyQuota)).toBe(false);
  });
});
