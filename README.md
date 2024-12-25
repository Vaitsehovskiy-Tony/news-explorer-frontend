# News Explorer

Explore it here: [News Explorer](https://newsexplorer.nomoredomains.club/)

![2021-12-29_00-58-51](https://user-images.githubusercontent.com/54285416/147610753-756bbbe1-406d-4e13-81b1-3741c74c130e.png)

## Содержание

* [About the Project](#about)
* [Installation](#install)
	* [Cloning the Repository](#clone)
	*  [Installing Dependencies](#dep)
* [Running the App](#run)
* [Limitations](#limitations)
* [Conclusion](#in_сonclusion)

## <a name='about'></a>About the Project
News Explorer is a web application created as part of a diploma project for the Yandex.Practicum course. It was built using the following technologies:HTML/CSS, JavaScript, Node.js, and Webpack.

The app provides a news search service that allows users to search for news articles across various sources using keywords. It integrates with the NewsAPI, which aggregates news from multiple sources and returns structured JSON results.

Users can register an account and save their favorite search results in the "Saved Articles" section for easy access later.

##  <a name='install'></a>Installation

### <a name='clone'></a>Cloning the Repository

1. Clone the repository using the following command:

   ```bash
   git clone https://github.com/Vaitsehovskiy-Tony/news-explorer-frontend
   ```

2. Ensure Node.js is installed on your system. If not, you can download it here:
   ```
   https://nodejs.org/en/download/
   ```
   It's recommended to install the latest version.

###  <a name='dep'></a>Installing Dependencies

1. Navigate to the project folder: news-explorer-frontend:

   ```bash
   cd news-explorer-frontend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```



## <a name='run'></a>Running the App

1. Build the app from the source files:

   ```bash
   npm run build
   ```

   The compiled files will be stored in the **dist** folder.

2. Start the local development server to run the app:

   ```bash
    npm run dev
   ```

   The app will automatically open in your browser. 
  
## <a name='limitations'></a>Limitations

  The current NewsAPI subscription has a limit of 100 requests per day.
  As more features are added and the app attracts more users, this limit
  may be reached quickly. I am actively working on a solution to expand
  the app's capacity.

## <a name='in_conclusion'></a>Conclusion

  All features are functioning as intended at the time of the latest deployment.
  If you encounter any bugs or issues, I would greatly appreciate your feedback.
  Feel free to reach out via Telegram.
  [@tonyvaits](https://t.me/tonyvaits "Telegram").
  
  You can also explore the backend of the project here:
  https://github.com/Vaitsehovskiy-Tony/news-explorer-api
