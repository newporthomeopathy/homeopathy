<?php
if(isset($_POST['sendemail'])){
    $name = ($_POST['name']);
    $email = ($_POST['email']);
    $message = ($_POST['message']);
    $subject = ($_POST['subject']);
    $branch=' cavitasuresh@yahoo.com';

    // Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: Appointment Request<AppointmentRequest@example.com>' . "\r\n";
//$headers .= 'Cc: cavitasuresh@yahoo.com' . "\r\n";
    $msg = "
    <html>
    <head>
    <title>Newport Homeopathy</title>
    </head>
    <body>
    <p>Appointment Request</p>
    <table>
    <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Message</th>
    <th>Subject</th>
    </tr>
    <tr>
    <td>$name</td>
    <td>$email</td>
    <td>$message</td>
    <td>$subject</td>

    </tr>
    </table>
    </body>
    </html>
    ";
    // use wordwrap() if lines are longer than 70 characters
    //$msg = wordwrap($msg,70);
    //$header = 'cc:kkrajadentalclinic@gmail.com';

    // send email
    mail($branch,"Appointment Request",$msg,$headers);
    //exit();
}
?>