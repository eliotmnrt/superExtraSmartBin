import { View, Text } from "react-native";
import CommandButton from "@/components/ui/CommandButton";

export default function ControlScreen() {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>Commands:</Text>
            <CommandButton label="Go to Charging Station" onPress={() => {}} />
            <CommandButton label="Start Cleaning" onPress={() => {}} />
            <CommandButton label="Return to Base" onPress={() => {}} />
        </View>
    );
}
