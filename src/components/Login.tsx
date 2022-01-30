import { useEffect, useReducer } from "react";

interface AutState {
  validando: boolean;
  token: string | null;
  userName: string;
  nombre: string;
}

const initialState = {
  validando: true,
  token: null,
  userName: "",
  nombre: "",
};

type LoginPayload = {
  userName: string;
  nombre: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AutState, action: AuthAction): AutState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        userName: "",
        nombre: "",
      };

      break;
    case "login":
      const { nombre, userName } = action.payload;

      return {
        validando: false,
        token: "abc123",
        nombre,
        userName,
      };
      break;
    default:
      return state;
  }
};

export const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        nombre: "Augusto",
        userName: "Gomez",
      },
    });
  };

  const logout = () => {
    dispatch({ type: 'logout' });
  };


  if (state.validando) {
    return (
      <>
        <div className="alert alert-info">
          <span> Validando...</span>
        </div>
      </>
    );
  }
  return (
    <div>
      <h3>Login</h3>
      {state.token ? (
        <div className="alert alert-success">
          {" "}
          Autenticado como {state.nombre} ...{" "}
        </div>
      ) : (
        <div className="alert alert-danger" > No autenticado... </div>
      )}

      {state.token ? (
        <button className="btn btn-danger" onClick={logout}>Logout</button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </div>
  );
};
