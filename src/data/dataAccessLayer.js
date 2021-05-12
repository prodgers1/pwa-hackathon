/* eslint-disable import/no-anonymous-default-export */
export default {
  getSCOMAlerts() {
    return data.scom;
  },
  getSite24x7Alerts() {
    return data.site24x7;
  },
  getKibanaLogs() {
    return data.kibana;
  },
  getBillingAgentData() {
    return data.billingAgent;
  },
  getLoadBalancers() {
    return data.loadbalancers;
  },
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
      source: 'CompanyServer03',
      name: 'YourWindowsService is not running',
      description:
        'YourWindowsService has crashed or failed to start.',
      createDate: '2021-05-09T11:00:00',
    },
    {
      id: '2',
      source: 'CompanyServer01',
      name: 'MyWindowsService is not running',
      description:
        'MyWindowsService has crashed or failed to start.',
      createDate: '2021-05-10T12:30:00',
    },
    {
      id: '3',
      source: 'CompanyServer01',
      name: 'MyWindowsService wrote an error to the EventLog',
      description: 'MyWindowsService wrote an error to the EventLog and has generated indicent #1100223.',
      createDate: '2021-05-10T12:31:00',
    },
    {
      id: '4',
      source: 'CompanyServer03',
      name: 'YourWindowsService wrote an error to the EventLog',
      description: 'YourWindowsService wrote an error to the EventLog and has generated indicent #1100334.',
      createDate: '2021-05-10T11:01:00',
    },
    {
      id: '5',
      source: 'CompanyServer02',
      name: 'SomeWindowsService is not running',
      description:
        'SomeWindowsService has crashed or failed to start.',
      createDate: '2021-05-09T13:00:00',
    },
    {
      id: '6',
      source: 'CompanyServer02',
      name: 'SomeWindowsService wrote an error to the EventLog',
      description: 'SomeWindowsService wrote an error to the EventLog and has generated indicent #1100445.',
      createDate: '2021-05-09T13:01:00',
    },
  ],
  site24x7: [
    {
      id: '1',
      businessUnit: 'Your-Company-BU-Name',
      name: 'App 1 Health Check',
      monitorUrl: 'https://app1.company.com/v1/healthcheck',
      availability: '100%',
      responseTime: '0.125 sec',
      downtimes: '0',
      lastPolled: '2 min'
    },
    {
      id: '2',
      businessUnit: 'Your-Company-BU-Name',
      name: 'App 2 Health Check',
      monitorUrl: 'https://10.0.0.1/health',
      availability: '100%',
      responseTime: '0.068 sec',
      downtimes: '0',
      lastPolled: '3 min'
    },
    {
      id: '3',
      businessUnit: 'Your-Company-BU-Name',
      name: 'App 3 Health Check',
      monitorUrl: 'https://app3.company.com/pulse',
      availability: '99%',
      responseTime: '0.092 sec',
      downtimes: '1',
      lastPolled: '1 min'
    },
    {
      id: '4',
      businessUnit: 'Your-Company-BU-Name',
      name: 'App 4 Health Check',
      monitorUrl: 'https://app4.company.com/v1/health',
      availability: '100%',
      responseTime: '0.077 sec',
      downtimes: '0',
      lastPolled: '5 min'
    },
    {
      id: '5',
      businessUnit: 'Your-Company-BU-Name',
      name: 'App 5 Health Check',
      monitorUrl: 'https://app5.company.com/v1/healthcheck',
      availability: '99%',
      responseTime: '0.105 sec',
      downtimes: '1',
      lastPolled: '9 min'
    }
  ],
  kibana: [
    {
      id: '1',
      source: {
        timestamp: '2021-05-10T11:52:24',
        eventSource: 'aws:kinesis',
        message: 'hello world from fluentd',
        ecs: {
          version: '1.5.0',
        },
        aws_region: 'us-west-2',
        cloud: {
          provider: 'aws',
          region: 'us-west-2',
        },
        host: {
          name: '10.2.3.4',
        },
      },
    },
    {
      id: '2',
      source: {
        timestamp: '2021-05-11T11:52:18',
        eventSource: 'aws:kinesis',
        message: 'hello world from fluentd',
        ecs: {
          version: '1.5.0',
        },
        aws_region: 'us-west-2',
        cloud: {
          provider: 'aws',
          region: 'us-west-2',
        },
        host: {
          name: '10.2.3.4',
        },
      },
    },
    {
      id: '3',
      source: {
        timestamp: '2021-05-11T11:52:09',
        eventSource: 'aws:kinesis',
        message: 'hello world from fluentd',
        ecs: {
          version: '1.5.0',
        },
        aws_region: 'us-west-2',
        cloud: {
          provider: 'aws',
          region: 'us-west-2',
        },
        host: {
          name: '10.2.3.4',
        },
      },
    },
    {
      id: '4',
      source: {
        timestamp: '2021-05-11T11:51:57',
        eventSource: 'aws:kinesis',
        message: 'hello world from fluentd',
        ecs: {
          version: '1.5.0',
        },
        aws_region: 'us-west-2',
        cloud: {
          provider: 'aws',
          region: 'us-west-2',
        },
        host: {
          name: '10.2.3.4',
        },
      },
    },
  ],
  billingAgent: [
    {
      batchCount: 0,
      inProgessCount: 0,
      successCount: 0,
      failureCount: 0,
      queueTotal: 0,
      date: '2021-05-08T00:00:00',
      transactionCount: 333839,
    },
    {
      batchCount: 0,
      inProgessCount: 0,
      successCount: 0,
      failureCount: 0,
      queueTotal: 0,
      date: '2021-05-09T00:00:00',
      transactionCount: 231524,
    },
    {
      batchCount: 490021,
      inProgessCount: 0,
      successCount: 490000,
      failureCount: 2,
      queueTotal: 490002,
      date: '2021-05-10T00:00:00',
      transactionCount: 218453,
    },
    {
      batchCount: 74896,
      inProgessCount: 0,
      successCount: 74895,
      failureCount: 0,
      queueTotal: 74895,
      date: '2021-05-11T00:00:00',
      transactionCount: 143246,
    },
  ],
  loadbalancers: [
    {
      name: 'DRPNWMMCLMAIN',
      status: 'C',
      capacity: '90%',
      connections: '146',
      inTransition: false,
    },
    {
      name: 'DRPNWMMCLDR',
      status: 'A',
      capacity: '20%',
      connections: '4',
      inTransition: true,
    },
    {
      name: 'DRPNWMMCLEAST',
      status: 'C',
      capacity: '92%',
      connections: '160',
      inTransition: false,
    },
    {
      name: 'DRPNWMMCLEUR',
      status: 'C',
      capacity: '76%',
      connections: '87',
      inTransition: true,
    },
    {
      name: 'DRPNWMMCLCONT',
      status: 'B',
      capacity: '34%',
      connections: '5',
      inTransition: false,
    },
  ],
};
