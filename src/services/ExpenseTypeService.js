import FireBaseService from "./FireBaseService";
class ExpenseTypeService {
    instance = null;
    #fb = null;
    dbUpdatedEventName = '';
    constructor() {
        this.#fb = FireBaseService.getInstance();
        this.dbUpdatedEventName = this.#fb.dbUpdatedEventName;
    }
    static getInstance() {
        if (this.instance == null) {
            this.instance = new ExpenseTypeService();
        }
        return this.instance;
    }
    async get() {
        try {
            const data = await this.#fb.getCollection('EXPENSE_TYPES');
            return Promise.resolve(data);
        } catch (error) {
            console.error('Get data error', error);
            return Promise.reject(error);
        }
    }
    async set(data){
        try {
            await this.#fb.set('EXPENSE_TYPES',data);
            return Promise.resolve(data);
        } catch (error) {
            console.error('Set data error', error);
            return Promise.reject(error);
        }
    }
}
export default ExpenseTypeService;