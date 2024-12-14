# Expo Router Tempñate

This is a template for navigation in a React Native application using **Expo Router**. Expo Router simplifies the navigation process by introducing a file-based routing system, similar to frameworks like Next.js.


## Project Structure
my-project/  
├── App.js // Main entry point  
├── app.json // App configuration  
├── package.json // Dependencies and scripts  
├── babel.config.js // Babel configuration  
├── app/ // Routes directory  
│ ├── index.js // Root route   
├── screens/ // Screens directory  
│ ├── HomeScreen.js // Home screen component  
├── assets/ // Assets folder  
│ ├── icon.png  
│ ├── splash-icon.png  
│ ├── adaptive-icon.png  
│ ├── favicon.png 

## Features

- **File-based Routing**: Routes are defined by the structure of the `app/` folder.
- **Simple Navigation**: Easily navigate between pages with Expo Router's built-in `useRouter` hook.
- **Cross-Platform Support**: Works seamlessly on iOS, Android, and the web.

## Getting Started

Follow these steps to set up and run the project:

### 1. Clone the Repository
In the folder where the project will be cloned run:
```bash
git clone https://github.com/shakicardona/Expo-Router-Template.git
cd Expo-Router-Example
```

### 2. Install dependencies
Make sure you have Node.js and Expo CLI installed on your system. Then run:

```bash
npm install
```

### 3. Start the Development Server
Run the following command to start the app:

```bash
npx expo start
```

This will start the Expo development server. You can use the Expo Go app on your mobile device or an emulator to view the app.

### Troubleshooting
If you encounter issues, try the following:
- Delete the node_modules folder and run npm install again.
- Clear the Expo cache by running:
```bash
npx expo start -c
```
- Ensure your system meets the requirements for Expo and React Native.

### Contributing
Contributions are welcome! Feel free to submit issues or pull requests to enhance the project.

### License
This project is open-source and available under the [MIT License](https://opensource.org/license/mit).

### References
[Expo Documentation](https://docs.expo.dev/more/create-expo/)
[Expo Router Documentation](https://docs.expo.dev/tutorial/introduction/)
[React Native Documentation](https://reactnative.dev/docs/environment-setup)
