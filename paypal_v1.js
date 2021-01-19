function initPayPalButton() {
  paypal.Buttons({
    style: {
      shape: 'rect',
      color: 'gold',
      layout: 'vertical',
      label: 'paypal',
      
    },

    createOrder: function(data, actions) {
      let amount = document.querySelector('.display-chosen-price').textContent;
      if (isNaN(amount)) {
        return false;
      }
      return actions.order.create({
        purchase_units: [{"amount":{"currency_code":"EUR","value":amount}}]
      });
    },

    onClick: function() {
      document.getElementById('cancel').style.display = 'none';
    },

    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        window.location.href = 'https://hopemediasolidaire.fr/faire-un-don/paiement-reussi/';
      });
    },

    onCancel: function(data, actions) {
      document.getElementById('cancel').style.display = 'block';
    },

    onError: function(err) {
      console.log(err);
    }
  }).render('#paypal-button-container');
}
initPayPalButton();