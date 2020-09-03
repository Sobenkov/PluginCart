<?php
return array(
    'name'     => 'PostponedbasketPlugin',
    'frontend' => true,
    'handlers' => array(
        'order_action.create'   => 'orderActionCreate',
        'order_action.*'        => 'actionHandler',
    ),
    'version'  => '1.0.0',
);
