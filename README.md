# UNKNOW — Proyecto Web

## 📌 Título del proyecto

**UNKNOW** — Sitio web portafolio del equipo (TP1).

## 🔗 Enlace al deploy

👉 [https://tp1-equipo24.vercel.app/](https://tp1-equipo24.vercel.app/)

---

## 📖 Descripción del proyecto

Sitio web para presentar al equipo y a cada integrante. Combina diseño minimalista con funcionalidades actuales: **Bento Grid** responsive, **View Transitions** en la navegación interna, modo **blackout** con elementos SVG animados, reproductor de audio en las fichas de música y bitácora del desarrollo.

### ✨ Funcionalidades principales

- 🧭 Navegación interna con **View Transitions API** (donde el navegador lo permite).
- 👤 **Perfiles** por integrante con layout tipo bento.
- 🏠 **Portada** con acceso a las cuatro fichas de integrantes.
- ✨ **Efectos**: modo blackout (luna, estrellas, antorcha SVG), animaciones SVG distintas en portada e integrantes y efecto fuego en títulos.
- 📱 **Responsive** con breakpoints en **400px**, **900px** y **1200px**.
- 🎵 **Reproductor de música** en las páginas de integrantes (MP3 locales en `Integrantes/<nombre>/canciones/`; tapas y posters en `img/` según la consigna).

---

## 👥 Integrantes

| Integrante        |
|-------------------|
| Carlos Zárate     |
| Heber Choque      |
| Javier Navarro    |
| Leandro Melchiori |


---

## 🛠️ Tecnologías utilizadas

### 💻 Lenguajes y APIs

- 📄 **HTML5** — Estructura semántica, meta viewport con `viewport-fit=cover`.
- 🎨 **CSS3** — Grid, Flexbox, `@keyframes`, variables CSS, media queries.
- ⚡ **JavaScript (vanilla)** — Sin frameworks; blackout, música, navegación con view transitions.
- 🔄 **View Transitions API** — Transición entre páginas estáticas enlazadas.
- 🔊 **Web Audio** — Reproducción de pistas desde rutas locales.

### 📦 Recursos

- 🔤 **Google Fonts** — Playfair Display y Google Sans (`display=swap`).
- 💾 **Session Storage** — Persistencia del modo blackout (y efecto fuego donde aplica).
- ☁️ **Vercel** — Hosting del deploy público.

---

## 📁 Estructura del proyecto

```
TP1-Unknow/
├── index.html                 # Portada (equipo + enlaces a integrantes)
├── bitacora.html              # Bitácora del proyecto
├── README.md
├── .gitignore
├── css/
│   └── style.css              # Estilos globales, responsive, blackout, animaciones
├── js/
│   └── script.js              # Fuego, música, blackout, view transitions, rutas de nav
├── img/                       # Imágenes raster (tapas de álbum, posters de películas)
│   ├── carlos/canciones/ | carlos/peliculas/
│   ├── heber/canciones/  | heber/peliculas/
│   ├── javier/canciones/ | javier/peliculas/
│   └── leandro/canciones/ | leandro/peliculas/
└── Integrantes/
    ├── carlos/
    │   ├── carlos.html
    │   └── canciones/         # Solo MP3 (rutas en data-mp3 y fallback en script.js)
    ├── heber/
    │   ├── heber.html
    │   └── canciones/
    ├── javier/
    │   ├── javier.html
    │   └── canciones/
    └── leandro/
        ├── leandro.html
        └── canciones/
```

### 📝 Notas

- 🔗 Las páginas de integrantes enlazan a `../../css/style.css` y `../../js/script.js`.
- 🖼️ Las **imágenes** (`.jpg` de música y cine) viven en `img/<integrante>/canciones/` y `img/<integrante>/peliculas/`; los **MP3** siguen en `Integrantes/<integrante>/canciones/`.

---

## 🎨 Guía de estilos

### 🎯 Paleta

| Uso              | Hex       |
|------------------|-----------|
| Fondo principal  | `#e6e3dc` |
| Acento / marca   | `#ff2a2a` |
| Texto principal  | `#0d0c0c` |
| Texto claro      | `#e6dede` |
| Tarjetas         | `#ffffff` |

### ✒️ Tipografías

- **Títulos:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
- **Cuerpo:** [Google Sans](https://fonts.google.com/specimen/Google+Sans)

### 📐 Breakpoints

| Ancho    | Uso habitual        |
|----------|---------------------|
| ≤ 400px  | Móvil pequeño       |
| ≤ 900px  | Tablet / móvil      |
| ≤ 1200px | Ajustes de escritorio medio |

### 🖌️ Gráficos e iconografía

- 🎨 **SVG en línea** para luna, estrellas, fuego, animaciones por página y avatares ilustrados en la tarjeta de perfil.
- 📅 Iconos de timeline en la bitácora como SVG simples.
- 🚫 **Sin** packs de iconos externos; las ilustraciones son vectoriales en el propio HTML/CSS.

---

## ⚙️ JavaScript — Funciones principales

1. 🌑 **Blackout** — Clase en `body`, luna y estrellas, botón flotante; persistencia con `sessionStorage`.
2. 🎬 **Animaciones por integrante** — Reglas CSS (`@keyframes`) coordinadas con SVG en cada HTML.
3. 🎵 **Música** — `Audio` y botones en las cards de álbum; `data-mp3` y rutas relativas a `canciones/`.
4. 🔀 **View transitions** — Intercepción de enlaces internos con `document.startViewTransition` y respeto a `prefers-reduced-motion` y clics con modificadores.

---

## ✅ Cierre y revisión

Antes de entregar se revisó el enunciado frente al sitio: páginas obligatorias, carpetas (`css/`, `js/`, `img/`), contenido mínimo en cada ficha, bitácora, README y navegación interna sin depender del botón Atrás del navegador. También se probó el comportamiento en los anchos de trabajo del TP y las interacciones principales (modo noche y audio).

### 💭 Reflexión breve

Se priorizó una base visual única (bento y tipografías compartidas) y un solo `style.css` para que portada, bitácora e integrantes se sientan parte del mismo producto. El trabajo en equipo se apoyó en revisiones cortas y en probar en varios viewports para detectar desbordes o contrastes antes del cierre.

---

## 🤖 Uso de inteligencia artificial

### 🧰 Herramientas

- **Claude (Anthropic)** — Apoyo principal en código, textos y revisión.
- **Autocompletado del editor** (p. ej. Copilot u otro asistente inline) — Sugerencias de fragmentos y refactors puntuales.

### ✔️ En qué ayudó la IA

- **CSS** — responsive, modo blackout.
- **JavaScript** — Lógica de `sessionStorage`, reproductor de música, interceptación de enlaces para view transitions, y **asistencia en el diseño y depuración de animaciones** (coordinación entre clases del `body` y tiempos de `keyframes`).
- **HTML** — Semántica, atributos `aria-` donde aplica, comentarios de sección, estructura de carpetas por integrante.
- **Animaciones** — Iteración sobre reglas `@keyframes` y animaciones SVG en portada e integrantes (estrellas, luna, motivos por ficha).
- **Documentación** — Borradores de README y de entradas de bitácora, revisión general de redacción.

### 🖼️ Imágenes y gráficos

- **SVG** generados y refinados en el HTML con ayuda de la IA (formas, trazos, animaciones con `<animate>` o CSS).
- **Imágenes raster** (tapas de disco y posters de película) son archivos locales del equipo, versionados bajo `img/<integrante>/`; la IA no sustituye la elección curatorial de esos assets.

---

*UNKNOW — Imagina y crea con nosotros*
