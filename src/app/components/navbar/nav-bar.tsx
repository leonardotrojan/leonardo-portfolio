import { ThemeToggle } from '../theme-toggle';

const NavBar = () => {
    return ( 
        <nav className="p-6 border-b border-gray-300 flex justify-between fixed w-full h-[75px]
                        backdrop-blur-lg z-100">
            <div>
                <ul className="flex justify-evenly gap-8">
                    <li className="hover:border-b-2 border-purple-400 hover:-translate-y-1 transition delay-100 duration-200">
                        <a href="#about">sobre mim</a>
                    </li>
                    <li className="hover:border-b-2 border-purple-400 hover:-translate-y-1 transition delay-100 duration-200">
                        <a href="#skills">habilidades</a>
                    </li>
                    <li className="hover:border-b-2 border-purple-400 hover:-translate-y-1 transition delay-100 duration-200">
                        <a href="#projects">projetos</a>
                    </li>
                    <li className="hover:border-b-2 border-purple-400 hover:-translate-y-1 transition delay-100 duration-200">
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