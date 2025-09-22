import { FontAwesome } from "@expo/vector-icons";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ExercisesScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-white p-6 border-b border-gray-200">
        <Text className="text-3xl font-bold text-gray-900 mb-4">Exercises</Text>

        {/* Search Bar */}
        <View className="flex-row items-center bg-gray-100 rounded-lg p-3">
          <FontAwesome name="search" size={16} color="#6b7280" />
          <TextInput
            placeholder="Search exercises..."
            className="flex-1 ml-3 text-gray-700"
            placeholderTextColor="#9ca3af"
          />
        </View>
      </View>

      <ScrollView className="flex-1">
        <View className="p-6">
          {/* Categories */}
          <View className="mb-6">
            <Text className="text-xl font-semibold text-gray-800 mb-4">
              Categories
            </Text>

            <View className="flex-row flex-wrap gap-3">
              <TouchableOpacity className="bg-blue-100 px-4 py-2 rounded-full">
                <Text className="text-blue-700 font-medium">All</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-100 px-4 py-2 rounded-full">
                <Text className="text-gray-700 font-medium">Chest</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-100 px-4 py-2 rounded-full">
                <Text className="text-gray-700 font-medium">Back</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-100 px-4 py-2 rounded-full">
                <Text className="text-gray-700 font-medium">Legs</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-100 px-4 py-2 rounded-full">
                <Text className="text-gray-700 font-medium">Arms</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Exercise List */}
          <View className="mb-6">
            <Text className="text-xl font-semibold text-gray-800 mb-4">
              Popular Exercises
            </Text>

            {/* Exercise Items */}
            <TouchableOpacity className="bg-white p-4 rounded-lg mb-3 border border-gray-200">
              <View className="flex-row items-center justify-between">
                <View className="flex-1">
                  <Text className="text-gray-900 font-semibold text-lg">
                    Bench Press
                  </Text>
                  <Text className="text-gray-600">Chest • Compound</Text>
                  <View className="flex-row items-center mt-2">
                    <View className="bg-green-100 px-2 py-1 rounded">
                      <Text className="text-green-700 text-xs font-medium">
                        Beginner
                      </Text>
                    </View>
                  </View>
                </View>
                <View className="items-center">
                  <FontAwesome name="plus-circle" size={24} color="#2563eb" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white p-4 rounded-lg mb-3 border border-gray-200">
              <View className="flex-row items-center justify-between">
                <View className="flex-1">
                  <Text className="text-gray-900 font-semibold text-lg">
                    Squats
                  </Text>
                  <Text className="text-gray-600">Legs • Compound</Text>
                  <View className="flex-row items-center mt-2">
                    <View className="bg-green-100 px-2 py-1 rounded">
                      <Text className="text-green-700 text-xs font-medium">
                        Beginner
                      </Text>
                    </View>
                  </View>
                </View>
                <View className="items-center">
                  <FontAwesome name="plus-circle" size={24} color="#2563eb" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white p-4 rounded-lg mb-3 border border-gray-200">
              <View className="flex-row items-center justify-between">
                <View className="flex-1">
                  <Text className="text-gray-900 font-semibold text-lg">
                    Deadlift
                  </Text>
                  <Text className="text-gray-600">Back, Legs • Compound</Text>
                  <View className="flex-row items-center mt-2">
                    <View className="bg-yellow-100 px-2 py-1 rounded">
                      <Text className="text-yellow-700 text-xs font-medium">
                        Intermediate
                      </Text>
                    </View>
                  </View>
                </View>
                <View className="items-center">
                  <FontAwesome name="plus-circle" size={24} color="#2563eb" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white p-4 rounded-lg mb-3 border border-gray-200">
              <View className="flex-row items-center justify-between">
                <View className="flex-1">
                  <Text className="text-gray-900 font-semibold text-lg">
                    Pull-ups
                  </Text>
                  <Text className="text-gray-600">Back, Arms • Bodyweight</Text>
                  <View className="flex-row items-center mt-2">
                    <View className="bg-red-100 px-2 py-1 rounded">
                      <Text className="text-red-700 text-xs font-medium">
                        Advanced
                      </Text>
                    </View>
                  </View>
                </View>
                <View className="items-center">
                  <FontAwesome name="plus-circle" size={24} color="#2563eb" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white p-4 rounded-lg mb-3 border border-gray-200">
              <View className="flex-row items-center justify-between">
                <View className="flex-1">
                  <Text className="text-gray-900 font-semibold text-lg">
                    Shoulder Press
                  </Text>
                  <Text className="text-gray-600">Shoulders • Compound</Text>
                  <View className="flex-row items-center mt-2">
                    <View className="bg-green-100 px-2 py-1 rounded">
                      <Text className="text-green-700 text-xs font-medium">
                        Beginner
                      </Text>
                    </View>
                  </View>
                </View>
                <View className="items-center">
                  <FontAwesome name="plus-circle" size={24} color="#2563eb" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
