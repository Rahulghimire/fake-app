import Details from "../components/Details"
import Products from "../components/Products"

const routes = [
    {path: "/", component: Products},
    {path: "/products/:id", component: Details}
]

export default routes