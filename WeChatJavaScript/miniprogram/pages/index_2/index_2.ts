Page({
  data: {
    questions: ['您的固色需求是', '您的发蜡使用频率是(次/周)', '您的洗发频率是(次/周)','您的烫染频率是(次/周)'],
    answers: [0],
    currentQuestion: 0,
    question: '',
    answer: 0
  },
  onLoad: function() {
    this.setData({
      question: this.data.questions[this.data.currentQuestion]
    });
  },
  bindKeyInput: function(e) {
    var currentQuestionIndex = this.data.currentQuestion;
    var answers = this.data.answers;
    answers[currentQuestionIndex] = parseInt(e.detail.value);
    this.setData({
        answers: answers
    });
},
  nextQuestion: function() {
    if (Number.isInteger(Number(this.data.answer))) {
      this.data.answers.push(Number(this.data.answer));
      this.setData({
        answer: 0
    });

      if (this.data.currentQuestion < this.data.questions.length) {
        this.setData({
          question: this.data.questions[this.data.currentQuestion],
          currentQuestion: this.data.currentQuestion + 1,
          answer: 0
        });
      } else {
        // 计算答案的总和
        var sum = this.data.answers.reduce(function(total, current) {
          return total + current;
      }, 0);
        // 跳转到 result 页面
        wx.navigateTo({
          url: '/pages/result_2/result_2?sum=' + sum
        });
      }
    } else {
      wx.showToast({
        title: '请填写整数答案！',
        icon: 'none'
      });
    }
  },
  previousQuestion: function() {
    if (this.data.currentQuestion > 0) {
        var currentQuestionIndex = this.data.currentQuestion;
        var answers = this.data.answers;
        answers[currentQuestionIndex] = 0; // 清空上一题的答案
        this.setData({
            currentQuestion: this.data.currentQuestion - 1,
            question: this.data.questions[this.data.currentQuestion-1],
            answer: 0
        });
    }else{
      wx.showToast({
        title: '已经到第一题啦！',
        icon: 'none'
      });
    }

},

});
