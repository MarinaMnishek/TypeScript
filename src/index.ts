import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import {checkInDateValue} from './search-form.js';
import {checkOutDateValue} from './search-form.js';




window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Wade Warren', 'img/avatar.png', 1)
  renderSearchFormBlock(checkInDateValue, checkOutDateValue)
  renderSearchStubBlock()

})
