import React from 'react'
import { Navigate } from 'react-router-dom'
const Home = React.lazy(() => {
    return (
        import("@/views/Home")
    )
})
const Entire = React.lazy(() => {
    return (
        import("@/views/Entire")
    )
})
const Detail = React.lazy(() => {
    return (
        import("@/views/Detail")
    )
})

const routers = [
    {
        path:"/",
        element:<Navigate to="/home"/>

    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/entire",
        element: <Entire />
    },
    {
        path: "/detail",
        element: <Detail />
    },
]

export default routers