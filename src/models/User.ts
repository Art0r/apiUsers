import connection from '../../database/connection';

const Model = new connection.Schema({
    name: String,
    agr: Number
});

export default Model;