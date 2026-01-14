import { z } from 'zod';

/**
 * Schema for API error responses.
 */
export const ApiError = z
	.object({
		code: z.string(),
		message: z.string(),
		details: z.unknown().optional(),
		cause: z.unknown().optional()
	})
	.strict();

/**
 * Schema for pagination metadata.
 */
export const PaginationMeta = z
	.object({
		page: z.number().int().min(1),
		per_page: z.number().int().min(1),
		total: z.number().int().nonnegative()
	})
	.strict();

/**
 * Factory function to create a standardized API response schema.
 * @param dataSchema - The Zod schema for the data field
 * @returns A Zod schema wrapping the data in a standard response format
 */
export const makeResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
	z
		.object({
			data: dataSchema.nullable().default(null),
			error: ApiError.nullable().default(null),
			meta: z.unknown().optional()
		})
		.strict();

export type TApiError = z.infer<typeof ApiError>;
export type TPaginationMeta = z.infer<typeof PaginationMeta>;
