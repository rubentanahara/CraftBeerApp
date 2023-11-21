import { FlatList, View } from 'react-native';
import { SIZES } from '../../../../constants';
import ProductCard from '../ProductCard';

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
