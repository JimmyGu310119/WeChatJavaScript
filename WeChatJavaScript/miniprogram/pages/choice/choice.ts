Page({
  onTapIndex1: function() {
    wx.navigateTo({
      url: '/pages/index_1/index_1'
    });
  },

  onTapIndex2: function() {
    wx.navigateTo({
      url: '/pages/index_2/index_2'
    });
  },

  onTapCamera: function() {
    wx.navigateTo({
      url: '/pages/camera/camera' // 跳转到拍照页面
    });
  }
});
