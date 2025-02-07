export const COUPON_CODES = {
  BFRIDAY: "BFRIDAY",
  XMAS2025: "XMAS2025",
  NY2025: "NY2025",
  CARTIFY10: "CARTIFY10",
  CARTIFY70: "CARTIFY70",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
