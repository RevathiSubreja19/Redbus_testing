import { Page,Locator, expect } from '@playwright/test';
import { config } from '../utils/config';

export class homepage {
   
    readonly fromInput:Locator;
    readonly toInput :Locator;
    readonly searchButton: Locator;
    

    constructor(private page: Page) {
        this.page = page;
        this.fromInput = page.locator('#srcinput');
        this.toInput = page.locator('#destinput');
        this.searchButton = this.page.getByRole('button', { name: 'Search Buses' });
         
    }

    //Launch Application
    async launch(): Promise<void> {

        await this.page.goto(config.baseUrl, { waitUntil: 'domcontentloaded' });
    }
    // TC#1: Validate Error Message upon clicking Search without entering Source and Destination
    async validateError(): Promise<void> {

        await this.searchButton.click();
        await expect(this.page.getByText(/source and destination/i)).toBeVisible();
    }

    //TC#2: Validate Search Functionality by entering Source and Destination
    
    async searchBuses(from: string, to: string): Promise<void> {
    
    await this.fromInput.fill(from);
    const fromOption = this.page.getByText(from,{exact: true}).first();
    await expect(fromOption).toBeVisible();
    await fromOption.click();

    await this.toInput.fill(to);
    const toOption = this.page.getByText(to,{exact: true}).first();
    await expect(toOption).toBeVisible();
    await toOption.click();
    }
    // Datepicker handling 

  async dateSelection(date: string): Promise<void> {

    // Split input date
    const [day, month, year] =date.split('/');

    // Month mapping
    const months: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    // Convert month number to month name
    const targetMonthYear =`${months[Number(month) - 1]} ${year}`;

    // Open Calendar
    await this.page.locator("div[class*='dateInputWrapper']").click();

    // Navigate until target month appears
    while (true) {

        const currentMonth =await this.page.locator('div[class*="monthYearHolidayWrap"]').first().textContent();

        if (currentMonth?.trim() === targetMonthYear) {
            break;
        }

        //Click Next Month Arrow
        else{
        await this.page.locator('i[class*="right"]').click();
        }
    }

    // Select Day
    await this.page.getByText(day, {exact: true}).click();
    }

    // Click Search
    async clickSearch(): Promise<void> {    
         await Promise.all([
            this.page.waitForURL( /search|bus-tickets/i),
            this.searchButton.click()
        ]);
    }
}