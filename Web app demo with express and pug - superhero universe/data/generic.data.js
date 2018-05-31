module.exports = {
    Data: class Data {
        constructor(Model, includes = []) {
            this.Model = Model;
            this.includes = includes;
        }
        getAll() {
            return this.Model.findAll();
        }
        getById(id) {
            return this.Model.find({
                where: {
                    id: id,
                },
            });
        }
        create(obj) {
            if (this._isObjectValid && !this._isObjectValid(obj)) {
                throw new Error('Invalid object');
            }

            return this.Model.create(obj);
        }
    },
};
