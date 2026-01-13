import { View, Text, ScrollView } from "react-native";

const Inbox = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 8 }}>
        Inbox
      </Text>

      <Text>
        Your messages and notifications will show up here.
      </Text>
    </ScrollView>
  );
};

export default Inbox;
