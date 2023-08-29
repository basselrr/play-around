
  $(document).ready(function() {

     //$('main').addClass('full-width');
     function getTestObject(rm) {
      $.getJSON("renderd.json", function(resp) {
          console.log('getting test object...');
          console.log(resp)
          console.log(resp.data)
      }).done(function(resp) {
          console.log('received test object...');
         // console.log(resp.data);
      }).fail(function() {
          console.log("An error has occurred.");
      });
  }

 

function eo_data(){

  $.getJSON("eo_dashboard.json", function(result){

    console.log(result)


  }).done(function(result){

    $("#employee").DataTable( {
      data: result.data,
      

      columns: [
        { data: "index" },
        { data: "GEO_NAME_EN",
    render:function(data,type,row){
        return '<a href="https://www.google.com">' +data+'</a>'
    } },

        { data: "ER_COUNT_2021-2023", 
    render:function(data,type,row){

        switch(data){
            case 'N/A': return ' No Data';
            default: return data
        }

    }},
        { data: "ER_COUNT_2022-2024" },
        { data: "PT_COUNT_2021-2023",
        render:function(data,type,row){

            switch(data){
                case 'N/A': return ' No Data';
                default: return data
            }
    
        } },
        { data: "PT_COUNT_2022-2024" },
        { data: "RATING_3_STARS" ,
        render: function (data, type, row) {
            switch (data) {
                
              
                case 'Good': return data + ' ' +starRate(3, 3);
                case 'Fair': return data + ' ' +starRate(2, 3);
                case 'Limited': return data + ' ' +starRate(1, 3);
                
                
                case 'Undetermined': return data + ' ' + starRate(0, 3);
                default: return data
            }
           
        } },
        { data: "RATING_5_STARS",
        render: function (data, type, row) {
            switch (data) {
                
                case 'Very Good':
                case 'Very good': return data + ' ' +starRate(5,5);
                case 'Good': return data + ' ' +starRate(4, 5);
                case 'Moderate': return data + ' ' +starRate(3, 5);
                case 'Limited': return data + ' ' +starRate(2, 5);
                case 'Very Limited':
                case 'Very limited': return data + ' ' + starRate(1, 5);
                case 'Undetermined': return data + ' ' + starRate(0, 5);
                default: return data
            }
           
        } },
        
    ]
  } );








   })

}
function nextData(){

    $.getJSON("eo_dashboard.json", function(result){
  
      console.log(result)
  
  
    }).done(function(result){
  
      $("#toy").DataTable( {
        data: result.BC,
        
  
        columns: [
          { data: "index" },
          { data: "GEO_NAME_EN" },
          { data: "ER_COUNT_2021-2023" },
          { data: "ER_COUNT_2022-2024" },
          { data: "PT_COUNT_2021-2023" },
          { data: "PT_COUNT_2022-2024" },
          { data: "RATING_3_STARS" ,
          render: function (data, type, row) {
              switch (data) {
                  
                
                  case 'Good': return data + ' ' +starRate(3, 3);
                  case 'Fair': return data + ' ' +starRate(2, 3);
                  case 'Limited': return data + ' ' +starRate(1, 3);
                  
                  
                  case 'Undetermined': return data + ' ' + starRate(0, 3);
                  default: return data
              }
             
          } },
          { data: "RATING_5_STARS",
          render: function (data, type, row) {
              switch (data) {
                  
                  case 'Very Good':
                  case 'Very good': return data + ' ' +starRate(5,5);
                  case 'Good': return data + ' ' +starRate(4, 5);
                  case 'Moderate': return data + ' ' +starRate(3, 5);
                  case 'Limited': return data + ' ' +starRate(2, 5);
                  case 'Very Limited':
                  case 'Very limited': return data + ' ' + starRate(1, 5);
                  case 'Undetermined': return data + ' ' + starRate(0, 5);
                  default: return data
              }
             
          } },
          
      ]
    } );
  
  
  
  
  
  
  
  
     })
  
  }
   

eo_data()
nextData()
getTestObject()
  

  
      
})//document ready closing 

