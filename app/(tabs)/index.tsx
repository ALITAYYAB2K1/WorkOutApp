import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white p-6 border-b border-gray-200">
        <Text className="text-3xl font-bold text-gray-900 mb-2">
          Welcome Back! 💪
        </Text>
        <Text className="text-gray-600">Ready for today&apos;s workout?</Text>
      </View>

      <View className="p-6">
        {/* Quick Stats */}
        <View className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg mb-6">
          <Text className="text-white text-xl font-bold mb-4">
            Today&apos;s Progress
          </Text>
          <View className="flex-row justify-between">
            <View>
              <Text className="text-blue-100 text-sm">Workouts This Week</Text>
              <Text className="text-white text-2xl font-bold">4/5</Text>
            </View>
            <View>
              <Text className="text-blue-100 text-sm">Current Streak</Text>
              <Text className="text-white text-2xl font-bold">12 days</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="mb-8">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Quick Actions
          </Text>

          <View className="flex-row gap-4 mb-4">
            <TouchableOpacity className="flex-1 bg-blue-600 p-4 rounded-lg">
              <View className="items-center">
                <FontAwesome name="play" size={24} color="white" />
                <Text className="text-white font-semibold mt-2">
                  Start Workout
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 bg-green-600 p-4 rounded-lg">
              <View className="items-center">
                <FontAwesome name="plus" size={24} color="white" />
                <Text className="text-white font-semibold mt-2">
                  Log Exercise
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Today's Plan */}
        <View className="mb-8">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Today&apos;s Plan
          </Text>

          <View className="bg-white p-4 rounded-lg border border-gray-200">
            <View className="flex-row items-center justify-between mb-3">
              <Text className="text-lg font-semibold text-gray-900">
                Push Day
              </Text>
              <View className="bg-blue-100 px-3 py-1 rounded-full">
                <Text className="text-blue-700 text-sm font-medium">
                  Scheduled
                </Text>
              </View>
            </View>
            <Text className="text-gray-600 mb-3">
              Chest, Shoulders, Triceps • 6 exercises
            </Text>
            <Text className="text-gray-500 text-sm">
              Estimated time: 45-60 minutes
            </Text>
          </View>
        </View>

        {/* Recent Activity */}
        <View className="mb-8">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Recent Activity
          </Text>

          <View className="bg-white p-4 rounded-lg border border-gray-200 mb-3">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-gray-900 font-semibold">
                  Yesterday&apos;s Pull Day
                </Text>
                <Text className="text-gray-600">5 exercises • 48 minutes</Text>
              </View>
              <View className="items-center">
                <FontAwesome name="check-circle" size={20} color="#10b981" />
                <Text className="text-green-600 text-xs mt-1">Completed</Text>
              </View>
            </View>
          </View>

          <View className="bg-white p-4 rounded-lg border border-gray-200">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-gray-900 font-semibold">
                  Monday&apos;s Leg Day
                </Text>
                <Text className="text-gray-600">7 exercises • 65 minutes</Text>
              </View>
              <View className="items-center">
                <FontAwesome name="trophy" size={20} color="#f59e0b" />
                <Text className="text-amber-600 text-xs mt-1">New PR!</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Motivation Quote */}
        <View className="bg-gray-100 p-6 rounded-lg">
          <Text className="text-gray-800 text-center italic text-lg mb-2">
            &ldquo;The only bad workout is the one that didn&apos;t
            happen.&rdquo;
          </Text>
          <Text className="text-gray-600 text-center text-sm">
            Keep pushing forward! 🔥
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
