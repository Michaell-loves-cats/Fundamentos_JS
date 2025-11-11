// Arreglo de objetos con las 10 personas más ricas del mundo (2025)
const personasMasRicas = [
    { nombre: "Elon Musk", fortuna: 210_000_000_000 },
    { nombre: "Bernard Arnault y familia", fortuna: 205_000_000_000 },
    { nombre: "Jeff Bezos", fortuna: 195_000_000_000 },
    { nombre: "Mark Zuckerberg", fortuna: 165_000_000_000 },
    { nombre: "Larry Ellison", fortuna: 160_000_000_000 },
    { nombre: "Warren Buffett", fortuna: 140_000_000_000 },
    { nombre: "Bill Gates", fortuna: 135_000_000_000 },
    { nombre: "Larry Page", fortuna: 130_000_000_000 },
    { nombre: "Sergey Brin", fortuna: 125_000_000_000 },
    { nombre: "Steve Ballmer", fortuna: 120_000_000_000 }
];

// Mostrar los nombres y su fortuna en la consola
personasMasRicas.forEach(persona => {
    console.log(`${persona.nombre} — Fortuna: $${persona.fortuna.toLocaleString()} USD`);
});
