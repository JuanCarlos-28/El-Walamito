import { Cards } from "../components/Cards"
import { Contacto } from "../components/Contacto"
import { IconoWhatsAppAnimado } from "../components/IconoWhatsAppAnimado"
import { Navbar } from "../components/Navbar"
import { maquinarias } from "../data/maquinarias"
import { Footer } from "../components/Footer"
import 'animate.css';
import { useScrollAnimation } from "../hooks/useScrollAnimation"

export const HomePage = () => {

    const catalogosRef = useScrollAnimation(0.05, 'animate__fadeIn');
    const ubicacionRef = useScrollAnimation(0.05, 'animate__lightSpeedInRight');

    return (
        <>
            <Navbar />

            <div id="inicio" className="relative bg-black mb-10">
                <img 
                    src="./assets/images/BANNER VACIO.jpg" 
                    alt="Banner"
                    className="w-full h-[500px]"
                />

                <div className="animate__animated animate__fadeInUp absolute top-0 bottom-0 flex flex-col justify-center items-center w-full text-center">
                    <p className="text-gray-700 text-xl sm:text-3xl lg:text-4xl font-bold">Especializados en construcciones y reparaciones.
                    </p>
                    <p className="text-blue-700 text-xl sm:text-3xl lg:text-4xl font-bold">Siempre comprometidos en las necesidades de tus servicios</p>
                </div>

            </div>

            <div className="animate__animated animate__fadeInLeft my-10 max-w-[1200px] mx-auto px-5 xl:px-10">
                <h1 className="font-bold text-5xl text-center my-10">EL WALAMITO</h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-justify" style={{ lineHeight: '1.4'}}>Nos especializamos en soluciones para sus proyectos de construcción y reparación. Ofrecemos una amplia gama de maquinaria y equipos de alta calidad en alquiler, desde maquinaria pesada hasta herramientas especializadas, para cubrir sus necesidades. <span className="font-bold text-blue-700">!EL WALAMITO es parte de tu equipo!</span>, siempre comprometidos en las necesidades de tus servicios!</p>
            </div>

            <div id="catalogo" className="relative bg-black my-5">
                <img 
                    src="./assets/images/BANNER PAGINA WEB CATALOGO - 02.webp" 
                    alt="Banner"
                    className="w-full"
                />

                <div className="absolute w-full top-0 bottom-0 ali text-center flex justify-center items-center">
                    <p className="text-white font-bold text-2xl sm:text-5xl lg:text-7xl">
                        MAQUINARIA Y EQUIPO
                    </p>
                </div>
            </div>

            <div ref={catalogosRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-12 mx-auto gap-12">
                {
                    maquinarias.map( maquinaria => (
                        <Cards key={maquinaria.nombre_maquinaria} maquinaria={maquinaria}/>
                    ))
                }
            </div>

            <Contacto />


            <div ref={ubicacionRef} id="ubicacion" className="w-full">
                <h2 className="font-bold text-5xl text-center">Ubicación</h2>
                <p className=" text-center text-lg text-black my-2">
                    Estamos ubicados en el corazón de la ciudad, en la siguiente dirección:<br/>
                    <strong>Dirección: Calle Ejemplo #123, Ciudad, País</strong><br/>
                    ¡Ven a visitarnos y conoce nuestras instalaciones!
                </p>
                <iframe 
                    className="mx-auto my-5 p-5 rounded-[2rem]"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3666.331691993684!2d-106.389656!3d23.231014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDEzJzUxLjciTiAxMDbCsDIzJzIyLjgiVw!5e0!3m2!1ses!2smx!4v1698334570646!5m2!1ses!2smx"
                    width="80%" 
                    height="450" 
                    style={{border:"0"}} 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            <Footer />

            <IconoWhatsAppAnimado />
        </>
    )
}
