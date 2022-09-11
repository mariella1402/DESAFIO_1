import React from 'react';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { InputComponent } from './components/InputComponent';
import { Layout } from './components/Layout';

const numberRegex=/^[0-9]+$/;
const letterRegex=/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]*$/;

const schema=yup.object().shape({
  nombres:yup.string().required("El nombre es obligatorio").matches(letterRegex,"Solo se permiten letras"),
  apellidos:yup.string().required("El apellido es obligatorio").matches(letterRegex,"Solo se permiten letras"),
  genero:yup.string().required("El genero es obligatorio").matches(letterRegex,"Solo se permiten letras"),
  dui:yup.string()
          .matches(numberRegex,"Solo se permiten numeros")
          .min(9,"El dui tiene que tener por lo menos 9 digitos")
          .max(10,"El dui tiene que tener como maximo 10 digitos")
          .required("El dui es obligatorio"),
  fecha:yup.string().required("La fecha es obligatoria"),
  nacionalidad:yup.string().required("La nacionalidad es obligatoria").matches(letterRegex,"Solo se permiten letras"),
  direccion:yup.string().required("La direccion es obligatoria"),
  municipio:yup.string().required("El municipio es obligatoria").matches(letterRegex,"Solo se permiten letras"),
  departamento:yup.string().required("El departamento es obligatoria").matches(letterRegex,"Solo se permiten letras"),
})

const Formulario = () => {
const navigate =useNavigate()
const {register,handleSubmit,formState:{errors}}=useForm({
  defaultValues:{
    nombres:'',
    apellidos:'',
    genero: '',
    dui:'',
    fecha:'',
    nacionalidad:'',
    direccion:'',
    municipio:'',
    departamento:''
  },
  resolver:yupResolver(schema)
})


const enviarDatos = (datos) => {
  localStorage.setItem('datos',JSON.stringify(datos))
  navigate('/registro')
}

  return (
   <Layout>
     <form  onSubmit={handleSubmit(enviarDatos)}>
        <div className='row'> 
        
        <div className='col-md-12' class="col text-center" >
            
            <InputComponent
            label="Nombres"
              register={register('nombres')}
              error={errors?.nombres?.message}
              placeholder="Ingrese los nombres"
            />
            <InputComponent
            label="Apellidos"
              register={register('apellidos')}
              error={errors?.apellidos?.message}
              placeholder="Ingrese los apellidos"
            />
            <InputComponent
            label="Genero"
              register={register('genero')}
              error={errors?.genero?.message}
              placeholder="Ingrese El genero"
            />
            <InputComponent
            label="Dui"
              register={register('dui')}
              error={errors?.dui?.message}
              placeholder="Ingrese el Dui"
            />
            <InputComponent
            label="Fecha de nacimiento"
            type="date"
              register={register('fecha')}
              error={errors?.fecha?.message}
              placeholder="Ingrese la fecha de nacimiento"
            />
            <InputComponent
            label="Nacionalidad"
              register={register('nacionalidad')}
              error={errors?.nacionalidad?.message}
              placeholder="Ingrese la nacionalidad"
            />
            <InputComponent
            label="Direccion"
              register={register('direccion')}
              error={errors?.direccion?.message}
              placeholder="Ingrese la direccion"
            />
            <InputComponent
            label="Municipio"
              register={register('municipio')}
              error={errors?.municipio?.message}
              placeholder="Ingrese el municipio"
            />
            <InputComponent
            label="Departamento"
              register={register('departamento')}
              error={errors?.departamento?.message}
              placeholder="Ingrese El departamento"
            />
            <a href='Registro.js'><button  className='btn btn-primary my-3' type='submit'>REGISTRAR</button></a>
        </div>
        </div>
     </form>
    </Layout>
  );
};
export default Formulario;
