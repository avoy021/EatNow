import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabsLayout = () => {
  <Tabs>
    <Tabs.Screen name="index" options={{ title: "Home" }} />
    <Tabs.Screen name="cart" options={{ title: "Cart" }} />
    <Tabs.Screen name="cart" options={{ title: "Profile" }} />
  </Tabs>;
};

export default TabsLayout;
