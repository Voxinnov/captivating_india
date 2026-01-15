<?php
$host = '127.0.0.1';
$db   = 'captivating_india';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
    echo "Connected successfully to database '$db'!";
} catch (\PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    echo "\nCode: " . $e->getCode();
}
