class Functions {

    throttle(fn, delay, timeout) {

        let last = new Date().getTime();

        return function () {
            let context = this, args = arguments;

            clearTimeout(fn._timer);

            let now = new Date().getTime();

            if (now - last >= timeout) {
                fn.apply(context, args);
                last = now;
            } else {
                fn._timer = setTimeout(function () {
                    fn.apply(context, args);
                }, delay);
            }
        }
    }
}
