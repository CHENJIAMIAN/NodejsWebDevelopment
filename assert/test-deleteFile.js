const fs = require('fs');
const assert = require('assert');
const df = require('./deleteFile');
df.deleteFile("no-such-file", (err) => {//传入文件名和回调
    assert.throws(
        function () {
            debugger
            if (err) throw err;
        },
        function (error) {
            if ((error instanceof Error)
                && /does not exist/.test(error)) {
                console.log('出错了');
                return true;
            } else return false;
        },
        "unexpected error"
    );
});