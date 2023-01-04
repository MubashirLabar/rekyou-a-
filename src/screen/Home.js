import React from 'react';
import {Link} from 'react-router-dom'
import Slider from "react-slick"

function Home() {

    const musicList = [
        {label: "Adminastratif", price: "+ 10€", img: "/images/1.jpg", txt: "Gérer pour moi mon inscription à la Sacem"},
        {label: "Production", price: "+ 30€ /heure", img: "/images/6.jpg", txt: `Choisir Opseek comme ingénieur du son pour le mixage (Ref :  Aya, Ninho, Naza, Koba La D)`},
        {label: "Promotion", price: "+ 50€", img: "/images/4.jpg", txt: "Promouvoir mon titre sur les réseaux sociaux via Base for music"},
        {label: "Production", price: "150 €/titre", img: "/images/5.jpeg", txt: "Choisir Fally comme beatmaker"},
        {label: "Production", price: "+ 10€", img: "/images/6.jpg", txt: "Faire masterisé mon projet par Opseek"},
        {label: "Adminastratif", price: "+ 10€", img: "/images/1.jpg", txt: "Gérer pour moi mon inscription à la Sacem"},
        {label: "Production", price: "+ 30€ /heure", img: "/images/6.jpg", txt: `Choisir Opseek comme ingénieur du son pour le mixage (Ref :  Aya, Ninho, Naza, Koba La D)`},
        {label: "Promotion", price: "+ 50€", img: "/images/4.jpg", txt: "Promouvoir mon titre sur les réseaux sociaux via Base for music"},
        {label: "Production", price: "150 €/titre", img: "/images/5.jpeg", txt: "Choisir Fally comme beatmaker"},
        {label: "Production", price: "+ 10€", img: "/images/6.jpg", txt: "Faire masterisé mon projet par Opseek"},
    ]

    var musicSlider = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
              breakpoint: 1245,
              settings: { 
                slidesToShow: 4,
                slidesToScroll: 4
              }
            },
            {
                breakpoint: 970,
                settings: { 
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
            },
            {
                breakpoint: 725,
                settings: { 
                  slidesToShow: 2.7,
                  slidesToScroll: 2 
                }
            },
            {
                breakpoint: 680,
                settings: { 
                  slidesToShow: 2.4,
                  slidesToScroll: 2 
                }
            },
            {
                breakpoint: 640,
                settings: { 
                  slidesToShow: 2.2,
                  slidesToScroll: 2 
                }
            },
            {
                breakpoint: 480,
                settings: { 
                  slidesToShow: 2.1,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 355,
                settings: { 
                  slidesToShow: 1.8,
                  slidesToScroll: 1
                }
            },
        ]
    };

    return (
        <div className='home-p'>
            <div className='sect-a'>
                <div className='wrapper flex flex-col'>
                    <div className='blk-a flex'>
                        <div className='lit flex aic'>
                            <div className='price-cart flex flex-col aic'>
                                <div className='label font s16 b7 title c000'><span className="s40 b7 color">37, 50€</span><br/>/mois</div>
                                <div className='actions flex aic'>
                                    <button className='cleanbtn btn font s14 b5 c000 on'>4x sans frais</button>
                                    <button className='cleanbtn btn font s14 b5 c000'>1 fois</button>
                                </div>
                                <div className='img' style={{backgroundImage: 'url(/images/6.jpg)'}} />
                                <div className='btn'><button className="button font s15 b4 cfff">Choisis cette offre</button></div>
                                <div className='ftr flex aic'>
                                    <Link to='/' className='item flex aic'>
                                        <div className='ico icon-share s18 c000'/>
                                        <div className='lbl font s14 b5 c000'>Partager à un ami</div>
                                    </Link>
                                    <Link to='/' className='item flex aic'>
                                        <div className='ico icon-heart s15 c000'/>
                                        <div className='lbl font s14 b5 c000'>Enregistrer</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className='rit flex flex-col aic'>
                            <div className='block'>
                                <div className='button font s15 b4 cfff'>RDV avec un Musical Project Manager</div>
                                <div className='blk flex flex-col aic'>
                                    <div className='lbl font s16 b7 c000'>Ce prix est-il  supérieur à votre budget ?</div>
                                    <div className='btns flex aic'>
                                        <button className='cleanbtn btn font s14 b3 cfff anim'>Oui</button>
                                        <button className='cleanbtn btn font s14 b3 cfff anim'>Non</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Production */}
                    <div className='prdtion flex'>
                        <div className='lit'>
                            <div className='img' style={{backgroundImage: 'url(/images/5.jpeg)'}} />
                        </div>
                        <div className='rit flex flex-col'>
                            <div className='title fon s18 b6 c000'>Production</div>
                            <div className='txt font s14 c000'>Tous nos studios partenaires sont spécialisées et recommandé pour<br/> l’enregistrement vocal.</div>
                            <div className='tt font s14 b5 c000'>Cette solution comprend :</div>
                            <div className='list'>
                                <div className='font s14 c000'>&bull;&nbsp;<span className="b5">3h d’enregistrement vocal</span> avec un <span className="b5">ingénieur</span> du son <span className="b5">professionnel</span></div>
                                <div className='font s14 c000'>&bull;&nbsp;<span className="b5">2h de mixage</span> pour ton titre</div>
                                <div className='font s14 c000'>&bull;&nbsp;<span className="b5">2h de mastering</span> pour <span className="b5">optimiser</span> ton titre pour les <span className="b5">plateformes de streaming</span></div>
                            </div>
                        </div>
                    </div>
                
                    {/* Promotion */}
                    <div className='promotion flex flex-col'>
                        <div className='item flex aic'>
                            <div className='lit'/>
                            <div className='rit'><div className='title fon s18 b7 c000'>Promotion</div></div>
                        </div>
                        <div className='item flex aic'>
                            <div className='lit'><img src='/images/logo.svg' className='img'/></div>
                            <div className='rit'><div className="txt font s14 c000">Nous te laissons profiter de <span className="b5">notre audience.</span> Manisfeste toi auprès de plus de <span className="b5">7000 passionnés, artistes, studios, maisons de disque & co.</span> Mais pas seulement, car avec RekYou c’est aussi <span className="b5">des articles de blog,</span> des <span className="b5">interviews,</span> ainsi que <span className="b5">l’intégration</span> de ton projet dans la playlist <span className="b5">Le FlaiR.</span></div></div>
                        </div>
                        <div className='item flex aic'>
                            <div className='lit'><img src='/images/plus-icon.svg' className='img plus'/></div>
                            <div className='rit'/>
                        </div>
                        <div className='item flex aic'>
                            <div className='lit'><img src='/images/groover-logo.svg' className='img'/></div>
                            <div className='rit'><div className="txt font s14 c000">Profite de l’expérience de professionnels entièrement dédiés à l’écoute de ton projet et bénéficie de leur retour pour construire ton identité musicale.</div></div>
                        </div>
                    </div>
                
                                
                    {/* Distribution */}
                    <div className='distribution flex flex-col'>
                        <div className='item flex'>
                            <div className='lit'><img src='/images/spinnup-logo.svg' className='img'/></div>
                            <div className='rit flex flex-col'>
                                <div className='title fon s18 b7 c000'>Distribution</div>
                                <div className="txt font s14 c000"><span className="b5">Distribue</span> ton titre <span className="b5">à travers le monde entier</span> sur <span className="b5">toutes les plateformes</span> de streaming.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            {/* Section B */}
            <div className='music-list-slider'>
                <div className='wrapper flex flex-col'>
                    <div className='title font s38 b7 color'>ENRICHIR VOTRE EXPERIENCE MUSICALE</div>
                    <div className='slider-blk flex aic'>
                        <Slider {...musicSlider}>
                            {
                                musicList.map(item => (
                                    <div className="">
                                        <div className='music-card'>
                                            <div className='media rel'>
                                                <div className='img' style={{backgroundImage: `url(${item.img})`}} />
                                                <div className='meta flex aic abs'>
                                                    <div className='nam font s12 b3 cfff flex aic'>
                                                        <span className="ico icon-bookmark color s20"/>&nbsp;
                                                        <span>{item.label}</span> 
                                                    </div>
                                                    <div className='pr font s13 b5 cfff'>{item.price}</div>
                                                </div>
                                            </div>
                                            <div className='lbl font s12 b5 c000'>{item.txt}</div>
                                        </div>
                                    </div>
                                )) 
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        
        </div>
    );
}

export default Home;