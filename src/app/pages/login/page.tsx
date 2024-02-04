"use client"
import { FormEvent, useState } from "react";
import { useRouter } from 'next/navigation';
import * as yup from "yup";

export default function Login() {
    const router = useRouter();
    const validationSchema = yup.object().shape({
        name: yup
            .string()
            .required('Nome é requerido')
            .min(3, 'Nome deve conter pelo menos 3 caracteres'),
        email: yup
            .string()
            .required('Email é requerido')
            .email('Email é inválido'),
        password: yup
            .string()
            .required('Senha é requerida')
            .min(8, 'Senha deve conter pelo menos 8 caracteres') 
    })

    const [isLogin, setIsLogin] = useState(false);
    const [validation, setValidation] = useState({name:  '', email: '', password: ''});

    const validarname = async (event: FormEvent ) => {
      event.preventDefault();
      let error = false;

        if (validation.name.length < 3) {
            setValidation({ ...validation, name: 'Nome é requerido e deve conter 3 caracteres' });
            error = true;
        } else {
            setValidation({ ...validation, name: '' });
        }

        if (validation.email === '' || !validation.email.includes('@')) {
            setValidation({ ...validation, email: 'Email é requerido e deve conter @' });
            error = true;
        } else {
            setValidation({ ...validation, email: '' });
        }

        if (validation.password.length < 8) {
            setValidation({ ...validation, password: 'A senha não é válida, deve conter 8 caracteres' });
            error = true;
        } else {
            setValidation({ ...validation, password: '' });
        }

        if (!!error) {
           try {
                const response = await  fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                    userId: 1,
                    name: `${validation.name}`,
                    email: `${validation.email}`,
                    passaword: `${validation.password}`,
                    }),
                    headers: {
                    'Content-type': 'application/json; charset=UTF-8',
              },
                }).then((response) => response.json()).then((json) => console.log(json));
                     router.push('/pages/product')
    } catch (error) {
        
    }
    }
        }
    console.log(validationSchema.validate(validation).then((res) => console.log(res.password)));
    return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
    <form action="enviar" method="post" onSubmit={validarname} className="flex flex-col bg-neutral-600 rounded-md py-4 px-10 w-1/2">
     
        <h1 className="text-2xl font-bold text-center text-orange-500">Login</h1>
     
        <div className='form flex flex-col'>
 
        
            <label className="font-bold" htmlFor="1">Nome</label>
            <input  className="font-bold text-black rounded-md py-2 px-2"  type="text" name="nome" id="1" value={validation.name}  onChange={e => setValidation({...validation, name: e.target.value})}/>
            
            
            <label className="font-bold" htmlFor="2">E-mail</label>
            <input   className="font-bold text-black rounded-md py-2 px-2" type="email" name="email" id="2" value={validation.email} onChange={e=> setValidation({...validation, email: e.target.value})}/>
            
            <label className="font-bold" htmlFor="3">Senha</label>
            <input className="font-bold text-black rounded-md py-2 px-2"  type="password" name="password" id="3" value={validation.password} onChange={e=> setValidation({...validation, password: e.target.value})} />
            {validation.password.length < 8 ? "A senha não e valida, deve conter 8 caracteres" : ""}
        
        </div>
      
        <div className="flex justify-between py-3">
          <button className="w-1/2 text-orange-500" onClick={()=> setIsLogin(!isLogin)}>Cadastrar conta</button>
            |<button className="w-1/2">Esqueci minha senha</button>
       </div>
        <button className="text-white bg-orange-500 py-3 px-4 rounded-md" onClick={validarname}>Entrar</button>
    </form>
</div>
    );
}