import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native'; // Detect system theme
import { lightTheme, darkTheme } from '../styles/theme.js'; // Import theme colors


const HomeScreen = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={styles.container}>
      {
        colorScheme === "dark" ?
          <Text style={[styles.title, {color: theme.text}]}> 🌙 Dark Mode 🌙 </Text>
        :
          <Text style={[styles.title, {color: theme.text}]}> ☀️ Light Mode ☀️ </Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;