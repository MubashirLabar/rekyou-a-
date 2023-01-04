import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const [menu, setMenu] = useState(false)

    useEffect(() => {
        if(menu){document.body.style.overflow = "hidden";}
        else{document.body.style.overflow = "inherit"}
        document.body.addEventListener("click", ()=>{
            setMenu(false);
        }) 
    },[menu])

    return (
        <React.Fragment>
            <div className="header sticky">
                <div className='wrapper flex flex-col aic'>
                    <div className='blk flex aic'>
                        <Link to='/' className="logo"><img src='images/logo.svg' className="img"/></Link>
                        <div className='title font s28 b7 c000 upc'>Musical Projet Manager</div>
                        <button className='cleanbtn menu icon-menu s22 c000' onClick={(e) => {
                            e.stopPropagation()
                            setMenu(!menu)
                        }} />
                    </div>
                    <div className='meta flex flex-col'>
                        <div className='text font s14 c000'>Commence dès maintenant ton projet musical, ou jusqu’au [date de démarrage] pour une sortie de projet en [date de sortie]</div>
                        <div className='stamps flex aic'>
                            <div className='item flex aic'>
                                <div className='lbl font s14 b4'>Date de sortie : Août 2021</div>
                                <div className='ico icon-pen-angled s22 c000'/>
                            </div>
                            <div className='item flex aic'>
                                <div className='lbl font s14 b4'>Nombre de titres : 7</div>
                                <div className='ico icon-pen-angled s22 c000'/>
                            </div>
                            <div className='item flex aic'>
                                <div className='lbl font s14 b4'>Disponibilité : En soirée seulement, 3h/jour</div>
                                <div className='ico icon-pen-angled s22 c000'/>
                            </div>
                            <div className='item flex aic'>
                                <div className='lbl font s14 b4'>Mixage à distance : non</div>
                                <div className='ico icon-pen-angled s22 c000'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            {/* tablet or small screen */}
            <div className={`header-menu fixed anim ${menu ? 'show' : 'hide'}`}>
                <div className={`block flex flex-col fixed anim ${menu ? 'show' : 'hide'}`} onClick={(e) => e.stopPropagation()}>
                    <div className='text font s14 c000'>Commence dès maintenant ton projet musical, ou jusqu’au [date de démarrage] pour une sortie de projet en [date de sortie]</div>
                    <div className='stamps flex aic'>
                        <div className='item flex aic'>
                            <div className='lbl font s14 b4'>Date de sortie : Août 2021</div>
                            <div className='ico icon-pen-angled s22 c000'/>
                        </div>
                        <div className='item flex aic'>
                            <div className='lbl font s14 b4'>Nombre de titres : 7</div>
                            <div className='ico icon-pen-angled s22 c000'/>
                        </div>
                        <div className='item flex aic'>
                            <div className='lbl font s14 b4'>Disponibilité : En soirée seulement, 3h/jour</div>
                            <div className='ico icon-pen-angled s22 c000'/>
                        </div>
                        <div className='item flex aic'>
                            <div className='lbl font s14 b4'>Mixage à distance : non</div>
                            <div className='ico icon-pen-angled s22 c000'/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}
 
export default Header;