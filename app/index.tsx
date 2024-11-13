import {ThemedView} from "@/components/ThemedView";
import {StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {useState} from "react";
import {api} from "@/api/api";
import {router} from "expo-router";

type loginProps = {
    onLogin?: Function;
}

export default function Login(props: loginProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Hand Emotion</ThemedText>
            <ThemedText style={styles.subTitle} type={"subtitle"}>Login</ThemedText>

            <TextInput
                placeholder="Usuario"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />

            <TextInput
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={styles.input}
            />

            <TouchableOpacity style={styles.loginButton}
                              disabled={
                                username.length === 0 &&
                                password.length === 0
                              }
                              onPress={async () => {
                api.post(
                    "/auth/login",
                    {
                        "login": username,
                        "password": password
                    },
                ).then(response => router.replace("/(tabs)")
                )
                    .catch(error => {
                        console.log(error)
                    })
            }}>
                <ThemedText style={styles.loginButtonText}>Entrar</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.navigate("/SignUp")}>
                <ThemedText type={"subtitle"} style={styles.cadastrarButton}>Cadastrar</ThemedText>
            </TouchableOpacity>
        </ThemedView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#333',
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#333',
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    cadastrarButton: {
        color: '#007bff',
        fontSize: 16,
        fontWeight: '500',
        marginTop: 10,
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#007bff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});



