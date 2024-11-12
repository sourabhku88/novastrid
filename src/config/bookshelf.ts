import bookshelf from "bookshelf";
import knex from "./db.config";

const Bookshelf = bookshelf(knex);
export default Bookshelf;
