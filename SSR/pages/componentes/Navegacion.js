
import Link from 'next/link'

const Navegacion =()=>(
<div>
        <ul>

            <li>
                <h1>Nombre del sitio</h1>
            <Link href="/"><a>Inicio</a></Link>
                <Link href="/nosotros"><a>Nosotros</a></Link>
                
            </li>
        </ul>

    <style jsx>
    {
        `ul{
            background-color:#333;
            list-style:none;
            display:flex;
        }

        ul li{
            padding: 5rem 0;
            margin-right:1rem
        }

        ul li a {
            font-size:1.2rem;
            color:white;
            text-decoration:none
        }
        
        `



}
    
    
    </style>

    </div>

)

export default Navegacion