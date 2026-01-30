import { View, Text } from "react-native";

const PaginationDots = ({
  currentIndex,
  total,
}: {
  currentIndex: number;
  total: number;
}) => {
  return (
    <View className="flex-row justify-center items-center mt-4">
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          className={`mx-1 w-2 h-2 rounded-full ${currentIndex === index ? "bg-orange-500" : "bg-gray-300"}`}
        />
      ))}
    </View>
  );
};

export default PaginationDots;
