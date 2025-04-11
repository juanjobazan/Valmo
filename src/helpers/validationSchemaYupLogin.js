import * as yup from 'yup'
const loginSchema = yup.object({
    correo_usuario: yup.string().required('El Campo Correo es Requerido').min(5,'El minimo es de 5 Caracteres'),
    password: yup.string().required('El campo Password es Requerido').min(1,'El minimo es de 1 digito').max(99999999999999999999,'El maximo es de 20 numero'),
});

export default loginSchema