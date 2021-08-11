<?php

function dd($arr, $is_true = true, $heading = '') {

	if( $heading ) {
		echo "<h2>".$heading."</h2>";
	};

	echo '<pre>';
	print_r($arr);
	echo '</pre>';

	if( $is_true ) {
		exit();
	}
}


function json_response($arr) {

	echo json_encode($arr); exit();
}