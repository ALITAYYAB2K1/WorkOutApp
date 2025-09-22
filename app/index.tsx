import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-3xl font-bold text-blue-600 mb-4">
        Welcome to Workout App!
      </Text>
      <Text className="text-lg text-gray-700 mb-2">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Text className="text-sm text-red-500 mt-2 px-4 text-center">
        This is a simple example of using NativeWind with Expo.
      </Text>
      <View className="mt-6 p-4 bg-green-200 rounded-lg">
        <Text className="text-green-800 font-semibold">
          ✅ Tailwind CSS is working!
        </Text>
      </View>
    </View>
  );
}
