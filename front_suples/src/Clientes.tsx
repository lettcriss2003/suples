import { useEffect, useState } from "react";
import TypeCliente from "./types/Clientes";
function Clientes() {
    const [clientes, setClientes] = useState<TypeCliente[]>([]);

    useEffect(() => {
        fetch('http://localhost:4001/api/clientes/')
            .then((res) => res.json())
            .then((data) => setClientes(data));
    }, []);
    return (
        <div style={{marginTop: '3em', display:'flex', justifyContent:'center'}}>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellido}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.telefono}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
  }
  
export default Clientes;