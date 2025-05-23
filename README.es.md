# 💨 Customizador de Secadores de Manos FFUUSS

Configurador visual interactivo desarrollado para <a href="https://ffuuss.com" target="_blank">FFUUSS</a>. Este proyecto permite personalizar visualmente tres modelos de secadores modificando colores, aplicando acabados brillo o mate, y añadiendo una imagen personalizada sobre el producto.

Este proyecto fue originalmente desarrollado como **shortcode de WordPress** y se ha adaptado para ejecutarse como módulo independiente.

🔁 También disponible en [English 🇬🇧](README.md)

---

## 🔗 Proyecto en producción

Integrado oficialmente en la web de FFUUSS:

👉 <a href="https://ffuuss.com/ffuuss-one/" target="_blank">https://ffuuss.com/ffuuss-one/</a>

---

## 🧪 Demos independientes

Puedes probar el proyecto de forma aislada cambiando el parámetro `ffuusstype`:

- <a href="https://zeliuk.xyz/doityourself-handdryer-customizer/?ffuusstype=one" target="_blank">FFUUSS One</a>
- <a href="https://zeliuk.xyz/doityourself-handdryer-customizer/?ffuusstype=dom" target="_blank">FFUUSS Dom</a>
- <a href="https://zeliuk.xyz/doityourself-handdryer-customizer/?ffuusstype=eos" target="_blank">FFUUSS Eos</a>

---

## 🖼️ Capturas de pantalla

### Modelo FFUUSS One
![FFUUSS One](screenshots/ffuuss-one.png)

### Modelo FFUUSS Dom
![FFUUSS Dom](screenshots/ffuuss-dom.png)

### Modelo FFUUSS Eos
![FFUUSS Eos](screenshots/ffuuss-eos.png)

---

## ⚙️ Tecnologías utilizadas

- **PHP**: Generación dinámica de la estructura HTML mediante parámetros GET (`ffuusstype`, `color`, `matte`, etc.).
- **jQuery**: Controla la interactividad, selección de color, carga de imágenes y transiciones.
- **Spectrum.js**: Selector de color RGB avanzado.
- **SCSS**: Estilos modulares y responsivos con máscaras, capas y transformaciones específicas según el modelo.

---

## 🗂️ Estructura del proyecto

```plaintext
/
├── index.php                    # Lógica PHP principal y renderizado HTML
├── js/
│   └── custom.js               # Comportamiento interactivo con jQuery
├── css/
│   ├── custom.scss             # Estilos fuente en SCSS
│   └── spectrum.min.css       # Hoja de estilos del selector de color
├── doityourself/               # Recursos por modelo (imágenes, máscaras, logos)
│   ├── one/
│   ├── dom/
│   └── eos/
└── screenshots/                # Carpeta sugerida para capturas
```

---

## 👨‍💻 Autor

Desarrollada como parte de mi trabajo en Helefante
Proyecto para <a href="https://ffuuss.com" target="_blank">FFUUSS</a>

---

## 📄 Licencia

Este proyecto se presenta con fines demostrativos y de portafolio.  
Para su uso comercial, contacta con el desarrollador o con FFUUSS directamente.
