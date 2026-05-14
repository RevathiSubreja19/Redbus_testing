import { Page,Locator, expect } from '@playwright/test';
import { Config } from '../utils/config';

export class HomePage {
   
    fromInput:Locator;
    toInput :Locator;
    searchButton: Locator;
    

    constructor(private page: Page) {
        this.page = page;
        this.fromInput = page.locator('#srcinput');
        this.toInput = page.locator('#destinput');
        this.searchButton = this.page.getByRole('button', { name: 'Search Buses' });
         
    }

    //Launch Application
    async launch() {

        await this.page.goto(Config.baseUrl, { waitUntil: 'domcontentloaded' });
    }
    // TC#1: Validate Error Message upon clicking Search without entering Source and Destination
    async validateError() {

        await this.searchButton.click();
        await expect(this.page.getByText(/source and destination/i)).toBeVisible();
    }

    //TC#2: Validate Search Functionality by entering Source and Destination and clicking Search
    
    async searchBuses(from: string, to: string) {
    
    await this.fromInput.fill(from);
    const fromOption = this.page.getByText(from,{exact: true}).first();
    await fromOption.click();

    await this.toInput.fill(to);
    const toOption = this.page.getByText(to,{exact: true}).first();
    await toOption.click();
    }
    

    // Click Search
    async clickSearch() {    
         await Promise.all([
            this.page.waitForURL(/bus-tickets/i),
            this.searchButton.click()
        ]);
    }
}