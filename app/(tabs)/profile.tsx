import { Image, Text, View } from "react-native";
import ProfileRow from "@/components/ProfileRow";
import { router } from "expo-router";

const Profile = () => {
  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="items-center bg-orange-400 pt-16 pb-10 rounded-b-[40px]">
        <Image
          source={{
            uri: "https://i.pravatar.cc/150",
          }}
          className="w-28 h-28 rounded-full border-2 border-white"
        />

        <Text className="mt-4 text-white text-xl font-semibold">Avoy Das</Text>
      </View>

      {/* Options */}
      <View className="mt-6 overflow-hidden rounded-xl mx-4 shadow-sm">
        <ProfileRow
          title="Personal Info"
          icon="person-outline"
          onPress={() => console.log("Personal Info")}
        />
        <ProfileRow
          title="Address"
          icon="location-on"
          onPress={() => console.log("address")}
        />
        <ProfileRow
          title="Cart"
          icon="shopping-bag"
          onPress={() => router.push("/(tabs)/cart")}
        />
        <ProfileRow
          title="Payment Method"
          icon="credit-card"
          onPress={() => console.log("payment")}
        />
        <ProfileRow
          title="Settings"
          icon="settings"
          onPress={() => console.log("settings")}
        />
      </View>

      {/* Logout */}
      <View className="mt-6 overflow-hidden rounded-xl mx-4 shadow-sm">
        <ProfileRow
          title="Logout"
          icon="logout"
          danger
          onPress={() => console.log("logout")}
        />
      </View>
    </View>
  );
};

export default Profile;
