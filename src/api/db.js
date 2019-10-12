import request from '@/utils/request'
import { DBName } from '@/settings'
export function getList(data) {
data['db']=DBName
	return request({
		url: '/db/req',
		method: 'post',
		data
	})
}

export function saveData(name,obj) {
	
	var data={"db":DBName,"name":name,"data":obj}
	console.log(obj)
	return request({
		url: '/db/save',
		method: 'post',
		data
	})
}

export function getObj(id) {

	return request({
		url: '/db/req',
		method: 'post',
		data
	})
}


