

export default function User(props) {
  return (
    <div>
        <div className="card">
            <div className="card-header">
                Cita numero {props.numeroCita}
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>Siempre es mejor que la gente hable cara a cara, con el corazón en la mano.<br></br> De lo contrario acaban surgiendo malentendidos.<br></br>Y los malentendidos, ¿Sabe?, son una fuente de infelicidad</p>
                    <footer className="blockquote-footer">Haruki Murakami. <cite title="Source Title">{props.libro}</cite></footer>
                </blockquote>
            </div>
        </div>
    </div>
  )
}
