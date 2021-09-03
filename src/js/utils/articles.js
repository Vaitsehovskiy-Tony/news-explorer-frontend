import { cardList } from '../constants/constants';

// eslint-disable-next-line import/prefer-default-export
export function showFirstArticles(newArticles, keyword, savedArticles) {
  console.log('упали в показать 3 первых артикла');

  document.querySelector('.results__ok').classList.add('results_is-opened');
  cardList.renderMainPage(newArticles.slice(0, 3), keyword, savedArticles);
  newArticles.splice(0, 3);
  if (newArticles.length > 0) {
    document.querySelector('.results__bttn').classList.add('results__bttn_is-opened');
  }
  return newArticles.slice(0);
}

// eslint-disable-next-line consistent-return
export function noResults(newArticles) {
  document.querySelector('.results__searching').classList.remove('results_is-opened');
  if (newArticles.length === 0) {
    return document.querySelector('.results__nothing').classList.add('results_is-opened');
  }
}