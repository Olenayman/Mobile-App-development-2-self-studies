import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, ActivityIndicator } from 'react-native-paper';
import { MOCK_WEATHER, weatherCodeMap } from '../utils/mockWeather';

const WeatherPanel = ({ loading, weather = MOCK_WEATHER }) => {
  const icon = weatherCodeMap[weather.code] || '❓';

  return (
    <Card style={styles.card}>
      <Card.Content>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator animating={true} size="large" />
            <Text style={styles.loadingText}>Loading weather...</Text>
          </View>
        ) : (
          <>
            <Text style={styles.icon}>{icon}</Text>
            <Text variant="titleLarge" style={styles.city}>{weather.city}</Text>
            <View style={styles.row}>
              <Text variant="bodyMedium">Temp:</Text>
              <Text variant="bodyLarge" style={styles.value}>{weather.temperature}°C</Text>
              <Text variant="bodyMedium">Wind:</Text>
              <Text variant="bodyLarge" style={styles.value}>{weather.windKm} km/h</Text>
            </View>
          </>
        )}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 12,
    borderRadius: 12,
    elevation: 2,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
  },
  loadingText: {
    marginTop: 12,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 8,
  },
  city: {
    textAlign: 'center',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  value: {
    fontWeight: 'bold',
    marginRight: 12,
  },
});

export default WeatherPanel;