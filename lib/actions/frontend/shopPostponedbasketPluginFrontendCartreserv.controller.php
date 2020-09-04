<?php

class shopPostponedbasketPluginFrontendCartreservController extends waController
{

    public function execute()
    {
        $id = waRequest::post();
        waLog::log(print_r($id, true), 'logProds.log');




    }

}
