'use client'

import { store } from "./store"

const { Provider } = require("react-redux")

export const Providers = ({children}) => {
    return <Provider store={store}>{children}</Provider>
}