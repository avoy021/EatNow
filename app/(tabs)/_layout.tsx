import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "orange" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={24} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" size={24} />
          ),
          headerShown: false,
        }}
      />
      {/* <Tabs.Screen name="cart" options={{ title: "Profile" }} /> */}
    </Tabs>
  );
};

export default TabsLayout;
