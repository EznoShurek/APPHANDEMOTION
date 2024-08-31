import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextInput } from 'react-native';


export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Ionicons size={310}  style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sobre você!</ThemedText>
      </ThemedView>
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
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
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
});
