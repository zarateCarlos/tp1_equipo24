/* ============================================
   UNKNOW — script.js
   Funciones:
   1. Efecto fuego (portada e integrantes)
   2. Reproductor de música (integrantes)
   3. Blackout “Se cortó la luz” (integrantes)
   4. Persistencia con sessionStorage
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── 0. Inicio / bitácora desde js/script.js (rutas correctas en cualquier carpeta) ─── */
  function applyCanonicalNavLinks() {
    const scriptEl = [...document.scripts].find(s =>
      /\bjs\/script\.js(\?|#|$)/i.test(s.src)
    );
    if (!scriptEl?.src) return;
    try {
      const rootHref = new URL('..', scriptEl.src).href;
      const homeUrl = new URL('index.html', rootHref).href;
      const bitacoraUrl = new URL('bitacora.html', rootHref).href;

      document.querySelectorAll('a.header-title').forEach(a =>
        a.setAttribute('href', homeUrl)
      );
      document.querySelectorAll('a.back-island').forEach(a =>
        a.setAttribute('href', homeUrl)
      );
      document.querySelectorAll('header nav a[href*="bitacora"]').forEach(a =>
        a.setAttribute('href', bitacoraUrl)
      );
    } catch (_) { /* sin operación */ }
  }

  applyCanonicalNavLinks();

  /* ─── 1. EFECTO FUEGO ─── */
  const fireBtn = document.getElementById('fireEffect');
  const FIRE_KEY = 'fireActive';

  function applyFire(active) {
    document.body.classList.toggle('fire-active', active);
    if (fireBtn) fireBtn.classList.toggle('active', active);
  }

  if (fireBtn) {
    const stored = sessionStorage.getItem(FIRE_KEY) === 'true';
    applyFire(stored);

    fireBtn.addEventListener('click', () => {
      const next = !document.body.classList.contains('fire-active');
      sessionStorage.setItem(FIRE_KEY, next);
      applyFire(next);
    });
  }

  /* ─── 2. REPRODUCTOR DE MÚSICA ─── */
  let currentAudio = null;
  let currentBtn  = null;

  function getAudioSrcFallback(musicContent) {
    if (!musicContent) return null;
    const text = musicContent.textContent;
    const path = window.location.pathname;
    const isHeber = path.includes('/heber/');
    const isCarlos = path.includes('/carlos/');
    const isJavier = path.includes('/javier/');
    const isLeandro = path.includes('/leandro/');

    if (isHeber) {
      if (text.includes('La ley')) return './canciones/Chaqueño Palavecino - La Sin Corazón.mp3';
      if (text.includes('Magistral')) return './canciones/Miranda! - Ya Lo Sabía.mp3';
      if (text.includes('fuerza')) return './canciones/No Me Lo Creo - La Nueva Luna.mp3';
    }
    if (isCarlos) {
      if (text.includes('Rising Force')) return './canciones/Blue - Yngwie Malmsteen.mp3';
      if (text.includes('Burn')) return './canciones/Burn - Deep Purple.mp3';
      if (text.includes('reino')) return './canciones/rataBlanca.mp3';
    }
    if (isJavier) {
      if (text.includes('Fieras') || text.includes('Fierras')) return './canciones/Ratones Paranoicos - Vicio.mp3';
      if (text.includes('Crazy World')) return './canciones/Scorpions - Wind Of Change.mp3';
      if (text.includes('Help')) return './canciones/The Beatles - Help.mp3';
    }
    if (isLeandro) {
      if (text.includes('Thriller')) return './canciones/Beat It - Michael Jackson.mp3';
      if (text.includes('Minutes')) return './canciones/LinkinPark.mp3';
      if (text.includes('Black')) return './canciones/Metallica - The Unforgiven.mp3';
    }
    return null;
  }

  document.querySelectorAll('.i-skills .music-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.music-poster');
      if (!card) return;
      const musicContent = card.querySelector('.music-content');
      const fromData = card.getAttribute('data-mp3')?.trim();
      const src = fromData || getAudioSrcFallback(musicContent);

      if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if (currentBtn) {
          currentBtn.textContent = '▶';
          currentBtn.classList.remove('playing');
          const prev = currentBtn.closest('.music-poster');
          if (prev) prev.classList.remove('playing');
        }
        if (currentBtn === btn) {
          currentAudio = null;
          currentBtn   = null;
          return;
        }
      }

      if (src) {
        const audio = new Audio(src);
        audio.play().catch(() => {
          card.classList.toggle('playing');
          btn.textContent = card.classList.contains('playing') ? '⏸' : '▶';
          if (card.classList.contains('playing')) {
            currentBtn = btn;
            setTimeout(() => {
              if (currentBtn === btn) {
                card.classList.remove('playing');
                btn.textContent = '▶';
                currentBtn = null;
              }
            }, 3000);
          }
        });
        currentAudio = audio;
        currentBtn   = btn;
        btn.textContent = '⏸';
        btn.classList.add('playing');
        card.classList.add('playing');

        audio.addEventListener('ended', () => {
          btn.textContent = '▶';
          btn.classList.remove('playing');
          card.classList.remove('playing');
          currentAudio = null;
          currentBtn   = null;
        });
      } else {
        card.classList.toggle('playing');
        btn.textContent = card.classList.contains('playing') ? '⏸' : '▶';
        btn.classList.toggle('playing');

        if (card.classList.contains('playing')) {
          currentBtn = btn;
          setTimeout(() => {
            if (currentBtn === btn) {
              card.classList.remove('playing');
              btn.textContent = '▶';
              btn.classList.remove('playing');
              currentBtn = null;
            }
          }, 3000);
        }
      }
    });
  });

  /* ─── 3. EFECTO BLACKOUT (Se cortó la luz) ─── */
  const blackoutBtn = document.getElementById('blackoutBtn');
  const BLACKOUT_KEY = 'blackoutActive';

  function applyBlackout(active) {
    document.body.classList.toggle('blackout-active', active);
    // Efecto antorcha si están activos fuego y blackout a la vez
    if (active && document.body.classList.contains('fire-active')) {
      document.body.classList.add('torch-lit');
    } else {
      document.body.classList.remove('torch-lit');
    }
    if (blackoutBtn) {
      // Solo cambia el texto en portada/bitácora, no en páginas de integrantes
      const currentPath = window.location.pathname;
      const isIntegrantePage = currentPath.includes('/heber/') || 
                               currentPath.includes('/carlos/') || 
                               currentPath.includes('/javier/') || 
                               currentPath.includes('/leandro/');
      
      if (!isIntegrantePage) {
        blackoutBtn.textContent = active ? '💡 Encender luz' : '🌑 Se cortó la luz';
      }
    }
  }

  if (blackoutBtn) {
    const stored = sessionStorage.getItem(BLACKOUT_KEY) === 'true';
    applyBlackout(stored);

    blackoutBtn.addEventListener('click', () => {
      const next = !document.body.classList.contains('blackout-active');
      sessionStorage.setItem(BLACKOUT_KEY, next);
      applyBlackout(next);
    });
  }

  // Sincroniza la antorcha al alternar el fuego
  const originalApplyFire = applyFire;
  window.addEventListener('fireToggled', () => {
    if (document.body.classList.contains('blackout-active')) {
      const fireActive = document.body.classList.contains('fire-active');
      document.body.classList.toggle('torch-lit', fireActive);
    }
  });

  /* ─── 4. Botón luna (atajo flotante) ─── */
  const moonBtn = document.getElementById('moonBtn');
  const moonHint = document.getElementById('moonHint');
  
  if (moonBtn) {
    // La luna alterna el modo blackout
    moonBtn.addEventListener('click', () => {
      const next = !document.body.classList.contains('blackout-active');
      sessionStorage.setItem(BLACKOUT_KEY, next);
      applyBlackout(next);
      
      // Muestra el mensaje de ayuda brevemente
      if (moonHint) {
        moonHint.classList.add('show');
        setTimeout(() => {
          moonHint.classList.remove('show');
        }, 3000);
      }
    });
  }

  /* ─── 5. View Transitions: navegación interna (sin Ctrl/Mayús; respeta “reducir movimiento”) ─── */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', e => {
      if (e.defaultPrevented) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') ||
          href.startsWith('http://') || href.startsWith('https://')) return;
      if (!document.startViewTransition || prefersReducedMotion.matches) return;

      e.preventDefault();
      const vt = document.startViewTransition(() => {
        window.location.href = href;
      });
      if (vt && typeof vt.finished?.catch === 'function') {
        vt.finished.catch(() => { /* navegación canceló la transición: normal */ });
      }
    });
  });

});
