import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <ImageBackground
          source={require('./assets/Images/ModelS.jpeg')}
          style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subTitle}>Starting at $69,480</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carContainer: {
    width: '100%',
    height: '100%'
  },
  titles: {
    marginTop: '30%',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: '600'
  },
  subTitle: {
    fontSize: 16,
    color: '#5c5e62'
  },
  image:{
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover'
  }

});
