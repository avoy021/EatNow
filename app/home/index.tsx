import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FoodCategories, RestaurantList, Searchbar } from "@/components";

const Home = () => {
  const [name, setName] = useState("Avoy");
  const [address, setAddress] = useState("Khaprail More, Siliguri");
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-6 py-8 gap-6">
        <View>
          <Text className="font-bold text-[13px] uppercase text-orange-400">
            Deliver To
          </Text>
          <Text className="text-[13px]">{address}</Text>
        </View>

        <View>
          <Text className="text-base">
            Hey {name},{" "}
            <Text className="font-semibold">Good Afternoon!</Text>{" "}
          </Text>
        </View>

        <Searchbar />

        <View>
          <View className="flex-row justify-between items-center mb-8">
            <Text className="text-base font-[500]">All Categories</Text>
            <TouchableOpacity>
              <Text className="text-[14px]">See All {`>`}</Text>
            </TouchableOpacity>
          </View>
          <FoodCategories />
        </View>

        <RestaurantList />
      </View>
    </SafeAreaView>
  );
};

export default Home;