// Build an empty object to organize the data
// Build an empty object to organize the data
var categorized_data = {
  10: {
      label_en: "Newfoundland and Labrador",
      label_fr: "",
      abbr: "NL",
      current: {
          er: {},
          pt: {}
      },
      previous: {
          er: {},
          pt: {}
      }
  },
  11: {
      label_en: "Prince Edward Island",
      label_fr: "",
      abbr: "PE",
      current: {
          er: {},
          pt: {}
      },
      previous: {
          er: {},
          pt: {}
      }
  },
  12: {
      label_en: "Nova Scotia",
      label_fr: "",
      abbr: "NS",
      current: {
          er: {},
          pt: {}
      },
      previous: {
          er: {},
          pt: {}
      }
  },
  13: {
      label_en: "New Brunswick",
      label_fr: "",
      abbr: "NB",
      current: {
          er: {},
          pt: {}
      },
      previous: {
          er: {},
          pt: {}
      }
  },
  24: {
      label_en: "Quebec",
      label_fr: "",
      abbr: "QC",
      current: {
          er: {},
          pt: {}
      },
      previous: {
          er: {},
          pt: {}
      }
  },
  35: {
      label_en: "Ontario",
      label_fr: "",
      abbr: "ON",
      current: {
          er: {},
          pt: {}
      },
      previous: {
          er: {},
          pt: {}
      }
  },
  46: {
      label_en: "Manitoba",
      label_fr: "",
      abbr: "MB",
      current: {
          er: {},
          pt: {}
      },
      previous: {
          er: {},
          pt: {}
      }
  },
  47: {
      label_en: "Saskatchewan",
      label_fr: "",
      abbr: "SK",
      current: {
          er: {},
          pt: {}
      },
      previous: {
          er: {},
          pt: {}
      }
  },
  48: {
      label_en: "Alberta",
      label_fr: "",
      abbr: "AB",
      current: {
          er: {},
          pt: {}
      },
      previous: {
          er: {},
          pt: {}
      }
  },
  59: {
      label_en: "British Columbia",
      label_fr: "",
      abbr: "BC",
      current: {
          er: {},
          pt: {}
      },
      previous: {
          er: {},
          pt: {}
      }
  },
  60: {
      label_en: "Yukon",
      label_fr: "",
      abbr: "YK",
      current: {
          er: {},
          pt: {}
      },
      previous: {
          er: {},
          pt: {}
      }
  },
  61: {
      label_en: "Northwest Territories",
      label_fr: "",
      abbr: "NT",
      current: {
          er: {},
          pt: {}
      },
      previous: {
          er: {},
          pt: {}
      }
  },
  62: {
      label_en: "Nunavut",
      label_fr: "Nunavut",
      abbr: "NU",
      current: {
          er: {},
          pt: {}
      },
      previous: {
          er: {},
          pt: {}
      }
  },
};

console.log(categorized_data)

var starColors = {
  'very_good': '#27DB50',
  'good': '#B1CC26',
  'moderate': '#EED942',
  'fair': '#EED942',
  'limited': '#E69B36',
  'very_limited': '#C41D1C',
  'undetermined': '#ccc'
}
console.log(starColors)


function rate(n,t){
    var str = '<span>'

    str+='</span>'

    
}

var blockOne = document.getElementById('testing')



// function starRate(n,t){
//     var html =''
 
// for (let i = 0 ; i<t ; i++){
//     if (i < n){

//         html= '<i class="fa-solid fa-star star-'+n+'-'+t+'"></i>';}

//         else{
//             html = '<i class="fa-solid fa-star star-0-'+t+'"></i>';
//         }
//         blockOne.innerHTML += html
        
//         }

//     }
   
    
    function starRate(v, q) {
        var nEmpty = q - v;
        var str = '<span style="display:block;">';
        // uses classes in main.css for colouring the stars .star-[v]-[q]
        for (var i = 0; i < q; i++) {
            if (i < v) {
                str+='<i class="fa fa-star eo-star star-'+v+'-'+q+'"></i>';
            } else {
                str += '<i class="far fa-star eo-star star-0-'+q+'"></i>';
                //str+='<i class="far fa-star star-' + v + '-' + q +'"></i>';
            }
        }
        str+='</span>'
        return str;
    }






starRate(3,5)
function testy(){

    var tets ="HELO"

for ( let i in tets){
    console.log('helo')

    


    


}


}

$(function(){

   
    $("#cta").click(function(){
        $("#employee").slideup("slow")
      });   
   
      
   



})

$(document).ready(function(){
  $("button").click(function(){
    $.get("renderd.json", function(data, status){
        

        for (let i in data.bsm){
            var rtl =""
            
             rtl = '<p>'+"my name is :"+(data.bsm[i].name)+"and I work as :"+(data.bsm[i].position)+'</p><br>';
         
           
             $("#hus").append(rtl)
             rtl +=rtl;
             console.log(rtl)
             

        }
        $("#hus p").click(function(){
            $(this).hide()
            
          })
     
    
      
      
   

     
    });


    
  });

$("#clickTest").click(function(e){
    // e.preventDefault()

    $.post("words.txt",
  {
    name: "Donald Duck",
    city: "Duckburg"
  },
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
})


  

  
});


