import Home from './views/Home.js';
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        {path: '/', view: Home},
        {path: '/shop', view: () => console.log('shop')},
        {path: '/about', view: () => console.log('about')},
        {path: '/contact', view: () => console.log('contact')},
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);
    if (!match) {
        match = {
            route: routes[0], 
            isMatch: true
        };
    };

    const view = new match.route.view();

    document.querySelector('#content').innerHTML = await view.getHtml();

    console.log(new match.route.view());
};
window.addEventListener('popstate', router);
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});