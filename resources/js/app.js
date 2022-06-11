import AppProfileLayout from "@/Layouts/AppProfileLayout";
import {createInertiaApp} from "@inertiajs/inertia-react";
import AppLayout from "./Layouts/AppLayout";
import AdminLayout from "./Layouts/AdminLayout";
import {render} from 'react-dom'
import {InertiaProgress} from "@inertiajs/progress"
import 'antd/dist/antd.css';
require('./bootstrap')

createInertiaApp({
    resolve: name => {
        const page = require(`./Pages/${name}`).default
        page.layout = page => {
            return (
                (name.includes('Profile/')) ?
                    <AppLayout>
                        <AppProfileLayout children={page}>
                        </AppProfileLayout>

                    </AppLayout>
                    :
                    (name.includes('Admin/')) ?
                        <AdminLayout children={page}>
                        </AdminLayout>
                        : <AppLayout children={page}>
                        </AppLayout>
            )

        }
        return page;
    },
    setup({el, App, props}) {
        render(<App {...props} />, el)
    },
})


InertiaProgress.init({color: '#4B5563'});
