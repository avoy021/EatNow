import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import restaurants from "@/assets/data/restaurants";
import RestaurantInfo from "@/components/RestaurantInfo";

const Restaurant = () => {
  const { id: Id } = useLocalSearchParams<{ id: string }>();
  const res = restaurants.find((item) => item.id.toString() === Id);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image source={res?.img} resizeMode="cover" style={styles.resImg} />
        </View>
        <View className="px-6 mt-7">
          <RestaurantInfo size={26} color={"#ff9030"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  resImg: {
    width: "100%",
    height: 250,
  },
});
export default Restaurant;
