# Redbus Testing

Playwright test suite for RedBus (basic search functionality).

## Project Structure

- `tests/` - Playwright test files
- `src/Pages/` - Page objects (`HomePage.ts`, `SearchResultPage.ts`)
- `utils/` - helper utilities

## Prerequisites

- Node.js 18+ installed
- Git configured with push access to `https://github.com/RevathiSubreja19/Redbus_testing`

## Install

```bash
npm install
npx playwright install
```

## Run tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/redbus.spec.ts
```

Open report after a run:

```bash
npx playwright show-report
```

## Notes

Update README with CI details or contribution instructions as needed.

---

Repository: https://github.com/RevathiSubreja19/Redbus_testing

## Continuous Integration (GitHub Actions)

To run the Playwright tests on GitHub Actions, add a workflow file at `.github/workflows/playwright.yml` with the following example:

```yaml
name: Playwright Tests

on:
	push:
		branches: [ main ]
	pull_request:
		branches: [ main ]

jobs:
	test:
		runs-on: ubuntu-latest
		steps:
			- uses: actions/checkout@v4
			- name: Use Node.js
				uses: actions/setup-node@v4
				with:
					node-version: '18'
			- run: npm ci
			- run: npx playwright install --with-deps
			- run: npx playwright test --reporter=list
			- name: Upload Playwright report
				if: always()
				uses: actions/upload-artifact@v4
				with:
					name: playwright-report
					path: playwright-report
```

Notes:
- Adjust the Node version and test matrix as needed.
- The workflow uploads the `playwright-report` directory as an artifact for easy download.

Add a CI badge to the top of this `README.md` once the workflow is created in the repository.
