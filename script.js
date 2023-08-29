// create function to build sublist of provences & teretories(pt) under main list regions(r)
const regions = {


    'Atlantic-Region': ['NB', 'NL', 'PE', 'NS'],
    'Quebec-Region': ['QC'],
    'Ontario-Region': ['ON'],
    'Western-Region': ['BC', 'AB', 'SK', 'MB'],
    'Northern-Region': ['YT', 'NT', 'NU'],


};

function buildList() {
    var str = '<ul>\n';
    let regionArry = Object.keys(regions)

    regionArry.forEach(function(r) {

        let f = regionArry.indexOf(r)
        //console.log(f)
        //str += '<li><input type="checkbox" data-xnumber = "'+f+'"  id="'+r+'" class="list-title ' + r + ' " checked><label> ' + r + '</label>\n<ul>\n' 
        str += '<li><label> ' + r + '</label>\n<ul>\n'

        regions[r].forEach(function(pt) {


            str += '<li class="ul-wrapper"><input type="checkbox" id= "' + pt + '""class="in' + r + '" > <label>' + pt + '</label ></li>\n'
            f += 1
        })

        str += '</ul>\n</li>\n'


    })
    str += '</ul>'

    return str;

}

function getList() {
    var html = buildList()
    var theList = document.getElementById('geo-wrapper')
    // console.log(html)



    //  $('.mylist').append(html);
    theList.innerHTML = html;

}

getList()




//getting main JSON data _0_
function passJsonData() {
    $.getJSON("eo_dashboard.json", function(eodash) {
            console.log('getting test object...');
        })
        .done(function(eodash) {
            console.log('now to receive  object data...');
            console.log('passed Json Data from JSON file=', eodash.data);

            //building PT arry - array for each province xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            var nlArray = eodash.data.filter(function(el) {
                return el.GEO_NAME_EN == "Newfoundland and Labrador";

            })
            console.log(nlArray)

            var peArray = eodash.data.filter(function(el) {
                return el.GEO_NAME_EN == "Prince Edward Island";

            })
            console.log(peArray)


            var nsArray = eodash.data.filter(function(el) {
                return el.GEO_NAME_EN == "Nova Scotia";

            })
            console.log(nsArray)
            var nbArray = eodash.data.filter(function(el) {
                return el.GEO_NAME_EN == "New Brunswick";

            })
            console.log(nbArray)


            var qcArray = eodash.data.filter(function(el) {
                return el.GEO_NAME_EN == "Quebec";

            })
            console.log(qcArray)

            var onArray = eodash.data.filter(function(el) {
                return el.GEO_NAME_EN == "Ontario";

            })
            console.log(onArray)

            var mbArray = eodash.data.filter(function(el) {
                return el.GEO_NAME_EN == "Manitoba";

            })
            var skArray = eodash.data.filter(function(el) {
                return el.GEO_NAME_EN == "Saskatchewan";

            })
            console.log(skArray)

            var abArray = eodash.data.filter(function(el) {
                return el.GEO_NAME_EN == "Alberta";

            })
            console.log(abArray)

            var bcArray = eodash.data.filter(function(el) {
                return el.GEO_NAME_EN == "British Columbia";

            })
            console.log(bcArray)
            var ytArray = eodash.data.filter(function(el) {
                return el.GEO_NAME_EN == "Yukon";

            })
            console.log(ytArray)

            var ntArray = eodash.data.filter(function(el) {
                return el.GEO_NAME_EN == "Northwest Territories";

            })
            console.log(ntArray)
            var nuArray = eodash.data.filter(function(el) {
                return el.GEO_NAME_EN == "Nunavut";

            })
            console.log(nuArray)

            const geoList = ['Newfoundland and Labrador', 'Prince Edward Island', 'Nova Scotia', 'New Brunswick', 'Quebec', 'Ontario', 'Manitoba', 'Saskatchewan', 'Alberta', 'British Columbia', 'Yukon', 'Northwest Territories', 'Nunavut']

            $(document).ready(function() {


                nlArray = []
                for (var geo in geoList) {

                    let arrayitem = geoList[geo]


                    nlArray = eodash.data.filter(function(el) {
                        return el.GEO_NAME_EN == arrayitem;

                    })

                }


            })


            var filteredData = nlArray.concat(peArray).concat(nsArray).concat(nbArray).concat(qcArray).concat(onArray).concat(mbArray).concat(skArray).concat(abArray).concat(bcArray).concat(ytArray).concat(ntArray).concat(nuArray)
            
            //zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz 
            $(document).ready(function() {

                const allPt = ['NB', 'NL', 'PE', 'NS', 'BC', 'AB', 'SK', 'MB', 'YT', 'NT', 'NU', 'QC', 'ON']
                const allPtArry = [nbArray, nlArray, peArray, nsArray, bcArray, abArray, skArray, mbArray, ytArray, ntArray, nuArray, qcArray,onArray]

                console.log(allPtArry)
                const relatedData = [{'NB':nbArray},{'NL':nlArray}, {'PE':peArray},{'NS':nsArray},{'BC':bcArray},{'AB':abArray},{'SK':skArray},{'MB':mbArray},{'YT':ytArray},{'NT':ntArray},{'NU':nuArray},{'QC':qcArray},{'ON':onArray}]
                
        //-------------------------------------
                var theFilteredArry =[]
                var arry =[]
                
                for (let x in relatedData) {

                   
                //console.log(Object.keys(relatedData[x]))
        
        
                    $('#' + Object.keys(relatedData[x])).on('change', function() {
        
                        if (this.checked) {
                            // the checkbox is now checked
                            console.log('checked: ', Object.keys(relatedData[x]))
                            
                            arry = Object.values(relatedData[x])
                            //console.log(arry)
        
        
                            //$('.'+columnClass).show()
        
                        } else {
                            // the checkbox is now no longer checked
                            console.log('unchecked: ', allPt[x])
                            // $('.'+columnClass).hide()
                            arry=[]
                           
        
                        }

                        //theFilteredArry=arry.concat(arry)
                        theFilteredArry.push(arry)
                        console.log(theFilteredArry,Object.keys(relatedData[x]))
                        
        
                    })
                    // theFilteredArry.concat(arry)
                    // console.log(theFilteredArry)
              
                }
        //-------------------------------------
                // for (let x in allPt) {
        
        
                //     $('#' + allPt[x]).on('change', function() {
        
                //         if (this.checked) {
                //             // the checkbox is now checked
                //             console.log('checked: ', allPt[x])
                //             console.log(peArray)
        
        
                //             //$('.'+columnClass).show()
        
                //         } else {
                //             // the checkbox is now no longer checked
                //             console.log('unchecked: ', allPt[x])
                //             // $('.'+columnClass).hide()
                //             nlArray = []
        
                //         }
        
                //     })
                // }
                //------------------------------
        
            })
        
            //add checkbox event listener  _1_ 

        })
        .fail(function() {
            console.log("An error has occurred.");
        })
        .then(function() {
            console.log('then')
        });

    //add checkbox event listener  -0-
   


}
//getting main JSON data _1_

