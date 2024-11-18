import {LinSQL} from './src/index'

let db = new LinSQL({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'test',
});

async function main() {
  let data = await db.query('SELECT * FROM combat_referrer_hash11 limit 0,10')
  // console.log(data)
  db.getPool().end()
}
main()