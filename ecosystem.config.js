module.exports = {
    apps: [
        {
            name: 'captivating-india-backend',
            cwd: '/var/www/captivationgindia.bvox.in/captivating_india/backend',
            script: 'artisan',
            interpreter: 'php',
            args: 'serve --host=0.0.0.0 --port=8000',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'production'
            }
        },
        {
            name: 'captivating-india-frontend',
            cwd: '/var/www/captivationgindia.bvox.in/captivating_india',
            script: 'npm',
            args: 'run serve-frontend',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '500M',
            env: {
                NODE_ENV: 'production'
            }
        }
    ]
};
