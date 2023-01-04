import React from 'react';
import {Link} from 'react-router-dom'

function Footer() {

    const nav = [
        {label: "Confidentialité", slug: '/'},
        {label: "Conditions", slug: '/'},
        {label: "Mention légales", slug: '/'},
        {label: "Contact", slug: '/'},
    ]

    return (
        <div className='footer'>
            <div className='wrapper flex aic'>
                <Link to='/' className='logo'><img src='/images/logo.svg' className='img'/></Link>
                <div className='nav flex aic'>
                    {
                        nav.map(item => (
                            <Link to={item.slug} className='link font s14 c000'>{item.label}</Link>
                        ))
                    }
                </div>
                <div className='socials flex aic'>
                    <Link to='/' className='ico icon-facebook s20 c000' />
                    <Link to='/' className='ico icon-instagram s20 c000' />
                    <Link to='/' className='ico icon-twitter s20 c000' />
                </div>
                <div className='cpy-rit font s14 c000'>&copy; 2020 Rekyou. Tous droits réservés.</div>
            </div> 
        </div>
    );
}

export default Footer;