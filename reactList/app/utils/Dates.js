import dateFormat from 'dateformat';

class DateUtil {

    format(date, format) {
        return dateFormat(date, format);
    }

    test() {
        let date = new Date();
        console.log(this.format(date, 'yyyy-MM-dd'));
    }
}

export default DateUtil;