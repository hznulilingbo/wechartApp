// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        username: '',
        password: ''
    },

    loginSubmit: function(e) {
        wx.request({
            url: 'https://www.dosmart.top:10001/business/login',
            data: {
                username: this.username,
                password: this.password,
            },
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                console.log(res.data);
                wx.showToast({
                    title: '登录成功',
                    icon: 'success',
                    duration: 20000,
                    success: function() {
                        setTimeout(function() {
                            wx.switchTab({
                                url: '../index/index',
                            })
                        }, 2000)
                    }
                })
            }
        })
    },
    onClickIcon: function(e) {}
})