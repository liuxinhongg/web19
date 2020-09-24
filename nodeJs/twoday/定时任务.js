const schedule = require('node-schedule');
const scheduleCronstyle = ()=>{
	/* 每分钟的第30秒触发： '30 * * * * *'
	每小时的1分30秒触发 ：'30 1 * * * *'
	每天的凌晨1点1分30秒触发 ：'30 1 1 * * *'
	每月的1日1点1分30秒触发 ：'30 1 1 1 * *'
	2016年的1月1日1点1分30秒触发 ：'30 1 1 1 2016 *'
	每周1的1点1分30秒触发 ：'30 1 1 * * 1' */
	schedule.scheduleJob("30 * * * * *",()=>{
		console.log("scheduleCronstyle"+new Date());
	})
}
scheduleCronstyle()