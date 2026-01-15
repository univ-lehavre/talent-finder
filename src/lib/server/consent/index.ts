export {
	type TConsentType,
	type TConsentAction,
	type TConsentEvent,
	type TConsentEventInput,
	type TCurrentConsent,
	type TConsentStatusResponse,
	ConsentType,
	ConsentAction,
	ConsentEvent,
	CurrentConsent,
	ConsentStatusResponse
} from './types';

export {
	getConsentStatus,
	grantConsent,
	revokeConsent,
	getConsentHistory,
	hasConsent,
	getAllConsents
} from './service';
