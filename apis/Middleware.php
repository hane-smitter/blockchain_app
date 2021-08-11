<?php

require 'Connection.php';
require 'Helpers.php';
require 'Api.php';


$api = new API( $mysqli );


if( isset($_GET['api']) && $_GET['api'] == 'auth')
{
	// dd($_POST, false, "POST");
	
	$is_auth = $api->authentication($_POST['email'], $_POST['password'], $_POST['user_type']);

	json_response([
		'success' => true,
		'message' => $is_auth
	]);
}