//Instrucciones primer ejercicio
function modificarTextoEjercicio1() {
    var div1 = document.getElementById("primer_ejercicio_div");
    div1.style.display = 'block';
    div1.innerHTML="Hola mundo!";
  }
//Instrucciones segundo ejercicio
function modificarTextoEjercicio2() {
    let nombre = document.getElementById("texto_ejercicio_1").value;
    var  div2 = document.getElementById("segundo_ejercicio_div");
    div2.innerHTML = "Hola "+nombre
    div2.style.display= 'block';
  }
//Instrucciones tercer ejercicio
function modificarTextoEjercicio3() {
    let nombre = document.getElementById("texto_ejercicio_2_1").value;
    let apellido = document.getElementById("texto_ejercicio_2_2").value;
    var div3 =document.getElementById("tercer_ejercicio_div");
    div3.innerHTML = "Hola "+nombre+" "+apellido;
    div3.style.display= 'block';
  }
 //Instrucciones cuarto ejercicio
  function modificarTextoEjercicio4() {
    let nombre = document.getElementById("texto_ejercicio_3_1").value;
    let apellido = document.getElementById("texto_ejercicio_3_2").value;
    let edad = document.getElementById("texto_ejercicio_3_3").value;
    var div4 =document.getElementById("cuarto_ejercicio_div");
    div4.innerHTML = "Hola "+nombre+" "+apellido+", tu edad es: "+edad+ " años.";
    div4.style.display= 'block';
  }
//Instrucciones quinto ejercicio
function modificarTextoEjercicio5() {
  let num1 = parseInt( document.getElementById("texto_ejercicio_5_1").value);
  let num2 = parseInt(document.getElementById("texto_ejercicio_5_2").value);

  var div5 =document.getElementById("quinto_ejercicio_div");
  div5.innerHTML = "Los números ingresados son: "+num1+" y "+num2 +", el resultado de su suma es de: "+(num1+num2);
  div5.style.display= 'block';
}
//Instrucciones sexto ejercicio
function modificarTextoEjercicio6() {
  let nombre =  document.getElementById("texto_ejercicio_6_1").value;
  let apellido = document.getElementById("texto_ejercicio_6_2").value;
  let aaa = parseInt(document.getElementById("texto_ejercicio_6_3").value);
  const a2021= 2021;
  var div6 =document.getElementById("sexto_ejercicio_div");
  div6.innerHTML = "Hola "+nombre+" "+apellido+", y tienes: "+(a2021-aaa)+ " años.";
  div6.style.display= 'block';
}
//Instrucciones septimo ejercicio
function modificarTextoEjercicio7() {
  let cantidadAlumnos = parseInt(document.getElementById("texto_ejercicio_7_1").value);
  const mesas= Math.round(cantidadAlumnos/2);//redondeo el valor
  const espacio=4*cantidadAlumnos;
  var div7 =document.getElementById("septimo_ejercicio_div");
  div7.innerHTML = "Para "+cantidadAlumnos+", necesitamos de "+mesas+" mesas y un aula de por lo menos "+espacio+" metros cuadrados.";
  div7.style.display= 'block';
}
//Instrucciones octavo ejercicio
function modificarTextoEjercicio8() {
  let cantidadAlumnos = parseInt(document.getElementById("texto_ejercicio_8_1").value);
  let cantidadProfesoras= parseInt(document.getElementById("texto_ejercicio_8_2").value);
  let cantidadProfesores= parseInt(document.getElementById("texto_ejercicio_8_3").value);

  const montoLapiceras = 117.50*cantidadProfesores;
  const montoRamos = 221.50 * cantidadProfesoras;

  const total = montoLapiceras+montoRamos;
  const pagarAlumnos = Math.round(total/cantidadAlumnos);//redondeo el valor

  var div8 =document.getElementById("octavo_ejercicio_div");
  div8.innerHTML = "Cada alumno debe poner "+pagarAlumnos+" pesos.";
  div8.style.display= 'block';
}
//Instrucciones noveno ejercicio
function modificarTextoEjercicio9() {
  let montoSemanal = parseInt(document.getElementById("texto_ejercicio_9_1").value);
  
  const porDias = Math.round(montoSemanal/5);//redondeo el valor

  var div9 =document.getElementById("noveno_ejercicio_div");
  div9.innerHTML = "Se dispone de "+porDias+" pesos, para cada dia de la semana.";
  div9.style.display= 'block';
}
//Instrucciones décimo ejercicio
function modificarTextoEjercicio10() {
  let numero1 = parseInt(document.getElementById("texto_ejercicio_10_1").value);
  let numero2 = parseInt(document.getElementById("texto_ejercicio_10_2").value);
  let numero3= parseInt(document.getElementById("texto_ejercicio_10_3").value);

  const total = numero1+numero2+numero3;
  const promedio = Math.round(total/3);//redondeo el valor

  var div10 =document.getElementById("decimo_ejercicio_div");
  div10.innerHTML = "El promedio de los tres números es de: "+promedio;
  div10.style.display= 'block';
}

window.onload=function(){
    //Escuchar boton primer ejercicio
    let msg1 = document.querySelector('#primer_ejercicio_boton');
    msg1.addEventListener("click",  modificarTextoEjercicio1, false);
    //Escuchar boton segundo ejercicio
    let msg2 = document.querySelector('#segundo_ejercicio_boton');
    msg2.addEventListener("click",  modificarTextoEjercicio2, false);
    //Escuchar boton tercer ejercicio
    let msg3 = document.querySelector('#tercer_ejercicio_boton');
    msg3.addEventListener("click",  modificarTextoEjercicio3, false);
    let msg4 =document.querySelector('#cuarto_ejercicio_boton');
    msg4.addEventListener("click",  modificarTextoEjercicio4, false);
    let msg5 =document.querySelector('#quinto_ejercicio_boton');
    msg5.addEventListener("click",  modificarTextoEjercicio5, false);
    let msg6 =document.querySelector('#sexto_ejercicio_boton');
    msg6.addEventListener("click",  modificarTextoEjercicio6, false);
    let msg7 =document.querySelector('#septimo_ejercicio_boton');
    msg7.addEventListener("click",  modificarTextoEjercicio7, false);
    let msg8 =document.querySelector('#octavo_ejercicio_boton');
    msg8.addEventListener("click",  modificarTextoEjercicio8, false);
    let msg9 =document.querySelector('#noveno_ejercicio_boton');
    msg9.addEventListener("click",  modificarTextoEjercicio9, false)
    let msg10 =document.querySelector('#decimo_ejercicio_boton');
    msg10.addEventListener("click",  modificarTextoEjercicio10, false)
  }

    
