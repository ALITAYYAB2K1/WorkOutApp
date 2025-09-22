import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function WorkoutScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6">
        <Text className="text-3xl font-bold text-gray-900 mb-6">
          Start Workout
        </Text>

        {/* Quick Start Section */}
        <View className="mb-8">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Quick Start
          </Text>
          <TouchableOpacity className="bg-blue-600 p-4 rounded-lg mb-3">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-white font-semibold text-lg">
                  Start Empty Workout
                </Text>
                <Text className="text-blue-200">
                  Build your workout as you go
                </Text>
              </View>
              <FontAwesome name="play" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Workout Templates */}
        <View className="mb-8">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Workout Templates
          </Text>

          <TouchableOpacity className="bg-white p-4 rounded-lg mb-3 border border-gray-200">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-gray-900 font-semibold text-lg">
                  Push Day
                </Text>
                <Text className="text-gray-600">
                  Chest, Shoulders, Triceps • 6 exercises
                </Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#6b7280" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white p-4 rounded-lg mb-3 border border-gray-200">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-gray-900 font-semibold text-lg">
                  Pull Day
                </Text>
                <Text className="text-gray-600">
                  Back, Biceps • 5 exercises
                </Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#6b7280" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white p-4 rounded-lg mb-3 border border-gray-200">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-gray-900 font-semibold text-lg">
                  Leg Day
                </Text>
                <Text className="text-gray-600">
                  Quads, Hamstrings, Glutes • 7 exercises
                </Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#6b7280" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Recent Workouts */}
        <View>
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Recent Workouts
          </Text>

          <TouchableOpacity className="bg-white p-4 rounded-lg mb-3 border border-gray-200">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-gray-900 font-semibold">
                  Upper Body - 2 days ago
                </Text>
                <Text className="text-gray-600">45 min • 8 exercises</Text>
              </View>
              <FontAwesome name="repeat" size={16} color="#2563eb" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
