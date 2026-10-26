import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import OrderSummary from './modules/OrderSummary';
import MenuItem from './modules/MenuItem';

const DAFTAR_MENU = [
  { id: '1', nama: 'Kopi Susu Catnip', harga: 20000 },
  { id: '2', nama: 'Matcha Paw Latte', harga: 25000 },
  { id: '3', nama: 'Croissant Ikan Tuna', harga: 18000 },
];

export default function App() {
  // Mengelola state global totalPesanan dengan nilai awal 0
  const [totalPesanan, setTotalPesanan] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kafe Kucing</Text>

      <OrderSummary totalCount={totalPesanan} />

      <ScrollView>
        {DAFTAR_MENU.map(it => (
          <MenuItem
            key={it.id}
            nama={it.nama}
            harga={it.harga}
            onTambahPesanan={() => setTotalPesanan(prevTotal => prevTotal + 1)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
