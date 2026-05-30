// --- BASE DE DATOS DE PRODUCTOS REALES DE NIKE (USANDO ENLACES LOCALES) ---
const productosBD = [
    { 
        id: "1", 
        titulo: "Nike Air Force 1 '07", 
        precio: 115, 
        categoria: "Lifestyle", 
        genero: "Hombre", 
        imagenes: [
            "imagenes/Nike 4.png"
        ],
        desc: "El fulgor sigue vivo con las Nike Air Force 1 '07, el icono de las zapatillas de baloncesto que aporta un toque fresco a sus características más conocidas: revestimientos cosidos, colores llamativos y la cantidad perfecta de estilo deportivo." 
    },
    { 
        id: "2", 
        titulo: "Nike Air Max 270", 
        precio: 160, 
        categoria: "Lifestyle", 
        genero: "Mujer", 
        imagenes: [
            "imagenes/nikeair22.png",
            "imagenes/nikeair2.png"
        ],
        desc: "Las primeras Air Max de estilo de vida de Nike te ofrecen estilo, comodidad y una actitud audaz. Inspiradas en los iconos de Air Max, muestran la mayor innovación de Nike con su gran ventana de amortiguación Air." 
    },
    { 
        id: "3", 
        titulo: "Nike Court Vision Low", 
        precio: 75, 
        categoria: "Lifestyle", 
        genero: "Hombre", 
        imagenes: [
            "imagenes/nike3.png"
        ],
        desc: "Inspiradas en las tendencias de las zapatillas de mediados de los años 80, las Nike Court Vision Low son un estilo híbrido de baloncesto retro que funciona para la era moderna."
    },
    { 
        id: "4", 
        titulo: "Jordan Stay Loyal 2", 
        precio: 120, 
        categoria: "Basket", 
        genero: "Jordan", 
        imagenes: [
            "imagenes/jordanmax.jpg",
            "imagenes/jordanmax.png"
        ],
        desc: "Zapatillas inspiradas en generaciones de las Jordan clásicas. La amortiguación Nike Air en el talón proporciona un estilo legendario y comodidad durante todo el día." 
    },
    { 
        id: "5", 
        titulo: "Nike Air Zoom Pegasus 40", 
        precio: 130, 
        categoria: "Running", 
        genero: "Hombre", 
        imagenes: [
            "imagenes/airmaxpegasu.png"
        ],
        desc: "Una pisada elástica para cualquier carrera. El Pegasus vuelve con su sensación familiar y personalizada para ayudarte a alcanzar tus objetivos. Esta versión mantiene la misma capacidad de respuesta y el soporte neutro que te encantan." 
    },
    {
        id: "6",
        titulo: "Nike Dunk Low Retro",
        precio: 115,
        categoria: "Lifestyle",
        genero: "Hombre",
        imagenes: [
            "imagenes/nike3.png"
        ],
        desc: "Creadas para la cancha pero llevadas a la calle, el icono del baloncesto de los 80 vuelve con revestimientos pulidos y los colores del equipo original."
    },
    { 
        id: "7", 
        titulo: "Nike Vaporfly 3 Premium", 
        precio: 260, 
        categoria: "Running", 
        genero: "Mujer", 
        imagenes: [
            "imagenes/airmaxpegasu.png"
        ],
        desc: "Atrápalos si puedes. Diseñadas para los corredores que buscan velocidad el día de la carrera, las Nike Vaporfly 3 te ofrecen una velocidad inigualable gracias a su placa de fibra de carbono completa y espuma ZoomX." 
    },
    { 
        id: "8", 
        titulo: "Air Jordan 1 Mid Red", 
        precio: 125, 
        categoria: "Basket", 
        genero: "Jordan", 
        imagenes: [
            "imagenes/jordanred.png",
            "imagenes/jordanmax.png"
        ],
        desc: "Inspiradas en las primeras Air Jordan 1, estas zapatillas de media altura ofrecen a los fans de Jordan la oportunidad de seguir los pasos de la grandeza urbana." 
    },
    { 
        id: "9", 
        titulo: "Air Jordan 1 Mid Orange", 
        precio: 125, 
        categoria: "Basket", 
        genero: "Jordan", 
        imagenes: [
            "imagenes/jordannaranja.png",
            "imagenes/air-jordan-1-mid.png"
        ],
        desc: "Un diseño premium y un estilo legendario combinados en unas zapatillas con la tracción y el soporte necesarios para un rendimiento atemporal en la calle." 
    },
    {
        id: "10",
        titulo: "Nike Air Max 90",
        precio: 130,
        categoria: "Lifestyle",
        genero: "Hombre",
        imagenes: [
            "imagenes/nikeair22.png",
            "imagenes/nikeair2.png"
        ],
        desc: "Nada tan ligero, nada tan cómodo, nada tan probado. Las Nike Air Max 90 se mantienen fieles a sus raíces de running originales con la icónica suela tipo waffle, revestimientos cosidos y detalles clásicos de TPU."
    },
    {
        id: "11",
        titulo: "Air Jordan 4 Retro 'Oxidized'",
        precio: 215,
        categoria: "Basket",
        genero: "Jordan",
        imagenes: [
            "imagenes/jordanmax.png"
        ],
        desc: "Uno de los modelos más queridos de la línea Jordan vuelve con detalles en verde oxidado y piel de alta calidad. Creado con las especificaciones del diseño original de 1989."
    },
    {
        id: "12",
        titulo: "Nike Invincible 3",
        precio: 180,
        categoria: "Running",
        genero: "Mujer",
        imagenes: [
            "imagenes/airmaxpegasu.png"
        ],
        desc: "Con una amortiguación increíble para ayudarte a mantenerte de pie hoy, mañana y siempre, las Invincible 3 te ofrecen el máximo nivel de comodidad bajo el pie para ayudarte a seguir corriendo."
    },
    {
        id: "13",
        titulo: "Nike Air Force 1 Shadow",
        precio: 130,
        categoria: "Lifestyle",
        genero: "Mujer",
        imagenes: [
            "imagenes/Nike 4.png"
        ],
        desc: "Las Nike Air Force 1 Shadow añaden un toque divertido y desenfadado a un diseño clásico de baloncesto. Con un diseño a capas, el doble de logotipos y una mediasuela exagerada."
    },
    {
        id: "14",
        titulo: "Nike Zoom Fly 5",
        precio: 160,
        categoria: "Running",
        genero: "Hombre",
        imagenes: [
            "imagenes/airmaxpegasu.png"
        ],
        desc: "Salva las diferencias entre tus entrenamientos de fin de semana y el día de la carrera con un diseño duradero que se puede utilizar no solo en la línea de salida de tu carrera favorita, sino también en los días posteriores."
    },
    {
        id: "15",
        titulo: "Nike Air Force 1 Kids",
        precio: 90,
        categoria: "Lifestyle",
        genero: "Niño",
        imagenes: [
            "imagenes/Nike 4.png"
        ],
        desc: "El clásico de la cancha vuelve rediseñado para niños en crecimiento. Cuero duradero y amortiguación clásica para juegos y comodidad diaria."
    }
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let talleSeleccionado = null;

// --- INICIALIZACIÓN ---
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('loader-hidden');
    }, 800);
    
    actualizarContador();
    cargarHomeTrending();
    navegar('home');

    const inputSearch = document.getElementById('search-input');
    inputSearch.addEventListener('keyup', (e) => {
        const termino = e.target.value.toLowerCase();
        if(!document.getElementById('view-tienda').classList.contains('active')){
            navegar('tienda');
        }
        renderizarTienda(null, termino);
    });
});

