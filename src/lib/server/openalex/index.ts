export {
	type TOpenAlexInstitution,
	type TOpenAlexAutocompleteMeta,
	type TOpenAlexAutocompleteResponse,
	type TInstitution,
	type TInstitutionSearchResponse,
	type TOpenAlexWorksMeta,
	type TOpenAlexWorksResponse,
	type TWorksCountResponse,
	type TOpenAlexAuthorsMeta,
	type TOpenAlexAuthorsResponse,
	type TInstitutionStatsResponse,
	OpenAlexInstitution,
	OpenAlexAutocompleteMeta,
	OpenAlexAutocompleteResponse,
	Institution,
	InstitutionSearchResponse,
	OpenAlexWorksMeta,
	OpenAlexWorksResponse,
	WorksCountResponse,
	OpenAlexAuthorsMeta,
	OpenAlexAuthorsResponse,
	InstitutionStatsResponse
} from './types';

export { searchInstitutions } from './service';

export { getWorksCount, getInstitutionStats } from './works';

export { OpenAlexApiError, OpenAlexParseError } from './errors';
