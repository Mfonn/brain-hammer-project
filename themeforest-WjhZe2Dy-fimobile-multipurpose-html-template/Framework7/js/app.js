// Dom7
var $ = Dom7;

// Theme
var theme = 'ios';

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  el: '#app',
  theme,
  // store.js,
  store: store,
  // routes.js,
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});


$(document).on('page:init', function (e) {
  // Do something here when page loaded and initialized for all pages

  /* coverimg */
  $('.coverimg').each(function () {
    var imgpath = $(this).find('img');
    $(this).css('background-image', 'url(' + imgpath.attr('src') + ')');
    imgpath.hide();
  });

  $('.accordion-toggle').on('click', function () {
    $(this).toggleClass('active')
    $(this).closest('.accordion-list').find('.accordion-content').toggleClass('show')
  })

  /* static footer*/

});

$(document).on('page:afterin', function (e) {
  /* scroll from top and add class */
  $('.view-main .page-current .page-content').on('scroll', function () {
    if ($(this).scrollTop() > '10') {
      $('.view-main .navbar-current').addClass('active');
    } else {
      $('.view-main .navbar-current').removeClass('active');
    }
  });

  /* static footer*/
  if ($('.page.page-current .footer').length > 0) {
    $('.view.view-main .page-content').addClass('has-footer');
  } else {
    $('.view.view-main .page-content').removeClass('has-footer');
  }
  $('.centerbutton .nav-link').on('click', function () {
    $(this).toggleClass('active')
  })

});

$(document).on('page:init', '.page[data-name="splash"]', function (e) {
  setTimeout(function () {
    $('.loader-wrap').hide();
  }, 1000);

  setTimeout(function () {
    app.views.main.router.navigate('/landing/');
  }, 4000);
})

$(document).on('page:init', '.page[data-name="thankyouorder"]', function (e) {
  setTimeout(function () {
    app.views.main.router.navigate('/home/');
  }, 3000);
})

$(document).on('page:init', '.page[data-name="landing"]', function (e) {
  var introswiper = new Swiper(".introswiper", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
});

$(document).on('page:init', '.page[data-name="verify"]', function (e) {
  document.getElementById('timer').innerHTML = '03' + ':' + '00';
  startTimer();

  function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) { m = m - 1 }
    if (m < 0) {
      return
    }

    document.getElementById('timer').innerHTML =
      m + ":" + s;
    setTimeout(startTimer, 1000);
  }

  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
    if (sec < 0) { sec = "59" };
    return sec;
  }

});



/* pwa app install */
var deferredPrompt;
window.addEventListener('beforeinstallprompt', function (e) {
  console.log('beforeinstallprompt Event fired');
  e.preventDefault();
  deferredPrompt = e;
  return false;
});



$(document).on('page:init', '.page[data-name="home"]', function (e) {

  /* pwa app install */
  $('#addtohome').on('click', function () {
    if (deferredPrompt !== undefined) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function (choiceResult) {

        if (choiceResult.outcome == 'dismissed') {
          console.log('User cancelled home screen install');
        }
        else {
          console.log('User added to home screen');
        }
        deferredPrompt = null;
      });
    }
  });

  $('.hideonprogressbar').each(function () {
    var thisEl = $(this);
    var hidelment = "." + thisEl.attr('data-target')
    var widthprogress = 1;

    setInterval(function () {
      widthprogress++;
      if (widthprogress > 0 && widthprogress < 100) {
        app.progressbar.set(thisEl, widthprogress);
        // thisEl.find('.progress-bar').css('width', widthprogress + "%");

      } else if (widthprogress === 100) {
        $(hidelment).hide();
      }
    }, 75)

  })

  /* Progress circle */
  var progressCircles1 = new ProgressBar.Circle(circleprogressone, {
    color: '#7297F8',
    // This has to be the same size as the maximum width to
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: '#d8e0f9',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#7297F8', width: 10 },
    to: { color: '#7297F8', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        // circle.setText('');
      } else {
        //  circle.setText(value + "<small>%<small>");
      }

    }
  });
  // progressCircles1.text.style.fontSize = '20px';
  progressCircles1.animate(0.65);  // Number from 0.0 to 1.0

  var progressCircles2 = new ProgressBar.Circle(circleprogresstwo, {
    color: '#3AC79B',
    // This has to be the same size as the maximum width to
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: '#d8f4eb',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#3AC79B', width: 10 },
    to: { color: '#3AC79B', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        //  circle.setText('');
      } else {
        // circle.setText(value + "<small>%<small>");
      }
    }
  });
  // progressCircles2.text.style.fontSize = '20px';
  progressCircles2.animate(0.85);  // Number from 0.0 to 1.0

  /* swiper carousel cardwiper */
  var swiper1 = new Swiper(".cardswiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

  /* swiper carousel connectionwiper */
  var swiper2 = new Swiper(".connectionwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

  /* dark mode switch*/
  $('#darkmodeswitch').on('click', function () {
    if ($(this).is(':checked')) {
      $('html').addClass('theme-dark');
    } else {
      $('html').removeClass('theme-dark');
    }
  });

})

