let switches = document.querySelectorAll('.ios-switch');
let priceYearly = document.querySelectorAll('.price-yearly');
let priceMonthly = document.querySelectorAll('.price-monthly');

for (var i = 0; i < switches.length; i++) {
  switches[i].addEventListener('click', function(event) {
    if (this.classList.contains('active')) {
      priceYearly.forEach(x => x.classList.toggle('active'));
      priceMonthly.forEach(x => x.classList.toggle('active'));
      this.classList.remove('active');
    } else {
      priceYearly.forEach(x => x.classList.toggle('active'));
      priceMonthly.forEach(x => x.classList.toggle('active'));
      this.classList.add('active');
    }
  })
}