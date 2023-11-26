//burger menu
var link = document.querySelector('.nav_icon');
var menu = document.querySelector('.page__header');
var page = document.querySelector('.page__container');
let clsBtn = document.querySelector('.header__close');
link.addEventListener('click', function () {
  // link.classList.toggle('active');
  menu.classList.add('opened');
}, false);
clsBtn.addEventListener('click', function () {
  menu.classList.remove('opened');
});


/*menu*/
const buttons = document.querySelectorAll('.item__caption');
if (buttons) {
buttons.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.classList.toggle('open');
    buttons.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('open');
      }
    });
  });
});
}


/*slider*/
$('.js-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 2
      }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1
    }
  }
]
});

$('.trust__cards').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="12" transform="matrix(-1 0 0 1 12 12)" fill="white" fill-opacity="0.1"/><path d="M10 5L17 12L10 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="white" fill-opacity="0.1"/><path d="M14 5L7 12L14 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  dots: false,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 4
      }
  },
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 3
      }
  },
  {
    breakpoint: 980,
    settings: {
      slidesToShow: 2,
      arrows: false,
      dots: true
    }
  },
  {
    breakpoint: 568,
    settings: {
      slidesToShow: 1,
      arrows: false,
      dots: true
    }
  }
]
});

$('.company__cards').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="12" transform="matrix(-1 0 0 1 12 12)" fill="white" fill-opacity="0.1"/><path d="M10 5L17 12L10 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="white" fill-opacity="0.1"/><path d="M14 5L7 12L14 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  dots: false,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 5
      }
  },
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 4
      }
  },
  {
    breakpoint: 980,
    settings: {
      slidesToShow: 3,
      arrows: false,
      dots: true
    }
  },
  {
    breakpoint: 568,
    settings: {
      slidesToShow: 2,
      arrows: false,
      dots: true
    }
  }
]
});




let flag = true;
$(window).on('resize', function(){
  if ($(this).width() < 569 && flag) {
    flag = false;
    $('.js-slider-mb').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
      arrows: false,
      adaptiveHeight: true,
      variableWidth: true,
      dots: true
    });
  }
  else if ($(this).width() > 568 && !flag) {
    flag = true;
    $('.js-slider-mb').slick('unslick');
  }
}).resize();


/*marquee*/
$('.marquee').marquee({
  direction: 'left',
  speed: 100,
  duplicated: true
})


let site_lang = document.querySelector('body').getAttribute('data-lang');

/*table*/
document.addEventListener('DOMContentLoaded', function () {
  let btnRgt = document.querySelector('.table__btn-right');
  let btnLft = document.querySelector('.table__btn-left');
  let tableCnt = document.querySelector('.auctions__table__content');
  if (tableCnt) {
    btnRgt.onmouseover = function () {
      let start = Date.now();
      let timer = setInterval(function() {
      let timePassed = Date.now() - start;
      // tableCnt.scrollLeft += tableCnt.clientWidth;
      tableCnt.scrollLeft += 10;
      if (timePassed > 1000) clearInterval(timer);
      if (tableCnt.scrollLeft > 20) {
        btnLft.classList.add('show');
      }
      if (tableCnt.scrollLeft > 1320) {
        btnRgt.classList.remove('show');
      }
      // console.log(tableCnt.scrollLeft)
      }, 20);
    };
    btnLft.onmouseover = function () {
      let start = Date.now();
      let timer = setInterval(function() {
      let timePassed = Date.now() - start;
      // tableCnt.scrollLeft -= tableCnt.clientWidth;
      tableCnt.scrollLeft -= 10;
      if (timePassed > 1000) clearInterval(timer);
      if (tableCnt.scrollLeft < 1320) {
        btnRgt.classList.add('show');
      }
      if (tableCnt.scrollLeft < 20) {
        btnLft.classList.remove('show');
      }
      }, 20);
    };
  }
// /*Chart*/
  const canvas = document.querySelector('.chart');
  if(canvas) {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, canvas.width, 0, canvas.height);
    gradient.addColorStop(1, 'rgba(64, 163, 255, 0.5)');
    gradient.addColorStop(0, 'rgba(64, 163, 255, 0)');

    let sended = false;
    sended = true;
    $.ajax({
      method: "POST",
      url: '/api/v1/get_charts',
      data: { lang: site_lang },
      dataType: "json",
    })
    .done(function( data ) {
      sended = false;
      // console.log('DONE');
      // console.log(data);

      let obj = data.chart_datas;

      let params = {
        borderColor: '#40A3FF',
        borderWidth: 2,
        pointBackgroundColor: '#1A2738',
        pointBorderColor: '#40A3FF',
        pointBorderWidth: 2,
        backgroundColor: gradient,
        cubicInterpolationMode: 'monotone',
        fill: true,
        hidden: true // true
      };

      obj.datasets.forEach(item => {
        Object.keys(params).forEach((key,i) => {
          item[key] = Object.values(params)[i];
        });
      });
      
      obj.datasets[0].hidden = false;

      chartInit(ctx, obj, data);

    })
    .fail(function( data ){
      sended = false;
      console.log('FAIL');
      // console.log(data);
    });

  }
}, false);



