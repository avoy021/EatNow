import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FoodCategories, RestaurantList, Searchbar } from "@/components";

const Home = () => {
  const [name, setName] = useState("Avoy");
  const [address, setAddress] = useState("Khaprail More, Siliguri");
  return (
    <SafeAreaView className="mx-8 my-4">
      <View>
        <Text>Deliver To</Text>
        <Text>{address}</Text>
      </View>

      <View>
        <Text>Hey {name}, Good Afternoon! </Text>
      </View>

      <Searchbar />

      <View>
        <View>
          <Text>All Categories</Text>
          <TouchableOpacity>
            <Text>See All {`>`}</Text>
          </TouchableOpacity>
        </View>
        <FoodCategories />
      </View>

      <RestaurantList />
    </SafeAreaView>
  );
};

export default Home;
