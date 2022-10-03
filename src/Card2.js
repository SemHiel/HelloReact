import "./Card.css"
const Card2 = () => {
    const hallo = () =>{
        console.log("Kaart 2")
    }
    return(
        <article onClick = {hallo}>
            <header>
                <h2>TWEEDE KAART</h2>
            </header>
            <section>
                Aliqua mollit sint cillum occaecat nostrud ut commodo do.
            </section>
        </article>
    );
}

export default Card2;