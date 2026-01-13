import { View, Text, ScrollView } from "react-native";

const Saved = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 8 }}>
        Saved Properties
      </Text>

      <Text>
        Properties you’ve saved will appear here.
      </Text>
    </ScrollView>
  );
};

export default Saved;
