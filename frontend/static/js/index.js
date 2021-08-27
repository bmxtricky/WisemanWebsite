const router = async () => {
    const routes = [
        {path: '/', view: () => console.log('Home')},
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
    console.log(potentialMatches);
};