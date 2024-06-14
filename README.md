# MyList App

Welcome to the MyList app! This guide will help you download, install dependencies, and run the app on various devices.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js:** Install Node.js (v12 LTS recommended) and npm/yarn from [nodejs.org](https://nodejs.org/).
- **Android Studio:** Install Android Studio with an Android emulator or connect a physical Android device.
- **Xcode:** Install Xcode from the App Store with an iOS simulator or connect a physical iOS device.
- **Git:** Install Git from [git-scm.com](https://git-scm.com/).

## Getting Started

1. **Clone the Repository:**

   Clone the MyList repository to your local machine:

   ```bash
   git clone https://github.com/kaushikreddy1209/MyList/tree/main
   cd MyList

2. **Install Dependencies**

Install npm or yarn dependencies:

```bash
npm install
```

## Required Packages

### Main Dependencies

#### React Native

React Native is a JavaScript framework for building mobile apps.

# Install React Native CLI globally (if not already installed)
```bash
npm install -g react-native-cli
```
# Install all the dependencies required for the application to run

```bash
npm install @react-navigation/native @react-navigation/stack @react-native-async-storage/async-storage react-native-gesture-handler react-native-reanimated
```
### Instructions:

- Replace `npm install` with `yarn add` if you prefer using yarn for package management.
- Ensure to run these commands in your project's root directory.
- These instructions cover the installation of essential dependencies required for most React Native applications, providing a solid foundation for navigation, data persistence, gestures, and animations.

### Set Up Native Dependencies

#### For iOS

If you are targeting iOS, ensure you have CocoaPods installed:

```bash
sudo gem install cocoapods
```
#### Navigate to the ios directory of your project and install pod dependencies

```bash
cd ios
pod install
```
#### For Android no additional setup is required beyond installing the dependencies listed earlier.

### Start the Metro Builder and follow the build instructions to run the application

```bash
npx react-native start
```

### Troubleshooting
#### Metro Bundler Issues
#### If you encounter issues with the Metro Bundler, try resetting the cache:

```bash
npx react-native start --reset-cache
```

#### To fix further issues run the following command

```bash
npx run react-native doctor
```



