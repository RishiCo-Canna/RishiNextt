# Next.js TinaCMS Project

A modern web application built with Next.js and TinaCMS for content management.

## Features

- Next.js 14 with App Router
- TinaCMS for content management
- TypeScript support
- Tailwind CSS for styling
- Responsive design
- Content editing through `/admin` route

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Copy `.env.example` to `.env` and fill in your environment variables:
   ```bash
   cp .env.example .env
   ```
4. Start the development server:
   ```bash
   pnpm dev
   ```

## Environment Variables

Make sure to set up the following environment variables in your `.env` file:

- `NEXT_PUBLIC_TINA_CLIENT_ID`: Your TinaCMS client ID
- `TINA_TOKEN`: Your TinaCMS token
- `NEXT_PUBLIC_TINA_BRANCH`: The branch to use for TinaCMS (defaults to 'main')
- `DATABASE_URL`: Your PostgreSQL database URL (if using database features)

## Development

- Access the application at: `http://localhost:3000`
- Admin panel at: `http://localhost:3000/admin`
- Content is stored in the `/content` directory
- TinaCMS configuration in `/tina` directory

## License

This project is licensed under the MIT License.