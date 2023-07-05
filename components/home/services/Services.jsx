import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useRouter } from "expo-router";
import styles from './services.style';
import Card from "../../common/card/Card";
import {data, SIZES } from "../../../constants";

function Services() {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Popular Services
          </Text>
          <TouchableOpacity >
            <Text style={styles.headerBtn}>
              Show all
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <ScrollView horizontal>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {data.images.map((image, index) => (
          <Card key={index} imgPath={image.imgPath} imgTitle={image.imgTitle} />
        ))}
      </View>
    </ScrollView>
        )
        }
      </View>
    </View>
  )
}

export default Services;