import {ActivityIndicator, View} from "react-native";

const Loading =
    <View
        style={{
            flex: 1,
            backgroundColor: 'gray',
            justifyContent: "center",
            alignItems: "center"
        }}
    >
        <ActivityIndicator color="white" size={20} />
    </View>