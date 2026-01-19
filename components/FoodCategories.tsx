import { View, Text, FlatList } from "react-native";
import React from "react";
import categories from "@/assets/data/categories";

const FoodCategories = () => {
  return (
    <View className="">
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem Item={item} />}
        horizontal
      />
    </View>
  );
};

const CategoryItem = ({ Item }: any) => {
  return (
    <View className="flex-row justify-center items-center w-14 h-14 mr-8 shadow-md rounded-xl focus:bg-orange-400">
      <img src={Item.img} alt={Item.title} className="w-8 h-8 rounded-full" />
      <Text>{Item.title}</Text>
    </View>
  );
};

export default FoodCategories;
