export default {
  getSCOMAlerts() {
    return data.scom;
  },
  getSite24x7Alerts() {
    return data.site24x7;
  },
  getKibanaLogs() {
    return data.kibana;
  }
  // getExample(user, date) {
  //   if (date) {
  //     var dateLimit = Date.parse(date);
  //     return data.recognition.filter((u) => u.submittedFor === user && Date.parse(u.dateSubmitted) > dateLimit);
  //   }
  //   return data.recognition.filter((u) => u.submittedFor === user);
  // },
};

var data = {
  scom: [
    {
      id: '1',
      source: 'CompanyServer04',
      name: 'YourWindowsService is not running',
      description: 'YourWindowsService has crashed or failed to start. Troubleshooting instructions: https://company.com/Your+Windows+Service+Name+Support',
      createDate: '2021-05-09T11:00:00'
    },
    {
      id: '2',
      source: 'CompanyServer01',
      name: 'YourWindowsService is not running',
      description: 'YourWindowsService has crashed or failed to start. Troubleshooting instructions: https://company.com/Your+Windows+Service+Name+Support',
      createDate: '2021-05-09T12:30:00'
    },
    {
      id: '3',
      source: 'CompanyServer03',
      name: 'YourWindowsService is not running',
      description: 'YourWindowsService has crashed or failed to start. Troubleshooting instructions: https://company.com/Your+Windows+Service+Name+Support',
      createDate: '2021-05-09T13:00:00'
    },
    {
      id: '4',
      source: 'CompanyServer05',
      name: 'YourWindowsService is not running',
      description: 'YourWindowsService has crashed or failed to start. Troubleshooting instructions: https://company.com/Your+Windows+Service+Name+Support',
      createDate: '2021-05-09T14:30:00'
    },
    {
      id: '5',
      source: 'CompanyServer02',
      name: 'YourWindowsService is not running',
      description: 'YourWindowsService has crashed or failed to start. Troubleshooting instructions: https://company.com/Your+Windows+Service+Name+Support',
      createDate: '2021-05-09T15:00:00'
    },
    {
      id: '6',
      source: 'CompanyServer01',
      name: 'YourWindowsService wrote an error to the EventLog',
      description: 'YourWindowsService wrote an error to the EventLog and has generated an incident ticket: https://company.com/Your+EventLog+Error+Incident+Ticket+Number',
      createDate: '2021-05-10T23:59:00'
    }
  ],
  site24x7: [{},{}],
  kibana: [{},{}]
};
