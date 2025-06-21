import { BasePage } from "./BasePage";

export class LocationPage extends BasePage{
    async goto(){
        await this.navigate('/#location')
    }
}