import { test, expect } from '@playwright/test';
import { homepage } from '../src/Pages/HomePage';
import { searchresultspage } from '../src/Pages/searchresultspage';
import { config } from '../src/utils/config';

test.describe('RedBus scenarios', () => {
  let homePage: homepage;
  let searchResultPage: searchresultspage;

  test.beforeEach(async ({ page }) => {
    homePage = new homepage(page);
    searchResultPage = new searchresultspage(page);
    await homePage.launch()
  });

  test('TC#01-Validate empty search Error Message', async () => {
    await homePage.validateError();

  });

  test.only('TC#02-Validate Search Functionality', async () => {
    
    await homePage.searchBuses(config.source, config.destination);
    await homePage.dateSelection(config.date);
    await homePage.clickSearch();
    const busDetails = await searchResultPage.getNthBusDetails(config.nthBus);
    console.log(busDetails);
  });
});