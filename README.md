# Talent Finder

[![DOI](https://zenodo.org/badge/1133686064.svg)](https://doi.org/10.5281/zenodo.18241663)

Talent Finder is a web application built with SvelteKit that helps discover and analyze developer talent through git repository statistics and GitHub integration.

## Features

- **Magic Link Authentication** - Passwordless login via email
- **Repository Analytics** - Analyze git commit history, code statistics, and test coverage
- **GitHub Integration** - Track issues, pull requests, and repository activity
- **API Documentation** - Interactive Swagger UI at `/api/docs`

## Tech Stack

- **Runtime**: Node.js 24
- **Package Manager**: pnpm 10
- **Framework**: SvelteKit with Svelte 5
- **Styling**: Tailwind CSS 4
- **Backend**: Appwrite for authentication
- **Validation**: Zod schemas
- **Testing**: Vitest

## Getting Started

### Prerequisites

- Node.js 24+
- pnpm 10+
- An Appwrite instance for authentication

### Installation

```bash
# Clone the repository
git clone https://github.com/univ-lehavre/talent-finder.git
cd talent-finder

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Appwrite credentials
```

### Development

```bash
# Start the development server
pnpm dev

# Run type checking
pnpm type-check

# Run linting
pnpm lint

# Run tests
pnpm test

# Build for production
pnpm build
```

## Project Structure

```
talent-finder/
├── src/
│   ├── lib/
│   │   ├── server/          # Server-side modules
│   │   │   ├── auth/        # Authentication logic
│   │   │   ├── user/        # User management
│   │   │   ├── git-stats/   # Git repository analysis
│   │   │   ├── github/      # GitHub API integration
│   │   │   ├── http/        # HTTP utilities
│   │   │   └── appwrite/    # Appwrite client
│   │   ├── ui/              # Reusable Svelte components
│   │   ├── validators/      # Client-side validation
│   │   └── constants/       # Shared constants
│   └── routes/
│       ├── api/v1/          # REST API endpoints
│       ├── repository/      # Repository stats page
│       └── login/           # Magic link callback
├── docs/
│   └── design-system.md     # UI design guidelines
└── CLAUDE.md                # AI assistant instructions
```

## API

The REST API follows pure REST conventions with JSON responses:

| Endpoint              | Method | Description                            |
| --------------------- | ------ | -------------------------------------- |
| `/api/v1/auth/signup` | POST   | Send magic link for registration       |
| `/api/v1/auth/login`  | POST   | Validate magic link and create session |
| `/api/v1/auth/logout` | POST   | End current session                    |
| `/api/v1/me`          | GET    | Get current user profile               |
| `/api/v1/repository`  | GET    | Get repository statistics              |
| `/api/v1/github`      | GET    | Get GitHub statistics and URLs         |

Full API documentation available at `/api/docs` when running the application.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is developed at Université Le Havre Normandie.

## Citation

If you use this software in your research, please cite it using the DOI badge above.
