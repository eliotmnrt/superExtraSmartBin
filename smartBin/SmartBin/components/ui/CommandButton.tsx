import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function CommandButton({ label, onPress }: { label: string; onPress: () => void }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 16, marginVertical: 8, borderRadius: 10,
        backgroundColor: "#00796B", alignItems: "center"
    },
    text: { color: "#fff", fontWeight: "600" }
});
