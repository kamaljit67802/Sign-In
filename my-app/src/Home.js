import { signOut } from "firebase/auth"
import { auth } from "./firebase"



export const Home = () => {
    const user = signOut(auth)
    console.log(user)
    return (
        <div className="p-4 box mt-3 text-center">
         <h1>Hello Welcome {user.email}</h1>   
        </div>
    )

}