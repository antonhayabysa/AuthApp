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

## Архитектурный подход для React Native приложения "authapp"

### 1. **Component-Based Architecture**:
   - React Native строится на компонентном подходе, что облегчает повторное использование и модульность кода.
   
### 2. **Functional Components with Hooks**:
   - Использование функциональных компонентов с хуками (например, useState, useEffect) делает код более чистым и понятным.

### 3. **State Management**:
   - Для управления состоянием используются локальные состояния через хуки. При масштабировании приложения можно рассмотреть использование Redux или MobX для глобального управления состоянием.

### 4. **Navigation**:
   - Для навигации используется библиотека `@react-navigation/native`. Она обеспечивает интуитивно понятный и модульный подход к организации навигации в приложении.

### 5. **AsyncStorage for Persistence**:
   - Используется `@react-native-async-storage/async-storage` для сохранения данных между сессиями.

### 6. **Type Safety**:
   - TypeScript добавляет статическую типизацию, что делает код более безопасным и поддерживаемым.
