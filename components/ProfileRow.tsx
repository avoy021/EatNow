import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
  danger?: boolean;
};

const ProfileRow = ({ title, icon, onPress, danger }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center justify-between px-5 py-4 bg-white"
      activeOpacity={0.7}
    >
      <View className="flex-row items-center gap-4">
        <View
          className={`p-2 rounded-full ${
            danger ? "bg-red-100" : "bg-orange-100"
          }`}
        >
          <MaterialIcons
            name={icon}
            size={22}
            color={danger ? "#dc2626" : "#ff7a00"}
          />
        </View>

        <Text
          className={`text-[15px] font-medium ${
            danger ? "text-red-600" : "text-gray-800"
          }`}
        >
          {title}
        </Text>
      </View>

      <MaterialIcons name="chevron-right" size={22} color="#9ca3af" />
    </TouchableOpacity>
  );
};

export default ProfileRow;
