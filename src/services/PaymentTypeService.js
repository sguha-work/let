import FireBaseService from "./FireBaseService";
class PaymentTypeService {
    instance = null;
    #fb = null;
    dbUpdatedEventName = '';
    constructor() {
        this.#fb = FireBaseService.getInstance();
        this.dbUpdatedEventName = this.#fb.dbUpdatedEventName;
    }
    static getInstance() {
        if (this.instance == null) {
            this.instance = new PaymentTypeService();
        }
        return this.instance;
    }
    async get() {
        try {
            const data = await this.#fb.getCollection('PAYMENT_TYPES');
            return Promise.resolve(data);
        } catch (error) {
            console.error('Get data error', error);
            return Promise.reject(error);
        }
    }
    async set(data){
        try {
            await this.#fb.set('PAYMENT_TYPES',data);
            return Promise.resolve(data);
        } catch (error) {
            console.error('Set data error', error);
            return Promise.reject(error);
        }
    }
}
export default PaymentTypeService;