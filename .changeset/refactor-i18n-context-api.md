---
'talent-finder': minor
---

Migrate i18n system from module-level state to Svelte Context API

**New features:**

- `setI18nContext()`: Initialize i18n context in root layout
- `useI18n()`: Access reactive translations in any component
- `hasI18nContext()`: Check if context is available

**Benefits:**

- SSR-safe: state doesn't persist between server requests
- Testability: easy to isolate tests with different locales
- Nested components: local locale override possible
- Svelte 5 best practices: recommended pattern for shared data

**Migration:**
Replace `import { i18n } from '$lib/content'` with:

```svelte
<script>
	import { useI18n } from '$lib/content';
	const i18n = useI18n();
</script>
```

Closes #45
