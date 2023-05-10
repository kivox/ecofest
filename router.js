import Navigo from 'navigo';
import './public/assets/css/global.css';

async function loadComponent(selector, path) {
    try {
        const response = await fetch(path);
        document.querySelector(selector).innerHTML = await response.text();
    } catch (error) {
        console.warn(error);
        document.querySelector(selector).innerHTML = "Error loading component";
    }
}

async function loadContent(path) {
    try {
        const response = await fetch(path);
        document.querySelector('#content').innerHTML = await response.text();
        await loadPageStyle(`/assets/css/pages${path.slice(6, -5)}.css`);
    } catch (error) {
        console.warn(error);
        document.querySelector('#content').innerHTML = '<h1>Page not found</h1>';
    }
}

async function loadPageStyle(path) {
    const head = document.querySelector('head');
    const existingLink = document.querySelector('#page-style');
    if (existingLink) {
        head.removeChild(existingLink);
    }

    const link = document.createElement('link');
    link.id = 'page-style';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = path;

    head.appendChild(link);
}

const router = new Navigo('/', { noMatchWarning: false });

router
    .on({
        "/": () => loadContent("/pages/home.html"),
        "/acts": () => loadContent("/pages/acts.html"),
        "/tickets": () => loadContent("/pages/tickets.html"),
        "/recycling": () => loadContent("/pages/recycling.html"),
        "/contact": () => loadContent("/pages/contact.html"),
    })
    .notFound(() => {
        document.querySelector("#content").innerHTML = `<h1>Page not found</h1>`;
    });


(async () => {
    await loadComponent("#navbar", "/components/navbar.html");
    await loadComponent("#footer", "/components/footer.html");

    router.resolve();
})();

