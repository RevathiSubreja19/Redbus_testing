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
