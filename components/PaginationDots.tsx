import { View, Text } from "react-native";

const PaginationDots = ({
  current,
  total,
}: {
  current: number;
  total: number;
}) => {
  return (
    <View className="flex-row justify-center items-center">
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          className={`mx-1 rounded-full ${current === index ? "w-6 h-2 bg-orange-500" : "w-2 h-2 bg-gray-300"}`}
        />
      ))}
    </View>
  );
};

export default PaginationDots;
