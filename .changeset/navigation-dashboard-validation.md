---
'talent-finder': minor
---

Add navigation, dashboard and improve code architecture

**New features:**

- Responsive navbar with icons and mobile offcanvas menu
- Dashboard page for authenticated users
- University logos in footer (ULHN, EUNICoast)

**Code architecture:**

- Centralized icons module (`$lib/icons`)
- i18n-ready content module (`$lib/content`)
- Email normalizers module (`$lib/normalizers`) with subaddress removal
- RFC 5322 email validation with ReDoS protection
- Replace internal fetch calls with service functions
- Layout server load for user profile
