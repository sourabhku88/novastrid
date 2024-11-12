import { Model } from 'bookshelf';
import knexConfig from '../config/knexfile';
import knex from '../config/db.config';
import Bookshelf from '../config/bookshelf';

class User extends Bookshelf.Model<any>{
    get tableName() {
        return "users"
    }
    // tableName = "users";
    idAttribute = "id";
}

export default Bookshelf.model('user', User);