import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import categories from "@/assets/data/categories";

const FoodCategories = () => {
  return (
    <View className="">
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem Item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const CategoryItem = ({ Item }: any) => {
  return (
    <TouchableOpacity
      className={`flex-row justify-center items-center py-1.5 px-2 mr-4 rounded-[50] focus:bg-orange-400 ${Item.id === 1 ? "bg-orange-300" : ""}`}
      onPress={() => console.log(Item.title)}
      style={styles.parent}
    >
      <Image source={Item.img} resizeMode="contain" style={styles.img} />
      <Text className="text-sm font-semibold mx-3">{Item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: "#f4f3f2",
    shadowColor: "#c0baba",
    shadowOpacity: 0.5,
    elevation: 2,
    shadowRadius: 6,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "white",
  },
});
export default FoodCategories;
