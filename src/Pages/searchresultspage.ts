import {Page, expect} from '@playwright/test';

export interface BusDetails {
    busName: string;
    departureTime: string;
    arrivalTime: string;
    busPrice: string;
}

export class searchresultspage {

   private page: Page;

    constructor( page: Page) {

        this.page = page;
    }

    // Fetch nth bus details
    async getNthBusDetails(n: number): Promise<BusDetails> {

       // await this.page.waitForLoadState('networkidle');

        const busName = await this.page.locator('div[class*="travels"]').nth(n - 1).textContent();

        const departureTime = await this.page.locator('p[class*="boardingTime"]').nth(n - 1).textContent();
        const arrivalTime = await this.page.locator('p[class*="droppingTime"]').nth(n - 1).textContent();

        const busPrice = await this.page.locator('div[class*="fare"]').nth(n - 1).textContent();

        expect(busName).toBeTruthy();
        expect(departureTime).toBeTruthy();
        expect(arrivalTime).toBeTruthy();
        expect(busPrice).toBeTruthy();
        
        return {
            busName: busName?.trim() || '',
            departureTime: departureTime?.trim() || '',         
            arrivalTime: arrivalTime?.trim() || '',
            busPrice: busPrice?.trim() || '',
        };
        
    }
}   


