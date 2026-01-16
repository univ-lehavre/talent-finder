/**
 * UI Components module
 * Exports all reusable Svelte components.
 *
 * New in this version:
 * - Section, Grid, PageHeader, InfoCard, DataList, AsyncContent
 * - Refactored Badge, Alert, LoadingSpinner with CSS custom properties
 */

// Layout components
export { default as Section } from './Section.svelte';
export { default as Grid } from './Grid.svelte';
export { default as PageHeader } from './PageHeader.svelte';
export { default as Hero } from './Hero.svelte';
export { default as CTASection } from './CTASection.svelte';
export { default as PartnerSection } from './PartnerSection.svelte';
export { default as LandingSection } from './LandingSection.svelte';

// Data display components
export { default as Card } from './Card.svelte';
export { default as InfoCard } from './InfoCard.svelte';
export { default as DataList } from './DataList.svelte';
export { default as StatCard } from './StatCard.svelte';
export { default as StepCard } from './StepCard.svelte';
export { default as ChallengeCard } from './ChallengeCard.svelte';
export { default as TagCard } from './TagCard.svelte';
export { default as FeatureCard } from './FeatureCard.svelte';
export { default as PartnerLogo } from './PartnerLogo.svelte';

// Feedback components
export { default as Alert } from './Alert.svelte';
export { default as Badge } from './Badge.svelte';
export { default as LoadingSpinner } from './LoadingSpinner.svelte';
export { default as AsyncContent } from './AsyncContent.svelte';

// Interactive components
export { default as Modal } from './Modal.svelte';
export { default as Signup } from './Signup.svelte';
export { default as ThemeSection } from './ThemeSection.svelte';
export { default as ThemeToggle } from './ThemeToggle.svelte';

// Utility components
export { default as Icon } from './Icon.svelte';
export { default as ConnectivityBanner } from './ConnectivityBanner.svelte';

// Domain-specific components
export { default as ResearchOrganizationSearch } from './ResearchOrganizationSearch.svelte';
export { default as ArticlesCountCard } from './ArticlesCountCard.svelte';
export { default as HealthStatusCard } from './HealthStatusCard.svelte';
export { default as ConsentStatusCard } from './ConsentStatusCard.svelte';