//getting selected data _0_



passJsonData()




//getting selected data _1_

// //getting selected data _0_

// function passSelectedData(eodash) {
//     passJsonData()
//     $.getJSON("eo_dashboard.json", function(eodash) {
//             console.log('getting test object...');
//         })
//         .done(function(eodash) {
//             console.log('now to receive  object data...');
//             console.log('main data=', eodash.data);


//             //building PT arry - array for each province xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//             var nlArray = eodash.data.filter(function(el) {
//                 return el.GEO_NAME_EN == "Newfoundland and Labrador";

//             })
//             console.log(nlArray)

//             var peArray = eodash.data.filter(function(el) {
//                 return el.GEO_NAME_EN == "Prince Edward Island";

//             })
//             console.log(peArray)

//             var nsArray = eodash.data.filter(function(el) {
//                 return el.GEO_NAME_EN == "Nova Scotia";

//             })
//             console.log(nsArray)

//             $(document).ready(function() {

//                 const allPt = ['NB', 'NL', 'PE', 'NS', 'BC', 'AB', 'SK', 'MB', 'YT', 'BT', 'NU', 'QC', 'ON']




//             })




//             var filteredData = nlArray.concat(peArray).concat(nsArray);

//             console.log("filtered data1 =", filteredData)




//             //zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz               
//         })
//         .fail(function() {
//             console.log("An error has occurred.");
//         })
//         .then(function() {
//             console.log('then')
//         });
// }

// //getting selected data _1_


var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ]
    }
});
require.config({
    baseUrl: '/js',
    paths: {
      d3: "http://d3js.org/d3.v5.min"
    }
  });
  
  require(["d3", "c3"], function(d3, c3) {
    c3.generate({
      ...
    });
  });