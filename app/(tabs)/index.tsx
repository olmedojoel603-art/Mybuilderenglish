import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">MyBuilder English</ThemedText>
      <ThemedText style={styles.subtitle}>Aprende inglés paso a paso.</ThemedText>

      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Lección de hoy</ThemedText>
        <ThemedText>Frase: &quot;How are you?&quot;</ThemedText>
        <ThemedText>Traducción: &quot;¿Cómo estás?&quot;</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 12,
  },
  subtitle: {
    opacity: 0.8,
  },
  card: {
    borderWidth: 1,
    borderColor: '#8aa1b1',
    borderRadius: 12,
    padding: 16,
    gap: 6,
  },
});
