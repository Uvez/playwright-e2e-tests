import { BasePage } from "./BasePage";

export class RoomPage extends BasePage{
    async goto(p0: string){
        await this.navigate('/#rooms')
    }

 async bookRoomType(roomType:string,roomPrice:string){
  
        this.page.locator('.card-title').filter({ hasText: roomType }).isVisible()
        const footer = this.page.locator('.card-footer').filter({ hasText: roomPrice }).first();
        await footer.getByRole('link', { name: 'Book now' }).click();               

        //this.page.locator('.fw-bold mb-2').filter({ hasText: 'Single Room' }).isVisible()
        await this.page.locator("//div[@class='card border-0 shadow booking-card']").isVisible()
        await this.page.getByRole('button',{name:'Reserve Now'}).click()
        //this.page.locator('.card-title fs-4 fw-bold mb-3').filter({ hasText: "Book This Room" }).isVisible();
}

}



