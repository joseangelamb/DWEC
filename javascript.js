//Tarea2
function listarArray(){
    var etiquetas = ["Nombre","Apellido 1","Apellido 2","DNI","Módulo","Ciclo","Centro"];
    var fichAlumno = ["José Ángel","Ambrosio","Gómez","123456789","Desarrollo Web en Entorno Cliente","Desarrollo de Aplicaciones Web","FOC"];
    for ( var i = 0; i < etiquetas.length; i++){
        document.write(etiquetas[i] +": "+ fichAlumno[i]+"</br>");
    }
    document.write("</br></br>");
    var j=0;
    while(j<etiquetas.length){
        document.write(etiquetas[j] +": "+ fichAlumno[j]+"</br>");
        j++;
    }
    document.write("</br></br>");
    var k=0;
    do{
        document.write(etiquetas[k] +": "+ fichAlumno[k]+"</br>");
        k++;
    }while(k<etiquetas.length);
    
}
