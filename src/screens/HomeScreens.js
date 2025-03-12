import React, { useState } from 'react';
import { Text, View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
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
      <Text style={styles.title}>Lista de Produtos.</Text>
      <TextInput
        style={styles.input}
        placeholder="📦 Nome do Produto"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="💰 Preço do Produto"
        keyboardType="numeric"
        value={productPrice}
        onChangeText={setProductPrice}
      />
      <Button title="📝 Adicionar Produto" onPress={handleAddProduct} style={styles.botao}/>
      <Text style={styles.contador}>Você tem {products.length} produto(s) na lista.</Text>
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
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 8,
    fontSize: 20,
  },
  botao: {
    fontSize: 20,
  },
  contador: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
});

export default HomeScreen;
