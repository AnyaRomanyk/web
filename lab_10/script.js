const tankData = {
    "Object 140": {
        damage: "390",
        breoning: "258",
        attackSpeed: "6.67 rounds/min",
        targetingTime: "2.01s",
        ammunition: "50 rounds"
    },
    "T-62A": {
        damage: "320",
        breoning: "264",
        attackSpeed: "8 rounds/min",
        targetingTime: "2.0s",
        ammunition: "40 rounds"
    },
    "E 100": {
        damage: "750",
        breoning: "246",
        attackSpeed: "3.33 rounds/min",
        targetingTime: "2.7s",
        ammunition: "36 rounds"
    },
    "MAUS": {
        damage: "490",
        breoning: "246",
        attackSpeed: "4 rounds/min",
        targetingTime: "2.3s",
        ammunition: "68 rounds"
    },
    "T110E5": {
        damage: "400",
        breoning: "258",
        attackSpeed: "6 rounds/min",
        targetingTime: "1.9s",
        ammunition: "42 rounds"
    },
    "T57 HEAVY TANK": {
        damage: "400",
        breoning: "258",
        attackSpeed: "5 rounds/min",
        targetingTime: "2.3s",
        ammunition: "40 rounds"
    },
    "FV215B": {
        damage: "400",
        breoning: "249",
        attackSpeed: "6 rounds/min",
        targetingTime: "1.7s",
        ammunition: "40 rounds"
    },
    "CONQUEROR G...": {
        damage: "480",
        breoning: "295",
        attackSpeed: "4 rounds/min",
        targetingTime: "2.9s",
        ammunition: "45 rounds"
    }
};

function loadTankFromHash() {
    const tankName = decodeURIComponent(window.location.hash.slice(1));
    const details = tankData[tankName];
    if (details) {
        document.getElementById("tank-name").textContent = tankName;
        document.getElementById("damage").textContent = "Damage: " + details.damage;
        document.getElementById("breoning").textContent = "Breoning: " + details.breoning;
        document.getElementById("attack-speed").textContent = "Attack Speed: " + details.attackSpeed;
        document.getElementById("targeting-time").textContent = "Time of Targeting: " + details.targetingTime;
        document.getElementById("ammunition").textContent = "Ammunition: " + details.ammunition;
    } else {
        document.getElementById("tank-name").textContent = "Select a tank to view details";
        document.getElementById("damage").textContent = "";
        document.getElementById("breoning").textContent = "";
        document.getElementById("attack-speed").textContent = "";
        document.getElementById("targeting-time").textContent = "";
        document.getElementById("ammunition").textContent = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.tank-gallery img').forEach(tankElement => {
        tankElement.addEventListener("click", () => {
            const tankName = tankElement.alt;
            window.location.hash = encodeURIComponent(tankName);
        });
    });

    window.addEventListener("hashchange", loadTankFromHash);
    loadTankFromHash();
});
