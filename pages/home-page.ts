import { expect, Locator, Page } from '@playwright/test'


export class HomePage {
    textHeader: Locator

constructor(page:Page){
    this.textHeader = page.locator('h1[class="hero-title "] span');
}

async validateHeader(expectedHeader: string): Promise<void> {
        
       await expect(this.textHeader).toHaveText(expectedHeader)
    }


}
