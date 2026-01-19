import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, TextInput } from "react-native";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  return (
    <View className="flex flex-row gap-1 items-center h-14 bg-[#F2F2F2] px-4 rounded-xl">
      <MaterialCommunityIcons
        name="magnify"
        size={24}
        color="#a7a9ad"
        className="h-full py-4"
      />
      <TextInput
        placeholder="Search dishes, restaurants"
        placeholderTextColor="#949aa8"
        className="h-full flex-1 px-1 py-2 text-base focus:outline-none baseline"
        value={search}
        onChangeText={setSearch}
      />
    </View>
  );
};

export default Searchbar;
