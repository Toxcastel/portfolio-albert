import React, { useState } from "react";

type Props = {};
const SideBar = (props: Props) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className={`${open && "hidden"} z-30`}>
                <button className="ml-4" onClick={() => setOpen(!open)}>
                    Boton
                </button>
            </div>
            <div className={`${!open && "hidden"}  min-h-screen w-full fixed top-0 left-0 right-0  backdrop-blur-sm z-20`}></div>
            
            <div id="slide" className={`${!open && "hidden"} bg-[rgb(36,36,36)] min-h-screen w-40 fixed top-0 left-0 z-40`}>
            <div className={`${!open && "hidden"} z-50`}>
                <button className="ml-4 p-5" onClick={() => setOpen(!open)}>
                    cerrar
                </button>
            </div>
            </div>
        </>
    );
};

export default SideBar;
