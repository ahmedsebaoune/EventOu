import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'

createInertiaApp({
  id:"guest",
  resolve: name => import(`./Pages/Guest/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})
