let student = {name: 'ChenYi'};
function fn(){
    console.log('fn');
}
module.exports = {student, fn};
exports.fn = fn;
exports.student = student;