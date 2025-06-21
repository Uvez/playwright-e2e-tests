import { BasePage } from "./BasePage";

export class BookingPage extends BasePage{
    async goto(){
        await this.navigate('/#booking')
    }
}