import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header with Profile Info */}
      <View className="bg-white p-6 border-b border-gray-200">
        <View className="items-center mb-6">
          <View className="w-24 h-24 bg-blue-500 rounded-full items-center justify-center mb-4">
            <FontAwesome name="user" size={40} color="white" />
          </View>
          <Text className="text-2xl font-bold text-gray-900">John Doe</Text>
          <Text className="text-gray-600">Fitness Enthusiast</Text>
        </View>

        {/* Stats Row */}
        <View className="flex-row justify-around border-t border-gray-200 pt-4">
          <View className="items-center">
            <Text className="text-xl font-bold text-blue-600">156</Text>
            <Text className="text-gray-600 text-sm">Workouts</Text>
          </View>
          <View className="items-center">
            <Text className="text-xl font-bold text-green-600">24</Text>
            <Text className="text-gray-600 text-sm">Streak</Text>
          </View>
          <View className="items-center">
            <Text className="text-xl font-bold text-purple-600">185</Text>
            <Text className="text-gray-600 text-sm">Weight (lbs)</Text>
          </View>
        </View>
      </View>

      <View className="p-6">
        {/* Personal Records */}
        <View className="mb-8">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Personal Records
          </Text>

          <View className="bg-white rounded-lg border border-gray-200 p-4 mb-3">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-gray-900 font-semibold">Bench Press</Text>
                <Text className="text-gray-600">225 lbs</Text>
              </View>
              <View className="items-center">
                <FontAwesome name="trophy" size={20} color="#f59e0b" />
                <Text className="text-amber-600 text-xs mt-1">New PR!</Text>
              </View>
            </View>
          </View>

          <View className="bg-white rounded-lg border border-gray-200 p-4 mb-3">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-gray-900 font-semibold">Squat</Text>
                <Text className="text-gray-600">285 lbs</Text>
              </View>
              <FontAwesome name="trophy" size={20} color="#d1d5db" />
            </View>
          </View>

          <View className="bg-white rounded-lg border border-gray-200 p-4 mb-3">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-gray-900 font-semibold">Deadlift</Text>
                <Text className="text-gray-600">315 lbs</Text>
              </View>
              <FontAwesome name="trophy" size={20} color="#d1d5db" />
            </View>
          </View>
        </View>

        {/* Settings & Preferences */}
        <View className="mb-8">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Settings
          </Text>

          <TouchableOpacity className="bg-white p-4 rounded-lg mb-3 border border-gray-200">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <FontAwesome name="user-circle" size={20} color="#6b7280" />
                <Text className="text-gray-900 font-medium ml-3">
                  Edit Profile
                </Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#6b7280" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white p-4 rounded-lg mb-3 border border-gray-200">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <FontAwesome name="cog" size={20} color="#6b7280" />
                <Text className="text-gray-900 font-medium ml-3">
                  Preferences
                </Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#6b7280" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white p-4 rounded-lg mb-3 border border-gray-200">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <FontAwesome name="bell" size={20} color="#6b7280" />
                <Text className="text-gray-900 font-medium ml-3">
                  Notifications
                </Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#6b7280" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white p-4 rounded-lg mb-3 border border-gray-200">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <FontAwesome name="bar-chart" size={20} color="#6b7280" />
                <Text className="text-gray-900 font-medium ml-3">
                  Progress & Goals
                </Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#6b7280" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white p-4 rounded-lg mb-3 border border-gray-200">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <FontAwesome name="share-alt" size={20} color="#6b7280" />
                <Text className="text-gray-900 font-medium ml-3">
                  Share App
                </Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#6b7280" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white p-4 rounded-lg mb-3 border border-gray-200">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <FontAwesome name="question-circle" size={20} color="#6b7280" />
                <Text className="text-gray-900 font-medium ml-3">
                  Help & Support
                </Text>
              </View>
              <FontAwesome name="chevron-right" size={16} color="#6b7280" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity className="bg-red-50 p-4 rounded-lg border border-red-200">
          <View className="flex-row items-center justify-center">
            <FontAwesome name="sign-out" size={20} color="#dc2626" />
            <Text className="text-red-600 font-medium ml-3">Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
