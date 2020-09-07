<?php

class shopPostponedbasketPluginFrontendCartreservController extends waController
{

    public function execute()
    {
        $id = waRequest::post('id');
        waLog::log(print_r($id, true), 'logProds.log');




    }

}
