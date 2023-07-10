module.exports = {
  apps: [
    {
      name: 'nextjs-app', // The name of your Next.js app
      script: 'yarn', // The script to start the app
      args: 'start', // The arguments to pass to the script
      cwd: '/home/ec2-user/backoffice', // The directory where the app is located
      watch: true, // Enable file watching and automatic restarts
      env: {
        NODE_ENV: 'production', // Set the environment to production
      },
    },
    {
      name: 'nestjs-app', // The name of your NestJS app
      script: 'npm', // The script to start the app
      args: 'run start:prod', // The arguments to pass to the script
      cwd: '/home/ec2-user/EGTS', // The directory where the app is located
      watch: true, // Enable file watching and automatic restarts
      env: {
        NODE_ENV: 'production', // Set the environment to production
      },
    },
  ],
};
