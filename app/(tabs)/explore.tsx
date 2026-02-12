import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const tips = [
  'Escucha 5 minutos de inglés cada día.',
  'Aprende 3 palabras nuevas por día.',
  'Repite frases en voz alta para mejorar pronunciación.',
];

export default function ExploreScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Plan simple</ThemedText>
      {tips.map((tip) => (
        <ThemedView key={tip} style={styles.tipItem}>
          <ThemedText>{`• ${tip}`}</ThemedText>
        </ThemedView>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  tipItem: {
    paddingVertical: 6,
  },
});
