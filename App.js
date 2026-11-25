import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import OrderSummary from './modules/OrderSummary';
import MenuItem from './modules/MenuItem';
import { DAFTAR_MENU } from './modules/MenuDataList';

export default function App() {
  // Mengelola state global totalPesanan dengan nilai awal 0
  const [totalPesanan, setTotalPesanan] = useState(0);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
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
