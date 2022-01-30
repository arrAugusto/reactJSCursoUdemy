import { useEffect, useRef, useState } from "react";
import { reqRespApi } from "../api/reqResp";
import { ReqResListado, Usuario } from "../interfaces/reqResp";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  useEffect(() => {
    //Llamando al api
    CargarUsuarios();
  }, []);

  const pageRef = useRef(1);
  const CargarUsuarios = async () => {
    const resp = await reqRespApi.get<ReqResListado>("/users", {
      params: {
        page: pageRef.current,
      },
    });
    if (resp.data.data.length) {
      setUsuarios(resp.data.data);
    } else {
      pageRef.current--;

      alert("No existen registros");
    }
  };
  const paginaAnterior = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      CargarUsuarios();
    }
  };

  const paginaSiguiente = () => {
    CargarUsuarios();
    pageRef.current++;
  };
  return {
    usuarios,
    paginaAnterior,
    paginaSiguiente,
  };
};
