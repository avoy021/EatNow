import onboardingData from '@/assets/data/onboardingData';
import { FlatList, View } from 'react-native';
import OnboardingItem from './OnboardingItem';

const Onboarding = () => {
  return (
    <View className='bg-gray-50'>
        <FlatList 
            data={onboardingData}
            renderItem={({item}) => <OnboardingItem content={item}/>}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            // snapToAlignment="end"
        />
    </View>
  )
}

export default Onboarding;