import {
    View,
    Text,
  } from "react-native";

 import { useRouter } from "expo-router";
import styles from './offers.style';

const Offers = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Offers
        </Text>
      </View>
      
    </View>
  )
}

export default Offers ;