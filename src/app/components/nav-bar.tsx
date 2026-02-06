import { ThemeToggle } from './theme-toggle';

const NavBar = () => {
    return ( 
        <nav className="p-6 border-b border-gray-300 flex justify-between sticky w-full h-[75px]">
            <div>
                <ul className="flex justify-evenly gap-8">
                    <li className="hover:underline hover:-translate-y-1 transition delay-150">
                        <a href="#">sobre mim</a>
                    </li>
                    <li className="hover:underline hover:-translate-y-1 transition delay-150">
                        <a href="#">habilidades</a>
                    </li>
                    <li className="hover:underline hover:-translate-y-1 transition delay-150">
                        <a href="#">projetos</a>
                    </li>
                    <li className="hover:underline hover:-translate-y-1 transition delay-150">
                        <a href="#">contato</a>
                    </li>
                </ul>
            </div>
            <div>
                <ThemeToggle />
            </div>
        </nav>
     );
}
 
export default NavBar;