import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProductItem = ({ product, onRemove }) => {
  return (
    <TouchableOpacity onPress={() => onRemove(product.id)}>
      <View style={styles.productContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>R$ {product.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#555',
  },
});

export default ProductItem;
