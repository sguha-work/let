class CommonService {
    instance = null;
    static getInstance() {
        if (this.instance == null) {
            this.instance = new CommonService();
        }
        return this.instance;
    }
    runGlobalScript() {
        try {
            window.initiateJS();
        } catch (error) {

        }
    }
}
export default CommonService;