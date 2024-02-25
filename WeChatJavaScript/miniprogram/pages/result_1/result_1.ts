Page({
  data: {
    sum: 0
  },
  onLoad: function(options) {
    this.setData({
      sum: options.sum
    });
  }
});
