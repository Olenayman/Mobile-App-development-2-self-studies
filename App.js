import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import WeatherScreen from './src/screens/WeatherScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={DefaultTheme}>
        <SafeAreaView style={{ flex: 1, backgroundColor: DefaultTheme.colors.background }}>
          <StatusBar barStyle="dark-content" backgroundColor={DefaultTheme.colors.background} />
          <WeatherScreen />
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}