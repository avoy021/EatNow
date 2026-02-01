import { router } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Btn from "./Btn";
import onboardingData from "@/assets/data/onboardingData";

const OnboardingItem = ({ content }: any) => {
  const { width, height } = Dimensions.get("screen");
  return (
    <View className="w-screen">
      <Image
        source={content.img}
        resizeMode="cover"
        style={{
          width,
          height: 400,
        }}
      />
      <View className="mt-8 mx-8">
        <Text className="text-center text-3xl font-bold tracking-tight">
          {content.title}
        </Text>
        <Text className="text-center text-[13px] text-gray-600 mt-4">
          {content.desc}
        </Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({});
