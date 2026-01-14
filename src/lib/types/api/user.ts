import { z } from 'zod';
import { makeResponseSchema } from './common';

/**
 * Schema for user data.
 */
export const User = z
	.object({
		id: z.string(),
		email: z.string().email().nullable(),
		labels: z.array(z.string())
	})
	.strict();

/**
 * Schema for listing multiple users response.
 */
export const ListUsersResponse = makeResponseSchema(z.array(User));

/**
 * Schema for current user profile response.
 */
export const MeResponse = makeResponseSchema(User);

export type TUser = z.infer<typeof User>;

/**
 * Repository interface for fetching users from a data source.
 */
export interface UserRepository {
	getById(userId: string): Promise<TUser>;
}
