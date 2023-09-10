//ejercicio 1
const arreglo1 = [22,33,10,1]
const suma = arreglo1.reduce((acum,valor) => acum+valor,0) 
console.log('ejercicio1: suma de arreglo ' + arreglo1 + ' resultado: ' + suma )

//ejercicio 2
const arreglo2 = [3,15,10,10]
const producto = arreglo2.reduce((acum,valor) => acum*valor,1) 
console.log('ejercicio2: producto de arreglo ' + arreglo2 + '\nresultado: ' + producto )

//ejercicio 3
const cadenas = ['El curso esta disponible en vhs.','Ademas sera grabado y subido a la web.','El link sera enviado por correo.']
const texto = cadenas.reduce((substr,par) => substr + ' ' + par,'')
console.log('ejercicio2: concatenar cadenas' + '\nresultado: ' + texto )

//ejercicio 4
const arreglo4 = [3,15,10,10]
const promedio = arreglo4.reduce((acum,valor) => acum+valor,0) / arreglo4.length
console.log('ejercicio4: promedio de arreglo ' + arreglo4 + '\nresultado: ' + promedio )

//ejercicio 5
const arreglo5 = [10,15,10,3,2]
const valormax = arreglo5.reduce((umax,valor) =>  valor > umax ? valor:umax,-1) 
console.log('ejercicio5: valormaximo ' + arreglo5 + '\nresultado: ' + valormax )

//ejercicio 6
const arreglo6 = [10,15,10,3,2]
const valorX = 10
const ocurrencias = arreglo6.reduce((acum,valor) => valor == valorX ? acum+1:acum,0) 
console.log('ejercicio6: ocurrencias ' + arreglo6 + '\nresultado: ' + ocurrencias )

//ejercicio 7
const arreglo7 = ['primavera','prueba','hola','sol']
console.log('ejercicio7: sort by lenght ' + arreglo7 + '\nresultado: ' + arreglo7.sort((a,b) => a.length - b.length) )

//ejercicio 8
const arreglo8 = [10,15,11,3,2]
const valorZ = 3
const encontrado = arreglo8.reduce((prev,valor) => valor == valorZ ? true:prev,false) 
console.log('ejercicio8: busca ' + valorZ + ' en ' + arreglo8 + '\nresultado: ' + encontrado )

//ejercicio 9
const arreglo9 =  [10,15,11,3,25,11]
const valorK = 11
const indiceK = arreglo9.reduce((indK,valor,i) => valor == valorK && indK == -1 ? i:indK,-1) 
console.log('ejercicio9: busca indice (1a coinc) de "' + valorK + '" en ' + arreglo9 + '\nresultado: ' + indiceK )

//ejercicio 10
const arreglo99 = [10,15,11,3,25,11]
const valorK99 = 11
const indiceK99 = arreglo99.reduce((indK,valor,i) => valor == valorK99 ? i:indK,-1) 
console.log('ejercicio10: busca indice (ul coinc) de "' + valorK99 + '" en ' + arreglo99 + '\nresultado: ' + indiceK99 )
