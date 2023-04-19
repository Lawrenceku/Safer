import React from "react";
import { render } from "react-dom";

function Hero(){
    return(
        <>
        <h1>hello</h1>
        <section classNmae="hero-section" >
        <div style="display: flex; align-items: center; justify-content: center;">
            <h1 class="hero-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis modi atque cum asperiores incidunt voluptatibus, ut mollitia sequi corporis eos!</h1>
        </div>
        <h3 style="color:white; font-weight: 400;"> Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        <div>
        <button class="CTA-1">Get Started</button>
        <button class="CTA-2">Sign Up</button>
        </div>
    </section>
    </>
    )
}

export default Hero