import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import WeatherPanel from '../components/WeatherPanel';
import CityInput from '../components/CityInput';
import PrimaryButton from '../components/PrimaryButton';
import { MOCK_WEATHER } from '../utils/mockWeather';

const WeatherScreen = () => {
  const [city, setCity] = useState(MOCK_WEATHER.city);
  const [loading, setLoading] = useState(false);

  const handleChangeCity = (text) => setCity(text);
  const handleClear = () => setCity('');
  const handleSubmit = () => {}; // No actual city fetch; mock only
  const handleSimulateLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.headerRegion}>
          <Header />
        </View>
        <View style={styles.contentRegion}>
          <CityInput
            value={city}
            onChangeText={handleChangeCity}
            onClear={handleClear}
            onSubmit={handleSubmit}
          />
          <WeatherPanel
            loading={loading}
            weather={{ ...MOCK_WEATHER, city }}
          />
          <PrimaryButton
            title={loading ? "Loading..." : "Simulate Loading"}
            onPress={handleSimulateLoading}
            disabled={loading}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerRegion: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentRegion: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Platform.select({ ios: 24, android: 12 }),
    gap: 16,
  },
});

export default WeatherScreen;