import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

const WINE_RED = '#7B1E3A';

const MENU_ITEMS = ['Games', 'Grammar', 'Reading', 'Settings'];

export default function MainMenuScreen() {
  const showComingSoon = (section: string) => {
    Alert.alert(section, 'Próximamente');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MyBuilder English</Text>
      </View>

      <View style={styles.content}>
        {MENU_ITEMS.map((item) => (
          <Pressable key={item} style={styles.menuButton} onPress={() => showComingSoon(item)}>
            <Text style={styles.menuButtonText}>{item}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: WINE_RED,
    paddingTop: 56,
    paddingBottom: 22,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    gap: 14,
  },
  menuButton: {
    backgroundColor: WINE_RED,
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
  },
  menuButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
