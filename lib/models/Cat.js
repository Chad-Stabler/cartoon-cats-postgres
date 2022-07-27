const pool = require('../utils/pool');

module.exports = class Cat{
    id;
    name;
    age;
    type;
    year;
    lives;
    isSideKick;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.type = row.type;
        this.year = row.year;
        this.lives = row.lives;
        this.isSideKick = row.isSideKick;
    }

    static async getAll() {
        const { rows } = await pool.query('select * from cats;');
        return rows.map(row => new Cat(row));
    }
}