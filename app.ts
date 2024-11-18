import Db from './src/Db';
const connect = Db.connect({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'test',
})
async function main() {
  let data = await connect.query('SELECT * FROM combat_referrer_hash11 limit 0,10')
  // console.log(data)
  connect.getPool().end()
}
main()
