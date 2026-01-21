import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RestaurantInfo = ({ size, color }: { size: number; color: string }) => {
  return (
    <View className="flex-row items-center gap-x-7">
      <View className="flex-row items-center gap-x-1.5">
        <MaterialCommunityIcons name="star-outline" size={size} color={color} />
        <Text className="text-sm font-medium">4.5</Text>
      </View>

      <View className="flex-row items-center gap-x-1.5">
        <MaterialCommunityIcons name="bike-fast" size={size} color={color} />
        <Text className="text-sm font-medium text-gray-800">Free</Text>
      </View>

      <View className="flex-row items-center gap-x-1.5">
        <MaterialCommunityIcons
          name="clock-outline"
          size={size}
          color={color}
        />
        <Text className="text-sm font-medium text-gray-800">20 min</Text>
      </View>
    </View>
  );
};

export default RestaurantInfo;
