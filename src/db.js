import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('post.db');

export class DB {
    static init() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS posts2 (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, text TEXT NOT NULL, img TEXt, date TEXt, booked INT)',
                    [],
                    resolve,
                    (_, error) => reject(error),
                );
            });
        });
    }

    static getPosts = () => {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'SELECT * FROM posts2',
                    [],
                    (_, result) => resolve(result.rows._array),
                    (_, error) => reject(error),
                );
            });
        });
    };
    static createPost = ({ title, text, date, img }) => {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'INSERT INTO posts2(text, title, date, booked, img) VALUES (?, ?, ?, ?, ?)',
                    [text, title, date, 0, img],
                    (_, result) => resolve(result.insertId),
                    (_, error) => reject(error),
                );
            });
        });
    };

    static updatePost = post => {
        console.log(post);
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'UPDATE posts2 SET booked = ? WHERE  id = ?',
                    [post.booked ? 0 : 1, post.id],
                    resolve,
                    (_, error) => reject(error),
                );
            });
        });
    };

    static removePost = id => {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql('DELETE FROM posts2 WHERE  id = ?', [id], resolve, (_, error) => reject(error));
            });
        });
    };
}
