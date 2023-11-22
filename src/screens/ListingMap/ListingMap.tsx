import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';
import craftbeers from '../../../src/assets/data/craftbeers.json';
import { COLORS } from '../../constants';
import BottomSheetView from '../../components/ui/BottomSheet/BottomSheetView';
import theme from '../../constants/map_theme.json';
import { useNavigation } from '@react-navigation/native';

const INITIAL_REGION = {
  latitude: 20.679767252382405,
  longitude: -103.39207700463982,
  latitudeDelta: 9,
  longitudeDelta: 9,
};

const ListingMap = () => {
  const navigation = useNavigation();

  const mapRef = useRef<any>(null);
  useEffect(() => {
    onLocateMe();
  }, []);

  const onLocateMe = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    const region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 7,
      longitudeDelta: 7,
    };

    mapRef.current?.animateToRegion(region);
  };
  const renderCluster = (cluster: any) => {
    const { id, geometry, onPress, properties } = cluster;

    const points = properties.point_count;
    return (
      <Marker
        key={`cluster-${id}`}
        coordinate={{
          longitude: geometry.coordinates[0],
          latitude: geometry.coordinates[1],
        }}
        onPress={onPress}
      >
        <View style={styles.marker}>
          <Text
            style={{
              color: COLORS.white,
              textAlign: 'center',
              fontFamily: 'semibold',
            }}
          >
            {points}
          </Text>
        </View>
      </Marker>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        animationEnabled={false}
        style={StyleSheet.absoluteFillObject}
        initialRegion={INITIAL_REGION}
        provider='google'
        clusterFontFamily='semibold'
        renderCluster={renderCluster}
        customMapStyle={theme}
      >
        {craftbeers.map((item) => (
          <Marker
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            key={item.id}
            onPress={() => console.log(item)}
          >
            <View style={styles.marker}>
              <Text style={styles.markerText}>{item.craftBeerName}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
      <BottomSheetView />
      <TouchableOpacity
        style={styles.goBackBtn}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name='chevron-back' size={24} color={COLORS.black} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.locateBtn} onPress={() => onLocateMe}>
        <Ionicons name='navigate' size={24} color={COLORS.black} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marker: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.red,
    elevation: 5,
    borderRadius: 12,
    shadowColor: COLORS.black,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  markerText: {
    fontSize: 14,
    fontFamily: 'semibold',
  },
  goBackBtn: {
    position: 'absolute',
    top: 70,
    left: 20,
    backgroundColor: COLORS.lightWhite,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  locateBtn: {
    position: 'absolute',
    top: 70,
    right: 20,
    backgroundColor: COLORS.lightWhite,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
});

export default ListingMap;
