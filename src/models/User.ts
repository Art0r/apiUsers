import { SchemaType } from 'mongoose';
import connection from '../../database/connection';

const Model = new connection.Schema({
    email: String,
    name: String,
    age: Number
});

export default Model;