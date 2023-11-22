import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { Text, View } from 'react-native';
import data from '../../../assets/data/craftbeers.json';
import { COLORS, SIZES } from '../../../constants';
import CraftBeerItem from '../CraftBeerCard/CraftBeerItem';

const CraftBeerList = () => {
  return (
    <View style={{ marginTop: SIZES.medium }}>
      <BottomSheetFlatList
        data={data}
        renderItem={({ item }) => <CraftBeerItem craftBeer={item} />}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'semibold',
              fontSize: SIZES.medium,
              marginTop: 4,
              color: COLORS.white,
            }}
          >
            {data.length} cervecerias
          </Text>
        }
      />
    </View>
  );
};

export default CraftBeerList;
