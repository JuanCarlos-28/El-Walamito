export const Cards = ({ maquinaria }) => {
    const { nombre_maquinaria, url_maquinaria } = maquinaria;

    return (
            <>
                <div className="overflow-hidden rounded-md">
                    <img
                        src={url_maquinaria}
                        alt={nombre_maquinaria}
                        className="group-hover:opacity-75 imgCatalogo"
                    />
                    <p className=" my-4 font-semibold text-black text-center">
                            {`${nombre_maquinaria}`}
                    </p>
                </div>
                    
            </>
    );
};