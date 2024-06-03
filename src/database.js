import { createPool } from "mysql2/promise";

const pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'repletos01',
    password: 'repletos01',
    database: 'repletos01'
});

export default pool;