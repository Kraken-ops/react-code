import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import ContactComponent from './components/ContactComponent.jsx'
import HomeComponent from './components/HomeComponent.jsx'
import AboutComponent from './components/AboutComponent.jsx'
import UserComponent from './components/UserComponent.jsx'
import GithubComponent, { githubInfoLoader } from './components/GithubComponent.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <HomeComponent />
      }, 
      {
        path: "about",
        element: <AboutComponent />
      },
      {
        path: "contact",
        element: <ContactComponent />
      },
      {
        path: "user/:id",
        element: <UserComponent />
      },
      {
        path: "github",
        element: <GithubComponent />,
        loader: githubInfoLoader,
      }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<HomeComponent />} />
//       <Route path='about' element={<AboutComponent />} />
//       <Route path='contact' element={<ContactComponent />} />
//       <Route path='user/:id' element={<UserComponent />} />
//       <Route path='github' loader={githubInfoLoader} element={<GithubComponent />} />
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
