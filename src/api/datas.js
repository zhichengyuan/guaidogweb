import request from '@/utils/request'

export function getClasses() {
	var param = {
		'db': "gg",
		'name': "classes"
	}
	return request({
		url: '/db/req',
		method: 'post',
		data:param
		
	})

}