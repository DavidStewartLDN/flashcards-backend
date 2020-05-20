const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'flashcards',
  password: 'root',
  port: 5432,
});

const getWords = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM words ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}
const createWord = (body) => {
  return new Promise(function(resolve, reject) {
    const { language, english, native, latin_script } = body
    pool.query('INSERT INTO words (language, english, native, latin_script) VALUES ($1, $2, $3, $4) RETURNING *', [language, english, native, latin_script], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new word has been added: ${english}`)
    })
  })
}
const deleteWord = (id) => {
  return new Promise(function(resolve, reject) {
    pool.query('DELETE FROM words WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Word deleted with ID: ${id}`)
    })
  })
}

module.exports = {
  getWords,
  createWord,
  deleteWord,
}