/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
switch (hashtags.length) {
	case 0://если массив пуст возвращаем пустую строку
	return '';
	break;
	default:
	return hashtags.map(shiftDown).reduce(uniqueHashtags, []).join(', '); // если не пуст возвращаем это значение строки
	}
function shiftDown(vol){ //переводим все строки массива в нижний регистр
return vol.toLowerCase();
}

function uniqueHashtags(acc, vol) { // собираем в пустой аккумулятор все элементы данного массива, которых еще нет в аккумуляторе
if (acc.indexOf(vol) === -1){
 acc.push(vol);
}
 return acc
}


};
