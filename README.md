# 🏳️ Diversión con Banderas - React Time Attack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

> *"Como diría el Dr. Sheldon Cooper: Bienvenidos a Diversión con Banderas".*

Un juego de trivia geográfica contrarreloj (Time Attack) desarrollado para consolidar el aprendizaje de **React Hooks** y la gestión de estado compleja. El objetivo es migrar la lógica imperativa típica de JavaScript Vanilla a la arquitectura declarativa de React.

## 📸 Screenshots

| Gameplay (Normal) | Gameplay (Zona Crítica) | Ranking Persistente |
|:---:|:---:|:---:|
| ![Gameplay Normal](./screenshots/gameplay.png) | ![Zona Crítica](./screenshots/critical_v2.png) | ![Ranking](./screenshots/ranking.png) |

## 🎮 Características

* **Mecánica Time Attack:** Temporizador global que controla el flujo de la partida.
* **Feedback Visual Dinámico:** La barra de progreso cambia de color y estado (`CSS Modules` + `State`) cuando el tiempo entra en fase crítica (< 20%).
* **Validación de Formularios:** Implementación de **`react-hook-form`** para manejar inputs, validaciones y evitar renders innecesarios.
* **Persistencia de Datos:** Sistema de Ranking que utiliza `localStorage` para guardar las puntuaciones del usuario entre sesiones.
* **Rondas Aleatorias:** El array de países se mezcla aleatoriamente al iniciar cada partida para asegurar la rejugabilidad.

## 🧠 Aprendizajes Clave (De Vanilla a React)

Este proyecto ha servido como "sandbox" para profundizar en conceptos clave del framework:

1.  **Hooks (`useState` & `useEffect`):** Coordinación del temporizador (`setInterval`) con el ciclo de vida de los componentes para evitar memory leaks y comportamientos inesperados.
2.  **Comunicación entre componentes:** Paso de props y callbacks para comunicar la `GameZone` (hijo) con la lógica principal de la `App` (padre).
3.  **Renderizado Condicional:** Alternancia entre la pantalla de juego y la pantalla de Ranking/Game Over basada en el estado del tiempo.

## 🛠️ Tecnologías

* **React (Vite)**
* **React Hook Form**
* **CSS3** 
* **LocalStorage API**

## 🚀 Instalación y Uso

1.  Clonar el repositorio:
    ```bash
    git clone [https://github.com/tu-usuario/diversion-con-banderas.git](https://github.com/tu-usuario/diversion-con-banderas.git)
    ```
2.  Instalar dependencias:
    ```bash
    npm install
    ```
3.  Ejecutar en local:
    ```bash
    npm run dev
    ```

---
Hecho con ❤️ por Alexis López