function chartInit(ctx, obj, requestData){
    // Получение select-a
    const datasetSelect = document.getElementById('dataSelect');
    // Создание элементов в select за счет объекта obj
    obj.datasets.forEach((dataset, index) => {
        const option = document.createElement('option');
        // Добавление id в value option-а
        option.value = index;
        // Заполнение текста option
        option.textContent = dataset.label;
        // Добавление option в select
        datasetSelect.appendChild(option);
      });
    
    // Отслеживание изменения select
    datasetSelect.addEventListener('change', function () {
        // Получение id из select
        const selectedDatasetIndex = datasetSelect.value;

        chart.data.datasets.forEach(function (dataset, index) {
            dataset.hidden = true;
        });

    
        chart.data.datasets[selectedDatasetIndex].hidden = false;
    
        
        // Обновление цен графика
        changePrice(selectedDatasetIndex)

        // Обновление графика
        chart.update();
    });

    var chart = new Chart(ctx,
        {
            type: 'line',
            data: obj,
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    x:{
                        grid: {
                        display: false,
                        color: 'rgba(255, 255, 255, 0.2)'
                        },
                        ticks: {
                        color: '#fff',
                        padding: 10,
                        font: {
                            size: 10
                        }
                        }
                    },
                    y: {
                        grid: {
                        display: true,
                        color: 'rgba(255, 255, 255, 0.2)'
                        },
                        position: 'right',
                        min: 0,
                        // max: 12800,

                        ticks: {
                        color: '#fff',
                        padding: 10,
                        font: {
                            size: 10
                        }
                        }
                    }
                },
                radius: 6,
                plugins: {
                    // legend: {
                    //   align: 'end',
                    //   cursor:"pointer",
                    //   padding: {
                    //     bottom: 60
                    //   },
                    //   // onClick: (e) => e.stopPropagation(),
                    //   onHover: function(event, legendItem) {
                    //     document.querySelector("canvas").style.cursor = 'pointer';
                    //   },
                    //   onClick: function(e, legendItem) {
                    //     var index = legendItem.datasetIndex;
                    //     var ci = this.chart;
                    //     var metaInd = ci.getDatasetMeta(index);
                    //     let date = document.querySelector('.chart-date');
                    //     let price = document.querySelector('.chart-price');
                    //     let arrayPrice = metaInd._dataset.data;
                    //     let lastElemPrice = arrayPrice.slice(-1);
                    //     let chart_desc = document.querySelector('.chart-description');

                    //     ci.data.labels = requestData.chart_labels[index];

                    //     if( requestData.chart_statuses[index] == 'green' ){
                    //       chart_desc.querySelector('.chart_status').classList.remove('chart_decline');
                    //       chart_desc.querySelector('.chart_status').classList.add('chart_growth');
                    //     } else if( requestData.chart_statuses[index] == 'red' ){
                    //       chart_desc.querySelector('.chart_status').classList.add('chart_decline');
                    //       chart_desc.querySelector('.chart_status').classList.remove('chart_growth');
                    //     } else{
                    //       chart_desc.querySelector('.chart_status').classList.remove('chart_decline');
                    //       chart_desc.querySelector('.chart_status').classList.remove('chart_growth');
                    //     }

                    //     ci.data.datasets.forEach(function(e, i) {
                    //       var meta = ci.getDatasetMeta(i);
                    //       meta.hidden = true;
                    //       meta._dataset.hidden = true;
                    //     });
                    //     if (metaInd.hidden == true){
                    //       metaInd.hidden = false;
                    //       metaInd._dataset.hidden = false;
                    //       price.innerHTML = numberWithSpaces(lastElemPrice) + ' ₸';
                    //       date.innerHTML = chart.data.labels.slice(-1);
                    //     }

                    //     ci.update();
                    //   },
                    //   tooltips: {
                    //     custom: function(tooltip) {
                    //       if (!tooltip.opacity) {
                    //         document.querySelector("canvas").style.cursor = 'default';
                    //         return;
                    //       }
                    //     }
                    //   },
                    //   labels: {
                    //     display: false,
                    //     color: '#fff',
                    //     boxWidth: 0,
                    //     font: {
                    //       size: 12
                    //     },
                    //     generateLabels: (chart) => {
                    //       const datasets = chart.data.datasets;
                    //       const {
                    //         labels: {
                    //           usePointStyle,
                    //           pointStyle,
                    //           textAlign,
                    //           color
                    //         }
                    //       } = chart.legend.options;


                    //       total_result = chart._getSortedDatasetMetas().map((meta, i) => {
                    //         const style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
                    //         if(meta._dataset.hidden){
                            
                    //           return {
                    //             text: datasets[meta.index].label,
                    //             fontColor: '#fff', 
                    //             datasetIndex: meta.index
                    //           };
                    //         } else {
                    //           return {
                    //             text: datasets[meta.index].label,
                    //             fontColor: '#40FFB5',
                    //             datasetIndex: meta.index
                    //           };
                    //         }
                    //       }, this);

                    //       return total_result;
                    //     }
                    //   }
                    // }

                    // Скрываем старые datasets
                    legend:{
                        display: false,
                    }
                },
                layout: {
                    padding: {
                        top:100,
                        left:20,
                        bottom:20,
                        right:20
                    }
                }
            },
            plugins: [ 
                {
                    afterInit(chart) {
                    chart.legend._update = chart.legend.update;
                    chart.legend.update = function (...args) {
                        this._update(...args);
                        const padding = { ...(this.options.padding || {}) };
                        this.height += Math.max(0, ~~padding.bottom);
                        this.width += Math.max(0, ~~padding.right);
                    };
                    },
                },
            ]
        }
    );
    // Функция обновления цен
    function changePrice(index = 0){
        // let date = document.querySelector('.chart-date');
        // let price = document.querySelector('.chart-price');
        // let arrayDate = chart.data.labels;
        // // let lastElemDate = arrayDate.slice(-1);
        // let lastElemDate = requestData.chart_labels[index].slice(-1);
        
        // date.innerHTML = lastElemDate;
        // chart.data.datasets.forEach(function(elem, i) {
        //   if(elem.hidden == false) {
        //     let arrayPrice = elem.data;
        //     let lastElemPrice = arrayPrice.slice(-1);
        //     price.innerHTML = numberWithSpaces(lastElemPrice) + ' ₸';
        //   }
        // });
        // let chart_desc = document.querySelector('.chart-description');
        // // console.log(requestData);
        // if( requestData.chart_statuses[index] == 'green' ){
        //   chart_desc.querySelector('.chart_status').classList.remove('chart_decline');
        //   chart_desc.querySelector('.chart_status').classList.add('chart_growth');
        // } else if( requestData.chart_statuses[index] == 'red' ){
        //   chart_desc.querySelector('.chart_status').classList.add('chart_decline');
        //   chart_desc.querySelector('.chart_status').classList.remove('chart_growth');
        // } else{
        //   chart_desc.querySelector('.chart_status').classList.remove('chart_decline');
        //   chart_desc.querySelector('.chart_status').classList.remove('chart_growth');
        // }
        
        var ci = chart;
        var metaInd = ci.getDatasetMeta(index);
        let date = document.querySelector('.chart-date');
        let price = document.querySelector('.chart-price');
        let arrayPrice = metaInd._dataset.data;
        let lastElemPrice = arrayPrice.slice(-1);
        let chart_desc = document.querySelector('.chart-description');

        ci.data.labels = requestData.chart_labels[index];

        if( requestData.chart_statuses[index] == 'green' ){
            chart_desc.querySelector('.chart_status').classList.remove('chart_decline');
            chart_desc.querySelector('.chart_status').classList.add('chart_growth');
        } else if( requestData.chart_statuses[index] == 'red' ){
            chart_desc.querySelector('.chart_status').classList.add('chart_decline');
            chart_desc.querySelector('.chart_status').classList.remove('chart_growth');
        } else{
            chart_desc.querySelector('.chart_status').classList.remove('chart_decline');
            chart_desc.querySelector('.chart_status').classList.remove('chart_growth');
        }

        ci.data.datasets.forEach(function(e, i) {
            var meta = ci.getDatasetMeta(i);
            meta.hidden = true;
            meta._dataset.hidden = true;
        });
        if (metaInd.hidden == true){
            metaInd.hidden = false;
            metaInd._dataset.hidden = false;
            price.innerHTML = numberWithSpaces(lastElemPrice) + ' ₸';
            date.innerHTML = chart.data.labels.slice(-1);
        }

        ci.update();
    }
    changePrice()
}

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/*hide-show*/
$(function() {
  $(".btn-hide").click(function() {
    $(".hidden").css("display", "none");
    $(".btn-hide").css("display", "none");
    $(".btn-display").css("display", "block");
  });
  $(".btn-display").click(function() {
    $(".hidden").css("display", "block");
    $(".btn-hide").css("display", "block");
    $(".btn-display").css("display", "none");
  });
});


