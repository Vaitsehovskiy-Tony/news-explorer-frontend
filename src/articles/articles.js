import "../styles/articles.css";
import SavedCard from '../js/components/SavedCard';
import NewsSection from '../js/components/NewsSection';
import MainApi from '../js/api/MainApi';
import Header from '../js/components/Header';
import selectors from '../js/constants/selectors';
import searchForm from '../js/components/SearchForm';
import InfoSaved from '../js/components/InfoSaved';
import {
  mainApiConfig,
} from '../js/constants/constants';


// добавить проверку разрешения посещения(isLoggedIn)
const mainApi = new MainApi(mainApiConfig);
const header = new Header(
  selectors.header,
  {
    callback: () => {
      mainApi.logout()
      .then(() => {
        mainApi.isLoggedIn = false;
        localStorage.removeItem('token');
      })
      .catch((err) => console.log(err));
    }
  },
  {
    popupCallback: () => popupSignin.open(),
  }
  );

mainApi.getUserInfo()
  .then((res) => {
    mainApi.isLoggedIn = true;
    header.render(mainApi.isLoggedIn, res.data.name);
  })
  .catch((err) => {
    console.log(err);
  });

mainApi.getArticles()
  .then((savedArticles) => {
    const infoSaved = new InfoSaved(
      savedArticles,
      selectors.infoSaved,
      // объединить в промис олл и имя закидывать оттуда, это временно
      name = 'Anton',
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
                .then((res) =>{
                collection.removeCard(card);
                console.log('карточка удалена')
                })
                .catch((err) => console.log(err))
              }
            }
          );
          collection.addCard(savedCard.create(data));
        },
        newsToRender: savedArticles.data,
      },
    );
    collection.showNews();
  })
  .catch((err) => console.log(err))

header.setEventListeners();


// selectors.headrBttnMobMenuOpen.addEventListener('click', () => {
//   selectors.headerMob.classList.add('header-mob_is-opened');
// });

// document.querySelector('.header-mob_is-opened').addEventListener('click', ()=> {
//   selectors.headerMob.classList.remove('header-mob_is-opened')
// })

// selectors.headrMobClose.addEventListener('click', () => {
//   selectors.headerMob.classList.remove('header-mob_is-opened');
// });
