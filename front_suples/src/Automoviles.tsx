import { useEffect, useState } from "react";
import TypeAutomovil from "./types/Automoviles";
function Automoviles() {
  const [Automovil, setAutomovil] = useState<TypeAutomovil[]>([]);

    useEffect(() => {
      // otra forma de que sirva fetch('http://localhost:8000/api/automoviles/')
      // utiliza el puerto de exposicion del back 
        fetch('http://localhost:4001/api/automoviles/')
        .then((res) => res.json())
        .then((data) => setAutomovil(data));
    }, []);

  return (
    <div style={{marginTop: '3em', display:'flex', justifyContent:'center'}}>
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Placa</th>
            <th>Color</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {Automovil.map((Automovil) => (
            <tr key={Automovil.id}>
              <td>{Automovil.marca}</td>
              <td>{Automovil.modelo}</td>
              <td>{Automovil.placa}</td>
              <td>{Automovil.color}</td>
              <td>{Automovil.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Automoviles;
