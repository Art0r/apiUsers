import connection from '../../database/connection';

const Model = new connection.Schema({
    name: String,
    age: Number
});

export default Model;