import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
interface Props {
    children: JSX.Element | JSX.Element[];
}
export const BackgroundGradient = ({ children }: Props) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#084f6a' }}>
            <LinearGradient
                colors={['#084f6a', '#75cedb', 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.5 }}
            />
            {children}
        </View>
    );
};