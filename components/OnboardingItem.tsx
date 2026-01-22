import { router } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Btn from "./Btn";
import onboardingData from "@/assets/data/onboardingData";

const OnboardingItem = ({ content, handleNext, index }: any) => {
  const { width, height } = Dimensions.get("screen");
  return (
    <View className="flex-1 w-screen h-screen">
      <Image
        source={content.img}
        resizeMode="cover"
        style={{
          width,
          flex: 0.72,
          alignItems: "center",
        }}
      />
      <View className="mt-14 mx-8">
        <Text className="text-center text-3xl font-bold tracking-tight">
          {content.title}
        </Text>
        <Text className="text-center text-[13px] text-gray-600 mt-4">
          {content.desc}
        </Text>
      </View>

      {/* <Pagination /> */}

      <View className="mx-8 mt-auto">
        <Btn
          title={index === onboardingData.length - 1 ? "Get Started" : "NEXT"}
          onPress={handleNext}
          btnColor="bg-orange-500"
        />
        <Btn
          title="Skip"
          onPress={() => router.push("/auth")}
          btnColor=""
          textColor="text-gray-500"
        />
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({});
