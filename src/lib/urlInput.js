export const normalizeUserUrl = (value) => {
  const trimmedValue = (value || "").trim();

  if (!trimmedValue) {
    return "";
  }

  if (/^https?:\/\//i.test(trimmedValue)) {
    return trimmedValue;
  }

  if (/^[^\s]+\.[^\s]+/.test(trimmedValue)) {
    return `https://${trimmedValue}`;
  }

  return trimmedValue;
};

export const isValidUserUrl = (value) => {
  const normalizedValue = normalizeUserUrl(value);

  if (!normalizedValue) {
    return false;
  }

  try {
    const parsed = new URL(normalizedValue);
    return ["http:", "https:"].includes(parsed.protocol) && Boolean(parsed.hostname);
  } catch (error) {
    return false;
  }
};
