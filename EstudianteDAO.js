const db= require ('../db');
const Estudiante= require('../models/Estudiante')

class EstudianteDAO {
   async getAll(){
    const [rows]= await db.query('SELECT * FROM Estudiantes;') // Esta sentencia la puedo actualizar segun lo que necesite 
    const estudiantes = [];
    for (let i=0; i< rows.length;i++) {
        const fila = rows[i];
        console.log(rows[i]);
        const estudiante= new Estudiante(fila.id_estudiante,fila.nombre_completo,fila.edad);
        estudiantes.push(estudiante);
    }
    return estudiantes;
   }
   catch (error) {
    console.error("Error en data access object getAll:", error);
    throw error; // Relanzo el error para que lo maneje el controller
  }
  async create(estudiante) {
  try {
    const sql = 'INSERT INTO Estudiantes (nombre_completo, edad) VALUES (?, ?)';
    const [result] = await db.query(sql, [estudiante.nombre_completo, estudiante.edad]);
    return { id: result.insertId, ...estudiante };
  } catch (error) {
    console.error("Error al agregar estudiante:", error);
    throw error;
  }
}
async getById(id) {
  try {
    const [rows] = await db.query(
      'SELECT * FROM Estudiantes WHERE id_estudiante = ?',
      [id]
    );

    if (rows.length === 0) return null;

    const fila = rows[0];
    return new Estudiante(fila.id_estudiante, fila.nombre_completo, fila.edad);
  } catch (error) {
    console.error("Error en el data access object del getby", error);
    throw error;
  }
}
async delete(id) {
  try {
    const sql = 'DELETE FROM Estudiantes WHERE id_estudiante = ?';
    const [result] = await db.query(sql, [id]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error("Error en DAO al eliminar:", error);
    throw error;
  }
}
}
 
module.exports=  new EstudianteDAO();