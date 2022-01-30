
export const TiposBasicos = () => {
    const nombre = 'Augusto';
    const edad: number = 35;
    const estadoActivo: boolean = true;

    const poderes: string[] = ['Velocidad', 'Rayo', 'Volar'];
       
  return (
     <>
    <h3>Tipos basicos</h3>
    { nombre }, { edad }, { (estadoActivo) ? 'Activo' : 'Inactivo' } 
    <br />
    { poderes.join(', ') }
    </>
  )

};

export default TiposBasicos;