import './styles/index.css';
import NewsCard from './js/components/NewsCard';
import NewsSection from './js/components/NewsSection';
import MainApi from './js/api/MainApi';
import NewsApi from './js/api/NewsApi';
import FormValidator from './js/components/FormValidator';
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

const newsApi = new NewsApi(newsApiRequest);
const mainApi = new MainApi(mainApiConfig);
const validatorSignup = new FormValidator(
  selectors.popupFormSignup,
  selectors.validator,
);
const validatorSignin = new FormValidator(
  selectors.popupFormSignin,
  selectors.validator,
);


// 5. проброс ошибки с сервера
// 8. логаут в сэйвд -> переход на главную
// 9. Клик по главная на главной - ничего не происходит, моб меню убрать. Тоже самое на сэйвд
// 10. проверка нет ли лайкнутых карточек в выдаче
// 11. кард темплейт в отдельный файл

// доедлки:
// попап моб закрытие по оверлею и esc
// ридми
// описание автора
// фавикон
// всё проверить, почистить, убрать все ост eventListeners
// дальнейшее развитие - возможность открыть карточку




const searchForm = new SearchForm(
  selectors.searchSelector,
  selectors.search,
  {
    getNews: (keyword) => {
      Promise.all([
        mainApi.getArticles(),
        newsApi.getInitialCards(keyword),
      ])
      .then(([savedCards, searchResults]) => {
        searchForm.newsNoResultsCheck(searchResults);
        const newsSection = new NewsSection(
          selectors.newsSection,
          keyword,
          {
            cardCreator: (data, keyword) => {
              const newsCard = new NewsCard(
                selectors.cardTemplateMain,
                mainApi.isLoggedIn,
                selectors.newsCard,
                {
                  addNews: (card) => {
                    mainApi.postArticle(card)
                    // что здесь у джеллу
                      .then((res) =>{
                      console.log('карточка сохранена')
                      })
                      .catch((err) => console.log(err.message))
                  },
                  removeNews: (cardId) => {
                    mainApi.deleteArticle(cardId)
                      .then((res) =>{
                      console.log('карточка удалена')
                      })
                      .catch((err) => console.log(err.message))
                  }
                }
                );
              newsSection.addCard(newsCard.create(data, keyword));
            },
            newsToCheck: {savedCards, searchResults},
          },
        );
        newsSection.showNews();
      })
      .catch((err) => console.log(err.message))
    }
  }
);

const header = new Header(
  selectors.header,
  {
    callback: () => {
      mainApi.logout()
      .then(() => {
        mainApi.isLoggedIn = false;
        localStorage.removeItem('token');
        // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        document.location.reload();
      })
      .catch((err) => console.log(err));
    },
    popupCallback: () => popupSignin.open(),
    getInfo: () => {
      mainApi.getUserInfo()
      .then((res) => {
        // mainApi.isLoggedIn = true;
        header.render(
          mainApi.isLoggedIn = true,
          res.data.name
        )
      })
      .catch((err) => {
        console.log(err);
      });
    }
  },
);
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
      localStorage.setItem('token', res.token);
      mainApi.isLoggedIn = true;
      console.log(res.token);
    })
    .then(() => {
      mainApi.getUserInfo()
      .then((res) => {
        header.render(
          mainApi.isLoggedIn,
          res.data.name,
        );
        const popupSuccess = new PopupSuccess(selectors.popupFormSignupOk);
        popupSuccess.open();
      })
      .catch((err) => {
        console.log(err);
      });
    })
    .catch((err) => console.log(err));
    mainApi.signIn(
      inputs[0],
      inputs[1],
    )
  },
  altPopup: (evt) => {
    popupSignin.open(evt);
  }
});

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
        console.log(err);
      });
    })
    .catch((err) => console.log(err));
  },
  altPopup: (evt) => {
    popupSignup.open(evt);
  }
});


searchForm.setSearchListener();
header.tokenCheck(localStorage.getItem('token'));
// может можно убрать в инициализацию хотя хз
validatorSignin.enableValidation();
validatorSignup.enableValidation();
