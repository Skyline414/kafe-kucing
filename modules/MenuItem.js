import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MenuItem({ nama, harga, onTambahPesanan }) {
  // Mengelola state mandiri 'qty' dengan nilai awal 0
  const [qty, setQty] = useState(0);

  const handlePress = () => {
    setQty(qty + 1);
    onTambahPesanan(); // Manggil fungsi callback dari props untuk menambah totalPesanan di App
  };

  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.nama}>{nama}</Text>
        <Text style={styles.harga}>Rp {harga.toLocaleString('id-ID')}</Text>
        <Text style={styles.qty}>Dipesan: {qty}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Tambah Pesanan" onPress={handlePress} color="#0d00ff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flex: 1,
  },
  nama: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  harga: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  qty: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2a9d8f',
  },
  buttonContainer: {
    marginLeft: 10,
  },
});
