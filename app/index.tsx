import { Link, useRouter } from 'expo-router';
import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const BRAND_PRIMARY = '#7A1021';
const BRAND_PRIMARY_DARK = '#5C0A17';
const BRAND_ACCENT = '#2D63D7';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.logoFrame}>
          <Text style={styles.logoTop}>MY ENGLISH</Text>
          <Text style={styles.logoBottom}>BUILDER</Text>
        </View>

        <View style={styles.mascotCard}>
          <Text style={styles.mascotEmoji}>🦫</Text>
          <Text style={styles.mascotText}>Tu compañero de inglés</Text>
        </View>

        <Text style={styles.welcomeText}>¡BIENVENIDO!</Text>

        <Pressable
          onPress={() => router.push('/(tabs)')}
          style={({ pressed }) => [styles.primaryButton, pressed && styles.primaryButtonPressed]}>
          <Text style={styles.primaryButtonLabel}>Iniciar sesión</Text>
        </Pressable>

        <Link href="/modal" style={styles.signUpLink}>
          Regístrate
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
    backgroundColor: '#FFFFFF',
  },
  logoFrame: {
    minWidth: 250,
    borderWidth: 2,
    borderColor: '#E4C8CF',
    backgroundColor: '#FFF6F8',
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 28,
    marginBottom: 24,
    shadowColor: BRAND_PRIMARY,
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  logoTop: {
    textAlign: 'center',
    color: BRAND_PRIMARY,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  logoBottom: {
    textAlign: 'center',
    color: BRAND_PRIMARY_DARK,
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 1,
    marginTop: 2,
  },
  mascotCard: {
    width: 170,
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#F0D9DF',
    backgroundColor: '#FFF9FA',
    paddingVertical: 16,
    marginBottom: 28,
  },
  mascotEmoji: {
    fontSize: 72,
  },
  mascotText: {
    marginTop: 8,
    color: '#7A5560',
    fontSize: 13,
    fontWeight: '600',
  },
  welcomeText: {
    fontSize: 44,
    fontWeight: '900',
    color: '#1E1E1E',
    letterSpacing: 1,
    marginBottom: 30,
  },
  primaryButton: {
    width: '100%',
    maxWidth: 330,
    backgroundColor: BRAND_PRIMARY,
    borderRadius: 999,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: BRAND_PRIMARY,
    shadowOpacity: 0.25,
    shadowRadius: 9,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  primaryButtonPressed: {
    backgroundColor: BRAND_PRIMARY_DARK,
    transform: [{ scale: 0.99 }],
  },
  primaryButtonLabel: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  signUpLink: {
    marginTop: 16,
    color: BRAND_ACCENT,
    fontSize: 18,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
