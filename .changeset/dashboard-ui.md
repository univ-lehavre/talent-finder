---
'talent-finder': patch
---

fix(dashboard): improve card layout and styling

- Move Research Organization Search and Articles Count cards to top of dashboard
- Conditionally position Data Consent card (top if not granted, after research cards if granted)
- Replace single "Pages" card with separate "Repository" and "API Documentation" cards (admin only)
- Change HealthStatusCard "Healthy" status from success to secondary color
- Change ConsentStatusCard "granted" state from success to secondary color
