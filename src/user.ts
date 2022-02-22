import {renderBlock} from './lib.js'



export function getUserData(user: User|null) {
  if (user === null) {
    user = {
      userName: 'имя пользователя не найдено',
      linkToAvatar: ''
    }
  }
  return user
}

export function getFavoritesAmount(favoritesAmount: string |number| null) {

  if (favoritesAmount !== '') {
    favoritesAmount = Number(localStorage.getItem('favoritesAmount'))
  }
  return favoritesAmount
}

export interface User {
  userName: string,
  linkToAvatar: string
}

export function renderUserBlock(user: User|null, favoriteItemsAmount: string|number|null) {

  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false
if (user ===null){
  return console.log('Something went wrong...')
}

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${user.linkToAvatar}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${user.userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
