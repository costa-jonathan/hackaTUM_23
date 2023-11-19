import React, { useState} from 'react';
import {RecoilRoot, atom, useRecoilState, useSetRecoilState} from "recoil";
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import LoginService from "../service/LoginService";
import {HttpStatusCode} from "axios";




const LoginScreen =  ({navigation, onLogin, passUserName}) => {
    const [password, setPassword] = useState('');

    const [username, setUsername] = useState('');

    const handleLogin = async () => {
        try {
            const response = await LoginService.isPasswordCorrect({
                username,
                password,
            });
            if (response.status === HttpStatusCode.Ok) {
                // Successful login, proceed with the onLogin function or other actions
                passUserName(username)
                onLogin();


            } else {
                // Login failed, handle the error or display an error message
                console.error('Login failed');
            }
        } catch (error) {
            // Handle exceptions that may occur during the request
            console.error('Error during login', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});

export default LoginScreen;
