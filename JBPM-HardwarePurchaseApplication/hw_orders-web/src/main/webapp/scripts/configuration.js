'use strict';

console.log("Loading configuration...");


var application = {
    'page_size' : 10,
    'kieserver_container' : 'itorders',
    'kieserver_processId' : '',
    'kieserver_url' : 'http://localhost:8080/rest/server',
    'suppliers' : [
       {'id': 'IBM', 'name': 'IBM'},
       {'id': 'HP', 'name': 'HP'},
       {'id': 'Cisco', 'name': 'Cisco'},
       {'id': 'other', 'name': 'Other'}
   ],
   'managers' : [
      {'id': 'murugan', 'name': 'Murugan'},
      {'id': 'antony', 'name': 'Antony'},
      {'id': 'ganga', 'name': 'Gangadhar'},
      {'id': 'muthukumaran', 'name': 'Muthukumaran'}
   ],
    "roles" : [
        {name: "logistics", value: "Supplier"},
        {name: "muthukumaran", value: "Employee"},
        {name: "murugan", value: "Manager"}
    ]
};
