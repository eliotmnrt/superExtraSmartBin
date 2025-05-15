import { View, Text, Button } from "react-native";
import { useState } from "react";
import { connectToBin } from "@/services/bluetooth";
import StatusCard from "@/components/ui/statusCard";

export default function HomeScreen() {
    const [status, setStatus] = useState("Disconnected");

    const handleConnect = async () => {
        const result = await connectToBin();
        setStatus(result);
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <StatusCard label="Connection Status" value={status} />
            <Button title="Connect to SmartBin" onPress={handleConnect} />
        </View>
    );
}
