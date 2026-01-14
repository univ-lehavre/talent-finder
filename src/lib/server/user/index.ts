/**
 * User module
 * User profile management and data access.
 */

// Types
export { User, type TUser, type UserRepository } from './types';

// Service
export { getProfile, isAdmin } from './service';

// Repository
export { AppwriteUserRepository } from './repository';
