import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FoodCategories, RestaurantList, Searchbar } from "@/components";

const Home = () => {
  const [name, setName] = useState("Avoy");
  const [address, setAddress] = useState("Khaprail More, Siliguri");
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView keyboardShouldPersistTaps="handled">
        <View className="px-6 py-8 gap-8">
          <View className="">
            <Text className="font-semibold text-[14px] text-orange-600">
              Deliver To
            </Text>
            <Text className="text-[13px]">{address}</Text>
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
