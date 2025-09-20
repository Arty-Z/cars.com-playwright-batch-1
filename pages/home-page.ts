import { expect, Locator, Page } from '@playwright/test'


export class HomePage {
    textHeader: Locator

constructor(page:Page){
    this.textHeader = page.locator('spark-stack[class="search-bar-horizontal-or"] strong');
}

async validateHeader(expectedHeader: string): Promise<void> {
        
       await expect(this.textHeader).toHaveText(expectedHeader)
    }


}
