import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HistoryScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white p-6 border-b border-gray-200">
        <Text className="text-3xl font-bold text-gray-900 mb-4">
          Workout History
        </Text>

        {/* Stats Overview */}
        <View className="flex-row justify-between">
          <View className="items-center">
            <Text className="text-2xl font-bold text-blue-600">12</Text>
            <Text className="text-gray-600 text-sm">This Month</Text>
          </View>
          <View className="items-center">
            <Text className="text-2xl font-bold text-green-600">45</Text>
            <Text className="text-gray-600 text-sm">Total Workouts</Text>
          </View>
          <View className="items-center">
            <Text className="text-2xl font-bold text-purple-600">3.2k</Text>
            <Text className="text-gray-600 text-sm">Total Weight (lbs)</Text>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1">
        <View className="p-6">
          {/* Filter Options */}
          <View className="flex-row gap-3 mb-6">
            <TouchableOpacity className="bg-blue-100 px-4 py-2 rounded-full">
              <Text className="text-blue-700 font-medium">All</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-100 px-4 py-2 rounded-full">
              <Text className="text-gray-700 font-medium">This Week</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-100 px-4 py-2 rounded-full">
              <Text className="text-gray-700 font-medium">This Month</Text>
            </TouchableOpacity>
          </View>

          {/* Workout History List */}
          <View className="space-y-4">
            {/* Today */}
            <View>
              <Text className="text-lg font-semibold text-gray-800 mb-3">
                Today
              </Text>

              <TouchableOpacity className="bg-white p-4 rounded-lg border border-gray-200 mb-3">
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-gray-900 font-semibold text-lg">
                    Push Day
                  </Text>
                  <Text className="text-gray-500 text-sm">2:30 PM</Text>
                </View>
                <Text className="text-gray-600 mb-2">Duration: 52 minutes</Text>
                <View className="flex-row items-center justify-between">
                  <Text className="text-gray-600">6 exercises • 18 sets</Text>
                  <View className="flex-row items-center">
                    <FontAwesome name="trophy" size={16} color="#f59e0b" />
                    <Text className="text-amber-600 ml-1 font-medium">PR!</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            {/* Yesterday */}
            <View>
              <Text className="text-lg font-semibold text-gray-800 mb-3">
                Yesterday
              </Text>

              <TouchableOpacity className="bg-white p-4 rounded-lg border border-gray-200 mb-3">
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-gray-900 font-semibold text-lg">
                    Cardio Session
                  </Text>
                  <Text className="text-gray-500 text-sm">6:00 AM</Text>
                </View>
                <Text className="text-gray-600 mb-2">Duration: 30 minutes</Text>
                <Text className="text-gray-600">Running • 3.2 miles</Text>
              </TouchableOpacity>
            </View>

            {/* This Week */}
            <View>
              <Text className="text-lg font-semibold text-gray-800 mb-3">
                This Week
              </Text>

              <TouchableOpacity className="bg-white p-4 rounded-lg border border-gray-200 mb-3">
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-gray-900 font-semibold text-lg">
                    Pull Day
                  </Text>
                  <Text className="text-gray-500 text-sm">Mon, 3:15 PM</Text>
                </View>
                <Text className="text-gray-600 mb-2">Duration: 48 minutes</Text>
                <Text className="text-gray-600">5 exercises • 15 sets</Text>
              </TouchableOpacity>

              <TouchableOpacity className="bg-white p-4 rounded-lg border border-gray-200 mb-3">
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-gray-900 font-semibold text-lg">
                    Leg Day
                  </Text>
                  <Text className="text-gray-500 text-sm">Sat, 10:30 AM</Text>
                </View>
                <Text className="text-gray-600 mb-2">Duration: 65 minutes</Text>
                <Text className="text-gray-600">7 exercises • 21 sets</Text>
              </TouchableOpacity>

              <TouchableOpacity className="bg-white p-4 rounded-lg border border-gray-200 mb-3">
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-gray-900 font-semibold text-lg">
                    Upper Body
                  </Text>
                  <Text className="text-gray-500 text-sm">Thu, 7:45 PM</Text>
                </View>
                <Text className="text-gray-600 mb-2">Duration: 55 minutes</Text>
                <Text className="text-gray-600">8 exercises • 24 sets</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Load More Button */}
          <TouchableOpacity className="bg-gray-100 p-4 rounded-lg mt-4">
            <Text className="text-gray-700 font-medium text-center">
              Load More History
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
