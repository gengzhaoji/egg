'use strict'

const Service = require('egg').Service;
const configJson = require('./config.json')

class UserService extends Service {
    /**查询 */
    async query() {
        const ctx = this.ctx;
        const result = await ctx.curl(configJson.address + '/xts/user/list', {
            // 必须指定 method
            method: 'GET',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
            headers: {
                Authorization: ctx.session.token
            }
        });
        return result.data;
    }
    /**查询单条 */
    async queryid(id) {
        const ctx = this.ctx;
        const result = await ctx.curl(configJson.address + '/xts/user/get/'+ id, {
            // 必须指定 method
            method: 'GET',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
            headers: {
                Authorization: ctx.session.token
            }
        });
        return result.data;
    }
    /**人员创建 */
    async create(payload) {
        const ctx = this.ctx;
        const result = await ctx.curl(configJson.address + '/xts/user/create', {
            // 必须指定 method
            method: 'POST',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            // 参数
            data: payload,
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
            headers: {
                Authorization: ctx.session.token
            }
        });
        return result.data;
    }
    /**人员修改 */
    async modify(payload) {
        const ctx = this.ctx;
        const result = await ctx.curl(configJson.address + '/xts/user/modify', {
            // 必须指定 method
            method: 'POST',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            // 参数
            data: payload,
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
            headers: {
                Authorization: ctx.session.token
            }
        });
        return result.data;
    }
    /**人员删除 */
    async delete(id) {
        const ctx = this.ctx;
        const result = await ctx.curl(configJson.address + '/xts/user/delete/' + id, {
            // 必须指定 method
            method: 'GET',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
            headers: {
                Authorization: ctx.session.token
            }
        });
        return result.data;
    }
    /**密码重置 */
    async resetPassword(payload) {
        const ctx = this.ctx;
        const result = await ctx.curl(configJson.address + '/xts/user/resetPassword', {
            // 必须指定 method
            method: 'POST',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            // 参数
            data: payload,
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            
            dataType: 'json',
            headers: {
                Authorization: ctx.session.token
            }
        });
        return result.data;
    }
}
module.exports = UserService;