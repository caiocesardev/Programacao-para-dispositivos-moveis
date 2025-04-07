import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems
      : "center", 
      padding: 20,
    },
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 5,
    },
    input: {
      width: 200,
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      paddingLeft: 10,
      fontSize: 16,
    },
    error: {
      marginTop: 20,
      fontSize: 20,
      color: "red",
      fontWeight: "bold",
    },
    result: {
      marginTop: 20,
      fontSize: 20,
      color: "green",
      fontWeight: "bold",
    },
  });

export default styles;