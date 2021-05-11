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
      description:
        'YourWindowsService has crashed or failed to start. Troubleshooting instructions: https://company.com/Your+Windows+Service+Name+Support',
      createDate: '2021-05-09T11:00:00',
    },
    {
      id: '2',
      source: 'CompanyServer01',
      name: 'YourWindowsService is not running',
      description:
        'YourWindowsService has crashed or failed to start. Troubleshooting instructions: https://company.com/Your+Windows+Service+Name+Support',
      createDate: '2021-05-09T12:30:00',
    },
    {
      id: '3',
      source: 'CompanyServer03',
      name: 'YourWindowsService is not running',
      description:
        'YourWindowsService has crashed or failed to start. Troubleshooting instructions: https://company.com/Your+Windows+Service+Name+Support',
      createDate: '2021-05-09T13:00:00',
    },
    {
      id: '4',
      source: 'CompanyServer05',
      name: 'YourWindowsService is not running',
      description:
        'YourWindowsService has crashed or failed to start. Troubleshooting instructions: https://company.com/Your+Windows+Service+Name+Support',
      createDate: '2021-05-09T14:30:00',
    },
    {
      id: '5',
      source: 'CompanyServer02',
      name: 'YourWindowsService is not running',
      description:
        'YourWindowsService has crashed or failed to start. Troubleshooting instructions: https://company.com/Your+Windows+Service+Name+Support',
      createDate: '2021-05-09T15:00:00',
    },
    {
      id: '6',
      source: 'CompanyServer01',
      name: 'YourWindowsService wrote an error to the EventLog',
      description:
        'YourWindowsService wrote an error to the EventLog and has generated an incident ticket: https://company.com/Your+EventLog+Error+Incident+Ticket+Number',
      createDate: '2021-05-10T23:59:00',
    },
  ],
  site24x7: [
    {
      id: '1',
      businessUnit: 'Your-Company-BU-Name',
      name: 'app1.company.com health check',
      monitorUrl: 'https://app1.company.com/v1/healthcheck',
      availability: '100%',
      responseTime: '0.125 secs',
      downtimes: '0',
      lastPolled: '2 minutes ago',
    },
    {
      id: '2',
      businessUnit: 'Your-Company-BU-Name',
      name: 'app2.company.com health check',
      monitorUrl: 'https://10.0.0.1/health',
      availability: '100%',
      responseTime: '0.068 secs',
      downtimes: '0',
      lastPolled: '3 minutes ago',
    },
    {
      id: '3',
      businessUnit: 'Your-Company-BU-Name',
      name: 'app3.company.com health check',
      monitorUrl: 'https://app3.company.com/pulse',
      availability: '99%',
      responseTime: '0.092 secs',
      downtimes: '1',
      lastPolled: '1 minutes ago',
    },
    {
      id: '4',
      businessUnit: 'Your-Company-BU-Name',
      name: 'app4.company.com health check',
      monitorUrl: 'https://app4.company.com/v1/health',
      availability: '100%',
      responseTime: '0.077 secs',
      downtimes: '0',
      lastPolled: '5 minutes ago',
    },
    {
      id: '5',
      businessUnit: 'Your-Company-BU-Name',
      name: 'app5.company.com health check',
      monitorUrl: 'https://app5.company.com/v1/healthcheck',
      availability: '99%',
      responseTime: '0.105 secs',
      downtimes: '1',
      lastPolled: '9 minutes ago',
    },
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
};
