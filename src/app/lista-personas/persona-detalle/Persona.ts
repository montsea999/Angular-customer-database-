interface IPersona{
    getNombre() :string;
}
export class Persona implements IPersona{

    private nombre: string;
    private  apellido: string;
    private  edad: number;
    private  DNI: string;
    private  cumpleanyos: Date;
    private  colorFavorito: string;
    private  sexo: string;
    private  notas: string;
 
    constructor(nombre: string, apellido: string, edad: number, DNI: string,
        cumpleaños: Date, colorFavorito: string, sexo: string, notas: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.DNI = DNI;
        this.cumpleanyos = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.notas = notas;
 }
  
 public getNombre(): string {
    return this.nombre;
}
public setNombre(a: string) {
    this.nombre = a;
}
public getApellido(): string {
    return this.apellido;
}
public setApellido(a: string) {
    this.apellido = a;
}
public getDNI(): string {
    return this.DNI;
}
public setDNI(a: string) {
    this.DNI = a;
}
public getEdad(): number {
    return this.edad;
}
public setEdad(a: number) {
    this.edad = a;
}  
public getCumpleanyos(): Date  {
    return this.cumpleanyos;
}
public setCumpleanyos(a: Date) {
    this.cumpleanyos = a;
}  
public getColorFavorito(): string {
    return this.colorFavorito;
}
public setColorFavorito(a: string) {
    this.colorFavorito = a;
}
public getSexo(): string {
    return this.sexo;
}
public setSexo(a: string) {
    this.sexo = a;
}  
public getNotas(): string {
    return this.notas;
}
public setNotas(a: string) {
    this.notas = a;
}
 
public imprimeDatos() {
    console.log('Nombre: ', this.nombre);
    console.log('Apellidos: ', this.apellido);
    console.log('Edad: ', this.edad);
    console.log('DNI: ', this.DNI);
    console.log('Cumpleaños: ', this.cumpleanyos.toLocaleDateString());
    console.log('Color Favorito: ', this.colorFavorito);
    console.log('Sexo: ', this.sexo);
    console.log(this.notas);
}
}
 console.log("_____________funciona la clase Persona!!!____________");