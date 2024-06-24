// write a function to create a users table in your database.
import { Client } from "pg";
import dotenv from 'dotenv'

dotenv.config();

class Neondb_PG {
  client;

  constructor() {
    this.client = new Client({
      connectionString:process.env.PGNEON_DB_URL,
    });
  }

  async  createUsersTable() {
    await this.client.connect();
    const result = await this.client.query(`
          CREATE TABLE users (
              id SERIAL PRIMARY KEY,
              username VARCHAR(50) UNIQUE NOT NULL,
              email VARCHAR(255) UNIQUE NOT NULL,
              password VARCHAR(255) NOT NULL,
              created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          );
      `);
    console.log(result);
  }

  //-Insert Standered Pratice
  async insertUsersTable(username: string, email: string, password: string){
  try {
      await this.client.connect(); // Ensure client connection is established
      //~ Use parameterized query to prevent SQL injection
      const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
      const values = [username, email, password];
      const res = await this.client.query(insertQuery, values);
      console.log('Insertion success:', res); // Output insertion result
    } catch (err) {
      console.error('Error during the insertion:', err);
    } finally {
      await this.client.end(); // Close the client connection
    }
}

  async getUser(email:string) {
  try {
      await this.client.connect(); // Ensure client connection is established
      const query = 'SELECT * FROM users WHERE email = $1';
      const values = [email];
      const result = await this.client.query(query, values);
      
      if (result.rows.length > 0) {
        console.log('User found:', result.rows[0]); // Output user data
        return result.rows[0]; // Return the user data
      } else {
        console.log('No user found with the given email.');
        return null; // Return null if no user was found
      }
    } 
    catch (err) {
      console.error('Error during fetching user:', err);
      throw err; // Rethrow or handle error appropriately
    } 
    finally {
      await this.client.end(); // Close the client connection
    }
  }

}






// createUsersTable();
// insertUsersTable();
