import { AppwriteUserRepository } from '$lib/server/appwrite/userRepository';
import type { TUser } from '$lib/types/api/user';

const userRepo = new AppwriteUserRepository();

/**
 * Retrieves a user profile by their ID.
 * @param userId - The unique identifier of the user
 * @returns A promise resolving to the user profile
 */
export const getProfile = async (userId: string): Promise<TUser> => userRepo.getById(userId);
