import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Cart = () => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView style={{ paddingTop: insets.top }}>
      <Text>Cart is live</Text>
    </ScrollView>
  );
};

export default Cart;
