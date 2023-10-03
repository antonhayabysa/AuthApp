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

Architectural approach:

Navigation:

Uses @react-navigation library to navigate between screens. The navigation container is configured in the App component, and it defines stacks for different screens. Screens:

All application screens are located in the screens folder. Each screen has its own file with styles and components. Navigation between screens is done using navigation props. State:

To manage application state, local storage AsyncStorage and state variables inside components are used. Styles:

Component and screen styles are defined in styles.js files. Data:

Shift data (shiftsData) is stored locally within the MyShiftsScreen.js file. In a real application they can be loaded from the server. Visibility control:

The visibility state of the shift list (isListVisible) is stored in local AsyncStorage. It is used to save user preferences between sessions. Event Handling:

All event handlers, such as button clicks and state updates, are contained within their respective components. Project structure:

The project has a structure divided into components, styles, screens and navigation.