$(document).on('page:init', '.page[data-name="stats"]', function (e) {

  /* date picker  */
  calendarRange = app.calendar.create({
    inputEl: '#daterange',
    rangePicker: true
  });

  $('.daterange-btn').on('click', function () {
    $('#daterange').click();
  });


  /* chart js areachart */
  window.randomScalingFactor = function () {
    return Math.round(Math.random() * 50);
  }
  var areachart = document.getElementById('areachart').getContext('2d');
  var gradient = areachart.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, 'rgba(247, 53, 99, 0.6)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  var myareachartCofig = {
    type: 'line',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'],
      datasets: [{
        label: '# of Votes',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        pointBackgroundColor: '#fff',
        radius: 2,
        backgroundColor: gradient,
        borderColor: '#F73563',
        borderWidth: 2,
        fill: true,
        tension: 0.5,
      }]
    },
    options: {

      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          display: false,
          beginAtZero: true,
        },
        x: {
          grid: {
            display: false
          },
          fontColor: '#cccccc',
        }
      }
    }
  }
  var myAreaChart = new Chart(areachart, myareachartCofig);
  /* my area chart randomize */
  setInterval(function () {
    myareachartCofig.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    myAreaChart.update();
  }, 2000);

  /* chart js doughnut chart */
  var mydoughnutchart = document.getElementById('doughnutchart').getContext('2d');
  var mydoughnut = {
    type: 'doughnut',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: '# of Votes',
        data: [55, 25, 10, 10],
        backgroundColor: ['#FFBD17', '#3AC79B', '#F73563', '#092C9F'],
        borderWidth: 0,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: false,
        title: false
      }
    }
  }
  var mydoughnutchartexe = new Chart(mydoughnutchart, mydoughnut);

  /* Progress circle */
  var progressCircles1 = new ProgressBar.Circle(circleprogress1, {
    color: '#7297F8',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: '#d8e0f9',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#7297F8', width: 10 },
    to: { color: '#7297F8', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        // circle.setText('');
      } else {
        //  circle.setText(value + "<small>%<small>");
      }

    }
  });
  // progressCircles1.text.style.fontSize = '20px';
  progressCircles1.animate(0.65);  // Number from 0.0 to 1.0

  var progressCircles2 = new ProgressBar.Circle(circleprogress2, {
    color: '#3AC79B',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: '#d8f4eb',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#3AC79B', width: 10 },
    to: { color: '#3AC79B', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        //  circle.setText('');
      } else {
        // circle.setText(value + "<small>%<small>");
      }

    }
  });
  // progressCircles2.text.style.fontSize = '20px';
  progressCircles2.animate(0.85);  // Number from 0.0 to 1.0

  /* Progress circle */
  var progressCircles3 = new ProgressBar.Circle(circleprogress3, {
    color: '#F73563',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: '#fdd7e0',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#F73563', width: 10 },
    to: { color: '#F73563', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        // circle.setText('');
      } else {
        //  circle.setText(value + "<small>%<small>");
      }

    }
  });
  // progressCircles1.text.style.fontSize = '20px';
  progressCircles3.animate(0.65);  // Number from 0.0 to 1.0

  var progressCircles4 = new ProgressBar.Circle(circleprogress4, {
    color: '#FFBD17',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: '#fff2d1',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#FFBD17', width: 10 },
    to: { color: '#FFBD17', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        //  circle.setText('');
      } else {
        // circle.setText(value + "<small>%<small>");
      }

    }
  });
  // progressCircles2.text.style.fontSize = '20px';
  progressCircles4.animate(0.85);  // Number from 0.0 to 1.0


  /* chart js areachart */
  var areachart1 = document.getElementById('smallchart1').getContext('2d');
  var gradient1 = areachart.createLinearGradient(0, 0, 0, 66);
  gradient1.addColorStop(0, 'rgba(60, 99, 225, 0.6)');
  gradient1.addColorStop(1, 'rgba(60, 99, 225, 0)');
  var myareachartCofig1 = {
    type: 'line',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
      datasets: [{
        label: '# of Votes',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        radius: 0,
        backgroundColor: gradient1,
        borderColor: '#3c63e2',
        borderWidth: 1,
        fill: true,
        tension: 0.5,
      }]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          display: false,
          beginAtZero: true,
        },
        x: {
          display: false,
        }
      }
    }
  }
  var myAreaChart1 = new Chart(areachart1, myareachartCofig1);
  /* my area chart randomize */
  setInterval(function () {
    myareachartCofig1.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    myAreaChart1.update();
  }, 2000);


  /* chart js areachart */
  var areachart2 = document.getElementById('smallchart2').getContext('2d');
  var gradient2 = areachart.createLinearGradient(0, 0, 0, 66);
  gradient2.addColorStop(0, 'rgba(58, 199, 155, 0.6)');
  gradient2.addColorStop(1, 'rgba(58, 199, 155, 0)');
  var myareachartCofig2 = {
    type: 'line',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
      datasets: [{
        label: '# of Votes',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        radius: 0,
        backgroundColor: gradient2,
        borderColor: '#3ac79b',
        borderWidth: 1,
        fill: true,
        tension: 0.5,
      }]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          display: false,
          beginAtZero: true,
        },
        x: {
          display: false,
        }
      }
    }
  }
  var myAreaChart2 = new Chart(areachart2, myareachartCofig2);
  /* my area chart randomize */
  setInterval(function () {
    myareachartCofig2.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    myAreaChart2.update();
  }, 2000);


  /* chart js areachart */
  var areachart3 = document.getElementById('smallchart3').getContext('2d');
  var gradient3 = areachart.createLinearGradient(0, 0, 0, 66);
  gradient3.addColorStop(0, 'rgba(247, 53, 99, 0.6)');
  gradient3.addColorStop(1, 'rgba(247, 53, 99, 0)');
  var myareachartCofig3 = {
    type: 'line',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
      datasets: [{
        label: '# of Votes',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        radius: 0,
        backgroundColor: gradient3,
        borderColor: '#f73563',
        borderWidth: 1,
        fill: true,
        tension: 0.5,
      }]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          display: false,
          beginAtZero: true,
        },
        x: {
          display: false,
        }
      }
    }
  }
  var myAreaChart3 = new Chart(areachart3, myareachartCofig3);
  /* my area chart randomize */
  setInterval(function () {
    myareachartCofig3.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    myAreaChart3.update();
  }, 2000);

  /* chart js areachart */
  var areachart4 = document.getElementById('smallchart4').getContext('2d');
  var gradient4 = areachart.createLinearGradient(0, 0, 0, 66);
  gradient4.addColorStop(0, 'rgba(255, 189, 23, 0.6)');
  gradient4.addColorStop(1, 'rgba(255, 189, 23, 0)');
  var myareachartCofig4 = {
    type: 'line',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
      datasets: [{
        label: '# of Votes',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        radius: 0,
        backgroundColor: gradient4,
        borderColor: '#ffbd17',
        borderWidth: 1,
        fill: true,
        tension: 0.5,
      }]
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          display: false,
          beginAtZero: true,
        },
        x: {
          display: false,
        }
      }
    }
  }
  var myAreaChart4 = new Chart(areachart4, myareachartCofig4);
  /* my area chart randomize */
  setInterval(function () {
    myareachartCofig4.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    myAreaChart4.update();
  }, 2000);


  /* swiper carousel highlights */
  var swiper1 = new Swiper(".summayswiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });


})

