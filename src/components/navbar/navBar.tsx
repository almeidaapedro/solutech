import logo from "../../assets/logo-solutech.svg"


function NavBar(){

return (
    <>
        <div className="flex bg-waikawa-gray-900">
            <div className="p-12 m-0 w-1/2 pl-32">
                <ul className="list-none flex flex-row gap-4 font-bold text-xl text-waikawa-gray-50">
                    <li className="hover:underline cursor-pointer">Início</li>
                    <li className="hover:underline cursor-pointer">Serviços</li>
                    <li className="hover:underline cursor-pointer">Portfólio</li>
                    <li className="hover:underline cursor-pointer">Sobre nós</li>
                    <li className="hover:underline cursor-pointer">Contato</li>
                </ul>
            </div>
            <div className="justify-center flex w-1/2 pr-28">
                <img src={logo} alt="Imagem do logo" className="w-72"/>
            </div>
        </div>
    </>
)

}

export default NavBar;