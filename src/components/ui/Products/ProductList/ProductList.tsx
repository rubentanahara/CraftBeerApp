import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import ProductCard from '../ProductCard';
import { SIZES } from '../../../../constants';

const ProductList = () => {
  const products = [1, 2, 3, 4];
  return (
    <View style={{ marginTop: SIZES.medium }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default ProductList;
