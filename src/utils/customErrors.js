// Define una clase de error personalizado
export class NoResultsError extends Error {
  constructor (message) {
    super(message)
    this.name = 'NoResultsError' // Nombre del error
    this.statusCode = 404 // Código de estado HTTP (opcional)
  }
}
