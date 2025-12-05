import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.appName}>twoChurch</Text>
        <Text style={styles.subtitle}>Church Management Platform</Text>
      </View>

      <View style={styles.features}>
        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>👥</Text>
          <Text style={styles.featureTitle}>Members</Text>
          <Text style={styles.featureText}>Manage church members</Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>📅</Text>
          <Text style={styles.featureTitle}>Events</Text>
          <Text style={styles.featureText}>Track church events</Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>💰</Text>
          <Text style={styles.featureTitle}>Donations</Text>
          <Text style={styles.featureText}>Manage offerings</Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>🎤</Text>
          <Text style={styles.featureTitle}>Sermons</Text>
          <Text style={styles.featureText}>Access sermons</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('/dashboard')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Built with ❤️ by IT Solutions LLC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    color: '#666',
  },
  appName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#0ea5e9',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  features: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 40,
  },
  featureCard: {
    width: 150,
    height: 150,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  featureText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0ea5e9',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 12,
    color: '#999',
  },
});
