<?php

$include_path = '/var/Wedding';
include_once $include_path . '/includes/db_functions.php';

$guests = db_select("SELECT * FROM GUESTS");

print_r($guests);
