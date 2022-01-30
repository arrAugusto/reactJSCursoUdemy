import { useCounter } from "../hooks/useCounter";


export const ContadorHook = () => {
    
    const { valor, acumular } = useCounter(6);

  return (
      <>
        <h3>ContadorHook <small>{ valor }</small></h3>
        <button 
            className='btn btn-success'
           onClick={ ()=>acumular(-1) } 
        >
            -1
        </button>&nbsp;
        <button 
            className='btn btn-success'
            onClick={ ()=>acumular(1) } 
            >
            +1
        </button>

      </>
  )
};
