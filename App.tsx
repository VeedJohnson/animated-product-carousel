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
