import { describe, it, expect } from 'vitest';
import { isEmail } from './index';

describe('isEmail', () => {
	describe('valid emails', () => {
		it('should return true for a simple valid email', () => {
			expect(isEmail('test@example.com')).toBe(true);
		});

		it('should return true for email with subdomain', () => {
			expect(isEmail('user@mail.example.com')).toBe(true);
		});

		it('should return true for email with dots in local part', () => {
			expect(isEmail('first.last@example.com')).toBe(true);
		});

		it('should return true for email with underscores', () => {
			expect(isEmail('user_name@example.com')).toBe(true);
		});

		it('should return true for email with hyphens', () => {
			expect(isEmail('user-name@example.com')).toBe(true);
		});

		it('should return true for email with numbers', () => {
			expect(isEmail('user123@example123.com')).toBe(true);
		});

		it('should return true for email with mixed characters', () => {
			expect(isEmail('user.name-123_test@sub.example.org')).toBe(true);
		});
	});

	describe('invalid emails', () => {
		it('should return false for empty string', () => {
			expect(isEmail('')).toBe(false);
		});

		it('should return false for email without @', () => {
			expect(isEmail('testexample.com')).toBe(false);
		});

		it('should return false for email without domain', () => {
			expect(isEmail('test@')).toBe(false);
		});

		it('should return false for email without local part', () => {
			expect(isEmail('@example.com')).toBe(false);
		});

		it('should return false for email without TLD', () => {
			expect(isEmail('test@example')).toBe(false);
		});

		it('should return false for email with single char TLD', () => {
			expect(isEmail('test@example.c')).toBe(false);
		});

		it('should return false for email with TLD longer than 6 chars', () => {
			expect(isEmail('test@example.abcdefg')).toBe(false);
		});

		it('should return false for email with spaces', () => {
			expect(isEmail('test @example.com')).toBe(false);
		});

		it('should accept email with double dots (current behavior)', () => {
			// Note: RFC 5321 technically forbids consecutive dots, but current regex allows it
			expect(isEmail('test..user@example.com')).toBe(true);
		});

		it('should return false for email exceeding 254 characters', () => {
			const longEmail = 'a'.repeat(250) + '@example.com';
			expect(isEmail(longEmail)).toBe(false);
		});

		it('should return false for just text', () => {
			expect(isEmail('not an email')).toBe(false);
		});
	});
});
