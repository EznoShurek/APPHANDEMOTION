import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{  light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Ionicons size={310}  style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Emoções</ThemedText>
      </ThemedView>
      <ThemedText>Aqui terá um resumo de suas emoções nos últimos 7 dias.</ThemedText>
      <Collapsible title="Ajuda?">
        
        <ThemedText>
          Esse aplicativo é apenas uma forma de auxiliar e se você sente que precisa de uma ajuda mais ampla então consulte um<ThemedText type="defaultSemiBold"> profissional da saúde.</ThemedText>{' '}
          Site e número do <ThemedText type="defaultSemiBold"> CVV (centro de valorização da vida) </ThemedText> logo abaixo.
        </ThemedText>
        <ExternalLink href="https://cvv.org.br/">
          <ThemedText type="link">Centro de Valorização da Vida</ThemedText> Sua vida importa.
        </ExternalLink>
      </Collapsible>
      
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
});
