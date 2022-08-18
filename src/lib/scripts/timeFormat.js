export function timeFormat(s) {
	var s_num = parseInt(s, 10);
	var hours = Math.floor(s_num / 3600);
	var minutes = Math.floor(s_num / 60) % 60;
	var seconds = s_num % 60;

	return [hours, minutes, seconds]
		.map((v) => (v < 10 ? '0' + v : v))
		.filter((v, i) => v !== '00' || i > 0)
		.join(':');
}
