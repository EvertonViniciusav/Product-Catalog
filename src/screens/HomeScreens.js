import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import ProductItem from '../components/ProductItem';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleAddProduct = () => {
    if (!productName || !productPrice) return;
    const newProduct = {
      id: Math.random().toString(),
      name: productName,
      price: productPrice,
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setProductName('');
    setProductPrice('');
  };

  const handleRemoveProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço do Produto"
        keyboardType="numeric"
        value={productPrice}
        onChangeText={setProductPrice}
      />
      <Button title="Adicionar Produto" onPress={handleAddProduct} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem product={item} onRemove={handleRemoveProduct} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
});

export default HomeScreen;
