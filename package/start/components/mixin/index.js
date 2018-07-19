const Mixin = {
  data() {
    return {
      isMobile: () => {
        if (
          navigator.userAgent.match(
            /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
          )
        ) {
          /*window.location.href="你的手机版地址";*/
          return true
        } else {
          /*window.location.href="你的电脑版地址";*/
          return false
        }
      }
    };
  }
};

export default Mixin;
