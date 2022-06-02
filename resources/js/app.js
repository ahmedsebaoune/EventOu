require ('./bootstrap')
import {createInertiaApp} from "@inertiajs/inertia-react";
import {render} from "react-dom";
import {InertiaProgress} from '@inertiajs/progress';

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({ el, App, props }) {
      render(<App {...props} />, el)
    },
  })


InertiaProgress.init({color: '#4B5563'});
