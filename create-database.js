/**
 * Script to create MySQL database without needing mysql CLI
 * Run with: node create-database.js
 * 
 * Make sure you have mysql2 installed: pnpm add mysql2
 */

const mysql = require('mysql2/promise');

async function createDatabase() {
  // Get connection details from environment or use defaults
  const connectionString = process.env.DATABASE_URI || 'mysql://root:password@localhost:3306';
  
  // Parse connection string (remove database name if present)
  const url = new URL(connectionString);
  const config = {
    host: url.hostname,
    port: parseInt(url.port) || 3306,
    user: url.username || 'root',
    password: url.password || '',
  };

  const databaseName = 'captivating_india';

  try {
    console.log('🔌 Connecting to MySQL server...');
    // Connect to MySQL (without specifying database)
    const connection = await mysql.createConnection(config);
    
    console.log('✅ Successfully connected to MySQL server');
    
    // Check if database already exists
    const [databases] = await connection.execute(
      'SHOW DATABASES LIKE ?',
      [databaseName]
    );
    
    if (databases.length > 0) {
      console.log(`✅ Database "${databaseName}" already exists!`);
      await connection.end();
      return;
    }
    
    // Create database
    console.log(`📦 Creating database "${databaseName}"...`);
    await connection.execute(
      `CREATE DATABASE ${databaseName} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
    );
    
    console.log(`✅ Database "${databaseName}" created successfully!`);
    console.log('');
    console.log('Next steps:');
    console.log('1. Update your .env.local file with:');
    console.log(`   DATABASE_URI=mysql://${config.user}:${config.password}@${config.host}:${config.port}/${databaseName}`);
    console.log('2. Run: pnpm dev');
    console.log('3. Payload CMS will automatically create all tables');
    
    await connection.end();
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('');
    console.log('Troubleshooting:');
    console.log('1. Make sure MySQL server is running');
    console.log('2. Check your connection details:');
    console.log(`   Host: ${config.host}`);
    console.log(`   Port: ${config.port}`);
    console.log(`   User: ${config.user}`);
    console.log('3. Create a .env.local file with:');
    console.log('   DATABASE_URI=mysql://root:yourpassword@localhost:3306');
    console.log('4. Or set environment variable:');
    console.log('   $env:DATABASE_URI="mysql://root:password@localhost:3306"');
  }
}

createDatabase();

