jQuery(document).ready(function($) {
console.log('111')

setTimeout(function() {
setTimeout(function() {
$('pre,code').addClass('prettyprint')
prettyPrint()

}, 1000);

console.log('222')
}, 1000);
});
console.log('333')