exports.fn = [
    '$timeout',
    function ($timeout) {
        this.logAfter1s = function (msg) {
            $timeout(function () {
                console.log(msg)
            }, 1000);
        }
        this.data = {
            msg:'hello my friend. this is homepage.'
        }
    }
]