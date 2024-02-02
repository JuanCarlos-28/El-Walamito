import { Typography } from "@material-tailwind/react";

export function Footer() {
    return (
        <footer className="w-full bg-gray-900 p-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-gray-900 text-center md:justify-between">
            <img src="/src/assets/images/LOGO WALAMITO perfil.png" alt="logo-ct" className="w-32" />
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 justify-center">
            <li>
                <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="text-xl font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
                >
                Inicio
                </Typography>
            </li>
            <li>
                <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="text-xl font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
                >
                Ubicación
                </Typography>
            </li>
            <li>
                <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="text-xl font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
                >
                Catalogo
                </Typography>
            </li>
            <li>
                <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="text-xl font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
                >
                Contacto
                </Typography>
            </li>
            </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography color="blue-gray" className="text-center font-normal flex gap-4 justify-center">
                <a href="#" target="_blank" rel="noreferrer">
                    <img src="/src/assets/images/icons8-whatsapp.svg" alt="Logo Instagram" className="w-20" />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <img src="/src/assets/images/icons8-facebook-nuevo.svg" alt="Logo Facebook" className="w-20" />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <img src="/src/assets/images/icons8-instagram.svg" alt="Logo Instagram" className="w-20" />
                </a>
        </Typography>
        </footer>
    );
}