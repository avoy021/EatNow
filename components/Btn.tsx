import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type BtnProps = {
    title: string;
    onPress: () => void;
    width?: string;
    btnClass?: string;
    textClass?: string; 
    btnColor: string,
    textColor?: string
}

const Btn = ({title, onPress, width="w-full", btnColor="bg-orange-600", textColor="text-white", btnClass, textClass}: BtnProps) => {

    return (
        <TouchableOpacity className={`${width} py-5 ${btnColor} rounded-xl ${btnClass}`} onPress={onPress} activeOpacity={0.7}>
            <Text className={`text-center ${textColor} font-medium text-[12px] ${textClass}`}>{title}</Text>
        </TouchableOpacity>                   
    )
}

export default Btn;

const styles = StyleSheet.create({})