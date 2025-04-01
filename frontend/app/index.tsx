import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}
    >
      <View style={styles.contain}>
        <Image source={require("../assets/images/bag.png")} />
        <Text style={styles.shopee}>Shopee</Text>
        <Text style={styles.log}>Beautiful eCommerce UI Kit for your online store</Text>
      </View>
      <View style={styles.con}>
        <TouchableOpacity style={styles.btn}><Text style={styles.text}>Let's get started</Text></TouchableOpacity>
        <View>
          <Text style={styles.acc}>I already have an account</Text>
          <Image source={require("../assets/images/bag.png")}/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
    gap: 60,
    alignItems: "center",
  },
  contain: {
    justifyContent: "center",
    alignItems: "center"
  },
  shopee: {
    fontSize: 50,
    fontWeight: "bold",
  },
  log: {
    fontSize: 19,
    textAlign: "center",
    fontWeight: "normal",
    color: "#202020"
  },
  btn: {
    backgroundColor: "#004CFF",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14
  },
  acc: {
    fontSize: 15,
    fontWeight: "normal",
    color: "#202020",
    textAlign: "center",
    marginTop: 20
  },
  con: {
    width: "100%",
  },
  text: {
    color: "#F3F3F3",
    fontSize: 18,
  }
});

