import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const CartBtn = () => {
  return (
    <TouchableOpacity
      onPress={() => router.push("/cart")}
      activeOpacity={0.8}
      className="relative bg-[#1f1f1f] p-2 rounded-full items-center justify-center"
    >
      <MaterialCommunityIcons
        name="shopping-outline"
        size={20}
        color="#f5f5f5"
      />

      {/* Badge */}
      <View className="absolute -top-1 -right-[0.9] bg-orange-500 rounded-full min-w-[20px] h-[20px] items-center justify-center px-1.5">
        <Text className="text-[11px] text-white font-semibold">2</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartBtn;
