<!DOCTYPE html>
<html>
<head>
    <title>Employee Data</title>
</head>
<body>
    <h1>Employee List</h1>
    <?php
    $servername = "localhost"; // or your server's address
    $username = "laptop";
    $password = "Quest35#";
    $dbname = "test";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT emp_no, first_name, last_name FROM employees";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Output data of each row
        while($row = $result->fetch_assoc()) {
            echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Position: " . $row["position"]. " - Salary: " . $row["salary"]. "<br>";
        }
    } else {
        echo "0 results";
    }
    $conn->close();
    ?>
</body>
</html>
