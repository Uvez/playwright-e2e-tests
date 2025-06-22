import { Console } from "console";
import { BasePage } from "./BasePage";

export class BookingPage extends BasePage{
    async goto(p0: string){
        await this.navigate('/#booking')
    }
async bookingHotel(dates :[string,string]): Promise <{checkIn:string,checkOut:string}>{
  const dateFields = this.page.locator("//div[@class='react-datepicker__input-container']/input")
  const dateFieldsCount = await dateFields.count();
  const result ={ checkIn:'',checkOut:''}

        for (let i =0;i<=dates.length-1;i++){
            const input = dateFields.nth(i);
             const dateValue = dates[i];

            if (!dateValue || typeof dateValue !== 'string') {
                throw new Error(`Invalid date value at index ${i}: ${dateValue}`);
            }
            
            input.clear()
            input.fill(dateValue)
            input.press('Enter')
            const val = dateValue
            if(i==0) {result.checkIn = val}
            else{result.checkOut=val};
        }
        await this.page.getByRole('button', { name: 'Check Availability' }).click();
        return result;

     }
}


