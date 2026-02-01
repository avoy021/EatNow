import onboardingData from "@/assets/data/onboardingData";
import { Dimensions, FlatList, Text, View } from "react-native";
import OnboardingItem from "./OnboardingItem";
import { useRef, useState } from "react";
import Btn from "./Btn";
import { router } from "expo-router";
import PaginationDots from "./PaginationDots";

const { width } = Dimensions.get("window");

const Onboarding = () => {
  const flatlistRef = useRef<FlatList | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatlistRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      router.push("/auth");
    }
  };
  return (
    <View className="h-screen bg-gray-50 justify-between">
      <FlatList
        ref={flatlistRef}
        data={onboardingData}
        renderItem={({ item }) => (
          <OnboardingItem
            handleNext={handleNext}
            index={currentIndex}
            content={item}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        bounces={false}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />

      <View className="">
        <PaginationDots
          currentIndex={currentIndex}
          total={onboardingData.length}
        />
        <View className="mx-8 mt-16">
          <Btn
            title={
              currentIndex === onboardingData.length - 1
                ? "Get Started"
                : "NEXT"
            }
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
    </View>
  );
};

export default Onboarding;