function verProductoDirecto(id) {
    const producto = productosBD.find(p => p.id === id);
    if (producto) {
        abrirModal(producto);
    } else {
        console.error("Producto no encontrado");
    }
}

// --- BÚSQUEDA ---
function activarBusqueda() {
    const input = document.getElementById('search-input');
    input.classList.toggle('active');
    input.focus();
}

// --- NAVEGACIÓN ---
function navegar(vista, filtro = null) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('mobile-menu').classList.remove('active');
    window.scrollTo(0, 0);

    if (vista === 'tienda') {
        document.getElementById('view-tienda').classList.add('active');
        renderizarTienda(filtro);
    } else {
        document.getElementById('view-home').classList.add('active');
    }
}

// --- HOME ---
function cargarHomeTrending() {
    const contenedor = document.getElementById('home-trending');
    if (!contenedor) return;
    contenedor.innerHTML = '';
    
    // Elegimos 3 productos destacados impactantes para la Home
    const trending = [productosBD[0], productosBD[9], productosBD[10]];
    
    trending.forEach(prod => {
        if (!prod) return;
        const tarjeta = document.createElement('div');
        tarjeta.className = 'producto';
        const imagenAMostrar = prod.imagenes ? prod.imagenes[0] : prod.imagen;
        tarjeta.innerHTML = `
            <div class="img-container">
                <img src="${imagenAMostrar}" alt="${prod.titulo}">
            </div>
            <div class="info-producto">
                <span class="badge">${prod.genero}</span>
                <h3 style="margin-top: 6px;">${prod.titulo}</h3>
                <span class="cat-label">${prod.categoria}</span>
                <span class="precio">$${prod.precio}</span>
            </div>
        `;
        tarjeta.onclick = () => abrirModal(prod);
        contenedor.appendChild(tarjeta);
    });
}