/*form*/
function submitForm() {
  $('#form_loader').show()
}
$(document).ready(function(){
  PopUpHide();
});
function PopUpShow(){
  $("#popup").show();
}
function PopUpHide(){
  $("#popup").hide();
}
$('#popup').on("click", function(event){
  var target = event.target;
  if ($(target).hasClass('popup')){
    PopUpHide()
  }
});

let product = document.querySelector('.info-product');
if(product){
  product.addEventListener('change', () => {
  let optionPrd = document.querySelector('.info-product option:checked');
  let prdType = document.querySelectorAll('.product-type')
  prdType.forEach(item => {
    if(item.getAttribute("data-type") == optionPrd.getAttribute("value")) {
      item.style.display = "table-row";
    }
    else {
      item.style.display = "none";
    }
    if(optionPrd.getAttribute("value")== '0') {
      item.style.display = "table-row";
    }
  })


  });
}


let sended = false;
let tabulator = document.querySelector('#example-table');
let cur_lang = document.querySelector('body').getAttribute('data-lang');

if(tabulator) {
  let tableType = document.querySelector('#example-table').getAttribute('data-type');
  window.addEventListener('load', e => {
    if(!sended ){
      sended = true;
      $.ajax({
        method: "POST",
        url: '/api/v1/get_tables_data' ,
        data: { type: tableType, lang: cur_lang },
        dataType: "json",
      })
      .done(function( data ) {
        sended = false;
        tableDataFormat(data);
      })
      .fail(function( data ){
        sended = false;
        alert(data.responseText);
      });
    }
  });


  Tabulator.extendModule("format", "formatters", {
      MoneyFormat:function(cell, formatterParams){
          let num = cell.getValue();
          if(num){
            num = numberWithSpaces(num);
          }
          return num;
      },
      LinksFormat:function(cell, formatterParams){
          let link = cell.getValue();
          if(!link) {
            return '-';
          } else {
            let link_str = link.slice(0, 2);
            if( link_str == 'ht' ){
              return '<a href="'+link+'" download target="_blank"> Скачать </a>';;
            }
            return '<a href="/files/tenders/'+link+'" download target="_blank">' + 'Файл' + '</a>';
          }
      },
      TypeFormat: function(cell, formatterParams){
        let type = cell.getValue();
        type = type.trim().toLowerCase();
        if( type == 'на повышение' ){
          return '&#8593;';
        } else if( type == 'на понижение' ){
          return '&#8595;';
        } else{
          return '-';
        }
      }
  }); 


  Tabulator.extendModule("mutator", "mutators", {
      TestMutator:function(value, data, type, mutatorParams){
        console.log('TestMutator');
        if( value ){
          console.log(value);
          let item = document.createElement('div');
          item.innerHTML = value;
          console.log(item.firstChild);
          
          if( !data.col_zh ){
            data.col_zh = item.firstChild.getAttribute('href');
          }
        }

        return value;
      },
  });

  let specTable = '';

  function tableDataFormat(data){
    // console.log(data)
    let tableType = document.querySelector('#example-table').getAttribute('data-type');
    let tendersSorting = {};
    if( tableType == 'tender' ){
      tendersSorting = {column: data.columns[2].field, dir: 'desc'};
    }

    if( data.status == 1){
      specTable = new Tabulator("#example-table", {
        data: data.data,
        columns: data.columns,
        columnDefaults:{
          minWidth: 200,
          resizable: false,
          tooltip:true,
        },
        locale:data.lang,
        langs:{
            "ru":{
              "data":{
                  "loading":"Загрузка",
                  "error":"Ошибка",
              },
              "pagination":{
                "page_size":"Кол-во строк",
                  "page_title":"Показать страницу",
                  "first":"Первая",
                  "first_title":"Первая страница",
                  "last":"Последняя",
                  "last_title":"Последняя страница",
                  "prev":"Пред",
                  "prev_title":"Предыдущая страница",
                  "next":"След",
                  "next_title":"Следующая Страница",
                  "all":"Все",
                  "counter":{
                      "showing": "Показаны",
                      "of": "из",
                      "rows": "строки",
                      "pages": "страницы",
                  }
              },
          },
          "kz":{
              "data":{
                  "loading":"Жүктеу",
                  "error":"Қате",
              },
              "pagination":{
                "page_size":"Жолдар саны",
                  "page_title":"Бетті көрсету",
                  "first":"Бірінші",
                  "first_title":"Бірінші бет",
                  "last":"Соңғы",
                  "last_title":"Соңғы бет",
                  "prev":"Алдыңғы",
                  "prev_title":"Алдыңғы бет",
                  "next":"Келесі",
                  "next_title":"Келесі бет",
                  "all":"Барлығы",
                  "counter":{
                      "showing": "Көрсетілген",
                      "of": "/",
                      "rows": "жолдар",
                      "pages": "беттер",
                  }
              },
          },
        },
        pagination:"local",
        paginationSize: 10,
        paginationSizeSelector:[10, 20, 50, 100],
        paginationCounter:"rows",
        layout:"fitColumns",
        movableColumns: true,
        initialSort: [tendersSorting]
      });
      if( document.querySelector('.auctions__table') ){
        let btnRgt = document.querySelector('.table__btn-right');
        let btnLft = document.querySelector('.table__btn-left');
        let tableCnt = document.querySelector('.auctions__table .tabulator-tableholder');

        let tbl = document.querySelector('.tabulator-table');
        let tableWh = 0;

        function ScrollRg() {
          if (tableCnt.scrollLeft >= 20) {
            btnLft.classList.add('show');
          }
          if (tableCnt.scrollLeft >= tableWh) {
            btnRgt.classList.remove('show');
          }
        }
        function ScrollLf() {
          if (tableCnt.scrollLeft <= tableWh) {
            btnRgt.classList.add('show');
          }
          if (tableCnt.scrollLeft <= 20 ) {
            btnLft.classList.remove('show');
          }
        }
        btnRgt.onmouseover = function () {
          if( tableCnt ){
            let start = Date.now();
            let timer = setInterval(function() {
            let timePassed = Date.now() - start;
            tableCnt.scrollLeft += 10;
            if (timePassed > 1000) clearInterval(timer);
            ScrollRg();
            }, 20);
          }
        };
        btnLft.onmouseover = function () {
          if( tableCnt ){
            let start = Date.now();
            let timer = setInterval(function() {
            let timePassed = Date.now() - start;
            tableCnt.scrollLeft -= 10;
            if (timePassed > 1000) clearInterval(timer);
            ScrollLf();
            }, 20);
          }
        };

        setTimeout(function(){
          tableCnt = document.querySelector('.auctions__table .tabulator-tableholder');
          tbl = document.querySelector('.tabulator-table');
          tableWh = tbl.offsetWidth - tableCnt.offsetWidth;

          tableCnt.addEventListener('scroll', () => {
            ScrollLf();
            ScrollRg();
          });
          window.addEventListener('resize', ()=> {
            tableWh = tableCnt.offsetWidth;
          });
        }, 500);
      }

    } else {
      alert(data.status_text)
    }

  }
  let filterData = {
    code: '',
    name: '',
    bazis:''
  }
  let filtersInp = document.querySelectorAll('.filters__input');
  // let specTable = document.querySelector('.specific-inner__table');
  if(filtersInp) {
    filtersInp.forEach( input => {
      input.addEventListener('keyup', (e)=> {
        let target = e.target;
        if(target.classList.contains('filters__code')) {
          filterData.code = target.value;
        }
        if(target.classList.contains('filters__name')) {
          filterData.name = target.value;
        }
        if(target.classList.contains('filters__bazis')) {
          filterData.bazis = target.value;
        }
        updateFilter(specTable)
      })
    })
  }
  function updateFilter(table){
    if(table) {
      table.setFilter(
        [
          {field: "col_a", type: "like", value: filterData.code},
          {field: "col_g", type: "like", value: filterData.name}, 
          {field: "col_m", type: "like", value: filterData.bazis}, 
        ]
      )
    }
  }
}
