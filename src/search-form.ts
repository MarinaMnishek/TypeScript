import {renderBlock} from './lib.js'

// date in inputs
const dateNow = new Date;
const dateIn = new Date;
const dateOut = new Date;

dateIn.setDate(dateIn.getDate() + 1);
dateOut.setDate(dateOut.getDate() + 3);

export const checkInDateValue = dateIn.toISOString().slice(0, 10);
export const checkOutDateValue = dateOut.toISOString().slice(0, 10);





//results from input in searchForm

interface SearchFormData {
  checkInDate: string
  checkOutDate: string
  maxPrice: string
}

function handleForm(e:any){
  const dateIn = (document.getElementById('check-in-date') as HTMLInputElement).value
  const dateOut = (document.getElementById('check-out-date') as HTMLInputElement).value
  const maxPrice = (document.getElementById('max-price') as HTMLInputElement).value
  e.preventDefault()


  let searchFormData:SearchFormData = {
    checkInDate: dateIn,
    checkOutDate: dateOut,
    maxPrice: maxPrice
  }

  searchForm(searchFormData)

}

function searchForm(searchFormData: SearchFormData):void {
  const result = `Дата заезда: ${searchFormData.checkInDate} \nДата выезда: ${searchFormData.checkOutDate} \nМаксимальная цена суток: ${searchFormData.maxPrice}`
  console.log( result)
}


export function renderSearchFormBlock() {

  const checkInDateMin = dateNow.toISOString().slice(0, 10);
  const lastDayOfMonth = new Date(dateNow.getFullYear(), dateNow.getMonth() + 2, 1)
  const checkInDateMax = lastDayOfMonth.toISOString().slice(0, 10);

  renderBlock(
    'search-form-block',
    `
    <form action="/" method="#" >
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
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



  const form = document.querySelector('form')
  if (form === null) {
    return console.log('Something')
  }
  form.addEventListener('submit', handleForm)

}



