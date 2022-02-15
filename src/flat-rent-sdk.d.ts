export interface Database {
  id: string,
  title: string,
  details: string,
  photos: string[],
  coordinates: number[],
  bookedDates: Date[],
  price: number
}
export interface SearchParameters {
  city: string
  checkInDate: Date
  checkOutDate: Date
  priceLimit?: number

}
export function cloneDate(date:Date) : Date

export function addDays(date:Date, days:number): Date

export const backendPort: number
export const localStorageKey:string

export class FlatRentSdk {
  get(id: string): Promise<Database|null>
  search(parameters: SearchParameters): Promise<Database>
  book(flatId:string, checkInDate:Date, checkOutDate:Date): Promise<number>
  _assertDatesAreCorrect(inDate: Date, outDate: Date): void|Error
  _resetTime(date: Date) :number
  _calculateDifferenceInDays(startDate:Date, endDate:Date): number
  _generateDateRange(from:Date, to:Date): Date[]
  _generateTransactionId(): number
  _areAllDatesAvailable(flat:Database, dateRange:Date[]): boolean
  _formatFlatObject(flat:Database, nightNumber:number): Database
  _readDatabase():string
  _writeDatabase(database:Database):void
  _syncDatabase(database:Database):void
}


