import * as yup from 'yup'

const productSchema = yup.object({
    nombre: yup.string().required('El Campo Nombre es Requerido').min(5,'El minimo es de 5 Caracteres'),
    precio: yup.number().required('El campo Precio es Requerido').min(1,'El minimo es de 1 digito').max(99999999999999999999,'El maximo es de 20 numero'),
});

export default productSchema