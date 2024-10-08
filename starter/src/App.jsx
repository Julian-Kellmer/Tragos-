import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Newsletter, Error, Cocktail, HomeLayout, Landing,SinglePageError } from './pages';

import { loader as landingLoader } from './pages/Landing';

import { loader as singleCocktailLoader } from './pages/Cocktail';

import {action as actionFormData} from './pages/Newsletter'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
                errorElement: <SinglePageError/>,
                loader: landingLoader,
            },
            {
                path: '/cocktail/:id',
                errorElement: <SinglePageError/>,
                loader:singleCocktailLoader,

                element: <Cocktail />,
            },
            {
                path: '/newsletter',
                element: <Newsletter />,
                action: actionFormData,
            },
            {
                path: '/about',
                element: <About />,
            },
        ],
    },
]);
const App = () => {
    return <RouterProvider router={router} />;
};
export default App;
