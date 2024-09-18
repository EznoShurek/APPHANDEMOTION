import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { AllEmotions } from '@/api/routes/GetEmotion';
import { ThemedText } from '@/components/ThemedText';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Ionicons size={310}  style={styles.headerImage} />}>
      <ThemedText style={styles.bodyTitle}>Linha do tempo de emoções</ThemedText>
      <AllEmotions/>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  bodyTitle: {
    alignSelf: 'center',
    padding: 6,
    fontSize: 18
  },
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
