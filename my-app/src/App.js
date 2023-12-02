import { UserAuthContextProvider } from './component/context/UserAuthContext';
import ReactDOM from 'react-dom/client';
import { SignIn } from './component/Sign-In';
import { Sign } from './component/Sign-Up';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Container} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

const App =() => {
  return (
    
           

    <Container className='d-flex align-items-center justify-content-center '
    style ={{minHeight:"100vh",background:"black"}}>
      <div className='w-100' style={{maxWidth:"400px"}}>
      
      <SignIn/>
      
      </div>
    </Container>
    
  );
}
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<SignIn/>
  },
  {
      path:"/sign-up",
      element:<Sign/>
  }

  

])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)

