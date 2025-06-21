import { BasePage } from "./BasePage";

export class AdminPage extends BasePage{
    async goto(){
        await this.navigate('/#admin')
    }
}