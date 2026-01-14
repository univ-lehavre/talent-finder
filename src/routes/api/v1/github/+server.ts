import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import {
	getGitHubStats,
	getGitHubRepoFromPath,
	buildGitHubUrl,
	buildIssuesUrl,
	buildNewIssueUrl,
	buildPullRequestsUrl,
	buildDiscussionsUrl
} from '$lib/server/github';
import { mapErrorToResponse } from '$lib/server/http';

/**
 * Response structure for GitHub endpoint.
 */
interface GitHubResponse {
	stats: {
		issues: { open: number; closed: number };
		pullRequests: { open: number; closed: number };
	};
	urls: {
		repository: string | null;
		issues: string | null;
		newIssue: string | null;
		pullRequests: string | null;
		discussions: string | null;
	};
}

/**
 * GET /api/v1/github
 * Returns GitHub statistics and URLs for the repository.
 */
export const GET: RequestHandler = async () => {
	try {
		const repoPath = process.cwd();
		const [stats, repoInfo] = await Promise.all([
			getGitHubStats(repoPath),
			getGitHubRepoFromPath(repoPath)
		]);

		let urls: GitHubResponse['urls'] = {
			repository: null,
			issues: null,
			newIssue: null,
			pullRequests: null,
			discussions: null
		};

		if (repoInfo) {
			const { owner, repo } = repoInfo;
			urls = {
				repository: buildGitHubUrl(owner, repo),
				issues: buildIssuesUrl(owner, repo),
				newIssue: buildNewIssueUrl(owner, repo),
				pullRequests: buildPullRequestsUrl(owner, repo),
				discussions: buildDiscussionsUrl(owner, repo)
			};
		}

		const response: GitHubResponse = {
			stats: {
				issues: stats.issues,
				pullRequests: stats.pullRequests
			},
			urls
		};

		return json(response);
	} catch (error: unknown) {
		return mapErrorToResponse(error);
	}
};
