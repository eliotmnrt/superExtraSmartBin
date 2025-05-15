import { View, Text, StyleSheet } from "react-native";

export default function StatusCard({ label, value }: { label: string; value: string }) {
    return (
        <View style={styles.card}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 16, borderRadius: 12, backgroundColor: "#f5f5f5", marginBottom: 20,
        shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, elevation: 3
    },
    label: { fontWeight: "600", fontSize: 16 },
    value: { fontSize: 14 }
});
