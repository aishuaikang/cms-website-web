module.exports = {
  apps: [
    {
      name: 'cms-website-web',
      script: 'bun',
      args: 'start',
      instances: 'max',  // 使用机器的所有CPU内核
      exec_mode: 'cluster',  // Cluster模式
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
​
