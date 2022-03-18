import { ConnectionOptions,PoolOptionBase,DbOptionBase,Escape } from './Db';
import LinSQL from './Query';
export {
	Field,
	JoinType,
	Logic,
	OrderType,
	Table,
} from "./Builder";

export default class linsql {
    private static instance:LinSQL
    public static connect(config:ConnectionOptions) {
		if(!this.instance) {
			this.instance = new LinSQL(config);
		}
		return this.instance
	}
}
export { LinSQL,ConnectionOptions,PoolOptionBase,DbOptionBase,Escape }
