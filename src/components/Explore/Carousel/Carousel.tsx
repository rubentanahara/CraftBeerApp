import { View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../../../constants';
import styles from './styles';

const Carousel = () => {
  const slides = [
    'https://instagram.fgdl9-1.fna.fbcdn.net/v/t39.30808-6/400326040_177674378743648_7972322893290501871_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMzY1eDE3MDYuc2RyIn0&_nc_ht=instagram.fgdl9-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=rcx4He2nzLYAX9nZ3at&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzIzMDQyNzcwNDI3MTQ3NzYyNg%3D%3D.2-ccb7-5&oh=00_AfD8_QHiZYWe9nTXZfIECwqo8gRcaVBN4qpT9D7MJ0ID1w&oe=655F0962&_nc_sid=ee9879',
    'https://instagram.fgdl9-1.fna.fbcdn.net/v/t51.2885-15/386920438_1492895364883578_6446249113424467186_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyIn0&_nc_ht=instagram.fgdl9-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=vWgbQK7RrIoAX-odbax&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIwOTQ0NjI4ODIzMTI2MjE1NQ%3D%3D.2-ccb7-5&oh=00_AfCk6zvQ7IM3MIs5ZePrrc_5GKWzb2OanX1GJ_j0RVn8oA&oe=655F4593&_nc_sid=ee9879',
    'https://instagram.fgdl9-1.fna.fbcdn.net/v/t39.30808-6/402591086_18390529168044384_7040967497054266355_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.fgdl9-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=7apTGK1b3zUAX9OOwEj&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzIzNTQxMTg1MzUxNDAyMDU5NA%3D%3D.2-ccb7-5&oh=00_AfC_3u5Y7-R_NQ8K2uAkJ7gHhb_6q-fxZgPqCMtvhdcDAQ&oe=655F02CE&_nc_sid=ee9879',
  ];

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.white}
        inactiveDotColor={COLORS.offwhite}
        ImageComponentStyle={{
          borderRadius: 15,
          width: '90%',
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};
export default Carousel;
