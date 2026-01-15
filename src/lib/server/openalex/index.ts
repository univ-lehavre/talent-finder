export {
	type TOpenAlexInstitution,
	type TOpenAlexAutocompleteMeta,
	type TOpenAlexAutocompleteResponse,
	type TInstitution,
	type TInstitutionSearchResponse,
	OpenAlexInstitution,
	OpenAlexAutocompleteMeta,
	OpenAlexAutocompleteResponse,
	Institution,
	InstitutionSearchResponse
} from './types';

export { searchInstitutions } from './service';

export { OpenAlexApiError, OpenAlexParseError } from './errors';
