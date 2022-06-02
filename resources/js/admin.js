require ('./bootstrap')
import { createInertiaApp } from '@inertiajs/inertia-react'
import {render} from "react-dom";
import {InertiaProgress} from '@inertiajs/progress';

createInertiaApp({
    id:"admin",
    resolve: name => import(`./Pages/Admin/${name}`),
    setup({ el, App, props }) {
        render(<App {...props} />, el)
    },
})


InertiaProgress.init({color: '#4B5563'});
