import { test, expect } from '@playwright/test';
import { HomePage } from '../src/Pages/HomePage';
import { SearchResultPage } from '../src/Pages/SearchResultPage';
import { Config } from '../src/utils/config';

test.describe('RedBus scenarios', () => {
  let homePage: HomePage;
  let searchResultPage: SearchResultPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    searchResultPage = new SearchResultPage(page);
    await homePage.launch()
  });

  test('TC#01-Validate empty search Error Message', async ({ page }) => {
    await homePage.validateError();

  });

  test.only('TC#02-Validate Search Functionality', async ({ page }) => {
    
    await homePage.searchBuses(Config.source, Config.destination);
    await homePage.clickSearch();
    await searchResultPage.getNthBusDetails(Config.nthBus);
  });
});