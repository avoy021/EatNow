import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CartBtn,
  FoodCategories,
  RestaurantList,
  Searchbar,
} from "@/components";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Home = () => {
  const [name, setName] = useState("Avoy");
  const [address, setAddress] = useState("Telangana, India");
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView keyboardShouldPersistTaps="handled">
        <View className="px-6 py-8 gap-8 font-medium">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="font-semibold text-sm text-[#ff9030] uppercase">
                Deliver To
              </Text>
              <Text className="text-sm">{address}</Text>
            </View>
            <CartBtn />
          </View>

          <View>
            <Text className="text-base mb-4 text-[#343434]">
              Hey {name},{" "}
              <Text className="font-bold">Good Afternoon!</Text>{" "}
            </Text>
            <Searchbar />
          </View>

          <View>
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-base font-semibold text-[#343434]">
                All Categories
              </Text>
              <TouchableOpacity>
                <Text className="text-[14px] text-[#343434]">
                  See All {`>`}
                </Text>
              </TouchableOpacity>
            </View>
            <FoodCategories />
          </View>

          <View>
            <View className="flex-row justify-between items-center mb-5">
              <Text className="text-base font-semibold text-[#343434]">
                Open Restaurants
              </Text>
              <TouchableOpacity>
                <Text className="text-[14px] text-[#343434]">
                  See All {`>`}
                </Text>
              </TouchableOpacity>
            </View>
            <RestaurantList />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
