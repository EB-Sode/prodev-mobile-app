import { View, Text, TextInput } from "react-native";

const Search = () => {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 12 }}>
        Search
      </Text>

      <TextInput
        placeholder="Search by location, price, or type"
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          padding: 12,
          borderRadius: 8,
        }}
      />
    </View>
  );
};

export default Search;
