  
paypal.Buttons({
    style : {
        color: '',
        shape: 'pill'
    },
    createOrder: function (data, actions) {
        return actions.order.create({
            purchase_units : [{
                amount: {
                    value: '24'
                }
            }]
        });
    },
    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
            console.log(details)
            window.location.replace("success.html")
        })
    },
    onCancel: function (data) {
        window.location.replace("item001.html")
    }
}).render('#paypal-pay');