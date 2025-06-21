import { BasePage } from "./BasePage";

export class RoomPage extends BasePage{
    async goto(){
        await this.navigate('/#rooms')
    }
}