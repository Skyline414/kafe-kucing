import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrderSummary({ totalCount }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Total Item Dipesan: {totalCount}</Text>
      {totalCount >= 5 && (
        <Text style={styles.promoText}>🎉 Selamat! Anda Mendapatkan Diskon 10%</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#e6f7ff',
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  promoText: {
    marginTop: 8,
    fontSize: 14,
    color: '#d93025',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
