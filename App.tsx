import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
const { width, height } = Dimensions.get("window");
const LOGO_WIDTH = 220;
const LOGO_HEIGHT = 40;
const DOT_SIZE = 40;
const TICKER_HEIGHT = 40;
const CIRCLE_SIZE = width * 0.6;

type ItemProps = React.FC<{
  imageUri: ImageSourcePropType;
  heading: string;
  description: string;
  index: number;
  scrollX: Animated.Value;
}>;

type TickerProps = React.FC<{
  scrollX: Animated.Value;
}>;

type CircleProps = React.FC<{
  scrollX: Animated.Value;
}>;

type PaginationProps = React.FC<{
  scrollX: Animated.Value;
}>;

const Circle: CircleProps = ({ scrollX }) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.circleContainer]}>
      {data.map(({ color }, index) => {
        const inputRange = [
          (index - 0.55) * width,
          index * width,
          (index + 0.55) * width,
        ];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 0.2, 0],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={index}
            style={[
              styles.circle,
              {
                backgroundColor: color,
                opacity,
                transform: [{ scale }],
              },
            ]}
          />
        );
      })}
    </View>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
