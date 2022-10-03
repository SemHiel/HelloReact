import "./Card.css"
const Card3 = () => {
    const hallo = () =>{
        console.log("Kaart 3")
    }
    return(
        <article onClick = {hallo}>
            <header>
                <h2>DERDE KAART</h2>
            </header>
            <section>
                Aliqua mollit sint cillum occaecat nostrud ut commodo do.
            </section>
        </article>
    );
}

export default Card3;