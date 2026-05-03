# UNKNOW TEAM - Proyecto Web

## 📋 Título del Proyecto
**UNKNOW TEAM** - Sitio Web Portafolio del Equipo

## 🔗 Enlace al Deploy
[https://unknow-team.vercel.app](https://unknow-team.vercel.app)

---

## 📖 Descripción del Proyecto
UNKNOW TEAM es un sitio web moderno y elegante diseñado para presentar al equipo. Este trabajo práctico combina diseño minimalista con funcionalidades web contemporáneas, creando una experiencia visual impactante y profesional. El objetivo principal es mostrar las habilidades y perfiles individuales de cada integrante mediante un diseño innovador con **Bento Grids** y efectos visuales avanzados.

### Funcionalidades Básicas
- **Navegación fluida** entre páginas con View Transitions API (con fallback para Firefox)
- **Perfiles individuales** con información detallada de cada integrante en Bento Grid
- **Bento Grid Layout** adaptativo y completamente responsive
- **Efectos interactivos** incluyendo modo blackout con luna, estrellas titilantes y animaciones individuales por integrante
- **Diseño totalmente responsive** para móviles (≤400px), tablets (≤900px) y escritorios (≤1200px)
- **Reproductor de música** con control de estado en páginas individuales

---

## 👥 Integrantes

| Nombre | GitHub |
|--------|---------|
| **Carlos Zárate** | [github.com/carloszarate](https://github.com/carloszarate) |
| **Heber Choque** | [github.com/heberchoque](https://github.com/heberchoque) |
| **Javier Navarro** | [github.com/javiernavarro](https://github.com/javiernavarro) |
| **Leandro Melchiori** | [github.com/leandromelchiori](https://github.com/leandromelchiori) |

---

## 🛠️ Tecnologías Utilizadas

### Lenguajes y APIs
- **HTML5** — Semántica moderna, estructura accesible y uso de meta viewport
- **CSS3** — Animaciones @keyframes, CSS Grid, Flexbox, media queries avanzadas
- **JavaScript Vanilla** — Funcionalidades interactivas sin dependencias externas
- **View Transitions API** — Navegación fluida entre páginas con fallback nativo

### Recursos y Herramientas
- **Google Fonts API** — Tipografías Playfair Display y Google Sans
- **CSS Grid & Flexbox** — Layout moderno y responsive
- **Session Storage API** — Persistencia de estado del modo blackout entre páginas
- **Audio API (JS)** — Reproductor de música nativo del navegador
- **Vercel** — Plataforma de deploy continuo desde GitHub
- **Git & GitHub** — Control de versiones

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
│   └── script.js           # Funcionalidades JavaScript (blackout, música, animaciones)
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

### 1. Efecto Blackout (Modo Noche) — Todas las páginas
- **Qué hace:** Activa un modo oscuro dramático con luna SVG, estrellas titilantes (cruces diminutas animadas con opacidad variable), y oscurecimiento del fondo beige a negro.
- **Dónde está:** Botón flotante de luna ubicado abajo a la derecha en todas las páginas.
- **Mensaje de ayuda:** Al hacer click, muestra "El fuego ilumina..." por 3 segundos junto al botón.
- **Persistencia:** Estado guardado en `sessionStorage` con clave `blackoutActive`. Se mantiene al navegar entre páginas.

```javascript
// Activación del modo blackout
document.body.classList.toggle('blackout-active', active);
sessionStorage.setItem('blackoutActive', next);
```

### 2. Animaciones Individuales por Integrante — Cada página individual
Cada integrante tiene una animación única en modo blackout:

- **Carlos (avión):** SVG de avión que vuela de izquierda a derecha, luego vuelve a entrar. Animación CSS con `@keyframes flyAcross`.
- **Heber (OVNI):** OVNI que flota con luz verde pulsante. Animación con `@keyframes ufoHover`.
- **Javier (perro):** Perro que camina desde la izquierda, se detiene en el centro, se da vuelta, y sale caminando a la derecha. `@keyframes dogWalk`.
- **Leandro (gato):** Gato que entra desde la derecha (espejo del perro), hace el mismo recorrido invertido. `@keyframes catWalk`.
- **Index (luna):** Luna estática con estrellas titilantes de fondo.

### 3. Reproductor de Música — páginas individuales
- **Qué hace:** Play/Pause sobre cada card de disco musical. Solo puede reproducirse un track a la vez.
- **Dónde está:** Sección "Discos favoritos" en cada página individual (`Integrantes/*.html`).
- **Estado:** Cambio visual en la card activa (borde rojo, fondo rosado) y cambio de texto en el botón (Play ↔ Stop).

### 4. View Transitions API — Navegación fluida
- **Qué hace:** Proporciona transiciones suaves y animadas entre páginas, creando una experiencia de navegación tipo "app" sin recargas bruscas.
- **Cómo funciona:** Intercepta clicks en links internos, ejecuta `document.startViewTransition()`, y aplica animaciones CSS (`@keyframes view-transition`) mientras carga la nueva página.
- **Dónde está:** Script general aplicado a todos los links de navegación interna (botones "Volver", cards de integrantes, nav links).
- **Beneficio:** Mejora la percepción de velocidad y da sensación de aplicación web moderna.
- **Fallback:** Navegación normal inmediata si el navegador no soporta la API (Firefox, Safari mobile).

```javascript
// Interceptar navegación y aplicar transición
link.addEventListener('click', (e) => {
  if (!document.startViewTransition) return; // Fallback
  e.preventDefault();
  document.startViewTransition(() => {
    window.location.href = link.href;
  });
});
```

---

## 📸 Capturas de Pantalla

> **Nota:** Agregar capturas del proyecto funcionando:
> - Portada desktop (index.html)
> - Portada mobile (<400px)
> - Página de integrante en modo normal
> - Página de integrante en modo blackout (luna visible, estrellas titilantes)
> - Animación del avión en página de Carlos
> - Animación del perro/gato en páginas de Javier/Leandro

---

## 🌐 Enlace al Proyecto Desplegado

**URL:** [https://unknow-team.vercel.app](https://unknow-team.vercel.app)

**Plataforma:** Vercel — Deploy automático desde repositorio GitHub

---

## 📝 Revisión Final

Antes de la entrega se realizó una revisión completa del proyecto verificando todos los requerimientos del TP.

### Checklist de Requerimientos Cumplidos
- ✅ Portada (index.html) con nombre del equipo, presentación y listado de integrantes
- ✅ 4 páginas individuales con: avatar, nombre, ubicación, edad, 5 habilidades, 3 películas, 3 discos
- ✅ Bitácora con descripción del proceso de desarrollo
- ✅ Responsive: breakpoints implementados en 400px, 900px, 1200px
- ✅ JavaScript interactivo: modo blackout en todas las páginas, animaciones individuales por integrante
- ✅ README.md completo con todas las secciones requeridas
- ✅ Uso de IA documentado
- ✅ Estructura de archivos correcta (HTML raíz, CSS en /css, JS en /js)
- ✅ Navegación con botones, sin depender del botón "Atrás" del navegador

### Reflexión Final
El mayor aprendizaje fue la importancia de iterar sobre el diseño. La evolución desde una sopa de letras interactiva hasta una lista simple de habilidades demostró que la coherencia visual es más valiosa que la complejidad. El uso de un Bento Grid consistente en todas las páginas unificó la experiencia de usuario y facilitó el mantenimiento del código.

---

## 🤖 Uso de Inteligencia Artificial

### Herramientas Utilizadas
- **Claude (Anthropic)** — Asistente principal de desarrollo, generación de código CSS/JS, debugging y redacción de documentación
- **GitHub Copilot** — Autocompletado de código inline en Visual Studio Code

### Uso en Contenido y Código
- **Generación de código CSS:** Creación de animaciones complejas (@keyframes para avión, OVNI, perro, gato), sistema de Bento Grid responsive, estilos de modo blackout con luna y estrellas titilantes.
- **Optimización de diseño:** Iteraciones sobre el diseño de cards de habilidades (de sopa de letras a lista simple), ajustes de tamaño y espaciado responsive.
- **Debugging JavaScript:** Implementación del sistema de blackout con sessionStorage para persistencia entre páginas, manejo de botón flotante con mensajes temporales.
- **Estructura HTML:** Sugerencias de semántica y accesibilidad (atributos ARIA, roles, view-transition-name).
- **Redacción de documentación:** Contenido del README.md y bitácora del proyecto.

### Imágenes y Recursos Visuales
- **Avatares:** Emojis nativos como representación visual (👨‍💻, 🎨, 🚀, ✏️) para proteger la privacidad de los integrantes, cumpliendo con el requerimiento del TP sobre no usar fotos reales.
- **Animaciones SVG:** Luna, estrellas (cruces diminutas), avión, OVNI, perro y gato — todos creados como SVG inline con animaciones CSS.
- **Sin uso de IA generativa de imágenes** — Optamos por SVGs vectoriales y emojis para mayor control, compatibilidad y velocidad de carga.

---

*UNKNOW TEAM — Imagina y crea con nosotros*
