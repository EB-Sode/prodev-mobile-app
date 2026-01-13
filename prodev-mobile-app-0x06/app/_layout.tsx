import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // default for all screens
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />

      {/* Profile overrides the default */}
      <Stack.Screen
        name="profile"
        options={{
          headerShown: true,
          title: "Profile",
        }}
      />
    </Stack>
  );
}
