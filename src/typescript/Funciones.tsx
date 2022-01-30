export const Funciones = () => {
  const sumar = (a:number, b:number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Funciones</h3>
      <h1>Suma: {sumar(5, 2).toFixed(2)}</h1>
    </>
  );
};
