export default class InfoSaved {
  constructor(array, infoSaved, name) {
    this._array = array.data;
    this._title = infoSaved.infoTitle;
    this._name = name;
    this._infoTemplate = infoSaved.infoTemplate;
    this._subTitle = document.querySelector('.info__keywords');
  }

  giveInfo() {
    this._getKeywords();
    this._makeTitle();
    this._getKeywordsData();
  }

  _makeSubtitle(first, second) {
    if (first === null) this._subTitle.textContent = '';
    else {
      this._subTitle.querySelector('.info__keyword-first').textContent = first;
      if (second) {
        this._subTitle.querySelector('.info__keyword-second').textContent = second;
      }
    }
  }

  _makeTitle() {
    if (this._array.length === 0) {
      this._title.textContent = `${this._name}, у вас нет сохранённых статей`;
    } else {
      this._title.textContent = `${this._name}, у вас ${this._array.length} сохранённых статей`;
    }
  }

  _getKeywordsData() {
    // массив keywords
    this._topics = Object.keys(this._keywords);

    // размер объекта keywords
    this.number = 0;
    for (let i in this._keywords) {
      this.number++;
    };

    // возывает рендер субтайтла с двумя строками
    switch(this._topics.length) {
      case 0:
        this._makeSubtitle(null);
        break;
      case 1:
        this._makeSubtitle(this._topics[0]);
        break;
      case 2:
        this._makeSubtitle(this._topics[0], this._topics[1]);
        break;
      case 3:
        this._makeSubtitle(`${this._topics[0]}, ${this._topics[1]}`, this._topics[2]);
        break;
      default:
        this._makeSubtitle(`${this._topics[0]}, ${this._topics[1]}`, `${[this.number-2]} другим`);
        break;
    }
  }

  _getKeywords() {
    this._keywords = {};
    const _keywordsArray = this._array.map(i => i.keyword);
    _keywordsArray.forEach(i => {
      this._keywords[i] = (this._keywords[i] || 0) + 1;
    });
  }
}
