// --- BASE DE DATOS ---
const productosBD = [
    { 
        id: "1", 
        titulo: "Nike Revolution 6", 
        precio: 400, 
        categoria: "Running", 
        genero: "Hombre", 
        imagenes: ["imagenes/nike1.png"],
        desc: "Comodidad revolucionaria para tu carrera diaria." 
    },
    { 
        id: "2", 
        titulo: "Nike Air Max SC", 
        precio: 550, 
        categoria: "Lifestyle", 
        genero: "Mujer", 
        imagenes: ["imagenes/nikeair22.png"],
        desc: "Estilo clásico con amortiguación Air visible." 
    },
    {
        id: "3",
        titulo: "Nike Court Vision",
        precio: 320,
        categoria: "Lifestyle",
        genero: "Hombre",
        imagenes: ["imagenes/nike3.png"],
        desc: "Inspiración en el baloncesto retro."
    },
    { 
        id: "4", 
        titulo: "Jordan Stay Loyal", 
        precio: 850, 
        categoria: "Basket", 
        genero: "Jordan", 
        imagenes: ["imagenes/jordanmax.jpg"],
        desc: "Legado Jordan para el juego moderno." 
    },
    { 
        id: "5", 
        titulo: "Nike Air Force 1", 
        precio: 600, 
        categoria: "Lifestyle", 
        genero: "Niño", 
        imagenes: ["imagenes/Nike 4.png"],
        desc: "La leyenda sigue viva para los más pequeños." 
    },
    {
        id: "6",
        titulo: "Nike Dunk Low Retro",
        precio: 700,
        categoria: "Lifestyle",
        genero: "Hombre",
        imagenes: ["imagenes/nike3.png"],
        desc: "El icono de los 80 vuelve con detalles clásicos."
    },
    { 
        id: "7", 
        titulo: "Nike Pegasus Premium", 
        precio: 450, 
        categoria: "Running", 
        genero: "Mujer", 
        imagenes: ["imagenes/airmaxpegasu.png"],
        desc: "Pisada elástica para cualquier carrera." 
    },
    { 
        id: "8", 
        titulo: "Air Jordan Black & Red", 
        precio: 270, 
        categoria: "Basket", 
        genero: "Jordan", 
        imagenes: ["imagenes/jordanmax.png", "imagenes/jordanred.png" ],
        desc: "Amortiguación ligera y comodidad todo el día." 
    },
    { 
        id: "9", 
        titulo: "Air Jordan Orange", 
        precio: 250, 
        categoria: "Basket", 
        genero: "Jordan", 
        imagenes: ["imagenes/jordannaranja.png", "imagenes/air-jordan-1-mid.png"],
        desc: "Amortiguación ligera y comodidad todo el día." 
    }
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

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
    contenedor.innerHTML = '';
    const trending = productosBD.slice(0, 3);
    
    trending.forEach(prod => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'producto';
        const imagenAMostrar = prod.imagenes ? prod.imagenes[0] : prod.imagen;
        tarjeta.innerHTML = `
            <div class="img-container"><img src="${imagenAMostrar}" alt="${prod.titulo}"></div>
            <div class="info-producto"><h3>${prod.titulo}</h3><span class="precio">$${prod.precio}</span></div>
        `;
        tarjeta.onclick = () => abrirModal(prod);
        contenedor.appendChild(tarjeta);
    });
}

// --- TIENDA Y FILTRADO ---
function renderizarTienda(filtro = null, busqueda = null) {
    const contenedor = document.getElementById('contenedor-productos');
    contenedor.innerHTML = '';
    
    if(!filtro) document.querySelectorAll('.filter-chip').forEach(btn => btn.classList.remove('active'));

    let productos = productosBD;
    if (filtro && filtro !== 'todos') {
        productos = productosBD.filter(p => p.genero === filtro || p.categoria === filtro);
    }
    if (busqueda) {
        productos = productos.filter(p => p.titulo.toLowerCase().includes(busqueda));
    }

    if(productos.length === 0) {
        contenedor.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No se encontraron productos.</p>';
        return;
    }

    productos.forEach(prod => {
        const div = document.createElement('div');
        div.className = 'producto';
        const imagenAMostrar = prod.imagenes ? prod.imagenes[0] : prod.imagen;
        div.innerHTML = `
            <div class="img-container"><img src="${imagenAMostrar}" alt="${prod.titulo}"></div>
            <div class="info-producto"><h3>${prod.titulo}</h3><span class="precio">$${prod.precio}</span></div>
        `;
        div.onclick = () => abrirModal(prod);
        contenedor.appendChild(div);
    });
}

function filtrarTienda(cat, btn) {
    if(btn) {
        document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }
    document.getElementById('search-input').value = '';
    renderizarTienda(cat);
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
    const principal = document.getElementById('modal-img-src');
    principal.src = prod.imagenes ? prod.imagenes[0] : prod.imagen;
    
    document.getElementById('modal-titulo').innerText = prod.titulo;
    document.getElementById('modal-cat').innerText = prod.genero;
    document.getElementById('modal-precio').innerText = `$${prod.precio}`;
    document.getElementById('modal-desc').innerText = prod.desc;
    
    // Gestión de Miniaturas con clase "active"
    const colImagen = document.querySelector('.modal-image-col');
    // ... dentro de abrirModal ...

    // Limpieza de miniaturas previas
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

        // USAMOS appendChild: Esto las pone DEBAJO de la foto principal
        colImagen.appendChild(thumbContainer);
    }

    const btn = document.getElementById('modal-btn-add');
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    newBtn.onclick = () => { agregarCarrito(prod); cerrarModal(); };
    modal.style.display = 'flex';
}

function cerrarModal() { modal.style.display = 'none'; }
function toggleCarrito() { document.getElementById('sidebar-carrito').classList.toggle('active'); renderizarCarrito(); }

function agregarCarrito(prod) {
    const existe = carrito.find(p => p.id === prod.id);
    if (existe) existe.cantidad++; else carrito.push({ ...prod, cantidad: 1 });
    guardarCarrito(); toggleCarrito();
}

function eliminarItem(id) {
    carrito = carrito.filter(p => p.id !== id);
    guardarCarrito(); renderizarCarrito();
}

function guardarCarrito() { localStorage.setItem('carrito', JSON.stringify(carrito)); actualizarContador(); }
function actualizarContador() {
    const total = carrito.reduce((acc, p) => acc + p.cantidad, 0);
    document.getElementById('contador-carrito').innerText = total;
}

function renderizarCarrito() {
    const lista = document.getElementById('lista-carrito');
    lista.innerHTML = '';
    let total = 0;
    carrito.forEach(p => {
        total += p.precio * p.cantidad;
        const imagenItem = p.imagenes ? p.imagenes[0] : p.imagen;
        lista.innerHTML += `
            <div class="cart-item">
                <img src="${imagenItem}">
                <div>
                    <h4>${p.titulo}</h4>
                    <p>$${p.precio} x ${p.cantidad}</p>
                    <small onclick="eliminarItem('${p.id}')" style="color:red; cursor:pointer">Eliminar</small>
                </div>
            </div>`;
    });
    document.getElementById('carrito-total').innerText = `$${total}`;
}

function toggleMenuMovil() { document.getElementById('mobile-menu').classList.toggle('active'); }

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cerrarVideo();
        cerrarModal();
        document.getElementById('sidebar-carrito').classList.remove('active');
    }
});