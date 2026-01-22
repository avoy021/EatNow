import onboardingData from "@/assets/data/onboardingData";
import { Dimensions, FlatList, View } from "react-native";
import OnboardingItem from "./OnboardingItem";
import { useRef, useState } from "react";

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
    }
  };
  return (
    <View className="bg-gray-50">
      <FlatList
        ref={flatlistRef}
        data={onboardingData}
        renderItem={({ item }) => (
          <OnboardingItem handleNext={handleNext} content={item} />
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
