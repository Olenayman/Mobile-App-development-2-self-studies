import React from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function WeatherApp() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Weather App</Text>
        <TextInput 
          style={styles.searchInput}
          placeholder="Search for a city..."
          placeholderTextColor="#888"
        />
      </View>

      {/* Current Weather Card */}
      <View style={styles.currentWeatherCard}>
        <View style={styles.locationInfo}>
          <Text style={styles.cityName}>Tampere</Text>
          <Text style={styles.country}>Finland</Text>
        </View>
        
        <View style={styles.weatherMain}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1163/1163661.png' }}
            style={styles.weatherIcon}
          />
          <Text style={styles.temperature}>2°C</Text>
        </View>
        
        <Text style={styles.weatherDescription}>Light Snow</Text>
        
        <View style={styles.weatherDetails}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Feels like</Text>
            <Text style={styles.detailValue}>-2°C</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Humidity</Text>
            <Text style={styles.detailValue}>89%</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Wind</Text>
            <Text style={styles.detailValue}>18 km/h</Text>
          </View>
        </View>
      </View>

      {/* 5-Day Forecast */}
      <View style={styles.forecastSection}>
        <Text style={styles.sectionTitle}>5-Day Forecast</Text>
        
        <View style={styles.forecastItem}>
          <Text style={styles.dayText}>Today</Text>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1163/1163661.png' }}
            style={styles.forecastIcon}
          />
          <Text style={styles.forecastTemp}>2° / -3°</Text>
        </View>
        
        <View style={styles.forecastItem}>
          <Text style={styles.dayText}>Tomorrow</Text>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/414/414927.png' }}
            style={styles.forecastIcon}
          />
          <Text style={styles.forecastTemp}>-1° / -6°</Text>
        </View>
        
        <View style={styles.forecastItem}>
          <Text style={styles.dayText}>Wednesday</Text>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/642/642102.png' }}
            style={styles.forecastIcon}
          />
          <Text style={styles.forecastTemp}>1° / -4°</Text>
        </View>
        
        <View style={styles.forecastItem}>
          <Text style={styles.dayText}>Thursday</Text>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1163/1163661.png' }}
            style={styles.forecastIcon}
          />
          <Text style={styles.forecastTemp}>0° / -5°</Text>
        </View>
        
        <View style={styles.forecastItem}>
          <Text style={styles.dayText}>Friday</Text>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/869/869869.png' }}
            style={styles.forecastIcon}
          />
          <Text style={styles.forecastTemp}>3° / -2°</Text>
        </View>
      </View>

      {/* Additional Weather Info */}
      <View style={styles.additionalInfo}>
        <Text style={styles.sectionTitle}>Weather Details</Text>
        
        <View style={styles.infoGrid}>
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>UV Index</Text>
            <Text style={styles.infoValue}>1</Text>
            <Text style={styles.infoStatus}>Low</Text>
          </View>
          
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Visibility</Text>
            <Text style={styles.infoValue}>8</Text>
            <Text style={styles.infoStatus}>km</Text>
          </View>
          
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Pressure</Text>
            <Text style={styles.infoValue}>995</Text>
            <Text style={styles.infoStatus}>hPa</Text>
          </View>
          
          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Sunrise</Text>
            <Text style={styles.infoValue}>8:47</Text>
            <Text style={styles.infoStatus}>AM</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  
  // Header Styles
  header: {
    backgroundColor: '#4A90E2',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: Math.min(width * 0.08, 32),
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  // Current Weather Card
  currentWeatherCard: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  locationInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cityName: {
    fontSize: Math.min(width * 0.07, 28),
    fontWeight: 'bold',
    color: '#333',
  },
  country: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  weatherMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  weatherIcon: {
    width: Math.min(width * 0.2, 80),
    height: Math.min(width * 0.2, 80),
    marginRight: 20,
  },
  temperature: {
    fontSize: Math.min(width * 0.15, 60),
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  weatherDescription: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  weatherDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  
  // Forecast Section
  forecastSection: {
    backgroundColor: 'white',
    margin: 20,
    marginTop: 0,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: Math.min(width * 0.055, 22),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  forecastItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dayText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  forecastIcon: {
    width: 32,
    height: 32,
    marginHorizontal: 15,
  },
  forecastTemp: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A90E2',
    minWidth: 80,
    textAlign: 'right',
  },
  
  // Additional Info Section
  additionalInfo: {
    backgroundColor: 'white',
    margin: 20,
    marginTop: 0,
    marginBottom: 40,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  infoCard: {
    width: '48%',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  infoValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 4,
  },
  infoStatus: {
    fontSize: 12,
    color: '#666',
  },
});
