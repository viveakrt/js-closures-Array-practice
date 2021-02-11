function counterFactory() {
    return {
        count: 0,
        increment: function () {
            this.count++;
        },
        decrement: function() {
            this.count--;
        }
    }
}
