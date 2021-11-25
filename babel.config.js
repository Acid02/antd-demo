module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //配置babel-plugin-import
  plugins: [
    [
      "import",
      {
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: 'css'
      },
      "ant-design-vue"
    ],
    [
      "import",
      {
        libraryName: "@ant-design/icons-vue",
        libraryDirectory: "es",
        style: false,
        libraryDirectory: "",
        camel2DashComponentName: false
      },
      "@ant-design/icons-vue"
    ]
  ]
}
