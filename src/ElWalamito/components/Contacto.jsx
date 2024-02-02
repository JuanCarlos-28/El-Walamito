import { Input, Textarea } from "@material-tailwind/react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const Contacto = () => {

    const contactoRef = useScrollAnimation(0.05, 'animate__bounceIn');
    
    return (
        <div ref={contactoRef} id="contacto" className="container mx-auto my-16">
            <div className="mx-auto max-w-[600px] w-11/12 p-8 bg-gray-900 rounded-3xl shadow-lg">
                <div className="flex justify-center mb-8">
                    <img 
                        src="/src/assets/images/LOGO WALAMITO PNG CON FONDO.png" 
                        alt="Logo" 
                        className="w-32" />
                </div>
                <h1 className="text-2xl font-semibold text-center text-white mt-8 mb-6">Contactanos</h1>
                <form className="form">

                    <div className="mb-6 input-nombre">
                        <Input
                            color="green"
                            label="Nombre" 
                            name="nombre"
                            id="nombre"
                            autoComplete="off"
                        />
                    </div>
                    
                    <div className="mb-6 input-telefono">
                        <Input 
                            type="tel"
                            color="blue"
                            label="Telefono" 
                            name="telefono"
                            id="telefono"
                            autoComplete="off"
                            className="text-white"
                        />
                    </div>

                    <div className="mb-6 input-correo">
                        <Input
                            color="blue"
                            label="Correo Electrónico" 
                            name="correo_electronico"
                            id="correo_electronico"
                            autoComplete="off"
                            className="text-white"
                            // style={{ borderColor: errorEmail ? 'red' : 'white' }}
                        />
                        {/* {errorEmail && <p style={{ color: 'red' }}>Correo electrónico inválido</p>} */}
                    </div>

                    <div className="input-comentarios">
                        <Textarea
                            color="blue"
                            label="Comentarios" 
                            name="comentarios"
                            id="comentarios"
                            autoComplete="off"
                            className="text-white"
                        />
                    </div>

                    <button type="submit" className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4">Enviar</button>
                </form>

                <p className="text-xs text-white text-center mt-6">&copy; 2024 EL WALAMITO</p>
            </div>
        </div>
)
}
