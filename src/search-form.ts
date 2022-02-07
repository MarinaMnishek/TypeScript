import { renderBlock } from './lib.js'

const dateNow = new Date;
const dateIn = new Date;
const dateOut = new Date;

dateIn.setDate(dateIn.getDate() + 1);
dateOut.setDate(dateOut.getDate() + 3);

export const checkInDateValue = dateIn.toISOString().slice(0, 10);
export const checkOutDateValue = dateOut.toISOString().slice(0, 10);

const checkInDateMin= dateNow.toISOString().slice(0, 10);
const lastDayOfMonth = new Date(dateNow.getFullYear(),dateNow.getMonth()+2,1)
const checkInDateMax = lastDayOfMonth.toISOString().slice(0, 10);




export function renderSearchFormBlock (checkInDate:string, checkOutDate:string) {
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>-->
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${checkInDateValue}" min="${checkInDateMin}" max="${checkInDateMax}" name="checkin" />

          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${checkOutDateValue}" min="${checkInDateMin}" max="${checkInDateMax}" name="checkout" />

          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
