# AuthApp

AuthApp is a React Native application that focuses on shifts and authentication logic.

## Features

- Display and manage shifts.
- Toggle visibility of the shifts list.
- Persistent storage of list visibility using `@react-native-async-storage/async-storage`.
- Navigation between screens using `@react-navigation/native`.

## Installation

### Prerequisites

- NodeJS version >=16

### Steps

1. Clone the repository.
 
   git clone <repository_url>
   cd authapp

Install the dependencies.

Copy code
npm install

To start the application on Android:


Copy code
npm run android

Or on iOS:


Copy code
npm run ios


Dependencies

@react-native-async-storage/async-storage: For persistent storage.
@react-navigation/native and @react-navigation/stack: For navigation.
react, react-native: Core libraries.
Additional UI libraries such as react-native-gesture-handler, react-native-masked-text, react-native-svg for enhanced UI components.
DevDependencies
Babel, Eslint, Jest, Prettier, and TypeScript for development, testing, and code quality.

Scripts

android: Run the app on Android.
ios: Run the app on iOS.
lint: Run ESLint.
start: Start the React Native server.
test: Run tests using Jest.

Архитектурный подход:

Навигация:

Используется библиотека @react-navigation для навигации между экранами.
Навигационный контейнер настроен в компоненте App, и в нем определены стеки для разных экранов.
Экраны:

Все экраны приложения находятся в папке screens.
Каждый экран имеет свой собственный файл со стилями и компонентами.
Навигация между экранами выполняется с использованием навигационных пропсов.
Состояние:

Для управления состоянием приложения используются локальное хранилище AsyncStorage и стейт-переменные внутри компонентов.
Стили:

Стили компонентов и экранов определены в файлах styles.js.
Данные:

Данные о сменах (shiftsData) хранятся локально внутри файла MyShiftsScreen.js. В реальном приложении они могут быть загружены с сервера.
Управление видимостью:

Состояние видимости списка смен (isListVisible) хранится в локальном хранилище AsyncStorage. Оно используется для сохранения предпочтений пользователя между сессиями.
Обработка событий:

Все обработчики событий, такие как нажатие кнопок и обновление состояния, находятся внутри соответствующих компонентов.
Структура проекта:

Проект имеет структуру с разделением на компоненты, стили, экраны и навигацию.
