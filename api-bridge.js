
// INDICTIVE V2 - API BRIDGE CONFIG
const PANEL_URL = "http://esaxalpat.anti-ddos.me:3011"; // Ganti dengan IP/Domain Pterodactyl kamu
const SECRET_KEY = "061013";

async function callPanelAPI(endpoint, data) {
    try {
        const response = await fetch(`${PANEL_URL}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data, key: SECRET_KEY })
        });
        return await response.json();
    } catch (error) {
        console.error("API Error:", error);
        return { status: 'error', message: 'Gagal terhubung ke Panel API' };
    }
}
