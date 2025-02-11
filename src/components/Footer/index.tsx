import { listButtons } from "./listButtons"

export function Footer() {
    const providerButtons=()=>{
        
        return (
            <ul className="flex flex-col">
                <h2 className="text-lg"></h2>
                <li className="text-sm"></li>
            </ul>
        )
    }
    return(
        <footer className="bg-orange-400 p-2 items-center flex justify-between">
            <ul className="flex flex-col">
                <h2 className="text-lg">Get to Know Us</h2>
                <li className="text-sm">Careers</li>    
                <li className="text-sm">Accessibility</li>    
                <li className="text-sm">Sustainability</li>    
                <li className="text-sm">Press Center</li>    
            </ul>
            <ul className="flex flex-col">
                <h2 className="text-lg">Make Money with Us</h2>
                <li className="text-sm">Become an Affiliate</li>
                <li className="text-sm">Protect & Build Your Brand</li>
                <li className="text-sm">Become a Delivery Driver</li>
                <li className="text-sm">Self-Publish with Us</li>
            </ul>
            <ul className="flex flex-col">
                <h2 className="text-lg">Let Us Help You</h2>
                <li className="text-sm">Your Account</li>    
                <li className="text-sm">Your Orders</li>    
                <li className="text-sm">Shipping Rates & Policies</li>    
                <li className="text-sm">Returns & Replacements</li>                
            </ul>
        </footer>
    )
}