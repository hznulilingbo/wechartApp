// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    formSubmit:function(e) {
        wx.request({
          url: 'https://www.dosmart.top:10001/business/login',
          data: {
              username: e.detail.value.username,
              password: e.detail.value.password,
          },
          header: {
              'content-type': 'application/json'
          },
          success: function(res) {
            console.log(res.data);
            //if (res.data.status == NaN) {
                wx.showToast({
                  title: '登录成功',
                  icon: 'success',
                  duration: 20000,
                  success: function() {
                      setTimeout(function(){
                          wx.switchTab({
                            url: '../index/index',
                          })
                      }, 2000)
                  }
                })
            //}
          }
        })
    }
})