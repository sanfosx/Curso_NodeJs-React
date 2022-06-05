class Comentario {

    static cantidadComentarios = 0

    constructor(idImg, nombre, comentario){

        this._idComentario = ++Comentario.cantidadComentarios

        this._idImg = idImg
        this._nombre = nombre
        this._comentario = comentario
    }

    get idcomentario (){
        return this._idComentario
    }

    get idImg (){
        return this._idImg
    }

    get nombre(){
        return this._nombre
    }

    get comentario(){
        return this._comentario
    }

    set idImg(idImg){
        this._idComentario = idImg
    }

    set nombre(nombre){
        this._nombre = nombre
    }

    set comentario(comentario){
        this._comentario = comentario
    }

} 