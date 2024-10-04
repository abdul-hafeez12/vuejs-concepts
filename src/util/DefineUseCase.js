import { defineComponent } from 'vue';

function defineUseCaseComponent(name, setup) {
    if (typeof setup !== 'function') { throw new Error('Invalid UseCase Component definition'); }
    return defineComponent(setup, {
        name,
    });
}
function defineUseCaseLoader(name, setup) {    
    const component = defineUseCaseComponent(name, setup);
    function loader(ctx) {
        const router = ctx.$router;
        console.log(router+"router")
        if (router.hasRoute(name)) { router.removeRoute(name); }
        router.addRoute({
            path: `/${name}`,
            name,
            component,
        });
        router.push({name});        
    }
    loader.component = component;
    return loader;
}

export { defineUseCaseComponent, defineUseCaseLoader };
