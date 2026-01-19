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
    <TouchableWithoutFeedback onPress={() => console.log("res")}>
      <View className="mb-6">
        <View className="mb-2 rounded-lg h-48">
          <Image source={Item.img} resizeMode="contain" style={styles.resImg} />
        </View>
        <Text className="">{Item.name}</Text>
        <Text>{Item.menu}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  resImg: {
    // borderRadius: 50,
    height: "100%",
    alignSelf: "center",
  },
});
export default RestaurantList;
