// BATMAN 404 - SYSTEM LOGIC

// --- DATA ---
const toolsData = [
    { name: "Nmap", category: "Scanning", desc: "Network exploration tool and security / port scanner", cmd: "nmap -sC -sV <target>" },
    { name: "Burp Suite", category: "Web", desc: "Web vulnerability scanner", cmd: "burpsuite" },
    { name: "Metasploit", category: "Exploitation", desc: "Penetration testing framework", cmd: "msfconsole" },
    { name: "Wireshark", category: "Analysis", desc: "Network protocol analyzer", cmd: "wireshark" },
    { name: "Gobuster", category: "Web", desc: "Directory/file & DNS busting tool", cmd: "gobuster dir -u <url> -w <wordlist>" },
    { name: "John the Ripper", category: "Cracking", desc: "Password cracker", cmd: "john --wordlist=<list> <hash>" },
    { name: "Nikto", category: "Web", desc: "Web server scanner", cmd: "nikto -h <url>" },
    { name: "SQLMap", category: "Database", desc: "Automatic SQL injection and database takeover tool", cmd: "sqlmap -u <url>" },
    { name: "Hydra", category: "Cracking", desc: "Parallelized login cracker", cmd: "hydra -l <user> -P <passlist> <target> <service>" },
    { name: "Aircrack-ng", category: "Wireless", desc: "WiFi security auditing tools suite", cmd: "aircrack-ng <interface>" }
];

// --- NAVIGATION ---
function switchTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    // Deactivate nav buttons
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));

    // Show target tab
    document.getElementById(tabId).classList.add('active');

    // Activate Button (Simple logic finding button by text content or index - simplified here)
    // In a real app we'd bind the button ID too.
    const buttons = document.querySelectorAll('.nav-btn');
    if (tabId === 'home') buttons[0].classList.add('active');
    if (tabId === 'notes') buttons[1].classList.add('active');
    if (tabId === 'tools') {
        buttons[2].classList.add('active');
        renderTools(toolsData); // Refresh tools
    }
}

// --- TOOLS LOGIC ---
function renderTools(data) {
    const container = document.getElementById('tools-list');
    container.innerHTML = ''; // Clear current

    data.forEach(tool => {
        const div = document.createElement('div');
        div.className = 'tool-item';
        div.innerHTML = `
            <h4>${tool.name} <span style="font-size:0.8rem; color:#888">[${tool.category}]</span></h4>
            <p>${tool.desc}</p>
            <code class="cmd">$ ${tool.cmd}</code>
        `;
        container.appendChild(div);
    });
}

function filterTools() {
    const query = document.getElementById('tool-search').value.toLowerCase();
    const filtered = toolsData.filter(t =>
        t.name.toLowerCase().includes(query) ||
        t.desc.toLowerCase().includes(query) ||
        t.category.toLowerCase().includes(query)
    );
    renderTools(filtered);
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Set background if image exists (Using a placeholder logic for now)
    const bg = document.getElementById('bg-container');
    bg.style.backgroundImage = "url('assets/batman-hero-red.png')";
    bg.style.backgroundSize = "cover";
    bg.style.backgroundPosition = "center";

    console.log("SYSTEM ONLINE: BATMAN 404");
});
