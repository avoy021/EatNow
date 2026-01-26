import Btn from "@/components/Btn";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    //doesnt work
    <SafeAreaView className="h-full bg-black">
      <View className="justify-center items-center my-24 gap-y-1">
        <Text className="text-white font-semibold text-3xl">
          {isRegistering ? "Sign Up" : "Log In"}
        </Text>
        <Text className="text-gray-400 text-sm">
          {isRegistering
            ? "Please sign up to get started"
            : "Please sign in to your existing account"}
        </Text>
      </View>
      <View className="flex-1 px-6 justify-center bg-gray-100 gap-y-6 rounded-t-3xl">
        <View className="gap-y-2">
          <Text className="text-base text-gray-700 font-medium pl-1">
            Email
          </Text>
          <TextInput
            placeholder="Enter Email"
            placeholderTextColor="#9a9595"
            value={email}
            onChangeText={setEmail}
            className="px-4 py-5 rounded-xl bg-[#fff] border border-gray-200 outline-none"
            keyboardType="email-address"
          />
        </View>
        <View className="gap-y-2">
          <Text className="text-base text-gray-700 font-medium pl-1">
            Password
          </Text>
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#9a9595"
            value={password}
            onChangeText={setPassword}
            className="px-4 py-5 rounded-xl bg-[#fff] border border-gray-200 outline-none"
            secureTextEntry
          />
        </View>

        <Btn
          title={isRegistering ? "Sign Up" : "Login"}
          btnColor="bg-orange-500"
          onPress={() => router.push("/(tabs)")}
          btnClass="py-5"
          textClass="text-[14px]"
        />

        <View className="items-center">
          {isRegistering ? (
            <Pressable onPress={() => setIsRegistering((prev) => !prev)}>
              <Text>
                Already have an account?{" "}
                <Text className="text-orange-500 font-bold">Login</Text>
              </Text>
            </Pressable>
          ) : (
            <Pressable onPress={() => setIsRegistering((prev) => !prev)}>
              <Text>
                Don't have an account?{" "}
                <Text className="text-orange-500 font-bold">Sign Up</Text>
              </Text>
            </Pressable>
          )}
        </View>

        <View className="flex-row items-center gap-x-4">
          <View className="flex-1 h-[1px] bg-gray-300" />
          <Text className="text-gray-500 font-light text-sm tracking-widest">
            Or
          </Text>
          <View className="flex-1 h-[1px] bg-gray-300" />
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="w-14 h-14 mx-auto items-center justify-center bg-white border border-gray-200 rounded-full"
        >
          <MaterialCommunityIcons name="google" size={24} color="#f53523" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AuthPage;
