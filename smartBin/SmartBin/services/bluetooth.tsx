export async function connectToBin(): Promise<string> {
    try {
        // Simulation de la connexion BLE
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return "Connected to SmartBin";
    } catch (e) {
        return "Connection Failed";
    }
}
