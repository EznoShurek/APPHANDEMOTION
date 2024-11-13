import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {ThemedView} from "@/components/ThemedView";
import {router} from "expo-router";
import {api} from "@/api/api";

const SignUpScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <ThemedView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TextInput
                style={styles.input}
                placeholder="Confirmar Senha"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.signUpButton}
                              disabled={
                                  password.length === 0 || password !== confirmPassword
                              }
                              onPress={() =>
                                  api.post(
                                      "/auth/register",
                                      {
                                          "name": name,
                                          "email": email,
                                          "password": password
                                      },
                                  ).then(response => {
                                          if (response.status === 201)
                                              router.replace("/(tabs)")
                                      }
                                  )
                                      .catch(error => {
                                          console.log(error)
                                      })
                              }>
                <Text style={styles.signUpButtonText}>Cadastrar</Text>
            </TouchableOpacity>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 32,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    signUpButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 14,
        borderRadius: 8,
        marginTop: 8,
        marginBottom: 16,
    },
    signUpButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    backText: {
        fontSize: 16,
        color: '#007BFF',
        textAlign: 'center',
        marginTop: 16,
    },
});

export default SignUpScreen;
