import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import {getUserData, getFavoritesAmount, renderUserBlock} from './user.js'
import {checkInDateValue} from './search-form.js';
import {checkOutDateValue} from './search-form.js';
// import { renderToast } from './lib.js'
import {getTodosByCount} from "./testAPI.js";
import {getUser, getUserGeo} from "./testAPI.js";




// const object= {
//   userName: 'Wade Warren',
//   linkToAvatar: 'img/avatar.png'
// }
// let favoriteItemsAmount = 2;
// localStorage.setItem('user', JSON.stringify(object));
// localStorage.setItem('favoritesAmount', favoriteItemsAmount.toString());
const user = JSON.parse(localStorage.getItem('user'));
const favoritesAmount = localStorage.getItem('favoritesAmount')


window.addEventListener('DOMContentLoaded', () => {

  getTodosByCount(7)
    .then (todos => {
      console.log(todos)
    })
    .catch((error) => {
      console.error(error)
    })

  // getUser()
  //   .then (user => {
  //     console.log(user)
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //   })
  //
  // getUserGeo()
  //   .then (address => {
  //     console.log(address.geo)
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //   })

  renderUserBlock(getUserData(user),getFavoritesAmount (favoritesAmount))
  renderSearchFormBlock(checkInDateValue, checkOutDateValue)
  renderSearchStubBlock()
  // renderToast(
  //     {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
  //     {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  // )



})

