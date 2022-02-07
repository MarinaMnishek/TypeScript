import {renderBlock} from './lib.js'



export function getUserData(user: unknown) {
  if (user === null) {
    user = {
      userName: 'имя пользователя не найдено',
      linkToAvatar: ''
    }
  }
  return user
}

export function getFavoritesAmount(favoritesAmount: unknown) {

  if (favoritesAmount !== '') {
    favoritesAmount = Number(localStorage.getItem('favoritesAmount'))
  }
  return favoritesAmount
}


export function renderUserBlock(user, favoriteItemsAmount) {

  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false

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
