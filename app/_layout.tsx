import { Stack } from 'expo-router';
import './global.css';

const rootLayout = () => {
  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false}}/>
        <Stack.Screen name="auth" options={{  headerShown: false}}/>
      </Stack>
  )
}

export default rootLayout;
