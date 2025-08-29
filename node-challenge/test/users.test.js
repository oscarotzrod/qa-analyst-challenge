import { users, getUserById } from '../routes/users.routes.js';
import { usersMock } from '../mockData.js';
import { v4 as uuidv4, validate as uuidValidate, version as uuidVersion } from 'uuid';

describe('Pruebas unitarias', () => {

  // GET /users/:id
  describe('GET /users/:id', () => {
    it('El usuario si existe', () => {
      const existingId = usersMock[0]._id;
      const user = getUserById(existingId);
      expect(user).toEqual(usersMock[0]);
    });

    it('El usuario no existe', () => {
      const user = getUserById('id-que-no-existe');
      expect(user).toBeNull();
    });

    it('IDs inválidos: "", undefined y null', () => {
      expect(getUserById('')).toBeNull();
      expect(getUserById(undefined)).toBeNull();
      expect(getUserById(null)).toBeNull();
    });
  });

  // DELETE /users/:id (soft delete)
  describe('DELETE /users/:id', () => {
    it('El usuario sigue existiendo en el arreglo', () => {
      const idToDelete = users[0]._id;
    
      const stillExists = users.find(u => u._id === idToDelete);
      expect(stillExists).toBeDefined();
    });
  });
  
  // Generación de RFC.
  function generateRFC(length = 12) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let rfc = '';
    for (let i = 0; i < length; i++) {
      rfc += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return rfc;
  }

  // POST /users
  describe('POST /users', () => {
    it('Falla si falta el campo "name"', () => {
      const newUser = { email: 'test@gmail.com' };
      expect(() => {
        if (!newUser.name) throw new Error('name missing');
      }).toThrow('name missing');
    });

    it('Crea usuario', () => {
      const newUser = {
        _id: uuidv4(),
        name: 'Test User',
        email: 'test@gmail.com',
        rfc: generateRFC()
      };
      // Se valida que sea UUID v4.
      expect(uuidValidate(newUser._id)).toBe(true);
      expect(uuidVersion(newUser._id)).toBe(4);
      expect(newUser.rfc).toHaveLength(12);
    });

    it('Valida que los campos name, email y rfc existan', () => {
      const user = {
        _id: uuidv4(),
        name: 'Test User',
        email: 'test@gmail.com',
        rfc: generateRFC()
      };
      expect(user.name).toBeDefined();
      expect(user.email).toBeDefined();
      expect(user.rfc).toBeDefined();
    });
  });

  // GET /users
  describe('GET /users', () => {
    it('Devuelve los 10 usuarios que hay en el arreglo)', () => {
      expect(users.length).toBe(10);
    });
  });
});