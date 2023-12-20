import { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const [icone, setIcone] = useState(false) 

    const showIcon = () => setIcone(!icone);
    const estaNaHome = icone ? (
        <Link to="/home">
            Estou testando o use state
        </Link>
      ) : null

    return (
        <button onClick={showIcon}>
            Navbar
            {estaNaHome}
        </button>
    )
    
  }
  
  export default Navbar
  