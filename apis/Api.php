<?php

class API 
{
	protected $db;

	public function __construct( $connection )
	{
		$this->db = $connection;
	}

	public function authentication($email, $password, $user_type)
	{
		$result = mysqli_query($this->db,"SELECT * FROM users WHERE email='" . $email . "' and password = '". $password."'");
		$count  = mysqli_num_rows($result);
		
		if($count==0) {
			$message = "Invalid Username or Password!";
		} else {
			$message = "You are successfully authenticated!";
		}

		return $message;
	}

}