# UNKNOW TEAM - Proyecto Web

## 📋 Título del Proyecto
**UNKNOW TEAM** - Sitio Web Portafolio del Equipo

## 🔗 Enlace al Deploy
[https://unknow-team.vercel.app](https://unknow-team.vercel.app)

---

## 📖 Descripción del Proyecto
UNKNOW TEAM es un sitio web moderno y elegante diseñado para presentar al equipo de desarrollo. Este trabajo práctico combina diseño inspirado en revistas de moda con funcionalidades web contemporáneas, creando una experiencia visual impactante y profesional. El objetivo principal es mostrar las habilidades y perfiles individuales de cada integrante mediante un diseño innovador con **Bento Grids** y efectos visuales avanzados.

### Funcionalidades Básicas
- **Navegación fluida** entre páginas con View Transitions API (con fallback para Firefox)
- **Perfiles individuales** con información detallada de cada integrante en Bento Grid
- **Bento Grid Layout** adaptativo y completamente responsive
- **Efectos interactivos** incluyendo Efecto Fuego y Morfosis con persistencia
- **Diseño totalmente responsive** para móviles (≤400px), tablets (≤900px) y escritorios (≤1200px)
- **Reproductor de música** con control de estado en páginas individuales

---

## 👥 Integrantes

| Nombre | GitHub | Rol |
|--------|---------|-----|
| **Carlos Zárate** | [github.com/carloszarate](https://github.com/carloszarate) | Desarrollador Backend |
| **Heber Choque** | [github.com/heberchoque](https://github.com/heberchoque) | Desarrollador Frontend |
| **Javier Navarro** | [github.com/javiernavarro](https://github.com/javiernavarro) | Desarrollador Full Stack |
| **Leandro Melchiori** | [github.com/leandromelchiori](https://github.com/leandromelchiori) | Diseñador UX/UI |

---

## 🛠️ Tecnologías Utilizadas

### Lenguajes y APIs
- **HTML5** — Semántica moderna, estructura accesible y uso de meta viewport
- **CSS3** — Animaciones @keyframes, CSS Grid, Flexbox, clip-path, backdrop-filter, media queries avanzadas
- **JavaScript Vanilla** — Funcionalidades interactivas sin dependencias externas
- **View Transitions API** — Navegación fluida entre páginas con fallback nativo

### Recursos y Herramientas
- **Google Fonts API** — Tipografías Playfair Display y Google Sans
- **CSS Grid & Flexbox** — Layout moderno y responsive
- **Session Storage API** — Persistencia de estado del Efecto Fuego y Morfosis entre páginas
- **Audio API (JS)** — Reproductor de música nativo del navegador
- **Vercel** — Plataforma de deploy continuo desde GitHub
- **Git & GitHub** — Control de versiones colaborativo

---

## 📁 Estructura de Archivos

```
TP1-Unknow/
├── index.html              # Página principal / portada del equipo
├── bitacora.html           # Bitácora del proyecto con cronograma
├── README.md               # Documentación completa del proyecto
├── css/
│   └── style.css           # Estilos principales, responsive y efectos
├── js/
│   └── script.js           # Funcionalidades JavaScript (fuego, música, morfosis)
├── img/                    # Recursos visuales y fotografías (avatares)
└── Integrantes/
    ├── carlos.html         # Perfil de Carlos Zárate
    ├── heber.html          # Perfil de Heber Choque
    ├── javier.html         # Perfil de Javier Navarro
    └── leandro.html        # Perfil de Leandro Melchiori
```

**Notas de organización:**
- `index.html` en raíz con Bento Grid de los 4 integrantes
- Todos los estilos centralizados en `css/style.css`
- JavaScript interactivo en `js/script.js`
- Imágenes y avatares en `img/`
- Páginas individuales en `Integrantes/` con rutas relativas a `../css/` y `../js/`

---

## 🎨 Guía de Estilos

### Paleta de Colores
| Uso | Color | Hex |
|-----|-------|-----|
| Fondo principal | Beige elegante | `#e6e3dc` |
| Color acento / bordes | Rojo corporativo | `#ff2a2a` |
| Texto principal | Negro suave | `#0d0c0c` |
| Texto secundario / light | Blanco claro | `#e6dede` |
| Cards / contenedores | Blanco puro | `#ffffff` |

### Tipografías
- **Títulos:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) — Serif elegante, pesos 400–900
- **Cuerpo de texto:** [Google Sans](https://fonts.google.com/specimen/Google+Sans) — Sans-serif moderna, pesos 400–700

### Breakpoints Responsive
| Ancho | Dispositivo | Comportamiento |
|-------|-------------|----------------|
| ≤ 400px | Mobile pequeño | Columna única, tipografías reducidas |
| ≤ 900px | Tablet / mobile grande | 2 columnas en portada, bento apilado |
| ≤ 1200px | Desktop mediano | 2 columnas en portada |

### Iconografía
- Emojis nativos y caracteres Unicode para avatares e íconos
- Sin dependencias externas de íconos
- Avatares: Emojis como representación visual (privacidad protegida)

---

## 💻 JavaScript — Funcionalidades Implementadas

### 1. Efecto de Fuego Toggle — `index.html` y todas las páginas
- **Qué hace:** Aplica un gradiente animado con @keyframes sobre todos los `h1` y `h2` de la página, simulando fuego.
- **Dónde está:** Botón "🔥 Fuego" en la barra de navegación (presente en todas las páginas).
- **Persistencia:** Estado guardado en `sessionStorage` con clave `fireActive`. Se mantiene al navegar entre páginas.
- **Estado:** Toggle activable/desactivable. El botón cambia de apariencia cuando está activo.

```javascript
// Activación del efecto fuego
document.body.classList.toggle('fire-active', active);
sessionStorage.setItem('fireActive', next);
```

### 2. Reproductor de Música — páginas individuales
- **Qué hace:** Play/Pause sobre cada card de disco musical. Solo puede reproducirse un track a la vez.
- **Dónde está:** Sección "🎵 Discos favoritos" en cada página individual (`Integrantes/*.html`).
- **Audio real:** Carlos tiene un archivo MP3 real (`carlos_musica.mp3`) conectado. Los demás tienen interacción visual.
- **Estado:** Cambio visual en la card activa (borde rojo, fondo rosado) y cambio de texto en el botón.

### 3. Efecto Morfosis — páginas individuales
- **Qué hace:** Transforma el tema de la página a un modo oscuro dramático modificando colores de fondo, cards y textos.
- **Dónde está:** Card "Morfosis" al final de cada página individual.
- **Persistencia:** Estado guardado en `sessionStorage` con clave `morfosisActive`.
- **Estado:** Toggle activable/desactivable con texto del botón dinámico.

### 4. View Transitions — navegación general
- **Qué hace:** Aplica transiciones suaves entre páginas usando la View Transitions API.
- **Dónde está:** Script general en todos los links de navegación.
- **Fallback:** Si el navegador no soporta `document.startViewTransition`, navega normalmente.

---

## 📸 Capturas de Pantalla

> *(Agregar capturas del proyecto en funcionamiento: portada desktop, portada mobile, página de integrante, efecto fuego activo, efecto morfosis activo)*

---

## 🌐 Enlace al Proyecto Desplegado

**URL:** [https://unknow-team.vercel.app](https://unknow-team.vercel.app)

**Plataforma:** Vercel — Deploy automático desde repositorio GitHub

---

## 📝 Revisión General (Mayo 2025)

Se realizó una revisión completa del proyecto antes de la entrega final que incluyó los siguientes cambios:

- **Eliminación del hero en páginas individuales** — Se reemplazó el hero redundante por un Bento Grid puro que mejora la distribución de información y la legibilidad en mobile.
- **Rediseño del layout de integrantes** — Las tarjetas ahora muestran: perfil, sobre mí, habilidades (mínimo 8), películas (3) y discos (3) en un grid semántico de 12 columnas.
- **Corrección del reproductor de música** — Se solucionó bug donde el audio continuaba reproduciéndose al navegar entre páginas.
- **Bitácora actualizada** — Se amplió con 8 entradas que documentan el proceso real de desarrollo desde el 17 al 30 de Abril de 2025, incluyendo dificultades encontradas y cómo se resolvieron.
- **README completo** — Se agregaron todas las secciones requeridas: guía de estilos, breakpoints, funciones JS detalladas con código, uso de IA y estructura de archivos.
- **Responsive mejorado** — Se corrigieron desbordamientos en el bento grid para móviles de 360–400px.

---

## 🤖 Uso de Inteligencia Artificial

### Herramientas Utilizadas
- **ChatGPT 4.0** — Asistente principal para desarrollo, debugging y redacción de textos
- **Claude (Anthropic)** — Revisión del código, sugerencias de estructura CSS y optimización del JavaScript
- **GitHub Copilot** — Autocompletado de código y sugerencias inline durante el desarrollo

### Uso en Contenido y Código
- **Generación de textos:** Descripciones de perfiles de integrantes, contenido de la bitácora y documentación del README
- **Debugging JavaScript:** Resolución de problemas con View Transitions API y sessionStorage cross-page
- **Optimización CSS:** Mejoras en el sistema de Bento Grid responsive y corrección de media queries
- **Estructura HTML:** Sugerencias de semántica y accesibilidad (atributos ARIA, roles)

### Imágenes y Recursos Visuales
- **Avatares:** Emojis nativos como representación visual para proteger la privacidad de los integrantes (recomendado por el TP)
- **Sin uso de IA generativa de imágenes** — Optamos por emojis para mayor compatibilidad y velocidad de carga

---

*UNKNOW TEAM — Imagina y crea con nosotros*
