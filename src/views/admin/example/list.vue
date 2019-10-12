<template>
  <div class="app-container">
 <div style="height:300px;" class="im">
    <el-scrollbar  >
    	<div style="height: 400px;">
      平台特点33
编辑

    跨平台

Arduino IDE可以在Windows、Macintosh OS X、Linux三大主流操作系统上运行，而其他的大多数控制器只能在Windows上开发。

    简单清晰

Arduino IDE基于processing IDE开发。对于初学者来说，极易掌握，同时有着足够的灵活性。Arduino语言基于wiring语言开发，是对 avr-gcc库的二次封装，不需要太多的单片机基础、编程基础，简单学习后，你也可以快速的进行开发。

    开放性

Arduino的硬件原理图、电路图、IDE软件及核心库文件都是开源的，在开源协议范围内里可以任意修改原始设计及相应代码。

    发展迅速

Arduino不仅仅是全球最流行的开源硬件，也是一个优秀的硬件开发平台，更是硬件开发的趋势。Arduino简单的开发方式使得开发者更关注创意与实现，更快的完成自己的项目开发，大大节约了学习的成本，缩短了开发的周期。
因为Arduino的种种优势，越来越多的专业硬件开发者已经或开始使用Arduino来开发他们的项目、产品；越来越多的软件开发者使用Arduino进入硬件、物联网等开发领域；大学里，自动化、软件，甚至艺术专业，也纷纷开展了Arduino相关课程。 [3] 
功能
编辑
可以快速使用Arduino与Adobe Flash, Processing, Max/MSP, Pure Data, SuperCollider等软件结合，作出互动作品。 Arduino可以使用现有的电子元件例如开关或者传感器或者其他控制器件、LED、步进马达或其他输出装置。 Arduino也可以独立运行，并与软件进行交互，例如： Macromedia Flash, Processing, Max/MSP, Pure Data, VVVV或其他互动软件。 Arduino的IDE界面基于开放源代码，可以免费下载使用，开发出更多令人惊艳的互动作品。 [4-5] 
硬件组成
编辑
主板
Arduino的型号有很多，如
Arduino Uno
Arduino Nano
Arduino Nano
Arduino Nano
Arduino LilyPad
Arduino Mega 2560
Arduino Ethernet
Arduino Due
Arduino Leonardo
ArduinoYún [6-7] 
扩展板
Arduino的扩展板很多，如
Arduino GSM Shield
Arduino GSM Shield Front
Arduino GSM Shield Front
Arduino Ethernet Shield
Arduino Ethernet Shield
Arduino Ethernet Shield
Arduino WiFi Shield
Arduino Wireless SD Shield
Arduino USB Host Shield
Arduino Motor Shield
Arduino Wireless Proto Shield
Arduino Proto Shield
版权与付费
编辑
为了保持设计的开放源码理念，因为版权法可以监管开源软件，却很难用在硬件上，Arduino决定采用Creative Commons许可。 Creative Commons（CC）是为保护开放版权行为而出现的类似GPL的一种许可（license）。在Creative Commons许可下，任何人都被允许生产电路板的复制品，还能重新设计，甚至销售原设计的复制品。你不需要付版税，甚至不用取得Arduino团队的许可。然而，如果你重新发布了引用设计，你必须说明原始Arduino团队的贡献。如果你调整或改动了电路板，你的最新设计必须使用相同或类似的 Creative Commons许可，以保证新版本的Arduino电路板也会一样的自由和开放。唯一被保留的只有Arduino这个名字。它被注册成了商标。如果有人想用这个名字卖电路板，那他们必须付一点商标费用给Arduino的核心开发团队成员。 [8-11]  


       </div>
    </el-scrollbar>
  </div>
<!--  	
  	<div>list</div>
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="Date">
        <template slot-scope="scope">
          <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="Author">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" label="Importance">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.importance" :key="n" icon-class="star" class="meta-item__icon" />
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Status" width="110">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" label="Title">
        <template slot-scope="{row}">
          <router-link :to="'/example/edit/'+row.id" class="link-type">
            <span>{{ row.title }}</span>
          </router-link>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="120">
        <template slot-scope="scope">
          <router-link :to="'/example/edit/'+scope.row.id">
            <el-button type="primary" size="small" icon="el-icon-edit">
              Edit
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>-->

   
  </div>
</template>

<script>
import { fetchList } from '@/api/article'

export default {
  name: 'ArticleList',
  components: {  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      }).catch((err) => {
					// 处理 getJSON 和 前一个回调函数运行时发生的错误
					console.log('发生错误！', err);
					this.listLoading = false
				});
    }
  }
}
</script>

<style scoped>
/*overflow-x: hidden !important;
.el-scrollbar__wrap{
	
	width: 100px;
}*/
.el-scrollbar__wrap {
        overflow-x: hidden;
     
        height: 100%;
    }
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
