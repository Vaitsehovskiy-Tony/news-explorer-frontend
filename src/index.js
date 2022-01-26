import './styles/index.css';
import NewsCard from './js/components/NewsCard';
import NewsSection from './js/components/NewsSection';
import MainApi from './js/api/MainApi';
import NewsApi from './js/api/NewsApi';
import FormValidator from './js/components/FormValidator';
// import Popup from './js/components/Popup';
import PopupSuccess from './js/components/PopupSuccess';
import PopupSignin from './js/components/PopupSignin';
import PopupSignup from './js/components/PopupSignup';
import Header from './js/components/Header';
import SearchForm from './js/components/SearchForm';
import selectors from './js/constants/selectors';
import {
  mainApiConfig,
  newsApiRequest
} from './js/constants/constants';

// инициализация api взаимодествия с сервером и newsApi
const newsApi = new NewsApi(newsApiRequest);
const mainApi = new MainApi(mainApiConfig);
// класс валидации попапа регистрации
const validatorSignup = new FormValidator(
  selectors.popupFormSignup,
  selectors.validator,
);
// класс валидации попапа авторизации
const validatorSignin = new FormValidator(
  selectors.popupFormSignin,
  selectors.validator,
);

// инициализация формы поиска и раздела новостей
const searchForm = new SearchForm(
  selectors.searchSelector,
  selectors.search,
  {
    // коллбэк поиска новостей
    getNews: (keyword) => {
      Promise.all([
        newsApi.getInitialCards(keyword),
        mainApi.getArticles(),
      ])
      .then(([searchResults, savedCards]) => {
        searchForm.newsNoResultsCheck(searchResults);

        // инициализация класса секции с карточками
        const newsSection = new NewsSection(
          selectors.newsSection,
          keyword,
          {
            // коллбэк отрисовки результатов поиска
            cardCreator: (data, keyword) => {

              // инициализация класса одной карточки
              const newsCard = new NewsCard(
                selectors.cardTemplateMain,
                mainApi.isLoggedIn,
                selectors.newsCard,
                {
                  addNews: (card) => {
                    mainApi.postArticle(card)
                      .then((res) => newsCard.addId(res.data._id))
                      .catch((err) => console.error(err))
                  },
                  removeNews: (cardId) => {
                    mainApi.deleteArticle(cardId)
                    .catch((err) => console.error(err))
                  }
                }
              );
              // пуш карточки в секцию
              newsSection.addCard(newsCard.create(data, keyword));
            },
            // проверка нет ли сохраненных карточек
            newsToCheck: {
              savedNews: savedCards === undefined? saved = [] : savedCards.data,
              newNews: searchResults.articles,
            }
          },
        );

        // рендер новостей
        newsSection.showNews();
      })
      .catch((err) => console.error(err))
    }
  }
);

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
      })
      .catch((err) => console.error(err));
    },
    popupCallback: () => popupSignin.open(),
    getInfo: () => {
      mainApi.getUserInfo()
      .then((res) => {
        header.render(
          mainApi.isLoggedIn = true,
          res.data.name
        )
      })
      .catch((err) => {
        console.error(err);
      });
    }
  },
);

// класс попапа авторизации
const popupSignin = new PopupSignin(
  selectors.popupAltButton,
  selectors.popupFormSignin,
  {
  callback: (inputs) => {
    mainApi.signIn(
      inputs[0],
      inputs[1],
    )
    .then((res) => {
      localStorage.setItem('token', res.token);
      mainApi.isLoggedIn = true;
    })
    .then(()=> {
      mainApi.getUserInfo()
      .then((res) => {
        header.render(
          mainApi.isLoggedIn,
          res.data.name,
        );
      })
      .catch((err) => {
        console.error(err);
      });
    })
    .catch((err) => console.error(err));
  },
  altPopup: (evt) => {
    popupSignup.open(evt);
  }
});

const popupSuccess = new PopupSuccess(
  selectors.popupAltButton,
  selectors.popupFormSignupOk,
  {
    altPopup: (evt) => {
      popupSignin.open(evt);
    }
  });


// класс попапа регистрации и успешной регистрации
const popupSignup = new PopupSignup(
  selectors.popupAltButton,
  selectors.popupFormSignup,
  {
  callback: (inputs) => {
    mainApi.signUp(
      inputs[0],
      inputs[1],
      inputs[2],
    )
    .then((res) => {
      res.status;
      res;
      console.log(res);
      popupSuccess.open();
    })
    .catch((err) => console.error(err));
  },
  altPopup: (evt) => {
    popupSignin.open(evt);
  }
});



// установка слушателя событий на форму поиска
// проверка токена хедером
// включение валидации в попапах
searchForm.setSearchListener();
header.tokenCheck(localStorage.getItem('token'));
validatorSignin.enableValidation();
validatorSignup.enableValidation();
