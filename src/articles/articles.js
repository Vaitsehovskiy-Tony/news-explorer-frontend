import "../styles/articles.css";
import SavedCard from '../js/components/SavedCard';
import NewsSection from '../js/components/NewsSection';
import MainApi from '../js/api/MainApi';
import Header from '../js/components/Header';
import selectors from '../js/constants/selectors';
import InfoSaved from '../js/components/InfoSaved';
import {
  mainApiConfig,
} from '../js/constants/constants';

// инициализация api взаимодествия с сервером
const mainApi = new MainApi(mainApiConfig);

// класс хедера
const header = new Header(
  selectors.header,
  {
    callback: () => {
      mainApi.logout()
      .then(() => {
        mainApi.isLoggedIn = false;
        localStorage.removeItem('token');
        document.location.reload();
        document.location.href = "./index.html";
      })
      .catch((err) => console.error(err));
    }
  },
  { popupCallback: () => popupSignin.open() }
  );

// инициализация класса карточки


// класс отрисовки статистики
// класс секции карточек
Promise.all([
  mainApi.getUserInfo(),
  mainApi.getArticles()
])
  .then(([info, savedArticles]) => {
    header.render(mainApi.isLoggedIn = true, info.data.name);
    const infoSaved = new InfoSaved(
      savedArticles,
      selectors.infoSaved,
      info.data.name,
    );
    infoSaved.giveInfo();
    const collection = new NewsSection(
      selectors.newsSection,
      '',
      {
        cardCreator: (data) => {
          const savedCard = new SavedCard(
            selectors.cardTemplateSaved,
            selectors.newsCard,
            {
              itemToRemove: (id, card) => {
                mainApi.deleteArticle(id)
                .then(() =>{
                collection.removeCard(card);
                document.location.reload();
                })
                .catch((err) => console.error(err))
              }
            }
          );
          collection.addCard(savedCard.create(data));
        },
        newsToCheck: {savedNews: savedArticles.data},
      },
    );
    collection.showNews();
  })
  .catch((err) => console.error(err))



// установка слушателя хедеру
header.setEventListeners();
