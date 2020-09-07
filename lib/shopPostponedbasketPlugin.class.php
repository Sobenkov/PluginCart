<?php

class shopPostponedbasketPlugin extends shopPlugin
{

    public function frontendCart()
    {
//        $cart = new shopCart();
//        waLog::log(print_r($cart, true), '111logProds.log');



        $path = wa('shop')->getAppPath('plugins/postponedbasket/templates/cart.html');
        $view = wa()->getView();
        //$thisCountry = shopServicepluginPlugin::generateSelCountry();
        //$view->assign('row', $thisCountry);
        $html = $view->fetch($path);
        return $html;

    }

public function test(){
    waLog::log(print_r('dfrgdg', true), 'logProds.log');
}
    public function frontendProduct()
    {
        $cart_button= array(
            'cart'      => '<button>В корзину</button>',
        );
        return $cart_button;
    }
    public function frontendCategory()
    {
//        $cart_button1= array(
//            'cart'      => '<button>В корзину</button>',
//        );
        return 'custom HTML';
    }



}



