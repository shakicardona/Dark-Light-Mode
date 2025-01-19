import React from 'react';
import { useColorScheme, StyleSheet, View } from 'react-native';
import { Slot } from 'expo-router';
import { lightTheme, darkTheme } from '../styles/theme';

export default function Layout() {

    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

    return (    
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <Slot/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});