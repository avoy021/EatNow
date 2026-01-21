import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import restaurants from "@/assets/data/restaurants";
import { router } from "expo-router";
import RestaurantInfo from "./RestaurantInfo";

const RestaurantList = () => {
  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <ResItem Item={item} />}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

const ResItem = ({ Item }: any) => {
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        router.push({
          pathname: "/restaurant/[id]",
          params: { id: Item.id.toString() },
        })
      }
    >
      <View className="mb-8">
        <View className="rounded-lg h-48">
          <Image
            source={Item.img}
            resizeMode="cover"
            style={styles.resImg}
            className="rounded-xl"
          />
        </View>
        <Text className="text-lg font-semibold mt-2">{Item.name}</Text>
        <Text className="font-light mt-2">{Item.menu}</Text>
        <View className="mt-3">
          <RestaurantInfo size={22} color={"#ff9030"} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  resImg: {
    width: "100%",
    height: "100%",
  },
});
export default RestaurantList;
