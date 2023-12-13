const db = require('../configs/db');

function createUser(username, email, password) {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

function getUserByUsername(username) {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

function getUserById(userId) {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0]); // Assuming user IDs are unique, so we only return the first result
            }
        });
    });
}
module.exports = {
    createUser,
    getUserByUsername,
    getUserById,
};