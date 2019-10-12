import request from '@/utils/request'
import { ApiBase } from '@/settings'


export function upload(data) {
	return request({
		url: '/file/upload',
		method: 'post',
		data
	})
}
export function uploadAvatar(id) {
	return ApiBase+"/avatar/upload"
}
export function getAvatar(id) {
	return ApiBase+"/avatar/download?id="+id
}

//
//axios.post('http://127.0.0.1:9001/file/upload', fd).then(function(res) {
//					alert('成功');
//				})