$(document).on('page:init', '.page[data-name="rewards"]', function (e) {
  var swiper1 = new Swiper(".summayswiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

  /* swiper carousel connectionwiper */
  var swiper2 = new Swiper(".connectionwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

  /* swiper carousel cardwiper */
  var swiper3 = new Swiper(".cardswiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

  $('.cardswiper .swiper-slide .card').on('click', function () {
    $('.cardswiper .swiper-slide .card').removeClass('selected');
    $(this).addClass('selected').find('.form-check-input').prop('checked', true);
  });
});


$(document).on('page:init', '.page[data-name="wallet"]', function (e) {
  /* swiper carousel cardwiper */
  var swiper3 = new Swiper(".cardswiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

  /* chart js doughnut chart */
  var mydoughnutchart = document.getElementById('doughnutchart').getContext('2d');
  var mydoughnut = {
    type: 'doughnut',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: '# of Votes',
        data: [55, 25, 10, 10],
        backgroundColor: ['#FFBD17', '#3AC79B', '#f7931a', '#617dea'],
        borderWidth: 0,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: false,
        title: false
      }
    }
  }
  var mydoughnutchartexe = new Chart(mydoughnutchart, mydoughnut);
});
$(document).on('page:init', '.page[data-name="bills"]', function (e) {
  /* swiper carousel connectionwiper */
  var swiper2 = new Swiper(".connectionwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

  /* Progress circle */
  var progressCircles6 = new ProgressBar.Circle(circleprogress6, {
    color: '#7297F8',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: '#d8e0f9',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#7297F8', width: 10 },
    to: { color: '#7297F8', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        // circle.setText('');
      } else {
        //  circle.setText(value + "<small>%<small>");
      }

    }
  });
  // progressCircles1.text.style.fontSize = '20px';
  progressCircles6.animate(0.65);  // Number from 0.0 to 1.0

  var progressCircles7 = new ProgressBar.Circle(circleprogress7, {
    color: '#3AC79B',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: '#d8f4eb',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#3AC79B', width: 10 },
    to: { color: '#3AC79B', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        //  circle.setText('');
      } else {
        // circle.setText(value + "<small>%<small>");
      }

    }
  });
  // progressCircles2.text.style.fontSize = '20px';
  progressCircles7.animate(0.85);  // Number from 0.0 to 1.0
});

$(document).on('page:init', '.page[data-name="sendmoney"]', function (e) {
  /* swiper carousel connectionwiper */
  var swiper2 = new Swiper(".connectionwiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

});
$(document).on('page:init', '.page[data-name="sendmoney1"]', function (e) {
  /* swiper carousel cardwiper */
  var swiper1 = new Swiper(".cardswiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });
  $('.cardswiper .swiper-slide .card').on('click', function () {
    $('.cardswiper .swiper-slide .card').removeClass('selected');
    $(this).addClass('selected').find('.form-check-input').prop('checked', true);
  });
});

$(document).on('page:init', '.page[data-name="sendmoney2"]', function (e) {
  /* swiper carousel cardwiper */
  var swiper1 = new Swiper(".cardswiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });
  $('.cardswiper .swiper-slide .card').on('click', function () {
    $('.cardswiper .swiper-slide .card').removeClass('selected');
    $(this).addClass('selected').find('.form-check-input').prop('checked', true);
  });
});

$(document).on('page:init', '.page[data-name="sendmoney3"]', function (e) {
  /* swiper carousel cardwiper */
  var swiper1 = new Swiper(".cardswiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });
  $('.cardswiper .swiper-slide .card').on('click', function () {
    $('.cardswiper .swiper-slide .card').removeClass('selected');
    $(this).addClass('selected').find('.form-check-input').prop('checked', true);
  });
});

$(document).on('page:init', '.page[data-name="profile"]', function (e) {
  /* swiper carousel highlights */
  var swiper1 = new Swiper(".summayswiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

})

$(document).on('page:afterin', '.page[data-name="blogs"]', function (e) {
  /* swiper carousel projects */
  var swiper12 = new Swiper(".tagsswiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

})
