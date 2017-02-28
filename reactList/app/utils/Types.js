
class Types {

    /**
     * 是否为函数类型
     * @param value *
     * @returns {boolean}
     */
    isFunction(value) {
        return typeof value === 'function';
    }

    /**
     * 是否为数组类型
     * @param value *
     */
    isArray(value) {
        return this.is(value, 'Array');
    }

    /**
     * 检测值是否为指定类型
     * @param type string
     * @param value *
     * @returns {boolean}
     */
    isTypeOf(type, value) {
        return Object.prototype.toString.call(value).includes(type);
    }
}