// --- TIENDA Y FILTRADO ---
function renderizarTienda(filtro = null, busqueda = null) {
    const contenedor = document.getElementById('contenedor-productos');
    if (!contenedor) return;
    contenedor.innerHTML = '';
    
    // Actualizar la clase active en los filter-chips para que coincida con el filtro actual
    document.querySelectorAll('.filter-chip').forEach(btn => {
        const text = btn.innerText.trim().toLowerCase();
        const normalizedFilter = filtro ? filtro.toLowerCase() : 'todos';
        
        if (text === normalizedFilter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    let productos = productosBD;
    if (filtro && filtro !== 'todos') {
        productos = productosBD.filter(p => p.genero === filtro || p.categoria === filtro);
    }
    if (busqueda) {
        productos = productos.filter(p => p.titulo.toLowerCase().includes(busqueda));
    }

    if(productos.length === 0) {
        contenedor.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--gray-dark);">No se encontraron productos en esta categoría.</p>';
        return;
    }

    productos.forEach(prod => {
        const div = document.createElement('div');
        div.className = 'producto';
        const imagenAMostrar = prod.imagenes ? prod.imagenes[0] : prod.imagen;
        div.innerHTML = `
            <div class="img-container">
                <img src="${imagenAMostrar}" alt="${prod.titulo}">
            </div>
            <div class="info-producto">
                <span class="badge">${prod.genero}</span>
                <h3 style="margin-top: 6px;">${prod.titulo}</h3>
                <span class="cat-label">${prod.categoria}</span>
                <span class="precio">$${prod.precio}</span>
            </div>
        `;
        div.onclick = () => abrirModal(prod);
        contenedor.appendChild(div);
    });

    // Actualizar el título de la tienda
    const shopTitle = document.getElementById('shop-title');
    if (shopTitle) {
        if (filtro && filtro !== 'todos') {
            shopTitle.innerText = `Colección ${filtro}`;
        } else if (busqueda) {
            shopTitle.innerText = `Resultados para "${busqueda}"`;
        } else {
            shopTitle.innerText = 'Catálogo Completo';
        }
    }
}

function filtrarTienda(cat, btn) {
    document.getElementById('search-input').value = '';
    renderizarTienda(cat);
}

// --- TALLE SELECTION ---
function seleccionarTalle(elemento) {
    document.querySelectorAll('.sizes-grid span').forEach(span => {
        span.classList.remove('active');
    });
    elemento.classList.add('active');
    talleSeleccionado = elemento.innerText.trim();
}

// --- VIDEO MODAL ---
const VIDEO_URL = "https://www.youtube.com/embed/SKrKAYVUFjg?autoplay=1&rel=0"; 
const videoModal = document.getElementById('video-modal');
const videoContainer = document.getElementById('video-frame-container');

function abrirVideo() {
    videoContainer.innerHTML = `<iframe src="${VIDEO_URL}" title="Nike Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    videoModal.style.display = 'flex';
}

function cerrarVideo() {
    videoModal.style.display = 'none';
    videoContainer.innerHTML = '';
}

// --- MODAL & CARRITO ---
const modal = document.getElementById('modal-producto');

function abrirModal(prod) {
    // Resetear talle seleccionado al abrir un modal de producto
    talleSeleccionado = null;
    document.querySelectorAll('.sizes-grid span').forEach(span => {
        span.classList.remove('active');
    });
    
    // Resetear mensaje de advertencia del label de talles
    const label = document.querySelector('.sizes-label');
    if (label) {
        label.style.color = 'var(--black)';
        label.innerText = 'Seleccionar Talla';
    }

    const principal = document.getElementById('modal-img-src');
    principal.src = prod.imagenes ? prod.imagenes[0] : prod.imagen;
    
    document.getElementById('modal-titulo').innerText = prod.titulo;
    document.getElementById('modal-cat').innerText = `${prod.genero} | ${prod.categoria}`;
    document.getElementById('modal-precio').innerText = `$${prod.precio}`;
    document.getElementById('modal-desc').innerText = prod.desc;
    
    // Gestión de Miniaturas
    const colImagen = document.querySelector('.modal-image-col');
    const antiguasThumbs = document.querySelector('.thumb-container');
    if (antiguasThumbs) antiguasThumbs.remove();

    if (prod.imagenes && prod.imagenes.length > 1) {
        const thumbContainer = document.createElement('div');
        thumbContainer.className = 'thumb-container';
        
        prod.imagenes.forEach((url, i) => {
            const thumb = document.createElement('img');
            thumb.src = url;
            thumb.className = `thumb-img ${i === 0 ? 'active' : ''}`;
            thumb.onclick = () => {
                principal.src = url;
                document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            };
            thumbContainer.appendChild(thumb);
        });

        colImagen.appendChild(thumbContainer);
    }

    const btn = document.getElementById('modal-btn-add');
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    newBtn.onclick = () => { agregarCarrito(prod); };
    modal.style.display = 'flex';
}

function cerrarModal() { 
    modal.style.display = 'none'; 
}

function toggleCarrito() { 
    document.getElementById('sidebar-carrito').classList.toggle('active'); 
    renderizarCarrito(); 
}

function agregarCarrito(prod) {
    if (!talleSeleccionado) {
        const label = document.querySelector('.sizes-label');
        if (label) {
            label.style.color = 'var(--accent-red)';
            label.innerText = 'Selecciona una Talla (Requerido)';
            // Micro animación de sacudida (shake)
            label.animate([
                { transform: 'translateX(-5px)' },
                { transform: 'translateX(5px)' },
                { transform: 'translateX(-5px)' },
                { transform: 'translateX(5px)' },
                { transform: 'translateX(0)' }
            ], { duration: 300 });
        }
        return;
    }

    // Buscamos si existe el mismo producto con la misma talla en el carrito
    const existe = carrito.find(p => p.id === prod.id && p.talle === talleSeleccionado);
    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({ ...prod, talle: talleSeleccionado, cantidad: 1 });
    }
    
    guardarCarrito(); 
    cerrarModal();
    toggleCarrito();
}

function eliminarItem(id, talle) {
    carrito = carrito.filter(p => !(p.id === id && p.talle === talle));
    guardarCarrito(); 
    renderizarCarrito();
}

// Guardado del carrito
function guardarCarrito() { 
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
    actualizarContador(); 
}

function actualizarContador() {
    const total = carrito.reduce((acc, p) => acc + p.cantidad, 0);
    document.getElementById('contador-carrito').innerText = total;
}

function renderizarCarrito() {
    const lista = document.getElementById('lista-carrito');
    if (!lista) return;
    lista.innerHTML = '';
    let total = 0;

    if (carrito.length === 0) {
        lista.innerHTML = '<p style="text-align: center; margin-top: 40px; color: var(--gray-dark);">Tu bolsa está vacía.</p>';
        document.getElementById('carrito-total').innerText = '$0';
        return;
    }

    carrito.forEach(p => {
        total += p.precio * p.cantidad;
        const imagenItem = p.imagenes ? p.imagenes[0] : p.imagen;
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <img src="${imagenItem}" alt="${p.titulo}">
            <div class="cart-item-details">
                <div>
                    <h4>${p.titulo}</h4>
                    <p style="font-size: 12px; color: var(--gray-dark); margin: 2px 0;">Talla: <strong>${p.talle}</strong></p>
                    <p style="font-weight: 600; margin-top: 4px;">$${p.precio} x ${p.cantidad}</p>
                </div>
                <div class="cart-item-actions">
                    <span class="btn-remove" onclick="eliminarItem('${p.id}', '${p.talle}')" style="cursor:pointer">Eliminar</span>
                </div>
            </div>
        `;
        lista.appendChild(itemDiv);
    });
    document.getElementById('carrito-total').innerText = `$${total}`;
}

function toggleMenuMovil() { 
    document.getElementById('mobile-menu').classList.toggle('active'); 
}

// Cierre al cliquear fuera del modal
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        cerrarModal();
    }
    if (e.target === videoModal) {
        cerrarVideo();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cerrarVideo();
        cerrarModal();
        document.getElementById('sidebar-carrito').classList.remove('active');
    }
});