export {
	type TCommitStats,
	type TCodeStats,
	type TTestStats,
	type TCodeDelta,
	type TPeriodStats,
	type TRepositoryStats,
	type TGitHubStats,
	CommitStats,
	CodeStats,
	TestStats,
	CodeDelta,
	PeriodStats,
	RepositoryStats,
	emptyCodeStats,
	emptyTestStats,
	emptyCodeDelta,
	emptyGitHubStats
} from './types';

export { getRepositoryStats, emptyRepositoryStats } from './service';

export {
	GitRepository,
	parseNumstatLine,
	parseGitLog,
	type GitRepositoryInterface,
	type ChangedFile
} from './repository';

export {
	PATTERNS,
	isTypeScriptSourceFile,
	isTestFile,
	countMatches,
	analyzeTypeScriptContent,
	analyzeTestContent,
	analyzeDirectory,
	analyzeFileContent
} from './code-analyzer';

export {
	formatHourlyPeriod,
	groupCommitsByHour,
	aggregatePeriodStats,
	aggregateByHour,
	calculateTotals,
	addCodeStats,
	addTestStats,
	calculateCodeDelta,
	findDateRange
} from './aggregator';
