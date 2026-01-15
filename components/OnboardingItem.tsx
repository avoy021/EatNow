import { router } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Btn from "./Btn";


const OnboardingItem = ({ content }: any) => {
    const { width,height } = Dimensions.get("screen");
    return (
        <View className="flex-1 w-screen h-screen">
            <Image
                source={content.img}
                resizeMode="cover"
                style={{
                    width ,
                    flex: 0.72,
                    alignItems: "center"
                }}
            />
            <View className="mt-14 mx-8">
                <Text className="text-center text-3xl font-bold tracking-tight">{content.title}</Text>
                <Text className="text-center text-[13px] text-gray-600 mt-4">{content.desc}</Text>
            </View>

            {/* <Pagination /> */}
            
            <View className="mx-8 mt-auto">
                <Btn title="NEXT" onPress={() => router.push('/auth')} btnColor="bg-orange-500"/>
                <Btn title="Skip" onPress={() => console.log("Skip")} btnColor="" textColor="text-gray-500" />    
                {/* <TouchableOpacity className="w-full py-5" onPress={() => console.log("workking")} activeOpacity={0.7}>
                    <Text className="text-center font-medium text-gray-500 font-medium text-md">Skip</Text>
                </TouchableOpacity> */}
            </View>
            
        </View>
    );
};

export default OnboardingItem;

const styles = StyleSheet.create({
    // contentImage: {
    //     width: ,
    //     flex: 0.6,
    //     justifyContent: "center"
    // }
});
