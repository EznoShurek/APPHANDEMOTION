import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Entypo } from "@expo/vector-icons"
import { Button, Modal, Pressable, StyleSheet, TextInput, TouchableOpacity } from "react-native"

export default function DailyForm(props: { visible: boolean, callBack: (bool: boolean) => void }) {
    return(
        <Modal visible={props.visible}>
            <ThemedView style={styles.titleContainer}>
                <TouchableOpacity onPress={() => props.callBack(false)}>
                    <Entypo name="back" size={32} color={'white'}/>
                </TouchableOpacity>
                <ThemedText type="title">Sobre você!</ThemedText>
            </ThemedView>
            <ThemedView style={styles.formContainer}>
                <ThemedText>Fale mais sobre você, se sinta a vontade e abra seu coração!</ThemedText>
                <TextInput
                    style={styles.input}
                    placeholder="As minhas noites de sono tem sido..."
                    placeholderTextColor="#999"
                    multiline
                />
                <TextInput
                    style={styles.input}
                    placeholder="Como você se imagina daqui a um mês?..."
                    placeholderTextColor="#999"
                    multiline
                />
                <TextInput
                    style={styles.input}
                    placeholder="A maior alegria da minha semana foi..."
                    placeholderTextColor="#999"
                    multiline
                />
            </ThemedView>
            <ThemedView style={styles.optionsContainer}>
                <Pressable style={styles.option} onPress={() => {}}>
                    <ThemedText style={{color: 'black'}}>Cancelar</ThemedText>
                </Pressable>
                <Pressable style={styles.option} onPress={() => {}}>
                    <ThemedText style={{color: 'black'}}>Salvar</ThemedText>
                </Pressable>
            </ThemedView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        width: '100%',
        gap: 32,
        alignItems: 'center',
        padding: 24
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 18
    },
    optionsContainer: {
        flexDirection: 'row',
        rowGap: 12,
    },
    option: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginVertical: 24,
        marginHorizontal: 12,
        color: 'black',
        backgroundColor: 'white'
    },
    input: {
        height: 100,           // Altura da caixa de texto
        padding: 10,           // Espaçamento interno
        borderWidth: 2,        // Espessura da borda
        borderColor: '#000',   // Cor da borda (preto)
        borderRadius: 8,       // Bordas arredondadas
        fontSize: 16,          // Tamanho da fonte
        textAlignVertical: 'top', // Alinha o texto no topo ao digitar
        backgroundColor: '#fff', // Cor de fundo da caixa de texto (branco)
        marginTop: 12,         // Espaçamento entre caixas de texto < apoio
    },
})