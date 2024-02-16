import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    bar: {
      padding: 10,
      backgroundColor: 'black',
      width: '100%',
    },
    title: {
      fontSize: 24,
      color: 'white',
      fontWeight: 'bold',
    },
    container: {
      height: '100%',
      width: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
  
    horizontalContainer: {
      flex: 1,
      flexDirection: "row",
    },
    text: {
      color: 'white',
      fontSize: 15,
      margin: 10,
    },
    button: {
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      borderBottomWidth: 1,
      borderBottomColor: 'white',
      paddingHorizontal: 10,
    },
    
});

export default styles;