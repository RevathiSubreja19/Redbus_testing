import {Page,Locator, expect} from '@playwright/test';
import { HomePage } from './HomePage';

export class SearchResultPage {

   private page: Page;

    constructor(page: Page) {

        this.page = page;
    }

    // Fetch nth bus details
    async getNthBusDetails(n: number) {

        //await this.page.waitForLoadState('networkidle');

        const busName = await this.page.locator('div[class*="travels"]').nth(n - 1).textContent();

        const departureTime = await this.page.locator('p[class*="boardingTime"]').nth(n - 1).textContent();
        const arrivalTime = await this.page.locator('p[class*="droppingTime"]').nth(n - 1).textContent();

        const busPrice = await this.page.locator('div[class*="fare"]').nth(n - 1).textContent();

        
        console.log('Bus Number: ', n);
        console.log('Bus Name: ', busName);
        console.log('Departure Time: ', departureTime);
        console.log('Arrival Time: ', arrivalTime);
        console.log('Price: ', busPrice);
    }
}   


