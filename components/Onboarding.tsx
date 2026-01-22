import onboardingData from "@/assets/data/onboardingData";
import { Dimensions, FlatList, Text, View } from "react-native";
import OnboardingItem from "./OnboardingItem";
import { useRef, useState } from "react";
import Btn from "./Btn";
import { router } from "expo-router";

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
    <View className="bg-gray-50">
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
    </View>
  );
};

export default Onboarding;
