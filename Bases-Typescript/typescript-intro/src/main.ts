import "./style.css";
import "./topics/01-basic-types";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `Hola mundo desde TypeScript!`;

console.log("Hola mundo desde TypeScript!");
