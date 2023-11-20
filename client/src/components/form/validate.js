const regexSoloLetras= /^[a-zA-Z]+$/
const regexSoloNumeros= /^([0-9])*$/
const regexSoloNumerosyGuion= /^[0-9-]+$/

export default function validate (form) {
    let errors = {}

    if (!form.name) {
        errors.name1= "No puede estar vacío"
    }
    if(!regexSoloLetras.test(form.name)) {
        errors.name2="Sólo se permiten letras"
    }
    if(!form.minHeight && !form.maxHeight) {
        errors.height1="No puede estar vacío"
    }
    if(!regexSoloNumeros.test(form.minHeight) || !regexSoloNumeros.test(form.maxHeight)) {
        errors.height2="Este campo admite sólo números"
    }
    if(Number(form.minHeight)>Number(form.maxHeight)) {
        errors.height3="Altura mínima no puede superar a la altura máxima"
    }
    if(!form.minWeight && !form.maxWeight) {
        errors.weight1="No puede estar vacío"
    }
    if(!regexSoloNumeros.test(form.minWeight) || !regexSoloNumeros.test(form.maxWeight)) {
        errors.weight2="Este campo admite sólo números"
    }
    if(Number(form.minWeight)>Number(form.maxWeight)) {
        errors.weight3="Peso mínimo no puede superar al peso máximo"
    }
    if(!regexSoloNumerosyGuion.test(form.life_span)) {
        errors.life_span="Este campo admite sólo números y guion medio"
    }

    return errors
}