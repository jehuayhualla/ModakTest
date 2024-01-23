# ModakTest

![Screenshot 1](./assets/screenshot1.png 'Home')
![Screenshot 2](./assets/screenshot2.png 'Event Detail')

## Features

- **React Navigation**: Integrated with `@react-navigation/native` and `@react-navigation/stack` for intuitive and performant navigation between screens.
- **State Management**: Utilizes `zustand` for state management, providing a minimalistic API without the boilerplate.
- **Data Fetching and Caching**: Implements `@tanstack/react-query` for efficient server-state management, including fetching, caching, and updating data.
- **Image Performance**: Includes `react-native-fast-image` for high-performance image loading
- **Styling**: Employs `react-native-unistyles` for a unified and scalable approach to styling components.
- **Development Tools**: Equipped with a suite of development and linting tools like ESLint, Prettier, Jest, and Babel, ensuring code quality and consistency.

## Installation

Ensure you have Node.js version 18 or newer. You can check your Node.js version by running `node -v` in your terminal.

To set up the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd ModakTest
   ```
3. Install dependencies:
   ```sh
   yarn install
   ```

## Running the Application

You can run the application on Android or iOS using the following commands:

- **Android**:
  ```sh
  yarn android
  ```
- **iOS**:
  ```sh
  yarn ios
  ```
