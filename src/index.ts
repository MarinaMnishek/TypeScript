import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import {getUserData, getFavoritesAmount, renderUserBlock} from './user.js'
import { renderToast } from './lib.js'




// const object= {
//   userName: 'Wade Warren',
//   linkToAvatar: 'img/avatar.png'
// }
// let favoriteItemsAmount = 2;
// localStorage.setItem('user', JSON.stringify(object));
// localStorage.setItem('favoritesAmount', favoriteItemsAmount.toString());
const user = JSON.parse(localStorage.getItem('user') || '{}');
const favoritesAmount:string|number|null = localStorage.getItem('favoritesAmount')


window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock(getUserData(user), getFavoritesAmount (favoritesAmount))
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )

})

