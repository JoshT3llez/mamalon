import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Puro NPM INSTALL :D</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1096BE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: "#8C1972",
    fontSize:24,
  }
});
