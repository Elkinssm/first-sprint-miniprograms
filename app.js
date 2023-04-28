App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  globalData:{
    urlServiceChat:"https://chat.tncolombia.com.co/apps/ChatClaroNegocios/index.html",
    tokenDetail: "U2FsdGVkX1/igaNe0wMoxrqEdx/ivbleV2MBMDQ7wBWX5GXT7qQaWXXL3cq5c0xfkwMEnVgfM/YcMpPsJUQx0PBbxV4c5Mtn0T7dy8Z5ZHessY7S06xPS2Cq3zrqK6LFOGSMrQxcWA/w7QZotwXHCv21CxUFM6aL4qVU+6OUm/na3PpzkrpzSkCEHMNM6b8qcLmtYj2+wa5OempXLaQQSZO6HXcoCMfwRKZOMy/LEQ0RgSXt4Lqn7lCfXRvIUqpibiUN7ZSWHjoxvKUMtXnVczOGoQV5GzngyR5WLFDEdOximSnaeWZRccDKJdHJsBIG343Cm7ZTVkCHUMSdSLV6CuwmT56v1AhzpeFKpAtUP1xaqjmWSyysZx3iDllbqAiSziLrq+Y86/QavbJumi3Tn8Plq7Mp44iUXQm5hoCxNOB2UGdTwiKVUtdGgRI1ekBvbd6477YLZ/qdid6Chf2bTRv8MngBf9Zpwf0oEHG7DvWqe8VOvq6RpvSJkwKZU/CnHuCMkvCuQQjGbzNQpMPbXTBCsvzkttuk3dhyr/cyQ4QlZY9HuxdmTvpPWxEn18LTwp5t/YbipQXdVtkEXv1xbTuxItei37ZbThvSbL82L9nzRLFGAPBxVDibQ6j73NZF7joKBPTGYW22MRtJLLApmNy/c81fMr9zp05Vv87mXhD/Yo0cUD7a37Y+vaHgI7mAQ7gpN0BwvcgZ1I+up9tNSUzlXn6rjWlo5RvTzNaFSI9A4eVGxIKlDm4n6TbvsvKvwe4lr9iRye/vrXi1Zp2YsV8wSsrIbPfLHm3RReLneh8jb/KzKSy3hf9VPM7MeQTqKGVL4lm6s5mDRuUco8MVdCAVQnEaISlkmm596jWZ6ExAAyyw4oMvaqVBACSCZgh8gQbCTwyxE/KDPVwQo18E7Fi4gKUmaRQCLrRxsINA7Vr8E3I2rrTVhodoZn1tLgSwVxEs9JzjAinO0FjNxZT6Xw\u003d\u003d"
  }
});
