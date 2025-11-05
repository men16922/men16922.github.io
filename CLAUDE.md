# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based personal portfolio website built using the developerFolio template. It showcases professional experience, skills, projects, certifications, and blog posts. The site is deployed to GitHub Pages and integrates with GitHub API and Medium RSS to dynamically fetch content.

## Technology Stack

- **Frontend Framework**: React 16 with Create React App
- **Styling**: SASS/SCSS for component styling
- **Build Tool**: react-scripts (Create React App)
- **Deployment**: GitHub Pages via gh-pages package
- **APIs**: GitHub GraphQL API for profile/repos, Medium RSS via rss2json for blog posts
- **CI/CD**: GitHub Actions for automated builds and deployments

## Development Commands

### Essential Commands
```bash
# Start development server (fetches GitHub/Medium data, then runs dev server)
npm start

# Build for production (fetches data, creates optimized build in /build)
npm run build

# Deploy to GitHub Pages (builds and pushes to gh-pages branch)
npm run deploy

# Run tests
npm test

# Format code with Prettier
npm run format

# Check if code is properly formatted
npm run check-format
```

### Environment Setup
Copy `env.example` to `.env` and configure:
```bash
cp env.example .env
```

Required environment variables:
- `REACT_APP_GITHUB_TOKEN`: GitHub personal access token (no scopes needed, just for rate limiting)
- `GITHUB_USERNAME`: Your GitHub username
- `USE_GITHUB_DATA`: Set to "true" to fetch GitHub profile data dynamically
- `MEDIUM_USERNAME`: Your Medium username (optional)

## Architecture and Structure

### Core Configuration
- **`src/portfolio.js`**: Main configuration file containing all portfolio content (greeting, skills, experience, projects, etc.). This is the primary file to edit when updating portfolio content.
- **`public/index.html`**: HTML template with SEO meta tags - update title and meta descriptions here
- **`src/_globalColor.scss`**: Global color scheme and theme variables

### Directory Structure
```
src/
├── components/         # Reusable UI components (cards, buttons, headers, etc.)
├── containers/         # Page sections (skills, experience, projects, contact, etc.)
├── contexts/           # React Context providers for theme and state management
├── hooks/              # Custom React hooks
├── assets/             # Static assets
│   ├── images/        # Image files
│   ├── lottie/        # Lottie animation JSON files
│   └── fonts/         # Custom fonts
├── portfolio.js       # Main configuration - edit this to customize content
├── App.js             # Main application component with routing
└── _globalColor.scss  # Global theme colors
```

### Data Fetching Flow
The `fetch.js` script runs automatically before `npm start` and `npm run build`:
1. Fetches GitHub profile data via GraphQL API (pinned repos, bio, avatar)
2. Fetches Medium blog posts via RSS2JSON API
3. Saves data to `public/profile.json` and `public/blogs.json`
4. React components read these files at runtime to display dynamic content

### Component Architecture
- **Components**: Self-contained, reusable UI elements (e.g., `experienceCard`, `blogCard`, `githubRepoCard`)
- **Containers**: Compose multiple components into full page sections (e.g., `skills`, `workExperience`, `projects`)
- **Contexts**: Theme management (dark/light mode toggle)

## Customizing Content

### Updating Portfolio Content
Edit `src/portfolio.js` to modify:
- Personal greeting and bio
- Social media links
- Skills and tech stack
- Work experience
- Education
- Projects (both GitHub-integrated and custom "Big Projects")
- Achievements and certifications
- Blog settings
- Contact information
- Twitter integration

Each section in `portfolio.js` exports a configuration object that components consume.

### Theming
Global colors are defined in `src/_globalColor.scss`. Components use these SCSS variables for consistent theming. The site supports dark/light mode via Context API.

### Adding Lottie Animations
Download Lottie JSON files from [lottiefiles.com](https://lottiefiles.com/) and place in `src/assets/lottie/`. Import and reference in components using the `DisplayLottie` component.

## Deployment

### GitHub Actions (Automated)
The repository uses GitHub Actions for CI/CD:
- **Trigger**: Pushes to master branch, manual workflow dispatch, or weekly on Mondays at 12:00 UTC
- **Workflow**: `.github/workflows/deploy.yml`
  1. Fetches GitHub/Medium data using repository secrets
  2. Installs dependencies
  3. Builds production bundle
  4. Deploys to `gh-pages` branch
- **Environment Variables**: Set in workflow file and use GitHub secrets (`GITHUB_TOKEN` is auto-provided)

### Manual Deployment
```bash
npm run deploy
```
This builds the site and pushes the `build/` directory to the `gh-pages` branch.

## Code Formatting

Prettier is configured with specific style rules in `.prettierrc`:
- No trailing commas
- No bracket spacing
- Arrow functions without parens where possible
- Double quotes
- 2-space indentation
- Semicolons required

Always run `npm run format` before committing code changes.

## GitHub Pages Configuration

- **Homepage**: Set in `package.json` to `https://men16922.github.io`
- **Branch**: Deploys to `gh-pages` branch
- **Custom Domain**: Can be configured via CNAME file in `public/` directory

## Important Notes

- The site fetches real GitHub data from pinned repositories - ensure repos are pinned on your GitHub profile
- Medium integration requires a public Medium profile with published posts
- The splash screen animation duration is configurable in `portfolio.js` (currently 2000ms)
- Resume link in portfolio.js points to a Notion page - update as needed
- The site is optimized for mobile devices and includes responsive design
