import { useForm } from "../hooks/useForm";


export const Formularios = () => {
    const {formulario, onChange } = useForm({
        email: "test@test.com",
        password: "123"
    });

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control is-invalid"
        placeholder="Email"
        value={formulario.email}
        onChange={({target})=>onChange(target.value, 'email')}
      ></input>
      <input
        type="text"
        className="form-control is-invalid mt-2"
        placeholder="Password "
        value={formulario.password}
        onChange={({target})=>onChange(target.value, 'password')}
 
 ></input>
    <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
    </code>
    </>
  );
};
