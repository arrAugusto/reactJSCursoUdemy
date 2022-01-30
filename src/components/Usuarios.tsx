import { Usuario } from "../interfaces/reqResp";
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {
  const { usuarios, paginaSiguiente, paginaAnterior} = useUsuarios();
    const renderItem = (usuario: Usuario) => {
    return (
      <tr key={usuario.id.toString()}>
        <td>
          <img
            src={usuario.avatar}
            alt={usuario.first_name}
            style={{
              width: 35,
              borderRadius: 100,
            }}
          ></img>
        </td>
        <td>
          {usuario.first_name}
          {usuario.last_name}
        </td>
        <td>{usuario.email}</td>
      </tr>
    );
  };
  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map((usuario) => renderItem(usuario))}</tbody>
      </table>
      <button className="btn btn-secondary" onClick={paginaAnterior}>
        Anterior
      </button>
      &nbsp;
      <button className="btn btn-success" onClick={paginaSiguiente}>
        Siguientes
      </button>

    </>
  );
};
