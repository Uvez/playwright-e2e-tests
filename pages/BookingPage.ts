import { Console } from "console";
import { BasePage } from "./BasePage";

export class BookingPage extends BasePage{
    async goto(){
        await this.navigate('/#booking')
    }
async bookingHotel(checkInDate : string,checkOutDate:string) {
  const dateFields = this.page.locator("//div[@class='react-datepicker__input-container']/input")
  const dateFieldsCount = await dateFields.count();
 
        const dates = [
            checkInDate,checkOutDate
        ]

        for (let i =0;i<dateFieldsCount;i++){
            const input = dateFields.nth(i);
            
        dateFields.fill(dates[i])
        dateFields.press('Enter')

        console.log('Selected Check-in',dateFields)
        }
        await this.page.click("//button[text()='Check Availability']")
     }
}


