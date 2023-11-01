const element = document.querySelector('#text-desenvolvedor');
const text = "Desenvolvedor Full-Stack";

if (element != null) {
    function trocandoTexto(elementoIndex, text) {
        const caracters = text.split("").reverse();
        const digitando = setInterval(() => {
            
            if (!caracters.length) {
                return clearInterval(digitando);
            }

            const proxima = caracters.pop();
            element.innerHTML += (proxima);
        }, 120);
    }
    trocandoTexto(element, text);
}

const botaoTopo = document.querySelector('#btn-topo');

botaoTopo.addEventListener('click', function () { 
    window.scrollTo(0,0);
});

document.addEventListener('scroll', function () {
    if (window.scrollY > 30) {
        botaoTopo.style.display = 'flex';
    } else {
        botaoTopo.style.display = 'none';
    }
});

const entradaPadrao = document.querySelector('.entrada-padrao');

if (entradaPadrao != null) { 
    const observadorTxt = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
           if (entry.isIntersecting) {
               entry.target.classList.add('text-entrando');
           } 
        });
    });
    
    const elementosTxt = document.querySelectorAll('.entrada-padrao');
    
    elementosTxt.forEach(elemento => observadorTxt.observe(elemento));
}

const entradaLateral = document.querySelector('.entrada-lateral');

if (entradaLateral != null) {
    const observadorTxt2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('text-entrando-lateral');
            }
        });
    });

    const elementosTxt2 = document.querySelectorAll('.entrada-lateral');

    elementosTxt2.forEach(elemento => observadorTxt2.observe(elemento));
}

const entradaImagem = document.querySelector('.entrada-imagem');

if (entradaImagem != null) {
    const observadorImg = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('img-entrando-lateral');
            }
        });
    });

    const elementosImg = document.querySelectorAll('.entrada-imagem');
    
    elementosImg.forEach(elemento => observadorImg.observe(elemento));
}

const tecnologias = document.querySelectorAll('.container-tecnologias');
    
tecnologias.forEach(link => {
    link.addEventListener('mouseenter', () => {
        document.querySelector('.mensagem').style.display = 'none';
    });
});
